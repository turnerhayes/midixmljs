(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MIDITools"] = factory();
	else
		root["MIDITools"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


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
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Events = __importStar(__webpack_require__(/*! ./MIDIEvents */ "./src/MIDIReader/MIDIEvents/index.ts"));
var MIDIMetaEventCreator_1 = __webpack_require__(/*! ./MIDIMetaEventCreator */ "./src/MIDIReader/MIDIMetaEventCreator.ts");
var variable_length_value_1 = __webpack_require__(/*! ../utils/variable-length-value */ "./src/utils/variable-length-value.ts");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SequenceNumber_1 = __webpack_require__(/*! ./SequenceNumber */ "./src/MIDIReader/MIDIEvents/Meta/SequenceNumber.ts");
exports.SequenceNumberEvent = SequenceNumber_1.SequenceNumberEvent;
var TimeSignature_1 = __webpack_require__(/*! ./TimeSignature */ "./src/MIDIReader/MIDIEvents/Meta/TimeSignature.ts");
exports.TimeSignatureEvent = TimeSignature_1.TimeSignatureEvent;
var KeySignature_1 = __webpack_require__(/*! ./KeySignature */ "./src/MIDIReader/MIDIEvents/Meta/KeySignature.ts");
exports.KeySignatureEvent = KeySignature_1.KeySignatureEvent;
var SetTempo_1 = __webpack_require__(/*! ./SetTempo */ "./src/MIDIReader/MIDIEvents/Meta/SetTempo.ts");
exports.SetTempoEvent = SetTempo_1.SetTempoEvent;
var PortPrefix_1 = __webpack_require__(/*! ./PortPrefix */ "./src/MIDIReader/MIDIEvents/Meta/PortPrefix.ts");
exports.PortPrefixEvent = PortPrefix_1.PortPrefixEvent;
var ChannelPrefix_1 = __webpack_require__(/*! ./ChannelPrefix */ "./src/MIDIReader/MIDIEvents/Meta/ChannelPrefix.ts");
exports.ChannelPrefixEvent = ChannelPrefix_1.ChannelPrefixEvent;
var Copyright_1 = __webpack_require__(/*! ./Copyright */ "./src/MIDIReader/MIDIEvents/Meta/Copyright.ts");
exports.CopyrightEvent = Copyright_1.CopyrightEvent;
var TrackName_1 = __webpack_require__(/*! ./TrackName */ "./src/MIDIReader/MIDIEvents/Meta/TrackName.ts");
exports.TrackNameEvent = TrackName_1.TrackNameEvent;
var Text_1 = __webpack_require__(/*! ./Text */ "./src/MIDIReader/MIDIEvents/Meta/Text.ts");
exports.TextEvent = Text_1.TextEvent;
var InstrumentName_1 = __webpack_require__(/*! ./InstrumentName */ "./src/MIDIReader/MIDIEvents/Meta/InstrumentName.ts");
exports.InstrumentNameEvent = InstrumentName_1.InstrumentNameEvent;
var Lyric_1 = __webpack_require__(/*! ./Lyric */ "./src/MIDIReader/MIDIEvents/Meta/Lyric.ts");
exports.LyricEvent = Lyric_1.LyricEvent;
var Marker_1 = __webpack_require__(/*! ./Marker */ "./src/MIDIReader/MIDIEvents/Meta/Marker.ts");
exports.MarkerEvent = Marker_1.MarkerEvent;
var CuePoint_1 = __webpack_require__(/*! ./CuePoint */ "./src/MIDIReader/MIDIEvents/Meta/CuePoint.ts");
exports.CuePointEvent = CuePoint_1.CuePointEvent;
var SMPTEOffset_1 = __webpack_require__(/*! ./SMPTEOffset */ "./src/MIDIReader/MIDIEvents/Meta/SMPTEOffset.ts");
exports.SMPTEOffsetEvent = SMPTEOffset_1.SMPTEOffsetEvent;
var SequencerSpecific_1 = __webpack_require__(/*! ./SequencerSpecific */ "./src/MIDIReader/MIDIEvents/Meta/SequencerSpecific.ts");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoteOff_1 = __webpack_require__(/*! ./NoteOff */ "./src/MIDIReader/MIDIEvents/NoteOff.ts");
exports.NoteOffEvent = NoteOff_1.NoteOffEvent;
var NoteOn_1 = __webpack_require__(/*! ./NoteOn */ "./src/MIDIReader/MIDIEvents/NoteOn.ts");
exports.NoteOnEvent = NoteOn_1.NoteOnEvent;
var ProgramChange_1 = __webpack_require__(/*! ./ProgramChange */ "./src/MIDIReader/MIDIEvents/ProgramChange.ts");
exports.ProgramChangeEvent = ProgramChange_1.ProgramChangeEvent;
var ControllerChange_1 = __webpack_require__(/*! ./ControllerChange */ "./src/MIDIReader/MIDIEvents/ControllerChange.ts");
exports.ControllerChangeEvent = ControllerChange_1.ControllerChangeEvent;
var PolyphonicAftertouch_1 = __webpack_require__(/*! ./PolyphonicAftertouch */ "./src/MIDIReader/MIDIEvents/PolyphonicAftertouch.ts");
exports.PolyphonicAftertouchEvent = PolyphonicAftertouch_1.PolyphonicAftertouchEvent;
var ChannelAftertouch_1 = __webpack_require__(/*! ./ChannelAftertouch */ "./src/MIDIReader/MIDIEvents/ChannelAftertouch.ts");
exports.ChannelAftertouchEvent = ChannelAftertouch_1.ChannelAftertouchEvent;
var PitchBend_1 = __webpack_require__(/*! ./PitchBend */ "./src/MIDIReader/MIDIEvents/PitchBend.ts");
exports.PitchBendEvent = PitchBend_1.PitchBendEvent;
var SysEx_1 = __webpack_require__(/*! ./SysEx */ "./src/MIDIReader/MIDIEvents/SysEx.ts");
exports.SysExEvent = SysEx_1.SysExEvent;
var Meta_1 = __webpack_require__(/*! ./Meta */ "./src/MIDIReader/MIDIEvents/Meta/index.ts");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIEvents_1 = __webpack_require__(/*! ./MIDIEvents */ "./src/MIDIReader/MIDIEvents/index.ts");
var buffer_to_string_1 = __webpack_require__(/*! ../utils/buffer-to-string */ "./src/utils/buffer-to-string.ts");
var variable_length_value_1 = __webpack_require__(/*! ../utils/variable-length-value */ "./src/utils/variable-length-value.ts");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIEvents_1 = __webpack_require__(/*! ./MIDIEvents */ "./src/MIDIReader/MIDIEvents/index.ts");
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
var MIDIFileType_1 = __webpack_require__(/*! ./MIDIFileType */ "./src/MIDIReader/MIDIFileType.ts");
exports.MIDIFileType = MIDIFileType_1.MIDIFileType;
var MIDIParseError_1 = __webpack_require__(/*! ./MIDIParseError */ "./src/MIDIReader/MIDIParseError.ts");
exports.MIDIParseError = MIDIParseError_1.MIDIParseError;
var midi_reader_1 = __webpack_require__(/*! ./midi-reader */ "./src/MIDIReader/midi-reader.ts");
exports.MIDIReader = midi_reader_1.MIDIReader;


/***/ }),

/***/ "./src/MIDIReader/midi-reader.ts":
/*!***************************************!*\
  !*** ./src/MIDIReader/midi-reader.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var MIDIFileType_1 = __webpack_require__(/*! ./MIDIFileType */ "./src/MIDIReader/MIDIFileType.ts");
var MIDIParseError_1 = __webpack_require__(/*! ./MIDIParseError */ "./src/MIDIReader/MIDIParseError.ts");
var MIDIEventCreator_1 = __webpack_require__(/*! ./MIDIEventCreator */ "./src/MIDIReader/MIDIEventCreator.ts");
var variable_length_value_1 = __webpack_require__(/*! ../utils/variable-length-value */ "./src/utils/variable-length-value.ts");
var buffer_to_string_1 = __webpack_require__(/*! ../utils/buffer-to-string */ "./src/utils/buffer-to-string.ts");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/MIDIWriter/MIDIFile.ts":
/*!************************************!*\
  !*** ./src/MIDIWriter/MIDIFile.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var debug_1 = __importDefault(__webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js"));
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIFile_1 = __webpack_require__(/*! ./MIDIFile */ "./src/MIDIWriter/MIDIFile.ts");
exports.MIDIFile = MIDIFile_1.MIDIFile;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIDIWriter_1 = __webpack_require__(/*! ./MIDIWriter */ "./src/MIDIWriter/index.ts");
exports.MIDIFile = MIDIWriter_1.MIDIFile;
var MIDIReader_1 = __webpack_require__(/*! ./MIDIReader */ "./src/MIDIReader/index.ts");
exports.MIDIEvents = MIDIReader_1.MIDIEvents;
exports.MIDIFileType = MIDIReader_1.MIDIFileType;
exports.MIDIParseError = MIDIReader_1.MIDIParseError;
exports.MIDIReader = MIDIReader_1.MIDIReader;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buffer_to_string_1 = __webpack_require__(/*! ./buffer-to-string */ "./src/utils/buffer-to-string.ts");
exports.bufferToString = buffer_to_string_1.bufferToString;
var variable_length_value_1 = __webpack_require__(/*! ./variable-length-value */ "./src/utils/variable-length-value.ts");
exports.fromVariableLengthValue = variable_length_value_1.fromVariableLengthValue;
exports.toVariableLengthValue = variable_length_value_1.toVariableLengthValue;
var midi_note_converter_1 = __webpack_require__(/*! ./midi-note-converter */ "./src/utils/midi-note-converter.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NSURJVG9vbHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL01JRElUb29scy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL01JRElUb29scy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50Q3JlYXRvci50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL0NoYW5uZWxBZnRlcnRvdWNoLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvQ29udHJvbGxlckNoYW5nZS50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ2hhbm5lbFByZWZpeC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvQ29weXJpZ2h0LnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9DdWVQb2ludC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvSW5zdHJ1bWVudE5hbWUudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL0tleVNpZ25hdHVyZS50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvTHlyaWMudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL01hcmtlci50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvUG9ydFByZWZpeC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU01QVEVPZmZzZXQudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1NlcXVlbmNlTnVtYmVyLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTWV0YS9TZXF1ZW5jZXJTcGVjaWZpYy50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvU2V0VGVtcG8udHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RleHQudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RpbWVTaWduYXR1cmUudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9NZXRhL1RyYWNrTmFtZS50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRXZlbnRzL01ldGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Ob3RlT2ZmLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvTm90ZU9uLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvUGl0Y2hCZW5kLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvUG9seXBob25pY0FmdGVydG91Y2gudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9Qcm9ncmFtQ2hhbmdlLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy9NSURJUmVhZGVyL01JRElFdmVudHMvU3lzRXgudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESUV2ZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvTUlESVJlYWRlci9NSURJRmlsZVR5cGUudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESU1ldGFFdmVudENyZWF0b3IudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvTUlESVBhcnNlRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElSZWFkZXIvbWlkaS1yZWFkZXIudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElXcml0ZXIvTUlESUZpbGUudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL01JRElXcml0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy91dGlscy9idWZmZXItdG8tc3RyaW5nLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvdXRpbHMvbWlkaS1ub3RlLWNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9zcmMvdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLG9EQUFXO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyxnREFBUztBQUMvQixjQUFjLG1CQUFPLENBQUMsZ0RBQVM7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzV2REE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsb0RBQVU7O0FBRW5DLE9BQU8sV0FBVzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdFFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsc0NBQUk7O0FBRXBDO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDelFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLFFBQVEsVUFBVTs7QUFFbEI7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkZBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaktBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7O0FBRUE7QUFD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Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNkYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDWGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDYmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztB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QSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWlkaS10b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1JRElUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNSURJVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0Ly8gVGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcblx0Ly8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcblx0cmV0dXJuIHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0JyAmJlxuXHRcdGNvbnNvbGUubG9nICYmXG5cdFx0Y29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMgPSBbXTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0Ly8gRGVidWcuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5cdFx0Ly8gZGVidWcucmF3TG9nID0gcmF3TG9nO1xuXG5cdFx0Ly8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY3JlYXRlRGVidWcuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcblx0XHRcdGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwtP1xcZD9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vTUlESUV2ZW50c1wiKSk7XG52YXIgTUlESU1ldGFFdmVudENyZWF0b3JfMSA9IHJlcXVpcmUoXCIuL01JRElNZXRhRXZlbnRDcmVhdG9yXCIpO1xudmFyIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhcmlhYmxlLWxlbmd0aC12YWx1ZVwiKTtcbnZhciBjcmVhdGVOb3RlT2ZmRXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIGNoYW5uZWwgPSAoc3RhdHVzQnl0ZSAmIDB4RikgKyAxO1xuICAgIHZhciBub3RlTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCk7XG4gICAgdmFyIHJlbGVhc2UgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4ICsgMSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgMixcbiAgICAgICAgbmV3IEV2ZW50cy5Ob3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IG5vdGVOdW1iZXIsXG4gICAgICAgICAgICByZWxlYXNlOiByZWxlYXNlLFxuICAgICAgICB9KVxuICAgIF07XG59O1xudmFyIGNyZWF0ZU5vdGVPbkV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgbm90ZU51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHZhciB2ZWxvY2l0eSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXggKyAxKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAyLFxuICAgICAgICBuZXcgRXZlbnRzLk5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiBub3RlTnVtYmVyLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5LFxuICAgICAgICB9KVxuICAgIF07XG59O1xudmFyIGNyZWF0ZVN5c2V4RXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIF9hID0gdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgc3RhcnRJbmRleCksIGJ5dGVzUmVhZCA9IF9hWzBdLCBkYXRhTGVuZ3RoID0gX2FbMV07XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYnl0ZXNSZWFkICsgZGF0YUxlbmd0aCxcbiAgICAgICAgbmV3IEV2ZW50cy5TeXNFeEV2ZW50KHtcbiAgICAgICAgICAgIGV2ZW50RGF0YTogbmV3IFVpbnQ4QXJyYXkoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgc3RhcnRJbmRleCwgZGF0YUxlbmd0aCksXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlUHJvZ3JhbUNoYW5nZUV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgcHJvZ3JhbU51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHJldHVybiBbXG4gICAgICAgIDEsXG4gICAgICAgIG5ldyBFdmVudHMuUHJvZ3JhbUNoYW5nZUV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICBwcm9ncmFtTnVtYmVyOiBwcm9ncmFtTnVtYmVyLFxuICAgICAgICB9KVxuICAgIF07XG59O1xudmFyIGNyZWF0ZUNvbnRyb2xsZXJDaGFuZ2VFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cbiAgICB2YXIgY2hhbm5lbCA9IChzdGF0dXNCeXRlICYgMHhGKSArIDE7XG4gICAgdmFyIGNvbnRyb2xsZXJOdW1iZXIgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4KTtcbiAgICB2YXIgY29udHJvbGxlclZhbHVlID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCArIDEpO1xuICAgIHJldHVybiBbXG4gICAgICAgIDIsXG4gICAgICAgIG5ldyBFdmVudHMuQ29udHJvbGxlckNoYW5nZUV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICBjb250cm9sbGVyTnVtYmVyOiBjb250cm9sbGVyTnVtYmVyLFxuICAgICAgICAgICAgY29udHJvbGxlclZhbHVlOiBjb250cm9sbGVyVmFsdWUsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlUG9seXBob25pY0FmdGVydG91Y2hFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgbm90ZU51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHZhciBwcmVzc3VyZSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXggKyAxKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAyLFxuICAgICAgICBuZXcgRXZlbnRzLlBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IG5vdGVOdW1iZXIsXG4gICAgICAgICAgICBwcmVzc3VyZTogcHJlc3N1cmUsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlQ2hhbm5lbEFmdGVydG91Y2hFdmVudEZyb21CeXRlcyA9IGZ1bmN0aW9uIChzdGF0dXNCeXRlLCBkYXRhVmlldywgc3RhcnRJbmRleCkge1xuICAgIHZhciBjaGFubmVsID0gKHN0YXR1c0J5dGUgJiAweEYpICsgMTtcbiAgICB2YXIgcHJlc3N1cmUgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4ICsgMSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgMSxcbiAgICAgICAgbmV3IEV2ZW50cy5DaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICBwcmVzc3VyZTogcHJlc3N1cmUsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgY3JlYXRlUGl0Y2hCZW5kRXZlbnRGcm9tQnl0ZXMgPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgY2hhbm5lbCA9IChzdGF0dXNCeXRlICYgMHhGKSArIDE7XG4gICAgdmFyIGxlYXN0U2lnbmlmaWNhbnRCeXRlID0gZGF0YVZpZXcuZ2V0VWludDgoc3RhcnRJbmRleCk7XG4gICAgdmFyIG1vc3RTaWduaWZpY2FudEJ5dGUgPSBkYXRhVmlldy5nZXRVaW50OChzdGFydEluZGV4ICsgMSk7XG4gICAgdmFyIHZhbHVlID0gKChtb3N0U2lnbmlmaWNhbnRCeXRlICYgMHg3RikgPDwgNykgKyAobGVhc3RTaWduaWZpY2FudEJ5dGUgJiAweDdGKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAyLFxuICAgICAgICBuZXcgRXZlbnRzLlBpdGNoQmVuZEV2ZW50KHtcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgXTtcbn07XG52YXIgZ2V0Q3JlYXRlRnVuY3Rpb24gPSBmdW5jdGlvbiAoc3RhdHVzQnl0ZSkge1xuICAgIGlmIChzdGF0dXNCeXRlID4+IDQgPT09IDB4OCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTm90ZU9mZkV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweDkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vdGVPbkV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweEEpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnRGcm9tQnl0ZXM7XG4gICAgfVxuICAgIGlmIChzdGF0dXNCeXRlID4+IDQgPT09IDB4Qikge1xuICAgICAgICByZXR1cm4gY3JlYXRlQ29udHJvbGxlckNoYW5nZUV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweEMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVByb2dyYW1DaGFuZ2VFdmVudEZyb21CeXRlcztcbiAgICB9XG4gICAgaWYgKHN0YXR1c0J5dGUgPj4gNCA9PT0gMHhEKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA+PiA0ID09PSAweEUpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBpdGNoQmVuZEV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzQnl0ZSA9PT0gMHhGMCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlU3lzZXhFdmVudEZyb21CeXRlcztcbiAgICB9XG4gICAgaWYgKHN0YXR1c0J5dGUgPT09IDB4RkYpIHtcbiAgICAgICAgcmV0dXJuIE1JRElNZXRhRXZlbnRDcmVhdG9yXzEuY3JlYXRlTWV0YUV2ZW50RnJvbUJ5dGVzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnRzLmV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKGRhdGFWaWV3LCBzdGFydEluZGV4LCBwcmV2aW91c1N0YXR1c0J5dGUpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgaWYgKHByZXZpb3VzU3RhdHVzQnl0ZSA9PT0gdm9pZCAwKSB7IHByZXZpb3VzU3RhdHVzQnl0ZSA9IG51bGw7IH1cbiAgICB2YXIgc3RhdHVzQnl0ZSA9IGRhdGFWaWV3LmdldFVpbnQ4KHN0YXJ0SW5kZXgpO1xuICAgIHZhciBjcmVhdGVGdW5jdGlvbiA9IGdldENyZWF0ZUZ1bmN0aW9uKHN0YXR1c0J5dGUpO1xuICAgIHZhciBieXRlc1JlYWQgPSAwO1xuICAgIGlmIChjcmVhdGVGdW5jdGlvbiA9PT0gbnVsbCAmJiBwcmV2aW91c1N0YXR1c0J5dGUgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdHVzQnl0ZSA9IHByZXZpb3VzU3RhdHVzQnl0ZTtcbiAgICAgICAgY3JlYXRlRnVuY3Rpb24gPSBnZXRDcmVhdGVGdW5jdGlvbihzdGF0dXNCeXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFRoZSBieXRlIGF0IHN0YXJ0SW5kZXggd2FzIHRoZSBzdGF0dXMgYnl0ZSwgc28gc2tpcCBpdCBpbiB0aGUgZGF0YVxuICAgICAgICBzdGFydEluZGV4ICs9IDE7XG4gICAgICAgIGJ5dGVzUmVhZCArPSAxO1xuICAgIH1cbiAgICBpZiAoY3JlYXRlRnVuY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgdmFyIF9hID0gY3JlYXRlRnVuY3Rpb24oc3RhdHVzQnl0ZSwgZGF0YVZpZXcsIHN0YXJ0SW5kZXgpLCBldmVudEJ5dGVzUmVhZCA9IF9hWzBdLCBldmVudF8xID0gX2FbMV07XG4gICAgICAgIGJ5dGVzUmVhZCArPSBldmVudEJ5dGVzUmVhZDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ5dGVzUmVhZDogYnl0ZXNSZWFkLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XzEsXG4gICAgICAgICAgICBzdGF0dXNCeXRlOiBzdGF0dXNCeXRlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYW5uZWxBZnRlcnRvdWNoRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBwcmVzc3VyZSA9IF9hLnByZXNzdXJlO1xuICAgICAgICB0aGlzLnR5cGUgPSAzMiAvKiBDaGFubmVsQWZ0ZXJ0b3VjaCAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgIH1cbiAgICByZXR1cm4gQ2hhbm5lbEFmdGVydG91Y2hFdmVudDtcbn0oKSk7XG5leHBvcnRzLkNoYW5uZWxBZnRlcnRvdWNoRXZlbnQgPSBDaGFubmVsQWZ0ZXJ0b3VjaEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ29udHJvbGxlckNoYW5nZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChfYSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IF9hLmNoYW5uZWwsIGNvbnRyb2xsZXJOdW1iZXIgPSBfYS5jb250cm9sbGVyTnVtYmVyLCBjb250cm9sbGVyVmFsdWUgPSBfYS5jb250cm9sbGVyVmFsdWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDggLyogQ29udHJvbGxlckNoYW5nZSAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyTnVtYmVyID0gY29udHJvbGxlck51bWJlcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyVmFsdWUgPSBjb250cm9sbGVyVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBDb250cm9sbGVyQ2hhbmdlRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5Db250cm9sbGVyQ2hhbmdlRXZlbnQgPSBDb250cm9sbGVyQ2hhbmdlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDaGFubmVsUHJlZml4RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbFByZWZpeEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjaGFubmVsTnVtYmVyID0gX2EuY2hhbm5lbE51bWJlcjtcbiAgICAgICAgdGhpcy50eXBlID0gMTAyNCAvKiBNZXRhQ2hhbm5lbFByZWZpeCAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsTnVtYmVyID0gY2hhbm5lbE51bWJlcjtcbiAgICB9XG4gICAgcmV0dXJuIENoYW5uZWxQcmVmaXhFdmVudDtcbn0oKSk7XG5leHBvcnRzLkNoYW5uZWxQcmVmaXhFdmVudCA9IENoYW5uZWxQcmVmaXhFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvcHlyaWdodEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjb3B5cmlnaHQgPSBfYS5jb3B5cmlnaHQ7XG4gICAgICAgIHRoaXMudHlwZSA9IDQwOTYgLyogTWV0YUNvcHlyaWdodCAqLztcbiAgICAgICAgdGhpcy5jb3B5cmlnaHQgPSBjb3B5cmlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBDb3B5cmlnaHRFdmVudDtcbn0oKSk7XG5leHBvcnRzLkNvcHlyaWdodEV2ZW50ID0gQ29weXJpZ2h0RXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDdWVQb2ludEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGN1ZVRleHQgPSBfYS5jdWVUZXh0O1xuICAgICAgICB0aGlzLnR5cGUgPSA0MTk0MzA0IC8qIE1ldGFDdWVQb2ludCAqLztcbiAgICAgICAgdGhpcy5jdWVUZXh0ID0gY3VlVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIEN1ZVBvaW50RXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5DdWVQb2ludEV2ZW50ID0gQ3VlUG9pbnRFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5zdHJ1bWVudE5hbWVFdmVudChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDY1NTM2IC8qIE1ldGFJbnN0cnVtZW50TmFtZSAqLztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIEluc3RydW1lbnROYW1lRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5JbnN0cnVtZW50TmFtZUV2ZW50ID0gSW5zdHJ1bWVudE5hbWVFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtleVNpZ25hdHVyZUV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBzaGFycHMgPSBfYS5zaGFycHMsIGlzTWFqb3IgPSBfYS5pc01ham9yO1xuICAgICAgICB0aGlzLnR5cGUgPSA1MjQyODggLyogTWV0YUtleVNpZ25hdHVyZSAqLztcbiAgICAgICAgdGhpcy5zaGFycHMgPSBzaGFycHM7XG4gICAgICAgIHRoaXMuaXNNYWpvciA9IGlzTWFqb3I7XG4gICAgfVxuICAgIHJldHVybiBLZXlTaWduYXR1cmVFdmVudDtcbn0oKSk7XG5leHBvcnRzLktleVNpZ25hdHVyZUV2ZW50ID0gS2V5U2lnbmF0dXJlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMeXJpY0V2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEx5cmljRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGx5cmljID0gX2EubHlyaWM7XG4gICAgICAgIHRoaXMudHlwZSA9IDI2MjE0NCAvKiBNZXRhTHlyaWMgKi87XG4gICAgICAgIHRoaXMubHlyaWMgPSBseXJpYztcbiAgICB9XG4gICAgcmV0dXJuIEx5cmljRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5MeXJpY0V2ZW50ID0gTHlyaWNFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1hcmtlckV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcmtlckV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBtYXJrZXIgPSBfYS5tYXJrZXI7XG4gICAgICAgIHRoaXMudHlwZSA9IDEwNDg1NzYgLyogTWV0YU1hcmtlciAqLztcbiAgICAgICAgdGhpcy5tYXJrZXIgPSBtYXJrZXI7XG4gICAgfVxuICAgIHJldHVybiBNYXJrZXJFdmVudDtcbn0oKSk7XG5leHBvcnRzLk1hcmtlckV2ZW50ID0gTWFya2VyRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQb3J0UHJlZml4RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9ydFByZWZpeEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBwb3J0TnVtYmVyID0gX2EucG9ydE51bWJlcjtcbiAgICAgICAgdGhpcy50eXBlID0gNTEyIC8qIE1ldGFQb3J0UHJlZml4ICovO1xuICAgICAgICB0aGlzLnBvcnROdW1iZXIgPSBwb3J0TnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gUG9ydFByZWZpeEV2ZW50O1xufSgpKTtcbmV4cG9ydHMuUG9ydFByZWZpeEV2ZW50ID0gUG9ydFByZWZpeEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU01QVEVPZmZzZXRFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTTVBURU9mZnNldEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBob3VycyA9IF9hLmhvdXJzLCBtaW51dGVzID0gX2EubWludXRlcywgc2Vjb25kcyA9IF9hLnNlY29uZHMsIGZyYW1lcyA9IF9hLmZyYW1lcywgZnJhY3Rpb25hbEZyYW1lcyA9IF9hLmZyYWN0aW9uYWxGcmFtZXM7XG4gICAgICAgIHRoaXMudHlwZSA9IDMyNzY4IC8qIE1ldGFTTVBURU9mZnNldCAqLztcbiAgICAgICAgdGhpcy5ob3VycyA9IGhvdXJzO1xuICAgICAgICB0aGlzLm1pbnV0ZXMgPSBtaW51dGVzO1xuICAgICAgICB0aGlzLnNlY29uZHMgPSBzZWNvbmRzO1xuICAgICAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICAgICAgdGhpcy5mcmFjdGlvbmFsRnJhbWVzID0gZnJhY3Rpb25hbEZyYW1lcztcbiAgICB9XG4gICAgcmV0dXJuIFNNUFRFT2Zmc2V0RXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5TTVBURU9mZnNldEV2ZW50ID0gU01QVEVPZmZzZXRFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNlcXVlbmNlTnVtYmVyRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VxdWVuY2VOdW1iZXJFdmVudChfYSkge1xuICAgICAgICB2YXIgc2VxdWVuY2VOdW1iZXIgPSBfYS5zZXF1ZW5jZU51bWJlcjtcbiAgICAgICAgdGhpcy50eXBlID0gMjU2IC8qIE1ldGFTZXF1ZW5jZU51bWJlciAqLztcbiAgICAgICAgdGhpcy5zZXF1ZW5jZU51bWJlciA9IHNlcXVlbmNlTnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gU2VxdWVuY2VOdW1iZXJFdmVudDtcbn0oKSk7XG5leHBvcnRzLlNlcXVlbmNlTnVtYmVyRXZlbnQgPSBTZXF1ZW5jZU51bWJlckV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2VxdWVuY2VyU3BlY2lmaWNFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZXF1ZW5jZXJTcGVjaWZpY0V2ZW50KF9hKSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkLCBkYXRhID0gX2EuZGF0YTtcbiAgICAgICAgdGhpcy50eXBlID0gMjA5NzE1MiAvKiBNZXRhU2VxdWVuY2VyU3BlY2lmaWMgKi87XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIFNlcXVlbmNlclNwZWNpZmljRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5TZXF1ZW5jZXJTcGVjaWZpY0V2ZW50ID0gU2VxdWVuY2VyU3BlY2lmaWNFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNldFRlbXBvRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0VGVtcG9FdmVudChfYSkge1xuICAgICAgICB2YXIgbWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGUgPSBfYS5taWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZTtcbiAgICAgICAgdGhpcy50eXBlID0gODE5MiAvKiBNZXRhU2V0VGVtcG8gKi87XG4gICAgICAgIHRoaXMubWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGUgPSBtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZTtcbiAgICB9XG4gICAgcmV0dXJuIFNldFRlbXBvRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5TZXRUZW1wb0V2ZW50ID0gU2V0VGVtcG9FdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFRleHRFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUZXh0RXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIHRleHQgPSBfYS50ZXh0O1xuICAgICAgICB0aGlzLnR5cGUgPSAyMDQ4IC8qIE1ldGFUZXh0ICovO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gVGV4dEV2ZW50O1xufSgpKTtcbmV4cG9ydHMuVGV4dEV2ZW50ID0gVGV4dEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVGltZVNpZ25hdHVyZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVTaWduYXR1cmVFdmVudChfYSkge1xuICAgICAgICB2YXIgbnVtZXJhdG9yID0gX2EubnVtZXJhdG9yLCBkZW5vbWluYXRvciA9IF9hLmRlbm9taW5hdG9yLCBjbG9ja3NQZXJUaWNrID0gX2EuY2xvY2tzUGVyVGljaywgdGhpcnR5U2Vjb25kTm90ZXMgPSBfYS50aGlydHlTZWNvbmROb3RlcztcbiAgICAgICAgdGhpcy50eXBlID0gMTMxMDcyIC8qIE1ldGFUaW1lU2lnbmF0dXJlICovO1xuICAgICAgICB0aGlzLm51bWVyYXRvciA9IG51bWVyYXRvcjtcbiAgICAgICAgdGhpcy5kZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgICB0aGlzLmNsb2Nrc1BlclRpY2sgPSBjbG9ja3NQZXJUaWNrO1xuICAgICAgICB0aGlzLnRoaXJ0eVNlY29uZE5vdGVzID0gdGhpcnR5U2Vjb25kTm90ZXM7XG4gICAgfVxuICAgIHJldHVybiBUaW1lU2lnbmF0dXJlRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5UaW1lU2lnbmF0dXJlRXZlbnQgPSBUaW1lU2lnbmF0dXJlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUcmFja05hbWVFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFja05hbWVFdmVudChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDE2Mzg0IC8qIE1ldGFUcmFja05hbWUgKi87XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIHJldHVybiBUcmFja05hbWVFdmVudDtcbn0oKSk7XG5leHBvcnRzLlRyYWNrTmFtZUV2ZW50ID0gVHJhY2tOYW1lRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTZXF1ZW5jZU51bWJlcl8xID0gcmVxdWlyZShcIi4vU2VxdWVuY2VOdW1iZXJcIik7XG5leHBvcnRzLlNlcXVlbmNlTnVtYmVyRXZlbnQgPSBTZXF1ZW5jZU51bWJlcl8xLlNlcXVlbmNlTnVtYmVyRXZlbnQ7XG52YXIgVGltZVNpZ25hdHVyZV8xID0gcmVxdWlyZShcIi4vVGltZVNpZ25hdHVyZVwiKTtcbmV4cG9ydHMuVGltZVNpZ25hdHVyZUV2ZW50ID0gVGltZVNpZ25hdHVyZV8xLlRpbWVTaWduYXR1cmVFdmVudDtcbnZhciBLZXlTaWduYXR1cmVfMSA9IHJlcXVpcmUoXCIuL0tleVNpZ25hdHVyZVwiKTtcbmV4cG9ydHMuS2V5U2lnbmF0dXJlRXZlbnQgPSBLZXlTaWduYXR1cmVfMS5LZXlTaWduYXR1cmVFdmVudDtcbnZhciBTZXRUZW1wb18xID0gcmVxdWlyZShcIi4vU2V0VGVtcG9cIik7XG5leHBvcnRzLlNldFRlbXBvRXZlbnQgPSBTZXRUZW1wb18xLlNldFRlbXBvRXZlbnQ7XG52YXIgUG9ydFByZWZpeF8xID0gcmVxdWlyZShcIi4vUG9ydFByZWZpeFwiKTtcbmV4cG9ydHMuUG9ydFByZWZpeEV2ZW50ID0gUG9ydFByZWZpeF8xLlBvcnRQcmVmaXhFdmVudDtcbnZhciBDaGFubmVsUHJlZml4XzEgPSByZXF1aXJlKFwiLi9DaGFubmVsUHJlZml4XCIpO1xuZXhwb3J0cy5DaGFubmVsUHJlZml4RXZlbnQgPSBDaGFubmVsUHJlZml4XzEuQ2hhbm5lbFByZWZpeEV2ZW50O1xudmFyIENvcHlyaWdodF8xID0gcmVxdWlyZShcIi4vQ29weXJpZ2h0XCIpO1xuZXhwb3J0cy5Db3B5cmlnaHRFdmVudCA9IENvcHlyaWdodF8xLkNvcHlyaWdodEV2ZW50O1xudmFyIFRyYWNrTmFtZV8xID0gcmVxdWlyZShcIi4vVHJhY2tOYW1lXCIpO1xuZXhwb3J0cy5UcmFja05hbWVFdmVudCA9IFRyYWNrTmFtZV8xLlRyYWNrTmFtZUV2ZW50O1xudmFyIFRleHRfMSA9IHJlcXVpcmUoXCIuL1RleHRcIik7XG5leHBvcnRzLlRleHRFdmVudCA9IFRleHRfMS5UZXh0RXZlbnQ7XG52YXIgSW5zdHJ1bWVudE5hbWVfMSA9IHJlcXVpcmUoXCIuL0luc3RydW1lbnROYW1lXCIpO1xuZXhwb3J0cy5JbnN0cnVtZW50TmFtZUV2ZW50ID0gSW5zdHJ1bWVudE5hbWVfMS5JbnN0cnVtZW50TmFtZUV2ZW50O1xudmFyIEx5cmljXzEgPSByZXF1aXJlKFwiLi9MeXJpY1wiKTtcbmV4cG9ydHMuTHlyaWNFdmVudCA9IEx5cmljXzEuTHlyaWNFdmVudDtcbnZhciBNYXJrZXJfMSA9IHJlcXVpcmUoXCIuL01hcmtlclwiKTtcbmV4cG9ydHMuTWFya2VyRXZlbnQgPSBNYXJrZXJfMS5NYXJrZXJFdmVudDtcbnZhciBDdWVQb2ludF8xID0gcmVxdWlyZShcIi4vQ3VlUG9pbnRcIik7XG5leHBvcnRzLkN1ZVBvaW50RXZlbnQgPSBDdWVQb2ludF8xLkN1ZVBvaW50RXZlbnQ7XG52YXIgU01QVEVPZmZzZXRfMSA9IHJlcXVpcmUoXCIuL1NNUFRFT2Zmc2V0XCIpO1xuZXhwb3J0cy5TTVBURU9mZnNldEV2ZW50ID0gU01QVEVPZmZzZXRfMS5TTVBURU9mZnNldEV2ZW50O1xudmFyIFNlcXVlbmNlclNwZWNpZmljXzEgPSByZXF1aXJlKFwiLi9TZXF1ZW5jZXJTcGVjaWZpY1wiKTtcbmV4cG9ydHMuU2VxdWVuY2VyU3BlY2lmaWNFdmVudCA9IFNlcXVlbmNlclNwZWNpZmljXzEuU2VxdWVuY2VyU3BlY2lmaWNFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE5vdGVPZmZFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RlT2ZmRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBub3RlTnVtYmVyID0gX2Eubm90ZU51bWJlciwgcmVsZWFzZSA9IF9hLnJlbGVhc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IDEgLyogTm90ZU9mZiAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5ub3RlTnVtYmVyID0gbm90ZU51bWJlcjtcbiAgICAgICAgdGhpcy5yZWxlYXNlID0gcmVsZWFzZTtcbiAgICB9XG4gICAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKSk7XG5leHBvcnRzLk5vdGVPZmZFdmVudCA9IE5vdGVPZmZFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE5vdGVPbkV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGVPbkV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gX2EuY2hhbm5lbCwgbm90ZU51bWJlciA9IF9hLm5vdGVOdW1iZXIsIHZlbG9jaXR5ID0gX2EudmVsb2NpdHk7XG4gICAgICAgIHRoaXMudHlwZSA9IDIgLyogTm90ZU9uICovO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLm5vdGVOdW1iZXIgPSBub3RlTnVtYmVyO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgfVxuICAgIHJldHVybiBOb3RlT25FdmVudDtcbn0oKSk7XG5leHBvcnRzLk5vdGVPbkV2ZW50ID0gTm90ZU9uRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQaXRjaEJlbmRFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQaXRjaEJlbmRFdmVudChfYSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IF9hLmNoYW5uZWwsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgIHRoaXMudHlwZSA9IDY0IC8qIFBpdGNoQmVuZCAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gUGl0Y2hCZW5kRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5QaXRjaEJlbmRFdmVudCA9IFBpdGNoQmVuZEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9seXBob25pY0FmdGVydG91Y2hFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50KF9hKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gX2EuY2hhbm5lbCwgbm90ZU51bWJlciA9IF9hLm5vdGVOdW1iZXIsIHByZXNzdXJlID0gX2EucHJlc3N1cmU7XG4gICAgICAgIHRoaXMudHlwZSA9IDQgLyogUG9seXBob25pY0FmdGVydG91Y2ggKi87XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMubm90ZU51bWJlciA9IG5vdGVOdW1iZXI7XG4gICAgICAgIHRoaXMucHJlc3N1cmUgPSBwcmVzc3VyZTtcbiAgICB9XG4gICAgcmV0dXJuIFBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnQ7XG59KCkpO1xuZXhwb3J0cy5Qb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50ID0gUG9seXBob25pY0FmdGVydG91Y2hFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFByb2dyYW1DaGFuZ2VFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcm9ncmFtQ2hhbmdlRXZlbnQoX2EpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBwcm9ncmFtTnVtYmVyID0gX2EucHJvZ3JhbU51bWJlcjtcbiAgICAgICAgdGhpcy50eXBlID0gMTYgLyogUHJvZ3JhbUNoYW5nZSAqLztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5wcm9ncmFtTnVtYmVyID0gcHJvZ3JhbU51bWJlcjtcbiAgICB9XG4gICAgcmV0dXJuIFByb2dyYW1DaGFuZ2VFdmVudDtcbn0oKSk7XG5leHBvcnRzLlByb2dyYW1DaGFuZ2VFdmVudCA9IFByb2dyYW1DaGFuZ2VFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN5c0V4RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3lzRXhFdmVudChfYSkge1xuICAgICAgICB2YXIgZXZlbnREYXRhID0gX2EuZXZlbnREYXRhO1xuICAgICAgICB0aGlzLnR5cGUgPSAxMjggLyogU3lzZXggKi87XG4gICAgICAgIHRoaXMuZXZlbnREYXRhID0gZXZlbnREYXRhO1xuICAgIH1cbiAgICByZXR1cm4gU3lzRXhFdmVudDtcbn0oKSk7XG5leHBvcnRzLlN5c0V4RXZlbnQgPSBTeXNFeEV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTm90ZU9mZl8xID0gcmVxdWlyZShcIi4vTm90ZU9mZlwiKTtcbmV4cG9ydHMuTm90ZU9mZkV2ZW50ID0gTm90ZU9mZl8xLk5vdGVPZmZFdmVudDtcbnZhciBOb3RlT25fMSA9IHJlcXVpcmUoXCIuL05vdGVPblwiKTtcbmV4cG9ydHMuTm90ZU9uRXZlbnQgPSBOb3RlT25fMS5Ob3RlT25FdmVudDtcbnZhciBQcm9ncmFtQ2hhbmdlXzEgPSByZXF1aXJlKFwiLi9Qcm9ncmFtQ2hhbmdlXCIpO1xuZXhwb3J0cy5Qcm9ncmFtQ2hhbmdlRXZlbnQgPSBQcm9ncmFtQ2hhbmdlXzEuUHJvZ3JhbUNoYW5nZUV2ZW50O1xudmFyIENvbnRyb2xsZXJDaGFuZ2VfMSA9IHJlcXVpcmUoXCIuL0NvbnRyb2xsZXJDaGFuZ2VcIik7XG5leHBvcnRzLkNvbnRyb2xsZXJDaGFuZ2VFdmVudCA9IENvbnRyb2xsZXJDaGFuZ2VfMS5Db250cm9sbGVyQ2hhbmdlRXZlbnQ7XG52YXIgUG9seXBob25pY0FmdGVydG91Y2hfMSA9IHJlcXVpcmUoXCIuL1BvbHlwaG9uaWNBZnRlcnRvdWNoXCIpO1xuZXhwb3J0cy5Qb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50ID0gUG9seXBob25pY0FmdGVydG91Y2hfMS5Qb2x5cGhvbmljQWZ0ZXJ0b3VjaEV2ZW50O1xudmFyIENoYW5uZWxBZnRlcnRvdWNoXzEgPSByZXF1aXJlKFwiLi9DaGFubmVsQWZ0ZXJ0b3VjaFwiKTtcbmV4cG9ydHMuQ2hhbm5lbEFmdGVydG91Y2hFdmVudCA9IENoYW5uZWxBZnRlcnRvdWNoXzEuQ2hhbm5lbEFmdGVydG91Y2hFdmVudDtcbnZhciBQaXRjaEJlbmRfMSA9IHJlcXVpcmUoXCIuL1BpdGNoQmVuZFwiKTtcbmV4cG9ydHMuUGl0Y2hCZW5kRXZlbnQgPSBQaXRjaEJlbmRfMS5QaXRjaEJlbmRFdmVudDtcbnZhciBTeXNFeF8xID0gcmVxdWlyZShcIi4vU3lzRXhcIik7XG5leHBvcnRzLlN5c0V4RXZlbnQgPSBTeXNFeF8xLlN5c0V4RXZlbnQ7XG52YXIgTWV0YV8xID0gcmVxdWlyZShcIi4vTWV0YVwiKTtcbmV4cG9ydHMuTWV0YSA9IHtcbiAgICBTZXF1ZW5jZU51bWJlckV2ZW50OiBNZXRhXzEuU2VxdWVuY2VOdW1iZXJFdmVudCxcbiAgICBUaW1lU2lnbmF0dXJlRXZlbnQ6IE1ldGFfMS5UaW1lU2lnbmF0dXJlRXZlbnQsXG4gICAgS2V5U2lnbmF0dXJlRXZlbnQ6IE1ldGFfMS5LZXlTaWduYXR1cmVFdmVudCxcbiAgICBTZXRUZW1wb0V2ZW50OiBNZXRhXzEuU2V0VGVtcG9FdmVudCxcbiAgICBQb3J0UHJlZml4RXZlbnQ6IE1ldGFfMS5Qb3J0UHJlZml4RXZlbnQsXG4gICAgQ2hhbm5lbFByZWZpeEV2ZW50OiBNZXRhXzEuQ2hhbm5lbFByZWZpeEV2ZW50LFxuICAgIENvcHlyaWdodEV2ZW50OiBNZXRhXzEuQ29weXJpZ2h0RXZlbnQsXG4gICAgVHJhY2tOYW1lRXZlbnQ6IE1ldGFfMS5UcmFja05hbWVFdmVudCxcbiAgICBUZXh0RXZlbnQ6IE1ldGFfMS5UZXh0RXZlbnQsXG4gICAgSW5zdHJ1bWVudE5hbWVFdmVudDogTWV0YV8xLkluc3RydW1lbnROYW1lRXZlbnQsXG4gICAgTHlyaWNFdmVudDogTWV0YV8xLkx5cmljRXZlbnQsXG4gICAgTWFya2VyRXZlbnQ6IE1ldGFfMS5NYXJrZXJFdmVudCxcbiAgICBDdWVQb2ludEV2ZW50OiBNZXRhXzEuQ3VlUG9pbnRFdmVudCxcbiAgICBTTVBURU9mZnNldEV2ZW50OiBNZXRhXzEuU01QVEVPZmZzZXRFdmVudCxcbiAgICBTZXF1ZW5jZXJTcGVjaWZpY0V2ZW50OiBNZXRhXzEuU2VxdWVuY2VyU3BlY2lmaWNFdmVudCxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRmlsZVR5cGU7XG4oZnVuY3Rpb24gKE1JRElGaWxlVHlwZSkge1xuICAgIE1JRElGaWxlVHlwZVtNSURJRmlsZVR5cGVbXCJGb3JtYXQwXCJdID0gMF0gPSBcIkZvcm1hdDBcIjtcbiAgICBNSURJRmlsZVR5cGVbTUlESUZpbGVUeXBlW1wiRm9ybWF0MVwiXSA9IDFdID0gXCJGb3JtYXQxXCI7XG4gICAgTUlESUZpbGVUeXBlW01JRElGaWxlVHlwZVtcIkZvcm1hdDJcIl0gPSAyXSA9IFwiRm9ybWF0MlwiO1xufSkoTUlESUZpbGVUeXBlID0gZXhwb3J0cy5NSURJRmlsZVR5cGUgfHwgKGV4cG9ydHMuTUlESUZpbGVUeXBlID0ge30pKTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElFdmVudHNfMSA9IHJlcXVpcmUoXCIuL01JRElFdmVudHNcIik7XG52YXIgYnVmZmVyX3RvX3N0cmluZ18xID0gcmVxdWlyZShcIi4uL3V0aWxzL2J1ZmZlci10by1zdHJpbmdcIik7XG52YXIgdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlXCIpO1xudmFyIHJlYWRTdHJpbmdNZXRhRXZlbnQgPSBmdW5jdGlvbiAoZGF0YVZpZXcsIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgaW5kZXggPSBzdGFydEluZGV4O1xuICAgIHZhciBfYSA9IHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlKGRhdGFWaWV3LmJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCArIGluZGV4KSwgYnl0ZXNSZWFkID0gX2FbMF0sIHN0cmluZ0xlbmd0aCA9IF9hWzFdO1xuICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICB2YXIgc3RyID0gYnVmZmVyX3RvX3N0cmluZ18xLmJ1ZmZlclRvU3RyaW5nKGRhdGFWaWV3LmJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCArIGluZGV4LCBzdHJpbmdMZW5ndGgpO1xuICAgIGluZGV4ID0gaW5kZXggKyBzdHJpbmdMZW5ndGg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYnl0ZXNSZWFkICsgc3RyaW5nTGVuZ3RoLFxuICAgICAgICBzdHJcbiAgICBdO1xufTtcbmV4cG9ydHMuY3JlYXRlTWV0YUV2ZW50RnJvbUJ5dGVzID0gZnVuY3Rpb24gKHN0YXR1c0J5dGUsIGRhdGFWaWV3LCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgIHZhciBpbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgdmFyIG1ldGFFdmVudFR5cGVOdW0gPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgaW5kZXggKz0gMTtcbiAgICB2YXIgZXZlbnQ7XG4gICAgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDApIHtcbiAgICAgICAgLy8gTmV4dCBieXRlIGlzIDB4MDItLXNraXAgaXRcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIHNlcXVlbmNlTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDE2KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMjtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuU2VxdWVuY2VOdW1iZXJFdmVudCh7XG4gICAgICAgICAgICBzZXF1ZW5jZU51bWJlcjogc2VxdWVuY2VOdW1iZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDAxKSB7XG4gICAgICAgIHZhciBfYSA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2FbMF0sIHRleHQgPSBfYVsxXTtcbiAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5UZXh0RXZlbnQoe1xuICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDIpIHtcbiAgICAgICAgdmFyIF9iID0gcmVhZFN0cmluZ01ldGFFdmVudChkYXRhVmlldywgaW5kZXgpLCBieXRlc1JlYWQgPSBfYlswXSwgY29weXJpZ2h0ID0gX2JbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuQ29weXJpZ2h0RXZlbnQoe1xuICAgICAgICAgICAgY29weXJpZ2h0OiBjb3B5cmlnaHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDAzKSB7XG4gICAgICAgIHZhciBfYyA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2NbMF0sIG5hbWVfMSA9IF9jWzFdO1xuICAgICAgICBpbmRleCArPSBieXRlc1JlYWQ7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLlRyYWNrTmFtZUV2ZW50KHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWVfMSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MDQpIHtcbiAgICAgICAgdmFyIF9kID0gcmVhZFN0cmluZ01ldGFFdmVudChkYXRhVmlldywgaW5kZXgpLCBieXRlc1JlYWQgPSBfZFswXSwgbmFtZV8yID0gX2RbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuSW5zdHJ1bWVudE5hbWVFdmVudCh7XG4gICAgICAgICAgICBuYW1lOiBuYW1lXzIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDA1KSB7XG4gICAgICAgIHZhciBfZSA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2VbMF0sIGx5cmljID0gX2VbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuTHlyaWNFdmVudCh7XG4gICAgICAgICAgICBseXJpYzogbHlyaWMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDA2KSB7XG4gICAgICAgIHZhciBfZiA9IHJlYWRTdHJpbmdNZXRhRXZlbnQoZGF0YVZpZXcsIGluZGV4KSwgYnl0ZXNSZWFkID0gX2ZbMF0sIG1hcmtlciA9IF9mWzFdO1xuICAgICAgICBpbmRleCArPSBieXRlc1JlYWQ7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLk1hcmtlckV2ZW50KHtcbiAgICAgICAgICAgIG1hcmtlcjogbWFya2VyLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHgwNykge1xuICAgICAgICB2YXIgX2cgPSByZWFkU3RyaW5nTWV0YUV2ZW50KGRhdGFWaWV3LCBpbmRleCksIGJ5dGVzUmVhZCA9IF9nWzBdLCBjdWVUZXh0ID0gX2dbMV07XG4gICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuQ3VlUG9pbnRFdmVudCh7XG4gICAgICAgICAgICBjdWVUZXh0OiBjdWVUZXh0LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0YUV2ZW50VHlwZU51bSA9PT0gMHgyMCkge1xuICAgICAgICAvLyBTa2lwIG5leHQgYnl0ZSBzaW5jZSBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBjaGFubmVsTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5DaGFubmVsUHJlZml4RXZlbnQoe1xuICAgICAgICAgICAgY2hhbm5lbE51bWJlcjogY2hhbm5lbE51bWJlcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4MjEpIHtcbiAgICAgICAgLy8gU2tpcCBuZXh0IGJ5dGUgc2luY2UgaXQgaXMgYSBjb25zdGFudFxuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgcG9ydE51bWJlciA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuUG9ydFByZWZpeEV2ZW50KHtcbiAgICAgICAgICAgIHBvcnROdW1iZXI6IHBvcnROdW1iZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDJGKSB7XG4gICAgICAgIC8vIEVuZCBvZiB0cmFjayBldmVudFxuICAgICAgICBpbmRleCArPSAxO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDUxKSB7XG4gICAgICAgIC8vIE5leHQgYnl0ZSBpcyAweDAzLS1za2lwIGl0XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZSA9IChkYXRhVmlldy5nZXRVaW50OChpbmRleCkgPDwgMTYpICtcbiAgICAgICAgICAgIChkYXRhVmlldy5nZXRVaW50OChpbmRleCArIDEpIDw8IDgpICsgZGF0YVZpZXcuZ2V0VWludDgoaW5kZXggKyAyKTtcbiAgICAgICAgaW5kZXggKz0gMztcbiAgICAgICAgZXZlbnQgPSBuZXcgTUlESUV2ZW50c18xLk1ldGEuU2V0VGVtcG9FdmVudCh7XG4gICAgICAgICAgICBtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZTogbWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDU0KSB7XG4gICAgICAgIC8vIFNraXAgbmV4dCBieXRlIGJlY2F1c2UgaXQncyBhIGNvbnN0YW50XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBob3VycyA9IGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBzZWNvbmRzID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgZnJhbWVzXzEgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBmcmFjdGlvbmFsRnJhbWVzID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5TTVBURU9mZnNldEV2ZW50KHtcbiAgICAgICAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgICAgICAgIG1pbnV0ZXM6IG1pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzOiBzZWNvbmRzLFxuICAgICAgICAgICAgZnJhbWVzOiBmcmFtZXNfMSxcbiAgICAgICAgICAgIGZyYWN0aW9uYWxGcmFtZXM6IGZyYWN0aW9uYWxGcmFtZXMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDU4KSB7XG4gICAgICAgIC8vIE5leHQgYnl0ZSBpcyAweDA0LS1za2lwIGl0XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBkZW5vbWluYXRvciA9IE1hdGgucG93KDIsIGRhdGFWaWV3LmdldFVpbnQ4KGluZGV4KSk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBjbG9ja3NQZXJUaWNrID0gZGF0YVZpZXcuZ2V0VWludDgoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YXIgdGhpcnR5U2Vjb25kTm90ZXMgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLlRpbWVTaWduYXR1cmVFdmVudCh7XG4gICAgICAgICAgICBudW1lcmF0b3I6IG51bWVyYXRvcixcbiAgICAgICAgICAgIGRlbm9taW5hdG9yOiBkZW5vbWluYXRvcixcbiAgICAgICAgICAgIGNsb2Nrc1BlclRpY2s6IGNsb2Nrc1BlclRpY2ssXG4gICAgICAgICAgICB0aGlydHlTZWNvbmROb3RlczogdGhpcnR5U2Vjb25kTm90ZXMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRhRXZlbnRUeXBlTnVtID09PSAweDU5KSB7XG4gICAgICAgIC8vIE5leHQgYnl0ZSBpcyAweDAyLS1za2lwIGl0XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhciBzaGFycHMgPSBkYXRhVmlldy5nZXRJbnQ4KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFyIGlzTWFqb3IgPSBkYXRhVmlldy5nZXRVaW50OChpbmRleCkgPT09IDA7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGV2ZW50ID0gbmV3IE1JRElFdmVudHNfMS5NZXRhLktleVNpZ25hdHVyZUV2ZW50KHtcbiAgICAgICAgICAgIHNoYXJwczogc2hhcnBzLFxuICAgICAgICAgICAgaXNNYWpvcjogaXNNYWpvcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1ldGFFdmVudFR5cGVOdW0gPT09IDB4N0YpIHtcbiAgICAgICAgdmFyIF9oID0gdmFyaWFibGVfbGVuZ3RoX3ZhbHVlXzEuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUoZGF0YVZpZXcuYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0ICsgaW5kZXgpLCBieXRlc1JlYWQgPSBfaFswXSwgbGVuZ3RoXzEgPSBfaFsxXTtcbiAgICAgICAgaW5kZXggKz0gYnl0ZXNSZWFkO1xuICAgICAgICB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGFWaWV3LmJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCArIGluZGV4LCBsZW5ndGhfMSk7XG4gICAgICAgIHZhciBpZCA9IGRhdGEuc2xpY2UoMCwgMSk7XG4gICAgICAgIGlmIChpZFswXSA9PT0gMCkge1xuICAgICAgICAgICAgaWQgPSBkYXRhLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoMyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudCA9IG5ldyBNSURJRXZlbnRzXzEuTWV0YS5TZXF1ZW5jZXJTcGVjaWZpY0V2ZW50KHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBNSURJIG1ldGEgZXZlbnQgdHlwZSAweFwiICsgbWV0YUV2ZW50VHlwZU51bS50b1N0cmluZygxNikpO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICBpbmRleCAtIHN0YXJ0SW5kZXgsXG4gICAgICAgIGV2ZW50LFxuICAgIF07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJUGFyc2VFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTUlESVBhcnNlRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTUlESVBhcnNlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJJbnZhbGlkIE1JREkgZmlsZTogXCIgKyBtZXNzYWdlKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gTUlESVBhcnNlRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnRzLk1JRElQYXJzZUVycm9yID0gTUlESVBhcnNlRXJyb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRXZlbnRzXzEgPSByZXF1aXJlKFwiLi9NSURJRXZlbnRzXCIpO1xuZXhwb3J0cy5NSURJRXZlbnRzID0ge1xuICAgIE5vdGVPZmZFdmVudDogTUlESUV2ZW50c18xLk5vdGVPZmZFdmVudCxcbiAgICBOb3RlT25FdmVudDogTUlESUV2ZW50c18xLk5vdGVPbkV2ZW50LFxuICAgIFByb2dyYW1DaGFuZ2VFdmVudDogTUlESUV2ZW50c18xLlByb2dyYW1DaGFuZ2VFdmVudCxcbiAgICBDb250cm9sbGVyQ2hhbmdlRXZlbnQ6IE1JRElFdmVudHNfMS5Db250cm9sbGVyQ2hhbmdlRXZlbnQsXG4gICAgUG9seXBob25pY0FmdGVydG91Y2hFdmVudDogTUlESUV2ZW50c18xLlBvbHlwaG9uaWNBZnRlcnRvdWNoRXZlbnQsXG4gICAgQ2hhbm5lbEFmdGVydG91Y2hFdmVudDogTUlESUV2ZW50c18xLkNoYW5uZWxBZnRlcnRvdWNoRXZlbnQsXG4gICAgUGl0Y2hCZW5kRXZlbnQ6IE1JRElFdmVudHNfMS5QaXRjaEJlbmRFdmVudCxcbiAgICBTeXNFeEV2ZW50OiBNSURJRXZlbnRzXzEuU3lzRXhFdmVudCxcbiAgICBNZXRhOiBNSURJRXZlbnRzXzEuTWV0YSxcbn07XG52YXIgTUlESUZpbGVUeXBlXzEgPSByZXF1aXJlKFwiLi9NSURJRmlsZVR5cGVcIik7XG5leHBvcnRzLk1JRElGaWxlVHlwZSA9IE1JRElGaWxlVHlwZV8xLk1JRElGaWxlVHlwZTtcbnZhciBNSURJUGFyc2VFcnJvcl8xID0gcmVxdWlyZShcIi4vTUlESVBhcnNlRXJyb3JcIik7XG5leHBvcnRzLk1JRElQYXJzZUVycm9yID0gTUlESVBhcnNlRXJyb3JfMS5NSURJUGFyc2VFcnJvcjtcbnZhciBtaWRpX3JlYWRlcl8xID0gcmVxdWlyZShcIi4vbWlkaS1yZWFkZXJcIik7XG5leHBvcnRzLk1JRElSZWFkZXIgPSBtaWRpX3JlYWRlcl8xLk1JRElSZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElGaWxlVHlwZV8xID0gcmVxdWlyZShcIi4vTUlESUZpbGVUeXBlXCIpO1xudmFyIE1JRElQYXJzZUVycm9yXzEgPSByZXF1aXJlKFwiLi9NSURJUGFyc2VFcnJvclwiKTtcbnZhciBNSURJRXZlbnRDcmVhdG9yXzEgPSByZXF1aXJlKFwiLi9NSURJRXZlbnRDcmVhdG9yXCIpO1xudmFyIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhcmlhYmxlLWxlbmd0aC12YWx1ZVwiKTtcbnZhciBidWZmZXJfdG9fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvYnVmZmVyLXRvLXN0cmluZ1wiKTtcbnZhciBNSURJUmVhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1JRElSZWFkZXIoYnVmZmVyKSB7XG4gICAgICAgIGlmIChidWZmZXIgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJPZmZzZXQgPSBidWZmZXIuYnl0ZU9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlci5idWZmZXI7XG4gICAgICAgICAgICB0aGlzLmRhdGFWaWV3ID0gYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ1ZmZlciBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJPZmZzZXQgPSBidWZmZXIuYnl0ZU9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlci5idWZmZXI7XG4gICAgICAgICAgICB0aGlzLmRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuYnVmZmVyLCB0aGlzLmJ1ZmZlck9mZnNldCwgdGhpcy5idWZmZXJMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdGhpcy5idWZmZXJMZW5ndGggPSBidWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5kYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLmJ1ZmZlciwgdGhpcy5idWZmZXJPZmZzZXQsIHRoaXMuYnVmZmVyTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsZUhlYWRlckNodW5rID0gdGhpcy5yZWFkU3RyaW5nKDAsIDQpO1xuICAgICAgICBpZiAoZmlsZUhlYWRlckNodW5rICE9PSAnTVRoZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNSURJUGFyc2VFcnJvcl8xLk1JRElQYXJzZUVycm9yKCdGaWxlIGRvZXMgbm90IHN0YXJ0IHdpdGggYSBoZWFkZXIgY2h1bmsnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLnJlYWRGaWxlSGVhZGVyKDQpLCB0cmFja1N0YXJ0T2Zmc2V0ID0gX2FbMF0sIGhlYWRlciA9IF9hWzFdO1xuICAgICAgICB0aGlzLnRyYWNrU3RhcnRPZmZzZXQgPSB0cmFja1N0YXJ0T2Zmc2V0ICsgNDtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuICAgIE1JRElSZWFkZXIucHJvdG90eXBlLnJlYWRVaW50MzIgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhVmlldy5nZXRVaW50MzIoc3RhcnRJbmRleCk7XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkVWludDE2ID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVZpZXcuZ2V0VWludDE2KHN0YXJ0SW5kZXgpO1xuICAgIH07XG4gICAgTUlESVJlYWRlci5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcl90b19zdHJpbmdfMS5idWZmZXJUb1N0cmluZyh0aGlzLmJ1ZmZlciwgdGhpcy5idWZmZXJPZmZzZXQgKyBzdGFydEluZGV4LCBsZW5ndGgpO1xuICAgIH07XG4gICAgTUlESVJlYWRlci5wcm90b3R5cGUucmVhZFZhcmlhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlKHRoaXMuYnVmZmVyLCB0aGlzLmJ1ZmZlck9mZnNldCArIHN0YXJ0SW5kZXgpO1xuICAgIH07XG4gICAgTUlESVJlYWRlci5wcm90b3R5cGUucmVhZE1JRElFdmVudCA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCB0cmFja051bWJlciwgcHJldmlvdXNTdGF0dXNCeXRlKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucmVhZFZhcmlhYmxlTGVuZ3RoKHN0YXJ0SW5kZXgpLCBieXRlc1JlYWQgPSBfYVswXSwgZGVsdGFUaW1lID0gX2FbMV07XG4gICAgICAgIHZhciBpbmRleCA9IHN0YXJ0SW5kZXggKyBieXRlc1JlYWQ7XG4gICAgICAgIHZhciBldmVudE9yTnVsbCA9IE1JRElFdmVudENyZWF0b3JfMS5ldmVudEZyb21CeXRlcyh0aGlzLmRhdGFWaWV3LCBpbmRleCwgcHJldmlvdXNTdGF0dXNCeXRlKTtcbiAgICAgICAgaWYgKGV2ZW50T3JOdWxsID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHVzQnl0ZV8xID0gdGhpcy5kYXRhVmlldy5nZXRVaW50OChpbmRleCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTUlESVBhcnNlRXJyb3JfMS5NSURJUGFyc2VFcnJvcihcIlVua25vd24gTUlESSBldmVudCBzdGF0dXMgMHhcIiArIHN0YXR1c0J5dGVfMS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV2ZW50Qnl0ZXNSZWFkID0gZXZlbnRPck51bGwuYnl0ZXNSZWFkLCBldmVudCA9IGV2ZW50T3JOdWxsLmV2ZW50LCBzdGF0dXNCeXRlID0gZXZlbnRPck51bGwuc3RhdHVzQnl0ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ5dGVzUmVhZDogaW5kZXggKyBldmVudEJ5dGVzUmVhZCAtIHN0YXJ0SW5kZXgsXG4gICAgICAgICAgICBldmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICB0cmFja051bWJlcjogdHJhY2tOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVsdGFUaW1lOiBkZWx0YVRpbWUsXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1c0J5dGU6IHN0YXR1c0J5dGUsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkRmlsZUhlYWRlciA9IGZ1bmN0aW9uIChzdGFydEluZGV4KSB7XG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmRhdGFWaWV3LmdldFVpbnQzMihzdGFydEluZGV4KTtcbiAgICAgICAgLy8gQWRkIDQgYnl0ZXMgZm9yIHRoZSBsZW5ndGggZmllbGRcbiAgICAgICAgdmFyIGluZGV4ID0gc3RhcnRJbmRleCArIDQ7XG4gICAgICAgIHZhciBmaWxlVHlwZU51bWJlciA9IHRoaXMuZGF0YVZpZXcuZ2V0VWludDE2KGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMjtcbiAgICAgICAgdmFyIGZpbGVUeXBlO1xuICAgICAgICBpZiAoZmlsZVR5cGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgIGZpbGVUeXBlID0gTUlESUZpbGVUeXBlXzEuTUlESUZpbGVUeXBlLkZvcm1hdDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVR5cGVOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgIGZpbGVUeXBlID0gTUlESUZpbGVUeXBlXzEuTUlESUZpbGVUeXBlLkZvcm1hdDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVR5cGVOdW1iZXIgPT09IDIpIHtcbiAgICAgICAgICAgIGZpbGVUeXBlID0gTUlESUZpbGVUeXBlXzEuTUlESUZpbGVUeXBlLkZvcm1hdDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTUlESVBhcnNlRXJyb3JfMS5NSURJUGFyc2VFcnJvcihcIlVua25vd24gTUlESSBmaWxlIHR5cGU6IFwiICsgZmlsZVR5cGVOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0cmFja0NvdW50ID0gdGhpcy5kYXRhVmlldy5nZXRVaW50MTYoaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAyO1xuICAgICAgICB2YXIgZGl2aXNpb25OdW0gPSB0aGlzLmRhdGFWaWV3LmdldFVpbnQxNihpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDI7XG4gICAgICAgIHZhciBkaXZpc2lvbjtcbiAgICAgICAgLy8gaGlnaCBiaXQgc2V0ID0gU01QVEVcbiAgICAgICAgaWYgKGRpdmlzaW9uTnVtID4+IDE1ID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgZGVsdGFUaW1lUGVyRnJhbWUgPSBkaXZpc2lvbk51bSAmIDB4RjtcbiAgICAgICAgICAgIHZhciBuZWdhdGl2ZUZyYW1lc1BlclNlY29uZCA9IChkaXZpc2lvbk51bSA+PiA4KSAmIDB4N2Y7XG4gICAgICAgICAgICBkaXZpc2lvbiA9IHtcbiAgICAgICAgICAgICAgICBkZWx0YVRpbWVQZXJGcmFtZTogZGVsdGFUaW1lUGVyRnJhbWUsXG4gICAgICAgICAgICAgICAgbmVnYXRpdmVGcmFtZXNQZXJTZWNvbmQ6IG5lZ2F0aXZlRnJhbWVzUGVyU2Vjb25kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpdmlzaW9uID0ge1xuICAgICAgICAgICAgICAgIHRpY2tzOiBkaXZpc2lvbk51bSAmIDB4N0ZGRixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8vIEFkZCA0IGZvciB0aGUgbGVuZ3RoIGhlYWRlclxuICAgICAgICAgICAgNCArIGxlbmd0aCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxlVHlwZTogZmlsZVR5cGUsXG4gICAgICAgICAgICAgICAgdHJhY2tDb3VudDogdHJhY2tDb3VudCxcbiAgICAgICAgICAgICAgICBkaXZpc2lvbjogZGl2aXNpb24sXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfTtcbiAgICBNSURJUmVhZGVyLnByb3RvdHlwZS5yZWFkVHJhY2tzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpbmRleCwgaW5IZWFkZXIsIGluVHJhY2ssIHRyYWNrTnVtYmVyLCBjdXJyZW50VHJhY2tFbmRJbmRleCwgcHJldmlvdXNTdGF0dXNCeXRlLCBjaHVua1R5cGUsIGxlbmd0aF8xLCBfYiwgYnl0ZXNSZWFkLCBldmVudERhdGEsIHN0YXR1c0J5dGU7XG4gICAgICAgIHZhciBfYyA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuZXZlbnRUeXBlcywgZXZlbnRUeXBlcyA9IF9jID09PSB2b2lkIDAgPyA4Mzg4NjA3IC8qIEFsbCAqLyA6IF9jO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMudHJhY2tTdGFydE9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgaW5IZWFkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaW5UcmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0cmFja051bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFja0VuZEluZGV4ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaW5kZXggPCB0aGlzLmJ1ZmZlckxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShjdXJyZW50VHJhY2tFbmRJbmRleCA9PT0gbnVsbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICBjaHVua1R5cGUgPSB0aGlzLnJlYWRTdHJpbmcoaW5kZXgsIDQpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2h1bmtUeXBlICE9PSAnTVRyaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBNSURJUGFyc2VFcnJvcl8xLk1JRElQYXJzZUVycm9yKCdObyB0cmFjayBoZWFkZXIgZm91bmQgYXQgc3RhcnQgb2YgdHJhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhfMSA9IHRoaXMucmVhZFVpbnQzMihpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFja0VuZEluZGV4ID0gaW5kZXggKyBsZW5ndGhfMTtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tOdW1iZXIgPSB0cmFja051bWJlciArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB0aGlzLnJlYWRNSURJRXZlbnQoaW5kZXgsIHRyYWNrTnVtYmVyLCBwcmV2aW91c1N0YXR1c0J5dGUpLCBieXRlc1JlYWQgPSBfYi5ieXRlc1JlYWQsIGV2ZW50RGF0YSA9IF9iLmV2ZW50RGF0YSwgc3RhdHVzQnl0ZSA9IF9iLnN0YXR1c0J5dGU7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IGJ5dGVzUmVhZDtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNTdGF0dXNCeXRlID0gc3RhdHVzQnl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50VHJhY2tFbmRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNrRW5kSW5kZXggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGV2ZW50RGF0YS5ldmVudCAmJiAoZXZlbnREYXRhLmV2ZW50LnR5cGUgJiBldmVudFR5cGVzKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBldmVudERhdGFdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTUlESVJlYWRlcjtcbn0oKSk7XG5leHBvcnRzLk1JRElSZWFkZXIgPSBNSURJUmVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRlYnVnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRlYnVnXCIpKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGRlYnVnID0gZGVidWdfMS5kZWZhdWx0KFwibWlkaS10b29sczpNSURJRmlsZVwiKTtcbnZhciBzdHJpbmdUb0NoYXJDb2RlQXJyYXkgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHN0ci5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24gKGNocikgeyByZXR1cm4gY2hyLmNoYXJDb2RlQXQoMCk7IH0pKTtcbn07XG52YXIgbXRoZFN0cmluZyA9IHN0cmluZ1RvQ2hhckNvZGVBcnJheShcIk1UaGRcIik7XG52YXIgbXRya1N0cmluZyA9IHN0cmluZ1RvQ2hhckNvZGVBcnJheShcIk1UcmtcIik7XG52YXIgRU5EX09GX1RSQUNLX0VWRU5UID0gbmV3IFVpbnQ4QXJyYXkoWzB4RkYsIDB4MkYsIDB4MDBdKTtcbnZhciBudW1iZXJUb0J5dGVzID0gZnVuY3Rpb24gKG51bSwgbWluQnl0ZXMpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBkbyB7XG4gICAgICAgIGJ5dGVzLnVuc2hpZnQobnVtICYgMHhGRik7XG4gICAgICAgIG51bSA9IG51bSA+PiA4O1xuICAgIH0gd2hpbGUgKG51bSA+IDAgfHwgYnl0ZXMubGVuZ3RoIDwgbWluQnl0ZXMpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlcyk7XG59O1xudmFyIGdldE5vdGVPbkV2ZW50ID0gZnVuY3Rpb24gKG5vdGUsIGNoYW5uZWwsIHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMTQ0IC8qIE5vdGVPbiAqLyArIChjaGFubmVsIC0gMSksXG4gICAgICAgIC8vIFVuc2V0IHRvcCBiaXQ7IHZhbHVlIGNhbiBvbmx5IGJlIDcgYml0cyBsb25nXG4gICAgICAgIG5vdGUgJiAweDdGLFxuICAgICAgICB2ZWxvY2l0eSAmIDB4N0YsXG4gICAgXSk7XG59O1xudmFyIGdldE5vdGVPZmZFdmVudCA9IGZ1bmN0aW9uIChub3RlLCBjaGFubmVsLCB2ZWxvY2l0eSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDEyOCAvKiBOb3RlT2ZmICovICsgKGNoYW5uZWwgLSAxKSxcbiAgICAgICAgLy8gVW5zZXQgdG9wIGJpdDsgdmFsdWUgY2FuIG9ubHkgYmUgNyBiaXRzIGxvbmdcbiAgICAgICAgbm90ZSAmIDB4N0YsXG4gICAgICAgIHZlbG9jaXR5ICYgMHg3RixcbiAgICBdKTtcbn07XG52YXIgZ2V0UHJvZ3JhbUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBwcm9ncmFtID0gX2EucHJvZ3JhbTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAxOTIgLyogUHJvZ3JhbUNoYW5nZSAqLyArIChjaGFubmVsIC0gMSksXG4gICAgICAgIHByb2dyYW1cbiAgICBdKTtcbn07XG52YXIgZ2V0RmlsZUhlYWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBkaXZpc2lvbnMgPSBfYS5kaXZpc2lvbnMsIHRyYWNrQ291bnQgPSBfYS50cmFja0NvdW50O1xuICAgIHZhciBmb3JtYXQgPSB0cmFja0NvdW50ID09PSAxID9cbiAgICAgICAgMCA6XG4gICAgICAgIDE7XG4gICAgLy8gIyBvZiBkaXZpc2lvbnMgcGVyIHF1YXJ0ZXIgbm90ZSAoMTUgYml0cyBvbmx5KVxuICAgIHZhciBkaXZpc2lvbnNCeXRlcyA9IG51bWJlclRvQnl0ZXMoZGl2aXNpb25zICYgMHg3RkZGLCAyKTtcbiAgICB2YXIgdHJhY2tDb3VudEJ5dGVzID0gbnVtYmVyVG9CeXRlcyh0cmFja0NvdW50LCAyKTtcbiAgICB2YXIgdG90YWxMZW5ndGggPSBtdGhkU3RyaW5nLmJ5dGVMZW5ndGggK1xuICAgICAgICAvLyA0IGJ5dGVzIGZvciBsZW5ndGggZmllbGQgIFxuICAgICAgICA0ICtcbiAgICAgICAgLy8gMiBieXRlcyBmb3IgZm9ybWF0IGZpZWxkXG4gICAgICAgIDIgK1xuICAgICAgICB0cmFja0NvdW50Qnl0ZXMuYnl0ZUxlbmd0aCArXG4gICAgICAgIGRpdmlzaW9uc0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgdmFyIGhlYWRlciA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGhlYWRlci5zZXQobXRoZFN0cmluZywgaW5kZXgpO1xuICAgIGluZGV4ICs9IG10aGRTdHJpbmcuYnl0ZUxlbmd0aDtcbiAgICAvLyBMZW5ndGggZmllbGQsIE1TQiBmaXJzdFxuICAgIGhlYWRlci5zZXQoVWludDhBcnJheS5vZigwLCAwLCAwLCA2KSwgaW5kZXgpO1xuICAgIGluZGV4ICs9IDQ7XG4gICAgaGVhZGVyLnNldChVaW50OEFycmF5Lm9mKDAsIGZvcm1hdCksIGluZGV4KTtcbiAgICBpbmRleCArPSAyO1xuICAgIGhlYWRlci5zZXQodHJhY2tDb3VudEJ5dGVzLCBpbmRleCk7XG4gICAgaW5kZXggKz0gdHJhY2tDb3VudEJ5dGVzLmJ5dGVMZW5ndGg7XG4gICAgaGVhZGVyLnNldChkaXZpc2lvbnNCeXRlcywgaW5kZXgpO1xuICAgIGluZGV4ICs9IGRpdmlzaW9uc0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG52YXIgZ2V0VHJhY2tIZWFkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbGVuZ3RoID0gX2EubGVuZ3RoO1xuICAgIC8vIDQgZm9yIHRoZSBNVHJrIGhlYWRlciwgNCBmb3IgdGhlIGxlbmd0aCBidWZmZXJcbiAgICB2YXIgYnVmZiA9IG5ldyBBcnJheUJ1ZmZlcig4KTtcbiAgICBuZXcgVWludDhBcnJheShidWZmKS5zZXQobXRya1N0cmluZywgMCk7XG4gICAgbmV3IERhdGFWaWV3KGJ1ZmYpLnNldFVpbnQzMig0LCBsZW5ndGgpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWZmKTtcbn07XG52YXIgTUlESUZpbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTUlESUZpbGUoX2EpIHtcbiAgICAgICAgdmFyIGRpdmlzaW9ucyA9IF9hLmRpdmlzaW9ucztcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMudHJhY2tzID0ge307XG4gICAgICAgIHRoaXMub21uaVRyYWNrRXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuZGl2aXNpb25zID0gZGl2aXNpb25zO1xuICAgIH1cbiAgICBNSURJRmlsZS5wcm90b3R5cGUucHJvZ3JhbUNoYW5nZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gX2Eub2Zmc2V0LCBwcm9ncmFtID0gX2EucHJvZ3JhbSwgdHJhY2sgPSBfYS50cmFjaywgX2IgPSBfYS5jaGFubmVsLCBjaGFubmVsID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcbiAgICAgICAgdmFyIHByb2dyYW1DaGFuZ2VFdmVudCA9IGdldFByb2dyYW1DaGFuZ2VFdmVudCh7IGNoYW5uZWw6IGNoYW5uZWwsIHByb2dyYW06IHByb2dyYW0gfSk7XG4gICAgICAgIHZhciBidWZmZXJJbmZvID0ge1xuICAgICAgICAgICAgZXZlbnQ6IHByb2dyYW1DaGFuZ2VFdmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMTkyIC8qIFByb2dyYW1DaGFuZ2UgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogb2Zmc2V0LFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMucHVzaChidWZmZXJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghKHRyYWNrIGluIHRoaXMudHJhY2tzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyczogW10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goYnVmZmVySW5mbyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS50aW1lU2lnbmF0dXJlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSBfYS5udW1lcmF0b3IsIGRlbm9taW5hdG9yID0gX2EuZGVub21pbmF0b3I7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgODggLyogVGltZVNpZ25hdHVyZSAqLyxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICBudW1lcmF0b3IsXG4gICAgICAgICAgICBNYXRoLmxvZzIoZGVub21pbmF0b3IpLFxuICAgICAgICAgICAgLy8gQHRvZG86IGZpZ3VyZSBvdXQgaG93IHRvIGFjdHVhbGx5IGRlYWwgd2l0aCB0aGVzZSBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAvLyByb2J1c3RseS0tSSBkb24ndCByZWFsbHkgdW5kZXJzdGFuZCB0aGVtIGVudGlyZWx5XG4gICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWV0cm9ub21lIHRpY2tzIHBlciBxdWFydGVyIG5vdGVcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgLy8gTnVtYmVyIG9mIDEvMzJuZCBub3RlcyBwZXIgTUlESSBxdWFydGVyIG5vdGVcbiAgICAgICAgICAgIDgsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLm9tbmlUcmFja0V2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogMCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUua2V5U2lnbmF0dXJlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBrZXlTaWduYXR1cmUgPSBfYS5rZXlTaWduYXR1cmUsIF9iID0gX2Eub2Zmc2V0LCBvZmZzZXQgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAgICAgICAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIDg5IC8qIEtleVNpZ25hdHVyZSAqLyxcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBrZXlTaWduYXR1cmUuc2hhcnBzLFxuICAgICAgICAgICAgLy8gbWFqb3IgKDApIHZzLiBtaW5vciAoMSlcbiAgICAgICAgICAgIC8vIEB0b2RvOiBBY3R1YWxseSBmaW5kIG1ham9yL21pbm9yIGtleSBmcm9tIFhNTFxuICAgICAgICAgICAga2V5U2lnbmF0dXJlLm1vZGUgPT09IFwibWlub3JcIiA/IDEgOiAwLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBldmVudFR5cGU6IDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgZGl2aXNpb25PZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgLy8gYWRkIDEgZm9yIG51bGwgdGVybWluYXRvciBieXRlXG4gICAgICAgIHZhciBsZW5ndGggPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZSh0aXRsZS5sZW5ndGggKyAxKTtcbiAgICAgICAgdmFyIGNoYXJzID0gc3RyaW5nVG9DaGFyQ29kZUFycmF5KHRpdGxlICsgXCJcXDBcIik7XG4gICAgICAgIHZhciB0b3RhbExlbmd0aCA9IDIgKyAvLyAxIGJ5dGUgZWFjaCBmb3Igc3RhdHVzIGFuZCBzdWJ0eXBlXG4gICAgICAgICAgICBsZW5ndGguYnl0ZUxlbmd0aCArXG4gICAgICAgICAgICBjaGFycy5ieXRlTGVuZ3RoO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGV2ZW50LnNldChVaW50OEFycmF5Lm9mKDI1NSAvKiBNZXRhICovLCAzIC8qIFRyYWNrTmFtZSAqLyksIGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMjtcbiAgICAgICAgZXZlbnQuc2V0KGxlbmd0aCwgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSBsZW5ndGguYnl0ZUxlbmd0aDtcbiAgICAgICAgZXZlbnQuc2V0KGNoYXJzLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IGNoYXJzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogMCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUubm90ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm90ZSA9IF9hLm5vdGUsIGR1cmF0aW9uID0gX2EuZHVyYXRpb24sIG9mZnNldCA9IF9hLm9mZnNldCwgdHJhY2sgPSBfYS50cmFjaywgX2IgPSBfYS5jaGFubmVsLCBjaGFubmVsID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYiwgX2MgPSBfYS52ZWxvY2l0eSwgdmVsb2NpdHkgPSBfYyA9PT0gdm9pZCAwID8gNjQgOiBfYywgX2QgPSBfYS5yZWxlYXNlLCByZWxlYXNlID0gX2QgPT09IHZvaWQgMCA/IHZlbG9jaXR5IDogX2QsIF9lID0gX2EubWV0YSwgbWV0YSA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lO1xuICAgICAgICB2YXIgbm90ZU9uRXZlbnQgPSBnZXROb3RlT25FdmVudChub3RlLCBjaGFubmVsLCB2ZWxvY2l0eSk7XG4gICAgICAgIHZhciBub3RlTmFtZSA9IHV0aWxzXzEuTm90ZU51bWJlclRvTmFtZShub3RlKTtcbiAgICAgICAgbm90ZU5hbWUgPSBcIlwiICsgbm90ZU5hbWUuc3RlcCArIChub3RlTmFtZS5hbHRlciA9PT0gMSA/XG4gICAgICAgICAgICAnIycgOlxuICAgICAgICAgICAgbm90ZU5hbWUuYWx0ZXIgPT09IC0xID9cbiAgICAgICAgICAgICAgICAnYicgOlxuICAgICAgICAgICAgICAgICcnKSArIG5vdGVOYW1lLm9jdGF2ZTtcbiAgICAgICAgaWYgKCEodHJhY2sgaW4gdGhpcy50cmFja3MpKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrc1t0cmFja10gPSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IG5vdGVPbkV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAxNDQgLyogTm90ZU9uICovLFxuICAgICAgICAgICAgZGl2aXNpb25PZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgIG1ldGE6IF9fYXNzaWduKHsgbmFtZTogbm90ZU5hbWUgfSwgbWV0YSksXG4gICAgICAgIH0pO1xuICAgICAgICBkZWJ1Zygnbm90ZSBvbjogJywge1xuICAgICAgICAgICAgbm90ZTogbm90ZSxcbiAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eSxcbiAgICAgICAgICAgIGV2ZW50OiBub3RlT25FdmVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBub3RlT2ZmRXZlbnQgPSBnZXROb3RlT2ZmRXZlbnQobm90ZSwgY2hhbm5lbCwgcmVsZWFzZSk7XG4gICAgICAgIHZhciBub3RlT2ZmT2Zmc2V0ID0gb2Zmc2V0ICsgZHVyYXRpb247XG4gICAgICAgIGRlYnVnKCdub3RlIG9mZjogJywge1xuICAgICAgICAgICAgbm90ZTogbm90ZSxcbiAgICAgICAgICAgIG9mZnNldDogbm90ZU9mZk9mZnNldCxcbiAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICByZWxlYXNlOiByZWxlYXNlLFxuICAgICAgICAgICAgbWV0YTogX19hc3NpZ24oeyBuYW1lOiBub3RlTmFtZSB9LCBtZXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXS5idWZmZXJzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IG5vdGVPZmZFdmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMTI4IC8qIE5vdGVPZmYgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogbm90ZU9mZk9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNSURJRmlsZS5wcm90b3R5cGUuc2V0VGVtcG8gPSBmdW5jdGlvbiAodGVtcG8pIHtcbiAgICAgICAgdmFyIG1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlID0gNmU3IC8gdGVtcG87XG4gICAgICAgIHZhciB0ZW1wb0J5dGVzID0gbnVtYmVyVG9CeXRlcyhtaWNyb3NlY29uZHNQZXJRdWFydGVyTm90ZSwgMyk7XG4gICAgICAgIC8vIDEgYnl0ZSBlYWNoIGZvciBzdGF0dXMgdHlwZSBhbmQgbWV0YSB0eXBlLCBhbmQgMSBmb3IgY29uc3RhbnQgdmFsdWUgMHgwMyBhZnRlciBtZXRhIHR5cGVcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gMyArXG4gICAgICAgICAgICB0ZW1wb0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZXZlbnQuc2V0KFVpbnQ4QXJyYXkub2YoMjU1IC8qIE1ldGEgKi8sIDgxIC8qIFNldFRlbXBvICovLCAzKSwgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAzO1xuICAgICAgICBldmVudC5zZXQodGVtcG9CeXRlcywgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSB0ZW1wb0J5dGVzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHRoaXMub21uaVRyYWNrRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5zb3J0QnVmZmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudHJhY2tzKS5yZWR1Y2UoZnVuY3Rpb24gKHJlZHVjdGlvbiwgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIHNoYWxsb3cgY2xvbmUgdG8gYXZvaWQgYWRkaW5nIG9tbmlUcmFja0V2ZW50cyB0byB0aGUgYWN0dWFsIHRyYWNrc1xuICAgICAgICAgICAgdmFyIHRyYWNrQnVmZmVycyA9IF90aGlzLnRyYWNrc1t0cmFja051bWJlcl0uYnVmZmVycy5zbGljZSgpO1xuICAgICAgICAgICAgdHJhY2tCdWZmZXJzLnVuc2hpZnQuYXBwbHkodHJhY2tCdWZmZXJzLCBfdGhpcy5vbW5pVHJhY2tFdmVudHMpO1xuICAgICAgICAgICAgcmVkdWN0aW9uW3RyYWNrTnVtYmVyXSA9IHRyYWNrQnVmZmVycy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldERpZmYgPSBhLmRpdmlzaW9uT2Zmc2V0IC0gYi5kaXZpc2lvbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0RGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5ldmVudFR5cGUgPT09IGIuZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYS5ldmVudFR5cGUgPT09IDE5MiAvKiBQcm9ncmFtQ2hhbmdlICovIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmV2ZW50VHlwZSA9PT0gMjU1IC8qIE1ldGEgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiLmV2ZW50VHlwZSA9PT0gMTkyIC8qIFByb2dyYW1DaGFuZ2UgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLmV2ZW50VHlwZSA9PT0gMjU1IC8qIE1ldGEgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldERpZmY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWR1Y3Rpb247XG4gICAgICAgIH0sIHt9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnVmZmVycyA9IHRoaXMuc29ydEJ1ZmZlcnMoKTtcbiAgICAgICAgdmFyIHRyYWNrQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLnRyYWNrcykubGVuZ3RoO1xuICAgICAgICB2YXIgdHJhY2tMZW5ndGhzID0gT2JqZWN0LmtleXMoYnVmZmVycykucmVkdWNlKGZ1bmN0aW9uICh0b3RhbHMsIHRyYWNrTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcHJldkR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRvdGFsc1t0cmFja051bWJlcl0gPSBidWZmZXJzW3RyYWNrTnVtYmVyXS5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsLCBtaWRpRXZlbnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIG1pZGlFdmVudEluZm8uZXZlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBkZWx0YVRpbWUgPSBtaWRpRXZlbnRJbmZvLmRpdmlzaW9uT2Zmc2V0IC0gcHJldkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBkZWx0YVRpbWVCdWZmZXIgPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IGRlbHRhVGltZUJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbWlkaUV2ZW50SW5mby5kZWx0YVRpbWVCdWZmZXIgPSBkZWx0YVRpbWVCdWZmZXI7XG4gICAgICAgICAgICAgICAgcHJldkR1cmF0aW9uID0gbWlkaUV2ZW50SW5mby5kaXZpc2lvbk9mZnNldDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHRvdGFsc1t0cmFja051bWJlcl0gKz0gMSArIC8vIFRoZSBkZWx0YSB0aW1lIG9mZnNldCBmb3IgZW5kIG9mIHRyYWNrIGlzIDAsIHdoaWNoIHRha2VzIDEgYnl0ZSBpbiBWTFZcbiAgICAgICAgICAgICAgICBFTkRfT0ZfVFJBQ0tfRVZFTlQubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFscztcbiAgICAgICAgfSwge30pO1xuICAgICAgICB2YXIgaGVhZGVyQ2h1bmsgPSBnZXRGaWxlSGVhZGVyKHtcbiAgICAgICAgICAgIGRpdmlzaW9uczogdGhpcy5kaXZpc2lvbnMsXG4gICAgICAgICAgICB0cmFja0NvdW50OiB0cmFja0NvdW50LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRyYWNrSGVhZGVycyA9IE9iamVjdC5rZXlzKGJ1ZmZlcnMpLnJlZHVjZShmdW5jdGlvbiAoaGVhZGVycywgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbdHJhY2tOdW1iZXJdID0gZ2V0VHJhY2tIZWFkZXIoe1xuICAgICAgICAgICAgICAgIGxlbmd0aDogdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gaGVhZGVyQ2h1bmsubGVuZ3RoO1xuICAgICAgICB0b3RhbExlbmd0aCArPSBPYmplY3Qua2V5cyh0cmFja0hlYWRlcnMpLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIHRyYWNrTnVtYmVyKSB7IHJldHVybiB0b3RhbCArIHRyYWNrSGVhZGVyc1t0cmFja051bWJlcl0ubGVuZ3RoOyB9LCAwKTtcbiAgICAgICAgdG90YWxMZW5ndGggKz0gT2JqZWN0LmtleXMoYnVmZmVycykucmVkdWNlKGZ1bmN0aW9uICh0b3RhbCwgdHJhY2tOdW1iZXIpIHsgcmV0dXJuIHRvdGFsICsgdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXTsgfSwgMCk7XG4gICAgICAgIHZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmYpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgYXJyLnNldChoZWFkZXJDaHVuaywgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGhlYWRlckNodW5rLmxlbmd0aDtcbiAgICAgICAgT2JqZWN0LmtleXMoYnVmZmVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGFyci5zZXQodHJhY2tIZWFkZXJzW3RyYWNrTnVtYmVyXSwgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSB0cmFja0hlYWRlcnNbdHJhY2tOdW1iZXJdLmxlbmd0aDtcbiAgICAgICAgICAgIGJ1ZmZlcnNbdHJhY2tOdW1iZXJdLmZvckVhY2goZnVuY3Rpb24gKG1pZGlFdmVudEluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFUaW1lQnVmZmVyID0gbWlkaUV2ZW50SW5mby5kZWx0YVRpbWVCdWZmZXI7XG4gICAgICAgICAgICAgICAgYXJyLnNldChkZWx0YVRpbWVCdWZmZXIsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRlbHRhVGltZUJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYXJyLnNldChtaWRpRXZlbnRJbmZvLmV2ZW50LCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaWRpRXZlbnRJbmZvLmV2ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gRGVsdGEgdGltZSBmb3IgZW5kIG9mIHRyYWNrIGV2ZW50IGlzIDAsIHNvIHRoZSBidWZmZXIgZm9yIGl0IGlzIGFsd2F5c1xuICAgICAgICAgICAgLy8gdGhlIHNhbWVcbiAgICAgICAgICAgIGFyci5zZXQoVWludDhBcnJheS5mcm9tKFswXSksIG9mZnNldCk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgICAgIGFyci5zZXQoRU5EX09GX1RSQUNLX0VWRU5ULCBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IEVORF9PRl9UUkFDS19FVkVOVC5sZW5ndGg7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnVmZjtcbiAgICB9O1xuICAgIHJldHVybiBNSURJRmlsZTtcbn0oKSk7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESUZpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRmlsZV8xID0gcmVxdWlyZShcIi4vTUlESUZpbGVcIik7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESUZpbGVfMS5NSURJRmlsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JRElXcml0ZXJfMSA9IHJlcXVpcmUoXCIuL01JRElXcml0ZXJcIik7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESVdyaXRlcl8xLk1JRElGaWxlO1xudmFyIE1JRElSZWFkZXJfMSA9IHJlcXVpcmUoXCIuL01JRElSZWFkZXJcIik7XG5leHBvcnRzLk1JRElFdmVudHMgPSBNSURJUmVhZGVyXzEuTUlESUV2ZW50cztcbmV4cG9ydHMuTUlESUZpbGVUeXBlID0gTUlESVJlYWRlcl8xLk1JRElGaWxlVHlwZTtcbmV4cG9ydHMuTUlESVBhcnNlRXJyb3IgPSBNSURJUmVhZGVyXzEuTUlESVBhcnNlRXJyb3I7XG5leHBvcnRzLk1JRElSZWFkZXIgPSBNSURJUmVhZGVyXzEuTUlESVJlYWRlcjtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5leHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gdXRpbHNfMS5idWZmZXJUb1N0cmluZztcbmV4cG9ydHMuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB1dGlsc18xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlO1xuZXhwb3J0cy50b1ZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB1dGlsc18xLnRvVmFyaWFibGVMZW5ndGhWYWx1ZTtcbmV4cG9ydHMuTm90ZU5hbWVUb051bWJlciA9IHV0aWxzXzEuTm90ZU5hbWVUb051bWJlcjtcbmV4cG9ydHMuTm90ZU51bWJlclRvTmFtZSA9IHV0aWxzXzEuTm90ZU51bWJlclRvTmFtZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5idWZmZXJUb1N0cmluZyA9IGZ1bmN0aW9uIChidWZmZXIsIHN0YXJ0SW5kZXgsIGxlbmd0aCkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCBzdGFydEluZGV4LCBsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVZpZXcuZ2V0VWludDgoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJ1ZmZlcl90b19zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL2J1ZmZlci10by1zdHJpbmdcIik7XG5leHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gYnVmZmVyX3RvX3N0cmluZ18xLmJ1ZmZlclRvU3RyaW5nO1xudmFyIHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xID0gcmVxdWlyZShcIi4vdmFyaWFibGUtbGVuZ3RoLXZhbHVlXCIpO1xuZXhwb3J0cy5mcm9tVmFyaWFibGVMZW5ndGhWYWx1ZSA9IHZhcmlhYmxlX2xlbmd0aF92YWx1ZV8xLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlO1xuZXhwb3J0cy50b1ZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB2YXJpYWJsZV9sZW5ndGhfdmFsdWVfMS50b1ZhcmlhYmxlTGVuZ3RoVmFsdWU7XG52YXIgbWlkaV9ub3RlX2NvbnZlcnRlcl8xID0gcmVxdWlyZShcIi4vbWlkaS1ub3RlLWNvbnZlcnRlclwiKTtcbmV4cG9ydHMuTm90ZU5hbWVUb051bWJlciA9IG1pZGlfbm90ZV9jb252ZXJ0ZXJfMS5Ob3RlTmFtZVRvTnVtYmVyO1xuZXhwb3J0cy5Ob3RlTnVtYmVyVG9OYW1lID0gbWlkaV9ub3RlX2NvbnZlcnRlcl8xLk5vdGVOdW1iZXJUb05hbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIE5vdGVOdW1iZXJUb05hbWUobm90ZSkge1xuICAgIHZhciBzdGVwO1xuICAgIHZhciBhbHRlcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xuICAgIHZhciBvY3RhdmUgPSBNYXRoLmZsb29yKG5vdGUgLyAxMikgLSAxO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICAgIHN3aXRjaCAobm90ZSAlIDEyKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgc3RlcCA9IFwiQ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc3RlcCA9IFwiRFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBzdGVwID0gXCJBXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWZhbGx0aHJvdWdoICovXG4gICAgdmFyIG5vdGVPYmogPSB7XG4gICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgIG9jdGF2ZTogb2N0YXZlLFxuICAgICAgICBNSURJTnVtYmVyOiBub3RlLFxuICAgIH07XG4gICAgaWYgKGFsdGVyKSB7XG4gICAgICAgIG5vdGVPYmouYWx0ZXIgPSBhbHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIG5vdGVPYmo7XG59XG5leHBvcnRzLk5vdGVOdW1iZXJUb05hbWUgPSBOb3RlTnVtYmVyVG9OYW1lO1xudmFyIHN0ZXBUb051bWJlciA9IHtcbiAgICBDOiAwLFxuICAgIEQ6IDIsXG4gICAgRTogNCxcbiAgICBGOiA1LFxuICAgIEc6IDcsXG4gICAgQTogOSxcbiAgICBCOiAxMSxcbn07XG52YXIgc3RlcHMgPSBcIkFCQ0RFRkdcIjtcbmZ1bmN0aW9uIE5vdGVOYW1lVG9OdW1iZXIobm90ZU5hbWUpIHtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgb2N0YXZlO1xuICAgIHZhciBhbHRlcjtcbiAgICBpZiAodHlwZW9mIG5vdGVOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gL14oW0EtR10pKFsjYl0pPygtP1xcZCspJC8uZXhlYyhub3RlTmFtZSk7XG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFsdGVyU3RyaW5nID0gbWF0Y2hlc1syXTtcbiAgICAgICAgc3RlcCA9IG1hdGNoZXNbMV07XG4gICAgICAgIG9jdGF2ZSA9IE51bWJlcihtYXRjaGVzWzNdKTtcbiAgICAgICAgaWYgKGFsdGVyU3RyaW5nID09PSBcImJcIikge1xuICAgICAgICAgICAgYWx0ZXIgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbHRlclN0cmluZyA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RlcCA9IG5vdGVOYW1lLnN0ZXA7XG4gICAgICAgIGFsdGVyID0gbm90ZU5hbWUuYWx0ZXI7XG4gICAgICAgIG9jdGF2ZSA9IG5vdGVOYW1lLm9jdGF2ZTtcbiAgICB9XG4gICAgaWYgKGFsdGVyID09PSAtMSkge1xuICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIHZhciBpbml0aWFsU3RlcEluZGV4ID0gc3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgICAgICAgc3RlcCA9IHN0ZXBzWyhzdGVwcy5pbmRleE9mKHN0ZXApICsgc3RlcHMubGVuZ3RoIC0gMSkgJSBzdGVwcy5sZW5ndGhdO1xuICAgICAgICAvLyBlLmcuIGdvaW5nIGZyb20gQWI0IC0+IEcjM1xuICAgICAgICBpZiAoc3RlcHMuaW5kZXhPZihzdGVwKSA+IGluaXRpYWxTdGVwSW5kZXgpIHtcbiAgICAgICAgICAgIG9jdGF2ZSAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBudW1iZXIgPSBzdGVwVG9OdW1iZXJbc3RlcF07XG4gICAgaWYgKGFsdGVyID09PSAxKSB7XG4gICAgICAgIG51bWJlciArPSAxO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWFnaWMtbnVtYmVyc1xuICAgIHJldHVybiBudW1iZXIgKyAoKG9jdGF2ZSArIDEpICogMTIpO1xufVxuZXhwb3J0cy5Ob3RlTmFtZVRvTnVtYmVyID0gTm90ZU5hbWVUb051bWJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gdG9WYXJpYWJsZUxlbmd0aFZhbHVlKG51bSkge1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGRvIHtcbiAgICAgICAgdmFyIGJ5dGUgPSBudW0gJiAweDdGO1xuICAgICAgICBudW0gPSBudW0gPj4gNztcbiAgICAgICAgaWYgKGJ5dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGJ5dGUgPSBieXRlICsgMHg4MDtcbiAgICAgICAgfVxuICAgICAgICBieXRlcy51bnNoaWZ0KGJ5dGUpO1xuICAgIH0gd2hpbGUgKG51bSA+IDApO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlcyk7XG59XG5leHBvcnRzLnRvVmFyaWFibGVMZW5ndGhWYWx1ZSA9IHRvVmFyaWFibGVMZW5ndGhWYWx1ZTtcbjtcbmZ1bmN0aW9uIGZyb21WYXJpYWJsZUxlbmd0aFZhbHVlKGJ1ZmZlciwgc3RhcnRJbmRleCkge1xuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cbiAgICB2YXIgdUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBzdGFydEluZGV4KTtcbiAgICB2YXIgdmFsdWUgPSAwO1xuICAgIHZhciBpbmRleCA9IC0xO1xuICAgIHZhciBieXRlc1JlYWQgPSAwO1xuICAgIGRvIHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgPDwgNykgKyAodUFycmF5W2luZGV4XSAmIDB4N0YpO1xuICAgICAgICBieXRlc1JlYWQgKz0gMTtcbiAgICB9IHdoaWxlICh1QXJyYXlbaW5kZXhdICYgMHg4MCk7XG4gICAgcmV0dXJuIFtieXRlc1JlYWQsIHZhbHVlXTtcbn1cbmV4cG9ydHMuZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUgPSBmcm9tVmFyaWFibGVMZW5ndGhWYWx1ZTtcbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=