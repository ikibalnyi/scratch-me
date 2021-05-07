/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/$$virtual/fp-ts-contrib-virtual-b9e220308b/0/cache/fp-ts-contrib-npm-0.1.23-05b7790e17-69313dd8e3.zip/node_modules/fp-ts-contrib/es6/ReaderIO.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/fp-ts-contrib-virtual-b9e220308b/0/cache/fp-ts-contrib-npm-0.1.23-05b7790e17-69313dd8e3.zip/node_modules/fp-ts-contrib/es6/ReaderIO.js ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromIO": () => /* binding */ fromIO,
/* harmony export */   "fromIOK": () => /* binding */ fromIOK,
/* harmony export */   "fromReader": () => /* binding */ fromReader,
/* harmony export */   "ask": () => /* binding */ ask,
/* harmony export */   "asks": () => /* binding */ asks,
/* harmony export */   "local": () => /* binding */ local,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "apFirst": () => /* binding */ apFirst,
/* harmony export */   "apSecond": () => /* binding */ apSecond,
/* harmony export */   "of": () => /* binding */ of,
/* harmony export */   "chain": () => /* binding */ chain,
/* harmony export */   "chainFirst": () => /* binding */ chainFirst,
/* harmony export */   "chainIOK": () => /* binding */ chainIOK,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "Functor": () => /* binding */ Functor,
/* harmony export */   "Applicative": () => /* binding */ Applicative,
/* harmony export */   "Apply": () => /* binding */ Apply,
/* harmony export */   "Monad": () => /* binding */ Monad,
/* harmony export */   "readerIO": () => /* binding */ readerIO,
/* harmony export */   "run": () => /* binding */ run
/* harmony export */ });
/* harmony import */ var fp_ts_es6_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fp-ts/es6/function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var fp_ts_es6_IO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/es6/IO */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/IO.js");
/* harmony import */ var fp_ts_es6_pipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fp-ts/es6/pipeable */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/pipeable.js");
/* harmony import */ var fp_ts_es6_ReaderT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fp-ts/es6/ReaderT */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReaderT.js");




var T = (0,fp_ts_es6_ReaderT__WEBPACK_IMPORTED_MODULE_0__.getReaderM)(fp_ts_es6_IO__WEBPACK_IMPORTED_MODULE_1__.io);
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 0.1.0
 */
var fromIO = T.fromM;
/**
 * @category constructors
 * @since 0.1.10
 */
var fromIOK = function (f) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return fromIO(f.apply(void 0, a));
}; };
/**
 * @category constructors
 * @since 0.1.0
 */
var fromReader = T.fromReader;
/**
 * @category constructors
 * @since 0.1.0
 */
var ask = T.ask;
/**
 * @category constructors
 * @since 0.1.0
 */
var asks = T.asks;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 0.1.0
 */
var local = function (f) { return function (ma) { return T.local(ma, f); }; };
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
/**
 * @category Functor
 * @since 0.1.18
 */
var map = function (f) { return function (fa) { return T.map(fa, f); }; };
/**
 * @category Apply
 * @since 0.1.18
 */
var ap = function (fa) { return function (fab) {
    return T.ap(fab, fa);
}; };
/**
 * @category Apply
 * @since 0.1.18
 */
var apFirst = function (fb) { return function (fa) {
    return (0,fp_ts_es6_pipeable__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, map(function (a) { return function (_) { return a; }; }), ap(fb));
}; };
/**
 * @category Apply
 * @since 0.1.18
 */
var apSecond = function (fb) { return function (fa) {
    return (0,fp_ts_es6_pipeable__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, map(function () { return function (b) { return b; }; }), ap(fb));
}; };
/**
 * @category Applicative
 * @since 0.1.18
 */
var of = T.of;
/**
 * @category Monad
 * @since 0.1.18
 */
var chain = function (f) { return function (ma) {
    return T.chain(ma, f);
}; };
/**
 * @category Monad
 * @since 0.1.18
 */
var chainFirst = function (f) { return function (ma) { return T.chain(ma, function (a) { return T.map(f(a), function () { return a; }); }); }; };
/**
 * @category Monad
 * @since 0.1.10
 */
var chainIOK = function (f) {
    return chain(fromIOK(f));
};
/**
 * @category Monad
 * @since 0.1.18
 */
var flatten = function (mma) { return T.chain(mma, fp_ts_es6_function__WEBPACK_IMPORTED_MODULE_3__.identity); };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 0.1.0
 */
var URI = 'ReaderIO';
/**
 * @category instances
 * @since 0.1.18
 */
var Functor = {
    URI: URI,
    map: T.map
};
/**
 * @category instances
 * @since 0.1.18
 */
var Applicative = {
    URI: URI,
    map: T.map,
    ap: T.ap,
    of: of
};
/**
 * @category instances
 * @since 0.1.18
 */
var Apply = {
    URI: URI,
    map: T.map,
    ap: T.ap
};
/**
 * @category instances
 * @since 0.1.18
 */
var Monad = {
    URI: URI,
    map: T.map,
    ap: T.ap,
    chain: T.chain,
    of: of
};
/**
 * @category instances
 * @since 0.1.0
 */
var readerIO = {
    URI: URI,
    map: T.map,
    of: T.of,
    ap: T.ap,
    chain: T.chain
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 0.1.0
 */
var run = function (ma, r) { return ma(r)(); };


/***/ }),

/***/ "./.yarn/$$virtual/fp-ts-contrib-virtual-b9e220308b/0/cache/fp-ts-contrib-npm-0.1.23-05b7790e17-69313dd8e3.zip/node_modules/fp-ts-contrib/lib/ReaderIO.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/fp-ts-contrib-virtual-b9e220308b/0/cache/fp-ts-contrib-npm-0.1.23-05b7790e17-69313dd8e3.zip/node_modules/fp-ts-contrib/lib/ReaderIO.js ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var function_1 = __webpack_require__(/*! fp-ts/lib/function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var I = __importStar(__webpack_require__(/*! fp-ts/lib/IO */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/IO.js"));
var pipeable_1 = __webpack_require__(/*! fp-ts/lib/pipeable */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/pipeable.js");
var ReaderT_1 = __webpack_require__(/*! fp-ts/lib/ReaderT */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReaderT.js");
var T = ReaderT_1.getReaderM(I.io);
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 0.1.0
 */
exports.fromIO = T.fromM;
/**
 * @category constructors
 * @since 0.1.10
 */
exports.fromIOK = function (f) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return exports.fromIO(f.apply(void 0, a));
}; };
/**
 * @category constructors
 * @since 0.1.0
 */
exports.fromReader = T.fromReader;
/**
 * @category constructors
 * @since 0.1.0
 */
exports.ask = T.ask;
/**
 * @category constructors
 * @since 0.1.0
 */
exports.asks = T.asks;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 0.1.0
 */
exports.local = function (f) { return function (ma) { return T.local(ma, f); }; };
// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------
/**
 * @category Functor
 * @since 0.1.18
 */
exports.map = function (f) { return function (fa) { return T.map(fa, f); }; };
/**
 * @category Apply
 * @since 0.1.18
 */
exports.ap = function (fa) { return function (fab) {
    return T.ap(fab, fa);
}; };
/**
 * @category Apply
 * @since 0.1.18
 */
exports.apFirst = function (fb) { return function (fa) {
    return pipeable_1.pipe(fa, exports.map(function (a) { return function (_) { return a; }; }), exports.ap(fb));
}; };
/**
 * @category Apply
 * @since 0.1.18
 */
exports.apSecond = function (fb) { return function (fa) {
    return pipeable_1.pipe(fa, exports.map(function () { return function (b) { return b; }; }), exports.ap(fb));
}; };
/**
 * @category Applicative
 * @since 0.1.18
 */
exports.of = T.of;
/**
 * @category Monad
 * @since 0.1.18
 */
exports.chain = function (f) { return function (ma) {
    return T.chain(ma, f);
}; };
/**
 * @category Monad
 * @since 0.1.18
 */
exports.chainFirst = function (f) { return function (ma) { return T.chain(ma, function (a) { return T.map(f(a), function () { return a; }); }); }; };
/**
 * @category Monad
 * @since 0.1.10
 */
exports.chainIOK = function (f) {
    return exports.chain(exports.fromIOK(f));
};
/**
 * @category Monad
 * @since 0.1.18
 */
exports.flatten = function (mma) { return T.chain(mma, function_1.identity); };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 0.1.0
 */
exports.URI = 'ReaderIO';
/**
 * @category instances
 * @since 0.1.18
 */
exports.Functor = {
    URI: exports.URI,
    map: T.map
};
/**
 * @category instances
 * @since 0.1.18
 */
exports.Applicative = {
    URI: exports.URI,
    map: T.map,
    ap: T.ap,
    of: exports.of
};
/**
 * @category instances
 * @since 0.1.18
 */
exports.Apply = {
    URI: exports.URI,
    map: T.map,
    ap: T.ap
};
/**
 * @category instances
 * @since 0.1.18
 */
exports.Monad = {
    URI: exports.URI,
    map: T.map,
    ap: T.ap,
    chain: T.chain,
    of: exports.of
};
/**
 * @category instances
 * @since 0.1.0
 */
exports.readerIO = {
    URI: exports.URI,
    map: T.map,
    of: T.of,
    ap: T.ap,
    chain: T.chain
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 0.1.0
 */
exports.run = function (ma, r) { return ma(r)(); };


/***/ }),

/***/ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Canvas.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Canvas.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderTo = exports.bindWithContext = exports.bind = exports.withContext = exports.strokePath = exports.fillPath = exports.addColorStop = exports.translate = exports.transform = exports.strokeText = exports.strokeRect = exports.stroke = exports.setTransformMatrix = exports.setTransform = exports.setLineDash = exports.scale = exports.save = exports.rotate = exports.restore = exports.rect = exports.quadraticCurveTo = exports.putImageDataFull = exports.putImageData = exports.moveTo = exports.measureText = exports.lineTo = exports.isPointInStroke = exports.isPointInPath = exports.getTransform = exports.getLineDash = exports.getImageData = exports.fillText = exports.fillRect = exports.fill = exports.ellipse = exports.drawImageFull = exports.drawImageScale = exports.drawImage = exports.drawFocusIfNeeded = exports.createRadialGradient = exports.createPattern = exports.createLinearGradient = exports.createImageDataCopy = exports.createImageData = exports.closePath = exports.clip = exports.clearRect = exports.bezierCurveTo = exports.beginPath = exports.arcTo = exports.arc = exports.setTextBaseline = exports.getTextBaseline = exports.setTextAlign = exports.getTextAlign = exports.setStrokeStyle = exports.setShadowOffsetY = exports.setShadowOffsetX = exports.setShadowColor = exports.setShadowBlur = exports.setMiterLimit = exports.setLineWidth = exports.setLineJoin = exports.setLineDashOffset = exports.setLineCap = exports.setImageSmoothingEnabled = exports.setGlobalCompositeOperation = exports.setGlobalAlpha = exports.setFont = exports.getFont = exports.setFillStyle = exports.toDataURL = exports.setDimensions = exports.getDimensions = exports.setHeight = exports.getHeight = exports.setWidth = exports.getWidth = exports.getContext2D = exports.getCanvasElementById = exports.unsafeGetContext2D = exports.unsafeGetCanvasElementById = void 0;
/**
 * The `Canvas` module contains all the functions necessary to interact with the HTML
 * Canvas API. `graphics-ts` wraps all canvas operations in an `IO<A>` to allow for
 * chaining multiple effectful calls to the HTML Canvas API.
 *
 * For example, taking the example of [drawing a triangle](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) from the MDN Web Docs, the code
 * without `graphics-ts` looks like this.
 *
 * ```ts
 * const draw = () => {
 *   var canvas = document.getElementById('canvas')
 *
 *   if (canvas.getContext) {
 *     var ctx = canvas.getContext('2d')
 *
 *     ctx.beginPath();
 *     ctx.fillStyle = 'black'
 *     ctx.moveTo(75, 50)
 *     ctx.lineTo(100, 75)
 *     ctx.lineTo(100, 25)
 *     ctx.fill()
 *   }
 * }
 * ```
 *
 * With `graphics-ts`, the above code becomes
 *
 * ```ts
 * import { error } from 'fp-ts/lib/Console'
 * import { pipe } from 'fp-ts/lib/pipeable'
 * import * as R from 'fp-ts-contrib/lib/ReaderIO'
 * import * as C from 'graphics-ts/lib/Canvas'
 * import * as Color from 'graphics-ts/lib/Color'
 * import * as S from 'graphics-ts/lib/Shape'
 *
 * const canvasId = 'canvas'
 *
 * const triangle: C.Render<void> = C.fillPath(
 *   pipe(
 *     C.setFillStyle(pipe(Color.black, Color.toCss)),
 *     R.chain(() => C.moveTo(S.point(75, 50))),
 *     R.chain(() => C.lineTo(S.point(100, 75))),
 *     R.chain(() => C.lineTo(S.point(100, 25)))
 *   )
 * )
 *
 * C.renderTo(canvasId, () => error(`[ERROR]: Unable to find canvas with id ${canvasId}`))(triangle)()
 * ```
 *
 * While this may seem somewhat verbose compared to its non-functional counterpart above,
 * the real power of the `Canvas` module is apparent when it is abstracted away by the
 * `Drawing` module.
 *
 * Adapted from https://github.com/purescript-contrib/purescript-canvas.
 *
 * @since 1.0.0
 */
var R = __webpack_require__(/*! fp-ts-contrib/lib/ReaderIO */ "./.yarn/$$virtual/fp-ts-contrib-virtual-b9e220308b/0/cache/fp-ts-contrib-npm-0.1.23-05b7790e17-69313dd8e3.zip/node_modules/fp-ts-contrib/lib/ReaderIO.js");
var IO = __webpack_require__(/*! fp-ts/lib/IO */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/IO.js");
var O = __webpack_require__(/*! fp-ts/lib/Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js");
var RA = __webpack_require__(/*! fp-ts/lib/ReadonlyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyArray.js");
var Apply_1 = __webpack_require__(/*! fp-ts/lib/Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js");
var function_1 = __webpack_require__(/*! fp-ts/lib/function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var pipeable_1 = __webpack_require__(/*! fp-ts/lib/pipeable */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/pipeable.js");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * **[UNSAFE]** Gets a canvas element by id.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.unsafeGetCanvasElementById = function (id) {
    return document.getElementById(id);
};
/**
 * **[UNSAFE]** Gets the 2D graphics context for a canvas element.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.unsafeGetContext2D = function (c) {
    return c.getContext('2d');
};
/**
 * Gets an canvas element by id, or `None` if the element does not exist or is not an
 * instance of `HTMLCanvasElement`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.getCanvasElementById = function (id) { return function () {
    var canvas = exports.unsafeGetCanvasElementById(id);
    return canvas instanceof HTMLCanvasElement ? O.some(canvas) : O.none;
}; };
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Gets the 2D graphics context for a canvas element.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getContext2D = function (c) { return IO.of(exports.unsafeGetContext2D(c)); };
/**
 * Gets the canvas width in pixels.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getWidth = function (c) { return function () { return c.width; }; };
/**
 * Sets the width of the canvas in pixels.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setWidth = function (w) { return function (c) { return function () {
    c.width = w;
    return c;
}; }; };
/**
 * Gets the canvas height in pixels.
 *
 *  @category combinators
 * @since 1.0.0
 */
exports.getHeight = function (c) { return function () { return c.height; }; };
/**
 * Sets the height of the canvas in pixels.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setHeight = function (h) { return function (c) { return function () {
    c.height = h;
    return c;
}; }; };
/**
 * Gets the dimensions of the canvas in pixels.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getDimensions = function (c) {
    return Apply_1.sequenceS(IO.io)({ height: exports.getHeight(c), width: exports.getWidth(c) });
};
/**
 * Sets the dimensions of the canvas in pixels.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setDimensions = function (d) {
    return pipeable_1.pipe(exports.setWidth(d.width), R.chain(function () { return exports.setHeight(d.height); }));
};
/**
 * Create a data URL for the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.toDataURL = function (c) { return function () { return c.toDataURL(); }; };
/**
 * Sets the current fill style for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setFillStyle = function (s) { return function (ctx) { return function () {
    ctx.fillStyle = s;
    return ctx;
}; }; };
/**
 * Gets the current font.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getFont = function (ctx) { return function () { return ctx.font; }; };
/**
 * Sets the current font.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setFont = function (f) { return function (ctx) { return function () {
    ctx.font = f;
    return ctx;
}; }; };
/**
 * Sets the current global alpha for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setGlobalAlpha = function (a) { return function (ctx) { return function () {
    ctx.globalAlpha = a;
    return ctx;
}; }; };
/**
 * Sets the current global composite operation type for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setGlobalCompositeOperation = function (gco) { return function (ctx) { return function () {
    ctx.globalCompositeOperation = gco;
    return ctx;
}; }; };
/**
 * Sets the current image smoothing property for the canvas context. Determines whether scaled images are smoothed
 * (`true`, default) or not (`false`).
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setImageSmoothingEnabled = function (v) { return function (ctx) { return function () {
    ctx.imageSmoothingEnabled = v;
    return ctx;
}; }; };
/**
 * Sets the current line cap type for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setLineCap = function (c) { return function (ctx) { return function () {
    ctx.lineCap = c;
    return ctx;
}; }; };
/**
 * Sets the current line dash offset, or "phase", for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setLineDashOffset = function (o) { return function (ctx) { return function () {
    ctx.lineDashOffset = o;
    return ctx;
}; }; };
/**
 * Sets the current line join type for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setLineJoin = function (j) { return function (ctx) { return function () {
    ctx.lineJoin = j;
    return ctx;
}; }; };
/**
 * Sets the current line width for the canvas context in pixels.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setLineWidth = function (w) { return function (ctx) { return function () {
    ctx.lineWidth = w;
    return ctx;
}; }; };
/**
 * Sets the current miter limit for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setMiterLimit = function (l) { return function (ctx) { return function () {
    ctx.miterLimit = l;
    return ctx;
}; }; };
/**
 * Sets the current shadow blur radius for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setShadowBlur = function (b) { return function (ctx) { return function () {
    ctx.shadowBlur = b;
    return ctx;
}; }; };
/**
 * Sets the current shadow color for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setShadowColor = function (c) { return function (ctx) { return function () {
    ctx.shadowColor = c;
    return ctx;
}; }; };
/**
 * Sets the current shadow x-offset for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setShadowOffsetX = function (ox) { return function (ctx) { return function () {
    ctx.shadowOffsetX = ox;
    return ctx;
}; }; };
/**
 * Sets the current shadow y-offset for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setShadowOffsetY = function (oy) { return function (ctx) { return function () {
    ctx.shadowOffsetY = oy;
    return ctx;
}; }; };
/**
 * Sets the current stroke style for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setStrokeStyle = function (s) { return function (ctx) { return function () {
    ctx.strokeStyle = s;
    return ctx;
}; }; };
/**
 * Gets the current text alignment.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getTextAlign = function (ctx) { return function () { return ctx.textAlign; }; };
/**
 * Sets the current text alignment.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setTextAlign = function (ta) { return function (ctx) { return function () {
    ctx.textAlign = ta;
    return ctx;
}; }; };
/**
 * Gets the current text baseline.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getTextBaseline = function (ctx) { return function () { return ctx.textBaseline; }; };
/**
 * Sets the current text baseline.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setTextBaseline = function (tb) { return function (ctx) { return function () {
    ctx.textBaseline = tb;
    return ctx;
}; }; };
/**
 * Render an arc.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.arc = function (a) { return function (ctx) { return function () {
    ctx.arc(a.x, a.y, a.r, a.start, a.end, a.anticlockwise);
    return ctx;
}; }; };
/**
 * Render an arc that is automatically connected to the path's latest point.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.arcTo = function (x1, y1, x2, y2, r) { return function (ctx) { return function () {
    ctx.arcTo(x1, y1, x2, y2, r);
    return ctx;
}; }; };
/**
 * Begin a path on the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.beginPath = function (ctx) { return function () {
    ctx.beginPath();
    return ctx;
}; };
/**
 * Draw a cubic Bézier curve.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.bezierCurveTo = function (cpx1, cpy1, cpx2, cpy2, x, y) { return function (ctx) { return function () {
    ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x, y);
    return ctx;
}; }; };
/**
 * Set the pixels in the specified rectangle back to transparent black.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.clearRect = function (r) { return function (ctx) { return function () {
    ctx.clearRect(r.x, r.y, r.width, r.height);
    return ctx;
}; }; };
/**
 * Clip the current path on the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.clip = function (f, p) { return function (ctx) { return function () {
    if (typeof p !== 'undefined') {
        ctx.clip(p, f);
    }
    else if (typeof f !== 'undefined') {
        ctx.clip(f);
    }
    else {
        ctx.clip();
    }
    return ctx;
}; }; };
/**
 * Closes the current canvas path.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.closePath = function (ctx) { return function () {
    ctx.closePath();
    return ctx;
}; };
/**
 * Gets `ImageData` for the specified rectangle.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.createImageData = function (sw, sh) { return function (ctx) { return function () {
    return ctx.createImageData(sw, sh);
}; }; };
/**
 * Creates a copy of an existing `ImageData` object.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.createImageDataCopy = function (data) { return function (ctx) { return function () {
    return ctx.createImageData(data);
}; }; };
/**
 * Creates a linear `CanvasGradient` object.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.createLinearGradient = function (x0, y0, x1, y1) { return function (ctx) { return function () { return ctx.createLinearGradient(x0, y0, x1, y1); }; }; };
/**
 * Creates a new canvas pattern (repeatable image).
 *
 * @category combinators
 * @since 1.0.0
 */
exports.createPattern = function (s, r) { return function (ctx) { return function () { return O.fromNullable(ctx.createPattern(s, r)); }; }; };
/**
 * Creates a radial `CanvasGradient` object.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.createRadialGradient = function (x0, y0, r0, x1, y1, r1) { return function (ctx) { return function () {
    return ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
}; }; };
/**
 * Draws a focus ring around the current or given path, if the specified element is focused.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.drawFocusIfNeeded = function (el, p) { return function (ctx) { return function () {
    if (typeof p !== 'undefined') {
        ctx.drawFocusIfNeeded(p, el);
    }
    else {
        ctx.drawFocusIfNeeded(el);
    }
    return ctx;
}; }; };
/**
 * Render an image.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.drawImage = function (s, ox, oy) { return function (ctx) { return function () {
    ctx.drawImage(s, ox, oy);
    return ctx;
}; }; };
/**
 * Draws an image to the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.drawImageScale = function (s, ox, oy, w, h) { return function (ctx) { return function () {
    ctx.drawImage(s, ox, oy, w, h);
    return ctx;
}; }; };
/**
 * Draws an image to the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.drawImageFull = function (s, ox, oy, w, h, cox, coy, ciw, cih) { return function (ctx) { return function () {
    ctx.drawImage(s, ox, oy, w, h, cox, coy, ciw, cih);
    return ctx;
}; }; };
/**
 * Render an ellipse.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.ellipse = function (e) { return function (ctx) { return function () {
    ctx.ellipse(e.x, e.y, e.rx, e.ry, e.rotation, e.start, e.end, e.anticlockwise);
    return ctx;
}; }; };
/**
 * Fill the current path on the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.fill = function (f, p) { return function (ctx) { return function () {
    if (typeof p !== 'undefined') {
        ctx.fill(p, f);
    }
    else if (typeof f !== 'undefined') {
        ctx.fill(f);
    }
    else {
        ctx.fill();
    }
    return ctx;
}; }; };
/**
 * Render a filled rectangle.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.fillRect = function (r) { return function (ctx) { return function () {
    ctx.fillRect(r.x, r.y, r.width, r.height);
    return ctx;
}; }; };
/**
 * Render filled text.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.fillText = function (t, x, y, mw) { return function (ctx) { return function () {
    if (typeof mw !== 'undefined') {
        ctx.fillText(t, x, y, mw);
    }
    else {
        ctx.fillText(t, x, y);
    }
    return ctx;
}; }; };
/**
 * Gets the image data for the specified portion of the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getImageData = function (r) { return function (ctx) { return function () {
    return ctx.getImageData(r.x, r.y, r.width, r.height);
}; }; };
/**
 * Gets the current line dash pattern for the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getLineDash = function (ctx) { return function () { return RA.fromArray(ctx.getLineDash()); }; };
/**
 * Gets the current transformation matrix being applied to the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.getTransform = function (ctx) { return function () { return ctx.getTransform(); }; };
/**
 * Determines if the specified point is contained in the current path.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.isPointInPath = function (p, rule, path) { return function (ctx) { return function () {
    if (typeof path !== 'undefined') {
        return ctx.isPointInPath(path, p.x, p.y, rule);
    }
    else {
        return typeof rule !== 'undefined' ? ctx.isPointInPath(p.x, p.y, rule) : ctx.isPointInPath(p.x, p.y);
    }
}; }; };
/**
 * Determines if the specified point is inside the area contained by the stroking of a path.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.isPointInStroke = function (p, path) { return function (ctx) { return function () {
    return typeof path !== 'undefined' ? ctx.isPointInStroke(path, p.x, p.y) : ctx.isPointInStroke(p.x, p.y);
}; }; };
/**
 * Move the canvas path to the specified point while drawing a line segment.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.lineTo = function (p) { return function (ctx) { return function () {
    ctx.lineTo(p.x, p.y);
    return ctx;
}; }; };
/**
 * Get the text measurements for the specified text.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.measureText = function (t) { return function (ctx) { return function () { return ctx.measureText(t); }; }; };
/**
 * Move the canvas path to the specified point without drawing a line segment.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.moveTo = function (p) { return function (ctx) { return function () {
    ctx.moveTo(p.x, p.y);
    return ctx;
}; }; };
/**
 * Sets the image data for the specified portion of the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.putImageData = function (data, dx, dy) { return function (ctx) { return function () {
    ctx.putImageData(data, dx, dy);
    return ctx;
}; }; };
/**
 * Sets the image data for the specified portion of the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.putImageDataFull = function (data, dx, dy, dirtyX, dirtyY, dirtyW, dirtyH) { return function (ctx) { return function () {
    ctx.putImageData(data, dx, dy, dirtyX, dirtyY, dirtyW, dirtyH);
    return ctx;
}; }; };
/**
 * Draws a quadratic Bézier curve.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.quadraticCurveTo = function (cpx, cpy, x, y) { return function (ctx) { return function () {
    ctx.quadraticCurveTo(cpx, cpy, x, y);
    return ctx;
}; }; };
/**
 * Render a rectangle.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.rect = function (r) { return function (ctx) { return function () {
    ctx.rect(r.x, r.y, r.width, r.height);
    return ctx;
}; }; };
/**
 * Restore the previous canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.restore = function (ctx) { return function () {
    ctx.restore();
    return ctx;
}; };
/**
 * Apply rotation to the current canvas context transform.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.rotate = function (a) { return function (ctx) { return function () {
    ctx.rotate(a);
    return ctx;
}; }; };
/**
 * Save the current canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.save = function (ctx) { return function () {
    ctx.save();
    return ctx;
}; };
/**
 * Apply scale to the current canvas context transform.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.scale = function (x, y) { return function (ctx) { return function () {
    ctx.scale(x, y);
    return ctx;
}; }; };
/**
 * Sets the current line dash pattern used when stroking lines.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setLineDash = function (ss) { return function (ctx) { return function () {
    ctx.setLineDash(RA.toArray(ss));
    return ctx;
}; }; };
/**
 * Resets the current transformation to the identity matrix, and then applies the transform specified
 * to the current canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setTransform = function (a, b, c, d, e, f) { return function (ctx) { return function () {
    ctx.setTransform(a, b, c, d, e, f);
    return ctx;
}; }; };
/**
 * Resets the current transformation to the identity matrix, and then applies the transform specified
 * to the current canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.setTransformMatrix = function (matrix) { return function (ctx) { return function () {
    ctx.setTransform(matrix);
    return ctx;
}; }; };
/**
 * Stroke the current path on the canvas.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.stroke = function (p) { return function (ctx) { return function () {
    if (typeof p !== 'undefined') {
        ctx.stroke(p);
    }
    else {
        ctx.stroke();
    }
    return ctx;
}; }; };
/**
 * Render a stroked rectangle.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.strokeRect = function (r) { return function (ctx) { return function () {
    ctx.strokeRect(r.x, r.y, r.width, r.height);
    return ctx;
}; }; };
/**
 * Render stroked text.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.strokeText = function (t, x, y, mw) { return function (ctx) { return function () {
    if (typeof mw !== 'undefined') {
        ctx.strokeText(t, x, y, mw);
    }
    else {
        ctx.strokeText(t, x, y);
    }
    return ctx;
}; }; };
/**
 * Apply the specified transformation matrix to the canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.transform = function (m11, m12, m21, m22, m31, m32) { return function (ctx) { return function () {
    ctx.transform(m11, m12, m21, m22, m31, m32);
    return ctx;
}; }; };
/**
 * Translate the current canvas context transform.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.translate = function (x, y) { return function (ctx) { return function () {
    ctx.translate(x, y);
    return ctx;
}; }; };
/**
 * Add a single color stop to a `CanvasGradient` object.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.addColorStop = function (o, c) { return function (g) { return function () {
    g.addColorStop(o, c);
    return g;
}; }; };
/**
 * Convenience function for drawing a filled path.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.fillPath = function (f) {
    return pipeable_1.pipe(exports.beginPath, R.chain(function () { return f; }), R.chainFirst(function () { return exports.fill(); }));
};
/**
 * Convenience function for drawing a stroked path.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.strokePath = function (f) {
    return pipeable_1.pipe(exports.beginPath, R.chain(function () { return f; }), R.chainFirst(function () { return exports.stroke(); }));
};
/**
 * A convenience function which allows for running an action while preserving the existing
 * canvas context.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.withContext = function (f) {
    return pipeable_1.pipe(exports.save, R.chain(function () { return f; }), R.chainFirst(function () { return exports.restore; }));
};
// TODO: remove in version 2.0.0
/**
 * Binds an event handler to the canvas element.
 *
 * @deprecated since 1.1.0
 * @category combinators
 * @since 1.0.0
 */
exports.bind = function (t, f) { return function (c) { return function () {
    c.addEventListener(t, f);
    return c;
}; }; };
// TODO: rename in version 2.0.0
/**
 * Binds an event handler to the canvas element.
 *
 * @category combinators
 * @since 1.1.0
 */
exports.bindWithContext = function (type, f) { return function (ctx) { return function () {
    ctx.canvas.addEventListener(type, function (e) { return f(e)(ctx)(); });
    return ctx;
}; }; };
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Executes a `Render` effect for a canvas with the specified `canvasId`, or `onCanvasNotFound()` if a canvas with
 * the specified `canvasId` does not exist.
 *
 * @since 1.0.0
 */
exports.renderTo = function (canvasId, onCanvasNotFound) { return function (r) {
    return pipeable_1.pipe(exports.getCanvasElementById(canvasId), IO.chain(O.fold(onCanvasNotFound, function_1.flow(exports.getContext2D, IO.chain(r)))));
}; };


/***/ }),

/***/ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Color.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Color.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @since 1.0.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCss = exports.white = exports.black = exports.hsl = exports.hsla = exports.hex = void 0;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Constructs a `Color` using a hexadecimal value.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.hex = function (value) { return ({ _tag: 'Hex', value: value }); };
/**
 * Constructs a `Color` using the specified hue, saturation, lightness, and alpha.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.hsla = function (h, s, l, a) { return ({ _tag: 'Hsla', h: h, s: s, l: l, a: a }); };
/**
 * Constructs a fully opaque `Color` using the specified hue, saturation, and lightness.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.hsl = function (h, s, l) { return exports.hsla(h, s, l, 1); };
/**
 * @category constructors
 * @since 1.0.0
 */
exports.black = exports.hsl(0, 0, 0);
/**
 * @category constructors
 * @since 1.0.0
 */
exports.white = exports.hsl(360, 1, 1);
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Converts a `Color` into a valid CSS string.
 *
 * @category destructors
 * @since 1.0.0
 */
exports.toCss = function (c) {
    switch (c._tag) {
        case 'Hex':
            return c.value;
        case 'Hsla': {
            var h = c.h, s = c.s, l = c.l, a = c.a;
            var toString_1 = function (n) { return Math.round(n * 100.0) / 100; };
            var hue = toString_1(h);
            var saturation = toString_1(s * 100.0) + '%';
            var lightness = toString_1(l * 100.0) + '%';
            var alpha = String(a);
            return a === 1
                ? "hsl(" + hue + ", " + saturation + ", " + lightness + ")"
                : "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
        }
    }
};


/***/ }),

/***/ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Drawing.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Drawing.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.monoidDrawing = exports.monoidShadow = exports.monoidOutlineStyle = exports.monoidFillStyle = exports.render = exports.renderShape = exports.shadowOffset = exports.shadowColor = exports.shadowBlur = exports.withShadow = exports.translate = exports.text = exports.scale = exports.rotate = exports.many = exports.lineWidth = exports.outlineColor = exports.outline = exports.fillStyle = exports.fill = exports.clipped = void 0;
/**
 * The `Drawing` module abstracts away the repetitive calls to the HTML Canvas API that are required
 * when using the `Canvas` module directly and instead allows us to be more declarative with our code.
 *
 * Taking the MDN example from the `Canvas` documentation,
 *
 * ```ts
 * import { error } from 'fp-ts/lib/Console'
 * import { pipe } from 'fp-ts/lib/pipeable'
 * import * as R from 'fp-ts-contrib/lib/ReaderIO'
 * import * as C from 'graphics-ts/lib/Canvas'
 * import * as Color from 'graphics-ts/lib/Color'
 * import * as S from 'graphics-ts/lib/Shape'
 *
 * const canvasId = 'canvas'
 *
 * const triangle: C.Render<void> = C.fillPath(
 *   pipe(
 *     C.setFillStyle(pipe(Color.black, Color.toCss)),
 *     R.chain(() => C.moveTo(S.point(75, 50))),
 *     R.chain(() => C.lineTo(S.point(100, 75))),
 *     R.chain(() => C.lineTo(S.point(100, 25)))
 *   )
 * )
 *
 * C.renderTo(canvasId, () => error(`[ERROR]: Unable to find canvas with id ${canvasId}`))(triangle)()
 * ```
 *
 * the `triangle` renderer above becomes the following
 *
 * ```ts
 * import { error } from 'fp-ts/lib/Console'
 * import * as RA from 'fp-ts/lib/ReadonlyArray'
 * import * as C from 'graphics-ts/lib/Canvas'
 * import * as Color from 'graphics-ts/lib/Color'
 * import * as D from 'graphics-ts/lib/Drawing'
 * import * as S from 'graphics-ts/lib/Shape'
 *
 * const canvasId = 'canvas'
 *
 * const triangle: C.Render<void> = D.render(
 *   D.fill(
 *     S.path(RA.readonlyArray)([S.point(75, 50), S.point(100, 75), S.point(100, 25)]),
 *     D.fillStyle(Color.black)
 *   )
 * )
 *
 * C.renderTo(canvasId, () => error(`[ERROR]: Unable to find canvas with id ${canvasId}`))(triangle)()
 * ```
 *
 * Adapted from https://github.com/purescript-contrib/purescript-drawing
 *
 * @since 1.0.0
 */
var IO = __webpack_require__(/*! fp-ts/lib/IO */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/IO.js");
var M = __webpack_require__(/*! fp-ts/lib/Monoid */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Monoid.js");
var O = __webpack_require__(/*! fp-ts/lib/Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js");
var RA = __webpack_require__(/*! fp-ts/lib/ReadonlyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyArray.js");
var function_1 = __webpack_require__(/*! fp-ts/lib/function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var pipeable_1 = __webpack_require__(/*! fp-ts/lib/pipeable */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/pipeable.js");
var R = __webpack_require__(/*! fp-ts-contrib/lib/ReaderIO */ "./.yarn/$$virtual/fp-ts-contrib-virtual-b9e220308b/0/cache/fp-ts-contrib-npm-0.1.23-05b7790e17-69313dd8e3.zip/node_modules/fp-ts-contrib/lib/ReaderIO.js");
var C = __webpack_require__(/*! ./Canvas */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Canvas.js");
var Color_1 = __webpack_require__(/*! ./Color */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Color.js");
var Font_1 = __webpack_require__(/*! ./Font */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Font.js");
var readonlyArrayMonoidDrawing = RA.getMonoid();
var getFirstMonoidColor = O.getFirstMonoid();
var getFirstMonoidNumber = O.getFirstMonoid();
var getFirstMonoidPoint = O.getFirstMonoid();
var traverseReaderIO = RA.readonlyArray.traverse(R.readerIO);
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Clips a `Drawing` using the specified `Shape`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.clipped = function (shape, drawing) { return ({
    _tag: 'Clipped',
    shape: shape,
    drawing: drawing
}); };
/**
 * Constructs a `Drawing` from a `Fill` `Shape`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.fill = function (shape, style) { return ({ _tag: 'Fill', shape: shape, style: style }); };
/**
 * Constructs a `FillStyle`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.fillStyle = function (c) { return ({ color: O.some(c) }); };
/**
 * Constructs a `Drawing` from an `Outline` `Shape`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.outline = function (shape, style) { return ({
    _tag: 'Outline',
    shape: shape,
    style: style
}); };
/**
 * Constructs an `OutlineStyle` from a `Color`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.outlineColor = function (c) { return ({
    color: O.some(c),
    lineWidth: O.none
}); };
/**
 * Constructs an `OutlineStyle` from a line width.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.lineWidth = function (w) { return ({
    color: O.none,
    lineWidth: O.some(w)
}); };
/**
 * Construct a single `Drawing` from a collection of `Many` `Drawing`s.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.many = function (drawings) { return ({ _tag: 'Many', drawings: drawings }); };
/**
 * Applies rotation to the transform of a `Drawing`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.rotate = function (angle, drawing) { return ({
    _tag: 'Rotate',
    angle: angle,
    drawing: drawing
}); };
/**
 * Applies scale to the transform of a `Drawing`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.scale = function (scaleX, scaleY, drawing) { return ({
    _tag: 'Scale',
    scaleX: scaleX,
    scaleY: scaleY,
    drawing: drawing
}); };
/**
 * Constructs a `Drawing` from `Text`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.text = function (font, x, y, style, text) { return ({
    _tag: 'Text',
    font: font,
    x: x,
    y: y,
    style: style,
    text: text
}); };
/**
 * Applies translation to the transform of a `Drawing`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.translate = function (translateX, translateY, drawing) { return ({
    _tag: 'Translate',
    translateX: translateX,
    translateY: translateY,
    drawing: drawing
}); };
/**
 * Applies `Shadow` to a `Drawing`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.withShadow = function (shadow, drawing) { return ({
    _tag: 'WithShadow',
    shadow: shadow,
    drawing: drawing
}); };
/**
 * Constructs a `Shadow` from a blur radius.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.shadowBlur = function (b) { return ({
    color: O.none,
    blur: O.some(b),
    offset: O.none
}); };
/**
 * Constructs a `Shadow` from a `Color`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.shadowColor = function (c) { return ({
    color: O.some(c),
    blur: O.none,
    offset: O.none
}); };
/**
 * Constructs a `Shadow` from an offset `Point`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.shadowOffset = function (o) { return ({
    color: O.none,
    blur: O.none,
    offset: O.some(o)
}); };
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
var applyStyle = function (fa, f) {
    return pipeable_1.pipe(fa, O.fold(function () { return IO.of; }, f));
};
/**
 * Renders a `Shape`.
 *
 * @category combinators
 * @since 1.1.0
 */
exports.renderShape = function (shape) {
    switch (shape._tag) {
        case 'Arc':
            return C.arc(shape);
        case 'Composite':
            return pipeable_1.pipe(traverseReaderIO(shape.shapes, exports.renderShape), R.chain(function () { return R.ask(); }));
        case 'Ellipse':
            return C.ellipse(shape);
        case 'Path':
            return pipeable_1.pipe(shape.points, RA.foldLeft(function () { return IO.of; }, function (head, tail) {
                return pipeable_1.pipe(C.moveTo(head), R.chain(function () { return traverseReaderIO(tail, C.lineTo); }), R.chain(function () { return (shape.closed ? C.closePath : IO.of); }));
            }));
        case 'Rect':
            return C.rect(shape);
    }
};
/**
 * Renders a `Drawing`.
 *
 * @category combinators
 * @since 1.0.0
 */
exports.render = function (drawing) {
    var go = function (d) {
        switch (d._tag) {
            case 'Clipped':
                return C.withContext(pipeable_1.pipe(C.beginPath, R.chain(function () { return exports.renderShape(d.shape); }), R.chain(function () { return C.clip(); }), R.chain(function () { return go(d.drawing); })));
            case 'Fill':
                return C.withContext(pipeable_1.pipe(applyStyle(d.style.color, function_1.flow(Color_1.toCss, C.setFillStyle)), R.chain(function () { return C.fillPath(exports.renderShape(d.shape)); })));
            case 'Many':
                return pipeable_1.pipe(traverseReaderIO(d.drawings, go), R.chain(function () { return R.ask(); }));
            case 'Outline':
                return C.withContext(pipeable_1.pipe(applyStyle(d.style.color, function_1.flow(Color_1.toCss, C.setStrokeStyle)), R.chain(function () { return applyStyle(d.style.lineWidth, C.setLineWidth); }), R.chain(function () { return C.strokePath(exports.renderShape(d.shape)); })));
            case 'Rotate':
                return C.withContext(pipeable_1.pipe(C.rotate(d.angle), R.chain(function () { return go(d.drawing); })));
            case 'Scale':
                return C.withContext(pipeable_1.pipe(C.scale(d.scaleX, d.scaleY), R.chain(function () { return go(d.drawing); })));
            case 'Text':
                return C.withContext(pipeable_1.pipe(C.setFont(Font_1.showFont.show(d.font)), R.chain(function () { return applyStyle(d.style.color, function_1.flow(Color_1.toCss, C.setFillStyle)); }), R.chain(function () { return C.fillText(d.text, d.x, d.y); })));
            case 'Translate':
                return C.withContext(pipeable_1.pipe(C.translate(d.translateX, d.translateY), R.chain(function () { return go(d.drawing); })));
            case 'WithShadow':
                return C.withContext(pipeable_1.pipe(applyStyle(d.shadow.color, function_1.flow(Color_1.toCss, C.setShadowColor)), R.chain(function () { return applyStyle(d.shadow.blur, C.setShadowBlur); }), R.chain(function () {
                    return applyStyle(d.shadow.offset, function (o) {
                        return pipeable_1.pipe(C.setShadowOffsetX(o.x), R.chain(function () { return C.setShadowOffsetY(o.y); }));
                    });
                }), R.chain(function () { return go(d.drawing); })));
        }
    };
    return go(drawing);
};
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * Gets a `Monoid` instance for `FillStyle`.
 *
 * @category instances
 * @since 1.0.0
 */
exports.monoidFillStyle = M.getStructMonoid({
    color: getFirstMonoidColor
});
/**
 * Gets a `Monoid` instance for `OutlineStyle`.
 *
 * @example
 * import * as O from 'fp-ts/lib/Option'
 * import * as M from 'fp-ts/lib/Monoid'
 * import * as Color from 'graphics-ts/lib/Color'
 * import * as D from 'graphics-ts/lib/Drawing'
 *
 * assert.deepStrictEqual(
 *   M.fold(D.monoidOutlineStyle)([
 *     D.outlineColor(Color.black),
 *     D.outlineColor(Color.white),
 *     D.lineWidth(5)
 *   ]),
 *   {
 *     color: O.some(Color.black),
 *     lineWidth: O.some(5)
 *   }
 * )
 *
 * @category instances
 * @since 1.0.0
 */
exports.monoidOutlineStyle = M.getStructMonoid({
    color: getFirstMonoidColor,
    lineWidth: getFirstMonoidNumber
});
/**
 * Gets a `Monoid` instance for `Shadow`.
 *
 * @category instances
 * @since 1.0.0
 */
exports.monoidShadow = M.getStructMonoid({
    color: getFirstMonoidColor,
    blur: getFirstMonoidNumber,
    offset: getFirstMonoidPoint
});
/**
 * Gets a `Monoid` instance for `Drawing`.
 *
 * @category instances
 * @since 1.0.0
 */
exports.monoidDrawing = {
    concat: function (x, y) {
        return x._tag === 'Many' && y._tag === 'Many'
            ? exports.many(M.fold(readonlyArrayMonoidDrawing)([x.drawings, y.drawings]))
            : x._tag === 'Many'
                ? exports.many(M.fold(readonlyArrayMonoidDrawing)([x.drawings, [y]]))
                : y._tag === 'Many'
                    ? exports.many(M.fold(readonlyArrayMonoidDrawing)([[x], y.drawings]))
                    : exports.many([x, y]);
    },
    empty: exports.many(readonlyArrayMonoidDrawing.empty)
};


/***/ }),

/***/ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Font.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Font.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showFont = exports.showFontOptions = exports.font = exports.fontOptions = void 0;
/**
 * @since 1.0.0
 */
var A = __webpack_require__(/*! fp-ts/lib/Array */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Array.js");
var B = __webpack_require__(/*! fp-ts/lib/boolean */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/boolean.js");
var O = __webpack_require__(/*! fp-ts/lib/Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js");
var RR = __webpack_require__(/*! fp-ts/lib/ReadonlyRecord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyRecord.js");
var Monoid_1 = __webpack_require__(/*! fp-ts/lib/Monoid */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Monoid.js");
var Foldable_1 = __webpack_require__(/*! fp-ts/lib/Foldable */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Foldable.js");
var pipeable_1 = __webpack_require__(/*! fp-ts/lib/pipeable */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/pipeable.js");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `FontOptions` object.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.fontOptions = function (_a) {
    var style = _a.style, variant = _a.variant, weight = _a.weight;
    return ({
        style: O.fromNullable(style),
        variant: O.fromNullable(variant),
        weight: O.fromNullable(weight)
    });
};
/**
 * Constructs a new `Font`.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.font = function (fontFamily, size, options) { return ({
    fontFamily: fontFamily,
    size: size,
    fontOptions: typeof options === 'object' ? options : exports.fontOptions({})
}); };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * The `Show` instance for `FontOptions`.
 *
 * @category instances
 * @since 1.0.0
 */
exports.showFontOptions = {
    show: function (o) { return Foldable_1.intercalate(Monoid_1.monoidString, RR.readonlyRecord)(' ', RR.compact(RR.fromRecord(o))); }
};
/**
 * The `Show` instance for `Font`.
 *
 * @category instances
 * @since 1.0.0
 */
exports.showFont = {
    show: function (_a) {
        var fontFamily = _a.fontFamily, size = _a.size, fontOptions = _a.fontOptions;
        return Foldable_1.intercalate(Monoid_1.monoidString, A.array)(' ', A.compact([
            // Determine if any font options were specified
            pipeable_1.pipe(fontOptions, RR.fromRecord, RR.compact, RR.isEmpty, B.fold(function () { return O.some(exports.showFontOptions.show(fontOptions)); }, function () { return O.none; })),
            O.some(size + "px"),
            O.some(fontFamily)
        ]));
    }
};


/***/ }),

/***/ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Shape.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Shape.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.monoidPath = exports.rect = exports.path = exports.closed = exports.ellipse = exports.composite = exports.circle = exports.arc = exports.point = exports.angle = exports.radians = exports.degrees = void 0;
var RA = __webpack_require__(/*! fp-ts/lib/ReadonlyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyArray.js");
var M = __webpack_require__(/*! fp-ts/lib/Monoid */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Monoid.js");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Constructs an angle specified in degrees.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.degrees = function (degrees) { return ({ _tag: 'Degrees', degrees: degrees }); };
/**
 * Constructs an angle specified in degrees.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.radians = function (radians) { return ({ _tag: 'Radians', radians: radians }); };
/**
 * Converts an angle into radians for use with the canvas.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.angle = function (angle) {
    switch (angle._tag) {
        case 'Degrees':
            return angle.degrees * (Math.PI / 180);
        case 'Radians':
            return angle.radians;
    }
};
/**
 * Constructs a `Point` from x and y coordinates.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.point = function (x, y) { return ({ x: x, y: y }); };
/**
 * Constructs an `Arc` shape.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.arc = function (x, y, r, start, end, anticlockwise) {
    if (anticlockwise === void 0) { anticlockwise = false; }
    return ({
        _tag: 'Arc',
        x: x,
        y: y,
        r: r,
        start: exports.angle(start),
        end: exports.angle(end),
        anticlockwise: anticlockwise
    });
};
/**
 * Constructs an `Arc` that forms a circle shape.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.circle = function (x, y, r) { return ({
    _tag: 'Arc',
    x: x,
    y: y,
    r: r,
    start: exports.angle(exports.radians(0)),
    end: exports.angle(exports.radians(Math.PI * 2)),
    anticlockwise: false
}); };
/**
 * Constructs a `Composite` shape.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.composite = function (shapes) { return ({
    _tag: 'Composite',
    shapes: shapes
}); };
/**
 * Constructs an `Ellipse` shape.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.ellipse = function (x, y, rx, ry, rotation, start, end, anticlockwise) {
    if (anticlockwise === void 0) { anticlockwise = false; }
    return ({
        _tag: 'Ellipse',
        x: x,
        y: y,
        rx: rx,
        ry: ry,
        rotation: exports.angle(rotation),
        start: exports.angle(start),
        end: exports.angle(end),
        anticlockwise: anticlockwise
    });
};
function closed(F) {
    return function (fa) {
        return F.reduce(fa, exports.monoidPath.empty, function (b, a) { return ({
            _tag: 'Path',
            closed: true,
            points: RA.snoc(b.points, a)
        }); });
    };
}
exports.closed = closed;
function path(F) {
    return function (fa) {
        return F.reduce(fa, exports.monoidPath.empty, function (b, a) { return ({
            _tag: 'Path',
            closed: false,
            points: RA.snoc(b.points, a)
        }); });
    };
}
exports.path = path;
/**
 * Constructs a `Rectangle` shape.
 *
 * @category constructors
 * @since 1.0.0
 */
exports.rect = function (x, y, width, height) { return ({
    _tag: 'Rect',
    x: x,
    y: y,
    width: width,
    height: height
}); };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * The `Monoid` instance for a `Path`.
 *
 * @category instances
 * @since 1.0.0
 */
exports.monoidPath = M.getStructMonoid({
    _tag: { concat: function () { return 'Path'; }, empty: 'Path' },
    closed: M.monoidAny,
    points: RA.getMonoid()
});


/***/ }),

/***/ "./src/followPressedMouse.ts":
/*!***********************************!*\
  !*** ./src/followPressedMouse.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.followPressedMouse = exports.unbind = exports.bindWithContext = exports.bind = exports.getPosition = void 0;
var C = __webpack_require__(/*! graphics-ts/lib/Canvas */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Canvas.js");
var O = __webpack_require__(/*! fp-ts/Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Option.js");
var boolean = __webpack_require__(/*! fp-ts/boolean */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/boolean.js");
var RIO = __webpack_require__(/*! fp-ts-contrib/ReaderIO */ "./.yarn/$$virtual/fp-ts-contrib-virtual-b9e220308b/0/cache/fp-ts-contrib-npm-0.1.23-05b7790e17-69313dd8e3.zip/node_modules/fp-ts-contrib/es6/ReaderIO.js");
var function_1 = __webpack_require__(/*! fp-ts/function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
var getPosition = function (e) { return ({ x: e.offsetX, y: e.offsetY }); };
exports.getPosition = getPosition;
var bind = function (t, f) { return function (c) { return function () {
    c.canvas.addEventListener(t, f);
    return c;
}; }; };
exports.bind = bind;
var bindWithContext = function (type, f) { return function (ctx) { return function () {
    ctx.canvas.addEventListener(type, function (e) { return f(e)(ctx)(); });
    return ctx;
}; }; };
exports.bindWithContext = bindWithContext;
var unbind = function (t, f) { return function (c) { return function () {
    c.canvas.removeEventListener(t, f);
    return c;
}; }; };
exports.unbind = unbind;
var followPressedMouse = function (onMove) {
    var isPressed = false;
    var mousePosition = O.none;
    var setMousePosition = function (e) {
        mousePosition = O.some(exports.getPosition(e));
    };
    var clearMousePosition = function () {
        mousePosition = O.none;
    };
    var setPressed = function (e) {
        setMousePosition(e);
        isPressed = true;
    };
    var setUnpressed = function () {
        clearMousePosition();
        isPressed = false;
    };
    var handleMouseEnter = function (e) {
        isPressed && setMousePosition(e);
    };
    var handleMouseLeave = function () {
        isPressed && clearMousePosition();
    };
    var handleMouseMove = function (e) {
        return function_1.pipe(RIO.ask(), RIO.chain(function () {
            return boolean.fold(function () { return RIO.ask(); }, function () {
                return function_1.pipe(onMove(exports.getPosition(e), mousePosition), RIO.map(function (ctx) {
                    setMousePosition(e);
                    return ctx;
                }));
            })(isPressed);
        }));
    };
    var handleMouseDown = function (e) {
        return function_1.pipe(onMove(exports.getPosition(e), O.none), RIO.map(function (ctx) {
            setPressed(e);
            return ctx;
        }));
    };
    var handleMouseUp = function () { return setUnpressed(); };
    return function_1.pipe(C.bindWithContext('mousedown', handleMouseDown), RIO.chain(function () { return exports.bind('mouseenter', handleMouseEnter); }), RIO.chain(function () { return exports.bind('mouseleave', handleMouseLeave); }), RIO.chain(function () { return exports.bind('mouseup', handleMouseUp); }), RIO.chain(function () { return exports.bindWithContext('mousemove', handleMouseMove); }));
};
exports.followPressedMouse = followPressedMouse;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var C = __webpack_require__(/*! graphics-ts/lib/Canvas */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Canvas.js");
var D = __webpack_require__(/*! graphics-ts/lib/Drawing */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Drawing.js");
var Shape = __webpack_require__(/*! graphics-ts/lib/Shape */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Shape.js");
var Color = __webpack_require__(/*! graphics-ts/lib/Color */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Color.js");
var Font = __webpack_require__(/*! graphics-ts/lib/Font */ "./.yarn/$$virtual/graphics-ts-virtual-8afaa303df/0/cache/graphics-ts-npm-1.1.0-0026ec734a-4b0de8835e.zip/node_modules/graphics-ts/lib/Font.js");
var IO = __webpack_require__(/*! fp-ts/IO */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/IO.js");
var apply = __webpack_require__(/*! fp-ts/Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js");
var O = __webpack_require__(/*! fp-ts/Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Option.js");
var R = __webpack_require__(/*! fp-ts/Reader */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Reader.js");
var RA = __webpack_require__(/*! fp-ts/ReadonlyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReadonlyArray.js");
var RIO = __webpack_require__(/*! fp-ts-contrib/ReaderIO */ "./.yarn/$$virtual/fp-ts-contrib-virtual-b9e220308b/0/cache/fp-ts-contrib-npm-0.1.23-05b7790e17-69313dd8e3.zip/node_modules/fp-ts-contrib/es6/ReaderIO.js");
var Console_1 = __webpack_require__(/*! fp-ts/Console */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Console.js");
var function_1 = __webpack_require__(/*! fp-ts/function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
var followPressedMouse_1 = __webpack_require__(/*! ./followPressedMouse */ "./src/followPressedMouse.ts");
var CANVAS_ID = 'canvas';
var ERASE_MODE = 'destination-out';
var DEFAULT_MODE = 'source-over';
var BACKGROUND_MODE = 'destination-over';
var ERASE_RADIUS = 10;
var getDocumentDimensions = function () { return ({
    width: document.body.clientWidth,
    height: document.body.clientHeight,
}); };
var getDevicePixelRatio = function () { return window.devicePixelRatio || 1; };
var getCanvas = function (ctx) { return function () { return ctx.canvas; }; };
var setStyleDimensions = function (_a) {
    var width = _a.width, height = _a.height;
    return function_1.flow(getCanvas, IO.map(function (cnv) {
        cnv.style.width = width + "px";
        cnv.style.height = height + "px";
        return cnv;
    }));
};
var ctxGetDimensions = function_1.flow(getCanvas, IO.chain(C.getDimensions));
var ctxSetDimension = function (_a) {
    var width = _a.width, height = _a.height;
    return function_1.pipe(getCanvas, RIO.chainIOK(function (c) {
        return function_1.pipe(getDevicePixelRatio, IO.chain(function (pixelRation) {
            return C.setDimensions({ width: width * pixelRation, height: height * pixelRation })(c);
        }));
    }), RIO.chain(function () { return setStyleDimensions({ width: width, height: height }); }));
};
var fillBackground = function (fillStyle) {
    return function_1.flow(ctxGetDimensions, IO.map(function (_a) {
        var width = _a.width, height = _a.height;
        return D.fill(Shape.rect(0, 0, width, height), fillStyle);
    }));
};
var measureText = function (text) {
    return C.withContext(function_1.pipe(C.setFont(Font.showFont.show(text.font)), RIO.chain(function () { return C.measureText(text.text); })));
};
var centerText = function (text) {
    return function_1.pipe(RIO.of(function (_a) {
        var width = _a.width, height = _a.height;
        return function (_a) {
            var textWidth = _a.width;
            return D.translate(width / 2 - textWidth / 2 - text.x, height / 2 - text.font.size / 2 - text.y, text);
        };
    }), RIO.ap(R.of(getDocumentDimensions)), RIO.ap(measureText(text)));
};
var drawText = function (text, color) {
    if (color === void 0) { color = Color.black; }
    return centerText(D.text(Font.font('Helvetica', 30), 0, 0, D.fillStyle(color), text));
};
var screen = function_1.pipe(apply.sequenceT(RIO.readerIO)(fillBackground(D.fillStyle(Color.white)), drawText('SCRATCH ME')), RIO.map(D.many));
var background = function_1.pipe(apply.sequenceT(RIO.readerIO)(drawText('LOOK BETTER'), fillBackground(D.fillStyle(Color.white))), RIO.map(D.many));
var line = function (coords, prevCoords) {
    return Shape.path(RA.Foldable)([
        Shape.point(prevCoords.x, prevCoords.y),
        Shape.point(coords.x, coords.y),
    ]);
};
var erase = function (coords, prevCoords) {
    return C.withContext(function_1.pipe(C.setGlobalCompositeOperation(ERASE_MODE), RIO.chain(function () { return C.setLineWidth(ERASE_RADIUS * 2); }), RIO.chain(function () { return C.setLineCap('round'); }), RIO.chain(function () { return C.setLineJoin('round'); }), RIO.chain(function () {
        return function_1.pipe(prevCoords, O.fold(function () { return RIO.ask(); }, function (prevCoords) { return C.strokePath(D.renderShape(line(coords, prevCoords))); }));
    }), RIO.chain(function () { return C.fillPath(D.renderShape(Shape.circle(coords.x, coords.y, ERASE_RADIUS))); })));
};
var initCanvas = function_1.pipe(RIO.ask(), RIO.chainFirst(function () {
    return function_1.pipe(R.of(getDocumentDimensions), RIO.chain(ctxSetDimension), RIO.chain(function () {
        return function_1.pipe(R.of(getDevicePixelRatio), RIO.chain(function (dpi) { return C.scale(dpi, dpi); }));
    }));
}), RIO.chainFirst(function () { return RIO.chain(D.render)(screen); }), RIO.chain(function () {
    return followPressedMouse_1.followPressedMouse(function (coords, prevCoords) {
        return function_1.pipe(erase(coords, prevCoords), RIO.chain(function () { return C.setGlobalCompositeOperation(BACKGROUND_MODE); }), RIO.chainFirst(function () { return RIO.chain(D.render)(background); }));
    });
}));
var init = function () {
    C.renderTo(CANVAS_ID, function () { return Console_1.error("[ERROR]: Unable to find canvas with id " + CANVAS_ID); })(initCanvas)();
};
init();


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Applicative.js":
/*!******************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Applicative.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApplicativeMonoid": () => /* binding */ getApplicativeMonoid,
/* harmony export */   "getApplicativeComposition": () => /* binding */ getApplicativeComposition
/* harmony export */ });
/* harmony import */ var _Apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _Functor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js");
/**
 * The `Applicative` type class extends the `Apply` type class with a `of` function, which can be used to create values
 * of type `f a` from values of type `a`.
 *
 * Where `Apply` provides the ability to lift functions of two or more arguments to functions whose arguments are
 * wrapped using `f`, and `Functor` provides the ability to lift functions of one argument, `pure` can be seen as the
 * function which lifts functions of _zero_ arguments. That is, `Applicative` functors support a lifting operation for
 * any number of function arguments.
 *
 * Instances must satisfy the following laws in addition to the `Apply` laws:
 *
 * 1. Identity: `A.ap(A.of(a => a), fa) <-> fa`
 * 2. Homomorphism: `A.ap(A.of(ab), A.of(a)) <-> A.of(ab(a))`
 * 3. Interchange: `A.ap(fab, A.of(a)) <-> A.ap(A.of(ab => ab(a)), fab)`
 *
 * Note. `Functor`'s `map` can be derived: `A.map(x, f) = A.ap(A.of(f), x)`
 *
 * @since 2.0.0
 */



function getApplicativeMonoid(F) {
    var f = (0,_Apply__WEBPACK_IMPORTED_MODULE_0__.getApplySemigroup)(F);
    return function (M) { return ({
        concat: f(M).concat,
        empty: F.of(M.empty)
    }); };
}
/** @deprecated */
function getApplicativeComposition(F, G) {
    var map = (0,_Functor__WEBPACK_IMPORTED_MODULE_1__.getFunctorComposition)(F, G).map;
    var _ap = (0,_Apply__WEBPACK_IMPORTED_MODULE_0__.ap)(F, G);
    return {
        map: map,
        of: function (a) { return F.of(G.of(a)); },
        ap: function (fgab, fga) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fgab, _ap(fga)); }
    };
}


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js":
/*!************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "apFirst": () => /* binding */ apFirst,
/* harmony export */   "apSecond": () => /* binding */ apSecond,
/* harmony export */   "apS": () => /* binding */ apS,
/* harmony export */   "getApplySemigroup": () => /* binding */ getApplySemigroup,
/* harmony export */   "sequenceT": () => /* binding */ sequenceT,
/* harmony export */   "sequenceS": () => /* binding */ sequenceS
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");

function ap(F, G) {
    return function (fa) { return function (fab) {
        return F.ap(F.map(fab, function (gab) { return function (ga) { return G.ap(gab, ga); }; }), fa);
    }; };
}
function apFirst(A) {
    return function (second) { return function (first) {
        return A.ap(A.map(first, function (a) { return function () { return a; }; }), second);
    }; };
}
function apSecond(A) {
    return function (second) { return function (first) {
        return A.ap(A.map(first, function () { return function (b) { return b; }; }), second);
    }; };
}
function apS(F) {
    return function (name, fb) { return function (fa) {
        return F.ap(F.map(fa, function (a) { return function (b) {
            var _a;
            return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
        }; }), fb);
    }; };
}
function getApplySemigroup(F) {
    return function (S) { return ({
        concat: function (first, second) {
            return F.ap(F.map(first, function (x) { return function (y) { return S.concat(x, y); }; }), second);
        }
    }); };
}
function curried(f, n, acc) {
    return function (x) {
        var combined = Array(acc.length + 1);
        for (var i = 0; i < acc.length; i++) {
            combined[i] = acc[i];
        }
        combined[acc.length] = x;
        return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
    };
}
var tupleConstructors = {
    1: function (a) { return [a]; },
    2: function (a) { return function (b) { return [a, b]; }; },
    3: function (a) { return function (b) { return function (c) { return [a, b, c]; }; }; },
    4: function (a) { return function (b) { return function (c) { return function (d) { return [a, b, c, d]; }; }; }; },
    5: function (a) { return function (b) { return function (c) { return function (d) { return function (e) { return [a, b, c, d, e]; }; }; }; }; }
};
function getTupleConstructor(len) {
    if (!tupleConstructors.hasOwnProperty(len)) {
        tupleConstructors[len] = curried(_function__WEBPACK_IMPORTED_MODULE_0__.tuple, len - 1, []);
    }
    return tupleConstructors[len];
}
function sequenceT(F) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var len = args.length;
        var f = getTupleConstructor(len);
        var fas = F.map(args[0], f);
        for (var i = 1; i < len; i++) {
            fas = F.ap(fas, args[i]);
        }
        return fas;
    };
}
function getRecordConstructor(keys) {
    var len = keys.length;
    switch (len) {
        case 1:
            return function (a) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a);
            };
        case 2:
            return function (a) { return function (b) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a);
            }; };
        case 3:
            return function (a) { return function (b) { return function (c) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a);
            }; }; };
        case 4:
            return function (a) { return function (b) { return function (c) { return function (d) {
                var _a;
                return (_a = {},
                    _a[keys[0]] = a,
                    _a[keys[1]] = b,
                    _a[keys[2]] = c,
                    _a[keys[3]] = d,
                    _a);
            }; }; }; };
        case 5:
            return function (a) { return function (b) { return function (c) { return function (d) { return function (e) {
                var _a;
                return (_a = {},
                    _a[keys[0]] = a,
                    _a[keys[1]] = b,
                    _a[keys[2]] = c,
                    _a[keys[3]] = d,
                    _a[keys[4]] = e,
                    _a);
            }; }; }; }; };
        default:
            return curried(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var r = {};
                for (var i = 0; i < len; i++) {
                    r[keys[i]] = args[i];
                }
                return r;
            }, len - 1, []);
    }
}
function sequenceS(F) {
    return function (r) {
        var keys = Object.keys(r);
        var len = keys.length;
        var f = getRecordConstructor(keys);
        var fr = F.map(r[keys[0]], f);
        for (var i = 1; i < len; i++) {
            fr = F.ap(fr, r[keys[i]]);
        }
        return fr;
    };
}


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/BooleanAlgebra.js":
/*!*********************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/BooleanAlgebra.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "booleanAlgebraVoid": () => /* binding */ booleanAlgebraVoid,
/* harmony export */   "getDualBooleanAlgebra": () => /* binding */ getDualBooleanAlgebra,
/* harmony export */   "booleanAlgebraBoolean": () => /* binding */ booleanAlgebraBoolean,
/* harmony export */   "getFunctionBooleanAlgebra": () => /* binding */ getFunctionBooleanAlgebra
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Every boolean algebras has a dual algebra, which involves reversing one/zero as well as join/meet.
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (B) { return ({
    meet: function (x, y) { return B.join(x, y); },
    join: function (x, y) { return B.meet(x, y); },
    zero: B.one,
    one: B.zero,
    implies: function (x, y) { return B.join(B.not(x), y); },
    not: B.not
}); };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
var booleanAlgebraVoid = {
    meet: function () { return undefined; },
    join: function () { return undefined; },
    zero: undefined,
    one: undefined,
    implies: function () { return undefined; },
    not: function () { return undefined; }
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getDualBooleanAlgebra = reverse;
/**
 * Use [`BooleanAlgebra`](./boolean.ts.html#BooleanAlgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var booleanAlgebraBoolean = {
    meet: function (x, y) { return x && y; },
    join: function (x, y) { return x || y; },
    zero: false,
    one: true,
    implies: function (x, y) { return !x || y; },
    not: function (x) { return !x; }
};
/**
 * Use [`getBooleanAlgebra`](./function.ts.html#getBooleanAlgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getFunctionBooleanAlgebra = _function__WEBPACK_IMPORTED_MODULE_0__.getBooleanAlgebra;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Bounded.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Bounded.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boundedNumber": () => /* binding */ boundedNumber
/* harmony export */ });
/* harmony import */ var _Ord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Ord.js");
/**
 * The `Bounded` type class represents totally ordered types that have an upper and lower boundary.
 *
 * Instances should satisfy the following law in addition to the `Ord` laws:
 *
 * - Bounded: `bottom <= a <= top`
 *
 * @since 2.0.0
 */

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`Bounded`](./number.ts.html#Bounded) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var boundedNumber = {
    // tslint:disable-next-line: deprecation
    equals: _Ord__WEBPACK_IMPORTED_MODULE_0__.ordNumber.equals,
    // tslint:disable-next-line: deprecation
    compare: _Ord__WEBPACK_IMPORTED_MODULE_0__.ordNumber.compare,
    top: Infinity,
    bottom: -Infinity
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Chain.js":
/*!************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Chain.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chainFirst": () => /* binding */ chainFirst,
/* harmony export */   "bind": () => /* binding */ bind
/* harmony export */ });
function chainFirst(M) {
    return function (f) { return function (first) { return M.chain(first, function (a) { return M.map(f(a), function () { return a; }); }); }; };
}
function bind(M) {
    return function (name, f) { return function (ma) { return M.chain(ma, function (a) { return M.map(f(a), function (b) {
        var _a;
        return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
    }); }); }; };
}


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ChainRec.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ChainRec.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tailRec": () => /* binding */ tailRec
/* harmony export */ });
/**
 * @since 2.0.0
 */
var tailRec = function (startWith, f) {
    var ab = f(startWith);
    while (ab._tag === 'Left') {
        ab = f(ab.left);
    }
    return ab.right;
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Console.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Console.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => /* binding */ log,
/* harmony export */   "warn": () => /* binding */ warn,
/* harmony export */   "error": () => /* binding */ error,
/* harmony export */   "info": () => /* binding */ info
/* harmony export */ });
/**
 * @since 2.0.0
 */
var log = function (a) { return function () { return console.log(a); }; }; // tslint:disable-line:no-console
/**
 * @since 2.0.0
 */
var warn = function (a) { return function () { return console.warn(a); }; }; // tslint:disable-line:no-console
/**
 * @since 2.0.0
 */
var error = function (a) { return function () { return console.error(a); }; }; // tslint:disable-line:no-console
/**
 * @since 2.0.0
 */
var info = function (a) { return function () { return console.info(a); }; }; // tslint:disable-line:no-console


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Either.js":
/*!*************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Either.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLeft": () => /* binding */ isLeft,
/* harmony export */   "isRight": () => /* binding */ isRight,
/* harmony export */   "left": () => /* binding */ left,
/* harmony export */   "right": () => /* binding */ right,
/* harmony export */   "fromOption": () => /* binding */ fromOption,
/* harmony export */   "fromPredicate": () => /* binding */ fromPredicate,
/* harmony export */   "matchW": () => /* binding */ matchW,
/* harmony export */   "foldW": () => /* binding */ foldW,
/* harmony export */   "match": () => /* binding */ match,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "getOrElseW": () => /* binding */ getOrElseW,
/* harmony export */   "getOrElse": () => /* binding */ getOrElse,
/* harmony export */   "fromNullable": () => /* binding */ fromNullable,
/* harmony export */   "tryCatch": () => /* binding */ tryCatch,
/* harmony export */   "tryCatchK": () => /* binding */ tryCatchK,
/* harmony export */   "fromNullableK": () => /* binding */ fromNullableK,
/* harmony export */   "chainNullableK": () => /* binding */ chainNullableK,
/* harmony export */   "toUnion": () => /* binding */ toUnion,
/* harmony export */   "fromOptionK": () => /* binding */ fromOptionK,
/* harmony export */   "chainOptionK": () => /* binding */ chainOptionK,
/* harmony export */   "swap": () => /* binding */ swap,
/* harmony export */   "orElseW": () => /* binding */ orElseW,
/* harmony export */   "orElse": () => /* binding */ orElse,
/* harmony export */   "filterOrElseW": () => /* binding */ filterOrElseW,
/* harmony export */   "filterOrElse": () => /* binding */ filterOrElse,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "bimap": () => /* binding */ bimap,
/* harmony export */   "mapLeft": () => /* binding */ mapLeft,
/* harmony export */   "apW": () => /* binding */ apW,
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "of": () => /* binding */ of,
/* harmony export */   "chainW": () => /* binding */ chainW,
/* harmony export */   "chain": () => /* binding */ chain,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "altW": () => /* binding */ altW,
/* harmony export */   "alt": () => /* binding */ alt,
/* harmony export */   "extend": () => /* binding */ extend,
/* harmony export */   "duplicate": () => /* binding */ duplicate,
/* harmony export */   "reduce": () => /* binding */ reduce,
/* harmony export */   "foldMap": () => /* binding */ foldMap,
/* harmony export */   "reduceRight": () => /* binding */ reduceRight,
/* harmony export */   "traverse": () => /* binding */ traverse,
/* harmony export */   "sequence": () => /* binding */ sequence,
/* harmony export */   "throwError": () => /* binding */ throwError,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "getShow": () => /* binding */ getShow,
/* harmony export */   "getEq": () => /* binding */ getEq,
/* harmony export */   "getSemigroup": () => /* binding */ getSemigroup,
/* harmony export */   "getCompactable": () => /* binding */ getCompactable,
/* harmony export */   "getFilterable": () => /* binding */ getFilterable,
/* harmony export */   "getWitherable": () => /* binding */ getWitherable,
/* harmony export */   "getApplicativeValidation": () => /* binding */ getApplicativeValidation,
/* harmony export */   "getAltValidation": () => /* binding */ getAltValidation,
/* harmony export */   "Functor": () => /* binding */ Functor,
/* harmony export */   "flap": () => /* binding */ flap,
/* harmony export */   "Pointed": () => /* binding */ Pointed,
/* harmony export */   "Apply": () => /* binding */ Apply,
/* harmony export */   "apFirst": () => /* binding */ apFirst,
/* harmony export */   "apSecond": () => /* binding */ apSecond,
/* harmony export */   "Applicative": () => /* binding */ Applicative,
/* harmony export */   "Chain": () => /* binding */ Chain,
/* harmony export */   "Monad": () => /* binding */ Monad,
/* harmony export */   "chainFirst": () => /* binding */ chainFirst,
/* harmony export */   "chainFirstW": () => /* binding */ chainFirstW,
/* harmony export */   "Foldable": () => /* binding */ Foldable,
/* harmony export */   "Traversable": () => /* binding */ Traversable,
/* harmony export */   "Bifunctor": () => /* binding */ Bifunctor,
/* harmony export */   "Alt": () => /* binding */ Alt,
/* harmony export */   "Extend": () => /* binding */ Extend,
/* harmony export */   "ChainRec": () => /* binding */ ChainRec,
/* harmony export */   "MonadThrow": () => /* binding */ MonadThrow,
/* harmony export */   "FromEither": () => /* binding */ FromEither,
/* harmony export */   "toError": () => /* binding */ toError,
/* harmony export */   "elem": () => /* binding */ elem,
/* harmony export */   "exists": () => /* binding */ exists,
/* harmony export */   "Do": () => /* binding */ Do,
/* harmony export */   "bindTo": () => /* binding */ bindTo,
/* harmony export */   "bind": () => /* binding */ bind,
/* harmony export */   "bindW": () => /* binding */ bindW,
/* harmony export */   "apS": () => /* binding */ apS,
/* harmony export */   "apSW": () => /* binding */ apSW,
/* harmony export */   "traverseArrayWithIndex": () => /* binding */ traverseArrayWithIndex,
/* harmony export */   "traverseArray": () => /* binding */ traverseArray,
/* harmony export */   "sequenceArray": () => /* binding */ sequenceArray,
/* harmony export */   "parseJSON": () => /* binding */ parseJSON,
/* harmony export */   "stringifyJSON": () => /* binding */ stringifyJSON,
/* harmony export */   "either": () => /* binding */ either,
/* harmony export */   "getApplySemigroup": () => /* binding */ getApplySemigroup,
/* harmony export */   "getApplyMonoid": () => /* binding */ getApplyMonoid,
/* harmony export */   "getValidationSemigroup": () => /* binding */ getValidationSemigroup,
/* harmony export */   "getValidationMonoid": () => /* binding */ getValidationMonoid,
/* harmony export */   "getValidation": () => /* binding */ getValidation
/* harmony export */ });
/* harmony import */ var _Applicative__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Applicative */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Applicative.js");
/* harmony import */ var _Apply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js");
/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Chain.js");
/* harmony import */ var _ChainRec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChainRec */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ChainRec.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _Functor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/internal.js");
/* harmony import */ var _Separated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Separated */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Separated.js");








// -------------------------------------------------------------------------------------
// guards
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise.
 *
 * @category guards
 * @since 2.0.0
 */
var isLeft = _internal__WEBPACK_IMPORTED_MODULE_0__.isLeft;
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise.
 *
 * @category guards
 * @since 2.0.0
 */
var isRight = function (ma) { return ma._tag === 'Right'; };
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @category constructors
 * @since 2.0.0
 */
var left = function (e) { return ({ _tag: 'Left', left: e }); };
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @category constructors
 * @since 2.0.0
 */
var right = function (a) { return ({ _tag: 'Right', right: a }); };
/**
 * @example
 * import { fromOption, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 * import { none, some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     some(1),
 *     fromOption(() => 'error')
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     none,
 *     fromOption(() => 'error')
 *   ),
 *   left('error')
 * )
 *
 * @category constructors
 * @since 2.0.0
 */
var fromOption = function (onNone) { return function (ma) {
    return ma._tag === 'None' ? left(onNone()) : right(ma.value);
}; };
/**
 * @example
 * import { fromPredicate, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     1,
 *     fromPredicate(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     -1,
 *     fromPredicate(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   left('error')
 * )
 *
 * @category constructors
 * @since 2.0.0
 */
var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? right(a) : left(onFalse(a))); }; };
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onLeft, onRight) { return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
}; };
/**
 * Alias of [`matchW`](#matchww).
 *
 * @category destructors
 * @since 2.10.0
 */
var foldW = matchW;
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import { match, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(
 *   pipe(
 *     right(1),
 *     match(onLeft, onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     left(['error 1', 'error 2']),
 *     match(onLeft, onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
var match = matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */
var fold = match;
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
var getOrElseW = function (onLeft) { return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : ma.right;
}; };
/**
 * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
 *
 * @example
 * import { getOrElse, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     right(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     left('error'),
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category destructors
 * @since 2.0.0
 */
var getOrElse = getOrElseW;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
// TODO: make lazy in v3
/**
 * Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`.
 *
 * @example
 * import { fromNullable, left, right } from 'fp-ts/Either'
 *
 * const parse = fromNullable('nully')
 *
 * assert.deepStrictEqual(parse(1), right(1))
 * assert.deepStrictEqual(parse(null), left('nully'))
 *
 * @category interop
 * @since 2.0.0
 */
var fromNullable = function (e) { return function (a) {
    return a == null ? left(e) : right(a);
}; };
/**
 * Constructs a new `Either` from a function that might throw.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import * as E from 'fp-ts/Either'
 *
 * const unsafeHead = <A>(as: ReadonlyArray<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: ReadonlyArray<A>): E.Either<Error, A> =>
 *   E.tryCatch(() => unsafeHead(as), e => (e instanceof Error ? e : new Error('unknown error')))
 *
 * assert.deepStrictEqual(head([]), E.left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), E.right(1))
 *
 * @category interop
 * @since 2.0.0
 */
var tryCatch = function (f, onThrow) {
    try {
        return right(f());
    }
    catch (e) {
        return left(onThrow(e));
    }
};
/**
 * Converts a function that may throw to one returning a `Either`.
 *
 * @category interop
 * @since 2.10.0
 */
var tryCatchK = function (f, onThrow) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return tryCatch(function () { return f.apply(void 0, a); }, onThrow);
}; };
/**
 * @category interop
 * @since 2.9.0
 */
var fromNullableK = function (e) {
    var from = fromNullable(e);
    return function (f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.flow)(f, from); };
};
/**
 * @category interop
 * @since 2.9.0
 */
var chainNullableK = function (e) {
    var from = fromNullableK(e);
    return function (f) { return chain(from(f)); };
};
/**
 * @category interop
 * @since 2.10.0
 */
var toUnion = 
/*#__PURE__*/
foldW(_function__WEBPACK_IMPORTED_MODULE_1__.identity, _function__WEBPACK_IMPORTED_MODULE_1__.identity);
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var fromOptionK = function (onNone) {
    var from = fromOption(onNone);
    return function (f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.flow)(f, from); };
};
/**
 * @category combinators
 * @since 2.10.0
 */
var chainOptionK = function (onNone) {
    var from = fromOptionK(onNone);
    return function (f) { return chain(from(f)); };
};
/**
 * Returns a `Right` if is a `Left` (and vice versa).
 *
 * @category combinators
 * @since 2.0.0
 */
function swap(ma) {
    return isLeft(ma) ? right(ma.left) : left(ma.right);
}
/**
 * Less strict version of [`orElse`](#orelse).
 *
 * @category combinators
 * @since 2.10.0
 */
var orElseW = function (onLeft) { return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : ma;
}; };
/**
 * Useful for recovering from errors.
 *
 * @category combinators
 * @since 2.0.0
 */
var orElse = orElseW;
/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * @category combinators
 * @since 2.9.0
 */
var filterOrElseW = function (predicate, onFalse) {
    return chainW(function (a) { return (predicate(a) ? right(a) : left(onFalse(a))); });
};
/**
 * @example
 * import { filterOrElse as filterOrElse, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     right(1),
 *     filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     right(-1),
 *     filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   left('error')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     left('a'),
 *     filterOrElse(
 *       (n) => n > 0,
 *       () => 'error'
 *     )
 *   ),
 *   left('a')
 * )
 *
 * @category combinators
 * @since 2.0.0
 */
var filterOrElse = filterOrElseW;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, map(f)); };
var _ap = function (fab, fa) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fab, ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(ma, chain(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) { return function (fa, f) {
    var foldMapM = foldMap(M);
    return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, foldMapM(f));
}; };
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, reduceRight(b, f)); };
var _traverse = function (F) {
    var traverseF = traverse(F);
    return function (ta, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(ta, traverseF(f)); };
};
var _bimap = function (fa, f, g) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, bimap(f, g)); };
var _mapLeft = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, mapLeft(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, alt(that)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(wa, extend(f)); };
var _chainRec = function (a, f) {
    return (0,_ChainRec__WEBPACK_IMPORTED_MODULE_2__.tailRec)(f(a), function (e) {
        return isLeft(e) ? right(left(e.left)) : isLeft(e.right) ? left(f(e.right.left)) : right(right(e.right.right));
    });
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) {
    return isLeft(fa) ? fa : right(f(fa.right));
}; };
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
var bimap = function (f, g) { return function (fa) { return (isLeft(fa) ? left(f(fa.left)) : right(g(fa.right))); }; };
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.0.0
 */
var mapLeft = function (f) { return function (fa) {
    return isLeft(fa) ? left(f(fa.left)) : fa;
}; };
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
var apW = function (fa) { return function (fab) { return (isLeft(fab) ? fab : isLeft(fa) ? fa : right(fab.right(fa.right))); }; };
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = apW;
/**
 * @category Pointed
 * @since 2.7.0
 */
var of = right;
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
var chainW = function (f) { return function (ma) {
    return isLeft(ma) ? ma : f(ma.right);
}; };
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = chainW;
/**
 * The `flatten` function is the conventional monad join operator. It is used to remove one level of monadic structure, projecting its bound argument into the outer level.
 *
 * Derivable from `Chain`.
 *
 * @example
 * import * as E from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(E.flatten(E.right(E.right('a'))), E.right('a'))
 * assert.deepStrictEqual(E.flatten(E.right(E.left('e'))), E.left('e'))
 * assert.deepStrictEqual(E.flatten(E.left('e')), E.left('e'))
 *
 * @category combinators
 * @since 2.0.0
 */
var flatten = 
/*#__PURE__*/
chain(_function__WEBPACK_IMPORTED_MODULE_1__.identity);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) { return (isLeft(fa) ? that() : fa); }; };
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */
var alt = altW;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) {
    return isLeft(wa) ? wa : right(f(wa));
}; };
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
var duplicate = 
/*#__PURE__*/
extend(_function__WEBPACK_IMPORTED_MODULE_1__.identity);
/**
 * Left-associative fold of a structure.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 *
 * const startWith = 'prefix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.reduce(startWith, concat)),
 *   'prefix:a'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.reduce(startWith, concat)),
 *   'prefix'
 * )
 *
 * @category Foldable
 * @since 2.0.0
 */
var reduce = function (b, f) { return function (fa) {
    return isLeft(fa) ? b : f(b, fa.right);
}; };
/**
 * Map each element of the structure to a monoid, and combine the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 * import * as S from 'fp-ts/string'
 *
 * const yell = (a: string) => `${a}!`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.foldMap(S.Monoid)(yell)),
 *   'a!'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.foldMap(S.Monoid)(yell)),
 *   S.Monoid.empty
 * )
 *
 * @category Foldable
 * @since 2.0.0
 */
var foldMap = function (M) { return function (f) { return function (fa) {
    return isLeft(fa) ? M.empty : f(fa.right);
}; }; };
/**
 * Right-associative fold of a structure.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 *
 * const startWith = 'postfix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(
 *   pipe(E.right('a'), E.reduceRight(startWith, concat)),
 *   'a:postfix'
 * )
 *
 * assert.deepStrictEqual(
 *   pipe(E.left('e'), E.reduceRight(startWith, concat)),
 *   'postfix'
 * )
 *
 * @category Foldable
 * @since 2.0.0
 */
var reduceRight = function (b, f) { return function (fa) {
    return isLeft(fa) ? b : f(fa.right, b);
}; };
/**
 * Map each element of a structure to an action, evaluate these actions from left to right, and collect the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as E from 'fp-ts/Either'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(['a']), E.traverse(O.Applicative)(RA.head)),
 *   O.some(E.right('a'))
 *  )
 *
 * assert.deepStrictEqual(
 *   pipe(E.right([]), E.traverse(O.Applicative)(RA.head)),
 *   O.none
 * )
 *
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) { return function (f) { return function (ta) { return (isLeft(ta) ? F.of(left(ta.left)) : F.map(f(ta.right), right)); }; }; };
/**
 * Evaluate each monadic action in the structure from left to right, and collect the results.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import * as E from 'fp-ts/Either'
 * import * as O from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(O.some('a')), E.sequence(O.Applicative)),
 *   O.some(E.right('a'))
 *  )
 *
 * assert.deepStrictEqual(
 *   pipe(E.right(O.none), E.sequence(O.Applicative)),
 *   O.none
 * )
 *
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ma) {
    return isLeft(ma) ? F.of(left(ma.left)) : F.map(ma.right, right);
}; };
/**
 * @category MonadThrow
 * @since 2.6.3
 */
var throwError = left;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
var URI = 'Either';
/**
 * @category instances
 * @since 2.0.0
 */
function getShow(SE, SA) {
    return {
        show: function (ma) { return (isLeft(ma) ? "left(" + SE.show(ma.left) + ")" : "right(" + SA.show(ma.right) + ")"); }
    };
}
/**
 * @category instances
 * @since 2.0.0
 */
function getEq(EL, EA) {
    return {
        equals: function (x, y) {
            return x === y || (isLeft(x) ? isLeft(y) && EL.equals(x.left, y.left) : isRight(y) && EA.equals(x.right, y.right));
        }
    };
}
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * @example
 * import { getSemigroup, left, right } from 'fp-ts/Either'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const S = getSemigroup<string, number>(SemigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 * @category instances
 * @since 2.0.0
 */
function getSemigroup(S) {
    return {
        concat: function (x, y) { return (isLeft(y) ? x : isLeft(x) ? y : right(S.concat(x.right, y.right))); }
    };
}
/**
 * Builds a `Compactable` instance for `Either` given `Monoid` for the left side.
 *
 * @category instances
 * @since 2.10.0
 */
var getCompactable = function (M) {
    var empty = left(M.empty);
    return {
        URI: URI,
        _E: undefined,
        compact: function (ma) { return (isLeft(ma) ? ma : ma.right._tag === 'None' ? empty : right(ma.right.value)); },
        separate: function (ma) {
            return isLeft(ma)
                ? (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(ma, ma)
                : isLeft(ma.right)
                    ? (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(right(ma.right.left), empty)
                    : (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(empty, right(ma.right.right));
        }
    };
};
/**
 * Builds a `Filterable` instance for `Either` given `Monoid` for the left side
 *
 * @category instances
 * @since 2.10.0
 */
function getFilterable(M) {
    var empty = left(M.empty);
    var _a = getCompactable(M), compact = _a.compact, separate = _a.separate;
    var filter = function (ma, predicate) {
        return isLeft(ma) ? ma : predicate(ma.right) ? ma : empty;
    };
    var partition = function (ma, p) {
        return isLeft(ma)
            ? (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(ma, ma)
            : p(ma.right)
                ? (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(empty, right(ma.right))
                : (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(right(ma.right), empty);
    };
    return {
        URI: URI,
        _E: undefined,
        map: _map,
        compact: compact,
        separate: separate,
        filter: filter,
        filterMap: function (ma, f) {
            if (isLeft(ma)) {
                return ma;
            }
            var ob = f(ma.right);
            return ob._tag === 'None' ? empty : right(ob.value);
        },
        partition: partition,
        partitionMap: function (ma, f) {
            if (isLeft(ma)) {
                return (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(ma, ma);
            }
            var e = f(ma.right);
            return isLeft(e) ? (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(right(e.left), empty) : (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(empty, right(e.right));
        }
    };
}
/**
 * Builds `Witherable` instance for `Either` given `Monoid` for the left side
 *
 * @category instances
 * @since 2.0.0
 */
function getWitherable(M) {
    var F_ = getFilterable(M);
    var wither = function (F) {
        var traverseF = _traverse(F);
        return function (ma, f) { return F.map(traverseF(ma, f), F_.compact); };
    };
    var wilt = function (F) {
        var traverseF = _traverse(F);
        return function (ma, f) { return F.map(traverseF(ma, f), F_.separate); };
    };
    return {
        URI: URI,
        _E: undefined,
        map: _map,
        compact: F_.compact,
        separate: F_.separate,
        filter: F_.filter,
        filterMap: F_.filterMap,
        partition: F_.partition,
        partitionMap: F_.partitionMap,
        traverse: _traverse,
        sequence: sequence,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        wither: wither,
        wilt: wilt
    };
}
/**
 * @category instances
 * @since 2.7.0
 */
function getApplicativeValidation(SE) {
    return {
        URI: URI,
        _E: undefined,
        map: _map,
        ap: function (fab, fa) {
            return isLeft(fab)
                ? isLeft(fa)
                    ? left(SE.concat(fab.left, fa.left))
                    : fab
                : isLeft(fa)
                    ? fa
                    : right(fab.right(fa.right));
        },
        of: of
    };
}
/**
 * @category instances
 * @since 2.7.0
 */
function getAltValidation(SE) {
    return {
        URI: URI,
        _E: undefined,
        map: _map,
        alt: function (me, that) {
            if (isRight(me)) {
                return me;
            }
            var ea = that();
            return isLeft(ea) ? left(SE.concat(me.left, ea.left)) : ea;
        }
    };
}
/**
 * @category instances
 * @since 2.7.0
 */
var Functor = {
    URI: URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
var flap = 
/*#_PURE_*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_4__.flap)(Functor);
/**
 * @category instances
 * @since 2.10.0
 */
var Pointed = {
    URI: URI,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
var apFirst = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_5__.apFirst)(Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
var apSecond = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_5__.apSecond)(Apply);
/**
 * @category instances
 * @since 2.7.0
 */
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
var chainFirst = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_6__.chainFirst)(Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst)
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.8.0
 */
var chainFirstW = chainFirst;
/**
 * @category instances
 * @since 2.7.0
 */
var Foldable = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
var Traversable = {
    URI: URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
var Bifunctor = {
    URI: URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
/**
 * @category instances
 * @since 2.7.0
 */
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
var Extend = {
    URI: URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
var ChainRec = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain,
    chainRec: _chainRec
};
/**
 * @category instances
 * @since 2.7.0
 */
var MonadThrow = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain,
    throwError: throwError
};
/**
 * @category instances
 * @since 2.10.0
 */
var FromEither = {
    URI: URI,
    fromEither: _function__WEBPACK_IMPORTED_MODULE_1__.identity
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Default value for the `onError` argument of `tryCatch`
 *
 * @since 2.0.0
 */
function toError(e) {
    return e instanceof Error ? e : new Error(String(e));
}
/**
 * @since 2.0.0
 */
function elem(E) {
    return function (a, ma) { return (isLeft(ma) ? false : E.equals(a, ma.right)); };
}
/**
 * Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.
 *
 * @example
 * import { exists, left, right } from 'fp-ts/Either'
 *
 * const gt2 = exists((n: number) => n > 2)
 *
 * assert.strictEqual(gt2(left('a')), false)
 * assert.strictEqual(gt2(right(1)), false)
 * assert.strictEqual(gt2(right(3)), true)
 *
 * @since 2.0.0
 */
function exists(predicate) {
    return function (ma) { return (isLeft(ma) ? false : predicate(ma.right)); };
}
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
var Do = 
/*#__PURE__*/
of({});
/**
 * @since 2.8.0
 */
var bindTo = 
/*#__PURE__*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_4__.bindTo)(Functor);
/**
 * @since 2.8.0
 */
var bind = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_6__.bind)(Chain);
/**
 * @since 2.8.0
 */
var bindW = bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
var apS = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_5__.apS)(Apply);
/**
 * @since 2.8.0
 */
var apSW = apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) {
    var out = [];
    for (var i = 0; i < as.length; i++) {
        var e = f(i, as[i]);
        if (isLeft(e)) {
            return e;
        }
        out.push(e.right);
    }
    return right(out);
}; };
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return traverseArrayWithIndex(function (_, a) { return f(a); }); };
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
var sequenceArray = 
/*#__PURE__*/
traverseArray(_function__WEBPACK_IMPORTED_MODULE_1__.identity);
/**
 * Use [`parse`](./Json.ts.html#parse) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
function parseJSON(s, onError) {
    return tryCatch(function () { return JSON.parse(s); }, onError);
}
/**
 * Use [`stringify`](./Json.ts.html#stringify) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
var stringifyJSON = function (u, onError) {
    return tryCatch(function () {
        var s = JSON.stringify(u);
        if (typeof s !== 'string') {
            throw new Error('Converting unsupported structure to JSON');
        }
        return s;
    }, onError);
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var either = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: _chain,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    extend: _extend,
    chainRec: _chainRec,
    throwError: throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getApplySemigroup = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_5__.getApplySemigroup)(Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getApplyMonoid = 
/*#__PURE__*/
(0,_Applicative__WEBPACK_IMPORTED_MODULE_7__.getApplicativeMonoid)(Applicative);
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getValidationSemigroup = function (SE, SA) {
    return (0,_Apply__WEBPACK_IMPORTED_MODULE_5__.getApplySemigroup)(getApplicativeValidation(SE))(SA);
};
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getValidationMonoid = function (SE, MA) {
    return (0,_Applicative__WEBPACK_IMPORTED_MODULE_7__.getApplicativeMonoid)(getApplicativeValidation(SE))(MA);
};
/**
 * Use [`getApplicativeValidation`](#getapplicativevalidation) and [`getAltValidation`](#getaltvalidation) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
function getValidation(SE) {
    var ap = getApplicativeValidation(SE).ap;
    var alt = getAltValidation(SE).alt;
    return {
        URI: URI,
        _E: undefined,
        map: _map,
        of: of,
        chain: _chain,
        bimap: _bimap,
        mapLeft: _mapLeft,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        extend: _extend,
        traverse: _traverse,
        sequence: sequence,
        chainRec: _chainRec,
        throwError: throwError,
        ap: ap,
        alt: alt
    };
}


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Eq.js":
/*!*********************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Eq.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEquals": () => /* binding */ fromEquals,
/* harmony export */   "struct": () => /* binding */ struct,
/* harmony export */   "tuple": () => /* binding */ tuple,
/* harmony export */   "contramap": () => /* binding */ contramap,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "eqStrict": () => /* binding */ eqStrict,
/* harmony export */   "getSemigroup": () => /* binding */ getSemigroup,
/* harmony export */   "getMonoid": () => /* binding */ getMonoid,
/* harmony export */   "Contravariant": () => /* binding */ Contravariant,
/* harmony export */   "getTupleEq": () => /* binding */ getTupleEq,
/* harmony export */   "getStructEq": () => /* binding */ getStructEq,
/* harmony export */   "strictEqual": () => /* binding */ strictEqual,
/* harmony export */   "eq": () => /* binding */ eq,
/* harmony export */   "eqBoolean": () => /* binding */ eqBoolean,
/* harmony export */   "eqString": () => /* binding */ eqString,
/* harmony export */   "eqNumber": () => /* binding */ eqNumber,
/* harmony export */   "eqDate": () => /* binding */ eqDate
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
function fromEquals(equals) {
    return {
        equals: function (x, y) { return x === y || equals(x, y); }
    };
}
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var struct = function (eqs) {
    return fromEquals(function (first, second) {
        for (var key in eqs) {
            if (!eqs[key].equals(first[key], second[key])) {
                return false;
            }
        }
        return true;
    });
};
/**
 * Given a tuple of `Eq`s returns a `Eq` for the tuple
 *
 * @example
 * import { tuple } from 'fp-ts/Eq'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import * as B from 'fp-ts/boolean'
 *
 * const E = tuple(S.Eq, N.Eq, B.Eq)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, true]), true)
 * assert.strictEqual(E.equals(['a', 1, true], ['b', 1, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 2, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, false]), false)
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var eqs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eqs[_i] = arguments[_i];
    }
    return fromEquals(function (first, second) { return eqs.every(function (E, i) { return E.equals(first[i], second[i]); }); });
};
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var contramap_ = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fa, contramap(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */
var contramap = function (f) { return function (fa) {
    return fromEquals(function (x, y) { return fa.equals(f(x), f(y)); });
}; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
var URI = 'Eq';
/**
 * @category instances
 * @since 2.5.0
 */
var eqStrict = {
    equals: function (a, b) { return a === b; }
};
var empty = {
    equals: function () { return true; }
};
/**
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function () { return ({
    concat: function (x, y) { return fromEquals(function (a, b) { return x.equals(a, b) && y.equals(a, b); }); }
}); };
/**
 * @category instances
 * @since 2.6.0
 */
var getMonoid = function () { return ({
    concat: getSemigroup().concat,
    empty: empty
}); };
/**
 * @category instances
 * @since 2.7.0
 */
var Contravariant = {
    URI: URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getTupleEq = tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getStructEq = struct;
/**
 * Use [`eqStrict`](#eqstrict) instead
 *
 * @since 2.0.0
 * @deprecated
 */
var strictEqual = eqStrict.equals;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var eq = Contravariant;
/**
 * Use [`Eq`](./boolean.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var eqBoolean = eqStrict;
/**
 * Use [`Eq`](./string.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var eqString = eqStrict;
/**
 * Use [`Eq`](./number.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var eqNumber = eqStrict;
/**
 * Use [`Eq`](./Date.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var eqDate = {
    equals: function (first, second) { return first.valueOf() === second.valueOf(); }
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Field.js":
/*!************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Field.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gcd": () => /* binding */ gcd,
/* harmony export */   "lcm": () => /* binding */ lcm,
/* harmony export */   "fieldNumber": () => /* binding */ fieldNumber
/* harmony export */ });
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * The *greatest common divisor* of two values
 *
 * @since 2.0.0
 */
function gcd(E, field) {
    var zero = field.zero;
    var f = function (x, y) { return (E.equals(y, zero) ? x : f(y, field.mod(x, y))); };
    return f;
}
/**
 * The *least common multiple* of two values
 *
 * @since 2.0.0
 */
function lcm(E, F) {
    var zero = F.zero;
    var gcdSF = gcd(E, F);
    return function (x, y) { return (E.equals(x, zero) || E.equals(y, zero) ? zero : F.div(F.mul(x, y), gcdSF(x, y))); };
}
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`Field`](./number.ts.html#Field) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var fieldNumber = {
    add: function (x, y) { return x + y; },
    zero: 0,
    mul: function (x, y) { return x * y; },
    one: 1,
    sub: function (x, y) { return x - y; },
    degree: function (_) { return 1; },
    div: function (x, y) { return x / y; },
    mod: function (x, y) { return x % y; }
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "flap": () => /* binding */ flap,
/* harmony export */   "bindTo": () => /* binding */ bindTo,
/* harmony export */   "getFunctorComposition": () => /* binding */ getFunctorComposition
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/**
 * A `Functor` is a type constructor which supports a mapping operation `map`.
 *
 * `map` can be used to turn functions `a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.map(fa, a => a) <-> fa`
 * 2. Composition: `F.map(fa, a => bc(ab(a))) <-> F.map(F.map(fa, ab), bc)`
 *
 * @since 2.0.0
 */

function map(F, G) {
    return function (f) { return function (fa) { return F.map(fa, function (ga) { return G.map(ga, f); }); }; };
}
function flap(F) {
    return function (a) { return function (fab) { return F.map(fab, function (f) { return f(a); }); }; };
}
function bindTo(F) {
    return function (name) { return function (fa) { return F.map(fa, function (a) {
        var _a;
        return (_a = {}, _a[name] = a, _a);
    }); }; };
}
/** @deprecated */
function getFunctorComposition(F, G) {
    var _map = map(F, G);
    return {
        map: function (fga, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fga, _map(f)); }
    };
}


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/IO.js":
/*!*********************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/IO.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "of": () => /* binding */ of,
/* harmony export */   "chain": () => /* binding */ chain,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "fromIO": () => /* binding */ fromIO,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "Functor": () => /* binding */ Functor,
/* harmony export */   "flap": () => /* binding */ flap,
/* harmony export */   "Pointed": () => /* binding */ Pointed,
/* harmony export */   "Apply": () => /* binding */ Apply,
/* harmony export */   "apFirst": () => /* binding */ apFirst,
/* harmony export */   "apSecond": () => /* binding */ apSecond,
/* harmony export */   "Applicative": () => /* binding */ Applicative,
/* harmony export */   "Chain": () => /* binding */ Chain,
/* harmony export */   "Monad": () => /* binding */ Monad,
/* harmony export */   "chainFirst": () => /* binding */ chainFirst,
/* harmony export */   "MonadIO": () => /* binding */ MonadIO,
/* harmony export */   "ChainRec": () => /* binding */ ChainRec,
/* harmony export */   "FromIO": () => /* binding */ FromIO,
/* harmony export */   "Do": () => /* binding */ Do,
/* harmony export */   "bindTo": () => /* binding */ bindTo,
/* harmony export */   "bind": () => /* binding */ bind,
/* harmony export */   "apS": () => /* binding */ apS,
/* harmony export */   "traverseArrayWithIndex": () => /* binding */ traverseArrayWithIndex,
/* harmony export */   "traverseArray": () => /* binding */ traverseArray,
/* harmony export */   "sequenceArray": () => /* binding */ sequenceArray,
/* harmony export */   "io": () => /* binding */ io,
/* harmony export */   "getSemigroup": () => /* binding */ getSemigroup,
/* harmony export */   "getMonoid": () => /* binding */ getMonoid
/* harmony export */ });
/* harmony import */ var _Applicative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Applicative */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Applicative.js");
/* harmony import */ var _Apply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _Functor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js");
/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Chain.js");
/**
 * ```ts
 * interface IO<A> {
 *   (): A
 * }
 * ```
 *
 * `IO<A>` represents a non-deterministic synchronous computation that can cause side effects, yields a value of
 * type `A` and **never fails**. If you want to represent a synchronous computation that may fail, please see
 * `IOEither`.
 *
 * @since 2.0.0
 */





// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (ma, f) { return function () { return f(ma()); }; };
var _ap = function (mab, ma) { return function () { return mab()(ma()); }; };
var _chain = function (ma, f) { return function () { return f(ma())(); }; };
var _chainRec = function (a, f) { return function () {
    var e = f(a)();
    while (e._tag === 'Left') {
        e = f(e.left)();
    }
    return e.right;
}; };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return _map(fa, f); }; };
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) { return _ap(fab, fa); }; };
/**
 * @category Pointed
 * @since 2.0.0
 */
var of = _function__WEBPACK_IMPORTED_MODULE_0__.constant;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) { return _chain(ma, f); }; };
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
var flatten = 
/*#__PURE__*/
chain(_function__WEBPACK_IMPORTED_MODULE_0__.identity);
/**
 * @category constructors
 * @since 2.7.0
 * @deprecated
 */
var fromIO = _function__WEBPACK_IMPORTED_MODULE_0__.identity;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
var URI = 'IO';
/**
 * @category instances
 * @since 2.7.0
 */
var Functor = {
    URI: URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
var flap = 
/*#_PURE_*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_1__.flap)(Functor);
/**
 * @category instances
 * @since 2.10.0
 */
var Pointed = {
    URI: URI,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
var apFirst = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_2__.apFirst)(Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
var apSecond = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_2__.apSecond)(Apply);
/**
 * @category instances
 * @since 2.7.0
 */
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
var chainFirst = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_3__.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.7.0
 */
var MonadIO = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain,
    fromIO: fromIO
};
/**
 * @category instances
 * @since 2.7.0
 */
var ChainRec = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain,
    chainRec: _chainRec
};
/**
 * @category instances
 * @since 2.10.0
 */
var FromIO = {
    URI: URI,
    fromIO: _function__WEBPACK_IMPORTED_MODULE_0__.identity
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
var Do = 
/*#__PURE__*/
of({});
/**
 * @since 2.8.0
 */
var bindTo = 
/*#__PURE__*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_1__.bindTo)(Functor);
/**
 * @since 2.8.0
 */
var bind = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_3__.bind)(Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
var apS = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_2__.apS)(Apply);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) { return function () { return as.map(function (a, i) { return f(i, a)(); }); }; }; };
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) {
    return traverseArrayWithIndex(function (_, a) { return f(a); });
};
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
var sequenceArray = 
/*#__PURE__*/
traverseArray(_function__WEBPACK_IMPORTED_MODULE_0__.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var io = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: _chain,
    fromIO: fromIO,
    chainRec: _chainRec
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getSemigroup = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_2__.getApplySemigroup)(Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getMonoid = 
/*#__PURE__*/
(0,_Applicative__WEBPACK_IMPORTED_MODULE_4__.getApplicativeMonoid)(Applicative);


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Monoid.js":
/*!*************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Monoid.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "struct": () => /* binding */ struct,
/* harmony export */   "tuple": () => /* binding */ tuple,
/* harmony export */   "monoidVoid": () => /* binding */ monoidVoid,
/* harmony export */   "concatAll": () => /* binding */ concatAll,
/* harmony export */   "getTupleMonoid": () => /* binding */ getTupleMonoid,
/* harmony export */   "getStructMonoid": () => /* binding */ getStructMonoid,
/* harmony export */   "getDualMonoid": () => /* binding */ getDualMonoid,
/* harmony export */   "getJoinMonoid": () => /* binding */ getJoinMonoid,
/* harmony export */   "getMeetMonoid": () => /* binding */ getMeetMonoid,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "monoidAll": () => /* binding */ monoidAll,
/* harmony export */   "monoidAny": () => /* binding */ monoidAny,
/* harmony export */   "getFunctionMonoid": () => /* binding */ getFunctionMonoid,
/* harmony export */   "getEndomorphismMonoid": () => /* binding */ getEndomorphismMonoid,
/* harmony export */   "monoidString": () => /* binding */ monoidString,
/* harmony export */   "monoidSum": () => /* binding */ monoidSum,
/* harmony export */   "monoidProduct": () => /* binding */ monoidProduct
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/internal.js");
/* harmony import */ var _Semigroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Semigroup */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Semigroup.js");



// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Get a monoid where `concat` will return the minimum, based on the provided bounded order.
 *
 * The `empty` value is the `top` value.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as M from 'fp-ts/Monoid'
 *
 * const M1 = M.min(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */
var min = function (B) { return ({
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.min(B).concat,
    empty: B.top
}); };
/**
 * Get a monoid where `concat` will return the maximum, based on the provided bounded order.
 *
 * The `empty` value is the `bottom` value.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as M from 'fp-ts/Monoid'
 *
 * const M1 = M.max(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */
var max = function (B) { return ({
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.max(B).concat,
    empty: B.bottom
}); };
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Monoid`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Monoid'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Monoid).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (M) { return ({
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.reverse(M).concat,
    empty: M.empty
}); };
/**
 * Given a struct of monoids returns a monoid for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const M = struct<Point>({
 *   x: N.MonoidSum,
 *   y: N.MonoidSum
 * })
 *
 * assert.deepStrictEqual(M.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */
var struct = function (monoids) {
    var empty = {};
    for (var k in monoids) {
        if (_internal__WEBPACK_IMPORTED_MODULE_1__.has.call(monoids, k)) {
            empty[k] = monoids[k].empty;
        }
    }
    return {
        concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.struct(monoids).concat,
        empty: empty
    };
};
/**
 * Given a tuple of monoids returns a monoid for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Monoid'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const M1 = tuple(S.Monoid, N.MonoidSum)
 * assert.deepStrictEqual(M1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const M2 = tuple(S.Monoid, N.MonoidSum, B.MonoidAll)
 * assert.deepStrictEqual(M2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var monoids = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        monoids[_i] = arguments[_i];
    }
    return ({
        concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.tuple.apply(_Semigroup__WEBPACK_IMPORTED_MODULE_0__, monoids).concat,
        empty: monoids.map(function (m) { return m.empty; })
    });
};
/**
 * @category instances
 * @since 2.0.0
 */
var monoidVoid = {
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.semigroupVoid.concat,
    empty: undefined
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the monoid `empty` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([1, 2, 3]), 6)
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([]), 0)
 *
 * @since 2.10.0
 */
var concatAll = function (M) { return _Semigroup__WEBPACK_IMPORTED_MODULE_0__.concatAll(M)(M.empty); };
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getTupleMonoid = tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getStructMonoid = struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getDualMonoid = reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
var getJoinMonoid = max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
var getMeetMonoid = min;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
var fold = concatAll;
/**
 * Use [`MonoidAll`](./boolean.ts.html#monoidall) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var monoidAll = {
    // tslint:disable-next-line: deprecation
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.semigroupAll.concat,
    empty: true
};
/**
 * Use [`MonoidAny`](./boolean.ts.html#MonoidAny) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var monoidAny = {
    // tslint:disable-next-line: deprecation
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.semigroupAny.concat,
    empty: false
};
/**
 * Use [`getMonoid`](./function.ts.html#getMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getFunctionMonoid = _function__WEBPACK_IMPORTED_MODULE_2__.getMonoid;
/**
 * Use [`getEndomorphismMonoid`](./function.ts.html#getEndomorphismMonoid) instead.
 *
 * **Note**. The execution order in [`getEndomorphismMonoid`](./function.ts.html#getEndomorphismMonoid) is reversed.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getEndomorphismMonoid = function () { return reverse((0,_function__WEBPACK_IMPORTED_MODULE_2__.getEndomorphismMonoid)()); };
/**
 * Use [`Monoid`](./string.ts.html#Monoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var monoidString = {
    // tslint:disable-next-line: deprecation
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.semigroupString.concat,
    empty: ''
};
/**
 * Use [`MonoidSum`](./number.ts.html#MonoidSum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var monoidSum = {
    // tslint:disable-next-line: deprecation
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.semigroupSum.concat,
    empty: 0
};
/**
 * Use [`MonoidProduct`](./number.ts.html#MonoidProduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var monoidProduct = {
    // tslint:disable-next-line: deprecation
    concat: _Semigroup__WEBPACK_IMPORTED_MODULE_0__.semigroupProduct.concat,
    empty: 1
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Option.js":
/*!*************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Option.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSome": () => /* binding */ isSome,
/* harmony export */   "isNone": () => /* binding */ isNone,
/* harmony export */   "none": () => /* binding */ none,
/* harmony export */   "some": () => /* binding */ some,
/* harmony export */   "fromPredicate": () => /* binding */ fromPredicate,
/* harmony export */   "getLeft": () => /* binding */ getLeft,
/* harmony export */   "getRight": () => /* binding */ getRight,
/* harmony export */   "fromEither": () => /* binding */ fromEither,
/* harmony export */   "matchW": () => /* binding */ matchW,
/* harmony export */   "foldW": () => /* binding */ foldW,
/* harmony export */   "match": () => /* binding */ match,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "getOrElseW": () => /* binding */ getOrElseW,
/* harmony export */   "getOrElse": () => /* binding */ getOrElse,
/* harmony export */   "fromNullable": () => /* binding */ fromNullable,
/* harmony export */   "tryCatch": () => /* binding */ tryCatch,
/* harmony export */   "tryCatchK": () => /* binding */ tryCatchK,
/* harmony export */   "fromNullableK": () => /* binding */ fromNullableK,
/* harmony export */   "chainNullableK": () => /* binding */ chainNullableK,
/* harmony export */   "toNullable": () => /* binding */ toNullable,
/* harmony export */   "toUndefined": () => /* binding */ toUndefined,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "of": () => /* binding */ of,
/* harmony export */   "chain": () => /* binding */ chain,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "altW": () => /* binding */ altW,
/* harmony export */   "alt": () => /* binding */ alt,
/* harmony export */   "zero": () => /* binding */ zero,
/* harmony export */   "throwError": () => /* binding */ throwError,
/* harmony export */   "extend": () => /* binding */ extend,
/* harmony export */   "duplicate": () => /* binding */ duplicate,
/* harmony export */   "reduce": () => /* binding */ reduce,
/* harmony export */   "foldMap": () => /* binding */ foldMap,
/* harmony export */   "reduceRight": () => /* binding */ reduceRight,
/* harmony export */   "compact": () => /* binding */ compact,
/* harmony export */   "separate": () => /* binding */ separate,
/* harmony export */   "filter": () => /* binding */ filter,
/* harmony export */   "filterMap": () => /* binding */ filterMap,
/* harmony export */   "partition": () => /* binding */ partition,
/* harmony export */   "partitionMap": () => /* binding */ partitionMap,
/* harmony export */   "traverse": () => /* binding */ traverse,
/* harmony export */   "sequence": () => /* binding */ sequence,
/* harmony export */   "wither": () => /* binding */ wither,
/* harmony export */   "wilt": () => /* binding */ wilt,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "getShow": () => /* binding */ getShow,
/* harmony export */   "getEq": () => /* binding */ getEq,
/* harmony export */   "getOrd": () => /* binding */ getOrd,
/* harmony export */   "getFirstMonoid": () => /* binding */ getFirstMonoid,
/* harmony export */   "getLastMonoid": () => /* binding */ getLastMonoid,
/* harmony export */   "getMonoid": () => /* binding */ getMonoid,
/* harmony export */   "Functor": () => /* binding */ Functor,
/* harmony export */   "flap": () => /* binding */ flap,
/* harmony export */   "Pointed": () => /* binding */ Pointed,
/* harmony export */   "Apply": () => /* binding */ Apply,
/* harmony export */   "apFirst": () => /* binding */ apFirst,
/* harmony export */   "apSecond": () => /* binding */ apSecond,
/* harmony export */   "Applicative": () => /* binding */ Applicative,
/* harmony export */   "Chain": () => /* binding */ Chain,
/* harmony export */   "Monad": () => /* binding */ Monad,
/* harmony export */   "chainFirst": () => /* binding */ chainFirst,
/* harmony export */   "Foldable": () => /* binding */ Foldable,
/* harmony export */   "Alt": () => /* binding */ Alt,
/* harmony export */   "Alternative": () => /* binding */ Alternative,
/* harmony export */   "Extend": () => /* binding */ Extend,
/* harmony export */   "Compactable": () => /* binding */ Compactable,
/* harmony export */   "Filterable": () => /* binding */ Filterable,
/* harmony export */   "Traversable": () => /* binding */ Traversable,
/* harmony export */   "Witherable": () => /* binding */ Witherable,
/* harmony export */   "MonadThrow": () => /* binding */ MonadThrow,
/* harmony export */   "elem": () => /* binding */ elem,
/* harmony export */   "exists": () => /* binding */ exists,
/* harmony export */   "getRefinement": () => /* binding */ getRefinement,
/* harmony export */   "Do": () => /* binding */ Do,
/* harmony export */   "bindTo": () => /* binding */ bindTo,
/* harmony export */   "bind": () => /* binding */ bind,
/* harmony export */   "apS": () => /* binding */ apS,
/* harmony export */   "traverseArrayWithIndex": () => /* binding */ traverseArrayWithIndex,
/* harmony export */   "traverseArray": () => /* binding */ traverseArray,
/* harmony export */   "sequenceArray": () => /* binding */ sequenceArray,
/* harmony export */   "mapNullable": () => /* binding */ mapNullable,
/* harmony export */   "option": () => /* binding */ option,
/* harmony export */   "getApplySemigroup": () => /* binding */ getApplySemigroup,
/* harmony export */   "getApplyMonoid": () => /* binding */ getApplyMonoid
/* harmony export */ });
/* harmony import */ var _Applicative__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Applicative */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Applicative.js");
/* harmony import */ var _Apply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js");
/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Chain.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _Functor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/internal.js");
/* harmony import */ var _Separated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Separated */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Separated.js");







// -------------------------------------------------------------------------------------
// guards
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise.
 *
 * @example
 * import { some, none, isSome } from 'fp-ts/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none), false)
 *
 * @category guards
 * @since 2.0.0
 */
var isSome = _internal__WEBPACK_IMPORTED_MODULE_0__.isSome;
/**
 * Returns `true` if the option is `None`, `false` otherwise.
 *
 * @example
 * import { some, none, isNone } from 'fp-ts/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none), true)
 *
 * @category guards
 * @since 2.0.0
 */
var isNone = function (fa) { return fa._tag === 'None'; };
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * `None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.
 *
 * @category constructors
 * @since 2.0.0
 */
var none = { _tag: 'None' };
/**
 * Constructs a `Some`. Represents an optional value that exists.
 *
 * @category constructors
 * @since 2.0.0
 */
var some = function (a) { return ({ _tag: 'Some', value: a }); };
function fromPredicate(predicate) {
    return function (a) { return (predicate(a) ? some(a) : none); };
}
/**
 * Returns the `Left` value of an `Either` if possible.
 *
 * @example
 * import { getLeft, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getLeft(right(1)), none)
 * assert.deepStrictEqual(getLeft(left('a')), some('a'))
 *
 * @category constructors
 * @since 2.0.0
 */
function getLeft(ma) {
    return ma._tag === 'Right' ? none : some(ma.left);
}
/**
 * Returns the `Right` value of an `Either` if possible.
 *
 * @example
 * import { getRight, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getRight(right(1)), some(1))
 * assert.deepStrictEqual(getRight(left('a')), none)
 *
 * @category constructors
 * @since 2.0.0
 */
function getRight(ma) {
    return ma._tag === 'Left' ? none : some(ma.right);
}
/**
 * Transforms an `Either` to an `Option` discarding the error.
 *
 * Alias of [getRight](#getright)
 *
 * @category constructors
 * @since 2.0.0
 */
var fromEither = getRight;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onNone, onSome) { return function (ma) {
    return isNone(ma) ? onNone() : onSome(ma.value);
}; };
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */
var foldW = matchW;
/**
 * Takes a (lazy) default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @example
 * import { some, none, match } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a some containing 1'
 * )
 *
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a none'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
var match = matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */
var fold = match;
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
var getOrElseW = function (onNone) { return function (ma) { return (isNone(ma) ? onNone() : ma.value); }; };
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @example
 * import { some, none, getOrElse } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category destructors
 * @since 2.0.0
 */
var getOrElse = getOrElseW;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`.
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none)
 * assert.deepStrictEqual(fromNullable(null), none)
 * assert.deepStrictEqual(fromNullable(1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */
var fromNullable = function (a) { return (a == null ? none : some(a)); };
/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in a
 * `Some`.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import { none, some, tryCatch } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   tryCatch(() => {
 *     throw new Error()
 *   }),
 *   none
 * )
 * assert.deepStrictEqual(tryCatch(() => 1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */
var tryCatch = function (f) {
    try {
        return some(f());
    }
    catch (e) {
        return none;
    }
};
/**
 * Converts a function that may throw to one returning a `Option`.
 *
 * @category interop
 * @since 2.10.0
 */
var tryCatchK = function (f) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return tryCatch(function () { return f.apply(void 0, a); });
}; };
/**
 * Returns a *smart constructor* from a function that returns a nullable value.
 *
 * @example
 * import { fromNullableK, none, some } from 'fp-ts/Option'
 *
 * const f = (s: string): number | undefined => {
 *   const n = parseFloat(s)
 *   return isNaN(n) ? undefined : n
 * }
 *
 * const g = fromNullableK(f)
 *
 * assert.deepStrictEqual(g('1'), some(1))
 * assert.deepStrictEqual(g('a'), none)
 *
 * @category interop
 * @since 2.9.0
 */
var fromNullableK = function (f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.flow)(f, fromNullable); };
/**
 * This is `chain` + `fromNullable`, useful when working with optional values.
 *
 * @example
 * import { some, none, fromNullable, chainNullableK } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Employee {
 *   readonly company?: {
 *     readonly address?: {
 *       readonly street?: {
 *         readonly name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee1.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   some('high street')
 * )
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee2.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   none
 * )
 *
 * @category interop
 * @since 2.9.0
 */
var chainNullableK = function (f) { return function (ma) {
    return isNone(ma) ? none : fromNullable(f(ma.value));
}; };
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @example
 * import { some, none, toNullable } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toNullable
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toNullable
 *   ),
 *   null
 * )
 *
 * @category interop
 * @since 2.0.0
 */
var toNullable = 
/*#__PURE__*/
match(_function__WEBPACK_IMPORTED_MODULE_1__.constNull, _function__WEBPACK_IMPORTED_MODULE_1__.identity);
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @example
 * import { some, none, toUndefined } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toUndefined
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toUndefined
 *   ),
 *   undefined
 * )
 *
 * @category interop
 * @since 2.0.0
 */
var toUndefined = 
/*#__PURE__*/
match(_function__WEBPACK_IMPORTED_MODULE_1__.constUndefined, _function__WEBPACK_IMPORTED_MODULE_1__.identity);
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, map(f)); };
var _ap = function (fab, fa) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fab, ap(fa)); };
var _chain = function (ma, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(ma, chain(f)); };
var _reduce = function (fa, b, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, reduce(b, f)); };
var _foldMap = function (M) {
    var foldMapM = foldMap(M);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, foldMapM(f)); };
};
var _reduceRight = function (fa, b, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, reduceRight(b, f)); };
var _traverse = function (F) {
    var traverseF = traverse(F);
    return function (ta, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _alt = function (fa, that) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, alt(that)); };
var _filter = function (fa, predicate) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, filter(predicate)); };
/* istanbul ignore next */
var _filterMap = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, filterMap(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(wa, extend(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) {
    return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, partition(predicate));
};
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, partitionMap(f)); };
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = wither(F);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = wilt(F);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) {
    return isNone(fa) ? none : some(f(fa.value));
}; };
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) {
    return isNone(fab) ? none : isNone(fa) ? none : some(fab.value(fa.value));
}; };
/**
 * @category Pointed
 * @since 2.7.0
 */
var of = some;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) {
    return isNone(ma) ? none : f(ma.value);
}; };
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
var flatten = 
/*#__PURE__*/
chain(_function__WEBPACK_IMPORTED_MODULE_1__.identity);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) {
    return isNone(fa) ? that() : fa;
}; };
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `Option` returns the left-most non-`None` value.
 *
 * @example
 * import * as O from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some('a'),
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('a')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none,
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('b')
 * )
 *
 * @category Alt
 * @since 2.0.0
 */
var alt = altW;
/**
 * @category Alternative
 * @since 2.7.0
 */
var zero = function () { return none; };
/**
 * @category MonadThrow
 * @since 2.7.0
 */
var throwError = function () { return none; };
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) {
    return isNone(wa) ? none : some(f(wa));
}; };
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
var duplicate = 
/*#__PURE__*/
extend(_function__WEBPACK_IMPORTED_MODULE_1__.identity);
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduce = function (b, f) { return function (fa) {
    return isNone(fa) ? b : f(b, fa.value);
}; };
/**
 * @category Foldable
 * @since 2.0.0
 */
var foldMap = function (M) { return function (f) { return function (fa) {
    return isNone(fa) ? M.empty : f(fa.value);
}; }; };
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduceRight = function (b, f) { return function (fa) {
    return isNone(fa) ? b : f(fa.value, b);
}; };
/**
 * @category Compactable
 * @since 2.0.0
 */
var compact = flatten;
var defaultSeparated = 
/*#__PURE__*/
(0,_Separated__WEBPACK_IMPORTED_MODULE_2__.separated)(none, none);
/**
 * @category Compactable
 * @since 2.0.0
 */
var separate = function (ma) {
    return isNone(ma) ? defaultSeparated : (0,_Separated__WEBPACK_IMPORTED_MODULE_2__.separated)(getLeft(ma.value), getRight(ma.value));
};
/**
 * @category Filterable
 * @since 2.0.0
 */
var filter = function (predicate) { return function (fa) { return (isNone(fa) ? none : predicate(fa.value) ? fa : none); }; };
/**
 * @category Filterable
 * @since 2.0.0
 */
var filterMap = function (f) { return function (fa) {
    return isNone(fa) ? none : f(fa.value);
}; };
/**
 * @category Filterable
 * @since 2.0.0
 */
var partition = function (predicate) { return function (fa) {
    return (0,_Separated__WEBPACK_IMPORTED_MODULE_2__.separated)(_filter(fa, function (a) { return !predicate(a); }), _filter(fa, predicate));
}; };
/**
 * @category Filterable
 * @since 2.0.0
 */
var partitionMap = function (f) { return (0,_function__WEBPACK_IMPORTED_MODULE_1__.flow)(map(f), separate); };
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) { return function (f) { return function (ta) { return (isNone(ta) ? F.of(none) : F.map(f(ta.value), some)); }; }; };
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) { return (isNone(ta) ? F.of(none) : F.map(ta.value, some)); }; };
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) { return function (f) { return function (fa) { return (isNone(fa) ? F.of(none) : f(fa.value)); }; }; };
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) { return function (f) { return function (fa) {
    return isNone(fa) ? F.of(defaultSeparated) : F.map(f(fa.value), function (e) { return (0,_Separated__WEBPACK_IMPORTED_MODULE_2__.separated)(getLeft(e), getRight(e)); });
}; }; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
var URI = 'Option';
/**
 * @category instances
 * @since 2.0.0
 */
function getShow(S) {
    return {
        show: function (ma) { return (isNone(ma) ? 'none' : "some(" + S.show(ma.value) + ")"); }
    };
}
/**
 * @example
 * import { none, some, getEq } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals(none, none), true)
 * assert.strictEqual(E.equals(none, some(1)), false)
 * assert.strictEqual(E.equals(some(1), none), false)
 * assert.strictEqual(E.equals(some(1), some(2)), false)
 * assert.strictEqual(E.equals(some(1), some(1)), true)
 *
 * @category instances
 * @since 2.0.0
 */
function getEq(E) {
    return {
        equals: function (x, y) { return x === y || (isNone(x) ? isNone(y) : isNone(y) ? false : E.equals(x.value, y.value)); }
    };
}
/**
 * The `Ord` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Ord` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 *
 * @example
 * import { none, some, getOrd } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const O = getOrd(N.Ord)
 * assert.strictEqual(O.compare(none, none), 0)
 * assert.strictEqual(O.compare(none, some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @category instances
 * @since 2.0.0
 */
function getOrd(O) {
    return {
        equals: getEq(O).equals,
        compare: function (x, y) { return (x === y ? 0 : isSome(x) ? (isSome(y) ? O.compare(x.value, y.value) : 1) : -1); }
    };
}
/**
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @example
 * import { getFirstMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getFirstMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))
 *
 * @category instances
 * @since 2.0.0
 */
function getFirstMonoid() {
    return {
        concat: function (x, y) { return (isNone(x) ? y : x); },
        empty: none
    };
}
/**
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @example
 * import { getLastMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getLastMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))
 *
 * @category instances
 * @since 2.0.0
 */
function getLastMonoid() {
    return {
        concat: function (x, y) { return (isNone(y) ? x : y); },
        empty: none
    };
}
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(a) | some(a)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getMonoid, some, none } from 'fp-ts/Option'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const M = getMonoid(SemigroupSum)
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))
 *
 * @category instances
 * @since 2.0.0
 */
function getMonoid(S) {
    return {
        concat: function (x, y) { return (isNone(x) ? y : isNone(y) ? x : some(S.concat(x.value, y.value))); },
        empty: none
    };
}
/**
 * @category instances
 * @since 2.7.0
 */
var Functor = {
    URI: URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
var flap = 
/*#__PURE__*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_3__.flap)(Functor);
/**
 * @category instances
 * @since 2.10.0
 */
var Pointed = {
    URI: URI,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
var apFirst = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_4__.apFirst)(Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
var apSecond = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_4__.apSecond)(Apply);
/**
 * @category instances
 * @since 2.7.0
 */
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
var chainFirst = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_5__.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.7.0
 */
var Foldable = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
var Alternative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    alt: _alt,
    zero: zero
};
/**
 * @category instances
 * @since 2.7.0
 */
var Extend = {
    URI: URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
var Compactable = {
    URI: URI,
    compact: compact,
    separate: separate
};
/**
 * @category instances
 * @since 2.7.0
 */
var Filterable = {
    URI: URI,
    map: _map,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
var Traversable = {
    URI: URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
var Witherable = {
    URI: URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
/**
 * @category instances
 * @since 2.7.0
 */
var MonadThrow = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain,
    throwError: throwError
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if `ma` contains `a`
 *
 * @example
 * import { some, none, elem } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * assert.strictEqual(elem(N.Eq)(1, some(1)), true)
 * assert.strictEqual(elem(N.Eq)(2, some(1)), false)
 * assert.strictEqual(elem(N.Eq)(1, none), false)
 *
 * @since 2.0.0
 */
function elem(E) {
    return function (a, ma) { return (isNone(ma) ? false : E.equals(a, ma.value)); };
}
/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @example
 * import { some, none, exists } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 0)
 *   ),
 *   true
 * )
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 1)
 *   ),
 *   false
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     exists(n => n > 0)
 *   ),
 *   false
 * )
 *
 * @since 2.0.0
 */
function exists(predicate) {
    return function (ma) { return (isNone(ma) ? false : predicate(ma.value)); };
}
/**
 * Returns a `Refinement` (i.e. a custom type guard) from a `Option` returning function.
 * This function ensures that a custom type guard definition is type-safe.
 *
 * ```ts
 * import { some, none, getRefinement } from 'fp-ts/Option'
 *
 * type A = { type: 'A' }
 * type B = { type: 'B' }
 * type C = A | B
 *
 * const isA = (c: C): c is A => c.type === 'B' // <= typo but typescript doesn't complain
 * const isA = getRefinement<C, A>(c => (c.type === 'B' ? some(c) : none)) // static error: Type '"B"' is not assignable to type '"A"'
 * ```
 *
 * @since 2.0.0
 */
function getRefinement(getOption) {
    return function (a) { return isSome(getOption(a)); };
}
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
var Do = 
/*#__PURE__*/
of({});
/**
 * @since 2.8.0
 */
var bindTo = 
/*#__PURE__*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_3__.bindTo)(Functor);
/**
 * @since 2.8.0
 */
var bind = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_5__.bind)(Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
var apS = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_4__.apS)(Apply);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) {
    var out = [];
    for (var i = 0; i < as.length; i++) {
        var b = f(i, as[i]);
        if (isNone(b)) {
            return none;
        }
        out.push(b.value);
    }
    return some(out);
}; };
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) {
    return traverseArrayWithIndex(function (_, a) { return f(a); });
};
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
var sequenceArray = 
/*#__PURE__*/
traverseArray(_function__WEBPACK_IMPORTED_MODULE_1__.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`chainNullableK`](#chainnullablek) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var mapNullable = chainNullableK;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var option = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: _chain,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    zero: zero,
    alt: _alt,
    extend: _extend,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt,
    throwError: throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getApplySemigroup = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_4__.getApplySemigroup)(Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getApplyMonoid = 
/*#__PURE__*/
(0,_Applicative__WEBPACK_IMPORTED_MODULE_6__.getApplicativeMonoid)(Applicative);


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Ord.js":
/*!**********************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Ord.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equalsDefault": () => /* binding */ equalsDefault,
/* harmony export */   "fromCompare": () => /* binding */ fromCompare,
/* harmony export */   "tuple": () => /* binding */ tuple,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "contramap": () => /* binding */ contramap,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "getSemigroup": () => /* binding */ getSemigroup,
/* harmony export */   "getMonoid": () => /* binding */ getMonoid,
/* harmony export */   "Contravariant": () => /* binding */ Contravariant,
/* harmony export */   "lt": () => /* binding */ lt,
/* harmony export */   "gt": () => /* binding */ gt,
/* harmony export */   "leq": () => /* binding */ leq,
/* harmony export */   "geq": () => /* binding */ geq,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "clamp": () => /* binding */ clamp,
/* harmony export */   "between": () => /* binding */ between,
/* harmony export */   "getTupleOrd": () => /* binding */ getTupleOrd,
/* harmony export */   "getDualOrd": () => /* binding */ getDualOrd,
/* harmony export */   "ord": () => /* binding */ ord,
/* harmony export */   "ordBoolean": () => /* binding */ ordBoolean,
/* harmony export */   "ordString": () => /* binding */ ordString,
/* harmony export */   "ordNumber": () => /* binding */ ordNumber,
/* harmony export */   "ordDate": () => /* binding */ ordDate
/* harmony export */ });
/* harmony import */ var _Eq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Eq.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");


// -------------------------------------------------------------------------------------
// defaults
// -------------------------------------------------------------------------------------
/**
 * @category defaults
 * @since 2.10.0
 */
var equalsDefault = function (compare) { return function (first, second) {
    return first === second || compare(first, second) === 0;
}; };
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
var fromCompare = function (compare) { return ({
    equals: equalsDefault(compare),
    compare: function (first, second) { return (first === second ? 0 : compare(first, second)); }
}); };
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Ord'
 * import * as B from 'fp-ts/boolean'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 *
 * const O = tuple(S.Ord, N.Ord, B.Ord)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var ords = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ords[_i] = arguments[_i];
    }
    return fromCompare(function (first, second) {
        var i = 0;
        for (; i < ords.length - 1; i++) {
            var r = ords[i].compare(first[i], second[i]);
            if (r !== 0) {
                return r;
            }
        }
        return ords[i].compare(first[i], second[i]);
    });
};
/**
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (O) { return fromCompare(function (first, second) { return O.compare(second, first); }); };
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var contramap_ = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fa, contramap(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */
var contramap = function (f) { return function (fa) {
    return fromCompare(function (first, second) { return fa.compare(f(first), f(second)); });
}; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
var URI = 'Ord';
/**
 * @category instances
 * @since 2.0.0
 */
var getSemigroup = function () { return ({
    concat: function (first, second) {
        return fromCompare(function (a, b) {
            var ox = first.compare(a, b);
            return ox !== 0 ? ox : second.compare(a, b);
        });
    }
}); };
/**
 * Returns a `Monoid` such that:
 *
 * - its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2`
 * - its `empty` value is an `Ord` that always considers compared elements equal
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import { contramap, reverse, getMonoid } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as B from 'fp-ts/boolean'
 * import { pipe } from 'fp-ts/function'
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface User {
 *   readonly id: number
 *   readonly name: string
 *   readonly age: number
 *   readonly rememberMe: boolean
 * }
 *
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: User) => p.name)
 * )
 *
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: User) => p.age)
 * )
 *
 * const byRememberMe = pipe(
 *   B.Ord,
 *   contramap((p: User) => p.rememberMe)
 * )
 *
 * const M = getMonoid<User>()
 *
 * const users: Array<User> = [
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true }
 * ]
 *
 * // sort by name, then by age, then by `rememberMe`
 * const O1 = concatAll(M)([byName, byAge, byRememberMe])
 * assert.deepStrictEqual(sort(O1)(users), [
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * // now `rememberMe = true` first, then by name, then by age
 * const O2 = concatAll(M)([reverse(byRememberMe), byName, byAge])
 * assert.deepStrictEqual(sort(O2)(users), [
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * @category instances
 * @since 2.4.0
 */
var getMonoid = function () { return ({
    concat: getSemigroup().concat,
    empty: fromCompare(function () { return 0; })
}); };
/**
 * @category instances
 * @since 2.7.0
 */
var Contravariant = {
    URI: URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
// TODO: curry in v3
/**
 * Test whether one value is _strictly less than_ another
 *
 * @since 2.0.0
 */
var lt = function (O) { return function (first, second) { return O.compare(first, second) === -1; }; };
// TODO: curry in v3
/**
 * Test whether one value is _strictly greater than_ another
 *
 * @since 2.0.0
 */
var gt = function (O) { return function (first, second) { return O.compare(first, second) === 1; }; };
// TODO: curry in v3
/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @since 2.0.0
 */
var leq = function (O) { return function (first, second) { return O.compare(first, second) !== 1; }; };
// TODO: curry in v3
/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @since 2.0.0
 */
var geq = function (O) { return function (first, second) { return O.compare(first, second) !== -1; }; };
// TODO: curry in v3
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
var min = function (O) { return function (first, second) {
    return first === second || O.compare(first, second) < 1 ? first : second;
}; };
// TODO: curry in v3
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
var max = function (O) { return function (first, second) {
    return first === second || O.compare(first, second) > -1 ? first : second;
}; };
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */
var clamp = function (O) {
    var minO = min(O);
    var maxO = max(O);
    return function (low, hi) { return function (a) { return maxO(minO(a, hi), low); }; };
};
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @since 2.0.0
 */
var between = function (O) {
    var ltO = lt(O);
    var gtO = gt(O);
    return function (low, hi) { return function (a) { return (ltO(a, low) || gtO(a, hi) ? false : true); }; };
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getTupleOrd = tuple;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getDualOrd = reverse;
/**
 * Use [`Contravariant`](#contravariant) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var ord = Contravariant;
// default compare for primitive types
function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
}
var strictOrd = {
    equals: _Eq__WEBPACK_IMPORTED_MODULE_1__.eqStrict.equals,
    compare: compare
};
/**
 * Use [`Ord`](./boolean.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var ordBoolean = strictOrd;
/**
 * Use [`Ord`](./string.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var ordString = strictOrd;
/**
 * Use [`Ord`](./number.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var ordNumber = strictOrd;
/**
 * Use [`Ord`](./Date.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var ordDate = 
/*#__PURE__*/
(0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(
// tslint:disable-next-line: deprecation
ordNumber, 
/*#__PURE__*/
contramap(function (date) { return date.valueOf(); }));


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Reader.js":
/*!*************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Reader.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ask": () => /* binding */ ask,
/* harmony export */   "asks": () => /* binding */ asks,
/* harmony export */   "local": () => /* binding */ local,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "apW": () => /* binding */ apW,
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "of": () => /* binding */ of,
/* harmony export */   "chainW": () => /* binding */ chainW,
/* harmony export */   "chain": () => /* binding */ chain,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "compose": () => /* binding */ compose,
/* harmony export */   "promap": () => /* binding */ promap,
/* harmony export */   "id": () => /* binding */ id,
/* harmony export */   "first": () => /* binding */ first,
/* harmony export */   "second": () => /* binding */ second,
/* harmony export */   "left": () => /* binding */ left,
/* harmony export */   "right": () => /* binding */ right,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "Functor": () => /* binding */ Functor,
/* harmony export */   "flap": () => /* binding */ flap,
/* harmony export */   "Pointed": () => /* binding */ Pointed,
/* harmony export */   "Apply": () => /* binding */ Apply,
/* harmony export */   "apFirst": () => /* binding */ apFirst,
/* harmony export */   "apSecond": () => /* binding */ apSecond,
/* harmony export */   "Applicative": () => /* binding */ Applicative,
/* harmony export */   "Chain": () => /* binding */ Chain,
/* harmony export */   "Monad": () => /* binding */ Monad,
/* harmony export */   "chainFirst": () => /* binding */ chainFirst,
/* harmony export */   "Profunctor": () => /* binding */ Profunctor,
/* harmony export */   "Category": () => /* binding */ Category,
/* harmony export */   "Strong": () => /* binding */ Strong,
/* harmony export */   "Choice": () => /* binding */ Choice,
/* harmony export */   "bindTo": () => /* binding */ bindTo,
/* harmony export */   "bind": () => /* binding */ bind,
/* harmony export */   "bindW": () => /* binding */ bindW,
/* harmony export */   "Do": () => /* binding */ Do,
/* harmony export */   "apS": () => /* binding */ apS,
/* harmony export */   "apSW": () => /* binding */ apSW,
/* harmony export */   "traverseArrayWithIndex": () => /* binding */ traverseArrayWithIndex,
/* harmony export */   "traverseArray": () => /* binding */ traverseArray,
/* harmony export */   "sequenceArray": () => /* binding */ sequenceArray,
/* harmony export */   "reader": () => /* binding */ reader,
/* harmony export */   "getSemigroup": () => /* binding */ getSemigroup,
/* harmony export */   "getMonoid": () => /* binding */ getMonoid
/* harmony export */ });
/* harmony import */ var _Applicative__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Applicative */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Applicative.js");
/* harmony import */ var _Apply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js");
/* harmony import */ var _Either__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Either */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Either.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _Functor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js");
/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Chain.js");
/**
 * @since 2.0.0
 */






// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Reads the current context
 *
 * @category constructors
 * @since 2.0.0
 */
var ask = function () { return _function__WEBPACK_IMPORTED_MODULE_0__.identity; };
/**
 * Projects a value from the global context in a Reader
 *
 * @category constructors
 * @since 2.0.0
 */
var asks = _function__WEBPACK_IMPORTED_MODULE_0__.identity;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @category combinators
 * @since 2.0.0
 */
var local = function (f) { return function (ma) { return function (r2) {
    return ma(f(r2));
}; }; };
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fa, map(f)); };
/* istanbul ignore next */
var _ap = function (fab, fa) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fab, ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(ma, chain(f)); };
var _compose = function (bc, ab) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(bc, compose(ab)); };
var _promap = function (fea, f, g) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fea, promap(f, g)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return function (r) { return f(fa(r)); }; }; };
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */
var apW = function (fa) { return function (fab) { return function (r) { return fab(r)(fa(r)); }; }; };
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = apW;
/**
 * @category Pointed
 * @since 2.0.0
 */
var of = _function__WEBPACK_IMPORTED_MODULE_0__.constant;
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.0
 */
var chainW = function (f) { return function (fa) { return function (r) { return f(fa(r))(r); }; }; };
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = chainW;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
var flatten = 
/*#__PURE__*/
chain(_function__WEBPACK_IMPORTED_MODULE_0__.identity);
/**
 * @category Semigroupoid
 * @since 2.0.0
 */
var compose = function (ab) { return function (bc) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.flow)(ab, bc); }; };
/**
 * @category Profunctor
 * @since 2.0.0
 */
var promap = function (f, g) { return function (fea) { return function (a) { return g(fea(f(a))); }; }; };
/**
 * @category Category
 * @since 2.0.0
 */
var id = function () { return _function__WEBPACK_IMPORTED_MODULE_0__.identity; };
/**
 * @category Strong
 * @since 2.10.0
 */
var first = function (pab) { return function (_a) {
    var a = _a[0], c = _a[1];
    return [pab(a), c];
}; };
/**
 * @category Strong
 * @since 2.10.0
 */
var second = function (pbc) { return function (_a) {
    var a = _a[0], b = _a[1];
    return [a, pbc(b)];
}; };
/**
 * @category Choice
 * @since 2.10.0
 */
var left = function (pab) { return _Either__WEBPACK_IMPORTED_MODULE_1__.fold(function (a) { return _Either__WEBPACK_IMPORTED_MODULE_1__.left(pab(a)); }, _Either__WEBPACK_IMPORTED_MODULE_1__.right); };
/**
 * @category Choice
 * @since 2.10.0
 */
var right = function (pbc) { return _Either__WEBPACK_IMPORTED_MODULE_1__.fold(_Either__WEBPACK_IMPORTED_MODULE_1__.left, function (b) { return _Either__WEBPACK_IMPORTED_MODULE_1__.right(pbc(b)); }); };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
var URI = 'Reader';
/**
 * @category instances
 * @since 2.7.0
 */
var Functor = {
    URI: URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
var flap = 
/*#_PURE_*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_2__.flap)(Functor);
/**
 * @category instances
 * @since 2.10.0
 */
var Pointed = {
    URI: URI,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
var apFirst = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_3__.apFirst)(Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
var apSecond = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_3__.apSecond)(Apply);
/**
 * @category instances
 * @since 2.7.0
 */
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
var Monad = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
var chainFirst = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_4__.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.7.0
 */
var Profunctor = {
    URI: URI,
    map: _map,
    promap: _promap
};
/**
 * @category instances
 * @since 2.7.0
 */
var Category = {
    URI: URI,
    compose: _compose,
    id: id
};
/**
 * @category instances
 * @since 2.8.3
 */
var Strong = {
    URI: URI,
    map: _map,
    promap: _promap,
    first: first,
    second: second
};
/**
 * @category instances
 * @since 2.8.3
 */
var Choice = {
    URI: URI,
    map: _map,
    promap: _promap,
    left: left,
    right: right
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
var bindTo = 
/*#__PURE__*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_2__.bindTo)(Functor);
/**
 * @since 2.8.0
 */
var bind = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_4__.bind)(Chain);
/**
 * @since 2.8.0
 */
var bindW = bind;
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
var Do = 
/*#__PURE__*/
of({});
/**
 * @since 2.8.0
 */
var apS = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_3__.apS)(Apply);
/**
 * @since 2.8.0
 */
var apSW = apS;
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) { return function (r) { return as.map(function (x, i) { return f(i, x)(r); }); }; }; };
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) { return traverseArrayWithIndex(function (_, a) { return f(a); }); };
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
var sequenceArray = 
/*#__PURE__*/
traverseArray(_function__WEBPACK_IMPORTED_MODULE_0__.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var reader = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: _chain,
    promap: _promap,
    compose: _compose,
    id: id,
    first: first,
    second: second,
    left: left,
    right: right
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getSemigroup = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_3__.getApplySemigroup)(Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getMonoid = 
/*#__PURE__*/
(0,_Applicative__WEBPACK_IMPORTED_MODULE_5__.getApplicativeMonoid)(Applicative);


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReaderT.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReaderT.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "of": () => /* binding */ of,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "chain": () => /* binding */ chain,
/* harmony export */   "fromReader": () => /* binding */ fromReader,
/* harmony export */   "getReaderM": () => /* binding */ getReaderM
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");

function of(F) {
    return function (a) { return function () { return F.of(a); }; };
}
function map(F) {
    return function (f) { return function (fa) { return function (r) { return F.map(fa(r), f); }; }; };
}
function ap(F) {
    return function (fa) { return function (fab) { return function (r) { return F.ap(fab(r), fa(r)); }; }; };
}
function chain(M) {
    return function (f) { return function (ma) { return function (r) { return M.chain(ma(r), function (a) { return f(a)(r); }); }; }; };
}
function fromReader(F) {
    return function (ma) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.flow)(ma, F.of); };
}
/** @deprecated */
/* istanbul ignore next */
function getReaderM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    return {
        map: function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fa, _map(f)); },
        ap: function (fab, fa) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fab, _ap(fa)); },
        of: of(M),
        chain: function (ma, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(ma, _chain(f)); },
        ask: function () { return M.of; },
        asks: function (f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.flow)(f, M.of); },
        local: function (ma, f) { return function (q) { return ma(f(q)); }; },
        fromReader: fromReader(M),
        fromM: function (ma) { return function () { return ma; }; }
    };
}


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReadonlyArray.js":
/*!********************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReadonlyArray.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepend": () => /* binding */ prepend,
/* harmony export */   "append": () => /* binding */ append,
/* harmony export */   "makeBy": () => /* binding */ makeBy,
/* harmony export */   "range": () => /* binding */ range,
/* harmony export */   "replicate": () => /* binding */ replicate,
/* harmony export */   "matchLeft": () => /* binding */ matchLeft,
/* harmony export */   "foldLeft": () => /* binding */ foldLeft,
/* harmony export */   "matchRight": () => /* binding */ matchRight,
/* harmony export */   "foldRight": () => /* binding */ foldRight,
/* harmony export */   "chainWithIndex": () => /* binding */ chainWithIndex,
/* harmony export */   "scanLeft": () => /* binding */ scanLeft,
/* harmony export */   "scanRight": () => /* binding */ scanRight,
/* harmony export */   "isEmpty": () => /* binding */ isEmpty,
/* harmony export */   "isNonEmpty": () => /* binding */ isNonEmpty,
/* harmony export */   "size": () => /* binding */ size,
/* harmony export */   "isOutOfBound": () => /* binding */ isOutOfBound,
/* harmony export */   "lookup": () => /* binding */ lookup,
/* harmony export */   "head": () => /* binding */ head,
/* harmony export */   "last": () => /* binding */ last,
/* harmony export */   "tail": () => /* binding */ tail,
/* harmony export */   "init": () => /* binding */ init,
/* harmony export */   "takeLeft": () => /* binding */ takeLeft,
/* harmony export */   "takeRight": () => /* binding */ takeRight,
/* harmony export */   "takeLeftWhile": () => /* binding */ takeLeftWhile,
/* harmony export */   "spanLeft": () => /* binding */ spanLeft,
/* harmony export */   "dropLeft": () => /* binding */ dropLeft,
/* harmony export */   "dropRight": () => /* binding */ dropRight,
/* harmony export */   "dropLeftWhile": () => /* binding */ dropLeftWhile,
/* harmony export */   "findIndex": () => /* binding */ findIndex,
/* harmony export */   "findFirst": () => /* binding */ findFirst,
/* harmony export */   "findFirstMap": () => /* binding */ findFirstMap,
/* harmony export */   "findLast": () => /* binding */ findLast,
/* harmony export */   "findLastMap": () => /* binding */ findLastMap,
/* harmony export */   "findLastIndex": () => /* binding */ findLastIndex,
/* harmony export */   "insertAt": () => /* binding */ insertAt,
/* harmony export */   "updateAt": () => /* binding */ updateAt,
/* harmony export */   "deleteAt": () => /* binding */ deleteAt,
/* harmony export */   "modifyAt": () => /* binding */ modifyAt,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "rights": () => /* binding */ rights,
/* harmony export */   "lefts": () => /* binding */ lefts,
/* harmony export */   "sort": () => /* binding */ sort,
/* harmony export */   "zipWith": () => /* binding */ zipWith,
/* harmony export */   "zip": () => /* binding */ zip,
/* harmony export */   "unzip": () => /* binding */ unzip,
/* harmony export */   "prependAll": () => /* binding */ prependAll,
/* harmony export */   "intersperse": () => /* binding */ intersperse,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "elem": () => /* binding */ elem,
/* harmony export */   "uniq": () => /* binding */ uniq,
/* harmony export */   "sortBy": () => /* binding */ sortBy,
/* harmony export */   "chop": () => /* binding */ chop,
/* harmony export */   "splitAt": () => /* binding */ splitAt,
/* harmony export */   "chunksOf": () => /* binding */ chunksOf,
/* harmony export */   "comprehension": () => /* binding */ comprehension,
/* harmony export */   "union": () => /* binding */ union,
/* harmony export */   "intersection": () => /* binding */ intersection,
/* harmony export */   "difference": () => /* binding */ difference,
/* harmony export */   "of": () => /* binding */ of,
/* harmony export */   "zero": () => /* binding */ zero,
/* harmony export */   "altW": () => /* binding */ altW,
/* harmony export */   "alt": () => /* binding */ alt,
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "chain": () => /* binding */ chain,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "mapWithIndex": () => /* binding */ mapWithIndex,
/* harmony export */   "separate": () => /* binding */ separate,
/* harmony export */   "filter": () => /* binding */ filter,
/* harmony export */   "filterMapWithIndex": () => /* binding */ filterMapWithIndex,
/* harmony export */   "filterMap": () => /* binding */ filterMap,
/* harmony export */   "compact": () => /* binding */ compact,
/* harmony export */   "partition": () => /* binding */ partition,
/* harmony export */   "partitionWithIndex": () => /* binding */ partitionWithIndex,
/* harmony export */   "partitionMap": () => /* binding */ partitionMap,
/* harmony export */   "partitionMapWithIndex": () => /* binding */ partitionMapWithIndex,
/* harmony export */   "filterWithIndex": () => /* binding */ filterWithIndex,
/* harmony export */   "extend": () => /* binding */ extend,
/* harmony export */   "duplicate": () => /* binding */ duplicate,
/* harmony export */   "foldMapWithIndex": () => /* binding */ foldMapWithIndex,
/* harmony export */   "reduce": () => /* binding */ reduce,
/* harmony export */   "foldMap": () => /* binding */ foldMap,
/* harmony export */   "reduceWithIndex": () => /* binding */ reduceWithIndex,
/* harmony export */   "reduceRight": () => /* binding */ reduceRight,
/* harmony export */   "reduceRightWithIndex": () => /* binding */ reduceRightWithIndex,
/* harmony export */   "traverse": () => /* binding */ traverse,
/* harmony export */   "sequence": () => /* binding */ sequence,
/* harmony export */   "traverseWithIndex": () => /* binding */ traverseWithIndex,
/* harmony export */   "wither": () => /* binding */ wither,
/* harmony export */   "wilt": () => /* binding */ wilt,
/* harmony export */   "unfold": () => /* binding */ unfold,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "getShow": () => /* binding */ getShow,
/* harmony export */   "getSemigroup": () => /* binding */ getSemigroup,
/* harmony export */   "getMonoid": () => /* binding */ getMonoid,
/* harmony export */   "getEq": () => /* binding */ getEq,
/* harmony export */   "getOrd": () => /* binding */ getOrd,
/* harmony export */   "Functor": () => /* binding */ Functor,
/* harmony export */   "flap": () => /* binding */ flap,
/* harmony export */   "Pointed": () => /* binding */ Pointed,
/* harmony export */   "FunctorWithIndex": () => /* binding */ FunctorWithIndex,
/* harmony export */   "Apply": () => /* binding */ Apply,
/* harmony export */   "apFirst": () => /* binding */ apFirst,
/* harmony export */   "apSecond": () => /* binding */ apSecond,
/* harmony export */   "Applicative": () => /* binding */ Applicative,
/* harmony export */   "Chain": () => /* binding */ Chain,
/* harmony export */   "Monad": () => /* binding */ Monad,
/* harmony export */   "chainFirst": () => /* binding */ chainFirst,
/* harmony export */   "Unfoldable": () => /* binding */ Unfoldable,
/* harmony export */   "Alt": () => /* binding */ Alt,
/* harmony export */   "Alternative": () => /* binding */ Alternative,
/* harmony export */   "Extend": () => /* binding */ Extend,
/* harmony export */   "Compactable": () => /* binding */ Compactable,
/* harmony export */   "Filterable": () => /* binding */ Filterable,
/* harmony export */   "FilterableWithIndex": () => /* binding */ FilterableWithIndex,
/* harmony export */   "Foldable": () => /* binding */ Foldable,
/* harmony export */   "FoldableWithIndex": () => /* binding */ FoldableWithIndex,
/* harmony export */   "Traversable": () => /* binding */ Traversable,
/* harmony export */   "TraversableWithIndex": () => /* binding */ TraversableWithIndex,
/* harmony export */   "Witherable": () => /* binding */ Witherable,
/* harmony export */   "unsafeInsertAt": () => /* binding */ unsafeInsertAt,
/* harmony export */   "unsafeUpdateAt": () => /* binding */ unsafeUpdateAt,
/* harmony export */   "unsafeDeleteAt": () => /* binding */ unsafeDeleteAt,
/* harmony export */   "toArray": () => /* binding */ toArray,
/* harmony export */   "fromArray": () => /* binding */ fromArray,
/* harmony export */   "empty": () => /* binding */ empty,
/* harmony export */   "every": () => /* binding */ every,
/* harmony export */   "some": () => /* binding */ some,
/* harmony export */   "Do": () => /* binding */ Do,
/* harmony export */   "bindTo": () => /* binding */ bindTo,
/* harmony export */   "bind": () => /* binding */ bind,
/* harmony export */   "apS": () => /* binding */ apS,
/* harmony export */   "cons": () => /* binding */ cons,
/* harmony export */   "snoc": () => /* binding */ snoc,
/* harmony export */   "prependToAll": () => /* binding */ prependToAll,
/* harmony export */   "readonlyArray": () => /* binding */ readonlyArray
/* harmony export */ });
/* harmony import */ var _Apply__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js");
/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Chain.js");
/* harmony import */ var _Eq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Eq.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _Functor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/number.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Option.js");
/* harmony import */ var _Ord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Ord.js");
/* harmony import */ var _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadonlyNonEmptyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js");
/* harmony import */ var _Separated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Separated */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Separated.js");










// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Prepend an element to the front of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prepend } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
var prepend = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.prepend;
/**
 * Append an element to the end of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { append } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
var append = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.append;
/**
 * Return a `ReadonlyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { makeBy } from 'fp-ts/ReadonlyArray'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.5.0
 */
var makeBy = function (n, f) { return (n <= 0 ? empty : _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.makeBy(n, f)); };
/**
 * Create a `ReadonlyArray` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @category constructors
 * @since 2.5.0
 */
var range = function (start, end) {
    return start <= end ? makeBy(end - start + 1, function (i) { return start + i; }) : [start];
};
/**
 * Create a `ReadonlyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { replicate } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.5.0
 */
var replicate = function (n, a) { return makeBy(n, function () { return a; }); };
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Break an array into its first element and remaining elements.
 *
 * @example
 * import { matchLeft } from 'fp-ts/ReadonlyArray'
 *
 * const len: <A>(as: ReadonlyArray<A>) => number = matchLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @category destructors
 * @since 2.10.0
 */
var matchLeft = function (onEmpty, onNonEmpty) { return function (as) { return (isNonEmpty(as) ? onNonEmpty(_ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.head(as), _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.tail(as)) : onEmpty()); }; };
/**
 * Alias of [`matchLeft`](#matchleft).
 *
 * @category destructors
 * @since 2.5.0
 */
var foldLeft = matchLeft;
/**
 * Break an array into its initial elements and the last element.
 *
 * @category destructors
 * @since 2.10.0
 */
var matchRight = function (onEmpty, onNonEmpty) { return function (as) { return (isNonEmpty(as) ? onNonEmpty(_ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.init(as), _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.last(as)) : onEmpty()); }; };
/**
 * Alias of [`matchRight`](#matchright).
 *
 * @category destructors
 * @since 2.5.0
 */
var foldRight = matchRight;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.7.0
 */
var chainWithIndex = function (f) { return function (as) {
    if (isEmpty(as)) {
        return empty;
    }
    var out = [];
    for (var i = 0; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
/**
 * Same as `reduce` but it carries over the intermediate steps.
 *
 * @example
 * import { scanLeft } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 *
 * @category combinators
 * @since 2.5.0
 */
var scanLeft = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[0] = b;
    for (var i = 0; i < len; i++) {
        out[i + 1] = f(out[i], as[i]);
    }
    return out;
}; };
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @category combinators
 * @since 2.5.0
 */
var scanRight = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[len] = b;
    for (var i = len - 1; i >= 0; i--) {
        out[i] = f(as[i], out[i + 1]);
    }
    return out;
}; };
/**
 * Test whether a `ReadonlyArray` is empty.
 *
 * @example
 * import { isEmpty } from 'fp-ts/ReadonlyArray'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @since 2.5.0
 */
var isEmpty = function (as) { return as.length === 0; };
/**
 * Test whether a `ReadonlyArray` is non empty.
 *
 * @category guards
 * @since 2.5.0
 */
var isNonEmpty = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.isNonEmpty;
/**
 * Calculate the number of elements in a `ReadonlyArray`.
 *
 * @since 2.10.0
 */
var size = function (as) { return as.length; };
/**
 * Test whether an array contains a particular index
 *
 * @since 2.5.0
 */
var isOutOfBound = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.isOutOfBound;
function lookup(i, as) {
    return as === undefined ? function (as) { return lookup(i, as); } : isOutOfBound(i, as) ? _Option__WEBPACK_IMPORTED_MODULE_1__.none : _Option__WEBPACK_IMPORTED_MODULE_1__.some(as[i]);
}
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @since 2.5.0
 */
var head = function (as) { return (isNonEmpty(as) ? _Option__WEBPACK_IMPORTED_MODULE_1__.some(_ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.head(as)) : _Option__WEBPACK_IMPORTED_MODULE_1__.none); };
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @since 2.5.0
 */
var last = function (as) { return (isNonEmpty(as) ? _Option__WEBPACK_IMPORTED_MODULE_1__.some(_ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.last(as)) : _Option__WEBPACK_IMPORTED_MODULE_1__.none); };
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @since 2.5.0
 */
var tail = function (as) {
    return isNonEmpty(as) ? _Option__WEBPACK_IMPORTED_MODULE_1__.some(_ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.tail(as)) : _Option__WEBPACK_IMPORTED_MODULE_1__.none;
};
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @since 2.5.0
 */
var init = function (as) {
    return isNonEmpty(as) ? _Option__WEBPACK_IMPORTED_MODULE_1__.some(_ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.init(as)) : _Option__WEBPACK_IMPORTED_MODULE_1__.none;
};
/**
 * Keep only a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeLeft(2)), [1, 2])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeLeft(4)), input)
 * assert.strictEqual(pipe(input, RA.takeLeft(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var takeLeft = function (n) { return function (as) {
    return isOutOfBound(n, as) ? as : n === 0 ? empty : as.slice(0, n);
}; };
/**
 * Keep only a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeRight(2)), [2, 3])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeRight(4)), input)
 * assert.strictEqual(pipe(input, RA.takeRight(-1)), input)
 *
 * @since 2.5.0
 */
var takeRight = function (n) { return function (as) {
    return isOutOfBound(n, as) ? as : n === 0 ? empty : as.slice(-n);
}; };
function takeLeftWhile(predicate) {
    return function (as) {
        var out = [];
        for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            if (!predicate(a)) {
                break;
            }
            out.push(a);
        }
        var len = out.length;
        return len === as.length ? as : len === 0 ? empty : out;
    };
}
var spanLeftIndex = function (as, predicate) {
    var l = as.length;
    var i = 0;
    for (; i < l; i++) {
        if (!predicate(as[i])) {
            break;
        }
    }
    return i;
};
function spanLeft(predicate) {
    return function (as) {
        var _a = splitAt(spanLeftIndex(as, predicate))(as), init = _a[0], rest = _a[1];
        return { init: init, rest: rest };
    };
}
/**
 * Drop a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropLeft(2)), [3])
 * assert.strictEqual(pipe(input, RA.dropLeft(0)), input)
 * assert.strictEqual(pipe(input, RA.dropLeft(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var dropLeft = function (n) { return function (as) {
    return n <= 0 || isEmpty(as) ? as : n >= as.length ? empty : as.slice(n, as.length);
}; };
/**
 * Drop a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropRight(2)), [1])
 * assert.strictEqual(pipe(input, RA.dropRight(0)), input)
 * assert.strictEqual(pipe(input, RA.dropRight(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var dropRight = function (n) { return function (as) {
    return n <= 0 || isEmpty(as) ? as : n >= as.length ? empty : as.slice(0, as.length - n);
}; };
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @category combinators
 * @since 2.5.0
 */
var dropLeftWhile = function (predicate) { return function (as) {
    var i = spanLeftIndex(as, predicate);
    return i === 0 ? as : i === as.length ? empty : as.slice(i);
}; };
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.5.0
 */
var findIndex = function (predicate) { return function (as) {
    for (var i = 0; i < as.length; i++) {
        if (predicate(as[i])) {
            return _Option__WEBPACK_IMPORTED_MODULE_1__.some(i);
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_1__.none;
}; };
function findFirst(predicate) {
    return function (as) {
        for (var i = 0; i < as.length; i++) {
            if (predicate(as[i])) {
                return _Option__WEBPACK_IMPORTED_MODULE_1__.some(as[i]);
            }
        }
        return _Option__WEBPACK_IMPORTED_MODULE_1__.none;
    };
}
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @since 2.5.0
 */
var findFirstMap = function (f) { return function (as) {
    for (var i = 0; i < as.length; i++) {
        var out = f(as[i]);
        if (_Option__WEBPACK_IMPORTED_MODULE_1__.isSome(out)) {
            return out;
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_1__.none;
}; };
function findLast(predicate) {
    return function (as) {
        for (var i = as.length - 1; i >= 0; i--) {
            if (predicate(as[i])) {
                return _Option__WEBPACK_IMPORTED_MODULE_1__.some(as[i]);
            }
        }
        return _Option__WEBPACK_IMPORTED_MODULE_1__.none;
    };
}
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @since 2.5.0
 */
var findLastMap = function (f) { return function (as) {
    for (var i = as.length - 1; i >= 0; i--) {
        var out = f(as[i]);
        if (_Option__WEBPACK_IMPORTED_MODULE_1__.isSome(out)) {
            return out;
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_1__.none;
}; };
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: ReadonlyArray<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.5.0
 */
var findLastIndex = function (predicate) { return function (as) {
    for (var i = as.length - 1; i >= 0; i--) {
        if (predicate(as[i])) {
            return _Option__WEBPACK_IMPORTED_MODULE_1__.some(i);
        }
    }
    return _Option__WEBPACK_IMPORTED_MODULE_1__.none;
}; };
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/ReadonlyArray'
 * import { some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.5.0
 */
var insertAt = 
// tslint:disable-next-line: deprecation
_ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.insertAt;
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.5.0
 */
var updateAt = function (i, a) {
    return modifyAt(i, function () { return a; });
};
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.5.0
 */
var deleteAt = function (i) { return function (as) {
    return isOutOfBound(i, as) ? _Option__WEBPACK_IMPORTED_MODULE_1__.none : _Option__WEBPACK_IMPORTED_MODULE_1__.some(unsafeDeleteAt(i, as));
}; };
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.5.0
 */
var modifyAt = function (i, f) { return function (as) {
    return isOutOfBound(i, as) ? _Option__WEBPACK_IMPORTED_MODULE_1__.none : _Option__WEBPACK_IMPORTED_MODULE_1__.some(unsafeUpdateAt(i, f(as[i]), as));
}; };
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @category combinators
 * @since 2.5.0
 */
var reverse = function (as) { return (as.length <= 1 ? as : as.slice().reverse()); };
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/ReadonlyArray'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @category combinators
 * @since 2.5.0
 */
var rights = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Right') {
            r.push(a.right);
        }
    }
    return r;
};
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/ReadonlyArray'
 * import { left, right } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @category combinators
 * @since 2.5.0
 */
var lefts = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Left') {
            r.push(a.left);
        }
    }
    return r;
};
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */
var sort = function (O) { return function (as) {
    return as.length <= 1 ? as : as.slice().sort(O.compare);
}; };
// TODO: curry and make data-last in v3
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @category combinators
 * @since 2.5.0
 */
var zipWith = function (fa, fb, f) {
    var fc = [];
    var len = Math.min(fa.length, fb.length);
    for (var i = 0; i < len; i++) {
        fc[i] = f(fa[i], fb[i]);
    }
    return fc;
};
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return zipWith(as, bs, function (a, b) { return [a, b]; });
}
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @category combinators
 * @since 2.5.0
 */
var unzip = function (as) {
    var fa = [];
    var fb = [];
    for (var i = 0; i < as.length; i++) {
        fa[i] = as[i][0];
        fb[i] = as[i][1];
    }
    return [fa, fb];
};
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) {
    var f = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.prependAll(middle);
    return function (as) { return (isNonEmpty(as) ? f(as) : as); };
};
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) {
    var f = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.intersperse(middle);
    return function (as) { return (isNonEmpty(as) ? f(as) : as); };
};
/**
 * Rotate a `ReadonlyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */
var rotate = function (n) {
    var f = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.rotate(n);
    return function (as) { return (isNonEmpty(as) ? f(as) : as); };
};
function elem(E) {
    return function (a, as) {
        if (as === undefined) {
            var elemE_1 = elem(E);
            return function (as) { return elemE_1(a, as); };
        }
        var predicate = function (element) { return E.equals(element, a); };
        var i = 0;
        for (; i < as.length; i++) {
            if (predicate(as[i])) {
                return true;
            }
        }
        return false;
    };
}
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.5.0
 */
var uniq = function (E) {
    var f = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.uniq(E);
    return function (as) { return (isNonEmpty(as) ? f(as) : as); };
};
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/ReadonlyArray'
 * import { contramap } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @category combinators
 * @since 2.5.0
 */
var sortBy = function (ords) {
    var f = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.sortBy(ords);
    return function (as) { return (isNonEmpty(as) ? f(as) : as); };
};
/**
 * A useful recursion pattern for processing a `ReadonlyArray` to produce a new `ReadonlyArray`, often used for "chopping" up the input
 * `ReadonlyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyArray` and produce a
 * value and the tail of the `ReadonlyArray`.
 *
 * @example
 * import { Eq } from 'fp-ts/Eq'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * const group = <A>(S: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>) => {
 *   return RA.chop(as => {
 *     const { init, rest } = pipe(as, RA.spanLeft((a: A) => S.equals(a, as[0])))
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @category combinators
 * @since 2.5.0
 */
var chop = function (f) {
    var g = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.chop(f);
    return function (as) { return (isNonEmpty(as) ? g(as) : empty); };
};
/**
 * Splits a `ReadonlyArray` into two pieces, the first piece has max `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @category combinators
 * @since 2.5.0
 */
var splitAt = function (n) { return function (as) {
    return n >= 1 && isNonEmpty(as) ? _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.splitAt(n)(as) : isEmpty(as) ? [as, empty] : [empty, as];
}; };
/**
 * Splits a `ReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyArray`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that:
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `as`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 * @category combinators
 * @since 2.5.0
 */
var chunksOf = function (n) {
    var f = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.chunksOf(n);
    return function (as) { return (isNonEmpty(as) ? f(as) : empty); };
};
function comprehension(input, f, g) {
    if (g === void 0) { g = function () { return true; }; }
    var go = function (scope, input) {
        return isNonEmpty(input)
            ? (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(_ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.head(input), chain(function (x) { return go((0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(scope, append(x)), _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.tail(input)); }))
            : g.apply(void 0, scope) ? [f.apply(void 0, scope)]
                : empty;
    };
    return go(empty, input);
}
function union(E) {
    var unionE = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.union(E);
    return function (first, second) {
        if (second === undefined) {
            var unionE_1 = union(E);
            return function (ys) { return unionE_1(ys, first); };
        }
        return isNonEmpty(first) && isNonEmpty(second) ? unionE(first, second) : isNonEmpty(first) ? first : second;
    };
}
function intersection(E) {
    var elemE = elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var intersectionE_1 = intersection(E);
            return function (ys) { return intersectionE_1(ys, xs); };
        }
        return xs.filter(function (a) { return elemE(a, ys); });
    };
}
function difference(E) {
    var elemE = elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var differenceE_1 = difference(E);
            return function (ys) { return differenceE_1(ys, xs); };
        }
        return xs.filter(function (a) { return !elemE(a, ys); });
    };
}
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, map(f)); };
var _mapWithIndex = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, mapWithIndex(f)); };
var _ap = function (fab, fa) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fab, ap(fa)); };
var _chain = function (ma, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(ma, chain(f)); };
var _filter = function (fa, predicate) {
    return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, filter(predicate));
};
var _filterMap = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, filterMap(f)); };
var _partition = function (fa, predicate) {
    return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, partition(predicate));
};
var _partitionMap = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, partitionMap(f)); };
var _partitionWithIndex = function (fa, predicateWithIndex) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, partitionWithIndex(predicateWithIndex)); };
var _partitionMapWithIndex = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, partitionMapWithIndex(f)); };
var _alt = function (fa, that) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, alt(that)); };
var _reduce = function (fa, b, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, reduce(b, f)); };
var _foldMap = function (M) {
    var foldMapM = foldMap(M);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, foldMapM(f)); };
};
var _reduceRight = function (fa, b, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, reduceRight(b, f)); };
var _reduceWithIndex = function (fa, b, f) {
    return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, reduceWithIndex(b, f));
};
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = foldMapWithIndex(M);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, foldMapWithIndexM(f)); };
};
var _reduceRightWithIndex = function (fa, b, f) {
    return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, reduceRightWithIndex(b, f));
};
var _filterMapWithIndex = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, filterMapWithIndex(f)); };
var _filterWithIndex = function (fa, predicateWithIndex) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, filterWithIndex(predicateWithIndex)); };
var _extend = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, extend(f)); };
var _traverse = function (F) {
    var traverseF = traverse(F);
    return function (ta, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(ta, traverseWithIndexF(f)); };
};
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = wither(F);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = wilt(F);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Pointed
 * @since 2.5.0
 */
var of = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.of;
/**
 * @category Alternative
 * @since 2.7.0
 */
var zero = function () { return empty; };
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) {
    return fa.concat(that());
}; };
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.5.0
 */
var alt = altW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.5.0
 */
var ap = function (fa) {
    return chain(function (f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, map(f)); });
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.5.0
 */
var chain = function (f) { return function (ma) {
    return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(ma, chainWithIndex(function (_, a) { return f(a); }));
}; };
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
var flatten = 
/*#__PURE__*/
chain(_function__WEBPACK_IMPORTED_MODULE_2__.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */
var map = function (f) { return function (fa) {
    return fa.map(function (a) { return f(a); });
}; };
/**
 * @category FunctorWithIndex
 * @since 2.5.0
 */
var mapWithIndex = function (f) { return function (fa) { return fa.map(function (a, i) { return f(i, a); }); }; };
/**
 * @category Compactable
 * @since 2.5.0
 */
var separate = function (fa) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
        var e = fa_1[_i];
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(left, right);
};
/**
 * @category Filterable
 * @since 2.5.0
 */
var filter = function (predicate) { return function (fa) { return fa.filter(predicate); }; };
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var filterMapWithIndex = function (f) { return function (fa) {
    var out = [];
    for (var i = 0; i < fa.length; i++) {
        var optionB = f(i, fa[i]);
        if (_Option__WEBPACK_IMPORTED_MODULE_1__.isSome(optionB)) {
            out.push(optionB.value);
        }
    }
    return out;
}; };
/**
 * @category Filterable
 * @since 2.5.0
 */
var filterMap = function (f) {
    return filterMapWithIndex(function (_, a) { return f(a); });
};
/**
 * @category Compactable
 * @since 2.5.0
 */
var compact = 
/*#__PURE__*/
filterMap(_function__WEBPACK_IMPORTED_MODULE_2__.identity);
/**
 * @category Filterable
 * @since 2.5.0
 */
var partition = function (predicate) {
    return partitionWithIndex(function (_, a) { return predicate(a); });
};
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var partitionWithIndex = function (predicateWithIndex) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var a = fa[i];
        if (predicateWithIndex(i, a)) {
            right.push(a);
        }
        else {
            left.push(a);
        }
    }
    return (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(left, right);
}; };
/**
 * @category Filterable
 * @since 2.5.0
 */
var partitionMap = function (f) {
    return partitionMapWithIndex(function (_, a) { return f(a); });
};
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var partitionMapWithIndex = function (f) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var e = f(i, fa[i]);
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return (0,_Separated__WEBPACK_IMPORTED_MODULE_3__.separated)(left, right);
}; };
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var filterWithIndex = function (predicateWithIndex) { return function (fa) {
    return fa.filter(function (a, i) { return predicateWithIndex(i, a); });
}; };
/**
 * @category Extend
 * @since 2.5.0
 */
var extend = function (f) { return function (wa) { return wa.map(function (_, i) { return f(wa.slice(i)); }); }; };
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
var duplicate = 
/*#__PURE__*/
extend(_function__WEBPACK_IMPORTED_MODULE_2__.identity);
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var foldMapWithIndex = function (M) { return function (f) { return function (fa) {
    return fa.reduce(function (b, a, i) { return M.concat(b, f(i, a)); }, M.empty);
}; }; };
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) {
    return reduceWithIndex(b, function (_, b, a) { return f(b, a); });
};
/**
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function (M) {
    var foldMapWithIndexM = foldMapWithIndex(M);
    return function (f) { return foldMapWithIndexM(function (_, a) { return f(a); }); };
};
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceWithIndex = function (b, f) { return function (fa) {
    var len = fa.length;
    var out = b;
    for (var i = 0; i < len; i++) {
        out = f(i, out, fa[i]);
    }
    return out;
}; };
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) {
    return reduceRightWithIndex(b, function (_, a, b) { return f(a, b); });
};
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceRightWithIndex = function (b, f) { return function (fa) { return fa.reduceRight(function (b, a, i) { return f(i, a, b); }, b); }; };
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) {
    return _reduce(ta, F.of(zero()), function (fas, fa) {
        return F.ap(F.map(fas, function (as) { return function (a) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(as, append(a)); }; }), fa);
    });
}; };
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) {
    return reduceWithIndex(F.of(zero()), function (i, fbs, a) {
        return F.ap(F.map(fbs, function (bs) { return function (b) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(bs, append(b)); }; }), f(i, a));
    });
}; };
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) {
    var traverseF = traverse(F);
    return function (f) { return function (fa) { return F.map((0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, traverseF(f)), compact); }; };
};
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) {
    var traverseF = traverse(F);
    return function (f) { return function (fa) { return F.map((0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, traverseF(f)), separate); }; };
};
/**
 * @category Unfoldable
 * @since 2.6.6
 */
var unfold = function (b, f) {
    var out = [];
    var bb = b;
    while (true) {
        var mt = f(bb);
        if (_Option__WEBPACK_IMPORTED_MODULE_1__.isSome(mt)) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            out.push(a);
            bb = b_1;
        }
        else {
            break;
        }
    }
    return out;
};
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
var URI = 'ReadonlyArray';
/**
 * @category instances
 * @since 2.5.0
 */
var getShow = function (S) { return ({
    show: function (as) { return "[" + as.map(S.show).join(', ') + "]"; }
}); };
/**
 * @category instances
 * @since 2.5.0
 */
var getSemigroup = function () { return ({
    concat: function (first, second) { return (isEmpty(first) ? second : isEmpty(second) ? first : first.concat(second)); }
}); };
/**
 * Returns a `Monoid` for `ReadonlyArray<A>`.
 *
 * @example
 * import { getMonoid } from 'fp-ts/ReadonlyArray'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @category instances
 * @since 2.5.0
 */
var getMonoid = function () { return ({
    concat: getSemigroup().concat,
    empty: empty
}); };
/**
 * Derives an `Eq` over the `ReadonlyArray` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { getEq } from 'fp-ts/ReadonlyArray'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @category instances
 * @since 2.5.0
 */
var getEq = function (E) {
    return (0,_Eq__WEBPACK_IMPORTED_MODULE_4__.fromEquals)(function (xs, ys) { return xs.length === ys.length && xs.every(function (x, i) { return E.equals(x, ys[i]); }); });
};
/**
 * Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/ReadonlyArray'
 * import * as S from 'fp-ts/string'
 *
 * const O = getOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 *
 * @category instances
 * @since 2.5.0
 */
var getOrd = function (O) {
    return (0,_Ord__WEBPACK_IMPORTED_MODULE_5__.fromCompare)(function (a, b) {
        var aLen = a.length;
        var bLen = b.length;
        var len = Math.min(aLen, bLen);
        for (var i = 0; i < len; i++) {
            var ordering = O.compare(a[i], b[i]);
            if (ordering !== 0) {
                return ordering;
            }
        }
        return _number__WEBPACK_IMPORTED_MODULE_6__.Ord.compare(aLen, bLen);
    });
};
/**
 * @category instances
 * @since 2.7.0
 */
var Functor = {
    URI: URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
var flap = 
/*#_PURE_*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_7__.flap)(Functor);
/**
 * @category instances
 * @since 2.10.0
 */
var Pointed = {
    URI: URI,
    of: of
};
/**
 * @category instances
 * @since 2.7.0
 */
var FunctorWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
var apFirst = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_8__.apFirst)(Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
var apSecond = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_8__.apSecond)(Apply);
/**
 * @category instances
 * @since 2.7.0
 */
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
var chainFirst = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_9__.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.7.0
 */
var Unfoldable = {
    URI: URI,
    unfold: unfold
};
/**
 * @category instances
 * @since 2.7.0
 */
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
var Alternative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    alt: _alt,
    zero: zero
};
/**
 * @category instances
 * @since 2.7.0
 */
var Extend = {
    URI: URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
var Compactable = {
    URI: URI,
    compact: compact,
    separate: separate
};
/**
 * @category instances
 * @since 2.7.0
 */
var Filterable = {
    URI: URI,
    map: _map,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
var FilterableWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
var Foldable = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
var FoldableWithIndex = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
var Traversable = {
    URI: URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
var TraversableWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence: sequence,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
var Witherable = {
    URI: URI,
    map: _map,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    wither: _wither,
    wilt: _wilt
};
// -------------------------------------------------------------------------------------
// unsafe
// -------------------------------------------------------------------------------------
/**
 * @category unsafe
 * @since 2.5.0
 */
var unsafeInsertAt = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.unsafeInsertAt;
/**
 * @category unsafe
 * @since 2.5.0
 */
var unsafeUpdateAt = function (i, a, as) {
    return isNonEmpty(as) ? _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.unsafeUpdateAt(i, a, as) : as;
};
/**
 * @category unsafe
 * @since 2.5.0
 */
var unsafeDeleteAt = function (i, as) {
    var xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.5.0
 */
var toArray = function (as) { return as.slice(); };
/**
 * @category interop
 * @since 2.5.0
 */
var fromArray = function (as) { return (isEmpty(as) ? empty : as.slice()); };
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * An empty array
 *
 * @since 2.5.0
 */
var empty = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.empty;
/**
 * Check if a predicate holds true for every array member.
 *
 * @example
 * import { every } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], every(isPositive)), true)
 * assert.deepStrictEqual(pipe([1, 2, -3], every(isPositive)), false)
 *
 * @since 2.9.0
 */
var every = function (predicate) { return function (as) { return as.every(predicate); }; };
/**
 * Check if a predicate holds true for any array member.
 *
 * @example
 * import { some } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([-1, -2, 3], some(isPositive)), true)
 * assert.deepStrictEqual(pipe([-1, -2, -3], some(isPositive)), false)
 *
 * @since 2.9.0
 */
var some = function (predicate) { return function (as) {
    return as.some(predicate);
}; };
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
var Do = 
/*#__PURE__*/
of({});
/**
 * @since 2.8.0
 */
var bindTo = 
/*#__PURE__*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_7__.bindTo)(Functor);
/**
 * @since 2.8.0
 */
var bind = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_9__.bind)(Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
var apS = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_8__.apS)(Apply);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`prepend`](#prepend) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
var cons = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.cons;
/**
 * Use [`append`](#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
var snoc = _ReadonlyNonEmptyArray__WEBPACK_IMPORTED_MODULE_0__.snoc;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
var prependToAll = prependAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
var readonlyArray = {
    URI: URI,
    compact: compact,
    separate: separate,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero: zero,
    unfold: unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js":
/*!****************************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": () => /* binding */ empty,
/* harmony export */   "isNonEmpty": () => /* binding */ isNonEmpty,
/* harmony export */   "isOutOfBound": () => /* binding */ isOutOfBound,
/* harmony export */   "prepend": () => /* binding */ prepend,
/* harmony export */   "append": () => /* binding */ append,
/* harmony export */   "unsafeInsertAt": () => /* binding */ unsafeInsertAt,
/* harmony export */   "unsafeUpdateAt": () => /* binding */ unsafeUpdateAt,
/* harmony export */   "uniq": () => /* binding */ uniq,
/* harmony export */   "sortBy": () => /* binding */ sortBy,
/* harmony export */   "union": () => /* binding */ union,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "makeBy": () => /* binding */ makeBy,
/* harmony export */   "fromReadonlyArray": () => /* binding */ fromReadonlyArray,
/* harmony export */   "unprepend": () => /* binding */ unprepend,
/* harmony export */   "unappend": () => /* binding */ unappend,
/* harmony export */   "fromArray": () => /* binding */ fromArray,
/* harmony export */   "concat": () => /* binding */ concat,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "group": () => /* binding */ group,
/* harmony export */   "groupSort": () => /* binding */ groupSort,
/* harmony export */   "groupBy": () => /* binding */ groupBy,
/* harmony export */   "sort": () => /* binding */ sort,
/* harmony export */   "updateAt": () => /* binding */ updateAt,
/* harmony export */   "modifyAt": () => /* binding */ modifyAt,
/* harmony export */   "zipWith": () => /* binding */ zipWith,
/* harmony export */   "zip": () => /* binding */ zip,
/* harmony export */   "unzip": () => /* binding */ unzip,
/* harmony export */   "prependAll": () => /* binding */ prependAll,
/* harmony export */   "intersperse": () => /* binding */ intersperse,
/* harmony export */   "chainWithIndex": () => /* binding */ chainWithIndex,
/* harmony export */   "chop": () => /* binding */ chop,
/* harmony export */   "splitAt": () => /* binding */ splitAt,
/* harmony export */   "chunksOf": () => /* binding */ chunksOf,
/* harmony export */   "of": () => /* binding */ of,
/* harmony export */   "altW": () => /* binding */ altW,
/* harmony export */   "alt": () => /* binding */ alt,
/* harmony export */   "ap": () => /* binding */ ap,
/* harmony export */   "chain": () => /* binding */ chain,
/* harmony export */   "extend": () => /* binding */ extend,
/* harmony export */   "duplicate": () => /* binding */ duplicate,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "mapWithIndex": () => /* binding */ mapWithIndex,
/* harmony export */   "reduce": () => /* binding */ reduce,
/* harmony export */   "foldMap": () => /* binding */ foldMap,
/* harmony export */   "reduceRight": () => /* binding */ reduceRight,
/* harmony export */   "reduceWithIndex": () => /* binding */ reduceWithIndex,
/* harmony export */   "foldMapWithIndex": () => /* binding */ foldMapWithIndex,
/* harmony export */   "reduceRightWithIndex": () => /* binding */ reduceRightWithIndex,
/* harmony export */   "traverse": () => /* binding */ traverse,
/* harmony export */   "sequence": () => /* binding */ sequence,
/* harmony export */   "traverseWithIndex": () => /* binding */ traverseWithIndex,
/* harmony export */   "extract": () => /* binding */ extract,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "getShow": () => /* binding */ getShow,
/* harmony export */   "getSemigroup": () => /* binding */ getSemigroup,
/* harmony export */   "getEq": () => /* binding */ getEq,
/* harmony export */   "Functor": () => /* binding */ Functor,
/* harmony export */   "flap": () => /* binding */ flap,
/* harmony export */   "Pointed": () => /* binding */ Pointed,
/* harmony export */   "FunctorWithIndex": () => /* binding */ FunctorWithIndex,
/* harmony export */   "Apply": () => /* binding */ Apply,
/* harmony export */   "apFirst": () => /* binding */ apFirst,
/* harmony export */   "apSecond": () => /* binding */ apSecond,
/* harmony export */   "Applicative": () => /* binding */ Applicative,
/* harmony export */   "Chain": () => /* binding */ Chain,
/* harmony export */   "chainFirst": () => /* binding */ chainFirst,
/* harmony export */   "Monad": () => /* binding */ Monad,
/* harmony export */   "Foldable": () => /* binding */ Foldable,
/* harmony export */   "FoldableWithIndex": () => /* binding */ FoldableWithIndex,
/* harmony export */   "Traversable": () => /* binding */ Traversable,
/* harmony export */   "TraversableWithIndex": () => /* binding */ TraversableWithIndex,
/* harmony export */   "Alt": () => /* binding */ Alt,
/* harmony export */   "Comonad": () => /* binding */ Comonad,
/* harmony export */   "Do": () => /* binding */ Do,
/* harmony export */   "bindTo": () => /* binding */ bindTo,
/* harmony export */   "bind": () => /* binding */ bind,
/* harmony export */   "apS": () => /* binding */ apS,
/* harmony export */   "head": () => /* binding */ head,
/* harmony export */   "tail": () => /* binding */ tail,
/* harmony export */   "last": () => /* binding */ last,
/* harmony export */   "init": () => /* binding */ init,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "concatAll": () => /* binding */ concatAll,
/* harmony export */   "filter": () => /* binding */ filter,
/* harmony export */   "filterWithIndex": () => /* binding */ filterWithIndex,
/* harmony export */   "uncons": () => /* binding */ uncons,
/* harmony export */   "unsnoc": () => /* binding */ unsnoc,
/* harmony export */   "cons": () => /* binding */ cons,
/* harmony export */   "snoc": () => /* binding */ snoc,
/* harmony export */   "insertAt": () => /* binding */ insertAt,
/* harmony export */   "prependToAll": () => /* binding */ prependToAll,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "readonlyNonEmptyArray": () => /* binding */ readonlyNonEmptyArray
/* harmony export */ });
/* harmony import */ var _Apply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Apply.js");
/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Chain.js");
/* harmony import */ var _Eq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Eq.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _Functor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/internal.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Option.js");
/* harmony import */ var _Ord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Ord.js");
/* harmony import */ var _Semigroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Semigroup */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Semigroup.js");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};









// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
var empty = [];
/**
 * @internal
 */
var isNonEmpty = function (as) { return as.length > 0; };
/**
 * @internal
 */
var isOutOfBound = function (i, as) { return i < 0 || i >= as.length; };
/**
 * @internal
 */
var prepend = function (head) { return function (tail) { return __spreadArray([head], tail); }; };
/**
 * @internal
 */
var append = function (end) { return function (init) { return concat(init, [end]); }; };
/**
 * @internal
 */
var unsafeInsertAt = function (i, a, as) {
    if (isNonEmpty(as)) {
        var xs = _internal__WEBPACK_IMPORTED_MODULE_0__.fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [a];
};
/**
 * @internal
 */
var unsafeUpdateAt = function (i, a, as) {
    if (as[i] === a) {
        return as;
    }
    else {
        var xs = _internal__WEBPACK_IMPORTED_MODULE_0__.fromReadonlyNonEmptyArray(as);
        xs[i] = a;
        return xs;
    }
};
/**
 * @internal
 */
var uniq = function (E) { return function (as) {
    if (as.length === 1) {
        return as;
    }
    var out = [head(as)];
    var rest = tail(as);
    var _loop_1 = function (a) {
        if (out.every(function (o) { return !E.equals(o, a); })) {
            out.push(a);
        }
    };
    for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
        var a = rest_1[_i];
        _loop_1(a);
    }
    return out;
}; };
/**
 * @internal
 */
var sortBy = function (ords) {
    if (isNonEmpty(ords)) {
        var M = (0,_Ord__WEBPACK_IMPORTED_MODULE_1__.getMonoid)();
        return sort(ords.reduce(M.concat, M.empty));
    }
    return _function__WEBPACK_IMPORTED_MODULE_2__.identity;
};
/**
 * @internal
 */
var union = function (E) {
    var uniqE = uniq(E);
    return function (first, second) { return uniqE(concat(first, second)); };
};
/**
 * @internal
 */
var rotate = function (n) { return function (as) {
    var len = as.length;
    var m = Math.round(n) % len;
    if (isOutOfBound(Math.abs(m), as) || m === 0) {
        return as;
    }
    if (m < 0) {
        var _a = splitAt(-m)(as), f = _a[0], s = _a[1];
        return concat(s, f);
    }
    else {
        return rotate(m - len)(as);
    }
}; };
/**
 * @internal
 */
var makeBy = function (n, f) {
    var j = Math.max(0, Math.floor(n));
    var out = [f(0)];
    for (var i = 1; i < j; i++) {
        out.push(f(i));
    }
    return out;
};
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Return a `ReadonlyNonEmptyArray` from a `ReadonlyArray` returning `none` if the input is empty.
 *
 * @category constructors
 * @since 2.5.0
 */
var fromReadonlyArray = function (as) {
    return isNonEmpty(as) ? _Option__WEBPACK_IMPORTED_MODULE_3__.some(as) : _Option__WEBPACK_IMPORTED_MODULE_3__.none;
};
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 * import { unprepend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3, 4]), [1, [2, 3, 4]])
 *
 * @category destructors
 * @since 2.9.0
 */
var unprepend = function (as) { return [head(as), tail(as)]; };
/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 * import { unappend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 *
 * @category destructors
 * @since 2.9.0
 */
var unappend = function (as) { return [init(as), last(as)]; };
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.5.0
 */
var fromArray = function (as) { return fromReadonlyArray(as.slice()); };
function concat(first, second) {
    return first.concat(second);
}
/**
 * @category combinators
 * @since 2.5.0
 */
var reverse = function (as) {
    return as.length === 1 ? as : __spreadArray([last(as)], as.slice(0, -1).reverse());
};
function group(E) {
    return function (as) {
        var len = as.length;
        if (len === 0) {
            return empty;
        }
        var out = [];
        var head = as[0];
        var nea = [head];
        for (var i = 1; i < len; i++) {
            var a = as[i];
            if (E.equals(a, head)) {
                nea.push(a);
            }
            else {
                out.push(nea);
                head = a;
                nea = [head];
            }
        }
        out.push(nea);
        return out;
    };
}
function groupSort(O) {
    var sortO = sort(O);
    var groupO = group(O);
    return function (as) { return (isNonEmpty(as) ? groupO(sortO(as)) : empty); };
}
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { groupBy } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.5.0
 */
var groupBy = function (f) { return function (as) {
    var out = {};
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        var k = f(a);
        if (out.hasOwnProperty(k)) {
            out[k].push(a);
        }
        else {
            out[k] = [a];
        }
    }
    return out;
}; };
/**
 * @category combinators
 * @since 2.5.0
 */
var sort = function (O) { return function (as) {
    return as.length === 1 ? as : as.slice().sort(O.compare);
}; };
/**
 * @category combinators
 * @since 2.5.0
 */
var updateAt = function (i, a) {
    return modifyAt(i, function () { return a; });
};
/**
 * @category combinators
 * @since 2.5.0
 */
var modifyAt = function (i, f) { return function (as) { return (isOutOfBound(i, as) ? _Option__WEBPACK_IMPORTED_MODULE_3__.none : _Option__WEBPACK_IMPORTED_MODULE_3__.some(unsafeUpdateAt(i, f(as[i]), as))); }; };
/**
 * @category combinators
 * @since 2.5.1
 */
var zipWith = function (as, bs, f) {
    var cs = [f(as[0], bs[0])];
    var len = Math.min(as.length, bs.length);
    for (var i = 1; i < len; i++) {
        cs[i] = f(as[i], bs[i]);
    }
    return cs;
};
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return zipWith(as, bs, function (a, b) { return [a, b]; });
}
/**
 * @category combinators
 * @since 2.5.1
 */
var unzip = function (abs) {
    var fa = [abs[0][0]];
    var fb = [abs[0][1]];
    for (var i = 1; i < abs.length; i++) {
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [fa, fb];
};
/**
 * Prepend an element to every member of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) { return function (as) {
    var out = [middle, as[0]];
    for (var i = 1; i < as.length; i++) {
        out.push(middle, as[i]);
    }
    return out;
}; };
/**
 * Places an element in between members of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) { return function (as) {
    var rest = tail(as);
    return isNonEmpty(rest) ? (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(rest, prependAll(middle), prepend(head(as))) : as;
}; };
/**
 * @category combinators
 * @since 2.10.0
 */
var chainWithIndex = function (f) { return function (as) {
    var out = _internal__WEBPACK_IMPORTED_MODULE_0__.fromReadonlyNonEmptyArray(f(0, head(as)));
    for (var i = 1; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
/**
 * A useful recursion pattern for processing a `ReadonlyNonEmptyArray` to produce a new `ReadonlyNonEmptyArray`, often used for "chopping" up the input
 * `ReadonlyNonEmptyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyNonEmptyArray` and produce a
 * value and the tail of the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */
var chop = function (f) { return function (as) {
    var _a = f(as), b = _a[0], rest = _a[1];
    var out = [b];
    var next = rest;
    while (isNonEmpty(next)) {
        var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
        out.push(b_1);
        next = rest_2;
    }
    return out;
}; };
/**
 * Splits a `ReadonlyNonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */
var splitAt = function (n) { return function (as) {
    var m = Math.max(1, n);
    return m >= as.length ? [as, empty] : [(0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(as.slice(1, m), prepend(head(as))), as.slice(m)];
}; };
/**
 * Splits a `ReadonlyNonEmptyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */
var chunksOf = function (n) { return chop(splitAt(n)); };
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, mapWithIndex(f)); };
var _ap = function (fab, fa) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fab, ap(fa)); };
var _chain = function (ma, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(ma, chain(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(wa, extend(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = foldMap(M);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = traverse(F);
    return function (ta, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _alt = function (fa, that) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, alt(that)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = foldMapWithIndex(M);
    return function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(fa, reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(ta, traverseWithIndexF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Pointed
 * @since 2.5.0
 */
var of = function (a) { return [a]; };
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (as) { return concat(as, that()); }; };
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */
var alt = altW;
/**
 * @category Apply
 * @since 2.5.0
 */
var ap = function (as) { return chain(function (f) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(as, map(f)); }); };
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.5.0
 */
var chain = function (f) { return chainWithIndex(function (_, a) { return f(a); }); };
/**
 * @category Extend
 * @since 2.5.0
 */
var extend = function (f) { return function (as) {
    var next = tail(as);
    var out = [f(as)];
    while (isNonEmpty(next)) {
        out.push(f(next));
        next = tail(next);
    }
    return out;
}; };
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
var duplicate = 
/*#__PURE__*/
extend(_function__WEBPACK_IMPORTED_MODULE_2__.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
var flatten = 
/*#__PURE__*/
chain(_function__WEBPACK_IMPORTED_MODULE_2__.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */
var map = function (f) {
    return mapWithIndex(function (_, a) { return f(a); });
};
/**
 * @category FunctorWithIndex
 * @since 2.5.0
 */
var mapWithIndex = function (f) { return function (as) {
    var out = [f(0, head(as))];
    for (var i = 1; i < as.length; i++) {
        out.push(f(i, as[i]));
    }
    return out;
}; };
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) {
    return reduceWithIndex(b, function (_, b, a) { return f(b, a); });
};
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function (S) { return function (f) { return function (as) {
    return as.slice(1).reduce(function (s, a) { return S.concat(s, f(a)); }, f(as[0]));
}; }; };
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) {
    return reduceRightWithIndex(b, function (_, b, a) { return f(b, a); });
};
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceWithIndex = function (b, f) { return function (as) {
    return as.reduce(function (b, a, i) { return f(i, b, a); }, b);
}; };
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var foldMapWithIndex = function (S) { return function (f) { return function (as) { return as.slice(1).reduce(function (s, a, i) { return S.concat(s, f(i + 1, a)); }, f(0, as[0])); }; }; };
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceRightWithIndex = function (b, f) { return function (as) { return as.reduceRight(function (b, a, i) { return f(i, a, b); }, b); }; };
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return traverseWithIndex(F)(function (_, a) { return a; }); };
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) { return function (as) {
    var out = F.map(f(0, head(as)), of);
    for (var i = 1; i < as.length; i++) {
        out = F.ap(F.map(out, function (bs) { return function (b) { return (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(bs, append(b)); }; }), f(i, as[i]));
    }
    return out;
}; }; };
/**
 * @category Comonad
 * @since 2.6.3
 */
var extract = function (as) { return as[0]; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
var URI = 'ReadonlyNonEmptyArray';
/**
 * @category instances
 * @since 2.5.0
 */
var getShow = function (S) { return ({
    show: function (as) { return "[" + as.map(S.show).join(', ') + "]"; }
}); };
/**
 * Builds a `Semigroup` instance for `ReadonlyNonEmptyArray`
 *
 * @category instances
 * @since 2.5.0
 */
var getSemigroup = function () { return ({
    concat: concat
}); };
/**
 * @example
 * import { getEq } from 'fp-ts/ReadonlyNonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.5.0
 */
var getEq = function (E) {
    return (0,_Eq__WEBPACK_IMPORTED_MODULE_4__.fromEquals)(function (xs, ys) { return xs.length === ys.length && xs.every(function (x, i) { return E.equals(x, ys[i]); }); });
};
/**
 * @category instances
 * @since 2.7.0
 */
var Functor = {
    URI: URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
var flap = 
/*#_PURE_*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_5__.flap)(Functor);
/**
 * @category instances
 * @since 2.10.0
 */
var Pointed = {
    URI: URI,
    of: of
};
/**
 * @category instances
 * @since 2.7.0
 */
var FunctorWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
var apFirst = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_6__.apFirst)(Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
var apSecond = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_6__.apSecond)(Apply);
/**
 * @category instances
 * @since 2.7.0
 */
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
/**
 * @category instances
 * @since 2.10.0
 */
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
var chainFirst = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_7__.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.7.0
 */
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
var Foldable = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
var FoldableWithIndex = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
var Traversable = {
    URI: URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
var TraversableWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
var Comonad = {
    URI: URI,
    map: _map,
    extend: _extend,
    extract: extract
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
var Do = 
/*#__PURE__*/
of({});
/**
 * @since 2.8.0
 */
var bindTo = 
/*#__PURE__*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_5__.bindTo)(Functor);
/**
 * @since 2.8.0
 */
var bind = 
/*#__PURE__*/
(0,_Chain__WEBPACK_IMPORTED_MODULE_7__.bind)(Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
var apS = 
/*#__PURE__*/
(0,_Apply__WEBPACK_IMPORTED_MODULE_6__.apS)(Apply);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.5.0
 */
var head = extract;
/**
 * @since 2.5.0
 */
var tail = function (as) { return as.slice(1); };
/**
 * @since 2.5.0
 */
var last = function (as) { return as[as.length - 1]; };
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.5.0
 */
var init = function (as) { return as.slice(0, -1); };
/**
 * @since 2.5.0
 */
var min = function (O) {
    var S = _Semigroup__WEBPACK_IMPORTED_MODULE_8__.min(O);
    return function (as) { return as.reduce(S.concat); };
};
/**
 * @since 2.5.0
 */
var max = function (O) {
    var S = _Semigroup__WEBPACK_IMPORTED_MODULE_8__.max(O);
    return function (as) { return as.reduce(S.concat); };
};
/**
 * @since 2.10.0
 */
var concatAll = function (S) { return function (as) { return as.reduce(S.concat); }; };
function filter(predicate) {
    // tslint:disable-next-line: deprecation
    return filterWithIndex(function (_, a) { return predicate(a); });
}
/**
 * Use [`filterWithIndex`](./ReadonlyArray.ts.html#filterWithIndex) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
var filterWithIndex = function (predicate) { return function (as) { return fromReadonlyArray(as.filter(function (a, i) { return predicate(i, a); })); }; };
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */
var uncons = unprepend;
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */
var unsnoc = unappend;
function cons(head, tail) {
    return tail === undefined ? prepend(head) : (0,_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(tail, prepend(head));
}
/**
 * Use [`append`](./ReadonlyArray.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
var snoc = function (init, end) { return concat(init, [end]); };
/**
 * Use [`insertAt`](./ReadonlyArray.ts.html#insertAt) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
var insertAt = function (i, a) { return function (as) {
    return i < 0 || i > as.length ? _Option__WEBPACK_IMPORTED_MODULE_3__.none : _Option__WEBPACK_IMPORTED_MODULE_3__.some(unsafeInsertAt(i, a, as));
}; };
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
var prependToAll = prependAll;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
var fold = concatAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
var readonlyNonEmptyArray = {
    URI: URI,
    of: of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: _chain,
    extend: _extend,
    extract: extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Semigroup.js":
/*!****************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Semigroup.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "constant": () => /* binding */ constant,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "struct": () => /* binding */ struct,
/* harmony export */   "tuple": () => /* binding */ tuple,
/* harmony export */   "intercalate": () => /* binding */ intercalate,
/* harmony export */   "first": () => /* binding */ first,
/* harmony export */   "last": () => /* binding */ last,
/* harmony export */   "semigroupVoid": () => /* binding */ semigroupVoid,
/* harmony export */   "concatAll": () => /* binding */ concatAll,
/* harmony export */   "getObjectSemigroup": () => /* binding */ getObjectSemigroup,
/* harmony export */   "getLastSemigroup": () => /* binding */ getLastSemigroup,
/* harmony export */   "getFirstSemigroup": () => /* binding */ getFirstSemigroup,
/* harmony export */   "getTupleSemigroup": () => /* binding */ getTupleSemigroup,
/* harmony export */   "getStructSemigroup": () => /* binding */ getStructSemigroup,
/* harmony export */   "getDualSemigroup": () => /* binding */ getDualSemigroup,
/* harmony export */   "getJoinSemigroup": () => /* binding */ getJoinSemigroup,
/* harmony export */   "getMeetSemigroup": () => /* binding */ getMeetSemigroup,
/* harmony export */   "getIntercalateSemigroup": () => /* binding */ getIntercalateSemigroup,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "semigroupAll": () => /* binding */ semigroupAll,
/* harmony export */   "semigroupAny": () => /* binding */ semigroupAny,
/* harmony export */   "getFunctionSemigroup": () => /* binding */ getFunctionSemigroup,
/* harmony export */   "semigroupString": () => /* binding */ semigroupString,
/* harmony export */   "semigroupSum": () => /* binding */ semigroupSum,
/* harmony export */   "semigroupProduct": () => /* binding */ semigroupProduct
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/internal.js");
/* harmony import */ var _Ord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Ord.js");
/**
 * If a type `A` can form a `Semigroup` it has an **associative** binary operation.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 * ```
 *
 * Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.
 *
 * ```ts
 * concat(x, concat(y, z)) = concat(concat(x, y), z)
 * ```
 *
 * A common example of a semigroup is the type `string` with the operation `+`.
 *
 * ```ts
 * import { Semigroup } from 'fp-ts/Semigroup'
 *
 * const semigroupString: Semigroup<string> = {
 *   concat: (x, y) => x + y
 * }
 *
 * const x = 'x'
 * const y = 'y'
 * const z = 'z'
 *
 * semigroupString.concat(x, y) // 'xy'
 *
 * semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'
 *
 * semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
 * ```
 *
 * *Adapted from https://typelevel.org/cats*
 *
 * @since 2.0.0
 */



// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Get a semigroup where `concat` will return the minimum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.min(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */
var min = function (O) { return ({
    concat: _Ord__WEBPACK_IMPORTED_MODULE_0__.min(O)
}); };
/**
 * Get a semigroup where `concat` will return the maximum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.max(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */
var max = function (O) { return ({
    concat: _Ord__WEBPACK_IMPORTED_MODULE_0__.max(O)
}); };
/**
 * @category constructors
 * @since 2.10.0
 */
var constant = function (a) { return ({
    concat: function () { return a; }
}); };
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Semigroup`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Semigroup).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (S) { return ({
    concat: function (x, y) { return S.concat(y, x); }
}); };
/**
 * Given a struct of semigroups returns a semigroup for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const S = struct<Point>({
 *   x: N.SemigroupSum,
 *   y: N.SemigroupSum
 * })
 *
 * assert.deepStrictEqual(S.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */
var struct = function (semigroups) { return ({
    concat: function (first, second) {
        var r = {};
        for (var k in semigroups) {
            if (_internal__WEBPACK_IMPORTED_MODULE_1__.has.call(semigroups, k)) {
                r[k] = semigroups[k].concat(first[k], second[k]);
            }
        }
        return r;
    }
}); };
/**
 * Given a tuple of semigroups returns a semigroup for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Semigroup'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const S1 = tuple(S.Semigroup, N.SemigroupSum)
 * assert.deepStrictEqual(S1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const S2 = tuple(S.Semigroup, N.SemigroupSum, B.SemigroupAll)
 * assert.deepStrictEqual(S2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var semigroups = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        semigroups[_i] = arguments[_i];
    }
    return ({
        concat: function (first, second) { return semigroups.map(function (s, i) { return s.concat(first[i], second[i]); }); }
    });
};
/**
 * Between each pair of elements insert `middle`.
 *
 * @example
 * import { intercalate } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * const S1 = pipe(S.Semigroup, intercalate(' + '))
 *
 * assert.strictEqual(S1.concat('a', 'b'), 'a + b')
 *
 * @category combinators
 * @since 2.10.0
 */
var intercalate = function (middle) { return function (S) { return ({
    concat: function (x, y) { return S.concat(x, S.concat(middle, y)); }
}); }; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * Always return the first argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.first<number>().concat(1, 2), 1)
 *
 * @category instances
 * @since 2.10.0
 */
var first = function () { return ({ concat: _function__WEBPACK_IMPORTED_MODULE_2__.identity }); };
/**
 * Always return the last argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.last<number>().concat(1, 2), 2)
 *
 * @category instances
 * @since 2.10.0
 */
var last = function () { return ({ concat: function (_, y) { return y; } }); };
/**
 * @category instances
 * @since 2.0.0
 */
var semigroupVoid = constant(undefined);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the provided `startWith` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * const sum = concatAll(N.SemigroupSum)(0)
 *
 * assert.deepStrictEqual(sum([1, 2, 3]), 6)
 * assert.deepStrictEqual(sum([]), 0)
 *
 * @since 2.10.0
 */
var concatAll = function (S) { return function (startWith) { return function (as) {
    return as.reduce(S.concat, startWith);
}; }; };
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`getAssignSemigroup`](./struct.ts.html#getAssignSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getObjectSemigroup = function () { return ({
    concat: function (first, second) { return Object.assign({}, first, second); }
}); };
/**
 * Use [`last`](#last) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getLastSemigroup = last;
/**
 * Use [`first`](#first) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getFirstSemigroup = first;
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getTupleSemigroup = tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getStructSemigroup = struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getDualSemigroup = reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
var getJoinSemigroup = max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
var getMeetSemigroup = min;
/**
 * Use [`intercalate`](#intercalate) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
var getIntercalateSemigroup = intercalate;
function fold(S) {
    var concatAllS = concatAll(S);
    return function (startWith, as) { return (as === undefined ? concatAllS(startWith) : concatAllS(startWith)(as)); };
}
/**
 * Use [`SemigroupAll`](./boolean.ts.html#SemigroupAll) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var semigroupAll = {
    concat: function (x, y) { return x && y; }
};
/**
 * Use [`SemigroupAny`](./boolean.ts.html#SemigroupAny) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var semigroupAny = {
    concat: function (x, y) { return x || y; }
};
/**
 * Use [`getSemigroup`](./function.ts.html#getSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getFunctionSemigroup = _function__WEBPACK_IMPORTED_MODULE_2__.getSemigroup;
/**
 * Use [`Semigroup`](./string.ts.html#Semigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var semigroupString = {
    concat: function (x, y) { return x + y; }
};
/**
 * Use [`SemigroupSum`](./number.ts.html#SemigroupSum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var semigroupSum = {
    concat: function (x, y) { return x + y; }
};
/**
 * Use [`SemigroupProduct`](./number.ts.html#SemigroupProduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var semigroupProduct = {
    concat: function (x, y) { return x * y; }
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Separated.js":
/*!****************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Separated.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "separated": () => /* binding */ separated,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "mapLeft": () => /* binding */ mapLeft,
/* harmony export */   "bimap": () => /* binding */ bimap,
/* harmony export */   "URI": () => /* binding */ URI,
/* harmony export */   "Bifunctor": () => /* binding */ Bifunctor,
/* harmony export */   "Functor": () => /* binding */ Functor,
/* harmony export */   "flap": () => /* binding */ flap,
/* harmony export */   "left": () => /* binding */ left,
/* harmony export */   "right": () => /* binding */ right
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");
/* harmony import */ var _Functor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Functor.js");
/**
 * ```ts
 * interface Separated<E, A> {
 *    readonly left: E
 *    readonly right: A
 * }
 * ```
 *
 * Represents a result of separating a whole into two parts.
 *
 * @since 2.10.0
 */


// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.10.0
 */
var separated = function (left, right) { return ({ left: left, right: right }); };
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fa, map(f)); };
var _mapLeft = function (fa, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fa, mapLeft(f)); };
var _bimap = function (fa, g, f) { return (0,_function__WEBPACK_IMPORTED_MODULE_0__.pipe)(fa, bimap(g, f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.10.0
 */
var map = function (f) { return function (fa) {
    return separated(left(fa), f(right(fa)));
}; };
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */
var mapLeft = function (f) { return function (fa) {
    return separated(f(left(fa)), right(fa));
}; };
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */
var bimap = function (f, g) { return function (fa) {
    return separated(f(left(fa)), g(right(fa)));
}; };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
var URI = 'Separated';
/**
 * @category instances
 * @since 2.10.0
 */
var Bifunctor = {
    URI: URI,
    mapLeft: _mapLeft,
    bimap: _bimap
};
/**
 * @category instances
 * @since 2.10.0
 */
var Functor = {
    URI: URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
var flap = 
/*#_PURE_*/
(0,_Functor__WEBPACK_IMPORTED_MODULE_1__.flap)(Functor);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.10.0
 */
var left = function (s) { return s.left; };
/**
 * @since 2.10.0
 */
var right = function (s) { return s.right; };


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Show.js":
/*!***********************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Show.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "struct": () => /* binding */ struct,
/* harmony export */   "tuple": () => /* binding */ tuple,
/* harmony export */   "getTupleShow": () => /* binding */ getTupleShow,
/* harmony export */   "getStructShow": () => /* binding */ getStructShow,
/* harmony export */   "showBoolean": () => /* binding */ showBoolean,
/* harmony export */   "showString": () => /* binding */ showString,
/* harmony export */   "showNumber": () => /* binding */ showNumber
/* harmony export */ });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/internal.js");
/**
 * The `Show` type class represents those types which can be converted into
 * a human-readable `string` representation.
 *
 * While not required, it is recommended that for any expression `x`, the
 * string `show(x)` be executable TypeScript code which evaluates to the same
 * value as the expression `x`.
 *
 * @since 2.0.0
 */

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var struct = function (shows) { return ({
    show: function (a) {
        var s = '{';
        for (var k in shows) {
            if (_internal__WEBPACK_IMPORTED_MODULE_0__.has.call(shows, k)) {
                s += " " + k + ": " + shows[k].show(a[k]) + ",";
            }
        }
        if (s.length > 1) {
            s = s.slice(0, -1) + ' ';
        }
        s += '}';
        return s;
    }
}); };
/**
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var shows = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        shows[_i] = arguments[_i];
    }
    return ({
        show: function (t) { return "[" + t.map(function (a, i) { return shows[i].show(a); }).join(', ') + "]"; }
    });
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getTupleShow = tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var getStructShow = struct;
/**
 * Use [`Show`](./boolean.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var showBoolean = {
    show: function (a) { return JSON.stringify(a); }
};
/**
 * Use [`Show`](./string.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var showString = {
    show: function (a) { return JSON.stringify(a); }
};
/**
 * Use [`Show`](./number.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var showNumber = {
    show: function (a) { return JSON.stringify(a); }
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/boolean.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/boolean.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchW": () => /* binding */ matchW,
/* harmony export */   "foldW": () => /* binding */ foldW,
/* harmony export */   "match": () => /* binding */ match,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "Eq": () => /* binding */ Eq,
/* harmony export */   "BooleanAlgebra": () => /* binding */ BooleanAlgebra,
/* harmony export */   "SemigroupAll": () => /* binding */ SemigroupAll,
/* harmony export */   "SemigroupAny": () => /* binding */ SemigroupAny,
/* harmony export */   "MonoidAll": () => /* binding */ MonoidAll,
/* harmony export */   "MonoidAny": () => /* binding */ MonoidAny,
/* harmony export */   "Ord": () => /* binding */ Ord,
/* harmony export */   "Show": () => /* binding */ Show
/* harmony export */ });
/* harmony import */ var _BooleanAlgebra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooleanAlgebra */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/BooleanAlgebra.js");
/* harmony import */ var _Eq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Eq.js");
/* harmony import */ var _Semigroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Semigroup */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Semigroup.js");
/* harmony import */ var _Monoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Monoid */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Monoid.js");
/* harmony import */ var _Ord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Ord.js");
/* harmony import */ var _Show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Show */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Show.js");
/**
 * @since 2.2.0
 */






// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onFalse, onTrue) { return function (value) {
    return value ? onTrue() : onFalse();
}; };
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */
var foldW = matchW;
/**
 * Defines the fold over a boolean value.
 * Takes two thunks `onTrue`, `onFalse` and a `boolean` value.
 * If `value` is false, `onFalse()` is returned, otherwise `onTrue()`.
 *
 * @example
 * import { some, map } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 * import { match } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(
 *  pipe(
 *    some(true),
 *    map(match(() => 'false', () => 'true'))
 *  ),
 *  some('true')
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
var match = foldW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.2.0
 */
var fold = match;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var Eq = _Eq__WEBPACK_IMPORTED_MODULE_0__.eqBoolean;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var BooleanAlgebra = _BooleanAlgebra__WEBPACK_IMPORTED_MODULE_1__.booleanAlgebraBoolean;
/**
 * `boolean` semigroup under conjunction.
 *
 * @example
 * import { SemigroupAll } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(SemigroupAll.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAll.concat(true, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var SemigroupAll = _Semigroup__WEBPACK_IMPORTED_MODULE_2__.semigroupAll;
/**
 * `boolean` semigroup under disjunction.
 *
 * @example
 * import { SemigroupAny } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(SemigroupAny.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAny.concat(true, false), true)
 * assert.deepStrictEqual(SemigroupAny.concat(false, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var SemigroupAny = _Semigroup__WEBPACK_IMPORTED_MODULE_2__.semigroupAny;
/**
 * `boolean` monoid under conjunction.
 *
 * The `empty` value is `true`.
 *
 * @example
 * import { MonoidAll } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(MonoidAll.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAll.concat(true, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var MonoidAll = _Monoid__WEBPACK_IMPORTED_MODULE_3__.monoidAll;
/**
 * `boolean` monoid under disjunction.
 *
 * The `empty` value is `false`.
 *
 * @example
 * import { MonoidAny } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(MonoidAny.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAny.concat(true, false), true)
 * assert.deepStrictEqual(MonoidAny.concat(false, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var MonoidAny = _Monoid__WEBPACK_IMPORTED_MODULE_3__.monoidAny;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var Ord = _Ord__WEBPACK_IMPORTED_MODULE_4__.ordBoolean;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var Show = _Show__WEBPACK_IMPORTED_MODULE_5__.showBoolean;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBooleanAlgebra": () => /* binding */ getBooleanAlgebra,
/* harmony export */   "getSemigroup": () => /* binding */ getSemigroup,
/* harmony export */   "getMonoid": () => /* binding */ getMonoid,
/* harmony export */   "getSemiring": () => /* binding */ getSemiring,
/* harmony export */   "getRing": () => /* binding */ getRing,
/* harmony export */   "getEndomorphismMonoid": () => /* binding */ getEndomorphismMonoid,
/* harmony export */   "identity": () => /* binding */ identity,
/* harmony export */   "unsafeCoerce": () => /* binding */ unsafeCoerce,
/* harmony export */   "not": () => /* binding */ not,
/* harmony export */   "constant": () => /* binding */ constant,
/* harmony export */   "constTrue": () => /* binding */ constTrue,
/* harmony export */   "constFalse": () => /* binding */ constFalse,
/* harmony export */   "constNull": () => /* binding */ constNull,
/* harmony export */   "constUndefined": () => /* binding */ constUndefined,
/* harmony export */   "constVoid": () => /* binding */ constVoid,
/* harmony export */   "flip": () => /* binding */ flip,
/* harmony export */   "flow": () => /* binding */ flow,
/* harmony export */   "tuple": () => /* binding */ tuple,
/* harmony export */   "increment": () => /* binding */ increment,
/* harmony export */   "decrement": () => /* binding */ decrement,
/* harmony export */   "absurd": () => /* binding */ absurd,
/* harmony export */   "tupled": () => /* binding */ tupled,
/* harmony export */   "untupled": () => /* binding */ untupled,
/* harmony export */   "pipe": () => /* binding */ pipe,
/* harmony export */   "hole": () => /* binding */ hole
/* harmony export */ });
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
var getBooleanAlgebra = function (B) { return function () { return ({
    meet: function (x, y) { return function (a) { return B.meet(x(a), y(a)); }; },
    join: function (x, y) { return function (a) { return B.join(x(a), y(a)); }; },
    zero: function () { return B.zero; },
    one: function () { return B.one; },
    implies: function (x, y) { return function (a) { return B.implies(x(a), y(a)); }; },
    not: function (x) { return function (a) { return B.not(x(a)); }; }
}); }; };
/**
 * Unary functions form a semigroup as long as you can provide a semigroup for the codomain.
 *
 * @example
 * import { Predicate, getSemigroup } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const S1 = getSemigroup(B.SemigroupAll)<number>()
 *
 * assert.deepStrictEqual(S1.concat(f, g)(1), true)
 * assert.deepStrictEqual(S1.concat(f, g)(3), false)
 *
 * const S2 = getSemigroup(B.SemigroupAny)<number>()
 *
 * assert.deepStrictEqual(S2.concat(f, g)(1), true)
 * assert.deepStrictEqual(S2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function (S) { return function () { return ({
    concat: function (f, g) { return function (a) { return S.concat(f(a), g(a)); }; }
}); }; };
/**
 * Unary functions form a monoid as long as you can provide a monoid for the codomain.
 *
 * @example
 * import { Predicate, getMonoid } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const M1 = getMonoid(B.MonoidAll)<number>()
 *
 * assert.deepStrictEqual(M1.concat(f, g)(1), true)
 * assert.deepStrictEqual(M1.concat(f, g)(3), false)
 *
 * const M2 = getMonoid(B.MonoidAny)<number>()
 *
 * assert.deepStrictEqual(M2.concat(f, g)(1), true)
 * assert.deepStrictEqual(M2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */
var getMonoid = function (M) {
    var getSemigroupM = getSemigroup(M);
    return function () { return ({
        concat: getSemigroupM().concat,
        empty: function () { return M.empty; }
    }); };
};
/**
 * @category instances
 * @since 2.10.0
 */
var getSemiring = function (S) { return ({
    add: function (f, g) { return function (x) { return S.add(f(x), g(x)); }; },
    zero: function () { return S.zero; },
    mul: function (f, g) { return function (x) { return S.mul(f(x), g(x)); }; },
    one: function () { return S.one; }
}); };
/**
 * @category instances
 * @since 2.10.0
 */
var getRing = function (R) {
    var S = getSemiring(R);
    return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: function (f, g) { return function (x) { return R.sub(f(x), g(x)); }; }
    };
};
/**
 * Endomorphism form a monoid where the `empty` value is the identity function.
 *
 * @category instances
 * @since 2.10.0
 */
var getEndomorphismMonoid = function () { return ({
    concat: function (x, y) { return function (a) { return y(x(a)); }; },
    empty: identity
}); };
/**
 * @since 2.0.0
 */
function identity(a) {
    return a;
}
/**
 * @since 2.0.0
 */
var unsafeCoerce = identity;
/**
 * @since 2.0.0
 */
function not(predicate) {
    return function (a) { return !predicate(a); };
}
/**
 * @since 2.0.0
 */
function constant(a) {
    return function () { return a; };
}
/**
 * A thunk that returns always `true`.
 *
 * @since 2.0.0
 */
var constTrue = 
/*#__PURE__*/
constant(true);
/**
 * A thunk that returns always `false`.
 *
 * @since 2.0.0
 */
var constFalse = 
/*#__PURE__*/
constant(false);
/**
 * A thunk that returns always `null`.
 *
 * @since 2.0.0
 */
var constNull = 
/*#__PURE__*/
constant(null);
/**
 * A thunk that returns always `undefined`.
 *
 * @since 2.0.0
 */
var constUndefined = 
/*#__PURE__*/
constant(undefined);
/**
 * A thunk that returns always `void`.
 *
 * @since 2.0.0
 */
var constVoid = constUndefined;
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */
function flip(f) {
    return function (b, a) { return f(a, b); };
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab;
        case 2:
            return function () {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
/**
 * @since 2.0.0
 */
function tuple() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return t;
}
/**
 * @since 2.0.0
 */
function increment(n) {
    return n + 1;
}
/**
 * @since 2.0.0
 */
function decrement(n) {
    return n - 1;
}
/**
 * @since 2.0.0
 */
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */
function tupled(f) {
    return function (a) { return f.apply(void 0, a); };
}
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */
function untupled(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return f(a);
    };
}
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st) {
    switch (arguments.length) {
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        case 10:
            return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
        case 11:
            return jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))));
        case 12:
            return kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))));
        case 13:
            return lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))));
        case 14:
            return mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))));
        case 15:
            return no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))));
        case 16:
            return op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))));
        case 17:
            return pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))));
        case 18:
            return qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))));
        case 19:
            return rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))))));
        case 20:
            return st(rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))))));
    }
    return;
}
/**
 * Type hole simulation
 *
 * @since 2.7.0
 */
var hole = absurd;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/internal.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/internal.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSome": () => /* binding */ isSome,
/* harmony export */   "isLeft": () => /* binding */ isLeft,
/* harmony export */   "has": () => /* binding */ has,
/* harmony export */   "fromReadonlyNonEmptyArray": () => /* binding */ fromReadonlyNonEmptyArray
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// -------------------------------------------------------------------------------------
// Option
// -------------------------------------------------------------------------------------
/** @internal */
var isSome = function (fa) { return fa._tag === 'Some'; };
// -------------------------------------------------------------------------------------
// Either
// -------------------------------------------------------------------------------------
/** @internal */
var isLeft = function (ma) { return ma._tag === 'Left'; };
// -------------------------------------------------------------------------------------
// Record
// -------------------------------------------------------------------------------------
/** @internal */
var has = Object.prototype.hasOwnProperty;
// -------------------------------------------------------------------------------------
// NonEmptyArray
// -------------------------------------------------------------------------------------
/** @internal */
var fromReadonlyNonEmptyArray = function (as) { return __spreadArray([as[0]], as.slice(1)); };


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/number.js":
/*!*************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/number.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eq": () => /* binding */ Eq,
/* harmony export */   "Ord": () => /* binding */ Ord,
/* harmony export */   "Bounded": () => /* binding */ Bounded,
/* harmony export */   "Field": () => /* binding */ Field,
/* harmony export */   "Show": () => /* binding */ Show,
/* harmony export */   "SemigroupSum": () => /* binding */ SemigroupSum,
/* harmony export */   "SemigroupProduct": () => /* binding */ SemigroupProduct,
/* harmony export */   "MonoidSum": () => /* binding */ MonoidSum,
/* harmony export */   "MonoidProduct": () => /* binding */ MonoidProduct
/* harmony export */ });
/* harmony import */ var _Bounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bounded */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Bounded.js");
/* harmony import */ var _Eq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Eq.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Field */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Field.js");
/* harmony import */ var _Ord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Ord.js");
/* harmony import */ var _Show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Show */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Show.js");
/* harmony import */ var _Semigroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Semigroup */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Semigroup.js");
/* harmony import */ var _Monoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Monoid */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/Monoid.js");
/**
 * @since 2.10.0
 */







/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var Eq = _Eq__WEBPACK_IMPORTED_MODULE_0__.eqNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var Ord = _Ord__WEBPACK_IMPORTED_MODULE_1__.ordNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var Bounded = _Bounded__WEBPACK_IMPORTED_MODULE_2__.boundedNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var Field = _Field__WEBPACK_IMPORTED_MODULE_3__.fieldNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var Show = _Show__WEBPACK_IMPORTED_MODULE_4__.showNumber;
/**
 * `number` semigroup under addition.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(SemigroupSum.concat(2, 3), 5)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var SemigroupSum = _Semigroup__WEBPACK_IMPORTED_MODULE_5__.semigroupSum;
/**
 * `number` semigroup under multiplication.
 *
 * @example
 * import { SemigroupProduct } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(SemigroupProduct.concat(2, 3), 6)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var SemigroupProduct = _Semigroup__WEBPACK_IMPORTED_MODULE_5__.semigroupProduct;
/**
 * `number` monoid under addition.
 *
 * The `empty` value is `0`.
 *
 * @example
 * import { MonoidSum } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(MonoidSum.concat(2, MonoidSum.empty), 2)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var MonoidSum = _Monoid__WEBPACK_IMPORTED_MODULE_6__.monoidSum;
/**
 * `number` monoid under multiplication.
 *
 * The `empty` value is `1`.
 *
 * @example
 * import { MonoidProduct } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(MonoidProduct.concat(2, MonoidProduct.empty), 2)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
var MonoidProduct = _Monoid__WEBPACK_IMPORTED_MODULE_6__.monoidProduct;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/pipeable.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/pipeable.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipeable": () => /* binding */ pipeable,
/* harmony export */   "pipe": () => /* binding */ pipe
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/es6/function.js");

var isFunctor = function (I) { return typeof I.map === 'function'; };
var isContravariant = function (I) { return typeof I.contramap === 'function'; };
var isFunctorWithIndex = function (I) { return typeof I.mapWithIndex === 'function'; };
var isApply = function (I) { return typeof I.ap === 'function'; };
var isChain = function (I) { return typeof I.chain === 'function'; };
var isBifunctor = function (I) { return typeof I.bimap === 'function'; };
var isExtend = function (I) { return typeof I.extend === 'function'; };
var isFoldable = function (I) { return typeof I.reduce === 'function'; };
var isFoldableWithIndex = function (I) { return typeof I.reduceWithIndex === 'function'; };
var isAlt = function (I) { return typeof I.alt === 'function'; };
var isCompactable = function (I) { return typeof I.compact === 'function'; };
var isFilterable = function (I) { return typeof I.filter === 'function'; };
var isFilterableWithIndex = function (I) {
    return typeof I.filterWithIndex === 'function';
};
var isProfunctor = function (I) { return typeof I.promap === 'function'; };
var isSemigroupoid = function (I) { return typeof I.compose === 'function'; };
var isMonadThrow = function (I) { return typeof I.throwError === 'function'; };
/** @deprecated */
function pipeable(I) {
    var r = {};
    if (isFunctor(I)) {
        var map = function (f) { return function (fa) { return I.map(fa, f); }; };
        r.map = map;
    }
    if (isContravariant(I)) {
        var contramap = function (f) { return function (fa) { return I.contramap(fa, f); }; };
        r.contramap = contramap;
    }
    if (isFunctorWithIndex(I)) {
        var mapWithIndex = function (f) { return function (fa) { return I.mapWithIndex(fa, f); }; };
        r.mapWithIndex = mapWithIndex;
    }
    if (isApply(I)) {
        var ap = function (fa) { return function (fab) { return I.ap(fab, fa); }; };
        var apFirst = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function (a) { return function () { return a; }; }), fb);
        }; };
        r.ap = ap;
        r.apFirst = apFirst;
        r.apSecond = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function () { return function (b) { return b; }; }), fb);
        }; };
    }
    if (isChain(I)) {
        var chain = function (f) { return function (ma) { return I.chain(ma, f); }; };
        var chainFirst = function (f) { return function (ma) { return I.chain(ma, function (a) { return I.map(f(a), function () { return a; }); }); }; };
        var flatten = function (mma) { return I.chain(mma, _function__WEBPACK_IMPORTED_MODULE_0__.identity); };
        r.chain = chain;
        r.chainFirst = chainFirst;
        r.flatten = flatten;
    }
    if (isBifunctor(I)) {
        var bimap = function (f, g) { return function (fa) { return I.bimap(fa, f, g); }; };
        var mapLeft = function (f) { return function (fa) { return I.mapLeft(fa, f); }; };
        r.bimap = bimap;
        r.mapLeft = mapLeft;
    }
    if (isExtend(I)) {
        var extend = function (f) { return function (wa) { return I.extend(wa, f); }; };
        var duplicate = function (wa) { return I.extend(wa, _function__WEBPACK_IMPORTED_MODULE_0__.identity); };
        r.extend = extend;
        r.duplicate = duplicate;
    }
    if (isFoldable(I)) {
        var reduce = function (b, f) { return function (fa) { return I.reduce(fa, b, f); }; };
        var foldMap = function (M) {
            var foldMapM = I.foldMap(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRight = function (b, f) { return function (fa) { return I.reduceRight(fa, b, f); }; };
        r.reduce = reduce;
        r.foldMap = foldMap;
        r.reduceRight = reduceRight;
    }
    if (isFoldableWithIndex(I)) {
        var reduceWithIndex = function (b, f) { return function (fa) {
            return I.reduceWithIndex(fa, b, f);
        }; };
        var foldMapWithIndex = function (M) {
            var foldMapM = I.foldMapWithIndex(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRightWithIndex = function (b, f) { return function (fa) {
            return I.reduceRightWithIndex(fa, b, f);
        }; };
        r.reduceWithIndex = reduceWithIndex;
        r.foldMapWithIndex = foldMapWithIndex;
        r.reduceRightWithIndex = reduceRightWithIndex;
    }
    if (isAlt(I)) {
        var alt = function (that) { return function (fa) { return I.alt(fa, that); }; };
        r.alt = alt;
    }
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        var filter = function (predicate) { return function (fa) {
            return I.filter(fa, predicate);
        }; };
        var filterMap = function (f) { return function (fa) { return I.filterMap(fa, f); }; };
        var partition = function (predicate) { return function (fa) {
            return I.partition(fa, predicate);
        }; };
        var partitionMap = function (f) { return function (fa) { return I.partitionMap(fa, f); }; };
        r.filter = filter;
        r.filterMap = filterMap;
        r.partition = partition;
        r.partitionMap = partitionMap;
    }
    if (isFilterableWithIndex(I)) {
        var filterWithIndex = function (predicateWithIndex) { return function (fa) { return I.filterWithIndex(fa, predicateWithIndex); }; };
        var filterMapWithIndex = function (f) { return function (fa) {
            return I.filterMapWithIndex(fa, f);
        }; };
        var partitionWithIndex = function (predicateWithIndex) { return function (fa) { return I.partitionWithIndex(fa, predicateWithIndex); }; };
        var partitionMapWithIndex = function (f) { return function (fa) {
            return I.partitionMapWithIndex(fa, f);
        }; };
        r.filterWithIndex = filterWithIndex;
        r.filterMapWithIndex = filterMapWithIndex;
        r.partitionWithIndex = partitionWithIndex;
        r.partitionMapWithIndex = partitionMapWithIndex;
    }
    if (isProfunctor(I)) {
        var promap = function (f, g) { return function (fa) { return I.promap(fa, f, g); }; };
        r.promap = promap;
    }
    if (isSemigroupoid(I)) {
        var compose = function (that) { return function (fa) { return I.compose(fa, that); }; };
        r.compose = compose;
    }
    if (isMonadThrow(I)) {
        var fromOption = function (onNone) { return function (ma) {
            return ma._tag === 'None' ? I.throwError(onNone()) : I.of(ma.value);
        }; };
        var fromEither = function (ma) {
            return ma._tag === 'Left' ? I.throwError(ma.left) : I.of(ma.right);
        };
        var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }; };
        var filterOrElse = function (predicate, onFalse) { return function (ma) { return I.chain(ma, function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }); }; };
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}
/**
 * Use [`pipe`](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow) from `function` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */
var pipe = _function__WEBPACK_IMPORTED_MODULE_0__.pipe;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Applicative.js":
/*!******************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Applicative.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getApplicativeComposition = exports.getApplicativeMonoid = void 0;
/**
 * The `Applicative` type class extends the `Apply` type class with a `of` function, which can be used to create values
 * of type `f a` from values of type `a`.
 *
 * Where `Apply` provides the ability to lift functions of two or more arguments to functions whose arguments are
 * wrapped using `f`, and `Functor` provides the ability to lift functions of one argument, `pure` can be seen as the
 * function which lifts functions of _zero_ arguments. That is, `Applicative` functors support a lifting operation for
 * any number of function arguments.
 *
 * Instances must satisfy the following laws in addition to the `Apply` laws:
 *
 * 1. Identity: `A.ap(A.of(a => a), fa) <-> fa`
 * 2. Homomorphism: `A.ap(A.of(ab), A.of(a)) <-> A.of(ab(a))`
 * 3. Interchange: `A.ap(fab, A.of(a)) <-> A.ap(A.of(ab => ab(a)), fab)`
 *
 * Note. `Functor`'s `map` can be derived: `A.map(x, f) = A.ap(A.of(f), x)`
 *
 * @since 2.0.0
 */
var Apply_1 = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
function getApplicativeMonoid(F) {
    var f = Apply_1.getApplySemigroup(F);
    return function (M) { return ({
        concat: f(M).concat,
        empty: F.of(M.empty)
    }); };
}
exports.getApplicativeMonoid = getApplicativeMonoid;
/** @deprecated */
function getApplicativeComposition(F, G) {
    var map = Functor_1.getFunctorComposition(F, G).map;
    var _ap = Apply_1.ap(F, G);
    return {
        map: map,
        of: function (a) { return F.of(G.of(a)); },
        ap: function (fgab, fga) { return function_1.pipe(fgab, _ap(fga)); }
    };
}
exports.getApplicativeComposition = getApplicativeComposition;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js":
/*!************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = void 0;
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
function ap(F, G) {
    return function (fa) { return function (fab) {
        return F.ap(F.map(fab, function (gab) { return function (ga) { return G.ap(gab, ga); }; }), fa);
    }; };
}
exports.ap = ap;
function apFirst(A) {
    return function (second) { return function (first) {
        return A.ap(A.map(first, function (a) { return function () { return a; }; }), second);
    }; };
}
exports.apFirst = apFirst;
function apSecond(A) {
    return function (second) { return function (first) {
        return A.ap(A.map(first, function () { return function (b) { return b; }; }), second);
    }; };
}
exports.apSecond = apSecond;
function apS(F) {
    return function (name, fb) { return function (fa) {
        return F.ap(F.map(fa, function (a) { return function (b) {
            var _a;
            return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
        }; }), fb);
    }; };
}
exports.apS = apS;
function getApplySemigroup(F) {
    return function (S) { return ({
        concat: function (first, second) {
            return F.ap(F.map(first, function (x) { return function (y) { return S.concat(x, y); }; }), second);
        }
    }); };
}
exports.getApplySemigroup = getApplySemigroup;
function curried(f, n, acc) {
    return function (x) {
        var combined = Array(acc.length + 1);
        for (var i = 0; i < acc.length; i++) {
            combined[i] = acc[i];
        }
        combined[acc.length] = x;
        return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
    };
}
var tupleConstructors = {
    1: function (a) { return [a]; },
    2: function (a) { return function (b) { return [a, b]; }; },
    3: function (a) { return function (b) { return function (c) { return [a, b, c]; }; }; },
    4: function (a) { return function (b) { return function (c) { return function (d) { return [a, b, c, d]; }; }; }; },
    5: function (a) { return function (b) { return function (c) { return function (d) { return function (e) { return [a, b, c, d, e]; }; }; }; }; }
};
function getTupleConstructor(len) {
    if (!tupleConstructors.hasOwnProperty(len)) {
        tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
    }
    return tupleConstructors[len];
}
function sequenceT(F) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var len = args.length;
        var f = getTupleConstructor(len);
        var fas = F.map(args[0], f);
        for (var i = 1; i < len; i++) {
            fas = F.ap(fas, args[i]);
        }
        return fas;
    };
}
exports.sequenceT = sequenceT;
function getRecordConstructor(keys) {
    var len = keys.length;
    switch (len) {
        case 1:
            return function (a) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a);
            };
        case 2:
            return function (a) { return function (b) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a);
            }; };
        case 3:
            return function (a) { return function (b) { return function (c) {
                var _a;
                return (_a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a);
            }; }; };
        case 4:
            return function (a) { return function (b) { return function (c) { return function (d) {
                var _a;
                return (_a = {},
                    _a[keys[0]] = a,
                    _a[keys[1]] = b,
                    _a[keys[2]] = c,
                    _a[keys[3]] = d,
                    _a);
            }; }; }; };
        case 5:
            return function (a) { return function (b) { return function (c) { return function (d) { return function (e) {
                var _a;
                return (_a = {},
                    _a[keys[0]] = a,
                    _a[keys[1]] = b,
                    _a[keys[2]] = c,
                    _a[keys[3]] = d,
                    _a[keys[4]] = e,
                    _a);
            }; }; }; }; };
        default:
            return curried(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var r = {};
                for (var i = 0; i < len; i++) {
                    r[keys[i]] = args[i];
                }
                return r;
            }, len - 1, []);
    }
}
function sequenceS(F) {
    return function (r) {
        var keys = Object.keys(r);
        var len = keys.length;
        var f = getRecordConstructor(keys);
        var fr = F.map(r[keys[0]], f);
        for (var i = 1; i < len; i++) {
            fr = F.ap(fr, r[keys[i]]);
        }
        return fr;
    };
}
exports.sequenceS = sequenceS;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Array.js":
/*!************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Array.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elem = exports.rotate = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.updateAt = exports.insertAt = exports.copy = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.lookup = exports.isOutOfBound = exports.size = exports.isNonEmpty = exports.isEmpty = exports.scanRight = exports.scanLeft = exports.chainWithIndex = exports.foldRight = exports.matchRight = exports.foldLeft = exports.matchLeft = exports.replicate = exports.range = exports.makeBy = exports.append = exports.prepend = void 0;
exports.flap = exports.Functor = exports.getOrd = exports.getEq = exports.getMonoid = exports.getSemigroup = exports.getShow = exports.URI = exports.unfold = exports.wilt = exports.wither = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.reduce = exports.foldMapWithIndex = exports.foldMap = exports.duplicate = exports.extend = exports.filterWithIndex = exports.alt = exports.altW = exports.partitionMapWithIndex = exports.partitionMap = exports.partitionWithIndex = exports.partition = exports.filter = exports.separate = exports.compact = exports.filterMap = exports.filterMapWithIndex = exports.mapWithIndex = exports.flatten = exports.chain = exports.ap = exports.map = exports.zero = exports.of = exports.difference = exports.intersection = exports.union = exports.comprehension = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = exports.uniq = void 0;
exports.array = exports.prependToAll = exports.snoc = exports.cons = exports.empty = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.some = exports.every = exports.unsafeDeleteAt = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Unfoldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = void 0;
var Apply_1 = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js");
var Chain_1 = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Chain.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
var NEA = __importStar(__webpack_require__(/*! ./NonEmptyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/NonEmptyArray.js"));
var O = __importStar(__webpack_require__(/*! ./Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js"));
var RA = __importStar(__webpack_require__(/*! ./ReadonlyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyArray.js"));
var Separated_1 = __webpack_require__(/*! ./Separated */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Separated.js");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Prepend an element to the front of a `Array`, creating a new `NonEmptyArray`.
 *
 * @example
 * import { prepend } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
exports.prepend = NEA.prepend;
/**
 * Append an element to the end of a `Array`, creating a new `NonEmptyArray`.
 *
 * @example
 * import { append } from 'fp-ts/Array'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
exports.append = NEA.append;
/**
 * Return a `Array` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { makeBy } from 'fp-ts/Array'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.0.0
 */
var makeBy = function (n, f) { return (n <= 0 ? [] : NEA.makeBy(n, f)); };
exports.makeBy = makeBy;
/**
 * Create an `Array` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @category constructors
 * @since 2.0.0
 */
var range = function (start, end) {
    return start <= end ? exports.makeBy(end - start + 1, function (i) { return start + i; }) : [start];
};
exports.range = range;
/**
 * Create a `Array` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { replicate } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.0.0
 */
var replicate = function (n, a) { return exports.makeBy(n, function () { return a; }); };
exports.replicate = replicate;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Break an array into its first element and remaining elements
 *
 * @example
 * import { matchLeft } from 'fp-ts/Array'
 *
 * const len: <A>(as: Array<A>) => number = matchLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @category destructors
 * @since 2.10.0
 */
var matchLeft = function (onEmpty, onNonEmpty) { return function (as) {
    return exports.isNonEmpty(as) ? onNonEmpty(NEA.head(as), NEA.tail(as)) : onEmpty();
}; };
exports.matchLeft = matchLeft;
/**
 * Alias of [`matchLeft`](#matchleft).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.foldLeft = exports.matchLeft;
/**
 * Break an array into its initial elements and the last element
 *
 * @category destructors
 * @since 2.10.0
 */
var matchRight = function (onEmpty, onNonEmpty) { return function (as) {
    return exports.isNonEmpty(as) ? onNonEmpty(NEA.init(as), NEA.last(as)) : onEmpty();
}; };
exports.matchRight = matchRight;
/**
 * Alias of [`matchRight`](#matchright).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.foldRight = exports.matchRight;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.7.0
 */
var chainWithIndex = function (f) { return function (as) {
    var out = [];
    for (var i = 0; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
exports.chainWithIndex = chainWithIndex;
/**
 * Same as `reduce` but it carries over the intermediate steps
 *
 * @example
 * import { scanLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 *
 * @category combinators
 * @since 2.0.0
 */
var scanLeft = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[0] = b;
    for (var i = 0; i < len; i++) {
        out[i + 1] = f(out[i], as[i]);
    }
    return out;
}; };
exports.scanLeft = scanLeft;
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @category combinators
 * @since 2.0.0
 */
var scanRight = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[len] = b;
    for (var i = len - 1; i >= 0; i--) {
        out[i] = f(as[i], out[i + 1]);
    }
    return out;
}; };
exports.scanRight = scanRight;
/**
 * Test whether an array is empty
 *
 * @example
 * import { isEmpty } from 'fp-ts/Array'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @since 2.0.0
 */
exports.isEmpty = RA.isEmpty;
/**
 * Test whether an array is non empty narrowing down the type to `NonEmptyArray<A>`
 *
 * @category guards
 * @since 2.0.0
 */
exports.isNonEmpty = NEA.isNonEmpty;
/**
 * Calculate the number of elements in a `Array`.
 *
 * @since 2.10.0
 */
var size = function (as) { return as.length; };
exports.size = size;
/**
 * Test whether an array contains a particular index
 *
 * @since 2.0.0
 */
exports.isOutOfBound = NEA.isOutOfBound;
// TODO: remove non-curried overloading in v3
/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { lookup } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), some(2))
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), none)
 *
 * @since 2.0.0
 */
exports.lookup = RA.lookup;
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */
exports.head = RA.head;
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */
exports.last = RA.last;
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */
var tail = function (as) { return (exports.isNonEmpty(as) ? O.some(NEA.tail(as)) : O.none); };
exports.tail = tail;
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @category destructors
 * @since 2.0.0
 */
var init = function (as) { return (exports.isNonEmpty(as) ? O.some(NEA.init(as)) : O.none); };
exports.init = init;
/**
 * Keep only a max number of elements from the start of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { takeLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(takeLeft(2)([1, 2, 3]), [1, 2])
 *
 * @category combinators
 * @since 2.0.0
 */
var takeLeft = function (n) { return function (as) { return (exports.isOutOfBound(n, as) ? exports.copy(as) : as.slice(0, n)); }; };
exports.takeLeft = takeLeft;
/**
 * Keep only a max number of elements from the end of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { takeRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(takeRight(2)([1, 2, 3, 4, 5]), [4, 5])
 *
 * @category combinators
 * @since 2.0.0
 */
var takeRight = function (n) { return function (as) {
    return exports.isOutOfBound(n, as) ? exports.copy(as) : n === 0 ? [] : as.slice(-n);
}; };
exports.takeRight = takeRight;
function takeLeftWhile(predicate) {
    return function (as) {
        var out = [];
        for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            if (!predicate(a)) {
                break;
            }
            out.push(a);
        }
        return out;
    };
}
exports.takeLeftWhile = takeLeftWhile;
var spanLeftIndex = function (as, predicate) {
    var l = as.length;
    var i = 0;
    for (; i < l; i++) {
        if (!predicate(as[i])) {
            break;
        }
    }
    return i;
};
function spanLeft(predicate) {
    return function (as) {
        var _a = exports.splitAt(spanLeftIndex(as, predicate))(as), init = _a[0], rest = _a[1];
        return { init: init, rest: rest };
    };
}
exports.spanLeft = spanLeft;
/**
 * Drop a max number of elements from the start of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { dropLeft } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropLeft(2)([1, 2, 3]), [3])
 *
 * @category combinators
 * @since 2.0.0
 */
var dropLeft = function (n) { return function (as) {
    return n <= 0 || exports.isEmpty(as) ? exports.copy(as) : n >= as.length ? [] : as.slice(n, as.length);
}; };
exports.dropLeft = dropLeft;
/**
 * Drop a max number of elements from the end of an `Array`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { dropRight } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropRight(2)([1, 2, 3, 4, 5]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */
var dropRight = function (n) { return function (as) {
    return n <= 0 || exports.isEmpty(as) ? exports.copy(as) : n >= as.length ? [] : as.slice(0, as.length - n);
}; };
exports.dropRight = dropRight;
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @category combinators
 * @since 2.0.0
 */
var dropLeftWhile = function (predicate) { return function (as) {
    return as.slice(spanLeftIndex(as, predicate));
}; };
exports.dropLeftWhile = dropLeftWhile;
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.0.0
 */
exports.findIndex = RA.findIndex;
function findFirst(predicate) {
    return RA.findFirst(predicate);
}
exports.findFirst = findFirst;
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @category destructors
 * @since 2.0.0
 */
exports.findFirstMap = RA.findFirstMap;
function findLast(predicate) {
    return RA.findLast(predicate);
}
exports.findLast = findLast;
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @category destructors
 * @since 2.0.0
 */
exports.findLastMap = RA.findLastMap;
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: Array<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.0.0
 */
exports.findLastIndex = RA.findLastIndex;
/**
 * @category combinators
 * @since 2.0.0
 */
var copy = function (as) { return as.slice(); };
exports.copy = copy;
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/Array'
 * import { some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.0.0
 */
var insertAt = function (i, a) { return function (as) {
    return i < 0 || i > as.length ? O.none : O.some(exports.unsafeInsertAt(i, a, as));
}; };
exports.insertAt = insertAt;
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.0.0
 */
var updateAt = function (i, a) { return exports.modifyAt(i, function () { return a; }); };
exports.updateAt = updateAt;
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.0.0
 */
var deleteAt = function (i) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeDeleteAt(i, as));
}; };
exports.deleteAt = deleteAt;
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.0.0
 */
var modifyAt = function (i, f) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeUpdateAt(i, f(as[i]), as));
}; };
exports.modifyAt = modifyAt;
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @category combinators
 * @since 2.0.0
 */
var reverse = function (as) { return (exports.isEmpty(as) ? [] : as.slice().reverse()); };
exports.reverse = reverse;
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/Array'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @category combinators
 * @since 2.0.0
 */
var rights = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Right') {
            r.push(a.right);
        }
    }
    return r;
};
exports.rights = rights;
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/Array'
 * import { left, right } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @category combinators
 * @since 2.0.0
 */
var lefts = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Left') {
            r.push(a.left);
        }
    }
    return r;
};
exports.lefts = lefts;
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */
var sort = function (O) { return function (as) {
    return as.length <= 1 ? exports.copy(as) : as.slice().sort(O.compare);
}; };
exports.sort = sort;
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @category combinators
 * @since 2.0.0
 */
var zipWith = function (fa, fb, f) {
    var fc = [];
    var len = Math.min(fa.length, fb.length);
    for (var i = 0; i < len; i++) {
        fc[i] = f(fa[i], fb[i]);
    }
    return fc;
};
exports.zipWith = zipWith;
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return exports.zipWith(as, bs, function (a, b) { return [a, b]; });
}
exports.zip = zip;
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @since 2.0.0
 */
var unzip = function (as) {
    var fa = [];
    var fb = [];
    for (var i = 0; i < as.length; i++) {
        fa[i] = as[i][0];
        fb[i] = as[i][1];
    }
    return [fa, fb];
};
exports.unzip = unzip;
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) {
    var f = NEA.prependAll(middle);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : []); };
};
exports.prependAll = prependAll;
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) {
    var f = NEA.intersperse(middle);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.copy(as)); };
};
exports.intersperse = intersperse;
/**
 * Rotate a `Array` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @category combinators
 * @since 2.0.0
 */
var rotate = function (n) {
    var f = NEA.rotate(n);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.copy(as)); };
};
exports.rotate = rotate;
// TODO: remove non-curried overloading in v3
/**
 * Test if a value is a member of an array. Takes a `Eq<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an array of type `Array<A>`.
 *
 * @example
 * import { elem } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(2)), true)
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(0)), false)
 *
 * @since 2.0.0
 */
exports.elem = RA.elem;
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.0.0
 */
var uniq = function (E) {
    var f = NEA.uniq(E);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.copy(as)); };
};
exports.uniq = uniq;
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/Array'
 * import { contramap } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @category combinators
 * @since 2.0.0
 */
var sortBy = function (ords) {
    var f = NEA.sortBy(ords);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.copy(as)); };
};
exports.sortBy = sortBy;
/**
 * A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input
 * array. Typically chop is called with some function that will consume an initial prefix of the array and produce a
 * value and the rest of the array.
 *
 * @example
 * import { Eq } from 'fp-ts/Eq'
 * import * as A from 'fp-ts/Array'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
 *   return A.chop(as => {
 *     const { init, rest } = pipe(as, A.spanLeft((a: A) => S.equals(a, as[0])))
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @category combinators
 * @since 2.0.0
 */
var chop = function (f) {
    var g = NEA.chop(f);
    return function (as) { return (exports.isNonEmpty(as) ? g(as) : []); };
};
exports.chop = chop;
/**
 * Splits an `Array` into two pieces, the first piece has max `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @category combinators
 * @since 2.0.0
 */
var splitAt = function (n) { return function (as) {
    return n >= 1 && exports.isNonEmpty(as) ? NEA.splitAt(n)(as) : exports.isEmpty(as) ? [exports.copy(as), []] : [[], exports.copy(as)];
}; };
exports.splitAt = splitAt;
/**
 * Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the array. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `xs`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/Array'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 * @category combinators
 * @since 2.0.0
 */
var chunksOf = function (n) {
    var f = NEA.chunksOf(n);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : []); };
};
exports.chunksOf = chunksOf;
function comprehension(input, f, g) {
    if (g === void 0) { g = function () { return true; }; }
    var go = function (scope, input) {
        return exports.isNonEmpty(input)
            ? function_1.pipe(NEA.head(input), exports.chain(function (x) { return go(function_1.pipe(scope, exports.append(x)), NEA.tail(input)); }))
            : g.apply(void 0, scope) ? [f.apply(void 0, scope)]
                : [];
    };
    return go([], input);
}
exports.comprehension = comprehension;
function union(E) {
    var unionE = NEA.union(E);
    return function (first, second) {
        if (second === undefined) {
            var unionE_1 = union(E);
            return function (ys) { return unionE_1(ys, first); };
        }
        return exports.isNonEmpty(first) && exports.isNonEmpty(second)
            ? unionE(first, second)
            : exports.isNonEmpty(first)
                ? exports.copy(first)
                : exports.copy(second);
    };
}
exports.union = union;
function intersection(E) {
    var elemE = exports.elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var intersectionE_1 = intersection(E);
            return function (ys) { return intersectionE_1(ys, xs); };
        }
        return xs.filter(function (a) { return elemE(a, ys); });
    };
}
exports.intersection = intersection;
function difference(E) {
    var elemE = exports.elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var differenceE_1 = difference(E);
            return function (ys) { return differenceE_1(ys, xs); };
        }
        return xs.filter(function (a) { return !elemE(a, ys); });
    };
}
exports.difference = difference;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _filter = function (fa, predicate) { return function_1.pipe(fa, exports.filter(predicate)); };
/* istanbul ignore next */
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) {
    return function_1.pipe(fa, exports.partition(predicate));
};
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
/* istanbul ignore next */
var _partitionWithIndex = function (fa, predicateWithIndex) { return function_1.pipe(fa, exports.partitionWithIndex(predicateWithIndex)); };
/* istanbul ignore next */
var _partitionMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.partitionMapWithIndex(f)); };
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _filterMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.filterMapWithIndex(f)); };
/* istanbul ignore next */
var _filterWithIndex = function (fa, predicateWithIndex) { return function_1.pipe(fa, exports.filterWithIndex(predicateWithIndex)); };
/* istanbul ignore next */
var _extend = function (fa, f) { return function_1.pipe(fa, exports.extend(f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Pointed
 * @since 2.0.0
 */
exports.of = NEA.of;
/**
 * @category Alternative
 * @since 2.7.0
 */
var zero = function () { return []; };
exports.zero = zero;
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return fa.map(function (a) { return f(a); }); }; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); }); };
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) {
    return function_1.pipe(ma, exports.chainWithIndex(function (_, a) { return f(a); }));
}; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * @category FunctorWithIndex
 * @since 2.0.0
 */
var mapWithIndex = function (f) { return function (fa) {
    return fa.map(function (a, i) { return f(i, a); });
}; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category FilterableWithIndex
 * @since 2.0.0
 */
var filterMapWithIndex = function (f) { return function (fa) {
    var out = [];
    for (var i = 0; i < fa.length; i++) {
        var optionB = f(i, fa[i]);
        if (O.isSome(optionB)) {
            out.push(optionB.value);
        }
    }
    return out;
}; };
exports.filterMapWithIndex = filterMapWithIndex;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filterMap = function (f) {
    return exports.filterMapWithIndex(function (_, a) { return f(a); });
};
exports.filterMap = filterMap;
/**
 * @category Compactable
 * @since 2.0.0
 */
exports.compact = 
/*#__PURE__*/
exports.filterMap(function_1.identity);
/**
 * @category Compactable
 * @since 2.0.0
 */
var separate = function (fa) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
        var e = fa_1[_i];
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return Separated_1.separated(left, right);
};
exports.separate = separate;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filter = function (predicate) { return function (fa) { return fa.filter(predicate); }; };
exports.filter = filter;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partition = function (predicate) {
    return exports.partitionWithIndex(function (_, a) { return predicate(a); });
};
exports.partition = partition;
/**
 * @category FilterableWithIndex
 * @since 2.0.0
 */
var partitionWithIndex = function (predicateWithIndex) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var a = fa[i];
        if (predicateWithIndex(i, a)) {
            right.push(a);
        }
        else {
            left.push(a);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionWithIndex = partitionWithIndex;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partitionMap = function (f) { return exports.partitionMapWithIndex(function (_, a) { return f(a); }); };
exports.partitionMap = partitionMap;
/**
 * @category FilterableWithIndex
 * @since 2.0.0
 */
var partitionMapWithIndex = function (f) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var e = f(i, fa[i]);
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionMapWithIndex = partitionMapWithIndex;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) { return fa.concat(that()); }; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = exports.altW;
/**
 * @category FilterableWithIndex
 * @since 2.0.0
 */
var filterWithIndex = function (predicateWithIndex) { return function (fa) {
    return fa.filter(function (a, i) { return predicateWithIndex(i, a); });
}; };
exports.filterWithIndex = filterWithIndex;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) {
    return wa.map(function (_, i) { return f(wa.slice(i)); });
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.foldMap = RA.foldMap;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.foldMapWithIndex = RA.foldMapWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduce = RA.reduce;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.reduceWithIndex = RA.reduceWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduceRight = RA.reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.reduceRightWithIndex = RA.reduceRightWithIndex;
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
exports.traverse = traverse;
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) {
    return _reduce(ta, F.of(exports.zero()), function (fas, fa) {
        return F.ap(F.map(fas, function (as) { return function (a) { return function_1.pipe(as, exports.append(a)); }; }), fa);
    });
}; };
exports.sequence = sequence;
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) {
    return exports.reduceWithIndex(F.of(exports.zero()), function (i, fbs, a) {
        return F.ap(F.map(fbs, function (bs) { return function (b) { return function_1.pipe(bs, exports.append(b)); }; }), f(i, a));
    });
}; };
exports.traverseWithIndex = traverseWithIndex;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) {
    var traverseF = exports.traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.compact); }; };
};
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) {
    var traverseF = exports.traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.separate); }; };
};
exports.wilt = wilt;
/**
 * @category Unfoldable
 * @since 2.6.6
 */
var unfold = function (b, f) {
    var out = [];
    var bb = b;
    while (true) {
        var mt = f(bb);
        if (O.isSome(mt)) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            out.push(a);
            bb = b_1;
        }
        else {
            break;
        }
    }
    return out;
};
exports.unfold = unfold;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Array';
/**
 * @category instances
 * @since 2.0.0
 */
exports.getShow = RA.getShow;
/**
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function () { return ({
    concat: function (first, second) { return first.concat(second); }
}); };
exports.getSemigroup = getSemigroup;
/**
 * Returns a `Monoid` for `Array<A>`
 *
 * @example
 * import { getMonoid } from 'fp-ts/Array'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @category instances
 * @since 2.0.0
 */
var getMonoid = function () { return ({
    concat: exports.getSemigroup().concat,
    empty: []
}); };
exports.getMonoid = getMonoid;
/**
 * Derives an `Eq` over the `Array` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { getEq } from 'fp-ts/Array'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @category instances
 * @since 2.0.0
 */
exports.getEq = RA.getEq;
/**
 * Derives an `Ord` over the `Array` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/Array'
 * import * as S from 'fp-ts/string'
 *
 * const O = getOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 * @category instances
 * @since 2.0.0
 */
exports.getOrd = RA.getOrd;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Unfoldable = {
    URI: exports.URI,
    unfold: exports.unfold
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alternative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    alt: _alt,
    zero: exports.zero
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FilterableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence: exports.sequence,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    wither: _wither,
    wilt: _wilt
};
// -------------------------------------------------------------------------------------
// unsafe
// -------------------------------------------------------------------------------------
/**
 * @category unsafe
 * @since 2.0.0
 */
exports.unsafeInsertAt = NEA.unsafeInsertAt;
/**
 * @category unsafe
 * @since 2.0.0
 */
var unsafeUpdateAt = function (i, a, as) {
    return exports.isNonEmpty(as) ? NEA.unsafeUpdateAt(i, a, as) : [];
};
exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * @category unsafe
 * @since 2.0.0
 */
var unsafeDeleteAt = function (i, as) {
    var xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
exports.unsafeDeleteAt = unsafeDeleteAt;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.every = RA.every;
/**
 * @since 2.9.0
 */
var some = function (predicate) { return function (as) { return as.some(predicate); }; };
exports.some = some;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use a new `[]` instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.empty = [];
/**
 * Use `prepend` instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.cons = NEA.cons;
/**
 * Use `append` instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.snoc = NEA.snoc;
/**
 * Use `prependAll` instead
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
exports.prependToAll = exports.prependAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.array = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero: exports.zero,
    unfold: exports.unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/BooleanAlgebra.js":
/*!*********************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/BooleanAlgebra.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFunctionBooleanAlgebra = exports.booleanAlgebraBoolean = exports.getDualBooleanAlgebra = exports.booleanAlgebraVoid = exports.reverse = void 0;
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Every boolean algebras has a dual algebra, which involves reversing one/zero as well as join/meet.
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (B) { return ({
    meet: function (x, y) { return B.join(x, y); },
    join: function (x, y) { return B.meet(x, y); },
    zero: B.one,
    one: B.zero,
    implies: function (x, y) { return B.join(B.not(x), y); },
    not: B.not
}); };
exports.reverse = reverse;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.booleanAlgebraVoid = {
    meet: function () { return undefined; },
    join: function () { return undefined; },
    zero: undefined,
    one: undefined,
    implies: function () { return undefined; },
    not: function () { return undefined; }
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getDualBooleanAlgebra = exports.reverse;
/**
 * Use [`BooleanAlgebra`](./boolean.ts.html#BooleanAlgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.booleanAlgebraBoolean = {
    meet: function (x, y) { return x && y; },
    join: function (x, y) { return x || y; },
    zero: false,
    one: true,
    implies: function (x, y) { return !x || y; },
    not: function (x) { return !x; }
};
/**
 * Use [`getBooleanAlgebra`](./function.ts.html#getBooleanAlgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFunctionBooleanAlgebra = function_1.getBooleanAlgebra;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Bounded.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Bounded.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boundedNumber = void 0;
/**
 * The `Bounded` type class represents totally ordered types that have an upper and lower boundary.
 *
 * Instances should satisfy the following law in addition to the `Ord` laws:
 *
 * - Bounded: `bottom <= a <= top`
 *
 * @since 2.0.0
 */
var Ord_1 = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js");
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`Bounded`](./number.ts.html#Bounded) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.boundedNumber = {
    // tslint:disable-next-line: deprecation
    equals: Ord_1.ordNumber.equals,
    // tslint:disable-next-line: deprecation
    compare: Ord_1.ordNumber.compare,
    top: Infinity,
    bottom: -Infinity
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Chain.js":
/*!************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Chain.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bind = exports.chainFirst = void 0;
function chainFirst(M) {
    return function (f) { return function (first) { return M.chain(first, function (a) { return M.map(f(a), function () { return a; }); }); }; };
}
exports.chainFirst = chainFirst;
function bind(M) {
    return function (name, f) { return function (ma) { return M.chain(ma, function (a) { return M.map(f(a), function (b) {
        var _a;
        return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
    }); }); }; };
}
exports.bind = bind;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Eq.js":
/*!*********************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Eq.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eqDate = exports.eqNumber = exports.eqString = exports.eqBoolean = exports.eq = exports.strictEqual = exports.getStructEq = exports.getTupleEq = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.eqStrict = exports.URI = exports.contramap = exports.tuple = exports.struct = exports.fromEquals = void 0;
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
function fromEquals(equals) {
    return {
        equals: function (x, y) { return x === y || equals(x, y); }
    };
}
exports.fromEquals = fromEquals;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var struct = function (eqs) {
    return fromEquals(function (first, second) {
        for (var key in eqs) {
            if (!eqs[key].equals(first[key], second[key])) {
                return false;
            }
        }
        return true;
    });
};
exports.struct = struct;
/**
 * Given a tuple of `Eq`s returns a `Eq` for the tuple
 *
 * @example
 * import { tuple } from 'fp-ts/Eq'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import * as B from 'fp-ts/boolean'
 *
 * const E = tuple(S.Eq, N.Eq, B.Eq)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, true]), true)
 * assert.strictEqual(E.equals(['a', 1, true], ['b', 1, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 2, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, false]), false)
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var eqs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eqs[_i] = arguments[_i];
    }
    return fromEquals(function (first, second) { return eqs.every(function (E, i) { return E.equals(first[i], second[i]); }); });
};
exports.tuple = tuple;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var contramap_ = function (fa, f) { return function_1.pipe(fa, exports.contramap(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */
var contramap = function (f) { return function (fa) {
    return fromEquals(function (x, y) { return fa.equals(f(x), f(y)); });
}; };
exports.contramap = contramap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Eq';
/**
 * @category instances
 * @since 2.5.0
 */
exports.eqStrict = {
    equals: function (a, b) { return a === b; }
};
var empty = {
    equals: function () { return true; }
};
/**
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function () { return ({
    concat: function (x, y) { return fromEquals(function (a, b) { return x.equals(a, b) && y.equals(a, b); }); }
}); };
exports.getSemigroup = getSemigroup;
/**
 * @category instances
 * @since 2.6.0
 */
var getMonoid = function () { return ({
    concat: exports.getSemigroup().concat,
    empty: empty
}); };
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleEq = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getStructEq = exports.struct;
/**
 * Use [`eqStrict`](#eqstrict) instead
 *
 * @since 2.0.0
 * @deprecated
 */
exports.strictEqual = exports.eqStrict.equals;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eq = exports.Contravariant;
/**
 * Use [`Eq`](./boolean.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqBoolean = exports.eqStrict;
/**
 * Use [`Eq`](./string.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqString = exports.eqStrict;
/**
 * Use [`Eq`](./number.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqNumber = exports.eqStrict;
/**
 * Use [`Eq`](./Date.ts.html#Eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.eqDate = {
    equals: function (first, second) { return first.valueOf() === second.valueOf(); }
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Field.js":
/*!************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Field.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fieldNumber = exports.lcm = exports.gcd = void 0;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * The *greatest common divisor* of two values
 *
 * @since 2.0.0
 */
function gcd(E, field) {
    var zero = field.zero;
    var f = function (x, y) { return (E.equals(y, zero) ? x : f(y, field.mod(x, y))); };
    return f;
}
exports.gcd = gcd;
/**
 * The *least common multiple* of two values
 *
 * @since 2.0.0
 */
function lcm(E, F) {
    var zero = F.zero;
    var gcdSF = gcd(E, F);
    return function (x, y) { return (E.equals(x, zero) || E.equals(y, zero) ? zero : F.div(F.mul(x, y), gcdSF(x, y))); };
}
exports.lcm = lcm;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`Field`](./number.ts.html#Field) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.fieldNumber = {
    add: function (x, y) { return x + y; },
    zero: 0,
    mul: function (x, y) { return x * y; },
    one: 1,
    sub: function (x, y) { return x - y; },
    degree: function (_) { return 1; },
    div: function (x, y) { return x / y; },
    mod: function (x, y) { return x % y; }
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Foldable.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Foldable.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFoldableComposition = exports.toArray = exports.foldM = exports.traverse_ = exports.toReadonlyArray = exports.intercalate = exports.reduceM = exports.reduceRight = exports.foldMap = exports.reduce = void 0;
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
function reduce(F, G) {
    return function (b, f) { return function (fga) { return F.reduce(fga, b, function (b, ga) { return G.reduce(ga, b, f); }); }; };
}
exports.reduce = reduce;
function foldMap(F, G) {
    return function (M) {
        var foldMapF = F.foldMap(M);
        var foldMapG = G.foldMap(M);
        return function (f) { return function (fga) { return foldMapF(fga, function (ga) { return foldMapG(ga, f); }); }; };
    };
}
exports.foldMap = foldMap;
function reduceRight(F, G) {
    return function (b, f) { return function (fga) { return F.reduceRight(fga, b, function (ga, b) { return G.reduceRight(ga, b, f); }); }; };
}
exports.reduceRight = reduceRight;
function reduceM(M, F) {
    return function (b, f) { return function (fa) { return F.reduce(fa, M.of(b), function (mb, a) { return M.chain(mb, function (b) { return f(b, a); }); }); }; };
}
exports.reduceM = reduceM;
function intercalate(M, F) {
    return function (sep, fm) {
        var go = function (_a, x) {
            var init = _a.init, acc = _a.acc;
            return init ? { init: false, acc: x } : { init: false, acc: M.concat(M.concat(acc, sep), x) };
        };
        return F.reduce(fm, { init: true, acc: M.empty }, go).acc;
    };
}
exports.intercalate = intercalate;
function toReadonlyArray(F) {
    return function (fa) {
        return F.reduce(fa, [], function (acc, a) {
            acc.push(a);
            return acc;
        });
    };
}
exports.toReadonlyArray = toReadonlyArray;
function traverse_(M, F) {
    var applyFirst = function (mu, mb) { return M.ap(M.map(mu, function_1.constant), mb); };
    var mu = M.of(undefined);
    return function (fa, f) { return F.reduce(fa, mu, function (mu, a) { return applyFirst(mu, f(a)); }); };
}
exports.traverse_ = traverse_;
function foldM(M, F) {
    return function (fa, b, f) { return F.reduce(fa, M.of(b), function (mb, a) { return M.chain(mb, function (b) { return f(b, a); }); }); };
}
exports.foldM = foldM;
/**
 * Use [`toReadonlyArray`](#toreadonlyarray) instead
 *
 * @since 2.8.0
 * @deprecated
 */
exports.toArray = toReadonlyArray;
/** @deprecated */
function getFoldableComposition(F, G) {
    var _reduce = reduce(F, G);
    var _foldMap = foldMap(F, G);
    var _reduceRight = reduceRight(F, G);
    return {
        reduce: function (fga, b, f) { return function_1.pipe(fga, _reduce(b, f)); },
        foldMap: function (M) {
            var foldMapM = _foldMap(M);
            return function (fga, f) { return function_1.pipe(fga, foldMapM(f)); };
        },
        reduceRight: function (fga, b, f) { return function_1.pipe(fga, _reduceRight(b, f)); }
    };
}
exports.getFoldableComposition = getFoldableComposition;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFunctorComposition = exports.bindTo = exports.flap = exports.map = void 0;
/**
 * A `Functor` is a type constructor which supports a mapping operation `map`.
 *
 * `map` can be used to turn functions `a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.map(fa, a => a) <-> fa`
 * 2. Composition: `F.map(fa, a => bc(ab(a))) <-> F.map(F.map(fa, ab), bc)`
 *
 * @since 2.0.0
 */
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
function map(F, G) {
    return function (f) { return function (fa) { return F.map(fa, function (ga) { return G.map(ga, f); }); }; };
}
exports.map = map;
function flap(F) {
    return function (a) { return function (fab) { return F.map(fab, function (f) { return f(a); }); }; };
}
exports.flap = flap;
function bindTo(F) {
    return function (name) { return function (fa) { return F.map(fa, function (a) {
        var _a;
        return (_a = {}, _a[name] = a, _a);
    }); }; };
}
exports.bindTo = bindTo;
/** @deprecated */
function getFunctorComposition(F, G) {
    var _map = map(F, G);
    return {
        map: function (fga, f) { return function_1.pipe(fga, _map(f)); }
    };
}
exports.getFunctorComposition = getFunctorComposition;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/IO.js":
/*!*********************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/IO.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMonoid = exports.getSemigroup = exports.io = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.FromIO = exports.ChainRec = exports.MonadIO = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.URI = exports.fromIO = exports.flatten = exports.chain = exports.of = exports.ap = exports.map = void 0;
/**
 * ```ts
 * interface IO<A> {
 *   (): A
 * }
 * ```
 *
 * `IO<A>` represents a non-deterministic synchronous computation that can cause side effects, yields a value of
 * type `A` and **never fails**. If you want to represent a synchronous computation that may fail, please see
 * `IOEither`.
 *
 * @since 2.0.0
 */
var Applicative_1 = __webpack_require__(/*! ./Applicative */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Applicative.js");
var Apply_1 = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
var Chain_1 = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Chain.js");
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (ma, f) { return function () { return f(ma()); }; };
var _ap = function (mab, ma) { return function () { return mab()(ma()); }; };
var _chain = function (ma, f) { return function () { return f(ma())(); }; };
var _chainRec = function (a, f) { return function () {
    var e = f(a)();
    while (e._tag === 'Left') {
        e = f(e.left)();
    }
    return e.right;
}; };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) { return _map(fa, f); }; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) { return _ap(fab, fa); }; };
exports.ap = ap;
/**
 * @category Pointed
 * @since 2.0.0
 */
exports.of = function_1.constant;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) { return _chain(ma, f); }; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * @category constructors
 * @since 2.7.0
 * @deprecated
 */
exports.fromIO = function_1.identity;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'IO';
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.MonadIO = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    fromIO: exports.fromIO
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.ChainRec = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain,
    chainRec: _chainRec
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.FromIO = {
    URI: exports.URI,
    fromIO: function_1.identity
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) { return function () { return as.map(function (a, i) { return f(i, a)(); }); }; }; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) {
    return exports.traverseArrayWithIndex(function (_, a) { return f(a); });
};
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.io = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    fromIO: exports.fromIO,
    chainRec: _chainRec
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getSemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.Applicative);


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Monoid.js":
/*!*************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Monoid.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.monoidProduct = exports.monoidSum = exports.monoidString = exports.getEndomorphismMonoid = exports.getFunctionMonoid = exports.monoidAny = exports.monoidAll = exports.fold = exports.getMeetMonoid = exports.getJoinMonoid = exports.getDualMonoid = exports.getStructMonoid = exports.getTupleMonoid = exports.concatAll = exports.monoidVoid = exports.tuple = exports.struct = exports.reverse = exports.max = exports.min = void 0;
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var _ = __importStar(__webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js"));
var Se = __importStar(__webpack_require__(/*! ./Semigroup */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Semigroup.js"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Get a monoid where `concat` will return the minimum, based on the provided bounded order.
 *
 * The `empty` value is the `top` value.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as M from 'fp-ts/Monoid'
 *
 * const M1 = M.min(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */
var min = function (B) { return ({
    concat: Se.min(B).concat,
    empty: B.top
}); };
exports.min = min;
/**
 * Get a monoid where `concat` will return the maximum, based on the provided bounded order.
 *
 * The `empty` value is the `bottom` value.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as M from 'fp-ts/Monoid'
 *
 * const M1 = M.max(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */
var max = function (B) { return ({
    concat: Se.max(B).concat,
    empty: B.bottom
}); };
exports.max = max;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Monoid`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Monoid'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Monoid).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (M) { return ({
    concat: Se.reverse(M).concat,
    empty: M.empty
}); };
exports.reverse = reverse;
/**
 * Given a struct of monoids returns a monoid for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const M = struct<Point>({
 *   x: N.MonoidSum,
 *   y: N.MonoidSum
 * })
 *
 * assert.deepStrictEqual(M.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */
var struct = function (monoids) {
    var empty = {};
    for (var k in monoids) {
        if (_.has.call(monoids, k)) {
            empty[k] = monoids[k].empty;
        }
    }
    return {
        concat: Se.struct(monoids).concat,
        empty: empty
    };
};
exports.struct = struct;
/**
 * Given a tuple of monoids returns a monoid for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Monoid'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const M1 = tuple(S.Monoid, N.MonoidSum)
 * assert.deepStrictEqual(M1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const M2 = tuple(S.Monoid, N.MonoidSum, B.MonoidAll)
 * assert.deepStrictEqual(M2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var monoids = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        monoids[_i] = arguments[_i];
    }
    return ({
        concat: Se.tuple.apply(Se, monoids).concat,
        empty: monoids.map(function (m) { return m.empty; })
    });
};
exports.tuple = tuple;
/**
 * @category instances
 * @since 2.0.0
 */
exports.monoidVoid = {
    concat: Se.semigroupVoid.concat,
    empty: undefined
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the monoid `empty` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([1, 2, 3]), 6)
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([]), 0)
 *
 * @since 2.10.0
 */
var concatAll = function (M) { return Se.concatAll(M)(M.empty); };
exports.concatAll = concatAll;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleMonoid = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getStructMonoid = exports.struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getDualMonoid = exports.reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
exports.getJoinMonoid = exports.max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
exports.getMeetMonoid = exports.min;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.fold = exports.concatAll;
/**
 * Use [`MonoidAll`](./boolean.ts.html#monoidall) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidAll = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupAll.concat,
    empty: true
};
/**
 * Use [`MonoidAny`](./boolean.ts.html#MonoidAny) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidAny = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupAny.concat,
    empty: false
};
/**
 * Use [`getMonoid`](./function.ts.html#getMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFunctionMonoid = function_1.getMonoid;
/**
 * Use [`getEndomorphismMonoid`](./function.ts.html#getEndomorphismMonoid) instead.
 *
 * **Note**. The execution order in [`getEndomorphismMonoid`](./function.ts.html#getEndomorphismMonoid) is reversed.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getEndomorphismMonoid = function () { return exports.reverse(function_1.getEndomorphismMonoid()); };
exports.getEndomorphismMonoid = getEndomorphismMonoid;
/**
 * Use [`Monoid`](./string.ts.html#Monoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidString = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupString.concat,
    empty: ''
};
/**
 * Use [`MonoidSum`](./number.ts.html#MonoidSum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidSum = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupSum.concat,
    empty: 0
};
/**
 * Use [`MonoidProduct`](./number.ts.html#MonoidProduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.monoidProduct = {
    // tslint:disable-next-line: deprecation
    concat: Se.semigroupProduct.concat,
    empty: 1
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/NonEmptyArray.js":
/*!********************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/NonEmptyArray.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.chain = exports.ap = exports.alt = exports.altW = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.foldMap = exports.foldMapWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.of = exports.copy = exports.modifyAt = exports.updateAt = exports.insertAt = exports.sort = exports.groupBy = exports.groupSort = exports.group = exports.reverse = exports.concat = exports.unappend = exports.unprepend = exports.fromArray = exports.fromReadonlyNonEmptyArray = exports.makeBy = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.prepend = exports.isOutOfBound = exports.isNonEmpty = void 0;
exports.nonEmptyArray = exports.fold = exports.prependToAll = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = exports.traverse = void 0;
var Apply_1 = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js");
var Chain_1 = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Chain.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
var _ = __importStar(__webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js"));
var O = __importStar(__webpack_require__(/*! ./Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js"));
var Ord_1 = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js");
var RNEA = __importStar(__webpack_require__(/*! ./ReadonlyNonEmptyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js"));
// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
var isNonEmpty = function (as) { return as.length > 0; };
exports.isNonEmpty = isNonEmpty;
/**
 * @internal
 */
var isOutOfBound = function (i, as) { return i < 0 || i >= as.length; };
exports.isOutOfBound = isOutOfBound;
/**
 * @internal
 */
var prepend = function (head) { return function (tail) { return __spreadArray([head], tail); }; };
exports.prepend = prepend;
/**
 * @internal
 */
var append = function (end) { return function (init) { return concat(init, [end]); }; };
exports.append = append;
/**
 * @internal
 */
var unsafeInsertAt = function (i, a, as) {
    if (exports.isNonEmpty(as)) {
        var xs = exports.fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [a];
};
exports.unsafeInsertAt = unsafeInsertAt;
/**
 * @internal
 */
var unsafeUpdateAt = function (i, a, as) {
    var xs = exports.fromReadonlyNonEmptyArray(as);
    xs[i] = a;
    return xs;
};
exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * @internal
 */
var uniq = function (E) { return function (as) {
    if (as.length === 1) {
        return exports.copy(as);
    }
    var out = [exports.head(as)];
    var rest = exports.tail(as);
    var _loop_1 = function (a) {
        if (out.every(function (o) { return !E.equals(o, a); })) {
            out.push(a);
        }
    };
    for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
        var a = rest_1[_i];
        _loop_1(a);
    }
    return out;
}; };
exports.uniq = uniq;
/**
 * @internal
 */
var sortBy = function (ords) {
    if (exports.isNonEmpty(ords)) {
        var M = Ord_1.getMonoid();
        return exports.sort(ords.reduce(M.concat, M.empty));
    }
    return exports.copy;
};
exports.sortBy = sortBy;
/**
 * @internal
 */
var union = function (E) {
    var uniqE = exports.uniq(E);
    return function (first, second) { return uniqE(concat(first, second)); };
};
exports.union = union;
/**
 * @internal
 */
var rotate = function (n) { return function (as) {
    var len = as.length;
    var m = Math.round(n) % len;
    if (exports.isOutOfBound(Math.abs(m), as) || m === 0) {
        return exports.copy(as);
    }
    if (m < 0) {
        var _a = exports.splitAt(-m)(as), f = _a[0], s = _a[1];
        return concat(s, f);
    }
    else {
        return exports.rotate(m - len)(as);
    }
}; };
exports.rotate = rotate;
/**
 * @internal
 */
var makeBy = function (n, f) {
    var j = Math.max(0, Math.floor(n));
    var out = [f(0)];
    for (var i = 1; i < j; i++) {
        out.push(f(i));
    }
    return out;
};
exports.makeBy = makeBy;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.10.0
 */
exports.fromReadonlyNonEmptyArray = _.fromReadonlyNonEmptyArray;
/**
 * Builds a `NonEmptyArray` from an `Array` returning `none` if `as` is an empty array
 *
 * @category constructors
 * @since 2.0.0
 */
var fromArray = function (as) { return (exports.isNonEmpty(as) ? O.some(as) : O.none); };
exports.fromArray = fromArray;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 * import { unprepend } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3]), [1, [2, 3]])
 *
 * @category destructors
 * @since 2.9.0
 */
var unprepend = function (as) { return [exports.head(as), exports.tail(as)]; };
exports.unprepend = unprepend;
/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 * import { unappend } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 *
 * @category destructors
 * @since 2.9.0
 */
var unappend = function (as) { return [exports.init(as), exports.last(as)]; };
exports.unappend = unappend;
function concat(first, second) {
    return first.concat(second);
}
exports.concat = concat;
/**
 * @category combinators
 * @since 2.0.0
 */
var reverse = function (as) { return __spreadArray([exports.last(as)], as.slice(0, -1).reverse()); };
exports.reverse = reverse;
function group(E) {
    return function (as) {
        var len = as.length;
        if (len === 0) {
            return [];
        }
        var out = [];
        var head = as[0];
        var nea = [head];
        for (var i = 1; i < len; i++) {
            var a = as[i];
            if (E.equals(a, head)) {
                nea.push(a);
            }
            else {
                out.push(nea);
                head = a;
                nea = [head];
            }
        }
        out.push(nea);
        return out;
    };
}
exports.group = group;
function groupSort(O) {
    var sortO = exports.sort(O);
    var groupO = group(O);
    return function (as) { return (exports.isNonEmpty(as) ? groupO(sortO(as)) : []); };
}
exports.groupSort = groupSort;
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { groupBy } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.0.0
 */
var groupBy = function (f) { return function (as) {
    var out = {};
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        var k = f(a);
        if (out.hasOwnProperty(k)) {
            out[k].push(a);
        }
        else {
            out[k] = [a];
        }
    }
    return out;
}; };
exports.groupBy = groupBy;
/**
 * @category combinators
 * @since 2.0.0
 */
var sort = function (O) { return function (as) {
    return as.slice().sort(O.compare);
}; };
exports.sort = sort;
/**
 * @category combinators
 * @since 2.0.0
 */
var insertAt = function (i, a) { return function (as) {
    return i < 0 || i > as.length ? O.none : O.some(exports.unsafeInsertAt(i, a, as));
}; };
exports.insertAt = insertAt;
/**
 * @category combinators
 * @since 2.0.0
 */
var updateAt = function (i, a) {
    return exports.modifyAt(i, function () { return a; });
};
exports.updateAt = updateAt;
/**
 * @category combinators
 * @since 2.0.0
 */
var modifyAt = function (i, f) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeUpdateAt(i, f(as[i]), as));
}; };
exports.modifyAt = modifyAt;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.copy = exports.fromReadonlyNonEmptyArray;
/**
 * @category Pointed
 * @since 2.0.0
 */
var of = function (a) { return [a]; };
exports.of = of;
/**
 * @category combinators
 * @since 2.5.1
 */
var zipWith = function (as, bs, f) {
    var cs = [f(as[0], bs[0])];
    var len = Math.min(as.length, bs.length);
    for (var i = 1; i < len; i++) {
        cs[i] = f(as[i], bs[i]);
    }
    return cs;
};
exports.zipWith = zipWith;
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return exports.zipWith(as, bs, function (a, b) { return [a, b]; });
}
exports.zip = zip;
/**
 * @category combinators
 * @since 2.5.1
 */
var unzip = function (abs) {
    var fa = [abs[0][0]];
    var fb = [abs[0][1]];
    for (var i = 1; i < abs.length; i++) {
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [fa, fb];
};
exports.unzip = unzip;
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) { return function (as) {
    var out = [middle, as[0]];
    for (var i = 1; i < as.length; i++) {
        out.push(middle, as[i]);
    }
    return out;
}; };
exports.prependAll = prependAll;
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) { return function (as) {
    var rest = exports.tail(as);
    return exports.isNonEmpty(rest) ? function_1.pipe(rest, exports.prependAll(middle), exports.prepend(exports.head(as))) : exports.copy(as);
}; };
exports.intersperse = intersperse;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.foldMapWithIndex = RNEA.foldMapWithIndex;
/**
 * @category combinators
 * @since 2.0.0
 */
exports.foldMap = RNEA.foldMap;
/**
 * @category combinators
 * @since 2.10.0
 */
var chainWithIndex = function (f) { return function (as) {
    var out = exports.fromReadonlyNonEmptyArray(f(0, exports.head(as)));
    for (var i = 1; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
exports.chainWithIndex = chainWithIndex;
/**
 * @category combinators
 * @since 2.10.0
 */
var chop = function (f) { return function (as) {
    var _a = f(as), b = _a[0], rest = _a[1];
    var out = [b];
    var next = rest;
    while (exports.isNonEmpty(next)) {
        var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
        out.push(b_1);
        next = rest_2;
    }
    return out;
}; };
exports.chop = chop;
/**
 * Splits a `NonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */
var splitAt = function (n) { return function (as) {
    var m = Math.max(1, n);
    return m >= as.length ? [exports.copy(as), []] : [function_1.pipe(as.slice(1, m), exports.prepend(exports.head(as))), as.slice(m)];
}; };
exports.splitAt = splitAt;
/**
 * @category combinators
 * @since 2.10.0
 */
var chunksOf = function (n) { return exports.chop(exports.splitAt(n)); };
exports.chunksOf = chunksOf;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
/* istanbul ignore next */
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
/* istanbul ignore next */
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (as) {
    return concat(as, that());
}; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */
exports.alt = exports.altW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (as) {
    return exports.chain(function (f) { return function_1.pipe(as, exports.map(f)); });
};
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) {
    return exports.chainWithIndex(function (_, a) { return f(a); });
};
exports.chain = chain;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (as) {
    var next = exports.tail(as);
    var out = [f(as)];
    while (exports.isNonEmpty(next)) {
        out.push(f(next));
        next = exports.tail(next);
    }
    return out;
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return exports.mapWithIndex(function (_, a) { return f(a); }); };
exports.map = map;
/**
 * @category FunctorWithIndex
 * @since 2.0.0
 */
var mapWithIndex = function (f) { return function (as) {
    var out = [f(0, exports.head(as))];
    for (var i = 1; i < as.length; i++) {
        out.push(f(i, as[i]));
    }
    return out;
}; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduce = RNEA.reduce;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.reduceWithIndex = RNEA.reduceWithIndex;
/**
 * @category Foldable
 * @since 2.0.0
 */
exports.reduceRight = RNEA.reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.0.0
 */
exports.reduceRightWithIndex = RNEA.reduceRightWithIndex;
/**
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
exports.traverse = traverse;
/**
 * @since 2.6.3
 */
var sequence = function (F) { return exports.traverseWithIndex(F)(function (_, a) { return a; }); };
exports.sequence = sequence;
/**
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) { return function (as) {
    var out = F.map(f(0, exports.head(as)), exports.of);
    for (var i = 1; i < as.length; i++) {
        out = F.ap(F.map(out, function (bs) { return function (b) { return function_1.pipe(bs, exports.append(b)); }; }), f(i, as[i]));
    }
    return out;
}; }; };
exports.traverseWithIndex = traverseWithIndex;
/**
 * @since 2.7.0
 */
exports.extract = RNEA.head;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'NonEmptyArray';
/**
 * @category instances
 * @since 2.0.0
 */
exports.getShow = RNEA.getShow;
/**
 * Builds a `Semigroup` instance for `NonEmptyArray`
 *
 * @category instances
 * @since 2.0.0
 */
var getSemigroup = function () { return ({
    concat: concat
}); };
exports.getSemigroup = getSemigroup;
/**
 * @example
 * import { getEq } from 'fp-ts/NonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.0.0
 */
exports.getEq = RNEA.getEq;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
exports.head = RNEA.head;
/**
 * @since 2.0.0
 */
var tail = function (as) { return as.slice(1); };
exports.tail = tail;
/**
 * @since 2.0.0
 */
exports.last = RNEA.last;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/NonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.2.0
 */
var init = function (as) { return as.slice(0, -1); };
exports.init = init;
/**
 * @since 2.0.0
 */
exports.min = RNEA.min;
/**
 * @since 2.0.0
 */
exports.max = RNEA.max;
/**
 * @since 2.10.0
 */
var concatAll = function (S) { return function (as) { return as.reduce(S.concat); }; };
exports.concatAll = concatAll;
function filter(predicate) {
    // tslint:disable-next-line: deprecation
    return exports.filterWithIndex(function (_, a) { return predicate(a); });
}
exports.filter = filter;
/**
 * Use [`filterWithIndex`](./Array.ts.html#filterWithIndex) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
var filterWithIndex = function (predicate) { return function (as) { return exports.fromArray(as.filter(function (a, i) { return predicate(i, a); })); }; };
exports.filterWithIndex = filterWithIndex;
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.9.0
 * @deprecated
 */
exports.uncons = exports.unprepend;
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.9.0
 * @deprecated
 */
exports.unsnoc = exports.unappend;
function cons(head, tail) {
    return tail === undefined ? exports.prepend(head) : function_1.pipe(tail, exports.prepend(head));
}
exports.cons = cons;
/**
 * Use [`append`](./Array.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
var snoc = function (init, end) { return function_1.pipe(init, exports.append(end)); };
exports.snoc = snoc;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
exports.prependToAll = exports.prependAll;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
exports.fold = RNEA.concatAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.nonEmptyArray = {
    URI: exports.URI,
    of: exports.of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: _chain,
    extend: _extend,
    extract: exports.extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js":
/*!*************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFirstMonoid = exports.getOrd = exports.getEq = exports.getShow = exports.URI = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.duplicate = exports.extend = exports.throwError = exports.zero = exports.alt = exports.altW = exports.flatten = exports.chain = exports.of = exports.ap = exports.map = exports.toUndefined = exports.toNullable = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.fromEither = exports.getRight = exports.getLeft = exports.fromPredicate = exports.some = exports.none = exports.isNone = exports.isSome = void 0;
exports.getApplyMonoid = exports.getApplySemigroup = exports.option = exports.mapNullable = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.getRefinement = exports.exists = exports.elem = exports.MonadThrow = exports.Witherable = exports.Traversable = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Foldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.getMonoid = exports.getLastMonoid = void 0;
var Applicative_1 = __webpack_require__(/*! ./Applicative */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Applicative.js");
var Apply_1 = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js");
var Chain_1 = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Chain.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
var _ = __importStar(__webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js"));
var Separated_1 = __webpack_require__(/*! ./Separated */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Separated.js");
// -------------------------------------------------------------------------------------
// guards
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise.
 *
 * @example
 * import { some, none, isSome } from 'fp-ts/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none), false)
 *
 * @category guards
 * @since 2.0.0
 */
exports.isSome = _.isSome;
/**
 * Returns `true` if the option is `None`, `false` otherwise.
 *
 * @example
 * import { some, none, isNone } from 'fp-ts/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none), true)
 *
 * @category guards
 * @since 2.0.0
 */
var isNone = function (fa) { return fa._tag === 'None'; };
exports.isNone = isNone;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * `None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.
 *
 * @category constructors
 * @since 2.0.0
 */
exports.none = { _tag: 'None' };
/**
 * Constructs a `Some`. Represents an optional value that exists.
 *
 * @category constructors
 * @since 2.0.0
 */
var some = function (a) { return ({ _tag: 'Some', value: a }); };
exports.some = some;
function fromPredicate(predicate) {
    return function (a) { return (predicate(a) ? exports.some(a) : exports.none); };
}
exports.fromPredicate = fromPredicate;
/**
 * Returns the `Left` value of an `Either` if possible.
 *
 * @example
 * import { getLeft, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getLeft(right(1)), none)
 * assert.deepStrictEqual(getLeft(left('a')), some('a'))
 *
 * @category constructors
 * @since 2.0.0
 */
function getLeft(ma) {
    return ma._tag === 'Right' ? exports.none : exports.some(ma.left);
}
exports.getLeft = getLeft;
/**
 * Returns the `Right` value of an `Either` if possible.
 *
 * @example
 * import { getRight, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getRight(right(1)), some(1))
 * assert.deepStrictEqual(getRight(left('a')), none)
 *
 * @category constructors
 * @since 2.0.0
 */
function getRight(ma) {
    return ma._tag === 'Left' ? exports.none : exports.some(ma.right);
}
exports.getRight = getRight;
/**
 * Transforms an `Either` to an `Option` discarding the error.
 *
 * Alias of [getRight](#getright)
 *
 * @category constructors
 * @since 2.0.0
 */
exports.fromEither = getRight;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onNone, onSome) { return function (ma) {
    return exports.isNone(ma) ? onNone() : onSome(ma.value);
}; };
exports.matchW = matchW;
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchW;
/**
 * Takes a (lazy) default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @example
 * import { some, none, match } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a some containing 1'
 * )
 *
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a none'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
exports.match = exports.matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */
exports.fold = exports.match;
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */
var getOrElseW = function (onNone) { return function (ma) { return (exports.isNone(ma) ? onNone() : ma.value); }; };
exports.getOrElseW = getOrElseW;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @example
 * import { some, none, getOrElse } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category destructors
 * @since 2.0.0
 */
exports.getOrElse = exports.getOrElseW;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`.
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none)
 * assert.deepStrictEqual(fromNullable(null), none)
 * assert.deepStrictEqual(fromNullable(1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */
var fromNullable = function (a) { return (a == null ? exports.none : exports.some(a)); };
exports.fromNullable = fromNullable;
/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in a
 * `Some`.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import { none, some, tryCatch } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   tryCatch(() => {
 *     throw new Error()
 *   }),
 *   none
 * )
 * assert.deepStrictEqual(tryCatch(() => 1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */
var tryCatch = function (f) {
    try {
        return exports.some(f());
    }
    catch (e) {
        return exports.none;
    }
};
exports.tryCatch = tryCatch;
/**
 * Converts a function that may throw to one returning a `Option`.
 *
 * @category interop
 * @since 2.10.0
 */
var tryCatchK = function (f) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return exports.tryCatch(function () { return f.apply(void 0, a); });
}; };
exports.tryCatchK = tryCatchK;
/**
 * Returns a *smart constructor* from a function that returns a nullable value.
 *
 * @example
 * import { fromNullableK, none, some } from 'fp-ts/Option'
 *
 * const f = (s: string): number | undefined => {
 *   const n = parseFloat(s)
 *   return isNaN(n) ? undefined : n
 * }
 *
 * const g = fromNullableK(f)
 *
 * assert.deepStrictEqual(g('1'), some(1))
 * assert.deepStrictEqual(g('a'), none)
 *
 * @category interop
 * @since 2.9.0
 */
var fromNullableK = function (f) { return function_1.flow(f, exports.fromNullable); };
exports.fromNullableK = fromNullableK;
/**
 * This is `chain` + `fromNullable`, useful when working with optional values.
 *
 * @example
 * import { some, none, fromNullable, chainNullableK } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Employee {
 *   readonly company?: {
 *     readonly address?: {
 *       readonly street?: {
 *         readonly name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee1.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   some('high street')
 * )
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee2.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   none
 * )
 *
 * @category interop
 * @since 2.9.0
 */
var chainNullableK = function (f) { return function (ma) {
    return exports.isNone(ma) ? exports.none : exports.fromNullable(f(ma.value));
}; };
exports.chainNullableK = chainNullableK;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @example
 * import { some, none, toNullable } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toNullable
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toNullable
 *   ),
 *   null
 * )
 *
 * @category interop
 * @since 2.0.0
 */
exports.toNullable = 
/*#__PURE__*/
exports.match(function_1.constNull, function_1.identity);
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @example
 * import { some, none, toUndefined } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toUndefined
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toUndefined
 *   ),
 *   undefined
 * )
 *
 * @category interop
 * @since 2.0.0
 */
exports.toUndefined = 
/*#__PURE__*/
exports.match(function_1.constUndefined, function_1.identity);
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
var _filter = function (fa, predicate) { return function_1.pipe(fa, exports.filter(predicate)); };
/* istanbul ignore next */
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) {
    return function_1.pipe(fa, exports.partition(predicate));
};
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */
var map = function (f) { return function (fa) {
    return exports.isNone(fa) ? exports.none : exports.some(f(fa.value));
}; };
exports.map = map;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */
var ap = function (fa) { return function (fab) {
    return exports.isNone(fab) ? exports.none : exports.isNone(fa) ? exports.none : exports.some(fab.value(fa.value));
}; };
exports.ap = ap;
/**
 * @category Pointed
 * @since 2.7.0
 */
exports.of = exports.some;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */
var chain = function (f) { return function (ma) {
    return exports.isNone(ma) ? exports.none : f(ma.value);
}; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) {
    return exports.isNone(fa) ? that() : fa;
}; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `Option` returns the left-most non-`None` value.
 *
 * @example
 * import * as O from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some('a'),
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('a')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none,
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('b')
 * )
 *
 * @category Alt
 * @since 2.0.0
 */
exports.alt = exports.altW;
/**
 * @category Alternative
 * @since 2.7.0
 */
var zero = function () { return exports.none; };
exports.zero = zero;
/**
 * @category MonadThrow
 * @since 2.7.0
 */
var throwError = function () { return exports.none; };
exports.throwError = throwError;
/**
 * @category Extend
 * @since 2.0.0
 */
var extend = function (f) { return function (wa) {
    return exports.isNone(wa) ? exports.none : exports.some(f(wa));
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduce = function (b, f) { return function (fa) {
    return exports.isNone(fa) ? b : f(b, fa.value);
}; };
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.0.0
 */
var foldMap = function (M) { return function (f) { return function (fa) {
    return exports.isNone(fa) ? M.empty : f(fa.value);
}; }; };
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.0.0
 */
var reduceRight = function (b, f) { return function (fa) {
    return exports.isNone(fa) ? b : f(fa.value, b);
}; };
exports.reduceRight = reduceRight;
/**
 * @category Compactable
 * @since 2.0.0
 */
exports.compact = exports.flatten;
var defaultSeparated = 
/*#__PURE__*/
Separated_1.separated(exports.none, exports.none);
/**
 * @category Compactable
 * @since 2.0.0
 */
var separate = function (ma) {
    return exports.isNone(ma) ? defaultSeparated : Separated_1.separated(getLeft(ma.value), getRight(ma.value));
};
exports.separate = separate;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filter = function (predicate) { return function (fa) { return (exports.isNone(fa) ? exports.none : predicate(fa.value) ? fa : exports.none); }; };
exports.filter = filter;
/**
 * @category Filterable
 * @since 2.0.0
 */
var filterMap = function (f) { return function (fa) {
    return exports.isNone(fa) ? exports.none : f(fa.value);
}; };
exports.filterMap = filterMap;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partition = function (predicate) { return function (fa) {
    return Separated_1.separated(_filter(fa, function (a) { return !predicate(a); }), _filter(fa, predicate));
}; };
exports.partition = partition;
/**
 * @category Filterable
 * @since 2.0.0
 */
var partitionMap = function (f) { return function_1.flow(exports.map(f), exports.separate); };
exports.partitionMap = partitionMap;
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) { return function (f) { return function (ta) { return (exports.isNone(ta) ? F.of(exports.none) : F.map(f(ta.value), exports.some)); }; }; };
exports.traverse = traverse;
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) { return (exports.isNone(ta) ? F.of(exports.none) : F.map(ta.value, exports.some)); }; };
exports.sequence = sequence;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) { return function (f) { return function (fa) { return (exports.isNone(fa) ? F.of(exports.none) : f(fa.value)); }; }; };
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) { return function (f) { return function (fa) {
    return exports.isNone(fa) ? F.of(defaultSeparated) : F.map(f(fa.value), function (e) { return Separated_1.separated(getLeft(e), getRight(e)); });
}; }; };
exports.wilt = wilt;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Option';
/**
 * @category instances
 * @since 2.0.0
 */
function getShow(S) {
    return {
        show: function (ma) { return (exports.isNone(ma) ? 'none' : "some(" + S.show(ma.value) + ")"); }
    };
}
exports.getShow = getShow;
/**
 * @example
 * import { none, some, getEq } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals(none, none), true)
 * assert.strictEqual(E.equals(none, some(1)), false)
 * assert.strictEqual(E.equals(some(1), none), false)
 * assert.strictEqual(E.equals(some(1), some(2)), false)
 * assert.strictEqual(E.equals(some(1), some(1)), true)
 *
 * @category instances
 * @since 2.0.0
 */
function getEq(E) {
    return {
        equals: function (x, y) { return x === y || (exports.isNone(x) ? exports.isNone(y) : exports.isNone(y) ? false : E.equals(x.value, y.value)); }
    };
}
exports.getEq = getEq;
/**
 * The `Ord` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Ord` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 *
 * @example
 * import { none, some, getOrd } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const O = getOrd(N.Ord)
 * assert.strictEqual(O.compare(none, none), 0)
 * assert.strictEqual(O.compare(none, some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @category instances
 * @since 2.0.0
 */
function getOrd(O) {
    return {
        equals: getEq(O).equals,
        compare: function (x, y) { return (x === y ? 0 : exports.isSome(x) ? (exports.isSome(y) ? O.compare(x.value, y.value) : 1) : -1); }
    };
}
exports.getOrd = getOrd;
/**
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @example
 * import { getFirstMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getFirstMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))
 *
 * @category instances
 * @since 2.0.0
 */
function getFirstMonoid() {
    return {
        concat: function (x, y) { return (exports.isNone(x) ? y : x); },
        empty: exports.none
    };
}
exports.getFirstMonoid = getFirstMonoid;
/**
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @example
 * import { getLastMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getLastMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))
 *
 * @category instances
 * @since 2.0.0
 */
function getLastMonoid() {
    return {
        concat: function (x, y) { return (exports.isNone(y) ? x : y); },
        empty: exports.none
    };
}
exports.getLastMonoid = getLastMonoid;
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(a) | some(a)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getMonoid, some, none } from 'fp-ts/Option'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const M = getMonoid(SemigroupSum)
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))
 *
 * @category instances
 * @since 2.0.0
 */
function getMonoid(S) {
    return {
        concat: function (x, y) { return (exports.isNone(x) ? y : exports.isNone(y) ? x : exports.some(S.concat(x.value, y.value))); },
        empty: exports.none
    };
}
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#__PURE__*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alternative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    alt: _alt,
    zero: exports.zero
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    throwError: exports.throwError
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if `ma` contains `a`
 *
 * @example
 * import { some, none, elem } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * assert.strictEqual(elem(N.Eq)(1, some(1)), true)
 * assert.strictEqual(elem(N.Eq)(2, some(1)), false)
 * assert.strictEqual(elem(N.Eq)(1, none), false)
 *
 * @since 2.0.0
 */
function elem(E) {
    return function (a, ma) { return (exports.isNone(ma) ? false : E.equals(a, ma.value)); };
}
exports.elem = elem;
/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @example
 * import { some, none, exists } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 0)
 *   ),
 *   true
 * )
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 1)
 *   ),
 *   false
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     exists(n => n > 0)
 *   ),
 *   false
 * )
 *
 * @since 2.0.0
 */
function exists(predicate) {
    return function (ma) { return (exports.isNone(ma) ? false : predicate(ma.value)); };
}
exports.exists = exists;
/**
 * Returns a `Refinement` (i.e. a custom type guard) from a `Option` returning function.
 * This function ensures that a custom type guard definition is type-safe.
 *
 * ```ts
 * import { some, none, getRefinement } from 'fp-ts/Option'
 *
 * type A = { type: 'A' }
 * type B = { type: 'B' }
 * type C = A | B
 *
 * const isA = (c: C): c is A => c.type === 'B' // <= typo but typescript doesn't complain
 * const isA = getRefinement<C, A>(c => (c.type === 'B' ? some(c) : none)) // static error: Type '"B"' is not assignable to type '"A"'
 * ```
 *
 * @since 2.0.0
 */
function getRefinement(getOption) {
    return function (a) { return exports.isSome(getOption(a)); };
}
exports.getRefinement = getRefinement;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArrayWithIndex = function (f) { return function (as) {
    var out = [];
    for (var i = 0; i < as.length; i++) {
        var b = f(i, as[i]);
        if (exports.isNone(b)) {
            return exports.none;
        }
        out.push(b.value);
    }
    return exports.some(out);
}; };
exports.traverseArrayWithIndex = traverseArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 */
var traverseArray = function (f) {
    return exports.traverseArrayWithIndex(function (_, a) { return f(a); });
};
exports.traverseArray = traverseArray;
/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 */
exports.sequenceArray = 
/*#__PURE__*/
exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`chainNullableK`](#chainnullablek) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.mapNullable = exports.chainNullableK;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.option = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    zero: exports.zero,
    alt: _alt,
    extend: _extend,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt,
    throwError: exports.throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getApplySemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplySemigroup = 
/*#__PURE__*/
Apply_1.getApplySemigroup(exports.Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getApplicativeMonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getApplyMonoid = 
/*#__PURE__*/
Applicative_1.getApplicativeMonoid(exports.Applicative);


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js":
/*!**********************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ordDate = exports.ordNumber = exports.ordString = exports.ordBoolean = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.URI = exports.contramap = exports.reverse = exports.tuple = exports.fromCompare = exports.equalsDefault = void 0;
var Eq_1 = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Eq.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
// -------------------------------------------------------------------------------------
// defaults
// -------------------------------------------------------------------------------------
/**
 * @category defaults
 * @since 2.10.0
 */
var equalsDefault = function (compare) { return function (first, second) {
    return first === second || compare(first, second) === 0;
}; };
exports.equalsDefault = equalsDefault;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */
var fromCompare = function (compare) { return ({
    equals: exports.equalsDefault(compare),
    compare: function (first, second) { return (first === second ? 0 : compare(first, second)); }
}); };
exports.fromCompare = fromCompare;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Ord'
 * import * as B from 'fp-ts/boolean'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 *
 * const O = tuple(S.Ord, N.Ord, B.Ord)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var ords = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ords[_i] = arguments[_i];
    }
    return exports.fromCompare(function (first, second) {
        var i = 0;
        for (; i < ords.length - 1; i++) {
            var r = ords[i].compare(first[i], second[i]);
            if (r !== 0) {
                return r;
            }
        }
        return ords[i].compare(first[i], second[i]);
    });
};
exports.tuple = tuple;
/**
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (O) { return exports.fromCompare(function (first, second) { return O.compare(second, first); }); };
exports.reverse = reverse;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */
var contramap_ = function (fa, f) { return function_1.pipe(fa, exports.contramap(f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */
var contramap = function (f) { return function (fa) {
    return exports.fromCompare(function (first, second) { return fa.compare(f(first), f(second)); });
}; };
exports.contramap = contramap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
exports.URI = 'Ord';
/**
 * @category instances
 * @since 2.0.0
 */
var getSemigroup = function () { return ({
    concat: function (first, second) {
        return exports.fromCompare(function (a, b) {
            var ox = first.compare(a, b);
            return ox !== 0 ? ox : second.compare(a, b);
        });
    }
}); };
exports.getSemigroup = getSemigroup;
/**
 * Returns a `Monoid` such that:
 *
 * - its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2`
 * - its `empty` value is an `Ord` that always considers compared elements equal
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import { contramap, reverse, getMonoid } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as B from 'fp-ts/boolean'
 * import { pipe } from 'fp-ts/function'
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface User {
 *   readonly id: number
 *   readonly name: string
 *   readonly age: number
 *   readonly rememberMe: boolean
 * }
 *
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: User) => p.name)
 * )
 *
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: User) => p.age)
 * )
 *
 * const byRememberMe = pipe(
 *   B.Ord,
 *   contramap((p: User) => p.rememberMe)
 * )
 *
 * const M = getMonoid<User>()
 *
 * const users: Array<User> = [
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true }
 * ]
 *
 * // sort by name, then by age, then by `rememberMe`
 * const O1 = concatAll(M)([byName, byAge, byRememberMe])
 * assert.deepStrictEqual(sort(O1)(users), [
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * // now `rememberMe = true` first, then by name, then by age
 * const O2 = concatAll(M)([reverse(byRememberMe), byName, byAge])
 * assert.deepStrictEqual(sort(O2)(users), [
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * @category instances
 * @since 2.4.0
 */
var getMonoid = function () { return ({
    concat: exports.getSemigroup().concat,
    empty: exports.fromCompare(function () { return 0; })
}); };
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
// TODO: curry in v3
/**
 * Test whether one value is _strictly less than_ another
 *
 * @since 2.0.0
 */
var lt = function (O) { return function (first, second) { return O.compare(first, second) === -1; }; };
exports.lt = lt;
// TODO: curry in v3
/**
 * Test whether one value is _strictly greater than_ another
 *
 * @since 2.0.0
 */
var gt = function (O) { return function (first, second) { return O.compare(first, second) === 1; }; };
exports.gt = gt;
// TODO: curry in v3
/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @since 2.0.0
 */
var leq = function (O) { return function (first, second) { return O.compare(first, second) !== 1; }; };
exports.leq = leq;
// TODO: curry in v3
/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @since 2.0.0
 */
var geq = function (O) { return function (first, second) { return O.compare(first, second) !== -1; }; };
exports.geq = geq;
// TODO: curry in v3
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
var min = function (O) { return function (first, second) {
    return first === second || O.compare(first, second) < 1 ? first : second;
}; };
exports.min = min;
// TODO: curry in v3
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
var max = function (O) { return function (first, second) {
    return first === second || O.compare(first, second) > -1 ? first : second;
}; };
exports.max = max;
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */
var clamp = function (O) {
    var minO = exports.min(O);
    var maxO = exports.max(O);
    return function (low, hi) { return function (a) { return maxO(minO(a, hi), low); }; };
};
exports.clamp = clamp;
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @since 2.0.0
 */
var between = function (O) {
    var ltO = exports.lt(O);
    var gtO = exports.gt(O);
    return function (low, hi) { return function (a) { return (ltO(a, low) || gtO(a, hi) ? false : true); }; };
};
exports.between = between;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleOrd = exports.tuple;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getDualOrd = exports.reverse;
/**
 * Use [`Contravariant`](#contravariant) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ord = exports.Contravariant;
// default compare for primitive types
function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
}
var strictOrd = {
    equals: Eq_1.eqStrict.equals,
    compare: compare
};
/**
 * Use [`Ord`](./boolean.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ordBoolean = strictOrd;
/**
 * Use [`Ord`](./string.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ordString = strictOrd;
/**
 * Use [`Ord`](./number.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ordNumber = strictOrd;
/**
 * Use [`Ord`](./Date.ts.html#Ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.ordDate = 
/*#__PURE__*/
function_1.pipe(
// tslint:disable-next-line: deprecation
exports.ordNumber, 
/*#__PURE__*/
exports.contramap(function (date) { return date.valueOf(); }));


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReaderT.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReaderT.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getReaderM = exports.fromReader = exports.chain = exports.ap = exports.map = exports.of = void 0;
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
function of(F) {
    return function (a) { return function () { return F.of(a); }; };
}
exports.of = of;
function map(F) {
    return function (f) { return function (fa) { return function (r) { return F.map(fa(r), f); }; }; };
}
exports.map = map;
function ap(F) {
    return function (fa) { return function (fab) { return function (r) { return F.ap(fab(r), fa(r)); }; }; };
}
exports.ap = ap;
function chain(M) {
    return function (f) { return function (ma) { return function (r) { return M.chain(ma(r), function (a) { return f(a)(r); }); }; }; };
}
exports.chain = chain;
function fromReader(F) {
    return function (ma) { return function_1.flow(ma, F.of); };
}
exports.fromReader = fromReader;
/** @deprecated */
/* istanbul ignore next */
function getReaderM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    return {
        map: function (fa, f) { return function_1.pipe(fa, _map(f)); },
        ap: function (fab, fa) { return function_1.pipe(fab, _ap(fa)); },
        of: of(M),
        chain: function (ma, f) { return function_1.pipe(ma, _chain(f)); },
        ask: function () { return M.of; },
        asks: function (f) { return function_1.flow(f, M.of); },
        local: function (ma, f) { return function (q) { return ma(f(q)); }; },
        fromReader: fromReader(M),
        fromM: function (ma) { return function () { return ma; }; }
    };
}
exports.getReaderM = getReaderM;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyArray.js":
/*!********************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyArray.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uniq = exports.elem = exports.rotate = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.updateAt = exports.insertAt = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.lookup = exports.isOutOfBound = exports.size = exports.isNonEmpty = exports.isEmpty = exports.scanRight = exports.scanLeft = exports.chainWithIndex = exports.foldRight = exports.matchRight = exports.foldLeft = exports.matchLeft = exports.replicate = exports.range = exports.makeBy = exports.append = exports.prepend = void 0;
exports.Pointed = exports.flap = exports.Functor = exports.getOrd = exports.getEq = exports.getMonoid = exports.getSemigroup = exports.getShow = exports.URI = exports.unfold = exports.wilt = exports.wither = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.foldMap = exports.reduce = exports.foldMapWithIndex = exports.duplicate = exports.extend = exports.filterWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partitionWithIndex = exports.partition = exports.compact = exports.filterMap = exports.filterMapWithIndex = exports.filter = exports.separate = exports.mapWithIndex = exports.map = exports.flatten = exports.chain = exports.ap = exports.alt = exports.altW = exports.zero = exports.of = exports.difference = exports.intersection = exports.union = exports.comprehension = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = void 0;
exports.readonlyArray = exports.prependToAll = exports.snoc = exports.cons = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.some = exports.every = exports.empty = exports.fromArray = exports.toArray = exports.unsafeDeleteAt = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Unfoldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = void 0;
var Apply_1 = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js");
var Chain_1 = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Chain.js");
var Eq_1 = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Eq.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
var N = __importStar(__webpack_require__(/*! ./number */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/number.js"));
var O = __importStar(__webpack_require__(/*! ./Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js"));
var Ord_1 = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js");
var RNEA = __importStar(__webpack_require__(/*! ./ReadonlyNonEmptyArray */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js"));
var Separated_1 = __webpack_require__(/*! ./Separated */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Separated.js");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Prepend an element to the front of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prepend } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
exports.prepend = RNEA.prepend;
/**
 * Append an element to the end of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { append } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 *
 * @category constructors
 * @since 2.10.0
 */
exports.append = RNEA.append;
/**
 * Return a `ReadonlyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { makeBy } from 'fp-ts/ReadonlyArray'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @category constructors
 * @since 2.5.0
 */
var makeBy = function (n, f) { return (n <= 0 ? exports.empty : RNEA.makeBy(n, f)); };
exports.makeBy = makeBy;
/**
 * Create a `ReadonlyArray` containing a range of integers, including both endpoints.
 *
 * @example
 * import { range } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @category constructors
 * @since 2.5.0
 */
var range = function (start, end) {
    return start <= end ? exports.makeBy(end - start + 1, function (i) { return start + i; }) : [start];
};
exports.range = range;
/**
 * Create a `ReadonlyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import { replicate } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @category constructors
 * @since 2.5.0
 */
var replicate = function (n, a) { return exports.makeBy(n, function () { return a; }); };
exports.replicate = replicate;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Break an array into its first element and remaining elements.
 *
 * @example
 * import { matchLeft } from 'fp-ts/ReadonlyArray'
 *
 * const len: <A>(as: ReadonlyArray<A>) => number = matchLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @category destructors
 * @since 2.10.0
 */
var matchLeft = function (onEmpty, onNonEmpty) { return function (as) { return (exports.isNonEmpty(as) ? onNonEmpty(RNEA.head(as), RNEA.tail(as)) : onEmpty()); }; };
exports.matchLeft = matchLeft;
/**
 * Alias of [`matchLeft`](#matchleft).
 *
 * @category destructors
 * @since 2.5.0
 */
exports.foldLeft = exports.matchLeft;
/**
 * Break an array into its initial elements and the last element.
 *
 * @category destructors
 * @since 2.10.0
 */
var matchRight = function (onEmpty, onNonEmpty) { return function (as) { return (exports.isNonEmpty(as) ? onNonEmpty(RNEA.init(as), RNEA.last(as)) : onEmpty()); }; };
exports.matchRight = matchRight;
/**
 * Alias of [`matchRight`](#matchright).
 *
 * @category destructors
 * @since 2.5.0
 */
exports.foldRight = exports.matchRight;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.7.0
 */
var chainWithIndex = function (f) { return function (as) {
    if (exports.isEmpty(as)) {
        return exports.empty;
    }
    var out = [];
    for (var i = 0; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
exports.chainWithIndex = chainWithIndex;
/**
 * Same as `reduce` but it carries over the intermediate steps.
 *
 * @example
 * import { scanLeft } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 *
 * @category combinators
 * @since 2.5.0
 */
var scanLeft = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[0] = b;
    for (var i = 0; i < len; i++) {
        out[i + 1] = f(out[i], as[i]);
    }
    return out;
}; };
exports.scanLeft = scanLeft;
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @category combinators
 * @since 2.5.0
 */
var scanRight = function (b, f) { return function (as) {
    var len = as.length;
    var out = new Array(len + 1);
    out[len] = b;
    for (var i = len - 1; i >= 0; i--) {
        out[i] = f(as[i], out[i + 1]);
    }
    return out;
}; };
exports.scanRight = scanRight;
/**
 * Test whether a `ReadonlyArray` is empty.
 *
 * @example
 * import { isEmpty } from 'fp-ts/ReadonlyArray'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @since 2.5.0
 */
var isEmpty = function (as) { return as.length === 0; };
exports.isEmpty = isEmpty;
/**
 * Test whether a `ReadonlyArray` is non empty.
 *
 * @category guards
 * @since 2.5.0
 */
exports.isNonEmpty = RNEA.isNonEmpty;
/**
 * Calculate the number of elements in a `ReadonlyArray`.
 *
 * @since 2.10.0
 */
var size = function (as) { return as.length; };
exports.size = size;
/**
 * Test whether an array contains a particular index
 *
 * @since 2.5.0
 */
exports.isOutOfBound = RNEA.isOutOfBound;
function lookup(i, as) {
    return as === undefined ? function (as) { return lookup(i, as); } : exports.isOutOfBound(i, as) ? O.none : O.some(as[i]);
}
exports.lookup = lookup;
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @since 2.5.0
 */
var head = function (as) { return (exports.isNonEmpty(as) ? O.some(RNEA.head(as)) : O.none); };
exports.head = head;
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @since 2.5.0
 */
var last = function (as) { return (exports.isNonEmpty(as) ? O.some(RNEA.last(as)) : O.none); };
exports.last = last;
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @since 2.5.0
 */
var tail = function (as) {
    return exports.isNonEmpty(as) ? O.some(RNEA.tail(as)) : O.none;
};
exports.tail = tail;
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @since 2.5.0
 */
var init = function (as) {
    return exports.isNonEmpty(as) ? O.some(RNEA.init(as)) : O.none;
};
exports.init = init;
/**
 * Keep only a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeLeft(2)), [1, 2])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeLeft(4)), input)
 * assert.strictEqual(pipe(input, RA.takeLeft(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var takeLeft = function (n) { return function (as) {
    return exports.isOutOfBound(n, as) ? as : n === 0 ? exports.empty : as.slice(0, n);
}; };
exports.takeLeft = takeLeft;
/**
 * Keep only a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeRight(2)), [2, 3])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeRight(4)), input)
 * assert.strictEqual(pipe(input, RA.takeRight(-1)), input)
 *
 * @since 2.5.0
 */
var takeRight = function (n) { return function (as) {
    return exports.isOutOfBound(n, as) ? as : n === 0 ? exports.empty : as.slice(-n);
}; };
exports.takeRight = takeRight;
function takeLeftWhile(predicate) {
    return function (as) {
        var out = [];
        for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            if (!predicate(a)) {
                break;
            }
            out.push(a);
        }
        var len = out.length;
        return len === as.length ? as : len === 0 ? exports.empty : out;
    };
}
exports.takeLeftWhile = takeLeftWhile;
var spanLeftIndex = function (as, predicate) {
    var l = as.length;
    var i = 0;
    for (; i < l; i++) {
        if (!predicate(as[i])) {
            break;
        }
    }
    return i;
};
function spanLeft(predicate) {
    return function (as) {
        var _a = exports.splitAt(spanLeftIndex(as, predicate))(as), init = _a[0], rest = _a[1];
        return { init: init, rest: rest };
    };
}
exports.spanLeft = spanLeft;
/**
 * Drop a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropLeft(2)), [3])
 * assert.strictEqual(pipe(input, RA.dropLeft(0)), input)
 * assert.strictEqual(pipe(input, RA.dropLeft(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var dropLeft = function (n) { return function (as) {
    return n <= 0 || exports.isEmpty(as) ? as : n >= as.length ? exports.empty : as.slice(n, as.length);
}; };
exports.dropLeft = dropLeft;
/**
 * Drop a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @example
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropRight(2)), [1])
 * assert.strictEqual(pipe(input, RA.dropRight(0)), input)
 * assert.strictEqual(pipe(input, RA.dropRight(-1)), input)
 *
 * @category combinators
 * @since 2.5.0
 */
var dropRight = function (n) { return function (as) {
    return n <= 0 || exports.isEmpty(as) ? as : n >= as.length ? exports.empty : as.slice(0, as.length - n);
}; };
exports.dropRight = dropRight;
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @category combinators
 * @since 2.5.0
 */
var dropLeftWhile = function (predicate) { return function (as) {
    var i = spanLeftIndex(as, predicate);
    return i === 0 ? as : i === as.length ? exports.empty : as.slice(i);
}; };
exports.dropLeftWhile = dropLeftWhile;
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.5.0
 */
var findIndex = function (predicate) { return function (as) {
    for (var i = 0; i < as.length; i++) {
        if (predicate(as[i])) {
            return O.some(i);
        }
    }
    return O.none;
}; };
exports.findIndex = findIndex;
function findFirst(predicate) {
    return function (as) {
        for (var i = 0; i < as.length; i++) {
            if (predicate(as[i])) {
                return O.some(as[i]);
            }
        }
        return O.none;
    };
}
exports.findFirst = findFirst;
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @since 2.5.0
 */
var findFirstMap = function (f) { return function (as) {
    for (var i = 0; i < as.length; i++) {
        var out = f(as[i]);
        if (O.isSome(out)) {
            return out;
        }
    }
    return O.none;
}; };
exports.findFirstMap = findFirstMap;
function findLast(predicate) {
    return function (as) {
        for (var i = as.length - 1; i >= 0; i--) {
            if (predicate(as[i])) {
                return O.some(as[i]);
            }
        }
        return O.none;
    };
}
exports.findLast = findLast;
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @since 2.5.0
 */
var findLastMap = function (f) { return function (as) {
    for (var i = as.length - 1; i >= 0; i--) {
        var out = f(as[i]);
        if (O.isSome(out)) {
            return out;
        }
    }
    return O.none;
}; };
exports.findLastMap = findLastMap;
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: ReadonlyArray<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.5.0
 */
var findLastIndex = function (predicate) { return function (as) {
    for (var i = as.length - 1; i >= 0; i--) {
        if (predicate(as[i])) {
            return O.some(i);
        }
    }
    return O.none;
}; };
exports.findLastIndex = findLastIndex;
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/ReadonlyArray'
 * import { some } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.5.0
 */
exports.insertAt = 
// tslint:disable-next-line: deprecation
RNEA.insertAt;
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.5.0
 */
var updateAt = function (i, a) {
    return exports.modifyAt(i, function () { return a; });
};
exports.updateAt = updateAt;
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.5.0
 */
var deleteAt = function (i) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeDeleteAt(i, as));
}; };
exports.deleteAt = deleteAt;
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/ReadonlyArray'
 * import { some, none } from 'fp-ts/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.5.0
 */
var modifyAt = function (i, f) { return function (as) {
    return exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeUpdateAt(i, f(as[i]), as));
}; };
exports.modifyAt = modifyAt;
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @category combinators
 * @since 2.5.0
 */
var reverse = function (as) { return (as.length <= 1 ? as : as.slice().reverse()); };
exports.reverse = reverse;
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/ReadonlyArray'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @category combinators
 * @since 2.5.0
 */
var rights = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Right') {
            r.push(a.right);
        }
    }
    return r;
};
exports.rights = rights;
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/ReadonlyArray'
 * import { left, right } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @category combinators
 * @since 2.5.0
 */
var lefts = function (as) {
    var r = [];
    for (var i = 0; i < as.length; i++) {
        var a = as[i];
        if (a._tag === 'Left') {
            r.push(a.left);
        }
    }
    return r;
};
exports.lefts = lefts;
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */
var sort = function (O) { return function (as) {
    return as.length <= 1 ? as : as.slice().sort(O.compare);
}; };
exports.sort = sort;
// TODO: curry and make data-last in v3
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @category combinators
 * @since 2.5.0
 */
var zipWith = function (fa, fb, f) {
    var fc = [];
    var len = Math.min(fa.length, fb.length);
    for (var i = 0; i < len; i++) {
        fc[i] = f(fa[i], fb[i]);
    }
    return fc;
};
exports.zipWith = zipWith;
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return exports.zipWith(as, bs, function (a, b) { return [a, b]; });
}
exports.zip = zip;
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @category combinators
 * @since 2.5.0
 */
var unzip = function (as) {
    var fa = [];
    var fb = [];
    for (var i = 0; i < as.length; i++) {
        fa[i] = as[i][0];
        fb[i] = as[i][1];
    }
    return [fa, fb];
};
exports.unzip = unzip;
/**
 * Prepend an element to every member of an array
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) {
    var f = RNEA.prependAll(middle);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.prependAll = prependAll;
/**
 * Places an element in between members of an array
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) {
    var f = RNEA.intersperse(middle);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.intersperse = intersperse;
/**
 * Rotate a `ReadonlyArray` by `n` steps.
 *
 * @example
 * import { rotate } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @category combinators
 * @since 2.5.0
 */
var rotate = function (n) {
    var f = RNEA.rotate(n);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.rotate = rotate;
function elem(E) {
    return function (a, as) {
        if (as === undefined) {
            var elemE_1 = elem(E);
            return function (as) { return elemE_1(a, as); };
        }
        var predicate = function (element) { return E.equals(element, a); };
        var i = 0;
        for (; i < as.length; i++) {
            if (predicate(as[i])) {
                return true;
            }
        }
        return false;
    };
}
exports.elem = elem;
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 *
 * @category combinators
 * @since 2.5.0
 */
var uniq = function (E) {
    var f = RNEA.uniq(E);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.uniq = uniq;
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/ReadonlyArray'
 * import { contramap } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 * const byName = pipe(S.Ord, contramap((p: Person) => p.name))
 * const byAge = pipe(N.Ord, contramap((p: Person) => p.age))
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @category combinators
 * @since 2.5.0
 */
var sortBy = function (ords) {
    var f = RNEA.sortBy(ords);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : as); };
};
exports.sortBy = sortBy;
/**
 * A useful recursion pattern for processing a `ReadonlyArray` to produce a new `ReadonlyArray`, often used for "chopping" up the input
 * `ReadonlyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyArray` and produce a
 * value and the tail of the `ReadonlyArray`.
 *
 * @example
 * import { Eq } from 'fp-ts/Eq'
 * import * as RA from 'fp-ts/ReadonlyArray'
 * import * as N from 'fp-ts/number'
 * import { pipe } from 'fp-ts/function'
 *
 * const group = <A>(S: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>) => {
 *   return RA.chop(as => {
 *     const { init, rest } = pipe(as, RA.spanLeft((a: A) => S.equals(a, as[0])))
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @category combinators
 * @since 2.5.0
 */
var chop = function (f) {
    var g = RNEA.chop(f);
    return function (as) { return (exports.isNonEmpty(as) ? g(as) : exports.empty); };
};
exports.chop = chop;
/**
 * Splits a `ReadonlyArray` into two pieces, the first piece has max `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @category combinators
 * @since 2.5.0
 */
var splitAt = function (n) { return function (as) {
    return n >= 1 && exports.isNonEmpty(as) ? RNEA.splitAt(n)(as) : exports.isEmpty(as) ? [as, exports.empty] : [exports.empty, as];
}; };
exports.splitAt = splitAt;
/**
 * Splits a `ReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyArray`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that:
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `as`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/ReadonlyArray'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 * @category combinators
 * @since 2.5.0
 */
var chunksOf = function (n) {
    var f = RNEA.chunksOf(n);
    return function (as) { return (exports.isNonEmpty(as) ? f(as) : exports.empty); };
};
exports.chunksOf = chunksOf;
function comprehension(input, f, g) {
    if (g === void 0) { g = function () { return true; }; }
    var go = function (scope, input) {
        return exports.isNonEmpty(input)
            ? function_1.pipe(RNEA.head(input), exports.chain(function (x) { return go(function_1.pipe(scope, exports.append(x)), RNEA.tail(input)); }))
            : g.apply(void 0, scope) ? [f.apply(void 0, scope)]
                : exports.empty;
    };
    return go(exports.empty, input);
}
exports.comprehension = comprehension;
function union(E) {
    var unionE = RNEA.union(E);
    return function (first, second) {
        if (second === undefined) {
            var unionE_1 = union(E);
            return function (ys) { return unionE_1(ys, first); };
        }
        return exports.isNonEmpty(first) && exports.isNonEmpty(second) ? unionE(first, second) : exports.isNonEmpty(first) ? first : second;
    };
}
exports.union = union;
function intersection(E) {
    var elemE = elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var intersectionE_1 = intersection(E);
            return function (ys) { return intersectionE_1(ys, xs); };
        }
        return xs.filter(function (a) { return elemE(a, ys); });
    };
}
exports.intersection = intersection;
function difference(E) {
    var elemE = elem(E);
    return function (xs, ys) {
        if (ys === undefined) {
            var differenceE_1 = difference(E);
            return function (ys) { return differenceE_1(ys, xs); };
        }
        return xs.filter(function (a) { return !elemE(a, ys); });
    };
}
exports.difference = difference;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
var _filter = function (fa, predicate) {
    return function_1.pipe(fa, exports.filter(predicate));
};
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
var _partition = function (fa, predicate) {
    return function_1.pipe(fa, exports.partition(predicate));
};
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
var _partitionWithIndex = function (fa, predicateWithIndex) { return function_1.pipe(fa, exports.partitionWithIndex(predicateWithIndex)); };
var _partitionMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.partitionMapWithIndex(f)); };
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
var _filterMapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.filterMapWithIndex(f)); };
var _filterWithIndex = function (fa, predicateWithIndex) { return function_1.pipe(fa, exports.filterWithIndex(predicateWithIndex)); };
var _extend = function (fa, f) { return function_1.pipe(fa, exports.extend(f)); };
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Pointed
 * @since 2.5.0
 */
exports.of = RNEA.of;
/**
 * @category Alternative
 * @since 2.7.0
 */
var zero = function () { return exports.empty; };
exports.zero = zero;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (fa) {
    return fa.concat(that());
}; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.5.0
 */
exports.alt = exports.altW;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.5.0
 */
var ap = function (fa) {
    return exports.chain(function (f) { return function_1.pipe(fa, exports.map(f)); });
};
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.5.0
 */
var chain = function (f) { return function (ma) {
    return function_1.pipe(ma, exports.chainWithIndex(function (_, a) { return f(a); }));
}; };
exports.chain = chain;
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */
var map = function (f) { return function (fa) {
    return fa.map(function (a) { return f(a); });
}; };
exports.map = map;
/**
 * @category FunctorWithIndex
 * @since 2.5.0
 */
var mapWithIndex = function (f) { return function (fa) { return fa.map(function (a, i) { return f(i, a); }); }; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category Compactable
 * @since 2.5.0
 */
var separate = function (fa) {
    var left = [];
    var right = [];
    for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
        var e = fa_1[_i];
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return Separated_1.separated(left, right);
};
exports.separate = separate;
/**
 * @category Filterable
 * @since 2.5.0
 */
var filter = function (predicate) { return function (fa) { return fa.filter(predicate); }; };
exports.filter = filter;
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var filterMapWithIndex = function (f) { return function (fa) {
    var out = [];
    for (var i = 0; i < fa.length; i++) {
        var optionB = f(i, fa[i]);
        if (O.isSome(optionB)) {
            out.push(optionB.value);
        }
    }
    return out;
}; };
exports.filterMapWithIndex = filterMapWithIndex;
/**
 * @category Filterable
 * @since 2.5.0
 */
var filterMap = function (f) {
    return exports.filterMapWithIndex(function (_, a) { return f(a); });
};
exports.filterMap = filterMap;
/**
 * @category Compactable
 * @since 2.5.0
 */
exports.compact = 
/*#__PURE__*/
exports.filterMap(function_1.identity);
/**
 * @category Filterable
 * @since 2.5.0
 */
var partition = function (predicate) {
    return exports.partitionWithIndex(function (_, a) { return predicate(a); });
};
exports.partition = partition;
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var partitionWithIndex = function (predicateWithIndex) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var a = fa[i];
        if (predicateWithIndex(i, a)) {
            right.push(a);
        }
        else {
            left.push(a);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionWithIndex = partitionWithIndex;
/**
 * @category Filterable
 * @since 2.5.0
 */
var partitionMap = function (f) {
    return exports.partitionMapWithIndex(function (_, a) { return f(a); });
};
exports.partitionMap = partitionMap;
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var partitionMapWithIndex = function (f) { return function (fa) {
    var left = [];
    var right = [];
    for (var i = 0; i < fa.length; i++) {
        var e = f(i, fa[i]);
        if (e._tag === 'Left') {
            left.push(e.left);
        }
        else {
            right.push(e.right);
        }
    }
    return Separated_1.separated(left, right);
}; };
exports.partitionMapWithIndex = partitionMapWithIndex;
/**
 * @category FilterableWithIndex
 * @since 2.5.0
 */
var filterWithIndex = function (predicateWithIndex) { return function (fa) {
    return fa.filter(function (a, i) { return predicateWithIndex(i, a); });
}; };
exports.filterWithIndex = filterWithIndex;
/**
 * @category Extend
 * @since 2.5.0
 */
var extend = function (f) { return function (wa) { return wa.map(function (_, i) { return f(wa.slice(i)); }); }; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var foldMapWithIndex = function (M) { return function (f) { return function (fa) {
    return fa.reduce(function (b, a, i) { return M.concat(b, f(i, a)); }, M.empty);
}; }; };
exports.foldMapWithIndex = foldMapWithIndex;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) {
    return exports.reduceWithIndex(b, function (_, b, a) { return f(b, a); });
};
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (f) { return foldMapWithIndexM(function (_, a) { return f(a); }); };
};
exports.foldMap = foldMap;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceWithIndex = function (b, f) { return function (fa) {
    var len = fa.length;
    var out = b;
    for (var i = 0; i < len; i++) {
        out = f(i, out, fa[i]);
    }
    return out;
}; };
exports.reduceWithIndex = reduceWithIndex;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) {
    return exports.reduceRightWithIndex(b, function (_, a, b) { return f(a, b); });
};
exports.reduceRight = reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceRightWithIndex = function (b, f) { return function (fa) { return fa.reduceRight(function (b, a, i) { return f(i, a, b); }, b); }; };
exports.reduceRightWithIndex = reduceRightWithIndex;
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
exports.traverse = traverse;
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return function (ta) {
    return _reduce(ta, F.of(exports.zero()), function (fas, fa) {
        return F.ap(F.map(fas, function (as) { return function (a) { return function_1.pipe(as, exports.append(a)); }; }), fa);
    });
}; };
exports.sequence = sequence;
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) {
    return exports.reduceWithIndex(F.of(exports.zero()), function (i, fbs, a) {
        return F.ap(F.map(fbs, function (bs) { return function (b) { return function_1.pipe(bs, exports.append(b)); }; }), f(i, a));
    });
}; };
exports.traverseWithIndex = traverseWithIndex;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) {
    var traverseF = exports.traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.compact); }; };
};
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) {
    var traverseF = exports.traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.separate); }; };
};
exports.wilt = wilt;
/**
 * @category Unfoldable
 * @since 2.6.6
 */
var unfold = function (b, f) {
    var out = [];
    var bb = b;
    while (true) {
        var mt = f(bb);
        if (O.isSome(mt)) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            out.push(a);
            bb = b_1;
        }
        else {
            break;
        }
    }
    return out;
};
exports.unfold = unfold;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
exports.URI = 'ReadonlyArray';
/**
 * @category instances
 * @since 2.5.0
 */
var getShow = function (S) { return ({
    show: function (as) { return "[" + as.map(S.show).join(', ') + "]"; }
}); };
exports.getShow = getShow;
/**
 * @category instances
 * @since 2.5.0
 */
var getSemigroup = function () { return ({
    concat: function (first, second) { return (exports.isEmpty(first) ? second : exports.isEmpty(second) ? first : first.concat(second)); }
}); };
exports.getSemigroup = getSemigroup;
/**
 * Returns a `Monoid` for `ReadonlyArray<A>`.
 *
 * @example
 * import { getMonoid } from 'fp-ts/ReadonlyArray'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @category instances
 * @since 2.5.0
 */
var getMonoid = function () { return ({
    concat: exports.getSemigroup().concat,
    empty: exports.empty
}); };
exports.getMonoid = getMonoid;
/**
 * Derives an `Eq` over the `ReadonlyArray` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import * as S from 'fp-ts/string'
 * import { getEq } from 'fp-ts/ReadonlyArray'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @category instances
 * @since 2.5.0
 */
var getEq = function (E) {
    return Eq_1.fromEquals(function (xs, ys) { return xs.length === ys.length && xs.every(function (x, i) { return E.equals(x, ys[i]); }); });
};
exports.getEq = getEq;
/**
 * Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/ReadonlyArray'
 * import * as S from 'fp-ts/string'
 *
 * const O = getOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 *
 * @category instances
 * @since 2.5.0
 */
var getOrd = function (O) {
    return Ord_1.fromCompare(function (a, b) {
        var aLen = a.length;
        var bLen = b.length;
        var len = Math.min(aLen, bLen);
        for (var i = 0; i < len; i++) {
            var ordering = O.compare(a[i], b[i]);
            if (ordering !== 0) {
                return ordering;
            }
        }
        return N.Ord.compare(aLen, bLen);
    });
};
exports.getOrd = getOrd;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Unfoldable = {
    URI: exports.URI,
    unfold: exports.unfold
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alternative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    alt: _alt,
    zero: exports.zero
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FilterableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence: exports.sequence,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    wither: _wither,
    wilt: _wilt
};
// -------------------------------------------------------------------------------------
// unsafe
// -------------------------------------------------------------------------------------
/**
 * @category unsafe
 * @since 2.5.0
 */
exports.unsafeInsertAt = RNEA.unsafeInsertAt;
/**
 * @category unsafe
 * @since 2.5.0
 */
var unsafeUpdateAt = function (i, a, as) {
    return exports.isNonEmpty(as) ? RNEA.unsafeUpdateAt(i, a, as) : as;
};
exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * @category unsafe
 * @since 2.5.0
 */
var unsafeDeleteAt = function (i, as) {
    var xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
exports.unsafeDeleteAt = unsafeDeleteAt;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.5.0
 */
var toArray = function (as) { return as.slice(); };
exports.toArray = toArray;
/**
 * @category interop
 * @since 2.5.0
 */
var fromArray = function (as) { return (exports.isEmpty(as) ? exports.empty : as.slice()); };
exports.fromArray = fromArray;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * An empty array
 *
 * @since 2.5.0
 */
exports.empty = RNEA.empty;
/**
 * Check if a predicate holds true for every array member.
 *
 * @example
 * import { every } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], every(isPositive)), true)
 * assert.deepStrictEqual(pipe([1, 2, -3], every(isPositive)), false)
 *
 * @since 2.9.0
 */
var every = function (predicate) { return function (as) { return as.every(predicate); }; };
exports.every = every;
/**
 * Check if a predicate holds true for any array member.
 *
 * @example
 * import { some } from 'fp-ts/ReadonlyArray'
 * import { pipe } from 'fp-ts/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([-1, -2, 3], some(isPositive)), true)
 * assert.deepStrictEqual(pipe([-1, -2, -3], some(isPositive)), false)
 *
 * @since 2.9.0
 */
var some = function (predicate) { return function (as) {
    return as.some(predicate);
}; };
exports.some = some;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`prepend`](#prepend) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.cons = RNEA.cons;
/**
 * Use [`append`](#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.snoc = RNEA.snoc;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
exports.prependToAll = exports.prependAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
exports.readonlyArray = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero: exports.zero,
    unfold: exports.unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js":
/*!****************************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.traverse = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.reduceRight = exports.foldMap = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.chain = exports.ap = exports.alt = exports.altW = exports.of = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.modifyAt = exports.updateAt = exports.sort = exports.groupBy = exports.groupSort = exports.group = exports.reverse = exports.concat = exports.fromArray = exports.unappend = exports.unprepend = exports.fromReadonlyArray = exports.makeBy = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.prepend = exports.isOutOfBound = exports.isNonEmpty = exports.empty = void 0;
exports.readonlyNonEmptyArray = exports.fold = exports.prependToAll = exports.insertAt = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = void 0;
var Apply_1 = __webpack_require__(/*! ./Apply */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Apply.js");
var Chain_1 = __webpack_require__(/*! ./Chain */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Chain.js");
var Eq_1 = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Eq.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
var _ = __importStar(__webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js"));
var O = __importStar(__webpack_require__(/*! ./Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js"));
var Ord_1 = __webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js");
var Se = __importStar(__webpack_require__(/*! ./Semigroup */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Semigroup.js"));
// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------
/**
 * @internal
 */
exports.empty = [];
/**
 * @internal
 */
var isNonEmpty = function (as) { return as.length > 0; };
exports.isNonEmpty = isNonEmpty;
/**
 * @internal
 */
var isOutOfBound = function (i, as) { return i < 0 || i >= as.length; };
exports.isOutOfBound = isOutOfBound;
/**
 * @internal
 */
var prepend = function (head) { return function (tail) { return __spreadArray([head], tail); }; };
exports.prepend = prepend;
/**
 * @internal
 */
var append = function (end) { return function (init) { return concat(init, [end]); }; };
exports.append = append;
/**
 * @internal
 */
var unsafeInsertAt = function (i, a, as) {
    if (exports.isNonEmpty(as)) {
        var xs = _.fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [a];
};
exports.unsafeInsertAt = unsafeInsertAt;
/**
 * @internal
 */
var unsafeUpdateAt = function (i, a, as) {
    if (as[i] === a) {
        return as;
    }
    else {
        var xs = _.fromReadonlyNonEmptyArray(as);
        xs[i] = a;
        return xs;
    }
};
exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * @internal
 */
var uniq = function (E) { return function (as) {
    if (as.length === 1) {
        return as;
    }
    var out = [exports.head(as)];
    var rest = exports.tail(as);
    var _loop_1 = function (a) {
        if (out.every(function (o) { return !E.equals(o, a); })) {
            out.push(a);
        }
    };
    for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
        var a = rest_1[_i];
        _loop_1(a);
    }
    return out;
}; };
exports.uniq = uniq;
/**
 * @internal
 */
var sortBy = function (ords) {
    if (exports.isNonEmpty(ords)) {
        var M = Ord_1.getMonoid();
        return exports.sort(ords.reduce(M.concat, M.empty));
    }
    return function_1.identity;
};
exports.sortBy = sortBy;
/**
 * @internal
 */
var union = function (E) {
    var uniqE = exports.uniq(E);
    return function (first, second) { return uniqE(concat(first, second)); };
};
exports.union = union;
/**
 * @internal
 */
var rotate = function (n) { return function (as) {
    var len = as.length;
    var m = Math.round(n) % len;
    if (exports.isOutOfBound(Math.abs(m), as) || m === 0) {
        return as;
    }
    if (m < 0) {
        var _a = exports.splitAt(-m)(as), f = _a[0], s = _a[1];
        return concat(s, f);
    }
    else {
        return exports.rotate(m - len)(as);
    }
}; };
exports.rotate = rotate;
/**
 * @internal
 */
var makeBy = function (n, f) {
    var j = Math.max(0, Math.floor(n));
    var out = [f(0)];
    for (var i = 1; i < j; i++) {
        out.push(f(i));
    }
    return out;
};
exports.makeBy = makeBy;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Return a `ReadonlyNonEmptyArray` from a `ReadonlyArray` returning `none` if the input is empty.
 *
 * @category constructors
 * @since 2.5.0
 */
var fromReadonlyArray = function (as) {
    return exports.isNonEmpty(as) ? O.some(as) : O.none;
};
exports.fromReadonlyArray = fromReadonlyArray;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 * import { unprepend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3, 4]), [1, [2, 3, 4]])
 *
 * @category destructors
 * @since 2.9.0
 */
var unprepend = function (as) { return [exports.head(as), exports.tail(as)]; };
exports.unprepend = unprepend;
/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 * import { unappend } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 *
 * @category destructors
 * @since 2.9.0
 */
var unappend = function (as) { return [exports.init(as), exports.last(as)]; };
exports.unappend = unappend;
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.5.0
 */
var fromArray = function (as) { return exports.fromReadonlyArray(as.slice()); };
exports.fromArray = fromArray;
function concat(first, second) {
    return first.concat(second);
}
exports.concat = concat;
/**
 * @category combinators
 * @since 2.5.0
 */
var reverse = function (as) {
    return as.length === 1 ? as : __spreadArray([exports.last(as)], as.slice(0, -1).reverse());
};
exports.reverse = reverse;
function group(E) {
    return function (as) {
        var len = as.length;
        if (len === 0) {
            return exports.empty;
        }
        var out = [];
        var head = as[0];
        var nea = [head];
        for (var i = 1; i < len; i++) {
            var a = as[i];
            if (E.equals(a, head)) {
                nea.push(a);
            }
            else {
                out.push(nea);
                head = a;
                nea = [head];
            }
        }
        out.push(nea);
        return out;
    };
}
exports.group = group;
function groupSort(O) {
    var sortO = exports.sort(O);
    var groupO = group(O);
    return function (as) { return (exports.isNonEmpty(as) ? groupO(sortO(as)) : exports.empty); };
}
exports.groupSort = groupSort;
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { groupBy } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab']
 * })
 *
 * @category combinators
 * @since 2.5.0
 */
var groupBy = function (f) { return function (as) {
    var out = {};
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        var k = f(a);
        if (out.hasOwnProperty(k)) {
            out[k].push(a);
        }
        else {
            out[k] = [a];
        }
    }
    return out;
}; };
exports.groupBy = groupBy;
/**
 * @category combinators
 * @since 2.5.0
 */
var sort = function (O) { return function (as) {
    return as.length === 1 ? as : as.slice().sort(O.compare);
}; };
exports.sort = sort;
/**
 * @category combinators
 * @since 2.5.0
 */
var updateAt = function (i, a) {
    return exports.modifyAt(i, function () { return a; });
};
exports.updateAt = updateAt;
/**
 * @category combinators
 * @since 2.5.0
 */
var modifyAt = function (i, f) { return function (as) { return (exports.isOutOfBound(i, as) ? O.none : O.some(exports.unsafeUpdateAt(i, f(as[i]), as))); }; };
exports.modifyAt = modifyAt;
/**
 * @category combinators
 * @since 2.5.1
 */
var zipWith = function (as, bs, f) {
    var cs = [f(as[0], bs[0])];
    var len = Math.min(as.length, bs.length);
    for (var i = 1; i < len; i++) {
        cs[i] = f(as[i], bs[i]);
    }
    return cs;
};
exports.zipWith = zipWith;
function zip(as, bs) {
    if (bs === undefined) {
        return function (bs) { return zip(bs, as); };
    }
    return exports.zipWith(as, bs, function (a, b) { return [a, b]; });
}
exports.zip = zip;
/**
 * @category combinators
 * @since 2.5.1
 */
var unzip = function (abs) {
    var fa = [abs[0][0]];
    var fb = [abs[0][1]];
    for (var i = 1; i < abs.length; i++) {
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [fa, fb];
};
exports.unzip = unzip;
/**
 * Prepend an element to every member of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { prependAll } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.10.0
 */
var prependAll = function (middle) { return function (as) {
    var out = [middle, as[0]];
    for (var i = 1; i < as.length; i++) {
        out.push(middle, as[i]);
    }
    return out;
}; };
exports.prependAll = prependAll;
/**
 * Places an element in between members of a `ReadonlyNonEmptyArray`.
 *
 * @example
 * import { intersperse } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 *
 * @category combinators
 * @since 2.9.0
 */
var intersperse = function (middle) { return function (as) {
    var rest = exports.tail(as);
    return exports.isNonEmpty(rest) ? function_1.pipe(rest, exports.prependAll(middle), exports.prepend(exports.head(as))) : as;
}; };
exports.intersperse = intersperse;
/**
 * @category combinators
 * @since 2.10.0
 */
var chainWithIndex = function (f) { return function (as) {
    var out = _.fromReadonlyNonEmptyArray(f(0, exports.head(as)));
    for (var i = 1; i < as.length; i++) {
        out.push.apply(out, f(i, as[i]));
    }
    return out;
}; };
exports.chainWithIndex = chainWithIndex;
/**
 * A useful recursion pattern for processing a `ReadonlyNonEmptyArray` to produce a new `ReadonlyNonEmptyArray`, often used for "chopping" up the input
 * `ReadonlyNonEmptyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyNonEmptyArray` and produce a
 * value and the tail of the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */
var chop = function (f) { return function (as) {
    var _a = f(as), b = _a[0], rest = _a[1];
    var out = [b];
    var next = rest;
    while (exports.isNonEmpty(next)) {
        var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
        out.push(b_1);
        next = rest_2;
    }
    return out;
}; };
exports.chop = chop;
/**
 * Splits a `ReadonlyNonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category combinators
 * @since 2.10.0
 */
var splitAt = function (n) { return function (as) {
    var m = Math.max(1, n);
    return m >= as.length ? [as, exports.empty] : [function_1.pipe(as.slice(1, m), exports.prepend(exports.head(as))), as.slice(m)];
}; };
exports.splitAt = splitAt;
/**
 * Splits a `ReadonlyNonEmptyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `ReadonlyNonEmptyArray`.
 *
 * @category combinators
 * @since 2.10.0
 */
var chunksOf = function (n) { return exports.chop(exports.splitAt(n)); };
exports.chunksOf = chunksOf;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, exports.mapWithIndex(f)); };
var _ap = function (fab, fa) { return function_1.pipe(fab, exports.ap(fa)); };
var _chain = function (ma, f) { return function_1.pipe(ma, exports.chain(f)); };
/* istanbul ignore next */
var _extend = function (wa, f) { return function_1.pipe(wa, exports.extend(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = exports.traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _alt = function (fa, that) { return function_1.pipe(fa, exports.alt(that)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = exports.foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Pointed
 * @since 2.5.0
 */
var of = function (a) { return [a]; };
exports.of = of;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.9.0
 */
var altW = function (that) { return function (as) { return concat(as, that()); }; };
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 * @since 2.6.2
 */
exports.alt = exports.altW;
/**
 * @category Apply
 * @since 2.5.0
 */
var ap = function (as) { return exports.chain(function (f) { return function_1.pipe(as, exports.map(f)); }); };
exports.ap = ap;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.5.0
 */
var chain = function (f) { return exports.chainWithIndex(function (_, a) { return f(a); }); };
exports.chain = chain;
/**
 * @category Extend
 * @since 2.5.0
 */
var extend = function (f) { return function (as) {
    var next = exports.tail(as);
    var out = [f(as)];
    while (exports.isNonEmpty(next)) {
        out.push(f(next));
        next = exports.tail(next);
    }
    return out;
}; };
exports.extend = extend;
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.duplicate = 
/*#__PURE__*/
exports.extend(function_1.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.flatten = 
/*#__PURE__*/
exports.chain(function_1.identity);
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.5.0
 */
var map = function (f) {
    return exports.mapWithIndex(function (_, a) { return f(a); });
};
exports.map = map;
/**
 * @category FunctorWithIndex
 * @since 2.5.0
 */
var mapWithIndex = function (f) { return function (as) {
    var out = [f(0, exports.head(as))];
    for (var i = 1; i < as.length; i++) {
        out.push(f(i, as[i]));
    }
    return out;
}; };
exports.mapWithIndex = mapWithIndex;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) {
    return exports.reduceWithIndex(b, function (_, b, a) { return f(b, a); });
};
exports.reduce = reduce;
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function (S) { return function (f) { return function (as) {
    return as.slice(1).reduce(function (s, a) { return S.concat(s, f(a)); }, f(as[0]));
}; }; };
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) {
    return exports.reduceRightWithIndex(b, function (_, b, a) { return f(b, a); });
};
exports.reduceRight = reduceRight;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceWithIndex = function (b, f) { return function (as) {
    return as.reduce(function (b, a, i) { return f(i, b, a); }, b);
}; };
exports.reduceWithIndex = reduceWithIndex;
/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var foldMapWithIndex = function (S) { return function (f) { return function (as) { return as.slice(1).reduce(function (s, a, i) { return S.concat(s, f(i + 1, a)); }, f(0, as[0])); }; }; };
exports.foldMapWithIndex = foldMapWithIndex;
/**
 * @category FoldableWithIndex
 * @since 2.5.0
 */
var reduceRightWithIndex = function (b, f) { return function (as) { return as.reduceRight(function (b, a, i) { return f(i, a, b); }, b); }; };
exports.reduceRightWithIndex = reduceRightWithIndex;
/**
 * @category Traversable
 * @since 2.6.3
 */
var traverse = function (F) {
    var traverseWithIndexF = exports.traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
};
exports.traverse = traverse;
/**
 * @category Traversable
 * @since 2.6.3
 */
var sequence = function (F) { return exports.traverseWithIndex(F)(function (_, a) { return a; }); };
exports.sequence = sequence;
/**
 * @category TraversableWithIndex
 * @since 2.6.3
 */
var traverseWithIndex = function (F) { return function (f) { return function (as) {
    var out = F.map(f(0, exports.head(as)), exports.of);
    for (var i = 1; i < as.length; i++) {
        out = F.ap(F.map(out, function (bs) { return function (b) { return function_1.pipe(bs, exports.append(b)); }; }), f(i, as[i]));
    }
    return out;
}; }; };
exports.traverseWithIndex = traverseWithIndex;
/**
 * @category Comonad
 * @since 2.6.3
 */
var extract = function (as) { return as[0]; };
exports.extract = extract;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
exports.URI = 'ReadonlyNonEmptyArray';
/**
 * @category instances
 * @since 2.5.0
 */
var getShow = function (S) { return ({
    show: function (as) { return "[" + as.map(S.show).join(', ') + "]"; }
}); };
exports.getShow = getShow;
/**
 * Builds a `Semigroup` instance for `ReadonlyNonEmptyArray`
 *
 * @category instances
 * @since 2.5.0
 */
var getSemigroup = function () { return ({
    concat: concat
}); };
exports.getSemigroup = getSemigroup;
/**
 * @example
 * import { getEq } from 'fp-ts/ReadonlyNonEmptyArray'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 *
 * @category instances
 * @since 2.5.0
 */
var getEq = function (E) {
    return Eq_1.fromEquals(function (xs, ys) { return xs.length === ys.length && xs.every(function (x, i) { return E.equals(x, ys[i]); }); });
};
exports.getEq = getEq;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.10.0
 */
exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apFirst = 
/*#__PURE__*/
Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.apSecond = 
/*#__PURE__*/
Apply_1.apSecond(exports.Apply);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.5.0
 */
exports.chainFirst = 
/*#__PURE__*/
Chain_1.chainFirst(exports.Chain);
/**
 * @category instances
 * @since 2.7.0
 */
exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Comonad = {
    URI: exports.URI,
    map: _map,
    extend: _extend,
    extract: exports.extract
};
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */
exports.Do = 
/*#__PURE__*/
exports.of({});
/**
 * @since 2.8.0
 */
exports.bindTo = 
/*#__PURE__*/
Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */
exports.bind = 
/*#__PURE__*/
Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */
exports.apS = 
/*#__PURE__*/
Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.5.0
 */
exports.head = exports.extract;
/**
 * @since 2.5.0
 */
var tail = function (as) { return as.slice(1); };
exports.tail = tail;
/**
 * @since 2.5.0
 */
var last = function (as) { return as[as.length - 1]; };
exports.last = last;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.5.0
 */
var init = function (as) { return as.slice(0, -1); };
exports.init = init;
/**
 * @since 2.5.0
 */
var min = function (O) {
    var S = Se.min(O);
    return function (as) { return as.reduce(S.concat); };
};
exports.min = min;
/**
 * @since 2.5.0
 */
var max = function (O) {
    var S = Se.max(O);
    return function (as) { return as.reduce(S.concat); };
};
exports.max = max;
/**
 * @since 2.10.0
 */
var concatAll = function (S) { return function (as) { return as.reduce(S.concat); }; };
exports.concatAll = concatAll;
function filter(predicate) {
    // tslint:disable-next-line: deprecation
    return exports.filterWithIndex(function (_, a) { return predicate(a); });
}
exports.filter = filter;
/**
 * Use [`filterWithIndex`](./ReadonlyArray.ts.html#filterWithIndex) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
var filterWithIndex = function (predicate) { return function (as) { return exports.fromReadonlyArray(as.filter(function (a, i) { return predicate(i, a); })); }; };
exports.filterWithIndex = filterWithIndex;
/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */
exports.uncons = exports.unprepend;
/**
 * Use [`unappend`](#unappend) instead.
 *
 * @category destructors
 * @since 2.10.0
 * @deprecated
 */
exports.unsnoc = exports.unappend;
function cons(head, tail) {
    return tail === undefined ? exports.prepend(head) : function_1.pipe(tail, exports.prepend(head));
}
exports.cons = cons;
/**
 * Use [`append`](./ReadonlyArray.ts.html#append) instead.
 *
 * @category constructors
 * @since 2.5.0
 * @deprecated
 */
var snoc = function (init, end) { return concat(init, [end]); };
exports.snoc = snoc;
/**
 * Use [`insertAt`](./ReadonlyArray.ts.html#insertAt) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
var insertAt = function (i, a) { return function (as) {
    return i < 0 || i > as.length ? O.none : O.some(exports.unsafeInsertAt(i, a, as));
}; };
exports.insertAt = insertAt;
/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @category combinators
 * @since 2.9.0
 * @deprecated
 */
exports.prependToAll = exports.prependAll;
/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @since 2.5.0
 * @deprecated
 */
exports.fold = exports.concatAll;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
exports.readonlyNonEmptyArray = {
    URI: exports.URI,
    of: exports.of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: _chain,
    extend: _extend,
    extract: exports.extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyRecord.js":
/*!*********************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/ReadonlyRecord.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.elem = exports.some = exports.every = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.toRecord = exports.fromRecord = void 0;
exports.readonlyRecord = exports.hasOwnProperty = exports.insertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.FoldableWithIndex = exports.Foldable = exports.FunctorWithIndex = exports.flap = exports.Functor = void 0;
var Eq_1 = __webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Eq.js");
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
var _ = __importStar(__webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js"));
var O = __importStar(__webpack_require__(/*! ./Option */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Option.js"));
var Separated_1 = __webpack_require__(/*! ./Separated */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Separated.js");
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * @category interop
 * @since 2.5.0
 */
function fromRecord(r) {
    return Object.assign({}, r);
}
exports.fromRecord = fromRecord;
/**
 * @category interop
 * @since 2.5.0
 */
function toRecord(r) {
    return Object.assign({}, r);
}
exports.toRecord = toRecord;
/**
 * Calculate the number of key/value pairs in a `ReadonlyRecord`,
 *
 * @since 2.5.0
 */
var size = function (r) { return Object.keys(r).length; };
exports.size = size;
/**
 * Test whether a `ReadonlyRecord` is empty.
 *
 * @since 2.5.0
 */
var isEmpty = function (r) {
    for (var k in r) {
        if (_.has.call(r, k)) {
            return false;
        }
    }
    return true;
};
exports.isEmpty = isEmpty;
/**
 * @since 2.5.0
 */
var keys = function (r) {
    return Object.keys(r).sort();
};
exports.keys = keys;
/**
 * Map a `ReadonlyRecord` into an `ReadonlyArray`.
 *
 * @example
 * import { collect } from 'fp-ts/ReadonlyRecord'
 *
 * const x: { readonly a: string, readonly b: boolean } = { a: 'c', b: false }
 * assert.deepStrictEqual(
 *   collect((key, val) => ({ key: key, value: val }))(x),
 *   [{ key: 'a', value: 'c' }, { key: 'b', value: false }]
 * )
 *
 * @since 2.5.0
 */
var collect = function (f) { return function (r) {
    var out = [];
    for (var _i = 0, _a = exports.keys(r); _i < _a.length; _i++) {
        var key = _a[_i];
        out.push(f(key, r[key]));
    }
    return out;
}; };
exports.collect = collect;
/**
 * Get a sorted `ReadonlyArray` of the key/value pairs contained in a `ReadonlyRecord`.
 *
 * @since 2.5.0
 */
exports.toReadonlyArray = 
/*#__PURE__*/
exports.collect(function (k, a) { return [k, a]; });
function toUnfoldable(U) {
    return function (r) {
        var sas = exports.toReadonlyArray(r);
        var len = sas.length;
        return U.unfold(0, function (b) { return (b < len ? O.some([sas[b], b + 1]) : O.none); });
    };
}
exports.toUnfoldable = toUnfoldable;
/**
 * Insert or replace a key/value pair in a `ReadonlyRecord`.
 *
 * @category combinators
 * @since 2.10.0
 */
var upsertAt = function (k, a) { return function (r) {
    if (_.has.call(r, k) && r[k] === a) {
        return r;
    }
    var out = Object.assign({}, r);
    out[k] = a;
    return out;
}; };
exports.upsertAt = upsertAt;
/**
 * Test whether or not a key exists in a `ReadonlyRecord`.
 *
 * Note. This function is not pipeable because is a custom type guard.
 *
 * @since 2.10.0
 */
var has = function (k, r) { return _.has.call(r, k); };
exports.has = has;
function deleteAt(k) {
    return function (r) {
        if (!_.has.call(r, k)) {
            return r;
        }
        var out = Object.assign({}, r);
        delete out[k];
        return out;
    };
}
exports.deleteAt = deleteAt;
/**
 * @since 2.5.0
 */
var updateAt = function (k, a) { return function (r) {
    if (!exports.has(k, r)) {
        return O.none;
    }
    if (r[k] === a) {
        return O.some(r);
    }
    var out = Object.assign({}, r);
    out[k] = a;
    return O.some(out);
}; };
exports.updateAt = updateAt;
/**
 * @since 2.5.0
 */
var modifyAt = function (k, f) { return function (r) {
    if (!exports.has(k, r)) {
        return O.none;
    }
    var next = f(r[k]);
    if (next === r[k]) {
        return O.some(r);
    }
    var out = Object.assign({}, r);
    out[k] = next;
    return O.some(out);
}; };
exports.modifyAt = modifyAt;
function pop(k) {
    var deleteAtk = deleteAt(k);
    return function (r) {
        var oa = lookup(k, r);
        return O.isNone(oa) ? O.none : O.some([oa.value, deleteAtk(r)]);
    };
}
exports.pop = pop;
function isSubrecord(E) {
    return function (me, that) {
        if (that === undefined) {
            var isSubrecordE_1 = isSubrecord(E);
            return function (that) { return isSubrecordE_1(that, me); };
        }
        for (var k in me) {
            if (!_.has.call(that, k) || !E.equals(me[k], that[k])) {
                return false;
            }
        }
        return true;
    };
}
exports.isSubrecord = isSubrecord;
function lookup(k, r) {
    if (r === undefined) {
        return function (r) { return lookup(k, r); };
    }
    return _.has.call(r, k) ? O.some(r[k]) : O.none;
}
exports.lookup = lookup;
/**
 * @since 2.5.0
 */
exports.empty = {};
function mapWithIndex(f) {
    return function (r) {
        var out = {};
        for (var k in r) {
            if (_.has.call(r, k)) {
                out[k] = f(k, r[k]);
            }
        }
        return out;
    };
}
exports.mapWithIndex = mapWithIndex;
function map(f) {
    return mapWithIndex(function (_, a) { return f(a); });
}
exports.map = map;
function reduceWithIndex(b, f) {
    return function (fa) {
        var out = b;
        var ks = exports.keys(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
            var k = ks[i];
            out = f(k, out, fa[k]);
        }
        return out;
    };
}
exports.reduceWithIndex = reduceWithIndex;
function foldMapWithIndex(M) {
    return function (f) { return function (fa) {
        var out = M.empty;
        var ks = exports.keys(fa);
        var len = ks.length;
        for (var i = 0; i < len; i++) {
            var k = ks[i];
            out = M.concat(out, f(k, fa[k]));
        }
        return out;
    }; };
}
exports.foldMapWithIndex = foldMapWithIndex;
function reduceRightWithIndex(b, f) {
    return function (fa) {
        var out = b;
        var ks = exports.keys(fa);
        var len = ks.length;
        for (var i = len - 1; i >= 0; i--) {
            var k = ks[i];
            out = f(k, fa[k], out);
        }
        return out;
    };
}
exports.reduceRightWithIndex = reduceRightWithIndex;
/**
 * Create a `ReadonlyRecord` with one key/value pair.
 *
 * @category constructors
 * @since 2.5.0
 */
var singleton = function (k, a) {
    var _a;
    return (_a = {}, _a[k] = a, _a);
};
exports.singleton = singleton;
function traverseWithIndex(F) {
    return function (f) { return function (ta) {
        var ks = exports.keys(ta);
        if (ks.length === 0) {
            return F.of(exports.empty);
        }
        var fr = F.of({});
        var _loop_1 = function (key) {
            fr = F.ap(F.map(fr, function (r) { return function (b) {
                r[key] = b;
                return r;
            }; }), f(key, ta[key]));
        };
        for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
            var key = ks_1[_i];
            _loop_1(key);
        }
        return fr;
    }; };
}
exports.traverseWithIndex = traverseWithIndex;
function traverse(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (f) { return traverseWithIndexF(function (_, a) { return f(a); }); };
}
exports.traverse = traverse;
function sequence(F) {
    return traverseWithIndex(F)(function (_, a) { return a; });
}
exports.sequence = sequence;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wither = function (F) {
    var traverseF = traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.compact); }; };
};
exports.wither = wither;
/**
 * @category Witherable
 * @since 2.6.5
 */
var wilt = function (F) {
    var traverseF = traverse(F);
    return function (f) { return function (fa) { return F.map(function_1.pipe(fa, traverseF(f)), exports.separate); }; };
};
exports.wilt = wilt;
function partitionMapWithIndex(f) {
    return function (r) {
        var left = {};
        var right = {};
        for (var k in r) {
            if (_.has.call(r, k)) {
                var e = f(k, r[k]);
                switch (e._tag) {
                    case 'Left':
                        left[k] = e.left;
                        break;
                    case 'Right':
                        right[k] = e.right;
                        break;
                }
            }
        }
        return Separated_1.separated(left, right);
    };
}
exports.partitionMapWithIndex = partitionMapWithIndex;
function partitionWithIndex(predicateWithIndex) {
    return function (r) {
        var left = {};
        var right = {};
        for (var k in r) {
            if (_.has.call(r, k)) {
                var a = r[k];
                if (predicateWithIndex(k, a)) {
                    right[k] = a;
                }
                else {
                    left[k] = a;
                }
            }
        }
        return Separated_1.separated(left, right);
    };
}
exports.partitionWithIndex = partitionWithIndex;
function filterMapWithIndex(f) {
    return function (r) {
        var out = {};
        for (var k in r) {
            if (_.has.call(r, k)) {
                var ob = f(k, r[k]);
                if (_.isSome(ob)) {
                    out[k] = ob.value;
                }
            }
        }
        return out;
    };
}
exports.filterMapWithIndex = filterMapWithIndex;
function filterWithIndex(predicateWithIndex) {
    return function (fa) {
        var out = {};
        var changed = false;
        for (var key in fa) {
            if (_.has.call(fa, key)) {
                var a = fa[key];
                if (predicateWithIndex(key, a)) {
                    out[key] = a;
                }
                else {
                    changed = true;
                }
            }
        }
        return changed ? out : fa;
    };
}
exports.filterWithIndex = filterWithIndex;
function fromFoldable(M, F) {
    var fromFoldableMapM = fromFoldableMap(M, F);
    return function (fka) { return fromFoldableMapM(fka, function_1.identity); };
}
exports.fromFoldable = fromFoldable;
function fromFoldableMap(M, F) {
    return function (ta, f) {
        return F.reduce(ta, {}, function (r, a) {
            var _a = f(a), k = _a[0], b = _a[1];
            r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b;
            return r;
        });
    };
}
exports.fromFoldableMap = fromFoldableMap;
/**
 * @since 2.5.0
 */
function every(predicate) {
    return function (r) {
        for (var k in r) {
            if (!predicate(r[k])) {
                return false;
            }
        }
        return true;
    };
}
exports.every = every;
/**
 * @since 2.5.0
 */
function some(predicate) {
    return function (r) {
        for (var k in r) {
            if (predicate(r[k])) {
                return true;
            }
        }
        return false;
    };
}
exports.some = some;
function elem(E) {
    return function (a, fa) {
        if (fa === undefined) {
            var elemE_1 = elem(E);
            return function (fa) { return elemE_1(a, fa); };
        }
        for (var k in fa) {
            if (E.equals(fa[k], a)) {
                return true;
            }
        }
        return false;
    };
}
exports.elem = elem;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, map(f)); };
/* istanbul ignore next */
var _mapWithIndex = function (fa, f) { return function_1.pipe(fa, mapWithIndex(f)); };
/* istanbul ignore next */
var _reduce = function (fa, b, f) { return function_1.pipe(fa, exports.reduce(b, f)); };
/* istanbul ignore next */
var _foldMap = function (M) {
    var foldMapM = exports.foldMap(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapM(f)); };
};
/* istanbul ignore next */
var _reduceRight = function (fa, b, f) { return function_1.pipe(fa, exports.reduceRight(b, f)); };
/* istanbul ignore next */
var _traverse = function (F) {
    var traverseF = traverse(F);
    return function (ta, f) { return function_1.pipe(ta, traverseF(f)); };
};
/* istanbul ignore next */
var _filter = function (fa, predicate) {
    return function_1.pipe(fa, exports.filter(predicate));
};
/* istanbul ignore next */
var _filterMap = function (fa, f) { return function_1.pipe(fa, exports.filterMap(f)); };
/* istanbul ignore next */
var _partition = function (fa, predicate) { return function_1.pipe(fa, exports.partition(predicate)); };
/* istanbul ignore next */
var _partitionMap = function (fa, f) { return function_1.pipe(fa, exports.partitionMap(f)); };
/* istanbul ignore next */
var _reduceWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, reduceWithIndex(b, f));
};
/* istanbul ignore next */
var _foldMapWithIndex = function (M) {
    var foldMapWithIndexM = foldMapWithIndex(M);
    return function (fa, f) { return function_1.pipe(fa, foldMapWithIndexM(f)); };
};
/* istanbul ignore next */
var _reduceRightWithIndex = function (fa, b, f) {
    return function_1.pipe(fa, reduceRightWithIndex(b, f));
};
/* istanbul ignore next */
var _partitionMapWithIndex = function (fa, f) { return function_1.pipe(fa, partitionMapWithIndex(f)); };
/* istanbul ignore next */
var _partitionWithIndex = function (fa, predicateWithIndex) {
    return function_1.pipe(fa, partitionWithIndex(predicateWithIndex));
};
/* istanbul ignore next */
var _filterMapWithIndex = function (fa, f) {
    return function_1.pipe(fa, filterMapWithIndex(f));
};
/* istanbul ignore next */
var _filterWithIndex = function (fa, predicateWithIndex) {
    return function_1.pipe(fa, filterWithIndex(predicateWithIndex));
};
/* istanbul ignore next */
var _traverseWithIndex = function (F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta, f) { return function_1.pipe(ta, traverseWithIndexF(f)); };
};
/* istanbul ignore next */
var _wither = function (F) {
    var witherF = exports.wither(F);
    return function (fa, f) { return function_1.pipe(fa, witherF(f)); };
};
/* istanbul ignore next */
var _wilt = function (F) {
    var wiltF = exports.wilt(F);
    return function (fa, f) { return function_1.pipe(fa, wiltF(f)); };
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Filterable
 * @since 2.5.0
 */
var filter = function (predicate) {
    return filterWithIndex(function (_, a) { return predicate(a); });
};
exports.filter = filter;
/**
 * @category Filterable
 * @since 2.5.0
 */
var filterMap = function (f) { return filterMapWithIndex(function (_, a) { return f(a); }); };
exports.filterMap = filterMap;
/**
 * @category Filterable
 * @since 2.5.0
 */
var partition = function (predicate) {
    return partitionWithIndex(function (_, a) { return predicate(a); });
};
exports.partition = partition;
/**
 * @category Filterable
 * @since 2.5.0
 */
var partitionMap = function (f) {
    return partitionMapWithIndex(function (_, a) { return f(a); });
};
exports.partitionMap = partitionMap;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduce = function (b, f) {
    return reduceWithIndex(b, function (_, b, a) { return f(b, a); });
};
exports.reduce = reduce;
/**
 * @category Foldable
 * @since 2.5.0
 */
var foldMap = function (M) {
    var foldMapWithIndexM = foldMapWithIndex(M);
    return function (f) { return foldMapWithIndexM(function (_, a) { return f(a); }); };
};
exports.foldMap = foldMap;
/**
 * @category Foldable
 * @since 2.5.0
 */
var reduceRight = function (b, f) {
    return reduceRightWithIndex(b, function (_, a, b) { return f(a, b); });
};
exports.reduceRight = reduceRight;
/**
 * @category Compactable
 * @since 2.5.0
 */
var compact = function (r) {
    var out = {};
    for (var k in r) {
        if (_.has.call(r, k)) {
            var oa = r[k];
            if (_.isSome(oa)) {
                out[k] = oa.value;
            }
        }
    }
    return out;
};
exports.compact = compact;
/**
 * @category Compactable
 * @since 2.5.0
 */
var separate = function (r) {
    var left = {};
    var right = {};
    for (var k in r) {
        if (_.has.call(r, k)) {
            var e = r[k];
            if (_.isLeft(e)) {
                left[k] = e.left;
            }
            else {
                right[k] = e.right;
            }
        }
    }
    return Separated_1.separated(left, right);
};
exports.separate = separate;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.5.0
 */
exports.URI = 'ReadonlyRecord';
/**
 * @category instances
 * @since 2.5.0
 */
function getShow(S) {
    return {
        show: function (r) {
            var elements = exports.collect(function (k, a) { return JSON.stringify(k) + ": " + S.show(a); })(r).join(', ');
            return elements === '' ? '{}' : "{ " + elements + " }";
        }
    };
}
exports.getShow = getShow;
function getEq(E) {
    var isSubrecordE = isSubrecord(E);
    return Eq_1.fromEquals(function (x, y) { return isSubrecordE(x)(y) && isSubrecordE(y)(x); });
}
exports.getEq = getEq;
function getMonoid(S) {
    return {
        concat: function (first, second) {
            if (exports.isEmpty(first)) {
                return second;
            }
            if (exports.isEmpty(second)) {
                return first;
            }
            var r = Object.assign({}, first);
            for (var k in second) {
                if (_.has.call(second, k)) {
                    r[k] = _.has.call(first, k) ? S.concat(first[k], second[k]) : second[k];
                }
            }
            return r;
        },
        empty: exports.empty
    };
}
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
/**
 * @category instances
 * @since 2.7.0
 */
exports.FunctorWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FoldableWithIndex = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.FilterableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.TraversableWithIndex = {
    URI: exports.URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence: sequence,
    traverseWithIndex: _traverseWithIndex
};
/**
 * @category instances
 * @since 2.7.0
 */
exports.Witherable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
exports.insertAt = exports.upsertAt;
function hasOwnProperty(k, r) {
    return _.has.call(r === undefined ? this : r, k);
}
exports.hasOwnProperty = hasOwnProperty;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.5.0
 * @deprecated
 */
exports.readonlyRecord = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    traverseWithIndex: _traverseWithIndex,
    wither: _wither,
    wilt: _wilt
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Semigroup.js":
/*!****************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Semigroup.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.semigroupProduct = exports.semigroupSum = exports.semigroupString = exports.getFunctionSemigroup = exports.semigroupAny = exports.semigroupAll = exports.fold = exports.getIntercalateSemigroup = exports.getMeetSemigroup = exports.getJoinSemigroup = exports.getDualSemigroup = exports.getStructSemigroup = exports.getTupleSemigroup = exports.getFirstSemigroup = exports.getLastSemigroup = exports.getObjectSemigroup = exports.concatAll = exports.semigroupVoid = exports.last = exports.first = exports.intercalate = exports.tuple = exports.struct = exports.reverse = exports.constant = exports.max = exports.min = void 0;
/**
 * If a type `A` can form a `Semigroup` it has an **associative** binary operation.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 * ```
 *
 * Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.
 *
 * ```ts
 * concat(x, concat(y, z)) = concat(concat(x, y), z)
 * ```
 *
 * A common example of a semigroup is the type `string` with the operation `+`.
 *
 * ```ts
 * import { Semigroup } from 'fp-ts/Semigroup'
 *
 * const semigroupString: Semigroup<string> = {
 *   concat: (x, y) => x + y
 * }
 *
 * const x = 'x'
 * const y = 'y'
 * const z = 'z'
 *
 * semigroupString.concat(x, y) // 'xy'
 *
 * semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'
 *
 * semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
 * ```
 *
 * *Adapted from https://typelevel.org/cats*
 *
 * @since 2.0.0
 */
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var _ = __importStar(__webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js"));
var Or = __importStar(__webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Get a semigroup where `concat` will return the minimum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.min(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */
var min = function (O) { return ({
    concat: Or.min(O)
}); };
exports.min = min;
/**
 * Get a semigroup where `concat` will return the maximum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.max(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */
var max = function (O) { return ({
    concat: Or.max(O)
}); };
exports.max = max;
/**
 * @category constructors
 * @since 2.10.0
 */
var constant = function (a) { return ({
    concat: function () { return a; }
}); };
exports.constant = constant;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Semigroup`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Semigroup).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function (S) { return ({
    concat: function (x, y) { return S.concat(y, x); }
}); };
exports.reverse = reverse;
/**
 * Given a struct of semigroups returns a semigroup for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const S = struct<Point>({
 *   x: N.SemigroupSum,
 *   y: N.SemigroupSum
 * })
 *
 * assert.deepStrictEqual(S.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */
var struct = function (semigroups) { return ({
    concat: function (first, second) {
        var r = {};
        for (var k in semigroups) {
            if (_.has.call(semigroups, k)) {
                r[k] = semigroups[k].concat(first[k], second[k]);
            }
        }
        return r;
    }
}); };
exports.struct = struct;
/**
 * Given a tuple of semigroups returns a semigroup for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Semigroup'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const S1 = tuple(S.Semigroup, N.SemigroupSum)
 * assert.deepStrictEqual(S1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const S2 = tuple(S.Semigroup, N.SemigroupSum, B.SemigroupAll)
 * assert.deepStrictEqual(S2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var semigroups = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        semigroups[_i] = arguments[_i];
    }
    return ({
        concat: function (first, second) { return semigroups.map(function (s, i) { return s.concat(first[i], second[i]); }); }
    });
};
exports.tuple = tuple;
/**
 * Between each pair of elements insert `middle`.
 *
 * @example
 * import { intercalate } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * const S1 = pipe(S.Semigroup, intercalate(' + '))
 *
 * assert.strictEqual(S1.concat('a', 'b'), 'a + b')
 *
 * @category combinators
 * @since 2.10.0
 */
var intercalate = function (middle) { return function (S) { return ({
    concat: function (x, y) { return S.concat(x, S.concat(middle, y)); }
}); }; };
exports.intercalate = intercalate;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * Always return the first argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.first<number>().concat(1, 2), 1)
 *
 * @category instances
 * @since 2.10.0
 */
var first = function () { return ({ concat: function_1.identity }); };
exports.first = first;
/**
 * Always return the last argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.last<number>().concat(1, 2), 2)
 *
 * @category instances
 * @since 2.10.0
 */
var last = function () { return ({ concat: function (_, y) { return y; } }); };
exports.last = last;
/**
 * @category instances
 * @since 2.0.0
 */
exports.semigroupVoid = exports.constant(undefined);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the provided `startWith` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * const sum = concatAll(N.SemigroupSum)(0)
 *
 * assert.deepStrictEqual(sum([1, 2, 3]), 6)
 * assert.deepStrictEqual(sum([]), 0)
 *
 * @since 2.10.0
 */
var concatAll = function (S) { return function (startWith) { return function (as) {
    return as.reduce(S.concat, startWith);
}; }; };
exports.concatAll = concatAll;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`getAssignSemigroup`](./struct.ts.html#getAssignSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var getObjectSemigroup = function () { return ({
    concat: function (first, second) { return Object.assign({}, first, second); }
}); };
exports.getObjectSemigroup = getObjectSemigroup;
/**
 * Use [`last`](#last) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getLastSemigroup = exports.last;
/**
 * Use [`first`](#first) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFirstSemigroup = exports.first;
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleSemigroup = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getStructSemigroup = exports.struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getDualSemigroup = exports.reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
exports.getJoinSemigroup = exports.max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */
exports.getMeetSemigroup = exports.min;
/**
 * Use [`intercalate`](#intercalate) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */
exports.getIntercalateSemigroup = exports.intercalate;
function fold(S) {
    var concatAllS = exports.concatAll(S);
    return function (startWith, as) { return (as === undefined ? concatAllS(startWith) : concatAllS(startWith)(as)); };
}
exports.fold = fold;
/**
 * Use [`SemigroupAll`](./boolean.ts.html#SemigroupAll) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupAll = {
    concat: function (x, y) { return x && y; }
};
/**
 * Use [`SemigroupAny`](./boolean.ts.html#SemigroupAny) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupAny = {
    concat: function (x, y) { return x || y; }
};
/**
 * Use [`getSemigroup`](./function.ts.html#getSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.getFunctionSemigroup = function_1.getSemigroup;
/**
 * Use [`Semigroup`](./string.ts.html#Semigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupString = {
    concat: function (x, y) { return x + y; }
};
/**
 * Use [`SemigroupSum`](./number.ts.html#SemigroupSum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupSum = {
    concat: function (x, y) { return x + y; }
};
/**
 * Use [`SemigroupProduct`](./number.ts.html#SemigroupProduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.semigroupProduct = {
    concat: function (x, y) { return x * y; }
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Separated.js":
/*!****************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Separated.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * ```ts
 * interface Separated<E, A> {
 *    readonly left: E
 *    readonly right: A
 * }
 * ```
 *
 * Represents a result of separating a whole into two parts.
 *
 * @since 2.10.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = void 0;
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var Functor_1 = __webpack_require__(/*! ./Functor */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Functor.js");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.10.0
 */
var separated = function (left, right) { return ({ left: left, right: right }); };
exports.separated = separated;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return function_1.pipe(fa, exports.map(f)); };
var _mapLeft = function (fa, f) { return function_1.pipe(fa, exports.mapLeft(f)); };
var _bimap = function (fa, g, f) { return function_1.pipe(fa, exports.bimap(g, f)); };
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.10.0
 */
var map = function (f) { return function (fa) {
    return exports.separated(exports.left(fa), f(exports.right(fa)));
}; };
exports.map = map;
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */
var mapLeft = function (f) { return function (fa) {
    return exports.separated(f(exports.left(fa)), exports.right(fa));
}; };
exports.mapLeft = mapLeft;
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */
var bimap = function (f, g) { return function (fa) {
    return exports.separated(f(exports.left(fa)), g(exports.right(fa)));
}; };
exports.bimap = bimap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
exports.URI = 'Separated';
/**
 * @category instances
 * @since 2.10.0
 */
exports.Bifunctor = {
    URI: exports.URI,
    mapLeft: _mapLeft,
    bimap: _bimap
};
/**
 * @category instances
 * @since 2.10.0
 */
exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */
exports.flap = 
/*#_PURE_*/
Functor_1.flap(exports.Functor);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.10.0
 */
var left = function (s) { return s.left; };
exports.left = left;
/**
 * @since 2.10.0
 */
var right = function (s) { return s.right; };
exports.right = right;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Show.js":
/*!***********************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Show.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showNumber = exports.showString = exports.showBoolean = exports.getStructShow = exports.getTupleShow = exports.tuple = exports.struct = void 0;
/**
 * The `Show` type class represents those types which can be converted into
 * a human-readable `string` representation.
 *
 * While not required, it is recommended that for any expression `x`, the
 * string `show(x)` be executable TypeScript code which evaluates to the same
 * value as the expression `x`.
 *
 * @since 2.0.0
 */
var _ = __importStar(__webpack_require__(/*! ./internal */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js"));
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */
var struct = function (shows) { return ({
    show: function (a) {
        var s = '{';
        for (var k in shows) {
            if (_.has.call(shows, k)) {
                s += " " + k + ": " + shows[k].show(a[k]) + ",";
            }
        }
        if (s.length > 1) {
            s = s.slice(0, -1) + ' ';
        }
        s += '}';
        return s;
    }
}); };
exports.struct = struct;
/**
 * @category combinators
 * @since 2.10.0
 */
var tuple = function () {
    var shows = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        shows[_i] = arguments[_i];
    }
    return ({
        show: function (t) { return "[" + t.map(function (a, i) { return shows[i].show(a); }).join(', ') + "]"; }
    });
};
exports.tuple = tuple;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getTupleShow = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */
exports.getStructShow = exports.struct;
/**
 * Use [`Show`](./boolean.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.showBoolean = {
    show: function (a) { return JSON.stringify(a); }
};
/**
 * Use [`Show`](./string.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.showString = {
    show: function (a) { return JSON.stringify(a); }
};
/**
 * Use [`Show`](./number.ts.html#Show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
exports.showNumber = {
    show: function (a) { return JSON.stringify(a); }
};


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/boolean.js":
/*!**************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/boolean.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Show = exports.Ord = exports.MonoidAny = exports.MonoidAll = exports.SemigroupAny = exports.SemigroupAll = exports.BooleanAlgebra = exports.Eq = exports.fold = exports.match = exports.foldW = exports.matchW = void 0;
/**
 * @since 2.2.0
 */
var BA = __importStar(__webpack_require__(/*! ./BooleanAlgebra */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/BooleanAlgebra.js"));
var E = __importStar(__webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Eq.js"));
var Semigroup_1 = __webpack_require__(/*! ./Semigroup */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Semigroup.js");
var Monoid_1 = __webpack_require__(/*! ./Monoid */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Monoid.js");
var O = __importStar(__webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js"));
var S = __importStar(__webpack_require__(/*! ./Show */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Show.js"));
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onFalse, onTrue) { return function (value) {
    return value ? onTrue() : onFalse();
}; };
exports.matchW = matchW;
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */
exports.foldW = exports.matchW;
/**
 * Defines the fold over a boolean value.
 * Takes two thunks `onTrue`, `onFalse` and a `boolean` value.
 * If `value` is false, `onFalse()` is returned, otherwise `onTrue()`.
 *
 * @example
 * import { some, map } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 * import { match } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(
 *  pipe(
 *    some(true),
 *    map(match(() => 'false', () => 'true'))
 *  ),
 *  some('true')
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
exports.match = exports.foldW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.2.0
 */
exports.fold = exports.match;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Eq = E.eqBoolean;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.BooleanAlgebra = BA.booleanAlgebraBoolean;
/**
 * `boolean` semigroup under conjunction.
 *
 * @example
 * import { SemigroupAll } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(SemigroupAll.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAll.concat(true, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.SemigroupAll = Semigroup_1.semigroupAll;
/**
 * `boolean` semigroup under disjunction.
 *
 * @example
 * import { SemigroupAny } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(SemigroupAny.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAny.concat(true, false), true)
 * assert.deepStrictEqual(SemigroupAny.concat(false, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.SemigroupAny = Semigroup_1.semigroupAny;
/**
 * `boolean` monoid under conjunction.
 *
 * The `empty` value is `true`.
 *
 * @example
 * import { MonoidAll } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(MonoidAll.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAll.concat(true, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.MonoidAll = Monoid_1.monoidAll;
/**
 * `boolean` monoid under disjunction.
 *
 * The `empty` value is `false`.
 *
 * @example
 * import { MonoidAny } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(MonoidAny.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAny.concat(true, false), true)
 * assert.deepStrictEqual(MonoidAny.concat(false, false), false)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.MonoidAny = Monoid_1.monoidAny;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Ord = O.ordBoolean;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Show = S.showBoolean;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.not = exports.unsafeCoerce = exports.identity = exports.getEndomorphismMonoid = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
var getBooleanAlgebra = function (B) { return function () { return ({
    meet: function (x, y) { return function (a) { return B.meet(x(a), y(a)); }; },
    join: function (x, y) { return function (a) { return B.join(x(a), y(a)); }; },
    zero: function () { return B.zero; },
    one: function () { return B.one; },
    implies: function (x, y) { return function (a) { return B.implies(x(a), y(a)); }; },
    not: function (x) { return function (a) { return B.not(x(a)); }; }
}); }; };
exports.getBooleanAlgebra = getBooleanAlgebra;
/**
 * Unary functions form a semigroup as long as you can provide a semigroup for the codomain.
 *
 * @example
 * import { Predicate, getSemigroup } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const S1 = getSemigroup(B.SemigroupAll)<number>()
 *
 * assert.deepStrictEqual(S1.concat(f, g)(1), true)
 * assert.deepStrictEqual(S1.concat(f, g)(3), false)
 *
 * const S2 = getSemigroup(B.SemigroupAny)<number>()
 *
 * assert.deepStrictEqual(S2.concat(f, g)(1), true)
 * assert.deepStrictEqual(S2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function (S) { return function () { return ({
    concat: function (f, g) { return function (a) { return S.concat(f(a), g(a)); }; }
}); }; };
exports.getSemigroup = getSemigroup;
/**
 * Unary functions form a monoid as long as you can provide a monoid for the codomain.
 *
 * @example
 * import { Predicate, getMonoid } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const M1 = getMonoid(B.MonoidAll)<number>()
 *
 * assert.deepStrictEqual(M1.concat(f, g)(1), true)
 * assert.deepStrictEqual(M1.concat(f, g)(3), false)
 *
 * const M2 = getMonoid(B.MonoidAny)<number>()
 *
 * assert.deepStrictEqual(M2.concat(f, g)(1), true)
 * assert.deepStrictEqual(M2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */
var getMonoid = function (M) {
    var getSemigroupM = exports.getSemigroup(M);
    return function () { return ({
        concat: getSemigroupM().concat,
        empty: function () { return M.empty; }
    }); };
};
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.10.0
 */
var getSemiring = function (S) { return ({
    add: function (f, g) { return function (x) { return S.add(f(x), g(x)); }; },
    zero: function () { return S.zero; },
    mul: function (f, g) { return function (x) { return S.mul(f(x), g(x)); }; },
    one: function () { return S.one; }
}); };
exports.getSemiring = getSemiring;
/**
 * @category instances
 * @since 2.10.0
 */
var getRing = function (R) {
    var S = exports.getSemiring(R);
    return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: function (f, g) { return function (x) { return R.sub(f(x), g(x)); }; }
    };
};
exports.getRing = getRing;
/**
 * Endomorphism form a monoid where the `empty` value is the identity function.
 *
 * @category instances
 * @since 2.10.0
 */
var getEndomorphismMonoid = function () { return ({
    concat: function (x, y) { return function (a) { return y(x(a)); }; },
    empty: identity
}); };
exports.getEndomorphismMonoid = getEndomorphismMonoid;
/**
 * @since 2.0.0
 */
function identity(a) {
    return a;
}
exports.identity = identity;
/**
 * @since 2.0.0
 */
exports.unsafeCoerce = identity;
/**
 * @since 2.0.0
 */
function not(predicate) {
    return function (a) { return !predicate(a); };
}
exports.not = not;
/**
 * @since 2.0.0
 */
function constant(a) {
    return function () { return a; };
}
exports.constant = constant;
/**
 * A thunk that returns always `true`.
 *
 * @since 2.0.0
 */
exports.constTrue = 
/*#__PURE__*/
constant(true);
/**
 * A thunk that returns always `false`.
 *
 * @since 2.0.0
 */
exports.constFalse = 
/*#__PURE__*/
constant(false);
/**
 * A thunk that returns always `null`.
 *
 * @since 2.0.0
 */
exports.constNull = 
/*#__PURE__*/
constant(null);
/**
 * A thunk that returns always `undefined`.
 *
 * @since 2.0.0
 */
exports.constUndefined = 
/*#__PURE__*/
constant(undefined);
/**
 * A thunk that returns always `void`.
 *
 * @since 2.0.0
 */
exports.constVoid = exports.constUndefined;
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */
function flip(f) {
    return function (b, a) { return f(a, b); };
}
exports.flip = flip;
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab;
        case 2:
            return function () {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
exports.flow = flow;
/**
 * @since 2.0.0
 */
function tuple() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return t;
}
exports.tuple = tuple;
/**
 * @since 2.0.0
 */
function increment(n) {
    return n + 1;
}
exports.increment = increment;
/**
 * @since 2.0.0
 */
function decrement(n) {
    return n - 1;
}
exports.decrement = decrement;
/**
 * @since 2.0.0
 */
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
exports.absurd = absurd;
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */
function tupled(f) {
    return function (a) { return f.apply(void 0, a); };
}
exports.tupled = tupled;
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */
function untupled(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return f(a);
    };
}
exports.untupled = untupled;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st) {
    switch (arguments.length) {
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        case 10:
            return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
        case 11:
            return jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))));
        case 12:
            return kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))));
        case 13:
            return lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))));
        case 14:
            return mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))));
        case 15:
            return no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))));
        case 16:
            return op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))));
        case 17:
            return pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))));
        case 18:
            return qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))));
        case 19:
            return rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))))));
        case 20:
            return st(rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))))));
    }
    return;
}
exports.pipe = pipe;
/**
 * Type hole simulation
 *
 * @since 2.7.0
 */
exports.hole = absurd;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/internal.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromReadonlyNonEmptyArray = exports.has = exports.isLeft = exports.isSome = void 0;
// -------------------------------------------------------------------------------------
// Option
// -------------------------------------------------------------------------------------
/** @internal */
var isSome = function (fa) { return fa._tag === 'Some'; };
exports.isSome = isSome;
// -------------------------------------------------------------------------------------
// Either
// -------------------------------------------------------------------------------------
/** @internal */
var isLeft = function (ma) { return ma._tag === 'Left'; };
exports.isLeft = isLeft;
// -------------------------------------------------------------------------------------
// Record
// -------------------------------------------------------------------------------------
/** @internal */
exports.has = Object.prototype.hasOwnProperty;
// -------------------------------------------------------------------------------------
// NonEmptyArray
// -------------------------------------------------------------------------------------
/** @internal */
var fromReadonlyNonEmptyArray = function (as) { return __spreadArray([as[0]], as.slice(1)); };
exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/number.js":
/*!*************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/number.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonoidProduct = exports.MonoidSum = exports.SemigroupProduct = exports.SemigroupSum = exports.Show = exports.Field = exports.Bounded = exports.Ord = exports.Eq = void 0;
/**
 * @since 2.10.0
 */
var B = __importStar(__webpack_require__(/*! ./Bounded */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Bounded.js"));
var E = __importStar(__webpack_require__(/*! ./Eq */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Eq.js"));
var F = __importStar(__webpack_require__(/*! ./Field */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Field.js"));
var O = __importStar(__webpack_require__(/*! ./Ord */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Ord.js"));
var S = __importStar(__webpack_require__(/*! ./Show */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Show.js"));
var Semigroup_1 = __webpack_require__(/*! ./Semigroup */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Semigroup.js");
var Monoid_1 = __webpack_require__(/*! ./Monoid */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/Monoid.js");
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Eq = E.eqNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Ord = O.ordNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Bounded = B.boundedNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Field = F.fieldNumber;
/**
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.Show = S.showNumber;
/**
 * `number` semigroup under addition.
 *
 * @example
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(SemigroupSum.concat(2, 3), 5)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.SemigroupSum = Semigroup_1.semigroupSum;
/**
 * `number` semigroup under multiplication.
 *
 * @example
 * import { SemigroupProduct } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(SemigroupProduct.concat(2, 3), 6)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.SemigroupProduct = Semigroup_1.semigroupProduct;
/**
 * `number` monoid under addition.
 *
 * The `empty` value is `0`.
 *
 * @example
 * import { MonoidSum } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(MonoidSum.concat(2, MonoidSum.empty), 2)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.MonoidSum = Monoid_1.monoidSum;
/**
 * `number` monoid under multiplication.
 *
 * The `empty` value is `1`.
 *
 * @example
 * import { MonoidProduct } from 'fp-ts/number'
 *
 * assert.deepStrictEqual(MonoidProduct.concat(2, MonoidProduct.empty), 2)
 *
 * @category instances
 * @since 2.10.0
 */
// tslint:disable-next-line: deprecation
exports.MonoidProduct = Monoid_1.monoidProduct;


/***/ }),

/***/ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/pipeable.js":
/*!***************************************************************************************************!*\
  !*** ./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/pipeable.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pipe = exports.pipeable = void 0;
var function_1 = __webpack_require__(/*! ./function */ "./.yarn/cache/fp-ts-npm-2.10.5-3ae9fe0386-7a5fd244e8.zip/node_modules/fp-ts/lib/function.js");
var isFunctor = function (I) { return typeof I.map === 'function'; };
var isContravariant = function (I) { return typeof I.contramap === 'function'; };
var isFunctorWithIndex = function (I) { return typeof I.mapWithIndex === 'function'; };
var isApply = function (I) { return typeof I.ap === 'function'; };
var isChain = function (I) { return typeof I.chain === 'function'; };
var isBifunctor = function (I) { return typeof I.bimap === 'function'; };
var isExtend = function (I) { return typeof I.extend === 'function'; };
var isFoldable = function (I) { return typeof I.reduce === 'function'; };
var isFoldableWithIndex = function (I) { return typeof I.reduceWithIndex === 'function'; };
var isAlt = function (I) { return typeof I.alt === 'function'; };
var isCompactable = function (I) { return typeof I.compact === 'function'; };
var isFilterable = function (I) { return typeof I.filter === 'function'; };
var isFilterableWithIndex = function (I) {
    return typeof I.filterWithIndex === 'function';
};
var isProfunctor = function (I) { return typeof I.promap === 'function'; };
var isSemigroupoid = function (I) { return typeof I.compose === 'function'; };
var isMonadThrow = function (I) { return typeof I.throwError === 'function'; };
/** @deprecated */
function pipeable(I) {
    var r = {};
    if (isFunctor(I)) {
        var map = function (f) { return function (fa) { return I.map(fa, f); }; };
        r.map = map;
    }
    if (isContravariant(I)) {
        var contramap = function (f) { return function (fa) { return I.contramap(fa, f); }; };
        r.contramap = contramap;
    }
    if (isFunctorWithIndex(I)) {
        var mapWithIndex = function (f) { return function (fa) { return I.mapWithIndex(fa, f); }; };
        r.mapWithIndex = mapWithIndex;
    }
    if (isApply(I)) {
        var ap = function (fa) { return function (fab) { return I.ap(fab, fa); }; };
        var apFirst = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function (a) { return function () { return a; }; }), fb);
        }; };
        r.ap = ap;
        r.apFirst = apFirst;
        r.apSecond = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function () { return function (b) { return b; }; }), fb);
        }; };
    }
    if (isChain(I)) {
        var chain = function (f) { return function (ma) { return I.chain(ma, f); }; };
        var chainFirst = function (f) { return function (ma) { return I.chain(ma, function (a) { return I.map(f(a), function () { return a; }); }); }; };
        var flatten = function (mma) { return I.chain(mma, function_1.identity); };
        r.chain = chain;
        r.chainFirst = chainFirst;
        r.flatten = flatten;
    }
    if (isBifunctor(I)) {
        var bimap = function (f, g) { return function (fa) { return I.bimap(fa, f, g); }; };
        var mapLeft = function (f) { return function (fa) { return I.mapLeft(fa, f); }; };
        r.bimap = bimap;
        r.mapLeft = mapLeft;
    }
    if (isExtend(I)) {
        var extend = function (f) { return function (wa) { return I.extend(wa, f); }; };
        var duplicate = function (wa) { return I.extend(wa, function_1.identity); };
        r.extend = extend;
        r.duplicate = duplicate;
    }
    if (isFoldable(I)) {
        var reduce = function (b, f) { return function (fa) { return I.reduce(fa, b, f); }; };
        var foldMap = function (M) {
            var foldMapM = I.foldMap(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRight = function (b, f) { return function (fa) { return I.reduceRight(fa, b, f); }; };
        r.reduce = reduce;
        r.foldMap = foldMap;
        r.reduceRight = reduceRight;
    }
    if (isFoldableWithIndex(I)) {
        var reduceWithIndex = function (b, f) { return function (fa) {
            return I.reduceWithIndex(fa, b, f);
        }; };
        var foldMapWithIndex = function (M) {
            var foldMapM = I.foldMapWithIndex(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRightWithIndex = function (b, f) { return function (fa) {
            return I.reduceRightWithIndex(fa, b, f);
        }; };
        r.reduceWithIndex = reduceWithIndex;
        r.foldMapWithIndex = foldMapWithIndex;
        r.reduceRightWithIndex = reduceRightWithIndex;
    }
    if (isAlt(I)) {
        var alt = function (that) { return function (fa) { return I.alt(fa, that); }; };
        r.alt = alt;
    }
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        var filter = function (predicate) { return function (fa) {
            return I.filter(fa, predicate);
        }; };
        var filterMap = function (f) { return function (fa) { return I.filterMap(fa, f); }; };
        var partition = function (predicate) { return function (fa) {
            return I.partition(fa, predicate);
        }; };
        var partitionMap = function (f) { return function (fa) { return I.partitionMap(fa, f); }; };
        r.filter = filter;
        r.filterMap = filterMap;
        r.partition = partition;
        r.partitionMap = partitionMap;
    }
    if (isFilterableWithIndex(I)) {
        var filterWithIndex = function (predicateWithIndex) { return function (fa) { return I.filterWithIndex(fa, predicateWithIndex); }; };
        var filterMapWithIndex = function (f) { return function (fa) {
            return I.filterMapWithIndex(fa, f);
        }; };
        var partitionWithIndex = function (predicateWithIndex) { return function (fa) { return I.partitionWithIndex(fa, predicateWithIndex); }; };
        var partitionMapWithIndex = function (f) { return function (fa) {
            return I.partitionMapWithIndex(fa, f);
        }; };
        r.filterWithIndex = filterWithIndex;
        r.filterMapWithIndex = filterMapWithIndex;
        r.partitionWithIndex = partitionWithIndex;
        r.partitionMapWithIndex = partitionMapWithIndex;
    }
    if (isProfunctor(I)) {
        var promap = function (f, g) { return function (fa) { return I.promap(fa, f, g); }; };
        r.promap = promap;
    }
    if (isSemigroupoid(I)) {
        var compose = function (that) { return function (fa) { return I.compose(fa, that); }; };
        r.compose = compose;
    }
    if (isMonadThrow(I)) {
        var fromOption = function (onNone) { return function (ma) {
            return ma._tag === 'None' ? I.throwError(onNone()) : I.of(ma.value);
        }; };
        var fromEither = function (ma) {
            return ma._tag === 'Left' ? I.throwError(ma.left) : I.of(ma.right);
        };
        var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }; };
        var filterOrElse = function (predicate, onFalse) { return function (ma) { return I.chain(ma, function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }); }; };
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}
exports.pipeable = pipeable;
/**
 * Use [`pipe`](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow) from `function` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */
exports.pipe = function_1.pipe;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => "main." + __webpack_require__.h() + ".hot-update.json";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "ade7fd42f1df6b6a4984"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "scrath-me:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatescrath_me"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;