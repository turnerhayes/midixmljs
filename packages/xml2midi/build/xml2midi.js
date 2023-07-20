(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["XML2MIDI"] = factory();
	else
		root["XML2MIDI"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@thayes/midi-tools/build/midi-tools.js":
/*!*************************************************************!*\
  !*** ./node_modules/@thayes/midi-tools/build/midi-tools.js ***!
  \*************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_543__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_543__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_543__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_543__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_543__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_543__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_543__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_543__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_543__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_543__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_543__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_543__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_543__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_543__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_543__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_543__(__nested_webpack_require_543__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_8444__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __nested_webpack_require_8444__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __nested_webpack_require_8444__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __nested_webpack_require_8444__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_8444__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_57693__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __nested_webpack_require_57693__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_57693__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_64046__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __nested_webpack_require_64046__(/*! ms */ "./node_modules/ms/index.js");

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/MIDIReader/MIDIEventCreator.ts":
/*!********************************************!*\
  !*** ./src/MIDIReader/MIDIEventCreator.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_82698__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Events = __importStar(__nested_webpack_require_82698__(/*! ./MIDIEvents */ "./src/MIDIReader/MIDIEvents/index.ts"));
var MIDIMetaEventCreator_1 = __nested_webpack_require_82698__(/*! ./MIDIMetaEventCreator */ "./src/MIDIReader/MIDIMetaEventCreator.ts");
var variable_length_value_1 = __nested_webpack_require_82698__(/*! ../utils/variable-length-value */ "./src/utils/variable-length-value.ts");
var createNoteOffEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var channel = (statusByte & 0xF) + 1;
    var noteNumber = dataView.getUint8(startIndex);
    var release = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.NoteOffEvent({
            channel: channel,
            noteNumber: noteNumber,
            release: release,
        })
    ];
};
var createNoteOnEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var channel = (statusByte & 0xF) + 1;
    var noteNumber = dataView.getUint8(startIndex);
    var velocity = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.NoteOnEvent({
            channel: channel,
            noteNumber: noteNumber,
            velocity: velocity,
        })
    ];
};
var createSysexEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var _a = variable_length_value_1.fromVariableLengthValue(dataView.buffer, dataView.byteOffset + startIndex), bytesRead = _a[0], dataLength = _a[1];
    return [
        bytesRead + dataLength,
        new Events.SysExEvent({
            eventData: new Uint8Array(dataView.buffer, dataView.byteOffset + startIndex, dataLength),
        })
    ];
};
var createProgramChangeEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var channel = (statusByte & 0xF) + 1;
    var programNumber = dataView.getUint8(startIndex);
    return [
        1,
        new Events.ProgramChangeEvent({
            channel: channel,
            programNumber: programNumber,
        })
    ];
};
var createControllerChangeEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var channel = (statusByte & 0xF) + 1;
    var controllerNumber = dataView.getUint8(startIndex);
    var controllerValue = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.ControllerChangeEvent({
            channel: channel,
            controllerNumber: controllerNumber,
            controllerValue: controllerValue,
        })
    ];
};
var createPolyphonicAftertouchEventFromBytes = function (statusByte, dataView, startIndex) {
    var channel = (statusByte & 0xF) + 1;
    var noteNumber = dataView.getUint8(startIndex);
    var pressure = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.PolyphonicAftertouchEvent({
            channel: channel,
            noteNumber: noteNumber,
            pressure: pressure,
        })
    ];
};
var createChannelAftertouchEventFromBytes = function (statusByte, dataView, startIndex) {
    var channel = (statusByte & 0xF) + 1;
    var pressure = dataView.getUint8(startIndex + 1);
    return [
        1,
        new Events.ChannelAftertouchEvent({
            channel: channel,
            pressure: pressure,
        })
    ];
};
var createPitchBendEventFromBytes = function (statusByte, dataView, startIndex) {
    var channel = (statusByte & 0xF) + 1;
    var leastSignificantByte = dataView.getUint8(startIndex);
    var mostSignificantByte = dataView.getUint8(startIndex + 1);
    var value = ((mostSignificantByte & 0x7F) << 7) + (leastSignificantByte & 0x7F);
    return [
        2,
        new Events.PitchBendEvent({
            channel: channel,
            value: value,
        })
    ];
};
var getCreateFunction = function (statusByte) {
    if (statusByte >> 4 === 0x8) {
        return createNoteOffEventFromBytes;
    }
    if (statusByte >> 4 === 0x9) {
        return createNoteOnEventFromBytes;
    }
    if (statusByte >> 4 === 0xA) {
        return createPolyphonicAftertouchEventFromBytes;
    }
    if (statusByte >> 4 === 0xB) {
        return createControllerChangeEventFromBytes;
    }
    if (statusByte >> 4 === 0xC) {
        return createProgramChangeEventFromBytes;
    }
    if (statusByte >> 4 === 0xD) {
        return createChannelAftertouchEventFromBytes;
    }
    if (statusByte >> 4 === 0xE) {
        return createPitchBendEventFromBytes;
    }
    if (statusByte === 0xF0) {
        return createSysexEventFromBytes;
    }
    if (statusByte === 0xFF) {
        return MIDIMetaEventCreator_1.createMetaEventFromBytes;
    }
    return null;
};
exports.eventFromBytes = function (dataView, startIndex, previousStatusByte) {
    if (startIndex === void 0) { startIndex = 0; }
    if (previousStatusByte === void 0) { previousStatusByte = null; }
    var statusByte = dataView.getUint8(startIndex);
    var createFunction = getCreateFunction(statusByte);
    var bytesRead = 0;
    if (createFunction === null && previousStatusByte !== null) {
        statusByte = previousStatusByte;
        createFunction = getCreateFunction(statusByte);
    }
    else {
        // The byte at startIndex was the status byte, so skip it in the data
        startIndex += 1;
        bytesRead += 1;
    }
    if (createFunction !== null) {
        var _a = createFunction(statusByte, dataView, startIndex), eventBytesRead = _a[0], event_1 = _a[1];
        bytesRead += eventBytesRead;
        return {
            bytesRead: bytesRead,
            event: event_1,
            statusByte: statusByte,
        };
    }
    return null;
};


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/ChannelAftertouch.ts":
/*!********************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/ChannelAftertouch.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelAftertouchEvent = /** @class */ (function () {
    function ChannelAftertouchEvent(_a) {
        var channel = _a.channel, pressure = _a.pressure;
        this.type = 32 /* ChannelAftertouch */;
        this.channel = channel;
        this.pressure = pressure;
    }
    return ChannelAftertouchEvent;
}());
exports.ChannelAftertouchEvent = ChannelAftertouchEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/ControllerChange.ts":
/*!*******************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/ControllerChange.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerChangeEvent = /** @class */ (function () {
    function ControllerChangeEvent(_a) {
        var channel = _a.channel, controllerNumber = _a.controllerNumber, controllerValue = _a.controllerValue;
        this.type = 8 /* ControllerChange */;
        this.channel = channel;
        this.controllerNumber = controllerNumber;
        this.controllerValue = controllerValue;
    }
    return ControllerChangeEvent;
}());
exports.ControllerChangeEvent = ControllerChangeEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/ChannelPrefix.ts":
/*!*********************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/ChannelPrefix.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelPrefixEvent = /** @class */ (function () {
    function ChannelPrefixEvent(_a) {
        var channelNumber = _a.channelNumber;
        this.type = 1024 /* MetaChannelPrefix */;
        this.channelNumber = channelNumber;
    }
    return ChannelPrefixEvent;
}());
exports.ChannelPrefixEvent = ChannelPrefixEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/Copyright.ts":
/*!*****************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/Copyright.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CopyrightEvent = /** @class */ (function () {
    function CopyrightEvent(_a) {
        var copyright = _a.copyright;
        this.type = 4096 /* MetaCopyright */;
        this.copyright = copyright;
    }
    return CopyrightEvent;
}());
exports.CopyrightEvent = CopyrightEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/CuePoint.ts":
/*!****************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/CuePoint.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CuePointEvent = /** @class */ (function () {
    function CuePointEvent(_a) {
        var cueText = _a.cueText;
        this.type = 4194304 /* MetaCuePoint */;
        this.cueText = cueText;
    }
    return CuePointEvent;
}());
exports.CuePointEvent = CuePointEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/InstrumentName.ts":
/*!**********************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/InstrumentName.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InstrumentNameEvent = /** @class */ (function () {
    function InstrumentNameEvent(_a) {
        var name = _a.name;
        this.type = 65536 /* MetaInstrumentName */;
        this.name = name;
    }
    return InstrumentNameEvent;
}());
exports.InstrumentNameEvent = InstrumentNameEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/KeySignature.ts":
/*!********************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/KeySignature.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeySignatureEvent = /** @class */ (function () {
    function KeySignatureEvent(_a) {
        var sharps = _a.sharps, isMajor = _a.isMajor;
        this.type = 524288 /* MetaKeySignature */;
        this.sharps = sharps;
        this.isMajor = isMajor;
    }
    return KeySignatureEvent;
}());
exports.KeySignatureEvent = KeySignatureEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/Lyric.ts":
/*!*************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/Lyric.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LyricEvent = /** @class */ (function () {
    function LyricEvent(_a) {
        var lyric = _a.lyric;
        this.type = 262144 /* MetaLyric */;
        this.lyric = lyric;
    }
    return LyricEvent;
}());
exports.LyricEvent = LyricEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/Marker.ts":
/*!**************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/Marker.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkerEvent = /** @class */ (function () {
    function MarkerEvent(_a) {
        var marker = _a.marker;
        this.type = 1048576 /* MetaMarker */;
        this.marker = marker;
    }
    return MarkerEvent;
}());
exports.MarkerEvent = MarkerEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/PortPrefix.ts":
/*!******************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/PortPrefix.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PortPrefixEvent = /** @class */ (function () {
    function PortPrefixEvent(_a) {
        var portNumber = _a.portNumber;
        this.type = 512 /* MetaPortPrefix */;
        this.portNumber = portNumber;
    }
    return PortPrefixEvent;
}());
exports.PortPrefixEvent = PortPrefixEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/SMPTEOffset.ts":
/*!*******************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/SMPTEOffset.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SMPTEOffsetEvent = /** @class */ (function () {
    function SMPTEOffsetEvent(_a) {
        var hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, frames = _a.frames, fractionalFrames = _a.fractionalFrames;
        this.type = 32768 /* MetaSMPTEOffset */;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.frames = frames;
        this.fractionalFrames = fractionalFrames;
    }
    return SMPTEOffsetEvent;
}());
exports.SMPTEOffsetEvent = SMPTEOffsetEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/SequenceNumber.ts":
/*!**********************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/SequenceNumber.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SequenceNumberEvent = /** @class */ (function () {
    function SequenceNumberEvent(_a) {
        var sequenceNumber = _a.sequenceNumber;
        this.type = 256 /* MetaSequenceNumber */;
        this.sequenceNumber = sequenceNumber;
    }
    return SequenceNumberEvent;
}());
exports.SequenceNumberEvent = SequenceNumberEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/SequencerSpecific.ts":
/*!*************************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/SequencerSpecific.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SequencerSpecificEvent = /** @class */ (function () {
    function SequencerSpecificEvent(_a) {
        var id = _a.id, data = _a.data;
        this.type = 2097152 /* MetaSequencerSpecific */;
        this.id = id;
        this.data = data;
    }
    return SequencerSpecificEvent;
}());
exports.SequencerSpecificEvent = SequencerSpecificEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/SetTempo.ts":
/*!****************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/SetTempo.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SetTempoEvent = /** @class */ (function () {
    function SetTempoEvent(_a) {
        var microsecondsPerQuarterNote = _a.microsecondsPerQuarterNote;
        this.type = 8192 /* MetaSetTempo */;
        this.microsecondsPerQuarterNote = microsecondsPerQuarterNote;
    }
    return SetTempoEvent;
}());
exports.SetTempoEvent = SetTempoEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/Text.ts":
/*!************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/Text.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TextEvent = /** @class */ (function () {
    function TextEvent(_a) {
        var text = _a.text;
        this.type = 2048 /* MetaText */;
        this.text = text;
    }
    return TextEvent;
}());
exports.TextEvent = TextEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/TimeSignature.ts":
/*!*********************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/TimeSignature.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimeSignatureEvent = /** @class */ (function () {
    function TimeSignatureEvent(_a) {
        var numerator = _a.numerator, denominator = _a.denominator, clocksPerTick = _a.clocksPerTick, thirtySecondNotes = _a.thirtySecondNotes;
        this.type = 131072 /* MetaTimeSignature */;
        this.numerator = numerator;
        this.denominator = denominator;
        this.clocksPerTick = clocksPerTick;
        this.thirtySecondNotes = thirtySecondNotes;
    }
    return TimeSignatureEvent;
}());
exports.TimeSignatureEvent = TimeSignatureEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/TrackName.ts":
/*!*****************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/TrackName.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackNameEvent = /** @class */ (function () {
    function TrackNameEvent(_a) {
        var name = _a.name;
        this.type = 16384 /* MetaTrackName */;
        this.name = name;
    }
    return TrackNameEvent;
}());
exports.TrackNameEvent = TrackNameEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/Meta/index.ts":
/*!*************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/Meta/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_101977__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SequenceNumber_1 = __nested_webpack_require_101977__(/*! ./SequenceNumber */ "./src/MIDIReader/MIDIEvents/Meta/SequenceNumber.ts");
exports.SequenceNumberEvent = SequenceNumber_1.SequenceNumberEvent;
var TimeSignature_1 = __nested_webpack_require_101977__(/*! ./TimeSignature */ "./src/MIDIReader/MIDIEvents/Meta/TimeSignature.ts");
exports.TimeSignatureEvent = TimeSignature_1.TimeSignatureEvent;
var KeySignature_1 = __nested_webpack_require_101977__(/*! ./KeySignature */ "./src/MIDIReader/MIDIEvents/Meta/KeySignature.ts");
exports.KeySignatureEvent = KeySignature_1.KeySignatureEvent;
var SetTempo_1 = __nested_webpack_require_101977__(/*! ./SetTempo */ "./src/MIDIReader/MIDIEvents/Meta/SetTempo.ts");
exports.SetTempoEvent = SetTempo_1.SetTempoEvent;
var PortPrefix_1 = __nested_webpack_require_101977__(/*! ./PortPrefix */ "./src/MIDIReader/MIDIEvents/Meta/PortPrefix.ts");
exports.PortPrefixEvent = PortPrefix_1.PortPrefixEvent;
var ChannelPrefix_1 = __nested_webpack_require_101977__(/*! ./ChannelPrefix */ "./src/MIDIReader/MIDIEvents/Meta/ChannelPrefix.ts");
exports.ChannelPrefixEvent = ChannelPrefix_1.ChannelPrefixEvent;
var Copyright_1 = __nested_webpack_require_101977__(/*! ./Copyright */ "./src/MIDIReader/MIDIEvents/Meta/Copyright.ts");
exports.CopyrightEvent = Copyright_1.CopyrightEvent;
var TrackName_1 = __nested_webpack_require_101977__(/*! ./TrackName */ "./src/MIDIReader/MIDIEvents/Meta/TrackName.ts");
exports.TrackNameEvent = TrackName_1.TrackNameEvent;
var Text_1 = __nested_webpack_require_101977__(/*! ./Text */ "./src/MIDIReader/MIDIEvents/Meta/Text.ts");
exports.TextEvent = Text_1.TextEvent;
var InstrumentName_1 = __nested_webpack_require_101977__(/*! ./InstrumentName */ "./src/MIDIReader/MIDIEvents/Meta/InstrumentName.ts");
exports.InstrumentNameEvent = InstrumentName_1.InstrumentNameEvent;
var Lyric_1 = __nested_webpack_require_101977__(/*! ./Lyric */ "./src/MIDIReader/MIDIEvents/Meta/Lyric.ts");
exports.LyricEvent = Lyric_1.LyricEvent;
var Marker_1 = __nested_webpack_require_101977__(/*! ./Marker */ "./src/MIDIReader/MIDIEvents/Meta/Marker.ts");
exports.MarkerEvent = Marker_1.MarkerEvent;
var CuePoint_1 = __nested_webpack_require_101977__(/*! ./CuePoint */ "./src/MIDIReader/MIDIEvents/Meta/CuePoint.ts");
exports.CuePointEvent = CuePoint_1.CuePointEvent;
var SMPTEOffset_1 = __nested_webpack_require_101977__(/*! ./SMPTEOffset */ "./src/MIDIReader/MIDIEvents/Meta/SMPTEOffset.ts");
exports.SMPTEOffsetEvent = SMPTEOffset_1.SMPTEOffsetEvent;
var SequencerSpecific_1 = __nested_webpack_require_101977__(/*! ./SequencerSpecific */ "./src/MIDIReader/MIDIEvents/Meta/SequencerSpecific.ts");
exports.SequencerSpecificEvent = SequencerSpecific_1.SequencerSpecificEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/NoteOff.ts":
/*!**********************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/NoteOff.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoteOffEvent = /** @class */ (function () {
    function NoteOffEvent(_a) {
        var channel = _a.channel, noteNumber = _a.noteNumber, release = _a.release;
        this.type = 1 /* NoteOff */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.release = release;
    }
    return NoteOffEvent;
}());
exports.NoteOffEvent = NoteOffEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/NoteOn.ts":
/*!*********************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/NoteOn.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoteOnEvent = /** @class */ (function () {
    function NoteOnEvent(_a) {
        var channel = _a.channel, noteNumber = _a.noteNumber, velocity = _a.velocity;
        this.type = 2 /* NoteOn */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.velocity = velocity;
    }
    return NoteOnEvent;
}());
exports.NoteOnEvent = NoteOnEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/PitchBend.ts":
/*!************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/PitchBend.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PitchBendEvent = /** @class */ (function () {
    function PitchBendEvent(_a) {
        var channel = _a.channel, value = _a.value;
        this.type = 64 /* PitchBend */;
        this.channel = channel;
        this.value = value;
    }
    return PitchBendEvent;
}());
exports.PitchBendEvent = PitchBendEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/PolyphonicAftertouch.ts":
/*!***********************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/PolyphonicAftertouch.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolyphonicAftertouchEvent = /** @class */ (function () {
    function PolyphonicAftertouchEvent(_a) {
        var channel = _a.channel, noteNumber = _a.noteNumber, pressure = _a.pressure;
        this.type = 4 /* PolyphonicAftertouch */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.pressure = pressure;
    }
    return PolyphonicAftertouchEvent;
}());
exports.PolyphonicAftertouchEvent = PolyphonicAftertouchEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/ProgramChange.ts":
/*!****************************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/ProgramChange.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProgramChangeEvent = /** @class */ (function () {
    function ProgramChangeEvent(_a) {
        var channel = _a.channel, programNumber = _a.programNumber;
        this.type = 16 /* ProgramChange */;
        this.channel = channel;
        this.programNumber = programNumber;
    }
    return ProgramChangeEvent;
}());
exports.ProgramChangeEvent = ProgramChangeEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/SysEx.ts":
/*!********************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/SysEx.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SysExEvent = /** @class */ (function () {
    function SysExEvent(_a) {
        var eventData = _a.eventData;
        this.type = 128 /* Sysex */;
        this.eventData = eventData;
    }
    return SysExEvent;
}());
exports.SysExEvent = SysExEvent;


/***/ }),

/***/ "./src/MIDIReader/MIDIEvents/index.ts":
/*!********************************************!*\
  !*** ./src/MIDIReader/MIDIEvents/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_109377__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoteOff_1 = __nested_webpack_require_109377__(/*! ./NoteOff */ "./src/MIDIReader/MIDIEvents/NoteOff.ts");
exports.NoteOffEvent = NoteOff_1.NoteOffEvent;
var NoteOn_1 = __nested_webpack_require_109377__(/*! ./NoteOn */ "./src/MIDIReader/MIDIEvents/NoteOn.ts");
exports.NoteOnEvent = NoteOn_1.NoteOnEvent;
var ProgramChange_1 = __nested_webpack_require_109377__(/*! ./ProgramChange */ "./src/MIDIReader/MIDIEvents/ProgramChange.ts");
exports.ProgramChangeEvent = ProgramChange_1.ProgramChangeEvent;
var ControllerChange_1 = __nested_webpack_require_109377__(/*! ./ControllerChange */ "./src/MIDIReader/MIDIEvents/ControllerChange.ts");
exports.ControllerChangeEvent = ControllerChange_1.ControllerChangeEvent;
var PolyphonicAftertouch_1 = __nested_webpack_require_109377__(/*! ./PolyphonicAftertouch */ "./src/MIDIReader/MIDIEvents/PolyphonicAftertouch.ts");
exports.PolyphonicAftertouchEvent = PolyphonicAftertouch_1.PolyphonicAftertouchEvent;
var ChannelAftertouch_1 = __nested_webpack_require_109377__(/*! ./ChannelAftertouch */ "./src/MIDIReader/MIDIEvents/ChannelAftertouch.ts");
exports.ChannelAftertouchEvent = ChannelAftertouch_1.ChannelAftertouchEvent;
var PitchBend_1 = __nested_webpack_require_109377__(/*! ./PitchBend */ "./src/MIDIReader/MIDIEvents/PitchBend.ts");
exports.PitchBendEvent = PitchBend_1.PitchBendEvent;
var SysEx_1 = __nested_webpack_require_109377__(/*! ./SysEx */ "./src/MIDIReader/MIDIEvents/SysEx.ts");
exports.SysExEvent = SysEx_1.SysExEvent;
var Meta_1 = __nested_webpack_require_109377__(/*! ./Meta */ "./src/MIDIReader/MIDIEvents/Meta/index.ts");
exports.Meta = {
    SequenceNumberEvent: Meta_1.SequenceNumberEvent,
    TimeSignatureEvent: Meta_1.TimeSignatureEvent,
    KeySignatureEvent: Meta_1.KeySignatureEvent,
    SetTempoEvent: Meta_1.SetTempoEvent,
    PortPrefixEvent: Meta_1.PortPrefixEvent,
    ChannelPrefixEvent: Meta_1.ChannelPrefixEvent,
    CopyrightEvent: Meta_1.CopyrightEvent,
    TrackNameEvent: Meta_1.TrackNameEvent,
    TextEvent: Meta_1.TextEvent,
    InstrumentNameEvent: Meta_1.InstrumentNameEvent,
    LyricEvent: Meta_1.LyricEvent,
    MarkerEvent: Meta_1.MarkerEvent,
    CuePointEvent: Meta_1.CuePointEvent,
    SMPTEOffsetEvent: Meta_1.SMPTEOffsetEvent,
    SequencerSpecificEvent: Meta_1.SequencerSpecificEvent,
};


/***/ }),

/***/ "./src/MIDIReader/MIDIFileType.ts":
/*!****************************************!*\
  !*** ./src/MIDIReader/MIDIFileType.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIFileType;
(function (MIDIFileType) {
    MIDIFileType[MIDIFileType["Format0"] = 0] = "Format0";
    MIDIFileType[MIDIFileType["Format1"] = 1] = "Format1";
    MIDIFileType[MIDIFileType["Format2"] = 2] = "Format2";
})(MIDIFileType = exports.MIDIFileType || (exports.MIDIFileType = {}));
;


/***/ }),

/***/ "./src/MIDIReader/MIDIMetaEventCreator.ts":
/*!************************************************!*\
  !*** ./src/MIDIReader/MIDIMetaEventCreator.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_112581__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIEvents_1 = __nested_webpack_require_112581__(/*! ./MIDIEvents */ "./src/MIDIReader/MIDIEvents/index.ts");
var buffer_to_string_1 = __nested_webpack_require_112581__(/*! ../utils/buffer-to-string */ "./src/utils/buffer-to-string.ts");
var variable_length_value_1 = __nested_webpack_require_112581__(/*! ../utils/variable-length-value */ "./src/utils/variable-length-value.ts");
var readStringMetaEvent = function (dataView, startIndex) {
    var index = startIndex;
    var _a = variable_length_value_1.fromVariableLengthValue(dataView.buffer, dataView.byteOffset + index), bytesRead = _a[0], stringLength = _a[1];
    index += bytesRead;
    var str = buffer_to_string_1.bufferToString(dataView.buffer, dataView.byteOffset + index, stringLength);
    index = index + stringLength;
    return [
        bytesRead + stringLength,
        str
    ];
};
exports.createMetaEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var index = startIndex;
    var metaEventTypeNum = dataView.getUint8(index);
    index += 1;
    var event;
    if (metaEventTypeNum === 0x00) {
        // Next byte is 0x02--skip it
        index += 1;
        var sequenceNumber = dataView.getUint16(index);
        index += 2;
        event = new MIDIEvents_1.Meta.SequenceNumberEvent({
            sequenceNumber: sequenceNumber,
        });
    }
    else if (metaEventTypeNum === 0x01) {
        var _a = readStringMetaEvent(dataView, index), bytesRead = _a[0], text = _a[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.TextEvent({
            text: text,
        });
    }
    else if (metaEventTypeNum === 0x02) {
        var _b = readStringMetaEvent(dataView, index), bytesRead = _b[0], copyright = _b[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.CopyrightEvent({
            copyright: copyright,
        });
    }
    else if (metaEventTypeNum === 0x03) {
        var _c = readStringMetaEvent(dataView, index), bytesRead = _c[0], name_1 = _c[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.TrackNameEvent({
            name: name_1,
        });
    }
    else if (metaEventTypeNum === 0x04) {
        var _d = readStringMetaEvent(dataView, index), bytesRead = _d[0], name_2 = _d[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.InstrumentNameEvent({
            name: name_2,
        });
    }
    else if (metaEventTypeNum === 0x05) {
        var _e = readStringMetaEvent(dataView, index), bytesRead = _e[0], lyric = _e[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.LyricEvent({
            lyric: lyric,
        });
    }
    else if (metaEventTypeNum === 0x06) {
        var _f = readStringMetaEvent(dataView, index), bytesRead = _f[0], marker = _f[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.MarkerEvent({
            marker: marker,
        });
    }
    else if (metaEventTypeNum === 0x07) {
        var _g = readStringMetaEvent(dataView, index), bytesRead = _g[0], cueText = _g[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.CuePointEvent({
            cueText: cueText,
        });
    }
    else if (metaEventTypeNum === 0x20) {
        // Skip next byte since it is a constant
        index += 1;
        var channelNumber = dataView.getUint8(index);
        index += 1;
        event = new MIDIEvents_1.Meta.ChannelPrefixEvent({
            channelNumber: channelNumber,
        });
    }
    else if (metaEventTypeNum === 0x21) {
        // Skip next byte since it is a constant
        index += 1;
        var portNumber = dataView.getUint8(index);
        index += 1;
        event = new MIDIEvents_1.Meta.PortPrefixEvent({
            portNumber: portNumber,
        });
    }
    else if (metaEventTypeNum === 0x2F) {
        // End of track event
        index += 1;
    }
    else if (metaEventTypeNum === 0x51) {
        // Next byte is 0x03--skip it
        index += 1;
        var microsecondsPerQuarterNote = (dataView.getUint8(index) << 16) +
            (dataView.getUint8(index + 1) << 8) + dataView.getUint8(index + 2);
        index += 3;
        event = new MIDIEvents_1.Meta.SetTempoEvent({
            microsecondsPerQuarterNote: microsecondsPerQuarterNote,
        });
    }
    else if (metaEventTypeNum === 0x54) {
        // Skip next byte because it's a constant
        index += 1;
        var hours = dataView.getUint8(index);
        index += 1;
        var minutes = dataView.getUint8(index);
        index += 1;
        var seconds = dataView.getUint8(index);
        index += 1;
        var frames_1 = dataView.getUint8(index);
        index += 1;
        var fractionalFrames = dataView.getUint8(index);
        index += 1;
        event = new MIDIEvents_1.Meta.SMPTEOffsetEvent({
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            frames: frames_1,
            fractionalFrames: fractionalFrames,
        });
    }
    else if (metaEventTypeNum === 0x58) {
        // Next byte is 0x04--skip it
        index += 1;
        var numerator = dataView.getUint8(index);
        index += 1;
        var denominator = Math.pow(2, dataView.getUint8(index));
        index += 1;
        var clocksPerTick = dataView.getUint8(index);
        index += 1;
        var thirtySecondNotes = dataView.getUint8(index);
        index += 1;
        event = new MIDIEvents_1.Meta.TimeSignatureEvent({
            numerator: numerator,
            denominator: denominator,
            clocksPerTick: clocksPerTick,
            thirtySecondNotes: thirtySecondNotes,
        });
    }
    else if (metaEventTypeNum === 0x59) {
        // Next byte is 0x02--skip it
        index += 1;
        var sharps = dataView.getInt8(index);
        index += 1;
        var isMajor = dataView.getUint8(index) === 0;
        index += 1;
        event = new MIDIEvents_1.Meta.KeySignatureEvent({
            sharps: sharps,
            isMajor: isMajor,
        });
    }
    else if (metaEventTypeNum === 0x7F) {
        var _h = variable_length_value_1.fromVariableLengthValue(dataView.buffer, dataView.byteOffset + index), bytesRead = _h[0], length_1 = _h[1];
        index += bytesRead;
        var data = new Uint8Array(dataView.buffer, dataView.byteOffset + index, length_1);
        var id = data.slice(0, 1);
        if (id[0] === 0) {
            id = data.slice(0, 3);
            data = data.slice(3);
        }
        else {
            data = data.slice(1);
        }
        event = new MIDIEvents_1.Meta.SequencerSpecificEvent({
            id: id,
            data: data,
        });
    }
    else {
        throw new Error("Unknown MIDI meta event type 0x" + metaEventTypeNum.toString(16));
    }
    return [
        index - startIndex,
        event,
    ];
};


/***/ }),

/***/ "./src/MIDIReader/MIDIParseError.ts":
/*!******************************************!*\
  !*** ./src/MIDIReader/MIDIParseError.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MIDIParseError = /** @class */ (function (_super) {
    __extends(MIDIParseError, _super);
    function MIDIParseError(message) {
        return _super.call(this, "Invalid MIDI file: " + message) || this;
    }
    return MIDIParseError;
}(Error));
exports.MIDIParseError = MIDIParseError;


/***/ }),

/***/ "./src/MIDIReader/index.ts":
/*!*********************************!*\
  !*** ./src/MIDIReader/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_120969__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIEvents_1 = __nested_webpack_require_120969__(/*! ./MIDIEvents */ "./src/MIDIReader/MIDIEvents/index.ts");
exports.MIDIEvents = {
    NoteOffEvent: MIDIEvents_1.NoteOffEvent,
    NoteOnEvent: MIDIEvents_1.NoteOnEvent,
    ProgramChangeEvent: MIDIEvents_1.ProgramChangeEvent,
    ControllerChangeEvent: MIDIEvents_1.ControllerChangeEvent,
    PolyphonicAftertouchEvent: MIDIEvents_1.PolyphonicAftertouchEvent,
    ChannelAftertouchEvent: MIDIEvents_1.ChannelAftertouchEvent,
    PitchBendEvent: MIDIEvents_1.PitchBendEvent,
    SysExEvent: MIDIEvents_1.SysExEvent,
    Meta: MIDIEvents_1.Meta,
};
var MIDIFileType_1 = __nested_webpack_require_120969__(/*! ./MIDIFileType */ "./src/MIDIReader/MIDIFileType.ts");
exports.MIDIFileType = MIDIFileType_1.MIDIFileType;
var MIDIParseError_1 = __nested_webpack_require_120969__(/*! ./MIDIParseError */ "./src/MIDIReader/MIDIParseError.ts");
exports.MIDIParseError = MIDIParseError_1.MIDIParseError;
var midi_reader_1 = __nested_webpack_require_120969__(/*! ./midi-reader */ "./src/MIDIReader/midi-reader.ts");
exports.MIDIReader = midi_reader_1.MIDIReader;


/***/ }),

/***/ "./src/MIDIReader/midi-reader.ts":
/*!***************************************!*\
  !*** ./src/MIDIReader/midi-reader.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_122372__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var MIDIFileType_1 = __nested_webpack_require_122372__(/*! ./MIDIFileType */ "./src/MIDIReader/MIDIFileType.ts");
var MIDIParseError_1 = __nested_webpack_require_122372__(/*! ./MIDIParseError */ "./src/MIDIReader/MIDIParseError.ts");
var MIDIEventCreator_1 = __nested_webpack_require_122372__(/*! ./MIDIEventCreator */ "./src/MIDIReader/MIDIEventCreator.ts");
var variable_length_value_1 = __nested_webpack_require_122372__(/*! ../utils/variable-length-value */ "./src/utils/variable-length-value.ts");
var buffer_to_string_1 = __nested_webpack_require_122372__(/*! ../utils/buffer-to-string */ "./src/utils/buffer-to-string.ts");
var MIDIReader = /** @class */ (function () {
    function MIDIReader(buffer) {
        if (buffer instanceof DataView) {
            this.bufferOffset = buffer.byteOffset;
            this.bufferLength = buffer.byteLength;
            this.buffer = buffer.buffer;
            this.dataView = buffer;
        }
        else if (buffer instanceof Buffer) {
            this.bufferOffset = buffer.byteOffset;
            this.bufferLength = buffer.byteLength;
            this.buffer = buffer.buffer;
            this.dataView = new DataView(this.buffer, this.bufferOffset, this.bufferLength);
        }
        else {
            this.bufferOffset = 0;
            this.bufferLength = buffer.byteLength;
            this.buffer = buffer;
            this.dataView = new DataView(this.buffer, this.bufferOffset, this.bufferLength);
        }
        var fileHeaderChunk = this.readString(0, 4);
        if (fileHeaderChunk !== 'MThd') {
            throw new MIDIParseError_1.MIDIParseError('File does not start with a header chunk');
        }
        var _a = this.readFileHeader(4), trackStartOffset = _a[0], header = _a[1];
        this.trackStartOffset = trackStartOffset + 4;
        this.header = header;
    }
    MIDIReader.prototype.readUint32 = function (startIndex) {
        return this.dataView.getUint32(startIndex);
    };
    MIDIReader.prototype.readUint16 = function (startIndex) {
        return this.dataView.getUint16(startIndex);
    };
    MIDIReader.prototype.readString = function (startIndex, length) {
        return buffer_to_string_1.bufferToString(this.buffer, this.bufferOffset + startIndex, length);
    };
    MIDIReader.prototype.readVariableLength = function (startIndex) {
        return variable_length_value_1.fromVariableLengthValue(this.buffer, this.bufferOffset + startIndex);
    };
    MIDIReader.prototype.readMIDIEvent = function (startIndex, trackNumber, previousStatusByte) {
        var _a = this.readVariableLength(startIndex), bytesRead = _a[0], deltaTime = _a[1];
        var index = startIndex + bytesRead;
        var eventOrNull = MIDIEventCreator_1.eventFromBytes(this.dataView, index, previousStatusByte);
        if (eventOrNull === null) {
            var statusByte_1 = this.dataView.getUint8(index);
            throw new MIDIParseError_1.MIDIParseError("Unknown MIDI event status 0x" + statusByte_1.toString(16).toUpperCase());
        }
        var eventBytesRead = eventOrNull.bytesRead, event = eventOrNull.event, statusByte = eventOrNull.statusByte;
        return {
            bytesRead: index + eventBytesRead - startIndex,
            eventData: {
                trackNumber: trackNumber,
                deltaTime: deltaTime,
                event: event,
            },
            statusByte: statusByte,
        };
    };
    MIDIReader.prototype.readFileHeader = function (startIndex) {
        var length = this.dataView.getUint32(startIndex);
        // Add 4 bytes for the length field
        var index = startIndex + 4;
        var fileTypeNumber = this.dataView.getUint16(index);
        index += 2;
        var fileType;
        if (fileTypeNumber === 0) {
            fileType = MIDIFileType_1.MIDIFileType.Format0;
        }
        else if (fileTypeNumber === 1) {
            fileType = MIDIFileType_1.MIDIFileType.Format1;
        }
        else if (fileTypeNumber === 2) {
            fileType = MIDIFileType_1.MIDIFileType.Format2;
        }
        else {
            throw new MIDIParseError_1.MIDIParseError("Unknown MIDI file type: " + fileTypeNumber);
        }
        var trackCount = this.dataView.getUint16(index);
        index += 2;
        var divisionNum = this.dataView.getUint16(index);
        index += 2;
        var division;
        // high bit set = SMPTE
        if (divisionNum >> 15 === 1) {
            var deltaTimePerFrame = divisionNum & 0xF;
            var negativeFramesPerSecond = (divisionNum >> 8) & 0x7f;
            division = {
                deltaTimePerFrame: deltaTimePerFrame,
                negativeFramesPerSecond: negativeFramesPerSecond,
            };
        }
        else {
            division = {
                ticks: divisionNum & 0x7FFF,
            };
        }
        return [
            // Add 4 for the length header
            4 + length,
            {
                fileType: fileType,
                trackCount: trackCount,
                division: division,
            }
        ];
    };
    MIDIReader.prototype.readTracks = function (_a) {
        var index, inHeader, inTrack, trackNumber, currentTrackEndIndex, previousStatusByte, chunkType, length_1, _b, bytesRead, eventData, statusByte;
        var _c = (_a === void 0 ? {} : _a).eventTypes, eventTypes = _c === void 0 ? 8388607 /* All */ : _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    index = this.trackStartOffset;
                    inHeader = false;
                    inTrack = false;
                    trackNumber = 0;
                    currentTrackEndIndex = null;
                    _d.label = 1;
                case 1:
                    if (!(index < this.bufferLength)) return [3 /*break*/, 5];
                    if (!(currentTrackEndIndex === null)) return [3 /*break*/, 2];
                    chunkType = this.readString(index, 4);
                    index += 4;
                    if (chunkType !== 'MTrk') {
                        throw new MIDIParseError_1.MIDIParseError('No track header found at start of track');
                    }
                    length_1 = this.readUint32(index);
                    index += 4;
                    currentTrackEndIndex = index + length_1;
                    trackNumber = trackNumber + 1;
                    return [3 /*break*/, 4];
                case 2:
                    _b = this.readMIDIEvent(index, trackNumber, previousStatusByte), bytesRead = _b.bytesRead, eventData = _b.eventData, statusByte = _b.statusByte;
                    index += bytesRead;
                    previousStatusByte = statusByte;
                    if (index === currentTrackEndIndex) {
                        currentTrackEndIndex = null;
                    }
                    if (!(eventData.event && (eventData.event.type & eventTypes))) return [3 /*break*/, 4];
                    return [4 /*yield*/, eventData];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4: return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    };
    return MIDIReader;
}());
exports.MIDIReader = MIDIReader;

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_122372__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/MIDIWriter/MIDIFile.ts":
/*!************************************!*\
  !*** ./src/MIDIWriter/MIDIFile.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_131930__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __importDefault(__nested_webpack_require_131930__(/*! debug */ "./node_modules/debug/src/browser.js"));
var utils_1 = __nested_webpack_require_131930__(/*! ../utils */ "./src/utils/index.ts");
var debug = debug_1.default("midi-tools:MIDIFile");
var stringToCharCodeArray = function (str) {
    return new Uint8Array(str.split("").map(function (chr) { return chr.charCodeAt(0); }));
};
var mthdString = stringToCharCodeArray("MThd");
var mtrkString = stringToCharCodeArray("MTrk");
var END_OF_TRACK_EVENT = new Uint8Array([0xFF, 0x2F, 0x00]);
var numberToBytes = function (num, minBytes) {
    var bytes = [];
    do {
        bytes.unshift(num & 0xFF);
        num = num >> 8;
    } while (num > 0 || bytes.length < minBytes);
    return new Uint8Array(bytes);
};
var getNoteOnEvent = function (note, channel, velocity) {
    return new Uint8Array([
        144 /* NoteOn */ + (channel - 1),
        // Unset top bit; value can only be 7 bits long
        note & 0x7F,
        velocity & 0x7F,
    ]);
};
var getNoteOffEvent = function (note, channel, velocity) {
    return new Uint8Array([
        128 /* NoteOff */ + (channel - 1),
        // Unset top bit; value can only be 7 bits long
        note & 0x7F,
        velocity & 0x7F,
    ]);
};
var getProgramChangeEvent = function (_a) {
    var channel = _a.channel, program = _a.program;
    return new Uint8Array([
        192 /* ProgramChange */ + (channel - 1),
        program
    ]);
};
var getFileHeader = function (_a) {
    var divisions = _a.divisions, trackCount = _a.trackCount;
    var format = trackCount === 1 ?
        0 :
        1;
    // # of divisions per quarter note (15 bits only)
    var divisionsBytes = numberToBytes(divisions & 0x7FFF, 2);
    var trackCountBytes = numberToBytes(trackCount, 2);
    var totalLength = mthdString.byteLength +
        // 4 bytes for length field  
        4 +
        // 2 bytes for format field
        2 +
        trackCountBytes.byteLength +
        divisionsBytes.byteLength;
    var header = new Uint8Array(totalLength);
    var index = 0;
    header.set(mthdString, index);
    index += mthdString.byteLength;
    // Length field, MSB first
    header.set(Uint8Array.of(0, 0, 0, 6), index);
    index += 4;
    header.set(Uint8Array.of(0, format), index);
    index += 2;
    header.set(trackCountBytes, index);
    index += trackCountBytes.byteLength;
    header.set(divisionsBytes, index);
    index += divisionsBytes.byteLength;
    return header;
};
var getTrackHeader = function (_a) {
    var length = _a.length;
    // 4 for the MTrk header, 4 for the length buffer
    var buff = new ArrayBuffer(8);
    new Uint8Array(buff).set(mtrkString, 0);
    new DataView(buff).setUint32(4, length);
    return new Uint8Array(buff);
};
var MIDIFile = /** @class */ (function () {
    function MIDIFile(_a) {
        var divisions = _a.divisions;
        this.buffers = [];
        this.tracks = {};
        this.omniTrackEvents = [];
        this.divisions = divisions;
    }
    MIDIFile.prototype.programChange = function (_a) {
        var offset = _a.offset, program = _a.program, track = _a.track, _b = _a.channel, channel = _b === void 0 ? 1 : _b;
        var programChangeEvent = getProgramChangeEvent({ channel: channel, program: program });
        var bufferInfo = {
            event: programChangeEvent,
            eventType: 192 /* ProgramChange */,
            divisionOffset: offset,
        };
        if (track === undefined) {
            this.omniTrackEvents.push(bufferInfo);
        }
        else {
            if (!(track in this.tracks)) {
                this.tracks[track] = {
                    buffers: [],
                };
            }
            this.tracks[track].buffers.push(bufferInfo);
        }
    };
    MIDIFile.prototype.timeSignature = function (_a) {
        var numerator = _a.numerator, denominator = _a.denominator;
        var event = new Uint8Array([
            255 /* Meta */,
            88 /* TimeSignature */,
            4,
            numerator,
            Math.log2(denominator),
            // @todo: figure out how to actually deal with these parameters
            // robustly--I don't really understand them entirely
            // Number of metronome ticks per quarter note
            24,
            // Number of 1/32nd notes per MIDI quarter note
            8,
        ]);
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.keySignature = function (_a) {
        var keySignature = _a.keySignature, _b = _a.offset, offset = _b === void 0 ? 0 : _b;
        var event = new Uint8Array([
            255 /* Meta */,
            89 /* KeySignature */,
            2,
            keySignature.sharps,
            // major (0) vs. minor (1)
            // @todo: Actually find major/minor key from XML
            keySignature.mode === "minor" ? 1 : 0,
        ]);
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: offset,
        });
    };
    MIDIFile.prototype.setTitle = function (title) {
        // add 1 for null terminator byte
        var length = utils_1.toVariableLengthValue(title.length + 1);
        var chars = stringToCharCodeArray(title + "\0");
        var totalLength = 2 + // 1 byte each for status and subtype
            length.byteLength +
            chars.byteLength;
        var event = new Uint8Array(totalLength);
        var index = 0;
        event.set(Uint8Array.of(255 /* Meta */, 3 /* TrackName */), index);
        index += 2;
        event.set(length, index);
        index += length.byteLength;
        event.set(chars, index);
        index += chars.byteLength;
        this.buffers.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.note = function (_a) {
        var note = _a.note, duration = _a.duration, offset = _a.offset, track = _a.track, _b = _a.channel, channel = _b === void 0 ? 1 : _b, _c = _a.velocity, velocity = _c === void 0 ? 64 : _c, _d = _a.release, release = _d === void 0 ? velocity : _d, _e = _a.meta, meta = _e === void 0 ? {} : _e;
        var noteOnEvent = getNoteOnEvent(note, channel, velocity);
        var noteName = utils_1.NoteNumberToName(note);
        noteName = "" + noteName.step + (noteName.alter === 1 ?
            '#' :
            noteName.alter === -1 ?
                'b' :
                '') + noteName.octave;
        if (!(track in this.tracks)) {
            this.tracks[track] = {
                buffers: [],
            };
        }
        this.tracks[track].buffers.push({
            event: noteOnEvent,
            eventType: 144 /* NoteOn */,
            divisionOffset: offset,
            meta: __assign({ name: noteName }, meta),
        });
        debug('note on: ', {
            note: note,
            offset: offset,
            duration: duration,
            channel: channel,
            velocity: velocity,
            event: noteOnEvent,
        });
        var noteOffEvent = getNoteOffEvent(note, channel, release);
        var noteOffOffset = offset + duration;
        debug('note off: ', {
            note: note,
            offset: noteOffOffset,
            channel: channel,
            release: release,
            meta: __assign({ name: noteName }, meta),
        });
        this.tracks[track].buffers.push({
            event: noteOffEvent,
            eventType: 128 /* NoteOff */,
            divisionOffset: noteOffOffset,
        });
    };
    MIDIFile.prototype.setTempo = function (tempo) {
        var microsecondsPerQuarterNote = 6e7 / tempo;
        var tempoBytes = numberToBytes(microsecondsPerQuarterNote, 3);
        // 1 byte each for status type and meta type, and 1 for constant value 0x03 after meta type
        var totalLength = 3 +
            tempoBytes.byteLength;
        var event = new Uint8Array(totalLength);
        var index = 0;
        event.set(Uint8Array.of(255 /* Meta */, 81 /* SetTempo */, 3), index);
        index += 3;
        event.set(tempoBytes, index);
        index += tempoBytes.byteLength;
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.sortBuffers = function () {
        var _this = this;
        return Object.keys(this.tracks).reduce(function (reduction, trackNumber) {
            // shallow clone to avoid adding omniTrackEvents to the actual tracks
            var trackBuffers = _this.tracks[trackNumber].buffers.slice();
            trackBuffers.unshift.apply(trackBuffers, _this.omniTrackEvents);
            reduction[trackNumber] = trackBuffers.sort(function (a, b) {
                var offsetDiff = a.divisionOffset - b.divisionOffset;
                if (offsetDiff === 0) {
                    if (a.eventType === b.eventType) {
                        return 0;
                    }
                    if (a.eventType === 192 /* ProgramChange */ ||
                        a.eventType === 255 /* Meta */) {
                        if (b.eventType === 192 /* ProgramChange */ ||
                            b.eventType === 255 /* Meta */) {
                            return 0;
                        }
                        return -1;
                    }
                    return 1;
                }
                return offsetDiff;
            });
            return reduction;
        }, {});
    };
    MIDIFile.prototype.toArrayBuffer = function () {
        var buffers = this.sortBuffers();
        var trackCount = Object.keys(this.tracks).length;
        var trackLengths = Object.keys(buffers).reduce(function (totals, trackNumber) {
            var prevDuration = 0;
            totals[trackNumber] = buffers[trackNumber].reduce(function (total, midiEventInfo) {
                total = total + midiEventInfo.event.length;
                var deltaTime = midiEventInfo.divisionOffset - prevDuration;
                var deltaTimeBuffer = utils_1.toVariableLengthValue(deltaTime);
                total += deltaTimeBuffer.length;
                midiEventInfo.deltaTimeBuffer = deltaTimeBuffer;
                prevDuration = midiEventInfo.divisionOffset;
                return total;
            }, 0);
            totals[trackNumber] += 1 + // The delta time offset for end of track is 0, which takes 1 byte in VLV
                END_OF_TRACK_EVENT.length;
            return totals;
        }, {});
        var headerChunk = getFileHeader({
            divisions: this.divisions,
            trackCount: trackCount,
        });
        var trackHeaders = Object.keys(buffers).reduce(function (headers, trackNumber) {
            headers[trackNumber] = getTrackHeader({
                length: trackLengths[trackNumber],
            });
            return headers;
        }, {});
        var totalLength = headerChunk.length;
        totalLength += Object.keys(trackHeaders).reduce(function (total, trackNumber) { return total + trackHeaders[trackNumber].length; }, 0);
        totalLength += Object.keys(buffers).reduce(function (total, trackNumber) { return total + trackLengths[trackNumber]; }, 0);
        var buff = new ArrayBuffer(totalLength);
        var arr = new Uint8Array(buff);
        var offset = 0;
        arr.set(headerChunk, offset);
        offset += headerChunk.length;
        Object.keys(buffers).forEach(function (trackNumber) {
            arr.set(trackHeaders[trackNumber], offset);
            offset += trackHeaders[trackNumber].length;
            buffers[trackNumber].forEach(function (midiEventInfo) {
                var deltaTimeBuffer = midiEventInfo.deltaTimeBuffer;
                arr.set(deltaTimeBuffer, offset);
                offset += deltaTimeBuffer.length;
                arr.set(midiEventInfo.event, offset);
                offset += midiEventInfo.event.length;
            });
            // Delta time for end of track event is 0, so the buffer for it is always
            // the same
            arr.set(Uint8Array.from([0]), offset);
            offset += 1;
            arr.set(END_OF_TRACK_EVENT, offset);
            offset += END_OF_TRACK_EVENT.length;
        });
        return buff;
    };
    return MIDIFile;
}());
exports.MIDIFile = MIDIFile;


/***/ }),

/***/ "./src/MIDIWriter/index.ts":
/*!*********************************!*\
  !*** ./src/MIDIWriter/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_145194__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIFile_1 = __nested_webpack_require_145194__(/*! ./MIDIFile */ "./src/MIDIWriter/MIDIFile.ts");
exports.MIDIFile = MIDIFile_1.MIDIFile;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_145608__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIWriter_1 = __nested_webpack_require_145608__(/*! ./MIDIWriter */ "./src/MIDIWriter/index.ts");
exports.MIDIFile = MIDIWriter_1.MIDIFile;
var MIDIReader_1 = __nested_webpack_require_145608__(/*! ./MIDIReader */ "./src/MIDIReader/index.ts");
exports.MIDIEvents = MIDIReader_1.MIDIEvents;
exports.MIDIFileType = MIDIReader_1.MIDIFileType;
exports.MIDIParseError = MIDIReader_1.MIDIParseError;
exports.MIDIReader = MIDIReader_1.MIDIReader;
var utils_1 = __nested_webpack_require_145608__(/*! ./utils */ "./src/utils/index.ts");
exports.bufferToString = utils_1.bufferToString;
exports.fromVariableLengthValue = utils_1.fromVariableLengthValue;
exports.toVariableLengthValue = utils_1.toVariableLengthValue;
exports.NoteNameToNumber = utils_1.NoteNameToNumber;
exports.NoteNumberToName = utils_1.NoteNumberToName;


/***/ }),

/***/ "./src/utils/buffer-to-string.ts":
/*!***************************************!*\
  !*** ./src/utils/buffer-to-string.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToString = function (buffer, startIndex, length) {
    var str = '';
    var dataView = new DataView(buffer, startIndex, length);
    for (var i = 0; i < length; i++) {
        str += String.fromCharCode(dataView.getUint8(i));
    }
    return str;
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_147313__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buffer_to_string_1 = __nested_webpack_require_147313__(/*! ./buffer-to-string */ "./src/utils/buffer-to-string.ts");
exports.bufferToString = buffer_to_string_1.bufferToString;
var variable_length_value_1 = __nested_webpack_require_147313__(/*! ./variable-length-value */ "./src/utils/variable-length-value.ts");
exports.fromVariableLengthValue = variable_length_value_1.fromVariableLengthValue;
exports.toVariableLengthValue = variable_length_value_1.toVariableLengthValue;
var midi_note_converter_1 = __nested_webpack_require_147313__(/*! ./midi-note-converter */ "./src/utils/midi-note-converter.ts");
exports.NoteNameToNumber = midi_note_converter_1.NoteNameToNumber;
exports.NoteNumberToName = midi_note_converter_1.NoteNumberToName;


/***/ }),

/***/ "./src/utils/midi-note-converter.ts":
/*!******************************************!*\
  !*** ./src/utils/midi-note-converter.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function NoteNumberToName(note) {
    var step;
    var alter;
    // eslint-disable-next-line no-magic-numbers
    var octave = Math.floor(note / 12) - 1;
    /* eslint-disable no-fallthrough */
    /* eslint-disable no-magic-numbers */
    switch (note % 12) {
        case 1:
            alter = 1;
        case 0:
            step = "C";
            break;
        case 3:
            alter = 1;
        case 2:
            step = "D";
            break;
        case 4:
            step = "E";
            break;
        case 6:
            alter = 1;
        case 5:
            step = "F";
            break;
        case 8:
            alter = 1;
        case 7:
            step = "G";
            break;
        case 10:
            alter = 1;
        case 9:
            step = "A";
            break;
        case 11:
            step = "B";
            break;
    }
    /* eslint-enable no-magic-numbers */
    /* eslint-enable no-fallthrough */
    var noteObj = {
        step: step,
        octave: octave,
        MIDINumber: note,
    };
    if (alter) {
        noteObj.alter = alter;
    }
    return noteObj;
}
exports.NoteNumberToName = NoteNumberToName;
var stepToNumber = {
    C: 0,
    D: 2,
    E: 4,
    F: 5,
    G: 7,
    A: 9,
    B: 11,
};
var steps = "ABCDEFG";
function NoteNameToNumber(noteName) {
    var step;
    var octave;
    var alter;
    if (typeof noteName === "string") {
        var matches = /^([A-G])([#b])?(-?\d+)$/.exec(noteName);
        if (!matches) {
            return null;
        }
        var alterString = matches[2];
        step = matches[1];
        octave = Number(matches[3]);
        if (alterString === "b") {
            alter = -1;
        }
        else if (alterString === "#") {
            alter = 1;
        }
    }
    else {
        step = noteName.step;
        alter = noteName.alter;
        octave = noteName.octave;
    }
    if (alter === -1) {
        alter = 1;
        var initialStepIndex = steps.indexOf(step);
        step = steps[(steps.indexOf(step) + steps.length - 1) % steps.length];
        // e.g. going from Ab4 -> G#3
        if (steps.indexOf(step) > initialStepIndex) {
            octave -= 1;
        }
    }
    var number = stepToNumber[step];
    if (alter === 1) {
        number += 1;
    }
    // eslint-disable-next-line no-magic-numbers
    return number + ((octave + 1) * 12);
}
exports.NoteNameToNumber = NoteNameToNumber;


/***/ }),

/***/ "./src/utils/variable-length-value.ts":
/*!********************************************!*\
  !*** ./src/utils/variable-length-value.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toVariableLengthValue(num) {
    var bytes = [];
    do {
        var byte = num & 0x7F;
        num = num >> 7;
        if (bytes.length > 0) {
            byte = byte + 0x80;
        }
        bytes.unshift(byte);
    } while (num > 0);
    return new Uint8Array(bytes);
}
exports.toVariableLengthValue = toVariableLengthValue;
;
function fromVariableLengthValue(buffer, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var uArray = new Uint8Array(buffer, startIndex);
    var value = 0;
    var index = -1;
    var bytesRead = 0;
    do {
        index += 1;
        value = (value << 7) + (uArray[index] & 0x7F);
        bytesRead += 1;
    } while (uArray[index] & 0x80);
    return [bytesRead, value];
}
exports.fromVariableLengthValue = fromVariableLengthValue;
;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NSURJVG9vbHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL01JRElUb29scy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL01JRElUb29scy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50Q3JlYXRvci50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL0NoYW5uZWxBZnRlcnRvdWNoLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvQ29udHJvbGxlckNoYW5nZS50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ2hhbm5lbFByZWZpeC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ29weXJpZ2h0LnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9DdWVQb2ludC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvSW5zdHJ1bWVudE5hbWUudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0tleVNpZ25hdHVyZS50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvTHlyaWMudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL01hcmtlci50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvUG9ydFByZWZpeC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU01QVEVPZmZzZXQudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1NlcXVlbmNlTnVtYmVyLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9TZXF1ZW5jZXJTcGVjaWZpYy50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU2V0VGVtcG8udHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RleHQudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RpbWVTaWduYXR1cmUudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RyYWNrTmFtZS50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Ob3RlT2ZmLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTm90ZU9uLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvUGl0Y2hCZW5kLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvUG9seXBob25pY0FmdGVydG91Y2gudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Qcm9ncmFtQ2hhbmdlLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvU3lzRXgudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRmlsZVR5cGUudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESU1ldGFFdmVudENyZWF0b3IudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESVBhcnNlRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvbWlkaS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElXcml0ZXIvTUlESUZpbGUudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElXcml0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy91dGlscy9idWZmZXItdG8tc3RyaW5nLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvdXRpbHMvbWlkaS1ub3RlLWNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLG9EQUFXO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyxnREFBUztBQUMvQixjQUFjLG1CQUFPLENBQUMsZ0RBQVM7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzV2REE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsb0RBQVU7O0FBRW5DLE9BQU8sV0FBVzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdFFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsc0NBQUk7O0FBRXBDO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDelFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLFFBQVEsVUFBVTs7QUFFbEI7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkZBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaktBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQywwREFBYztBQUNoRCw2QkFBNkIsbUJBQU8sQ0FBQyx3RUFBd0I7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsNEVBQWdDO0FBQ3RFO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hELHdDQUF3QywyQkFBMkI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hLYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1phO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNkYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDWGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDYmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsNEVBQWtCO0FBQ2pEO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsMEVBQWlCO0FBQy9DO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsd0VBQWdCO0FBQzdDO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsZ0VBQVk7QUFDckM7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBYztBQUN6QztBQUNBLHNCQUFzQixtQkFBTyxDQUFDLDBFQUFpQjtBQUMvQztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGtFQUFhO0FBQ3ZDO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsa0VBQWE7QUFDdkM7QUFDQSxhQUFhLG1CQUFPLENBQUMsd0RBQVE7QUFDN0I7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyw0RUFBa0I7QUFDakQ7QUFDQSxjQUFjLG1CQUFPLENBQUMsMERBQVM7QUFDL0I7QUFDQSxlQUFlLG1CQUFPLENBQUMsNERBQVU7QUFDakM7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxnRUFBWTtBQUNyQztBQUNBLG9CQUFvQixtQkFBTyxDQUFDLHNFQUFlO0FBQzNDO0FBQ0EsMEJBQTBCLG1CQUFPLENBQUMsa0ZBQXFCO0FBQ3ZEOzs7Ozs7Ozs7Ozs7O0FDL0JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDWmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNaYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1phO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1hhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLHlEQUFXO0FBQ25DO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHVEQUFVO0FBQ2pDO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMscUVBQWlCO0FBQy9DO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsMkVBQW9CO0FBQ3JEO0FBQ0EsNkJBQTZCLG1CQUFPLENBQUMsbUZBQXdCO0FBQzdEO0FBQ0EsMEJBQTBCLG1CQUFPLENBQUMsNkVBQXFCO0FBQ3ZEO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsNkRBQWE7QUFDdkM7QUFDQSxjQUFjLG1CQUFPLENBQUMscURBQVM7QUFDL0I7QUFDQSxhQUFhLG1CQUFPLENBQUMseURBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25DYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG1FQUFtRTtBQUNwRTs7Ozs7Ozs7Ozs7OztBQ1JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsMERBQWM7QUFDekMseUJBQXlCLG1CQUFPLENBQUMsa0VBQTJCO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLDRFQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzTGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQywwREFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsd0RBQWdCO0FBQzdDO0FBQ0EsdUJBQXVCLG1CQUFPLENBQUMsNERBQWtCO0FBQ2pEO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsc0RBQWU7QUFDM0M7Ozs7Ozs7Ozs7Ozs7QUNuQkEsOENBQWE7QUFDYjtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQscUJBQXFCLG1CQUFPLENBQUMsd0RBQWdCO0FBQzdDLHVCQUF1QixtQkFBTyxDQUFDLDREQUFrQjtBQUNqRCx5QkFBeUIsbUJBQU8sQ0FBQyxnRUFBb0I7QUFDckQsOEJBQThCLG1CQUFPLENBQUMsNEVBQWdDO0FBQ3RFLHlCQUF5QixtQkFBTyxDQUFDLGtFQUEyQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDekxhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGtEQUFPO0FBQzdDLGNBQWMsbUJBQU8sQ0FBQyxzQ0FBVTtBQUNoQztBQUNBO0FBQ0EsNERBQTRELDBCQUEwQixFQUFFO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QscUNBQXFDO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxvU0FBb1M7QUFDcFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQSx1RkFBdUYsaURBQWlELEVBQUU7QUFDMUksa0ZBQWtGLDBDQUEwQyxFQUFFO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3RVYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGlCQUFpQixtQkFBTyxDQUFDLGdEQUFZO0FBQ3JDOzs7Ozs7Ozs7Ozs7O0FDSGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQywrQ0FBYztBQUN6QztBQUNBLG1CQUFtQixtQkFBTyxDQUFDLCtDQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHFDQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCx5QkFBeUIsbUJBQU8sQ0FBQywyREFBb0I7QUFDckQ7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyxxRUFBeUI7QUFDL0Q7QUFDQTtBQUNBLDRCQUE0QixtQkFBTyxDQUFDLGlFQUF1QjtBQUMzRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWlkaS10b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1JRElUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNSURJVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0Ly8gVGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcblx0Ly8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcblx0cmV0dXJuIHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0JyAmJlxuXHRcdGNvbnNvbGUubG9nICYmXG5cdFx0Y29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMgPSBbXTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0Ly8gRGVidWcuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5cdFx0Ly8gZGVidWcucmF3TG9nID0gcmF3TG9nO1xuXG5cdFx0Ly8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY3JlYXRlRGVidWcuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcblx0XHRcdGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwtP1xcZD9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vTUlESUV2ZW50c1wiKSk7XG52YXIgTUlESU1ldGFFdmVudENyZWF0b3JfMSA9IHJlcXVpcmUoXCIuL01JRElNZXRhRXZlbnRDcmVhdG9yXCIpO1xudmFyIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhcmlhYmxlLWxlbmd0aC12YWx1ZVwiKTtcbnZhciBjcmVhdGVOb3RlT2ZmRXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIGNoYW5uZWwgPSAoc3RhdHVzQnl0ZSAmIDB4RikgKyAxO1xuICAgIHZhciBub3RlTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCk7XG4gICAgdmFyIHJlbGVhc2UgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4ICsgMSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgMixcbiAgICAgICAgbmV3IEV2ZW50cy5Ob3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IG5vdGVOdW1iZXIsXG4gICAgICAgICAgICByZWxlYXNlOiByZWxlYXNlLFxuICAgICAgICB9KVxuICAgIF07XG59O1xudmFyIGNyZWF0ZU5vdGVPbkV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgbm90ZU51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHZhciB2ZWxvY2l0eSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXggKyAxKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAyLFxuICAgICAgICBuZXcgRXZlbnRzLk5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiBub3RlTnVtYmVyLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5LFxuICAgICAgICB9KVxuICAgIF07XG59O1xudmFyIGNyZWF0ZVN5c2V4RXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIF9hID0gdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgc3RhcnRJbmRleCksIGJ5dGVzUmVhZCA9IF9hWzBdLCBkYXRhTGVuZ3RoID0gX2FbMV07XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYnl0ZXNSZWFkICsgZGF0YUxlbmd0aCxcbiAgICAgICAgbmV3IEV2ZW50cy5TeXNFeEV2ZW50KHtcbiAgICAgICAgICAgIGV2ZW50RGF0YTogbmV3IFVpbnQ4QXJyYXkoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgc3RhcnRJbmRleCwgZGF0YUxlbmd0aCksXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlUHJvZ3JhbUNoYW5nZUV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgcHJvZ3JhbU51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHJldHVybiBbXG4gICAgICAgIDEsXG4gICAgICAgIG5ldyBFdmVudHMuUHJvZ3JhbUNoYW5nZUV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICBwcm9ncmFtTnVtYmVyOiBwcm9ncmFtTnVtYmVyLFxuICAgICAgICB9KVxuICAgIF07XG59O1xudmFyIGNyZWF0ZUNvbnRyb2xsZXJDaGFuZ2VFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cbiAgICB2YXIgY2hhbm5lbCA9IChzdGF0dXNCeXRlICYgMHhGKSArIDE7XG4gICAgdmFyIGNvbnRyb2xsZXJOdW1iZXIgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4KTtcbiAgICB2YXIgY29udHJvbGxlclZhbHVlID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCArIDEpO1xuICAgIHJldHVybiBbXG4gICAgICAgIDIsXG4gICAgICAgIG5ldyBFdmVudHMuQ29udHJvbGxlckNoYW5nZUV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICBjb250cm9sbGVyTnVtYmVyOiBjb250cm9sbGVyTnVtYmVyLFxuICAgICAgICAgICAgY29udHJvbGxlclZhbHVlOiBjb250cm9sbGVyVmFsdWUsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlUG9seXBob25pY0FmdGVydG91Y2hFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgbm90ZU51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHZhciBwcmVzc3VyZSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXggKyAxKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAyLFxuICAgICAgICBuZXcgRXZlbnRzLlBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IG5vdGVOdW1iZXIsXG4gICAgICAgICAgICBwcmVzc3VyZTogcHJlc3N1cmUsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlQ2hhbm5lbEFmdGVydG91Y2hFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgcHJlc3N1cmUgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4ICsgMSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgMSxcbiAgICAgICAgbmV3IEV2ZW50cy5DaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICBwcmVzc3VyZTogcHJlc3N1cmUsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlUGl0Y2hCZW5kRXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgY2hhbm5lbCA9IChzdGF0dXNCeXRlICYgMHhGKSArIDE7XG4gICAgdmFyIGxlYXN0U2lnbmlmaWNhbnRCeXRlID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCk7XG4gICAgdmFyIG1vc3RTaWduaWZpY2FudEJ5dGUgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4ICsgMSk7XG4gICAgdmFyIHZhbHVlID0gKChtb3N0U2lnbmlmaWNhbnRCeXRlICYgMHg3RikgPDwgNykgKyAobGVhc3RTaWduaWZpY2FudEJ5dGUgJiAweDdGKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAyLFxuICAgICAgICBuZXcgRXZlbnRzLlBpdGNoQmVuZEV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgZ2V0Q3JlYXRlRnVuY3Rpb24gPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSkge1xuICAgIGlmIChzdGF0dXNCeXRlID4+IDQgPT09IDB4OCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTm90ZU9mZkV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweDkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vdGVPbkV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweEEpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnRGcm9tQnl0ZXM7XG4gICAgfVxuICAgIGlmIChzdGF0dXNCeXRlID4+IDQgPT09IDB4Qikge1xuICAgICAgICByZXR1cm4gY3JlYXRlQ29udHJvbGxlckNoYW5nZUV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweEMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVByb2dyYW1DaGFuZ2VFdmVudEZyb21CeXRlcztcbiAgICB9XG4gICAgaWYgKHN0YXR1c0J5dGUgPj4gNCA9PT0gMHhEKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweEUpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBpdGNoQmVuZEV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA9PT0gMHhGMCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlU3lzZXhFdmVudEZyb21CeXRlcztcbiAgICB9XG4gICAgaWYgKHN0YXR1c0J5dGUgPT09IDB4RkYpIHtcbiAgICAgICAgcmV0dXJuIE1JRElNZXRhRXZlbnRDcmVhdG9yXzEuY3JlYXRlTWV0YUV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnRzLmV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKGRhdGFWaWV3LCBzdGFydEluZGV4LCBwcmV2aW91c1N0YXR1c0J5dGUpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgaWYgKHByZXZpb3VzU3RhdHVzQnl0ZSA9PT0gdm9pZCAwKSB7IHByZXZpb3VzU3RhdHVzQnl0ZSA9IG51bGw7IH1cbiAgICB2YXIgc3RhdHVzQnl0ZSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHZhciBjcmVhdGVGdW5jdGlvbiA9IGdldENyZWF0ZUZ1bmN0aW9uKHN0YXR1c0J5dGUpO1xuICAgIHZhciBieXRlc1JlYWQgPSAwO1xuICAgIGlmIChjcmVhdGVGdW5jdGlvbiA9PT0gbnVsbCAmJiBwcmV2aW91c1N0YXR1c0J5dGUgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdHVzQnl0ZSA9IHByZXZpb3VzU3RhdHVzQnl0ZTtcbiAgICAgICAgY3JlYXRlRnVuY3Rpb24gPSBnZXRDcmVhdGVGdW5jdGlvbihzdGF0dXNCeXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFRoZSBieXRlIGF0IHN0YXJ0SW5kZXggd2FzIHRoZSBzdGF0dXMgYnl0ZSwgc28gc2tpcCBpdCBpbiB0aGUgZGF0YVxuICAgICAgICBzdGFydEluZGV4ICs9IDE7XG4gICAgICAgIGJ5dGVzUmVhZCArPSAxO1xuICAgIH1cbiAgICBpZiAoY3JlYXRlRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgdmFyIF9hID0gY3JlYXRlRnVuY3Rpb24oc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpLCBldmVudEJ5dGVzUmVhZCA9IF9hWzBdLCBldmVudF8xID0gX2FbMV07XG4gICAgICAgIGJ5dGVzUmVhZCArPSBldmVudEJ5dGVzUmVhZDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ5dGVzUmVhZDogYnl0ZXNSZWFkLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XzEsXG4gICAgICAgICAgICBzdGF0dXNCeXRlOiBzdGF0dXNCeXRlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYW5uZWxBZnRlcnRvdWNoRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBwcmVzc3VyZSA9IF9hLnByZXNzdXJlO1xuICAgICAgICB0aGlzLnR5cGUgPSAzMiAvKiBDaGFubmVsQWZ0ZXJ0b3VjaCAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgIH1cbiAgICByZXR1cm4gQ2hhbm5lbEFmdGVydG91Y2hFdmVudDtcbn0oKSk7XG5leHBvcnRzLkNoYW5uZWxBZnRlcnRvdWNoRXZlbnQgPSBDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ29udHJvbGxlckNoYW5nZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChfYSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IF9hLmNoYW5uZWwsIGNvbnRyb2xsZXJOdW1iZXIgPSBfYS5jb250cm9sbGVyTnVtYmVyLCBjb250cm9sbGVyVmFsdWUgPSBfYS5jb250cm9sbGVyVmFsdWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDggLyogQ29udHJvbGxlckNoYW5nZSAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyTnVtYmVyID0gY29udHJvbGxlck51bWJlcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyVmFsdWUgPSBjb250cm9sbGVyVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBDb250cm9sbGVyQ2hhbmdlRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5Db250cm9sbGVyQ2hhbmdlRXZlbnQgPSBDb250cm9sbGVyQ2hhbmdlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDaGFubmVsUHJlZml4RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbFByZWZpeEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjaGFubmVsTnVtYmVyID0gX2EuY2hhbm5lbE51bWJlcjtcbiAgICAgICAgdGhpcy50eXBlID0gMTAyNCAvKiBNZXRhQ2hhbm5lbFByZWZpeCAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsTnVtYmVyID0gY2hhbm5lbE51bWJlcjtcbiAgICB9XG4gICAgcmV0dXJuIENoYW5uZWxQcmVmaXhFdmVudDtcbn0oKSk7XG5leHBvcnRzLkNoYW5uZWxQcmVmaXhFdmVudCA9IENoYW5uZWxQcmVmaXhFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvcHlyaWdodEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjb3B5cmlnaHQgPSBfYS5jb3B5cmlnaHQ7XG4gICAgICAgIHRoaXMudHlwZSA9IDQwOTYgLyogTWV0YUNvcHlyaWdodCAqLztcbiAgICAgICAgdGhpcy5jb3B5cmlnaHQgPSBjb3B5cmlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBDb3B5cmlnaHRFdmVudDtcbn0oKSk7XG5leHBvcnRzLkNvcHlyaWdodEV2ZW50ID0gQ29weXJpZ2h0RXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDdWVQb2ludEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGN1ZVRleHQgPSBfYS5jdWVUZXh0O1xuICAgICAgICB0aGlzLnR5cGUgPSA0MTk0MzA0IC8qIE1ldGFDdWVQb2ludCAqLztcbiAgICAgICAgdGhpcy5jdWVUZXh0ID0gY3VlVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIEN1ZVBvaW50RXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5DdWVQb2ludEV2ZW50ID0gQ3VlUG9pbnRFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5zdHJ1bWVudE5hbWVFdmVudChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDY1NTM2IC8qIE1ldGFJbnN0cnVtZW50TmFtZSAqLztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIEluc3RydW1lbnROYW1lRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5JbnN0cnVtZW50TmFtZUV2ZW50ID0gSW5zdHJ1bWVudE5hbWVFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtleVNpZ25hdHVyZUV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBzaGFycHMgPSBfYS5zaGFycHMsIGlzTWFqb3IgPSBfYS5pc01ham9yO1xuICAgICAgICB0aGlzLnR5cGUgPSA1MjQyODggLyogTWV0YUtleVNpZ25hdHVyZSAqLztcbiAgICAgICAgdGhpcy5zaGFycHMgPSBzaGFycHM7XG4gICAgICAgIHRoaXMuaXNNYWpvciA9IGlzTWFqb3I7XG4gICAgfVxuICAgIHJldHVybiBLZXlTaWduYXR1cmVFdmVudDtcbn0oKSk7XG5leHBvcnRzLktleVNpZ25hdHVyZUV2ZW50ID0gS2V5U2lnbmF0dXJlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMeXJpY0V2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEx5cmljRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGx5cmljID0gX2EubHlyaWM7XG4gICAgICAgIHRoaXMudHlwZSA9IDI2MjE0NCAvKiBNZXRhTHlyaWMgKi87XG4gICAgICAgIHRoaXMubHlyaWMgPSBseXJpYztcbiAgICB9XG4gICAgcmV0dXJuIEx5cmljRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5MeXJpY0V2ZW50ID0gTHlyaWNFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1hcmtlckV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcmtlckV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBtYXJrZXIgPSBfYS5tYXJrZXI7XG4gICAgICAgIHRoaXMudHlwZSA9IDEwNDg1NzYgLyogTWV0YU1hcmtlciAqLztcbiAgICAgICAgdGhpcy5tYXJrZXIgPSBtYXJrZXI7XG4gICAgfVxuICAgIHJldHVybiBNYXJrZXJFdmVudDtcbn0oKSk7XG5leHBvcnRzLk1hcmtlckV2ZW50ID0gTWFya2VyRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQb3J0UHJlZml4RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9ydFByZWZpeEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBwb3J0TnVtYmVyID0gX2EucG9ydE51bWJlcjtcbiAgICAgICAgdGhpcy50eXBlID0gNTEyIC8qIE1ldGFQb3J0UHJlZml4ICovO1xuICAgICAgICB0aGlzLnBvcnROdW1iZXIgPSBwb3J0TnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gUG9ydFByZWZpeEV2ZW50O1xufSgpKTtcbmV4cG9ydHMuUG9ydFByZWZpeEV2ZW50ID0gUG9ydFByZWZpeEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU01QVEVPZmZzZXRFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTTVBURU9mZnNldEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBob3VycyA9IF9hLmhvdXJzLCBtaW51dGVzID0gX2EubWludXRlcywgc2Vjb25kcyA9IF9hLnNlY29uZHMsIGZyYW1lcyA9IF9hLmZyYW1lcywgZnJhY3Rpb25hbEZyYW1lcyA9IF9hLmZyYWN0aW9uYWxGcmFtZXM7XG4gICAgICAgIHRoaXMudHlwZSA9IDMyNzY4IC8qIE1ldGFTTVBURU9mZnNldCAqLztcbiAgICAgICAgdGhpcy5ob3VycyA9IGhvdXJzO1xuICAgICAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICAgICAgICB0aGlzLnNlY29uZHMgPSBzZWNvbmRzO1xuICAgICAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICAgICAgdGhpcy5mcmFjdGlvbmFsRnJhbWVzID0gZnJhY3Rpb25hbEZyYW1lcztcbiAgICB9XG4gICAgcmV0dXJuIFNNUFRFT2Zmc2V0RXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5TTVBURU9mZnNldEV2ZW50ID0gU01QVEVPZmZzZXRFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNlcXVlbmNlTnVtYmVyRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VxdWVuY2VOdW1iZXJFdmVudChfYSkge1xuICAgICAgICB2YXIgc2VxdWVuY2VOdW1iZXIgPSBfYS5zZXF1ZW5jZU51bWJlcjtcbiAgICAgICAgdGhpcy50eXBlID0gMjU2IC8qIE1ldGFTZXF1ZW5jZU51bWJlciAqLztcbiAgICAgICAgdGhpcy5zZXF1ZW5jZU51bWJlciA9IHNlcXVlbmNlTnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gU2VxdWVuY2VOdW1iZXJFdmVudDtcbn0oKSk7XG5leHBvcnRzLlNlcXVlbmNlTnVtYmVyRXZlbnQgPSBTZXF1ZW5jZU51bWJlckV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2VxdWVuY2VyU3BlY2lmaWNFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZXF1ZW5jZXJTcGVjaWZpY0V2ZW50KF9hKSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkLCBkYXRhID0gX2EuZGF0YTtcbiAgICAgICAgdGhpcy50eXBlID0gMjA5NzE1MiAvKiBNZXRhU2VxdWVuY2VyU3BlY2lmaWMgKi87XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIFNlcXVlbmNlclNwZWNpZmljRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5TZXF1ZW5jZXJTcGVjaWZpY0V2ZW50ID0gU2VxdWVuY2VyU3BlY2lmaWNFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNldFRlbXBvRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0VGVtcG9FdmVudChfYSkge1xuICAgICAgICB2YXIgbWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGUgPSBfYS5taWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZTtcbiAgICAgICAgdGhpcy50eXBlID0gODE5MiAvKiBNZXRhU2V0VGVtcG8gKi87XG4gICAgICAgIHRoaXMubWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGUgPSBtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZTtcbiAgICB9XG4gICAgcmV0dXJuIFNldFRlbXBvRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5TZXRUZW1wb0V2ZW50ID0gU2V0VGVtcG9FdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFRleHRFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUZXh0RXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIHRleHQgPSBfYS50ZXh0O1xuICAgICAgICB0aGlzLnR5cGUgPSAyMDQ4IC8qIE1ldGFUZXh0ICovO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gVGV4dEV2ZW50O1xufSgpKTtcbmV4cG9ydHMuVGV4dEV2ZW50ID0gVGV4dEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVGltZVNpZ25hdHVyZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVTaWduYXR1cmVFdmVudChfYSkge1xuICAgICAgICB2YXIgbnVtZXJhdG9yID0gX2EubnVtZXJhdG9yLCBkZW5vbWluYXRvciA9IF9hLmRlbm9taW5hdG9yLCBjbG9ja3NQZXJUaWNrID0gX2EuY2xvY2tzUGVyVGljaywgdGhpcnR5U2Vjb25kTm90ZXMgPSBfYS50aGlydHlTZWNvbmROb3RlcztcbiAgICAgICAgdGhpcy50eXBlID0gMTMxMDcyIC8qIE1ldGFUaW1lU2lnbmF0dXJlICovO1xuICAgICAgICB0aGlzLm51bWVyYXRvciA9IG51bWVyYXRvcjtcbiAgICAgICAgdGhpcy5kZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgICB0aGlzLmNsb2Nrc1BlclRpY2sgPSBjbG9ja3NQZXJUaWNrO1xuICAgICAgICB0aGlzLnRoaXJ0eVNlY29uZE5vdGVzID0gdGhpcnR5U2Vjb25kTm90ZXM7XG4gICAgfVxuICAgIHJldHVybiBUaW1lU2lnbmF0dXJlRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5UaW1lU2lnbmF0dXJlRXZlbnQgPSBUaW1lU2lnbmF0dXJlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUcmFja05hbWVFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFja05hbWVFdmVudChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDE2Mzg0IC8qIE1ldGFUcmFja05hbWUgKi87XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiBUcmFja05hbWVFdmVudDtcbn0oKSk7XG5leHBvcnRzLlRyYWNrTmFtZUV2ZW50ID0gVHJhY2tOYW1lRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTZXF1ZW5jZU51bWJlcl8xID0gcmVxdWlyZShcIi4vU2VxdWVuY2VOdW1iZXJcIik7XG5leHBvcnRzLlNlcXVlbmNlTnVtYmVyRXZlbnQgPSBTZXF1ZW5jZU51bWJlcl8xLlNlcXVlbmNlTnVtYmVyRXZlbnQ7XG52YXIgVGltZVNpZ25hdHVyZV8xID0gcmVxdWlyZShcIi4vVGltZVNpZ25hdHVyZVwiKTtcbmV4cG9ydHMuVGltZVNpZ25hdHVyZUV2ZW50ID0gVGltZVNpZ25hdHVyZV8xLlRpbWVTaWduYXR1cmVFdmVudDtcbnZhciBLZXlTaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL0tleVNpZ25hdHVyZVwiKTtcbmV4cG9ydHMuS2V5U2lnbmF0dXJlRXZlbnQgPSBLZXlTaWduYXR1cmVfMS5LZXlTaWduYXR1cmVFdmVudDtcbnZhciBTZXRUZW1wb18xID0gcmVxdWlyZShcIi4vU2V0VGVtcG9cIik7XG5leHBvcnRzLlNldFRlbXBvRXZlbnQgPSBTZXRUZW1wb18xLlNldFRlbXBvRXZlbnQ7XG52YXIgUG9ydFByZWZpeF8xID0gcmVxdWlyZShcIi4vUG9ydFByZWZpeFwiKTtcbmV4cG9ydHMuUG9ydFByZWZpeEV2ZW50ID0gUG9ydFByZWZpeF8xLlBvcnRQcmVmaXhFdmVudDtcbnZhciBDaGFubmVsUHJlZml4XzEgPSByZXF1aXJlKFwiLi9DaGFubmVsUHJlZml4XCIpO1xuZXhwb3J0cy5DaGFubmVsUHJlZml4RXZlbnQgPSBDaGFubmVsUHJlZml4XzEuQ2hhbm5lbFByZWZpeEV2ZW50O1xudmFyIENvcHlyaWdodF8xID0gcmVxdWlyZShcIi4vQ29weXJpZ2h0XCIpO1xuZXhwb3J0cy5Db3B5cmlnaHRFdmVudCA9IENvcHlyaWdodF8xLkNvcHlyaWdodEV2ZW50O1xudmFyIFRyYWNrTmFtZV8xID0gcmVxdWlyZShcIi4vVHJhY2tOYW1lXCIpO1xuZXhwb3J0cy5UcmFja05hbWVFdmVudCA9IFRyYWNrTmFtZV8xLlRyYWNrTmFtZUV2ZW50O1xudmFyIFRleHRfMSA9IHJlcXVpcmUoXCIuL1RleHRcIik7XG5leHBvcnRzLlRleHRFdmVudCA9IFRleHRfMS5UZXh0RXZlbnQ7XG52YXIgSW5zdHJ1bWVudE5hbWVfMSA9IHJlcXVpcmUoXCIuL0luc3RydW1lbnROYW1lXCIpO1xuZXhwb3J0cy5JbnN0cnVtZW50TmFtZUV2ZW50ID0gSW5zdHJ1bWVudE5hbWVfMS5JbnN0cnVtZW50TmFtZUV2ZW50O1xudmFyIEx5cmljXzEgPSByZXF1aXJlKFwiLi9MeXJpY1wiKTtcbmV4cG9ydHMuTHlyaWNFdmVudCA9IEx5cmljXzEuTHlyaWNFdmVudDtcbnZhciBNYXJrZXJfMSA9IHJlcXVpcmUoXCIuL01hcmtlclwiKTtcbmV4cG9ydHMuTWFya2VyRXZlbnQgPSBNYXJrZXJfMS5NYXJrZXJFdmVudDtcbnZhciBDdWVQb2ludF8xID0gcmVxdWlyZShcIi4vQ3VlUG9pbnRcIik7XG5leHBvcnRzLkN1ZVBvaW50RXZlbnQgPSBDdWVQb2ludF8xLkN1ZVBvaW50RXZlbnQ7XG52YXIgU01QVEVPZmZzZXRfMSA9IHJlcXVpcmUoXCIuL1NNUFRFT2Zmc2V0XCIpO1xuZXhwb3J0cy5TTVBURU9mZnNldEV2ZW50ID0gU01QVEVPZmZzZXRfMS5TTVBURU9mZnNldEV2ZW50O1xudmFyIFNlcXVlbmNlclNwZWNpZmljXzEgPSByZXF1aXJlKFwiLi9TZXF1ZW5jZXJTcGVjaWZpY1wiKTtcbmV4cG9ydHMuU2VxdWVuY2VyU3BlY2lmaWNFdmVudCA9IFNlcXVlbmNlclNwZWNpZmljXzEuU2VxdWVuY2VyU3BlY2lmaWNFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE5vdGVPZmZFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RlT2ZmRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBub3RlTnVtYmVyID0gX2Eubm90ZU51bWJlciwgcmVsZWFzZSA9IF9hLnJlbGVhc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IDEgLyogTm90ZU9mZiAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5ub3RlTnVtYmVyID0gbm90ZU51bWJlcjtcbiAgICAgICAgdGhpcy5yZWxlYXNlID0gcmVsZWFzZTtcbiAgICB9XG4gICAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKSk7XG5leHBvcnRzLk5vdGVPZmZFdmVudCA9IE5vdGVPZmZFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE5vdGVPbkV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGVPbkV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gX2EuY2hhbm5lbCwgbm90ZU51bWJlciA9IF9hLm5vdGVOdW1iZXIsIHZlbG9jaXR5ID0gX2EudmVsb2NpdHk7XG4gICAgICAgIHRoaXMudHlwZSA9IDIgLyogTm90ZU9uICovO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLm5vdGVOdW1iZXIgPSBub3RlTnVtYmVyO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgfVxuICAgIHJldHVybiBOb3RlT25FdmVudDtcbn0oKSk7XG5leHBvcnRzLk5vdGVPbkV2ZW50ID0gTm90ZU9uRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQaXRjaEJlbmRFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQaXRjaEJlbmRFdmVudChfYSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IF9hLmNoYW5uZWwsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDY0IC8qIFBpdGNoQmVuZCAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gUGl0Y2hCZW5kRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5QaXRjaEJlbmRFdmVudCA9IFBpdGNoQmVuZEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9seXBob25pY0FmdGVydG91Y2hFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gX2EuY2hhbm5lbCwgbm90ZU51bWJlciA9IF9hLm5vdGVOdW1iZXIsIHByZXNzdXJlID0gX2EucHJlc3N1cmU7XG4gICAgICAgIHRoaXMudHlwZSA9IDQgLyogUG9seXBob25pY0FmdGVydG91Y2ggKi87XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMubm90ZU51bWJlciA9IG5vdGVOdW1iZXI7XG4gICAgICAgIHRoaXMucHJlc3N1cmUgPSBwcmVzc3VyZTtcbiAgICB9XG4gICAgcmV0dXJuIFBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5Qb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50ID0gUG9seXBob25pY0FmdGVydG91Y2hFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFByb2dyYW1DaGFuZ2VFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcm9ncmFtQ2hhbmdlRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBwcm9ncmFtTnVtYmVyID0gX2EucHJvZ3JhbU51bWJlcjtcbiAgICAgICAgdGhpcy50eXBlID0gMTYgLyogUHJvZ3JhbUNoYW5nZSAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5wcm9ncmFtTnVtYmVyID0gcHJvZ3JhbU51bWJlcjtcbiAgICB9XG4gICAgcmV0dXJuIFByb2dyYW1DaGFuZ2VFdmVudDtcbn0oKSk7XG5leHBvcnRzLlByb2dyYW1DaGFuZ2VFdmVudCA9IFByb2dyYW1DaGFuZ2VFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN5c0V4RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3lzRXhFdmVudChfYSkge1xuICAgICAgICB2YXIgZXZlbnREYXRhID0gX2EuZXZlbnREYXRhO1xuICAgICAgICB0aGlzLnR5cGUgPSAxMjggLyogU3lzZXggKi87XG4gICAgICAgIHRoaXMuZXZlbnREYXRhID0gZXZlbnREYXRhO1xuICAgIH1cbiAgICByZXR1cm4gU3lzRXhFdmVudDtcbn0oKSk7XG5leHBvcnRzLlN5c0V4RXZlbnQgPSBTeXNFeEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTm90ZU9mZl8xID0gcmVxdWlyZShcIi4vTm90ZU9mZlwiKTtcbmV4cG9ydHMuTm90ZU9mZkV2ZW50ID0gTm90ZU9mZl8xLk5vdGVPZmZFdmVudDtcbnZhciBOb3RlT25fMSA9IHJlcXVpcmUoXCIuL05vdGVPblwiKTtcbmV4cG9ydHMuTm90ZU9uRXZlbnQgPSBOb3RlT25fMS5Ob3RlT25FdmVudDtcbnZhciBQcm9ncmFtQ2hhbmdlXzEgPSByZXF1aXJlKFwiLi9Qcm9ncmFtQ2hhbmdlXCIpO1xuZXhwb3J0cy5Qcm9ncmFtQ2hhbmdlRXZlbnQgPSBQcm9ncmFtQ2hhbmdlXzEuUHJvZ3JhbUNoYW5nZUV2ZW50O1xudmFyIENvbnRyb2xsZXJDaGFuZ2VfMSA9IHJlcXVpcmUoXCIuL0NvbnRyb2xsZXJDaGFuZ2VcIik7XG5leHBvcnRzLkNvbnRyb2xsZXJDaGFuZ2VFdmVudCA9IENvbnRyb2xsZXJDaGFuZ2VfMS5Db250cm9sbGVyQ2hhbmdlRXZlbnQ7XG52YXIgUG9seXBob25pY0FmdGVydG91Y2hfMSA9IHJlcXVpcmUoXCIuL1BvbHlwaG9uaWNBZnRlcnRvdWNoXCIpO1xuZXhwb3J0cy5Qb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50ID0gUG9seXBob25pY0FmdGVydG91Y2hfMS5Qb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50O1xudmFyIENoYW5uZWxBZnRlcnRvdWNoXzEgPSByZXF1aXJlKFwiLi9DaGFubmVsQWZ0ZXJ0b3VjaFwiKTtcbmV4cG9ydHMuQ2hhbm5lbEFmdGVydG91Y2hFdmVudCA9IENoYW5uZWxBZnRlcnRvdWNoXzEuQ2hhbm5lbEFmdGVydG91Y2hFdmVudDtcbnZhciBQaXRjaEJlbmRfMSA9IHJlcXVpcmUoXCIuL1BpdGNoQmVuZFwiKTtcbmV4cG9ydHMuUGl0Y2hCZW5kRXZlbnQgPSBQaXRjaEJlbmRfMS5QaXRjaEJlbmRFdmVudDtcbnZhciBTeXNFeF8xID0gcmVxdWlyZShcIi4vU3lzRXhcIik7XG5leHBvcnRzLlN5c0V4RXZlbnQgPSBTeXNFeF8xLlN5c0V4RXZlbnQ7XG52YXIgTWV0YV8xID0gcmVxdWlyZShcIi4vTWV0YVwiKTtcbmV4cG9ydHMuTWV0YSA9IHtcbiAgICBTZXF1ZW5jZU51bWJlckV2ZW50OiBNZXRhXzEuU2VxdWVuY2VOdW1iZXJFdmVudCxcbiAgICBUaW1lU2lnbmF0dXJlRXZlbnQ6IE1ldGFfMS5UaW1lU2lnbmF0dXJlRXZlbnQsXG4gICAgS2V5U2lnbmF0dXJlRXZlbnQ6IE1ldGFfMS5LZXlTaWduYXR1cmVFdmVudCxcbiAgICBTZXRUZW1wb0V2ZW50OiBNZXRhXzEuU2V0VGVtcG9FdmVudCxcbiAgICBQb3J0UHJlZml4RXZlbnQ6IE1ldGFfMS5Qb3J0UHJlZml4RXZlbnQsXG4gICAgQ2hhbm5lbFByZWZpeEV2ZW50OiBNZXRhXzEuQ2hhbm5lbFByZWZpeEV2ZW50LFxuICAgIENvcHlyaWdodEV2ZW50OiBNZXRhXzEuQ29weXJpZ2h0RXZlbnQsXG4gICAgVHJhY2tOYW1lRXZlbnQ6IE1ldGFfMS5UcmFja05hbWVFdmVudCxcbiAgICBUZXh0RXZlbnQ6IE1ldGFfMS5UZXh0RXZlbnQsXG4gICAgSW5zdHJ1bWVudE5hbWVFdmVudDogTWV0YV8xLkluc3RydW1lbnROYW1lRXZlbnQsXG4gICAgTHlyaWNFdmVudDogTWV0YV8xLkx5cmljRXZlbnQsXG4gICAgTWFya2VyRXZlbnQ6IE1ldGFfMS5NYXJrZXJFdmVudCxcbiAgICBDdWVQb2ludEV2ZW50OiBNZXRhXzEuQ3VlUG9pbnRFdmVudCxcbiAgICBTTVBURU9mZnNldEV2ZW50OiBNZXRhXzEuU01QVEVPZmZzZXRFdmVudCxcbiAgICBTZXF1ZW5jZXJTcGVjaWZpY0V2ZW50OiBNZXRhXzEuU2VxdWVuY2VyU3BlY2lmaWNFdmVudCxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRmlsZVR5cGU7XG4oZnVuY3Rpb24gKE1JRElGaWxlVHlwZSkge1xuICAgIE1JRElGaWxlVHlwZVtNSURJRmlsZVR5cGVbXCJGb3JtYXQwXCJdID0gMF0gPSBcIkZvcm1hdDBcIjtcbiAgICBNSURJRmlsZVR5cGVbTUlESUZpbGVUeXBlW1wiRm9ybWF0MVwiXSA9IDFdID0gXCJGb3JtYXQxXCI7XG4gICAgTUlESUZpbGVUeXBlW01JRElGaWxlVHlwZVtcIkZvcm1hdDJcIl0gPSAyXSA9IFwiRm9ybWF0MlwiO1xufSkoTUlESUZpbGVUeXBlID0gZXhwb3J0cy5NSURJRmlsZVR5cGUgfHwgKGV4cG9ydHMuTUlESUZpbGVUeXBlID0ge30pKTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElFdmVudHNfMSA9IHJlcXVpcmUoXCIuL01JRElFdmVudHNcIik7XG52YXIgYnVmZmVyX3RvX3N0cmluZ18xID0gcmVxdWlyZShcIi4uL3V0aWxzL2J1ZmZlci10by1zdHJpbmdcIik7XG52YXIgdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlXCIpO1xudmFyIHJlYWRTdHJpbmdNZXRhRXZlbnQgPSBmdW5jdGlvbiAoZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgaW5kZXggPSBzdGFydEluZGV4O1xuICAgIHZhciBfYSA9IHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlKGRhdGFWaWV3LmJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCArIGluZGV4KSwgYnl0ZXNSZWFkID0gX2FbMF0sIHN0cmluZ0xlbmd0aCA9IF9hWzFdO1xuICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICB2YXIgc3RyID0gYnVmZmVyX3RvX3N0cmluZ18xLmJ1ZmZlclRvU3RyaW5nKGRhdGFWaWV3LmJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCArIGluZGV4LCBzdHJpbmdMZW5ndGgpO1xuICAgIGluZGV4ID0gaW5kZXggKyBzdHJpbmdMZW5ndGg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYnl0ZXNSZWFkICsgc3RyaW5nTGVuZ3RoLFxuICAgICAgICBzdHJcbiAgICBdO1xufTtcbmV4cG9ydHMuY3JlYXRlTWV0YUV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgIHZhciBpbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdmFyIG1ldGFFdmVudFR5cGVOdW0gPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgaW5kZXggKz0gMTtcbiAgICB2YXIgZXZlbnQ7XG4gICAgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDApIHtcbiAgICAgICAgLy8gTmV4dCBieXRlIGlzIDB4MDItLXNraXAgaXRcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIHNlcXVlbmNlTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDE2KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMjtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuU2VxdWVuY2VOdW1iZXJFdmVudCh7XG4gICAgICAgICAgICBzZXF1ZW5jZU51bWJlcjogc2VxdWVuY2VOdW1iZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDAxKSB7XG4gICAgICAgIHZhciBfYSA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2FbMF0sIHRleHQgPSBfYVsxXTtcbiAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5UZXh0RXZlbnQoe1xuICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDIpIHtcbiAgICAgICAgdmFyIF9iID0gcmVhZFN0cmluZ01ldGFFdmVudChkYXRhVmlldywgaW5kZXgpLCBieXRlc1JlYWQgPSBfYlswXSwgY29weXJpZ2h0ID0gX2JbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuQ29weXJpZ2h0RXZlbnQoe1xuICAgICAgICAgICAgY29weXJpZ2h0OiBjb3B5cmlnaHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDAzKSB7XG4gICAgICAgIHZhciBfYyA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2NbMF0sIG5hbWVfMSA9IF9jWzFdO1xuICAgICAgICBpbmRleCArPSBieXRlc1JlYWQ7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLlRyYWNrTmFtZUV2ZW50KHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWVfMSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDQpIHtcbiAgICAgICAgdmFyIF9kID0gcmVhZFN0cmluZ01ldGFFdmVudChkYXRhVmlldywgaW5kZXgpLCBieXRlc1JlYWQgPSBfZFswXSwgbmFtZV8yID0gX2RbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuSW5zdHJ1bWVudE5hbWVFdmVudCh7XG4gICAgICAgICAgICBuYW1lOiBuYW1lXzIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDA1KSB7XG4gICAgICAgIHZhciBfZSA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2VbMF0sIGx5cmljID0gX2VbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuTHlyaWNFdmVudCh7XG4gICAgICAgICAgICBseXJpYzogbHlyaWMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDA2KSB7XG4gICAgICAgIHZhciBfZiA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2ZbMF0sIG1hcmtlciA9IF9mWzFdO1xuICAgICAgICBpbmRleCArPSBieXRlc1JlYWQ7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLk1hcmtlckV2ZW50KHtcbiAgICAgICAgICAgIG1hcmtlcjogbWFya2VyLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHgwNykge1xuICAgICAgICB2YXIgX2cgPSByZWFkU3RyaW5nTWV0YUV2ZW50KGRhdGFWaWV3LCBpbmRleCksIGJ5dGVzUmVhZCA9IF9nWzBdLCBjdWVUZXh0ID0gX2dbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuQ3VlUG9pbnRFdmVudCh7XG4gICAgICAgICAgICBjdWVUZXh0OiBjdWVUZXh0LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHgyMCkge1xuICAgICAgICAvLyBTa2lwIG5leHQgYnl0ZSBzaW5jZSBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBjaGFubmVsTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5DaGFubmVsUHJlZml4RXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbE51bWJlcjogY2hhbm5lbE51bWJlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MjEpIHtcbiAgICAgICAgLy8gU2tpcCBuZXh0IGJ5dGUgc2luY2UgaXQgaXMgYSBjb25zdGFudFxuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgcG9ydE51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuUG9ydFByZWZpeEV2ZW50KHtcbiAgICAgICAgICAgIHBvcnROdW1iZXI6IHBvcnROdW1iZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDJGKSB7XG4gICAgICAgIC8vIEVuZCBvZiB0cmFjayBldmVudFxuICAgICAgICBpbmRleCArPSAxO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDUxKSB7XG4gICAgICAgIC8vIE5leHQgYnl0ZSBpcyAweDAzLS1za2lwIGl0XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZSA9IChkYXRhVmlldy5nZXRVaW50OChpbmRleCkgPDwgMTYpICtcbiAgICAgICAgICAgIChkYXRhVmlldy5nZXRVaW50OChpbmRleCArIDEpIDw8IDgpICsgZGF0YVZpZXcuZ2V0VWludDgoaW5kZXggKyAyKTtcbiAgICAgICAgaW5kZXggKz0gMztcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuU2V0VGVtcG9FdmVudCh7XG4gICAgICAgICAgICBtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZTogbWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDU0KSB7XG4gICAgICAgIC8vIFNraXAgbmV4dCBieXRlIGJlY2F1c2UgaXQncyBhIGNvbnN0YW50XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBob3VycyA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBzZWNvbmRzID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgZnJhbWVzXzEgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBmcmFjdGlvbmFsRnJhbWVzID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5TTVBURU9mZnNldEV2ZW50KHtcbiAgICAgICAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgICAgICAgIG1pbnV0ZXM6IG1pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzOiBzZWNvbmRzLFxuICAgICAgICAgICAgZnJhbWVzOiBmcmFtZXNfMSxcbiAgICAgICAgICAgIGZyYWN0aW9uYWxGcmFtZXM6IGZyYWN0aW9uYWxGcmFtZXMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDU4KSB7XG4gICAgICAgIC8vIE5leHQgYnl0ZSBpcyAweDA0LS1za2lwIGl0XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBkZW5vbWluYXRvciA9IE1hdGgucG93KDIsIGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KSk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBjbG9ja3NQZXJUaWNrID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgdGhpcnR5U2Vjb25kTm90ZXMgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLlRpbWVTaWduYXR1cmVFdmVudCh7XG4gICAgICAgICAgICBudW1lcmF0b3I6IG51bWVyYXRvcixcbiAgICAgICAgICAgIGRlbm9taW5hdG9yOiBkZW5vbWluYXRvcixcbiAgICAgICAgICAgIGNsb2Nrc1BlclRpY2s6IGNsb2Nrc1BlclRpY2ssXG4gICAgICAgICAgICB0aGlydHlTZWNvbmROb3RlczogdGhpcnR5U2Vjb25kTm90ZXMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDU5KSB7XG4gICAgICAgIC8vIE5leHQgYnl0ZSBpcyAweDAyLS1za2lwIGl0XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBzaGFycHMgPSBkYXRhVmlldy5nZXRJbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIGlzTWFqb3IgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCkgPT09IDA7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLktleVNpZ25hdHVyZUV2ZW50KHtcbiAgICAgICAgICAgIHNoYXJwczogc2hhcnBzLFxuICAgICAgICAgICAgaXNNYWpvcjogaXNNYWpvcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4N0YpIHtcbiAgICAgICAgdmFyIF9oID0gdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgaW5kZXgpLCBieXRlc1JlYWQgPSBfaFswXSwgbGVuZ3RoXzEgPSBfaFsxXTtcbiAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGFWaWV3LmJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCArIGluZGV4LCBsZW5ndGhfMSk7XG4gICAgICAgIHZhciBpZCA9IGRhdGEuc2xpY2UoMCwgMSk7XG4gICAgICAgIGlmIChpZFswXSA9PT0gMCkge1xuICAgICAgICAgICAgaWQgPSBkYXRhLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoMyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5TZXF1ZW5jZXJTcGVjaWZpY0V2ZW50KHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBNSURJIG1ldGEgZXZlbnQgdHlwZSAweFwiICsgbWV0YUV2ZW50VHlwZU51bS50b1N0cmluZygxNikpO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICBpbmRleCAtIHN0YXJ0SW5kZXgsXG4gICAgICAgIGV2ZW50LFxuICAgIF07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJUGFyc2VFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTUlESVBhcnNlRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTUlESVBhcnNlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJJbnZhbGlkIE1JREkgZmlsZTogXCIgKyBtZXNzYWdlKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gTUlESVBhcnNlRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnRzLk1JRElQYXJzZUVycm9yID0gTUlESVBhcnNlRXJyb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRXZlbnRzXzEgPSByZXF1aXJlKFwiLi9NSURJRXZlbnRzXCIpO1xuZXhwb3J0cy5NSURJRXZlbnRzID0ge1xuICAgIE5vdGVPZmZFdmVudDogTUlESUV2ZW50c18xLk5vdGVPZmZFdmVudCxcbiAgICBOb3RlT25FdmVudDogTUlESUV2ZW50c18xLk5vdGVPbkV2ZW50LFxuICAgIFByb2dyYW1DaGFuZ2VFdmVudDogTUlESUV2ZW50c18xLlByb2dyYW1DaGFuZ2VFdmVudCxcbiAgICBDb250cm9sbGVyQ2hhbmdlRXZlbnQ6IE1JRElFdmVudHNfMS5Db250cm9sbGVyQ2hhbmdlRXZlbnQsXG4gICAgUG9seXBob25pY0FmdGVydG91Y2hFdmVudDogTUlESUV2ZW50c18xLlBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnQsXG4gICAgQ2hhbm5lbEFmdGVydG91Y2hFdmVudDogTUlESUV2ZW50c18xLkNoYW5uZWxBZnRlcnRvdWNoRXZlbnQsXG4gICAgUGl0Y2hCZW5kRXZlbnQ6IE1JRElFdmVudHNfMS5QaXRjaEJlbmRFdmVudCxcbiAgICBTeXNFeEV2ZW50OiBNSURJRXZlbnRzXzEuU3lzRXhFdmVudCxcbiAgICBNZXRhOiBNSURJRXZlbnRzXzEuTWV0YSxcbn07XG52YXIgTUlESUZpbGVUeXBlXzEgPSByZXF1aXJlKFwiLi9NSURJRmlsZVR5cGVcIik7XG5leHBvcnRzLk1JRElGaWxlVHlwZSA9IE1JRElGaWxlVHlwZV8xLk1JRElGaWxlVHlwZTtcbnZhciBNSURJUGFyc2VFcnJvcl8xID0gcmVxdWlyZShcIi4vTUlESVBhcnNlRXJyb3JcIik7XG5leHBvcnRzLk1JRElQYXJzZUVycm9yID0gTUlESVBhcnNlRXJyb3JfMS5NSURJUGFyc2VFcnJvcjtcbnZhciBtaWRpX3JlYWRlcl8xID0gcmVxdWlyZShcIi4vbWlkaS1yZWFkZXJcIik7XG5leHBvcnRzLk1JRElSZWFkZXIgPSBtaWRpX3JlYWRlcl8xLk1JRElSZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElGaWxlVHlwZV8xID0gcmVxdWlyZShcIi4vTUlESUZpbGVUeXBlXCIpO1xudmFyIE1JRElQYXJzZUVycm9yXzEgPSByZXF1aXJlKFwiLi9NSURJUGFyc2VFcnJvclwiKTtcbnZhciBNSURJRXZlbnRDcmVhdG9yXzEgPSByZXF1aXJlKFwiLi9NSURJRXZlbnRDcmVhdG9yXCIpO1xudmFyIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhcmlhYmxlLWxlbmd0aC12YWx1ZVwiKTtcbnZhciBidWZmZXJfdG9fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvYnVmZmVyLXRvLXN0cmluZ1wiKTtcbnZhciBNSURJUmVhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1JRElSZWFkZXIoYnVmZmVyKSB7XG4gICAgICAgIGlmIChidWZmZXIgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJPZmZzZXQgPSBidWZmZXIuYnl0ZU9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlci5idWZmZXI7XG4gICAgICAgICAgICB0aGlzLmRhdGFWaWV3ID0gYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ1ZmZlciBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJPZmZzZXQgPSBidWZmZXIuYnl0ZU9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlci5idWZmZXI7XG4gICAgICAgICAgICB0aGlzLmRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuYnVmZmVyLCB0aGlzLmJ1ZmZlck9mZnNldCwgdGhpcy5idWZmZXJMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdGhpcy5idWZmZXJMZW5ndGggPSBidWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5kYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLmJ1ZmZlciwgdGhpcy5idWZmZXJPZmZzZXQsIHRoaXMuYnVmZmVyTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsZUhlYWRlckNodW5rID0gdGhpcy5yZWFkU3RyaW5nKDAsIDQpO1xuICAgICAgICBpZiAoZmlsZUhlYWRlckNodW5rICE9PSAnTVRoZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNSURJUGFyc2VFcnJvcl8xLk1JRElQYXJzZUVycm9yKCdGaWxlIGRvZXMgbm90IHN0YXJ0IHdpdGggYSBoZWFkZXIgY2h1bmsnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLnJlYWRGaWxlSGVhZGVyKDQpLCB0cmFja1N0YXJ0T2Zmc2V0ID0gX2FbMF0sIGhlYWRlciA9IF9hWzFdO1xuICAgICAgICB0aGlzLnRyYWNrU3RhcnRPZmZzZXQgPSB0cmFja1N0YXJ0T2Zmc2V0ICsgNDtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuICAgIE1JRElSZWFkZXIucHJvdG90eXBlLnJlYWRVaW50MzIgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhVmlldy5nZXRVaW50MzIoc3RhcnRJbmRleCk7XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkVWludDE2ID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVZpZXcuZ2V0VWludDE2KHN0YXJ0SW5kZXgpO1xuICAgIH07XG4gICAgTUlESVJlYWRlci5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcl90b19zdHJpbmdfMS5idWZmZXJUb1N0cmluZyh0aGlzLmJ1ZmZlciwgdGhpcy5idWZmZXJPZmZzZXQgKyBzdGFydEluZGV4LCBsZW5ndGgpO1xuICAgIH07XG4gICAgTUlESVJlYWRlci5wcm90b3R5cGUucmVhZFZhcmlhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlKHRoaXMuYnVmZmVyLCB0aGlzLmJ1ZmZlck9mZnNldCArIHN0YXJ0SW5kZXgpO1xuICAgIH07XG4gICAgTUlESVJlYWRlci5wcm90b3R5cGUucmVhZE1JRElFdmVudCA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCB0cmFja051bWJlciwgcHJldmlvdXNTdGF0dXNCeXRlKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucmVhZFZhcmlhYmxlTGVuZ3RoKHN0YXJ0SW5kZXgpLCBieXRlc1JlYWQgPSBfYVswXSwgZGVsdGFUaW1lID0gX2FbMV07XG4gICAgICAgIHZhciBpbmRleCA9IHN0YXJ0SW5kZXggKyBieXRlc1JlYWQ7XG4gICAgICAgIHZhciBldmVudE9yTnVsbCA9IE1JRElFdmVudENyZWF0b3JfMS5ldmVudEZyb21CeXRlcyh0aGlzLmRhdGFWaWV3LCBpbmRleCwgcHJldmlvdXNTdGF0dXNCeXRlKTtcbiAgICAgICAgaWYgKGV2ZW50T3JOdWxsID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHVzQnl0ZV8xID0gdGhpcy5kYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTUlESVBhcnNlRXJyb3JfMS5NSURJUGFyc2VFcnJvcihcIlVua25vd24gTUlESSBldmVudCBzdGF0dXMgMHhcIiArIHN0YXR1c0J5dGVfMS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV2ZW50Qnl0ZXNSZWFkID0gZXZlbnRPck51bGwuYnl0ZXNSZWFkLCBldmVudCA9IGV2ZW50T3JOdWxsLmV2ZW50LCBzdGF0dXNCeXRlID0gZXZlbnRPck51bGwuc3RhdHVzQnl0ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ5dGVzUmVhZDogaW5kZXggKyBldmVudEJ5dGVzUmVhZCAtIHN0YXJ0SW5kZXgsXG4gICAgICAgICAgICBldmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICB0cmFja051bWJlcjogdHJhY2tOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVsdGFUaW1lOiBkZWx0YVRpbWUsXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1c0J5dGU6IHN0YXR1c0J5dGUsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkRmlsZUhlYWRlciA9IGZ1bmN0aW9uIChzdGFydEluZGV4KSB7XG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmRhdGFWaWV3LmdldFVpbnQzMihzdGFydEluZGV4KTtcbiAgICAgICAgLy8gQWRkIDQgYnl0ZXMgZm9yIHRoZSBsZW5ndGggZmllbGRcbiAgICAgICAgdmFyIGluZGV4ID0gc3RhcnRJbmRleCArIDQ7XG4gICAgICAgIHZhciBmaWxlVHlwZU51bWJlciA9IHRoaXMuZGF0YVZpZXcuZ2V0VWludDE2KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMjtcbiAgICAgICAgdmFyIGZpbGVUeXBlO1xuICAgICAgICBpZiAoZmlsZVR5cGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgIGZpbGVUeXBlID0gTUlESUZpbGVUeXBlXzEuTUlESUZpbGVUeXBlLkZvcm1hdDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVR5cGVOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgIGZpbGVUeXBlID0gTUlESUZpbGVUeXBlXzEuTUlESUZpbGVUeXBlLkZvcm1hdDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVR5cGVOdW1iZXIgPT09IDIpIHtcbiAgICAgICAgICAgIGZpbGVUeXBlID0gTUlESUZpbGVUeXBlXzEuTUlESUZpbGVUeXBlLkZvcm1hdDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTUlESVBhcnNlRXJyb3JfMS5NSURJUGFyc2VFcnJvcihcIlVua25vd24gTUlESSBmaWxlIHR5cGU6IFwiICsgZmlsZVR5cGVOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0cmFja0NvdW50ID0gdGhpcy5kYXRhVmlldy5nZXRVaW50MTYoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAyO1xuICAgICAgICB2YXIgZGl2aXNpb25OdW0gPSB0aGlzLmRhdGFWaWV3LmdldFVpbnQxNihpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDI7XG4gICAgICAgIHZhciBkaXZpc2lvbjtcbiAgICAgICAgLy8gaGlnaCBiaXQgc2V0ID0gU01QVEVcbiAgICAgICAgaWYgKGRpdmlzaW9uTnVtID4+IDE1ID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgZGVsdGFUaW1lUGVyRnJhbWUgPSBkaXZpc2lvbk51bSAmIDB4RjtcbiAgICAgICAgICAgIHZhciBuZWdhdGl2ZUZyYW1lc1BlclNlY29uZCA9IChkaXZpc2lvbk51bSA+PiA4KSAmIDB4N2Y7XG4gICAgICAgICAgICBkaXZpc2lvbiA9IHtcbiAgICAgICAgICAgICAgICBkZWx0YVRpbWVQZXJGcmFtZTogZGVsdGFUaW1lUGVyRnJhbWUsXG4gICAgICAgICAgICAgICAgbmVnYXRpdmVGcmFtZXNQZXJTZWNvbmQ6IG5lZ2F0aXZlRnJhbWVzUGVyU2Vjb25kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpdmlzaW9uID0ge1xuICAgICAgICAgICAgICAgIHRpY2tzOiBkaXZpc2lvbk51bSAmIDB4N0ZGRixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8vIEFkZCA0IGZvciB0aGUgbGVuZ3RoIGhlYWRlclxuICAgICAgICAgICAgNCArIGxlbmd0aCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxlVHlwZTogZmlsZVR5cGUsXG4gICAgICAgICAgICAgICAgdHJhY2tDb3VudDogdHJhY2tDb3VudCxcbiAgICAgICAgICAgICAgICBkaXZpc2lvbjogZGl2aXNpb24sXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkVHJhY2tzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpbmRleCwgaW5IZWFkZXIsIGluVHJhY2ssIHRyYWNrTnVtYmVyLCBjdXJyZW50VHJhY2tFbmRJbmRleCwgcHJldmlvdXNTdGF0dXNCeXRlLCBjaHVua1R5cGUsIGxlbmd0aF8xLCBfYiwgYnl0ZXNSZWFkLCBldmVudERhdGEsIHN0YXR1c0J5dGU7XG4gICAgICAgIHZhciBfYyA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuZXZlbnRUeXBlcywgZXZlbnRUeXBlcyA9IF9jID09PSB2b2lkIDAgPyA4Mzg4NjA3IC8qIEFsbCAqLyA6IF9jO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMudHJhY2tTdGFydE9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgaW5IZWFkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaW5UcmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0cmFja051bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFja0VuZEluZGV4ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaW5kZXggPCB0aGlzLmJ1ZmZlckxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShjdXJyZW50VHJhY2tFbmRJbmRleCA9PT0gbnVsbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICBjaHVua1R5cGUgPSB0aGlzLnJlYWRTdHJpbmcoaW5kZXgsIDQpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2h1bmtUeXBlICE9PSAnTVRyaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBNSURJUGFyc2VFcnJvcl8xLk1JRElQYXJzZUVycm9yKCdObyB0cmFjayBoZWFkZXIgZm91bmQgYXQgc3RhcnQgb2YgdHJhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhfMSA9IHRoaXMucmVhZFVpbnQzMihpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFja0VuZEluZGV4ID0gaW5kZXggKyBsZW5ndGhfMTtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tOdW1iZXIgPSB0cmFja051bWJlciArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB0aGlzLnJlYWRNSURJRXZlbnQoaW5kZXgsIHRyYWNrTnVtYmVyLCBwcmV2aW91c1N0YXR1c0J5dGUpLCBieXRlc1JlYWQgPSBfYi5ieXRlc1JlYWQsIGV2ZW50RGF0YSA9IF9iLmV2ZW50RGF0YSwgc3RhdHVzQnl0ZSA9IF9iLnN0YXR1c0J5dGU7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNTdGF0dXNCeXRlID0gc3RhdHVzQnl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50VHJhY2tFbmRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNrRW5kSW5kZXggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGV2ZW50RGF0YS5ldmVudCAmJiAoZXZlbnREYXRhLmV2ZW50LnR5cGUgJiBldmVudFR5cGVzKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBldmVudERhdGFdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTUlESVJlYWRlcjtcbn0oKSk7XG5leHBvcnRzLk1JRElSZWFkZXIgPSBNSURJUmVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRlYnVnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRlYnVnXCIpKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGRlYnVnID0gZGVidWdfMS5kZWZhdWx0KFwibWlkaS10b29sczpNSURJRmlsZVwiKTtcbnZhciBzdHJpbmdUb0NoYXJDb2RlQXJyYXkgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHN0ci5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24gKGNocikgeyByZXR1cm4gY2hyLmNoYXJDb2RlQXQoMCk7IH0pKTtcbn07XG52YXIgbXRoZFN0cmluZyA9IHN0cmluZ1RvQ2hhckNvZGVBcnJheShcIk1UaGRcIik7XG52YXIgbXRya1N0cmluZyA9IHN0cmluZ1RvQ2hhckNvZGVBcnJheShcIk1UcmtcIik7XG52YXIgRU5EX09GX1RSQUNLX0VWRU5UID0gbmV3IFVpbnQ4QXJyYXkoWzB4RkYsIDB4MkYsIDB4MDBdKTtcbnZhciBudW1iZXJUb0J5dGVzID0gZnVuY3Rpb24gKG51bSwgbWluQnl0ZXMpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBkbyB7XG4gICAgICAgIGJ5dGVzLnVuc2hpZnQobnVtICYgMHhGRik7XG4gICAgICAgIG51bSA9IG51bSA+PiA4O1xuICAgIH0gd2hpbGUgKG51bSA+IDAgfHwgYnl0ZXMubGVuZ3RoIDwgbWluQnl0ZXMpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlcyk7XG59O1xudmFyIGdldE5vdGVPbkV2ZW50ID0gZnVuY3Rpb24gKG5vdGUsIGNoYW5uZWwsIHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMTQ0IC8qIE5vdGVPbiAqLyArIChjaGFubmVsIC0gMSksXG4gICAgICAgIC8vIFVuc2V0IHRvcCBiaXQ7IHZhbHVlIGNhbiBvbmx5IGJlIDcgYml0cyBsb25nXG4gICAgICAgIG5vdGUgJiAweDdGLFxuICAgICAgICB2ZWxvY2l0eSAmIDB4N0YsXG4gICAgXSk7XG59O1xudmFyIGdldE5vdGVPZmZFdmVudCA9IGZ1bmN0aW9uIChub3RlLCBjaGFubmVsLCB2ZWxvY2l0eSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDEyOCAvKiBOb3RlT2ZmICovICsgKGNoYW5uZWwgLSAxKSxcbiAgICAgICAgLy8gVW5zZXQgdG9wIGJpdDsgdmFsdWUgY2FuIG9ubHkgYmUgNyBiaXRzIGxvbmdcbiAgICAgICAgbm90ZSAmIDB4N0YsXG4gICAgICAgIHZlbG9jaXR5ICYgMHg3RixcbiAgICBdKTtcbn07XG52YXIgZ2V0UHJvZ3JhbUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBwcm9ncmFtID0gX2EucHJvZ3JhbTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAxOTIgLyogUHJvZ3JhbUNoYW5nZSAqLyArIChjaGFubmVsIC0gMSksXG4gICAgICAgIHByb2dyYW1cbiAgICBdKTtcbn07XG52YXIgZ2V0RmlsZUhlYWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBkaXZpc2lvbnMgPSBfYS5kaXZpc2lvbnMsIHRyYWNrQ291bnQgPSBfYS50cmFja0NvdW50O1xuICAgIHZhciBmb3JtYXQgPSB0cmFja0NvdW50ID09PSAxID9cbiAgICAgICAgMCA6XG4gICAgICAgIDE7XG4gICAgLy8gIyBvZiBkaXZpc2lvbnMgcGVyIHF1YXJ0ZXIgbm90ZSAoMTUgYml0cyBvbmx5KVxuICAgIHZhciBkaXZpc2lvbnNCeXRlcyA9IG51bWJlclRvQnl0ZXMoZGl2aXNpb25zICYgMHg3RkZGLCAyKTtcbiAgICB2YXIgdHJhY2tDb3VudEJ5dGVzID0gbnVtYmVyVG9CeXRlcyh0cmFja0NvdW50LCAyKTtcbiAgICB2YXIgdG90YWxMZW5ndGggPSBtdGhkU3RyaW5nLmJ5dGVMZW5ndGggK1xuICAgICAgICAvLyA0IGJ5dGVzIGZvciBsZW5ndGggZmllbGQgIFxuICAgICAgICA0ICtcbiAgICAgICAgLy8gMiBieXRlcyBmb3IgZm9ybWF0IGZpZWxkXG4gICAgICAgIDIgK1xuICAgICAgICB0cmFja0NvdW50Qnl0ZXMuYnl0ZUxlbmd0aCArXG4gICAgICAgIGRpdmlzaW9uc0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgdmFyIGhlYWRlciA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGhlYWRlci5zZXQobXRoZFN0cmluZywgaW5kZXgpO1xuICAgIGluZGV4ICs9IG10aGRTdHJpbmcuYnl0ZUxlbmd0aDtcbiAgICAvLyBMZW5ndGggZmllbGQsIE1TQiBmaXJzdFxuICAgIGhlYWRlci5zZXQoVWludDhBcnJheS5vZigwLCAwLCAwLCA2KSwgaW5kZXgpO1xuICAgIGluZGV4ICs9IDQ7XG4gICAgaGVhZGVyLnNldChVaW50OEFycmF5Lm9mKDAsIGZvcm1hdCksIGluZGV4KTtcbiAgICBpbmRleCArPSAyO1xuICAgIGhlYWRlci5zZXQodHJhY2tDb3VudEJ5dGVzLCBpbmRleCk7XG4gICAgaW5kZXggKz0gdHJhY2tDb3VudEJ5dGVzLmJ5dGVMZW5ndGg7XG4gICAgaGVhZGVyLnNldChkaXZpc2lvbnNCeXRlcywgaW5kZXgpO1xuICAgIGluZGV4ICs9IGRpdmlzaW9uc0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG52YXIgZ2V0VHJhY2tIZWFkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbGVuZ3RoID0gX2EubGVuZ3RoO1xuICAgIC8vIDQgZm9yIHRoZSBNVHJrIGhlYWRlciwgNCBmb3IgdGhlIGxlbmd0aCBidWZmZXJcbiAgICB2YXIgYnVmZiA9IG5ldyBBcnJheUJ1ZmZlcig4KTtcbiAgICBuZXcgVWludDhBcnJheShidWZmKS5zZXQobXRya1N0cmluZywgMCk7XG4gICAgbmV3IERhdGFWaWV3KGJ1ZmYpLnNldFVpbnQzMig0LCBsZW5ndGgpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWZmKTtcbn07XG52YXIgTUlESUZpbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTUlESUZpbGUoX2EpIHtcbiAgICAgICAgdmFyIGRpdmlzaW9ucyA9IF9hLmRpdmlzaW9ucztcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMudHJhY2tzID0ge307XG4gICAgICAgIHRoaXMub21uaVRyYWNrRXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuZGl2aXNpb25zID0gZGl2aXNpb25zO1xuICAgIH1cbiAgICBNSURJRmlsZS5wcm90b3R5cGUucHJvZ3JhbUNoYW5nZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gX2Eub2Zmc2V0LCBwcm9ncmFtID0gX2EucHJvZ3JhbSwgdHJhY2sgPSBfYS50cmFjaywgX2IgPSBfYS5jaGFubmVsLCBjaGFubmVsID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcbiAgICAgICAgdmFyIHByb2dyYW1DaGFuZ2VFdmVudCA9IGdldFByb2dyYW1DaGFuZ2VFdmVudCh7IGNoYW5uZWw6IGNoYW5uZWwsIHByb2dyYW06IHByb2dyYW0gfSk7XG4gICAgICAgIHZhciBidWZmZXJJbmZvID0ge1xuICAgICAgICAgICAgZXZlbnQ6IHByb2dyYW1DaGFuZ2VFdmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMTkyIC8qIFByb2dyYW1DaGFuZ2UgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogb2Zmc2V0LFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMucHVzaChidWZmZXJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghKHRyYWNrIGluIHRoaXMudHJhY2tzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyczogW10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goYnVmZmVySW5mbyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS50aW1lU2lnbmF0dXJlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSBfYS5udW1lcmF0b3IsIGRlbm9taW5hdG9yID0gX2EuZGVub21pbmF0b3I7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgODggLyogVGltZVNpZ25hdHVyZSAqLyxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICBudW1lcmF0b3IsXG4gICAgICAgICAgICBNYXRoLmxvZzIoZGVub21pbmF0b3IpLFxuICAgICAgICAgICAgLy8gQHRvZG86IGZpZ3VyZSBvdXQgaG93IHRvIGFjdHVhbGx5IGRlYWwgd2l0aCB0aGVzZSBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAvLyByb2J1c3RseS0tSSBkb24ndCByZWFsbHkgdW5kZXJzdGFuZCB0aGVtIGVudGlyZWx5XG4gICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWV0cm9ub21lIHRpY2tzIHBlciBxdWFydGVyIG5vdGVcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgLy8gTnVtYmVyIG9mIDEvMzJuZCBub3RlcyBwZXIgTUlESSBxdWFydGVyIG5vdGVcbiAgICAgICAgICAgIDgsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLm9tbmlUcmFja0V2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogMCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUua2V5U2lnbmF0dXJlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBrZXlTaWduYXR1cmUgPSBfYS5rZXlTaWduYXR1cmUsIF9iID0gX2Eub2Zmc2V0LCBvZmZzZXQgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAgICAgICAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIDg5IC8qIEtleVNpZ25hdHVyZSAqLyxcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBrZXlTaWduYXR1cmUuc2hhcnBzLFxuICAgICAgICAgICAgLy8gbWFqb3IgKDApIHZzLiBtaW5vciAoMSlcbiAgICAgICAgICAgIC8vIEB0b2RvOiBBY3R1YWxseSBmaW5kIG1ham9yL21pbm9yIGtleSBmcm9tIFhNTFxuICAgICAgICAgICAga2V5U2lnbmF0dXJlLm1vZGUgPT09IFwibWlub3JcIiA/IDEgOiAwLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBldmVudFR5cGU6IDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgZGl2aXNpb25PZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgLy8gYWRkIDEgZm9yIG51bGwgdGVybWluYXRvciBieXRlXG4gICAgICAgIHZhciBsZW5ndGggPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZSh0aXRsZS5sZW5ndGggKyAxKTtcbiAgICAgICAgdmFyIGNoYXJzID0gc3RyaW5nVG9DaGFyQ29kZUFycmF5KHRpdGxlICsgXCJcXDBcIik7XG4gICAgICAgIHZhciB0b3RhbExlbmd0aCA9IDIgKyAvLyAxIGJ5dGUgZWFjaCBmb3Igc3RhdHVzIGFuZCBzdWJ0eXBlXG4gICAgICAgICAgICBsZW5ndGguYnl0ZUxlbmd0aCArXG4gICAgICAgICAgICBjaGFycy5ieXRlTGVuZ3RoO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGV2ZW50LnNldChVaW50OEFycmF5Lm9mKDI1NSAvKiBNZXRhICovLCAzIC8qIFRyYWNrTmFtZSAqLyksIGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMjtcbiAgICAgICAgZXZlbnQuc2V0KGxlbmd0aCwgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSBsZW5ndGguYnl0ZUxlbmd0aDtcbiAgICAgICAgZXZlbnQuc2V0KGNoYXJzLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IGNoYXJzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogMCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUubm90ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm90ZSA9IF9hLm5vdGUsIGR1cmF0aW9uID0gX2EuZHVyYXRpb24sIG9mZnNldCA9IF9hLm9mZnNldCwgdHJhY2sgPSBfYS50cmFjaywgX2IgPSBfYS5jaGFubmVsLCBjaGFubmVsID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYiwgX2MgPSBfYS52ZWxvY2l0eSwgdmVsb2NpdHkgPSBfYyA9PT0gdm9pZCAwID8gNjQgOiBfYywgX2QgPSBfYS5yZWxlYXNlLCByZWxlYXNlID0gX2QgPT09IHZvaWQgMCA/IHZlbG9jaXR5IDogX2QsIF9lID0gX2EubWV0YSwgbWV0YSA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lO1xuICAgICAgICB2YXIgbm90ZU9uRXZlbnQgPSBnZXROb3RlT25FdmVudChub3RlLCBjaGFubmVsLCB2ZWxvY2l0eSk7XG4gICAgICAgIHZhciBub3RlTmFtZSA9IHV0aWxzXzEuTm90ZU51bWJlclRvTmFtZShub3RlKTtcbiAgICAgICAgbm90ZU5hbWUgPSBcIlwiICsgbm90ZU5hbWUuc3RlcCArIChub3RlTmFtZS5hbHRlciA9PT0gMSA/XG4gICAgICAgICAgICAnIycgOlxuICAgICAgICAgICAgbm90ZU5hbWUuYWx0ZXIgPT09IC0xID9cbiAgICAgICAgICAgICAgICAnYicgOlxuICAgICAgICAgICAgICAgICcnKSArIG5vdGVOYW1lLm9jdGF2ZTtcbiAgICAgICAgaWYgKCEodHJhY2sgaW4gdGhpcy50cmFja3MpKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0cmFja10gPSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IG5vdGVPbkV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAxNDQgLyogTm90ZU9uICovLFxuICAgICAgICAgICAgZGl2aXNpb25PZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgIG1ldGE6IF9fYXNzaWduKHsgbmFtZTogbm90ZU5hbWUgfSwgbWV0YSksXG4gICAgICAgIH0pO1xuICAgICAgICBkZWJ1Zygnbm90ZSBvbjogJywge1xuICAgICAgICAgICAgbm90ZTogbm90ZSxcbiAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eSxcbiAgICAgICAgICAgIGV2ZW50OiBub3RlT25FdmVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBub3RlT2ZmRXZlbnQgPSBnZXROb3RlT2ZmRXZlbnQobm90ZSwgY2hhbm5lbCwgcmVsZWFzZSk7XG4gICAgICAgIHZhciBub3RlT2ZmT2Zmc2V0ID0gb2Zmc2V0ICsgZHVyYXRpb247XG4gICAgICAgIGRlYnVnKCdub3RlIG9mZjogJywge1xuICAgICAgICAgICAgbm90ZTogbm90ZSxcbiAgICAgICAgICAgIG9mZnNldDogbm90ZU9mZk9mZnNldCxcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICByZWxlYXNlOiByZWxlYXNlLFxuICAgICAgICAgICAgbWV0YTogX19hc3NpZ24oeyBuYW1lOiBub3RlTmFtZSB9LCBtZXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IG5vdGVPZmZFdmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMTI4IC8qIE5vdGVPZmYgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogbm90ZU9mZk9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUuc2V0VGVtcG8gPSBmdW5jdGlvbiAodGVtcG8pIHtcbiAgICAgICAgdmFyIG1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlID0gNmU3IC8gdGVtcG87XG4gICAgICAgIHZhciB0ZW1wb0J5dGVzID0gbnVtYmVyVG9CeXRlcyhtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZSwgMyk7XG4gICAgICAgIC8vIDEgYnl0ZSBlYWNoIGZvciBzdGF0dXMgdHlwZSBhbmQgbWV0YSB0eXBlLCBhbmQgMSBmb3IgY29uc3RhbnQgdmFsdWUgMHgwMyBhZnRlciBtZXRhIHR5cGVcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gMyArXG4gICAgICAgICAgICB0ZW1wb0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZXZlbnQuc2V0KFVpbnQ4QXJyYXkub2YoMjU1IC8qIE1ldGEgKi8sIDgxIC8qIFNldFRlbXBvICovLCAzKSwgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAzO1xuICAgICAgICBldmVudC5zZXQodGVtcG9CeXRlcywgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSB0ZW1wb0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHRoaXMub21uaVRyYWNrRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5zb3J0QnVmZmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudHJhY2tzKS5yZWR1Y2UoZnVuY3Rpb24gKHJlZHVjdGlvbiwgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIHNoYWxsb3cgY2xvbmUgdG8gYXZvaWQgYWRkaW5nIG9tbmlUcmFja0V2ZW50cyB0byB0aGUgYWN0dWFsIHRyYWNrc1xuICAgICAgICAgICAgdmFyIHRyYWNrQnVmZmVycyA9IF90aGlzLnRyYWNrc1t0cmFja051bWJlcl0uYnVmZmVycy5zbGljZSgpO1xuICAgICAgICAgICAgdHJhY2tCdWZmZXJzLnVuc2hpZnQuYXBwbHkodHJhY2tCdWZmZXJzLCBfdGhpcy5vbW5pVHJhY2tFdmVudHMpO1xuICAgICAgICAgICAgcmVkdWN0aW9uW3RyYWNrTnVtYmVyXSA9IHRyYWNrQnVmZmVycy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldERpZmYgPSBhLmRpdmlzaW9uT2Zmc2V0IC0gYi5kaXZpc2lvbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0RGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5ldmVudFR5cGUgPT09IGIuZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYS5ldmVudFR5cGUgPT09IDE5MiAvKiBQcm9ncmFtQ2hhbmdlICovIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmV2ZW50VHlwZSA9PT0gMjU1IC8qIE1ldGEgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiLmV2ZW50VHlwZSA9PT0gMTkyIC8qIFByb2dyYW1DaGFuZ2UgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLmV2ZW50VHlwZSA9PT0gMjU1IC8qIE1ldGEgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldERpZmY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWR1Y3Rpb247XG4gICAgICAgIH0sIHt9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnVmZmVycyA9IHRoaXMuc29ydEJ1ZmZlcnMoKTtcbiAgICAgICAgdmFyIHRyYWNrQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLnRyYWNrcykubGVuZ3RoO1xuICAgICAgICB2YXIgdHJhY2tMZW5ndGhzID0gT2JqZWN0LmtleXMoYnVmZmVycykucmVkdWNlKGZ1bmN0aW9uICh0b3RhbHMsIHRyYWNrTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcHJldkR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRvdGFsc1t0cmFja051bWJlcl0gPSBidWZmZXJzW3RyYWNrTnVtYmVyXS5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsLCBtaWRpRXZlbnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIG1pZGlFdmVudEluZm8uZXZlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBkZWx0YVRpbWUgPSBtaWRpRXZlbnRJbmZvLmRpdmlzaW9uT2Zmc2V0IC0gcHJldkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBkZWx0YVRpbWVCdWZmZXIgPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IGRlbHRhVGltZUJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbWlkaUV2ZW50SW5mby5kZWx0YVRpbWVCdWZmZXIgPSBkZWx0YVRpbWVCdWZmZXI7XG4gICAgICAgICAgICAgICAgcHJldkR1cmF0aW9uID0gbWlkaUV2ZW50SW5mby5kaXZpc2lvbk9mZnNldDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHRvdGFsc1t0cmFja051bWJlcl0gKz0gMSArIC8vIFRoZSBkZWx0YSB0aW1lIG9mZnNldCBmb3IgZW5kIG9mIHRyYWNrIGlzIDAsIHdoaWNoIHRha2VzIDEgYnl0ZSBpbiBWTFZcbiAgICAgICAgICAgICAgICBFTkRfT0ZfVFJBQ0tfRVZFTlQubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFscztcbiAgICAgICAgfSwge30pO1xuICAgICAgICB2YXIgaGVhZGVyQ2h1bmsgPSBnZXRGaWxlSGVhZGVyKHtcbiAgICAgICAgICAgIGRpdmlzaW9uczogdGhpcy5kaXZpc2lvbnMsXG4gICAgICAgICAgICB0cmFja0NvdW50OiB0cmFja0NvdW50LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRyYWNrSGVhZGVycyA9IE9iamVjdC5rZXlzKGJ1ZmZlcnMpLnJlZHVjZShmdW5jdGlvbiAoaGVhZGVycywgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbdHJhY2tOdW1iZXJdID0gZ2V0VHJhY2tIZWFkZXIoe1xuICAgICAgICAgICAgICAgIGxlbmd0aDogdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gaGVhZGVyQ2h1bmsubGVuZ3RoO1xuICAgICAgICB0b3RhbExlbmd0aCArPSBPYmplY3Qua2V5cyh0cmFja0hlYWRlcnMpLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIHRyYWNrTnVtYmVyKSB7IHJldHVybiB0b3RhbCArIHRyYWNrSGVhZGVyc1t0cmFja051bWJlcl0ubGVuZ3RoOyB9LCAwKTtcbiAgICAgICAgdG90YWxMZW5ndGggKz0gT2JqZWN0LmtleXMoYnVmZmVycykucmVkdWNlKGZ1bmN0aW9uICh0b3RhbCwgdHJhY2tOdW1iZXIpIHsgcmV0dXJuIHRvdGFsICsgdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXTsgfSwgMCk7XG4gICAgICAgIHZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmYpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgYXJyLnNldChoZWFkZXJDaHVuaywgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGhlYWRlckNodW5rLmxlbmd0aDtcbiAgICAgICAgT2JqZWN0LmtleXMoYnVmZmVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGFyci5zZXQodHJhY2tIZWFkZXJzW3RyYWNrTnVtYmVyXSwgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSB0cmFja0hlYWRlcnNbdHJhY2tOdW1iZXJdLmxlbmd0aDtcbiAgICAgICAgICAgIGJ1ZmZlcnNbdHJhY2tOdW1iZXJdLmZvckVhY2goZnVuY3Rpb24gKG1pZGlFdmVudEluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFUaW1lQnVmZmVyID0gbWlkaUV2ZW50SW5mby5kZWx0YVRpbWVCdWZmZXI7XG4gICAgICAgICAgICAgICAgYXJyLnNldChkZWx0YVRpbWVCdWZmZXIsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRlbHRhVGltZUJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYXJyLnNldChtaWRpRXZlbnRJbmZvLmV2ZW50LCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaWRpRXZlbnRJbmZvLmV2ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gRGVsdGEgdGltZSBmb3IgZW5kIG9mIHRyYWNrIGV2ZW50IGlzIDAsIHNvIHRoZSBidWZmZXIgZm9yIGl0IGlzIGFsd2F5c1xuICAgICAgICAgICAgLy8gdGhlIHNhbWVcbiAgICAgICAgICAgIGFyci5zZXQoVWludDhBcnJheS5mcm9tKFswXSksIG9mZnNldCk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIGFyci5zZXQoRU5EX09GX1RSQUNLX0VWRU5ULCBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IEVORF9PRl9UUkFDS19FVkVOVC5sZW5ndGg7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnVmZjtcbiAgICB9O1xuICAgIHJldHVybiBNSURJRmlsZTtcbn0oKSk7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESUZpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRmlsZV8xID0gcmVxdWlyZShcIi4vTUlESUZpbGVcIik7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESUZpbGVfMS5NSURJRmlsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElXcml0ZXJfMSA9IHJlcXVpcmUoXCIuL01JRElXcml0ZXJcIik7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESVdyaXRlcl8xLk1JRElGaWxlO1xudmFyIE1JRElSZWFkZXJfMSA9IHJlcXVpcmUoXCIuL01JRElSZWFkZXJcIik7XG5leHBvcnRzLk1JRElFdmVudHMgPSBNSURJUmVhZGVyXzEuTUlESUV2ZW50cztcbmV4cG9ydHMuTUlESUZpbGVUeXBlID0gTUlESVJlYWRlcl8xLk1JRElGaWxlVHlwZTtcbmV4cG9ydHMuTUlESVBhcnNlRXJyb3IgPSBNSURJUmVhZGVyXzEuTUlESVBhcnNlRXJyb3I7XG5leHBvcnRzLk1JRElSZWFkZXIgPSBNSURJUmVhZGVyXzEuTUlESVJlYWRlcjtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5leHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gdXRpbHNfMS5idWZmZXJUb1N0cmluZztcbmV4cG9ydHMuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB1dGlsc18xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlO1xuZXhwb3J0cy50b1ZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZTtcbmV4cG9ydHMuTm90ZU5hbWVUb051bWJlciA9IHV0aWxzXzEuTm90ZU5hbWVUb051bWJlcjtcbmV4cG9ydHMuTm90ZU51bWJlclRvTmFtZSA9IHV0aWxzXzEuTm90ZU51bWJlclRvTmFtZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5idWZmZXJUb1N0cmluZyA9IGZ1bmN0aW9uIChidWZmZXIsIHN0YXJ0SW5kZXgsIGxlbmd0aCkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCBzdGFydEluZGV4LCBsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVZpZXcuZ2V0VWludDgoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJ1ZmZlcl90b19zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL2J1ZmZlci10by1zdHJpbmdcIik7XG5leHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gYnVmZmVyX3RvX3N0cmluZ18xLmJ1ZmZlclRvU3RyaW5nO1xudmFyIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xID0gcmVxdWlyZShcIi4vdmFyaWFibGUtbGVuZ3RoLXZhbHVlXCIpO1xuZXhwb3J0cy5mcm9tVmFyaWFibGVMZW5ndGhWYWx1ZSA9IHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlO1xuZXhwb3J0cy50b1ZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB2YXJpYWJsZV9sZW5ndGhfdmFsdWVfMS50b1ZhcmlhYmxlTGVuZ3RoVmFsdWU7XG52YXIgbWlkaV9ub3RlX2NvbnZlcnRlcl8xID0gcmVxdWlyZShcIi4vbWlkaS1ub3RlLWNvbnZlcnRlclwiKTtcbmV4cG9ydHMuTm90ZU5hbWVUb051bWJlciA9IG1pZGlfbm90ZV9jb252ZXJ0ZXJfMS5Ob3RlTmFtZVRvTnVtYmVyO1xuZXhwb3J0cy5Ob3RlTnVtYmVyVG9OYW1lID0gbWlkaV9ub3RlX2NvbnZlcnRlcl8xLk5vdGVOdW1iZXJUb05hbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIE5vdGVOdW1iZXJUb05hbWUobm90ZSkge1xuICAgIHZhciBzdGVwO1xuICAgIHZhciBhbHRlcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xuICAgIHZhciBvY3RhdmUgPSBNYXRoLmZsb29yKG5vdGUgLyAxMikgLSAxO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICAgIHN3aXRjaCAobm90ZSAlIDEyKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgc3RlcCA9IFwiQ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc3RlcCA9IFwiRFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBzdGVwID0gXCJBXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWZhbGx0aHJvdWdoICovXG4gICAgdmFyIG5vdGVPYmogPSB7XG4gICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgIG9jdGF2ZTogb2N0YXZlLFxuICAgICAgICBNSURJTnVtYmVyOiBub3RlLFxuICAgIH07XG4gICAgaWYgKGFsdGVyKSB7XG4gICAgICAgIG5vdGVPYmouYWx0ZXIgPSBhbHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIG5vdGVPYmo7XG59XG5leHBvcnRzLk5vdGVOdW1iZXJUb05hbWUgPSBOb3RlTnVtYmVyVG9OYW1lO1xudmFyIHN0ZXBUb051bWJlciA9IHtcbiAgICBDOiAwLFxuICAgIEQ6IDIsXG4gICAgRTogNCxcbiAgICBGOiA1LFxuICAgIEc6IDcsXG4gICAgQTogOSxcbiAgICBCOiAxMSxcbn07XG52YXIgc3RlcHMgPSBcIkFCQ0RFRkdcIjtcbmZ1bmN0aW9uIE5vdGVOYW1lVG9OdW1iZXIobm90ZU5hbWUpIHtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgb2N0YXZlO1xuICAgIHZhciBhbHRlcjtcbiAgICBpZiAodHlwZW9mIG5vdGVOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gL14oW0EtR10pKFsjYl0pPygtP1xcZCspJC8uZXhlYyhub3RlTmFtZSk7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFsdGVyU3RyaW5nID0gbWF0Y2hlc1syXTtcbiAgICAgICAgc3RlcCA9IG1hdGNoZXNbMV07XG4gICAgICAgIG9jdGF2ZSA9IE51bWJlcihtYXRjaGVzWzNdKTtcbiAgICAgICAgaWYgKGFsdGVyU3RyaW5nID09PSBcImJcIikge1xuICAgICAgICAgICAgYWx0ZXIgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbHRlclN0cmluZyA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RlcCA9IG5vdGVOYW1lLnN0ZXA7XG4gICAgICAgIGFsdGVyID0gbm90ZU5hbWUuYWx0ZXI7XG4gICAgICAgIG9jdGF2ZSA9IG5vdGVOYW1lLm9jdGF2ZTtcbiAgICB9XG4gICAgaWYgKGFsdGVyID09PSAtMSkge1xuICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIHZhciBpbml0aWFsU3RlcEluZGV4ID0gc3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgICAgICAgc3RlcCA9IHN0ZXBzWyhzdGVwcy5pbmRleE9mKHN0ZXApICsgc3RlcHMubGVuZ3RoIC0gMSkgJSBzdGVwcy5sZW5ndGhdO1xuICAgICAgICAvLyBlLmcuIGdvaW5nIGZyb20gQWI0IC0+IEcjM1xuICAgICAgICBpZiAoc3RlcHMuaW5kZXhPZihzdGVwKSA+IGluaXRpYWxTdGVwSW5kZXgpIHtcbiAgICAgICAgICAgIG9jdGF2ZSAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBudW1iZXIgPSBzdGVwVG9OdW1iZXJbc3RlcF07XG4gICAgaWYgKGFsdGVyID09PSAxKSB7XG4gICAgICAgIG51bWJlciArPSAxO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xuICAgIHJldHVybiBudW1iZXIgKyAoKG9jdGF2ZSArIDEpICogMTIpO1xufVxuZXhwb3J0cy5Ob3RlTmFtZVRvTnVtYmVyID0gTm90ZU5hbWVUb051bWJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gdG9WYXJpYWJsZUxlbmd0aFZhbHVlKG51bSkge1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGRvIHtcbiAgICAgICAgdmFyIGJ5dGUgPSBudW0gJiAweDdGO1xuICAgICAgICBudW0gPSBudW0gPj4gNztcbiAgICAgICAgaWYgKGJ5dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGJ5dGUgPSBieXRlICsgMHg4MDtcbiAgICAgICAgfVxuICAgICAgICBieXRlcy51bnNoaWZ0KGJ5dGUpO1xuICAgIH0gd2hpbGUgKG51bSA+IDApO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlcyk7XG59XG5leHBvcnRzLnRvVmFyaWFibGVMZW5ndGhWYWx1ZSA9IHRvVmFyaWFibGVMZW5ndGhWYWx1ZTtcbjtcbmZ1bmN0aW9uIGZyb21WYXJpYWJsZUxlbmd0aFZhbHVlKGJ1ZmZlciwgc3RhcnRJbmRleCkge1xuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cbiAgICB2YXIgdUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBzdGFydEluZGV4KTtcbiAgICB2YXIgdmFsdWUgPSAwO1xuICAgIHZhciBpbmRleCA9IC0xO1xuICAgIHZhciBieXRlc1JlYWQgPSAwO1xuICAgIGRvIHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgPDwgNykgKyAodUFycmF5W2luZGV4XSAmIDB4N0YpO1xuICAgICAgICBieXRlc1JlYWQgKz0gMTtcbiAgICB9IHdoaWxlICh1QXJyYXlbaW5kZXhdICYgMHg4MCk7XG4gICAgcmV0dXJuIFtieXRlc1JlYWQsIHZhbHVlXTtcbn1cbmV4cG9ydHMuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUgPSBmcm9tVmFyaWFibGVMZW5ndGhWYWx1ZTtcbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/XMLToMIDI.ts":
/*!**************************!*\
  !*** ./src/XMLToMIDI.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @todo: handle repeats
 * @todo: reconcile different division counts
 *  - between staffs
 *  - within a staff
 *  - not sure this ever actually happens, but is *technically* possible
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMIDI = void 0;
var midi_tools_1 = __webpack_require__(/*! @thayes/midi-tools */ "./node_modules/@thayes/midi-tools/build/midi-tools.js");
var getChordNoteNodes = function (_a) {
    var document = _a.document, itemNode = _a.itemNode, staff = _a.staff;
    var siblingsIterator = document.evaluate("following-sibling::note[staff/text() = \"".concat(staff, "\"]"), itemNode, null, window.XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var siblings = [];
    var nextNoteNode = siblingsIterator.iterateNext();
    while (nextNoteNode && nextNoteNode.querySelector("chord")) {
        siblings.push(nextNoteNode);
        nextNoteNode = siblingsIterator.iterateNext();
    }
    return siblings;
};
var readMeasuresFromPart = function (partNode, document) {
    return Array.from(partNode.querySelectorAll("measure")).reduce(function (measureReduction, measureNode) {
        var measureNumber = Number(measureNode.getAttribute("number"));
        var attributesNode = measureNode.querySelector("attributes");
        var timeSignature;
        var divisions;
        var keySignature;
        if (attributesNode) {
            var divisionsNode = attributesNode.querySelector("divisions");
            if (divisionsNode) {
                divisions = Number(divisionsNode.textContent);
            }
            var timeSignatureNode = attributesNode.querySelector("time");
            if (timeSignatureNode) {
                timeSignature = {
                    numerator: Number(timeSignatureNode.querySelector("beats").textContent),
                    denominator: Number(timeSignatureNode.querySelector("beat-type").textContent),
                };
            }
            var keySignatureNode = attributesNode.querySelector("key");
            if (keySignatureNode) {
                var modeNode = keySignatureNode.querySelector("mode");
                var mode = "major";
                if (modeNode) {
                    var modeString = modeNode.textContent;
                    if (modeString === "minor") {
                        mode = modeString;
                    }
                }
                keySignature = {
                    sharps: Number(keySignatureNode.querySelector("fifths").textContent),
                    mode: mode,
                };
            }
        }
        var bpmNode = measureNode.querySelector("direction metronome > per-minute");
        var bpm;
        if (bpmNode) {
            bpm = Number(bpmNode.textContent);
        }
        var noteIterator = document.evaluate(".//note[not(chord)]", measureNode, null, window.XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        var itemNode = noteIterator.iterateNext();
        var notesByStaff = {};
        while (itemNode) {
            var duration = Number(itemNode.querySelector("duration").textContent);
            var staffNode = itemNode.querySelector("staff");
            var staff = void 0;
            if (staffNode) {
                staff = Number(staffNode.textContent);
                var item = {
                    duration: duration,
                    staff: staff,
                };
                if (!itemNode.querySelector("rest")) {
                    var chordNotes = getChordNoteNodes({
                        document: document,
                        itemNode: itemNode,
                        staff: staff,
                    });
                    chordNotes.unshift(itemNode);
                    var notes = chordNotes.map(function (noteNode) {
                        var pitchNode = itemNode.querySelector("pitch");
                        var step = pitchNode.querySelector("step").textContent;
                        var octave = Number(pitchNode.querySelector("octave").textContent);
                        var alterNode = pitchNode.querySelector("alter");
                        var pitch = {
                            step: step,
                            octave: octave,
                        };
                        if (alterNode) {
                            pitch.alter = Number(alterNode.textContent);
                        }
                        var midiNumber = (0, midi_tools_1.NoteNameToNumber)(pitch);
                        pitch.MIDINumber = midiNumber;
                        return pitch;
                    });
                    item.notes = notes;
                }
                if (!(staff in notesByStaff)) {
                    notesByStaff[staff] = [];
                }
                notesByStaff[staff].push(item);
            }
            itemNode = noteIterator.iterateNext();
        }
        measureReduction[measureNumber] = {
            number: measureNumber,
            notes: notesByStaff,
            divisions: divisions,
            timeSignature: timeSignature,
            keySignature: keySignature,
            tempo: bpm,
        };
        return measureReduction;
    }, {});
};
var readParts = function (partListNode) {
    return Array.from(partListNode.querySelectorAll("score-part")).reduce(function (reduction, partNode) {
        var id = partNode.getAttribute("id");
        var name = partNode.querySelector("part-name").textContent;
        var instruments = Array.from(partNode.querySelectorAll("score-instrument")).reduce(function (instrumentReduction, instrumentNode) {
            var instrumentID = instrumentNode.getAttribute("id");
            var instrumentName = instrumentNode.querySelector("instrument-name").textContent;
            var midiInfo = {};
            var midiDeviceNode = partNode.querySelector("midi-device[id=\"".concat(instrumentID, "\"]"));
            if (midiDeviceNode) {
                var port = midiDeviceNode.getAttribute("port");
                if (port) {
                    midiInfo.port = Number(port);
                }
            }
            var midiInstrumentNode = partNode.querySelector("midi-instrument[id=\"".concat(instrumentID, "\"]"));
            var channelNode = midiInstrumentNode.querySelector("midi-channel");
            if (channelNode) {
                var channel = channelNode.textContent;
                if (channel) {
                    midiInfo.channel = Number(channel);
                }
            }
            var programNode = midiInstrumentNode.querySelector("midi-program");
            if (programNode) {
                var program = programNode.textContent;
                if (program) {
                    midiInfo.program = Number(program);
                }
            }
            var volumeNode = midiInstrumentNode.querySelector("volume");
            if (volumeNode) {
                var volume = volumeNode.textContent;
                if (volume) {
                    midiInfo.volume = Number(volume);
                }
            }
            var panNode = midiInstrumentNode.querySelector("pan");
            if (panNode) {
                var pan = panNode.textContent;
                if (pan) {
                    midiInfo.pan = Number(pan);
                }
            }
            instrumentReduction[instrumentID] = {
                id: instrumentID,
                name: instrumentName,
                midi: midiInfo,
            };
            return instrumentReduction;
        }, {});
        var part = {
            id: id,
            name: name,
            instruments: instruments,
        };
        reduction[id] = part;
        return reduction;
    }, {});
};
var getMIDI = function (document) {
    if (typeof document === "string") {
        document = new window.DOMParser().parseFromString(document, "application/xml");
    }
    var isTimewise;
    var root = document.querySelector("score-partwise");
    if (root) {
        isTimewise = false;
    }
    else {
        root = document.querySelector("score-timewise");
        isTimewise = true;
    }
    var workTitleNode = root.querySelector("work work-title");
    var title;
    if (workTitleNode) {
        title = workTitleNode.textContent;
    }
    var partListNode = root.querySelector("part-list");
    var parts = readParts(partListNode);
    var measures = Array.from(root.querySelectorAll("part")).reduce(function (measuresReduction, partNode) {
        var partID = partNode.getAttribute("id");
        measuresReduction[partID] = readMeasuresFromPart(partNode, document);
        return measuresReduction;
    }, {});
    var divisions;
    var timeSignature;
    var tempo;
    // @todo: handle divisions more intelligently; it is possible, in theory, for
    // different measures to have different divisions. This assumes the first division
    // is the only one used throughout the MusicXML.
    for (var partID in measures) {
        if (!measures.hasOwnProperty(partID)) {
            continue;
        }
        for (var measureNumber in measures[partID]) {
            if (!measures[partID].hasOwnProperty(measureNumber)) {
                continue;
            }
            if (measures[partID][measureNumber].divisions) {
                divisions = measures[partID][measureNumber].divisions;
            }
            if (measures[partID][measureNumber].timeSignature) {
                timeSignature = measures[partID][measureNumber].timeSignature;
            }
            if (measures[partID][measureNumber].tempo) {
                tempo = measures[partID][measureNumber].tempo;
            }
        }
        if (divisions && timeSignature && tempo) {
            break;
        }
    }
    var file = new midi_tools_1.MIDIFile({
        divisions: divisions,
    });
    if (title) {
        file.setTitle(title);
    }
    var channelsByParts = {};
    Object.keys(parts).forEach(function (partID) { return Object.keys(parts[partID].instruments).forEach(function (instrumentID) {
        var instrument = parts[partID].instruments[instrumentID];
        if (instrument.midi.program === undefined) {
            return;
        }
        var channel = instrument.midi.channel;
        if (channel === undefined) {
            channel = 1;
        }
        // @todo: handle channel changes on individual parts (does that ever happen?)
        channelsByParts[partID] = channel;
        file.programChange({
            offset: 0,
            program: instrument.midi.program,
            channel: channel,
        });
        if (tempo) {
            file.setTempo(tempo);
        }
        if (timeSignature) {
            file.timeSignature(timeSignature);
        }
    }); });
    var offsetByStaff = {};
    Object.keys(measures).forEach(function (partID) {
        var measurePart = measures[partID];
        Object.keys(measurePart).forEach(function (measureNumber) {
            var notesByStaff = measurePart[measureNumber].notes;
            Object.keys(notesByStaff).forEach(function (staffNumber) {
                notesByStaff[staffNumber].forEach(function (note) {
                    if (!(note.staff in offsetByStaff)) {
                        offsetByStaff[note.staff] = 0;
                    }
                    var notes;
                    if (note.notes) {
                        // chord
                        notes = note.notes;
                    }
                    if (notes) {
                        notes.forEach(function (pitch) { return file.note({
                            note: pitch.MIDINumber,
                            duration: note.duration,
                            channel: channelsByParts[partID],
                            offset: offsetByStaff[note.staff],
                            track: note.staff,
                            meta: {
                                staff: note.staff,
                                measureNumber: measureNumber,
                            },
                        }); });
                    }
                    offsetByStaff[note.staff] += note.duration;
                });
            });
        });
    });
    return file.toArrayBuffer();
};
exports.getMIDI = getMIDI;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMIDI = void 0;
var XMLToMIDI_1 = __webpack_require__(/*! ./XMLToMIDI */ "./src/XMLToMIDI.ts");
Object.defineProperty(exports, "getMIDI", ({ enumerable: true, get: function () { return XMLToMIDI_1.getMIDI; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sMm1pZGkuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLMEI7QUFDaEMsQ0FBQztBQUNELHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4QkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsOEJBQW1CO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QixlQUFlLDhCQUFtQjtBQUNsQyxtREFBbUQsK0JBQStCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQSxpRUFBaUUsaUJBQWlCO0FBQ2xGO0FBQ0EsMERBQTBELGFBQWE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QixnQ0FBZ0MsOEJBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEJBQW1CO0FBQzlCLGtEQUFrRCxnQ0FBZ0M7QUFDbEYsMEVBQTBFLDhCQUFtQiw0QkFBNEIsb0JBQW9CO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQSxvQ0FBb0MsNEJBQTRCO0FBQ2hFLDBDQUEwQztBQUMxQyxXQUFXLDhCQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOEJBQW1CLGtDQUFrQztBQUMvRDtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUFtQixDQUFDLDhCQUFtQjtBQUN4RCxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywrQkFBbUI7O0FBRXBEO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGFBQWEsK0JBQW1CO0FBQ2hDLGNBQWMsK0JBQW1CO0FBQ2pDLGNBQWMsK0JBQW1COztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFvRDtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELE9BQU87QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsWUFBWTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLFlBQVksK0JBQW1COztBQUUzRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQW1COztBQUVwRCwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixnQ0FBbUI7O0FBRXBDLE9BQU8sWUFBWTs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLFlBQVksZ0NBQW1COztBQUUzRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQW1COzs7QUFHcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQW1COztBQUUzQztBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLGtDQUFrQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVzs7QUFFcEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsV0FBVzs7QUFFcEI7QUFDQTtBQUNBLFNBQVMsVUFBVTs7QUFFbkI7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7O0FBRzdCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3Qzs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFtQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RCwwQkFBMEIsZ0NBQW1CO0FBQzdDLDZCQUE2QixnQ0FBbUI7QUFDaEQsOEJBQThCLGdDQUFtQjtBQUNqRDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RCx1QkFBdUIsaUNBQW1CO0FBQzFDO0FBQ0Esc0JBQXNCLGlDQUFtQjtBQUN6QztBQUNBLHFCQUFxQixpQ0FBbUI7QUFDeEM7QUFDQSxpQkFBaUIsaUNBQW1CO0FBQ3BDO0FBQ0EsbUJBQW1CLGlDQUFtQjtBQUN0QztBQUNBLHNCQUFzQixpQ0FBbUI7QUFDekM7QUFDQSxrQkFBa0IsaUNBQW1CO0FBQ3JDO0FBQ0Esa0JBQWtCLGlDQUFtQjtBQUNyQztBQUNBLGFBQWEsaUNBQW1CO0FBQ2hDO0FBQ0EsdUJBQXVCLGlDQUFtQjtBQUMxQztBQUNBLGNBQWMsaUNBQW1CO0FBQ2pDO0FBQ0EsZUFBZSxpQ0FBbUI7QUFDbEM7QUFDQSxpQkFBaUIsaUNBQW1CO0FBQ3BDO0FBQ0Esb0JBQW9CLGlDQUFtQjtBQUN2QztBQUNBLDBCQUEwQixpQ0FBbUI7QUFDN0M7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RCxnQkFBZ0IsaUNBQW1CO0FBQ25DO0FBQ0EsZUFBZSxpQ0FBbUI7QUFDbEM7QUFDQSxzQkFBc0IsaUNBQW1CO0FBQ3pDO0FBQ0EseUJBQXlCLGlDQUFtQjtBQUM1QztBQUNBLDZCQUE2QixpQ0FBbUI7QUFDaEQ7QUFDQSwwQkFBMEIsaUNBQW1CO0FBQzdDO0FBQ0Esa0JBQWtCLGlDQUFtQjtBQUNyQztBQUNBLGNBQWMsaUNBQW1CO0FBQ2pDO0FBQ0EsYUFBYSxpQ0FBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsbUVBQW1FO0FBQ3BFOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RCxtQkFBbUIsaUNBQW1CO0FBQ3RDLHlCQUF5QixpQ0FBbUI7QUFDNUMsOEJBQThCLGlDQUFtQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRCwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQ0FBbUI7O0FBRXBEOztBQUVBLCtDQUErQyxhQUFhO0FBQzVELG1CQUFtQixpQ0FBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBbUI7QUFDeEM7QUFDQSx1QkFBdUIsaUNBQW1CO0FBQzFDO0FBQ0Esb0JBQW9CLGlDQUFtQjtBQUN2Qzs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVELHFCQUFxQixpQ0FBbUI7QUFDeEMsdUJBQXVCLGlDQUFtQjtBQUMxQyx5QkFBeUIsaUNBQW1CO0FBQzVDLDhCQUE4QixpQ0FBbUI7QUFDakQseUJBQXlCLGlDQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsNEJBQTRCLFlBQVksaUNBQW1COztBQUUzRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQsOEJBQThCLGlDQUFtQjtBQUNqRCxjQUFjLGlDQUFtQjtBQUNqQztBQUNBO0FBQ0EsNkRBQTZELDJCQUEyQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELG9DQUFvQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EscVNBQXFTO0FBQ3JTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdCQUFnQjtBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0Esd0ZBQXdGLGtEQUFrRDtBQUMxSSxtRkFBbUYsMkNBQTJDO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQsaUJBQWlCLGlDQUFtQjtBQUNwQzs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQsbUJBQW1CLGlDQUFtQjtBQUN0QztBQUNBLG1CQUFtQixpQ0FBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlDQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQseUJBQXlCLGlDQUFtQjtBQUM1QztBQUNBLDhCQUE4QixpQ0FBbUI7QUFDakQ7QUFDQTtBQUNBLDRCQUE0QixpQ0FBbUI7QUFDL0M7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsQ0FBQztBQUNELDJDQUEyQyxjQUFjOzs7Ozs7Ozs7OztBQ2g2SjVDO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZTtBQUNmLG1CQUFtQixtQkFBTyxDQUFDLGlGQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUIsSUFBSTtBQUM3QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7O1VDeFNmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZixrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QywyQ0FBMEMsRUFBRSxxQ0FBcUMsK0JBQStCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9YTUwyTUlESS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vWE1MMk1JREkvLi9ub2RlX21vZHVsZXMvQHRoYXllcy9taWRpLXRvb2xzL2J1aWxkL21pZGktdG9vbHMuanMiLCJ3ZWJwYWNrOi8vWE1MMk1JREkvLi9zcmMvWE1MVG9NSURJLnRzIiwid2VicGFjazovL1hNTDJNSURJL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1hNTDJNSURJLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlhNTDJNSURJXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlhNTDJNSURJXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1JRElUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNSURJVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgey8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cblxuXG52YXIgYmFzZTY0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYmFzZTY0LWpzICovIFwiLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzXCIpXG52YXIgaWVlZTc1NCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGllZWU3NTQgKi8gXCIuL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIpXG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGlzYXJyYXkgKi8gXCIuL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzXCIpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0Ly8gVGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcblx0Ly8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcblx0cmV0dXJuIHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0JyAmJlxuXHRcdGNvbnNvbGUubG9nICYmXG5cdFx0Y29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb21tb24gKi8gXCIuL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzXCIpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBtcyAqLyBcIi4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzXCIpO1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMgPSBbXTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0Ly8gRGVidWcuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5cdFx0Ly8gZGVidWcucmF3TG9nID0gcmF3TG9nO1xuXG5cdFx0Ly8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY3JlYXRlRGVidWcuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcblx0XHRcdGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLT9cXGQ/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRDcmVhdG9yLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudENyZWF0b3IudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXZlbnRzID0gX19pbXBvcnRTdGFyKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTUlESUV2ZW50cyAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9pbmRleC50c1wiKSk7XG52YXIgTUlESU1ldGFFdmVudENyZWF0b3JfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTUlESU1ldGFFdmVudENyZWF0b3IgKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElNZXRhRXZlbnRDcmVhdG9yLnRzXCIpO1xudmFyIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlICovIFwiLi9zcmMvdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlLnRzXCIpO1xudmFyIGNyZWF0ZU5vdGVPZmZFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cbiAgICB2YXIgY2hhbm5lbCA9IChzdGF0dXNCeXRlICYgMHhGKSArIDE7XG4gICAgdmFyIG5vdGVOdW1iZXIgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4KTtcbiAgICB2YXIgcmVsZWFzZSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXggKyAxKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAyLFxuICAgICAgICBuZXcgRXZlbnRzLk5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgbm90ZU51bWJlcjogbm90ZU51bWJlcixcbiAgICAgICAgICAgIHJlbGVhc2U6IHJlbGVhc2UsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlTm90ZU9uRXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIGNoYW5uZWwgPSAoc3RhdHVzQnl0ZSAmIDB4RikgKyAxO1xuICAgIHZhciBub3RlTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCk7XG4gICAgdmFyIHZlbG9jaXR5ID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCArIDEpO1xuICAgIHJldHVybiBbXG4gICAgICAgIDIsXG4gICAgICAgIG5ldyBFdmVudHMuTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IG5vdGVOdW1iZXIsXG4gICAgICAgICAgICB2ZWxvY2l0eTogdmVsb2NpdHksXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlU3lzZXhFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cbiAgICB2YXIgX2EgPSB2YXJpYWJsZV9sZW5ndGhfdmFsdWVfMS5mcm9tVmFyaWFibGVMZW5ndGhWYWx1ZShkYXRhVmlldy5idWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQgKyBzdGFydEluZGV4KSwgYnl0ZXNSZWFkID0gX2FbMF0sIGRhdGFMZW5ndGggPSBfYVsxXTtcbiAgICByZXR1cm4gW1xuICAgICAgICBieXRlc1JlYWQgKyBkYXRhTGVuZ3RoLFxuICAgICAgICBuZXcgRXZlbnRzLlN5c0V4RXZlbnQoe1xuICAgICAgICAgICAgZXZlbnREYXRhOiBuZXcgVWludDhBcnJheShkYXRhVmlldy5idWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQgKyBzdGFydEluZGV4LCBkYXRhTGVuZ3RoKSxcbiAgICAgICAgfSlcbiAgICBdO1xufTtcbnZhciBjcmVhdGVQcm9ncmFtQ2hhbmdlRXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIGNoYW5uZWwgPSAoc3RhdHVzQnl0ZSAmIDB4RikgKyAxO1xuICAgIHZhciBwcm9ncmFtTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgMSxcbiAgICAgICAgbmV3IEV2ZW50cy5Qcm9ncmFtQ2hhbmdlRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIHByb2dyYW1OdW1iZXI6IHByb2dyYW1OdW1iZXIsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlQ29udHJvbGxlckNoYW5nZUV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgY29udHJvbGxlck51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHZhciBjb250cm9sbGVyVmFsdWUgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4ICsgMSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgMixcbiAgICAgICAgbmV3IEV2ZW50cy5Db250cm9sbGVyQ2hhbmdlRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IGNvbnRyb2xsZXJOdW1iZXIsXG4gICAgICAgICAgICBjb250cm9sbGVyVmFsdWU6IGNvbnRyb2xsZXJWYWx1ZSxcbiAgICAgICAgfSlcbiAgICBdO1xufTtcbnZhciBjcmVhdGVQb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgdmFyIGNoYW5uZWwgPSAoc3RhdHVzQnl0ZSAmIDB4RikgKyAxO1xuICAgIHZhciBub3RlTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCk7XG4gICAgdmFyIHByZXNzdXJlID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCArIDEpO1xuICAgIHJldHVybiBbXG4gICAgICAgIDIsXG4gICAgICAgIG5ldyBFdmVudHMuUG9seXBob25pY0FmdGVydG91Y2hFdmVudCh7XG4gICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgbm90ZU51bWJlcjogbm90ZU51bWJlcixcbiAgICAgICAgICAgIHByZXNzdXJlOiBwcmVzc3VyZSxcbiAgICAgICAgfSlcbiAgICBdO1xufTtcbnZhciBjcmVhdGVDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgdmFyIGNoYW5uZWwgPSAoc3RhdHVzQnl0ZSAmIDB4RikgKyAxO1xuICAgIHZhciBwcmVzc3VyZSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXggKyAxKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAxLFxuICAgICAgICBuZXcgRXZlbnRzLkNoYW5uZWxBZnRlcnRvdWNoRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIHByZXNzdXJlOiBwcmVzc3VyZSxcbiAgICAgICAgfSlcbiAgICBdO1xufTtcbnZhciBjcmVhdGVQaXRjaEJlbmRFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgbGVhc3RTaWduaWZpY2FudEJ5dGUgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4KTtcbiAgICB2YXIgbW9zdFNpZ25pZmljYW50Qnl0ZSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXggKyAxKTtcbiAgICB2YXIgdmFsdWUgPSAoKG1vc3RTaWduaWZpY2FudEJ5dGUgJiAweDdGKSA8PCA3KSArIChsZWFzdFNpZ25pZmljYW50Qnl0ZSAmIDB4N0YpO1xuICAgIHJldHVybiBbXG4gICAgICAgIDIsXG4gICAgICAgIG5ldyBFdmVudHMuUGl0Y2hCZW5kRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgfSlcbiAgICBdO1xufTtcbnZhciBnZXRDcmVhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlKSB7XG4gICAgaWYgKHN0YXR1c0J5dGUgPj4gNCA9PT0gMHg4KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVOb3RlT2ZmRXZlbnRGcm9tQnl0ZXM7XG4gICAgfVxuICAgIGlmIChzdGF0dXNCeXRlID4+IDQgPT09IDB4OSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTm90ZU9uRXZlbnRGcm9tQnl0ZXM7XG4gICAgfVxuICAgIGlmIChzdGF0dXNCeXRlID4+IDQgPT09IDB4QSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9seXBob25pY0FmdGVydG91Y2hFdmVudEZyb21CeXRlcztcbiAgICB9XG4gICAgaWYgKHN0YXR1c0J5dGUgPj4gNCA9PT0gMHhCKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVDb250cm9sbGVyQ2hhbmdlRXZlbnRGcm9tQnl0ZXM7XG4gICAgfVxuICAgIGlmIChzdGF0dXNCeXRlID4+IDQgPT09IDB4Qykge1xuICAgICAgICByZXR1cm4gY3JlYXRlUHJvZ3JhbUNoYW5nZUV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweEQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYW5uZWxBZnRlcnRvdWNoRXZlbnRGcm9tQnl0ZXM7XG4gICAgfVxuICAgIGlmIChzdGF0dXNCeXRlID4+IDQgPT09IDB4RSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUGl0Y2hCZW5kRXZlbnRGcm9tQnl0ZXM7XG4gICAgfVxuICAgIGlmIChzdGF0dXNCeXRlID09PSAweEYwKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTeXNleEV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA9PT0gMHhGRikge1xuICAgICAgICByZXR1cm4gTUlESU1ldGFFdmVudENyZWF0b3JfMS5jcmVhdGVNZXRhRXZlbnRGcm9tQnl0ZXM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmV4cG9ydHMuZXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoZGF0YVZpZXcsIHN0YXJ0SW5kZXgsIHByZXZpb3VzU3RhdHVzQnl0ZSkge1xuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cbiAgICBpZiAocHJldmlvdXNTdGF0dXNCeXRlID09PSB2b2lkIDApIHsgcHJldmlvdXNTdGF0dXNCeXRlID0gbnVsbDsgfVxuICAgIHZhciBzdGF0dXNCeXRlID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCk7XG4gICAgdmFyIGNyZWF0ZUZ1bmN0aW9uID0gZ2V0Q3JlYXRlRnVuY3Rpb24oc3RhdHVzQnl0ZSk7XG4gICAgdmFyIGJ5dGVzUmVhZCA9IDA7XG4gICAgaWYgKGNyZWF0ZUZ1bmN0aW9uID09PSBudWxsICYmIHByZXZpb3VzU3RhdHVzQnl0ZSAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0dXNCeXRlID0gcHJldmlvdXNTdGF0dXNCeXRlO1xuICAgICAgICBjcmVhdGVGdW5jdGlvbiA9IGdldENyZWF0ZUZ1bmN0aW9uKHN0YXR1c0J5dGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVGhlIGJ5dGUgYXQgc3RhcnRJbmRleCB3YXMgdGhlIHN0YXR1cyBieXRlLCBzbyBza2lwIGl0IGluIHRoZSBkYXRhXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gMTtcbiAgICAgICAgYnl0ZXNSZWFkICs9IDE7XG4gICAgfVxuICAgIGlmIChjcmVhdGVGdW5jdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgX2EgPSBjcmVhdGVGdW5jdGlvbihzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCksIGV2ZW50Qnl0ZXNSZWFkID0gX2FbMF0sIGV2ZW50XzEgPSBfYVsxXTtcbiAgICAgICAgYnl0ZXNSZWFkICs9IGV2ZW50Qnl0ZXNSZWFkO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnl0ZXNSZWFkOiBieXRlc1JlYWQsXG4gICAgICAgICAgICBldmVudDogZXZlbnRfMSxcbiAgICAgICAgICAgIHN0YXR1c0J5dGU6IHN0YXR1c0J5dGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvQ2hhbm5lbEFmdGVydG91Y2gudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9DaGFubmVsQWZ0ZXJ0b3VjaC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYW5uZWxBZnRlcnRvdWNoRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBwcmVzc3VyZSA9IF9hLnByZXNzdXJlO1xuICAgICAgICB0aGlzLnR5cGUgPSAzMiAvKiBDaGFubmVsQWZ0ZXJ0b3VjaCAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgIH1cbiAgICByZXR1cm4gQ2hhbm5lbEFmdGVydG91Y2hFdmVudDtcbn0oKSk7XG5leHBvcnRzLkNoYW5uZWxBZnRlcnRvdWNoRXZlbnQgPSBDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Db250cm9sbGVyQ2hhbmdlLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Db250cm9sbGVyQ2hhbmdlLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ29udHJvbGxlckNoYW5nZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChfYSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IF9hLmNoYW5uZWwsIGNvbnRyb2xsZXJOdW1iZXIgPSBfYS5jb250cm9sbGVyTnVtYmVyLCBjb250cm9sbGVyVmFsdWUgPSBfYS5jb250cm9sbGVyVmFsdWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDggLyogQ29udHJvbGxlckNoYW5nZSAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyTnVtYmVyID0gY29udHJvbGxlck51bWJlcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyVmFsdWUgPSBjb250cm9sbGVyVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBDb250cm9sbGVyQ2hhbmdlRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5Db250cm9sbGVyQ2hhbmdlRXZlbnQgPSBDb250cm9sbGVyQ2hhbmdlRXZlbnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ2hhbm5lbFByZWZpeC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0NoYW5uZWxQcmVmaXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENoYW5uZWxQcmVmaXhFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFubmVsUHJlZml4RXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWxOdW1iZXIgPSBfYS5jaGFubmVsTnVtYmVyO1xuICAgICAgICB0aGlzLnR5cGUgPSAxMDI0IC8qIE1ldGFDaGFubmVsUHJlZml4ICovO1xuICAgICAgICB0aGlzLmNoYW5uZWxOdW1iZXIgPSBjaGFubmVsTnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gQ2hhbm5lbFByZWZpeEV2ZW50O1xufSgpKTtcbmV4cG9ydHMuQ2hhbm5lbFByZWZpeEV2ZW50ID0gQ2hhbm5lbFByZWZpeEV2ZW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0NvcHlyaWdodC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ29weXJpZ2h0LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvcHlyaWdodEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjb3B5cmlnaHQgPSBfYS5jb3B5cmlnaHQ7XG4gICAgICAgIHRoaXMudHlwZSA9IDQwOTYgLyogTWV0YUNvcHlyaWdodCAqLztcbiAgICAgICAgdGhpcy5jb3B5cmlnaHQgPSBjb3B5cmlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBDb3B5cmlnaHRFdmVudDtcbn0oKSk7XG5leHBvcnRzLkNvcHlyaWdodEV2ZW50ID0gQ29weXJpZ2h0RXZlbnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ3VlUG9pbnQudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ3VlUG9pbnQudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDdWVQb2ludEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGN1ZVRleHQgPSBfYS5jdWVUZXh0O1xuICAgICAgICB0aGlzLnR5cGUgPSA0MTk0MzA0IC8qIE1ldGFDdWVQb2ludCAqLztcbiAgICAgICAgdGhpcy5jdWVUZXh0ID0gY3VlVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIEN1ZVBvaW50RXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5DdWVQb2ludEV2ZW50ID0gQ3VlUG9pbnRFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9JbnN0cnVtZW50TmFtZS50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9JbnN0cnVtZW50TmFtZS50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5zdHJ1bWVudE5hbWVFdmVudChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDY1NTM2IC8qIE1ldGFJbnN0cnVtZW50TmFtZSAqLztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIEluc3RydW1lbnROYW1lRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5JbnN0cnVtZW50TmFtZUV2ZW50ID0gSW5zdHJ1bWVudE5hbWVFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9LZXlTaWduYXR1cmUudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0tleVNpZ25hdHVyZS50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBLZXlTaWduYXR1cmVFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZXlTaWduYXR1cmVFdmVudChfYSkge1xuICAgICAgICB2YXIgc2hhcnBzID0gX2Euc2hhcnBzLCBpc01ham9yID0gX2EuaXNNYWpvcjtcbiAgICAgICAgdGhpcy50eXBlID0gNTI0Mjg4IC8qIE1ldGFLZXlTaWduYXR1cmUgKi87XG4gICAgICAgIHRoaXMuc2hhcnBzID0gc2hhcnBzO1xuICAgICAgICB0aGlzLmlzTWFqb3IgPSBpc01ham9yO1xuICAgIH1cbiAgICByZXR1cm4gS2V5U2lnbmF0dXJlRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5LZXlTaWduYXR1cmVFdmVudCA9IEtleVNpZ25hdHVyZUV2ZW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0x5cmljLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0x5cmljLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTHlyaWNFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMeXJpY0V2ZW50KF9hKSB7XG4gICAgICAgIHZhciBseXJpYyA9IF9hLmx5cmljO1xuICAgICAgICB0aGlzLnR5cGUgPSAyNjIxNDQgLyogTWV0YUx5cmljICovO1xuICAgICAgICB0aGlzLmx5cmljID0gbHlyaWM7XG4gICAgfVxuICAgIHJldHVybiBMeXJpY0V2ZW50O1xufSgpKTtcbmV4cG9ydHMuTHlyaWNFdmVudCA9IEx5cmljRXZlbnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvTWFya2VyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9NYXJrZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTWFya2VyRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFya2VyRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIG1hcmtlciA9IF9hLm1hcmtlcjtcbiAgICAgICAgdGhpcy50eXBlID0gMTA0ODU3NiAvKiBNZXRhTWFya2VyICovO1xuICAgICAgICB0aGlzLm1hcmtlciA9IG1hcmtlcjtcbiAgICB9XG4gICAgcmV0dXJuIE1hcmtlckV2ZW50O1xufSgpKTtcbmV4cG9ydHMuTWFya2VyRXZlbnQgPSBNYXJrZXJFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9Qb3J0UHJlZml4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvUG9ydFByZWZpeC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9ydFByZWZpeEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvcnRQcmVmaXhFdmVudChfYSkge1xuICAgICAgICB2YXIgcG9ydE51bWJlciA9IF9hLnBvcnROdW1iZXI7XG4gICAgICAgIHRoaXMudHlwZSA9IDUxMiAvKiBNZXRhUG9ydFByZWZpeCAqLztcbiAgICAgICAgdGhpcy5wb3J0TnVtYmVyID0gcG9ydE51bWJlcjtcbiAgICB9XG4gICAgcmV0dXJuIFBvcnRQcmVmaXhFdmVudDtcbn0oKSk7XG5leHBvcnRzLlBvcnRQcmVmaXhFdmVudCA9IFBvcnRQcmVmaXhFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9TTVBURU9mZnNldC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9TTVBURU9mZnNldC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNNUFRFT2Zmc2V0RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU01QVEVPZmZzZXRFdmVudChfYSkge1xuICAgICAgICB2YXIgaG91cnMgPSBfYS5ob3VycywgbWludXRlcyA9IF9hLm1pbnV0ZXMsIHNlY29uZHMgPSBfYS5zZWNvbmRzLCBmcmFtZXMgPSBfYS5mcmFtZXMsIGZyYWN0aW9uYWxGcmFtZXMgPSBfYS5mcmFjdGlvbmFsRnJhbWVzO1xuICAgICAgICB0aGlzLnR5cGUgPSAzMjc2OCAvKiBNZXRhU01QVEVPZmZzZXQgKi87XG4gICAgICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgICAgICAgdGhpcy5taW51dGVzID0gbWludXRlcztcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gc2Vjb25kcztcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgICAgIHRoaXMuZnJhY3Rpb25hbEZyYW1lcyA9IGZyYWN0aW9uYWxGcmFtZXM7XG4gICAgfVxuICAgIHJldHVybiBTTVBURU9mZnNldEV2ZW50O1xufSgpKTtcbmV4cG9ydHMuU01QVEVPZmZzZXRFdmVudCA9IFNNUFRFT2Zmc2V0RXZlbnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU2VxdWVuY2VOdW1iZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU2VxdWVuY2VOdW1iZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTZXF1ZW5jZU51bWJlckV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlcXVlbmNlTnVtYmVyRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIHNlcXVlbmNlTnVtYmVyID0gX2Euc2VxdWVuY2VOdW1iZXI7XG4gICAgICAgIHRoaXMudHlwZSA9IDI1NiAvKiBNZXRhU2VxdWVuY2VOdW1iZXIgKi87XG4gICAgICAgIHRoaXMuc2VxdWVuY2VOdW1iZXIgPSBzZXF1ZW5jZU51bWJlcjtcbiAgICB9XG4gICAgcmV0dXJuIFNlcXVlbmNlTnVtYmVyRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5TZXF1ZW5jZU51bWJlckV2ZW50ID0gU2VxdWVuY2VOdW1iZXJFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9TZXF1ZW5jZXJTcGVjaWZpYy50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9TZXF1ZW5jZXJTcGVjaWZpYy50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNlcXVlbmNlclNwZWNpZmljRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VxdWVuY2VyU3BlY2lmaWNFdmVudChfYSkge1xuICAgICAgICB2YXIgaWQgPSBfYS5pZCwgZGF0YSA9IF9hLmRhdGE7XG4gICAgICAgIHRoaXMudHlwZSA9IDIwOTcxNTIgLyogTWV0YVNlcXVlbmNlclNwZWNpZmljICovO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBTZXF1ZW5jZXJTcGVjaWZpY0V2ZW50O1xufSgpKTtcbmV4cG9ydHMuU2VxdWVuY2VyU3BlY2lmaWNFdmVudCA9IFNlcXVlbmNlclNwZWNpZmljRXZlbnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU2V0VGVtcG8udHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU2V0VGVtcG8udHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTZXRUZW1wb0V2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNldFRlbXBvRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIG1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlID0gX2EubWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGU7XG4gICAgICAgIHRoaXMudHlwZSA9IDgxOTIgLyogTWV0YVNldFRlbXBvICovO1xuICAgICAgICB0aGlzLm1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlID0gbWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGU7XG4gICAgfVxuICAgIHJldHVybiBTZXRUZW1wb0V2ZW50O1xufSgpKTtcbmV4cG9ydHMuU2V0VGVtcG9FdmVudCA9IFNldFRlbXBvRXZlbnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvVGV4dC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RleHQudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFRleHRFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUZXh0RXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIHRleHQgPSBfYS50ZXh0O1xuICAgICAgICB0aGlzLnR5cGUgPSAyMDQ4IC8qIE1ldGFUZXh0ICovO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gVGV4dEV2ZW50O1xufSgpKTtcbmV4cG9ydHMuVGV4dEV2ZW50ID0gVGV4dEV2ZW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RpbWVTaWduYXR1cmUudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9UaW1lU2lnbmF0dXJlLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUaW1lU2lnbmF0dXJlRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGltZVNpZ25hdHVyZUV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSBfYS5udW1lcmF0b3IsIGRlbm9taW5hdG9yID0gX2EuZGVub21pbmF0b3IsIGNsb2Nrc1BlclRpY2sgPSBfYS5jbG9ja3NQZXJUaWNrLCB0aGlydHlTZWNvbmROb3RlcyA9IF9hLnRoaXJ0eVNlY29uZE5vdGVzO1xuICAgICAgICB0aGlzLnR5cGUgPSAxMzEwNzIgLyogTWV0YVRpbWVTaWduYXR1cmUgKi87XG4gICAgICAgIHRoaXMubnVtZXJhdG9yID0gbnVtZXJhdG9yO1xuICAgICAgICB0aGlzLmRlbm9taW5hdG9yID0gZGVub21pbmF0b3I7XG4gICAgICAgIHRoaXMuY2xvY2tzUGVyVGljayA9IGNsb2Nrc1BlclRpY2s7XG4gICAgICAgIHRoaXMudGhpcnR5U2Vjb25kTm90ZXMgPSB0aGlydHlTZWNvbmROb3RlcztcbiAgICB9XG4gICAgcmV0dXJuIFRpbWVTaWduYXR1cmVFdmVudDtcbn0oKSk7XG5leHBvcnRzLlRpbWVTaWduYXR1cmVFdmVudCA9IFRpbWVTaWduYXR1cmVFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9UcmFja05hbWUudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RyYWNrTmFtZS50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUcmFja05hbWVFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFja05hbWVFdmVudChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDE2Mzg0IC8qIE1ldGFUcmFja05hbWUgKi87XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiBUcmFja05hbWVFdmVudDtcbn0oKSk7XG5leHBvcnRzLlRyYWNrTmFtZUV2ZW50ID0gVHJhY2tOYW1lRXZlbnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTZXF1ZW5jZU51bWJlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TZXF1ZW5jZU51bWJlciAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1NlcXVlbmNlTnVtYmVyLnRzXCIpO1xuZXhwb3J0cy5TZXF1ZW5jZU51bWJlckV2ZW50ID0gU2VxdWVuY2VOdW1iZXJfMS5TZXF1ZW5jZU51bWJlckV2ZW50O1xudmFyIFRpbWVTaWduYXR1cmVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vVGltZVNpZ25hdHVyZSAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RpbWVTaWduYXR1cmUudHNcIik7XG5leHBvcnRzLlRpbWVTaWduYXR1cmVFdmVudCA9IFRpbWVTaWduYXR1cmVfMS5UaW1lU2lnbmF0dXJlRXZlbnQ7XG52YXIgS2V5U2lnbmF0dXJlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0tleVNpZ25hdHVyZSAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0tleVNpZ25hdHVyZS50c1wiKTtcbmV4cG9ydHMuS2V5U2lnbmF0dXJlRXZlbnQgPSBLZXlTaWduYXR1cmVfMS5LZXlTaWduYXR1cmVFdmVudDtcbnZhciBTZXRUZW1wb18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TZXRUZW1wbyAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1NldFRlbXBvLnRzXCIpO1xuZXhwb3J0cy5TZXRUZW1wb0V2ZW50ID0gU2V0VGVtcG9fMS5TZXRUZW1wb0V2ZW50O1xudmFyIFBvcnRQcmVmaXhfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9ydFByZWZpeCAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1BvcnRQcmVmaXgudHNcIik7XG5leHBvcnRzLlBvcnRQcmVmaXhFdmVudCA9IFBvcnRQcmVmaXhfMS5Qb3J0UHJlZml4RXZlbnQ7XG52YXIgQ2hhbm5lbFByZWZpeF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9DaGFubmVsUHJlZml4ICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ2hhbm5lbFByZWZpeC50c1wiKTtcbmV4cG9ydHMuQ2hhbm5lbFByZWZpeEV2ZW50ID0gQ2hhbm5lbFByZWZpeF8xLkNoYW5uZWxQcmVmaXhFdmVudDtcbnZhciBDb3B5cmlnaHRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQ29weXJpZ2h0ICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ29weXJpZ2h0LnRzXCIpO1xuZXhwb3J0cy5Db3B5cmlnaHRFdmVudCA9IENvcHlyaWdodF8xLkNvcHlyaWdodEV2ZW50O1xudmFyIFRyYWNrTmFtZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9UcmFja05hbWUgKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9UcmFja05hbWUudHNcIik7XG5leHBvcnRzLlRyYWNrTmFtZUV2ZW50ID0gVHJhY2tOYW1lXzEuVHJhY2tOYW1lRXZlbnQ7XG52YXIgVGV4dF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9UZXh0ICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvVGV4dC50c1wiKTtcbmV4cG9ydHMuVGV4dEV2ZW50ID0gVGV4dF8xLlRleHRFdmVudDtcbnZhciBJbnN0cnVtZW50TmFtZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9JbnN0cnVtZW50TmFtZSAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0luc3RydW1lbnROYW1lLnRzXCIpO1xuZXhwb3J0cy5JbnN0cnVtZW50TmFtZUV2ZW50ID0gSW5zdHJ1bWVudE5hbWVfMS5JbnN0cnVtZW50TmFtZUV2ZW50O1xudmFyIEx5cmljXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0x5cmljICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvTHlyaWMudHNcIik7XG5leHBvcnRzLkx5cmljRXZlbnQgPSBMeXJpY18xLkx5cmljRXZlbnQ7XG52YXIgTWFya2VyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01hcmtlciAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL01hcmtlci50c1wiKTtcbmV4cG9ydHMuTWFya2VyRXZlbnQgPSBNYXJrZXJfMS5NYXJrZXJFdmVudDtcbnZhciBDdWVQb2ludF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9DdWVQb2ludCAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0N1ZVBvaW50LnRzXCIpO1xuZXhwb3J0cy5DdWVQb2ludEV2ZW50ID0gQ3VlUG9pbnRfMS5DdWVQb2ludEV2ZW50O1xudmFyIFNNUFRFT2Zmc2V0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1NNUFRFT2Zmc2V0ICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU01QVEVPZmZzZXQudHNcIik7XG5leHBvcnRzLlNNUFRFT2Zmc2V0RXZlbnQgPSBTTVBURU9mZnNldF8xLlNNUFRFT2Zmc2V0RXZlbnQ7XG52YXIgU2VxdWVuY2VyU3BlY2lmaWNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU2VxdWVuY2VyU3BlY2lmaWMgKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9TZXF1ZW5jZXJTcGVjaWZpYy50c1wiKTtcbmV4cG9ydHMuU2VxdWVuY2VyU3BlY2lmaWNFdmVudCA9IFNlcXVlbmNlclNwZWNpZmljXzEuU2VxdWVuY2VyU3BlY2lmaWNFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTm90ZU9mZi50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTm90ZU9mZi50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE5vdGVPZmZFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RlT2ZmRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBub3RlTnVtYmVyID0gX2Eubm90ZU51bWJlciwgcmVsZWFzZSA9IF9hLnJlbGVhc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IDEgLyogTm90ZU9mZiAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5ub3RlTnVtYmVyID0gbm90ZU51bWJlcjtcbiAgICAgICAgdGhpcy5yZWxlYXNlID0gcmVsZWFzZTtcbiAgICB9XG4gICAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKSk7XG5leHBvcnRzLk5vdGVPZmZFdmVudCA9IE5vdGVPZmZFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTm90ZU9uLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL05vdGVPbi50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTm90ZU9uRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm90ZU9uRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBub3RlTnVtYmVyID0gX2Eubm90ZU51bWJlciwgdmVsb2NpdHkgPSBfYS52ZWxvY2l0eTtcbiAgICAgICAgdGhpcy50eXBlID0gMiAvKiBOb3RlT24gKi87XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMubm90ZU51bWJlciA9IG5vdGVOdW1iZXI7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB9XG4gICAgcmV0dXJuIE5vdGVPbkV2ZW50O1xufSgpKTtcbmV4cG9ydHMuTm90ZU9uRXZlbnQgPSBOb3RlT25FdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvUGl0Y2hCZW5kLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL1BpdGNoQmVuZC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUGl0Y2hCZW5kRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGl0Y2hCZW5kRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICB0aGlzLnR5cGUgPSA2NCAvKiBQaXRjaEJlbmQgKi87XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFBpdGNoQmVuZEV2ZW50O1xufSgpKTtcbmV4cG9ydHMuUGl0Y2hCZW5kRXZlbnQgPSBQaXRjaEJlbmRFdmVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvUG9seXBob25pY0FmdGVydG91Y2gudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Qb2x5cGhvbmljQWZ0ZXJ0b3VjaC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBub3RlTnVtYmVyID0gX2Eubm90ZU51bWJlciwgcHJlc3N1cmUgPSBfYS5wcmVzc3VyZTtcbiAgICAgICAgdGhpcy50eXBlID0gNCAvKiBQb2x5cGhvbmljQWZ0ZXJ0b3VjaCAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5ub3RlTnVtYmVyID0gbm90ZU51bWJlcjtcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgIH1cbiAgICByZXR1cm4gUG9seXBob25pY0FmdGVydG91Y2hFdmVudDtcbn0oKSk7XG5leHBvcnRzLlBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnQgPSBQb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Qcm9ncmFtQ2hhbmdlLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Qcm9ncmFtQ2hhbmdlLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUHJvZ3JhbUNoYW5nZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb2dyYW1DaGFuZ2VFdmVudChfYSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IF9hLmNoYW5uZWwsIHByb2dyYW1OdW1iZXIgPSBfYS5wcm9ncmFtTnVtYmVyO1xuICAgICAgICB0aGlzLnR5cGUgPSAxNiAvKiBQcm9ncmFtQ2hhbmdlICovO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLnByb2dyYW1OdW1iZXIgPSBwcm9ncmFtTnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gUHJvZ3JhbUNoYW5nZUV2ZW50O1xufSgpKTtcbmV4cG9ydHMuUHJvZ3JhbUNoYW5nZUV2ZW50ID0gUHJvZ3JhbUNoYW5nZUV2ZW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9TeXNFeC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL1N5c0V4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN5c0V4RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3lzRXhFdmVudChfYSkge1xuICAgICAgICB2YXIgZXZlbnREYXRhID0gX2EuZXZlbnREYXRhO1xuICAgICAgICB0aGlzLnR5cGUgPSAxMjggLyogU3lzZXggKi87XG4gICAgICAgIHRoaXMuZXZlbnREYXRhID0gZXZlbnREYXRhO1xuICAgIH1cbiAgICByZXR1cm4gU3lzRXhFdmVudDtcbn0oKSk7XG5leHBvcnRzLlN5c0V4RXZlbnQgPSBTeXNFeEV2ZW50O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE5vdGVPZmZfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTm90ZU9mZiAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Ob3RlT2ZmLnRzXCIpO1xuZXhwb3J0cy5Ob3RlT2ZmRXZlbnQgPSBOb3RlT2ZmXzEuTm90ZU9mZkV2ZW50O1xudmFyIE5vdGVPbl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9Ob3RlT24gKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTm90ZU9uLnRzXCIpO1xuZXhwb3J0cy5Ob3RlT25FdmVudCA9IE5vdGVPbl8xLk5vdGVPbkV2ZW50O1xudmFyIFByb2dyYW1DaGFuZ2VfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUHJvZ3JhbUNoYW5nZSAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Qcm9ncmFtQ2hhbmdlLnRzXCIpO1xuZXhwb3J0cy5Qcm9ncmFtQ2hhbmdlRXZlbnQgPSBQcm9ncmFtQ2hhbmdlXzEuUHJvZ3JhbUNoYW5nZUV2ZW50O1xudmFyIENvbnRyb2xsZXJDaGFuZ2VfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQ29udHJvbGxlckNoYW5nZSAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Db250cm9sbGVyQ2hhbmdlLnRzXCIpO1xuZXhwb3J0cy5Db250cm9sbGVyQ2hhbmdlRXZlbnQgPSBDb250cm9sbGVyQ2hhbmdlXzEuQ29udHJvbGxlckNoYW5nZUV2ZW50O1xudmFyIFBvbHlwaG9uaWNBZnRlcnRvdWNoXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlwaG9uaWNBZnRlcnRvdWNoICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL1BvbHlwaG9uaWNBZnRlcnRvdWNoLnRzXCIpO1xuZXhwb3J0cy5Qb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50ID0gUG9seXBob25pY0FmdGVydG91Y2hfMS5Qb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50O1xudmFyIENoYW5uZWxBZnRlcnRvdWNoXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NoYW5uZWxBZnRlcnRvdWNoICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL0NoYW5uZWxBZnRlcnRvdWNoLnRzXCIpO1xuZXhwb3J0cy5DaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50ID0gQ2hhbm5lbEFmdGVydG91Y2hfMS5DaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50O1xudmFyIFBpdGNoQmVuZF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9QaXRjaEJlbmQgKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvUGl0Y2hCZW5kLnRzXCIpO1xuZXhwb3J0cy5QaXRjaEJlbmRFdmVudCA9IFBpdGNoQmVuZF8xLlBpdGNoQmVuZEV2ZW50O1xudmFyIFN5c0V4XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1N5c0V4ICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL1N5c0V4LnRzXCIpO1xuZXhwb3J0cy5TeXNFeEV2ZW50ID0gU3lzRXhfMS5TeXNFeEV2ZW50O1xudmFyIE1ldGFfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTWV0YSAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL2luZGV4LnRzXCIpO1xuZXhwb3J0cy5NZXRhID0ge1xuICAgIFNlcXVlbmNlTnVtYmVyRXZlbnQ6IE1ldGFfMS5TZXF1ZW5jZU51bWJlckV2ZW50LFxuICAgIFRpbWVTaWduYXR1cmVFdmVudDogTWV0YV8xLlRpbWVTaWduYXR1cmVFdmVudCxcbiAgICBLZXlTaWduYXR1cmVFdmVudDogTWV0YV8xLktleVNpZ25hdHVyZUV2ZW50LFxuICAgIFNldFRlbXBvRXZlbnQ6IE1ldGFfMS5TZXRUZW1wb0V2ZW50LFxuICAgIFBvcnRQcmVmaXhFdmVudDogTWV0YV8xLlBvcnRQcmVmaXhFdmVudCxcbiAgICBDaGFubmVsUHJlZml4RXZlbnQ6IE1ldGFfMS5DaGFubmVsUHJlZml4RXZlbnQsXG4gICAgQ29weXJpZ2h0RXZlbnQ6IE1ldGFfMS5Db3B5cmlnaHRFdmVudCxcbiAgICBUcmFja05hbWVFdmVudDogTWV0YV8xLlRyYWNrTmFtZUV2ZW50LFxuICAgIFRleHRFdmVudDogTWV0YV8xLlRleHRFdmVudCxcbiAgICBJbnN0cnVtZW50TmFtZUV2ZW50OiBNZXRhXzEuSW5zdHJ1bWVudE5hbWVFdmVudCxcbiAgICBMeXJpY0V2ZW50OiBNZXRhXzEuTHlyaWNFdmVudCxcbiAgICBNYXJrZXJFdmVudDogTWV0YV8xLk1hcmtlckV2ZW50LFxuICAgIEN1ZVBvaW50RXZlbnQ6IE1ldGFfMS5DdWVQb2ludEV2ZW50LFxuICAgIFNNUFRFT2Zmc2V0RXZlbnQ6IE1ldGFfMS5TTVBURU9mZnNldEV2ZW50LFxuICAgIFNlcXVlbmNlclNwZWNpZmljRXZlbnQ6IE1ldGFfMS5TZXF1ZW5jZXJTcGVjaWZpY0V2ZW50LFxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElGaWxlVHlwZS50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElGaWxlVHlwZS50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElGaWxlVHlwZTtcbihmdW5jdGlvbiAoTUlESUZpbGVUeXBlKSB7XG4gICAgTUlESUZpbGVUeXBlW01JRElGaWxlVHlwZVtcIkZvcm1hdDBcIl0gPSAwXSA9IFwiRm9ybWF0MFwiO1xuICAgIE1JRElGaWxlVHlwZVtNSURJRmlsZVR5cGVbXCJGb3JtYXQxXCJdID0gMV0gPSBcIkZvcm1hdDFcIjtcbiAgICBNSURJRmlsZVR5cGVbTUlESUZpbGVUeXBlW1wiRm9ybWF0MlwiXSA9IDJdID0gXCJGb3JtYXQyXCI7XG59KShNSURJRmlsZVR5cGUgPSBleHBvcnRzLk1JRElGaWxlVHlwZSB8fCAoZXhwb3J0cy5NSURJRmlsZVR5cGUgPSB7fSkpO1xuO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESU1ldGFFdmVudENyZWF0b3IudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL01JRElNZXRhRXZlbnRDcmVhdG9yLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRXZlbnRzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01JRElFdmVudHMgKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvaW5kZXgudHNcIik7XG52YXIgYnVmZmVyX3RvX3N0cmluZ18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vdXRpbHMvYnVmZmVyLXRvLXN0cmluZyAqLyBcIi4vc3JjL3V0aWxzL2J1ZmZlci10by1zdHJpbmcudHNcIik7XG52YXIgdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy92YXJpYWJsZS1sZW5ndGgtdmFsdWUgKi8gXCIuL3NyYy91dGlscy92YXJpYWJsZS1sZW5ndGgtdmFsdWUudHNcIik7XG52YXIgcmVhZFN0cmluZ01ldGFFdmVudCA9IGZ1bmN0aW9uIChkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdmFyIF9hID0gdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgaW5kZXgpLCBieXRlc1JlYWQgPSBfYVswXSwgc3RyaW5nTGVuZ3RoID0gX2FbMV07XG4gICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgIHZhciBzdHIgPSBidWZmZXJfdG9fc3RyaW5nXzEuYnVmZmVyVG9TdHJpbmcoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgaW5kZXgsIHN0cmluZ0xlbmd0aCk7XG4gICAgaW5kZXggPSBpbmRleCArIHN0cmluZ0xlbmd0aDtcbiAgICByZXR1cm4gW1xuICAgICAgICBieXRlc1JlYWQgKyBzdHJpbmdMZW5ndGgsXG4gICAgICAgIHN0clxuICAgIF07XG59O1xuZXhwb3J0cy5jcmVhdGVNZXRhRXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIGluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB2YXIgbWV0YUV2ZW50VHlwZU51bSA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICBpbmRleCArPSAxO1xuICAgIHZhciBldmVudDtcbiAgICBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHgwMCkge1xuICAgICAgICAvLyBOZXh0IGJ5dGUgaXMgMHgwMi0tc2tpcCBpdFxuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgc2VxdWVuY2VOdW1iZXIgPSBkYXRhVmlldy5nZXRVaW50MTYoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAyO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5TZXF1ZW5jZU51bWJlckV2ZW50KHtcbiAgICAgICAgICAgIHNlcXVlbmNlTnVtYmVyOiBzZXF1ZW5jZU51bWJlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDEpIHtcbiAgICAgICAgdmFyIF9hID0gcmVhZFN0cmluZ01ldGFFdmVudChkYXRhVmlldywgaW5kZXgpLCBieXRlc1JlYWQgPSBfYVswXSwgdGV4dCA9IF9hWzFdO1xuICAgICAgICBpbmRleCArPSBieXRlc1JlYWQ7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLlRleHRFdmVudCh7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHgwMikge1xuICAgICAgICB2YXIgX2IgPSByZWFkU3RyaW5nTWV0YUV2ZW50KGRhdGFWaWV3LCBpbmRleCksIGJ5dGVzUmVhZCA9IF9iWzBdLCBjb3B5cmlnaHQgPSBfYlsxXTtcbiAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5Db3B5cmlnaHRFdmVudCh7XG4gICAgICAgICAgICBjb3B5cmlnaHQ6IGNvcHlyaWdodCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDMpIHtcbiAgICAgICAgdmFyIF9jID0gcmVhZFN0cmluZ01ldGFFdmVudChkYXRhVmlldywgaW5kZXgpLCBieXRlc1JlYWQgPSBfY1swXSwgbmFtZV8xID0gX2NbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuVHJhY2tOYW1lRXZlbnQoe1xuICAgICAgICAgICAgbmFtZTogbmFtZV8xLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHgwNCkge1xuICAgICAgICB2YXIgX2QgPSByZWFkU3RyaW5nTWV0YUV2ZW50KGRhdGFWaWV3LCBpbmRleCksIGJ5dGVzUmVhZCA9IF9kWzBdLCBuYW1lXzIgPSBfZFsxXTtcbiAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5JbnN0cnVtZW50TmFtZUV2ZW50KHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWVfMixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDUpIHtcbiAgICAgICAgdmFyIF9lID0gcmVhZFN0cmluZ01ldGFFdmVudChkYXRhVmlldywgaW5kZXgpLCBieXRlc1JlYWQgPSBfZVswXSwgbHlyaWMgPSBfZVsxXTtcbiAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5MeXJpY0V2ZW50KHtcbiAgICAgICAgICAgIGx5cmljOiBseXJpYyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDYpIHtcbiAgICAgICAgdmFyIF9mID0gcmVhZFN0cmluZ01ldGFFdmVudChkYXRhVmlldywgaW5kZXgpLCBieXRlc1JlYWQgPSBfZlswXSwgbWFya2VyID0gX2ZbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuTWFya2VyRXZlbnQoe1xuICAgICAgICAgICAgbWFya2VyOiBtYXJrZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDA3KSB7XG4gICAgICAgIHZhciBfZyA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2dbMF0sIGN1ZVRleHQgPSBfZ1sxXTtcbiAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5DdWVQb2ludEV2ZW50KHtcbiAgICAgICAgICAgIGN1ZVRleHQ6IGN1ZVRleHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDIwKSB7XG4gICAgICAgIC8vIFNraXAgbmV4dCBieXRlIHNpbmNlIGl0IGlzIGEgY29uc3RhbnRcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIGNoYW5uZWxOdW1iZXIgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLkNoYW5uZWxQcmVmaXhFdmVudCh7XG4gICAgICAgICAgICBjaGFubmVsTnVtYmVyOiBjaGFubmVsTnVtYmVyLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHgyMSkge1xuICAgICAgICAvLyBTa2lwIG5leHQgYnl0ZSBzaW5jZSBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBwb3J0TnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5Qb3J0UHJlZml4RXZlbnQoe1xuICAgICAgICAgICAgcG9ydE51bWJlcjogcG9ydE51bWJlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MkYpIHtcbiAgICAgICAgLy8gRW5kIG9mIHRyYWNrIGV2ZW50XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4NTEpIHtcbiAgICAgICAgLy8gTmV4dCBieXRlIGlzIDB4MDMtLXNraXAgaXRcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIG1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlID0gKGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KSA8PCAxNikgK1xuICAgICAgICAgICAgKGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4ICsgMSkgPDwgOCkgKyBkYXRhVmlldy5nZXRVaW50OChpbmRleCArIDIpO1xuICAgICAgICBpbmRleCArPSAzO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5TZXRUZW1wb0V2ZW50KHtcbiAgICAgICAgICAgIG1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlOiBtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4NTQpIHtcbiAgICAgICAgLy8gU2tpcCBuZXh0IGJ5dGUgYmVjYXVzZSBpdCdzIGEgY29uc3RhbnRcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIHNlY29uZHMgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBmcmFtZXNfMSA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIGZyYWN0aW9uYWxGcmFtZXMgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLlNNUFRFT2Zmc2V0RXZlbnQoe1xuICAgICAgICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgICAgICAgbWludXRlczogbWludXRlcyxcbiAgICAgICAgICAgIHNlY29uZHM6IHNlY29uZHMsXG4gICAgICAgICAgICBmcmFtZXM6IGZyYW1lc18xLFxuICAgICAgICAgICAgZnJhY3Rpb25hbEZyYW1lczogZnJhY3Rpb25hbEZyYW1lcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4NTgpIHtcbiAgICAgICAgLy8gTmV4dCBieXRlIGlzIDB4MDQtLXNraXAgaXRcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIG51bWVyYXRvciA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gTWF0aC5wb3coMiwgZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpKTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIGNsb2Nrc1BlclRpY2sgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciB0aGlydHlTZWNvbmROb3RlcyA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuVGltZVNpZ25hdHVyZUV2ZW50KHtcbiAgICAgICAgICAgIG51bWVyYXRvcjogbnVtZXJhdG9yLFxuICAgICAgICAgICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgY2xvY2tzUGVyVGljazogY2xvY2tzUGVyVGljayxcbiAgICAgICAgICAgIHRoaXJ0eVNlY29uZE5vdGVzOiB0aGlydHlTZWNvbmROb3RlcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4NTkpIHtcbiAgICAgICAgLy8gTmV4dCBieXRlIGlzIDB4MDItLXNraXAgaXRcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIHNoYXJwcyA9IGRhdGFWaWV3LmdldEludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgaXNNYWpvciA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KSA9PT0gMDtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuS2V5U2lnbmF0dXJlRXZlbnQoe1xuICAgICAgICAgICAgc2hhcnBzOiBzaGFycHMsXG4gICAgICAgICAgICBpc01ham9yOiBpc01ham9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHg3Rikge1xuICAgICAgICB2YXIgX2ggPSB2YXJpYWJsZV9sZW5ndGhfdmFsdWVfMS5mcm9tVmFyaWFibGVMZW5ndGhWYWx1ZShkYXRhVmlldy5idWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQgKyBpbmRleCksIGJ5dGVzUmVhZCA9IF9oWzBdLCBsZW5ndGhfMSA9IF9oWzFdO1xuICAgICAgICBpbmRleCArPSBieXRlc1JlYWQ7XG4gICAgICAgIHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgaW5kZXgsIGxlbmd0aF8xKTtcbiAgICAgICAgdmFyIGlkID0gZGF0YS5zbGljZSgwLCAxKTtcbiAgICAgICAgaWYgKGlkWzBdID09PSAwKSB7XG4gICAgICAgICAgICBpZCA9IGRhdGEuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zbGljZSgzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLlNlcXVlbmNlclNwZWNpZmljRXZlbnQoe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIE1JREkgbWV0YSBldmVudCB0eXBlIDB4XCIgKyBtZXRhRXZlbnRUeXBlTnVtLnRvU3RyaW5nKDE2KSk7XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICAgIGluZGV4IC0gc3RhcnRJbmRleCxcbiAgICAgICAgZXZlbnQsXG4gICAgXTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJUGFyc2VFcnJvci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvTUlESVBhcnNlRXJyb3IudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTUlESVBhcnNlRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1JRElQYXJzZUVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1JRElQYXJzZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiSW52YWxpZCBNSURJIGZpbGU6IFwiICsgbWVzc2FnZSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE1JRElQYXJzZUVycm9yO1xufShFcnJvcikpO1xuZXhwb3J0cy5NSURJUGFyc2VFcnJvciA9IE1JRElQYXJzZUVycm9yO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL01JRElSZWFkZXIvaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9NSURJUmVhZGVyL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRXZlbnRzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01JRElFdmVudHMgKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvaW5kZXgudHNcIik7XG5leHBvcnRzLk1JRElFdmVudHMgPSB7XG4gICAgTm90ZU9mZkV2ZW50OiBNSURJRXZlbnRzXzEuTm90ZU9mZkV2ZW50LFxuICAgIE5vdGVPbkV2ZW50OiBNSURJRXZlbnRzXzEuTm90ZU9uRXZlbnQsXG4gICAgUHJvZ3JhbUNoYW5nZUV2ZW50OiBNSURJRXZlbnRzXzEuUHJvZ3JhbUNoYW5nZUV2ZW50LFxuICAgIENvbnRyb2xsZXJDaGFuZ2VFdmVudDogTUlESUV2ZW50c18xLkNvbnRyb2xsZXJDaGFuZ2VFdmVudCxcbiAgICBQb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50OiBNSURJRXZlbnRzXzEuUG9seXBob25pY0FmdGVydG91Y2hFdmVudCxcbiAgICBDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50OiBNSURJRXZlbnRzXzEuQ2hhbm5lbEFmdGVydG91Y2hFdmVudCxcbiAgICBQaXRjaEJlbmRFdmVudDogTUlESUV2ZW50c18xLlBpdGNoQmVuZEV2ZW50LFxuICAgIFN5c0V4RXZlbnQ6IE1JRElFdmVudHNfMS5TeXNFeEV2ZW50LFxuICAgIE1ldGE6IE1JRElFdmVudHNfMS5NZXRhLFxufTtcbnZhciBNSURJRmlsZVR5cGVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTUlESUZpbGVUeXBlICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRmlsZVR5cGUudHNcIik7XG5leHBvcnRzLk1JRElGaWxlVHlwZSA9IE1JRElGaWxlVHlwZV8xLk1JRElGaWxlVHlwZTtcbnZhciBNSURJUGFyc2VFcnJvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NSURJUGFyc2VFcnJvciAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESVBhcnNlRXJyb3IudHNcIik7XG5leHBvcnRzLk1JRElQYXJzZUVycm9yID0gTUlESVBhcnNlRXJyb3JfMS5NSURJUGFyc2VFcnJvcjtcbnZhciBtaWRpX3JlYWRlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9taWRpLXJlYWRlciAqLyBcIi4vc3JjL01JRElSZWFkZXIvbWlkaS1yZWFkZXIudHNcIik7XG5leHBvcnRzLk1JRElSZWFkZXIgPSBtaWRpX3JlYWRlcl8xLk1JRElSZWFkZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVJlYWRlci9taWRpLXJlYWRlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElSZWFkZXIvbWlkaS1yZWFkZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihCdWZmZXIpIHtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElGaWxlVHlwZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NSURJRmlsZVR5cGUgKi8gXCIuL3NyYy9NSURJUmVhZGVyL01JRElGaWxlVHlwZS50c1wiKTtcbnZhciBNSURJUGFyc2VFcnJvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NSURJUGFyc2VFcnJvciAqLyBcIi4vc3JjL01JRElSZWFkZXIvTUlESVBhcnNlRXJyb3IudHNcIik7XG52YXIgTUlESUV2ZW50Q3JlYXRvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NSURJRXZlbnRDcmVhdG9yICovIFwiLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRDcmVhdG9yLnRzXCIpO1xudmFyIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlICovIFwiLi9zcmMvdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlLnRzXCIpO1xudmFyIGJ1ZmZlcl90b19zdHJpbmdfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzL2J1ZmZlci10by1zdHJpbmcgKi8gXCIuL3NyYy91dGlscy9idWZmZXItdG8tc3RyaW5nLnRzXCIpO1xudmFyIE1JRElSZWFkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTUlESVJlYWRlcihidWZmZXIpIHtcbiAgICAgICAgaWYgKGJ1ZmZlciBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlck9mZnNldCA9IGJ1ZmZlci5ieXRlT2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5idWZmZXJMZW5ndGggPSBidWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyLmJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcgPSBidWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnVmZmVyIGluc3RhbmNlb2YgQnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlck9mZnNldCA9IGJ1ZmZlci5ieXRlT2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5idWZmZXJMZW5ndGggPSBidWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyLmJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5idWZmZXIsIHRoaXMuYnVmZmVyT2Zmc2V0LCB0aGlzLmJ1ZmZlckxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlck9mZnNldCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IGJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICB0aGlzLmRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuYnVmZmVyLCB0aGlzLmJ1ZmZlck9mZnNldCwgdGhpcy5idWZmZXJMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaWxlSGVhZGVyQ2h1bmsgPSB0aGlzLnJlYWRTdHJpbmcoMCwgNCk7XG4gICAgICAgIGlmIChmaWxlSGVhZGVyQ2h1bmsgIT09ICdNVGhkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1JRElQYXJzZUVycm9yXzEuTUlESVBhcnNlRXJyb3IoJ0ZpbGUgZG9lcyBub3Qgc3RhcnQgd2l0aCBhIGhlYWRlciBjaHVuaycpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMucmVhZEZpbGVIZWFkZXIoNCksIHRyYWNrU3RhcnRPZmZzZXQgPSBfYVswXSwgaGVhZGVyID0gX2FbMV07XG4gICAgICAgIHRoaXMudHJhY2tTdGFydE9mZnNldCA9IHRyYWNrU3RhcnRPZmZzZXQgKyA0O1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICB9XG4gICAgTUlESVJlYWRlci5wcm90b3R5cGUucmVhZFVpbnQzMiA9IGZ1bmN0aW9uIChzdGFydEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFWaWV3LmdldFVpbnQzMihzdGFydEluZGV4KTtcbiAgICB9O1xuICAgIE1JRElSZWFkZXIucHJvdG90eXBlLnJlYWRVaW50MTYgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhVmlldy5nZXRVaW50MTYoc3RhcnRJbmRleCk7XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gYnVmZmVyX3RvX3N0cmluZ18xLmJ1ZmZlclRvU3RyaW5nKHRoaXMuYnVmZmVyLCB0aGlzLmJ1ZmZlck9mZnNldCArIHN0YXJ0SW5kZXgsIGxlbmd0aCk7XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkVmFyaWFibGVMZW5ndGggPSBmdW5jdGlvbiAoc3RhcnRJbmRleCkge1xuICAgICAgICByZXR1cm4gdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUodGhpcy5idWZmZXIsIHRoaXMuYnVmZmVyT2Zmc2V0ICsgc3RhcnRJbmRleCk7XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkTUlESUV2ZW50ID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIHRyYWNrTnVtYmVyLCBwcmV2aW91c1N0YXR1c0J5dGUpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5yZWFkVmFyaWFibGVMZW5ndGgoc3RhcnRJbmRleCksIGJ5dGVzUmVhZCA9IF9hWzBdLCBkZWx0YVRpbWUgPSBfYVsxXTtcbiAgICAgICAgdmFyIGluZGV4ID0gc3RhcnRJbmRleCArIGJ5dGVzUmVhZDtcbiAgICAgICAgdmFyIGV2ZW50T3JOdWxsID0gTUlESUV2ZW50Q3JlYXRvcl8xLmV2ZW50RnJvbUJ5dGVzKHRoaXMuZGF0YVZpZXcsIGluZGV4LCBwcmV2aW91c1N0YXR1c0J5dGUpO1xuICAgICAgICBpZiAoZXZlbnRPck51bGwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBzdGF0dXNCeXRlXzEgPSB0aGlzLmRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBNSURJUGFyc2VFcnJvcl8xLk1JRElQYXJzZUVycm9yKFwiVW5rbm93biBNSURJIGV2ZW50IHN0YXR1cyAweFwiICsgc3RhdHVzQnl0ZV8xLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZlbnRCeXRlc1JlYWQgPSBldmVudE9yTnVsbC5ieXRlc1JlYWQsIGV2ZW50ID0gZXZlbnRPck51bGwuZXZlbnQsIHN0YXR1c0J5dGUgPSBldmVudE9yTnVsbC5zdGF0dXNCeXRlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnl0ZXNSZWFkOiBpbmRleCArIGV2ZW50Qnl0ZXNSZWFkIC0gc3RhcnRJbmRleCxcbiAgICAgICAgICAgIGV2ZW50RGF0YToge1xuICAgICAgICAgICAgICAgIHRyYWNrTnVtYmVyOiB0cmFja051bWJlcixcbiAgICAgICAgICAgICAgICBkZWx0YVRpbWU6IGRlbHRhVGltZSxcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhdHVzQnl0ZTogc3RhdHVzQnl0ZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1JRElSZWFkZXIucHJvdG90eXBlLnJlYWRGaWxlSGVhZGVyID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuZGF0YVZpZXcuZ2V0VWludDMyKHN0YXJ0SW5kZXgpO1xuICAgICAgICAvLyBBZGQgNCBieXRlcyBmb3IgdGhlIGxlbmd0aCBmaWVsZFxuICAgICAgICB2YXIgaW5kZXggPSBzdGFydEluZGV4ICsgNDtcbiAgICAgICAgdmFyIGZpbGVUeXBlTnVtYmVyID0gdGhpcy5kYXRhVmlldy5nZXRVaW50MTYoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAyO1xuICAgICAgICB2YXIgZmlsZVR5cGU7XG4gICAgICAgIGlmIChmaWxlVHlwZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgZmlsZVR5cGUgPSBNSURJRmlsZVR5cGVfMS5NSURJRmlsZVR5cGUuRm9ybWF0MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmaWxlVHlwZU51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgZmlsZVR5cGUgPSBNSURJRmlsZVR5cGVfMS5NSURJRmlsZVR5cGUuRm9ybWF0MTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmaWxlVHlwZU51bWJlciA9PT0gMikge1xuICAgICAgICAgICAgZmlsZVR5cGUgPSBNSURJRmlsZVR5cGVfMS5NSURJRmlsZVR5cGUuRm9ybWF0MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNSURJUGFyc2VFcnJvcl8xLk1JRElQYXJzZUVycm9yKFwiVW5rbm93biBNSURJIGZpbGUgdHlwZTogXCIgKyBmaWxlVHlwZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYWNrQ291bnQgPSB0aGlzLmRhdGFWaWV3LmdldFVpbnQxNihpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDI7XG4gICAgICAgIHZhciBkaXZpc2lvbk51bSA9IHRoaXMuZGF0YVZpZXcuZ2V0VWludDE2KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMjtcbiAgICAgICAgdmFyIGRpdmlzaW9uO1xuICAgICAgICAvLyBoaWdoIGJpdCBzZXQgPSBTTVBURVxuICAgICAgICBpZiAoZGl2aXNpb25OdW0gPj4gMTUgPT09IDEpIHtcbiAgICAgICAgICAgIHZhciBkZWx0YVRpbWVQZXJGcmFtZSA9IGRpdmlzaW9uTnVtICYgMHhGO1xuICAgICAgICAgICAgdmFyIG5lZ2F0aXZlRnJhbWVzUGVyU2Vjb25kID0gKGRpdmlzaW9uTnVtID4+IDgpICYgMHg3ZjtcbiAgICAgICAgICAgIGRpdmlzaW9uID0ge1xuICAgICAgICAgICAgICAgIGRlbHRhVGltZVBlckZyYW1lOiBkZWx0YVRpbWVQZXJGcmFtZSxcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZUZyYW1lc1BlclNlY29uZDogbmVnYXRpdmVGcmFtZXNQZXJTZWNvbmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGl2aXNpb24gPSB7XG4gICAgICAgICAgICAgICAgdGlja3M6IGRpdmlzaW9uTnVtICYgMHg3RkZGLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLy8gQWRkIDQgZm9yIHRoZSBsZW5ndGggaGVhZGVyXG4gICAgICAgICAgICA0ICsgbGVuZ3RoLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGVUeXBlOiBmaWxlVHlwZSxcbiAgICAgICAgICAgICAgICB0cmFja0NvdW50OiB0cmFja0NvdW50LFxuICAgICAgICAgICAgICAgIGRpdmlzaW9uOiBkaXZpc2lvbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9O1xuICAgIE1JRElSZWFkZXIucHJvdG90eXBlLnJlYWRUcmFja3MgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGluZGV4LCBpbkhlYWRlciwgaW5UcmFjaywgdHJhY2tOdW1iZXIsIGN1cnJlbnRUcmFja0VuZEluZGV4LCBwcmV2aW91c1N0YXR1c0J5dGUsIGNodW5rVHlwZSwgbGVuZ3RoXzEsIF9iLCBieXRlc1JlYWQsIGV2ZW50RGF0YSwgc3RhdHVzQnl0ZTtcbiAgICAgICAgdmFyIF9jID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5ldmVudFR5cGVzLCBldmVudFR5cGVzID0gX2MgPT09IHZvaWQgMCA/IDgzODg2MDcgLyogQWxsICovIDogX2M7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy50cmFja1N0YXJ0T2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBpbkhlYWRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpblRyYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNrRW5kSW5kZXggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpbmRleCA8IHRoaXMuYnVmZmVyTGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGN1cnJlbnRUcmFja0VuZEluZGV4ID09PSBudWxsKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIGNodW5rVHlwZSA9IHRoaXMucmVhZFN0cmluZyhpbmRleCwgNCk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaHVua1R5cGUgIT09ICdNVHJrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE1JRElQYXJzZUVycm9yXzEuTUlESVBhcnNlRXJyb3IoJ05vIHRyYWNrIGhlYWRlciBmb3VuZCBhdCBzdGFydCBvZiB0cmFjaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aF8xID0gdGhpcy5yZWFkVWludDMyKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNrRW5kSW5kZXggPSBpbmRleCArIGxlbmd0aF8xO1xuICAgICAgICAgICAgICAgICAgICB0cmFja051bWJlciA9IHRyYWNrTnVtYmVyICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfYiA9IHRoaXMucmVhZE1JRElFdmVudChpbmRleCwgdHJhY2tOdW1iZXIsIHByZXZpb3VzU3RhdHVzQnl0ZSksIGJ5dGVzUmVhZCA9IF9iLmJ5dGVzUmVhZCwgZXZlbnREYXRhID0gX2IuZXZlbnREYXRhLCBzdGF0dXNCeXRlID0gX2Iuc3RhdHVzQnl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1N0YXR1c0J5dGUgPSBzdGF0dXNCeXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRUcmFja0VuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2tFbmRJbmRleCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZXZlbnREYXRhLmV2ZW50ICYmIChldmVudERhdGEuZXZlbnQudHlwZSAmIGV2ZW50VHlwZXMpKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGV2ZW50RGF0YV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNSURJUmVhZGVyO1xufSgpKTtcbmV4cG9ydHMuTUlESVJlYWRlciA9IE1JRElSZWFkZXI7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIikuQnVmZmVyKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVdyaXRlci9NSURJRmlsZS50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElXcml0ZXIvTUlESUZpbGUudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWJ1Z18xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIGRlYnVnICovIFwiLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanNcIikpO1xudmFyIHV0aWxzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscyAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xudmFyIGRlYnVnID0gZGVidWdfMS5kZWZhdWx0KFwibWlkaS10b29sczpNSURJRmlsZVwiKTtcbnZhciBzdHJpbmdUb0NoYXJDb2RlQXJyYXkgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHN0ci5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24gKGNocikgeyByZXR1cm4gY2hyLmNoYXJDb2RlQXQoMCk7IH0pKTtcbn07XG52YXIgbXRoZFN0cmluZyA9IHN0cmluZ1RvQ2hhckNvZGVBcnJheShcIk1UaGRcIik7XG52YXIgbXRya1N0cmluZyA9IHN0cmluZ1RvQ2hhckNvZGVBcnJheShcIk1UcmtcIik7XG52YXIgRU5EX09GX1RSQUNLX0VWRU5UID0gbmV3IFVpbnQ4QXJyYXkoWzB4RkYsIDB4MkYsIDB4MDBdKTtcbnZhciBudW1iZXJUb0J5dGVzID0gZnVuY3Rpb24gKG51bSwgbWluQnl0ZXMpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBkbyB7XG4gICAgICAgIGJ5dGVzLnVuc2hpZnQobnVtICYgMHhGRik7XG4gICAgICAgIG51bSA9IG51bSA+PiA4O1xuICAgIH0gd2hpbGUgKG51bSA+IDAgfHwgYnl0ZXMubGVuZ3RoIDwgbWluQnl0ZXMpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlcyk7XG59O1xudmFyIGdldE5vdGVPbkV2ZW50ID0gZnVuY3Rpb24gKG5vdGUsIGNoYW5uZWwsIHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMTQ0IC8qIE5vdGVPbiAqLyArIChjaGFubmVsIC0gMSksXG4gICAgICAgIC8vIFVuc2V0IHRvcCBiaXQ7IHZhbHVlIGNhbiBvbmx5IGJlIDcgYml0cyBsb25nXG4gICAgICAgIG5vdGUgJiAweDdGLFxuICAgICAgICB2ZWxvY2l0eSAmIDB4N0YsXG4gICAgXSk7XG59O1xudmFyIGdldE5vdGVPZmZFdmVudCA9IGZ1bmN0aW9uIChub3RlLCBjaGFubmVsLCB2ZWxvY2l0eSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDEyOCAvKiBOb3RlT2ZmICovICsgKGNoYW5uZWwgLSAxKSxcbiAgICAgICAgLy8gVW5zZXQgdG9wIGJpdDsgdmFsdWUgY2FuIG9ubHkgYmUgNyBiaXRzIGxvbmdcbiAgICAgICAgbm90ZSAmIDB4N0YsXG4gICAgICAgIHZlbG9jaXR5ICYgMHg3RixcbiAgICBdKTtcbn07XG52YXIgZ2V0UHJvZ3JhbUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBwcm9ncmFtID0gX2EucHJvZ3JhbTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAxOTIgLyogUHJvZ3JhbUNoYW5nZSAqLyArIChjaGFubmVsIC0gMSksXG4gICAgICAgIHByb2dyYW1cbiAgICBdKTtcbn07XG52YXIgZ2V0RmlsZUhlYWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBkaXZpc2lvbnMgPSBfYS5kaXZpc2lvbnMsIHRyYWNrQ291bnQgPSBfYS50cmFja0NvdW50O1xuICAgIHZhciBmb3JtYXQgPSB0cmFja0NvdW50ID09PSAxID9cbiAgICAgICAgMCA6XG4gICAgICAgIDE7XG4gICAgLy8gIyBvZiBkaXZpc2lvbnMgcGVyIHF1YXJ0ZXIgbm90ZSAoMTUgYml0cyBvbmx5KVxuICAgIHZhciBkaXZpc2lvbnNCeXRlcyA9IG51bWJlclRvQnl0ZXMoZGl2aXNpb25zICYgMHg3RkZGLCAyKTtcbiAgICB2YXIgdHJhY2tDb3VudEJ5dGVzID0gbnVtYmVyVG9CeXRlcyh0cmFja0NvdW50LCAyKTtcbiAgICB2YXIgdG90YWxMZW5ndGggPSBtdGhkU3RyaW5nLmJ5dGVMZW5ndGggK1xuICAgICAgICAvLyA0IGJ5dGVzIGZvciBsZW5ndGggZmllbGQgIFxuICAgICAgICA0ICtcbiAgICAgICAgLy8gMiBieXRlcyBmb3IgZm9ybWF0IGZpZWxkXG4gICAgICAgIDIgK1xuICAgICAgICB0cmFja0NvdW50Qnl0ZXMuYnl0ZUxlbmd0aCArXG4gICAgICAgIGRpdmlzaW9uc0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgdmFyIGhlYWRlciA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGhlYWRlci5zZXQobXRoZFN0cmluZywgaW5kZXgpO1xuICAgIGluZGV4ICs9IG10aGRTdHJpbmcuYnl0ZUxlbmd0aDtcbiAgICAvLyBMZW5ndGggZmllbGQsIE1TQiBmaXJzdFxuICAgIGhlYWRlci5zZXQoVWludDhBcnJheS5vZigwLCAwLCAwLCA2KSwgaW5kZXgpO1xuICAgIGluZGV4ICs9IDQ7XG4gICAgaGVhZGVyLnNldChVaW50OEFycmF5Lm9mKDAsIGZvcm1hdCksIGluZGV4KTtcbiAgICBpbmRleCArPSAyO1xuICAgIGhlYWRlci5zZXQodHJhY2tDb3VudEJ5dGVzLCBpbmRleCk7XG4gICAgaW5kZXggKz0gdHJhY2tDb3VudEJ5dGVzLmJ5dGVMZW5ndGg7XG4gICAgaGVhZGVyLnNldChkaXZpc2lvbnNCeXRlcywgaW5kZXgpO1xuICAgIGluZGV4ICs9IGRpdmlzaW9uc0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG52YXIgZ2V0VHJhY2tIZWFkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbGVuZ3RoID0gX2EubGVuZ3RoO1xuICAgIC8vIDQgZm9yIHRoZSBNVHJrIGhlYWRlciwgNCBmb3IgdGhlIGxlbmd0aCBidWZmZXJcbiAgICB2YXIgYnVmZiA9IG5ldyBBcnJheUJ1ZmZlcig4KTtcbiAgICBuZXcgVWludDhBcnJheShidWZmKS5zZXQobXRya1N0cmluZywgMCk7XG4gICAgbmV3IERhdGFWaWV3KGJ1ZmYpLnNldFVpbnQzMig0LCBsZW5ndGgpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWZmKTtcbn07XG52YXIgTUlESUZpbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTUlESUZpbGUoX2EpIHtcbiAgICAgICAgdmFyIGRpdmlzaW9ucyA9IF9hLmRpdmlzaW9ucztcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMudHJhY2tzID0ge307XG4gICAgICAgIHRoaXMub21uaVRyYWNrRXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuZGl2aXNpb25zID0gZGl2aXNpb25zO1xuICAgIH1cbiAgICBNSURJRmlsZS5wcm90b3R5cGUucHJvZ3JhbUNoYW5nZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gX2Eub2Zmc2V0LCBwcm9ncmFtID0gX2EucHJvZ3JhbSwgdHJhY2sgPSBfYS50cmFjaywgX2IgPSBfYS5jaGFubmVsLCBjaGFubmVsID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcbiAgICAgICAgdmFyIHByb2dyYW1DaGFuZ2VFdmVudCA9IGdldFByb2dyYW1DaGFuZ2VFdmVudCh7IGNoYW5uZWw6IGNoYW5uZWwsIHByb2dyYW06IHByb2dyYW0gfSk7XG4gICAgICAgIHZhciBidWZmZXJJbmZvID0ge1xuICAgICAgICAgICAgZXZlbnQ6IHByb2dyYW1DaGFuZ2VFdmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMTkyIC8qIFByb2dyYW1DaGFuZ2UgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogb2Zmc2V0LFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMucHVzaChidWZmZXJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghKHRyYWNrIGluIHRoaXMudHJhY2tzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyczogW10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goYnVmZmVySW5mbyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS50aW1lU2lnbmF0dXJlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSBfYS5udW1lcmF0b3IsIGRlbm9taW5hdG9yID0gX2EuZGVub21pbmF0b3I7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgODggLyogVGltZVNpZ25hdHVyZSAqLyxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICBudW1lcmF0b3IsXG4gICAgICAgICAgICBNYXRoLmxvZzIoZGVub21pbmF0b3IpLFxuICAgICAgICAgICAgLy8gQHRvZG86IGZpZ3VyZSBvdXQgaG93IHRvIGFjdHVhbGx5IGRlYWwgd2l0aCB0aGVzZSBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAvLyByb2J1c3RseS0tSSBkb24ndCByZWFsbHkgdW5kZXJzdGFuZCB0aGVtIGVudGlyZWx5XG4gICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWV0cm9ub21lIHRpY2tzIHBlciBxdWFydGVyIG5vdGVcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgLy8gTnVtYmVyIG9mIDEvMzJuZCBub3RlcyBwZXIgTUlESSBxdWFydGVyIG5vdGVcbiAgICAgICAgICAgIDgsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLm9tbmlUcmFja0V2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogMCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUua2V5U2lnbmF0dXJlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBrZXlTaWduYXR1cmUgPSBfYS5rZXlTaWduYXR1cmUsIF9iID0gX2Eub2Zmc2V0LCBvZmZzZXQgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAgICAgICAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIDg5IC8qIEtleVNpZ25hdHVyZSAqLyxcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBrZXlTaWduYXR1cmUuc2hhcnBzLFxuICAgICAgICAgICAgLy8gbWFqb3IgKDApIHZzLiBtaW5vciAoMSlcbiAgICAgICAgICAgIC8vIEB0b2RvOiBBY3R1YWxseSBmaW5kIG1ham9yL21pbm9yIGtleSBmcm9tIFhNTFxuICAgICAgICAgICAga2V5U2lnbmF0dXJlLm1vZGUgPT09IFwibWlub3JcIiA/IDEgOiAwLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBldmVudFR5cGU6IDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgZGl2aXNpb25PZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgLy8gYWRkIDEgZm9yIG51bGwgdGVybWluYXRvciBieXRlXG4gICAgICAgIHZhciBsZW5ndGggPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZSh0aXRsZS5sZW5ndGggKyAxKTtcbiAgICAgICAgdmFyIGNoYXJzID0gc3RyaW5nVG9DaGFyQ29kZUFycmF5KHRpdGxlICsgXCJcXDBcIik7XG4gICAgICAgIHZhciB0b3RhbExlbmd0aCA9IDIgKyAvLyAxIGJ5dGUgZWFjaCBmb3Igc3RhdHVzIGFuZCBzdWJ0eXBlXG4gICAgICAgICAgICBsZW5ndGguYnl0ZUxlbmd0aCArXG4gICAgICAgICAgICBjaGFycy5ieXRlTGVuZ3RoO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGV2ZW50LnNldChVaW50OEFycmF5Lm9mKDI1NSAvKiBNZXRhICovLCAzIC8qIFRyYWNrTmFtZSAqLyksIGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMjtcbiAgICAgICAgZXZlbnQuc2V0KGxlbmd0aCwgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSBsZW5ndGguYnl0ZUxlbmd0aDtcbiAgICAgICAgZXZlbnQuc2V0KGNoYXJzLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IGNoYXJzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogMCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUubm90ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm90ZSA9IF9hLm5vdGUsIGR1cmF0aW9uID0gX2EuZHVyYXRpb24sIG9mZnNldCA9IF9hLm9mZnNldCwgdHJhY2sgPSBfYS50cmFjaywgX2IgPSBfYS5jaGFubmVsLCBjaGFubmVsID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYiwgX2MgPSBfYS52ZWxvY2l0eSwgdmVsb2NpdHkgPSBfYyA9PT0gdm9pZCAwID8gNjQgOiBfYywgX2QgPSBfYS5yZWxlYXNlLCByZWxlYXNlID0gX2QgPT09IHZvaWQgMCA/IHZlbG9jaXR5IDogX2QsIF9lID0gX2EubWV0YSwgbWV0YSA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lO1xuICAgICAgICB2YXIgbm90ZU9uRXZlbnQgPSBnZXROb3RlT25FdmVudChub3RlLCBjaGFubmVsLCB2ZWxvY2l0eSk7XG4gICAgICAgIHZhciBub3RlTmFtZSA9IHV0aWxzXzEuTm90ZU51bWJlclRvTmFtZShub3RlKTtcbiAgICAgICAgbm90ZU5hbWUgPSBcIlwiICsgbm90ZU5hbWUuc3RlcCArIChub3RlTmFtZS5hbHRlciA9PT0gMSA/XG4gICAgICAgICAgICAnIycgOlxuICAgICAgICAgICAgbm90ZU5hbWUuYWx0ZXIgPT09IC0xID9cbiAgICAgICAgICAgICAgICAnYicgOlxuICAgICAgICAgICAgICAgICcnKSArIG5vdGVOYW1lLm9jdGF2ZTtcbiAgICAgICAgaWYgKCEodHJhY2sgaW4gdGhpcy50cmFja3MpKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0cmFja10gPSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IG5vdGVPbkV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAxNDQgLyogTm90ZU9uICovLFxuICAgICAgICAgICAgZGl2aXNpb25PZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgIG1ldGE6IF9fYXNzaWduKHsgbmFtZTogbm90ZU5hbWUgfSwgbWV0YSksXG4gICAgICAgIH0pO1xuICAgICAgICBkZWJ1Zygnbm90ZSBvbjogJywge1xuICAgICAgICAgICAgbm90ZTogbm90ZSxcbiAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eSxcbiAgICAgICAgICAgIGV2ZW50OiBub3RlT25FdmVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBub3RlT2ZmRXZlbnQgPSBnZXROb3RlT2ZmRXZlbnQobm90ZSwgY2hhbm5lbCwgcmVsZWFzZSk7XG4gICAgICAgIHZhciBub3RlT2ZmT2Zmc2V0ID0gb2Zmc2V0ICsgZHVyYXRpb247XG4gICAgICAgIGRlYnVnKCdub3RlIG9mZjogJywge1xuICAgICAgICAgICAgbm90ZTogbm90ZSxcbiAgICAgICAgICAgIG9mZnNldDogbm90ZU9mZk9mZnNldCxcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICByZWxlYXNlOiByZWxlYXNlLFxuICAgICAgICAgICAgbWV0YTogX19hc3NpZ24oeyBuYW1lOiBub3RlTmFtZSB9LCBtZXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IG5vdGVPZmZFdmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMTI4IC8qIE5vdGVPZmYgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogbm90ZU9mZk9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUuc2V0VGVtcG8gPSBmdW5jdGlvbiAodGVtcG8pIHtcbiAgICAgICAgdmFyIG1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlID0gNmU3IC8gdGVtcG87XG4gICAgICAgIHZhciB0ZW1wb0J5dGVzID0gbnVtYmVyVG9CeXRlcyhtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZSwgMyk7XG4gICAgICAgIC8vIDEgYnl0ZSBlYWNoIGZvciBzdGF0dXMgdHlwZSBhbmQgbWV0YSB0eXBlLCBhbmQgMSBmb3IgY29uc3RhbnQgdmFsdWUgMHgwMyBhZnRlciBtZXRhIHR5cGVcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gMyArXG4gICAgICAgICAgICB0ZW1wb0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZXZlbnQuc2V0KFVpbnQ4QXJyYXkub2YoMjU1IC8qIE1ldGEgKi8sIDgxIC8qIFNldFRlbXBvICovLCAzKSwgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAzO1xuICAgICAgICBldmVudC5zZXQodGVtcG9CeXRlcywgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSB0ZW1wb0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHRoaXMub21uaVRyYWNrRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5zb3J0QnVmZmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudHJhY2tzKS5yZWR1Y2UoZnVuY3Rpb24gKHJlZHVjdGlvbiwgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIHNoYWxsb3cgY2xvbmUgdG8gYXZvaWQgYWRkaW5nIG9tbmlUcmFja0V2ZW50cyB0byB0aGUgYWN0dWFsIHRyYWNrc1xuICAgICAgICAgICAgdmFyIHRyYWNrQnVmZmVycyA9IF90aGlzLnRyYWNrc1t0cmFja051bWJlcl0uYnVmZmVycy5zbGljZSgpO1xuICAgICAgICAgICAgdHJhY2tCdWZmZXJzLnVuc2hpZnQuYXBwbHkodHJhY2tCdWZmZXJzLCBfdGhpcy5vbW5pVHJhY2tFdmVudHMpO1xuICAgICAgICAgICAgcmVkdWN0aW9uW3RyYWNrTnVtYmVyXSA9IHRyYWNrQnVmZmVycy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldERpZmYgPSBhLmRpdmlzaW9uT2Zmc2V0IC0gYi5kaXZpc2lvbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0RGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5ldmVudFR5cGUgPT09IGIuZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYS5ldmVudFR5cGUgPT09IDE5MiAvKiBQcm9ncmFtQ2hhbmdlICovIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmV2ZW50VHlwZSA9PT0gMjU1IC8qIE1ldGEgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiLmV2ZW50VHlwZSA9PT0gMTkyIC8qIFByb2dyYW1DaGFuZ2UgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLmV2ZW50VHlwZSA9PT0gMjU1IC8qIE1ldGEgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldERpZmY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWR1Y3Rpb247XG4gICAgICAgIH0sIHt9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnVmZmVycyA9IHRoaXMuc29ydEJ1ZmZlcnMoKTtcbiAgICAgICAgdmFyIHRyYWNrQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLnRyYWNrcykubGVuZ3RoO1xuICAgICAgICB2YXIgdHJhY2tMZW5ndGhzID0gT2JqZWN0LmtleXMoYnVmZmVycykucmVkdWNlKGZ1bmN0aW9uICh0b3RhbHMsIHRyYWNrTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcHJldkR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRvdGFsc1t0cmFja051bWJlcl0gPSBidWZmZXJzW3RyYWNrTnVtYmVyXS5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsLCBtaWRpRXZlbnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIG1pZGlFdmVudEluZm8uZXZlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBkZWx0YVRpbWUgPSBtaWRpRXZlbnRJbmZvLmRpdmlzaW9uT2Zmc2V0IC0gcHJldkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBkZWx0YVRpbWVCdWZmZXIgPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IGRlbHRhVGltZUJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbWlkaUV2ZW50SW5mby5kZWx0YVRpbWVCdWZmZXIgPSBkZWx0YVRpbWVCdWZmZXI7XG4gICAgICAgICAgICAgICAgcHJldkR1cmF0aW9uID0gbWlkaUV2ZW50SW5mby5kaXZpc2lvbk9mZnNldDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHRvdGFsc1t0cmFja051bWJlcl0gKz0gMSArIC8vIFRoZSBkZWx0YSB0aW1lIG9mZnNldCBmb3IgZW5kIG9mIHRyYWNrIGlzIDAsIHdoaWNoIHRha2VzIDEgYnl0ZSBpbiBWTFZcbiAgICAgICAgICAgICAgICBFTkRfT0ZfVFJBQ0tfRVZFTlQubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFscztcbiAgICAgICAgfSwge30pO1xuICAgICAgICB2YXIgaGVhZGVyQ2h1bmsgPSBnZXRGaWxlSGVhZGVyKHtcbiAgICAgICAgICAgIGRpdmlzaW9uczogdGhpcy5kaXZpc2lvbnMsXG4gICAgICAgICAgICB0cmFja0NvdW50OiB0cmFja0NvdW50LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRyYWNrSGVhZGVycyA9IE9iamVjdC5rZXlzKGJ1ZmZlcnMpLnJlZHVjZShmdW5jdGlvbiAoaGVhZGVycywgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbdHJhY2tOdW1iZXJdID0gZ2V0VHJhY2tIZWFkZXIoe1xuICAgICAgICAgICAgICAgIGxlbmd0aDogdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gaGVhZGVyQ2h1bmsubGVuZ3RoO1xuICAgICAgICB0b3RhbExlbmd0aCArPSBPYmplY3Qua2V5cyh0cmFja0hlYWRlcnMpLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIHRyYWNrTnVtYmVyKSB7IHJldHVybiB0b3RhbCArIHRyYWNrSGVhZGVyc1t0cmFja051bWJlcl0ubGVuZ3RoOyB9LCAwKTtcbiAgICAgICAgdG90YWxMZW5ndGggKz0gT2JqZWN0LmtleXMoYnVmZmVycykucmVkdWNlKGZ1bmN0aW9uICh0b3RhbCwgdHJhY2tOdW1iZXIpIHsgcmV0dXJuIHRvdGFsICsgdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXTsgfSwgMCk7XG4gICAgICAgIHZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmYpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgYXJyLnNldChoZWFkZXJDaHVuaywgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGhlYWRlckNodW5rLmxlbmd0aDtcbiAgICAgICAgT2JqZWN0LmtleXMoYnVmZmVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGFyci5zZXQodHJhY2tIZWFkZXJzW3RyYWNrTnVtYmVyXSwgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSB0cmFja0hlYWRlcnNbdHJhY2tOdW1iZXJdLmxlbmd0aDtcbiAgICAgICAgICAgIGJ1ZmZlcnNbdHJhY2tOdW1iZXJdLmZvckVhY2goZnVuY3Rpb24gKG1pZGlFdmVudEluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFUaW1lQnVmZmVyID0gbWlkaUV2ZW50SW5mby5kZWx0YVRpbWVCdWZmZXI7XG4gICAgICAgICAgICAgICAgYXJyLnNldChkZWx0YVRpbWVCdWZmZXIsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRlbHRhVGltZUJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYXJyLnNldChtaWRpRXZlbnRJbmZvLmV2ZW50LCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaWRpRXZlbnRJbmZvLmV2ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gRGVsdGEgdGltZSBmb3IgZW5kIG9mIHRyYWNrIGV2ZW50IGlzIDAsIHNvIHRoZSBidWZmZXIgZm9yIGl0IGlzIGFsd2F5c1xuICAgICAgICAgICAgLy8gdGhlIHNhbWVcbiAgICAgICAgICAgIGFyci5zZXQoVWludDhBcnJheS5mcm9tKFswXSksIG9mZnNldCk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIGFyci5zZXQoRU5EX09GX1RSQUNLX0VWRU5ULCBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IEVORF9PRl9UUkFDS19FVkVOVC5sZW5ndGg7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnVmZjtcbiAgICB9O1xuICAgIHJldHVybiBNSURJRmlsZTtcbn0oKSk7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESUZpbGU7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvTUlESVdyaXRlci9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL01JRElXcml0ZXIvaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElGaWxlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01JRElGaWxlICovIFwiLi9zcmMvTUlESVdyaXRlci9NSURJRmlsZS50c1wiKTtcbmV4cG9ydHMuTUlESUZpbGUgPSBNSURJRmlsZV8xLk1JRElGaWxlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTUlESVdyaXRlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NSURJV3JpdGVyICovIFwiLi9zcmMvTUlESVdyaXRlci9pbmRleC50c1wiKTtcbmV4cG9ydHMuTUlESUZpbGUgPSBNSURJV3JpdGVyXzEuTUlESUZpbGU7XG52YXIgTUlESVJlYWRlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NSURJUmVhZGVyICovIFwiLi9zcmMvTUlESVJlYWRlci9pbmRleC50c1wiKTtcbmV4cG9ydHMuTUlESUV2ZW50cyA9IE1JRElSZWFkZXJfMS5NSURJRXZlbnRzO1xuZXhwb3J0cy5NSURJRmlsZVR5cGUgPSBNSURJUmVhZGVyXzEuTUlESUZpbGVUeXBlO1xuZXhwb3J0cy5NSURJUGFyc2VFcnJvciA9IE1JRElSZWFkZXJfMS5NSURJUGFyc2VFcnJvcjtcbmV4cG9ydHMuTUlESVJlYWRlciA9IE1JRElSZWFkZXJfMS5NSURJUmVhZGVyO1xudmFyIHV0aWxzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9zcmMvdXRpbHMvaW5kZXgudHNcIik7XG5leHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gdXRpbHNfMS5idWZmZXJUb1N0cmluZztcbmV4cG9ydHMuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB1dGlsc18xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlO1xuZXhwb3J0cy50b1ZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZTtcbmV4cG9ydHMuTm90ZU5hbWVUb051bWJlciA9IHV0aWxzXzEuTm90ZU5hbWVUb051bWJlcjtcbmV4cG9ydHMuTm90ZU51bWJlclRvTmFtZSA9IHV0aWxzXzEuTm90ZU51bWJlclRvTmFtZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy91dGlscy9idWZmZXItdG8tc3RyaW5nLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdXRpbHMvYnVmZmVyLXRvLXN0cmluZy50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gZnVuY3Rpb24gKGJ1ZmZlciwgc3RhcnRJbmRleCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHN0YXJ0SW5kZXgsIGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChpKSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3V0aWxzL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYnVmZmVyX3RvX3N0cmluZ18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9idWZmZXItdG8tc3RyaW5nICovIFwiLi9zcmMvdXRpbHMvYnVmZmVyLXRvLXN0cmluZy50c1wiKTtcbmV4cG9ydHMuYnVmZmVyVG9TdHJpbmcgPSBidWZmZXJfdG9fc3RyaW5nXzEuYnVmZmVyVG9TdHJpbmc7XG52YXIgdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ZhcmlhYmxlLWxlbmd0aC12YWx1ZSAqLyBcIi4vc3JjL3V0aWxzL3ZhcmlhYmxlLWxlbmd0aC12YWx1ZS50c1wiKTtcbmV4cG9ydHMuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB2YXJpYWJsZV9sZW5ndGhfdmFsdWVfMS5mcm9tVmFyaWFibGVMZW5ndGhWYWx1ZTtcbmV4cG9ydHMudG9WYXJpYWJsZUxlbmd0aFZhbHVlID0gdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEudG9WYXJpYWJsZUxlbmd0aFZhbHVlO1xudmFyIG1pZGlfbm90ZV9jb252ZXJ0ZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWlkaS1ub3RlLWNvbnZlcnRlciAqLyBcIi4vc3JjL3V0aWxzL21pZGktbm90ZS1jb252ZXJ0ZXIudHNcIik7XG5leHBvcnRzLk5vdGVOYW1lVG9OdW1iZXIgPSBtaWRpX25vdGVfY29udmVydGVyXzEuTm90ZU5hbWVUb051bWJlcjtcbmV4cG9ydHMuTm90ZU51bWJlclRvTmFtZSA9IG1pZGlfbm90ZV9jb252ZXJ0ZXJfMS5Ob3RlTnVtYmVyVG9OYW1lO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3V0aWxzL21pZGktbm90ZS1jb252ZXJ0ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy91dGlscy9taWRpLW5vdGUtY29udmVydGVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIE5vdGVOdW1iZXJUb05hbWUobm90ZSkge1xuICAgIHZhciBzdGVwO1xuICAgIHZhciBhbHRlcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xuICAgIHZhciBvY3RhdmUgPSBNYXRoLmZsb29yKG5vdGUgLyAxMikgLSAxO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICAgIHN3aXRjaCAobm90ZSAlIDEyKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgc3RlcCA9IFwiQ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc3RlcCA9IFwiRFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBzdGVwID0gXCJBXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWZhbGx0aHJvdWdoICovXG4gICAgdmFyIG5vdGVPYmogPSB7XG4gICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgIG9jdGF2ZTogb2N0YXZlLFxuICAgICAgICBNSURJTnVtYmVyOiBub3RlLFxuICAgIH07XG4gICAgaWYgKGFsdGVyKSB7XG4gICAgICAgIG5vdGVPYmouYWx0ZXIgPSBhbHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIG5vdGVPYmo7XG59XG5leHBvcnRzLk5vdGVOdW1iZXJUb05hbWUgPSBOb3RlTnVtYmVyVG9OYW1lO1xudmFyIHN0ZXBUb051bWJlciA9IHtcbiAgICBDOiAwLFxuICAgIEQ6IDIsXG4gICAgRTogNCxcbiAgICBGOiA1LFxuICAgIEc6IDcsXG4gICAgQTogOSxcbiAgICBCOiAxMSxcbn07XG52YXIgc3RlcHMgPSBcIkFCQ0RFRkdcIjtcbmZ1bmN0aW9uIE5vdGVOYW1lVG9OdW1iZXIobm90ZU5hbWUpIHtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgb2N0YXZlO1xuICAgIHZhciBhbHRlcjtcbiAgICBpZiAodHlwZW9mIG5vdGVOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gL14oW0EtR10pKFsjYl0pPygtP1xcZCspJC8uZXhlYyhub3RlTmFtZSk7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFsdGVyU3RyaW5nID0gbWF0Y2hlc1syXTtcbiAgICAgICAgc3RlcCA9IG1hdGNoZXNbMV07XG4gICAgICAgIG9jdGF2ZSA9IE51bWJlcihtYXRjaGVzWzNdKTtcbiAgICAgICAgaWYgKGFsdGVyU3RyaW5nID09PSBcImJcIikge1xuICAgICAgICAgICAgYWx0ZXIgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbHRlclN0cmluZyA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RlcCA9IG5vdGVOYW1lLnN0ZXA7XG4gICAgICAgIGFsdGVyID0gbm90ZU5hbWUuYWx0ZXI7XG4gICAgICAgIG9jdGF2ZSA9IG5vdGVOYW1lLm9jdGF2ZTtcbiAgICB9XG4gICAgaWYgKGFsdGVyID09PSAtMSkge1xuICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIHZhciBpbml0aWFsU3RlcEluZGV4ID0gc3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgICAgICAgc3RlcCA9IHN0ZXBzWyhzdGVwcy5pbmRleE9mKHN0ZXApICsgc3RlcHMubGVuZ3RoIC0gMSkgJSBzdGVwcy5sZW5ndGhdO1xuICAgICAgICAvLyBlLmcuIGdvaW5nIGZyb20gQWI0IC0+IEcjM1xuICAgICAgICBpZiAoc3RlcHMuaW5kZXhPZihzdGVwKSA+IGluaXRpYWxTdGVwSW5kZXgpIHtcbiAgICAgICAgICAgIG9jdGF2ZSAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBudW1iZXIgPSBzdGVwVG9OdW1iZXJbc3RlcF07XG4gICAgaWYgKGFsdGVyID09PSAxKSB7XG4gICAgICAgIG51bWJlciArPSAxO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xuICAgIHJldHVybiBudW1iZXIgKyAoKG9jdGF2ZSArIDEpICogMTIpO1xufVxuZXhwb3J0cy5Ob3RlTmFtZVRvTnVtYmVyID0gTm90ZU5hbWVUb051bWJlcjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy91dGlscy92YXJpYWJsZS1sZW5ndGgtdmFsdWUudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3V0aWxzL3ZhcmlhYmxlLWxlbmd0aC12YWx1ZS50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRvVmFyaWFibGVMZW5ndGhWYWx1ZShudW0pIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBkbyB7XG4gICAgICAgIHZhciBieXRlID0gbnVtICYgMHg3RjtcbiAgICAgICAgbnVtID0gbnVtID4+IDc7XG4gICAgICAgIGlmIChieXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBieXRlID0gYnl0ZSArIDB4ODA7XG4gICAgICAgIH1cbiAgICAgICAgYnl0ZXMudW5zaGlmdChieXRlKTtcbiAgICB9IHdoaWxlIChudW0gPiAwKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMpO1xufVxuZXhwb3J0cy50b1ZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB0b1ZhcmlhYmxlTGVuZ3RoVmFsdWU7XG47XG5mdW5jdGlvbiBmcm9tVmFyaWFibGVMZW5ndGhWYWx1ZShidWZmZXIsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIHVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgc3RhcnRJbmRleCk7XG4gICAgdmFyIHZhbHVlID0gMDtcbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgYnl0ZXNSZWFkID0gMDtcbiAgICBkbyB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlIDw8IDcpICsgKHVBcnJheVtpbmRleF0gJiAweDdGKTtcbiAgICAgICAgYnl0ZXNSZWFkICs9IDE7XG4gICAgfSB3aGlsZSAodUFycmF5W2luZGV4XSAmIDB4ODApO1xuICAgIHJldHVybiBbYnl0ZXNSZWFkLCB2YWx1ZV07XG59XG5leHBvcnRzLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlID0gZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWU7XG47XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OU5TVVJKVkc5dmJITXZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMMDFKUkVsVWIyOXNjeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0lzSW5kbFluQmhZMnM2THk5TlNVUkpWRzl2YkhNdkxpOXViMlJsWDIxdlpIVnNaWE12WW1GelpUWTBMV3B6TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwMUpSRWxVYjI5c2N5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aWRXWm1aWEl2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dlRVbEVTVlJ2YjJ4ekx5NHZibTlrWlY5dGIyUjFiR1Z6TDJSbFluVm5MM055WXk5aWNtOTNjMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMMDFKUkVsVWIyOXNjeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWtaV0oxWnk5emNtTXZZMjl0Ylc5dUxtcHpJaXdpZDJWaWNHRmphem92TDAxSlJFbFViMjlzY3k4dUwyNXZaR1ZmYlc5a2RXeGxjeTlwWldWbE56VTBMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDAxSlJFbFViMjlzY3k4dUwyNXZaR1ZmYlc5a2RXeGxjeTlwYzJGeWNtRjVMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDAxSlJFbFViMjlzY3k4dUwyNXZaR1ZmYlc5a2RXeGxjeTl0Y3k5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OU5TVVJKVkc5dmJITXZMaTl1YjJSbFgyMXZaSFZzWlhNdmNISnZZMlZ6Y3k5aWNtOTNjMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMMDFKUkVsVWIyOXNjeThvZDJWaWNHRmpheWt2WW5WcGJHUnBiaTluYkc5aVlXd3Vhbk1pTENKM1pXSndZV05yT2k4dlRVbEVTVlJ2YjJ4ekx5NHZjM0pqTDAxSlJFbFNaV0ZrWlhJdlRVbEVTVVYyWlc1MFEzSmxZWFJ2Y2k1MGN5SXNJbmRsWW5CaFkyczZMeTlOU1VSSlZHOXZiSE12TGk5emNtTXZUVWxFU1ZKbFlXUmxjaTlOU1VSSlJYWmxiblJ6TDBOb1lXNXVaV3hCWm5SbGNuUnZkV05vTG5Seklpd2lkMlZpY0dGamF6b3ZMMDFKUkVsVWIyOXNjeTh1TDNOeVl5OU5TVVJKVW1WaFpHVnlMMDFKUkVsRmRtVnVkSE12UTI5dWRISnZiR3hsY2tOb1lXNW5aUzUwY3lJc0luZGxZbkJoWTJzNkx5OU5TVVJKVkc5dmJITXZMaTl6Y21NdlRVbEVTVkpsWVdSbGNpOU5TVVJKUlhabGJuUnpMMDFsZEdFdlEyaGhibTVsYkZCeVpXWnBlQzUwY3lJc0luZGxZbkJoWTJzNkx5OU5TVVJKVkc5dmJITXZMaTl6Y21NdlRVbEVTVkpsWVdSbGNpOU5TVVJKUlhabGJuUnpMMDFsZEdFdlEyOXdlWEpwWjJoMExuUnpJaXdpZDJWaWNHRmphem92TDAxSlJFbFViMjlzY3k4dUwzTnlZeTlOU1VSSlVtVmhaR1Z5TDAxSlJFbEZkbVZ1ZEhNdlRXVjBZUzlEZFdWUWIybHVkQzUwY3lJc0luZGxZbkJoWTJzNkx5OU5TVVJKVkc5dmJITXZMaTl6Y21NdlRVbEVTVkpsWVdSbGNpOU5TVVJKUlhabGJuUnpMMDFsZEdFdlNXNXpkSEoxYldWdWRFNWhiV1V1ZEhNaUxDSjNaV0p3WVdOck9pOHZUVWxFU1ZSdmIyeHpMeTR2YzNKakwwMUpSRWxTWldGa1pYSXZUVWxFU1VWMlpXNTBjeTlOWlhSaEwwdGxlVk5wWjI1aGRIVnlaUzUwY3lJc0luZGxZbkJoWTJzNkx5OU5TVVJKVkc5dmJITXZMaTl6Y21NdlRVbEVTVkpsWVdSbGNpOU5TVVJKUlhabGJuUnpMMDFsZEdFdlRIbHlhV011ZEhNaUxDSjNaV0p3WVdOck9pOHZUVWxFU1ZSdmIyeHpMeTR2YzNKakwwMUpSRWxTWldGa1pYSXZUVWxFU1VWMlpXNTBjeTlOWlhSaEwwMWhjbXRsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlOU1VSSlZHOXZiSE12TGk5emNtTXZUVWxFU1ZKbFlXUmxjaTlOU1VSSlJYWmxiblJ6TDAxbGRHRXZVRzl5ZEZCeVpXWnBlQzUwY3lJc0luZGxZbkJoWTJzNkx5OU5TVVJKVkc5dmJITXZMaTl6Y21NdlRVbEVTVkpsWVdSbGNpOU5TVVJKUlhabGJuUnpMMDFsZEdFdlUwMVFWRVZQWm1aelpYUXVkSE1pTENKM1pXSndZV05yT2k4dlRVbEVTVlJ2YjJ4ekx5NHZjM0pqTDAxSlJFbFNaV0ZrWlhJdlRVbEVTVVYyWlc1MGN5OU5aWFJoTDFObGNYVmxibU5sVG5WdFltVnlMblJ6SWl3aWQyVmljR0ZqYXpvdkwwMUpSRWxVYjI5c2N5OHVMM055WXk5TlNVUkpVbVZoWkdWeUwwMUpSRWxGZG1WdWRITXZUV1YwWVM5VFpYRjFaVzVqWlhKVGNHVmphV1pwWXk1MGN5SXNJbmRsWW5CaFkyczZMeTlOU1VSSlZHOXZiSE12TGk5emNtTXZUVWxFU1ZKbFlXUmxjaTlOU1VSSlJYWmxiblJ6TDAxbGRHRXZVMlYwVkdWdGNHOHVkSE1pTENKM1pXSndZV05yT2k4dlRVbEVTVlJ2YjJ4ekx5NHZjM0pqTDAxSlJFbFNaV0ZrWlhJdlRVbEVTVVYyWlc1MGN5OU5aWFJoTDFSbGVIUXVkSE1pTENKM1pXSndZV05yT2k4dlRVbEVTVlJ2YjJ4ekx5NHZjM0pqTDAxSlJFbFNaV0ZrWlhJdlRVbEVTVVYyWlc1MGN5OU5aWFJoTDFScGJXVlRhV2R1WVhSMWNtVXVkSE1pTENKM1pXSndZV05yT2k4dlRVbEVTVlJ2YjJ4ekx5NHZjM0pqTDAxSlJFbFNaV0ZrWlhJdlRVbEVTVVYyWlc1MGN5OU5aWFJoTDFSeVlXTnJUbUZ0WlM1MGN5SXNJbmRsWW5CaFkyczZMeTlOU1VSSlZHOXZiSE12TGk5emNtTXZUVWxFU1ZKbFlXUmxjaTlOU1VSSlJYWmxiblJ6TDAxbGRHRXZhVzVrWlhndWRITWlMQ0ozWldKd1lXTnJPaTh2VFVsRVNWUnZiMnh6THk0dmMzSmpMMDFKUkVsU1pXRmtaWEl2VFVsRVNVVjJaVzUwY3k5T2IzUmxUMlptTG5Seklpd2lkMlZpY0dGamF6b3ZMMDFKUkVsVWIyOXNjeTh1TDNOeVl5OU5TVVJKVW1WaFpHVnlMMDFKUkVsRmRtVnVkSE12VG05MFpVOXVMblJ6SWl3aWQyVmljR0ZqYXpvdkwwMUpSRWxVYjI5c2N5OHVMM055WXk5TlNVUkpVbVZoWkdWeUwwMUpSRWxGZG1WdWRITXZVR2wwWTJoQ1pXNWtMblJ6SWl3aWQyVmljR0ZqYXpvdkwwMUpSRWxVYjI5c2N5OHVMM055WXk5TlNVUkpVbVZoWkdWeUwwMUpSRWxGZG1WdWRITXZVRzlzZVhCb2IyNXBZMEZtZEdWeWRHOTFZMmd1ZEhNaUxDSjNaV0p3WVdOck9pOHZUVWxFU1ZSdmIyeHpMeTR2YzNKakwwMUpSRWxTWldGa1pYSXZUVWxFU1VWMlpXNTBjeTlRY205bmNtRnRRMmhoYm1kbExuUnpJaXdpZDJWaWNHRmphem92TDAxSlJFbFViMjlzY3k4dUwzTnlZeTlOU1VSSlVtVmhaR1Z5TDAxSlJFbEZkbVZ1ZEhNdlUzbHpSWGd1ZEhNaUxDSjNaV0p3WVdOck9pOHZUVWxFU1ZSdmIyeHpMeTR2YzNKakwwMUpSRWxTWldGa1pYSXZUVWxFU1VWMlpXNTBjeTlwYm1SbGVDNTBjeUlzSW5kbFluQmhZMnM2THk5TlNVUkpWRzl2YkhNdkxpOXpjbU12VFVsRVNWSmxZV1JsY2k5TlNVUkpSbWxzWlZSNWNHVXVkSE1pTENKM1pXSndZV05yT2k4dlRVbEVTVlJ2YjJ4ekx5NHZjM0pqTDAxSlJFbFNaV0ZrWlhJdlRVbEVTVTFsZEdGRmRtVnVkRU55WldGMGIzSXVkSE1pTENKM1pXSndZV05yT2k4dlRVbEVTVlJ2YjJ4ekx5NHZjM0pqTDAxSlJFbFNaV0ZrWlhJdlRVbEVTVkJoY25ObFJYSnliM0l1ZEhNaUxDSjNaV0p3WVdOck9pOHZUVWxFU1ZSdmIyeHpMeTR2YzNKakwwMUpSRWxTWldGa1pYSXZhVzVrWlhndWRITWlMQ0ozWldKd1lXTnJPaTh2VFVsRVNWUnZiMnh6THk0dmMzSmpMMDFKUkVsU1pXRmtaWEl2Yldsa2FTMXlaV0ZrWlhJdWRITWlMQ0ozWldKd1lXTnJPaTh2VFVsRVNWUnZiMnh6THk0dmMzSmpMMDFKUkVsWGNtbDBaWEl2VFVsRVNVWnBiR1V1ZEhNaUxDSjNaV0p3WVdOck9pOHZUVWxFU1ZSdmIyeHpMeTR2YzNKakwwMUpSRWxYY21sMFpYSXZhVzVrWlhndWRITWlMQ0ozWldKd1lXTnJPaTh2VFVsRVNWUnZiMnh6THk0dmMzSmpMMmx1WkdWNExuUnpJaXdpZDJWaWNHRmphem92TDAxSlJFbFViMjlzY3k4dUwzTnlZeTkxZEdsc2N5OWlkV1ptWlhJdGRHOHRjM1J5YVc1bkxuUnpJaXdpZDJWaWNHRmphem92TDAxSlJFbFViMjlzY3k4dUwzTnlZeTkxZEdsc2N5OXBibVJsZUM1MGN5SXNJbmRsWW5CaFkyczZMeTlOU1VSSlZHOXZiSE12TGk5emNtTXZkWFJwYkhNdmJXbGthUzF1YjNSbExXTnZiblpsY25SbGNpNTBjeUlzSW5kbFluQmhZMnM2THk5TlNVUkpWRzl2YkhNdkxpOXpjbU12ZFhScGJITXZkbUZ5YVdGaWJHVXRiR1Z1WjNSb0xYWmhiSFZsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRiRVpaT3p0QlFVVmFPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hyUTBGQmEwTXNVMEZCVXp0QlFVTXpRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNhVUpCUVdsQ0xGTkJRVk03UVVGRE1VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhGQ1FVRnhRaXhUUVVGVE8wRkJRemxDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNNRU5CUVRCRExGVkJRVlU3UVVGRGNFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOMFNrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJWazdPMEZCUlZvc1lVRkJZU3h0UWtGQlR5eERRVUZETEc5RVFVRlhPMEZCUTJoRExHTkJRV01zYlVKQlFVOHNRMEZCUXl4blJFRkJVenRCUVVNdlFpeGpRVUZqTEcxQ1FVRlBMRU5CUVVNc1owUkJRVk03TzBGQlJTOUNPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4eFFrRkJjVUlzYlVSQlFXMUVPMEZCUTNoRk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFFrRkJiVUlzVlVGQlZUdEJRVU0zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzV1VGQldUdEJRVU0zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc01FSkJRVEJDTzBGQlF6RkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTEhWRFFVRjFReXhUUVVGVE8wRkJRMmhFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR1ZCUVdVc2FVSkJRV2xDTzBGQlEyaERPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNZVUZCWVN4cFFrRkJhVUk3UVVGRE9VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xGTkJRVk03UVVGRE1VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeFRRVUZUTzBGQlF6RkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZwUWl4VFFVRlRPMEZCUXpGQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBSQlFXZEVMRVZCUVVVN1FVRkRiRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2xDTEZOQlFWTTdRVUZETVVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIbERRVUY1UXp0QlFVTjZRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNkMEpCUVhkQ0xHVkJRV1U3UVVGRGRrTTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc2QwSkJRWGRDTEZGQlFWRTdRVUZEYUVNN1FVRkRRU3h4UWtGQmNVSXNaVUZCWlR0QlFVTndRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzV1VGQldUdEJRVU0zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNjVUpCUVhGQ0xGTkJRVk03UVVGRE9VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSEZDUVVGeFFpeFRRVUZUTzBGQlF6bENPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEhGQ1FVRnhRaXhUUVVGVE8wRkJRemxDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXhyUWtGQmEwSTdRVUZEYmtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRaXhqUVVGak8wRkJRMnBETzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeDFSRUZCZFVRc1QwRkJUenRCUVVNNVJEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNkVVJCUVhWRUxFOUJRVTg3UVVGRE9VUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzYTBKQlFXdENPMEZCUTJ4Q08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2NVSkJRWEZDTEZGQlFWRTdRVUZETjBJN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEdWQlFXVXNVMEZCVXp0QlFVTjRRanRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFpeFRRVUZUTzBGQlF6VkNPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4bFFVRmxMR2xDUVVGcFFqdEJRVU5vUXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxHbENRVUZwUWl4WlFVRlpPMEZCUXpkQ096dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNaMEpCUVdkQ08wRkJRMnBETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xHZENRVUZuUWp0QlFVTnFRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHBRa0ZCYVVJc1dVRkJXVHRCUVVNM1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUXpWMlJFRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVms3UVVGRFdqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzYVVKQlFXbENMRzFDUVVGUExFTkJRVU1zYjBSQlFWVTdPMEZCUlc1RExFOUJRVThzVjBGQlZ6czdRVUZGYkVJN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN08wRkRkRkZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2QwSkJRWGRDTEcxQ1FVRlBMRU5CUVVNc2MwTkJRVWs3TzBGQlJYQkRPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmxCUVZrc1kwRkJZenRCUVVNeFFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hwUWtGQmFVSXNjMEpCUVhOQ08wRkJRM1pETzBGQlEwRXNZVUZCWVR0QlFVTmlPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNXVUZCV1R0QlFVTmFPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPenRCUVVWS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzWVVGQllTeFRRVUZUTzBGQlEzUkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUdEJRVU5CT3p0QlFVVkJMR0ZCUVdFc2EwTkJRV3RETzBGQlF5OURPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZrc1QwRkJUenRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNXVUZCV1R0QlFVTmFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQkxEWkRRVUUyUXl4VFFVRlRPMEZCUTNSRU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMRFpEUVVFMlF5eFRRVUZUTzBGQlEzUkVPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmxCUVZrc1QwRkJUenRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTFCUVUwN1FVRkRha0lzV1VGQldUdEJRVU5hTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN096czdPMEZEZWxGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hSUVVGUkxGZEJRVmM3TzBGQlJXNUNPMEZCUTBFN1FVRkRRVHRCUVVOQkxGRkJRVkVzVjBGQlZ6czdRVUZGYmtJN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxGRkJRVkVzVjBGQlZ6czdRVUZGYmtJN1FVRkRRVHRCUVVOQkxGRkJRVkVzVlVGQlZUczdRVUZGYkVJN1FVRkRRVHM3T3pzN096czdPenM3TzBGRGJrWkJMR2xDUVVGcFFqczdRVUZGYWtJN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5LUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhqUVVGak8wRkJRM3BDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhaUVVGWkxFMUJRVTA3UVVGRGJFSXNXVUZCV1R0QlFVTmFPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1dVRkJXVHRCUVVOYU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1dVRkJXVHRCUVVOYU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZsQlFWazdRVUZEV2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3TzBGRGFrdEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096dEJRVWxCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDFRa0ZCZFVJc2MwSkJRWE5DTzBGQlF6ZERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzY1VKQlFYRkNPMEZCUTNKQ096dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3h4UTBGQmNVTTdPMEZCUlhKRE8wRkJRMEU3UVVGRFFUczdRVUZGUVN3eVFrRkJNa0k3UVVGRE0wSTdRVUZEUVR0QlFVTkJPMEZCUTBFc05FSkJRVFJDTEZWQlFWVTdPenM3T3pzN096czdPenRCUTNaTWRFTTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdRVUZGUkR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3cwUTBGQk5FTTdPMEZCUlRWRE96czdPenM3T3pzN096czdPMEZEYmtKaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3c0UTBGQk9FTXNZMEZCWXp0QlFVTTFSQ3d3UWtGQk1FSXNiVUpCUVU4c1EwRkJReXd3UkVGQll6dEJRVU5vUkN3MlFrRkJOa0lzYlVKQlFVOHNRMEZCUXl4M1JVRkJkMEk3UVVGRE4wUXNPRUpCUVRoQ0xHMUNRVUZQTEVOQlFVTXNORVZCUVdkRE8wRkJRM1JGTzBGQlEwRXNaME5CUVdkRExHZENRVUZuUWp0QlFVTm9SRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNaME5CUVdkRExHZENRVUZuUWp0QlFVTm9SRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNaME5CUVdkRExHZENRVUZuUWp0QlFVTm9SRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZERRVUZuUXl4blFrRkJaMEk3UVVGRGFFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owTkJRV2RETEdkQ1FVRm5RanRCUVVOb1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blEwRkJaME1zWjBKQlFXZENPMEZCUTJoRUxIZERRVUYzUXl3eVFrRkJNa0k3UVVGRGJrVTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzaExZVHRCUVVOaUxEaERRVUU0UXl4alFVRmpPMEZCUXpWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3T3pzN096czdPenM3T3pzN1FVTllZVHRCUVVOaUxEaERRVUU0UXl4alFVRmpPMEZCUXpWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJEczdPenM3T3pzN096czdPenRCUTFwaE8wRkJRMklzT0VOQlFUaERMR05CUVdNN1FVRkROVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3T3pzN096czdPenM3T3pzN1FVTldZVHRCUVVOaUxEaERRVUU0UXl4alFVRmpPMEZCUXpWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORU96czdPenM3T3pzN096czdPMEZEVm1FN1FVRkRZaXc0UTBGQk9FTXNZMEZCWXp0QlFVTTFSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSRHM3T3pzN096czdPenM3T3p0QlExWmhPMEZCUTJJc09FTkJRVGhETEdOQlFXTTdRVUZETlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN096czdPenM3T3pzN096czdRVU5XWVR0QlFVTmlMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN096czdPenM3T3pzN096czdRVU5ZWVR0QlFVTmlMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVPenM3T3pzN096czdPenM3TzBGRFZtRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkRzN096czdPenM3T3pzN096dEJRMVpoTzBGQlEySXNPRU5CUVRoRExHTkJRV003UVVGRE5VUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdPenM3T3pzN096czdPenM3UVVOV1lUdEJRVU5pTERoRFFVRTRReXhqUVVGak8wRkJRelZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN096czdPenM3T3pzN096czdRVU5rWVR0QlFVTmlMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVPenM3T3pzN096czdPenM3TzBGRFZtRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVPenM3T3pzN096czdPenM3TzBGRFdHRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkRzN096czdPenM3T3pzN096dEJRMVpoTzBGQlEySXNPRU5CUVRoRExHTkJRV003UVVGRE5VUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdPenM3T3pzN096czdPenM3UVVOV1lUdEJRVU5pTERoRFFVRTRReXhqUVVGak8wRkJRelZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVPenM3T3pzN096czdPenM3TzBGRFltRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkRzN096czdPenM3T3pzN096dEJRMVpoTzBGQlEySXNPRU5CUVRoRExHTkJRV003UVVGRE5VUXNkVUpCUVhWQ0xHMUNRVUZQTEVOQlFVTXNORVZCUVd0Q08wRkJRMnBFTzBGQlEwRXNjMEpCUVhOQ0xHMUNRVUZQTEVOQlFVTXNNRVZCUVdsQ08wRkJReTlETzBGQlEwRXNjVUpCUVhGQ0xHMUNRVUZQTEVOQlFVTXNkMFZCUVdkQ08wRkJRemRETzBGQlEwRXNhVUpCUVdsQ0xHMUNRVUZQTEVOQlFVTXNaMFZCUVZrN1FVRkRja003UVVGRFFTeHRRa0ZCYlVJc2JVSkJRVThzUTBGQlF5eHZSVUZCWXp0QlFVTjZRenRCUVVOQkxITkNRVUZ6UWl4dFFrRkJUeXhEUVVGRExEQkZRVUZwUWp0QlFVTXZRenRCUVVOQkxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExHdEZRVUZoTzBGQlEzWkRPMEZCUTBFc2EwSkJRV3RDTEcxQ1FVRlBMRU5CUVVNc2EwVkJRV0U3UVVGRGRrTTdRVUZEUVN4aFFVRmhMRzFDUVVGUExFTkJRVU1zZDBSQlFWRTdRVUZETjBJN1FVRkRRU3gxUWtGQmRVSXNiVUpCUVU4c1EwRkJReXcwUlVGQmEwSTdRVUZEYWtRN1FVRkRRU3hqUVVGakxHMUNRVUZQTEVOQlFVTXNNRVJCUVZNN1FVRkRMMEk3UVVGRFFTeGxRVUZsTEcxQ1FVRlBMRU5CUVVNc05FUkJRVlU3UVVGRGFrTTdRVUZEUVN4cFFrRkJhVUlzYlVKQlFVOHNRMEZCUXl4blJVRkJXVHRCUVVOeVF6dEJRVU5CTEc5Q1FVRnZRaXh0UWtGQlR5eERRVUZETEhORlFVRmxPMEZCUXpORE8wRkJRMEVzTUVKQlFUQkNMRzFDUVVGUExFTkJRVU1zYTBaQlFYRkNPMEZCUTNaRU96czdPenM3T3pzN096czdPMEZETDBKaE8wRkJRMklzT0VOQlFUaERMR05CUVdNN1FVRkROVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FT3pzN096czdPenM3T3pzN08wRkRXbUU3UVVGRFlpdzRRMEZCT0VNc1kwRkJZenRCUVVNMVJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdPenM3T3pzN096czdPenM3UVVOYVlUdEJRVU5pTERoRFFVRTRReXhqUVVGak8wRkJRelZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdPenM3T3pzN096czdPenM3UVVOWVlUdEJRVU5pTERoRFFVRTRReXhqUVVGak8wRkJRelZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkRzN096czdPenM3T3pzN096dEJRMXBoTzBGQlEySXNPRU5CUVRoRExHTkJRV003UVVGRE5VUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkRzN096czdPenM3T3pzN096dEJRMWhoTzBGQlEySXNPRU5CUVRoRExHTkJRV003UVVGRE5VUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdPenM3T3pzN096czdPenM3UVVOV1lUdEJRVU5pTERoRFFVRTRReXhqUVVGak8wRkJRelZFTEdkQ1FVRm5RaXh0UWtGQlR5eERRVUZETEhsRVFVRlhPMEZCUTI1RE8wRkJRMEVzWlVGQlpTeHRRa0ZCVHl4RFFVRkRMSFZFUVVGVk8wRkJRMnBETzBGQlEwRXNjMEpCUVhOQ0xHMUNRVUZQTEVOQlFVTXNjVVZCUVdsQ08wRkJReTlETzBGQlEwRXNlVUpCUVhsQ0xHMUNRVUZQTEVOQlFVTXNNa1ZCUVc5Q08wRkJRM0pFTzBGQlEwRXNOa0pCUVRaQ0xHMUNRVUZQTEVOQlFVTXNiVVpCUVhkQ08wRkJRemRFTzBGQlEwRXNNRUpCUVRCQ0xHMUNRVUZQTEVOQlFVTXNOa1ZCUVhGQ08wRkJRM1pFTzBGQlEwRXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNOa1JCUVdFN1FVRkRka003UVVGRFFTeGpRVUZqTEcxQ1FVRlBMRU5CUVVNc2NVUkJRVk03UVVGREwwSTdRVUZEUVN4aFFVRmhMRzFDUVVGUExFTkJRVU1zZVVSQlFWRTdRVUZETjBJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMjVEWVR0QlFVTmlMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETEcxRlFVRnRSVHRCUVVOd1JUczdPenM3T3pzN096czdPenRCUTFKaE8wRkJRMklzT0VOQlFUaERMR05CUVdNN1FVRkROVVFzYlVKQlFXMUNMRzFDUVVGUExFTkJRVU1zTUVSQlFXTTdRVUZEZWtNc2VVSkJRWGxDTEcxQ1FVRlBMRU5CUVVNc2EwVkJRVEpDTzBGQlF6VkVMRGhDUVVFNFFpeHRRa0ZCVHl4RFFVRkRMRFJGUVVGblF6dEJRVU4wUlR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUTBGQlowTXNaMEpCUVdkQ08wRkJRMmhFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU16VEdFN1FVRkRZanRCUVVOQk8wRkJRMEU3UVVGRFFTeGpRVUZqTEdkQ1FVRm5RaXh6UTBGQmMwTXNhVUpCUVdsQ0xFVkJRVVU3UVVGRGRrWXNOa0pCUVRaQ0xIVkVRVUYxUkR0QlFVTndSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhWQ1FVRjFRaXh6UWtGQmMwSTdRVUZETjBNN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDdzRRMEZCT0VNc1kwRkJZenRCUVVNMVJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3T3pzN096czdPenM3T3pzN1FVTjBRbUU3UVVGRFlpdzRRMEZCT0VNc1kwRkJZenRCUVVNMVJDeHRRa0ZCYlVJc2JVSkJRVThzUTBGQlF5d3dSRUZCWXp0QlFVTjZRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzY1VKQlFYRkNMRzFDUVVGUExFTkJRVU1zZDBSQlFXZENPMEZCUXpkRE8wRkJRMEVzZFVKQlFYVkNMRzFDUVVGUExFTkJRVU1zTkVSQlFXdENPMEZCUTJwRU8wRkJRMEVzYjBKQlFXOUNMRzFDUVVGUExFTkJRVU1zYzBSQlFXVTdRVUZETTBNN096czdPenM3T3pzN096czdRVU51UWtFc09FTkJRV0U3UVVGRFlqdEJRVU5CTEdGQlFXRXNOa0pCUVRaQ0xEQkNRVUV3UWl4aFFVRmhMRVZCUVVVc2NVSkJRWEZDTzBGQlEzaEhMR2RDUVVGblFpeHhSRUZCY1VRc2IwVkJRVzlGTEdGQlFXRXNSVUZCUlR0QlFVTjRTaXh6UWtGQmMwSXNjMEpCUVhOQ0xIRkNRVUZ4UWl4SFFVRkhPMEZCUTNCRk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSFZEUVVGMVF6dEJRVU4yUXl4clEwRkJhME1zVTBGQlV6dEJRVU16UXl4clEwRkJhME1zVjBGQlZ5eFZRVUZWTzBGQlEzWkVMSGxEUVVGNVF5eGpRVUZqTzBGQlEzWkVPMEZCUTBFc05rZEJRVFpITEU5QlFVOHNWVUZCVlR0QlFVTTVTQ3huUmtGQlowWXNhVUpCUVdsQ0xFOUJRVTg3UVVGRGVFY3NkMFJCUVhkRUxHZENRVUZuUWl4UlFVRlJMRTlCUVU4N1FVRkRka1lzT0VOQlFUaERMR2RDUVVGblFpeG5Ra0ZCWjBJc1QwRkJUenRCUVVOeVJqdEJRVU5CTEdsRFFVRnBRenRCUVVOcVF6dEJRVU5CTzBGQlEwRXNVMEZCVXl4WlFVRlpMR0ZCUVdFc1QwRkJUeXhGUVVGRkxGVkJRVlVzVjBGQlZ6dEJRVU5vUlN4dFEwRkJiVU1zVTBGQlV6dEJRVU0xUXp0QlFVTkJPMEZCUTBFc09FTkJRVGhETEdOQlFXTTdRVUZETlVRc2NVSkJRWEZDTEcxQ1FVRlBMRU5CUVVNc2QwUkJRV2RDTzBGQlF6ZERMSFZDUVVGMVFpeHRRa0ZCVHl4RFFVRkRMRFJFUVVGclFqdEJRVU5xUkN4NVFrRkJlVUlzYlVKQlFVOHNRMEZCUXl4blJVRkJiMEk3UVVGRGNrUXNPRUpCUVRoQ0xHMUNRVUZQTEVOQlFVTXNORVZCUVdkRE8wRkJRM1JGTEhsQ1FVRjVRaXh0UWtGQlR5eERRVUZETEd0RlFVRXlRanRCUVVNMVJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFXRTdRVUZEWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiME5CUVc5RE8wRkJRM0JETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3T3pzN096czdPenM3T3pzN08wRkRla3hoTzBGQlEySTdRVUZEUVR0QlFVTkJMR2RFUVVGblJDeFBRVUZQTzBGQlEzWkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFJEUVVFMFF6dEJRVU0xUXp0QlFVTkJMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVMRGhDUVVFNFFpeHRRa0ZCVHl4RFFVRkRMR3RFUVVGUE8wRkJRemRETEdOQlFXTXNiVUpCUVU4c1EwRkJReXh6UTBGQlZUdEJRVU5vUXp0QlFVTkJPMEZCUTBFc05FUkJRVFJFTERCQ1FVRXdRaXhGUVVGRk8wRkJRM2hHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZVVKQlFYbENPMEZCUTNwQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2VVSkJRWGxDTzBGQlEzcENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDNSRUZCZDBRc2NVTkJRWEZETzBGQlF6ZEdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4dlUwRkJiMU03UVVGRGNGTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTdzBRa0ZCTkVJc2FVSkJRV2xDTzBGQlF6ZERMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFJDUVVFMFFpeHBRa0ZCYVVJN1FVRkROME1zVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJZVHRCUVVOaU8wRkJRMEVzVTBGQlV5eEpRVUZKTzBGQlEySTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRMRWxCUVVrN1FVRkRZanRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJZVHRCUVVOaU8wRkJRMEVzVTBGQlV5eEpRVUZKTzBGQlEySTdRVUZEUVN4MVJrRkJkVVlzYVVSQlFXbEVMRVZCUVVVN1FVRkRNVWtzYTBaQlFXdEdMREJEUVVFd1F5eEZRVUZGTzBGQlF6bElPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZoTzBGQlEySTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSRHM3T3pzN096czdPenM3T3p0QlEzUlZZVHRCUVVOaUxEaERRVUU0UXl4alFVRmpPMEZCUXpWRUxHbENRVUZwUWl4dFFrRkJUeXhEUVVGRExHZEVRVUZaTzBGQlEzSkRPenM3T3pzN096czdPenM3TzBGRFNHRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkN4dFFrRkJiVUlzYlVKQlFVOHNRMEZCUXl3clEwRkJZenRCUVVONlF6dEJRVU5CTEcxQ1FVRnRRaXh0UWtGQlR5eERRVUZETEN0RFFVRmpPMEZCUTNwRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZMEZCWXl4dFFrRkJUeXhEUVVGRExIRkRRVUZUTzBGQlF5OUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTmtZVHRCUVVOaUxEaERRVUU0UXl4alFVRmpPMEZCUXpWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRaXhaUVVGWk8wRkJReTlDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRFZHRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkN4NVFrRkJlVUlzYlVKQlFVOHNRMEZCUXl3eVJFRkJiMEk3UVVGRGNrUTdRVUZEUVN3NFFrRkJPRUlzYlVKQlFVOHNRMEZCUXl4eFJVRkJlVUk3UVVGREwwUTdRVUZEUVR0QlFVTkJMRFJDUVVFMFFpeHRRa0ZCVHl4RFFVRkRMR2xGUVVGMVFqdEJRVU16UkR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRFZHRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZWtkaE8wRkJRMklzT0VOQlFUaERMR05CUVdNN1FVRkROVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUTBGQlowTXNaMEpCUVdkQ08wRkJRMmhFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaWJXbGthUzEwYjI5c2N5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJazFKUkVsVWIyOXNjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0pOU1VSSlZHOXZiSE5jSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzU5S1NoM2FXNWtiM2NzSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlDSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpTDF3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwzTnlZeTlwYm1SbGVDNTBjMXdpS1R0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSjF4dVhHNWxlSEJ2Y25SekxtSjVkR1ZNWlc1bmRHZ2dQU0JpZVhSbFRHVnVaM1JvWEc1bGVIQnZjblJ6TG5SdlFubDBaVUZ5Y21GNUlEMGdkRzlDZVhSbFFYSnlZWGxjYm1WNGNHOXlkSE11Wm5KdmJVSjVkR1ZCY25KaGVTQTlJR1p5YjIxQ2VYUmxRWEp5WVhsY2JseHVkbUZ5SUd4dmIydDFjQ0E5SUZ0ZFhHNTJZWElnY21WMlRHOXZhM1Z3SUQwZ1cxMWNiblpoY2lCQmNuSWdQU0IwZVhCbGIyWWdWV2x1ZERoQmNuSmhlU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJWYVc1ME9FRnljbUY1SURvZ1FYSnlZWGxjYmx4dWRtRnlJR052WkdVZ1BTQW5RVUpEUkVWR1IwaEpTa3RNVFU1UFVGRlNVMVJWVmxkWVdWcGhZbU5rWldabmFHbHFhMnh0Ym05d2NYSnpkSFYyZDNoNWVqQXhNak0wTlRZM09Ea3JMeWRjYm1admNpQW9kbUZ5SUdrZ1BTQXdMQ0JzWlc0Z1BTQmpiMlJsTG14bGJtZDBhRHNnYVNBOElHeGxianNnS3l0cEtTQjdYRzRnSUd4dmIydDFjRnRwWFNBOUlHTnZaR1ZiYVYxY2JpQWdjbVYyVEc5dmEzVndXMk52WkdVdVkyaGhja052WkdWQmRDaHBLVjBnUFNCcFhHNTlYRzVjYmk4dklGTjFjSEJ2Y25RZ1pHVmpiMlJwYm1jZ1ZWSk1MWE5oWm1VZ1ltRnpaVFkwSUhOMGNtbHVaM01zSUdGeklFNXZaR1V1YW5NZ1pHOWxjeTVjYmk4dklGTmxaVG9nYUhSMGNITTZMeTlsYmk1M2FXdHBjR1ZrYVdFdWIzSm5MM2RwYTJrdlFtRnpaVFkwSTFWU1RGOWhjSEJzYVdOaGRHbHZibk5jYm5KbGRreHZiMnQxY0ZzbkxTY3VZMmhoY2tOdlpHVkJkQ2d3S1YwZ1BTQTJNbHh1Y21WMlRHOXZhM1Z3V3lkZkp5NWphR0Z5UTI5a1pVRjBLREFwWFNBOUlEWXpYRzVjYm1aMWJtTjBhVzl1SUdkbGRFeGxibk1nS0dJMk5Da2dlMXh1SUNCMllYSWdiR1Z1SUQwZ1lqWTBMbXhsYm1kMGFGeHVYRzRnSUdsbUlDaHNaVzRnSlNBMElENGdNQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25TVzUyWVd4cFpDQnpkSEpwYm1jdUlFeGxibWQwYUNCdGRYTjBJR0psSUdFZ2JYVnNkR2x3YkdVZ2IyWWdOQ2NwWEc0Z0lIMWNibHh1SUNBdkx5QlVjbWx0SUc5bVppQmxlSFJ5WVNCaWVYUmxjeUJoWm5SbGNpQndiR0ZqWldodmJHUmxjaUJpZVhSbGN5QmhjbVVnWm05MWJtUmNiaUFnTHk4Z1UyVmxPaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WW1WaGRHZGhiVzFwZEM5aVlYTmxOalF0YW5NdmFYTnpkV1Z6THpReVhHNGdJSFpoY2lCMllXeHBaRXhsYmlBOUlHSTJOQzVwYm1SbGVFOW1LQ2M5SnlsY2JpQWdhV1lnS0haaGJHbGtUR1Z1SUQwOVBTQXRNU2tnZG1Gc2FXUk1aVzRnUFNCc1pXNWNibHh1SUNCMllYSWdjR3hoWTJWSWIyeGtaWEp6VEdWdUlEMGdkbUZzYVdSTVpXNGdQVDA5SUd4bGJseHVJQ0FnSUQ4Z01GeHVJQ0FnSURvZ05DQXRJQ2gyWVd4cFpFeGxiaUFsSURRcFhHNWNiaUFnY21WMGRYSnVJRnQyWVd4cFpFeGxiaXdnY0d4aFkyVkliMnhrWlhKelRHVnVYVnh1ZlZ4dVhHNHZMeUJpWVhObE5qUWdhWE1nTkM4eklDc2dkWEFnZEc4Z2RIZHZJR05vWVhKaFkzUmxjbk1nYjJZZ2RHaGxJRzl5YVdkcGJtRnNJR1JoZEdGY2JtWjFibU4wYVc5dUlHSjVkR1ZNWlc1bmRHZ2dLR0kyTkNrZ2UxeHVJQ0IyWVhJZ2JHVnVjeUE5SUdkbGRFeGxibk1vWWpZMEtWeHVJQ0IyWVhJZ2RtRnNhV1JNWlc0Z1BTQnNaVzV6V3pCZFhHNGdJSFpoY2lCd2JHRmpaVWh2YkdSbGNuTk1aVzRnUFNCc1pXNXpXekZkWEc0Z0lISmxkSFZ5YmlBb0tIWmhiR2xrVEdWdUlDc2djR3hoWTJWSWIyeGtaWEp6VEdWdUtTQXFJRE1nTHlBMEtTQXRJSEJzWVdObFNHOXNaR1Z5YzB4bGJseHVmVnh1WEc1bWRXNWpkR2x2YmlCZllubDBaVXhsYm1kMGFDQW9ZalkwTENCMllXeHBaRXhsYml3Z2NHeGhZMlZJYjJ4a1pYSnpUR1Z1S1NCN1hHNGdJSEpsZEhWeWJpQW9LSFpoYkdsa1RHVnVJQ3NnY0d4aFkyVkliMnhrWlhKelRHVnVLU0FxSURNZ0x5QTBLU0F0SUhCc1lXTmxTRzlzWkdWeWMweGxibHh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjBiMEo1ZEdWQmNuSmhlU0FvWWpZMEtTQjdYRzRnSUhaaGNpQjBiWEJjYmlBZ2RtRnlJR3hsYm5NZ1BTQm5aWFJNWlc1ektHSTJOQ2xjYmlBZ2RtRnlJSFpoYkdsa1RHVnVJRDBnYkdWdWMxc3dYVnh1SUNCMllYSWdjR3hoWTJWSWIyeGtaWEp6VEdWdUlEMGdiR1Z1YzFzeFhWeHVYRzRnSUhaaGNpQmhjbklnUFNCdVpYY2dRWEp5S0Y5aWVYUmxUR1Z1WjNSb0tHSTJOQ3dnZG1Gc2FXUk1aVzRzSUhCc1lXTmxTRzlzWkdWeWMweGxiaWtwWEc1Y2JpQWdkbUZ5SUdOMWNrSjVkR1VnUFNBd1hHNWNiaUFnTHk4Z2FXWWdkR2hsY21VZ1lYSmxJSEJzWVdObGFHOXNaR1Z5Y3l3Z2IyNXNlU0JuWlhRZ2RYQWdkRzhnZEdobElHeGhjM1FnWTI5dGNHeGxkR1VnTkNCamFHRnljMXh1SUNCMllYSWdiR1Z1SUQwZ2NHeGhZMlZJYjJ4a1pYSnpUR1Z1SUQ0Z01GeHVJQ0FnSUQ4Z2RtRnNhV1JNWlc0Z0xTQTBYRzRnSUNBZ09pQjJZV3hwWkV4bGJseHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JHVnVPeUJwSUNzOUlEUXBJSHRjYmlBZ0lDQjBiWEFnUFZ4dUlDQWdJQ0FnS0hKbGRreHZiMnQxY0Z0aU5qUXVZMmhoY2tOdlpHVkJkQ2hwS1YwZ1BEd2dNVGdwSUh4Y2JpQWdJQ0FnSUNoeVpYWk1iMjlyZFhCYllqWTBMbU5vWVhKRGIyUmxRWFFvYVNBcklERXBYU0E4UENBeE1pa2dmRnh1SUNBZ0lDQWdLSEpsZGt4dmIydDFjRnRpTmpRdVkyaGhja052WkdWQmRDaHBJQ3NnTWlsZElEdzhJRFlwSUh4Y2JpQWdJQ0FnSUhKbGRreHZiMnQxY0Z0aU5qUXVZMmhoY2tOdlpHVkJkQ2hwSUNzZ015bGRYRzRnSUNBZ1lYSnlXMk4xY2tKNWRHVXJLMTBnUFNBb2RHMXdJRDQrSURFMktTQW1JREI0UmtaY2JpQWdJQ0JoY25KYlkzVnlRbmwwWlNzclhTQTlJQ2gwYlhBZ1BqNGdPQ2tnSmlBd2VFWkdYRzRnSUNBZ1lYSnlXMk4xY2tKNWRHVXJLMTBnUFNCMGJYQWdKaUF3ZUVaR1hHNGdJSDFjYmx4dUlDQnBaaUFvY0d4aFkyVkliMnhrWlhKelRHVnVJRDA5UFNBeUtTQjdYRzRnSUNBZ2RHMXdJRDFjYmlBZ0lDQWdJQ2h5WlhaTWIyOXJkWEJiWWpZMExtTm9ZWEpEYjJSbFFYUW9hU2xkSUR3OElESXBJSHhjYmlBZ0lDQWdJQ2h5WlhaTWIyOXJkWEJiWWpZMExtTm9ZWEpEYjJSbFFYUW9hU0FySURFcFhTQStQaUEwS1Z4dUlDQWdJR0Z5Y2x0amRYSkNlWFJsS3l0ZElEMGdkRzF3SUNZZ01IaEdSbHh1SUNCOVhHNWNiaUFnYVdZZ0tIQnNZV05sU0c5c1pHVnljMHhsYmlBOVBUMGdNU2tnZTF4dUlDQWdJSFJ0Y0NBOVhHNGdJQ0FnSUNBb2NtVjJURzl2YTNWd1cySTJOQzVqYUdGeVEyOWtaVUYwS0drcFhTQThQQ0F4TUNrZ2ZGeHVJQ0FnSUNBZ0tISmxka3h2YjJ0MWNGdGlOalF1WTJoaGNrTnZaR1ZCZENocElDc2dNU2xkSUR3OElEUXBJSHhjYmlBZ0lDQWdJQ2h5WlhaTWIyOXJkWEJiWWpZMExtTm9ZWEpEYjJSbFFYUW9hU0FySURJcFhTQStQaUF5S1Z4dUlDQWdJR0Z5Y2x0amRYSkNlWFJsS3l0ZElEMGdLSFJ0Y0NBK1BpQTRLU0FtSURCNFJrWmNiaUFnSUNCaGNuSmJZM1Z5UW5sMFpTc3JYU0E5SUhSdGNDQW1JREI0UmtaY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCaGNuSmNibjFjYmx4dVpuVnVZM1JwYjI0Z2RISnBjR3hsZEZSdlFtRnpaVFkwSUNodWRXMHBJSHRjYmlBZ2NtVjBkWEp1SUd4dmIydDFjRnR1ZFcwZ1BqNGdNVGdnSmlBd2VETkdYU0FyWEc0Z0lDQWdiRzl2YTNWd1cyNTFiU0ErUGlBeE1pQW1JREI0TTBaZElDdGNiaUFnSUNCc2IyOXJkWEJiYm5WdElENCtJRFlnSmlBd2VETkdYU0FyWEc0Z0lDQWdiRzl2YTNWd1cyNTFiU0FtSURCNE0wWmRYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVnVZMjlrWlVOb2RXNXJJQ2gxYVc1ME9Dd2djM1JoY25Rc0lHVnVaQ2tnZTF4dUlDQjJZWElnZEcxd1hHNGdJSFpoY2lCdmRYUndkWFFnUFNCYlhWeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ2MzUmhjblE3SUdrZ1BDQmxibVE3SUdrZ0t6MGdNeWtnZTF4dUlDQWdJSFJ0Y0NBOVhHNGdJQ0FnSUNBb0tIVnBiblE0VzJsZElEdzhJREUyS1NBbUlEQjRSa1l3TURBd0tTQXJYRzRnSUNBZ0lDQW9LSFZwYm5RNFcya2dLeUF4WFNBOFBDQTRLU0FtSURCNFJrWXdNQ2tnSzF4dUlDQWdJQ0FnS0hWcGJuUTRXMmtnS3lBeVhTQW1JREI0UmtZcFhHNGdJQ0FnYjNWMGNIVjBMbkIxYzJnb2RISnBjR3hsZEZSdlFtRnpaVFkwS0hSdGNDa3BYRzRnSUgxY2JpQWdjbVYwZFhKdUlHOTFkSEIxZEM1cWIybHVLQ2NuS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJtY205dFFubDBaVUZ5Y21GNUlDaDFhVzUwT0NrZ2UxeHVJQ0IyWVhJZ2RHMXdYRzRnSUhaaGNpQnNaVzRnUFNCMWFXNTBPQzVzWlc1bmRHaGNiaUFnZG1GeUlHVjRkSEpoUW5sMFpYTWdQU0JzWlc0Z0pTQXpJQzh2SUdsbUlIZGxJR2hoZG1VZ01TQmllWFJsSUd4bFpuUXNJSEJoWkNBeUlHSjVkR1Z6WEc0Z0lIWmhjaUJ3WVhKMGN5QTlJRnRkWEc0Z0lIWmhjaUJ0WVhoRGFIVnVhMHhsYm1kMGFDQTlJREUyTXpneklDOHZJRzExYzNRZ1ltVWdiWFZzZEdsd2JHVWdiMllnTTF4dVhHNGdJQzh2SUdkdklIUm9jbTkxWjJnZ2RHaGxJR0Z5Y21GNUlHVjJaWEo1SUhSb2NtVmxJR0o1ZEdWekxDQjNaU2RzYkNCa1pXRnNJSGRwZEdnZ2RISmhhV3hwYm1jZ2MzUjFabVlnYkdGMFpYSmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQXNJR3hsYmpJZ1BTQnNaVzRnTFNCbGVIUnlZVUo1ZEdWek95QnBJRHdnYkdWdU1qc2dhU0FyUFNCdFlYaERhSFZ1YTB4bGJtZDBhQ2tnZTF4dUlDQWdJSEJoY25SekxuQjFjMmdvWlc1amIyUmxRMmgxYm1zb1hHNGdJQ0FnSUNCMWFXNTBPQ3dnYVN3Z0tHa2dLeUJ0WVhoRGFIVnVhMHhsYm1kMGFDa2dQaUJzWlc0eUlEOGdiR1Z1TWlBNklDaHBJQ3NnYldGNFEyaDFibXRNWlc1bmRHZ3BYRzRnSUNBZ0tTbGNiaUFnZlZ4dVhHNGdJQzh2SUhCaFpDQjBhR1VnWlc1a0lIZHBkR2dnZW1WeWIzTXNJR0oxZENCdFlXdGxJSE4xY21VZ2RHOGdibTkwSUdadmNtZGxkQ0IwYUdVZ1pYaDBjbUVnWW5sMFpYTmNiaUFnYVdZZ0tHVjRkSEpoUW5sMFpYTWdQVDA5SURFcElIdGNiaUFnSUNCMGJYQWdQU0IxYVc1ME9GdHNaVzRnTFNBeFhWeHVJQ0FnSUhCaGNuUnpMbkIxYzJnb1hHNGdJQ0FnSUNCc2IyOXJkWEJiZEcxd0lENCtJREpkSUN0Y2JpQWdJQ0FnSUd4dmIydDFjRnNvZEcxd0lEdzhJRFFwSUNZZ01IZ3pSbDBnSzF4dUlDQWdJQ0FnSnowOUoxeHVJQ0FnSUNsY2JpQWdmU0JsYkhObElHbG1JQ2hsZUhSeVlVSjVkR1Z6SUQwOVBTQXlLU0I3WEc0Z0lDQWdkRzF3SUQwZ0tIVnBiblE0VzJ4bGJpQXRJREpkSUR3OElEZ3BJQ3NnZFdsdWREaGJiR1Z1SUMwZ01WMWNiaUFnSUNCd1lYSjBjeTV3ZFhOb0tGeHVJQ0FnSUNBZ2JHOXZhM1Z3VzNSdGNDQStQaUF4TUYwZ0sxeHVJQ0FnSUNBZ2JHOXZhM1Z3V3loMGJYQWdQajRnTkNrZ0ppQXdlRE5HWFNBclhHNGdJQ0FnSUNCc2IyOXJkWEJiS0hSdGNDQThQQ0F5S1NBbUlEQjRNMFpkSUN0Y2JpQWdJQ0FnSUNjOUoxeHVJQ0FnSUNsY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd1lYSjBjeTVxYjJsdUtDY25LVnh1ZlZ4dUlpd2lMeW9oWEc0Z0tpQlVhR1VnWW5WbVptVnlJRzF2WkhWc1pTQm1jbTl0SUc1dlpHVXVhbk1zSUdadmNpQjBhR1VnWW5KdmQzTmxjaTVjYmlBcVhHNGdLaUJBWVhWMGFHOXlJQ0FnUm1WeWIzTnpJRUZpYjNWcmFHRmthV3BsYUNBOFptVnliM056UUdabGNtOXpjeTV2Y21jK0lEeG9kSFJ3T2k4dlptVnliM056TG05eVp6NWNiaUFxSUVCc2FXTmxibk5sSUNCTlNWUmNiaUFxTDF4dUx5b2daWE5zYVc1MExXUnBjMkZpYkdVZ2JtOHRjSEp2ZEc4Z0tpOWNibHh1SjNWelpTQnpkSEpwWTNRblhHNWNiblpoY2lCaVlYTmxOalFnUFNCeVpYRjFhWEpsS0NkaVlYTmxOalF0YW5NbktWeHVkbUZ5SUdsbFpXVTNOVFFnUFNCeVpYRjFhWEpsS0NkcFpXVmxOelUwSnlsY2JuWmhjaUJwYzBGeWNtRjVJRDBnY21WeGRXbHlaU2duYVhOaGNuSmhlU2NwWEc1Y2JtVjRjRzl5ZEhNdVFuVm1abVZ5SUQwZ1FuVm1abVZ5WEc1bGVIQnZjblJ6TGxOc2IzZENkV1ptWlhJZ1BTQlRiRzkzUW5WbVptVnlYRzVsZUhCdmNuUnpMa2xPVTFCRlExUmZUVUZZWDBKWlZFVlRJRDBnTlRCY2JseHVMeW9xWEc0Z0tpQkpaaUJnUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFJnT2x4dUlDb2dJQ0E5UFQwZ2RISjFaU0FnSUNCVmMyVWdWV2x1ZERoQmNuSmhlU0JwYlhCc1pXMWxiblJoZEdsdmJpQW9abUZ6ZEdWemRDbGNiaUFxSUNBZ1BUMDlJR1poYkhObElDQWdWWE5sSUU5aWFtVmpkQ0JwYlhCc1pXMWxiblJoZEdsdmJpQW9iVzl6ZENCamIyMXdZWFJwWW14bExDQmxkbVZ1SUVsRk5pbGNiaUFxWEc0Z0tpQkNjbTkzYzJWeWN5QjBhR0YwSUhOMWNIQnZjblFnZEhsd1pXUWdZWEp5WVhseklHRnlaU0JKUlNBeE1Dc3NJRVpwY21WbWIzZ2dOQ3NzSUVOb2NtOXRaU0EzS3l3Z1UyRm1ZWEpwSURVdU1Tc3NYRzRnS2lCUGNHVnlZU0F4TVM0Mkt5d2dhVTlUSURRdU1pc3VYRzRnS2x4dUlDb2dSSFZsSUhSdklIWmhjbWx2ZFhNZ1luSnZkM05sY2lCaWRXZHpMQ0J6YjIxbGRHbHRaWE1nZEdobElFOWlhbVZqZENCcGJYQnNaVzFsYm5SaGRHbHZiaUIzYVd4c0lHSmxJSFZ6WldRZ1pYWmxibHh1SUNvZ2QyaGxiaUIwYUdVZ1luSnZkM05sY2lCemRYQndiM0owY3lCMGVYQmxaQ0JoY25KaGVYTXVYRzRnS2x4dUlDb2dUbTkwWlRwY2JpQXFYRzRnS2lBZ0lDMGdSbWx5WldadmVDQTBMVEk1SUd4aFkydHpJSE4xY0hCdmNuUWdabTl5SUdGa1pHbHVaeUJ1WlhjZ2NISnZjR1Z5ZEdsbGN5QjBieUJnVldsdWREaEJjbkpoZVdBZ2FXNXpkR0Z1WTJWekxGeHVJQ29nSUNBZ0lGTmxaVG9nYUhSMGNITTZMeTlpZFdkNmFXeHNZUzV0YjNwcGJHeGhMbTl5Wnk5emFHOTNYMkoxWnk1aloyay9hV1E5TmprMU5ETTRMbHh1SUNwY2JpQXFJQ0FnTFNCRGFISnZiV1VnT1MweE1DQnBjeUJ0YVhOemFXNW5JSFJvWlNCZ1ZIbHdaV1JCY25KaGVTNXdjbTkwYjNSNWNHVXVjM1ZpWVhKeVlYbGdJR1oxYm1OMGFXOXVMbHh1SUNwY2JpQXFJQ0FnTFNCSlJURXdJR2hoY3lCaElHSnliMnRsYmlCZ1ZIbHdaV1JCY25KaGVTNXdjbTkwYjNSNWNHVXVjM1ZpWVhKeVlYbGdJR1oxYm1OMGFXOXVJSGRvYVdOb0lISmxkSFZ5Ym5NZ1lYSnlZWGx6SUc5bVhHNGdLaUFnSUNBZ2FXNWpiM0p5WldOMElHeGxibWQwYUNCcGJpQnpiMjFsSUhOcGRIVmhkR2x2Ym5NdVhHNWNiaUFxSUZkbElHUmxkR1ZqZENCMGFHVnpaU0JpZFdkbmVTQmljbTkzYzJWeWN5QmhibVFnYzJWMElHQkNkV1ptWlhJdVZGbFFSVVJmUVZKU1FWbGZVMVZRVUU5U1ZHQWdkRzhnWUdaaGJITmxZQ0J6YnlCMGFHVjVYRzRnS2lCblpYUWdkR2hsSUU5aWFtVmpkQ0JwYlhCc1pXMWxiblJoZEdsdmJpd2dkMmhwWTJnZ2FYTWdjMnh2ZDJWeUlHSjFkQ0JpWldoaGRtVnpJR052Y25KbFkzUnNlUzVjYmlBcUwxeHVRblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUWdQU0JuYkc5aVlXd3VWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ0FoUFQwZ2RXNWtaV1pwYm1Wa1hHNGdJRDhnWjJ4dlltRnNMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFJjYmlBZ09pQjBlWEJsWkVGeWNtRjVVM1Z3Y0c5eWRDZ3BYRzVjYmk4cVhHNGdLaUJGZUhCdmNuUWdhMDFoZUV4bGJtZDBhQ0JoWm5SbGNpQjBlWEJsWkNCaGNuSmhlU0J6ZFhCd2IzSjBJR2x6SUdSbGRHVnliV2x1WldRdVhHNGdLaTljYm1WNGNHOXlkSE11YTAxaGVFeGxibWQwYUNBOUlHdE5ZWGhNWlc1bmRHZ29LVnh1WEc1bWRXNWpkR2x2YmlCMGVYQmxaRUZ5Y21GNVUzVndjRzl5ZENBb0tTQjdYRzRnSUhSeWVTQjdYRzRnSUNBZ2RtRnlJR0Z5Y2lBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0RFcFhHNGdJQ0FnWVhKeUxsOWZjSEp2ZEc5Zlh5QTlJSHRmWDNCeWIzUnZYMTg2SUZWcGJuUTRRWEp5WVhrdWNISnZkRzkwZVhCbExDQm1iMjg2SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlEUXlJSDE5WEc0Z0lDQWdjbVYwZFhKdUlHRnljaTVtYjI4b0tTQTlQVDBnTkRJZ0ppWWdMeThnZEhsd1pXUWdZWEp5WVhrZ2FXNXpkR0Z1WTJWeklHTmhiaUJpWlNCaGRXZHRaVzUwWldSY2JpQWdJQ0FnSUNBZ2RIbHdaVzltSUdGeWNpNXpkV0poY25KaGVTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQXZMeUJqYUhKdmJXVWdPUzB4TUNCc1lXTnJJR0J6ZFdKaGNuSmhlV0JjYmlBZ0lDQWdJQ0FnWVhKeUxuTjFZbUZ5Y21GNUtERXNJREVwTG1KNWRHVk1aVzVuZEdnZ1BUMDlJREFnTHk4Z2FXVXhNQ0JvWVhNZ1luSnZhMlZ1SUdCemRXSmhjbkpoZVdCY2JpQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHdE5ZWGhNWlc1bmRHZ2dLQ2tnZTF4dUlDQnlaWFIxY200Z1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxSY2JpQWdJQ0EvSURCNE4yWm1abVptWm1aY2JpQWdJQ0E2SURCNE0yWm1abVptWm1aY2JuMWNibHh1Wm5WdVkzUnBiMjRnWTNKbFlYUmxRblZtWm1WeUlDaDBhR0YwTENCc1pXNW5kR2dwSUh0Y2JpQWdhV1lnS0d0TllYaE1aVzVuZEdnb0tTQThJR3hsYm1kMGFDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RKYm5aaGJHbGtJSFI1Y0dWa0lHRnljbUY1SUd4bGJtZDBhQ2NwWEc0Z0lIMWNiaUFnYVdZZ0tFSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUtTQjdYRzRnSUNBZ0x5OGdVbVYwZFhKdUlHRnVJR0YxWjIxbGJuUmxaQ0JnVldsdWREaEJjbkpoZVdBZ2FXNXpkR0Z1WTJVc0lHWnZjaUJpWlhOMElIQmxjbVp2Y20xaGJtTmxYRzRnSUNBZ2RHaGhkQ0E5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR3hsYm1kMGFDbGNiaUFnSUNCMGFHRjBMbDlmY0hKdmRHOWZYeUE5SUVKMVptWmxjaTV3Y205MGIzUjVjR1ZjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0F2THlCR1lXeHNZbUZqYXpvZ1VtVjBkWEp1SUdGdUlHOWlhbVZqZENCcGJuTjBZVzVqWlNCdlppQjBhR1VnUW5WbVptVnlJR05zWVhOelhHNGdJQ0FnYVdZZ0tIUm9ZWFFnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhSb1lYUWdQU0J1WlhjZ1FuVm1abVZ5S0d4bGJtZDBhQ2xjYmlBZ0lDQjlYRzRnSUNBZ2RHaGhkQzVzWlc1bmRHZ2dQU0JzWlc1bmRHaGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjBhR0YwWEc1OVhHNWNiaThxS2x4dUlDb2dWR2hsSUVKMVptWmxjaUJqYjI1emRISjFZM1J2Y2lCeVpYUjFjbTV6SUdsdWMzUmhibU5sY3lCdlppQmdWV2x1ZERoQmNuSmhlV0FnZEdoaGRDQm9ZWFpsSUhSb1pXbHlYRzRnS2lCd2NtOTBiM1I1Y0dVZ1kyaGhibWRsWkNCMGJ5QmdRblZtWm1WeUxuQnliM1J2ZEhsd1pXQXVJRVoxY25Sb1pYSnRiM0psTENCZ1FuVm1abVZ5WUNCcGN5QmhJSE4xWW1Oc1lYTnpJRzltWEc0Z0tpQmdWV2x1ZERoQmNuSmhlV0FzSUhOdklIUm9aU0J5WlhSMWNtNWxaQ0JwYm5OMFlXNWpaWE1nZDJsc2JDQm9ZWFpsSUdGc2JDQjBhR1VnYm05a1pTQmdRblZtWm1WeVlDQnRaWFJvYjJSelhHNGdLaUJoYm1RZ2RHaGxJR0JWYVc1ME9FRnljbUY1WUNCdFpYUm9iMlJ6TGlCVGNYVmhjbVVnWW5KaFkydGxkQ0J1YjNSaGRHbHZiaUIzYjNKcmN5QmhjeUJsZUhCbFkzUmxaQ0F0TFNCcGRGeHVJQ29nY21WMGRYSnVjeUJoSUhOcGJtZHNaU0J2WTNSbGRDNWNiaUFxWEc0Z0tpQlVhR1VnWUZWcGJuUTRRWEp5WVhsZ0lIQnliM1J2ZEhsd1pTQnlaVzFoYVc1eklIVnViVzlrYVdacFpXUXVYRzRnS2k5Y2JseHVablZ1WTNScGIyNGdRblZtWm1WeUlDaGhjbWNzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnBaaUFvSVVKMVptWmxjaTVVV1ZCRlJGOUJVbEpCV1Y5VFZWQlFUMUpVSUNZbUlDRW9kR2hwY3lCcGJuTjBZVzVqWlc5bUlFSjFabVpsY2lrcElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lFSjFabVpsY2loaGNtY3NJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDbGNiaUFnZlZ4dVhHNGdJQzh2SUVOdmJXMXZiaUJqWVhObExseHVJQ0JwWmlBb2RIbHdaVzltSUdGeVp5QTlQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdWdVkyOWthVzVuVDNKUFptWnpaWFFnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hHNGdJQ0FnSUNBZ0lDZEpaaUJsYm1OdlpHbHVaeUJwY3lCemNHVmphV1pwWldRZ2RHaGxiaUIwYUdVZ1ptbHljM1FnWVhKbmRXMWxiblFnYlhWemRDQmlaU0JoSUhOMGNtbHVaeWRjYmlBZ0lDQWdJQ2xjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdGc2JHOWpWVzV6WVdabEtIUm9hWE1zSUdGeVp5bGNiaUFnZlZ4dUlDQnlaWFIxY200Z1puSnZiU2gwYUdsekxDQmhjbWNzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2xjYm4xY2JseHVRblZtWm1WeUxuQnZiMnhUYVhwbElEMGdPREU1TWlBdkx5QnViM1FnZFhObFpDQmllU0IwYUdseklHbHRjR3hsYldWdWRHRjBhVzl1WEc1Y2JpOHZJRlJQUkU4NklFeGxaMkZqZVN3Z2JtOTBJRzVsWldSbFpDQmhibmx0YjNKbExpQlNaVzF2ZG1VZ2FXNGdibVY0ZENCdFlXcHZjaUIyWlhKemFXOXVMbHh1UW5WbVptVnlMbDloZFdkdFpXNTBJRDBnWm5WdVkzUnBiMjRnS0dGeWNpa2dlMXh1SUNCaGNuSXVYMTl3Y205MGIxOWZJRDBnUW5WbVptVnlMbkJ5YjNSdmRIbHdaVnh1SUNCeVpYUjFjbTRnWVhKeVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdaeWIyMGdLSFJvWVhRc0lIWmhiSFZsTENCbGJtTnZaR2x1WjA5eVQyWm1jMlYwTENCc1pXNW5kR2dwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkY0luWmhiSFZsWENJZ1lYSm5kVzFsYm5RZ2JYVnpkQ0J1YjNRZ1ltVWdZU0J1ZFcxaVpYSW5LVnh1SUNCOVhHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCQmNuSmhlVUoxWm1abGNpQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkbUZzZFdVZ2FXNXpkR0Z1WTJWdlppQkJjbkpoZVVKMVptWmxjaWtnZTF4dUlDQWdJSEpsZEhWeWJpQm1jbTl0UVhKeVlYbENkV1ptWlhJb2RHaGhkQ3dnZG1Gc2RXVXNJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDbGNiaUFnZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1p5YjIxVGRISnBibWNvZEdoaGRDd2dkbUZzZFdVc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRcFhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1puSnZiVTlpYW1WamRDaDBhR0YwTENCMllXeDFaU2xjYm4xY2JseHVMeW9xWEc0Z0tpQkdkVzVqZEdsdmJtRnNiSGtnWlhGMWFYWmhiR1Z1ZENCMGJ5QkNkV1ptWlhJb1lYSm5MQ0JsYm1OdlpHbHVaeWtnWW5WMElIUm9jbTkzY3lCaElGUjVjR1ZGY25KdmNseHVJQ29nYVdZZ2RtRnNkV1VnYVhNZ1lTQnVkVzFpWlhJdVhHNGdLaUJDZFdabVpYSXVabkp2YlNoemRISmJMQ0JsYm1OdlpHbHVaMTBwWEc0Z0tpQkNkV1ptWlhJdVpuSnZiU2hoY25KaGVTbGNiaUFxSUVKMVptWmxjaTVtY205dEtHSjFabVpsY2lsY2JpQXFJRUoxWm1abGNpNW1jbTl0S0dGeWNtRjVRblZtWm1WeVd5d2dZbmwwWlU5bVpuTmxkRnNzSUd4bGJtZDBhRjFkS1Z4dUlDb3FMMXh1UW5WbVptVnlMbVp5YjIwZ1BTQm1kVzVqZEdsdmJpQW9kbUZzZFdVc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0J5WlhSMWNtNGdabkp2YlNodWRXeHNMQ0IyWVd4MVpTd2daVzVqYjJScGJtZFBjazltWm5ObGRDd2diR1Z1WjNSb0tWeHVmVnh1WEc1cFppQW9RblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUXBJSHRjYmlBZ1FuVm1abVZ5TG5CeWIzUnZkSGx3WlM1ZlgzQnliM1J2WDE4Z1BTQlZhVzUwT0VGeWNtRjVMbkJ5YjNSdmRIbHdaVnh1SUNCQ2RXWm1aWEl1WDE5d2NtOTBiMTlmSUQwZ1ZXbHVkRGhCY25KaGVWeHVJQ0JwWmlBb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMbk53WldOcFpYTWdKaVpjYmlBZ0lDQWdJRUoxWm1abGNsdFRlVzFpYjJ3dWMzQmxZMmxsYzEwZ1BUMDlJRUoxWm1abGNpa2dlMXh1SUNBZ0lDOHZJRVpwZUNCemRXSmhjbkpoZVNncElHbHVJRVZUTWpBeE5pNGdVMlZsT2lCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlptVnliM056TDJKMVptWmxjaTl3ZFd4c0x6azNYRzRnSUNBZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRUoxWm1abGNpd2dVM2x0WW05c0xuTndaV05wWlhNc0lIdGNiaUFnSUNBZ0lIWmhiSFZsT2lCdWRXeHNMRnh1SUNBZ0lDQWdZMjl1Wm1sbmRYSmhZbXhsT2lCMGNuVmxYRzRnSUNBZ2ZTbGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJoYzNObGNuUlRhWHBsSUNoemFYcGxLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdjMmw2WlNBaFBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RjSW5OcGVtVmNJaUJoY21kMWJXVnVkQ0J0ZFhOMElHSmxJR0VnYm5WdFltVnlKeWxjYmlBZ2ZTQmxiSE5sSUdsbUlDaHphWHBsSUR3Z01Da2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RjSW5OcGVtVmNJaUJoY21kMWJXVnVkQ0J0ZFhOMElHNXZkQ0JpWlNCdVpXZGhkR2wyWlNjcFhHNGdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdZV3hzYjJNZ0tIUm9ZWFFzSUhOcGVtVXNJR1pwYkd3c0lHVnVZMjlrYVc1bktTQjdYRzRnSUdGemMyVnlkRk5wZW1Vb2MybDZaU2xjYmlBZ2FXWWdLSE5wZW1VZ1BEMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmpjbVZoZEdWQ2RXWm1aWElvZEdoaGRDd2djMmw2WlNsY2JpQWdmVnh1SUNCcFppQW9abWxzYkNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdMeThnVDI1c2VTQndZWGtnWVhSMFpXNTBhVzl1SUhSdklHVnVZMjlrYVc1bklHbG1JR2wwSjNNZ1lTQnpkSEpwYm1jdUlGUm9hWE5jYmlBZ0lDQXZMeUJ3Y21WMlpXNTBjeUJoWTJOcFpHVnVkR0ZzYkhrZ2MyVnVaR2x1WnlCcGJpQmhJRzUxYldKbGNpQjBhR0YwSUhkdmRXeGtYRzRnSUNBZ0x5OGdZbVVnYVc1MFpYSndjbVYwZEdWa0lHRnpJR0VnYzNSaGNuUWdiMlptYzJWMExseHVJQ0FnSUhKbGRIVnliaUIwZVhCbGIyWWdaVzVqYjJScGJtY2dQVDA5SUNkemRISnBibWNuWEc0Z0lDQWdJQ0EvSUdOeVpXRjBaVUoxWm1abGNpaDBhR0YwTENCemFYcGxLUzVtYVd4c0tHWnBiR3dzSUdWdVkyOWthVzVuS1Z4dUlDQWdJQ0FnT2lCamNtVmhkR1ZDZFdabVpYSW9kR2hoZEN3Z2MybDZaU2t1Wm1sc2JDaG1hV3hzS1Z4dUlDQjlYRzRnSUhKbGRIVnliaUJqY21WaGRHVkNkV1ptWlhJb2RHaGhkQ3dnYzJsNlpTbGNibjFjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1Z6SUdFZ2JtVjNJR1pwYkd4bFpDQkNkV1ptWlhJZ2FXNXpkR0Z1WTJVdVhHNGdLaUJoYkd4dll5aHphWHBsV3l3Z1ptbHNiRnNzSUdWdVkyOWthVzVuWFYwcFhHNGdLaW92WEc1Q2RXWm1aWEl1WVd4c2IyTWdQU0JtZFc1amRHbHZiaUFvYzJsNlpTd2dabWxzYkN3Z1pXNWpiMlJwYm1jcElIdGNiaUFnY21WMGRYSnVJR0ZzYkc5aktHNTFiR3dzSUhOcGVtVXNJR1pwYkd3c0lHVnVZMjlrYVc1bktWeHVmVnh1WEc1bWRXNWpkR2x2YmlCaGJHeHZZMVZ1YzJGbVpTQW9kR2hoZEN3Z2MybDZaU2tnZTF4dUlDQmhjM05sY25SVGFYcGxLSE5wZW1VcFhHNGdJSFJvWVhRZ1BTQmpjbVZoZEdWQ2RXWm1aWElvZEdoaGRDd2djMmw2WlNBOElEQWdQeUF3SURvZ1kyaGxZMnRsWkNoemFYcGxLU0I4SURBcFhHNGdJR2xtSUNnaFFuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITnBlbVU3SUNzcmFTa2dlMXh1SUNBZ0lDQWdkR2hoZEZ0cFhTQTlJREJjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlIUm9ZWFJjYm4xY2JseHVMeW9xWEc0Z0tpQkZjWFZwZG1Gc1pXNTBJSFJ2SUVKMVptWmxjaWh1ZFcwcExDQmllU0JrWldaaGRXeDBJR055WldGMFpYTWdZU0J1YjI0dGVtVnlieTFtYVd4c1pXUWdRblZtWm1WeUlHbHVjM1JoYm1ObExseHVJQ29nS2k5Y2JrSjFabVpsY2k1aGJHeHZZMVZ1YzJGbVpTQTlJR1oxYm1OMGFXOXVJQ2h6YVhwbEtTQjdYRzRnSUhKbGRIVnliaUJoYkd4dlkxVnVjMkZtWlNodWRXeHNMQ0J6YVhwbEtWeHVmVnh1THlvcVhHNGdLaUJGY1hWcGRtRnNaVzUwSUhSdklGTnNiM2RDZFdabVpYSW9iblZ0S1N3Z1lua2daR1ZtWVhWc2RDQmpjbVZoZEdWeklHRWdibTl1TFhwbGNtOHRabWxzYkdWa0lFSjFabVpsY2lCcGJuTjBZVzVqWlM1Y2JpQXFMMXh1UW5WbVptVnlMbUZzYkc5alZXNXpZV1psVTJ4dmR5QTlJR1oxYm1OMGFXOXVJQ2h6YVhwbEtTQjdYRzRnSUhKbGRIVnliaUJoYkd4dlkxVnVjMkZtWlNodWRXeHNMQ0J6YVhwbEtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCbWNtOXRVM1J5YVc1bklDaDBhR0YwTENCemRISnBibWNzSUdWdVkyOWthVzVuS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnWlc1amIyUnBibWNnSVQwOUlDZHpkSEpwYm1jbklIeDhJR1Z1WTI5a2FXNW5JRDA5UFNBbkp5a2dlMXh1SUNBZ0lHVnVZMjlrYVc1bklEMGdKM1YwWmpnblhHNGdJSDFjYmx4dUlDQnBaaUFvSVVKMVptWmxjaTVwYzBWdVkyOWthVzVuS0dWdVkyOWthVzVuS1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oxd2laVzVqYjJScGJtZGNJaUJ0ZFhOMElHSmxJR0VnZG1Gc2FXUWdjM1J5YVc1bklHVnVZMjlrYVc1bkp5bGNiaUFnZlZ4dVhHNGdJSFpoY2lCc1pXNW5kR2dnUFNCaWVYUmxUR1Z1WjNSb0tITjBjbWx1Wnl3Z1pXNWpiMlJwYm1jcElId2dNRnh1SUNCMGFHRjBJRDBnWTNKbFlYUmxRblZtWm1WeUtIUm9ZWFFzSUd4bGJtZDBhQ2xjYmx4dUlDQjJZWElnWVdOMGRXRnNJRDBnZEdoaGRDNTNjbWwwWlNoemRISnBibWNzSUdWdVkyOWthVzVuS1Z4dVhHNGdJR2xtSUNoaFkzUjFZV3dnSVQwOUlHeGxibWQwYUNrZ2UxeHVJQ0FnSUM4dklGZHlhWFJwYm1jZ1lTQm9aWGdnYzNSeWFXNW5MQ0JtYjNJZ1pYaGhiWEJzWlN3Z2RHaGhkQ0JqYjI1MFlXbHVjeUJwYm5aaGJHbGtJR05vWVhKaFkzUmxjbk1nZDJsc2JGeHVJQ0FnSUM4dklHTmhkWE5sSUdWMlpYSjVkR2hwYm1jZ1lXWjBaWElnZEdobElHWnBjbk4wSUdsdWRtRnNhV1FnWTJoaGNtRmpkR1Z5SUhSdklHSmxJR2xuYm05eVpXUXVJQ2hsTG1jdVhHNGdJQ0FnTHk4Z0oyRmllSGhqWkNjZ2QybHNiQ0JpWlNCMGNtVmhkR1ZrSUdGeklDZGhZaWNwWEc0Z0lDQWdkR2hoZENBOUlIUm9ZWFF1YzJ4cFkyVW9NQ3dnWVdOMGRXRnNLVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFJvWVhSY2JuMWNibHh1Wm5WdVkzUnBiMjRnWm5KdmJVRnljbUY1VEdsclpTQW9kR2hoZEN3Z1lYSnlZWGtwSUh0Y2JpQWdkbUZ5SUd4bGJtZDBhQ0E5SUdGeWNtRjVMbXhsYm1kMGFDQThJREFnUHlBd0lEb2dZMmhsWTJ0bFpDaGhjbkpoZVM1c1pXNW5kR2dwSUh3Z01GeHVJQ0IwYUdGMElEMGdZM0psWVhSbFFuVm1abVZ5S0hSb1lYUXNJR3hsYm1kMGFDbGNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2c3SUdrZ0t6MGdNU2tnZTF4dUlDQWdJSFJvWVhSYmFWMGdQU0JoY25KaGVWdHBYU0FtSURJMU5WeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCMGFHRjBYRzU5WEc1Y2JtWjFibU4wYVc5dUlHWnliMjFCY25KaGVVSjFabVpsY2lBb2RHaGhkQ3dnWVhKeVlYa3NJR0o1ZEdWUFptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQmhjbkpoZVM1aWVYUmxUR1Z1WjNSb0lDOHZJSFJvYVhNZ2RHaHliM2R6SUdsbUlHQmhjbkpoZVdBZ2FYTWdibTkwSUdFZ2RtRnNhV1FnUVhKeVlYbENkV1ptWlhKY2JseHVJQ0JwWmlBb1lubDBaVTltWm5ObGRDQThJREFnZkh3Z1lYSnlZWGt1WW5sMFpVeGxibWQwYUNBOElHSjVkR1ZQWm1aelpYUXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduWEZ3bmIyWm1jMlYwWEZ3bklHbHpJRzkxZENCdlppQmliM1Z1WkhNbktWeHVJQ0I5WEc1Y2JpQWdhV1lnS0dGeWNtRjVMbUo1ZEdWTVpXNW5kR2dnUENCaWVYUmxUMlptYzJWMElDc2dLR3hsYm1kMGFDQjhmQ0F3S1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZGNYQ2RzWlc1bmRHaGNYQ2NnYVhNZ2IzVjBJRzltSUdKdmRXNWtjeWNwWEc0Z0lIMWNibHh1SUNCcFppQW9ZbmwwWlU5bVpuTmxkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lDWW1JR3hsYm1kMGFDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnWVhKeVlYa2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGhjbkpoZVNsY2JpQWdmU0JsYkhObElHbG1JQ2hzWlc1bmRHZ2dQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUdGeWNtRjVJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29ZWEp5WVhrc0lHSjVkR1ZQWm1aelpYUXBYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdZWEp5WVhrZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNoaGNuSmhlU3dnWW5sMFpVOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLRUoxWm1abGNpNVVXVkJGUkY5QlVsSkJXVjlUVlZCUVQxSlVLU0I3WEc0Z0lDQWdMeThnVW1WMGRYSnVJR0Z1SUdGMVoyMWxiblJsWkNCZ1ZXbHVkRGhCY25KaGVXQWdhVzV6ZEdGdVkyVXNJR1p2Y2lCaVpYTjBJSEJsY21admNtMWhibU5sWEc0Z0lDQWdkR2hoZENBOUlHRnljbUY1WEc0Z0lDQWdkR2hoZEM1ZlgzQnliM1J2WDE4Z1BTQkNkV1ptWlhJdWNISnZkRzkwZVhCbFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ0x5OGdSbUZzYkdKaFkyczZJRkpsZEhWeWJpQmhiaUJ2WW1wbFkzUWdhVzV6ZEdGdVkyVWdiMllnZEdobElFSjFabVpsY2lCamJHRnpjMXh1SUNBZ0lIUm9ZWFFnUFNCbWNtOXRRWEp5WVhsTWFXdGxLSFJvWVhRc0lHRnljbUY1S1Z4dUlDQjlYRzRnSUhKbGRIVnliaUIwYUdGMFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdaeWIyMVBZbXBsWTNRZ0tIUm9ZWFFzSUc5aWFpa2dlMXh1SUNCcFppQW9RblZtWm1WeUxtbHpRblZtWm1WeUtHOWlhaWtwSUh0Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnWTJobFkydGxaQ2h2WW1vdWJHVnVaM1JvS1NCOElEQmNiaUFnSUNCMGFHRjBJRDBnWTNKbFlYUmxRblZtWm1WeUtIUm9ZWFFzSUd4bGJpbGNibHh1SUNBZ0lHbG1JQ2gwYUdGMExteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvWVhSY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2WW1vdVkyOXdlU2gwYUdGMExDQXdMQ0F3TENCc1pXNHBYRzRnSUNBZ2NtVjBkWEp1SUhSb1lYUmNiaUFnZlZ4dVhHNGdJR2xtSUNodlltb3BJSHRjYmlBZ0lDQnBaaUFvS0hSNWNHVnZaaUJCY25KaGVVSjFabVpsY2lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlaY2JpQWdJQ0FnSUNBZ2IySnFMbUoxWm1abGNpQnBibk4wWVc1alpXOW1JRUZ5Y21GNVFuVm1abVZ5S1NCOGZDQW5iR1Z1WjNSb0p5QnBiaUJ2WW1vcElIdGNiaUFnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdiMkpxTG14bGJtZDBhQ0FoUFQwZ0oyNTFiV0psY2ljZ2ZId2dhWE51WVc0b2IySnFMbXhsYm1kMGFDa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR055WldGMFpVSjFabVpsY2loMGFHRjBMQ0F3S1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJR1p5YjIxQmNuSmhlVXhwYTJVb2RHaGhkQ3dnYjJKcUtWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHZZbW91ZEhsd1pTQTlQVDBnSjBKMVptWmxjaWNnSmlZZ2FYTkJjbkpoZVNodlltb3VaR0YwWVNrcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbWNtOXRRWEp5WVhsTWFXdGxLSFJvWVhRc0lHOWlhaTVrWVhSaEtWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMFpwY25OMElHRnlaM1Z0Wlc1MElHMTFjM1FnWW1VZ1lTQnpkSEpwYm1jc0lFSjFabVpsY2l3Z1FYSnlZWGxDZFdabVpYSXNJRUZ5Y21GNUxDQnZjaUJoY25KaGVTMXNhV3RsSUc5aWFtVmpkQzRuS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJqYUdWamEyVmtJQ2hzWlc1bmRHZ3BJSHRjYmlBZ0x5OGdUbTkwWlRvZ1kyRnVibTkwSUhWelpTQmdiR1Z1WjNSb0lEd2dhMDFoZUV4bGJtZDBhQ2dwWUNCb1pYSmxJR0psWTJGMWMyVWdkR2hoZENCbVlXbHNjeUIzYUdWdVhHNGdJQzh2SUd4bGJtZDBhQ0JwY3lCT1lVNGdLSGRvYVdOb0lHbHpJRzkwYUdWeWQybHpaU0JqYjJWeVkyVmtJSFJ2SUhwbGNtOHVLVnh1SUNCcFppQW9iR1Z1WjNSb0lENDlJR3ROWVhoTVpXNW5kR2dvS1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEJkSFJsYlhCMElIUnZJR0ZzYkc5allYUmxJRUoxWm1abGNpQnNZWEpuWlhJZ2RHaGhiaUJ0WVhocGJYVnRJQ2NnSzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNkemFYcGxPaUF3ZUNjZ0t5QnJUV0Y0VEdWdVozUm9LQ2t1ZEc5VGRISnBibWNvTVRZcElDc2dKeUJpZVhSbGN5Y3BYRzRnSUgxY2JpQWdjbVYwZFhKdUlHeGxibWQwYUNCOElEQmNibjFjYmx4dVpuVnVZM1JwYjI0Z1UyeHZkMEoxWm1abGNpQW9iR1Z1WjNSb0tTQjdYRzRnSUdsbUlDZ3JiR1Z1WjNSb0lDRTlJR3hsYm1kMGFDa2dleUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHVnhaWEZsY1Z4dUlDQWdJR3hsYm1kMGFDQTlJREJjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdRblZtWm1WeUxtRnNiRzlqS0N0c1pXNW5kR2dwWEc1OVhHNWNia0oxWm1abGNpNXBjMEoxWm1abGNpQTlJR1oxYm1OMGFXOXVJR2x6UW5WbVptVnlJQ2hpS1NCN1hHNGdJSEpsZEhWeWJpQWhJU2hpSUNFOUlHNTFiR3dnSmlZZ1lpNWZhWE5DZFdabVpYSXBYRzU5WEc1Y2JrSjFabVpsY2k1amIyMXdZWEpsSUQwZ1puVnVZM1JwYjI0Z1kyOXRjR0Z5WlNBb1lTd2dZaWtnZTF4dUlDQnBaaUFvSVVKMVptWmxjaTVwYzBKMVptWmxjaWhoS1NCOGZDQWhRblZtWm1WeUxtbHpRblZtWm1WeUtHSXBLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduUVhKbmRXMWxiblJ6SUcxMWMzUWdZbVVnUW5WbVptVnljeWNwWEc0Z0lIMWNibHh1SUNCcFppQW9ZU0E5UFQwZ1lpa2djbVYwZFhKdUlEQmNibHh1SUNCMllYSWdlQ0E5SUdFdWJHVnVaM1JvWEc0Z0lIWmhjaUI1SUQwZ1lpNXNaVzVuZEdoY2JseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Dd2diR1Z1SUQwZ1RXRjBhQzV0YVc0b2VDd2dlU2s3SUdrZ1BDQnNaVzQ3SUNzcmFTa2dlMXh1SUNBZ0lHbG1JQ2hoVzJsZElDRTlQU0JpVzJsZEtTQjdYRzRnSUNBZ0lDQjRJRDBnWVZ0cFhWeHVJQ0FnSUNBZ2VTQTlJR0piYVYxY2JpQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhV1lnS0hnZ1BDQjVLU0J5WlhSMWNtNGdMVEZjYmlBZ2FXWWdLSGtnUENCNEtTQnlaWFIxY200Z01WeHVJQ0J5WlhSMWNtNGdNRnh1ZlZ4dVhHNUNkV1ptWlhJdWFYTkZibU52WkdsdVp5QTlJR1oxYm1OMGFXOXVJR2x6Ulc1amIyUnBibWNnS0dWdVkyOWthVzVuS1NCN1hHNGdJSE4zYVhSamFDQW9VM1J5YVc1bktHVnVZMjlrYVc1bktTNTBiMHh2ZDJWeVEyRnpaU2dwS1NCN1hHNGdJQ0FnWTJGelpTQW5hR1Y0SnpwY2JpQWdJQ0JqWVhObElDZDFkR1k0SnpwY2JpQWdJQ0JqWVhObElDZDFkR1l0T0NjNlhHNGdJQ0FnWTJGelpTQW5ZWE5qYVdrbk9seHVJQ0FnSUdOaGMyVWdKMnhoZEdsdU1TYzZYRzRnSUNBZ1kyRnpaU0FuWW1sdVlYSjVKenBjYmlBZ0lDQmpZWE5sSUNkaVlYTmxOalFuT2x4dUlDQWdJR05oYzJVZ0ozVmpjekluT2x4dUlDQWdJR05oYzJVZ0ozVmpjeTB5SnpwY2JpQWdJQ0JqWVhObElDZDFkR1l4Tm14bEp6cGNiaUFnSUNCallYTmxJQ2QxZEdZdE1UWnNaU2M2WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlZ4dUlDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ2ZWeHVmVnh1WEc1Q2RXWm1aWEl1WTI5dVkyRjBJRDBnWm5WdVkzUnBiMjRnWTI5dVkyRjBJQ2hzYVhOMExDQnNaVzVuZEdncElIdGNiaUFnYVdZZ0tDRnBjMEZ5Y21GNUtHeHBjM1FwS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblhDSnNhWE4wWENJZ1lYSm5kVzFsYm5RZ2JYVnpkQ0JpWlNCaGJpQkJjbkpoZVNCdlppQkNkV1ptWlhKekp5bGNiaUFnZlZ4dVhHNGdJR2xtSUNoc2FYTjBMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJDZFdabVpYSXVZV3hzYjJNb01DbGNiaUFnZlZ4dVhHNGdJSFpoY2lCcFhHNGdJR2xtSUNoc1pXNW5kR2dnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lHeGxibWQwYUNBOUlEQmNiaUFnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYkdsemRDNXNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJQ0FnYkdWdVozUm9JQ3M5SUd4cGMzUmJhVjB1YkdWdVozUm9YRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkbUZ5SUdKMVptWmxjaUE5SUVKMVptWmxjaTVoYkd4dlkxVnVjMkZtWlNoc1pXNW5kR2dwWEc0Z0lIWmhjaUJ3YjNNZ1BTQXdYRzRnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0JzYVhOMExteGxibWQwYURzZ0t5dHBLU0I3WEc0Z0lDQWdkbUZ5SUdKMVppQTlJR3hwYzNSYmFWMWNiaUFnSUNCcFppQW9JVUoxWm1abGNpNXBjMEoxWm1abGNpaGlkV1lwS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZGNJbXhwYzNSY0lpQmhjbWQxYldWdWRDQnRkWE4wSUdKbElHRnVJRUZ5Y21GNUlHOW1JRUoxWm1abGNuTW5LVnh1SUNBZ0lIMWNiaUFnSUNCaWRXWXVZMjl3ZVNoaWRXWm1aWElzSUhCdmN5bGNiaUFnSUNCd2IzTWdLejBnWW5WbUxteGxibWQwYUZ4dUlDQjlYRzRnSUhKbGRIVnliaUJpZFdabVpYSmNibjFjYmx4dVpuVnVZM1JwYjI0Z1lubDBaVXhsYm1kMGFDQW9jM1J5YVc1bkxDQmxibU52WkdsdVp5a2dlMXh1SUNCcFppQW9RblZtWm1WeUxtbHpRblZtWm1WeUtITjBjbWx1WnlrcElIdGNiaUFnSUNCeVpYUjFjbTRnYzNSeWFXNW5MbXhsYm1kMGFGeHVJQ0I5WEc0Z0lHbG1JQ2gwZVhCbGIyWWdRWEp5WVhsQ2RXWm1aWElnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhSNWNHVnZaaUJCY25KaGVVSjFabVpsY2k1cGMxWnBaWGNnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVpjYmlBZ0lDQWdJQ2hCY25KaGVVSjFabVpsY2k1cGMxWnBaWGNvYzNSeWFXNW5LU0I4ZkNCemRISnBibWNnYVc1emRHRnVZMlZ2WmlCQmNuSmhlVUoxWm1abGNpa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2MzUnlhVzVuTG1KNWRHVk1aVzVuZEdoY2JpQWdmVnh1SUNCcFppQW9kSGx3Wlc5bUlITjBjbWx1WnlBaFBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQnpkSEpwYm1jZ1BTQW5KeUFySUhOMGNtbHVaMXh1SUNCOVhHNWNiaUFnZG1GeUlHeGxiaUE5SUhOMGNtbHVaeTVzWlc1bmRHaGNiaUFnYVdZZ0tHeGxiaUE5UFQwZ01Da2djbVYwZFhKdUlEQmNibHh1SUNBdkx5QlZjMlVnWVNCbWIzSWdiRzl2Y0NCMGJ5QmhkbTlwWkNCeVpXTjFjbk5wYjI1Y2JpQWdkbUZ5SUd4dmQyVnlaV1JEWVhObElEMGdabUZzYzJWY2JpQWdabTl5SUNnN095a2dlMXh1SUNBZ0lITjNhWFJqYUNBb1pXNWpiMlJwYm1jcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJGelkybHBKenBjYmlBZ0lDQWdJR05oYzJVZ0oyeGhkR2x1TVNjNlhHNGdJQ0FnSUNCallYTmxJQ2RpYVc1aGNua25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR1Z1WEc0Z0lDQWdJQ0JqWVhObElDZDFkR1k0SnpwY2JpQWdJQ0FnSUdOaGMyVWdKM1YwWmkwNEp6cGNiaUFnSUNBZ0lHTmhjMlVnZFc1a1pXWnBibVZrT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZFhSbU9GUnZRbmwwWlhNb2MzUnlhVzVuS1M1c1pXNW5kR2hjYmlBZ0lDQWdJR05oYzJVZ0ozVmpjekluT2x4dUlDQWdJQ0FnWTJGelpTQW5kV056TFRJbk9seHVJQ0FnSUNBZ1kyRnpaU0FuZFhSbU1UWnNaU2M2WEc0Z0lDQWdJQ0JqWVhObElDZDFkR1l0TVRac1pTYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnNaVzRnS2lBeVhHNGdJQ0FnSUNCallYTmxJQ2RvWlhnbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JHVnVJRDQrUGlBeFhHNGdJQ0FnSUNCallYTmxJQ2RpWVhObE5qUW5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZbUZ6WlRZMFZHOUNlWFJsY3loemRISnBibWNwTG14bGJtZDBhRnh1SUNBZ0lDQWdaR1ZtWVhWc2REcGNiaUFnSUNBZ0lDQWdhV1lnS0d4dmQyVnlaV1JEWVhObEtTQnlaWFIxY200Z2RYUm1PRlJ2UW5sMFpYTW9jM1J5YVc1bktTNXNaVzVuZEdnZ0x5OGdZWE56ZFcxbElIVjBaamhjYmlBZ0lDQWdJQ0FnWlc1amIyUnBibWNnUFNBb0p5Y2dLeUJsYm1OdlpHbHVaeWt1ZEc5TWIzZGxja05oYzJVb0tWeHVJQ0FnSUNBZ0lDQnNiM2RsY21Wa1EyRnpaU0E5SUhSeWRXVmNiaUFnSUNCOVhHNGdJSDFjYm4xY2JrSjFabVpsY2k1aWVYUmxUR1Z1WjNSb0lEMGdZbmwwWlV4bGJtZDBhRnh1WEc1bWRXNWpkR2x2YmlCemJHOTNWRzlUZEhKcGJtY2dLR1Z1WTI5a2FXNW5MQ0J6ZEdGeWRDd2daVzVrS1NCN1hHNGdJSFpoY2lCc2IzZGxjbVZrUTJGelpTQTlJR1poYkhObFhHNWNiaUFnTHk4Z1RtOGdibVZsWkNCMGJ5QjJaWEpwWm5rZ2RHaGhkQ0JjSW5Sb2FYTXViR1Z1WjNSb0lEdzlJRTFCV0Y5VlNVNVVNekpjSWlCemFXNWpaU0JwZENkeklHRWdjbVZoWkMxdmJteDVYRzRnSUM4dklIQnliM0JsY25SNUlHOW1JR0VnZEhsd1pXUWdZWEp5WVhrdVhHNWNiaUFnTHk4Z1ZHaHBjeUJpWldoaGRtVnpJRzVsYVhSb1pYSWdiR2xyWlNCVGRISnBibWNnYm05eUlGVnBiblE0UVhKeVlYa2dhVzRnZEdoaGRDQjNaU0J6WlhRZ2MzUmhjblF2Wlc1a1hHNGdJQzh2SUhSdklIUm9aV2x5SUhWd2NHVnlMMnh2ZDJWeUlHSnZkVzVrY3lCcFppQjBhR1VnZG1Gc2RXVWdjR0Z6YzJWa0lHbHpJRzkxZENCdlppQnlZVzVuWlM1Y2JpQWdMeThnZFc1a1pXWnBibVZrSUdseklHaGhibVJzWldRZ2MzQmxZMmxoYkd4NUlHRnpJSEJsY2lCRlEwMUJMVEkyTWlBMmRHZ2dSV1JwZEdsdmJpeGNiaUFnTHk4Z1UyVmpkR2x2YmlBeE15NHpMak11TnlCU2RXNTBhVzFsSUZObGJXRnVkR2xqY3pvZ1MyVjVaV1JDYVc1a2FXNW5TVzVwZEdsaGJHbDZZWFJwYjI0dVhHNGdJR2xtSUNoemRHRnlkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJSE4wWVhKMElEd2dNQ2tnZTF4dUlDQWdJSE4wWVhKMElEMGdNRnh1SUNCOVhHNGdJQzh2SUZKbGRIVnliaUJsWVhKc2VTQnBaaUJ6ZEdGeWRDQStJSFJvYVhNdWJHVnVaM1JvTGlCRWIyNWxJR2hsY21VZ2RHOGdjSEpsZG1WdWRDQndiM1JsYm5ScFlXd2dkV2x1ZERNeVhHNGdJQzh2SUdOdlpYSmphVzl1SUdaaGFXd2dZbVZzYjNjdVhHNGdJR2xtSUNoemRHRnlkQ0ErSUhSb2FYTXViR1Z1WjNSb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNjblhHNGdJSDFjYmx4dUlDQnBaaUFvWlc1a0lEMDlQU0IxYm1SbFptbHVaV1FnZkh3Z1pXNWtJRDRnZEdocGN5NXNaVzVuZEdncElIdGNiaUFnSUNCbGJtUWdQU0IwYUdsekxteGxibWQwYUZ4dUlDQjlYRzVjYmlBZ2FXWWdLR1Z1WkNBOFBTQXdLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDY25YRzRnSUgxY2JseHVJQ0F2THlCR2IzSmpaU0JqYjJWeWMybHZiaUIwYnlCMWFXNTBNekl1SUZSb2FYTWdkMmxzYkNCaGJITnZJR052WlhKalpTQm1ZV3h6WlhrdlRtRk9JSFpoYkhWbGN5QjBieUF3TGx4dUlDQmxibVFnUGo0K1BTQXdYRzRnSUhOMFlYSjBJRDQrUGowZ01GeHVYRzRnSUdsbUlDaGxibVFnUEQwZ2MzUmhjblFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdKeWRjYmlBZ2ZWeHVYRzRnSUdsbUlDZ2haVzVqYjJScGJtY3BJR1Z1WTI5a2FXNW5JRDBnSjNWMFpqZ25YRzVjYmlBZ2QyaHBiR1VnS0hSeWRXVXBJSHRjYmlBZ0lDQnpkMmwwWTJnZ0tHVnVZMjlrYVc1bktTQjdYRzRnSUNBZ0lDQmpZWE5sSUNkb1pYZ25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdhR1Y0VTJ4cFkyVW9kR2hwY3l3Z2MzUmhjblFzSUdWdVpDbGNibHh1SUNBZ0lDQWdZMkZ6WlNBbmRYUm1PQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZDFkR1l0T0NjNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMWRHWTRVMnhwWTJVb2RHaHBjeXdnYzNSaGNuUXNJR1Z1WkNsY2JseHVJQ0FnSUNBZ1kyRnpaU0FuWVhOamFXa25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZWE5qYVdsVGJHbGpaU2gwYUdsekxDQnpkR0Z5ZEN3Z1pXNWtLVnh1WEc0Z0lDQWdJQ0JqWVhObElDZHNZWFJwYmpFbk9seHVJQ0FnSUNBZ1kyRnpaU0FuWW1sdVlYSjVKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR3hoZEdsdU1WTnNhV05sS0hSb2FYTXNJSE4wWVhKMExDQmxibVFwWEc1Y2JpQWdJQ0FnSUdOaGMyVWdKMkpoYzJVMk5DYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmlZWE5sTmpSVGJHbGpaU2gwYUdsekxDQnpkR0Z5ZEN3Z1pXNWtLVnh1WEc0Z0lDQWdJQ0JqWVhObElDZDFZM015SnpwY2JpQWdJQ0FnSUdOaGMyVWdKM1ZqY3kweUp6cGNiaUFnSUNBZ0lHTmhjMlVnSjNWMFpqRTJiR1VuT2x4dUlDQWdJQ0FnWTJGelpTQW5kWFJtTFRFMmJHVW5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkWFJtTVRac1pWTnNhV05sS0hSb2FYTXNJSE4wWVhKMExDQmxibVFwWEc1Y2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUdsbUlDaHNiM2RsY21Wa1EyRnpaU2tnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblZXNXJibTkzYmlCbGJtTnZaR2x1WnpvZ0p5QXJJR1Z1WTI5a2FXNW5LVnh1SUNBZ0lDQWdJQ0JsYm1OdlpHbHVaeUE5SUNobGJtTnZaR2x1WnlBcklDY25LUzUwYjB4dmQyVnlRMkZ6WlNncFhHNGdJQ0FnSUNBZ0lHeHZkMlZ5WldSRFlYTmxJRDBnZEhKMVpWeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNHZMeUJVYUdVZ2NISnZjR1Z5ZEhrZ2FYTWdkWE5sWkNCaWVTQmdRblZtWm1WeUxtbHpRblZtWm1WeVlDQmhibVFnWUdsekxXSjFabVpsY21BZ0tHbHVJRk5oWm1GeWFTQTFMVGNwSUhSdklHUmxkR1ZqZEZ4dUx5OGdRblZtWm1WeUlHbHVjM1JoYm1ObGN5NWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVYMmx6UW5WbVptVnlJRDBnZEhKMVpWeHVYRzVtZFc1amRHbHZiaUJ6ZDJGd0lDaGlMQ0J1TENCdEtTQjdYRzRnSUhaaGNpQnBJRDBnWWx0dVhWeHVJQ0JpVzI1ZElEMGdZbHR0WFZ4dUlDQmlXMjFkSUQwZ2FWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5OM1lYQXhOaUE5SUdaMWJtTjBhVzl1SUhOM1lYQXhOaUFvS1NCN1hHNGdJSFpoY2lCc1pXNGdQU0IwYUdsekxteGxibWQwYUZ4dUlDQnBaaUFvYkdWdUlDVWdNaUFoUFQwZ01Da2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RDZFdabVpYSWdjMmw2WlNCdGRYTjBJR0psSUdFZ2JYVnNkR2x3YkdVZ2IyWWdNVFl0WW1sMGN5Y3BYRzRnSUgxY2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc0N0lHa2dLejBnTWlrZ2UxeHVJQ0FnSUhOM1lYQW9kR2hwY3l3Z2FTd2dhU0FySURFcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUhSb2FYTmNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1emQyRndNeklnUFNCbWRXNWpkR2x2YmlCemQyRndNeklnS0NrZ2UxeHVJQ0IyWVhJZ2JHVnVJRDBnZEdocGN5NXNaVzVuZEdoY2JpQWdhV1lnS0d4bGJpQWxJRFFnSVQwOUlEQXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduUW5WbVptVnlJSE5wZW1VZ2JYVnpkQ0JpWlNCaElHMTFiSFJwY0d4bElHOW1JRE15TFdKcGRITW5LVnh1SUNCOVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdU95QnBJQ3M5SURRcElIdGNiaUFnSUNCemQyRndLSFJvYVhNc0lHa3NJR2tnS3lBektWeHVJQ0FnSUhOM1lYQW9kR2hwY3l3Z2FTQXJJREVzSUdrZ0t5QXlLVnh1SUNCOVhHNGdJSEpsZEhWeWJpQjBhR2x6WEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjM2RoY0RZMElEMGdablZ1WTNScGIyNGdjM2RoY0RZMElDZ3BJSHRjYmlBZ2RtRnlJR3hsYmlBOUlIUm9hWE11YkdWdVozUm9YRzRnSUdsbUlDaHNaVzRnSlNBNElDRTlQU0F3S1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owSjFabVpsY2lCemFYcGxJRzExYzNRZ1ltVWdZU0J0ZFd4MGFYQnNaU0J2WmlBMk5DMWlhWFJ6SnlsY2JpQWdmVnh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHeGxianNnYVNBclBTQTRLU0I3WEc0Z0lDQWdjM2RoY0NoMGFHbHpMQ0JwTENCcElDc2dOeWxjYmlBZ0lDQnpkMkZ3S0hSb2FYTXNJR2tnS3lBeExDQnBJQ3NnTmlsY2JpQWdJQ0J6ZDJGd0tIUm9hWE1zSUdrZ0t5QXlMQ0JwSUNzZ05TbGNiaUFnSUNCemQyRndLSFJvYVhNc0lHa2dLeUF6TENCcElDc2dOQ2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdkR2hwYzF4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5JRDBnWm5WdVkzUnBiMjRnZEc5VGRISnBibWNnS0NrZ2UxeHVJQ0IyWVhJZ2JHVnVaM1JvSUQwZ2RHaHBjeTVzWlc1bmRHZ2dmQ0F3WEc0Z0lHbG1JQ2hzWlc1bmRHZ2dQVDA5SURBcElISmxkSFZ5YmlBbkoxeHVJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBOVBUMGdNQ2tnY21WMGRYSnVJSFYwWmpoVGJHbGpaU2gwYUdsekxDQXdMQ0JzWlc1bmRHZ3BYRzRnSUhKbGRIVnliaUJ6Ykc5M1ZHOVRkSEpwYm1jdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExtVnhkV0ZzY3lBOUlHWjFibU4wYVc5dUlHVnhkV0ZzY3lBb1lpa2dlMXh1SUNCcFppQW9JVUoxWm1abGNpNXBjMEoxWm1abGNpaGlLU2tnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblFYSm5kVzFsYm5RZ2JYVnpkQ0JpWlNCaElFSjFabVpsY2ljcFhHNGdJR2xtSUNoMGFHbHpJRDA5UFNCaUtTQnlaWFIxY200Z2RISjFaVnh1SUNCeVpYUjFjbTRnUW5WbVptVnlMbU52YlhCaGNtVW9kR2hwY3l3Z1lpa2dQVDA5SURCY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzVwYm5Od1pXTjBJRDBnWm5WdVkzUnBiMjRnYVc1emNHVmpkQ0FvS1NCN1hHNGdJSFpoY2lCemRISWdQU0FuSjF4dUlDQjJZWElnYldGNElEMGdaWGh3YjNKMGN5NUpUbE5RUlVOVVgwMUJXRjlDV1ZSRlUxeHVJQ0JwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQaUF3S1NCN1hHNGdJQ0FnYzNSeUlEMGdkR2hwY3k1MGIxTjBjbWx1WnlnbmFHVjRKeXdnTUN3Z2JXRjRLUzV0WVhSamFDZ3ZMbnN5ZlM5bktTNXFiMmx1S0NjZ0p5bGNiaUFnSUNCcFppQW9kR2hwY3k1c1pXNW5kR2dnUGlCdFlYZ3BJSE4wY2lBclBTQW5JQzR1TGlBblhHNGdJSDFjYmlBZ2NtVjBkWEp1SUNjOFFuVm1abVZ5SUNjZ0t5QnpkSElnS3lBblBpZGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1amIyMXdZWEpsSUQwZ1puVnVZM1JwYjI0Z1kyOXRjR0Z5WlNBb2RHRnlaMlYwTENCemRHRnlkQ3dnWlc1a0xDQjBhR2x6VTNSaGNuUXNJSFJvYVhORmJtUXBJSHRjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVhWE5DZFdabVpYSW9kR0Z5WjJWMEtTa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMEZ5WjNWdFpXNTBJRzExYzNRZ1ltVWdZU0JDZFdabVpYSW5LVnh1SUNCOVhHNWNiaUFnYVdZZ0tITjBZWEowSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQnpkR0Z5ZENBOUlEQmNiaUFnZlZ4dUlDQnBaaUFvWlc1a0lEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0JsYm1RZ1BTQjBZWEpuWlhRZ1B5QjBZWEpuWlhRdWJHVnVaM1JvSURvZ01GeHVJQ0I5WEc0Z0lHbG1JQ2gwYUdselUzUmhjblFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lIUm9hWE5UZEdGeWRDQTlJREJjYmlBZ2ZWeHVJQ0JwWmlBb2RHaHBjMFZ1WkNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdkR2hwYzBWdVpDQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lIMWNibHh1SUNCcFppQW9jM1JoY25RZ1BDQXdJSHg4SUdWdVpDQStJSFJoY21kbGRDNXNaVzVuZEdnZ2ZId2dkR2hwYzFOMFlYSjBJRHdnTUNCOGZDQjBhR2x6Ulc1a0lENGdkR2hwY3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnbmIzVjBJRzltSUhKaGJtZGxJR2x1WkdWNEp5bGNiaUFnZlZ4dVhHNGdJR2xtSUNoMGFHbHpVM1JoY25RZ1BqMGdkR2hwYzBWdVpDQW1KaUJ6ZEdGeWRDQStQU0JsYm1RcElIdGNiaUFnSUNCeVpYUjFjbTRnTUZ4dUlDQjlYRzRnSUdsbUlDaDBhR2x6VTNSaGNuUWdQajBnZEdocGMwVnVaQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQXRNVnh1SUNCOVhHNGdJR2xtSUNoemRHRnlkQ0ErUFNCbGJtUXBJSHRjYmlBZ0lDQnlaWFIxY200Z01WeHVJQ0I5WEc1Y2JpQWdjM1JoY25RZ1BqNCtQU0F3WEc0Z0lHVnVaQ0ErUGo0OUlEQmNiaUFnZEdocGMxTjBZWEowSUQ0K1BqMGdNRnh1SUNCMGFHbHpSVzVrSUQ0K1BqMGdNRnh1WEc0Z0lHbG1JQ2gwYUdseklEMDlQU0IwWVhKblpYUXBJSEpsZEhWeWJpQXdYRzVjYmlBZ2RtRnlJSGdnUFNCMGFHbHpSVzVrSUMwZ2RHaHBjMU4wWVhKMFhHNGdJSFpoY2lCNUlEMGdaVzVrSUMwZ2MzUmhjblJjYmlBZ2RtRnlJR3hsYmlBOUlFMWhkR2d1YldsdUtIZ3NJSGtwWEc1Y2JpQWdkbUZ5SUhSb2FYTkRiM0I1SUQwZ2RHaHBjeTV6YkdsalpTaDBhR2x6VTNSaGNuUXNJSFJvYVhORmJtUXBYRzRnSUhaaGNpQjBZWEpuWlhSRGIzQjVJRDBnZEdGeVoyVjBMbk5zYVdObEtITjBZWEowTENCbGJtUXBYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUNzcmFTa2dlMXh1SUNBZ0lHbG1JQ2gwYUdselEyOXdlVnRwWFNBaFBUMGdkR0Z5WjJWMFEyOXdlVnRwWFNrZ2UxeHVJQ0FnSUNBZ2VDQTlJSFJvYVhORGIzQjVXMmxkWEc0Z0lDQWdJQ0I1SUQwZ2RHRnlaMlYwUTI5d2VWdHBYVnh1SUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9lQ0E4SUhrcElISmxkSFZ5YmlBdE1WeHVJQ0JwWmlBb2VTQThJSGdwSUhKbGRIVnliaUF4WEc0Z0lISmxkSFZ5YmlBd1hHNTlYRzVjYmk4dklFWnBibVJ6SUdWcGRHaGxjaUIwYUdVZ1ptbHljM1FnYVc1a1pYZ2diMllnWUhaaGJHQWdhVzRnWUdKMVptWmxjbUFnWVhRZ2IyWm1jMlYwSUQ0OUlHQmllWFJsVDJabWMyVjBZQ3hjYmk4dklFOVNJSFJvWlNCc1lYTjBJR2x1WkdWNElHOW1JR0IyWVd4Z0lHbHVJR0JpZFdabVpYSmdJR0YwSUc5bVpuTmxkQ0E4UFNCZ1lubDBaVTltWm5ObGRHQXVYRzR2TDF4dUx5OGdRWEpuZFcxbGJuUnpPbHh1THk4Z0xTQmlkV1ptWlhJZ0xTQmhJRUoxWm1abGNpQjBieUJ6WldGeVkyaGNiaTh2SUMwZ2RtRnNJQzBnWVNCemRISnBibWNzSUVKMVptWmxjaXdnYjNJZ2JuVnRZbVZ5WEc0dkx5QXRJR0o1ZEdWUFptWnpaWFFnTFNCaGJpQnBibVJsZUNCcGJuUnZJR0JpZFdabVpYSmdPeUIzYVd4c0lHSmxJR05zWVcxd1pXUWdkRzhnWVc0Z2FXNTBNekpjYmk4dklDMGdaVzVqYjJScGJtY2dMU0JoYmlCdmNIUnBiMjVoYkNCbGJtTnZaR2x1Wnl3Z2NtVnNaWFpoYm5RZ2FYTWdkbUZzSUdseklHRWdjM1J5YVc1blhHNHZMeUF0SUdScGNpQXRJSFJ5ZFdVZ1ptOXlJR2x1WkdWNFQyWXNJR1poYkhObElHWnZjaUJzWVhOMFNXNWtaWGhQWmx4dVpuVnVZM1JwYjI0Z1ltbGthWEpsWTNScGIyNWhiRWx1WkdWNFQyWWdLR0oxWm1abGNpd2dkbUZzTENCaWVYUmxUMlptYzJWMExDQmxibU52WkdsdVp5d2daR2x5S1NCN1hHNGdJQzh2SUVWdGNIUjVJR0oxWm1abGNpQnRaV0Z1Y3lCdWJ5QnRZWFJqYUZ4dUlDQnBaaUFvWW5WbVptVnlMbXhsYm1kMGFDQTlQVDBnTUNrZ2NtVjBkWEp1SUMweFhHNWNiaUFnTHk4Z1RtOXliV0ZzYVhwbElHSjVkR1ZQWm1aelpYUmNiaUFnYVdZZ0tIUjVjR1Z2WmlCaWVYUmxUMlptYzJWMElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJR1Z1WTI5a2FXNW5JRDBnWW5sMFpVOW1abk5sZEZ4dUlDQWdJR0o1ZEdWUFptWnpaWFFnUFNBd1hHNGdJSDBnWld4elpTQnBaaUFvWW5sMFpVOW1abk5sZENBK0lEQjROMlptWm1abVptWXBJSHRjYmlBZ0lDQmllWFJsVDJabWMyVjBJRDBnTUhnM1ptWm1abVptWmx4dUlDQjlJR1ZzYzJVZ2FXWWdLR0o1ZEdWUFptWnpaWFFnUENBdE1IZzRNREF3TURBd01Da2dlMXh1SUNBZ0lHSjVkR1ZQWm1aelpYUWdQU0F0TUhnNE1EQXdNREF3TUZ4dUlDQjlYRzRnSUdKNWRHVlBabVp6WlhRZ1BTQXJZbmwwWlU5bVpuTmxkQ0FnTHk4Z1EyOWxjbU5sSUhSdklFNTFiV0psY2k1Y2JpQWdhV1lnS0dselRtRk9LR0o1ZEdWUFptWnpaWFFwS1NCN1hHNGdJQ0FnTHk4Z1lubDBaVTltWm5ObGREb2dhWFFnYVhRbmN5QjFibVJsWm1sdVpXUXNJRzUxYkd3c0lFNWhUaXdnWENKbWIyOWNJaXdnWlhSakxDQnpaV0Z5WTJnZ2QyaHZiR1VnWW5WbVptVnlYRzRnSUNBZ1lubDBaVTltWm5ObGRDQTlJR1JwY2lBL0lEQWdPaUFvWW5WbVptVnlMbXhsYm1kMGFDQXRJREVwWEc0Z0lIMWNibHh1SUNBdkx5Qk9iM0p0WVd4cGVtVWdZbmwwWlU5bVpuTmxkRG9nYm1WbllYUnBkbVVnYjJabWMyVjBjeUJ6ZEdGeWRDQm1jbTl0SUhSb1pTQmxibVFnYjJZZ2RHaGxJR0oxWm1abGNseHVJQ0JwWmlBb1lubDBaVTltWm5ObGRDQThJREFwSUdKNWRHVlBabVp6WlhRZ1BTQmlkV1ptWlhJdWJHVnVaM1JvSUNzZ1lubDBaVTltWm5ObGRGeHVJQ0JwWmlBb1lubDBaVTltWm5ObGRDQStQU0JpZFdabVpYSXViR1Z1WjNSb0tTQjdYRzRnSUNBZ2FXWWdLR1JwY2lrZ2NtVjBkWEp1SUMweFhHNGdJQ0FnWld4elpTQmllWFJsVDJabWMyVjBJRDBnWW5WbVptVnlMbXhsYm1kMGFDQXRJREZjYmlBZ2ZTQmxiSE5sSUdsbUlDaGllWFJsVDJabWMyVjBJRHdnTUNrZ2UxeHVJQ0FnSUdsbUlDaGthWElwSUdKNWRHVlBabVp6WlhRZ1BTQXdYRzRnSUNBZ1pXeHpaU0J5WlhSMWNtNGdMVEZjYmlBZ2ZWeHVYRzRnSUM4dklFNXZjbTFoYkdsNlpTQjJZV3hjYmlBZ2FXWWdLSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ2RtRnNJRDBnUW5WbVptVnlMbVp5YjIwb2RtRnNMQ0JsYm1OdlpHbHVaeWxjYmlBZ2ZWeHVYRzRnSUM4dklFWnBibUZzYkhrc0lITmxZWEpqYUNCbGFYUm9aWElnYVc1a1pYaFBaaUFvYVdZZ1pHbHlJR2x6SUhSeWRXVXBJRzl5SUd4aGMzUkpibVJsZUU5bVhHNGdJR2xtSUNoQ2RXWm1aWEl1YVhOQ2RXWm1aWElvZG1Gc0tTa2dlMXh1SUNBZ0lDOHZJRk53WldOcFlXd2dZMkZ6WlRvZ2JHOXZhMmx1WnlCbWIzSWdaVzF3ZEhrZ2MzUnlhVzVuTDJKMVptWmxjaUJoYkhkaGVYTWdabUZwYkhOY2JpQWdJQ0JwWmlBb2RtRnNMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUMweFhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQmhjbkpoZVVsdVpHVjRUMllvWW5WbVptVnlMQ0IyWVd3c0lHSjVkR1ZQWm1aelpYUXNJR1Z1WTI5a2FXNW5MQ0JrYVhJcFhHNGdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JSFpoYkNBOVBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQjJZV3dnUFNCMllXd2dKaUF3ZUVaR0lDOHZJRk5sWVhKamFDQm1iM0lnWVNCaWVYUmxJSFpoYkhWbElGc3dMVEkxTlYxY2JpQWdJQ0JwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRZ0ppWmNiaUFnSUNBZ0lDQWdkSGx3Wlc5bUlGVnBiblE0UVhKeVlYa3VjSEp2ZEc5MGVYQmxMbWx1WkdWNFQyWWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lHbG1JQ2hrYVhJcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGVnBiblE0UVhKeVlYa3VjSEp2ZEc5MGVYQmxMbWx1WkdWNFQyWXVZMkZzYkNoaWRXWm1aWElzSUhaaGJDd2dZbmwwWlU5bVpuTmxkQ2xjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlZhVzUwT0VGeWNtRjVMbkJ5YjNSdmRIbHdaUzVzWVhOMFNXNWtaWGhQWmk1allXeHNLR0oxWm1abGNpd2dkbUZzTENCaWVYUmxUMlptYzJWMEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdZWEp5WVhsSmJtUmxlRTltS0dKMVptWmxjaXdnV3lCMllXd2dYU3dnWW5sMFpVOW1abk5sZEN3Z1pXNWpiMlJwYm1jc0lHUnBjaWxjYmlBZ2ZWeHVYRzRnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0ozWmhiQ0J0ZFhOMElHSmxJSE4wY21sdVp5d2diblZ0WW1WeUlHOXlJRUoxWm1abGNpY3BYRzU5WEc1Y2JtWjFibU4wYVc5dUlHRnljbUY1U1c1a1pYaFBaaUFvWVhKeUxDQjJZV3dzSUdKNWRHVlBabVp6WlhRc0lHVnVZMjlrYVc1bkxDQmthWElwSUh0Y2JpQWdkbUZ5SUdsdVpHVjRVMmw2WlNBOUlERmNiaUFnZG1GeUlHRnlja3hsYm1kMGFDQTlJR0Z5Y2k1c1pXNW5kR2hjYmlBZ2RtRnlJSFpoYkV4bGJtZDBhQ0E5SUhaaGJDNXNaVzVuZEdoY2JseHVJQ0JwWmlBb1pXNWpiMlJwYm1jZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJR1Z1WTI5a2FXNW5JRDBnVTNSeWFXNW5LR1Z1WTI5a2FXNW5LUzUwYjB4dmQyVnlRMkZ6WlNncFhHNGdJQ0FnYVdZZ0tHVnVZMjlrYVc1bklEMDlQU0FuZFdOek1pY2dmSHdnWlc1amIyUnBibWNnUFQwOUlDZDFZM010TWljZ2ZIeGNiaUFnSUNBZ0lDQWdaVzVqYjJScGJtY2dQVDA5SUNkMWRHWXhObXhsSnlCOGZDQmxibU52WkdsdVp5QTlQVDBnSjNWMFppMHhObXhsSnlrZ2UxeHVJQ0FnSUNBZ2FXWWdLR0Z5Y2k1c1pXNW5kR2dnUENBeUlIeDhJSFpoYkM1c1pXNW5kR2dnUENBeUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhVzVrWlhoVGFYcGxJRDBnTWx4dUlDQWdJQ0FnWVhKeVRHVnVaM1JvSUM4OUlESmNiaUFnSUNBZ0lIWmhiRXhsYm1kMGFDQXZQU0F5WEc0Z0lDQWdJQ0JpZVhSbFQyWm1jMlYwSUM4OUlESmNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnlaV0ZrSUNoaWRXWXNJR2twSUh0Y2JpQWdJQ0JwWmlBb2FXNWtaWGhUYVhwbElEMDlQU0F4S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWW5WbVcybGRYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJpZFdZdWNtVmhaRlZKYm5ReE5rSkZLR2tnS2lCcGJtUmxlRk5wZW1VcFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2RtRnlJR2xjYmlBZ2FXWWdLR1JwY2lrZ2UxeHVJQ0FnSUhaaGNpQm1iM1Z1WkVsdVpHVjRJRDBnTFRGY2JpQWdJQ0JtYjNJZ0tHa2dQU0JpZVhSbFQyWm1jMlYwT3lCcElEd2dZWEp5VEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHbG1JQ2h5WldGa0tHRnljaXdnYVNrZ1BUMDlJSEpsWVdRb2RtRnNMQ0JtYjNWdVpFbHVaR1Y0SUQwOVBTQXRNU0EvSURBZ09pQnBJQzBnWm05MWJtUkpibVJsZUNrcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dadmRXNWtTVzVrWlhnZ1BUMDlJQzB4S1NCbWIzVnVaRWx1WkdWNElEMGdhVnh1SUNBZ0lDQWdJQ0JwWmlBb2FTQXRJR1p2ZFc1a1NXNWtaWGdnS3lBeElEMDlQU0IyWVd4TVpXNW5kR2dwSUhKbGRIVnliaUJtYjNWdVpFbHVaR1Y0SUNvZ2FXNWtaWGhUYVhwbFhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCcFppQW9abTkxYm1SSmJtUmxlQ0FoUFQwZ0xURXBJR2tnTFQwZ2FTQXRJR1p2ZFc1a1NXNWtaWGhjYmlBZ0lDQWdJQ0FnWm05MWJtUkpibVJsZUNBOUlDMHhYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHbG1JQ2hpZVhSbFQyWm1jMlYwSUNzZ2RtRnNUR1Z1WjNSb0lENGdZWEp5VEdWdVozUm9LU0JpZVhSbFQyWm1jMlYwSUQwZ1lYSnlUR1Z1WjNSb0lDMGdkbUZzVEdWdVozUm9YRzRnSUNBZ1ptOXlJQ2hwSUQwZ1lubDBaVTltWm5ObGREc2dhU0ErUFNBd095QnBMUzBwSUh0Y2JpQWdJQ0FnSUhaaGNpQm1iM1Z1WkNBOUlIUnlkV1ZjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR29nUFNBd095QnFJRHdnZG1Gc1RHVnVaM1JvT3lCcUt5c3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tISmxZV1FvWVhKeUxDQnBJQ3NnYWlrZ0lUMDlJSEpsWVdRb2RtRnNMQ0JxS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1p2ZFc1a0lEMGdabUZzYzJWY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9abTkxYm1RcElISmxkSFZ5YmlCcFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUMweFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1YVc1amJIVmtaWE1nUFNCbWRXNWpkR2x2YmlCcGJtTnNkV1JsY3lBb2RtRnNMQ0JpZVhSbFQyWm1jMlYwTENCbGJtTnZaR2x1WnlrZ2UxeHVJQ0J5WlhSMWNtNGdkR2hwY3k1cGJtUmxlRTltS0haaGJDd2dZbmwwWlU5bVpuTmxkQ3dnWlc1amIyUnBibWNwSUNFOVBTQXRNVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExtbHVaR1Y0VDJZZ1BTQm1kVzVqZEdsdmJpQnBibVJsZUU5bUlDaDJZV3dzSUdKNWRHVlBabVp6WlhRc0lHVnVZMjlrYVc1bktTQjdYRzRnSUhKbGRIVnliaUJpYVdScGNtVmpkR2x2Ym1Gc1NXNWtaWGhQWmloMGFHbHpMQ0IyWVd3c0lHSjVkR1ZQWm1aelpYUXNJR1Z1WTI5a2FXNW5MQ0IwY25WbEtWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG14aGMzUkpibVJsZUU5bUlEMGdablZ1WTNScGIyNGdiR0Z6ZEVsdVpHVjRUMllnS0haaGJDd2dZbmwwWlU5bVpuTmxkQ3dnWlc1amIyUnBibWNwSUh0Y2JpQWdjbVYwZFhKdUlHSnBaR2x5WldOMGFXOXVZV3hKYm1SbGVFOW1LSFJvYVhNc0lIWmhiQ3dnWW5sMFpVOW1abk5sZEN3Z1pXNWpiMlJwYm1jc0lHWmhiSE5sS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJvWlhoWGNtbDBaU0FvWW5WbUxDQnpkSEpwYm1jc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1NCN1hHNGdJRzltWm5ObGRDQTlJRTUxYldKbGNpaHZabVp6WlhRcElIeDhJREJjYmlBZ2RtRnlJSEpsYldGcGJtbHVaeUE5SUdKMVppNXNaVzVuZEdnZ0xTQnZabVp6WlhSY2JpQWdhV1lnS0NGc1pXNW5kR2dwSUh0Y2JpQWdJQ0JzWlc1bmRHZ2dQU0J5WlcxaGFXNXBibWRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JzWlc1bmRHZ2dQU0JPZFcxaVpYSW9iR1Z1WjNSb0tWeHVJQ0FnSUdsbUlDaHNaVzVuZEdnZ1BpQnlaVzFoYVc1cGJtY3BJSHRjYmlBZ0lDQWdJR3hsYm1kMGFDQTlJSEpsYldGcGJtbHVaMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2SUcxMWMzUWdZbVVnWVc0Z1pYWmxiaUJ1ZFcxaVpYSWdiMllnWkdsbmFYUnpYRzRnSUhaaGNpQnpkSEpNWlc0Z1BTQnpkSEpwYm1jdWJHVnVaM1JvWEc0Z0lHbG1JQ2h6ZEhKTVpXNGdKU0F5SUNFOVBTQXdLU0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkSmJuWmhiR2xrSUdobGVDQnpkSEpwYm1jbktWeHVYRzRnSUdsbUlDaHNaVzVuZEdnZ1BpQnpkSEpNWlc0Z0x5QXlLU0I3WEc0Z0lDQWdiR1Z1WjNSb0lEMGdjM1J5VEdWdUlDOGdNbHh1SUNCOVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdVozUm9PeUFySzJrcElIdGNiaUFnSUNCMllYSWdjR0Z5YzJWa0lEMGdjR0Z5YzJWSmJuUW9jM1J5YVc1bkxuTjFZbk4wY2locElDb2dNaXdnTWlrc0lERTJLVnh1SUNBZ0lHbG1JQ2hwYzA1aFRpaHdZWEp6WldRcEtTQnlaWFIxY200Z2FWeHVJQ0FnSUdKMVpsdHZabVp6WlhRZ0t5QnBYU0E5SUhCaGNuTmxaRnh1SUNCOVhHNGdJSEpsZEhWeWJpQnBYRzU5WEc1Y2JtWjFibU4wYVc5dUlIVjBaamhYY21sMFpTQW9ZblZtTENCemRISnBibWNzSUc5bVpuTmxkQ3dnYkdWdVozUm9LU0I3WEc0Z0lISmxkSFZ5YmlCaWJHbDBRblZtWm1WeUtIVjBaamhVYjBKNWRHVnpLSE4wY21sdVp5d2dZblZtTG14bGJtZDBhQ0F0SUc5bVpuTmxkQ2tzSUdKMVppd2diMlptYzJWMExDQnNaVzVuZEdncFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdGelkybHBWM0pwZEdVZ0tHSjFaaXdnYzNSeWFXNW5MQ0J2Wm1aelpYUXNJR3hsYm1kMGFDa2dlMXh1SUNCeVpYUjFjbTRnWW14cGRFSjFabVpsY2loaGMyTnBhVlJ2UW5sMFpYTW9jM1J5YVc1bktTd2dZblZtTENCdlptWnpaWFFzSUd4bGJtZDBhQ2xjYm4xY2JseHVablZ1WTNScGIyNGdiR0YwYVc0eFYzSnBkR1VnS0dKMVppd2djM1J5YVc1bkxDQnZabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0J5WlhSMWNtNGdZWE5qYVdsWGNtbDBaU2hpZFdZc0lITjBjbWx1Wnl3Z2IyWm1jMlYwTENCc1pXNW5kR2dwWEc1OVhHNWNibVoxYm1OMGFXOXVJR0poYzJVMk5GZHlhWFJsSUNoaWRXWXNJSE4wY21sdVp5d2diMlptYzJWMExDQnNaVzVuZEdncElIdGNiaUFnY21WMGRYSnVJR0pzYVhSQ2RXWm1aWElvWW1GelpUWTBWRzlDZVhSbGN5aHpkSEpwYm1jcExDQmlkV1lzSUc5bVpuTmxkQ3dnYkdWdVozUm9LVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjFZM015VjNKcGRHVWdLR0oxWml3Z2MzUnlhVzVuTENCdlptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnlaWFIxY200Z1lteHBkRUoxWm1abGNpaDFkR1l4Tm14bFZHOUNlWFJsY3loemRISnBibWNzSUdKMVppNXNaVzVuZEdnZ0xTQnZabVp6WlhRcExDQmlkV1lzSUc5bVpuTmxkQ3dnYkdWdVozUm9LVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsSUQwZ1puVnVZM1JwYjI0Z2QzSnBkR1VnS0hOMGNtbHVaeXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3NJR1Z1WTI5a2FXNW5LU0I3WEc0Z0lDOHZJRUoxWm1abGNpTjNjbWwwWlNoemRISnBibWNwWEc0Z0lHbG1JQ2h2Wm1aelpYUWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUdWdVkyOWthVzVuSUQwZ0ozVjBaamduWEc0Z0lDQWdiR1Z1WjNSb0lEMGdkR2hwY3k1c1pXNW5kR2hjYmlBZ0lDQnZabVp6WlhRZ1BTQXdYRzRnSUM4dklFSjFabVpsY2lOM2NtbDBaU2h6ZEhKcGJtY3NJR1Z1WTI5a2FXNW5LVnh1SUNCOUlHVnNjMlVnYVdZZ0tHeGxibWQwYUNBOVBUMGdkVzVrWldacGJtVmtJQ1ltSUhSNWNHVnZaaUJ2Wm1aelpYUWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnWlc1amIyUnBibWNnUFNCdlptWnpaWFJjYmlBZ0lDQnNaVzVuZEdnZ1BTQjBhR2x6TG14bGJtZDBhRnh1SUNBZ0lHOW1abk5sZENBOUlEQmNiaUFnTHk4Z1FuVm1abVZ5STNkeWFYUmxLSE4wY21sdVp5d2diMlptYzJWMFd5d2diR1Z1WjNSb1hWc3NJR1Z1WTI5a2FXNW5YU2xjYmlBZ2ZTQmxiSE5sSUdsbUlDaHBjMFpwYm1sMFpTaHZabVp6WlhRcEtTQjdYRzRnSUNBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0FnSUdsbUlDaHBjMFpwYm1sMFpTaHNaVzVuZEdncEtTQjdYRzRnSUNBZ0lDQnNaVzVuZEdnZ1BTQnNaVzVuZEdnZ2ZDQXdYRzRnSUNBZ0lDQnBaaUFvWlc1amIyUnBibWNnUFQwOUlIVnVaR1ZtYVc1bFpDa2daVzVqYjJScGJtY2dQU0FuZFhSbU9DZGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWlc1amIyUnBibWNnUFNCc1pXNW5kR2hjYmlBZ0lDQWdJR3hsYm1kMGFDQTlJSFZ1WkdWbWFXNWxaRnh1SUNBZ0lIMWNiaUFnTHk4Z2JHVm5ZV041SUhkeWFYUmxLSE4wY21sdVp5d2daVzVqYjJScGJtY3NJRzltWm5ObGRDd2diR1Z1WjNSb0tTQXRJSEpsYlc5MlpTQnBiaUIyTUM0eE0xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY2JpQWdJQ0FnSUNkQ2RXWm1aWEl1ZDNKcGRHVW9jM1J5YVc1bkxDQmxibU52WkdsdVp5d2diMlptYzJWMFd5d2diR1Z1WjNSb1hTa2dhWE1nYm04Z2JHOXVaMlZ5SUhOMWNIQnZjblJsWkNkY2JpQWdJQ0FwWEc0Z0lIMWNibHh1SUNCMllYSWdjbVZ0WVdsdWFXNW5JRDBnZEdocGN5NXNaVzVuZEdnZ0xTQnZabVp6WlhSY2JpQWdhV1lnS0d4bGJtZDBhQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJR3hsYm1kMGFDQStJSEpsYldGcGJtbHVaeWtnYkdWdVozUm9JRDBnY21WdFlXbHVhVzVuWEc1Y2JpQWdhV1lnS0NoemRISnBibWN1YkdWdVozUm9JRDRnTUNBbUppQW9iR1Z1WjNSb0lEd2dNQ0I4ZkNCdlptWnpaWFFnUENBd0tTa2dmSHdnYjJabWMyVjBJRDRnZEdocGN5NXNaVzVuZEdncElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpZ25RWFIwWlcxd2RDQjBieUIzY21sMFpTQnZkWFJ6YVdSbElHSjFabVpsY2lCaWIzVnVaSE1uS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLQ0ZsYm1OdlpHbHVaeWtnWlc1amIyUnBibWNnUFNBbmRYUm1PQ2RjYmx4dUlDQjJZWElnYkc5M1pYSmxaRU5oYzJVZ1BTQm1ZV3h6WlZ4dUlDQm1iM0lnS0RzN0tTQjdYRzRnSUNBZ2MzZHBkR05vSUNobGJtTnZaR2x1WnlrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuYUdWNEp6cGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHaGxlRmR5YVhSbEtIUm9hWE1zSUhOMGNtbHVaeXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3BYRzVjYmlBZ0lDQWdJR05oYzJVZ0ozVjBaamduT2x4dUlDQWdJQ0FnWTJGelpTQW5kWFJtTFRnbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RYUm1PRmR5YVhSbEtIUm9hWE1zSUhOMGNtbHVaeXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3BYRzVjYmlBZ0lDQWdJR05oYzJVZ0oyRnpZMmxwSnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGelkybHBWM0pwZEdVb2RHaHBjeXdnYzNSeWFXNW5MQ0J2Wm1aelpYUXNJR3hsYm1kMGFDbGNibHh1SUNBZ0lDQWdZMkZ6WlNBbmJHRjBhVzR4SnpwY2JpQWdJQ0FnSUdOaGMyVWdKMkpwYm1GeWVTYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnNZWFJwYmpGWGNtbDBaU2gwYUdsekxDQnpkSEpwYm1jc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dVhHNGdJQ0FnSUNCallYTmxJQ2RpWVhObE5qUW5PbHh1SUNBZ0lDQWdJQ0F2THlCWFlYSnVhVzVuT2lCdFlYaE1aVzVuZEdnZ2JtOTBJSFJoYTJWdUlHbHVkRzhnWVdOamIzVnVkQ0JwYmlCaVlYTmxOalJYY21sMFpWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ltRnpaVFkwVjNKcGRHVW9kR2hwY3l3Z2MzUnlhVzVuTENCdlptWnpaWFFzSUd4bGJtZDBhQ2xjYmx4dUlDQWdJQ0FnWTJGelpTQW5kV056TWljNlhHNGdJQ0FnSUNCallYTmxJQ2QxWTNNdE1pYzZYRzRnSUNBZ0lDQmpZWE5sSUNkMWRHWXhObXhsSnpwY2JpQWdJQ0FnSUdOaGMyVWdKM1YwWmkweE5teGxKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFZqY3pKWGNtbDBaU2gwYUdsekxDQnpkSEpwYm1jc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dVhHNGdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNCcFppQW9iRzkzWlhKbFpFTmhjMlVwSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oxVnVhMjV2ZDI0Z1pXNWpiMlJwYm1jNklDY2dLeUJsYm1OdlpHbHVaeWxjYmlBZ0lDQWdJQ0FnWlc1amIyUnBibWNnUFNBb0p5Y2dLeUJsYm1OdlpHbHVaeWt1ZEc5TWIzZGxja05oYzJVb0tWeHVJQ0FnSUNBZ0lDQnNiM2RsY21Wa1EyRnpaU0E5SUhSeWRXVmNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTBiMHBUVDA0Z1BTQm1kVzVqZEdsdmJpQjBiMHBUVDA0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSFI1Y0dVNklDZENkV1ptWlhJbkxGeHVJQ0FnSUdSaGRHRTZJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiR2xqWlM1allXeHNLSFJvYVhNdVgyRnljaUI4ZkNCMGFHbHpMQ0F3S1Z4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHSmhjMlUyTkZOc2FXTmxJQ2hpZFdZc0lITjBZWEowTENCbGJtUXBJSHRjYmlBZ2FXWWdLSE4wWVhKMElEMDlQU0F3SUNZbUlHVnVaQ0E5UFQwZ1luVm1MbXhsYm1kMGFDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCaVlYTmxOalF1Wm5KdmJVSjVkR1ZCY25KaGVTaGlkV1lwWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WMGRYSnVJR0poYzJVMk5DNW1jbTl0UW5sMFpVRnljbUY1S0dKMVppNXpiR2xqWlNoemRHRnlkQ3dnWlc1a0tTbGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUIxZEdZNFUyeHBZMlVnS0dKMVppd2djM1JoY25Rc0lHVnVaQ2tnZTF4dUlDQmxibVFnUFNCTllYUm9MbTFwYmloaWRXWXViR1Z1WjNSb0xDQmxibVFwWEc0Z0lIWmhjaUJ5WlhNZ1BTQmJYVnh1WEc0Z0lIWmhjaUJwSUQwZ2MzUmhjblJjYmlBZ2QyaHBiR1VnS0drZ1BDQmxibVFwSUh0Y2JpQWdJQ0IyWVhJZ1ptbHljM1JDZVhSbElEMGdZblZtVzJsZFhHNGdJQ0FnZG1GeUlHTnZaR1ZRYjJsdWRDQTlJRzUxYkd4Y2JpQWdJQ0IyWVhJZ1lubDBaWE5RWlhKVFpYRjFaVzVqWlNBOUlDaG1hWEp6ZEVKNWRHVWdQaUF3ZUVWR0tTQS9JRFJjYmlBZ0lDQWdJRG9nS0dacGNuTjBRbmwwWlNBK0lEQjRSRVlwSUQ4Z00xeHVJQ0FnSUNBZ09pQW9abWx5YzNSQ2VYUmxJRDRnTUhoQ1Jpa2dQeUF5WEc0Z0lDQWdJQ0E2SURGY2JseHVJQ0FnSUdsbUlDaHBJQ3NnWW5sMFpYTlFaWEpUWlhGMVpXNWpaU0E4UFNCbGJtUXBJSHRjYmlBZ0lDQWdJSFpoY2lCelpXTnZibVJDZVhSbExDQjBhR2x5WkVKNWRHVXNJR1p2ZFhKMGFFSjVkR1VzSUhSbGJYQkRiMlJsVUc5cGJuUmNibHh1SUNBZ0lDQWdjM2RwZEdOb0lDaGllWFJsYzFCbGNsTmxjWFZsYm1ObEtTQjdYRzRnSUNBZ0lDQWdJR05oYzJVZ01UcGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1ptbHljM1JDZVhSbElEd2dNSGc0TUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5a1pWQnZhVzUwSUQwZ1ptbHljM1JDZVhSbFhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJR05oYzJVZ01qcGNiaUFnSUNBZ0lDQWdJQ0J6WldOdmJtUkNlWFJsSUQwZ1luVm1XMmtnS3lBeFhWeHVJQ0FnSUNBZ0lDQWdJR2xtSUNnb2MyVmpiMjVrUW5sMFpTQW1JREI0UXpBcElEMDlQU0F3ZURnd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpXMXdRMjlrWlZCdmFXNTBJRDBnS0dacGNuTjBRbmwwWlNBbUlEQjRNVVlwSUR3OElEQjROaUI4SUNoelpXTnZibVJDZVhSbElDWWdNSGd6UmlsY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMFpXMXdRMjlrWlZCdmFXNTBJRDRnTUhnM1Jpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQU0IwWlcxd1EyOWtaVkJ2YVc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lHTmhjMlVnTXpwY2JpQWdJQ0FnSUNBZ0lDQnpaV052Ym1SQ2VYUmxJRDBnWW5WbVcya2dLeUF4WFZ4dUlDQWdJQ0FnSUNBZ0lIUm9hWEprUW5sMFpTQTlJR0oxWmx0cElDc2dNbDFjYmlBZ0lDQWdJQ0FnSUNCcFppQW9LSE5sWTI5dVpFSjVkR1VnSmlBd2VFTXdLU0E5UFQwZ01IZzRNQ0FtSmlBb2RHaHBjbVJDZVhSbElDWWdNSGhETUNrZ1BUMDlJREI0T0RBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSbGJYQkRiMlJsVUc5cGJuUWdQU0FvWm1seWMzUkNlWFJsSUNZZ01IaEdLU0E4UENBd2VFTWdmQ0FvYzJWamIyNWtRbmwwWlNBbUlEQjRNMFlwSUR3OElEQjROaUI4SUNoMGFHbHlaRUo1ZEdVZ0ppQXdlRE5HS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSbGJYQkRiMlJsVUc5cGJuUWdQaUF3ZURkR1JpQW1KaUFvZEdWdGNFTnZaR1ZRYjJsdWRDQThJREI0UkRnd01DQjhmQ0IwWlcxd1EyOWtaVkJ2YVc1MElENGdNSGhFUmtaR0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQU0IwWlcxd1EyOWtaVkJ2YVc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lHTmhjMlVnTkRwY2JpQWdJQ0FnSUNBZ0lDQnpaV052Ym1SQ2VYUmxJRDBnWW5WbVcya2dLeUF4WFZ4dUlDQWdJQ0FnSUNBZ0lIUm9hWEprUW5sMFpTQTlJR0oxWmx0cElDc2dNbDFjYmlBZ0lDQWdJQ0FnSUNCbWIzVnlkR2hDZVhSbElEMGdZblZtVzJrZ0t5QXpYVnh1SUNBZ0lDQWdJQ0FnSUdsbUlDZ29jMlZqYjI1a1FubDBaU0FtSURCNFF6QXBJRDA5UFNBd2VEZ3dJQ1ltSUNoMGFHbHlaRUo1ZEdVZ0ppQXdlRU13S1NBOVBUMGdNSGc0TUNBbUppQW9abTkxY25Sb1FubDBaU0FtSURCNFF6QXBJRDA5UFNBd2VEZ3dLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaVzF3UTI5a1pWQnZhVzUwSUQwZ0tHWnBjbk4wUW5sMFpTQW1JREI0UmlrZ1BEd2dNSGd4TWlCOElDaHpaV052Ym1SQ2VYUmxJQ1lnTUhnelJpa2dQRHdnTUhoRElId2dLSFJvYVhKa1FubDBaU0FtSURCNE0wWXBJRHc4SURCNE5pQjhJQ2htYjNWeWRHaENlWFJsSUNZZ01IZ3pSaWxjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWlcxd1EyOWtaVkJ2YVc1MElENGdNSGhHUmtaR0lDWW1JSFJsYlhCRGIyUmxVRzlwYm5RZ1BDQXdlREV4TURBd01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQU0IwWlcxd1EyOWtaVkJ2YVc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGpiMlJsVUc5cGJuUWdQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQzh2SUhkbElHUnBaQ0J1YjNRZ1oyVnVaWEpoZEdVZ1lTQjJZV3hwWkNCamIyUmxVRzlwYm5RZ2MyOGdhVzV6WlhKMElHRmNiaUFnSUNBZ0lDOHZJSEpsY0d4aFkyVnRaVzUwSUdOb1lYSWdLRlVyUmtaR1JDa2dZVzVrSUdGa2RtRnVZMlVnYjI1c2VTQXhJR0o1ZEdWY2JpQWdJQ0FnSUdOdlpHVlFiMmx1ZENBOUlEQjRSa1pHUkZ4dUlDQWdJQ0FnWW5sMFpYTlFaWEpUWlhGMVpXNWpaU0E5SURGY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dOdlpHVlFiMmx1ZENBK0lEQjRSa1pHUmlrZ2UxeHVJQ0FnSUNBZ0x5OGdaVzVqYjJSbElIUnZJSFYwWmpFMklDaHpkWEp5YjJkaGRHVWdjR0ZwY2lCa1lXNWpaU2xjYmlBZ0lDQWdJR052WkdWUWIybHVkQ0F0UFNBd2VERXdNREF3WEc0Z0lDQWdJQ0J5WlhNdWNIVnphQ2hqYjJSbFVHOXBiblFnUGo0K0lERXdJQ1lnTUhnelJrWWdmQ0F3ZUVRNE1EQXBYRzRnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQU0F3ZUVSRE1EQWdmQ0JqYjJSbFVHOXBiblFnSmlBd2VETkdSbHh1SUNBZ0lIMWNibHh1SUNBZ0lISmxjeTV3ZFhOb0tHTnZaR1ZRYjJsdWRDbGNiaUFnSUNCcElDczlJR0o1ZEdWelVHVnlVMlZ4ZFdWdVkyVmNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmtaV052WkdWRGIyUmxVRzlwYm5SelFYSnlZWGtvY21WektWeHVmVnh1WEc0dkx5QkNZWE5sWkNCdmJpQm9kSFJ3T2k4dmMzUmhZMnR2ZG1WeVpteHZkeTVqYjIwdllTOHlNamMwTnpJM01pODJPREEzTkRJc0lIUm9aU0JpY205M2MyVnlJSGRwZEdoY2JpOHZJSFJvWlNCc2IzZGxjM1FnYkdsdGFYUWdhWE1nUTJoeWIyMWxMQ0IzYVhSb0lEQjRNVEF3TURBZ1lYSm5jeTVjYmk4dklGZGxJR2R2SURFZ2JXRm5ibWwwZFdSbElHeGxjM01zSUdadmNpQnpZV1psZEhsY2JuWmhjaUJOUVZoZlFWSkhWVTFGVGxSVFgweEZUa2RVU0NBOUlEQjRNVEF3TUZ4dVhHNW1kVzVqZEdsdmJpQmtaV052WkdWRGIyUmxVRzlwYm5SelFYSnlZWGtnS0dOdlpHVlFiMmx1ZEhNcElIdGNiaUFnZG1GeUlHeGxiaUE5SUdOdlpHVlFiMmx1ZEhNdWJHVnVaM1JvWEc0Z0lHbG1JQ2hzWlc0Z1BEMGdUVUZZWDBGU1IxVk5SVTVVVTE5TVJVNUhWRWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdVM1J5YVc1bkxtWnliMjFEYUdGeVEyOWtaUzVoY0hCc2VTaFRkSEpwYm1jc0lHTnZaR1ZRYjJsdWRITXBJQzh2SUdGMmIybGtJR1Y0ZEhKaElITnNhV05sS0NsY2JpQWdmVnh1WEc0Z0lDOHZJRVJsWTI5a1pTQnBiaUJqYUhWdWEzTWdkRzhnWVhadmFXUWdYQ0pqWVd4c0lITjBZV05ySUhOcGVtVWdaWGhqWldWa1pXUmNJaTVjYmlBZ2RtRnlJSEpsY3lBOUlDY25YRzRnSUhaaGNpQnBJRDBnTUZ4dUlDQjNhR2xzWlNBb2FTQThJR3hsYmlrZ2UxeHVJQ0FnSUhKbGN5QXJQU0JUZEhKcGJtY3Vabkp2YlVOb1lYSkRiMlJsTG1Gd2NHeDVLRnh1SUNBZ0lDQWdVM1J5YVc1bkxGeHVJQ0FnSUNBZ1kyOWtaVkJ2YVc1MGN5NXpiR2xqWlNocExDQnBJQ3M5SUUxQldGOUJVa2RWVFVWT1ZGTmZURVZPUjFSSUtWeHVJQ0FnSUNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WelhHNTlYRzVjYm1aMWJtTjBhVzl1SUdGelkybHBVMnhwWTJVZ0tHSjFaaXdnYzNSaGNuUXNJR1Z1WkNrZ2UxeHVJQ0IyWVhJZ2NtVjBJRDBnSnlkY2JpQWdaVzVrSUQwZ1RXRjBhQzV0YVc0b1luVm1MbXhsYm1kMGFDd2daVzVrS1Z4dVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNCemRHRnlkRHNnYVNBOElHVnVaRHNnS3l0cEtTQjdYRzRnSUNBZ2NtVjBJQ3M5SUZOMGNtbHVaeTVtY205dFEyaGhja052WkdVb1luVm1XMmxkSUNZZ01IZzNSaWxjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjbVYwWEc1OVhHNWNibVoxYm1OMGFXOXVJR3hoZEdsdU1WTnNhV05sSUNoaWRXWXNJSE4wWVhKMExDQmxibVFwSUh0Y2JpQWdkbUZ5SUhKbGRDQTlJQ2NuWEc0Z0lHVnVaQ0E5SUUxaGRHZ3ViV2x1S0dKMVppNXNaVzVuZEdnc0lHVnVaQ2xjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnYzNSaGNuUTdJR2tnUENCbGJtUTdJQ3NyYVNrZ2UxeHVJQ0FnSUhKbGRDQXJQU0JUZEhKcGJtY3Vabkp2YlVOb1lYSkRiMlJsS0dKMVpsdHBYU2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjbVYwWEc1OVhHNWNibVoxYm1OMGFXOXVJR2hsZUZOc2FXTmxJQ2hpZFdZc0lITjBZWEowTENCbGJtUXBJSHRjYmlBZ2RtRnlJR3hsYmlBOUlHSjFaaTVzWlc1bmRHaGNibHh1SUNCcFppQW9JWE4wWVhKMElIeDhJSE4wWVhKMElEd2dNQ2tnYzNSaGNuUWdQU0F3WEc0Z0lHbG1JQ2doWlc1a0lIeDhJR1Z1WkNBOElEQWdmSHdnWlc1a0lENGdiR1Z1S1NCbGJtUWdQU0JzWlc1Y2JseHVJQ0IyWVhJZ2IzVjBJRDBnSnlkY2JpQWdabTl5SUNoMllYSWdhU0E5SUhOMFlYSjBPeUJwSUR3Z1pXNWtPeUFySzJrcElIdGNiaUFnSUNCdmRYUWdLejBnZEc5SVpYZ29ZblZtVzJsZEtWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCdmRYUmNibjFjYmx4dVpuVnVZM1JwYjI0Z2RYUm1NVFpzWlZOc2FXTmxJQ2hpZFdZc0lITjBZWEowTENCbGJtUXBJSHRjYmlBZ2RtRnlJR0o1ZEdWeklEMGdZblZtTG5Oc2FXTmxLSE4wWVhKMExDQmxibVFwWEc0Z0lIWmhjaUJ5WlhNZ1BTQW5KMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHSjVkR1Z6TG14bGJtZDBhRHNnYVNBclBTQXlLU0I3WEc0Z0lDQWdjbVZ6SUNzOUlGTjBjbWx1Wnk1bWNtOXRRMmhoY2tOdlpHVW9ZbmwwWlhOYmFWMGdLeUJpZVhSbGMxdHBJQ3NnTVYwZ0tpQXlOVFlwWEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzF4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbk5zYVdObElEMGdablZ1WTNScGIyNGdjMnhwWTJVZ0tITjBZWEowTENCbGJtUXBJSHRjYmlBZ2RtRnlJR3hsYmlBOUlIUm9hWE11YkdWdVozUm9YRzRnSUhOMFlYSjBJRDBnZm41emRHRnlkRnh1SUNCbGJtUWdQU0JsYm1RZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUd4bGJpQTZJSDUrWlc1a1hHNWNiaUFnYVdZZ0tITjBZWEowSUR3Z01Da2dlMXh1SUNBZ0lITjBZWEowSUNzOUlHeGxibHh1SUNBZ0lHbG1JQ2h6ZEdGeWRDQThJREFwSUhOMFlYSjBJRDBnTUZ4dUlDQjlJR1ZzYzJVZ2FXWWdLSE4wWVhKMElENGdiR1Z1S1NCN1hHNGdJQ0FnYzNSaGNuUWdQU0JzWlc1Y2JpQWdmVnh1WEc0Z0lHbG1JQ2hsYm1RZ1BDQXdLU0I3WEc0Z0lDQWdaVzVrSUNzOUlHeGxibHh1SUNBZ0lHbG1JQ2hsYm1RZ1BDQXdLU0JsYm1RZ1BTQXdYRzRnSUgwZ1pXeHpaU0JwWmlBb1pXNWtJRDRnYkdWdUtTQjdYRzRnSUNBZ1pXNWtJRDBnYkdWdVhHNGdJSDFjYmx4dUlDQnBaaUFvWlc1a0lEd2djM1JoY25RcElHVnVaQ0E5SUhOMFlYSjBYRzVjYmlBZ2RtRnlJRzVsZDBKMVpseHVJQ0JwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnSUNCdVpYZENkV1lnUFNCMGFHbHpMbk4xWW1GeWNtRjVLSE4wWVhKMExDQmxibVFwWEc0Z0lDQWdibVYzUW5WbUxsOWZjSEp2ZEc5Zlh5QTlJRUoxWm1abGNpNXdjbTkwYjNSNWNHVmNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjJZWElnYzJ4cFkyVk1aVzRnUFNCbGJtUWdMU0J6ZEdGeWRGeHVJQ0FnSUc1bGQwSjFaaUE5SUc1bGR5QkNkV1ptWlhJb2MyeHBZMlZNWlc0c0lIVnVaR1ZtYVc1bFpDbGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITnNhV05sVEdWdU95QXJLMmtwSUh0Y2JpQWdJQ0FnSUc1bGQwSjFabHRwWFNBOUlIUm9hWE5iYVNBcklITjBZWEowWFZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ1WlhkQ2RXWmNibjFjYmx4dUx5cGNiaUFxSUU1bFpXUWdkRzhnYldGclpTQnpkWEpsSUhSb1lYUWdZblZtWm1WeUlHbHpiaWQwSUhSeWVXbHVaeUIwYnlCM2NtbDBaU0J2ZFhRZ2IyWWdZbTkxYm1SekxseHVJQ292WEc1bWRXNWpkR2x2YmlCamFHVmphMDltWm5ObGRDQW9iMlptYzJWMExDQmxlSFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnBaaUFvS0c5bVpuTmxkQ0FsSURFcElDRTlQU0F3SUh4OElHOW1abk5sZENBOElEQXBJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkdlptWnpaWFFnYVhNZ2JtOTBJSFZwYm5RbktWeHVJQ0JwWmlBb2IyWm1jMlYwSUNzZ1pYaDBJRDRnYkdWdVozUm9LU0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblZISjVhVzVuSUhSdklHRmpZMlZ6Y3lCaVpYbHZibVFnWW5WbVptVnlJR3hsYm1kMGFDY3BYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRlZKYm5STVJTQTlJR1oxYm1OMGFXOXVJSEpsWVdSVlNXNTBURVVnS0c5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2JtOUJjM05sY25RcElIdGNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQmllWFJsVEdWdVozUm9JRDBnWW5sMFpVeGxibWQwYUNCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0UFptWnpaWFFvYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCMGFHbHpMbXhsYm1kMGFDbGNibHh1SUNCMllYSWdkbUZzSUQwZ2RHaHBjMXR2Wm1aelpYUmRYRzRnSUhaaGNpQnRkV3dnUFNBeFhHNGdJSFpoY2lCcElEMGdNRnh1SUNCM2FHbHNaU0FvS3l0cElEd2dZbmwwWlV4bGJtZDBhQ0FtSmlBb2JYVnNJQ285SURCNE1UQXdLU2tnZTF4dUlDQWdJSFpoYkNBclBTQjBhR2x6VzI5bVpuTmxkQ0FySUdsZElDb2diWFZzWEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZG1Gc1hHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpGVkpiblJDUlNBOUlHWjFibU4wYVc5dUlISmxZV1JWU1c1MFFrVWdLRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCaWVYUmxUR1Z1WjNSb0lEMGdZbmwwWlV4bGJtZDBhQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ2UxeHVJQ0FnSUdOb1pXTnJUMlptYzJWMEtHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dkR2hwY3k1c1pXNW5kR2dwWEc0Z0lIMWNibHh1SUNCMllYSWdkbUZzSUQwZ2RHaHBjMXR2Wm1aelpYUWdLeUF0TFdKNWRHVk1aVzVuZEdoZFhHNGdJSFpoY2lCdGRXd2dQU0F4WEc0Z0lIZG9hV3hsSUNoaWVYUmxUR1Z1WjNSb0lENGdNQ0FtSmlBb2JYVnNJQ285SURCNE1UQXdLU2tnZTF4dUlDQWdJSFpoYkNBclBTQjBhR2x6VzI5bVpuTmxkQ0FySUMwdFlubDBaVXhsYm1kMGFGMGdLaUJ0ZFd4Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCMllXeGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1eVpXRmtWVWx1ZERnZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrVlVsdWREZ2dLRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydFBabVp6WlhRb2IyWm1jMlYwTENBeExDQjBhR2x6TG14bGJtZDBhQ2xjYmlBZ2NtVjBkWEp1SUhSb2FYTmJiMlptYzJWMFhWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5KbFlXUlZTVzUwTVRaTVJTQTlJR1oxYm1OMGFXOXVJSEpsWVdSVlNXNTBNVFpNUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRElzSUhSb2FYTXViR1Z1WjNSb0tWeHVJQ0J5WlhSMWNtNGdkR2hwYzF0dlptWnpaWFJkSUh3Z0tIUm9hWE5iYjJabWMyVjBJQ3NnTVYwZ1BEd2dPQ2xjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXlaV0ZrVlVsdWRERTJRa1VnUFNCbWRXNWpkR2x2YmlCeVpXRmtWVWx1ZERFMlFrVWdLRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydFBabVp6WlhRb2IyWm1jMlYwTENBeUxDQjBhR2x6TG14bGJtZDBhQ2xjYmlBZ2NtVjBkWEp1SUNoMGFHbHpXMjltWm5ObGRGMGdQRHdnT0NrZ2ZDQjBhR2x6VzI5bVpuTmxkQ0FySURGZFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpGVkpiblF6TWt4RklEMGdablZ1WTNScGIyNGdjbVZoWkZWSmJuUXpNa3hGSUNodlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yVDJabWMyVjBLRzltWm5ObGRDd2dOQ3dnZEdocGN5NXNaVzVuZEdncFhHNWNiaUFnY21WMGRYSnVJQ2dvZEdocGMxdHZabVp6WlhSZEtTQjhYRzRnSUNBZ0lDQW9kR2hwYzF0dlptWnpaWFFnS3lBeFhTQThQQ0E0S1NCOFhHNGdJQ0FnSUNBb2RHaHBjMXR2Wm1aelpYUWdLeUF5WFNBOFBDQXhOaWtwSUN0Y2JpQWdJQ0FnSUNoMGFHbHpXMjltWm5ObGRDQXJJRE5kSUNvZ01IZ3hNREF3TURBd0tWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5KbFlXUlZTVzUwTXpKQ1JTQTlJR1oxYm1OMGFXOXVJSEpsWVdSVlNXNTBNekpDUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRFFzSUhSb2FYTXViR1Z1WjNSb0tWeHVYRzRnSUhKbGRIVnliaUFvZEdocGMxdHZabVp6WlhSZElDb2dNSGd4TURBd01EQXdLU0FyWEc0Z0lDQWdLQ2gwYUdselcyOW1abk5sZENBcklERmRJRHc4SURFMktTQjhYRzRnSUNBZ0tIUm9hWE5iYjJabWMyVjBJQ3NnTWwwZ1BEd2dPQ2tnZkZ4dUlDQWdJSFJvYVhOYmIyWm1jMlYwSUNzZ00xMHBYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRWx1ZEV4RklEMGdablZ1WTNScGIyNGdjbVZoWkVsdWRFeEZJQ2h2Wm1aelpYUXNJR0o1ZEdWTVpXNW5kR2dzSUc1dlFYTnpaWEowS1NCN1hHNGdJRzltWm5ObGRDQTlJRzltWm5ObGRDQjhJREJjYmlBZ1lubDBaVXhsYm1kMGFDQTlJR0o1ZEdWTVpXNW5kR2dnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yVDJabWMyVjBLRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnZEdocGN5NXNaVzVuZEdncFhHNWNiaUFnZG1GeUlIWmhiQ0E5SUhSb2FYTmJiMlptYzJWMFhWeHVJQ0IyWVhJZ2JYVnNJRDBnTVZ4dUlDQjJZWElnYVNBOUlEQmNiaUFnZDJocGJHVWdLQ3NyYVNBOElHSjVkR1ZNWlc1bmRHZ2dKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQjJZV3dnS3owZ2RHaHBjMXR2Wm1aelpYUWdLeUJwWFNBcUlHMTFiRnh1SUNCOVhHNGdJRzExYkNBcVBTQXdlRGd3WEc1Y2JpQWdhV1lnS0haaGJDQStQU0J0ZFd3cElIWmhiQ0F0UFNCTllYUm9MbkJ2ZHlneUxDQTRJQ29nWW5sMFpVeGxibWQwYUNsY2JseHVJQ0J5WlhSMWNtNGdkbUZzWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVsdWRFSkZJRDBnWm5WdVkzUnBiMjRnY21WaFpFbHVkRUpGSUNodlptWnpaWFFzSUdKNWRHVk1aVzVuZEdnc0lHNXZRWE56WlhKMEtTQjdYRzRnSUc5bVpuTmxkQ0E5SUc5bVpuTmxkQ0I4SURCY2JpQWdZbmwwWlV4bGJtZDBhQ0E5SUdKNWRHVk1aVzVuZEdnZ2ZDQXdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclQyWm1jMlYwS0c5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2RHaHBjeTVzWlc1bmRHZ3BYRzVjYmlBZ2RtRnlJR2tnUFNCaWVYUmxUR1Z1WjNSb1hHNGdJSFpoY2lCdGRXd2dQU0F4WEc0Z0lIWmhjaUIyWVd3Z1BTQjBhR2x6VzI5bVpuTmxkQ0FySUMwdGFWMWNiaUFnZDJocGJHVWdLR2tnUGlBd0lDWW1JQ2h0ZFd3Z0tqMGdNSGd4TURBcEtTQjdYRzRnSUNBZ2RtRnNJQ3M5SUhSb2FYTmJiMlptYzJWMElDc2dMUzFwWFNBcUlHMTFiRnh1SUNCOVhHNGdJRzExYkNBcVBTQXdlRGd3WEc1Y2JpQWdhV1lnS0haaGJDQStQU0J0ZFd3cElIWmhiQ0F0UFNCTllYUm9MbkJ2ZHlneUxDQTRJQ29nWW5sMFpVeGxibWQwYUNsY2JseHVJQ0J5WlhSMWNtNGdkbUZzWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVsdWREZ2dQU0JtZFc1amRHbHZiaUJ5WldGa1NXNTBPQ0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lERXNJSFJvYVhNdWJHVnVaM1JvS1Z4dUlDQnBaaUFvSVNoMGFHbHpXMjltWm5ObGRGMGdKaUF3ZURnd0tTa2djbVYwZFhKdUlDaDBhR2x6VzI5bVpuTmxkRjBwWEc0Z0lISmxkSFZ5YmlBb0tEQjRabVlnTFNCMGFHbHpXMjltWm5ObGRGMGdLeUF4S1NBcUlDMHhLVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuSmxZV1JKYm5ReE5reEZJRDBnWm5WdVkzUnBiMjRnY21WaFpFbHVkREUyVEVVZ0tHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0UFptWnpaWFFvYjJabWMyVjBMQ0F5TENCMGFHbHpMbXhsYm1kMGFDbGNiaUFnZG1GeUlIWmhiQ0E5SUhSb2FYTmJiMlptYzJWMFhTQjhJQ2gwYUdselcyOW1abk5sZENBcklERmRJRHc4SURncFhHNGdJSEpsZEhWeWJpQW9kbUZzSUNZZ01IZzRNREF3S1NBL0lIWmhiQ0I4SURCNFJrWkdSakF3TURBZ09pQjJZV3hjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXlaV0ZrU1c1ME1UWkNSU0E5SUdaMWJtTjBhVzl1SUhKbFlXUkpiblF4TmtKRklDaHZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclQyWm1jMlYwS0c5bVpuTmxkQ3dnTWl3Z2RHaHBjeTVzWlc1bmRHZ3BYRzRnSUhaaGNpQjJZV3dnUFNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUh3Z0tIUm9hWE5iYjJabWMyVjBYU0E4UENBNEtWeHVJQ0J5WlhSMWNtNGdLSFpoYkNBbUlEQjRPREF3TUNrZ1B5QjJZV3dnZkNBd2VFWkdSa1l3TURBd0lEb2dkbUZzWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVsdWRETXlURVVnUFNCbWRXNWpkR2x2YmlCeVpXRmtTVzUwTXpKTVJTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURRc0lIUm9hWE11YkdWdVozUm9LVnh1WEc0Z0lISmxkSFZ5YmlBb2RHaHBjMXR2Wm1aelpYUmRLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ01WMGdQRHdnT0NrZ2ZGeHVJQ0FnSUNoMGFHbHpXMjltWm5ObGRDQXJJREpkSUR3OElERTJLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ00xMGdQRHdnTWpRcFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFbHVkRE15UWtVZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrU1c1ME16SkNSU0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lEUXNJSFJvYVhNdWJHVnVaM1JvS1Z4dVhHNGdJSEpsZEhWeWJpQW9kR2hwYzF0dlptWnpaWFJkSUR3OElESTBLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ01WMGdQRHdnTVRZcElIeGNiaUFnSUNBb2RHaHBjMXR2Wm1aelpYUWdLeUF5WFNBOFBDQTRLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ00xMHBYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRVpzYjJGMFRFVWdQU0JtZFc1amRHbHZiaUJ5WldGa1JteHZZWFJNUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRFFzSUhSb2FYTXViR1Z1WjNSb0tWeHVJQ0J5WlhSMWNtNGdhV1ZsWlRjMU5DNXlaV0ZrS0hSb2FYTXNJRzltWm5ObGRDd2dkSEoxWlN3Z01qTXNJRFFwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVac2IyRjBRa1VnUFNCbWRXNWpkR2x2YmlCeVpXRmtSbXh2WVhSQ1JTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURRc0lIUm9hWE11YkdWdVozUm9LVnh1SUNCeVpYUjFjbTRnYVdWbFpUYzFOQzV5WldGa0tIUm9hWE1zSUc5bVpuTmxkQ3dnWm1Gc2MyVXNJREl6TENBMEtWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5KbFlXUkViM1ZpYkdWTVJTQTlJR1oxYm1OMGFXOXVJSEpsWVdSRWIzVmliR1ZNUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRGdzSUhSb2FYTXViR1Z1WjNSb0tWeHVJQ0J5WlhSMWNtNGdhV1ZsWlRjMU5DNXlaV0ZrS0hSb2FYTXNJRzltWm5ObGRDd2dkSEoxWlN3Z05USXNJRGdwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVSdmRXSnNaVUpGSUQwZ1puVnVZM1JwYjI0Z2NtVmhaRVJ2ZFdKc1pVSkZJQ2h2Wm1aelpYUXNJRzV2UVhOelpYSjBLU0I3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJUMlptYzJWMEtHOW1abk5sZEN3Z09Dd2dkR2hwY3k1c1pXNW5kR2dwWEc0Z0lISmxkSFZ5YmlCcFpXVmxOelUwTG5KbFlXUW9kR2hwY3l3Z2IyWm1jMlYwTENCbVlXeHpaU3dnTlRJc0lEZ3BYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTm9aV05yU1c1MElDaGlkV1lzSUhaaGJIVmxMQ0J2Wm1aelpYUXNJR1Y0ZEN3Z2JXRjRMQ0J0YVc0cElIdGNiaUFnYVdZZ0tDRkNkV1ptWlhJdWFYTkNkV1ptWlhJb1luVm1LU2tnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblhDSmlkV1ptWlhKY0lpQmhjbWQxYldWdWRDQnRkWE4wSUdKbElHRWdRblZtWm1WeUlHbHVjM1JoYm1ObEp5bGNiaUFnYVdZZ0tIWmhiSFZsSUQ0Z2JXRjRJSHg4SUhaaGJIVmxJRHdnYldsdUtTQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduWENKMllXeDFaVndpSUdGeVozVnRaVzUwSUdseklHOTFkQ0J2WmlCaWIzVnVaSE1uS1Z4dUlDQnBaaUFvYjJabWMyVjBJQ3NnWlhoMElENGdZblZtTG14bGJtZDBhQ2tnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owbHVaR1Y0SUc5MWRDQnZaaUJ5WVc1blpTY3BYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZWU1c1MFRFVWdQU0JtZFc1amRHbHZiaUIzY21sMFpWVkpiblJNUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQmllWFJsVEdWdVozUm9JRDBnWW5sMFpVeGxibWQwYUNCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dlMXh1SUNBZ0lIWmhjaUJ0WVhoQ2VYUmxjeUE5SUUxaGRHZ3VjRzkzS0RJc0lEZ2dLaUJpZVhSbFRHVnVaM1JvS1NBdElERmNiaUFnSUNCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQmllWFJsVEdWdVozUm9MQ0J0WVhoQ2VYUmxjeXdnTUNsY2JpQWdmVnh1WEc0Z0lIWmhjaUJ0ZFd3Z1BTQXhYRzRnSUhaaGNpQnBJRDBnTUZ4dUlDQjBhR2x6VzI5bVpuTmxkRjBnUFNCMllXeDFaU0FtSURCNFJrWmNiaUFnZDJocGJHVWdLQ3NyYVNBOElHSjVkR1ZNWlc1bmRHZ2dKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUdsZElEMGdLSFpoYkhWbElDOGdiWFZzS1NBbUlEQjRSa1pjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ2Wm1aelpYUWdLeUJpZVhSbFRHVnVaM1JvWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVkM0pwZEdWVlNXNTBRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVlZKYm5SQ1JTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JpZVhSbFRHVnVaM1JvSUQwZ1lubDBaVXhsYm1kMGFDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnZTF4dUlDQWdJSFpoY2lCdFlYaENlWFJsY3lBOUlFMWhkR2d1Y0c5M0tESXNJRGdnS2lCaWVYUmxUR1Z1WjNSb0tTQXRJREZjYmlBZ0lDQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCdFlYaENlWFJsY3l3Z01DbGNiaUFnZlZ4dVhHNGdJSFpoY2lCcElEMGdZbmwwWlV4bGJtZDBhQ0F0SURGY2JpQWdkbUZ5SUcxMWJDQTlJREZjYmlBZ2RHaHBjMXR2Wm1aelpYUWdLeUJwWFNBOUlIWmhiSFZsSUNZZ01IaEdSbHh1SUNCM2FHbHNaU0FvTFMxcElENDlJREFnSmlZZ0tHMTFiQ0FxUFNBd2VERXdNQ2twSUh0Y2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklHbGRJRDBnS0haaGJIVmxJQzhnYlhWc0tTQW1JREI0UmtaY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCdlptWnpaWFFnS3lCaWVYUmxUR1Z1WjNSb1hHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlZTVzUwT0NBOUlHWjFibU4wYVc5dUlIZHlhWFJsVlVsdWREZ2dLSFpoYkhWbExDQnZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUhaaGJIVmxJRDBnSzNaaGJIVmxYRzRnSUc5bVpuTmxkQ0E5SUc5bVpuTmxkQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRKYm5Rb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dNU3dnTUhobVppd2dNQ2xjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ2tnZG1Gc2RXVWdQU0JOWVhSb0xtWnNiMjl5S0haaGJIVmxLVnh1SUNCMGFHbHpXMjltWm5ObGRGMGdQU0FvZG1Gc2RXVWdKaUF3ZUdabUtWeHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dNVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnZZbXBsWTNSWGNtbDBaVlZKYm5ReE5pQW9ZblZtTENCMllXeDFaU3dnYjJabWMyVjBMQ0JzYVhSMGJHVkZibVJwWVc0cElIdGNiaUFnYVdZZ0tIWmhiSFZsSUR3Z01Da2dkbUZzZFdVZ1BTQXdlR1ptWm1ZZ0t5QjJZV3gxWlNBcklERmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQXNJR29nUFNCTllYUm9MbTFwYmloaWRXWXViR1Z1WjNSb0lDMGdiMlptYzJWMExDQXlLVHNnYVNBOElHbzdJQ3NyYVNrZ2UxeHVJQ0FnSUdKMVpsdHZabVp6WlhRZ0t5QnBYU0E5SUNoMllXeDFaU0FtSUNnd2VHWm1JRHc4SUNnNElDb2dLR3hwZEhSc1pVVnVaR2xoYmlBL0lHa2dPaUF4SUMwZ2FTa3BLU2tnUGo0K1hHNGdJQ0FnSUNBb2JHbDBkR3hsUlc1a2FXRnVJRDhnYVNBNklERWdMU0JwS1NBcUlEaGNiaUFnZlZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFZVbHVkREUyVEVVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlZWSmJuUXhOa3hGSUNoMllXeDFaU3dnYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQjJZV3gxWlNBOUlDdDJZV3gxWlZ4dUlDQnZabVp6WlhRZ1BTQnZabVp6WlhRZ2ZDQXdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclNXNTBLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSURJc0lEQjRabVptWml3Z01DbGNiaUFnYVdZZ0tFSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUtTQjdYRzRnSUNBZ2RHaHBjMXR2Wm1aelpYUmRJRDBnS0haaGJIVmxJQ1lnTUhobVppbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUQwZ0tIWmhiSFZsSUQ0K1BpQTRLVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJRzlpYW1WamRGZHlhWFJsVlVsdWRERTJLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSUhSeWRXVXBYRzRnSUgxY2JpQWdjbVYwZFhKdUlHOW1abk5sZENBcklESmNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVlZKYm5ReE5rSkZJRDBnWm5WdVkzUnBiMjRnZDNKcGRHVlZTVzUwTVRaQ1JTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQXlMQ0F3ZUdabVptWXNJREFwWEc0Z0lHbG1JQ2hDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ2tnZTF4dUlDQWdJSFJvYVhOYmIyWm1jMlYwWFNBOUlDaDJZV3gxWlNBK1BqNGdPQ2xjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySURGZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCdlltcGxZM1JYY21sMFpWVkpiblF4TmloMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQm1ZV3h6WlNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnTWx4dWZWeHVYRzVtZFc1amRHbHZiaUJ2WW1wbFkzUlhjbWwwWlZWSmJuUXpNaUFvWW5WbUxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCc2FYUjBiR1ZGYm1ScFlXNHBJSHRjYmlBZ2FXWWdLSFpoYkhWbElEd2dNQ2tnZG1Gc2RXVWdQU0F3ZUdabVptWm1abVptSUNzZ2RtRnNkV1VnS3lBeFhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd0xDQnFJRDBnVFdGMGFDNXRhVzRvWW5WbUxteGxibWQwYUNBdElHOW1abk5sZEN3Z05DazdJR2tnUENCcU95QXJLMmtwSUh0Y2JpQWdJQ0JpZFdaYmIyWm1jMlYwSUNzZ2FWMGdQU0FvZG1Gc2RXVWdQajQrSUNoc2FYUjBiR1ZGYm1ScFlXNGdQeUJwSURvZ015QXRJR2twSUNvZ09Da2dKaUF3ZUdabVhHNGdJSDFjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlZWSmJuUXpNa3hGSUQwZ1puVnVZM1JwYjI0Z2QzSnBkR1ZWU1c1ME16Sk1SU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0EwTENBd2VHWm1abVptWm1abUxDQXdLVnh1SUNCcFppQW9RblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUXBJSHRjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUROZElEMGdLSFpoYkhWbElENCtQaUF5TkNsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklESmRJRDBnS0haaGJIVmxJRDQrUGlBeE5pbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUQwZ0tIWmhiSFZsSUQ0K1BpQTRLVnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBYU0E5SUNoMllXeDFaU0FtSURCNFptWXBYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdiMkpxWldOMFYzSnBkR1ZWU1c1ME16SW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnZEhKMVpTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ05GeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxWVWx1ZERNeVFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpWVkpiblF6TWtKRklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0IyWVd4MVpTQTlJQ3QyWVd4MVpWeHVJQ0J2Wm1aelpYUWdQU0J2Wm1aelpYUWdmQ0F3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJTVzUwS0hSb2FYTXNJSFpoYkhWbExDQnZabVp6WlhRc0lEUXNJREI0Wm1abVptWm1abVlzSURBcFhHNGdJR2xtSUNoQ2RXWm1aWEl1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkNrZ2UxeHVJQ0FnSUhSb2FYTmJiMlptYzJWMFhTQTlJQ2gyWVd4MVpTQStQajRnTWpRcFhHNGdJQ0FnZEdocGMxdHZabVp6WlhRZ0t5QXhYU0E5SUNoMllXeDFaU0ErUGo0Z01UWXBYRzRnSUNBZ2RHaHBjMXR2Wm1aelpYUWdLeUF5WFNBOUlDaDJZV3gxWlNBK1BqNGdPQ2xjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUROZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCdlltcGxZM1JYY21sMFpWVkpiblF6TWloMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQm1ZV3h6WlNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnTkZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFNXNTBURVVnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVWx1ZEV4RklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnViMEZ6YzJWeWRDa2dlMXh1SUNCMllXeDFaU0E5SUN0MllXeDFaVnh1SUNCdlptWnpaWFFnUFNCdlptWnpaWFFnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElIdGNiaUFnSUNCMllYSWdiR2x0YVhRZ1BTQk5ZWFJvTG5CdmR5Z3lMQ0E0SUNvZ1lubDBaVXhsYm1kMGFDQXRJREVwWEc1Y2JpQWdJQ0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnNhVzFwZENBdElERXNJQzFzYVcxcGRDbGNiaUFnZlZ4dVhHNGdJSFpoY2lCcElEMGdNRnh1SUNCMllYSWdiWFZzSUQwZ01WeHVJQ0IyWVhJZ2MzVmlJRDBnTUZ4dUlDQjBhR2x6VzI5bVpuTmxkRjBnUFNCMllXeDFaU0FtSURCNFJrWmNiaUFnZDJocGJHVWdLQ3NyYVNBOElHSjVkR1ZNWlc1bmRHZ2dKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQnBaaUFvZG1Gc2RXVWdQQ0F3SUNZbUlITjFZaUE5UFQwZ01DQW1KaUIwYUdselcyOW1abk5sZENBcklHa2dMU0F4WFNBaFBUMGdNQ2tnZTF4dUlDQWdJQ0FnYzNWaUlEMGdNVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJR2xkSUQwZ0tDaDJZV3gxWlNBdklHMTFiQ2tnUGo0Z01Da2dMU0J6ZFdJZ0ppQXdlRVpHWEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnWW5sMFpVeGxibWQwYUZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFNXNTBRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVWx1ZEVKRklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnViMEZ6YzJWeWRDa2dlMXh1SUNCMllXeDFaU0E5SUN0MllXeDFaVnh1SUNCdlptWnpaWFFnUFNCdlptWnpaWFFnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElIdGNiaUFnSUNCMllYSWdiR2x0YVhRZ1BTQk5ZWFJvTG5CdmR5Z3lMQ0E0SUNvZ1lubDBaVXhsYm1kMGFDQXRJREVwWEc1Y2JpQWdJQ0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnNhVzFwZENBdElERXNJQzFzYVcxcGRDbGNiaUFnZlZ4dVhHNGdJSFpoY2lCcElEMGdZbmwwWlV4bGJtZDBhQ0F0SURGY2JpQWdkbUZ5SUcxMWJDQTlJREZjYmlBZ2RtRnlJSE4xWWlBOUlEQmNiaUFnZEdocGMxdHZabVp6WlhRZ0t5QnBYU0E5SUhaaGJIVmxJQ1lnTUhoR1JseHVJQ0IzYUdsc1pTQW9MUzFwSUQ0OUlEQWdKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQnBaaUFvZG1Gc2RXVWdQQ0F3SUNZbUlITjFZaUE5UFQwZ01DQW1KaUIwYUdselcyOW1abk5sZENBcklHa2dLeUF4WFNBaFBUMGdNQ2tnZTF4dUlDQWdJQ0FnYzNWaUlEMGdNVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJR2xkSUQwZ0tDaDJZV3gxWlNBdklHMTFiQ2tnUGo0Z01Da2dMU0J6ZFdJZ0ppQXdlRVpHWEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnWW5sMFpVeGxibWQwYUZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFNXNTBPQ0E5SUdaMWJtTjBhVzl1SUhkeWFYUmxTVzUwT0NBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENBeExDQXdlRGRtTENBdE1IZzRNQ2xjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ2tnZG1Gc2RXVWdQU0JOWVhSb0xtWnNiMjl5S0haaGJIVmxLVnh1SUNCcFppQW9kbUZzZFdVZ1BDQXdLU0IyWVd4MVpTQTlJREI0Wm1ZZ0t5QjJZV3gxWlNBcklERmNiaUFnZEdocGMxdHZabVp6WlhSZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdjbVYwZFhKdUlHOW1abk5sZENBcklERmNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVWx1ZERFMlRFVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVbHVkREUyVEVVZ0tIWmhiSFZsTENCdlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJSFpoYkhWbElEMGdLM1poYkhWbFhHNGdJRzltWm5ObGRDQTlJRzltWm5ObGRDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydEpiblFvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z01pd2dNSGczWm1abUxDQXRNSGc0TURBd0tWeHVJQ0JwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnSUNCMGFHbHpXMjltWm5ObGRGMGdQU0FvZG1Gc2RXVWdKaUF3ZUdabUtWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNVjBnUFNBb2RtRnNkV1VnUGo0K0lEZ3BYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdiMkpxWldOMFYzSnBkR1ZWU1c1ME1UWW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnZEhKMVpTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ01seHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxTVzUwTVRaQ1JTQTlJR1oxYm1OMGFXOXVJSGR5YVhSbFNXNTBNVFpDUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENBeUxDQXdlRGRtWm1Zc0lDMHdlRGd3TURBcFhHNGdJR2xtSUNoQ2RXWm1aWEl1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkNrZ2UxeHVJQ0FnSUhSb2FYTmJiMlptYzJWMFhTQTlJQ2gyWVd4MVpTQStQajRnT0NsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklERmRJRDBnS0haaGJIVmxJQ1lnTUhobVppbGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnZZbXBsWTNSWGNtbDBaVlZKYm5ReE5paDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JtWVd4elpTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ01seHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxTVzUwTXpKTVJTQTlJR1oxYm1OMGFXOXVJSGR5YVhSbFNXNTBNekpNUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENBMExDQXdlRGRtWm1abVptWm1MQ0F0TUhnNE1EQXdNREF3TUNsY2JpQWdhV1lnS0VKMVptWmxjaTVVV1ZCRlJGOUJVbEpCV1Y5VFZWQlFUMUpVS1NCN1hHNGdJQ0FnZEdocGMxdHZabVp6WlhSZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklERmRJRDBnS0haaGJIVmxJRDQrUGlBNEtWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNbDBnUFNBb2RtRnNkV1VnUGo0K0lERTJLVnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBJQ3NnTTEwZ1BTQW9kbUZzZFdVZ1BqNCtJREkwS1Z4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUc5aWFtVmpkRmR5YVhSbFZVbHVkRE15S0hSb2FYTXNJSFpoYkhWbExDQnZabVp6WlhRc0lIUnlkV1VwWEc0Z0lIMWNiaUFnY21WMGRYSnVJRzltWm5ObGRDQXJJRFJjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlVsdWRETXlRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVWx1ZERNeVFrVWdLSFpoYkhWbExDQnZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUhaaGJIVmxJRDBnSzNaaGJIVmxYRzRnSUc5bVpuTmxkQ0E5SUc5bVpuTmxkQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRKYm5Rb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dOQ3dnTUhnM1ptWm1abVptWml3Z0xUQjRPREF3TURBd01EQXBYRzRnSUdsbUlDaDJZV3gxWlNBOElEQXBJSFpoYkhWbElEMGdNSGhtWm1abVptWm1aaUFySUhaaGJIVmxJQ3NnTVZ4dUlDQnBaaUFvUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFwSUh0Y2JpQWdJQ0IwYUdselcyOW1abk5sZEYwZ1BTQW9kbUZzZFdVZ1BqNCtJREkwS1Z4dUlDQWdJSFJvYVhOYmIyWm1jMlYwSUNzZ01WMGdQU0FvZG1Gc2RXVWdQajQrSURFMktWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNbDBnUFNBb2RtRnNkV1VnUGo0K0lEZ3BYRzRnSUNBZ2RHaHBjMXR2Wm1aelpYUWdLeUF6WFNBOUlDaDJZV3gxWlNBbUlEQjRabVlwWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYjJKcVpXTjBWM0pwZEdWVlNXNTBNeklvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z1ptRnNjMlVwWEc0Z0lIMWNiaUFnY21WMGRYSnVJRzltWm5ObGRDQXJJRFJjYm4xY2JseHVablZ1WTNScGIyNGdZMmhsWTJ0SlJVVkZOelUwSUNoaWRXWXNJSFpoYkhWbExDQnZabVp6WlhRc0lHVjRkQ3dnYldGNExDQnRhVzRwSUh0Y2JpQWdhV1lnS0c5bVpuTmxkQ0FySUdWNGRDQStJR0oxWmk1c1pXNW5kR2dwSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEpibVJsZUNCdmRYUWdiMllnY21GdVoyVW5LVnh1SUNCcFppQW9iMlptYzJWMElEd2dNQ2tnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owbHVaR1Y0SUc5MWRDQnZaaUJ5WVc1blpTY3BYRzU5WEc1Y2JtWjFibU4wYVc5dUlIZHlhWFJsUm14dllYUWdLR0oxWml3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnYkdsMGRHeGxSVzVrYVdGdUxDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0I3WEc0Z0lDQWdZMmhsWTJ0SlJVVkZOelUwS0dKMVppd2dkbUZzZFdVc0lHOW1abk5sZEN3Z05Dd2dNeTQwTURJNE1qTTBOall6T0RVeU9EZzJaU3N6T0N3Z0xUTXVOREF5T0RJek5EWTJNemcxTWpnNE5tVXJNemdwWEc0Z0lIMWNiaUFnYVdWbFpUYzFOQzUzY21sMFpTaGlkV1lzSUhaaGJIVmxMQ0J2Wm1aelpYUXNJR3hwZEhSc1pVVnVaR2xoYml3Z01qTXNJRFFwWEc0Z0lISmxkSFZ5YmlCdlptWnpaWFFnS3lBMFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1ZDNKcGRHVkdiRzloZEV4RklEMGdablZ1WTNScGIyNGdkM0pwZEdWR2JHOWhkRXhGSUNoMllXeDFaU3dnYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnlaWFIxY200Z2QzSnBkR1ZHYkc5aGRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0IwY25WbExDQnViMEZ6YzJWeWRDbGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVVpzYjJGMFFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVWnNiMkYwUWtVZ0tIWmhiSFZsTENCdlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJSEpsZEhWeWJpQjNjbWwwWlVac2IyRjBLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSUdaaGJITmxMQ0J1YjBGemMyVnlkQ2xjYm4xY2JseHVablZ1WTNScGIyNGdkM0pwZEdWRWIzVmliR1VnS0dKMVppd2dkbUZzZFdVc0lHOW1abk5sZEN3Z2JHbDBkR3hsUlc1a2FXRnVMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCN1hHNGdJQ0FnWTJobFkydEpSVVZGTnpVMEtHSjFaaXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dPQ3dnTVM0M09UYzJPVE14TXpRNE5qSXpNVFUzUlNzek1EZ3NJQzB4TGpjNU56WTVNekV6TkRnMk1qTXhOVGRGS3pNd09DbGNiaUFnZlZ4dUlDQnBaV1ZsTnpVMExuZHlhWFJsS0dKMVppd2dkbUZzZFdVc0lHOW1abk5sZEN3Z2JHbDBkR3hsUlc1a2FXRnVMQ0ExTWl3Z09DbGNiaUFnY21WMGRYSnVJRzltWm5ObGRDQXJJRGhjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlVSdmRXSnNaVXhGSUQwZ1puVnVZM1JwYjI0Z2QzSnBkR1ZFYjNWaWJHVk1SU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2NtVjBkWEp1SUhkeWFYUmxSRzkxWW14bEtIUm9hWE1zSUhaaGJIVmxMQ0J2Wm1aelpYUXNJSFJ5ZFdVc0lHNXZRWE56WlhKMEtWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxSRzkxWW14bFFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVUnZkV0pzWlVKRklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0J5WlhSMWNtNGdkM0pwZEdWRWIzVmliR1VvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z1ptRnNjMlVzSUc1dlFYTnpaWEowS1Z4dWZWeHVYRzR2THlCamIzQjVLSFJoY21kbGRFSjFabVpsY2l3Z2RHRnlaMlYwVTNSaGNuUTlNQ3dnYzI5MWNtTmxVM1JoY25ROU1Dd2djMjkxY21ObFJXNWtQV0oxWm1abGNpNXNaVzVuZEdncFhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExtTnZjSGtnUFNCbWRXNWpkR2x2YmlCamIzQjVJQ2gwWVhKblpYUXNJSFJoY21kbGRGTjBZWEowTENCemRHRnlkQ3dnWlc1a0tTQjdYRzRnSUdsbUlDZ2hjM1JoY25RcElITjBZWEowSUQwZ01GeHVJQ0JwWmlBb0lXVnVaQ0FtSmlCbGJtUWdJVDA5SURBcElHVnVaQ0E5SUhSb2FYTXViR1Z1WjNSb1hHNGdJR2xtSUNoMFlYSm5aWFJUZEdGeWRDQStQU0IwWVhKblpYUXViR1Z1WjNSb0tTQjBZWEpuWlhSVGRHRnlkQ0E5SUhSaGNtZGxkQzVzWlc1bmRHaGNiaUFnYVdZZ0tDRjBZWEpuWlhSVGRHRnlkQ2tnZEdGeVoyVjBVM1JoY25RZ1BTQXdYRzRnSUdsbUlDaGxibVFnUGlBd0lDWW1JR1Z1WkNBOElITjBZWEowS1NCbGJtUWdQU0J6ZEdGeWRGeHVYRzRnSUM4dklFTnZjSGtnTUNCaWVYUmxjenNnZDJVbmNtVWdaRzl1WlZ4dUlDQnBaaUFvWlc1a0lEMDlQU0J6ZEdGeWRDa2djbVYwZFhKdUlEQmNiaUFnYVdZZ0tIUmhjbWRsZEM1c1pXNW5kR2dnUFQwOUlEQWdmSHdnZEdocGN5NXNaVzVuZEdnZ1BUMDlJREFwSUhKbGRIVnliaUF3WEc1Y2JpQWdMeThnUm1GMFlXd2daWEp5YjNJZ1kyOXVaR2wwYVc5dWMxeHVJQ0JwWmlBb2RHRnlaMlYwVTNSaGNuUWdQQ0F3S1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0ozUmhjbWRsZEZOMFlYSjBJRzkxZENCdlppQmliM1Z1WkhNbktWeHVJQ0I5WEc0Z0lHbG1JQ2h6ZEdGeWRDQThJREFnZkh3Z2MzUmhjblFnUGowZ2RHaHBjeTVzWlc1bmRHZ3BJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkemIzVnlZMlZUZEdGeWRDQnZkWFFnYjJZZ1ltOTFibVJ6SnlsY2JpQWdhV1lnS0dWdVpDQThJREFwSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZHpiM1Z5WTJWRmJtUWdiM1YwSUc5bUlHSnZkVzVrY3ljcFhHNWNiaUFnTHk4Z1FYSmxJSGRsSUc5dllqOWNiaUFnYVdZZ0tHVnVaQ0ErSUhSb2FYTXViR1Z1WjNSb0tTQmxibVFnUFNCMGFHbHpMbXhsYm1kMGFGeHVJQ0JwWmlBb2RHRnlaMlYwTG14bGJtZDBhQ0F0SUhSaGNtZGxkRk4wWVhKMElEd2daVzVrSUMwZ2MzUmhjblFwSUh0Y2JpQWdJQ0JsYm1RZ1BTQjBZWEpuWlhRdWJHVnVaM1JvSUMwZ2RHRnlaMlYwVTNSaGNuUWdLeUJ6ZEdGeWRGeHVJQ0I5WEc1Y2JpQWdkbUZ5SUd4bGJpQTlJR1Z1WkNBdElITjBZWEowWEc0Z0lIWmhjaUJwWEc1Y2JpQWdhV1lnS0hSb2FYTWdQVDA5SUhSaGNtZGxkQ0FtSmlCemRHRnlkQ0E4SUhSaGNtZGxkRk4wWVhKMElDWW1JSFJoY21kbGRGTjBZWEowSUR3Z1pXNWtLU0I3WEc0Z0lDQWdMeThnWkdWelkyVnVaR2x1WnlCamIzQjVJR1p5YjIwZ1pXNWtYRzRnSUNBZ1ptOXlJQ2hwSUQwZ2JHVnVJQzBnTVRzZ2FTQStQU0F3T3lBdExXa3BJSHRjYmlBZ0lDQWdJSFJoY21kbGRGdHBJQ3NnZEdGeVoyVjBVM1JoY25SZElEMGdkR2hwYzF0cElDc2djM1JoY25SZFhHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2FXWWdLR3hsYmlBOElERXdNREFnZkh3Z0lVSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUtTQjdYRzRnSUNBZ0x5OGdZWE5qWlc1a2FXNW5JR052Y0hrZ1puSnZiU0J6ZEdGeWRGeHVJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0JzWlc0N0lDc3JhU2tnZTF4dUlDQWdJQ0FnZEdGeVoyVjBXMmtnS3lCMFlYSm5aWFJUZEdGeWRGMGdQU0IwYUdselcya2dLeUJ6ZEdGeWRGMWNiaUFnSUNCOVhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1ZXbHVkRGhCY25KaGVTNXdjbTkwYjNSNWNHVXVjMlYwTG1OaGJHd29YRzRnSUNBZ0lDQjBZWEpuWlhRc1hHNGdJQ0FnSUNCMGFHbHpMbk4xWW1GeWNtRjVLSE4wWVhKMExDQnpkR0Z5ZENBcklHeGxiaWtzWEc0Z0lDQWdJQ0IwWVhKblpYUlRkR0Z5ZEZ4dUlDQWdJQ2xjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJzWlc1Y2JuMWNibHh1THk4Z1ZYTmhaMlU2WEc0dkx5QWdJQ0JpZFdabVpYSXVabWxzYkNodWRXMWlaWEpiTENCdlptWnpaWFJiTENCbGJtUmRYU2xjYmk4dklDQWdJR0oxWm1abGNpNW1hV3hzS0dKMVptWmxjbHNzSUc5bVpuTmxkRnNzSUdWdVpGMWRLVnh1THk4Z0lDQWdZblZtWm1WeUxtWnBiR3dvYzNSeWFXNW5XeXdnYjJabWMyVjBXeXdnWlc1a1hWMWJMQ0JsYm1OdlpHbHVaMTBwWEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG1acGJHd2dQU0JtZFc1amRHbHZiaUJtYVd4c0lDaDJZV3dzSUhOMFlYSjBMQ0JsYm1Rc0lHVnVZMjlrYVc1bktTQjdYRzRnSUM4dklFaGhibVJzWlNCemRISnBibWNnWTJGelpYTTZYRzRnSUdsbUlDaDBlWEJsYjJZZ2RtRnNJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2MzUmhjblFnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQmxibU52WkdsdVp5QTlJSE4wWVhKMFhHNGdJQ0FnSUNCemRHRnlkQ0E5SURCY2JpQWdJQ0FnSUdWdVpDQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdaVzVrSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lDQWdaVzVqYjJScGJtY2dQU0JsYm1SY2JpQWdJQ0FnSUdWdVpDQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gyWVd3dWJHVnVaM1JvSUQwOVBTQXhLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1kyOWtaU0E5SUhaaGJDNWphR0Z5UTI5a1pVRjBLREFwWEc0Z0lDQWdJQ0JwWmlBb1kyOWtaU0E4SURJMU5pa2dlMXh1SUNBZ0lDQWdJQ0IyWVd3Z1BTQmpiMlJsWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2hsYm1OdlpHbHVaeUFoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFI1Y0dWdlppQmxibU52WkdsdVp5QWhQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oyVnVZMjlrYVc1bklHMTFjM1FnWW1VZ1lTQnpkSEpwYm1jbktWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdWdVkyOWthVzVuSUQwOVBTQW5jM1J5YVc1bkp5QW1KaUFoUW5WbVptVnlMbWx6Ulc1amIyUnBibWNvWlc1amIyUnBibWNwS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZFZibXR1YjNkdUlHVnVZMjlrYVc1bk9pQW5JQ3NnWlc1amIyUnBibWNwWEc0Z0lDQWdmVnh1SUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCMllXd2dQVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnZG1Gc0lEMGdkbUZzSUNZZ01qVTFYRzRnSUgxY2JseHVJQ0F2THlCSmJuWmhiR2xrSUhKaGJtZGxjeUJoY21VZ2JtOTBJSE5sZENCMGJ5QmhJR1JsWm1GMWJIUXNJSE52SUdOaGJpQnlZVzVuWlNCamFHVmpheUJsWVhKc2VTNWNiaUFnYVdZZ0tITjBZWEowSUR3Z01DQjhmQ0IwYUdsekxteGxibWQwYUNBOElITjBZWEowSUh4OElIUm9hWE11YkdWdVozUm9JRHdnWlc1a0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGSmhibWRsUlhKeWIzSW9KMDkxZENCdlppQnlZVzVuWlNCcGJtUmxlQ2NwWEc0Z0lIMWNibHh1SUNCcFppQW9aVzVrSUR3OUlITjBZWEowS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1WEc0Z0lITjBZWEowSUQwZ2MzUmhjblFnUGo0K0lEQmNiaUFnWlc1a0lEMGdaVzVrSUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxteGxibWQwYUNBNklHVnVaQ0ErUGo0Z01GeHVYRzRnSUdsbUlDZ2hkbUZzS1NCMllXd2dQU0F3WEc1Y2JpQWdkbUZ5SUdsY2JpQWdhV1lnS0hSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc0Z0lDQWdabTl5SUNocElEMGdjM1JoY25RN0lHa2dQQ0JsYm1RN0lDc3JhU2tnZTF4dUlDQWdJQ0FnZEdocGMxdHBYU0E5SUhaaGJGeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdZbmwwWlhNZ1BTQkNkV1ptWlhJdWFYTkNkV1ptWlhJb2RtRnNLVnh1SUNBZ0lDQWdQeUIyWVd4Y2JpQWdJQ0FnSURvZ2RYUm1PRlJ2UW5sMFpYTW9ibVYzSUVKMVptWmxjaWgyWVd3c0lHVnVZMjlrYVc1bktTNTBiMU4wY21sdVp5Z3BLVnh1SUNBZ0lIWmhjaUJzWlc0Z1BTQmllWFJsY3k1c1pXNW5kR2hjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z1pXNWtJQzBnYzNSaGNuUTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjMXRwSUNzZ2MzUmhjblJkSUQwZ1lubDBaWE5iYVNBbElHeGxibDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdkR2hwYzF4dWZWeHVYRzR2THlCSVJVeFFSVklnUmxWT1ExUkpUMDVUWEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNiblpoY2lCSlRsWkJURWxFWDBKQlUwVTJORjlTUlNBOUlDOWJYaXRjWEM4d0xUbEJMVnBoTFhvdFgxMHZaMXh1WEc1bWRXNWpkR2x2YmlCaVlYTmxOalJqYkdWaGJpQW9jM1J5S1NCN1hHNGdJQzh2SUU1dlpHVWdjM1J5YVhCeklHOTFkQ0JwYm5aaGJHbGtJR05vWVhKaFkzUmxjbk1nYkdsclpTQmNYRzRnWVc1a0lGeGNkQ0JtY205dElIUm9aU0J6ZEhKcGJtY3NJR0poYzJVMk5DMXFjeUJrYjJWeklHNXZkRnh1SUNCemRISWdQU0J6ZEhKcGJtZDBjbWx0S0hOMGNpa3VjbVZ3YkdGalpTaEpUbFpCVEVsRVgwSkJVMFUyTkY5U1JTd2dKeWNwWEc0Z0lDOHZJRTV2WkdVZ1kyOXVkbVZ5ZEhNZ2MzUnlhVzVuY3lCM2FYUm9JR3hsYm1kMGFDQThJRElnZEc4Z0p5ZGNiaUFnYVdZZ0tITjBjaTVzWlc1bmRHZ2dQQ0F5S1NCeVpYUjFjbTRnSnlkY2JpQWdMeThnVG05a1pTQmhiR3h2ZDNNZ1ptOXlJRzV2Ymkxd1lXUmtaV1FnWW1GelpUWTBJSE4wY21sdVozTWdLRzFwYzNOcGJtY2dkSEpoYVd4cGJtY2dQVDA5S1N3Z1ltRnpaVFkwTFdweklHUnZaWE1nYm05MFhHNGdJSGRvYVd4bElDaHpkSEl1YkdWdVozUm9JQ1VnTkNBaFBUMGdNQ2tnZTF4dUlDQWdJSE4wY2lBOUlITjBjaUFySUNjOUoxeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCemRISmNibjFjYmx4dVpuVnVZM1JwYjI0Z2MzUnlhVzVuZEhKcGJTQW9jM1J5S1NCN1hHNGdJR2xtSUNoemRISXVkSEpwYlNrZ2NtVjBkWEp1SUhOMGNpNTBjbWx0S0NsY2JpQWdjbVYwZFhKdUlITjBjaTV5WlhCc1lXTmxLQzllWEZ4ekszeGNYSE1ySkM5bkxDQW5KeWxjYm4xY2JseHVablZ1WTNScGIyNGdkRzlJWlhnZ0tHNHBJSHRjYmlBZ2FXWWdLRzRnUENBeE5pa2djbVYwZFhKdUlDY3dKeUFySUc0dWRHOVRkSEpwYm1jb01UWXBYRzRnSUhKbGRIVnliaUJ1TG5SdlUzUnlhVzVuS0RFMktWeHVmVnh1WEc1bWRXNWpkR2x2YmlCMWRHWTRWRzlDZVhSbGN5QW9jM1J5YVc1bkxDQjFibWwwY3lrZ2UxeHVJQ0IxYm1sMGN5QTlJSFZ1YVhSeklIeDhJRWx1Wm1sdWFYUjVYRzRnSUhaaGNpQmpiMlJsVUc5cGJuUmNiaUFnZG1GeUlHeGxibWQwYUNBOUlITjBjbWx1Wnk1c1pXNW5kR2hjYmlBZ2RtRnlJR3hsWVdSVGRYSnliMmRoZEdVZ1BTQnVkV3hzWEc0Z0lIWmhjaUJpZVhSbGN5QTlJRnRkWEc1Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUdOdlpHVlFiMmx1ZENBOUlITjBjbWx1Wnk1amFHRnlRMjlrWlVGMEtHa3BYRzVjYmlBZ0lDQXZMeUJwY3lCemRYSnliMmRoZEdVZ1kyOXRjRzl1Wlc1MFhHNGdJQ0FnYVdZZ0tHTnZaR1ZRYjJsdWRDQStJREI0UkRkR1JpQW1KaUJqYjJSbFVHOXBiblFnUENBd2VFVXdNREFwSUh0Y2JpQWdJQ0FnSUM4dklHeGhjM1FnWTJoaGNpQjNZWE1nWVNCc1pXRmtYRzRnSUNBZ0lDQnBaaUFvSVd4bFlXUlRkWEp5YjJkaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2JtOGdiR1ZoWkNCNVpYUmNiaUFnSUNBZ0lDQWdhV1lnS0dOdlpHVlFiMmx1ZENBK0lEQjRSRUpHUmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUhWdVpYaHdaV04wWldRZ2RISmhhV3hjYmlBZ0lDQWdJQ0FnSUNCcFppQW9LSFZ1YVhSeklDMDlJRE1wSUQ0Z0xURXBJR0o1ZEdWekxuQjFjMmdvTUhoRlJpd2dNSGhDUml3Z01IaENSQ2xjYmlBZ0lDQWdJQ0FnSUNCamIyNTBhVzUxWlZ4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHa2dLeUF4SUQwOVBTQnNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0F2THlCMWJuQmhhWEpsWkNCc1pXRmtYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tDaDFibWwwY3lBdFBTQXpLU0ErSUMweEtTQmllWFJsY3k1d2RYTm9LREI0UlVZc0lEQjRRa1lzSURCNFFrUXBYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHbHVkV1ZjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJSFpoYkdsa0lHeGxZV1JjYmlBZ0lDQWdJQ0FnYkdWaFpGTjFjbkp2WjJGMFpTQTlJR052WkdWUWIybHVkRnh1WEc0Z0lDQWdJQ0FnSUdOdmJuUnBiblZsWEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklESWdiR1ZoWkhNZ2FXNGdZU0J5YjNkY2JpQWdJQ0FnSUdsbUlDaGpiMlJsVUc5cGJuUWdQQ0F3ZUVSRE1EQXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDaDFibWwwY3lBdFBTQXpLU0ErSUMweEtTQmllWFJsY3k1d2RYTm9LREI0UlVZc0lEQjRRa1lzSURCNFFrUXBYRzRnSUNBZ0lDQWdJR3hsWVdSVGRYSnliMmRoZEdVZ1BTQmpiMlJsVUc5cGJuUmNiaUFnSUNBZ0lDQWdZMjl1ZEdsdWRXVmNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnZG1Gc2FXUWdjM1Z5Y205bllYUmxJSEJoYVhKY2JpQWdJQ0FnSUdOdlpHVlFiMmx1ZENBOUlDaHNaV0ZrVTNWeWNtOW5ZWFJsSUMwZ01IaEVPREF3SUR3OElERXdJSHdnWTI5a1pWQnZhVzUwSUMwZ01IaEVRekF3S1NBcklEQjRNVEF3TURCY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0d4bFlXUlRkWEp5YjJkaGRHVXBJSHRjYmlBZ0lDQWdJQzh2SUhaaGJHbGtJR0p0Y0NCamFHRnlMQ0JpZFhRZ2JHRnpkQ0JqYUdGeUlIZGhjeUJoSUd4bFlXUmNiaUFnSUNBZ0lHbG1JQ2dvZFc1cGRITWdMVDBnTXlrZ1BpQXRNU2tnWW5sMFpYTXVjSFZ6YUNnd2VFVkdMQ0F3ZUVKR0xDQXdlRUpFS1Z4dUlDQWdJSDFjYmx4dUlDQWdJR3hsWVdSVGRYSnliMmRoZEdVZ1BTQnVkV3hzWEc1Y2JpQWdJQ0F2THlCbGJtTnZaR1VnZFhSbU9GeHVJQ0FnSUdsbUlDaGpiMlJsVUc5cGJuUWdQQ0F3ZURnd0tTQjdYRzRnSUNBZ0lDQnBaaUFvS0hWdWFYUnpJQzA5SURFcElEd2dNQ2tnWW5KbFlXdGNiaUFnSUNBZ0lHSjVkR1Z6TG5CMWMyZ29ZMjlrWlZCdmFXNTBLVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9ZMjlrWlZCdmFXNTBJRHdnTUhnNE1EQXBJSHRjYmlBZ0lDQWdJR2xtSUNnb2RXNXBkSE1nTFQwZ01pa2dQQ0F3S1NCaWNtVmhhMXh1SUNBZ0lDQWdZbmwwWlhNdWNIVnphQ2hjYmlBZ0lDQWdJQ0FnWTI5a1pWQnZhVzUwSUQ0K0lEQjROaUI4SURCNFF6QXNYRzRnSUNBZ0lDQWdJR052WkdWUWIybHVkQ0FtSURCNE0wWWdmQ0F3ZURnd1hHNGdJQ0FnSUNBcFhHNGdJQ0FnZlNCbGJITmxJR2xtSUNoamIyUmxVRzlwYm5RZ1BDQXdlREV3TURBd0tTQjdYRzRnSUNBZ0lDQnBaaUFvS0hWdWFYUnpJQzA5SURNcElEd2dNQ2tnWW5KbFlXdGNiaUFnSUNBZ0lHSjVkR1Z6TG5CMWMyZ29YRzRnSUNBZ0lDQWdJR052WkdWUWIybHVkQ0ErUGlBd2VFTWdmQ0F3ZUVVd0xGeHVJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQajRnTUhnMklDWWdNSGd6UmlCOElEQjRPREFzWEc0Z0lDQWdJQ0FnSUdOdlpHVlFiMmx1ZENBbUlEQjRNMFlnZkNBd2VEZ3dYRzRnSUNBZ0lDQXBYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiMlJsVUc5cGJuUWdQQ0F3ZURFeE1EQXdNQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tDaDFibWwwY3lBdFBTQTBLU0E4SURBcElHSnlaV0ZyWEc0Z0lDQWdJQ0JpZVhSbGN5NXdkWE5vS0Z4dUlDQWdJQ0FnSUNCamIyUmxVRzlwYm5RZ1BqNGdNSGd4TWlCOElEQjRSakFzWEc0Z0lDQWdJQ0FnSUdOdlpHVlFiMmx1ZENBK1BpQXdlRU1nSmlBd2VETkdJSHdnTUhnNE1DeGNiaUFnSUNBZ0lDQWdZMjlrWlZCdmFXNTBJRDQrSURCNE5pQW1JREI0TTBZZ2ZDQXdlRGd3TEZ4dUlDQWdJQ0FnSUNCamIyUmxVRzlwYm5RZ0ppQXdlRE5HSUh3Z01IZzRNRnh1SUNBZ0lDQWdLVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjBsdWRtRnNhV1FnWTI5a1pTQndiMmx1ZENjcFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdKNWRHVnpYRzU5WEc1Y2JtWjFibU4wYVc5dUlHRnpZMmxwVkc5Q2VYUmxjeUFvYzNSeUtTQjdYRzRnSUhaaGNpQmllWFJsUVhKeVlYa2dQU0JiWFZ4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE4wY2k1c1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lDOHZJRTV2WkdVbmN5QmpiMlJsSUhObFpXMXpJSFJ2SUdKbElHUnZhVzVuSUhSb2FYTWdZVzVrSUc1dmRDQW1JREI0TjBZdUxseHVJQ0FnSUdKNWRHVkJjbkpoZVM1d2RYTm9LSE4wY2k1amFHRnlRMjlrWlVGMEtHa3BJQ1lnTUhoR1JpbGNiaUFnZlZ4dUlDQnlaWFIxY200Z1lubDBaVUZ5Y21GNVhHNTlYRzVjYm1aMWJtTjBhVzl1SUhWMFpqRTJiR1ZVYjBKNWRHVnpJQ2h6ZEhJc0lIVnVhWFJ6S1NCN1hHNGdJSFpoY2lCakxDQm9hU3dnYkc5Y2JpQWdkbUZ5SUdKNWRHVkJjbkpoZVNBOUlGdGRYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2MzUnlMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnYVdZZ0tDaDFibWwwY3lBdFBTQXlLU0E4SURBcElHSnlaV0ZyWEc1Y2JpQWdJQ0JqSUQwZ2MzUnlMbU5vWVhKRGIyUmxRWFFvYVNsY2JpQWdJQ0JvYVNBOUlHTWdQajRnT0Z4dUlDQWdJR3h2SUQwZ1l5QWxJREkxTmx4dUlDQWdJR0o1ZEdWQmNuSmhlUzV3ZFhOb0tHeHZLVnh1SUNBZ0lHSjVkR1ZCY25KaGVTNXdkWE5vS0docEtWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHSjVkR1ZCY25KaGVWeHVmVnh1WEc1bWRXNWpkR2x2YmlCaVlYTmxOalJVYjBKNWRHVnpJQ2h6ZEhJcElIdGNiaUFnY21WMGRYSnVJR0poYzJVMk5DNTBiMEo1ZEdWQmNuSmhlU2hpWVhObE5qUmpiR1ZoYmloemRISXBLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmliR2wwUW5WbVptVnlJQ2h6Y21Nc0lHUnpkQ3dnYjJabWMyVjBMQ0JzWlc1bmRHZ3BJSHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJR2xtSUNnb2FTQXJJRzltWm5ObGRDQStQU0JrYzNRdWJHVnVaM1JvS1NCOGZDQW9hU0ErUFNCemNtTXViR1Z1WjNSb0tTa2dZbkpsWVd0Y2JpQWdJQ0JrYzNSYmFTQXJJRzltWm5ObGRGMGdQU0J6Y21OYmFWMWNiaUFnZlZ4dUlDQnlaWFIxY200Z2FWeHVmVnh1WEc1bWRXNWpkR2x2YmlCcGMyNWhiaUFvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIyWVd3Z0lUMDlJSFpoYkNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJRzV2TFhObGJHWXRZMjl0Y0dGeVpWeHVmVnh1SWl3aUx5b2daWE5zYVc1MExXVnVkaUJpY205M2MyVnlJQ292WEc1Y2JpOHFLbHh1SUNvZ1ZHaHBjeUJwY3lCMGFHVWdkMlZpSUdKeWIzZHpaWElnYVcxd2JHVnRaVzUwWVhScGIyNGdiMllnWUdSbFluVm5LQ2xnTGx4dUlDb3ZYRzVjYm1WNGNHOXlkSE11Ykc5bklEMGdiRzluTzF4dVpYaHdiM0owY3k1bWIzSnRZWFJCY21keklEMGdabTl5YldGMFFYSm5jenRjYm1WNGNHOXlkSE11YzJGMlpTQTlJSE5oZG1VN1hHNWxlSEJ2Y25SekxteHZZV1FnUFNCc2IyRmtPMXh1Wlhod2IzSjBjeTUxYzJWRGIyeHZjbk1nUFNCMWMyVkRiMnh2Y25NN1hHNWxlSEJ2Y25SekxuTjBiM0poWjJVZ1BTQnNiMk5oYkhOMGIzSmhaMlVvS1R0Y2JseHVMeW9xWEc0Z0tpQkRiMnh2Y25NdVhHNGdLaTljYmx4dVpYaHdiM0owY3k1amIyeHZjbk1nUFNCYlhHNWNkQ2NqTURBd01FTkRKeXhjYmx4MEp5TXdNREF3UmtZbkxGeHVYSFFuSXpBd016TkRReWNzWEc1Y2RDY2pNREF6TTBaR0p5eGNibHgwSnlNd01EWTJRME1uTEZ4dVhIUW5JekF3TmpaR1JpY3NYRzVjZENjak1EQTVPVU5ESnl4Y2JseDBKeU13TURrNVJrWW5MRnh1WEhRbkl6QXdRME13TUNjc1hHNWNkQ2NqTURCRFF6TXpKeXhjYmx4MEp5TXdNRU5ETmpZbkxGeHVYSFFuSXpBd1EwTTVPU2NzWEc1Y2RDY2pNREJEUTBOREp5eGNibHgwSnlNd01FTkRSa1luTEZ4dVhIUW5Jek16TURCRFF5Y3NYRzVjZENjak16TXdNRVpHSnl4Y2JseDBKeU16TXpNelEwTW5MRnh1WEhRbkl6TXpNek5HUmljc1hHNWNkQ2NqTXpNMk5rTkRKeXhjYmx4MEp5TXpNelkyUmtZbkxGeHVYSFFuSXpNek9UbERReWNzWEc1Y2RDY2pNek01T1VaR0p5eGNibHgwSnlNek0wTkRNREFuTEZ4dVhIUW5Jek16UTBNek15Y3NYRzVjZENjak16TkRRelkySnl4Y2JseDBKeU16TTBORE9Ua25MRnh1WEhRbkl6TXpRME5EUXljc1hHNWNkQ2NqTXpORFEwWkdKeXhjYmx4MEp5TTJOakF3UTBNbkxGeHVYSFFuSXpZMk1EQkdSaWNzWEc1Y2RDY2pOall6TTBOREp5eGNibHgwSnlNMk5qTXpSa1luTEZ4dVhIUW5JelkyUTBNd01DY3NYRzVjZENjak5qWkRRek16Snl4Y2JseDBKeU01T1RBd1EwTW5MRnh1WEhRbkl6azVNREJHUmljc1hHNWNkQ2NqT1Rrek0wTkRKeXhjYmx4MEp5TTVPVE16UmtZbkxGeHVYSFFuSXprNVEwTXdNQ2NzWEc1Y2RDY2pPVGxEUXpNekp5eGNibHgwSnlORFF6QXdNREFuTEZ4dVhIUW5JME5ETURBek15Y3NYRzVjZENjalEwTXdNRFkySnl4Y2JseDBKeU5EUXpBd09Ua25MRnh1WEhRbkkwTkRNREJEUXljc1hHNWNkQ2NqUTBNd01FWkdKeXhjYmx4MEp5TkRRek16TURBbkxGeHVYSFFuSTBORE16TXpNeWNzWEc1Y2RDY2pRME16TXpZMkp5eGNibHgwSnlORFF6TXpPVGtuTEZ4dVhIUW5JME5ETXpORFF5Y3NYRzVjZENjalEwTXpNMFpHSnl4Y2JseDBKeU5EUXpZMk1EQW5MRnh1WEhRbkkwTkROall6TXljc1hHNWNkQ2NqUTBNNU9UQXdKeXhjYmx4MEp5TkRRems1TXpNbkxGeHVYSFFuSTBORFEwTXdNQ2NzWEc1Y2RDY2pRME5EUXpNekp5eGNibHgwSnlOR1JqQXdNREFuTEZ4dVhIUW5JMFpHTURBek15Y3NYRzVjZENjalJrWXdNRFkySnl4Y2JseDBKeU5HUmpBd09Ua25MRnh1WEhRbkkwWkdNREJEUXljc1hHNWNkQ2NqUmtZd01FWkdKeXhjYmx4MEp5TkdSak16TURBbkxGeHVYSFFuSTBaR016TXpNeWNzWEc1Y2RDY2pSa1l6TXpZMkp5eGNibHgwSnlOR1JqTXpPVGtuTEZ4dVhIUW5JMFpHTXpORFF5Y3NYRzVjZENjalJrWXpNMFpHSnl4Y2JseDBKeU5HUmpZMk1EQW5MRnh1WEhRbkkwWkdOall6TXljc1hHNWNkQ2NqUmtZNU9UQXdKeXhjYmx4MEp5TkdSams1TXpNbkxGeHVYSFFuSTBaR1EwTXdNQ2NzWEc1Y2RDY2pSa1pEUXpNekoxeHVYVHRjYmx4dUx5b3FYRzRnS2lCRGRYSnlaVzUwYkhrZ2IyNXNlU0JYWldKTGFYUXRZbUZ6WldRZ1YyVmlJRWx1YzNCbFkzUnZjbk1zSUVacGNtVm1iM2dnUGowZ2RqTXhMRnh1SUNvZ1lXNWtJSFJvWlNCR2FYSmxZblZuSUdWNGRHVnVjMmx2YmlBb1lXNTVJRVpwY21WbWIzZ2dkbVZ5YzJsdmJpa2dZWEpsSUd0dWIzZHVYRzRnS2lCMGJ5QnpkWEJ3YjNKMElGd2lKV05jSWlCRFUxTWdZM1Z6ZEc5dGFYcGhkR2x2Ym5NdVhHNGdLbHh1SUNvZ1ZFOUVUem9nWVdSa0lHRWdZR3h2WTJGc1UzUnZjbUZuWldBZ2RtRnlhV0ZpYkdVZ2RHOGdaWGh3YkdsamFYUnNlU0JsYm1GaWJHVXZaR2x6WVdKc1pTQmpiMnh2Y25OY2JpQXFMMXh1WEc0dkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ1kyOXRjR3hsZUdsMGVWeHVablZ1WTNScGIyNGdkWE5sUTI5c2IzSnpLQ2tnZTF4dVhIUXZMeUJPUWpvZ1NXNGdZVzRnUld4bFkzUnliMjRnY0hKbGJHOWhaQ0J6WTNKcGNIUXNJR1J2WTNWdFpXNTBJSGRwYkd3Z1ltVWdaR1ZtYVc1bFpDQmlkWFFnYm05MElHWjFiR3g1WEc1Y2RDOHZJR2x1YVhScFlXeHBlbVZrTGlCVGFXNWpaU0IzWlNCcmJtOTNJSGRsSjNKbElHbHVJRU5vY205dFpTd2dkMlVuYkd3Z2FuVnpkQ0JrWlhSbFkzUWdkR2hwY3lCallYTmxYRzVjZEM4dklHVjRjR3hwWTJsMGJIbGNibHgwYVdZZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTV3Y205alpYTnpJQ1ltSUNoM2FXNWtiM2N1Y0hKdlkyVnpjeTUwZVhCbElEMDlQU0FuY21WdVpHVnlaWEluSUh4OElIZHBibVJ2ZHk1d2NtOWpaWE56TGw5ZmJuZHFjeWtwSUh0Y2JseDBYSFJ5WlhSMWNtNGdkSEoxWlR0Y2JseDBmVnh1WEc1Y2RDOHZJRWx1ZEdWeWJtVjBJRVY0Y0d4dmNtVnlJR0Z1WkNCRlpHZGxJR1J2SUc1dmRDQnpkWEJ3YjNKMElHTnZiRzl5Y3k1Y2JseDBhV1lnS0hSNWNHVnZaaUJ1WVhacFoyRjBiM0lnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RZ0ppWWdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzUwYjB4dmQyVnlRMkZ6WlNncExtMWhkR05vS0M4b1pXUm5aWHgwY21sa1pXNTBLVnhjTHloY1hHUXJLUzhwS1NCN1hHNWNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFI5WEc1Y2JseDBMeThnU1hNZ2QyVmlhMmwwUHlCb2RIUndPaTh2YzNSaFkydHZkbVZ5Wm14dmR5NWpiMjB2WVM4eE5qUTFPVFl3Tmk4ek56WTNOek5jYmx4MEx5OGdaRzlqZFcxbGJuUWdhWE1nZFc1a1pXWnBibVZrSUdsdUlISmxZV04wTFc1aGRHbDJaVG9nYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJaaFkyVmliMjlyTDNKbFlXTjBMVzVoZEdsMlpTOXdkV3hzTHpFMk16SmNibHgwY21WMGRYSnVJQ2gwZVhCbGIyWWdaRzlqZFcxbGJuUWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDQW1KaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjM1I1YkdVZ0ppWWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuTjBlV3hsTGxkbFltdHBkRUZ3Y0dWaGNtRnVZMlVwSUh4OFhHNWNkRngwTHk4Z1NYTWdabWx5WldKMVp6OGdhSFIwY0RvdkwzTjBZV05yYjNabGNtWnNiM2N1WTI5dEwyRXZNems0TVRJd0x6TTNOamMzTTF4dVhIUmNkQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdVkyOXVjMjlzWlNBbUppQW9kMmx1Wkc5M0xtTnZibk52YkdVdVptbHlaV0oxWnlCOGZDQW9kMmx1Wkc5M0xtTnZibk52YkdVdVpYaGpaWEIwYVc5dUlDWW1JSGRwYm1SdmR5NWpiMjV6YjJ4bExuUmhZbXhsS1NrcElIeDhYRzVjZEZ4MEx5OGdTWE1nWm1seVpXWnZlQ0ErUFNCMk16RS9YRzVjZEZ4MEx5OGdhSFIwY0hNNkx5OWtaWFpsYkc5d1pYSXViVzk2YVd4c1lTNXZjbWN2Wlc0dFZWTXZaRzlqY3k5VWIyOXNjeTlYWldKZlEyOXVjMjlzWlNOVGRIbHNhVzVuWDIxbGMzTmhaMlZ6WEc1Y2RGeDBLSFI1Y0dWdlppQnVZWFpwWjJGMGIzSWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblFnSmlZZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNTBiMHh2ZDJWeVEyRnpaU2dwTG0xaGRHTm9LQzltYVhKbFptOTRYRnd2S0Z4Y1pDc3BMeWtnSmlZZ2NHRnljMlZKYm5Rb1VtVm5SWGh3TGlReExDQXhNQ2tnUGowZ016RXBJSHg4WEc1Y2RGeDBMeThnUkc5MVlteGxJR05vWldOcklIZGxZbXRwZENCcGJpQjFjMlZ5UVdkbGJuUWdhblZ6ZENCcGJpQmpZWE5sSUhkbElHRnlaU0JwYmlCaElIZHZjbXRsY2x4dVhIUmNkQ2gwZVhCbGIyWWdibUYyYVdkaGRHOXlJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwSUNZbUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVkRzlNYjNkbGNrTmhjMlVvS1M1dFlYUmphQ2d2WVhCd2JHVjNaV0pyYVhSY1hDOG9YRnhrS3lrdktTazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1EyOXNiM0pwZW1VZ2JHOW5JR0Z5WjNWdFpXNTBjeUJwWmlCbGJtRmliR1ZrTGx4dUlDcGNiaUFxSUVCaGNHa2djSFZpYkdsalhHNGdLaTljYmx4dVpuVnVZM1JwYjI0Z1ptOXliV0YwUVhKbmN5aGhjbWR6S1NCN1hHNWNkR0Z5WjNOYk1GMGdQU0FvZEdocGN5NTFjMlZEYjJ4dmNuTWdQeUFuSldNbklEb2dKeWNwSUN0Y2JseDBYSFIwYUdsekxtNWhiV1Z6Y0dGalpTQXJYRzVjZEZ4MEtIUm9hWE11ZFhObFEyOXNiM0p6SUQ4Z0p5QWxZeWNnT2lBbklDY3BJQ3RjYmx4MFhIUmhjbWR6V3pCZElDdGNibHgwWEhRb2RHaHBjeTUxYzJWRGIyeHZjbk1nUHlBbkpXTWdKeUE2SUNjZ0p5a2dLMXh1WEhSY2RDY3JKeUFySUcxdlpIVnNaUzVsZUhCdmNuUnpMbWgxYldGdWFYcGxLSFJvYVhNdVpHbG1aaWs3WEc1Y2JseDBhV1lnS0NGMGFHbHpMblZ6WlVOdmJHOXljeWtnZTF4dVhIUmNkSEpsZEhWeWJqdGNibHgwZlZ4dVhHNWNkR052Ym5OMElHTWdQU0FuWTI5c2IzSTZJQ2NnS3lCMGFHbHpMbU52Ykc5eU8xeHVYSFJoY21kekxuTndiR2xqWlNneExDQXdMQ0JqTENBblkyOXNiM0k2SUdsdWFHVnlhWFFuS1R0Y2JseHVYSFF2THlCVWFHVWdabWx1WVd3Z1hDSWxZMXdpSUdseklITnZiV1YzYUdGMElIUnlhV05yZVN3Z1ltVmpZWFZ6WlNCMGFHVnlaU0JqYjNWc1pDQmlaU0J2ZEdobGNseHVYSFF2THlCaGNtZDFiV1Z1ZEhNZ2NHRnpjMlZrSUdWcGRHaGxjaUJpWldadmNtVWdiM0lnWVdaMFpYSWdkR2hsSUNWakxDQnpieUIzWlNCdVpXVmtJSFJ2WEc1Y2RDOHZJR1pwWjNWeVpTQnZkWFFnZEdobElHTnZjbkpsWTNRZ2FXNWtaWGdnZEc4Z2FXNXpaWEowSUhSb1pTQkRVMU1nYVc1MGIxeHVYSFJzWlhRZ2FXNWtaWGdnUFNBd08xeHVYSFJzWlhRZ2JHRnpkRU1nUFNBd08xeHVYSFJoY21keld6QmRMbkpsY0d4aFkyVW9MeVZiWVMxNlFTMWFKVjB2Wnl3Z2JXRjBZMmdnUFQ0Z2UxeHVYSFJjZEdsbUlDaHRZWFJqYUNBOVBUMGdKeVVsSnlrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1TzF4dVhIUmNkSDFjYmx4MFhIUnBibVJsZUNzck8xeHVYSFJjZEdsbUlDaHRZWFJqYUNBOVBUMGdKeVZqSnlrZ2UxeHVYSFJjZEZ4MEx5OGdWMlVnYjI1c2VTQmhjbVVnYVc1MFpYSmxjM1JsWkNCcGJpQjBhR1VnS214aGMzUXFJQ1ZqWEc1Y2RGeDBYSFF2THlBb2RHaGxJSFZ6WlhJZ2JXRjVJR2hoZG1VZ2NISnZkbWxrWldRZ2RHaGxhWElnYjNkdUtWeHVYSFJjZEZ4MGJHRnpkRU1nUFNCcGJtUmxlRHRjYmx4MFhIUjlYRzVjZEgwcE8xeHVYRzVjZEdGeVozTXVjM0JzYVdObEtHeGhjM1JETENBd0xDQmpLVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkpiblp2YTJWeklHQmpiMjV6YjJ4bExteHZaeWdwWUNCM2FHVnVJR0YyWVdsc1lXSnNaUzVjYmlBcUlFNXZMVzl3SUhkb1pXNGdZR052Ym5OdmJHVXViRzluWUNCcGN5QnViM1FnWVNCY0ltWjFibU4wYVc5dVhDSXVYRzRnS2x4dUlDb2dRR0Z3YVNCd2RXSnNhV05jYmlBcUwxeHVablZ1WTNScGIyNGdiRzluS0M0dUxtRnlaM01wSUh0Y2JseDBMeThnVkdocGN5Qm9ZV05yWlhKNUlHbHpJSEpsY1hWcGNtVmtJR1p2Y2lCSlJUZ3ZPU3dnZDJobGNtVmNibHgwTHk4Z2RHaGxJR0JqYjI1emIyeGxMbXh2WjJBZ1puVnVZM1JwYjI0Z1pHOWxjMjRuZENCb1lYWmxJQ2RoY0hCc2VTZGNibHgwY21WMGRYSnVJSFI1Y0dWdlppQmpiMjV6YjJ4bElEMDlQU0FuYjJKcVpXTjBKeUFtSmx4dVhIUmNkR052Ym5OdmJHVXViRzluSUNZbVhHNWNkRngwWTI5dWMyOXNaUzVzYjJjb0xpNHVZWEpuY3lrN1hHNTlYRzVjYmk4cUtseHVJQ29nVTJGMlpTQmdibUZ0WlhOd1lXTmxjMkF1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJRzVoYldWemNHRmpaWE5jYmlBcUlFQmhjR2tnY0hKcGRtRjBaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnpZWFpsS0c1aGJXVnpjR0ZqWlhNcElIdGNibHgwZEhKNUlIdGNibHgwWEhScFppQW9ibUZ0WlhOd1lXTmxjeWtnZTF4dVhIUmNkRngwWlhod2IzSjBjeTV6ZEc5eVlXZGxMbk5sZEVsMFpXMG9KMlJsWW5Wbkp5d2dibUZ0WlhOd1lXTmxjeWs3WEc1Y2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RHVjRjRzl5ZEhNdWMzUnZjbUZuWlM1eVpXMXZkbVZKZEdWdEtDZGtaV0oxWnljcE8xeHVYSFJjZEgxY2JseDBmU0JqWVhSamFDQW9aWEp5YjNJcElIdGNibHgwWEhRdkx5QlRkMkZzYkc5M1hHNWNkRngwTHk4Z1dGaFlJQ2hBVVdsNExTa2djMmh2ZFd4a0lIZGxJR0psSUd4dloyZHBibWNnZEdobGMyVS9YRzVjZEgxY2JuMWNibHh1THlvcVhHNGdLaUJNYjJGa0lHQnVZVzFsYzNCaFkyVnpZQzVjYmlBcVhHNGdLaUJBY21WMGRYSnVJSHRUZEhKcGJtZDlJSEpsZEhWeWJuTWdkR2hsSUhCeVpYWnBiM1Z6YkhrZ2NHVnljMmx6ZEdWa0lHUmxZblZuSUcxdlpHVnpYRzRnS2lCQVlYQnBJSEJ5YVhaaGRHVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2JHOWhaQ2dwSUh0Y2JseDBiR1YwSUhJN1hHNWNkSFJ5ZVNCN1hHNWNkRngwY2lBOUlHVjRjRzl5ZEhNdWMzUnZjbUZuWlM1blpYUkpkR1Z0S0Nka1pXSjFaeWNwTzF4dVhIUjlJR05oZEdOb0lDaGxjbkp2Y2lrZ2UxeHVYSFJjZEM4dklGTjNZV3hzYjNkY2JseDBYSFF2THlCWVdGZ2dLRUJSYVhndEtTQnphRzkxYkdRZ2QyVWdZbVVnYkc5bloybHVaeUIwYUdWelpUOWNibHgwZlZ4dVhHNWNkQzh2SUVsbUlHUmxZblZuSUdsemJpZDBJSE5sZENCcGJpQk1VeXdnWVc1a0lIZGxKM0psSUdsdUlFVnNaV04wY205dUxDQjBjbmtnZEc4Z2JHOWhaQ0FrUkVWQ1ZVZGNibHgwYVdZZ0tDRnlJQ1ltSUhSNWNHVnZaaUJ3Y205alpYTnpJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUFuWlc1Mkp5QnBiaUJ3Y205alpYTnpLU0I3WEc1Y2RGeDBjaUE5SUhCeWIyTmxjM011Wlc1MkxrUkZRbFZITzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUhJN1hHNTlYRzVjYmk4cUtseHVJQ29nVEc5allXeHpkRzl5WVdkbElHRjBkR1Z0Y0hSeklIUnZJSEpsZEhWeWJpQjBhR1VnYkc5allXeHpkRzl5WVdkbExseHVJQ3BjYmlBcUlGUm9hWE1nYVhNZ2JtVmpaWE56WVhKNUlHSmxZMkYxYzJVZ2MyRm1ZWEpwSUhSb2NtOTNjMXh1SUNvZ2QyaGxiaUJoSUhWelpYSWdaR2x6WVdKc1pYTWdZMjl2YTJsbGN5OXNiMk5oYkhOMGIzSmhaMlZjYmlBcUlHRnVaQ0I1YjNVZ1lYUjBaVzF3ZENCMGJ5QmhZMk5sYzNNZ2FYUXVYRzRnS2x4dUlDb2dRSEpsZEhWeWJpQjdURzlqWVd4VGRHOXlZV2RsZlZ4dUlDb2dRR0Z3YVNCd2NtbDJZWFJsWEc0Z0tpOWNibHh1Wm5WdVkzUnBiMjRnYkc5allXeHpkRzl5WVdkbEtDa2dlMXh1WEhSMGNua2dlMXh1WEhSY2RDOHZJRlJXVFV4TGFYUWdLRUZ3Y0d4bElGUldJRXBUSUZKMWJuUnBiV1VwSUdSdlpYTWdibTkwSUdoaGRtVWdZU0IzYVc1a2IzY2diMkpxWldOMExDQnFkWE4wSUd4dlkyRnNVM1J2Y21GblpTQnBiaUIwYUdVZ1oyeHZZbUZzSUdOdmJuUmxlSFJjYmx4MFhIUXZMeUJVYUdVZ1FuSnZkM05sY2lCaGJITnZJR2hoY3lCc2IyTmhiRk4wYjNKaFoyVWdhVzRnZEdobElHZHNiMkpoYkNCamIyNTBaWGgwTGx4dVhIUmNkSEpsZEhWeWJpQnNiMk5oYkZOMGIzSmhaMlU3WEc1Y2RIMGdZMkYwWTJnZ0tHVnljbTl5S1NCN1hHNWNkRngwTHk4Z1UzZGhiR3h2ZDF4dVhIUmNkQzh2SUZoWVdDQW9RRkZwZUMwcElITm9iM1ZzWkNCM1pTQmlaU0JzYjJkbmFXNW5JSFJvWlhObFAxeHVYSFI5WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjbVZ4ZFdseVpTZ25MaTlqYjIxdGIyNG5LU2hsZUhCdmNuUnpLVHRjYmx4dVkyOXVjM1FnZTJadmNtMWhkSFJsY25OOUlEMGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNWNiaThxS2x4dUlDb2dUV0Z3SUNWcUlIUnZJR0JLVTA5T0xuTjBjbWx1WjJsbWVTZ3BZQ3dnYzJsdVkyVWdibThnVjJWaUlFbHVjM0JsWTNSdmNuTWdaRzhnZEdoaGRDQmllU0JrWldaaGRXeDBMbHh1SUNvdlhHNWNibVp2Y20xaGRIUmxjbk11YWlBOUlHWjFibU4wYVc5dUlDaDJLU0I3WEc1Y2RIUnllU0I3WEc1Y2RGeDBjbVYwZFhKdUlFcFRUMDR1YzNSeWFXNW5hV1o1S0hZcE8xeHVYSFI5SUdOaGRHTm9JQ2hsY25KdmNpa2dlMXh1WEhSY2RISmxkSFZ5YmlBblcxVnVaWGh3WldOMFpXUktVMDlPVUdGeWMyVkZjbkp2Y2wwNklDY2dLeUJsY25KdmNpNXRaWE56WVdkbE8xeHVYSFI5WEc1OU8xeHVJaXdpWEc0dktpcGNiaUFxSUZSb2FYTWdhWE1nZEdobElHTnZiVzF2YmlCc2IyZHBZeUJtYjNJZ1ltOTBhQ0IwYUdVZ1RtOWtaUzVxY3lCaGJtUWdkMlZpSUdKeWIzZHpaWEpjYmlBcUlHbHRjR3hsYldWdWRHRjBhVzl1Y3lCdlppQmdaR1ZpZFdjb0tXQXVYRzRnS2k5Y2JseHVablZ1WTNScGIyNGdjMlYwZFhBb1pXNTJLU0I3WEc1Y2RHTnlaV0YwWlVSbFluVm5MbVJsWW5WbklEMGdZM0psWVhSbFJHVmlkV2M3WEc1Y2RHTnlaV0YwWlVSbFluVm5MbVJsWm1GMWJIUWdQU0JqY21WaGRHVkVaV0oxWnp0Y2JseDBZM0psWVhSbFJHVmlkV2N1WTI5bGNtTmxJRDBnWTI5bGNtTmxPMXh1WEhSamNtVmhkR1ZFWldKMVp5NWthWE5oWW14bElEMGdaR2x6WVdKc1pUdGNibHgwWTNKbFlYUmxSR1ZpZFdjdVpXNWhZbXhsSUQwZ1pXNWhZbXhsTzF4dVhIUmpjbVZoZEdWRVpXSjFaeTVsYm1GaWJHVmtJRDBnWlc1aFlteGxaRHRjYmx4MFkzSmxZWFJsUkdWaWRXY3VhSFZ0WVc1cGVtVWdQU0J5WlhGMWFYSmxLQ2R0Y3ljcE8xeHVYRzVjZEU5aWFtVmpkQzVyWlhsektHVnVkaWt1Wm05eVJXRmphQ2hyWlhrZ1BUNGdlMXh1WEhSY2RHTnlaV0YwWlVSbFluVm5XMnRsZVYwZ1BTQmxiblpiYTJWNVhUdGNibHgwZlNrN1hHNWNibHgwTHlvcVhHNWNkQ29nUVdOMGFYWmxJR0JrWldKMVoyQWdhVzV6ZEdGdVkyVnpMbHh1WEhRcUwxeHVYSFJqY21WaGRHVkVaV0oxWnk1cGJuTjBZVzVqWlhNZ1BTQmJYVHRjYmx4dVhIUXZLaXBjYmx4MEtpQlVhR1VnWTNWeWNtVnVkR3g1SUdGamRHbDJaU0JrWldKMVp5QnRiMlJsSUc1aGJXVnpMQ0JoYm1RZ2JtRnRaWE1nZEc4Z2MydHBjQzVjYmx4MEtpOWNibHh1WEhSamNtVmhkR1ZFWldKMVp5NXVZVzFsY3lBOUlGdGRPMXh1WEhSamNtVmhkR1ZFWldKMVp5NXphMmx3Y3lBOUlGdGRPMXh1WEc1Y2RDOHFLbHh1WEhRcUlFMWhjQ0J2WmlCemNHVmphV0ZzSUZ3aUpXNWNJaUJvWVc1a2JHbHVaeUJtZFc1amRHbHZibk1zSUdadmNpQjBhR1VnWkdWaWRXY2dYQ0ptYjNKdFlYUmNJaUJoY21kMWJXVnVkQzVjYmx4MEtseHVYSFFxSUZaaGJHbGtJR3RsZVNCdVlXMWxjeUJoY21VZ1lTQnphVzVuYkdVc0lHeHZkMlZ5SUc5eUlIVndjR1Z5TFdOaGMyVWdiR1YwZEdWeUxDQnBMbVV1SUZ3aWJsd2lJR0Z1WkNCY0lrNWNJaTVjYmx4MEtpOWNibHgwWTNKbFlYUmxSR1ZpZFdjdVptOXliV0YwZEdWeWN5QTlJSHQ5TzF4dVhHNWNkQzhxS2x4dVhIUXFJRk5sYkdWamRITWdZU0JqYjJ4dmNpQm1iM0lnWVNCa1pXSjFaeUJ1WVcxbGMzQmhZMlZjYmx4MEtpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2JtRnRaWE53WVdObElGUm9aU0J1WVcxbGMzQmhZMlVnYzNSeWFXNW5JR1p2Y2lCMGFHVWdabTl5SUhSb1pTQmtaV0oxWnlCcGJuTjBZVzVqWlNCMGJ5QmlaU0JqYjJ4dmNtVmtYRzVjZENvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZkZOMGNtbHVaMzBnUVc0Z1FVNVRTU0JqYjJ4dmNpQmpiMlJsSUdadmNpQjBhR1VnWjJsMlpXNGdibUZ0WlhOd1lXTmxYRzVjZENvZ1FHRndhU0J3Y21sMllYUmxYRzVjZENvdlhHNWNkR1oxYm1OMGFXOXVJSE5sYkdWamRFTnZiRzl5S0c1aGJXVnpjR0ZqWlNrZ2UxeHVYSFJjZEd4bGRDQm9ZWE5vSUQwZ01EdGNibHh1WEhSY2RHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dibUZ0WlhOd1lXTmxMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNWNkRngwWEhSb1lYTm9JRDBnS0Nob1lYTm9JRHc4SURVcElDMGdhR0Z6YUNrZ0t5QnVZVzFsYzNCaFkyVXVZMmhoY2tOdlpHVkJkQ2hwS1R0Y2JseDBYSFJjZEdoaGMyZ2dmRDBnTURzZ0x5OGdRMjl1ZG1WeWRDQjBieUF6TW1KcGRDQnBiblJsWjJWeVhHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJR055WldGMFpVUmxZblZuTG1OdmJHOXljMXROWVhSb0xtRmljeWhvWVhOb0tTQWxJR055WldGMFpVUmxZblZuTG1OdmJHOXljeTVzWlc1bmRHaGRPMXh1WEhSOVhHNWNkR055WldGMFpVUmxZblZuTG5ObGJHVmpkRU52Ykc5eUlEMGdjMlZzWldOMFEyOXNiM0k3WEc1Y2JseDBMeW9xWEc1Y2RDb2dRM0psWVhSbElHRWdaR1ZpZFdkblpYSWdkMmwwYUNCMGFHVWdaMmwyWlc0Z1lHNWhiV1Z6Y0dGalpXQXVYRzVjZENwY2JseDBLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdibUZ0WlhOd1lXTmxYRzVjZENvZ1FISmxkSFZ5YmlCN1JuVnVZM1JwYjI1OVhHNWNkQ29nUUdGd2FTQndkV0pzYVdOY2JseDBLaTljYmx4MFpuVnVZM1JwYjI0Z1kzSmxZWFJsUkdWaWRXY29ibUZ0WlhOd1lXTmxLU0I3WEc1Y2RGeDBiR1YwSUhCeVpYWlVhVzFsTzF4dVhHNWNkRngwWm5WdVkzUnBiMjRnWkdWaWRXY29MaTR1WVhKbmN5a2dlMXh1WEhSY2RGeDBMeThnUkdsellXSnNaV1EvWEc1Y2RGeDBYSFJwWmlBb0lXUmxZblZuTG1WdVlXSnNaV1FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1TzF4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhSamIyNXpkQ0J6Wld4bUlEMGdaR1ZpZFdjN1hHNWNibHgwWEhSY2RDOHZJRk5sZENCZ1pHbG1abUFnZEdsdFpYTjBZVzF3WEc1Y2RGeDBYSFJqYjI1emRDQmpkWEp5SUQwZ1RuVnRZbVZ5S0c1bGR5QkVZWFJsS0NrcE8xeHVYSFJjZEZ4MFkyOXVjM1FnYlhNZ1BTQmpkWEp5SUMwZ0tIQnlaWFpVYVcxbElIeDhJR04xY25JcE8xeHVYSFJjZEZ4MGMyVnNaaTVrYVdabUlEMGdiWE03WEc1Y2RGeDBYSFJ6Wld4bUxuQnlaWFlnUFNCd2NtVjJWR2x0WlR0Y2JseDBYSFJjZEhObGJHWXVZM1Z5Y2lBOUlHTjFjbkk3WEc1Y2RGeDBYSFJ3Y21WMlZHbHRaU0E5SUdOMWNuSTdYRzVjYmx4MFhIUmNkR0Z5WjNOYk1GMGdQU0JqY21WaGRHVkVaV0oxWnk1amIyVnlZMlVvWVhKbmMxc3dYU2s3WEc1Y2JseDBYSFJjZEdsbUlDaDBlWEJsYjJZZ1lYSm5jMXN3WFNBaFBUMGdKM04wY21sdVp5Y3BJSHRjYmx4MFhIUmNkRngwTHk4Z1FXNTVkR2hwYm1jZ1pXeHpaU0JzWlhRbmN5QnBibk53WldOMElIZHBkR2dnSlU5Y2JseDBYSFJjZEZ4MFlYSm5jeTUxYm5Ob2FXWjBLQ2NsVHljcE8xeHVYSFJjZEZ4MGZWeHVYRzVjZEZ4MFhIUXZMeUJCY0hCc2VTQmhibmtnWUdadmNtMWhkSFJsY25OZ0lIUnlZVzV6Wm05eWJXRjBhVzl1YzF4dVhIUmNkRngwYkdWMElHbHVaR1Y0SUQwZ01EdGNibHgwWEhSY2RHRnlaM05iTUYwZ1BTQmhjbWR6V3pCZExuSmxjR3hoWTJVb0x5VW9XMkV0ZWtFdFdpVmRLUzluTENBb2JXRjBZMmdzSUdadmNtMWhkQ2tnUFQ0Z2UxeHVYSFJjZEZ4MFhIUXZMeUJKWmlCM1pTQmxibU52ZFc1MFpYSWdZVzRnWlhOallYQmxaQ0FsSUhSb1pXNGdaRzl1SjNRZ2FXNWpjbVZoYzJVZ2RHaGxJR0Z5Y21GNUlHbHVaR1Y0WEc1Y2RGeDBYSFJjZEdsbUlDaHRZWFJqYUNBOVBUMGdKeVVsSnlrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnRZWFJqYUR0Y2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUnBibVJsZUNzck8xeHVYSFJjZEZ4MFhIUmpiMjV6ZENCbWIzSnRZWFIwWlhJZ1BTQmpjbVZoZEdWRVpXSjFaeTVtYjNKdFlYUjBaWEp6VzJadmNtMWhkRjA3WEc1Y2RGeDBYSFJjZEdsbUlDaDBlWEJsYjJZZ1ptOXliV0YwZEdWeUlEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNWNkRngwWEhSY2RGeDBZMjl1YzNRZ2RtRnNJRDBnWVhKbmMxdHBibVJsZUYwN1hHNWNkRngwWEhSY2RGeDBiV0YwWTJnZ1BTQm1iM0p0WVhSMFpYSXVZMkZzYkNoelpXeG1MQ0IyWVd3cE8xeHVYRzVjZEZ4MFhIUmNkRngwTHk4Z1RtOTNJSGRsSUc1bFpXUWdkRzhnY21WdGIzWmxJR0JoY21kelcybHVaR1Y0WFdBZ2MybHVZMlVnYVhRbmN5QnBibXhwYm1Wa0lHbHVJSFJvWlNCZ1ptOXliV0YwWUZ4dVhIUmNkRngwWEhSY2RHRnlaM011YzNCc2FXTmxLR2x1WkdWNExDQXhLVHRjYmx4MFhIUmNkRngwWEhScGJtUmxlQzB0TzF4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RISmxkSFZ5YmlCdFlYUmphRHRjYmx4MFhIUmNkSDBwTzF4dVhHNWNkRngwWEhRdkx5QkJjSEJzZVNCbGJuWXRjM0JsWTJsbWFXTWdabTl5YldGMGRHbHVaeUFvWTI5c2IzSnpMQ0JsZEdNdUtWeHVYSFJjZEZ4MFkzSmxZWFJsUkdWaWRXY3VabTl5YldGMFFYSm5jeTVqWVd4c0tITmxiR1lzSUdGeVozTXBPMXh1WEc1Y2RGeDBYSFJqYjI1emRDQnNiMmRHYmlBOUlITmxiR1l1Ykc5bklIeDhJR055WldGMFpVUmxZblZuTG14dlp6dGNibHgwWEhSY2RHeHZaMFp1TG1Gd2NHeDVLSE5sYkdZc0lHRnlaM01wTzF4dVhIUmNkSDFjYmx4dVhIUmNkR1JsWW5WbkxtNWhiV1Z6Y0dGalpTQTlJRzVoYldWemNHRmpaVHRjYmx4MFhIUmtaV0oxWnk1bGJtRmliR1ZrSUQwZ1kzSmxZWFJsUkdWaWRXY3VaVzVoWW14bFpDaHVZVzFsYzNCaFkyVXBPMXh1WEhSY2RHUmxZblZuTG5WelpVTnZiRzl5Y3lBOUlHTnlaV0YwWlVSbFluVm5MblZ6WlVOdmJHOXljeWdwTzF4dVhIUmNkR1JsWW5WbkxtTnZiRzl5SUQwZ2MyVnNaV04wUTI5c2IzSW9ibUZ0WlhOd1lXTmxLVHRjYmx4MFhIUmtaV0oxWnk1a1pYTjBjbTk1SUQwZ1pHVnpkSEp2ZVR0Y2JseDBYSFJrWldKMVp5NWxlSFJsYm1RZ1BTQmxlSFJsYm1RN1hHNWNkRngwTHk4Z1JHVmlkV2N1Wm05eWJXRjBRWEpuY3lBOUlHWnZjbTFoZEVGeVozTTdYRzVjZEZ4MEx5OGdaR1ZpZFdjdWNtRjNURzluSUQwZ2NtRjNURzluTzF4dVhHNWNkRngwTHk4Z1pXNTJMWE53WldOcFptbGpJR2x1YVhScFlXeHBlbUYwYVc5dUlHeHZaMmxqSUdadmNpQmtaV0oxWnlCcGJuTjBZVzVqWlhOY2JseDBYSFJwWmlBb2RIbHdaVzltSUdOeVpXRjBaVVJsWW5WbkxtbHVhWFFnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmx4MFhIUmNkR055WldGMFpVUmxZblZuTG1sdWFYUW9aR1ZpZFdjcE8xeHVYSFJjZEgxY2JseHVYSFJjZEdOeVpXRjBaVVJsWW5WbkxtbHVjM1JoYm1ObGN5NXdkWE5vS0dSbFluVm5LVHRjYmx4dVhIUmNkSEpsZEhWeWJpQmtaV0oxWnp0Y2JseDBmVnh1WEc1Y2RHWjFibU4wYVc5dUlHUmxjM1J5YjNrb0tTQjdYRzVjZEZ4MFkyOXVjM1FnYVc1a1pYZ2dQU0JqY21WaGRHVkVaV0oxWnk1cGJuTjBZVzVqWlhNdWFXNWtaWGhQWmloMGFHbHpLVHRjYmx4MFhIUnBaaUFvYVc1a1pYZ2dJVDA5SUMweEtTQjdYRzVjZEZ4MFhIUmpjbVZoZEdWRVpXSjFaeTVwYm5OMFlXNWpaWE11YzNCc2FXTmxLR2x1WkdWNExDQXhLVHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBjblZsTzF4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEc1Y2RIMWNibHh1WEhSbWRXNWpkR2x2YmlCbGVIUmxibVFvYm1GdFpYTndZV05sTENCa1pXeHBiV2wwWlhJcElIdGNibHgwWEhSamIyNXpkQ0J1WlhkRVpXSjFaeUE5SUdOeVpXRjBaVVJsWW5WbktIUm9hWE11Ym1GdFpYTndZV05sSUNzZ0tIUjVjR1Z2WmlCa1pXeHBiV2wwWlhJZ1BUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z0p6b25JRG9nWkdWc2FXMXBkR1Z5S1NBcklHNWhiV1Z6Y0dGalpTazdYRzVjZEZ4MGJtVjNSR1ZpZFdjdWJHOW5JRDBnZEdocGN5NXNiMmM3WEc1Y2RGeDBjbVYwZFhKdUlHNWxkMFJsWW5Wbk8xeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDb2dSVzVoWW14bGN5QmhJR1JsWW5WbklHMXZaR1VnWW5rZ2JtRnRaWE53WVdObGN5NGdWR2hwY3lCallXNGdhVzVqYkhWa1pTQnRiMlJsYzF4dVhIUXFJSE5sY0dGeVlYUmxaQ0JpZVNCaElHTnZiRzl1SUdGdVpDQjNhV3hrWTJGeVpITXVYRzVjZENwY2JseDBLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdibUZ0WlhOd1lXTmxjMXh1WEhRcUlFQmhjR2tnY0hWaWJHbGpYRzVjZENvdlhHNWNkR1oxYm1OMGFXOXVJR1Z1WVdKc1pTaHVZVzFsYzNCaFkyVnpLU0I3WEc1Y2RGeDBZM0psWVhSbFJHVmlkV2N1YzJGMlpTaHVZVzFsYzNCaFkyVnpLVHRjYmx4dVhIUmNkR055WldGMFpVUmxZblZuTG01aGJXVnpJRDBnVzEwN1hHNWNkRngwWTNKbFlYUmxSR1ZpZFdjdWMydHBjSE1nUFNCYlhUdGNibHh1WEhSY2RHeGxkQ0JwTzF4dVhIUmNkR052Ym5OMElITndiR2wwSUQwZ0tIUjVjR1Z2WmlCdVlXMWxjM0JoWTJWeklEMDlQU0FuYzNSeWFXNW5KeUEvSUc1aGJXVnpjR0ZqWlhNZ09pQW5KeWt1YzNCc2FYUW9MMXRjWEhNc1hTc3ZLVHRjYmx4MFhIUmpiMjV6ZENCc1pXNGdQU0J6Y0d4cGRDNXNaVzVuZEdnN1hHNWNibHgwWEhSbWIzSWdLR2tnUFNBd095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JseDBYSFJjZEdsbUlDZ2hjM0JzYVhSYmFWMHBJSHRjYmx4MFhIUmNkRngwTHk4Z2FXZHViM0psSUdWdGNIUjVJSE4wY21sdVozTmNibHgwWEhSY2RGeDBZMjl1ZEdsdWRXVTdYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkRzVoYldWemNHRmpaWE1nUFNCemNHeHBkRnRwWFM1eVpYQnNZV05sS0M5Y1hDb3ZaeXdnSnk0cVB5Y3BPMXh1WEc1Y2RGeDBYSFJwWmlBb2JtRnRaWE53WVdObGMxc3dYU0E5UFQwZ0p5MG5LU0I3WEc1Y2RGeDBYSFJjZEdOeVpXRjBaVVJsWW5WbkxuTnJhWEJ6TG5CMWMyZ29ibVYzSUZKbFowVjRjQ2duWGljZ0t5QnVZVzFsYzNCaFkyVnpMbk4xWW5OMGNpZ3hLU0FySUNja0p5a3BPMXh1WEhSY2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RGeDBZM0psWVhSbFJHVmlkV2N1Ym1GdFpYTXVjSFZ6YUNodVpYY2dVbVZuUlhod0tDZGVKeUFySUc1aGJXVnpjR0ZqWlhNZ0t5QW5KQ2NwS1R0Y2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2JseDBYSFJtYjNJZ0tHa2dQU0F3T3lCcElEd2dZM0psWVhSbFJHVmlkV2N1YVc1emRHRnVZMlZ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MFhIUmpiMjV6ZENCcGJuTjBZVzVqWlNBOUlHTnlaV0YwWlVSbFluVm5MbWx1YzNSaGJtTmxjMXRwWFR0Y2JseDBYSFJjZEdsdWMzUmhibU5sTG1WdVlXSnNaV1FnUFNCamNtVmhkR1ZFWldKMVp5NWxibUZpYkdWa0tHbHVjM1JoYm1ObExtNWhiV1Z6Y0dGalpTazdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDb2dSR2x6WVdKc1pTQmtaV0oxWnlCdmRYUndkWFF1WEc1Y2RDcGNibHgwS2lCQWNtVjBkWEp1SUh0VGRISnBibWQ5SUc1aGJXVnpjR0ZqWlhOY2JseDBLaUJBWVhCcElIQjFZbXhwWTF4dVhIUXFMMXh1WEhSbWRXNWpkR2x2YmlCa2FYTmhZbXhsS0NrZ2UxeHVYSFJjZEdOdmJuTjBJRzVoYldWemNHRmpaWE1nUFNCYlhHNWNkRngwWEhRdUxpNWpjbVZoZEdWRVpXSjFaeTV1WVcxbGN5NXRZWEFvZEc5T1lXMWxjM0JoWTJVcExGeHVYSFJjZEZ4MExpNHVZM0psWVhSbFJHVmlkV2N1YzJ0cGNITXViV0Z3S0hSdlRtRnRaWE53WVdObEtTNXRZWEFvYm1GdFpYTndZV05sSUQwK0lDY3RKeUFySUc1aGJXVnpjR0ZqWlNsY2JseDBYSFJkTG1wdmFXNG9KeXduS1R0Y2JseDBYSFJqY21WaGRHVkVaV0oxWnk1bGJtRmliR1VvSnljcE8xeHVYSFJjZEhKbGRIVnliaUJ1WVcxbGMzQmhZMlZ6TzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSb1pTQm5hWFpsYmlCdGIyUmxJRzVoYldVZ2FYTWdaVzVoWW14bFpDd2dabUZzYzJVZ2IzUm9aWEozYVhObExseHVYSFFxWEc1Y2RDb2dRSEJoY21GdElIdFRkSEpwYm1kOUlHNWhiV1ZjYmx4MEtpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHVYSFFxSUVCaGNHa2djSFZpYkdsalhHNWNkQ292WEc1Y2RHWjFibU4wYVc5dUlHVnVZV0pzWldRb2JtRnRaU2tnZTF4dVhIUmNkR2xtSUNodVlXMWxXMjVoYldVdWJHVnVaM1JvSUMwZ01WMGdQVDA5SUNjcUp5a2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlIUnlkV1U3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBiR1YwSUdrN1hHNWNkRngwYkdWMElHeGxianRjYmx4dVhIUmNkR1p2Y2lBb2FTQTlJREFzSUd4bGJpQTlJR055WldGMFpVUmxZblZuTG5OcmFYQnpMbXhsYm1kMGFEc2dhU0E4SUd4bGJqc2dhU3NyS1NCN1hHNWNkRngwWEhScFppQW9ZM0psWVhSbFJHVmlkV2N1YzJ0cGNITmJhVjB1ZEdWemRDaHVZVzFsS1NrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEc1Y2RGeDBabTl5SUNocElEMGdNQ3dnYkdWdUlEMGdZM0psWVhSbFJHVmlkV2N1Ym1GdFpYTXViR1Z1WjNSb095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JseDBYSFJjZEdsbUlDaGpjbVZoZEdWRVpXSjFaeTV1WVcxbGMxdHBYUzUwWlhOMEtHNWhiV1VwS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMGNuVmxPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFxSUVOdmJuWmxjblFnY21WblpYaHdJSFJ2SUc1aGJXVnpjR0ZqWlZ4dVhIUXFYRzVjZENvZ1FIQmhjbUZ0SUh0U1pXZEZlSEI5SUhKbFozaGxjRnh1WEhRcUlFQnlaWFIxY200Z2UxTjBjbWx1WjMwZ2JtRnRaWE53WVdObFhHNWNkQ29nUUdGd2FTQndjbWwyWVhSbFhHNWNkQ292WEc1Y2RHWjFibU4wYVc5dUlIUnZUbUZ0WlhOd1lXTmxLSEpsWjJWNGNDa2dlMXh1WEhSY2RISmxkSFZ5YmlCeVpXZGxlSEF1ZEc5VGRISnBibWNvS1Z4dVhIUmNkRngwTG5OMVluTjBjbWx1WnlneUxDQnlaV2RsZUhBdWRHOVRkSEpwYm1jb0tTNXNaVzVuZEdnZ0xTQXlLVnh1WEhSY2RGeDBMbkpsY0d4aFkyVW9MMXhjTGx4Y0tseGNQeVF2TENBbktpY3BPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ29nUTI5bGNtTmxJR0IyWVd4Z0xseHVYSFFxWEc1Y2RDb2dRSEJoY21GdElIdE5hWGhsWkgwZ2RtRnNYRzVjZENvZ1FISmxkSFZ5YmlCN1RXbDRaV1I5WEc1Y2RDb2dRR0Z3YVNCd2NtbDJZWFJsWEc1Y2RDb3ZYRzVjZEdaMWJtTjBhVzl1SUdOdlpYSmpaU2gyWVd3cElIdGNibHgwWEhScFppQW9kbUZzSUdsdWMzUmhibU5sYjJZZ1JYSnliM0lwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUIyWVd3dWMzUmhZMnNnZkh3Z2RtRnNMbTFsYzNOaFoyVTdYRzVjZEZ4MGZWeHVYSFJjZEhKbGRIVnliaUIyWVd3N1hHNWNkSDFjYmx4dVhIUmpjbVZoZEdWRVpXSjFaeTVsYm1GaWJHVW9ZM0psWVhSbFJHVmlkV2N1Ykc5aFpDZ3BLVHRjYmx4dVhIUnlaWFIxY200Z1kzSmxZWFJsUkdWaWRXYzdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2MyVjBkWEE3WEc0aUxDSmxlSEJ2Y25SekxuSmxZV1FnUFNCbWRXNWpkR2x2YmlBb1luVm1abVZ5TENCdlptWnpaWFFzSUdselRFVXNJRzFNWlc0c0lHNUNlWFJsY3lrZ2UxeHVJQ0IyWVhJZ1pTd2diVnh1SUNCMllYSWdaVXhsYmlBOUlDaHVRbmwwWlhNZ0tpQTRLU0F0SUcxTVpXNGdMU0F4WEc0Z0lIWmhjaUJsVFdGNElEMGdLREVnUER3Z1pVeGxiaWtnTFNBeFhHNGdJSFpoY2lCbFFtbGhjeUE5SUdWTllYZ2dQajRnTVZ4dUlDQjJZWElnYmtKcGRITWdQU0F0TjF4dUlDQjJZWElnYVNBOUlHbHpURVVnUHlBb2JrSjVkR1Z6SUMwZ01Ta2dPaUF3WEc0Z0lIWmhjaUJrSUQwZ2FYTk1SU0EvSUMweElEb2dNVnh1SUNCMllYSWdjeUE5SUdKMVptWmxjbHR2Wm1aelpYUWdLeUJwWFZ4dVhHNGdJR2tnS3owZ1pGeHVYRzRnSUdVZ1BTQnpJQ1lnS0NneElEdzhJQ2d0YmtKcGRITXBLU0F0SURFcFhHNGdJSE1nUGo0OUlDZ3Ria0pwZEhNcFhHNGdJRzVDYVhSeklDczlJR1ZNWlc1Y2JpQWdabTl5SUNnN0lHNUNhWFJ6SUQ0Z01Ec2daU0E5SUNobElDb2dNalUyS1NBcklHSjFabVpsY2x0dlptWnpaWFFnS3lCcFhTd2dhU0FyUFNCa0xDQnVRbWwwY3lBdFBTQTRLU0I3ZlZ4dVhHNGdJRzBnUFNCbElDWWdLQ2d4SUR3OElDZ3Ria0pwZEhNcEtTQXRJREVwWEc0Z0lHVWdQajQ5SUNndGJrSnBkSE1wWEc0Z0lHNUNhWFJ6SUNzOUlHMU1aVzVjYmlBZ1ptOXlJQ2c3SUc1Q2FYUnpJRDRnTURzZ2JTQTlJQ2h0SUNvZ01qVTJLU0FySUdKMVptWmxjbHR2Wm1aelpYUWdLeUJwWFN3Z2FTQXJQU0JrTENCdVFtbDBjeUF0UFNBNEtTQjdmVnh1WEc0Z0lHbG1JQ2hsSUQwOVBTQXdLU0I3WEc0Z0lDQWdaU0E5SURFZ0xTQmxRbWxoYzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR1VnUFQwOUlHVk5ZWGdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdiU0EvSUU1aFRpQTZJQ2dvY3lBL0lDMHhJRG9nTVNrZ0tpQkpibVpwYm1sMGVTbGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnRJRDBnYlNBcklFMWhkR2d1Y0c5M0tESXNJRzFNWlc0cFhHNGdJQ0FnWlNBOUlHVWdMU0JsUW1saGMxeHVJQ0I5WEc0Z0lISmxkSFZ5YmlBb2N5QS9JQzB4SURvZ01Ta2dLaUJ0SUNvZ1RXRjBhQzV3YjNjb01pd2daU0F0SUcxTVpXNHBYRzU5WEc1Y2JtVjRjRzl5ZEhNdWQzSnBkR1VnUFNCbWRXNWpkR2x2YmlBb1luVm1abVZ5TENCMllXeDFaU3dnYjJabWMyVjBMQ0JwYzB4RkxDQnRUR1Z1TENCdVFubDBaWE1wSUh0Y2JpQWdkbUZ5SUdVc0lHMHNJR05jYmlBZ2RtRnlJR1ZNWlc0Z1BTQW9ia0o1ZEdWeklDb2dPQ2tnTFNCdFRHVnVJQzBnTVZ4dUlDQjJZWElnWlUxaGVDQTlJQ2d4SUR3OElHVk1aVzRwSUMwZ01WeHVJQ0IyWVhJZ1pVSnBZWE1nUFNCbFRXRjRJRDQrSURGY2JpQWdkbUZ5SUhKMElEMGdLRzFNWlc0Z1BUMDlJREl6SUQ4Z1RXRjBhQzV3YjNjb01pd2dMVEkwS1NBdElFMWhkR2d1Y0c5M0tESXNJQzAzTnlrZ09pQXdLVnh1SUNCMllYSWdhU0E5SUdselRFVWdQeUF3SURvZ0tHNUNlWFJsY3lBdElERXBYRzRnSUhaaGNpQmtJRDBnYVhOTVJTQS9JREVnT2lBdE1WeHVJQ0IyWVhJZ2N5QTlJSFpoYkhWbElEd2dNQ0I4ZkNBb2RtRnNkV1VnUFQwOUlEQWdKaVlnTVNBdklIWmhiSFZsSUR3Z01Da2dQeUF4SURvZ01GeHVYRzRnSUhaaGJIVmxJRDBnVFdGMGFDNWhZbk1vZG1Gc2RXVXBYRzVjYmlBZ2FXWWdLR2x6VG1GT0tIWmhiSFZsS1NCOGZDQjJZV3gxWlNBOVBUMGdTVzVtYVc1cGRIa3BJSHRjYmlBZ0lDQnRJRDBnYVhOT1lVNG9kbUZzZFdVcElEOGdNU0E2SURCY2JpQWdJQ0JsSUQwZ1pVMWhlRnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR1VnUFNCTllYUm9MbVpzYjI5eUtFMWhkR2d1Ykc5bktIWmhiSFZsS1NBdklFMWhkR2d1VEU0eUtWeHVJQ0FnSUdsbUlDaDJZV3gxWlNBcUlDaGpJRDBnVFdGMGFDNXdiM2NvTWl3Z0xXVXBLU0E4SURFcElIdGNiaUFnSUNBZ0lHVXRMVnh1SUNBZ0lDQWdZeUFxUFNBeVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNobElDc2daVUpwWVhNZ1BqMGdNU2tnZTF4dUlDQWdJQ0FnZG1Gc2RXVWdLejBnY25RZ0x5QmpYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhaaGJIVmxJQ3M5SUhKMElDb2dUV0YwYUM1d2IzY29NaXdnTVNBdElHVkNhV0Z6S1Z4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZG1Gc2RXVWdLaUJqSUQ0OUlESXBJSHRjYmlBZ0lDQWdJR1VySzF4dUlDQWdJQ0FnWXlBdlBTQXlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR1VnS3lCbFFtbGhjeUErUFNCbFRXRjRLU0I3WEc0Z0lDQWdJQ0J0SUQwZ01GeHVJQ0FnSUNBZ1pTQTlJR1ZOWVhoY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dVZ0t5QmxRbWxoY3lBK1BTQXhLU0I3WEc0Z0lDQWdJQ0J0SUQwZ0tDaDJZV3gxWlNBcUlHTXBJQzBnTVNrZ0tpQk5ZWFJvTG5CdmR5Z3lMQ0J0VEdWdUtWeHVJQ0FnSUNBZ1pTQTlJR1VnS3lCbFFtbGhjMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCdElEMGdkbUZzZFdVZ0tpQk5ZWFJvTG5CdmR5Z3lMQ0JsUW1saGN5QXRJREVwSUNvZ1RXRjBhQzV3YjNjb01pd2diVXhsYmlsY2JpQWdJQ0FnSUdVZ1BTQXdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdabTl5SUNnN0lHMU1aVzRnUGowZ09Ec2dZblZtWm1WeVcyOW1abk5sZENBcklHbGRJRDBnYlNBbUlEQjRabVlzSUdrZ0t6MGdaQ3dnYlNBdlBTQXlOVFlzSUcxTVpXNGdMVDBnT0NrZ2UzMWNibHh1SUNCbElEMGdLR1VnUER3Z2JVeGxiaWtnZkNCdFhHNGdJR1ZNWlc0Z0t6MGdiVXhsYmx4dUlDQm1iM0lnS0RzZ1pVeGxiaUErSURBN0lHSjFabVpsY2x0dlptWnpaWFFnS3lCcFhTQTlJR1VnSmlBd2VHWm1MQ0JwSUNzOUlHUXNJR1VnTHowZ01qVTJMQ0JsVEdWdUlDMDlJRGdwSUh0OVhHNWNiaUFnWW5WbVptVnlXMjltWm5ObGRDQXJJR2tnTFNCa1hTQjhQU0J6SUNvZ01USTRYRzU5WEc0aUxDSjJZWElnZEc5VGRISnBibWNnUFNCN2ZTNTBiMU4wY21sdVp6dGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JCY25KaGVTNXBjMEZ5Y21GNUlIeDhJR1oxYm1OMGFXOXVJQ2hoY25JcElIdGNiaUFnY21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b1lYSnlLU0E5UFNBblcyOWlhbVZqZENCQmNuSmhlVjBuTzF4dWZUdGNiaUlzSWk4cUtseHVJQ29nU0dWc2NHVnljeTVjYmlBcUwxeHVYRzUyWVhJZ2N5QTlJREV3TURBN1hHNTJZWElnYlNBOUlITWdLaUEyTUR0Y2JuWmhjaUJvSUQwZ2JTQXFJRFl3TzF4dWRtRnlJR1FnUFNCb0lDb2dNalE3WEc1MllYSWdkeUE5SUdRZ0tpQTNPMXh1ZG1GeUlIa2dQU0JrSUNvZ016WTFMakkxTzF4dVhHNHZLaXBjYmlBcUlGQmhjbk5sSUc5eUlHWnZjbTFoZENCMGFHVWdaMmwyWlc0Z1lIWmhiR0F1WEc0Z0tseHVJQ29nVDNCMGFXOXVjenBjYmlBcVhHNGdLaUFnTFNCZ2JHOXVaMkFnZG1WeVltOXpaU0JtYjNKdFlYUjBhVzVuSUZ0bVlXeHpaVjFjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMU4wY21sdVozeE9kVzFpWlhKOUlIWmhiRnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUZ0dmNIUnBiMjV6WFZ4dUlDb2dRSFJvY205M2N5QjdSWEp5YjNKOUlIUm9jbTkzSUdGdUlHVnljbTl5SUdsbUlIWmhiQ0JwY3lCdWIzUWdZU0J1YjI0dFpXMXdkSGtnYzNSeWFXNW5JRzl5SUdFZ2JuVnRZbVZ5WEc0Z0tpQkFjbVYwZFhKdUlIdFRkSEpwYm1kOFRuVnRZbVZ5ZlZ4dUlDb2dRR0Z3YVNCd2RXSnNhV05jYmlBcUwxeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLSFpoYkN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0J2Y0hScGIyNXpJRDBnYjNCMGFXOXVjeUI4ZkNCN2ZUdGNiaUFnZG1GeUlIUjVjR1VnUFNCMGVYQmxiMllnZG1Gc08xeHVJQ0JwWmlBb2RIbHdaU0E5UFQwZ0ozTjBjbWx1WnljZ0ppWWdkbUZzTG14bGJtZDBhQ0ErSURBcElIdGNiaUFnSUNCeVpYUjFjbTRnY0dGeWMyVW9kbUZzS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2gwZVhCbElEMDlQU0FuYm5WdFltVnlKeUFtSmlCcGMwNWhUaWgyWVd3cElEMDlQU0JtWVd4elpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdmNIUnBiMjV6TG14dmJtY2dQeUJtYlhSTWIyNW5LSFpoYkNrZ09pQm1iWFJUYUc5eWRDaDJZV3dwTzF4dUlDQjlYRzRnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjYmlBZ0lDQW5kbUZzSUdseklHNXZkQ0JoSUc1dmJpMWxiWEIwZVNCemRISnBibWNnYjNJZ1lTQjJZV3hwWkNCdWRXMWlaWEl1SUhaaGJEMG5JQ3RjYmlBZ0lDQWdJRXBUVDA0dWMzUnlhVzVuYVdaNUtIWmhiQ2xjYmlBZ0tUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1VHRnljMlVnZEdobElHZHBkbVZ1SUdCemRISmdJR0Z1WkNCeVpYUjFjbTRnYldsc2JHbHpaV052Ym1SekxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCemRISmNiaUFxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBcUlFQmhjR2tnY0hKcGRtRjBaVnh1SUNvdlhHNWNibVoxYm1OMGFXOXVJSEJoY25ObEtITjBjaWtnZTF4dUlDQnpkSElnUFNCVGRISnBibWNvYzNSeUtUdGNiaUFnYVdZZ0tITjBjaTVzWlc1bmRHZ2dQaUF4TURBcElIdGNiaUFnSUNCeVpYUjFjbTQ3WEc0Z0lIMWNiaUFnZG1GeUlHMWhkR05vSUQwZ0wxNG9LRDg2WEZ4a0t5ay9YRnd0UDF4Y1pEOWNYQzQvWEZ4a0t5a2dLaWh0YVd4c2FYTmxZMjl1WkhNL2ZHMXpaV056UDN4dGMzeHpaV052Ym1SelAzeHpaV056UDN4emZHMXBiblYwWlhNL2ZHMXBibk0vZkcxOGFHOTFjbk0vZkdoeWN6OThhSHhrWVhselAzeGtmSGRsWld0elAzeDNmSGxsWVhKelAzeDVjbk0vZkhrcFB5UXZhUzVsZUdWaktGeHVJQ0FnSUhOMGNseHVJQ0FwTzF4dUlDQnBaaUFvSVcxaGRHTm9LU0I3WEc0Z0lDQWdjbVYwZFhKdU8xeHVJQ0I5WEc0Z0lIWmhjaUJ1SUQwZ2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzeFhTazdYRzRnSUhaaGNpQjBlWEJsSUQwZ0tHMWhkR05vV3pKZElIeDhJQ2R0Y3ljcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc0Z0lITjNhWFJqYUNBb2RIbHdaU2tnZTF4dUlDQWdJR05oYzJVZ0ozbGxZWEp6SnpwY2JpQWdJQ0JqWVhObElDZDVaV0Z5SnpwY2JpQWdJQ0JqWVhObElDZDVjbk1uT2x4dUlDQWdJR05oYzJVZ0ozbHlKenBjYmlBZ0lDQmpZWE5sSUNkNUp6cGNiaUFnSUNBZ0lISmxkSFZ5YmlCdUlDb2dlVHRjYmlBZ0lDQmpZWE5sSUNkM1pXVnJjeWM2WEc0Z0lDQWdZMkZ6WlNBbmQyVmxheWM2WEc0Z0lDQWdZMkZ6WlNBbmR5YzZYRzRnSUNBZ0lDQnlaWFIxY200Z2JpQXFJSGM3WEc0Z0lDQWdZMkZ6WlNBblpHRjVjeWM2WEc0Z0lDQWdZMkZ6WlNBblpHRjVKenBjYmlBZ0lDQmpZWE5sSUNka0p6cGNiaUFnSUNBZ0lISmxkSFZ5YmlCdUlDb2daRHRjYmlBZ0lDQmpZWE5sSUNkb2IzVnljeWM2WEc0Z0lDQWdZMkZ6WlNBbmFHOTFjaWM2WEc0Z0lDQWdZMkZ6WlNBbmFISnpKenBjYmlBZ0lDQmpZWE5sSUNkb2NpYzZYRzRnSUNBZ1kyRnpaU0FuYUNjNlhHNGdJQ0FnSUNCeVpYUjFjbTRnYmlBcUlHZzdYRzRnSUNBZ1kyRnpaU0FuYldsdWRYUmxjeWM2WEc0Z0lDQWdZMkZ6WlNBbmJXbHVkWFJsSnpwY2JpQWdJQ0JqWVhObElDZHRhVzV6SnpwY2JpQWdJQ0JqWVhObElDZHRhVzRuT2x4dUlDQWdJR05oYzJVZ0oyMG5PbHh1SUNBZ0lDQWdjbVYwZFhKdUlHNGdLaUJ0TzF4dUlDQWdJR05oYzJVZ0ozTmxZMjl1WkhNbk9seHVJQ0FnSUdOaGMyVWdKM05sWTI5dVpDYzZYRzRnSUNBZ1kyRnpaU0FuYzJWamN5YzZYRzRnSUNBZ1kyRnpaU0FuYzJWakp6cGNiaUFnSUNCallYTmxJQ2R6SnpwY2JpQWdJQ0FnSUhKbGRIVnliaUJ1SUNvZ2N6dGNiaUFnSUNCallYTmxJQ2R0YVd4c2FYTmxZMjl1WkhNbk9seHVJQ0FnSUdOaGMyVWdKMjFwYkd4cGMyVmpiMjVrSnpwY2JpQWdJQ0JqWVhObElDZHRjMlZqY3ljNlhHNGdJQ0FnWTJGelpTQW5iWE5sWXljNlhHNGdJQ0FnWTJGelpTQW5iWE1uT2x4dUlDQWdJQ0FnY21WMGRYSnVJRzQ3WEc0Z0lDQWdaR1ZtWVhWc2REcGNiaUFnSUNBZ0lISmxkSFZ5YmlCMWJtUmxabWx1WldRN1hHNGdJSDFjYm4xY2JseHVMeW9xWEc0Z0tpQlRhRzl5ZENCbWIzSnRZWFFnWm05eUlHQnRjMkF1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJRzF6WEc0Z0tpQkFjbVYwZFhKdUlIdFRkSEpwYm1kOVhHNGdLaUJBWVhCcElIQnlhWFpoZEdWY2JpQXFMMXh1WEc1bWRXNWpkR2x2YmlCbWJYUlRhRzl5ZENodGN5a2dlMXh1SUNCMllYSWdiWE5CWW5NZ1BTQk5ZWFJvTG1GaWN5aHRjeWs3WEc0Z0lHbG1JQ2h0YzBGaWN5QStQU0JrS1NCN1hHNGdJQ0FnY21WMGRYSnVJRTFoZEdndWNtOTFibVFvYlhNZ0x5QmtLU0FySUNka0p6dGNiaUFnZlZ4dUlDQnBaaUFvYlhOQlluTWdQajBnYUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0cxeklDOGdhQ2tnS3lBbmFDYzdYRzRnSUgxY2JpQWdhV1lnS0cxelFXSnpJRDQ5SUcwcElIdGNiaUFnSUNCeVpYUjFjbTRnVFdGMGFDNXliM1Z1WkNodGN5QXZJRzBwSUNzZ0oyMG5PMXh1SUNCOVhHNGdJR2xtSUNodGMwRmljeUErUFNCektTQjdYRzRnSUNBZ2NtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb2JYTWdMeUJ6S1NBcklDZHpKenRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiWE1nS3lBbmJYTW5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFeHZibWNnWm05eWJXRjBJR1p2Y2lCZ2JYTmdMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnRjMXh1SUNvZ1FISmxkSFZ5YmlCN1UzUnlhVzVuZlZ4dUlDb2dRR0Z3YVNCd2NtbDJZWFJsWEc0Z0tpOWNibHh1Wm5WdVkzUnBiMjRnWm0xMFRHOXVaeWh0Y3lrZ2UxeHVJQ0IyWVhJZ2JYTkJZbk1nUFNCTllYUm9MbUZpY3lodGN5azdYRzRnSUdsbUlDaHRjMEZpY3lBK1BTQmtLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIQnNkWEpoYkNodGN5d2diWE5CWW5Nc0lHUXNJQ2RrWVhrbktUdGNiaUFnZlZ4dUlDQnBaaUFvYlhOQlluTWdQajBnYUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ3YkhWeVlXd29iWE1zSUcxelFXSnpMQ0JvTENBbmFHOTFjaWNwTzF4dUlDQjlYRzRnSUdsbUlDaHRjMEZpY3lBK1BTQnRLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIQnNkWEpoYkNodGN5d2diWE5CWW5Nc0lHMHNJQ2R0YVc1MWRHVW5LVHRjYmlBZ2ZWeHVJQ0JwWmlBb2JYTkJZbk1nUGowZ2N5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCd2JIVnlZV3dvYlhNc0lHMXpRV0p6TENCekxDQW5jMlZqYjI1a0p5azdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHMXpJQ3NnSnlCdGN5YzdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1VHeDFjbUZzYVhwaGRHbHZiaUJvWld4d1pYSXVYRzRnS2k5Y2JseHVablZ1WTNScGIyNGdjR3gxY21Gc0tHMXpMQ0J0YzBGaWN5d2diaXdnYm1GdFpTa2dlMXh1SUNCMllYSWdhWE5RYkhWeVlXd2dQU0J0YzBGaWN5QStQU0J1SUNvZ01TNDFPMXh1SUNCeVpYUjFjbTRnVFdGMGFDNXliM1Z1WkNodGN5QXZJRzRwSUNzZ0p5QW5JQ3NnYm1GdFpTQXJJQ2hwYzFCc2RYSmhiQ0EvSUNkekp5QTZJQ2NuS1R0Y2JuMWNiaUlzSWk4dklITm9hVzBnWm05eUlIVnphVzVuSUhCeWIyTmxjM01nYVc0Z1luSnZkM05sY2x4dWRtRnlJSEJ5YjJObGMzTWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHQ5TzF4dVhHNHZMeUJqWVdOb1pXUWdabkp2YlNCM2FHRjBaWFpsY2lCbmJHOWlZV3dnYVhNZ2NISmxjMlZ1ZENCemJ5QjBhR0YwSUhSbGMzUWdjblZ1Ym1WeWN5QjBhR0YwSUhOMGRXSWdhWFJjYmk4dklHUnZiaWQwSUdKeVpXRnJJSFJvYVc1bmN5NGdJRUoxZENCM1pTQnVaV1ZrSUhSdklIZHlZWEFnYVhRZ2FXNGdZU0IwY25rZ1kyRjBZMmdnYVc0Z1kyRnpaU0JwZENCcGMxeHVMeThnZDNKaGNIQmxaQ0JwYmlCemRISnBZM1FnYlc5a1pTQmpiMlJsSUhkb2FXTm9JR1J2WlhOdUozUWdaR1ZtYVc1bElHRnVlU0JuYkc5aVlXeHpMaUFnU1hRbmN5QnBibk5wWkdVZ1lWeHVMeThnWm5WdVkzUnBiMjRnWW1WallYVnpaU0IwY25rdlkyRjBZMmhsY3lCa1pXOXdkR2x0YVhwbElHbHVJR05sY25SaGFXNGdaVzVuYVc1bGN5NWNibHh1ZG1GeUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRN1hHNTJZWElnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTzF4dVhHNW1kVzVqZEdsdmJpQmtaV1poZFd4MFUyVjBWR2x0YjNWMEtDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbmMyVjBWR2x0Wlc5MWRDQm9ZWE1nYm05MElHSmxaVzRnWkdWbWFXNWxaQ2NwTzF4dWZWeHVablZ1WTNScGIyNGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkQ0FvS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RqYkdWaGNsUnBiV1Z2ZFhRZ2FHRnpJRzV2ZENCaVpXVnVJR1JsWm1sdVpXUW5LVHRjYm4xY2JpaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQnpaWFJVYVcxbGIzVjBJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ2MyVjBWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWREdGNiaUFnSUNCOVhHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJqYkdWaGNsUnBiV1Z2ZFhRZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdOc1pXRnlWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ2ZWeHVmU0FvS1NsY2JtWjFibU4wYVc5dUlISjFibFJwYldWdmRYUW9ablZ1S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BUMDlJSE5sZEZScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXViM0p0WVd3Z1pXNTJhWEp2YldWdWRITWdhVzRnYzJGdVpTQnphWFIxWVhScGIyNXpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklHbG1JSE5sZEZScGJXVnZkWFFnZDJGemJpZDBJR0YyWVdsc1lXSnNaU0JpZFhRZ2QyRnpJR3hoZEhSbGNpQmtaV1pwYm1Wa1hHNGdJQ0FnYVdZZ0tDaGpZV05vWldSVFpYUlVhVzFsYjNWMElEMDlQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBJSHg4SUNGallXTm9aV1JUWlhSVWFXMWxiM1YwS1NBbUppQnpaWFJVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCelpYUlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyVjBWR2x0Wlc5MWRDaG1kVzRzSURBcE8xeHVJQ0FnSUgxY2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQXZMeUIzYUdWdUlIZG9aVzRnYzI5dFpXSnZaSGtnYUdGeklITmpjbVYzWldRZ2QybDBhQ0J6WlhSVWFXMWxiM1YwSUdKMWRDQnVieUJKTGtVdUlHMWhaR1J1WlhOelhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmU0JqWVhSamFDaGxLWHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9aVzRnZDJVZ1lYSmxJR2x1SUVrdVJTNGdZblYwSUhSb1pTQnpZM0pwY0hRZ2FHRnpJR0psWlc0Z1pYWmhiR1ZrSUhOdklFa3VSUzRnWkc5bGMyNG5kQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRk5sZEZScGJXVnZkWFF1WTJGc2JDaHVkV3hzTENCbWRXNHNJREFwTzF4dUlDQWdJQ0FnSUNCOUlHTmhkR05vS0dVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyRnRaU0JoY3lCaFltOTJaU0JpZFhRZ2QyaGxiaUJwZENkeklHRWdkbVZ5YzJsdmJpQnZaaUJKTGtVdUlIUm9ZWFFnYlhWemRDQm9ZWFpsSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUdadmNpQW5kR2hwY3ljc0lHaHZjR1oxYkd4NUlHOTFjaUJqYjI1MFpYaDBJR052Y25KbFkzUWdiM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2dkR2h5YjNjZ1lTQm5iRzlpWVd3Z1pYSnliM0pjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwTG1OaGJHd29kR2hwY3l3Z1puVnVMQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzU5WEc1bWRXNWpkR2x2YmlCeWRXNURiR1ZoY2xScGJXVnZkWFFvYldGeWEyVnlLU0I3WEc0Z0lDQWdhV1lnS0dOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOVBUMGdZMnhsWVhKVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lDOHZibTl5YldGc0lHVnVkbWx5YjIxbGJuUnpJR2x1SUhOaGJtVWdjMmwwZFdGMGFXOXVjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUdOc1pXRnlWR2x0Wlc5MWRDQjNZWE51SjNRZ1lYWmhhV3hoWW14bElHSjFkQ0IzWVhNZ2JHRjBkR1Z5SUdSbFptbHVaV1JjYmlBZ0lDQnBaaUFvS0dOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOVBUMGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkQ0I4ZkNBaFkyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMEtTQW1KaUJqYkdWaGNsUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDBnWTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZWeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQzh2SUhkb1pXNGdkMmhsYmlCemIyMWxZbTlrZVNCb1lYTWdjMk55WlhkbFpDQjNhWFJvSUhObGRGUnBiV1Z2ZFhRZ1luVjBJRzV2SUVrdVJTNGdiV0ZrWkc1bGMzTmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcE8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcGUxeHVJQ0FnSUNBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVjJobGJpQjNaU0JoY21VZ2FXNGdTUzVGTGlCaWRYUWdkR2hsSUhOamNtbHdkQ0JvWVhNZ1ltVmxiaUJsZG1Gc1pXUWdjMjhnU1M1RkxpQmtiMlZ6YmlkMElDQjBjblZ6ZENCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCM2FHVnVJR05oYkd4bFpDQnViM0p0WVd4c2VWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQzVqWVd4c0tHNTFiR3dzSUcxaGNtdGxjaWs3WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyRnRaU0JoY3lCaFltOTJaU0JpZFhRZ2QyaGxiaUJwZENkeklHRWdkbVZ5YzJsdmJpQnZaaUJKTGtVdUlIUm9ZWFFnYlhWemRDQm9ZWFpsSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUdadmNpQW5kR2hwY3ljc0lHaHZjR1oxYkd4NUlHOTFjaUJqYjI1MFpYaDBJR052Y25KbFkzUWdiM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2dkR2h5YjNjZ1lTQm5iRzlpWVd3Z1pYSnliM0l1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJUYjIxbElIWmxjbk5wYjI1eklHOW1JRWt1UlM0Z2FHRjJaU0JrYVdabVpYSmxiblFnY25Wc1pYTWdabTl5SUdOc1pXRnlWR2x0Wlc5MWRDQjJjeUJ6WlhSVWFXMWxiM1YwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2diV0Z5YTJWeUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1Y2JuMWNiblpoY2lCeGRXVjFaU0E5SUZ0ZE8xeHVkbUZ5SUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc1MllYSWdZM1Z5Y21WdWRGRjFaWFZsTzF4dWRtRnlJSEYxWlhWbFNXNWtaWGdnUFNBdE1UdGNibHh1Wm5WdVkzUnBiMjRnWTJ4bFlXNVZjRTVsZUhSVWFXTnJLQ2tnZTF4dUlDQWdJR2xtSUNnaFpISmhhVzVwYm1jZ2ZId2dJV04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzRnSUNBZ2FXWWdLR04xY25KbGJuUlJkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1VnUFNCamRYSnlaVzUwVVhWbGRXVXVZMjl1WTJGMEtIRjFaWFZsS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ1pISmhhVzVSZFdWMVpTZ3BPMXh1SUNBZ0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1pISmhhVzVSZFdWMVpTZ3BJSHRjYmlBZ0lDQnBaaUFvWkhKaGFXNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQjJZWElnZEdsdFpXOTFkQ0E5SUhKMWJsUnBiV1Z2ZFhRb1kyeGxZVzVWY0U1bGVIUlVhV05yS1R0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUhSeWRXVTdYRzVjYmlBZ0lDQjJZWElnYkdWdUlEMGdjWFZsZFdVdWJHVnVaM1JvTzF4dUlDQWdJSGRvYVd4bEtHeGxiaWtnZTF4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVVhWbGRXVWdQU0J4ZFdWMVpUdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnZDJocGJHVWdLQ3NyY1hWbGRXVkpibVJsZUNBOElHeGxiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlJkV1YxWlZ0eGRXVjFaVWx1WkdWNFhTNXlkVzRvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdJQ0FnSUd4bGJpQTlJSEYxWlhWbExteGxibWQwYUR0Y2JpQWdJQ0I5WEc0Z0lDQWdZM1Z5Y21WdWRGRjFaWFZsSUQwZ2JuVnNiRHRjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVJQ0FnSUhKMWJrTnNaV0Z5VkdsdFpXOTFkQ2gwYVcxbGIzVjBLVHRjYm4xY2JseHVjSEp2WTJWemN5NXVaWGgwVkdsamF5QTlJR1oxYm1OMGFXOXVJQ2htZFc0cElIdGNiaUFnSUNCMllYSWdZWEpuY3lBOUlHNWxkeUJCY25KaGVTaGhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lDQWdhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeEtTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGNtZHpXMmtnTFNBeFhTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J4ZFdWMVpTNXdkWE5vS0c1bGR5QkpkR1Z0S0daMWJpd2dZWEpuY3lrcE8xeHVJQ0FnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dnUFQwOUlERWdKaVlnSVdSeVlXbHVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lISjFibFJwYldWdmRYUW9aSEpoYVc1UmRXVjFaU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeThnZGpnZ2JHbHJaWE1nY0hKbFpHbGpkR2xpYkdVZ2IySnFaV04wYzF4dVpuVnVZM1JwYjI0Z1NYUmxiU2htZFc0c0lHRnljbUY1S1NCN1hHNGdJQ0FnZEdocGN5NW1kVzRnUFNCbWRXNDdYRzRnSUNBZ2RHaHBjeTVoY25KaGVTQTlJR0Z5Y21GNU8xeHVmVnh1U1hSbGJTNXdjbTkwYjNSNWNHVXVjblZ1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIUm9hWE11Wm5WdUxtRndjR3g1S0c1MWJHd3NJSFJvYVhNdVlYSnlZWGtwTzF4dWZUdGNibkJ5YjJObGMzTXVkR2wwYkdVZ1BTQW5Zbkp2ZDNObGNpYzdYRzV3Y205alpYTnpMbUp5YjNkelpYSWdQU0IwY25WbE8xeHVjSEp2WTJWemN5NWxibllnUFNCN2ZUdGNibkJ5YjJObGMzTXVZWEpuZGlBOUlGdGRPMXh1Y0hKdlkyVnpjeTUyWlhKemFXOXVJRDBnSnljN0lDOHZJR1Z0Y0hSNUlITjBjbWx1WnlCMGJ5QmhkbTlwWkNCeVpXZGxlSEFnYVhOemRXVnpYRzV3Y205alpYTnpMblpsY25OcGIyNXpJRDBnZTMwN1hHNWNibVoxYm1OMGFXOXVJRzV2YjNBb0tTQjdmVnh1WEc1d2NtOWpaWE56TG05dUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdVlXUmtUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXZibU5sSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011YjJabUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNtVnRiM1psVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV5WlcxdmRtVkJiR3hNYVhOMFpXNWxjbk1nUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTVsYldsMElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y0hKbGNHVnVaRTl1WTJWTWFYTjBaVzVsY2lBOUlHNXZiM0E3WEc1Y2JuQnliMk5sYzNNdWJHbHpkR1Z1WlhKeklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIc2djbVYwZFhKdUlGdGRJSDFjYmx4dWNISnZZMlZ6Y3k1aWFXNWthVzVuSUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZbWx1WkdsdVp5QnBjeUJ1YjNRZ2MzVndjRzl5ZEdWa0p5azdYRzU5TzF4dVhHNXdjbTlqWlhOekxtTjNaQ0E5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlDY3ZKeUI5TzF4dWNISnZZMlZ6Y3k1amFHUnBjaUE5SUdaMWJtTjBhVzl1SUNoa2FYSXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQnliMk5sYzNNdVkyaGthWElnYVhNZ2JtOTBJSE4xY0hCdmNuUmxaQ2NwTzF4dWZUdGNibkJ5YjJObGMzTXVkVzFoYzJzZ1BTQm1kVzVqZEdsdmJpZ3BJSHNnY21WMGRYSnVJREE3SUgwN1hHNGlMQ0oyWVhJZ1p6dGNibHh1THk4Z1ZHaHBjeUIzYjNKcmN5QnBiaUJ1YjI0dGMzUnlhV04wSUcxdlpHVmNibWNnUFNBb1puVnVZM1JwYjI0b0tTQjdYRzVjZEhKbGRIVnliaUIwYUdsek8xeHVmU2tvS1R0Y2JseHVkSEo1SUh0Y2JseDBMeThnVkdocGN5QjNiM0pyY3lCcFppQmxkbUZzSUdseklHRnNiRzkzWldRZ0tITmxaU0JEVTFBcFhHNWNkR2NnUFNCbklIeDhJRzVsZHlCR2RXNWpkR2x2YmloY0luSmxkSFZ5YmlCMGFHbHpYQ0lwS0NrN1hHNTlJR05oZEdOb0lDaGxLU0I3WEc1Y2RDOHZJRlJvYVhNZ2QyOXlhM01nYVdZZ2RHaGxJSGRwYm1SdmR5QnlaV1psY21WdVkyVWdhWE1nWVhaaGFXeGhZbXhsWEc1Y2RHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0lEMDlQU0JjSW05aWFtVmpkRndpS1NCbklEMGdkMmx1Wkc5M08xeHVmVnh1WEc0dkx5Qm5JR05oYmlCemRHbHNiQ0JpWlNCMWJtUmxabWx1WldRc0lHSjFkQ0J1YjNSb2FXNW5JSFJ2SUdSdklHRmliM1YwSUdsMExpNHVYRzR2THlCWFpTQnlaWFIxY200Z2RXNWtaV1pwYm1Wa0xDQnBibk4wWldGa0lHOW1JRzV2ZEdocGJtY2dhR1Z5WlN3Z2MyOGdhWFFuYzF4dUx5OGdaV0Z6YVdWeUlIUnZJR2hoYm1Sc1pTQjBhR2x6SUdOaGMyVXVJR2xtS0NGbmJHOWlZV3dwSUhzZ0xpNHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdjN1hHNGlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiblpoY2lCZlgybHRjRzl5ZEZOMFlYSWdQU0FvZEdocGN5QW1KaUIwYUdsekxsOWZhVzF3YjNKMFUzUmhjaWtnZkh3Z1puVnVZM1JwYjI0Z0tHMXZaQ2tnZTF4dUlDQWdJR2xtSUNodGIyUWdKaVlnYlc5a0xsOWZaWE5OYjJSMWJHVXBJSEpsZEhWeWJpQnRiMlE3WEc0Z0lDQWdkbUZ5SUhKbGMzVnNkQ0E5SUh0OU8xeHVJQ0FnSUdsbUlDaHRiMlFnSVQwZ2JuVnNiQ2tnWm05eUlDaDJZWElnYXlCcGJpQnRiMlFwSUdsbUlDaFBZbXBsWTNRdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHRiMlFzSUdzcEtTQnlaWE4xYkhSYmExMGdQU0J0YjJSYmExMDdYRzRnSUNBZ2NtVnpkV3gwVzF3aVpHVm1ZWFZzZEZ3aVhTQTlJRzF2WkR0Y2JpQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVmVHRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUJGZG1WdWRITWdQU0JmWDJsdGNHOXlkRk4wWVhJb2NtVnhkV2x5WlNoY0lpNHZUVWxFU1VWMlpXNTBjMXdpS1NrN1hHNTJZWElnVFVsRVNVMWxkR0ZGZG1WdWRFTnlaV0YwYjNKZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDAxSlJFbE5aWFJoUlhabGJuUkRjbVZoZEc5eVhDSXBPMXh1ZG1GeUlIWmhjbWxoWW14bFgyeGxibWQwYUY5MllXeDFaVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHVMM1YwYVd4ekwzWmhjbWxoWW14bExXeGxibWQwYUMxMllXeDFaVndpS1R0Y2JuWmhjaUJqY21WaGRHVk9iM1JsVDJabVJYWmxiblJHY205dFFubDBaWE1nUFNCbWRXNWpkR2x2YmlBb2MzUmhkSFZ6UW5sMFpTd2daR0YwWVZacFpYY3NJSE4wWVhKMFNXNWtaWGdwSUh0Y2JpQWdJQ0JwWmlBb2MzUmhjblJKYm1SbGVDQTlQVDBnZG05cFpDQXdLU0I3SUhOMFlYSjBTVzVrWlhnZ1BTQXdPeUI5WEc0Z0lDQWdkbUZ5SUdOb1lXNXVaV3dnUFNBb2MzUmhkSFZ6UW5sMFpTQW1JREI0UmlrZ0t5QXhPMXh1SUNBZ0lIWmhjaUJ1YjNSbFRuVnRZbVZ5SUQwZ1pHRjBZVlpwWlhjdVoyVjBWV2x1ZERnb2MzUmhjblJKYm1SbGVDazdYRzRnSUNBZ2RtRnlJSEpsYkdWaGMyVWdQU0JrWVhSaFZtbGxkeTVuWlhSVmFXNTBPQ2h6ZEdGeWRFbHVaR1Y0SUNzZ01TazdYRzRnSUNBZ2NtVjBkWEp1SUZ0Y2JpQWdJQ0FnSUNBZ01peGNiaUFnSUNBZ0lDQWdibVYzSUVWMlpXNTBjeTVPYjNSbFQyWm1SWFpsYm5Rb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtNWxiRG9nWTJoaGJtNWxiQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHNXZkR1ZPZFcxaVpYSTZJRzV2ZEdWT2RXMWlaWElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaV3hsWVhObE9pQnlaV3hsWVhObExGeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lGMDdYRzU5TzF4dWRtRnlJR055WldGMFpVNXZkR1ZQYmtWMlpXNTBSbkp2YlVKNWRHVnpJRDBnWm5WdVkzUnBiMjRnS0hOMFlYUjFjMEo1ZEdVc0lHUmhkR0ZXYVdWM0xDQnpkR0Z5ZEVsdVpHVjRLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYSjBTVzVrWlhnZ1BUMDlJSFp2YVdRZ01Da2dleUJ6ZEdGeWRFbHVaR1Y0SUQwZ01Ec2dmVnh1SUNBZ0lIWmhjaUJqYUdGdWJtVnNJRDBnS0hOMFlYUjFjMEo1ZEdVZ0ppQXdlRVlwSUNzZ01UdGNiaUFnSUNCMllYSWdibTkwWlU1MWJXSmxjaUE5SUdSaGRHRldhV1YzTG1kbGRGVnBiblE0S0hOMFlYSjBTVzVrWlhncE8xeHVJQ0FnSUhaaGNpQjJaV3h2WTJsMGVTQTlJR1JoZEdGV2FXVjNMbWRsZEZWcGJuUTRLSE4wWVhKMFNXNWtaWGdnS3lBeEtUdGNiaUFnSUNCeVpYUjFjbTRnVzF4dUlDQWdJQ0FnSUNBeUxGeHVJQ0FnSUNBZ0lDQnVaWGNnUlhabGJuUnpMazV2ZEdWUGJrVjJaVzUwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05vWVc1dVpXdzZJR05vWVc1dVpXd3NYRzRnSUNBZ0lDQWdJQ0FnSUNCdWIzUmxUblZ0WW1WeU9pQnViM1JsVG5WdFltVnlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RtVnNiMk5wZEhrNklIWmxiRzlqYVhSNUxGeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lGMDdYRzU5TzF4dWRtRnlJR055WldGMFpWTjVjMlY0UlhabGJuUkdjbTl0UW5sMFpYTWdQU0JtZFc1amRHbHZiaUFvYzNSaGRIVnpRbmwwWlN3Z1pHRjBZVlpwWlhjc0lITjBZWEowU1c1a1pYZ3BJSHRjYmlBZ0lDQnBaaUFvYzNSaGNuUkpibVJsZUNBOVBUMGdkbTlwWkNBd0tTQjdJSE4wWVhKMFNXNWtaWGdnUFNBd095QjlYRzRnSUNBZ2RtRnlJRjloSUQwZ2RtRnlhV0ZpYkdWZmJHVnVaM1JvWDNaaGJIVmxYekV1Wm5KdmJWWmhjbWxoWW14bFRHVnVaM1JvVm1Gc2RXVW9aR0YwWVZacFpYY3VZblZtWm1WeUxDQmtZWFJoVm1sbGR5NWllWFJsVDJabWMyVjBJQ3NnYzNSaGNuUkpibVJsZUNrc0lHSjVkR1Z6VW1WaFpDQTlJRjloV3pCZExDQmtZWFJoVEdWdVozUm9JRDBnWDJGYk1WMDdYRzRnSUNBZ2NtVjBkWEp1SUZ0Y2JpQWdJQ0FnSUNBZ1lubDBaWE5TWldGa0lDc2daR0YwWVV4bGJtZDBhQ3hjYmlBZ0lDQWdJQ0FnYm1WM0lFVjJaVzUwY3k1VGVYTkZlRVYyWlc1MEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWMlpXNTBSR0YwWVRvZ2JtVjNJRlZwYm5RNFFYSnlZWGtvWkdGMFlWWnBaWGN1WW5WbVptVnlMQ0JrWVhSaFZtbGxkeTVpZVhSbFQyWm1jMlYwSUNzZ2MzUmhjblJKYm1SbGVDd2daR0YwWVV4bGJtZDBhQ2tzWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnWFR0Y2JuMDdYRzUyWVhJZ1kzSmxZWFJsVUhKdlozSmhiVU5vWVc1blpVVjJaVzUwUm5KdmJVSjVkR1Z6SUQwZ1puVnVZM1JwYjI0Z0tITjBZWFIxYzBKNWRHVXNJR1JoZEdGV2FXVjNMQ0J6ZEdGeWRFbHVaR1Y0S1NCN1hHNGdJQ0FnYVdZZ0tITjBZWEowU1c1a1pYZ2dQVDA5SUhadmFXUWdNQ2tnZXlCemRHRnlkRWx1WkdWNElEMGdNRHNnZlZ4dUlDQWdJSFpoY2lCamFHRnVibVZzSUQwZ0tITjBZWFIxYzBKNWRHVWdKaUF3ZUVZcElDc2dNVHRjYmlBZ0lDQjJZWElnY0hKdlozSmhiVTUxYldKbGNpQTlJR1JoZEdGV2FXVjNMbWRsZEZWcGJuUTRLSE4wWVhKMFNXNWtaWGdwTzF4dUlDQWdJSEpsZEhWeWJpQmJYRzRnSUNBZ0lDQWdJREVzWEc0Z0lDQWdJQ0FnSUc1bGR5QkZkbVZ1ZEhNdVVISnZaM0poYlVOb1lXNW5aVVYyWlc1MEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOb1lXNXVaV3c2SUdOb1lXNXVaV3dzWEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbTluY21GdFRuVnRZbVZ5T2lCd2NtOW5jbUZ0VG5WdFltVnlMRnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJRjA3WEc1OU8xeHVkbUZ5SUdOeVpXRjBaVU52Ym5SeWIyeHNaWEpEYUdGdVoyVkZkbVZ1ZEVaeWIyMUNlWFJsY3lBOUlHWjFibU4wYVc5dUlDaHpkR0YwZFhOQ2VYUmxMQ0JrWVhSaFZtbGxkeXdnYzNSaGNuUkpibVJsZUNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0Z5ZEVsdVpHVjRJRDA5UFNCMmIybGtJREFwSUhzZ2MzUmhjblJKYm1SbGVDQTlJREE3SUgxY2JpQWdJQ0IyWVhJZ1kyaGhibTVsYkNBOUlDaHpkR0YwZFhOQ2VYUmxJQ1lnTUhoR0tTQXJJREU3WEc0Z0lDQWdkbUZ5SUdOdmJuUnliMnhzWlhKT2RXMWlaWElnUFNCa1lYUmhWbWxsZHk1blpYUlZhVzUwT0NoemRHRnlkRWx1WkdWNEtUdGNiaUFnSUNCMllYSWdZMjl1ZEhKdmJHeGxjbFpoYkhWbElEMGdaR0YwWVZacFpYY3VaMlYwVldsdWREZ29jM1JoY25SSmJtUmxlQ0FySURFcE8xeHVJQ0FnSUhKbGRIVnliaUJiWEc0Z0lDQWdJQ0FnSURJc1hHNGdJQ0FnSUNBZ0lHNWxkeUJGZG1WdWRITXVRMjl1ZEhKdmJHeGxja05vWVc1blpVVjJaVzUwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05vWVc1dVpXdzZJR05vWVc1dVpXd3NYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNTBjbTlzYkdWeVRuVnRZbVZ5T2lCamIyNTBjbTlzYkdWeVRuVnRZbVZ5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEhKdmJHeGxjbFpoYkhWbE9pQmpiMjUwY205c2JHVnlWbUZzZFdVc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ1hUdGNibjA3WEc1MllYSWdZM0psWVhSbFVHOXNlWEJvYjI1cFkwRm1kR1Z5ZEc5MVkyaEZkbVZ1ZEVaeWIyMUNlWFJsY3lBOUlHWjFibU4wYVc5dUlDaHpkR0YwZFhOQ2VYUmxMQ0JrWVhSaFZtbGxkeXdnYzNSaGNuUkpibVJsZUNrZ2UxeHVJQ0FnSUhaaGNpQmphR0Z1Ym1Wc0lEMGdLSE4wWVhSMWMwSjVkR1VnSmlBd2VFWXBJQ3NnTVR0Y2JpQWdJQ0IyWVhJZ2JtOTBaVTUxYldKbGNpQTlJR1JoZEdGV2FXVjNMbWRsZEZWcGJuUTRLSE4wWVhKMFNXNWtaWGdwTzF4dUlDQWdJSFpoY2lCd2NtVnpjM1Z5WlNBOUlHUmhkR0ZXYVdWM0xtZGxkRlZwYm5RNEtITjBZWEowU1c1a1pYZ2dLeUF4S1R0Y2JpQWdJQ0J5WlhSMWNtNGdXMXh1SUNBZ0lDQWdJQ0F5TEZ4dUlDQWdJQ0FnSUNCdVpYY2dSWFpsYm5SekxsQnZiSGx3YUc5dWFXTkJablJsY25SdmRXTm9SWFpsYm5Rb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtNWxiRG9nWTJoaGJtNWxiQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHNXZkR1ZPZFcxaVpYSTZJRzV2ZEdWT2RXMWlaWElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbVZ6YzNWeVpUb2djSEpsYzNOMWNtVXNYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdYVHRjYm4wN1hHNTJZWElnWTNKbFlYUmxRMmhoYm01bGJFRm1kR1Z5ZEc5MVkyaEZkbVZ1ZEVaeWIyMUNlWFJsY3lBOUlHWjFibU4wYVc5dUlDaHpkR0YwZFhOQ2VYUmxMQ0JrWVhSaFZtbGxkeXdnYzNSaGNuUkpibVJsZUNrZ2UxeHVJQ0FnSUhaaGNpQmphR0Z1Ym1Wc0lEMGdLSE4wWVhSMWMwSjVkR1VnSmlBd2VFWXBJQ3NnTVR0Y2JpQWdJQ0IyWVhJZ2NISmxjM04xY21VZ1BTQmtZWFJoVm1sbGR5NW5aWFJWYVc1ME9DaHpkR0Z5ZEVsdVpHVjRJQ3NnTVNrN1hHNGdJQ0FnY21WMGRYSnVJRnRjYmlBZ0lDQWdJQ0FnTVN4Y2JpQWdJQ0FnSUNBZ2JtVjNJRVYyWlc1MGN5NURhR0Z1Ym1Wc1FXWjBaWEowYjNWamFFVjJaVzUwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05vWVc1dVpXdzZJR05vWVc1dVpXd3NYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtVnpjM1Z5WlRvZ2NISmxjM04xY21Vc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ1hUdGNibjA3WEc1MllYSWdZM0psWVhSbFVHbDBZMmhDWlc1a1JYWmxiblJHY205dFFubDBaWE1nUFNCbWRXNWpkR2x2YmlBb2MzUmhkSFZ6UW5sMFpTd2daR0YwWVZacFpYY3NJSE4wWVhKMFNXNWtaWGdwSUh0Y2JpQWdJQ0IyWVhJZ1kyaGhibTVsYkNBOUlDaHpkR0YwZFhOQ2VYUmxJQ1lnTUhoR0tTQXJJREU3WEc0Z0lDQWdkbUZ5SUd4bFlYTjBVMmxuYm1sbWFXTmhiblJDZVhSbElEMGdaR0YwWVZacFpYY3VaMlYwVldsdWREZ29jM1JoY25SSmJtUmxlQ2s3WEc0Z0lDQWdkbUZ5SUcxdmMzUlRhV2R1YVdacFkyRnVkRUo1ZEdVZ1BTQmtZWFJoVm1sbGR5NW5aWFJWYVc1ME9DaHpkR0Z5ZEVsdVpHVjRJQ3NnTVNrN1hHNGdJQ0FnZG1GeUlIWmhiSFZsSUQwZ0tDaHRiM04wVTJsbmJtbG1hV05oYm5SQ2VYUmxJQ1lnTUhnM1Jpa2dQRHdnTnlrZ0t5QW9iR1ZoYzNSVGFXZHVhV1pwWTJGdWRFSjVkR1VnSmlBd2VEZEdLVHRjYmlBZ0lDQnlaWFIxY200Z1cxeHVJQ0FnSUNBZ0lDQXlMRnh1SUNBZ0lDQWdJQ0J1WlhjZ1JYWmxiblJ6TGxCcGRHTm9RbVZ1WkVWMlpXNTBLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzV1Wld3NklHTm9ZVzV1Wld3c1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2dkbUZzZFdVc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ1hUdGNibjA3WEc1MllYSWdaMlYwUTNKbFlYUmxSblZ1WTNScGIyNGdQU0JtZFc1amRHbHZiaUFvYzNSaGRIVnpRbmwwWlNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0YwZFhOQ2VYUmxJRDQrSURRZ1BUMDlJREI0T0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kzSmxZWFJsVG05MFpVOW1aa1YyWlc1MFJuSnZiVUo1ZEdWek8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2MzUmhkSFZ6UW5sMFpTQStQaUEwSUQwOVBTQXdlRGtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOeVpXRjBaVTV2ZEdWUGJrVjJaVzUwUm5KdmJVSjVkR1Z6TzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvYzNSaGRIVnpRbmwwWlNBK1BpQTBJRDA5UFNBd2VFRXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR055WldGMFpWQnZiSGx3YUc5dWFXTkJablJsY25SdmRXTm9SWFpsYm5SR2NtOXRRbmwwWlhNN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoemRHRjBkWE5DZVhSbElENCtJRFFnUFQwOUlEQjRRaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTNKbFlYUmxRMjl1ZEhKdmJHeGxja05vWVc1blpVVjJaVzUwUm5KdmJVSjVkR1Z6TzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvYzNSaGRIVnpRbmwwWlNBK1BpQTBJRDA5UFNBd2VFTXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR055WldGMFpWQnliMmR5WVcxRGFHRnVaMlZGZG1WdWRFWnliMjFDZVhSbGN6dGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tITjBZWFIxYzBKNWRHVWdQajRnTkNBOVBUMGdNSGhFS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamNtVmhkR1ZEYUdGdWJtVnNRV1owWlhKMGIzVmphRVYyWlc1MFJuSnZiVUo1ZEdWek8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2MzUmhkSFZ6UW5sMFpTQStQaUEwSUQwOVBTQXdlRVVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOeVpXRjBaVkJwZEdOb1FtVnVaRVYyWlc1MFJuSnZiVUo1ZEdWek8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2MzUmhkSFZ6UW5sMFpTQTlQVDBnTUhoR01Da2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZM0psWVhSbFUzbHpaWGhGZG1WdWRFWnliMjFDZVhSbGN6dGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tITjBZWFIxYzBKNWRHVWdQVDA5SURCNFJrWXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRTFKUkVsTlpYUmhSWFpsYm5SRGNtVmhkRzl5WHpFdVkzSmxZWFJsVFdWMFlVVjJaVzUwUm5KdmJVSjVkR1Z6TzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2JuVnNiRHRjYm4wN1hHNWxlSEJ2Y25SekxtVjJaVzUwUm5KdmJVSjVkR1Z6SUQwZ1puVnVZM1JwYjI0Z0tHUmhkR0ZXYVdWM0xDQnpkR0Z5ZEVsdVpHVjRMQ0J3Y21WMmFXOTFjMU4wWVhSMWMwSjVkR1VwSUh0Y2JpQWdJQ0JwWmlBb2MzUmhjblJKYm1SbGVDQTlQVDBnZG05cFpDQXdLU0I3SUhOMFlYSjBTVzVrWlhnZ1BTQXdPeUI5WEc0Z0lDQWdhV1lnS0hCeVpYWnBiM1Z6VTNSaGRIVnpRbmwwWlNBOVBUMGdkbTlwWkNBd0tTQjdJSEJ5WlhacGIzVnpVM1JoZEhWelFubDBaU0E5SUc1MWJHdzdJSDFjYmlBZ0lDQjJZWElnYzNSaGRIVnpRbmwwWlNBOUlHUmhkR0ZXYVdWM0xtZGxkRlZwYm5RNEtITjBZWEowU1c1a1pYZ3BPMXh1SUNBZ0lIWmhjaUJqY21WaGRHVkdkVzVqZEdsdmJpQTlJR2RsZEVOeVpXRjBaVVoxYm1OMGFXOXVLSE4wWVhSMWMwSjVkR1VwTzF4dUlDQWdJSFpoY2lCaWVYUmxjMUpsWVdRZ1BTQXdPMXh1SUNBZ0lHbG1JQ2hqY21WaGRHVkdkVzVqZEdsdmJpQTlQVDBnYm5Wc2JDQW1KaUJ3Y21WMmFXOTFjMU4wWVhSMWMwSjVkR1VnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ2MzUmhkSFZ6UW5sMFpTQTlJSEJ5WlhacGIzVnpVM1JoZEhWelFubDBaVHRjYmlBZ0lDQWdJQ0FnWTNKbFlYUmxSblZ1WTNScGIyNGdQU0JuWlhSRGNtVmhkR1ZHZFc1amRHbHZiaWh6ZEdGMGRYTkNlWFJsS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDOHZJRlJvWlNCaWVYUmxJR0YwSUhOMFlYSjBTVzVrWlhnZ2QyRnpJSFJvWlNCemRHRjBkWE1nWW5sMFpTd2djMjhnYzJ0cGNDQnBkQ0JwYmlCMGFHVWdaR0YwWVZ4dUlDQWdJQ0FnSUNCemRHRnlkRWx1WkdWNElDczlJREU3WEc0Z0lDQWdJQ0FnSUdKNWRHVnpVbVZoWkNBclBTQXhPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9ZM0psWVhSbFJuVnVZM1JwYjI0Z0lUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUY5aElEMGdZM0psWVhSbFJuVnVZM1JwYjI0b2MzUmhkSFZ6UW5sMFpTd2daR0YwWVZacFpYY3NJSE4wWVhKMFNXNWtaWGdwTENCbGRtVnVkRUo1ZEdWelVtVmhaQ0E5SUY5aFd6QmRMQ0JsZG1WdWRGOHhJRDBnWDJGYk1WMDdYRzRnSUNBZ0lDQWdJR0o1ZEdWelVtVmhaQ0FyUFNCbGRtVnVkRUo1ZEdWelVtVmhaRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjVkR1Z6VW1WaFpEb2dZbmwwWlhOU1pXRmtMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblE2SUdWMlpXNTBYekVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR0YwZFhOQ2VYUmxPaUJ6ZEdGMGRYTkNlWFJsTEZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JuMDdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUJEYUdGdWJtVnNRV1owWlhKMGIzVmphRVYyWlc1MElEMGdMeW9xSUVCamJHRnpjeUFxTHlBb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHWjFibU4wYVc5dUlFTm9ZVzV1Wld4QlpuUmxjblJ2ZFdOb1JYWmxiblFvWDJFcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdOb1lXNXVaV3dnUFNCZllTNWphR0Z1Ym1Wc0xDQndjbVZ6YzNWeVpTQTlJRjloTG5CeVpYTnpkWEpsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblI1Y0dVZ1BTQXpNaUF2S2lCRGFHRnVibVZzUVdaMFpYSjBiM1ZqYUNBcUx6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1amFHRnVibVZzSUQwZ1kyaGhibTVsYkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3Y21WemMzVnlaU0E5SUhCeVpYTnpkWEpsTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1EyaGhibTVsYkVGbWRHVnlkRzkxWTJoRmRtVnVkRHRjYm4wb0tTazdYRzVsZUhCdmNuUnpMa05vWVc1dVpXeEJablJsY25SdmRXTm9SWFpsYm5RZ1BTQkRhR0Z1Ym1Wc1FXWjBaWEowYjNWamFFVjJaVzUwTzF4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzUyWVhJZ1EyOXVkSEp2Ykd4bGNrTm9ZVzVuWlVWMlpXNTBJRDBnTHlvcUlFQmpiR0Z6Y3lBcUx5QW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR1oxYm1OMGFXOXVJRU52Ym5SeWIyeHNaWEpEYUdGdVoyVkZkbVZ1ZENoZllTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyaGhibTVsYkNBOUlGOWhMbU5vWVc1dVpXd3NJR052Ym5SeWIyeHNaWEpPZFcxaVpYSWdQU0JmWVM1amIyNTBjbTlzYkdWeVRuVnRZbVZ5TENCamIyNTBjbTlzYkdWeVZtRnNkV1VnUFNCZllTNWpiMjUwY205c2JHVnlWbUZzZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEhsd1pTQTlJRGdnTHlvZ1EyOXVkSEp2Ykd4bGNrTm9ZVzVuWlNBcUx6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1amFHRnVibVZzSUQwZ1kyaGhibTVsYkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYjI1MGNtOXNiR1Z5VG5WdFltVnlJRDBnWTI5dWRISnZiR3hsY2s1MWJXSmxjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpiMjUwY205c2JHVnlWbUZzZFdVZ1BTQmpiMjUwY205c2JHVnlWbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQkRiMjUwY205c2JHVnlRMmhoYm1kbFJYWmxiblE3WEc1OUtDa3BPMXh1Wlhod2IzSjBjeTVEYjI1MGNtOXNiR1Z5UTJoaGJtZGxSWFpsYm5RZ1BTQkRiMjUwY205c2JHVnlRMmhoYm1kbFJYWmxiblE3WEc0aUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiblpoY2lCRGFHRnVibVZzVUhKbFptbDRSWFpsYm5RZ1BTQXZLaW9nUUdOc1lYTnpJQ292SUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1puVnVZM1JwYjI0Z1EyaGhibTVsYkZCeVpXWnBlRVYyWlc1MEtGOWhLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmphR0Z1Ym1Wc1RuVnRZbVZ5SUQwZ1gyRXVZMmhoYm01bGJFNTFiV0psY2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwZVhCbElEMGdNVEF5TkNBdktpQk5aWFJoUTJoaGJtNWxiRkJ5WldacGVDQXFMenRjYmlBZ0lDQWdJQ0FnZEdocGN5NWphR0Z1Ym1Wc1RuVnRZbVZ5SUQwZ1kyaGhibTVsYkU1MWJXSmxjanRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUVOb1lXNXVaV3hRY21WbWFYaEZkbVZ1ZER0Y2JuMG9LU2s3WEc1bGVIQnZjblJ6TGtOb1lXNXVaV3hRY21WbWFYaEZkbVZ1ZENBOUlFTm9ZVzV1Wld4UWNtVm1hWGhGZG1WdWREdGNiaUlzSWx3aWRYTmxJSE4wY21samRGd2lPMXh1VDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGd2lYMTlsYzAxdlpIVnNaVndpTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dWRtRnlJRU52Y0hseWFXZG9kRVYyWlc1MElEMGdMeW9xSUVCamJHRnpjeUFxTHlBb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHWjFibU4wYVc5dUlFTnZjSGx5YVdkb2RFVjJaVzUwS0Y5aEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCamIzQjVjbWxuYUhRZ1BTQmZZUzVqYjNCNWNtbG5hSFE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkSGx3WlNBOUlEUXdPVFlnTHlvZ1RXVjBZVU52Y0hseWFXZG9kQ0FxTHp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYjNCNWNtbG5hSFFnUFNCamIzQjVjbWxuYUhRN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQkRiM0I1Y21sbmFIUkZkbVZ1ZER0Y2JuMG9LU2s3WEc1bGVIQnZjblJ6TGtOdmNIbHlhV2RvZEVWMlpXNTBJRDBnUTI5d2VYSnBaMmgwUlhabGJuUTdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUJEZFdWUWIybHVkRVYyWlc1MElEMGdMeW9xSUVCamJHRnpjeUFxTHlBb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHWjFibU4wYVc5dUlFTjFaVkJ2YVc1MFJYWmxiblFvWDJFcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdOMVpWUmxlSFFnUFNCZllTNWpkV1ZVWlhoME8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SNWNHVWdQU0EwTVRrME16QTBJQzhxSUUxbGRHRkRkV1ZRYjJsdWRDQXFMenRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpkV1ZVWlhoMElEMGdZM1ZsVkdWNGREdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJRU4xWlZCdmFXNTBSWFpsYm5RN1hHNTlLQ2twTzF4dVpYaHdiM0owY3k1RGRXVlFiMmx1ZEVWMlpXNTBJRDBnUTNWbFVHOXBiblJGZG1WdWREdGNiaUlzSWx3aWRYTmxJSE4wY21samRGd2lPMXh1VDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGd2lYMTlsYzAxdlpIVnNaVndpTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dWRtRnlJRWx1YzNSeWRXMWxiblJPWVcxbFJYWmxiblFnUFNBdktpb2dRR05zWVhOeklDb3ZJQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnWm5WdVkzUnBiMjRnU1c1emRISjFiV1Z1ZEU1aGJXVkZkbVZ1ZENoZllTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JtRnRaU0E5SUY5aExtNWhiV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkSGx3WlNBOUlEWTFOVE0ySUM4cUlFMWxkR0ZKYm5OMGNuVnRaVzUwVG1GdFpTQXFMenRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVZVzFsSUQwZ2JtRnRaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUVsdWMzUnlkVzFsYm5ST1lXMWxSWFpsYm5RN1hHNTlLQ2twTzF4dVpYaHdiM0owY3k1SmJuTjBjblZ0Wlc1MFRtRnRaVVYyWlc1MElEMGdTVzV6ZEhKMWJXVnVkRTVoYldWRmRtVnVkRHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUV0bGVWTnBaMjVoZEhWeVpVVjJaVzUwSUQwZ0x5b3FJRUJqYkdGemN5QXFMeUFvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdaMWJtTjBhVzl1SUV0bGVWTnBaMjVoZEhWeVpVVjJaVzUwS0Y5aEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCemFHRnljSE1nUFNCZllTNXphR0Z5Y0hNc0lHbHpUV0ZxYjNJZ1BTQmZZUzVwYzAxaGFtOXlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUjVjR1VnUFNBMU1qUXlPRGdnTHlvZ1RXVjBZVXRsZVZOcFoyNWhkSFZ5WlNBcUx6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1emFHRnljSE1nUFNCemFHRnljSE03WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhWE5OWVdwdmNpQTlJR2x6VFdGcWIzSTdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJMWlhsVGFXZHVZWFIxY21WRmRtVnVkRHRjYm4wb0tTazdYRzVsZUhCdmNuUnpMa3RsZVZOcFoyNWhkSFZ5WlVWMlpXNTBJRDBnUzJWNVUybG5ibUYwZFhKbFJYWmxiblE3WEc0aUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiblpoY2lCTWVYSnBZMFYyWlc1MElEMGdMeW9xSUVCamJHRnpjeUFxTHlBb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHWjFibU4wYVc5dUlFeDVjbWxqUlhabGJuUW9YMkVwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3g1Y21saklEMGdYMkV1YkhseWFXTTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRIbHdaU0E5SURJMk1qRTBOQ0F2S2lCTlpYUmhUSGx5YVdNZ0tpODdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJIbHlhV01nUFNCc2VYSnBZenRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUV4NWNtbGpSWFpsYm5RN1hHNTlLQ2twTzF4dVpYaHdiM0owY3k1TWVYSnBZMFYyWlc1MElEMGdUSGx5YVdORmRtVnVkRHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUUxaGNtdGxja1YyWlc1MElEMGdMeW9xSUVCamJHRnpjeUFxTHlBb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHWjFibU4wYVc5dUlFMWhjbXRsY2tWMlpXNTBLRjloS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ0WVhKclpYSWdQU0JmWVM1dFlYSnJaWEk3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkSGx3WlNBOUlERXdORGcxTnpZZ0x5b2dUV1YwWVUxaGNtdGxjaUFxTHp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0WVhKclpYSWdQU0J0WVhKclpYSTdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJOWVhKclpYSkZkbVZ1ZER0Y2JuMG9LU2s3WEc1bGVIQnZjblJ6TGsxaGNtdGxja1YyWlc1MElEMGdUV0Z5YTJWeVJYWmxiblE3WEc0aUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiblpoY2lCUWIzSjBVSEpsWm1sNFJYWmxiblFnUFNBdktpb2dRR05zWVhOeklDb3ZJQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnWm5WdVkzUnBiMjRnVUc5eWRGQnlaV1pwZUVWMlpXNTBLRjloS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3YjNKMFRuVnRZbVZ5SUQwZ1gyRXVjRzl5ZEU1MWJXSmxjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBlWEJsSUQwZ05URXlJQzhxSUUxbGRHRlFiM0owVUhKbFptbDRJQ292TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2Y25ST2RXMWlaWElnUFNCd2IzSjBUblZ0WW1WeU8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdVRzl5ZEZCeVpXWnBlRVYyWlc1ME8xeHVmU2dwS1R0Y2JtVjRjRzl5ZEhNdVVHOXlkRkJ5WldacGVFVjJaVzUwSUQwZ1VHOXlkRkJ5WldacGVFVjJaVzUwTzF4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzUyWVhJZ1UwMVFWRVZQWm1aelpYUkZkbVZ1ZENBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCVFRWQlVSVTltWm5ObGRFVjJaVzUwS0Y5aEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCb2IzVnljeUE5SUY5aExtaHZkWEp6TENCdGFXNTFkR1Z6SUQwZ1gyRXViV2x1ZFhSbGN5d2djMlZqYjI1a2N5QTlJRjloTG5ObFkyOXVaSE1zSUdaeVlXMWxjeUE5SUY5aExtWnlZVzFsY3l3Z1puSmhZM1JwYjI1aGJFWnlZVzFsY3lBOUlGOWhMbVp5WVdOMGFXOXVZV3hHY21GdFpYTTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRIbHdaU0E5SURNeU56WTRJQzhxSUUxbGRHRlRUVkJVUlU5bVpuTmxkQ0FxTHp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYjNWeWN5QTlJR2h2ZFhKek8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xcGJuVjBaWE1nUFNCdGFXNTFkR1Z6TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sWTI5dVpITWdQU0J6WldOdmJtUnpPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtWnlZVzFsY3lBOUlHWnlZVzFsY3p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtY21GamRHbHZibUZzUm5KaGJXVnpJRDBnWm5KaFkzUnBiMjVoYkVaeVlXMWxjenRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUZOTlVGUkZUMlptYzJWMFJYWmxiblE3WEc1OUtDa3BPMXh1Wlhod2IzSjBjeTVUVFZCVVJVOW1abk5sZEVWMlpXNTBJRDBnVTAxUVZFVlBabVp6WlhSRmRtVnVkRHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUZObGNYVmxibU5sVG5WdFltVnlSWFpsYm5RZ1BTQXZLaW9nUUdOc1lYTnpJQ292SUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1puVnVZM1JwYjI0Z1UyVnhkV1Z1WTJWT2RXMWlaWEpGZG1WdWRDaGZZU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdjMlZ4ZFdWdVkyVk9kVzFpWlhJZ1BTQmZZUzV6WlhGMVpXNWpaVTUxYldKbGNqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGVYQmxJRDBnTWpVMklDOHFJRTFsZEdGVFpYRjFaVzVqWlU1MWJXSmxjaUFxTHp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WlhGMVpXNWpaVTUxYldKbGNpQTlJSE5sY1hWbGJtTmxUblZ0WW1WeU8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdVMlZ4ZFdWdVkyVk9kVzFpWlhKRmRtVnVkRHRjYm4wb0tTazdYRzVsZUhCdmNuUnpMbE5sY1hWbGJtTmxUblZ0WW1WeVJYWmxiblFnUFNCVFpYRjFaVzVqWlU1MWJXSmxja1YyWlc1ME8xeHVJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1MllYSWdVMlZ4ZFdWdVkyVnlVM0JsWTJsbWFXTkZkbVZ1ZENBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCVFpYRjFaVzVqWlhKVGNHVmphV1pwWTBWMlpXNTBLRjloS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJwWkNBOUlGOWhMbWxrTENCa1lYUmhJRDBnWDJFdVpHRjBZVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBlWEJsSUQwZ01qQTVOekUxTWlBdktpQk5aWFJoVTJWeGRXVnVZMlZ5VTNCbFkybG1hV01nS2k4N1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVdRZ1BTQnBaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWtZWFJoSUQwZ1pHRjBZVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUZObGNYVmxibU5sY2xOd1pXTnBabWxqUlhabGJuUTdYRzU5S0NrcE8xeHVaWGh3YjNKMGN5NVRaWEYxWlc1alpYSlRjR1ZqYVdacFkwVjJaVzUwSUQwZ1UyVnhkV1Z1WTJWeVUzQmxZMmxtYVdORmRtVnVkRHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUZObGRGUmxiWEJ2UlhabGJuUWdQU0F2S2lvZ1FHTnNZWE56SUNvdklDaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdablZ1WTNScGIyNGdVMlYwVkdWdGNHOUZkbVZ1ZENoZllTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JXbGpjbTl6WldOdmJtUnpVR1Z5VVhWaGNuUmxjazV2ZEdVZ1BTQmZZUzV0YVdOeWIzTmxZMjl1WkhOUVpYSlJkV0Z5ZEdWeVRtOTBaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBlWEJsSUQwZ09ERTVNaUF2S2lCTlpYUmhVMlYwVkdWdGNHOGdLaTg3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV2xqY205elpXTnZibVJ6VUdWeVVYVmhjblJsY2s1dmRHVWdQU0J0YVdOeWIzTmxZMjl1WkhOUVpYSlJkV0Z5ZEdWeVRtOTBaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUZObGRGUmxiWEJ2UlhabGJuUTdYRzU5S0NrcE8xeHVaWGh3YjNKMGN5NVRaWFJVWlcxd2IwVjJaVzUwSUQwZ1UyVjBWR1Z0Y0c5RmRtVnVkRHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUZSbGVIUkZkbVZ1ZENBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCVVpYaDBSWFpsYm5Rb1gyRXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlIUmxlSFFnUFNCZllTNTBaWGgwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblI1Y0dVZ1BTQXlNRFE0SUM4cUlFMWxkR0ZVWlhoMElDb3ZPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUmxlSFFnUFNCMFpYaDBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnVkdWNGRFVjJaVzUwTzF4dWZTZ3BLVHRjYm1WNGNHOXlkSE11VkdWNGRFVjJaVzUwSUQwZ1ZHVjRkRVYyWlc1ME8xeHVJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1MllYSWdWR2x0WlZOcFoyNWhkSFZ5WlVWMlpXNTBJRDBnTHlvcUlFQmpiR0Z6Y3lBcUx5QW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR1oxYm1OMGFXOXVJRlJwYldWVGFXZHVZWFIxY21WRmRtVnVkQ2hmWVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYm5WdFpYSmhkRzl5SUQwZ1gyRXViblZ0WlhKaGRHOXlMQ0JrWlc1dmJXbHVZWFJ2Y2lBOUlGOWhMbVJsYm05dGFXNWhkRzl5TENCamJHOWphM05RWlhKVWFXTnJJRDBnWDJFdVkyeHZZMnR6VUdWeVZHbGpheXdnZEdocGNuUjVVMlZqYjI1a1RtOTBaWE1nUFNCZllTNTBhR2x5ZEhsVFpXTnZibVJPYjNSbGN6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGVYQmxJRDBnTVRNeE1EY3lJQzhxSUUxbGRHRlVhVzFsVTJsbmJtRjBkWEpsSUNvdk8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG01MWJXVnlZWFJ2Y2lBOUlHNTFiV1Z5WVhSdmNqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1a1pXNXZiV2x1WVhSdmNpQTlJR1JsYm05dGFXNWhkRzl5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU5zYjJOcmMxQmxjbFJwWTJzZ1BTQmpiRzlqYTNOUVpYSlVhV05yTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblJvYVhKMGVWTmxZMjl1WkU1dmRHVnpJRDBnZEdocGNuUjVVMlZqYjI1a1RtOTBaWE03WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCVWFXMWxVMmxuYm1GMGRYSmxSWFpsYm5RN1hHNTlLQ2twTzF4dVpYaHdiM0owY3k1VWFXMWxVMmxuYm1GMGRYSmxSWFpsYm5RZ1BTQlVhVzFsVTJsbmJtRjBkWEpsUlhabGJuUTdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUJVY21GamEwNWhiV1ZGZG1WdWRDQTlJQzhxS2lCQVkyeGhjM01nS2k4Z0tHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQm1kVzVqZEdsdmJpQlVjbUZqYTA1aGJXVkZkbVZ1ZENoZllTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JtRnRaU0E5SUY5aExtNWhiV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkSGx3WlNBOUlERTJNemcwSUM4cUlFMWxkR0ZVY21GamEwNWhiV1VnS2k4N1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1GdFpTQTlJRzVoYldVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQlVjbUZqYTA1aGJXVkZkbVZ1ZER0Y2JuMG9LU2s3WEc1bGVIQnZjblJ6TGxSeVlXTnJUbUZ0WlVWMlpXNTBJRDBnVkhKaFkydE9ZVzFsUlhabGJuUTdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUJUWlhGMVpXNWpaVTUxYldKbGNsOHhJRDBnY21WeGRXbHlaU2hjSWk0dlUyVnhkV1Z1WTJWT2RXMWlaWEpjSWlrN1hHNWxlSEJ2Y25SekxsTmxjWFZsYm1ObFRuVnRZbVZ5UlhabGJuUWdQU0JUWlhGMVpXNWpaVTUxYldKbGNsOHhMbE5sY1hWbGJtTmxUblZ0WW1WeVJYWmxiblE3WEc1MllYSWdWR2x0WlZOcFoyNWhkSFZ5WlY4eElEMGdjbVZ4ZFdseVpTaGNJaTR2VkdsdFpWTnBaMjVoZEhWeVpWd2lLVHRjYm1WNGNHOXlkSE11VkdsdFpWTnBaMjVoZEhWeVpVVjJaVzUwSUQwZ1ZHbHRaVk5wWjI1aGRIVnlaVjh4TGxScGJXVlRhV2R1WVhSMWNtVkZkbVZ1ZER0Y2JuWmhjaUJMWlhsVGFXZHVZWFIxY21WZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDB0bGVWTnBaMjVoZEhWeVpWd2lLVHRjYm1WNGNHOXlkSE11UzJWNVUybG5ibUYwZFhKbFJYWmxiblFnUFNCTFpYbFRhV2R1WVhSMWNtVmZNUzVMWlhsVGFXZHVZWFIxY21WRmRtVnVkRHRjYm5aaGNpQlRaWFJVWlcxd2IxOHhJRDBnY21WeGRXbHlaU2hjSWk0dlUyVjBWR1Z0Y0c5Y0lpazdYRzVsZUhCdmNuUnpMbE5sZEZSbGJYQnZSWFpsYm5RZ1BTQlRaWFJVWlcxd2IxOHhMbE5sZEZSbGJYQnZSWFpsYm5RN1hHNTJZWElnVUc5eWRGQnlaV1pwZUY4eElEMGdjbVZ4ZFdseVpTaGNJaTR2VUc5eWRGQnlaV1pwZUZ3aUtUdGNibVY0Y0c5eWRITXVVRzl5ZEZCeVpXWnBlRVYyWlc1MElEMGdVRzl5ZEZCeVpXWnBlRjh4TGxCdmNuUlFjbVZtYVhoRmRtVnVkRHRjYm5aaGNpQkRhR0Z1Ym1Wc1VISmxabWw0WHpFZ1BTQnlaWEYxYVhKbEtGd2lMaTlEYUdGdWJtVnNVSEpsWm1sNFhDSXBPMXh1Wlhod2IzSjBjeTVEYUdGdWJtVnNVSEpsWm1sNFJYWmxiblFnUFNCRGFHRnVibVZzVUhKbFptbDRYekV1UTJoaGJtNWxiRkJ5WldacGVFVjJaVzUwTzF4dWRtRnlJRU52Y0hseWFXZG9kRjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZRMjl3ZVhKcFoyaDBYQ0lwTzF4dVpYaHdiM0owY3k1RGIzQjVjbWxuYUhSRmRtVnVkQ0E5SUVOdmNIbHlhV2RvZEY4eExrTnZjSGx5YVdkb2RFVjJaVzUwTzF4dWRtRnlJRlJ5WVdOclRtRnRaVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZWSEpoWTJ0T1lXMWxYQ0lwTzF4dVpYaHdiM0owY3k1VWNtRmphMDVoYldWRmRtVnVkQ0E5SUZSeVlXTnJUbUZ0WlY4eExsUnlZV05yVG1GdFpVVjJaVzUwTzF4dWRtRnlJRlJsZUhSZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDFSbGVIUmNJaWs3WEc1bGVIQnZjblJ6TGxSbGVIUkZkbVZ1ZENBOUlGUmxlSFJmTVM1VVpYaDBSWFpsYm5RN1hHNTJZWElnU1c1emRISjFiV1Z1ZEU1aGJXVmZNU0E5SUhKbGNYVnBjbVVvWENJdUwwbHVjM1J5ZFcxbGJuUk9ZVzFsWENJcE8xeHVaWGh3YjNKMGN5NUpibk4wY25WdFpXNTBUbUZ0WlVWMlpXNTBJRDBnU1c1emRISjFiV1Z1ZEU1aGJXVmZNUzVKYm5OMGNuVnRaVzUwVG1GdFpVVjJaVzUwTzF4dWRtRnlJRXg1Y21salh6RWdQU0J5WlhGMWFYSmxLRndpTGk5TWVYSnBZMXdpS1R0Y2JtVjRjRzl5ZEhNdVRIbHlhV05GZG1WdWRDQTlJRXg1Y21salh6RXVUSGx5YVdORmRtVnVkRHRjYm5aaGNpQk5ZWEpyWlhKZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDAxaGNtdGxjbHdpS1R0Y2JtVjRjRzl5ZEhNdVRXRnlhMlZ5UlhabGJuUWdQU0JOWVhKclpYSmZNUzVOWVhKclpYSkZkbVZ1ZER0Y2JuWmhjaUJEZFdWUWIybHVkRjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZRM1ZsVUc5cGJuUmNJaWs3WEc1bGVIQnZjblJ6TGtOMVpWQnZhVzUwUlhabGJuUWdQU0JEZFdWUWIybHVkRjh4TGtOMVpWQnZhVzUwUlhabGJuUTdYRzUyWVhJZ1UwMVFWRVZQWm1aelpYUmZNU0E5SUhKbGNYVnBjbVVvWENJdUwxTk5VRlJGVDJabWMyVjBYQ0lwTzF4dVpYaHdiM0owY3k1VFRWQlVSVTltWm5ObGRFVjJaVzUwSUQwZ1UwMVFWRVZQWm1aelpYUmZNUzVUVFZCVVJVOW1abk5sZEVWMlpXNTBPMXh1ZG1GeUlGTmxjWFZsYm1ObGNsTndaV05wWm1salh6RWdQU0J5WlhGMWFYSmxLRndpTGk5VFpYRjFaVzVqWlhKVGNHVmphV1pwWTF3aUtUdGNibVY0Y0c5eWRITXVVMlZ4ZFdWdVkyVnlVM0JsWTJsbWFXTkZkbVZ1ZENBOUlGTmxjWFZsYm1ObGNsTndaV05wWm1salh6RXVVMlZ4ZFdWdVkyVnlVM0JsWTJsbWFXTkZkbVZ1ZER0Y2JpSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZ3aVgxOWxjMDF2WkhWc1pWd2lMQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1ZG1GeUlFNXZkR1ZQWm1aRmRtVnVkQ0E5SUM4cUtpQkFZMnhoYzNNZ0tpOGdLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JtZFc1amRHbHZiaUJPYjNSbFQyWm1SWFpsYm5Rb1gyRXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHTm9ZVzV1Wld3Z1BTQmZZUzVqYUdGdWJtVnNMQ0J1YjNSbFRuVnRZbVZ5SUQwZ1gyRXVibTkwWlU1MWJXSmxjaXdnY21Wc1pXRnpaU0E5SUY5aExuSmxiR1ZoYzJVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEhsd1pTQTlJREVnTHlvZ1RtOTBaVTltWmlBcUx6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1amFHRnVibVZzSUQwZ1kyaGhibTVsYkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1YjNSbFRuVnRZbVZ5SUQwZ2JtOTBaVTUxYldKbGNqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1eVpXeGxZWE5sSUQwZ2NtVnNaV0Z6WlR0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlFNXZkR1ZQWm1aRmRtVnVkRHRjYm4wb0tTazdYRzVsZUhCdmNuUnpMazV2ZEdWUFptWkZkbVZ1ZENBOUlFNXZkR1ZQWm1aRmRtVnVkRHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUU1dmRHVlBia1YyWlc1MElEMGdMeW9xSUVCamJHRnpjeUFxTHlBb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHWjFibU4wYVc5dUlFNXZkR1ZQYmtWMlpXNTBLRjloS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqYUdGdWJtVnNJRDBnWDJFdVkyaGhibTVsYkN3Z2JtOTBaVTUxYldKbGNpQTlJRjloTG01dmRHVk9kVzFpWlhJc0lIWmxiRzlqYVhSNUlEMGdYMkV1ZG1Wc2IyTnBkSGs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkSGx3WlNBOUlESWdMeW9nVG05MFpVOXVJQ292TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU5vWVc1dVpXd2dQU0JqYUdGdWJtVnNPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNXZkR1ZPZFcxaVpYSWdQU0J1YjNSbFRuVnRZbVZ5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMblpsYkc5amFYUjVJRDBnZG1Wc2IyTnBkSGs3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCT2IzUmxUMjVGZG1WdWREdGNibjBvS1NrN1hHNWxlSEJ2Y25SekxrNXZkR1ZQYmtWMlpXNTBJRDBnVG05MFpVOXVSWFpsYm5RN1hHNGlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCY0lsOWZaWE5OYjJSMWJHVmNJaXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYm5aaGNpQlFhWFJqYUVKbGJtUkZkbVZ1ZENBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCUWFYUmphRUpsYm1SRmRtVnVkQ2hmWVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWTJoaGJtNWxiQ0E5SUY5aExtTm9ZVzV1Wld3c0lIWmhiSFZsSUQwZ1gyRXVkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEhsd1pTQTlJRFkwSUM4cUlGQnBkR05vUW1WdVpDQXFMenRjYmlBZ0lDQWdJQ0FnZEdocGN5NWphR0Z1Ym1Wc0lEMGdZMmhoYm01bGJEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MllXeDFaU0E5SUhaaGJIVmxPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnVUdsMFkyaENaVzVrUlhabGJuUTdYRzU5S0NrcE8xeHVaWGh3YjNKMGN5NVFhWFJqYUVKbGJtUkZkbVZ1ZENBOUlGQnBkR05vUW1WdVpFVjJaVzUwTzF4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzUyWVhJZ1VHOXNlWEJvYjI1cFkwRm1kR1Z5ZEc5MVkyaEZkbVZ1ZENBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCUWIyeDVjR2h2Ym1salFXWjBaWEowYjNWamFFVjJaVzUwS0Y5aEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCamFHRnVibVZzSUQwZ1gyRXVZMmhoYm01bGJDd2dibTkwWlU1MWJXSmxjaUE5SUY5aExtNXZkR1ZPZFcxaVpYSXNJSEJ5WlhOemRYSmxJRDBnWDJFdWNISmxjM04xY21VN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEhsd1pTQTlJRFFnTHlvZ1VHOXNlWEJvYjI1cFkwRm1kR1Z5ZEc5MVkyZ2dLaTg3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMmhoYm01bGJDQTlJR05vWVc1dVpXdzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJtOTBaVTUxYldKbGNpQTlJRzV2ZEdWT2RXMWlaWEk3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSEpsYzNOMWNtVWdQU0J3Y21WemMzVnlaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUZCdmJIbHdhRzl1YVdOQlpuUmxjblJ2ZFdOb1JYWmxiblE3WEc1OUtDa3BPMXh1Wlhod2IzSjBjeTVRYjJ4NWNHaHZibWxqUVdaMFpYSjBiM1ZqYUVWMlpXNTBJRDBnVUc5c2VYQm9iMjVwWTBGbWRHVnlkRzkxWTJoRmRtVnVkRHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUZCeWIyZHlZVzFEYUdGdVoyVkZkbVZ1ZENBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCUWNtOW5jbUZ0UTJoaGJtZGxSWFpsYm5Rb1gyRXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHTm9ZVzV1Wld3Z1BTQmZZUzVqYUdGdWJtVnNMQ0J3Y205bmNtRnRUblZ0WW1WeUlEMGdYMkV1Y0hKdlozSmhiVTUxYldKbGNqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGVYQmxJRDBnTVRZZ0x5b2dVSEp2WjNKaGJVTm9ZVzVuWlNBcUx6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1amFHRnVibVZzSUQwZ1kyaGhibTVsYkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3Y205bmNtRnRUblZ0WW1WeUlEMGdjSEp2WjNKaGJVNTFiV0psY2p0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlGQnliMmR5WVcxRGFHRnVaMlZGZG1WdWREdGNibjBvS1NrN1hHNWxlSEJ2Y25SekxsQnliMmR5WVcxRGFHRnVaMlZGZG1WdWRDQTlJRkJ5YjJkeVlXMURhR0Z1WjJWRmRtVnVkRHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUZONWMwVjRSWFpsYm5RZ1BTQXZLaW9nUUdOc1lYTnpJQ292SUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1puVnVZM1JwYjI0Z1UzbHpSWGhGZG1WdWRDaGZZU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdaWFpsYm5SRVlYUmhJRDBnWDJFdVpYWmxiblJFWVhSaE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SNWNHVWdQU0F4TWpnZ0x5b2dVM2x6WlhnZ0tpODdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpYWmxiblJFWVhSaElEMGdaWFpsYm5SRVlYUmhPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnVTNselJYaEZkbVZ1ZER0Y2JuMG9LU2s3WEc1bGVIQnZjblJ6TGxONWMwVjRSWFpsYm5RZ1BTQlRlWE5GZUVWMlpXNTBPMXh1SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTJZWElnVG05MFpVOW1abDh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZUbTkwWlU5bVpsd2lLVHRjYm1WNGNHOXlkSE11VG05MFpVOW1aa1YyWlc1MElEMGdUbTkwWlU5bVpsOHhMazV2ZEdWUFptWkZkbVZ1ZER0Y2JuWmhjaUJPYjNSbFQyNWZNU0E5SUhKbGNYVnBjbVVvWENJdUwwNXZkR1ZQYmx3aUtUdGNibVY0Y0c5eWRITXVUbTkwWlU5dVJYWmxiblFnUFNCT2IzUmxUMjVmTVM1T2IzUmxUMjVGZG1WdWREdGNiblpoY2lCUWNtOW5jbUZ0UTJoaGJtZGxYekVnUFNCeVpYRjFhWEpsS0Z3aUxpOVFjbTluY21GdFEyaGhibWRsWENJcE8xeHVaWGh3YjNKMGN5NVFjbTluY21GdFEyaGhibWRsUlhabGJuUWdQU0JRY205bmNtRnRRMmhoYm1kbFh6RXVVSEp2WjNKaGJVTm9ZVzVuWlVWMlpXNTBPMXh1ZG1GeUlFTnZiblJ5YjJ4c1pYSkRhR0Z1WjJWZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDBOdmJuUnliMnhzWlhKRGFHRnVaMlZjSWlrN1hHNWxlSEJ2Y25SekxrTnZiblJ5YjJ4c1pYSkRhR0Z1WjJWRmRtVnVkQ0E5SUVOdmJuUnliMnhzWlhKRGFHRnVaMlZmTVM1RGIyNTBjbTlzYkdWeVEyaGhibWRsUlhabGJuUTdYRzUyWVhJZ1VHOXNlWEJvYjI1cFkwRm1kR1Z5ZEc5MVkyaGZNU0E5SUhKbGNYVnBjbVVvWENJdUwxQnZiSGx3YUc5dWFXTkJablJsY25SdmRXTm9YQ0lwTzF4dVpYaHdiM0owY3k1UWIyeDVjR2h2Ym1salFXWjBaWEowYjNWamFFVjJaVzUwSUQwZ1VHOXNlWEJvYjI1cFkwRm1kR1Z5ZEc5MVkyaGZNUzVRYjJ4NWNHaHZibWxqUVdaMFpYSjBiM1ZqYUVWMlpXNTBPMXh1ZG1GeUlFTm9ZVzV1Wld4QlpuUmxjblJ2ZFdOb1h6RWdQU0J5WlhGMWFYSmxLRndpTGk5RGFHRnVibVZzUVdaMFpYSjBiM1ZqYUZ3aUtUdGNibVY0Y0c5eWRITXVRMmhoYm01bGJFRm1kR1Z5ZEc5MVkyaEZkbVZ1ZENBOUlFTm9ZVzV1Wld4QlpuUmxjblJ2ZFdOb1h6RXVRMmhoYm01bGJFRm1kR1Z5ZEc5MVkyaEZkbVZ1ZER0Y2JuWmhjaUJRYVhSamFFSmxibVJmTVNBOUlISmxjWFZwY21Vb1hDSXVMMUJwZEdOb1FtVnVaRndpS1R0Y2JtVjRjRzl5ZEhNdVVHbDBZMmhDWlc1a1JYWmxiblFnUFNCUWFYUmphRUpsYm1SZk1TNVFhWFJqYUVKbGJtUkZkbVZ1ZER0Y2JuWmhjaUJUZVhORmVGOHhJRDBnY21WeGRXbHlaU2hjSWk0dlUzbHpSWGhjSWlrN1hHNWxlSEJ2Y25SekxsTjVjMFY0UlhabGJuUWdQU0JUZVhORmVGOHhMbE41YzBWNFJYWmxiblE3WEc1MllYSWdUV1YwWVY4eElEMGdjbVZ4ZFdseVpTaGNJaTR2VFdWMFlWd2lLVHRjYm1WNGNHOXlkSE11VFdWMFlTQTlJSHRjYmlBZ0lDQlRaWEYxWlc1alpVNTFiV0psY2tWMlpXNTBPaUJOWlhSaFh6RXVVMlZ4ZFdWdVkyVk9kVzFpWlhKRmRtVnVkQ3hjYmlBZ0lDQlVhVzFsVTJsbmJtRjBkWEpsUlhabGJuUTZJRTFsZEdGZk1TNVVhVzFsVTJsbmJtRjBkWEpsUlhabGJuUXNYRzRnSUNBZ1MyVjVVMmxuYm1GMGRYSmxSWFpsYm5RNklFMWxkR0ZmTVM1TFpYbFRhV2R1WVhSMWNtVkZkbVZ1ZEN4Y2JpQWdJQ0JUWlhSVVpXMXdiMFYyWlc1ME9pQk5aWFJoWHpFdVUyVjBWR1Z0Y0c5RmRtVnVkQ3hjYmlBZ0lDQlFiM0owVUhKbFptbDRSWFpsYm5RNklFMWxkR0ZmTVM1UWIzSjBVSEpsWm1sNFJYWmxiblFzWEc0Z0lDQWdRMmhoYm01bGJGQnlaV1pwZUVWMlpXNTBPaUJOWlhSaFh6RXVRMmhoYm01bGJGQnlaV1pwZUVWMlpXNTBMRnh1SUNBZ0lFTnZjSGx5YVdkb2RFVjJaVzUwT2lCTlpYUmhYekV1UTI5d2VYSnBaMmgwUlhabGJuUXNYRzRnSUNBZ1ZISmhZMnRPWVcxbFJYWmxiblE2SUUxbGRHRmZNUzVVY21GamEwNWhiV1ZGZG1WdWRDeGNiaUFnSUNCVVpYaDBSWFpsYm5RNklFMWxkR0ZmTVM1VVpYaDBSWFpsYm5Rc1hHNGdJQ0FnU1c1emRISjFiV1Z1ZEU1aGJXVkZkbVZ1ZERvZ1RXVjBZVjh4TGtsdWMzUnlkVzFsYm5ST1lXMWxSWFpsYm5Rc1hHNGdJQ0FnVEhseWFXTkZkbVZ1ZERvZ1RXVjBZVjh4TGt4NWNtbGpSWFpsYm5Rc1hHNGdJQ0FnVFdGeWEyVnlSWFpsYm5RNklFMWxkR0ZmTVM1TllYSnJaWEpGZG1WdWRDeGNiaUFnSUNCRGRXVlFiMmx1ZEVWMlpXNTBPaUJOWlhSaFh6RXVRM1ZsVUc5cGJuUkZkbVZ1ZEN4Y2JpQWdJQ0JUVFZCVVJVOW1abk5sZEVWMlpXNTBPaUJOWlhSaFh6RXVVMDFRVkVWUFptWnpaWFJGZG1WdWRDeGNiaUFnSUNCVFpYRjFaVzVqWlhKVGNHVmphV1pwWTBWMlpXNTBPaUJOWlhSaFh6RXVVMlZ4ZFdWdVkyVnlVM0JsWTJsbWFXTkZkbVZ1ZEN4Y2JuMDdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUJOU1VSSlJtbHNaVlI1Y0dVN1hHNG9ablZ1WTNScGIyNGdLRTFKUkVsR2FXeGxWSGx3WlNrZ2UxeHVJQ0FnSUUxSlJFbEdhV3hsVkhsd1pWdE5TVVJKUm1sc1pWUjVjR1ZiWENKR2IzSnRZWFF3WENKZElEMGdNRjBnUFNCY0lrWnZjbTFoZERCY0lqdGNiaUFnSUNCTlNVUkpSbWxzWlZSNWNHVmJUVWxFU1VacGJHVlVlWEJsVzF3aVJtOXliV0YwTVZ3aVhTQTlJREZkSUQwZ1hDSkdiM0p0WVhReFhDSTdYRzRnSUNBZ1RVbEVTVVpwYkdWVWVYQmxXMDFKUkVsR2FXeGxWSGx3WlZ0Y0lrWnZjbTFoZERKY0lsMGdQU0F5WFNBOUlGd2lSbTl5YldGME1sd2lPMXh1ZlNrb1RVbEVTVVpwYkdWVWVYQmxJRDBnWlhod2IzSjBjeTVOU1VSSlJtbHNaVlI1Y0dVZ2ZId2dLR1Y0Y0c5eWRITXVUVWxFU1VacGJHVlVlWEJsSUQwZ2UzMHBLVHRjYmp0Y2JpSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZ3aVgxOWxjMDF2WkhWc1pWd2lMQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1ZG1GeUlFMUpSRWxGZG1WdWRITmZNU0E5SUhKbGNYVnBjbVVvWENJdUwwMUpSRWxGZG1WdWRITmNJaWs3WEc1MllYSWdZblZtWm1WeVgzUnZYM04wY21sdVoxOHhJRDBnY21WeGRXbHlaU2hjSWk0dUwzVjBhV3h6TDJKMVptWmxjaTEwYnkxemRISnBibWRjSWlrN1hHNTJZWElnZG1GeWFXRmliR1ZmYkdWdVozUm9YM1poYkhWbFh6RWdQU0J5WlhGMWFYSmxLRndpTGk0dmRYUnBiSE12ZG1GeWFXRmliR1V0YkdWdVozUm9MWFpoYkhWbFhDSXBPMXh1ZG1GeUlISmxZV1JUZEhKcGJtZE5aWFJoUlhabGJuUWdQU0JtZFc1amRHbHZiaUFvWkdGMFlWWnBaWGNzSUhOMFlYSjBTVzVrWlhncElIdGNiaUFnSUNCMllYSWdhVzVrWlhnZ1BTQnpkR0Z5ZEVsdVpHVjRPMXh1SUNBZ0lIWmhjaUJmWVNBOUlIWmhjbWxoWW14bFgyeGxibWQwYUY5MllXeDFaVjh4TG1aeWIyMVdZWEpwWVdKc1pVeGxibWQwYUZaaGJIVmxLR1JoZEdGV2FXVjNMbUoxWm1abGNpd2daR0YwWVZacFpYY3VZbmwwWlU5bVpuTmxkQ0FySUdsdVpHVjRLU3dnWW5sMFpYTlNaV0ZrSUQwZ1gyRmJNRjBzSUhOMGNtbHVaMHhsYm1kMGFDQTlJRjloV3pGZE8xeHVJQ0FnSUdsdVpHVjRJQ3M5SUdKNWRHVnpVbVZoWkR0Y2JpQWdJQ0IyWVhJZ2MzUnlJRDBnWW5WbVptVnlYM1J2WDNOMGNtbHVaMTh4TG1KMVptWmxjbFJ2VTNSeWFXNW5LR1JoZEdGV2FXVjNMbUoxWm1abGNpd2daR0YwWVZacFpYY3VZbmwwWlU5bVpuTmxkQ0FySUdsdVpHVjRMQ0J6ZEhKcGJtZE1aVzVuZEdncE8xeHVJQ0FnSUdsdVpHVjRJRDBnYVc1a1pYZ2dLeUJ6ZEhKcGJtZE1aVzVuZEdnN1hHNGdJQ0FnY21WMGRYSnVJRnRjYmlBZ0lDQWdJQ0FnWW5sMFpYTlNaV0ZrSUNzZ2MzUnlhVzVuVEdWdVozUm9MRnh1SUNBZ0lDQWdJQ0J6ZEhKY2JpQWdJQ0JkTzF4dWZUdGNibVY0Y0c5eWRITXVZM0psWVhSbFRXVjBZVVYyWlc1MFJuSnZiVUo1ZEdWeklEMGdablZ1WTNScGIyNGdLSE4wWVhSMWMwSjVkR1VzSUdSaGRHRldhV1YzTENCemRHRnlkRWx1WkdWNEtTQjdYRzRnSUNBZ2FXWWdLSE4wWVhKMFNXNWtaWGdnUFQwOUlIWnZhV1FnTUNrZ2V5QnpkR0Z5ZEVsdVpHVjRJRDBnTURzZ2ZWeHVJQ0FnSUhaaGNpQnBibVJsZUNBOUlITjBZWEowU1c1a1pYZzdYRzRnSUNBZ2RtRnlJRzFsZEdGRmRtVnVkRlI1Y0dWT2RXMGdQU0JrWVhSaFZtbGxkeTVuWlhSVmFXNTBPQ2hwYm1SbGVDazdYRzRnSUNBZ2FXNWtaWGdnS3owZ01UdGNiaUFnSUNCMllYSWdaWFpsYm5RN1hHNGdJQ0FnYVdZZ0tHMWxkR0ZGZG1WdWRGUjVjR1ZPZFcwZ1BUMDlJREI0TURBcElIdGNiaUFnSUNBZ0lDQWdMeThnVG1WNGRDQmllWFJsSUdseklEQjRNREl0TFhOcmFYQWdhWFJjYmlBZ0lDQWdJQ0FnYVc1a1pYZ2dLejBnTVR0Y2JpQWdJQ0FnSUNBZ2RtRnlJSE5sY1hWbGJtTmxUblZ0WW1WeUlEMGdaR0YwWVZacFpYY3VaMlYwVldsdWRERTJLR2x1WkdWNEtUdGNiaUFnSUNBZ0lDQWdhVzVrWlhnZ0t6MGdNanRjYmlBZ0lDQWdJQ0FnWlhabGJuUWdQU0J1WlhjZ1RVbEVTVVYyWlc1MGMxOHhMazFsZEdFdVUyVnhkV1Z1WTJWT2RXMWlaWEpGZG1WdWRDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCelpYRjFaVzVqWlU1MWJXSmxjam9nYzJWeGRXVnVZMlZPZFcxaVpYSXNYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmlBZ0lDQmxiSE5sSUdsbUlDaHRaWFJoUlhabGJuUlVlWEJsVG5WdElEMDlQU0F3ZURBeEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCZllTQTlJSEpsWVdSVGRISnBibWROWlhSaFJYWmxiblFvWkdGMFlWWnBaWGNzSUdsdVpHVjRLU3dnWW5sMFpYTlNaV0ZrSUQwZ1gyRmJNRjBzSUhSbGVIUWdQU0JmWVZzeFhUdGNiaUFnSUNBZ0lDQWdhVzVrWlhnZ0t6MGdZbmwwWlhOU1pXRmtPMXh1SUNBZ0lDQWdJQ0JsZG1WdWRDQTlJRzVsZHlCTlNVUkpSWFpsYm5Selh6RXVUV1YwWVM1VVpYaDBSWFpsYm5Rb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGREb2dkR1Y0ZEN4Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVJQ0FnSUdWc2MyVWdhV1lnS0cxbGRHRkZkbVZ1ZEZSNWNHVk9kVzBnUFQwOUlEQjRNRElwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRjlpSUQwZ2NtVmhaRk4wY21sdVowMWxkR0ZGZG1WdWRDaGtZWFJoVm1sbGR5d2dhVzVrWlhncExDQmllWFJsYzFKbFlXUWdQU0JmWWxzd1hTd2dZMjl3ZVhKcFoyaDBJRDBnWDJKYk1WMDdYRzRnSUNBZ0lDQWdJR2x1WkdWNElDczlJR0o1ZEdWelVtVmhaRHRjYmlBZ0lDQWdJQ0FnWlhabGJuUWdQU0J1WlhjZ1RVbEVTVVYyWlc1MGMxOHhMazFsZEdFdVEyOXdlWEpwWjJoMFJYWmxiblFvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl3ZVhKcFoyaDBPaUJqYjNCNWNtbG5hSFFzWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdJQ0JsYkhObElHbG1JQ2h0WlhSaFJYWmxiblJVZVhCbFRuVnRJRDA5UFNBd2VEQXpLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmZZeUE5SUhKbFlXUlRkSEpwYm1kTlpYUmhSWFpsYm5Rb1pHRjBZVlpwWlhjc0lHbHVaR1Y0S1N3Z1lubDBaWE5TWldGa0lEMGdYMk5iTUYwc0lHNWhiV1ZmTVNBOUlGOWpXekZkTzF4dUlDQWdJQ0FnSUNCcGJtUmxlQ0FyUFNCaWVYUmxjMUpsWVdRN1hHNGdJQ0FnSUNBZ0lHVjJaVzUwSUQwZ2JtVjNJRTFKUkVsRmRtVnVkSE5mTVM1TlpYUmhMbFJ5WVdOclRtRnRaVVYyWlc1MEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc1aGJXVTZJRzVoYldWZk1TeGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1SUNBZ0lHVnNjMlVnYVdZZ0tHMWxkR0ZGZG1WdWRGUjVjR1ZPZFcwZ1BUMDlJREI0TURRcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUY5a0lEMGdjbVZoWkZOMGNtbHVaMDFsZEdGRmRtVnVkQ2hrWVhSaFZtbGxkeXdnYVc1a1pYZ3BMQ0JpZVhSbGMxSmxZV1FnUFNCZlpGc3dYU3dnYm1GdFpWOHlJRDBnWDJSYk1WMDdYRzRnSUNBZ0lDQWdJR2x1WkdWNElDczlJR0o1ZEdWelVtVmhaRHRjYmlBZ0lDQWdJQ0FnWlhabGJuUWdQU0J1WlhjZ1RVbEVTVVYyWlc1MGMxOHhMazFsZEdFdVNXNXpkSEoxYldWdWRFNWhiV1ZGZG1WdWRDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCdVlXMWxPaUJ1WVcxbFh6SXNYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmlBZ0lDQmxiSE5sSUdsbUlDaHRaWFJoUlhabGJuUlVlWEJsVG5WdElEMDlQU0F3ZURBMUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCZlpTQTlJSEpsWVdSVGRISnBibWROWlhSaFJYWmxiblFvWkdGMFlWWnBaWGNzSUdsdVpHVjRLU3dnWW5sMFpYTlNaV0ZrSUQwZ1gyVmJNRjBzSUd4NWNtbGpJRDBnWDJWYk1WMDdYRzRnSUNBZ0lDQWdJR2x1WkdWNElDczlJR0o1ZEdWelVtVmhaRHRjYmlBZ0lDQWdJQ0FnWlhabGJuUWdQU0J1WlhjZ1RVbEVTVVYyWlc1MGMxOHhMazFsZEdFdVRIbHlhV05GZG1WdWRDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCc2VYSnBZem9nYkhseWFXTXNYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmlBZ0lDQmxiSE5sSUdsbUlDaHRaWFJoUlhabGJuUlVlWEJsVG5WdElEMDlQU0F3ZURBMktTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCZlppQTlJSEpsWVdSVGRISnBibWROWlhSaFJYWmxiblFvWkdGMFlWWnBaWGNzSUdsdVpHVjRLU3dnWW5sMFpYTlNaV0ZrSUQwZ1gyWmJNRjBzSUcxaGNtdGxjaUE5SUY5bVd6RmRPMXh1SUNBZ0lDQWdJQ0JwYm1SbGVDQXJQU0JpZVhSbGMxSmxZV1E3WEc0Z0lDQWdJQ0FnSUdWMlpXNTBJRDBnYm1WM0lFMUpSRWxGZG1WdWRITmZNUzVOWlhSaExrMWhjbXRsY2tWMlpXNTBLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhjbXRsY2pvZ2JXRnlhMlZ5TEZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNGdJQ0FnWld4elpTQnBaaUFvYldWMFlVVjJaVzUwVkhsd1pVNTFiU0E5UFQwZ01IZ3dOeWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdYMmNnUFNCeVpXRmtVM1J5YVc1blRXVjBZVVYyWlc1MEtHUmhkR0ZXYVdWM0xDQnBibVJsZUNrc0lHSjVkR1Z6VW1WaFpDQTlJRjluV3pCZExDQmpkV1ZVWlhoMElEMGdYMmRiTVYwN1hHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlHSjVkR1Z6VW1WaFpEdGNiaUFnSUNBZ0lDQWdaWFpsYm5RZ1BTQnVaWGNnVFVsRVNVVjJaVzUwYzE4eExrMWxkR0V1UTNWbFVHOXBiblJGZG1WdWRDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRXVlVaWGgwT2lCamRXVlVaWGgwTEZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNGdJQ0FnWld4elpTQnBaaUFvYldWMFlVVjJaVzUwVkhsd1pVNTFiU0E5UFQwZ01IZ3lNQ2tnZTF4dUlDQWdJQ0FnSUNBdkx5QlRhMmx3SUc1bGVIUWdZbmwwWlNCemFXNWpaU0JwZENCcGN5QmhJR052Ym5OMFlXNTBYRzRnSUNBZ0lDQWdJR2x1WkdWNElDczlJREU3WEc0Z0lDQWdJQ0FnSUhaaGNpQmphR0Z1Ym1Wc1RuVnRZbVZ5SUQwZ1pHRjBZVlpwWlhjdVoyVjBWV2x1ZERnb2FXNWtaWGdwTzF4dUlDQWdJQ0FnSUNCcGJtUmxlQ0FyUFNBeE8xeHVJQ0FnSUNBZ0lDQmxkbVZ1ZENBOUlHNWxkeUJOU1VSSlJYWmxiblJ6WHpFdVRXVjBZUzVEYUdGdWJtVnNVSEpsWm1sNFJYWmxiblFvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMmhoYm01bGJFNTFiV0psY2pvZ1kyaGhibTVsYkU1MWJXSmxjaXhjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dUlDQWdJR1ZzYzJVZ2FXWWdLRzFsZEdGRmRtVnVkRlI1Y0dWT2RXMGdQVDA5SURCNE1qRXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z1UydHBjQ0J1WlhoMElHSjVkR1VnYzJsdVkyVWdhWFFnYVhNZ1lTQmpiMjV6ZEdGdWRGeHVJQ0FnSUNBZ0lDQnBibVJsZUNBclBTQXhPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NHOXlkRTUxYldKbGNpQTlJR1JoZEdGV2FXVjNMbWRsZEZWcGJuUTRLR2x1WkdWNEtUdGNiaUFnSUNBZ0lDQWdhVzVrWlhnZ0t6MGdNVHRjYmlBZ0lDQWdJQ0FnWlhabGJuUWdQU0J1WlhjZ1RVbEVTVVYyWlc1MGMxOHhMazFsZEdFdVVHOXlkRkJ5WldacGVFVjJaVzUwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ2Y25ST2RXMWlaWEk2SUhCdmNuUk9kVzFpWlhJc1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnSUNCbGJITmxJR2xtSUNodFpYUmhSWFpsYm5SVWVYQmxUblZ0SUQwOVBTQXdlREpHS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRVZ1WkNCdlppQjBjbUZqYXlCbGRtVnVkRnh1SUNBZ0lDQWdJQ0JwYm1SbGVDQXJQU0F4TzF4dUlDQWdJSDFjYmlBZ0lDQmxiSE5sSUdsbUlDaHRaWFJoUlhabGJuUlVlWEJsVG5WdElEMDlQU0F3ZURVeEtTQjdYRzRnSUNBZ0lDQWdJQzh2SUU1bGVIUWdZbmwwWlNCcGN5QXdlREF6TFMxemEybHdJR2wwWEc0Z0lDQWdJQ0FnSUdsdVpHVjRJQ3M5SURFN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ0YVdOeWIzTmxZMjl1WkhOUVpYSlJkV0Z5ZEdWeVRtOTBaU0E5SUNoa1lYUmhWbWxsZHk1blpYUlZhVzUwT0NocGJtUmxlQ2tnUER3Z01UWXBJQ3RjYmlBZ0lDQWdJQ0FnSUNBZ0lDaGtZWFJoVm1sbGR5NW5aWFJWYVc1ME9DaHBibVJsZUNBcklERXBJRHc4SURncElDc2daR0YwWVZacFpYY3VaMlYwVldsdWREZ29hVzVrWlhnZ0t5QXlLVHRjYmlBZ0lDQWdJQ0FnYVc1a1pYZ2dLejBnTXp0Y2JpQWdJQ0FnSUNBZ1pYWmxiblFnUFNCdVpYY2dUVWxFU1VWMlpXNTBjMTh4TGsxbGRHRXVVMlYwVkdWdGNHOUZkbVZ1ZENoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0YVdOeWIzTmxZMjl1WkhOUVpYSlJkV0Z5ZEdWeVRtOTBaVG9nYldsamNtOXpaV052Ym1SelVHVnlVWFZoY25SbGNrNXZkR1VzWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdJQ0JsYkhObElHbG1JQ2h0WlhSaFJYWmxiblJVZVhCbFRuVnRJRDA5UFNBd2VEVTBLU0I3WEc0Z0lDQWdJQ0FnSUM4dklGTnJhWEFnYm1WNGRDQmllWFJsSUdKbFkyRjFjMlVnYVhRbmN5QmhJR052Ym5OMFlXNTBYRzRnSUNBZ0lDQWdJR2x1WkdWNElDczlJREU3WEc0Z0lDQWdJQ0FnSUhaaGNpQm9iM1Z5Y3lBOUlHUmhkR0ZXYVdWM0xtZGxkRlZwYm5RNEtHbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ2FXNWtaWGdnS3owZ01UdGNiaUFnSUNBZ0lDQWdkbUZ5SUcxcGJuVjBaWE1nUFNCa1lYUmhWbWxsZHk1blpYUlZhVzUwT0NocGJtUmxlQ2s3WEc0Z0lDQWdJQ0FnSUdsdVpHVjRJQ3M5SURFN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6WldOdmJtUnpJRDBnWkdGMFlWWnBaWGN1WjJWMFZXbHVkRGdvYVc1a1pYZ3BPMXh1SUNBZ0lDQWdJQ0JwYm1SbGVDQXJQU0F4TzF4dUlDQWdJQ0FnSUNCMllYSWdabkpoYldWelh6RWdQU0JrWVhSaFZtbGxkeTVuWlhSVmFXNTBPQ2hwYm1SbGVDazdYRzRnSUNBZ0lDQWdJR2x1WkdWNElDczlJREU3WEc0Z0lDQWdJQ0FnSUhaaGNpQm1jbUZqZEdsdmJtRnNSbkpoYldWeklEMGdaR0YwWVZacFpYY3VaMlYwVldsdWREZ29hVzVrWlhncE8xeHVJQ0FnSUNBZ0lDQnBibVJsZUNBclBTQXhPMXh1SUNBZ0lDQWdJQ0JsZG1WdWRDQTlJRzVsZHlCTlNVUkpSWFpsYm5Selh6RXVUV1YwWVM1VFRWQlVSVTltWm5ObGRFVjJaVzUwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2h2ZFhKek9pQm9iM1Z5Y3l4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFwYm5WMFpYTTZJRzFwYm5WMFpYTXNYRzRnSUNBZ0lDQWdJQ0FnSUNCelpXTnZibVJ6T2lCelpXTnZibVJ6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabkpoYldWek9pQm1jbUZ0WlhOZk1TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeVlXTjBhVzl1WVd4R2NtRnRaWE02SUdaeVlXTjBhVzl1WVd4R2NtRnRaWE1zWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdJQ0JsYkhObElHbG1JQ2h0WlhSaFJYWmxiblJVZVhCbFRuVnRJRDA5UFNBd2VEVTRLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFNWxlSFFnWW5sMFpTQnBjeUF3ZURBMExTMXphMmx3SUdsMFhHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlERTdYRzRnSUNBZ0lDQWdJSFpoY2lCdWRXMWxjbUYwYjNJZ1BTQmtZWFJoVm1sbGR5NW5aWFJWYVc1ME9DaHBibVJsZUNrN1hHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlERTdYRzRnSUNBZ0lDQWdJSFpoY2lCa1pXNXZiV2x1WVhSdmNpQTlJRTFoZEdndWNHOTNLRElzSUdSaGRHRldhV1YzTG1kbGRGVnBiblE0S0dsdVpHVjRLU2s3WEc0Z0lDQWdJQ0FnSUdsdVpHVjRJQ3M5SURFN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqYkc5amEzTlFaWEpVYVdOcklEMGdaR0YwWVZacFpYY3VaMlYwVldsdWREZ29hVzVrWlhncE8xeHVJQ0FnSUNBZ0lDQnBibVJsZUNBclBTQXhPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RHaHBjblI1VTJWamIyNWtUbTkwWlhNZ1BTQmtZWFJoVm1sbGR5NW5aWFJWYVc1ME9DaHBibVJsZUNrN1hHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlERTdYRzRnSUNBZ0lDQWdJR1YyWlc1MElEMGdibVYzSUUxSlJFbEZkbVZ1ZEhOZk1TNU5aWFJoTGxScGJXVlRhV2R1WVhSMWNtVkZkbVZ1ZENoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1ZFcxbGNtRjBiM0k2SUc1MWJXVnlZWFJ2Y2l4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYm05dGFXNWhkRzl5T2lCa1pXNXZiV2x1WVhSdmNpeGNiaUFnSUNBZ0lDQWdJQ0FnSUdOc2IyTnJjMUJsY2xScFkyczZJR05zYjJOcmMxQmxjbFJwWTJzc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdseWRIbFRaV052Ym1ST2IzUmxjem9nZEdocGNuUjVVMlZqYjI1a1RtOTBaWE1zWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdJQ0JsYkhObElHbG1JQ2h0WlhSaFJYWmxiblJVZVhCbFRuVnRJRDA5UFNBd2VEVTVLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFNWxlSFFnWW5sMFpTQnBjeUF3ZURBeUxTMXphMmx3SUdsMFhHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlERTdYRzRnSUNBZ0lDQWdJSFpoY2lCemFHRnljSE1nUFNCa1lYUmhWbWxsZHk1blpYUkpiblE0S0dsdVpHVjRLVHRjYmlBZ0lDQWdJQ0FnYVc1a1pYZ2dLejBnTVR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2x6VFdGcWIzSWdQU0JrWVhSaFZtbGxkeTVuWlhSVmFXNTBPQ2hwYm1SbGVDa2dQVDA5SURBN1hHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlERTdYRzRnSUNBZ0lDQWdJR1YyWlc1MElEMGdibVYzSUUxSlJFbEZkbVZ1ZEhOZk1TNU5aWFJoTGt0bGVWTnBaMjVoZEhWeVpVVjJaVzUwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5vWVhKd2N6b2djMmhoY25CekxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVhOTllXcHZjam9nYVhOTllXcHZjaXhjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dUlDQWdJR1ZzYzJVZ2FXWWdLRzFsZEdGRmRtVnVkRlI1Y0dWT2RXMGdQVDA5SURCNE4wWXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlGOW9JRDBnZG1GeWFXRmliR1ZmYkdWdVozUm9YM1poYkhWbFh6RXVabkp2YlZaaGNtbGhZbXhsVEdWdVozUm9WbUZzZFdVb1pHRjBZVlpwWlhjdVluVm1abVZ5TENCa1lYUmhWbWxsZHk1aWVYUmxUMlptYzJWMElDc2dhVzVrWlhncExDQmllWFJsYzFKbFlXUWdQU0JmYUZzd1hTd2diR1Z1WjNSb1h6RWdQU0JmYUZzeFhUdGNiaUFnSUNBZ0lDQWdhVzVrWlhnZ0t6MGdZbmwwWlhOU1pXRmtPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pHRjBZU0E5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR1JoZEdGV2FXVjNMbUoxWm1abGNpd2daR0YwWVZacFpYY3VZbmwwWlU5bVpuTmxkQ0FySUdsdVpHVjRMQ0JzWlc1bmRHaGZNU2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQnBaQ0E5SUdSaGRHRXVjMnhwWTJVb01Dd2dNU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaHBaRnN3WFNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1FnUFNCa1lYUmhMbk5zYVdObEtEQXNJRE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaR0YwWVNBOUlHUmhkR0V1YzJ4cFkyVW9NeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtZWFJoSUQwZ1pHRjBZUzV6YkdsalpTZ3hLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGRtVnVkQ0E5SUc1bGR5Qk5TVVJKUlhabGJuUnpYekV1VFdWMFlTNVRaWEYxWlc1alpYSlRjR1ZqYVdacFkwVjJaVzUwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xrT2lCcFpDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSaGRHRTZJR1JoZEdFc1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpVlc1cmJtOTNiaUJOU1VSSklHMWxkR0VnWlhabGJuUWdkSGx3WlNBd2VGd2lJQ3NnYldWMFlVVjJaVzUwVkhsd1pVNTFiUzUwYjFOMGNtbHVaeWd4TmlrcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdXMXh1SUNBZ0lDQWdJQ0JwYm1SbGVDQXRJSE4wWVhKMFNXNWtaWGdzWEc0Z0lDQWdJQ0FnSUdWMlpXNTBMRnh1SUNBZ0lGMDdYRzU5TzF4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNTJZWElnWDE5bGVIUmxibVJ6SUQwZ0tIUm9hWE1nSmlZZ2RHaHBjeTVmWDJWNGRHVnVaSE1wSUh4OElDaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkbUZ5SUdWNGRHVnVaRk4wWVhScFkzTWdQU0JtZFc1amRHbHZiaUFvWkN3Z1lpa2dlMXh1SUNBZ0lDQWdJQ0JsZUhSbGJtUlRkR0YwYVdOeklEMGdUMkpxWldOMExuTmxkRkJ5YjNSdmRIbHdaVTltSUh4OFhHNGdJQ0FnSUNBZ0lDQWdJQ0FvZXlCZlgzQnliM1J2WDE4NklGdGRJSDBnYVc1emRHRnVZMlZ2WmlCQmNuSmhlU0FtSmlCbWRXNWpkR2x2YmlBb1pDd2dZaWtnZXlCa0xsOWZjSEp2ZEc5Zlh5QTlJR0k3SUgwcElIeDhYRzRnSUNBZ0lDQWdJQ0FnSUNCbWRXNWpkR2x2YmlBb1pDd2dZaWtnZXlCbWIzSWdLSFpoY2lCd0lHbHVJR0lwSUdsbUlDaGlMbWhoYzA5M2JsQnliM0JsY25SNUtIQXBLU0JrVzNCZElEMGdZbHR3WFRzZ2ZUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHVjRkR1Z1WkZOMFlYUnBZM01vWkN3Z1lpazdYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0dRc0lHSXBJSHRjYmlBZ0lDQWdJQ0FnWlhoMFpXNWtVM1JoZEdsamN5aGtMQ0JpS1R0Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1gxOG9LU0I3SUhSb2FYTXVZMjl1YzNSeWRXTjBiM0lnUFNCa095QjlYRzRnSUNBZ0lDQWdJR1F1Y0hKdmRHOTBlWEJsSUQwZ1lpQTlQVDBnYm5Wc2JDQS9JRTlpYW1WamRDNWpjbVZoZEdVb1lpa2dPaUFvWDE4dWNISnZkRzkwZVhCbElEMGdZaTV3Y205MGIzUjVjR1VzSUc1bGR5QmZYeWdwS1R0Y2JpQWdJQ0I5TzF4dWZTa29LVHRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUJOU1VSSlVHRnljMlZGY25KdmNpQTlJQzhxS2lCQVkyeGhjM01nS2k4Z0tHWjFibU4wYVc5dUlDaGZjM1Z3WlhJcElIdGNiaUFnSUNCZlgyVjRkR1Z1WkhNb1RVbEVTVkJoY25ObFJYSnliM0lzSUY5emRYQmxjaWs3WEc0Z0lDQWdablZ1WTNScGIyNGdUVWxFU1ZCaGNuTmxSWEp5YjNJb2JXVnpjMkZuWlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1gzTjFjR1Z5TG1OaGJHd29kR2hwY3l3Z1hDSkpiblpoYkdsa0lFMUpSRWtnWm1sc1pUb2dYQ0lnS3lCdFpYTnpZV2RsS1NCOGZDQjBhR2x6TzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1RVbEVTVkJoY25ObFJYSnliM0k3WEc1OUtFVnljbTl5S1NrN1hHNWxlSEJ2Y25SekxrMUpSRWxRWVhKelpVVnljbTl5SUQwZ1RVbEVTVkJoY25ObFJYSnliM0k3WEc0aUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiblpoY2lCTlNVUkpSWFpsYm5Selh6RWdQU0J5WlhGMWFYSmxLRndpTGk5TlNVUkpSWFpsYm5SelhDSXBPMXh1Wlhod2IzSjBjeTVOU1VSSlJYWmxiblJ6SUQwZ2UxeHVJQ0FnSUU1dmRHVlBabVpGZG1WdWREb2dUVWxFU1VWMlpXNTBjMTh4TGs1dmRHVlBabVpGZG1WdWRDeGNiaUFnSUNCT2IzUmxUMjVGZG1WdWREb2dUVWxFU1VWMlpXNTBjMTh4TGs1dmRHVlBia1YyWlc1MExGeHVJQ0FnSUZCeWIyZHlZVzFEYUdGdVoyVkZkbVZ1ZERvZ1RVbEVTVVYyWlc1MGMxOHhMbEJ5YjJkeVlXMURhR0Z1WjJWRmRtVnVkQ3hjYmlBZ0lDQkRiMjUwY205c2JHVnlRMmhoYm1kbFJYWmxiblE2SUUxSlJFbEZkbVZ1ZEhOZk1TNURiMjUwY205c2JHVnlRMmhoYm1kbFJYWmxiblFzWEc0Z0lDQWdVRzlzZVhCb2IyNXBZMEZtZEdWeWRHOTFZMmhGZG1WdWREb2dUVWxFU1VWMlpXNTBjMTh4TGxCdmJIbHdhRzl1YVdOQlpuUmxjblJ2ZFdOb1JYWmxiblFzWEc0Z0lDQWdRMmhoYm01bGJFRm1kR1Z5ZEc5MVkyaEZkbVZ1ZERvZ1RVbEVTVVYyWlc1MGMxOHhMa05vWVc1dVpXeEJablJsY25SdmRXTm9SWFpsYm5Rc1hHNGdJQ0FnVUdsMFkyaENaVzVrUlhabGJuUTZJRTFKUkVsRmRtVnVkSE5mTVM1UWFYUmphRUpsYm1SRmRtVnVkQ3hjYmlBZ0lDQlRlWE5GZUVWMlpXNTBPaUJOU1VSSlJYWmxiblJ6WHpFdVUzbHpSWGhGZG1WdWRDeGNiaUFnSUNCTlpYUmhPaUJOU1VSSlJYWmxiblJ6WHpFdVRXVjBZU3hjYm4wN1hHNTJZWElnVFVsRVNVWnBiR1ZVZVhCbFh6RWdQU0J5WlhGMWFYSmxLRndpTGk5TlNVUkpSbWxzWlZSNWNHVmNJaWs3WEc1bGVIQnZjblJ6TGsxSlJFbEdhV3hsVkhsd1pTQTlJRTFKUkVsR2FXeGxWSGx3WlY4eExrMUpSRWxHYVd4bFZIbHdaVHRjYm5aaGNpQk5TVVJKVUdGeWMyVkZjbkp2Y2w4eElEMGdjbVZ4ZFdseVpTaGNJaTR2VFVsRVNWQmhjbk5sUlhKeWIzSmNJaWs3WEc1bGVIQnZjblJ6TGsxSlJFbFFZWEp6WlVWeWNtOXlJRDBnVFVsRVNWQmhjbk5sUlhKeWIzSmZNUzVOU1VSSlVHRnljMlZGY25KdmNqdGNiblpoY2lCdGFXUnBYM0psWVdSbGNsOHhJRDBnY21WeGRXbHlaU2hjSWk0dmJXbGthUzF5WldGa1pYSmNJaWs3WEc1bGVIQnZjblJ6TGsxSlJFbFNaV0ZrWlhJZ1BTQnRhV1JwWDNKbFlXUmxjbDh4TGsxSlJFbFNaV0ZrWlhJN1hHNGlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiblpoY2lCZlgyZGxibVZ5WVhSdmNpQTlJQ2gwYUdseklDWW1JSFJvYVhNdVgxOW5aVzVsY21GMGIzSXBJSHg4SUdaMWJtTjBhVzl1SUNoMGFHbHpRWEpuTENCaWIyUjVLU0I3WEc0Z0lDQWdkbUZ5SUY4Z1BTQjdJR3hoWW1Wc09pQXdMQ0J6Wlc1ME9pQm1kVzVqZEdsdmJpZ3BJSHNnYVdZZ0tIUmJNRjBnSmlBeEtTQjBhSEp2ZHlCMFd6RmRPeUJ5WlhSMWNtNGdkRnN4WFRzZ2ZTd2dkSEo1Y3pvZ1cxMHNJRzl3Y3pvZ1cxMGdmU3dnWml3Z2VTd2dkQ3dnWnp0Y2JpQWdJQ0J5WlhSMWNtNGdaeUE5SUhzZ2JtVjRkRG9nZG1WeVlpZ3dLU3dnWENKMGFISnZkMXdpT2lCMlpYSmlLREVwTENCY0luSmxkSFZ5Ymx3aU9pQjJaWEppS0RJcElIMHNJSFI1Y0dWdlppQlRlVzFpYjJ3Z1BUMDlJRndpWm5WdVkzUnBiMjVjSWlBbUppQW9aMXRUZVcxaWIyd3VhWFJsY21GMGIzSmRJRDBnWm5WdVkzUnBiMjRvS1NCN0lISmxkSFZ5YmlCMGFHbHpPeUI5S1N3Z1p6dGNiaUFnSUNCbWRXNWpkR2x2YmlCMlpYSmlLRzRwSUhzZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoMktTQjdJSEpsZEhWeWJpQnpkR1Z3S0Z0dUxDQjJYU2s3SUgwN0lIMWNiaUFnSUNCbWRXNWpkR2x2YmlCemRHVndLRzl3S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2htS1NCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lSMlZ1WlhKaGRHOXlJR2x6SUdGc2NtVmhaSGtnWlhobFkzVjBhVzVuTGx3aUtUdGNiaUFnSUNBZ0lDQWdkMmhwYkdVZ0tGOHBJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1ppQTlJREVzSUhrZ0ppWWdLSFFnUFNCdmNGc3dYU0FtSURJZ1B5QjVXMXdpY21WMGRYSnVYQ0pkSURvZ2IzQmJNRjBnUHlCNVcxd2lkR2h5YjNkY0lsMGdmSHdnS0NoMElEMGdlVnRjSW5KbGRIVnlibHdpWFNrZ0ppWWdkQzVqWVd4c0tIa3BMQ0F3S1NBNklIa3VibVY0ZENrZ0ppWWdJU2gwSUQwZ2RDNWpZV3hzS0hrc0lHOXdXekZkS1NrdVpHOXVaU2tnY21WMGRYSnVJSFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZVNBOUlEQXNJSFFwSUc5d0lEMGdXMjl3V3pCZElDWWdNaXdnZEM1MllXeDFaVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tHOXdXekJkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0F3T2lCallYTmxJREU2SUhRZ1BTQnZjRHNnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBME9pQmZMbXhoWW1Wc0t5czdJSEpsZEhWeWJpQjdJSFpoYkhWbE9pQnZjRnN4WFN3Z1pHOXVaVG9nWm1Gc2MyVWdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElEVTZJRjh1YkdGaVpXd3JLenNnZVNBOUlHOXdXekZkT3lCdmNDQTlJRnN3WFRzZ1kyOXVkR2x1ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0EzT2lCdmNDQTlJRjh1YjNCekxuQnZjQ2dwT3lCZkxuUnllWE11Y0c5d0tDazdJR052Ym5ScGJuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hLSFFnUFNCZkxuUnllWE1zSUhRZ1BTQjBMbXhsYm1kMGFDQStJREFnSmlZZ2RGdDBMbXhsYm1kMGFDQXRJREZkS1NBbUppQW9iM0JiTUYwZ1BUMDlJRFlnZkh3Z2IzQmJNRjBnUFQwOUlESXBLU0I3SUY4Z1BTQXdPeUJqYjI1MGFXNTFaVHNnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYjNCYk1GMGdQVDA5SURNZ0ppWWdLQ0YwSUh4OElDaHZjRnN4WFNBK0lIUmJNRjBnSmlZZ2IzQmJNVjBnUENCMFd6TmRLU2twSUhzZ1h5NXNZV0psYkNBOUlHOXdXekZkT3lCaWNtVmhhenNnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYjNCYk1GMGdQVDA5SURZZ0ppWWdYeTVzWVdKbGJDQThJSFJiTVYwcElIc2dYeTVzWVdKbGJDQTlJSFJiTVYwN0lIUWdQU0J2Y0RzZ1luSmxZV3M3SUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hRZ0ppWWdYeTVzWVdKbGJDQThJSFJiTWwwcElIc2dYeTVzWVdKbGJDQTlJSFJiTWwwN0lGOHViM0J6TG5CMWMyZ29iM0FwT3lCaWNtVmhhenNnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEZzeVhTa2dYeTV2Y0hNdWNHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGOHVkSEo1Y3k1d2IzQW9LVHNnWTI5dWRHbHVkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCdmNDQTlJR0p2WkhrdVkyRnNiQ2gwYUdselFYSm5MQ0JmS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dleUJ2Y0NBOUlGczJMQ0JsWFRzZ2VTQTlJREE3SUgwZ1ptbHVZV3hzZVNCN0lHWWdQU0IwSUQwZ01Ec2dmVnh1SUNBZ0lDQWdJQ0JwWmlBb2IzQmJNRjBnSmlBMUtTQjBhSEp2ZHlCdmNGc3hYVHNnY21WMGRYSnVJSHNnZG1Gc2RXVTZJRzl3V3pCZElEOGdiM0JiTVYwZ09pQjJiMmxrSURBc0lHUnZibVU2SUhSeWRXVWdmVHRjYmlBZ0lDQjlYRzU5TzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUUxSlJFbEdhV3hsVkhsd1pWOHhJRDBnY21WeGRXbHlaU2hjSWk0dlRVbEVTVVpwYkdWVWVYQmxYQ0lwTzF4dWRtRnlJRTFKUkVsUVlYSnpaVVZ5Y205eVh6RWdQU0J5WlhGMWFYSmxLRndpTGk5TlNVUkpVR0Z5YzJWRmNuSnZjbHdpS1R0Y2JuWmhjaUJOU1VSSlJYWmxiblJEY21WaGRHOXlYekVnUFNCeVpYRjFhWEpsS0Z3aUxpOU5TVVJKUlhabGJuUkRjbVZoZEc5eVhDSXBPMXh1ZG1GeUlIWmhjbWxoWW14bFgyeGxibWQwYUY5MllXeDFaVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHVMM1YwYVd4ekwzWmhjbWxoWW14bExXeGxibWQwYUMxMllXeDFaVndpS1R0Y2JuWmhjaUJpZFdabVpYSmZkRzlmYzNSeWFXNW5YekVnUFNCeVpYRjFhWEpsS0Z3aUxpNHZkWFJwYkhNdlluVm1abVZ5TFhSdkxYTjBjbWx1WjF3aUtUdGNiblpoY2lCTlNVUkpVbVZoWkdWeUlEMGdMeW9xSUVCamJHRnpjeUFxTHlBb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHWjFibU4wYVc5dUlFMUpSRWxTWldGa1pYSW9ZblZtWm1WeUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoaWRXWm1aWElnYVc1emRHRnVZMlZ2WmlCRVlYUmhWbWxsZHlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWlkV1ptWlhKUFptWnpaWFFnUFNCaWRXWm1aWEl1WW5sMFpVOW1abk5sZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVluVm1abVZ5VEdWdVozUm9JRDBnWW5WbVptVnlMbUo1ZEdWTVpXNW5kR2c3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1KMVptWmxjaUE5SUdKMVptWmxjaTVpZFdabVpYSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVJoZEdGV2FXVjNJRDBnWW5WbVptVnlPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdhV1lnS0dKMVptWmxjaUJwYm5OMFlXNWpaVzltSUVKMVptWmxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aWRXWm1aWEpQWm1aelpYUWdQU0JpZFdabVpYSXVZbmwwWlU5bVpuTmxkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WW5WbVptVnlUR1Z1WjNSb0lEMGdZblZtWm1WeUxtSjVkR1ZNWlc1bmRHZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbUoxWm1abGNpQTlJR0oxWm1abGNpNWlkV1ptWlhJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtUmhkR0ZXYVdWM0lEMGdibVYzSUVSaGRHRldhV1YzS0hSb2FYTXVZblZtWm1WeUxDQjBhR2x6TG1KMVptWmxjazltWm5ObGRDd2dkR2hwY3k1aWRXWm1aWEpNWlc1bmRHZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVpZFdabVpYSlBabVp6WlhRZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVpZFdabVpYSk1aVzVuZEdnZ1BTQmlkV1ptWlhJdVlubDBaVXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZblZtWm1WeUlEMGdZblZtWm1WeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWtZWFJoVm1sbGR5QTlJRzVsZHlCRVlYUmhWbWxsZHloMGFHbHpMbUoxWm1abGNpd2dkR2hwY3k1aWRXWm1aWEpQWm1aelpYUXNJSFJvYVhNdVluVm1abVZ5VEdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMllYSWdabWxzWlVobFlXUmxja05vZFc1cklEMGdkR2hwY3k1eVpXRmtVM1J5YVc1bktEQXNJRFFwTzF4dUlDQWdJQ0FnSUNCcFppQW9abWxzWlVobFlXUmxja05vZFc1cklDRTlQU0FuVFZSb1pDY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5Qk5TVVJKVUdGeWMyVkZjbkp2Y2w4eExrMUpSRWxRWVhKelpVVnljbTl5S0NkR2FXeGxJR1J2WlhNZ2JtOTBJSE4wWVhKMElIZHBkR2dnWVNCb1pXRmtaWElnWTJoMWJtc25LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMllYSWdYMkVnUFNCMGFHbHpMbkpsWVdSR2FXeGxTR1ZoWkdWeUtEUXBMQ0IwY21GamExTjBZWEowVDJabWMyVjBJRDBnWDJGYk1GMHNJR2hsWVdSbGNpQTlJRjloV3pGZE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SeVlXTnJVM1JoY25SUFptWnpaWFFnUFNCMGNtRmphMU4wWVhKMFQyWm1jMlYwSUNzZ05EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1pXRmtaWElnUFNCb1pXRmtaWEk3WEc0Z0lDQWdmVnh1SUNBZ0lFMUpSRWxTWldGa1pYSXVjSEp2ZEc5MGVYQmxMbkpsWVdSVmFXNTBNeklnUFNCbWRXNWpkR2x2YmlBb2MzUmhjblJKYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1a1lYUmhWbWxsZHk1blpYUlZhVzUwTXpJb2MzUmhjblJKYm1SbGVDazdYRzRnSUNBZ2ZUdGNiaUFnSUNCTlNVUkpVbVZoWkdWeUxuQnliM1J2ZEhsd1pTNXlaV0ZrVldsdWRERTJJRDBnWm5WdVkzUnBiMjRnS0hOMFlYSjBTVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WkdGMFlWWnBaWGN1WjJWMFZXbHVkREUyS0hOMFlYSjBTVzVrWlhncE8xeHVJQ0FnSUgwN1hHNGdJQ0FnVFVsRVNWSmxZV1JsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRk4wY21sdVp5QTlJR1oxYm1OMGFXOXVJQ2h6ZEdGeWRFbHVaR1Y0TENCc1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdKMVptWmxjbDkwYjE5emRISnBibWRmTVM1aWRXWm1aWEpVYjFOMGNtbHVaeWgwYUdsekxtSjFabVpsY2l3Z2RHaHBjeTVpZFdabVpYSlBabVp6WlhRZ0t5QnpkR0Z5ZEVsdVpHVjRMQ0JzWlc1bmRHZ3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ1RVbEVTVkpsWVdSbGNpNXdjbTkwYjNSNWNHVXVjbVZoWkZaaGNtbGhZbXhsVEdWdVozUm9JRDBnWm5WdVkzUnBiMjRnS0hOMFlYSjBTVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhjbWxoWW14bFgyeGxibWQwYUY5MllXeDFaVjh4TG1aeWIyMVdZWEpwWVdKc1pVeGxibWQwYUZaaGJIVmxLSFJvYVhNdVluVm1abVZ5TENCMGFHbHpMbUoxWm1abGNrOW1abk5sZENBcklITjBZWEowU1c1a1pYZ3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ1RVbEVTVkpsWVdSbGNpNXdjbTkwYjNSNWNHVXVjbVZoWkUxSlJFbEZkbVZ1ZENBOUlHWjFibU4wYVc5dUlDaHpkR0Z5ZEVsdVpHVjRMQ0IwY21GamEwNTFiV0psY2l3Z2NISmxkbWx2ZFhOVGRHRjBkWE5DZVhSbEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCZllTQTlJSFJvYVhNdWNtVmhaRlpoY21saFlteGxUR1Z1WjNSb0tITjBZWEowU1c1a1pYZ3BMQ0JpZVhSbGMxSmxZV1FnUFNCZllWc3dYU3dnWkdWc2RHRlVhVzFsSUQwZ1gyRmJNVjA3WEc0Z0lDQWdJQ0FnSUhaaGNpQnBibVJsZUNBOUlITjBZWEowU1c1a1pYZ2dLeUJpZVhSbGMxSmxZV1E3WEc0Z0lDQWdJQ0FnSUhaaGNpQmxkbVZ1ZEU5eVRuVnNiQ0E5SUUxSlJFbEZkbVZ1ZEVOeVpXRjBiM0pmTVM1bGRtVnVkRVp5YjIxQ2VYUmxjeWgwYUdsekxtUmhkR0ZXYVdWM0xDQnBibVJsZUN3Z2NISmxkbWx2ZFhOVGRHRjBkWE5DZVhSbEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0dWMlpXNTBUM0pPZFd4c0lEMDlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjM1JoZEhWelFubDBaVjh4SUQwZ2RHaHBjeTVrWVhSaFZtbGxkeTVuWlhSVmFXNTBPQ2hwYm1SbGVDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1RVbEVTVkJoY25ObFJYSnliM0pmTVM1TlNVUkpVR0Z5YzJWRmNuSnZjaWhjSWxWdWEyNXZkMjRnVFVsRVNTQmxkbVZ1ZENCemRHRjBkWE1nTUhoY0lpQXJJSE4wWVhSMWMwSjVkR1ZmTVM1MGIxTjBjbWx1WnlneE5pa3VkRzlWY0hCbGNrTmhjMlVvS1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkbUZ5SUdWMlpXNTBRbmwwWlhOU1pXRmtJRDBnWlhabGJuUlBjazUxYkd3dVlubDBaWE5TWldGa0xDQmxkbVZ1ZENBOUlHVjJaVzUwVDNKT2RXeHNMbVYyWlc1MExDQnpkR0YwZFhOQ2VYUmxJRDBnWlhabGJuUlBjazUxYkd3dWMzUmhkSFZ6UW5sMFpUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKNWRHVnpVbVZoWkRvZ2FXNWtaWGdnS3lCbGRtVnVkRUo1ZEdWelVtVmhaQ0F0SUhOMFlYSjBTVzVrWlhnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWRFUmhkR0U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGNtRmphMDUxYldKbGNqb2dkSEpoWTJ0T2RXMWlaWElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdWc2RHRlVhVzFsT2lCa1pXeDBZVlJwYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblE2SUdWMlpXNTBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlYUjFjMEo1ZEdVNklITjBZWFIxYzBKNWRHVXNYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVHRjYmlBZ0lDQk5TVVJKVW1WaFpHVnlMbkJ5YjNSdmRIbHdaUzV5WldGa1JtbHNaVWhsWVdSbGNpQTlJR1oxYm1OMGFXOXVJQ2h6ZEdGeWRFbHVaR1Y0S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJzWlc1bmRHZ2dQU0IwYUdsekxtUmhkR0ZXYVdWM0xtZGxkRlZwYm5Rek1paHpkR0Z5ZEVsdVpHVjRLVHRjYmlBZ0lDQWdJQ0FnTHk4Z1FXUmtJRFFnWW5sMFpYTWdabTl5SUhSb1pTQnNaVzVuZEdnZ1ptbGxiR1JjYmlBZ0lDQWdJQ0FnZG1GeUlHbHVaR1Y0SUQwZ2MzUmhjblJKYm1SbGVDQXJJRFE3WEc0Z0lDQWdJQ0FnSUhaaGNpQm1hV3hsVkhsd1pVNTFiV0psY2lBOUlIUm9hWE11WkdGMFlWWnBaWGN1WjJWMFZXbHVkREUyS0dsdVpHVjRLVHRjYmlBZ0lDQWdJQ0FnYVc1a1pYZ2dLejBnTWp0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1pwYkdWVWVYQmxPMXh1SUNBZ0lDQWdJQ0JwWmlBb1ptbHNaVlI1Y0dWT2RXMWlaWElnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBiR1ZVZVhCbElEMGdUVWxFU1VacGJHVlVlWEJsWHpFdVRVbEVTVVpwYkdWVWVYQmxMa1p2Y20xaGREQTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpTQnBaaUFvWm1sc1pWUjVjR1ZPZFcxaVpYSWdQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdacGJHVlVlWEJsSUQwZ1RVbEVTVVpwYkdWVWVYQmxYekV1VFVsRVNVWnBiR1ZVZVhCbExrWnZjbTFoZERFN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9abWxzWlZSNWNHVk9kVzFpWlhJZ1BUMDlJRElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pwYkdWVWVYQmxJRDBnVFVsRVNVWnBiR1ZVZVhCbFh6RXVUVWxFU1VacGJHVlVlWEJsTGtadmNtMWhkREk3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dUVWxFU1ZCaGNuTmxSWEp5YjNKZk1TNU5TVVJKVUdGeWMyVkZjbkp2Y2loY0lsVnVhMjV2ZDI0Z1RVbEVTU0JtYVd4bElIUjVjR1U2SUZ3aUlDc2dabWxzWlZSNWNHVk9kVzFpWlhJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFpoY2lCMGNtRmphME52ZFc1MElEMGdkR2hwY3k1a1lYUmhWbWxsZHk1blpYUlZhVzUwTVRZb2FXNWtaWGdwTzF4dUlDQWdJQ0FnSUNCcGJtUmxlQ0FyUFNBeU8xeHVJQ0FnSUNBZ0lDQjJZWElnWkdsMmFYTnBiMjVPZFcwZ1BTQjBhR2x6TG1SaGRHRldhV1YzTG1kbGRGVnBiblF4TmlocGJtUmxlQ2s3WEc0Z0lDQWdJQ0FnSUdsdVpHVjRJQ3M5SURJN1hHNGdJQ0FnSUNBZ0lIWmhjaUJrYVhacGMybHZianRjYmlBZ0lDQWdJQ0FnTHk4Z2FHbG5hQ0JpYVhRZ2MyVjBJRDBnVTAxUVZFVmNiaUFnSUNBZ0lDQWdhV1lnS0dScGRtbHphVzl1VG5WdElENCtJREUxSUQwOVBTQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdWc2RHRlVhVzFsVUdWeVJuSmhiV1VnUFNCa2FYWnBjMmx2Yms1MWJTQW1JREI0Ump0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCdVpXZGhkR2wyWlVaeVlXMWxjMUJsY2xObFkyOXVaQ0E5SUNoa2FYWnBjMmx2Yms1MWJTQStQaUE0S1NBbUlEQjROMlk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmthWFpwYzJsdmJpQTlJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWld4MFlWUnBiV1ZRWlhKR2NtRnRaVG9nWkdWc2RHRlVhVzFsVUdWeVJuSmhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WbllYUnBkbVZHY21GdFpYTlFaWEpUWldOdmJtUTZJRzVsWjJGMGFYWmxSbkpoYldWelVHVnlVMlZqYjI1a0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JwZG1semFXOXVJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhScFkydHpPaUJrYVhacGMybHZiazUxYlNBbUlEQjROMFpHUml4Y2JpQWdJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZ0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVGa1pDQTBJR1p2Y2lCMGFHVWdiR1Z1WjNSb0lHaGxZV1JsY2x4dUlDQWdJQ0FnSUNBZ0lDQWdOQ0FySUd4bGJtZDBhQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hsVkhsd1pUb2dabWxzWlZSNWNHVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSEpoWTJ0RGIzVnVkRG9nZEhKaFkydERiM1Z1ZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2FYWnBjMmx2YmpvZ1pHbDJhWE5wYjI0c1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUYwN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JOU1VSSlVtVmhaR1Z5TG5CeWIzUnZkSGx3WlM1eVpXRmtWSEpoWTJ0eklEMGdablZ1WTNScGIyNGdLRjloS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJwYm1SbGVDd2dhVzVJWldGa1pYSXNJR2x1VkhKaFkyc3NJSFJ5WVdOclRuVnRZbVZ5TENCamRYSnlaVzUwVkhKaFkydEZibVJKYm1SbGVDd2djSEpsZG1sdmRYTlRkR0YwZFhOQ2VYUmxMQ0JqYUhWdWExUjVjR1VzSUd4bGJtZDBhRjh4TENCZllpd2dZbmwwWlhOU1pXRmtMQ0JsZG1WdWRFUmhkR0VzSUhOMFlYUjFjMEo1ZEdVN1hHNGdJQ0FnSUNBZ0lIWmhjaUJmWXlBOUlDaGZZU0E5UFQwZ2RtOXBaQ0F3SUQ4Z2UzMGdPaUJmWVNrdVpYWmxiblJVZVhCbGN5d2daWFpsYm5SVWVYQmxjeUE5SUY5aklEMDlQU0IyYjJsa0lEQWdQeUE0TXpnNE5qQTNJQzhxSUVGc2JDQXFMeUE2SUY5ak8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1gxOW5aVzVsY21GMGIzSW9kR2hwY3l3Z1puVnVZM1JwYjI0Z0tGOWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tGOWtMbXhoWW1Wc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBd09seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm1SbGVDQTlJSFJvYVhNdWRISmhZMnRUZEdGeWRFOW1abk5sZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhVzVJWldGa1pYSWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1VWNtRmpheUE5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGNtRmphMDUxYldKbGNpQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SVWNtRmphMFZ1WkVsdVpHVjRJRDBnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDJRdWJHRmlaV3dnUFNBeE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnTVRwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NFb2FXNWtaWGdnUENCMGFHbHpMbUoxWm1abGNreGxibWQwYUNrcElISmxkSFZ5YmlCYk15QXZLbUp5WldGcktpOHNJRFZkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVNoamRYSnlaVzUwVkhKaFkydEZibVJKYm1SbGVDQTlQVDBnYm5Wc2JDa3BJSEpsZEhWeWJpQmJNeUF2S21KeVpXRnJLaThzSURKZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUhWdWExUjVjR1VnUFNCMGFHbHpMbkpsWVdSVGRISnBibWNvYVc1a1pYZ3NJRFFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibVJsZUNBclBTQTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMmgxYm10VWVYQmxJQ0U5UFNBblRWUnlheWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCTlNVUkpVR0Z5YzJWRmNuSnZjbDh4TGsxSlJFbFFZWEp6WlVWeWNtOXlLQ2RPYnlCMGNtRmpheUJvWldGa1pYSWdabTkxYm1RZ1lYUWdjM1JoY25RZ2IyWWdkSEpoWTJzbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaVzVuZEdoZk1TQTlJSFJvYVhNdWNtVmhaRlZwYm5Rek1paHBibVJsZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x1WkdWNElDczlJRFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SVWNtRmphMFZ1WkVsdVpHVjRJRDBnYVc1a1pYZ2dLeUJzWlc1bmRHaGZNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RISmhZMnRPZFcxaVpYSWdQU0IwY21GamEwNTFiV0psY2lBcklERTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJiTXlBdkttSnlaV0ZyS2k4c0lEUmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ01qcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDJJZ1BTQjBhR2x6TG5KbFlXUk5TVVJKUlhabGJuUW9hVzVrWlhnc0lIUnlZV05yVG5WdFltVnlMQ0J3Y21WMmFXOTFjMU4wWVhSMWMwSjVkR1VwTENCaWVYUmxjMUpsWVdRZ1BTQmZZaTVpZVhSbGMxSmxZV1FzSUdWMlpXNTBSR0YwWVNBOUlGOWlMbVYyWlc1MFJHRjBZU3dnYzNSaGRIVnpRbmwwWlNBOUlGOWlMbk4wWVhSMWMwSjVkR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlHSjVkR1Z6VW1WaFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKbGRtbHZkWE5UZEdGMGRYTkNlWFJsSUQwZ2MzUmhkSFZ6UW5sMFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHVaR1Y0SUQwOVBTQmpkWEp5Wlc1MFZISmhZMnRGYm1SSmJtUmxlQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRlJ5WVdOclJXNWtTVzVrWlhnZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hLR1YyWlc1MFJHRjBZUzVsZG1WdWRDQW1KaUFvWlhabGJuUkVZWFJoTG1WMlpXNTBMblI1Y0dVZ0ppQmxkbVZ1ZEZSNWNHVnpLU2twSUhKbGRIVnliaUJiTXlBdkttSnlaV0ZyS2k4c0lEUmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnV3pRZ0x5cDVhV1ZzWkNvdkxDQmxkbVZ1ZEVSaGRHRmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ016cGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDJRdWMyVnVkQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZaQzVzWVdKbGJDQTlJRFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQTBPaUJ5WlhSMWNtNGdXek1nTHlwaWNtVmhheW92TENBeFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURVNklISmxkSFZ5YmlCYk1pQXZLbkpsZEhWeWJpb3ZYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQnlaWFIxY200Z1RVbEVTVkpsWVdSbGNqdGNibjBvS1NrN1hHNWxlSEJ2Y25SekxrMUpSRWxTWldGa1pYSWdQU0JOU1VSSlVtVmhaR1Z5TzF4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNTJZWElnWDE5aGMzTnBaMjRnUFNBb2RHaHBjeUFtSmlCMGFHbHpMbDlmWVhOemFXZHVLU0I4ZkNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1gxOWhjM05wWjI0Z1BTQlBZbXBsWTNRdVlYTnphV2R1SUh4OElHWjFibU4wYVc5dUtIUXBJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnY3l3Z2FTQTlJREVzSUc0Z1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb095QnBJRHdnYmpzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpJRDBnWVhKbmRXMWxiblJ6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnY0NCcGJpQnpLU0JwWmlBb1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tITXNJSEFwS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSYmNGMGdQU0J6VzNCZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBPMXh1SUNBZ0lIMDdYRzRnSUNBZ2NtVjBkWEp1SUY5ZllYTnphV2R1TG1Gd2NHeDVLSFJvYVhNc0lHRnlaM1Z0Wlc1MGN5azdYRzU5TzF4dWRtRnlJRjlmYVcxd2IzSjBSR1ZtWVhWc2RDQTlJQ2gwYUdseklDWW1JSFJvYVhNdVgxOXBiWEJ2Y25SRVpXWmhkV3gwS1NCOGZDQm1kVzVqZEdsdmJpQW9iVzlrS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2h0YjJRZ0ppWWdiVzlrTGw5ZlpYTk5iMlIxYkdVcElEOGdiVzlrSURvZ2V5QmNJbVJsWm1GMWJIUmNJam9nYlc5a0lIMDdYRzU5TzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUdSbFluVm5YekVnUFNCZlgybHRjRzl5ZEVSbFptRjFiSFFvY21WeGRXbHlaU2hjSW1SbFluVm5YQ0lwS1R0Y2JuWmhjaUIxZEdsc2MxOHhJRDBnY21WeGRXbHlaU2hjSWk0dUwzVjBhV3h6WENJcE8xeHVkbUZ5SUdSbFluVm5JRDBnWkdWaWRXZGZNUzVrWldaaGRXeDBLRndpYldsa2FTMTBiMjlzY3pwTlNVUkpSbWxzWlZ3aUtUdGNiblpoY2lCemRISnBibWRVYjBOb1lYSkRiMlJsUVhKeVlYa2dQU0JtZFc1amRHbHZiaUFvYzNSeUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlZhVzUwT0VGeWNtRjVLSE4wY2k1emNHeHBkQ2hjSWx3aUtTNXRZWEFvWm5WdVkzUnBiMjRnS0dOb2Npa2dleUJ5WlhSMWNtNGdZMmh5TG1Ob1lYSkRiMlJsUVhRb01DazdJSDBwS1R0Y2JuMDdYRzUyWVhJZ2JYUm9aRk4wY21sdVp5QTlJSE4wY21sdVoxUnZRMmhoY2tOdlpHVkJjbkpoZVNoY0lrMVVhR1JjSWlrN1hHNTJZWElnYlhSeWExTjBjbWx1WnlBOUlITjBjbWx1WjFSdlEyaGhja052WkdWQmNuSmhlU2hjSWsxVWNtdGNJaWs3WEc1MllYSWdSVTVFWDA5R1gxUlNRVU5MWDBWV1JVNVVJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29XekI0UmtZc0lEQjRNa1lzSURCNE1EQmRLVHRjYm5aaGNpQnVkVzFpWlhKVWIwSjVkR1Z6SUQwZ1puVnVZM1JwYjI0Z0tHNTFiU3dnYldsdVFubDBaWE1wSUh0Y2JpQWdJQ0IyWVhJZ1lubDBaWE1nUFNCYlhUdGNiaUFnSUNCa2J5QjdYRzRnSUNBZ0lDQWdJR0o1ZEdWekxuVnVjMmhwWm5Rb2JuVnRJQ1lnTUhoR1JpazdYRzRnSUNBZ0lDQWdJRzUxYlNBOUlHNTFiU0ErUGlBNE8xeHVJQ0FnSUgwZ2QyaHBiR1VnS0c1MWJTQStJREFnZkh3Z1lubDBaWE11YkdWdVozUm9JRHdnYldsdVFubDBaWE1wTzF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVldsdWREaEJjbkpoZVNoaWVYUmxjeWs3WEc1OU8xeHVkbUZ5SUdkbGRFNXZkR1ZQYmtWMlpXNTBJRDBnWm5WdVkzUnBiMjRnS0c1dmRHVXNJR05vWVc1dVpXd3NJSFpsYkc5amFYUjVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJWYVc1ME9FRnljbUY1S0Z0Y2JpQWdJQ0FnSUNBZ01UUTBJQzhxSUU1dmRHVlBiaUFxTHlBcklDaGphR0Z1Ym1Wc0lDMGdNU2tzWEc0Z0lDQWdJQ0FnSUM4dklGVnVjMlYwSUhSdmNDQmlhWFE3SUhaaGJIVmxJR05oYmlCdmJteDVJR0psSURjZ1ltbDBjeUJzYjI1blhHNGdJQ0FnSUNBZ0lHNXZkR1VnSmlBd2VEZEdMRnh1SUNBZ0lDQWdJQ0IyWld4dlkybDBlU0FtSURCNE4wWXNYRzRnSUNBZ1hTazdYRzU5TzF4dWRtRnlJR2RsZEU1dmRHVlBabVpGZG1WdWRDQTlJR1oxYm1OMGFXOXVJQ2h1YjNSbExDQmphR0Z1Ym1Wc0xDQjJaV3h2WTJsMGVTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dWV2x1ZERoQmNuSmhlU2hiWEc0Z0lDQWdJQ0FnSURFeU9DQXZLaUJPYjNSbFQyWm1JQ292SUNzZ0tHTm9ZVzV1Wld3Z0xTQXhLU3hjYmlBZ0lDQWdJQ0FnTHk4Z1ZXNXpaWFFnZEc5d0lHSnBkRHNnZG1Gc2RXVWdZMkZ1SUc5dWJIa2dZbVVnTnlCaWFYUnpJR3h2Ym1kY2JpQWdJQ0FnSUNBZ2JtOTBaU0FtSURCNE4wWXNYRzRnSUNBZ0lDQWdJSFpsYkc5amFYUjVJQ1lnTUhnM1JpeGNiaUFnSUNCZEtUdGNibjA3WEc1MllYSWdaMlYwVUhKdlozSmhiVU5vWVc1blpVVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tGOWhLU0I3WEc0Z0lDQWdkbUZ5SUdOb1lXNXVaV3dnUFNCZllTNWphR0Z1Ym1Wc0xDQndjbTluY21GdElEMGdYMkV1Y0hKdlozSmhiVHRjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlZwYm5RNFFYSnlZWGtvVzF4dUlDQWdJQ0FnSUNBeE9USWdMeW9nVUhKdlozSmhiVU5vWVc1blpTQXFMeUFySUNoamFHRnVibVZzSUMwZ01Ta3NYRzRnSUNBZ0lDQWdJSEJ5YjJkeVlXMWNiaUFnSUNCZEtUdGNibjA3WEc1MllYSWdaMlYwUm1sc1pVaGxZV1JsY2lBOUlHWjFibU4wYVc5dUlDaGZZU2tnZTF4dUlDQWdJSFpoY2lCa2FYWnBjMmx2Ym5NZ1BTQmZZUzVrYVhacGMybHZibk1zSUhSeVlXTnJRMjkxYm5RZ1BTQmZZUzUwY21GamEwTnZkVzUwTzF4dUlDQWdJSFpoY2lCbWIzSnRZWFFnUFNCMGNtRmphME52ZFc1MElEMDlQU0F4SUQ5Y2JpQWdJQ0FnSUNBZ01DQTZYRzRnSUNBZ0lDQWdJREU3WEc0Z0lDQWdMeThnSXlCdlppQmthWFpwYzJsdmJuTWdjR1Z5SUhGMVlYSjBaWElnYm05MFpTQW9NVFVnWW1sMGN5QnZibXg1S1Z4dUlDQWdJSFpoY2lCa2FYWnBjMmx2Ym5OQ2VYUmxjeUE5SUc1MWJXSmxjbFJ2UW5sMFpYTW9aR2wyYVhOcGIyNXpJQ1lnTUhnM1JrWkdMQ0F5S1R0Y2JpQWdJQ0IyWVhJZ2RISmhZMnREYjNWdWRFSjVkR1Z6SUQwZ2JuVnRZbVZ5Vkc5Q2VYUmxjeWgwY21GamEwTnZkVzUwTENBeUtUdGNiaUFnSUNCMllYSWdkRzkwWVd4TVpXNW5kR2dnUFNCdGRHaGtVM1J5YVc1bkxtSjVkR1ZNWlc1bmRHZ2dLMXh1SUNBZ0lDQWdJQ0F2THlBMElHSjVkR1Z6SUdadmNpQnNaVzVuZEdnZ1ptbGxiR1FnSUZ4dUlDQWdJQ0FnSUNBMElDdGNiaUFnSUNBZ0lDQWdMeThnTWlCaWVYUmxjeUJtYjNJZ1ptOXliV0YwSUdacFpXeGtYRzRnSUNBZ0lDQWdJRElnSzF4dUlDQWdJQ0FnSUNCMGNtRmphME52ZFc1MFFubDBaWE11WW5sMFpVeGxibWQwYUNBclhHNGdJQ0FnSUNBZ0lHUnBkbWx6YVc5dWMwSjVkR1Z6TG1KNWRHVk1aVzVuZEdnN1hHNGdJQ0FnZG1GeUlHaGxZV1JsY2lBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0hSdmRHRnNUR1Z1WjNSb0tUdGNiaUFnSUNCMllYSWdhVzVrWlhnZ1BTQXdPMXh1SUNBZ0lHaGxZV1JsY2k1elpYUW9iWFJvWkZOMGNtbHVaeXdnYVc1a1pYZ3BPMXh1SUNBZ0lHbHVaR1Y0SUNzOUlHMTBhR1JUZEhKcGJtY3VZbmwwWlV4bGJtZDBhRHRjYmlBZ0lDQXZMeUJNWlc1bmRHZ2dabWxsYkdRc0lFMVRRaUJtYVhKemRGeHVJQ0FnSUdobFlXUmxjaTV6WlhRb1ZXbHVkRGhCY25KaGVTNXZaaWd3TENBd0xDQXdMQ0EyS1N3Z2FXNWtaWGdwTzF4dUlDQWdJR2x1WkdWNElDczlJRFE3WEc0Z0lDQWdhR1ZoWkdWeUxuTmxkQ2hWYVc1ME9FRnljbUY1TG05bUtEQXNJR1p2Y20xaGRDa3NJR2x1WkdWNEtUdGNiaUFnSUNCcGJtUmxlQ0FyUFNBeU8xeHVJQ0FnSUdobFlXUmxjaTV6WlhRb2RISmhZMnREYjNWdWRFSjVkR1Z6TENCcGJtUmxlQ2s3WEc0Z0lDQWdhVzVrWlhnZ0t6MGdkSEpoWTJ0RGIzVnVkRUo1ZEdWekxtSjVkR1ZNWlc1bmRHZzdYRzRnSUNBZ2FHVmhaR1Z5TG5ObGRDaGthWFpwYzJsdmJuTkNlWFJsY3l3Z2FXNWtaWGdwTzF4dUlDQWdJR2x1WkdWNElDczlJR1JwZG1semFXOXVjMEo1ZEdWekxtSjVkR1ZNWlc1bmRHZzdYRzRnSUNBZ2NtVjBkWEp1SUdobFlXUmxjanRjYm4wN1hHNTJZWElnWjJWMFZISmhZMnRJWldGa1pYSWdQU0JtZFc1amRHbHZiaUFvWDJFcElIdGNiaUFnSUNCMllYSWdiR1Z1WjNSb0lEMGdYMkV1YkdWdVozUm9PMXh1SUNBZ0lDOHZJRFFnWm05eUlIUm9aU0JOVkhKcklHaGxZV1JsY2l3Z05DQm1iM0lnZEdobElHeGxibWQwYUNCaWRXWm1aWEpjYmlBZ0lDQjJZWElnWW5WbVppQTlJRzVsZHlCQmNuSmhlVUoxWm1abGNpZzRLVHRjYmlBZ0lDQnVaWGNnVldsdWREaEJjbkpoZVNoaWRXWm1LUzV6WlhRb2JYUnlhMU4wY21sdVp5d2dNQ2s3WEc0Z0lDQWdibVYzSUVSaGRHRldhV1YzS0dKMVptWXBMbk5sZEZWcGJuUXpNaWcwTENCc1pXNW5kR2dwTzF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVldsdWREaEJjbkpoZVNoaWRXWm1LVHRjYm4wN1hHNTJZWElnVFVsRVNVWnBiR1VnUFNBdktpb2dRR05zWVhOeklDb3ZJQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnWm5WdVkzUnBiMjRnVFVsRVNVWnBiR1VvWDJFcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdScGRtbHphVzl1Y3lBOUlGOWhMbVJwZG1semFXOXVjenRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV1ptWlhKeklEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkSEpoWTJ0eklEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViMjF1YVZSeVlXTnJSWFpsYm5SeklEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaR2wyYVhOcGIyNXpJRDBnWkdsMmFYTnBiMjV6TzF4dUlDQWdJSDFjYmlBZ0lDQk5TVVJKUm1sc1pTNXdjbTkwYjNSNWNHVXVjSEp2WjNKaGJVTm9ZVzVuWlNBOUlHWjFibU4wYVc5dUlDaGZZU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiMlptYzJWMElEMGdYMkV1YjJabWMyVjBMQ0J3Y205bmNtRnRJRDBnWDJFdWNISnZaM0poYlN3Z2RISmhZMnNnUFNCZllTNTBjbUZqYXl3Z1gySWdQU0JmWVM1amFHRnVibVZzTENCamFHRnVibVZzSUQwZ1gySWdQVDA5SUhadmFXUWdNQ0EvSURFZ09pQmZZanRjYmlBZ0lDQWdJQ0FnZG1GeUlIQnliMmR5WVcxRGFHRnVaMlZGZG1WdWRDQTlJR2RsZEZCeWIyZHlZVzFEYUdGdVoyVkZkbVZ1ZENoN0lHTm9ZVzV1Wld3NklHTm9ZVzV1Wld3c0lIQnliMmR5WVcwNklIQnliMmR5WVcwZ2ZTazdYRzRnSUNBZ0lDQWdJSFpoY2lCaWRXWm1aWEpKYm1adklEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblE2SUhCeWIyZHlZVzFEYUdGdVoyVkZkbVZ1ZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1MFZIbHdaVG9nTVRreUlDOHFJRkJ5YjJkeVlXMURhR0Z1WjJVZ0tpOHNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2FYWnBjMmx2Yms5bVpuTmxkRG9nYjJabWMyVjBMRnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCcFppQW9kSEpoWTJzZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJXNXBWSEpoWTJ0RmRtVnVkSE11Y0hWemFDaGlkV1ptWlhKSmJtWnZLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doS0hSeVlXTnJJR2x1SUhSb2FYTXVkSEpoWTJ0ektTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRISmhZMnR6VzNSeVlXTnJYU0E5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblZtWm1WeWN6b2dXMTBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZEhKaFkydHpXM1J5WVdOclhTNWlkV1ptWlhKekxuQjFjMmdvWW5WbVptVnlTVzVtYnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVJQ0FnSUUxSlJFbEdhV3hsTG5CeWIzUnZkSGx3WlM1MGFXMWxVMmxuYm1GMGRYSmxJRDBnWm5WdVkzUnBiMjRnS0Y5aEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCdWRXMWxjbUYwYjNJZ1BTQmZZUzV1ZFcxbGNtRjBiM0lzSUdSbGJtOXRhVzVoZEc5eUlEMGdYMkV1WkdWdWIyMXBibUYwYjNJN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsZG1WdWRDQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtGdGNiaUFnSUNBZ0lDQWdJQ0FnSURJMU5TQXZLaUJOWlhSaElDb3ZMRnh1SUNBZ0lDQWdJQ0FnSUNBZ09EZ2dMeW9nVkdsdFpWTnBaMjVoZEhWeVpTQXFMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lEUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdWRXMWxjbUYwYjNJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JOWVhSb0xteHZaeklvWkdWdWIyMXBibUYwYjNJcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FIUnZaRzg2SUdacFozVnlaU0J2ZFhRZ2FHOTNJSFJ2SUdGamRIVmhiR3g1SUdSbFlXd2dkMmwwYUNCMGFHVnpaU0J3WVhKaGJXVjBaWEp6WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJ5YjJKMWMzUnNlUzB0U1NCa2IyNG5kQ0J5WldGc2JIa2dkVzVrWlhKemRHRnVaQ0IwYUdWdElHVnVkR2x5Wld4NVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCT2RXMWlaWElnYjJZZ2JXVjBjbTl1YjIxbElIUnBZMnR6SUhCbGNpQnhkV0Z5ZEdWeUlHNXZkR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lESTBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUblZ0WW1WeUlHOW1JREV2TXpKdVpDQnViM1JsY3lCd1pYSWdUVWxFU1NCeGRXRnlkR1Z5SUc1dmRHVmNiaUFnSUNBZ0lDQWdJQ0FnSURnc1hHNGdJQ0FnSUNBZ0lGMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOXRibWxVY21GamEwVjJaVzUwY3k1d2RYTm9LSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwT2lCbGRtVnVkQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwVkhsd1pUb2dNalUxSUM4cUlFMWxkR0VnS2k4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYVhacGMybHZiazltWm5ObGREb2dNQ3hjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JOU1VSSlJtbHNaUzV3Y205MGIzUjVjR1V1YTJWNVUybG5ibUYwZFhKbElEMGdablZ1WTNScGIyNGdLRjloS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJyWlhsVGFXZHVZWFIxY21VZ1BTQmZZUzVyWlhsVGFXZHVZWFIxY21Vc0lGOWlJRDBnWDJFdWIyWm1jMlYwTENCdlptWnpaWFFnUFNCZllpQTlQVDBnZG05cFpDQXdJRDhnTUNBNklGOWlPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pYWmxiblFnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2hiWEc0Z0lDQWdJQ0FnSUNBZ0lDQXlOVFVnTHlvZ1RXVjBZU0FxTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRGc1SUM4cUlFdGxlVk5wWjI1aGRIVnlaU0FxTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnJaWGxUYVdkdVlYUjFjbVV1YzJoaGNuQnpMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdiV0ZxYjNJZ0tEQXBJSFp6TGlCdGFXNXZjaUFvTVNsY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVCMGIyUnZPaUJCWTNSMVlXeHNlU0JtYVc1a0lHMWhhbTl5TDIxcGJtOXlJR3RsZVNCbWNtOXRJRmhOVEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhMlY1VTJsbmJtRjBkWEpsTG0xdlpHVWdQVDA5SUZ3aWJXbHViM0pjSWlBL0lERWdPaUF3TEZ4dUlDQWdJQ0FnSUNCZEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJXNXBWSEpoWTJ0RmRtVnVkSE11Y0hWemFDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRG9nWlhabGJuUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRlI1Y0dVNklESTFOU0F2S2lCTlpYUmhJQ292TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR2wyYVhOcGIyNVBabVp6WlhRNklHOW1abk5sZEN4Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZUdGNiaUFnSUNCTlNVUkpSbWxzWlM1d2NtOTBiM1I1Y0dVdWMyVjBWR2wwYkdVZ1BTQm1kVzVqZEdsdmJpQW9kR2wwYkdVcElIdGNiaUFnSUNBZ0lDQWdMeThnWVdSa0lERWdabTl5SUc1MWJHd2dkR1Z5YldsdVlYUnZjaUJpZVhSbFhHNGdJQ0FnSUNBZ0lIWmhjaUJzWlc1bmRHZ2dQU0IxZEdsc2MxOHhMblJ2Vm1GeWFXRmliR1ZNWlc1bmRHaFdZV3gxWlNoMGFYUnNaUzVzWlc1bmRHZ2dLeUF4S1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJR05vWVhKeklEMGdjM1J5YVc1blZHOURhR0Z5UTI5a1pVRnljbUY1S0hScGRHeGxJQ3NnWENKY1hEQmNJaWs3WEc0Z0lDQWdJQ0FnSUhaaGNpQjBiM1JoYkV4bGJtZDBhQ0E5SURJZ0t5QXZMeUF4SUdKNWRHVWdaV0ZqYUNCbWIzSWdjM1JoZEhWeklHRnVaQ0J6ZFdKMGVYQmxYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pXNW5kR2d1WW5sMFpVeGxibWQwYUNBclhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYUdGeWN5NWllWFJsVEdWdVozUm9PMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pYWmxiblFnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2gwYjNSaGJFeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJwYm1SbGVDQTlJREE3WEc0Z0lDQWdJQ0FnSUdWMlpXNTBMbk5sZENoVmFXNTBPRUZ5Y21GNUxtOW1LREkxTlNBdktpQk5aWFJoSUNvdkxDQXpJQzhxSUZSeVlXTnJUbUZ0WlNBcUx5a3NJR2x1WkdWNEtUdGNiaUFnSUNBZ0lDQWdhVzVrWlhnZ0t6MGdNanRjYmlBZ0lDQWdJQ0FnWlhabGJuUXVjMlYwS0d4bGJtZDBhQ3dnYVc1a1pYZ3BPMXh1SUNBZ0lDQWdJQ0JwYm1SbGVDQXJQU0JzWlc1bmRHZ3VZbmwwWlV4bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnWlhabGJuUXVjMlYwS0dOb1lYSnpMQ0JwYm1SbGVDazdYRzRnSUNBZ0lDQWdJR2x1WkdWNElDczlJR05vWVhKekxtSjVkR1ZNWlc1bmRHZzdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVm1abVZ5Y3k1d2RYTm9LSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwT2lCbGRtVnVkQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwVkhsd1pUb2dNalUxSUM4cUlFMWxkR0VnS2k4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYVhacGMybHZiazltWm5ObGREb2dNQ3hjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JOU1VSSlJtbHNaUzV3Y205MGIzUjVjR1V1Ym05MFpTQTlJR1oxYm1OMGFXOXVJQ2hmWVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYm05MFpTQTlJRjloTG01dmRHVXNJR1IxY21GMGFXOXVJRDBnWDJFdVpIVnlZWFJwYjI0c0lHOW1abk5sZENBOUlGOWhMbTltWm5ObGRDd2dkSEpoWTJzZ1BTQmZZUzUwY21GamF5d2dYMklnUFNCZllTNWphR0Z1Ym1Wc0xDQmphR0Z1Ym1Wc0lEMGdYMklnUFQwOUlIWnZhV1FnTUNBL0lERWdPaUJmWWl3Z1gyTWdQU0JmWVM1MlpXeHZZMmwwZVN3Z2RtVnNiMk5wZEhrZ1BTQmZZeUE5UFQwZ2RtOXBaQ0F3SUQ4Z05qUWdPaUJmWXl3Z1gyUWdQU0JmWVM1eVpXeGxZWE5sTENCeVpXeGxZWE5sSUQwZ1gyUWdQVDA5SUhadmFXUWdNQ0EvSUhabGJHOWphWFI1SURvZ1gyUXNJRjlsSUQwZ1gyRXViV1YwWVN3Z2JXVjBZU0E5SUY5bElEMDlQU0IyYjJsa0lEQWdQeUI3ZlNBNklGOWxPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JtOTBaVTl1UlhabGJuUWdQU0JuWlhST2IzUmxUMjVGZG1WdWRDaHViM1JsTENCamFHRnVibVZzTENCMlpXeHZZMmwwZVNrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ1YjNSbFRtRnRaU0E5SUhWMGFXeHpYekV1VG05MFpVNTFiV0psY2xSdlRtRnRaU2h1YjNSbEtUdGNiaUFnSUNBZ0lDQWdibTkwWlU1aGJXVWdQU0JjSWx3aUlDc2dibTkwWlU1aGJXVXVjM1JsY0NBcklDaHViM1JsVG1GdFpTNWhiSFJsY2lBOVBUMGdNU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQW5JeWNnT2x4dUlDQWdJQ0FnSUNBZ0lDQWdibTkwWlU1aGJXVXVZV3gwWlhJZ1BUMDlJQzB4SUQ5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBbllpY2dPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2NuS1NBcklHNXZkR1ZPWVcxbExtOWpkR0YyWlR0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0VvZEhKaFkyc2dhVzRnZEdocGN5NTBjbUZqYTNNcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblJ5WVdOcmMxdDBjbUZqYTEwZ1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblZtWm1WeWN6b2dXMTBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkSEpoWTJ0elczUnlZV05yWFM1aWRXWm1aWEp6TG5CMWMyZ29lMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblE2SUc1dmRHVlBia1YyWlc1MExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUlVlWEJsT2lBeE5EUWdMeW9nVG05MFpVOXVJQ292TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR2wyYVhOcGIyNVBabVp6WlhRNklHOW1abk5sZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFsZEdFNklGOWZZWE56YVdkdUtIc2dibUZ0WlRvZ2JtOTBaVTVoYldVZ2ZTd2diV1YwWVNrc1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0JrWldKMVp5Z25ibTkwWlNCdmJqb2dKeXdnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdibTkwWlRvZ2JtOTBaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHOW1abk5sZERvZ2IyWm1jMlYwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaSFZ5WVhScGIyNDZJR1IxY21GMGFXOXVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibTVsYkRvZ1kyaGhibTVsYkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsYkc5amFYUjVPaUIyWld4dlkybDBlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwT2lCdWIzUmxUMjVGZG1WdWRDeGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQnViM1JsVDJabVJYWmxiblFnUFNCblpYUk9iM1JsVDJabVJYWmxiblFvYm05MFpTd2dZMmhoYm01bGJDd2djbVZzWldGelpTazdYRzRnSUNBZ0lDQWdJSFpoY2lCdWIzUmxUMlptVDJabWMyVjBJRDBnYjJabWMyVjBJQ3NnWkhWeVlYUnBiMjQ3WEc0Z0lDQWdJQ0FnSUdSbFluVm5LQ2R1YjNSbElHOW1aam9nSnl3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYm05MFpUb2dibTkwWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGREb2dibTkwWlU5bVprOW1abk5sZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR05vWVc1dVpXdzZJR05vWVc1dVpXd3NYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXeGxZWE5sT2lCeVpXeGxZWE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiV1YwWVRvZ1gxOWhjM05wWjI0b2V5QnVZVzFsT2lCdWIzUmxUbUZ0WlNCOUxDQnRaWFJoS1N4Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRISmhZMnR6VzNSeVlXTnJYUzVpZFdabVpYSnpMbkIxYzJnb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUTZJRzV2ZEdWUFptWkZkbVZ1ZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1MFZIbHdaVG9nTVRJNElDOHFJRTV2ZEdWUFptWWdLaThzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmthWFpwYzJsdmJrOW1abk5sZERvZ2JtOTBaVTltWms5bVpuTmxkQ3hjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JOU1VSSlJtbHNaUzV3Y205MGIzUjVjR1V1YzJWMFZHVnRjRzhnUFNCbWRXNWpkR2x2YmlBb2RHVnRjRzhwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRzFwWTNKdmMyVmpiMjVrYzFCbGNsRjFZWEowWlhKT2IzUmxJRDBnTm1VM0lDOGdkR1Z0Y0c4N1hHNGdJQ0FnSUNBZ0lIWmhjaUIwWlcxd2IwSjVkR1Z6SUQwZ2JuVnRZbVZ5Vkc5Q2VYUmxjeWh0YVdOeWIzTmxZMjl1WkhOUVpYSlJkV0Z5ZEdWeVRtOTBaU3dnTXlrN1hHNGdJQ0FnSUNBZ0lDOHZJREVnWW5sMFpTQmxZV05vSUdadmNpQnpkR0YwZFhNZ2RIbHdaU0JoYm1RZ2JXVjBZU0IwZVhCbExDQmhibVFnTVNCbWIzSWdZMjl1YzNSaGJuUWdkbUZzZFdVZ01IZ3dNeUJoWm5SbGNpQnRaWFJoSUhSNWNHVmNiaUFnSUNBZ0lDQWdkbUZ5SUhSdmRHRnNUR1Z1WjNSb0lEMGdNeUFyWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaVzF3YjBKNWRHVnpMbUo1ZEdWTVpXNW5kR2c3WEc0Z0lDQWdJQ0FnSUhaaGNpQmxkbVZ1ZENBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0hSdmRHRnNUR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdsdVpHVjRJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1pYWmxiblF1YzJWMEtGVnBiblE0UVhKeVlYa3ViMllvTWpVMUlDOHFJRTFsZEdFZ0tpOHNJRGd4SUM4cUlGTmxkRlJsYlhCdklDb3ZMQ0F6S1N3Z2FXNWtaWGdwTzF4dUlDQWdJQ0FnSUNCcGJtUmxlQ0FyUFNBek8xeHVJQ0FnSUNBZ0lDQmxkbVZ1ZEM1elpYUW9kR1Z0Y0c5Q2VYUmxjeXdnYVc1a1pYZ3BPMXh1SUNBZ0lDQWdJQ0JwYm1SbGVDQXJQU0IwWlcxd2IwSjVkR1Z6TG1KNWRHVk1aVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjIxdWFWUnlZV05yUlhabGJuUnpMbkIxYzJnb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUTZJR1YyWlc1MExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUlVlWEJsT2lBeU5UVWdMeW9nVFdWMFlTQXFMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnBkbWx6YVc5dVQyWm1jMlYwT2lBd0xGeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lFMUpSRWxHYVd4bExuQnliM1J2ZEhsd1pTNXpiM0owUW5WbVptVnljeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUY5MGFHbHpJRDBnZEdocGN6dGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFOWlhbVZqZEM1clpYbHpLSFJvYVhNdWRISmhZMnR6S1M1eVpXUjFZMlVvWm5WdVkzUnBiMjRnS0hKbFpIVmpkR2x2Yml3Z2RISmhZMnRPZFcxaVpYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSE5vWVd4c2IzY2dZMnh2Ym1VZ2RHOGdZWFp2YVdRZ1lXUmthVzVuSUc5dGJtbFVjbUZqYTBWMlpXNTBjeUIwYnlCMGFHVWdZV04wZFdGc0lIUnlZV05yYzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhSeVlXTnJRblZtWm1WeWN5QTlJRjkwYUdsekxuUnlZV05yYzF0MGNtRmphMDUxYldKbGNsMHVZblZtWm1WeWN5NXpiR2xqWlNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKaFkydENkV1ptWlhKekxuVnVjMmhwWm5RdVlYQndiSGtvZEhKaFkydENkV1ptWlhKekxDQmZkR2hwY3k1dmJXNXBWSEpoWTJ0RmRtVnVkSE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZrZFdOMGFXOXVXM1J5WVdOclRuVnRZbVZ5WFNBOUlIUnlZV05yUW5WbVptVnljeTV6YjNKMEtHWjFibU4wYVc5dUlDaGhMQ0JpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzltWm5ObGRFUnBabVlnUFNCaExtUnBkbWx6YVc5dVQyWm1jMlYwSUMwZ1lpNWthWFpwYzJsdmJrOW1abk5sZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iMlptYzJWMFJHbG1aaUE5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZUzVsZG1WdWRGUjVjR1VnUFQwOUlHSXVaWFpsYm5SVWVYQmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lTNWxkbVZ1ZEZSNWNHVWdQVDA5SURFNU1pQXZLaUJRY205bmNtRnRRMmhoYm1kbElDb3ZJSHg4WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoTG1WMlpXNTBWSGx3WlNBOVBUMGdNalUxSUM4cUlFMWxkR0VnS2k4cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpTG1WMlpXNTBWSGx3WlNBOVBUMGdNVGt5SUM4cUlGQnliMmR5WVcxRGFHRnVaMlVnS2k4Z2ZIeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpTG1WMlpXNTBWSGx3WlNBOVBUMGdNalUxSUM4cUlFMWxkR0VnS2k4cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzltWm5ObGRFUnBabVk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpXUjFZM1JwYjI0N1hHNGdJQ0FnSUNBZ0lIMHNJSHQ5S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJRTFKUkVsR2FXeGxMbkJ5YjNSdmRIbHdaUzUwYjBGeWNtRjVRblZtWm1WeUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdZblZtWm1WeWN5QTlJSFJvYVhNdWMyOXlkRUoxWm1abGNuTW9LVHRjYmlBZ0lDQWdJQ0FnZG1GeUlIUnlZV05yUTI5MWJuUWdQU0JQWW1wbFkzUXVhMlY1Y3loMGFHbHpMblJ5WVdOcmN5a3ViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQjJZWElnZEhKaFkydE1aVzVuZEdoeklEMGdUMkpxWldOMExtdGxlWE1vWW5WbVptVnljeWt1Y21Wa2RXTmxLR1oxYm1OMGFXOXVJQ2gwYjNSaGJITXNJSFJ5WVdOclRuVnRZbVZ5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NISmxka1IxY21GMGFXOXVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2ZEdGc2MxdDBjbUZqYTA1MWJXSmxjbDBnUFNCaWRXWm1aWEp6VzNSeVlXTnJUblZ0WW1WeVhTNXlaV1IxWTJVb1puVnVZM1JwYjI0Z0tIUnZkR0ZzTENCdGFXUnBSWFpsYm5SSmJtWnZLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc5MFlXd2dQU0IwYjNSaGJDQXJJRzFwWkdsRmRtVnVkRWx1Wm04dVpYWmxiblF1YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCa1pXeDBZVlJwYldVZ1BTQnRhV1JwUlhabGJuUkpibVp2TG1ScGRtbHphVzl1VDJabWMyVjBJQzBnY0hKbGRrUjFjbUYwYVc5dU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJrWld4MFlWUnBiV1ZDZFdabVpYSWdQU0IxZEdsc2MxOHhMblJ2Vm1GeWFXRmliR1ZNWlc1bmRHaFdZV3gxWlNoa1pXeDBZVlJwYldVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZkR0ZzSUNzOUlHUmxiSFJoVkdsdFpVSjFabVpsY2k1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldsa2FVVjJaVzUwU1c1bWJ5NWtaV3gwWVZScGJXVkNkV1ptWlhJZ1BTQmtaV3gwWVZScGJXVkNkV1ptWlhJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISmxka1IxY21GMGFXOXVJRDBnYldsa2FVVjJaVzUwU1c1bWJ5NWthWFpwYzJsdmJrOW1abk5sZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEc5MFlXdzdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQXdLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnZkR0ZzYzF0MGNtRmphMDUxYldKbGNsMGdLejBnTVNBcklDOHZJRlJvWlNCa1pXeDBZU0IwYVcxbElHOW1abk5sZENCbWIzSWdaVzVrSUc5bUlIUnlZV05ySUdseklEQXNJSGRvYVdOb0lIUmhhMlZ6SURFZ1lubDBaU0JwYmlCV1RGWmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQkZUa1JmVDBaZlZGSkJRMHRmUlZaRlRsUXViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ2ZEdGc2N6dGNiaUFnSUNBZ0lDQWdmU3dnZTMwcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYUdWaFpHVnlRMmgxYm1zZ1BTQm5aWFJHYVd4bFNHVmhaR1Z5S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JwZG1semFXOXVjem9nZEdocGN5NWthWFpwYzJsdmJuTXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNtRmphME52ZFc1ME9pQjBjbUZqYTBOdmRXNTBMRnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFJ5WVdOclNHVmhaR1Z5Y3lBOUlFOWlhbVZqZEM1clpYbHpLR0oxWm1abGNuTXBMbkpsWkhWalpTaG1kVzVqZEdsdmJpQW9hR1ZoWkdWeWN5d2dkSEpoWTJ0T2RXMWlaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hsWVdSbGNuTmJkSEpoWTJ0T2RXMWlaWEpkSUQwZ1oyVjBWSEpoWTJ0SVpXRmtaWElvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGJtZDBhRG9nZEhKaFkydE1aVzVuZEdoelczUnlZV05yVG5WdFltVnlYU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdobFlXUmxjbk03WEc0Z0lDQWdJQ0FnSUgwc0lIdDlLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlIUnZkR0ZzVEdWdVozUm9JRDBnYUdWaFpHVnlRMmgxYm1zdWJHVnVaM1JvTzF4dUlDQWdJQ0FnSUNCMGIzUmhiRXhsYm1kMGFDQXJQU0JQWW1wbFkzUXVhMlY1Y3loMGNtRmphMGhsWVdSbGNuTXBMbkpsWkhWalpTaG1kVzVqZEdsdmJpQW9kRzkwWVd3c0lIUnlZV05yVG5WdFltVnlLU0I3SUhKbGRIVnliaUIwYjNSaGJDQXJJSFJ5WVdOclNHVmhaR1Z5YzF0MGNtRmphMDUxYldKbGNsMHViR1Z1WjNSb095QjlMQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2RHOTBZV3hNWlc1bmRHZ2dLejBnVDJKcVpXTjBMbXRsZVhNb1luVm1abVZ5Y3lrdWNtVmtkV05sS0daMWJtTjBhVzl1SUNoMGIzUmhiQ3dnZEhKaFkydE9kVzFpWlhJcElIc2djbVYwZFhKdUlIUnZkR0ZzSUNzZ2RISmhZMnRNWlc1bmRHaHpXM1J5WVdOclRuVnRZbVZ5WFRzZ2ZTd2dNQ2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQmlkV1ptSUQwZ2JtVjNJRUZ5Y21GNVFuVm1abVZ5S0hSdmRHRnNUR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdGeWNpQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtHSjFabVlwTzF4dUlDQWdJQ0FnSUNCMllYSWdiMlptYzJWMElEMGdNRHRjYmlBZ0lDQWdJQ0FnWVhKeUxuTmxkQ2hvWldGa1pYSkRhSFZ1YXl3Z2IyWm1jMlYwS1R0Y2JpQWdJQ0FnSUNBZ2IyWm1jMlYwSUNzOUlHaGxZV1JsY2tOb2RXNXJMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdUMkpxWldOMExtdGxlWE1vWW5WbVptVnljeWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvZEhKaFkydE9kVzFpWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdGeWNpNXpaWFFvZEhKaFkydElaV0ZrWlhKelczUnlZV05yVG5WdFltVnlYU3dnYjJabWMyVjBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHOW1abk5sZENBclBTQjBjbUZqYTBobFlXUmxjbk5iZEhKaFkydE9kVzFpWlhKZExteGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0oxWm1abGNuTmJkSEpoWTJ0T2RXMWlaWEpkTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0cxcFpHbEZkbVZ1ZEVsdVptOHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1pHVnNkR0ZVYVcxbFFuVm1abVZ5SUQwZ2JXbGthVVYyWlc1MFNXNW1ieTVrWld4MFlWUnBiV1ZDZFdabVpYSTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWEp5TG5ObGRDaGtaV3gwWVZScGJXVkNkV1ptWlhJc0lHOW1abk5sZENrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwSUNzOUlHUmxiSFJoVkdsdFpVSjFabVpsY2k1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhKeUxuTmxkQ2h0YVdScFJYWmxiblJKYm1adkxtVjJaVzUwTENCdlptWnpaWFFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5bVpuTmxkQ0FyUFNCdGFXUnBSWFpsYm5SSmJtWnZMbVYyWlc1MExteGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUkdWc2RHRWdkR2x0WlNCbWIzSWdaVzVrSUc5bUlIUnlZV05ySUdWMlpXNTBJR2x6SURBc0lITnZJSFJvWlNCaWRXWm1aWElnWm05eUlHbDBJR2x6SUdGc2QyRjVjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdkR2hsSUhOaGJXVmNiaUFnSUNBZ0lDQWdJQ0FnSUdGeWNpNXpaWFFvVldsdWREaEJjbkpoZVM1bWNtOXRLRnN3WFNrc0lHOW1abk5sZENrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2Wm1aelpYUWdLejBnTVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z5Y2k1elpYUW9SVTVFWDA5R1gxUlNRVU5MWDBWV1JVNVVMQ0J2Wm1aelpYUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwSUNzOUlFVk9SRjlQUmw5VVVrRkRTMTlGVmtWT1ZDNXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZblZtWmp0Y2JpQWdJQ0I5TzF4dUlDQWdJSEpsZEhWeWJpQk5TVVJKUm1sc1pUdGNibjBvS1NrN1hHNWxlSEJ2Y25SekxrMUpSRWxHYVd4bElEMGdUVWxFU1VacGJHVTdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUJOU1VSSlJtbHNaVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZUVWxFU1VacGJHVmNJaWs3WEc1bGVIQnZjblJ6TGsxSlJFbEdhV3hsSUQwZ1RVbEVTVVpwYkdWZk1TNU5TVVJKUm1sc1pUdGNiaUlzSWx3aWRYTmxJSE4wY21samRGd2lPMXh1VDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGd2lYMTlsYzAxdlpIVnNaVndpTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dWRtRnlJRTFKUkVsWGNtbDBaWEpmTVNBOUlISmxjWFZwY21Vb1hDSXVMMDFKUkVsWGNtbDBaWEpjSWlrN1hHNWxlSEJ2Y25SekxrMUpSRWxHYVd4bElEMGdUVWxFU1ZkeWFYUmxjbDh4TGsxSlJFbEdhV3hsTzF4dWRtRnlJRTFKUkVsU1pXRmtaWEpmTVNBOUlISmxjWFZwY21Vb1hDSXVMMDFKUkVsU1pXRmtaWEpjSWlrN1hHNWxlSEJ2Y25SekxrMUpSRWxGZG1WdWRITWdQU0JOU1VSSlVtVmhaR1Z5WHpFdVRVbEVTVVYyWlc1MGN6dGNibVY0Y0c5eWRITXVUVWxFU1VacGJHVlVlWEJsSUQwZ1RVbEVTVkpsWVdSbGNsOHhMazFKUkVsR2FXeGxWSGx3WlR0Y2JtVjRjRzl5ZEhNdVRVbEVTVkJoY25ObFJYSnliM0lnUFNCTlNVUkpVbVZoWkdWeVh6RXVUVWxFU1ZCaGNuTmxSWEp5YjNJN1hHNWxlSEJ2Y25SekxrMUpSRWxTWldGa1pYSWdQU0JOU1VSSlVtVmhaR1Z5WHpFdVRVbEVTVkpsWVdSbGNqdGNiblpoY2lCMWRHbHNjMTh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZkWFJwYkhOY0lpazdYRzVsZUhCdmNuUnpMbUoxWm1abGNsUnZVM1J5YVc1bklEMGdkWFJwYkhOZk1TNWlkV1ptWlhKVWIxTjBjbWx1Wnp0Y2JtVjRjRzl5ZEhNdVpuSnZiVlpoY21saFlteGxUR1Z1WjNSb1ZtRnNkV1VnUFNCMWRHbHNjMTh4TG1aeWIyMVdZWEpwWVdKc1pVeGxibWQwYUZaaGJIVmxPMXh1Wlhod2IzSjBjeTUwYjFaaGNtbGhZbXhsVEdWdVozUm9WbUZzZFdVZ1BTQjFkR2xzYzE4eExuUnZWbUZ5YVdGaWJHVk1aVzVuZEdoV1lXeDFaVHRjYm1WNGNHOXlkSE11VG05MFpVNWhiV1ZVYjA1MWJXSmxjaUE5SUhWMGFXeHpYekV1VG05MFpVNWhiV1ZVYjA1MWJXSmxjanRjYm1WNGNHOXlkSE11VG05MFpVNTFiV0psY2xSdlRtRnRaU0E5SUhWMGFXeHpYekV1VG05MFpVNTFiV0psY2xSdlRtRnRaVHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVaWGh3YjNKMGN5NWlkV1ptWlhKVWIxTjBjbWx1WnlBOUlHWjFibU4wYVc5dUlDaGlkV1ptWlhJc0lITjBZWEowU1c1a1pYZ3NJR3hsYm1kMGFDa2dlMXh1SUNBZ0lIWmhjaUJ6ZEhJZ1BTQW5KenRjYmlBZ0lDQjJZWElnWkdGMFlWWnBaWGNnUFNCdVpYY2dSR0YwWVZacFpYY29ZblZtWm1WeUxDQnpkR0Z5ZEVsdVpHVjRMQ0JzWlc1bmRHZ3BPMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2MzUnlJQ3M5SUZOMGNtbHVaeTVtY205dFEyaGhja052WkdVb1pHRjBZVlpwWlhjdVoyVjBWV2x1ZERnb2FTa3BPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnYzNSeU8xeHVmVHRjYmlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUdKMVptWmxjbDkwYjE5emRISnBibWRmTVNBOUlISmxjWFZwY21Vb1hDSXVMMkoxWm1abGNpMTBieTF6ZEhKcGJtZGNJaWs3WEc1bGVIQnZjblJ6TG1KMVptWmxjbFJ2VTNSeWFXNW5JRDBnWW5WbVptVnlYM1J2WDNOMGNtbHVaMTh4TG1KMVptWmxjbFJ2VTNSeWFXNW5PMXh1ZG1GeUlIWmhjbWxoWW14bFgyeGxibWQwYUY5MllXeDFaVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZkbUZ5YVdGaWJHVXRiR1Z1WjNSb0xYWmhiSFZsWENJcE8xeHVaWGh3YjNKMGN5NW1jbTl0Vm1GeWFXRmliR1ZNWlc1bmRHaFdZV3gxWlNBOUlIWmhjbWxoWW14bFgyeGxibWQwYUY5MllXeDFaVjh4TG1aeWIyMVdZWEpwWVdKc1pVeGxibWQwYUZaaGJIVmxPMXh1Wlhod2IzSjBjeTUwYjFaaGNtbGhZbXhsVEdWdVozUm9WbUZzZFdVZ1BTQjJZWEpwWVdKc1pWOXNaVzVuZEdoZmRtRnNkV1ZmTVM1MGIxWmhjbWxoWW14bFRHVnVaM1JvVm1Gc2RXVTdYRzUyWVhJZ2JXbGthVjl1YjNSbFgyTnZiblpsY25SbGNsOHhJRDBnY21WeGRXbHlaU2hjSWk0dmJXbGthUzF1YjNSbExXTnZiblpsY25SbGNsd2lLVHRjYm1WNGNHOXlkSE11VG05MFpVNWhiV1ZVYjA1MWJXSmxjaUE5SUcxcFpHbGZibTkwWlY5amIyNTJaWEowWlhKZk1TNU9iM1JsVG1GdFpWUnZUblZ0WW1WeU8xeHVaWGh3YjNKMGN5NU9iM1JsVG5WdFltVnlWRzlPWVcxbElEMGdiV2xrYVY5dWIzUmxYMk52Ym5abGNuUmxjbDh4TGs1dmRHVk9kVzFpWlhKVWIwNWhiV1U3WEc0aUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNibVoxYm1OMGFXOXVJRTV2ZEdWT2RXMWlaWEpVYjA1aGJXVW9ibTkwWlNrZ2UxeHVJQ0FnSUhaaGNpQnpkR1Z3TzF4dUlDQWdJSFpoY2lCaGJIUmxjanRjYmlBZ0lDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdibTh0YldGbmFXTXRiblZ0WW1WeWMxeHVJQ0FnSUhaaGNpQnZZM1JoZG1VZ1BTQk5ZWFJvTG1ac2IyOXlLRzV2ZEdVZ0x5QXhNaWtnTFNBeE8xeHVJQ0FnSUM4cUlHVnpiR2x1ZEMxa2FYTmhZbXhsSUc1dkxXWmhiR3gwYUhKdmRXZG9JQ292WEc0Z0lDQWdMeW9nWlhOc2FXNTBMV1JwYzJGaWJHVWdibTh0YldGbmFXTXRiblZ0WW1WeWN5QXFMMXh1SUNBZ0lITjNhWFJqYUNBb2JtOTBaU0FsSURFeUtTQjdYRzRnSUNBZ0lDQWdJR05oYzJVZ01UcGNiaUFnSUNBZ0lDQWdJQ0FnSUdGc2RHVnlJRDBnTVR0Y2JpQWdJQ0FnSUNBZ1kyRnpaU0F3T2x4dUlDQWdJQ0FnSUNBZ0lDQWdjM1JsY0NBOUlGd2lRMXdpTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnTXpwY2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzZEdWeUlEMGdNVHRjYmlBZ0lDQWdJQ0FnWTJGelpTQXlPbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjQ0E5SUZ3aVJGd2lPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUdOaGMyVWdORHBjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBaWEFnUFNCY0lrVmNJanRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNCallYTmxJRFk2WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiSFJsY2lBOUlERTdYRzRnSUNBZ0lDQWdJR05oYzJVZ05UcGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFpYQWdQU0JjSWtaY0lqdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0JqWVhObElEZzZYRzRnSUNBZ0lDQWdJQ0FnSUNCaGJIUmxjaUE5SURFN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnTnpwY2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWlhBZ1BTQmNJa2RjSWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQmpZWE5sSURFd09seHVJQ0FnSUNBZ0lDQWdJQ0FnWVd4MFpYSWdQU0F4TzF4dUlDQWdJQ0FnSUNCallYTmxJRGs2WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3SUQwZ1hDSkJYQ0k3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ1kyRnpaU0F4TVRwY2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWlhBZ1BTQmNJa0pjSWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdJQ0F2S2lCbGMyeHBiblF0Wlc1aFlteGxJRzV2TFcxaFoybGpMVzUxYldKbGNuTWdLaTljYmlBZ0lDQXZLaUJsYzJ4cGJuUXRaVzVoWW14bElHNXZMV1poYkd4MGFISnZkV2RvSUNvdlhHNGdJQ0FnZG1GeUlHNXZkR1ZQWW1vZ1BTQjdYRzRnSUNBZ0lDQWdJSE4wWlhBNklITjBaWEFzWEc0Z0lDQWdJQ0FnSUc5amRHRjJaVG9nYjJOMFlYWmxMRnh1SUNBZ0lDQWdJQ0JOU1VSSlRuVnRZbVZ5T2lCdWIzUmxMRnh1SUNBZ0lIMDdYRzRnSUNBZ2FXWWdLR0ZzZEdWeUtTQjdYRzRnSUNBZ0lDQWdJRzV2ZEdWUFltb3VZV3gwWlhJZ1BTQmhiSFJsY2p0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHNXZkR1ZQWW1vN1hHNTlYRzVsZUhCdmNuUnpMazV2ZEdWT2RXMWlaWEpVYjA1aGJXVWdQU0JPYjNSbFRuVnRZbVZ5Vkc5T1lXMWxPMXh1ZG1GeUlITjBaWEJVYjA1MWJXSmxjaUE5SUh0Y2JpQWdJQ0JET2lBd0xGeHVJQ0FnSUVRNklESXNYRzRnSUNBZ1JUb2dOQ3hjYmlBZ0lDQkdPaUExTEZ4dUlDQWdJRWM2SURjc1hHNGdJQ0FnUVRvZ09TeGNiaUFnSUNCQ09pQXhNU3hjYm4wN1hHNTJZWElnYzNSbGNITWdQU0JjSWtGQ1EwUkZSa2RjSWp0Y2JtWjFibU4wYVc5dUlFNXZkR1ZPWVcxbFZHOU9kVzFpWlhJb2JtOTBaVTVoYldVcElIdGNiaUFnSUNCMllYSWdjM1JsY0R0Y2JpQWdJQ0IyWVhJZ2IyTjBZWFpsTzF4dUlDQWdJSFpoY2lCaGJIUmxjanRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JRzV2ZEdWT1lXMWxJRDA5UFNCY0luTjBjbWx1WjF3aUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCdFlYUmphR1Z6SUQwZ0wxNG9XMEV0UjEwcEtGc2pZbDBwUHlndFAxeGNaQ3NwSkM4dVpYaGxZeWh1YjNSbFRtRnRaU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hiV0YwWTJobGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZG1GeUlHRnNkR1Z5VTNSeWFXNW5JRDBnYldGMFkyaGxjMXN5WFR0Y2JpQWdJQ0FnSUNBZ2MzUmxjQ0E5SUcxaGRHTm9aWE5iTVYwN1hHNGdJQ0FnSUNBZ0lHOWpkR0YyWlNBOUlFNTFiV0psY2lodFlYUmphR1Z6V3pOZEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0dGc2RHVnlVM1J5YVc1bklEMDlQU0JjSW1KY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lXeDBaWElnUFNBdE1UdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElHbG1JQ2hoYkhSbGNsTjBjbWx1WnlBOVBUMGdYQ0lqWENJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdGc2RHVnlJRDBnTVR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjM1JsY0NBOUlHNXZkR1ZPWVcxbExuTjBaWEE3WEc0Z0lDQWdJQ0FnSUdGc2RHVnlJRDBnYm05MFpVNWhiV1V1WVd4MFpYSTdYRzRnSUNBZ0lDQWdJRzlqZEdGMlpTQTlJRzV2ZEdWT1lXMWxMbTlqZEdGMlpUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tHRnNkR1Z5SUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCaGJIUmxjaUE5SURFN1hHNGdJQ0FnSUNBZ0lIWmhjaUJwYm1sMGFXRnNVM1JsY0VsdVpHVjRJRDBnYzNSbGNITXVhVzVrWlhoUFppaHpkR1Z3S1R0Y2JpQWdJQ0FnSUNBZ2MzUmxjQ0E5SUhOMFpYQnpXeWh6ZEdWd2N5NXBibVJsZUU5bUtITjBaWEFwSUNzZ2MzUmxjSE11YkdWdVozUm9JQzBnTVNrZ0pTQnpkR1Z3Y3k1c1pXNW5kR2hkTzF4dUlDQWdJQ0FnSUNBdkx5QmxMbWN1SUdkdmFXNW5JR1p5YjIwZ1FXSTBJQzArSUVjak0xeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSbGNITXVhVzVrWlhoUFppaHpkR1Z3S1NBK0lHbHVhWFJwWVd4VGRHVndTVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5amRHRjJaU0F0UFNBeE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhaaGNpQnVkVzFpWlhJZ1BTQnpkR1Z3Vkc5T2RXMWlaWEpiYzNSbGNGMDdYRzRnSUNBZ2FXWWdLR0ZzZEdWeUlEMDlQU0F4S1NCN1hHNGdJQ0FnSUNBZ0lHNTFiV0psY2lBclBTQXhPMXh1SUNBZ0lIMWNiaUFnSUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRiV0ZuYVdNdGJuVnRZbVZ5YzF4dUlDQWdJSEpsZEhWeWJpQnVkVzFpWlhJZ0t5QW9LRzlqZEdGMlpTQXJJREVwSUNvZ01USXBPMXh1ZlZ4dVpYaHdiM0owY3k1T2IzUmxUbUZ0WlZSdlRuVnRZbVZ5SUQwZ1RtOTBaVTVoYldWVWIwNTFiV0psY2p0Y2JpSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZ3aVgxOWxjMDF2WkhWc1pWd2lMQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1Wm5WdVkzUnBiMjRnZEc5V1lYSnBZV0pzWlV4bGJtZDBhRlpoYkhWbEtHNTFiU2tnZTF4dUlDQWdJSFpoY2lCaWVYUmxjeUE5SUZ0ZE8xeHVJQ0FnSUdSdklIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdKNWRHVWdQU0J1ZFcwZ0ppQXdlRGRHTzF4dUlDQWdJQ0FnSUNCdWRXMGdQU0J1ZFcwZ1BqNGdOenRjYmlBZ0lDQWdJQ0FnYVdZZ0tHSjVkR1Z6TG14bGJtZDBhQ0ErSURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKNWRHVWdQU0JpZVhSbElDc2dNSGc0TUR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmllWFJsY3k1MWJuTm9hV1owS0dKNWRHVXBPMXh1SUNBZ0lIMGdkMmhwYkdVZ0tHNTFiU0ErSURBcE8xeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1ZXbHVkRGhCY25KaGVTaGllWFJsY3lrN1hHNTlYRzVsZUhCdmNuUnpMblJ2Vm1GeWFXRmliR1ZNWlc1bmRHaFdZV3gxWlNBOUlIUnZWbUZ5YVdGaWJHVk1aVzVuZEdoV1lXeDFaVHRjYmp0Y2JtWjFibU4wYVc5dUlHWnliMjFXWVhKcFlXSnNaVXhsYm1kMGFGWmhiSFZsS0dKMVptWmxjaXdnYzNSaGNuUkpibVJsZUNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0Z5ZEVsdVpHVjRJRDA5UFNCMmIybGtJREFwSUhzZ2MzUmhjblJKYm1SbGVDQTlJREE3SUgxY2JpQWdJQ0IyWVhJZ2RVRnljbUY1SUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvWW5WbVptVnlMQ0J6ZEdGeWRFbHVaR1Y0S1R0Y2JpQWdJQ0IyWVhJZ2RtRnNkV1VnUFNBd08xeHVJQ0FnSUhaaGNpQnBibVJsZUNBOUlDMHhPMXh1SUNBZ0lIWmhjaUJpZVhSbGMxSmxZV1FnUFNBd08xeHVJQ0FnSUdSdklIdGNiaUFnSUNBZ0lDQWdhVzVrWlhnZ0t6MGdNVHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0FvZG1Gc2RXVWdQRHdnTnlrZ0t5QW9kVUZ5Y21GNVcybHVaR1Y0WFNBbUlEQjROMFlwTzF4dUlDQWdJQ0FnSUNCaWVYUmxjMUpsWVdRZ0t6MGdNVHRjYmlBZ0lDQjlJSGRvYVd4bElDaDFRWEp5WVhsYmFXNWtaWGhkSUNZZ01IZzRNQ2s3WEc0Z0lDQWdjbVYwZFhKdUlGdGllWFJsYzFKbFlXUXNJSFpoYkhWbFhUdGNibjFjYm1WNGNHOXlkSE11Wm5KdmJWWmhjbWxoWW14bFRHVnVaM1JvVm1Gc2RXVWdQU0JtY205dFZtRnlhV0ZpYkdWTVpXNW5kR2hXWVd4MVpUdGNianRjYmlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBAdG9kbzogaGFuZGxlIHJlcGVhdHNcbiAqIEB0b2RvOiByZWNvbmNpbGUgZGlmZmVyZW50IGRpdmlzaW9uIGNvdW50c1xuICogIC0gYmV0d2VlbiBzdGFmZnNcbiAqICAtIHdpdGhpbiBhIHN0YWZmXG4gKiAgLSBub3Qgc3VyZSB0aGlzIGV2ZXIgYWN0dWFsbHkgaGFwcGVucywgYnV0IGlzICp0ZWNobmljYWxseSogcG9zc2libGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRNSURJID0gdm9pZCAwO1xudmFyIG1pZGlfdG9vbHNfMSA9IHJlcXVpcmUoXCJAdGhheWVzL21pZGktdG9vbHNcIik7XG52YXIgZ2V0Q2hvcmROb3RlTm9kZXMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgZG9jdW1lbnQgPSBfYS5kb2N1bWVudCwgaXRlbU5vZGUgPSBfYS5pdGVtTm9kZSwgc3RhZmYgPSBfYS5zdGFmZjtcbiAgICB2YXIgc2libGluZ3NJdGVyYXRvciA9IGRvY3VtZW50LmV2YWx1YXRlKFwiZm9sbG93aW5nLXNpYmxpbmc6Om5vdGVbc3RhZmYvdGV4dCgpID0gXFxcIlwiLmNvbmNhdChzdGFmZiwgXCJcXFwiXVwiKSwgaXRlbU5vZGUsIG51bGwsIHdpbmRvdy5YUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfSVRFUkFUT1JfVFlQRSwgbnVsbCk7XG4gICAgdmFyIHNpYmxpbmdzID0gW107XG4gICAgdmFyIG5leHROb3RlTm9kZSA9IHNpYmxpbmdzSXRlcmF0b3IuaXRlcmF0ZU5leHQoKTtcbiAgICB3aGlsZSAobmV4dE5vdGVOb2RlICYmIG5leHROb3RlTm9kZS5xdWVyeVNlbGVjdG9yKFwiY2hvcmRcIikpIHtcbiAgICAgICAgc2libGluZ3MucHVzaChuZXh0Tm90ZU5vZGUpO1xuICAgICAgICBuZXh0Tm90ZU5vZGUgPSBzaWJsaW5nc0l0ZXJhdG9yLml0ZXJhdGVOZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiBzaWJsaW5ncztcbn07XG52YXIgcmVhZE1lYXN1cmVzRnJvbVBhcnQgPSBmdW5jdGlvbiAocGFydE5vZGUsIGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFydE5vZGUucXVlcnlTZWxlY3RvckFsbChcIm1lYXN1cmVcIikpLnJlZHVjZShmdW5jdGlvbiAobWVhc3VyZVJlZHVjdGlvbiwgbWVhc3VyZU5vZGUpIHtcbiAgICAgICAgdmFyIG1lYXN1cmVOdW1iZXIgPSBOdW1iZXIobWVhc3VyZU5vZGUuZ2V0QXR0cmlidXRlKFwibnVtYmVyXCIpKTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXNOb2RlID0gbWVhc3VyZU5vZGUucXVlcnlTZWxlY3RvcihcImF0dHJpYnV0ZXNcIik7XG4gICAgICAgIHZhciB0aW1lU2lnbmF0dXJlO1xuICAgICAgICB2YXIgZGl2aXNpb25zO1xuICAgICAgICB2YXIga2V5U2lnbmF0dXJlO1xuICAgICAgICBpZiAoYXR0cmlidXRlc05vZGUpIHtcbiAgICAgICAgICAgIHZhciBkaXZpc2lvbnNOb2RlID0gYXR0cmlidXRlc05vZGUucXVlcnlTZWxlY3RvcihcImRpdmlzaW9uc1wiKTtcbiAgICAgICAgICAgIGlmIChkaXZpc2lvbnNOb2RlKSB7XG4gICAgICAgICAgICAgICAgZGl2aXNpb25zID0gTnVtYmVyKGRpdmlzaW9uc05vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRpbWVTaWduYXR1cmVOb2RlID0gYXR0cmlidXRlc05vZGUucXVlcnlTZWxlY3RvcihcInRpbWVcIik7XG4gICAgICAgICAgICBpZiAodGltZVNpZ25hdHVyZU5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aW1lU2lnbmF0dXJlID0ge1xuICAgICAgICAgICAgICAgICAgICBudW1lcmF0b3I6IE51bWJlcih0aW1lU2lnbmF0dXJlTm9kZS5xdWVyeVNlbGVjdG9yKFwiYmVhdHNcIikudGV4dENvbnRlbnQpLFxuICAgICAgICAgICAgICAgICAgICBkZW5vbWluYXRvcjogTnVtYmVyKHRpbWVTaWduYXR1cmVOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJiZWF0LXR5cGVcIikudGV4dENvbnRlbnQpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIga2V5U2lnbmF0dXJlTm9kZSA9IGF0dHJpYnV0ZXNOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJrZXlcIik7XG4gICAgICAgICAgICBpZiAoa2V5U2lnbmF0dXJlTm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBtb2RlTm9kZSA9IGtleVNpZ25hdHVyZU5vZGUucXVlcnlTZWxlY3RvcihcIm1vZGVcIik7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGUgPSBcIm1ham9yXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RlU3RyaW5nID0gbW9kZU5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlU3RyaW5nID09PSBcIm1pbm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPSBtb2RlU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtleVNpZ25hdHVyZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBzOiBOdW1iZXIoa2V5U2lnbmF0dXJlTm9kZS5xdWVyeVNlbGVjdG9yKFwiZmlmdGhzXCIpLnRleHRDb250ZW50KSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBicG1Ob2RlID0gbWVhc3VyZU5vZGUucXVlcnlTZWxlY3RvcihcImRpcmVjdGlvbiBtZXRyb25vbWUgPiBwZXItbWludXRlXCIpO1xuICAgICAgICB2YXIgYnBtO1xuICAgICAgICBpZiAoYnBtTm9kZSkge1xuICAgICAgICAgICAgYnBtID0gTnVtYmVyKGJwbU5vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub3RlSXRlcmF0b3IgPSBkb2N1bWVudC5ldmFsdWF0ZShcIi4vL25vdGVbbm90KGNob3JkKV1cIiwgbWVhc3VyZU5vZGUsIG51bGwsIHdpbmRvdy5YUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfSVRFUkFUT1JfVFlQRSwgbnVsbCk7XG4gICAgICAgIHZhciBpdGVtTm9kZSA9IG5vdGVJdGVyYXRvci5pdGVyYXRlTmV4dCgpO1xuICAgICAgICB2YXIgbm90ZXNCeVN0YWZmID0ge307XG4gICAgICAgIHdoaWxlIChpdGVtTm9kZSkge1xuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gTnVtYmVyKGl0ZW1Ob2RlLnF1ZXJ5U2VsZWN0b3IoXCJkdXJhdGlvblwiKS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB2YXIgc3RhZmZOb2RlID0gaXRlbU5vZGUucXVlcnlTZWxlY3RvcihcInN0YWZmXCIpO1xuICAgICAgICAgICAgdmFyIHN0YWZmID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHN0YWZmTm9kZSkge1xuICAgICAgICAgICAgICAgIHN0YWZmID0gTnVtYmVyKHN0YWZmTm9kZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc3RhZmY6IHN0YWZmLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtTm9kZS5xdWVyeVNlbGVjdG9yKFwicmVzdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hvcmROb3RlcyA9IGdldENob3JkTm90ZU5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Ob2RlOiBpdGVtTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWZmOiBzdGFmZixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNob3JkTm90ZXMudW5zaGlmdChpdGVtTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3RlcyA9IGNob3JkTm90ZXMubWFwKGZ1bmN0aW9uIChub3RlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBpdGNoTm9kZSA9IGl0ZW1Ob2RlLnF1ZXJ5U2VsZWN0b3IoXCJwaXRjaFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGVwID0gcGl0Y2hOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJzdGVwXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9jdGF2ZSA9IE51bWJlcihwaXRjaE5vZGUucXVlcnlTZWxlY3RvcihcIm9jdGF2ZVwiKS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0ZXJOb2RlID0gcGl0Y2hOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJhbHRlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaXRjaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBzdGVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9jdGF2ZTogb2N0YXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRlck5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXRjaC5hbHRlciA9IE51bWJlcihhbHRlck5vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pZGlOdW1iZXIgPSAoMCwgbWlkaV90b29sc18xLk5vdGVOYW1lVG9OdW1iZXIpKHBpdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdGNoLk1JRElOdW1iZXIgPSBtaWRpTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpdGNoO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ub3RlcyA9IG5vdGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIShzdGFmZiBpbiBub3Rlc0J5U3RhZmYpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdGVzQnlTdGFmZltzdGFmZl0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm90ZXNCeVN0YWZmW3N0YWZmXS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbU5vZGUgPSBub3RlSXRlcmF0b3IuaXRlcmF0ZU5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtZWFzdXJlUmVkdWN0aW9uW21lYXN1cmVOdW1iZXJdID0ge1xuICAgICAgICAgICAgbnVtYmVyOiBtZWFzdXJlTnVtYmVyLFxuICAgICAgICAgICAgbm90ZXM6IG5vdGVzQnlTdGFmZixcbiAgICAgICAgICAgIGRpdmlzaW9uczogZGl2aXNpb25zLFxuICAgICAgICAgICAgdGltZVNpZ25hdHVyZTogdGltZVNpZ25hdHVyZSxcbiAgICAgICAgICAgIGtleVNpZ25hdHVyZToga2V5U2lnbmF0dXJlLFxuICAgICAgICAgICAgdGVtcG86IGJwbSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG1lYXN1cmVSZWR1Y3Rpb247XG4gICAgfSwge30pO1xufTtcbnZhciByZWFkUGFydHMgPSBmdW5jdGlvbiAocGFydExpc3ROb2RlKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFydExpc3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzY29yZS1wYXJ0XCIpKS5yZWR1Y2UoZnVuY3Rpb24gKHJlZHVjdGlvbiwgcGFydE5vZGUpIHtcbiAgICAgICAgdmFyIGlkID0gcGFydE5vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgIHZhciBuYW1lID0gcGFydE5vZGUucXVlcnlTZWxlY3RvcihcInBhcnQtbmFtZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgdmFyIGluc3RydW1lbnRzID0gQXJyYXkuZnJvbShwYXJ0Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwic2NvcmUtaW5zdHJ1bWVudFwiKSkucmVkdWNlKGZ1bmN0aW9uIChpbnN0cnVtZW50UmVkdWN0aW9uLCBpbnN0cnVtZW50Tm9kZSkge1xuICAgICAgICAgICAgdmFyIGluc3RydW1lbnRJRCA9IGluc3RydW1lbnROb2RlLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgdmFyIGluc3RydW1lbnROYW1lID0gaW5zdHJ1bWVudE5vZGUucXVlcnlTZWxlY3RvcihcImluc3RydW1lbnQtbmFtZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHZhciBtaWRpSW5mbyA9IHt9O1xuICAgICAgICAgICAgdmFyIG1pZGlEZXZpY2VOb2RlID0gcGFydE5vZGUucXVlcnlTZWxlY3RvcihcIm1pZGktZGV2aWNlW2lkPVxcXCJcIi5jb25jYXQoaW5zdHJ1bWVudElELCBcIlxcXCJdXCIpKTtcbiAgICAgICAgICAgIGlmIChtaWRpRGV2aWNlTm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBwb3J0ID0gbWlkaURldmljZU5vZGUuZ2V0QXR0cmlidXRlKFwicG9ydFwiKTtcbiAgICAgICAgICAgICAgICBpZiAocG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBtaWRpSW5mby5wb3J0ID0gTnVtYmVyKHBvcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtaWRpSW5zdHJ1bWVudE5vZGUgPSBwYXJ0Tm9kZS5xdWVyeVNlbGVjdG9yKFwibWlkaS1pbnN0cnVtZW50W2lkPVxcXCJcIi5jb25jYXQoaW5zdHJ1bWVudElELCBcIlxcXCJdXCIpKTtcbiAgICAgICAgICAgIHZhciBjaGFubmVsTm9kZSA9IG1pZGlJbnN0cnVtZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwibWlkaS1jaGFubmVsXCIpO1xuICAgICAgICAgICAgaWYgKGNoYW5uZWxOb2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBjaGFubmVsTm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgICAgICAgICBtaWRpSW5mby5jaGFubmVsID0gTnVtYmVyKGNoYW5uZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9ncmFtTm9kZSA9IG1pZGlJbnN0cnVtZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwibWlkaS1wcm9ncmFtXCIpO1xuICAgICAgICAgICAgaWYgKHByb2dyYW1Ob2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2dyYW0gPSBwcm9ncmFtTm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBtaWRpSW5mby5wcm9ncmFtID0gTnVtYmVyKHByb2dyYW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2b2x1bWVOb2RlID0gbWlkaUluc3RydW1lbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCJ2b2x1bWVcIik7XG4gICAgICAgICAgICBpZiAodm9sdW1lTm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciB2b2x1bWUgPSB2b2x1bWVOb2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmICh2b2x1bWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWlkaUluZm8udm9sdW1lID0gTnVtYmVyKHZvbHVtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhbk5vZGUgPSBtaWRpSW5zdHJ1bWVudE5vZGUucXVlcnlTZWxlY3RvcihcInBhblwiKTtcbiAgICAgICAgICAgIGlmIChwYW5Ob2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhbiA9IHBhbk5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHBhbikge1xuICAgICAgICAgICAgICAgICAgICBtaWRpSW5mby5wYW4gPSBOdW1iZXIocGFuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnN0cnVtZW50UmVkdWN0aW9uW2luc3RydW1lbnRJRF0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGluc3RydW1lbnRJRCxcbiAgICAgICAgICAgICAgICBuYW1lOiBpbnN0cnVtZW50TmFtZSxcbiAgICAgICAgICAgICAgICBtaWRpOiBtaWRpSW5mbyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaW5zdHJ1bWVudFJlZHVjdGlvbjtcbiAgICAgICAgfSwge30pO1xuICAgICAgICB2YXIgcGFydCA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0cnVtZW50czogaW5zdHJ1bWVudHMsXG4gICAgICAgIH07XG4gICAgICAgIHJlZHVjdGlvbltpZF0gPSBwYXJ0O1xuICAgICAgICByZXR1cm4gcmVkdWN0aW9uO1xuICAgIH0sIHt9KTtcbn07XG52YXIgZ2V0TUlESSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZG9jdW1lbnQgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkb2N1bWVudCwgXCJhcHBsaWNhdGlvbi94bWxcIik7XG4gICAgfVxuICAgIHZhciBpc1RpbWV3aXNlO1xuICAgIHZhciByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNjb3JlLXBhcnR3aXNlXCIpO1xuICAgIGlmIChyb290KSB7XG4gICAgICAgIGlzVGltZXdpc2UgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2NvcmUtdGltZXdpc2VcIik7XG4gICAgICAgIGlzVGltZXdpc2UgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgd29ya1RpdGxlTm9kZSA9IHJvb3QucXVlcnlTZWxlY3RvcihcIndvcmsgd29yay10aXRsZVwiKTtcbiAgICB2YXIgdGl0bGU7XG4gICAgaWYgKHdvcmtUaXRsZU5vZGUpIHtcbiAgICAgICAgdGl0bGUgPSB3b3JrVGl0bGVOb2RlLnRleHRDb250ZW50O1xuICAgIH1cbiAgICB2YXIgcGFydExpc3ROb2RlID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwicGFydC1saXN0XCIpO1xuICAgIHZhciBwYXJ0cyA9IHJlYWRQYXJ0cyhwYXJ0TGlzdE5vZGUpO1xuICAgIHZhciBtZWFzdXJlcyA9IEFycmF5LmZyb20ocm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwicGFydFwiKSkucmVkdWNlKGZ1bmN0aW9uIChtZWFzdXJlc1JlZHVjdGlvbiwgcGFydE5vZGUpIHtcbiAgICAgICAgdmFyIHBhcnRJRCA9IHBhcnROb2RlLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICBtZWFzdXJlc1JlZHVjdGlvbltwYXJ0SURdID0gcmVhZE1lYXN1cmVzRnJvbVBhcnQocGFydE5vZGUsIGRvY3VtZW50KTtcbiAgICAgICAgcmV0dXJuIG1lYXN1cmVzUmVkdWN0aW9uO1xuICAgIH0sIHt9KTtcbiAgICB2YXIgZGl2aXNpb25zO1xuICAgIHZhciB0aW1lU2lnbmF0dXJlO1xuICAgIHZhciB0ZW1wbztcbiAgICAvLyBAdG9kbzogaGFuZGxlIGRpdmlzaW9ucyBtb3JlIGludGVsbGlnZW50bHk7IGl0IGlzIHBvc3NpYmxlLCBpbiB0aGVvcnksIGZvclxuICAgIC8vIGRpZmZlcmVudCBtZWFzdXJlcyB0byBoYXZlIGRpZmZlcmVudCBkaXZpc2lvbnMuIFRoaXMgYXNzdW1lcyB0aGUgZmlyc3QgZGl2aXNpb25cbiAgICAvLyBpcyB0aGUgb25seSBvbmUgdXNlZCB0aHJvdWdob3V0IHRoZSBNdXNpY1hNTC5cbiAgICBmb3IgKHZhciBwYXJ0SUQgaW4gbWVhc3VyZXMpIHtcbiAgICAgICAgaWYgKCFtZWFzdXJlcy5oYXNPd25Qcm9wZXJ0eShwYXJ0SUQpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBtZWFzdXJlTnVtYmVyIGluIG1lYXN1cmVzW3BhcnRJRF0pIHtcbiAgICAgICAgICAgIGlmICghbWVhc3VyZXNbcGFydElEXS5oYXNPd25Qcm9wZXJ0eShtZWFzdXJlTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lYXN1cmVzW3BhcnRJRF1bbWVhc3VyZU51bWJlcl0uZGl2aXNpb25zKSB7XG4gICAgICAgICAgICAgICAgZGl2aXNpb25zID0gbWVhc3VyZXNbcGFydElEXVttZWFzdXJlTnVtYmVyXS5kaXZpc2lvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWVhc3VyZXNbcGFydElEXVttZWFzdXJlTnVtYmVyXS50aW1lU2lnbmF0dXJlKSB7XG4gICAgICAgICAgICAgICAgdGltZVNpZ25hdHVyZSA9IG1lYXN1cmVzW3BhcnRJRF1bbWVhc3VyZU51bWJlcl0udGltZVNpZ25hdHVyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZWFzdXJlc1twYXJ0SURdW21lYXN1cmVOdW1iZXJdLnRlbXBvKSB7XG4gICAgICAgICAgICAgICAgdGVtcG8gPSBtZWFzdXJlc1twYXJ0SURdW21lYXN1cmVOdW1iZXJdLnRlbXBvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXZpc2lvbnMgJiYgdGltZVNpZ25hdHVyZSAmJiB0ZW1wbykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGZpbGUgPSBuZXcgbWlkaV90b29sc18xLk1JRElGaWxlKHtcbiAgICAgICAgZGl2aXNpb25zOiBkaXZpc2lvbnMsXG4gICAgfSk7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGZpbGUuc2V0VGl0bGUodGl0bGUpO1xuICAgIH1cbiAgICB2YXIgY2hhbm5lbHNCeVBhcnRzID0ge307XG4gICAgT2JqZWN0LmtleXMocGFydHMpLmZvckVhY2goZnVuY3Rpb24gKHBhcnRJRCkgeyByZXR1cm4gT2JqZWN0LmtleXMocGFydHNbcGFydElEXS5pbnN0cnVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAoaW5zdHJ1bWVudElEKSB7XG4gICAgICAgIHZhciBpbnN0cnVtZW50ID0gcGFydHNbcGFydElEXS5pbnN0cnVtZW50c1tpbnN0cnVtZW50SURdO1xuICAgICAgICBpZiAoaW5zdHJ1bWVudC5taWRpLnByb2dyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaGFubmVsID0gaW5zdHJ1bWVudC5taWRpLmNoYW5uZWw7XG4gICAgICAgIGlmIChjaGFubmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoYW5uZWwgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0b2RvOiBoYW5kbGUgY2hhbm5lbCBjaGFuZ2VzIG9uIGluZGl2aWR1YWwgcGFydHMgKGRvZXMgdGhhdCBldmVyIGhhcHBlbj8pXG4gICAgICAgIGNoYW5uZWxzQnlQYXJ0c1twYXJ0SURdID0gY2hhbm5lbDtcbiAgICAgICAgZmlsZS5wcm9ncmFtQ2hhbmdlKHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIHByb2dyYW06IGluc3RydW1lbnQubWlkaS5wcm9ncmFtLFxuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0ZW1wbykge1xuICAgICAgICAgICAgZmlsZS5zZXRUZW1wbyh0ZW1wbyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVTaWduYXR1cmUpIHtcbiAgICAgICAgICAgIGZpbGUudGltZVNpZ25hdHVyZSh0aW1lU2lnbmF0dXJlKTtcbiAgICAgICAgfVxuICAgIH0pOyB9KTtcbiAgICB2YXIgb2Zmc2V0QnlTdGFmZiA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG1lYXN1cmVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0SUQpIHtcbiAgICAgICAgdmFyIG1lYXN1cmVQYXJ0ID0gbWVhc3VyZXNbcGFydElEXTtcbiAgICAgICAgT2JqZWN0LmtleXMobWVhc3VyZVBhcnQpLmZvckVhY2goZnVuY3Rpb24gKG1lYXN1cmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBub3Rlc0J5U3RhZmYgPSBtZWFzdXJlUGFydFttZWFzdXJlTnVtYmVyXS5ub3RlcztcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5vdGVzQnlTdGFmZikuZm9yRWFjaChmdW5jdGlvbiAoc3RhZmZOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBub3Rlc0J5U3RhZmZbc3RhZmZOdW1iZXJdLmZvckVhY2goZnVuY3Rpb24gKG5vdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEobm90ZS5zdGFmZiBpbiBvZmZzZXRCeVN0YWZmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0QnlTdGFmZltub3RlLnN0YWZmXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm90ZS5ub3Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzID0gbm90ZS5ub3RlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm90ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzLmZvckVhY2goZnVuY3Rpb24gKHBpdGNoKSB7IHJldHVybiBmaWxlLm5vdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGU6IHBpdGNoLk1JRElOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IG5vdGUuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbHNCeVBhcnRzW3BhcnRJRF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXRCeVN0YWZmW25vdGUuc3RhZmZdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrOiBub3RlLnN0YWZmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhZmY6IG5vdGUuc3RhZmYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVOdW1iZXI6IG1lYXN1cmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRCeVN0YWZmW25vdGUuc3RhZmZdICs9IG5vdGUuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbGUudG9BcnJheUJ1ZmZlcigpO1xufTtcbmV4cG9ydHMuZ2V0TUlESSA9IGdldE1JREk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldE1JREkgPSB2b2lkIDA7XG52YXIgWE1MVG9NSURJXzEgPSByZXF1aXJlKFwiLi9YTUxUb01JRElcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRNSURJXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBYTUxUb01JRElfMS5nZXRNSURJOyB9IH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9