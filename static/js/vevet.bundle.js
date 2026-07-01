var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js
var require_UserAgent_DEPRECATED = __commonJS({
  "node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js"(exports, module) {
    var _populated = false;
    var _ie;
    var _firefox;
    var _opera;
    var _webkit;
    var _chrome;
    var _ie_real_version;
    var _osx;
    var _windows;
    var _linux;
    var _android;
    var _win64;
    var _iphone;
    var _ipad;
    var _native;
    var _mobile;
    function _populate() {
      if (_populated) {
        return;
      }
      _populated = true;
      var uas = navigator.userAgent;
      var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
      var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
      _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
      _ipad = /\b(iP[ao]d)/.exec(uas);
      _android = /Android/i.exec(uas);
      _native = /FBAN\/\w+;/i.exec(uas);
      _mobile = /Mobile/i.exec(uas);
      _win64 = !!/Win64/.exec(uas);
      if (agent) {
        _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
        if (_ie && document && document.documentMode) {
          _ie = document.documentMode;
        }
        var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
        _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
        _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
        _opera = agent[3] ? parseFloat(agent[3]) : NaN;
        _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
        if (_webkit) {
          agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
          _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
        } else {
          _chrome = NaN;
        }
      } else {
        _ie = _firefox = _opera = _chrome = _webkit = NaN;
      }
      if (os) {
        if (os[1]) {
          var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
          _osx = ver ? parseFloat(ver[1].replace("_", ".")) : true;
        } else {
          _osx = false;
        }
        _windows = !!os[2];
        _linux = !!os[3];
      } else {
        _osx = _windows = _linux = false;
      }
    }
    var UserAgent_DEPRECATED = {
      /**
       *  Check if the UA is Internet Explorer.
       *
       *
       *  @return float|NaN Version number (if match) or NaN.
       */
      ie: function() {
        return _populate() || _ie;
      },
      /**
       * Check if we're in Internet Explorer compatibility mode.
       *
       * @return bool true if in compatibility mode, false if
       * not compatibility mode or not ie
       */
      ieCompatibilityMode: function() {
        return _populate() || _ie_real_version > _ie;
      },
      /**
       * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
       * only need this because Skype can't handle 64-bit IE yet.  We need to remove
       * this when we don't need it -- tracked by #601957.
       */
      ie64: function() {
        return UserAgent_DEPRECATED.ie() && _win64;
      },
      /**
       *  Check if the UA is Firefox.
       *
       *
       *  @return float|NaN Version number (if match) or NaN.
       */
      firefox: function() {
        return _populate() || _firefox;
      },
      /**
       *  Check if the UA is Opera.
       *
       *
       *  @return float|NaN Version number (if match) or NaN.
       */
      opera: function() {
        return _populate() || _opera;
      },
      /**
       *  Check if the UA is WebKit.
       *
       *
       *  @return float|NaN Version number (if match) or NaN.
       */
      webkit: function() {
        return _populate() || _webkit;
      },
      /**
       *  For Push
       *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
       */
      safari: function() {
        return UserAgent_DEPRECATED.webkit();
      },
      /**
       *  Check if the UA is a Chrome browser.
       *
       *
       *  @return float|NaN Version number (if match) or NaN.
       */
      chrome: function() {
        return _populate() || _chrome;
      },
      /**
       *  Check if the user is running Windows.
       *
       *  @return bool `true' if the user's OS is Windows.
       */
      windows: function() {
        return _populate() || _windows;
      },
      /**
       *  Check if the user is running Mac OS X.
       *
       *  @return float|bool   Returns a float if a version number is detected,
       *                       otherwise true/false.
       */
      osx: function() {
        return _populate() || _osx;
      },
      /**
       * Check if the user is running Linux.
       *
       * @return bool `true' if the user's OS is some flavor of Linux.
       */
      linux: function() {
        return _populate() || _linux;
      },
      /**
       * Check if the user is running on an iPhone or iPod platform.
       *
       * @return bool `true' if the user is running some flavor of the
       *    iPhone OS.
       */
      iphone: function() {
        return _populate() || _iphone;
      },
      mobile: function() {
        return _populate() || (_iphone || _ipad || _android || _mobile);
      },
      nativeApp: function() {
        return _populate() || _native;
      },
      android: function() {
        return _populate() || _android;
      },
      ipad: function() {
        return _populate() || _ipad;
      }
    };
    module.exports = UserAgent_DEPRECATED;
  }
});

// node_modules/normalize-wheel/src/ExecutionEnvironment.js
var require_ExecutionEnvironment = __commonJS({
  "node_modules/normalize-wheel/src/ExecutionEnvironment.js"(exports, module) {
    "use strict";
    var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    var ExecutionEnvironment = {
      canUseDOM,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
      canUseViewport: canUseDOM && !!window.screen,
      isInWorker: !canUseDOM
      // For now, this is true - might change in the future.
    };
    module.exports = ExecutionEnvironment;
  }
});

// node_modules/normalize-wheel/src/isEventSupported.js
var require_isEventSupported = __commonJS({
  "node_modules/normalize-wheel/src/isEventSupported.js"(exports, module) {
    "use strict";
    var ExecutionEnvironment = require_ExecutionEnvironment();
    var useHasFeature;
    if (ExecutionEnvironment.canUseDOM) {
      useHasFeature = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      document.implementation.hasFeature("", "") !== true;
    }
    function isEventSupported(eventNameSuffix, capture) {
      if (!ExecutionEnvironment.canUseDOM || capture && !("addEventListener" in document)) {
        return false;
      }
      var eventName = "on" + eventNameSuffix;
      var isSupported = eventName in document;
      if (!isSupported) {
        var element = document.createElement("div");
        element.setAttribute(eventName, "return;");
        isSupported = typeof element[eventName] === "function";
      }
      if (!isSupported && useHasFeature && eventNameSuffix === "wheel") {
        isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
      }
      return isSupported;
    }
    module.exports = isEventSupported;
  }
});

// node_modules/normalize-wheel/src/normalizeWheel.js
var require_normalizeWheel = __commonJS({
  "node_modules/normalize-wheel/src/normalizeWheel.js"(exports, module) {
    "use strict";
    var UserAgent_DEPRECATED = require_UserAgent_DEPRECATED();
    var isEventSupported = require_isEventSupported();
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    function normalizeWheel2(event) {
      var sX = 0, sY = 0, pX = 0, pY = 0;
      if ("detail" in event) {
        sY = event.detail;
      }
      if ("wheelDelta" in event) {
        sY = -event.wheelDelta / 120;
      }
      if ("wheelDeltaY" in event) {
        sY = -event.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in event) {
        sX = -event.wheelDeltaX / 120;
      }
      if ("axis" in event && event.axis === event.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in event) {
        pY = event.deltaY;
      }
      if ("deltaX" in event) {
        pX = event.deltaX;
      }
      if ((pX || pY) && event.deltaMode) {
        if (event.deltaMode == 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    normalizeWheel2.getEventType = function() {
      return UserAgent_DEPRECATED.firefox() ? "DOMMouseScroll" : isEventSupported("wheel") ? "wheel" : "mousewheel";
    };
    module.exports = normalizeWheel2;
  }
});

// node_modules/normalize-wheel/index.js
var require_normalize_wheel = __commonJS({
  "node_modules/normalize-wheel/index.js"(exports, module) {
    module.exports = require_normalizeWheel();
  }
});

// node_modules/lodash.split/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.split/index.js"(exports, module) {
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var MAX_ARRAY_LENGTH = 4294967295;
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var regexpTag = "[object RegExp]";
    var symbolTag = "[object Symbol]";
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = (function() {
      try {
        return freeProcess && freeProcess.binding("util");
      } catch (e) {
      }
    })();
    var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
    function asciiToArray(string) {
      return string.split("");
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseIsRegExp(value) {
      return isObject(value) && objectToString.call(value) == regexpTag;
    }
    function baseSlice(array, start, end) {
      var index2 = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index2 < length) {
        result[index2] = array[index2 + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index2, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index2;
      if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
        return eq(object[index2], value);
      }
      return false;
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function split2(string, separator, limit) {
      if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
        separator = limit = void 0;
      }
      limit = limit === void 0 ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }
    module.exports = split2;
  }
});

// node_modules/detect-browser/es/index.js
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function BrowserInfo2(name, version, os) {
      this.name = name;
      this.version = version;
      this.os = os;
      this.type = "browser";
    }
    return BrowserInfo2;
  })()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function NodeInfo2(version) {
      this.version = version;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  })()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function SearchBotDeviceInfo2(name, version, os, bot) {
      this.name = name;
      this.version = version;
      this.os = os;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  })()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  })()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  })()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua) {
  return ua !== "" && userAgentRules.reduce(function(matched, _a3) {
    var browser = _a3[0], regex = _a3[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return null;
  }
  var name = matchedRule[0], match = matchedRule[1];
  if (name === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version = versionParts.join(".");
  var os = detectOS(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
  }
  return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a3 = operatingSystemRules[ii], os = _a3[0], regex = _a3[1];
    var match = regex.exec(ua);
    if (match) {
      return os;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode = typeof process !== "undefined" && process.version;
  return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}

// node_modules/inapp-spy/dist/index.mjs
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var WIN_ERROR = "Window is not available and no user agent was provided.";
var getUA = () => {
  var _a3, _b2;
  if (typeof window !== "undefined") {
    const ua = ((_a3 = window == null ? void 0 : window.navigator) == null ? void 0 : _a3.userAgent) || ((_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.vendor) || // @ts-ignore
    (window == null ? void 0 : window.opera);
    if (ua) return ua;
  }
  console.error(WIN_ERROR);
  return "";
};
var empty = {
  isInApp: false,
  appKey: void 0,
  appName: void 0,
  skipped: false
};
var getIsAppleDevice = (ua) => {
  return ua.match(/(iPhone|iPad|iPod|Macintosh)/) !== null;
};
var checkSkip = ({
  skip,
  appKey,
  ua
}) => {
  if (!skip || skip.length === 0) return false;
  const isApple = getIsAppleDevice(ua);
  return skip.some(
    ({ appKey: excludeAppKey, platform }) => appKey === excludeAppKey && (!platform || isApple && platform === "apple" || !isApple && platform === "android")
  );
};
var isSafariRegex = new RegExp(
  /Mozilla\/5\.0 \([^\)]+\) AppleWebKit\/[^\s]+ \(KHTML, like Gecko\) Version\/[^\s]+ (Mobile\/[^\s]+ )?Safari\/[^\s]+$/
);
var getIsTelegram = () => {
  return "TelegramWebview" in window || // Android
  "TelegramWebviewProxy" in window || // iPhone
  "TelegramWebviewProxyProto" in window;
};
var appNameCustom = {
  telegram: {
    name: "Telegram"
  }
};
var getDetectClientSide = () => {
  if (typeof window === "undefined") return;
  if (getIsTelegram()) return "telegram";
  return;
};
var appKeysDetectByCustom = Object.keys(
  appNameCustom
);
var appNameRegExps = {
  messenger: {
    regex: /(\bFB[\w_]+\/(Messenger))|(^(?!.*\buseragents)(?!.*\bIABMV).*(FB_IAB|FBAN).*)/i,
    // Experimental for newer UAs - don't have `"useragents:" or end in "IABMV"
    name: "Facebook Messenger"
  },
  instagram: {
    regex: /\bInstagram/i,
    name: "Instagram"
  },
  facebook: {
    regex: /\bFB[\w_]+\/|\bFacebook/i,
    name: "Facebook"
  },
  twitter: {
    regex: /\bTwitter/i,
    name: "Twitter"
  },
  line: {
    regex: /\bLine\//i,
    name: "Line"
  },
  wechat: {
    regex: /\bMicroMessenger\//i,
    name: "WeChat"
  },
  threads: {
    regex: /\bBarcelona/i,
    name: "Threads"
  },
  tiktok: {
    regex: /musical_ly|Bytedance/i,
    name: "TikTok"
  },
  snapchat: {
    regex: /Snapchat/i,
    name: "Snapchat"
  },
  linkedin: {
    regex: /LinkedInApp/i,
    name: "LinkedIn"
  },
  gsa: {
    regex: /GSA/i,
    name: "Google Search App"
  },
  whatsapp: {
    regex: /\b(WAiOS|WA4A)\//i,
    name: "WhatsApp"
  },
  reddit: {
    regex: /\bReddit\//i,
    name: "Reddit"
  }
};
var appKeysDetectByUA = Object.keys(
  appNameRegExps
);
var getAppKey = (ua) => {
  return appKeysDetectByUA.find(
    (appName) => appNameRegExps[appName].regex.test(ua)
  );
};
var inAppRegExps = [
  "WebView",
  // Apple devices but not with "Safari/" following
  "(iPhone|iPod|iPad)(?!.*Safari/)",
  // Android webview
  "Android.*wv\\)"
];
var inappRegex = new RegExp(
  `${inAppRegExps.map((reg) => `(${reg})`).join("|")}`,
  "i"
);
var InAppSpy = (options = {}) => {
  var _a3, _b2;
  const { skip, ua = "" } = options;
  const userAgent = ua || getUA();
  if (!userAgent)
    return __spreadProps(__spreadValues({}, empty), {
      ua: userAgent
    });
  const skipFn = (key) => checkSkip({ skip, appKey: key, ua: userAgent });
  const uaAppKey = getAppKey(userAgent);
  if (uaAppKey || userAgent.match(inappRegex) !== null) {
    if (skipFn(uaAppKey)) return __spreadProps(__spreadValues({}, empty), { ua: userAgent, skipped: true });
    return {
      isInApp: true,
      appKey: uaAppKey,
      appName: uaAppKey ? appNameRegExps[uaAppKey].name : void 0,
      ua: userAgent,
      skipped: false
    };
  }
  const clientAppKey = getDetectClientSide();
  if (clientAppKey) {
    if (skipFn(clientAppKey)) return __spreadProps(__spreadValues({}, empty), { ua: userAgent, skipped: true });
    return {
      isInApp: true,
      appKey: clientAppKey,
      appName: (_b2 = (_a3 = appNameCustom) == null ? void 0 : _a3[clientAppKey]) == null ? void 0 : _b2.name,
      ua: userAgent,
      skipped: false
    };
  }
  return __spreadProps(__spreadValues({}, empty), {
    ua: userAgent
  });
};
var index_default = InAppSpy;
if (typeof window !== "undefined" && false) {
  window.InAppSpy = InAppSpy;
  window.SFSVCExperimental = SFSVCExperimental;
}

// node_modules/ismobilejs/esm/isMobile.js
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function(navigator2) {
  return typeof navigator2 !== "undefined" && navigator2.platform === "MacIntel" && typeof navigator2.maxTouchPoints === "number" && navigator2.maxTouchPoints > 1 && typeof MSStream === "undefined";
};
function createMatch(userAgent) {
  return function(regex) {
    return regex.test(userAgent);
  };
}
function isMobile(param) {
  var nav = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  if (!param && typeof navigator !== "undefined") {
    nav = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      maxTouchPoints: navigator.maxTouchPoints || 0
    };
  } else if (typeof param === "string") {
    nav.userAgent = param;
  } else if (param && param.userAgent) {
    nav = {
      userAgent: param.userAgent,
      platform: param.platform,
      maxTouchPoints: param.maxTouchPoints || 0
    };
  }
  var userAgent = nav.userAgent;
  var tmp = userAgent.split("[FBAN");
  if (typeof tmp[1] !== "undefined") {
    userAgent = tmp[0];
  }
  tmp = userAgent.split("Twitter");
  if (typeof tmp[1] !== "undefined") {
    userAgent = tmp[0];
  }
  var match = createMatch(userAgent);
  var result = {
    apple: {
      phone: match(appleIphone) && !match(windowsPhone),
      ipod: match(appleIpod),
      tablet: !match(appleIphone) && (match(appleTablet) || isAppleTabletOnIos13(nav)) && !match(windowsPhone),
      universal: match(appleUniversal),
      device: (match(appleIphone) || match(appleIpod) || match(appleTablet) || match(appleUniversal) || isAppleTabletOnIos13(nav)) && !match(windowsPhone)
    },
    amazon: {
      phone: match(amazonPhone),
      tablet: !match(amazonPhone) && match(amazonTablet),
      device: match(amazonPhone) || match(amazonTablet)
    },
    android: {
      phone: !match(windowsPhone) && match(amazonPhone) || !match(windowsPhone) && match(androidPhone),
      tablet: !match(windowsPhone) && !match(amazonPhone) && !match(androidPhone) && (match(amazonTablet) || match(androidTablet)),
      device: !match(windowsPhone) && (match(amazonPhone) || match(amazonTablet) || match(androidPhone) || match(androidTablet)) || match(/\bokhttp\b/i)
    },
    windows: {
      phone: match(windowsPhone),
      tablet: match(windowsTablet),
      device: match(windowsPhone) || match(windowsTablet)
    },
    other: {
      blackberry: match(otherBlackBerry),
      blackberry10: match(otherBlackBerry10),
      opera: match(otherOpera),
      firefox: match(otherFirefox),
      chrome: match(otherChrome),
      device: match(otherBlackBerry) || match(otherBlackBerry10) || match(otherOpera) || match(otherFirefox) || match(otherChrome)
    },
    any: false,
    phone: false,
    tablet: false
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device;
  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}

// node_modules/vevet/lib/esm/internal/cn.js
function cnAdd(element, className) {
  element.classList.add(className);
}
function cnRemove(element, className) {
  if (className) {
    element.classList.remove(className);
  }
}
function cnToggle(element, className, is) {
  if (className) {
    element.classList.toggle(className, is);
  }
}
function cnHas(element, className) {
  return element.classList.contains(className);
}

// node_modules/vevet/lib/esm/internal/env.js
var isBrowser = typeof window !== "undefined";
var doc = isBrowser ? document : void 0;
var html = isBrowser ? doc.documentElement : void 0;
var body = isBrowser ? doc.body : void 0;

// node_modules/vevet/lib/esm/manifest.json
var manifest_default = {
  version: "5.10.0"
};

// node_modules/vevet/lib/esm/internal/noopIfDestroyed.js
function noopIfDestroyed(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function check(...args) {
    if (this._isDestroyed) {
      return;
    }
    return originalMethod.apply(this, args);
  };
}

// node_modules/vevet/lib/esm/internal/safeAction.js
function safeAction(action) {
  try {
    action();
  } catch (e) {
    console.error(e);
  }
}

// node_modules/vevet/lib/esm/utils/common/closest.js
function closest(target, values) {
  if (!Array.isArray(values) || values.length === 0) {
    return target;
  }
  return values.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
}

// node_modules/vevet/lib/esm/internal/isNumber.js
function isNumber(value) {
  return typeof value === "number";
}

// node_modules/vevet/lib/esm/internal/isFiniteNumber.js
function isFiniteNumber(value) {
  return isNumber(value) && !Number.isNaN(value) && Number.isFinite(value);
}

// node_modules/vevet/lib/esm/internal/onlyFinite.js
function onlyFinite(value, defaultValue = 0) {
  if (isFiniteNumber(value)) {
    return value;
  }
  return defaultValue;
}

// node_modules/vevet/lib/esm/utils/common/toPixels.js
function toPixels(value) {
  if (!isBrowser) {
    return 0;
  }
  const app2 = initVevet();
  if (!window.vevet5_toPixelsCache) {
    window.vevet5_toPixelsCache = /* @__PURE__ */ new Map();
    app2.onResize("any", () => {
      window.vevet5_toPixelsCache.clear();
    }, { name: "toPixels" });
  }
  if (window.vevet5_toPixelsCache.has(value)) {
    return window.vevet5_toPixelsCache.get(value);
  }
  let finalValue = 0;
  const num = parseFloat(`${value}`);
  if (isNumber(value)) {
    finalValue = value;
  } else if (Number.isNaN(num)) {
    finalValue = 0;
  } else if (value.includes("rem")) {
    finalValue = num * app2.rem;
  } else if (value.includes("vw")) {
    finalValue = num * app2.vw;
  } else if (value.includes("vh")) {
    finalValue = num * app2.vh;
  } else if (value.includes("svh")) {
    finalValue = num * app2.svh;
  } else if (value.includes("px")) {
    finalValue = num;
  }
  finalValue = onlyFinite(finalValue);
  window.vevet5_toPixelsCache.set(value, finalValue);
  return finalValue;
}

// node_modules/vevet/lib/esm/utils/common/uid.js
var index = 0;
function uid(prefix = "id") {
  index += 1;
  return `${prefix}_${index}`;
}

// node_modules/vevet/lib/esm/base/Callbacks/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var Callbacks = class {
  constructor(_props = {}) {
    this._props = _props;
    this._isDestroyed = false;
    this._list = [];
  }
  /** Returns the list of all registered callbacks. */
  get list() {
    return this._list;
  }
  /**
   * Registers a callback for an event.
   * @param target - Event name to associate the callback with.
   * @param action - Function to execute on the event.
   * @param settings - Optional callback settings (e.g., timeout, one-time).
   * @returns Callback ID and a removal function.
   */
  add(target, action, settings = {}) {
    const id = uid("callback");
    this._list.push(Object.assign(Object.assign({}, settings), {
      id,
      target,
      action
    }));
    return { id, remove: () => this.remove(id) };
  }
  /**
   * Adds a callback and returns a destructor to remove it.
   * @param target - Event name to associate the callback with.
   * @param action - Function to execute on the event.
   * @param settings - Optional callback settings (e.g., timeout, one-time).
   * @returns A function to remove the callback.
   */
  on(target, action, settings = {}) {
    const callback = this.add(target, action, settings);
    return () => {
      callback.remove();
    };
  }
  /**
   * Removes a callback by its ID.
   * @param id - ID of the callback to remove.
   * @returns `true` if the callback was removed, `false` otherwise.
   */
  remove(id) {
    return this._remove(id);
  }
  /**
   * Removes a callback, with an option to force removal of protected callbacks.
   * @param callbackId - ID of the callback to remove.
   * @param canRemoveProtected - Whether to forcibly remove protected callbacks.
   * @returns `true` if the callback was removed, `false` otherwise.
   */
  _remove(callbackId, canRemoveProtected = false) {
    this._list = this._list.filter((callback) => {
      if (callback.id !== callbackId) {
        return true;
      }
      if (callback.protected && !canRemoveProtected) {
        return true;
      }
      return false;
    });
    const hasCallback = this._list.some(({ id }) => id === callbackId);
    return !hasCallback;
  }
  /** Removes all callbacks, including protected ones. */
  _removeAll() {
    while (this._list.length > 0) {
      this._remove(this._list[0].id, true);
    }
  }
  /**
   * Executes a callback and removes it if marked as `isOnce`.
   * @param callback - Callback to execute.
   * @param parameter - Argument to pass to the callback.
   */
  _callAction(_a3, parameter) {
    var { id, timeout, action } = _a3, callback = __rest(_a3, ["id", "timeout", "action"]);
    const { ctx } = this._props;
    if (timeout) {
      setTimeout(() => safeAction(() => action(parameter, ctx)), timeout);
    } else {
      safeAction(() => action(parameter, ctx));
    }
    if (callback.once) {
      this._remove(id, true);
    }
  }
  /**
   * Triggers all callbacks for a given event.
   * @param target - Event name to trigger.
   * @param arg - Argument to pass to the callbacks.
   */
  emit(target, arg) {
    this._list.forEach((callback) => {
      if (callback.target === target) {
        this._callAction(callback, arg);
      }
    });
  }
  /** Removes all registered callbacks. */
  destroy() {
    this._removeAll();
    this._isDestroyed = true;
  }
};
__decorate([
  noopIfDestroyed
], Callbacks.prototype, "add", null);
__decorate([
  noopIfDestroyed
], Callbacks.prototype, "on", null);
__decorate([
  noopIfDestroyed
], Callbacks.prototype, "remove", null);
__decorate([
  noopIfDestroyed
], Callbacks.prototype, "emit", null);
__decorate([
  noopIfDestroyed
], Callbacks.prototype, "destroy", null);

// node_modules/vevet/lib/esm/utils/listeners/addEventListener.js
function addEventListener(element, target, listener, options) {
  element.addEventListener(target, listener, options);
  const remove = () => {
    element.removeEventListener(target, listener, options);
  };
  return remove;
}

// node_modules/vevet/lib/esm/utils/listeners/normalizeWheel.js
var import_normalize_wheel = __toESM(require_normalize_wheel());
function normalizeWheel(event) {
  return (0, import_normalize_wheel.default)(event);
}

// node_modules/vevet/lib/esm/utils/listeners/onResize.js
function onResize({ callback, element, viewportTarget = "width", resizeDebounce = 0, name }) {
  const core = initVevet();
  let timeout;
  let resizeObserver;
  let viewportCallback;
  const debounceResize = (delay) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    timeout = setTimeout(() => callback(), delay !== null && delay !== void 0 ? delay : resizeDebounce);
  };
  if (element) {
    resizeObserver = new ResizeObserver(() => {
      debounceResize(core.props.resizeDebounce + resizeDebounce);
    });
    (Array.isArray(element) ? element : [element]).forEach((el) => {
      resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(el);
    });
  }
  if (viewportTarget) {
    viewportCallback = core.onResize(viewportTarget, () => debounceResize(), {
      name
    });
  }
  return {
    remove: () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
      viewportCallback === null || viewportCallback === void 0 ? void 0 : viewportCallback();
    },
    resize: () => callback(),
    debounceResize: () => debounceResize()
  };
}

// node_modules/vevet/lib/esm/core/handlers/createPageLoad/index.js
function createPageLoad({ prefix, applyClassNames }) {
  const callbacks = new Callbacks();
  let isLoaded = false;
  if (doc.readyState === "complete") {
    setTimeout(() => handleLoaded(), 0);
  } else {
    addEventListener(window, "load", () => handleLoaded());
  }
  function handleLoaded() {
    const { body: body2 } = document;
    isLoaded = true;
    if (applyClassNames) {
      cnRemove(html, `${prefix}loading`);
      cnRemove(body2, `${prefix}loading`);
      cnAdd(html, `${prefix}loaded`);
    }
    callbacks.emit("loaded", void 0);
  }
  function onLoad(callback) {
    if (isLoaded) {
      callback();
      return () => {
      };
    }
    return callbacks.on("loaded", () => callback());
  }
  return { onLoad, getIsLoaded: () => isLoaded };
}

// node_modules/vevet/lib/esm/core/handlers/createViewport/index.js
function createViewport({ prefix, props, isMobile: isMobile2, isInApp, browserName }) {
  let styles2 = doc.getElementById("vevet_css_preset");
  if (!styles2) {
    styles2 = doc.createElement("style");
    styles2.id = "vevet_css_preset";
    body.appendChild(styles2);
  }
  const svhHelper = doc.createElement("div");
  const { style: style3 } = svhHelper;
  svhHelper.id = "vevet_svh_helper";
  style3.position = "fixed";
  style3.top = "-100svh";
  style3.left = "-100px";
  style3.width = "1px";
  style3.height = "100svh";
  body.appendChild(svhHelper);
  const callbacks = new Callbacks();
  const data = {
    width: 0,
    height: 0,
    sHeight: 0,
    vw: 0,
    vh: 0,
    svh: 0,
    scrollbarWidth: 0,
    rem: 16,
    landscape: false,
    portrait: false,
    dpr: window.devicePixelRatio,
    lowerDpr: window.devicePixelRatio
  };
  updateValues();
  updateClassNames();
  updateCSSVars();
  let debounce;
  function debounceResize() {
    if (debounce) {
      clearTimeout(debounce);
      debounce = void 0;
    }
    if (props.resizeDebounce) {
      debounce = setTimeout(() => onResize2(), props.resizeDebounce);
    } else {
      onResize2();
    }
  }
  addEventListener(window, "resize", () => debounceResize());
  const observer = new ResizeObserver(() => debounceResize());
  observer.observe(html);
  observer.observe(body);
  function onResize2() {
    const { width: prevWidth, height: prevHeight } = data;
    updateValues();
    updateClassNames();
    updateCSSVars();
    const { width, height } = data;
    callbacks.emit("trigger", void 0);
    if (width !== prevWidth || height !== prevHeight) {
      callbacks.emit("any", void 0);
    }
    if (width !== prevWidth && height === prevHeight) {
      callbacks.emit("onlyWidth", void 0);
    }
    if (height !== prevHeight && width === prevWidth) {
      callbacks.emit("onlyHeight", void 0);
    }
    if (width !== prevWidth && height !== prevHeight) {
      callbacks.emit("both", void 0);
    }
    if (width !== prevWidth) {
      callbacks.emit("width", void 0);
    }
    if (height !== prevHeight) {
      callbacks.emit("height", void 0);
    }
  }
  function updateValues() {
    const { width: prevWidth } = data;
    const vWidth = window.innerWidth;
    const vHeight = window.innerHeight;
    data.width = vWidth;
    data.height = vHeight;
    data.scrollbarWidth = vWidth - html.clientWidth;
    data.vw = data.width / 100;
    data.vh = data.height / 100;
    const rootStyles = getComputedStyle(html);
    const fontSize = parseFloat(rootStyles.fontSize);
    data.rem = isFiniteNumber(fontSize) ? fontSize : 16;
    data.landscape = data.width > data.height;
    data.portrait = data.width < data.height;
    data.dpr = window.devicePixelRatio;
    data.lowerDpr = !isMobile2 ? 1 : Math.min(data.dpr, 2);
    if (isMobile2 && (isInApp || browserName.includes("fxios"))) {
      const rootHeight = html.clientHeight;
      if (prevWidth !== data.width || !data.sHeight) {
        data.sHeight = rootHeight;
        data.svh = data.sHeight / 100;
      } else if (prevWidth === data.width && rootHeight < data.sHeight) {
        data.sHeight = rootHeight;
        data.svh = data.sHeight / 100;
      }
    } else {
      data.svh = svhHelper.clientHeight / 100 || html.clientHeight / 100;
      data.sHeight = data.svh * 100;
    }
  }
  function updateClassNames() {
    if (!props.applyClassNames) {
      return;
    }
    cnToggle(html, `${prefix}landscape`, data.landscape);
    cnToggle(html, `${prefix}portrait`, data.portrait);
  }
  function updateCSSVars() {
    styles2.innerHTML = `
      html {
        --vw: ${data.vw}px;
        --vh: ${data.vh}px;
        --svh: ${data.svh}px;
        --scrollbar-width: ${data.scrollbarWidth}px;
      }
    `;
  }
  return { data, callbacks };
}

// node_modules/vevet/lib/esm/core/index.js
function Core(input) {
  var _a3;
  const defaultProps = {
    resizeDebounce: 0,
    easing: [0.25, 0.1, 0.25, 1],
    applyClassNames: false
  };
  const props = Object.assign(Object.assign({}, defaultProps), input);
  const prefix = "v-";
  const browserData = detect();
  const device = isMobile();
  const osName = (_a3 = (browserData === null || browserData === void 0 ? void 0 : browserData.os) || "") === null || _a3 === void 0 ? void 0 : _a3.split(" ")[0].toLowerCase();
  const browserName = ((browserData === null || browserData === void 0 ? void 0 : browserData.name) || "").toLowerCase();
  const isMobileByUserAgent = device.phone || device.tablet;
  let isMobile2 = isMobileByUserAgent;
  if (!isMobile2) {
    if (!window.matchMedia("(pointer: fine)").matches) {
      isMobile2 = true;
    }
  }
  const { isInApp, appName } = index_default();
  const inAppBrowser = isInApp ? (appName || "unknown").toLowerCase() : false;
  const pageLoad = createPageLoad({
    prefix,
    applyClassNames: props.applyClassNames
  });
  const viewport = createViewport({
    prefix,
    props,
    isMobile: isMobile2,
    isInApp,
    browserName
  });
  const output = Object.assign(Object.assign({}, viewport.data), {
    viewportCallbacks: viewport.callbacks,
    version: manifest_default.version,
    props,
    prefix,
    phone: device.phone,
    tablet: device.tablet,
    mobile: isMobile2,
    osName,
    browserName,
    inAppBrowser,
    doc,
    html,
    body,
    loaded: false,
    onLoad: pageLoad.onLoad,
    onResize: (...params) => viewport.callbacks.on(...params)
  });
  pageLoad.onLoad(() => {
    output.loaded = true;
  });
  viewport.callbacks.add("trigger", () => {
    const keys = Object.keys(viewport.data);
    keys.forEach((key) => {
      output[key] = viewport.data[key];
    });
  }, { protected: true, name: "vevet core" });
  (function setDeviceFeatures() {
    if (!props.applyClassNames) {
      return;
    }
    cnAdd(html, `${prefix}os-${osName}`);
    cnAdd(html, `${prefix}browser-${browserName}`);
    cnToggle(html, `${prefix}phone`, output.phone);
    cnToggle(html, `${prefix}tablet`, output.tablet);
    cnToggle(html, `${prefix}mobile`, output.mobile);
  })();
  return output;
}

// node_modules/vevet/lib/esm/global/initVevet.js
function initVevet() {
  var _a3;
  if (!isBrowser) {
    return void 0;
  }
  if (window.vevet5) {
    return window.vevet5;
  }
  const coreProps = (_a3 = window.VEVET_PROPS) !== null && _a3 !== void 0 ? _a3 : {};
  const core = Core(coreProps);
  window.vevet5 = core;
  return window.vevet5;
}
if (isBrowser) {
  window.vevet5 = initVevet();
}

// node_modules/vevet/lib/esm/core/scripts/presetCssVars.js
var presetCssVars = `var presetVevetCss = function update() {
  if (window.vevet5) {
    return;
  }

  var doc = document.documentElement;

  var styles = document.getElementById('vevet_css_preset');
  if (!styles) {
    styles = document.createElement('style');
    styles.id = 'vevet_css_preset';
    document.body.appendChild(styles);
  }

  var w = window.innerWidth;
  var h = window.innerHeight;
  var sh = doc.clientHeight;
  var scrollbarWidth = window.innerWidth - doc.clientWidth;

  styles.innerHTML = 'html { --vw: ' + w / 100 + 'px; --vh: ' + h / 100 + 'px; --svh: ' + sh / 100 + 'px; --scrollbar-width: ' + scrollbarWidth + 'px; }';
};

window.addEventListener('resize', presetVevetCss);

var presetVevetCssObserver = new ResizeObserver(presetVevetCss);
presetVevetCssObserver.observe(document.documentElement);
presetVevetCssObserver.observe(document.body);

presetVevetCss();`;

// node_modules/vevet/lib/esm/utils/math/clamp.js
function clamp(value, min = 0, max = 1) {
  const realMin = Math.min(min, max);
  const realMax = Math.max(min, max);
  return Math.max(realMin, Math.min(value, realMax));
}

// node_modules/vevet/lib/esm/utils/math/scoped.js
function scoped(value, min = 0, max = 1) {
  return (value - min) / (max - min);
}

// node_modules/vevet/lib/esm/utils/math/clampScope.js
function clampScope(value, scope = [0, 1], clamp2 = [0, 1]) {
  const scopedProgress = scoped(value, scope[0], scope[1]);
  return clamp(scopedProgress, clamp2[0], clamp2[1]);
}

// node_modules/vevet/lib/esm/utils/math/lerp.js
function lerp(current, target, factor, approximation = 0) {
  const value = current + (target - current) * factor;
  const difference = Math.abs(target - value);
  if (difference <= approximation) {
    return target;
  }
  return value;
}

// node_modules/vevet/lib/esm/utils/math/damp.js
function damp(current, target, factor, delta, approximation = 0) {
  return lerp(current, target, 1 - Math.exp(-factor * 60 * (delta / 1e3)), approximation);
}

// node_modules/easing-progress/lib/esm/easing.net/easeInBack.js
var EaseInBack = (x) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return c3 * x * x * x - c1 * x * x;
};

// node_modules/easing-progress/lib/esm/easing.net/easeOutBounce.js
var EaseOutBounce = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  }
  if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  }
  if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  }
  return n1 * (x -= 2.625 / d1) * x + 0.984375;
};

// node_modules/easing-progress/lib/esm/easing.net/easeInBounce.js
var EaseInBounce = (x) => 1 - EaseOutBounce(1 - x);

// node_modules/easing-progress/lib/esm/easing.net/easeInCirc.js
var EaseInCirc = (x) => 1 - Math.sqrt(1 - Math.pow(x, 2));

// node_modules/easing-progress/lib/esm/easing.net/easeInCubic.js
var EaseInCubic = (x) => Math.pow(x, 3);

// node_modules/easing-progress/lib/esm/easing.net/easeInElastic.js
var EaseInElastic = (x) => {
  const c4 = 2 * Math.PI / 3;
  return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
};

// node_modules/easing-progress/lib/esm/easing.net/easeInExpo.js
var EaseInExpo = (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10);

// node_modules/easing-progress/lib/esm/easing.net/easeInOutBack.js
var EaseInOutBack = (x) => {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;
  return x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
};

// node_modules/easing-progress/lib/esm/easing.net/easeInOutBounce.js
var EaseInOutBounce = (x) => x < 0.5 ? (1 - EaseOutBounce(1 - 2 * x)) / 2 : (1 + EaseOutBounce(2 * x - 1)) / 2;

// node_modules/easing-progress/lib/esm/easing.net/easeInOutCirc.js
var EaseInOutCirc = (x) => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;

// node_modules/easing-progress/lib/esm/easing.net/easeInOutCubic.js
var EaseInOutCubic = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

// node_modules/easing-progress/lib/esm/easing.net/easeInOutElastic.js
var EaseInOutElastic = (x) => {
  const c5 = 2 * Math.PI / 4.5;
  return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1;
};

// node_modules/easing-progress/lib/esm/easing.net/easeInOutExpo.js
var EaseInOutExpo = (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;

// node_modules/easing-progress/lib/esm/easing.net/easeInOutQuad.js
var EaseInOutQuad = (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

// node_modules/easing-progress/lib/esm/easing.net/easeInOutQuart.js
var EaseInOutQuart = (x) => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;

// node_modules/easing-progress/lib/esm/easing.net/easeInOutQuint.js
var EaseInOutQuint = (x) => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;

// node_modules/easing-progress/lib/esm/easing.net/easeInOutSine.js
var EaseInOutSine = (x) => -(Math.cos(Math.PI * x) - 1) / 2;

// node_modules/easing-progress/lib/esm/easing.net/easeInQuad.js
var EaseInQuad = (x) => Math.pow(x, 2);

// node_modules/easing-progress/lib/esm/easing.net/easeInQuart.js
var EaseInQuart = (x) => Math.pow(x, 4);

// node_modules/easing-progress/lib/esm/easing.net/easeInQuint.js
var EaseInQuint = (x) => Math.pow(x, 5);

// node_modules/easing-progress/lib/esm/easing.net/easeInSine.js
var EaseInSine = (x) => 1 - Math.cos(x * Math.PI / 2);

// node_modules/easing-progress/lib/esm/easing.net/easeOutBack.js
var EaseOutBack = (x) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

// node_modules/easing-progress/lib/esm/easing.net/easeOutCirc.js
var EaseOutCirc = (x) => Math.sqrt(1 - Math.pow(x - 1, 2));

// node_modules/easing-progress/lib/esm/easing.net/easeOutCubic.js
var EaseOutCubic = (x) => 1 - Math.pow(1 - x, 3);

// node_modules/easing-progress/lib/esm/easing.net/easeOutElastic.js
var EaseOutElastic = (x) => {
  const c4 = 2 * Math.PI / 3;
  return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
};

// node_modules/easing-progress/lib/esm/easing.net/easeOutExpo.js
var EaseOutExpo = (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

// node_modules/easing-progress/lib/esm/easing.net/easeOutQuad.js
var EaseOutQuad = (x) => 1 - Math.pow(1 - x, 2);

// node_modules/easing-progress/lib/esm/easing.net/easeOutQuart.js
var EaseOutQuart = (x) => 1 - Math.pow(1 - x, 4);

// node_modules/easing-progress/lib/esm/easing.net/easeOutQuint.js
var EaseOutQuint = (x) => 1 - Math.pow(1 - x, 5);

// node_modules/easing-progress/lib/esm/easing.net/easeOutSine.js
var EaseOutSine = (x) => Math.sin(x * Math.PI / 2);

// node_modules/easing-progress/lib/esm/bezier/index.js
function easingByBezier(progress, bezier) {
  const [x1, y1, x2, y2] = bezier;
  if (x1 === y1 && x2 === y2) {
    return progress;
  }
  const val = [];
  for (let i = 0; i < 11; ++i) {
    val[i] = bezierCalc(i * 0.1, x1, x2);
  }
  if (progress === 0) {
    return 0;
  }
  if (progress === 1) {
    return 1;
  }
  return bezierCalc(bezierX(bezier, progress, val), y1, y2);
}
function bezierCalc(progress, x1, x2) {
  return ((bezierA(x1, x2) * progress + bezierB(x1, x2)) * progress + bezierC(x1)) * progress;
}
function bezierA(x1, x2) {
  return 1 - 3 * x2 + 3 * x1;
}
function bezierB(x1, x2) {
  return 3 * x2 - 6 * x1;
}
function bezierC(x1) {
  return 3 * x1;
}
function bezierX(bezier, progress, val) {
  const x1 = bezier[0];
  const x2 = bezier[2];
  let start = 0;
  let current = 1;
  for (; current !== 10 && val[current] <= progress; ++current) {
    start += 0.1;
  }
  --current;
  const dist = (progress - val[current]) / (val[current + 1] - val[current]);
  const guessForT = start + dist * 0.1;
  const initialSlope = bezierSlope(guessForT, x1, x2);
  if (initialSlope >= 1e-3) {
    return bezierNewtonRaphsonIterate(progress, guessForT, x1, x2);
  }
  if (initialSlope === 0) {
    return guessForT;
  }
  return bezierBinarySubdivide(progress, start, start + 0.1, x1, x2);
}
function bezierSlope(progress, x1, x2) {
  return 3 * bezierA(x1, x2) * progress * progress + 2 * bezierB(x1, x2) * progress + bezierC(x1);
}
function bezierNewtonRaphsonIterate(progress, guessForT, x1, x2) {
  for (let i = 0; i < 4; ++i) {
    const currentSlope = bezierSlope(guessForT, x1, x2);
    if (currentSlope === 0) {
      return guessForT;
    }
    const currentX = bezierCalc(guessForT, x1, x2) - progress;
    guessForT -= currentX / currentSlope;
  }
  return guessForT;
}
function bezierBinarySubdivide(progress, a, b, x1, x2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = a + (b - a) / 2;
    currentX = bezierCalc(currentT, x1, x2) - progress;
    if (currentX > 0) {
      b = currentT;
    } else {
      a = currentT;
    }
  } while (Math.abs(currentX) > 1e-7 && ++i < 10);
  return currentT;
}

// node_modules/easing-progress/lib/esm/easing.js
function easing(progress, easingType = false) {
  if (Array.isArray(easingType)) {
    return easingByBezier(progress, easingType);
  }
  if (typeof easingType === "function") {
    return easingType(progress);
  }
  return progress;
}

// node_modules/vevet/lib/esm/utils/math/easing.js
var easing2 = (progress, easingType) => {
  var _a3;
  if (easingType === void 0) {
    easingType = (_a3 = initVevet().props.easing) !== null && _a3 !== void 0 ? _a3 : false;
  }
  return easing(progress, easingType);
};

// node_modules/vevet/lib/esm/utils/math/inRange.js
function inRange(value, min = 0, max = 1) {
  const realMin = Math.min(min, max);
  const realMax = Math.max(min, max);
  return value >= realMin && value <= realMax;
}

// node_modules/vevet/lib/esm/utils/math/loop.js
function loop(value, min, max) {
  const range = max - min;
  return ((value - min) % range + range) % range + min;
}

// node_modules/vevet/lib/esm/internal/mergeWithNoUndefined.js
function mergeWithNoUndefined(source, add) {
  const addKeys = Object.keys(add);
  const addNonUndefinedKeys = addKeys.filter((key) => add[key] !== void 0);
  const newAdd = addNonUndefinedKeys.reduce((acc, key) => {
    acc[key] = add[key];
    return acc;
  }, {});
  return Object.assign(Object.assign({}, source), newAdd);
}

// node_modules/vevet/lib/esm/base/Module/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Module = class {
  /** Get default static props */
  _getStatic() {
    return { __staticProp: true };
  }
  /** Set default mutable props */
  _getMutable() {
    return { __mutableProp: true };
  }
  /**
   * Current properties. Do not mutate these directly, use {@linkcode updateProps} instead.
   */
  get props() {
    return this._props;
  }
  /** Optional prefix for classnames used by the module */
  get prefix() {
    return initVevet().prefix;
  }
  /** The name of the module, derived from the class name */
  get name() {
    return this.constructor.name;
  }
  /**
   * Checks if the module has been destroyed.
   */
  get isDestroyed() {
    return this._isDestroyed;
  }
  /**
   * Retrieves the module's callbacks instance.
   */
  get callbacks() {
    return this._callbacks;
  }
  /**
   * Creates a new instance of the Module class.
   */
  constructor(props, onCallbacksProp) {
    this._isDestroyed = false;
    this._destroyable = [];
    this._callbacks = new Callbacks({ ctx: this });
    this._props = mergeWithNoUndefined(Object.assign(Object.assign({}, this._getStatic()), this._getMutable()), Object.assign({}, props));
    const onCallbacks = Object.assign(Object.assign({}, props), onCallbacksProp);
    if (onCallbacks) {
      const callbacksProps = Object.keys(onCallbacks).filter((key) => key.startsWith("on") && typeof onCallbacks[key] === "function");
      callbacksProps.forEach((key) => {
        let target = key.slice(2);
        target = target.charAt(0).toLowerCase() + target.slice(1);
        this._callbacks.on(target, onCallbacks[key]);
      });
    }
  }
  /**
   * Method that is called when the module's properties mutate. In most cases, used to handle callbacks.
   */
  _handleProps(diff) {
    this.callbacks.emit("props", diff);
  }
  /** Change module's mutable properties */
  updateProps(props) {
    const prevProps = Object.assign({}, this._props);
    const keys = Object.keys(this.props);
    this._props = Object.assign(Object.assign({}, this._props), props);
    const diff = {};
    keys.forEach((key) => {
      const prevValue = prevProps[key];
      const newValue = this._props[key];
      if (prevValue !== newValue) {
        diff[key] = newValue;
      }
    });
    this._handleProps(diff);
  }
  /**
   * Adds a callback on the module's destruction.
   *
   * @param action - The function to execute during destruction.
   */
  onDestroy(action) {
    if (this.isDestroyed) {
      action();
      return;
    }
    this._destroyable.push(action);
  }
  /**
   * Adds a custom callback to the module.
   *
   * @param target - The event type to listen for (e.g., 'props', 'destroy').
   * @param listener - The function to execute when the event is triggered.
   * @param settings - Additional settings for the callback.
   */
  on(target, listener, settings = {}) {
    return this.callbacks.on(target, listener, settings);
  }
  /**
   * Helper function to generate classnames with the module's prefix.
   *
   * @param classNames - The class names to generate.
   * @returns A string of class names with the module's prefix applied.
   */
  _cn(...classNames) {
    return classNames.map((value) => `${this.prefix}${value}`).join(" ");
  }
  /**
   * Adds a class name on an element, and keeps track of it for removal when the module is destroyed.
   *
   * @param element - The target DOM element.
   * @param className - The class name to toggle.
   */
  _addTempClassName(element, className) {
    const isAlreadyExists = cnHas(element, className);
    if (!isAlreadyExists) {
      cnAdd(element, className);
      this.onDestroy(() => cnRemove(element, className));
    }
  }
  /**
   * Destroys the module, cleaning up resources, callbacks, and event listeners.
   */
  destroy() {
    this._destroy();
  }
  /**
   * Internal method to handle the destruction of the module.
   * It removes all callbacks, destroys properties, and cleans up event listeners and class names.
   */
  _destroy() {
    this._callbacks.emit("destroy", void 0);
    this._callbacks.destroy();
    this._destroyable.forEach((action) => action());
    this._isDestroyed = true;
  }
};
__decorate2([
  noopIfDestroyed
], Module.prototype, "updateProps", null);
__decorate2([
  noopIfDestroyed
], Module.prototype, "on", null);
__decorate2([
  noopIfDestroyed
], Module.prototype, "destroy", null);

// node_modules/vevet/lib/esm/base/Responsive/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Responsive = class {
  /** Current props */
  get props() {
    return this._props;
  }
  constructor(_source, _rules, _onChange) {
    this._source = _source;
    this._rules = _rules;
    this._onChange = _onChange;
    this._isDestroyed = false;
    this._destructors = [];
    this._prevBreakpoints = "[]";
    const source = _source;
    const app2 = initVevet();
    const sourceName = source instanceof Module ? source.name : "Object";
    this._fetchInitProps();
    this._props = Object.assign({}, this._initProps);
    if (source instanceof Module) {
      source.on("destroy", () => this.destroy(), {
        name: this.constructor.name,
        protected: true
      });
      const saveUpdateProps = source.updateProps.bind(source);
      source.updateProps = (p) => {
        saveUpdateProps(p);
        this._initProps = Object.assign(Object.assign({}, this._initProps), p);
      };
      Object.defineProperty(source, "_$_responseProps", {
        value: (p) => {
          saveUpdateProps(p);
        }
      });
    }
    this._handleUpdate();
    this._destructors.push(app2.onResize("any", () => this._handleUpdate(), {
      name: `${this.constructor.name} / ${sourceName}`
    }));
  }
  /** Set initial props */
  _fetchInitProps() {
    const source = this._source;
    if (source instanceof Module) {
      this._initProps = {};
      const mutableKeys = Object.keys(source._getMutable());
      mutableKeys.forEach((key) => {
        this._initProps[key] = source.props[key];
      });
      return;
    }
    this._initProps = this._source;
  }
  /** Get active rules */
  _getActiveRules() {
    const app2 = initVevet();
    const rules = this._rules.filter(({ at }) => {
      if (at === "tablet" && app2.tablet) {
        return true;
      }
      if (at === "phone" && app2.phone) {
        return true;
      }
      if (at === "mobile" && app2.mobile) {
        return true;
      }
      if (at === "non_mobile" && !app2.mobile) {
        return true;
      }
      if (at === "portrait" && app2.portrait) {
        return true;
      }
      if (at === "landscape" && app2.landscape) {
        return true;
      }
      if (at.startsWith("@media")) {
        const isMediaActive = window.matchMedia(at.replace("@media", "")).matches;
        return isMediaActive;
      }
      return false;
    });
    return rules;
  }
  /** Get responsive props */
  _getResponsiveProps() {
    const rules = this._getActiveRules();
    let newProps = {};
    rules.forEach(({ props }) => {
      newProps = Object.assign(Object.assign({}, newProps), props);
    });
    return newProps;
  }
  /** Update properties */
  _handleUpdate() {
    var _a3;
    const activeRules = this._getActiveRules();
    const activeBreakpoints = activeRules.map(({ at }) => at);
    const json = JSON.stringify(activeBreakpoints);
    if (this._prevBreakpoints === json) {
      return;
    }
    this._prevBreakpoints = json;
    this._props = Object.assign(Object.assign({}, this._initProps), this._getResponsiveProps());
    if (this._source instanceof Module) {
      this._source._$_responseProps(this._props);
    }
    (_a3 = this._onChange) === null || _a3 === void 0 ? void 0 : _a3.call(this, this.props);
  }
  /**
   * Destroy the instance and clean up resources.
   *
   * The instance is destroyed automatically when it is used to mutate Module's props.
   */
  destroy() {
    this._isDestroyed = true;
    this._destructors.forEach((destructor) => destructor());
  }
};
__decorate3([
  noopIfDestroyed
], Responsive.prototype, "destroy", null);

// node_modules/vevet/lib/esm/components/Canvas/props.js
var STATIC_PROPS = {
  __staticProp: true,
  container: null,
  append: true,
  resizeOnInit: true,
  resizeOnRuntime: false,
  viewportTarget: "any",
  resizeDebounce: 0
};
var MUTABLE_PROPS = {
  __mutableProp: true,
  width: "auto",
  height: "auto",
  dpr: "auto"
};

// node_modules/vevet/lib/esm/components/Canvas/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Canvas = class extends Module {
  /** Get default static properties */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS);
  }
  /** Get default mutable properties */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS);
  }
  /**
   * Constructor for the Ctx2D class.
   */
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._width = 0;
    this._height = 0;
    this._dpr = 1;
    const { container } = this.props;
    this._canvas = doc.createElement("canvas");
    const { style: style3 } = this._canvas;
    style3.position = "absolute";
    style3.top = "0";
    style3.left = "0";
    style3.width = "100%";
    style3.height = "100%";
    if (this.props.append && container instanceof HTMLElement) {
      container.append(this._canvas);
    }
    this._ctx = this._canvas.getContext("2d");
    this._setEvents();
  }
  /** The canvas element instance. */
  get canvas() {
    return this._canvas;
  }
  /** Returns the 2D rendering context */
  get ctx() {
    return this._ctx;
  }
  /** Canvas width (DPR applied). */
  get width() {
    return this._width;
  }
  /** Width without DPR scaling. */
  get offsetWidth() {
    return this.width / this.dpr;
  }
  /** Canvas height (DPR applied). */
  get height() {
    return this._height;
  }
  /** Height without DPR scaling. */
  get offsetHeight() {
    return this.height / this.dpr;
  }
  /** Current device pixel ratio. */
  get dpr() {
    return this._dpr;
  }
  /** Checks if the canvas is ready to render. */
  get canRender() {
    return this.width > 0 && this.height > 0;
  }
  /** Handle property mutations */
  _handleProps(props) {
    super._handleProps(props);
    this.resize();
  }
  /** Set events */
  _setEvents() {
    const { props } = this;
    const { viewportTarget, resizeDebounce } = props;
    if (props.resizeOnInit) {
      this.resize();
    }
    if (!props.resizeOnRuntime) {
      return;
    }
    const resizeHandler = onResize({
      callback: () => this.resize(),
      element: this.props.container,
      viewportTarget,
      resizeDebounce,
      name: this.name
    });
    this.onDestroy(() => resizeHandler.remove());
  }
  /** Triggers a canvas resize based on container or viewport dimensions. */
  resize() {
    const core = initVevet();
    const { props, canvas } = this;
    const { container } = this.props;
    this._dpr = isNumber(props.dpr) ? props.dpr : core.dpr;
    let newWidth = 0;
    let newHeight = 0;
    if (props.width === "auto") {
      newWidth = (container === null || container === void 0 ? void 0 : container.offsetWidth) || core.width;
    } else {
      newWidth = props.width;
    }
    if (props.height === "auto") {
      newHeight = (container === null || container === void 0 ? void 0 : container.offsetHeight) || core.height;
    } else {
      newHeight = props.height;
    }
    newWidth *= this._dpr;
    newHeight *= this._dpr;
    this._width = newWidth;
    this._height = newHeight;
    canvas.width = newWidth;
    canvas.height = newHeight;
    this.callbacks.emit("resize", void 0);
  }
  /**
   * Renders content on the canvas if it's ready.
   *
   * @param render - A function that performs the actual rendering on the canvas.
   */
  render(render) {
    if (!this.canRender) {
      return;
    }
    render({
      ctx: this.ctx,
      width: this.width,
      height: this.height,
      dpr: this.dpr,
      offsetWidth: this.offsetWidth,
      offsetHeight: this.offsetHeight,
      canvas: this.canvas
    });
  }
  /** Destroys the canvas. */
  _destroy() {
    super._destroy();
    this.canvas.remove();
  }
};
__decorate4([
  noopIfDestroyed
], Canvas.prototype, "resize", null);
__decorate4([
  noopIfDestroyed
], Canvas.prototype, "render", null);

// node_modules/get-image-pos/dist/es/getPos.js
function getPos(data) {
  const containerSizes = getContainerSizes(data);
  const sourceSizes = getSourceSizes(data);
  let coords;
  if (data.rule === "cover") {
    coords = getPosCover(data, containerSizes, sourceSizes);
  } else if (data.rule === "contain") {
    coords = getPosContain(data, containerSizes, sourceSizes);
  } else if (data.rule === "top-left") {
    coords = getPosTopLeft(data, sourceSizes);
  } else if (data.rule === "top-right") {
    coords = getPosTopRight(data, containerSizes, sourceSizes);
  } else if (data.rule === "bottom-left") {
    coords = getPosBottomLeft(data, containerSizes, sourceSizes);
  } else if (data.rule === "bottom-right") {
    coords = getPosBottomRight(data, containerSizes, sourceSizes);
  } else if (data.rule === "center") {
    coords = getPosCenter(data, containerSizes, sourceSizes);
  }
  return Object.assign(coords, {
    sourceWidth: sourceSizes.width,
    sourceHeight: sourceSizes.height
  });
}
function getScale(data) {
  if (typeof data.scale !== "undefined") {
    return data.scale;
  }
  return 1;
}
function getSourceSizes(data) {
  const { source } = data;
  if (!!data.sourceWidth && !!data.sourceHeight) {
    return {
      width: data.sourceWidth,
      height: data.sourceHeight
    };
  }
  if (source instanceof HTMLVideoElement) {
    return {
      width: source.videoWidth,
      height: source.videoHeight
    };
  }
  if (source instanceof HTMLImageElement) {
    return {
      width: source.naturalWidth,
      height: source.naturalHeight
    };
  }
  return {
    width: source.width,
    height: source.height
  };
}
function getContainerSizes(data) {
  if ("container" in data) {
    return {
      width: data.container.clientWidth,
      height: data.container.clientHeight
    };
  }
  return {
    width: data.width,
    height: data.height
  };
}
function getPosCover(data, containerSizes, sourceSizes) {
  let width = containerSizes.width * getScale(data);
  let height = sourceSizes.height * width / sourceSizes.width;
  if (height / getScale(data) < containerSizes.height) {
    height = containerSizes.height * getScale(data);
    width = sourceSizes.width * height / sourceSizes.height;
  }
  const x = (containerSizes.width - width) / 2;
  const y = (containerSizes.height - height) / 2;
  return {
    width,
    height,
    x,
    y
  };
}
function getPosContain(data, containerSizes, sourceSizes) {
  let width = 0;
  let height = 0;
  const widthRatio = sourceSizes.width / sourceSizes.height;
  if (containerSizes.width > containerSizes.height) {
    height = containerSizes.height;
    width = height * widthRatio;
    if (width > containerSizes.width) {
      width = containerSizes.width;
      height = width / widthRatio;
    }
  } else if (containerSizes.height >= containerSizes.width) {
    width = containerSizes.width;
    height = width / widthRatio;
    if (height > containerSizes.height) {
      height = containerSizes.height;
      width = height * widthRatio;
    }
  }
  width *= getScale(data);
  height *= getScale(data);
  const x = (containerSizes.width - width) / 2;
  const y = (containerSizes.height - height) / 2;
  return {
    width,
    height,
    x,
    y
  };
}
function getPosTopLeft(data, sourceSizes) {
  const width = sourceSizes.width * getScale(data);
  const height = sourceSizes.height * getScale(data);
  return {
    width,
    height,
    x: 0,
    y: 0
  };
}
function getPosTopRight(data, containerSizes, sourceSizes) {
  const width = sourceSizes.width * getScale(data);
  const height = sourceSizes.height * getScale(data);
  const x = containerSizes.width - sourceSizes.width;
  return {
    width,
    height,
    x,
    y: 0
  };
}
function getPosBottomLeft(data, containerSizes, sourceSizes) {
  const width = sourceSizes.width * getScale(data);
  const height = sourceSizes.height * getScale(data);
  const y = containerSizes.height - sourceSizes.height;
  return {
    width,
    height,
    x: 0,
    y
  };
}
function getPosBottomRight(data, containerSizes, sourceSizes) {
  const width = sourceSizes.width * getScale(data);
  const height = sourceSizes.height * getScale(data);
  const x = containerSizes.width - sourceSizes.width;
  const y = containerSizes.height - sourceSizes.height;
  return {
    width,
    height,
    x,
    y
  };
}
function getPosCenter(data, containerSizes, sourceSizes) {
  const width = sourceSizes.width * getScale(data);
  const height = sourceSizes.height * getScale(data);
  const x = (containerSizes.width - sourceSizes.width) / 2;
  const y = (containerSizes.height - sourceSizes.height) / 2;
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/vevet/lib/esm/components/CanvasMedia/props.js
var STATIC_PROPS2 = Object.assign(Object.assign({}, STATIC_PROPS), { media: null, autoRenderVideo: true });
var MUTABLE_PROPS2 = Object.assign(Object.assign({}, MUTABLE_PROPS), { rule: "cover" });

// node_modules/vevet/lib/esm/components/CanvasMedia/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CanvasMedia = class extends Canvas {
  /** Get default static properties */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS2);
  }
  /** Get default mutable properties */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS2);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._setMediaEvents();
  }
  /** Checks if the media element has the `requestVideoFrameCallback` method */
  get hasRequestVideoFrameCallback() {
    return "requestVideoFrameCallback" in this.props.media;
  }
  /** Add media events */
  _setMediaEvents() {
    const { autoRenderVideo: hasVideoAutoRender, media } = this.props;
    if (!hasVideoAutoRender || !(media instanceof HTMLVideoElement)) {
      return;
    }
    if (this.hasRequestVideoFrameCallback) {
      this._requestVideoFrame();
      return;
    }
    const timeupdate = addEventListener(media, "timeupdate", () => {
      this.render();
    });
    this.onDestroy(() => timeupdate());
  }
  /** Resize the canvas */
  resize() {
    super.resize();
    this.render();
  }
  /** Auto rendering for videos */
  _requestVideoFrame() {
    if (this.isDestroyed) {
      return;
    }
    this.render();
    const { media } = this.props;
    if (media instanceof HTMLVideoElement) {
      media.requestVideoFrameCallback(() => this._requestVideoFrame());
    }
  }
  /** Pre-renders the media resource onto the canvas. */
  render() {
    super.render((props) => this._prerender(props));
  }
  /**
   * Prerenders the media onto the canvas using the specified positioning rule.
   */
  _prerender({ width, height, ctx }) {
    const { media, rule } = this.props;
    let source;
    let sourceWidth;
    let sourceHeight;
    if (media instanceof Canvas) {
      source = media.canvas;
      sourceWidth = media.width;
      sourceHeight = media.height;
    } else {
      source = media;
    }
    const size = getPos({
      source,
      sourceWidth,
      sourceHeight,
      rule,
      scale: 1,
      width,
      height
    });
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(source, size.x, size.y, size.width, size.height);
    this.callbacks.emit("render", void 0);
  }
};
__decorate5([
  noopIfDestroyed
], CanvasMedia.prototype, "resize", null);
__decorate5([
  noopIfDestroyed
], CanvasMedia.prototype, "render", null);

// node_modules/vevet/lib/esm/internal/textDirection.js
function getTextDirection(element) {
  return window.getComputedStyle(element).direction;
}

// node_modules/vevet/lib/esm/components/Raf/props.js
var STATIC_PROPS3 = {
  __staticProp: true
};
var MUTABLE_PROPS3 = {
  __mutableProp: true,
  fps: "auto",
  enabled: false,
  fpsRecalcFrames: 10
};

// node_modules/vevet/lib/esm/components/Raf/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Raf = class extends Module {
  /** Get default static properties */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS3);
  }
  /** Get default mutable properties */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS3);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._isPlaying = false;
    this._raf = null;
    this._lastTimestamp = null;
    this._timestamp = null;
    this._index = 0;
    this._fps = 60;
    this._duration = 0;
    this._fps = this.props.fps === "auto" ? this._fps : this.props.fps;
    if (this.props.enabled) {
      this._play();
    }
  }
  /** Playback state of the animation frame */
  get isPlaying() {
    return this._isPlaying;
  }
  /** Timestamp of the current frame */
  get timestamp() {
    var _a3;
    return (_a3 = this._timestamp) !== null && _a3 !== void 0 ? _a3 : 0;
  }
  /** Current frame index */
  get index() {
    return this._index;
  }
  /** Real-time FPS */
  get fps() {
    return this._fps;
  }
  /** Duration of the last frame in ms */
  get duration() {
    return this._duration;
  }
  /** Scaling coefficient based on a 60 FPS target */
  get fpsFactor() {
    return 60 / this.fps;
  }
  /** Handle property mutations */
  _handleProps(props) {
    super._handleProps(props);
    this._lastTimestamp = null;
    if (this.props.enabled) {
      this._play();
    } else {
      this._pause();
    }
  }
  /** Start the animation loop */
  play() {
    if (this.props.enabled) {
      return;
    }
    this.updateProps({ enabled: true });
  }
  /** Internal method to start the loop */
  _play() {
    if (this.isPlaying) {
      return;
    }
    this._isPlaying = true;
    this.callbacks.emit("play", void 0);
    this.callbacks.emit("toggle", void 0);
    this._raf = window.requestAnimationFrame(this._animate.bind(this));
  }
  /** Pause the animation loop */
  pause() {
    if (!this.props.enabled) {
      return;
    }
    this.updateProps({ enabled: false });
  }
  /** Internal method to pause the loop */
  _pause() {
    if (!this.isPlaying) {
      return;
    }
    if (this._raf) {
      window.cancelAnimationFrame(this._raf);
      this._raf = null;
    }
    this._isPlaying = false;
    this.callbacks.emit("pause", void 0);
    this.callbacks.emit("toggle", void 0);
  }
  /** Animation loop handler, calculates FPS, and triggers callbacks */
  _animate() {
    var _a3, _b2;
    if (!this._isPlaying) {
      return;
    }
    this._raf = window.requestAnimationFrame(this._animate.bind(this));
    const minFrameDuration = this.props.fps === "auto" ? 1 : 1e3 / this.props.fps;
    this._timestamp = performance.now();
    (_a3 = this._lastTimestamp) !== null && _a3 !== void 0 ? _a3 : this._lastTimestamp = this._timestamp;
    const duration = this._timestamp - ((_b2 = this._lastTimestamp) !== null && _b2 !== void 0 ? _b2 : this._timestamp);
    if (duration < minFrameDuration) {
      return;
    }
    this._duration = duration;
    this._lastTimestamp = this._timestamp;
    this._index += 1;
    this._computeFPS();
    this.callbacks.emit("frame", {
      fps: this.fps,
      fpsFactor: this.fpsFactor,
      duration: this.duration,
      lerpFactor: this.lerpFactor.bind(this)
    });
  }
  /** Calculate linear interpolation factor to make animations run the same regardless of FPS */
  lerpFactor(ease) {
    return 1 - Math.exp(-ease * 60 * (this.duration / 1e3));
  }
  /** Compute real-time FPS from frame durations */
  _computeFPS() {
    const { duration, index: index2, props } = this;
    if (index2 > 10 && index2 % props.fpsRecalcFrames !== 0 || duration <= 0 || duration > 250) {
      return;
    }
    const standardFps = 60;
    const standardFrameTime = 1e3 / standardFps;
    const fpsMultiplier = standardFrameTime / duration;
    this._fps = Math.round(60 * fpsMultiplier) || 1;
  }
  /** Destroy the animation frame and stop the loop */
  _destroy() {
    this.pause();
    super._destroy();
  }
};
__decorate6([
  noopIfDestroyed
], Raf.prototype, "play", null);
__decorate6([
  noopIfDestroyed
], Raf.prototype, "pause", null);

// node_modules/vevet/lib/esm/components/Cursor/constants.js
var LERP_APPROXIMATION = 1e-4;

// node_modules/vevet/lib/esm/internal/isString.js
function isString(value) {
  return typeof value === "string";
}

// node_modules/vevet/lib/esm/components/Cursor/HoverElement/index.js
var CursorHoverElement = class {
  constructor(_data, _onEnter, _onLeave) {
    this._data = _data;
    this._onEnter = _onEnter;
    this._onLeave = _onLeave;
    this._debounce = null;
    this._isHovered = false;
    this._parallaxX = {
      current: 0,
      target: 0,
      prevTarget: null
    };
    this._parallaxY = {
      current: 0,
      target: 0,
      prevTarget: null
    };
    const { emitter } = this;
    if (emitter.matches(":hover")) {
      this._handleElementEnter();
    }
    this._mouseEnter = addEventListener(emitter, "mouseenter", () => {
      var _a3;
      this._debounce = setTimeout(() => this._handleElementEnter(), (_a3 = _data.hoverDebounce) !== null && _a3 !== void 0 ? _a3 : 16);
    });
    this._mouseLeave = addEventListener(emitter, "mouseleave", () => {
      if (this._debounce) {
        clearTimeout(this._debounce);
      }
      this._handleElementLeave();
    });
    this._mouseMove = addEventListener(emitter, "mousemove", (evt) => {
      this._handleElementMove(evt);
    });
  }
  get element() {
    return this._data.element;
  }
  get emitter() {
    var _a3;
    return (_a3 = this._data.emitter) !== null && _a3 !== void 0 ? _a3 : this._data.element;
  }
  get type() {
    return this._data.type;
  }
  get snap() {
    var _a3;
    return (_a3 = this._data.snap) !== null && _a3 !== void 0 ? _a3 : false;
  }
  get width() {
    if (this._data.width === "auto") {
      return "auto";
    }
    if (this._data.width) {
      return toPixels(this._data.width);
    }
    return null;
  }
  get height() {
    if (this._data.height === "auto") {
      return "auto";
    }
    if (this._data.height) {
      return toPixels(this._data.height);
    }
    return null;
  }
  get padding() {
    return this._data.padding ? toPixels(this._data.padding) : 0;
  }
  get sticky() {
    var _a3;
    return (_a3 = this._data.sticky) !== null && _a3 !== void 0 ? _a3 : false;
  }
  get stickyLerp() {
    var _a3;
    return (_a3 = this._data.stickyLerp) !== null && _a3 !== void 0 ? _a3 : void 0;
  }
  get stickyFriction() {
    var _a3;
    return (_a3 = this._data.stickyFriction) !== null && _a3 !== void 0 ? _a3 : 0;
  }
  get hasStickyFriction() {
    return isFiniteNumber(this.stickyFriction) && this.stickyFriction > 0;
  }
  /** Get element dimensions */
  getDimensions() {
    let x;
    let y;
    let width;
    let height;
    let padding = 0;
    const bounding = this.element.getBoundingClientRect();
    if (this.snap) {
      x = bounding.left + bounding.width / 2;
      y = bounding.top + bounding.height / 2;
    }
    if (this.width === "auto") {
      width = bounding.width;
    } else if (isNumber(this.width)) {
      width = this.width;
    }
    if (this.height === "auto") {
      height = bounding.height;
    } else if (isNumber(this.height)) {
      height = this.height;
    }
    padding = this.padding;
    return { x, y, width, height, padding };
  }
  /** Destroy all events */
  destroy() {
    this._mouseEnter();
    this._mouseMove();
    this._mouseLeave();
    if (this._debounce) {
      clearTimeout(this._debounce);
    }
  }
  /** Handle element enter */
  _handleElementEnter() {
    this._isHovered = true;
    this._onEnter(this);
  }
  /** Handle element leave */
  _handleElementLeave() {
    this._isHovered = false;
    this._parallaxX.target = 0;
    this._parallaxX.prevTarget = null;
    this._parallaxY.target = 0;
    this._parallaxY.prevTarget = null;
    this._onLeave(this);
  }
  /** Handle element move */
  _handleElementMove(evt) {
    if (!this.sticky || !this._isHovered) {
      return;
    }
    const { element, _parallaxX: parallaxX, _parallaxY: parallaxY } = this;
    const { clientX, clientY } = evt;
    const bounding = element.getBoundingClientRect();
    const computed = getComputedStyle(element).transform;
    const matrix = computed === "none" ? new DOMMatrix() : new DOMMatrix(computed);
    const { width, height } = bounding;
    const translateX = matrix.e;
    const translateY = matrix.f;
    const basicLeft = bounding.left - translateX;
    const basicTop = bounding.top - translateY;
    const basicCenterX = basicLeft + width / 2;
    const basicCenterY = basicTop + height / 2;
    const distanceX = clientX - basicCenterX;
    const distanceY = clientY - basicCenterY;
    const amp = this._getStickyAmplitude();
    const maxX = amp.x === "auto" ? width : Math.abs(amp.x);
    const maxY = amp.y === "auto" ? height : Math.abs(amp.y);
    const parallaxXTarget = clamp(distanceX, -maxX, maxX);
    const parallaxYTarget = clamp(distanceY, -maxY, maxY);
    if (parallaxX.prevTarget === null) {
      parallaxX.prevTarget = parallaxXTarget;
    }
    if (parallaxY.prevTarget === null) {
      parallaxY.prevTarget = parallaxYTarget;
    }
    if (this.hasStickyFriction) {
      const parallaxXDelta = parallaxXTarget - parallaxX.prevTarget;
      const parallaxYDelta = parallaxYTarget - parallaxY.prevTarget;
      parallaxX.target += parallaxXDelta;
      parallaxY.target += parallaxYDelta;
    } else {
      parallaxX.target = parallaxXTarget;
      parallaxY.target = parallaxYTarget;
    }
    parallaxX.prevTarget = parallaxXTarget;
    parallaxY.prevTarget = parallaxYTarget;
  }
  /** Get sticky amplitude for both axis */
  _getStickyAmplitude() {
    const { stickyAmplitude } = this._data;
    let x = "auto";
    let y = "auto";
    if (!stickyAmplitude) {
      return { x, y };
    }
    if (isNumber(stickyAmplitude) || isString(stickyAmplitude)) {
      x = this._getStickyAmplitudeAxis(stickyAmplitude);
      y = this._getStickyAmplitudeAxis(stickyAmplitude);
    } else {
      if ("x" in stickyAmplitude) {
        x = this._getStickyAmplitudeAxis(stickyAmplitude.x);
      }
      if ("y" in stickyAmplitude) {
        y = this._getStickyAmplitudeAxis(stickyAmplitude.y);
      }
    }
    return { x, y };
  }
  /** Get sticky amplitude for one axis */
  _getStickyAmplitudeAxis(value) {
    if (isNumber(value)) {
      return value;
    }
    if (!value || value === "auto") {
      return "auto";
    }
    return toPixels(value);
  }
  /** Check if the element is interpolated */
  get isInterpolated() {
    return this._parallaxX.current === this._parallaxX.target && this._parallaxY.current === this._parallaxY.target;
  }
  /** Render the element */
  render(getLerp) {
    const { _parallaxX: parallaxX, _parallaxY: parallaxY } = this;
    const element = this.element;
    if (!this.sticky || this.isInterpolated) {
      return;
    }
    if (this.hasStickyFriction) {
      const frictionLerp = getLerp(this.stickyFriction);
      parallaxX.target = lerp(parallaxX.target, 0, frictionLerp, LERP_APPROXIMATION);
      parallaxY.target = lerp(parallaxY.target, 0, frictionLerp, LERP_APPROXIMATION);
    }
    const lerpFactor = getLerp(this.stickyLerp);
    parallaxX.current = lerp(parallaxX.current, parallaxX.target, lerpFactor, LERP_APPROXIMATION);
    parallaxY.current = lerp(parallaxY.current, parallaxY.target, lerpFactor, LERP_APPROXIMATION);
    element.style.transform = `translate3d(${parallaxX.current}px, ${parallaxY.current}px, 0)`;
  }
};

// node_modules/vevet/lib/esm/components/Cursor/Path/svgQuadraticCurvePath.js
var svgQuadraticCurvePath = (points) => {
  let path = `M${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const xMid = (points[i].x + points[i + 1].x) / 2;
    const yMid = (points[i].y + points[i + 1].y) / 2;
    path += `Q ${points[i].x}, ${points[i].y}, ${xMid}, ${yMid}`;
  }
  path += `L ${points[points.length - 1].x}, ${points[points.length - 1].y}`;
  return path;
};

// node_modules/vevet/lib/esm/components/Cursor/Path/index.js
var CursorPath = class {
  /** Cursor SVG Path */
  get path() {
    return this._path;
  }
  constructor(_isEnabled) {
    this._isEnabled = _isEnabled;
    this._points = [];
    this._line = { current: 0, target: 0 };
    this._path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path = this._path;
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("fill", "transparent");
    path.setAttribute("stroke", "#f00");
  }
  /** Update SVG Path */
  addPoint(coords, isInstant = false) {
    if (!this._isEnabled) {
      return;
    }
    const points = this._points;
    const path = this._path;
    const line = this._line;
    const newPoint = { x: coords.x, y: coords.y, length: 0 };
    points.push(newPoint);
    path.setAttribute("d", svgQuadraticCurvePath(points));
    const totalLength = path.getTotalLength();
    newPoint.length = totalLength;
    line.target = totalLength;
    if (isInstant) {
      line.current = line.target;
    }
  }
  /** Minimize SVG Path */
  minimize() {
    if (!this._isEnabled) {
      return;
    }
    const points = this._points;
    const line = this._line;
    if (points.length < 3) {
      return;
    }
    let accumulated = 0;
    let removeCount = 0;
    for (let i = 1; i < points.length; i += 1) {
      const dx = points[i].x - points[i - 1].x;
      const dy = points[i].y - points[i - 1].y;
      const segLength = Math.hypot(dx, dy);
      if (accumulated + segLength < line.current) {
        accumulated += segLength;
        removeCount += 1;
      } else {
        break;
      }
    }
    if (isFiniteNumber(removeCount) && removeCount > 0) {
      let removedLength = 0;
      for (let i = 1; i <= removeCount; i += 1) {
        const dx = points[i].x - points[i - 1].x;
        const dy = points[i].y - points[i - 1].y;
        removedLength += Math.hypot(dx, dy);
      }
      points.splice(0, removeCount);
      line.current = Math.max(0, line.current - removedLength);
      line.target = Math.max(0, line.target - removedLength);
      this._path.setAttribute("d", svgQuadraticCurvePath(points));
    }
  }
  /** Check if the path is interpolated */
  get isInterpolated() {
    return this._line.current === this._line.target;
  }
  /** Interpolate line */
  lerp(factor) {
    const line = this._line;
    line.current = lerp(line.current, line.target, factor, LERP_APPROXIMATION);
  }
  /** Get current coordinate */
  get coord() {
    return this._path.getPointAtLength(this._line.current);
  }
};

// node_modules/vevet/lib/esm/components/Cursor/props.js
var STATIC_PROPS4 = {
  __staticProp: true,
  container: isBrowser ? window : null,
  hideNative: false,
  append: true,
  behavior: "default",
  transformModifier: ({ x, y }) => `translate(${x}px, ${y}px)`
};
var MUTABLE_PROPS4 = {
  __mutableProp: true,
  enabled: true,
  width: 50,
  height: 50,
  lerp: 0.2,
  autoStop: true
};

// node_modules/vevet/lib/esm/internal/prependStyles.js
function prependStyles(style3) {
  var _a3;
  const firstStyles = document.querySelector('link[rel="stylesheet"], style');
  if (firstStyles) {
    (_a3 = firstStyles.parentNode) === null || _a3 === void 0 ? void 0 : _a3.insertBefore(style3, firstStyles);
  } else {
    document.head.appendChild(style3);
  }
}

// node_modules/vevet/lib/esm/components/Cursor/styles.js
var style = null;
function createCursorStyles(prefix) {
  if (style) {
    return style;
  }
  style = doc.createElement("style");
  prependStyles(style);
  style.innerHTML = `
    .${prefix}-container.${prefix}-hide-default,
    .${prefix}-container.${prefix}-hide-default * {
      cursor: none;
    }

    .${prefix} {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      z-index: 999;
      pointer-events: none;

      transition: opacity 0.25s;
      opacity: 0;

      --cursor-w: 50px;
      --cursor-h: 50px;
    }
    
    .${prefix}-in-window {
      position: fixed;
    }
      
    .${prefix}-visible {
      opacity: 1;
    }

    .${prefix}-disabled {
      opacity: 0;
    }

    .${prefix}__inner {
      position: relative;
      width: var(--cursor-w);
      height: var(--cursor-h);
      margin-left: calc(var(--cursor-w) / -2);
      margin-top: calc(var(--cursor-h) / -2);

      background-color: rgba(0, 0, 0, 0.25);
    }

    .${prefix}_rtl .${prefix}__inner {
      margin-right: calc(var(--cursor-w) / -2);
    }

    .${prefix}__inner > * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.25s linear;
    }

    .${prefix}__inner > *.active {
      opacity: 1;
    }
  `;
  return style;
}

// node_modules/vevet/lib/esm/components/Cursor/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cursor = class extends Module {
  /** Get default static properties */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS4);
  }
  /** Get default mutable properties */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS4);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._elements = [];
    this._activeElements = [];
    this._isFirstMove = true;
    const { enabled: isEnabled } = this.props;
    const { initialWidth, initialHeight } = this;
    this._coords = {
      x: 0,
      y: 0,
      width: initialWidth,
      height: initialHeight,
      angle: 0,
      velocity: 0
    };
    this._rawTarget = Object.assign({}, this._coords);
    this._types = [];
    this._activeTypes = [];
    this._path = new CursorPath(this.hasPath);
    createCursorStyles(this.prefix);
    this._setClassNames();
    this._createElements();
    this._setEvents();
    this._toggle(isEnabled);
  }
  /**
   * Classname prefix for styling elements.
   */
  get prefix() {
    return `${initVevet().prefix}cursor`;
  }
  /** The cursor container */
  get container() {
    return this.props.container;
  }
  /** Returns the DOM parent for the cursor element. */
  get domContainer() {
    if (this.container instanceof Window) {
      return body;
    }
    return this.container;
  }
  /**
   * The outer element of the custom cursor.
   * This is the visual element that represents the cursor on screen.
   */
  get outer() {
    return this._outer;
  }
  /**
   * The inner element of the custom cursor.
   * This element is nested inside the outer element and can provide additional styling.
   */
  get inner() {
    return this._inner;
  }
  /** Cursor initial width */
  get initialWidth() {
    return toPixels(this.props.width);
  }
  /** Cursor initial width */
  get initialHeight() {
    return toPixels(this.props.height);
  }
  /**
   * The current coordinates (x, y, width, height).
   * These are updated during cursor movement.
   */
  get coords() {
    return this._coords;
  }
  /**
   * The currently hovered element.
   * Stores information about the element that the cursor is currently interacting with.
   */
  get hoveredElement() {
    const activeElements = this._activeElements;
    return activeElements[activeElements.length - 1];
  }
  /** Target coordinates of the cursor (without smooth interpolation). */
  get targetCoords() {
    var _a3, _b2, _c, _d;
    const { hoveredElement, initialWidth, initialHeight } = this;
    let { x, y } = this._rawTarget;
    const { angle, velocity } = this._rawTarget;
    let width = initialWidth;
    let height = initialHeight;
    let padding = 0;
    if (hoveredElement) {
      const dimensions = hoveredElement.getDimensions();
      width = (_a3 = dimensions.width) !== null && _a3 !== void 0 ? _a3 : initialWidth;
      height = (_b2 = dimensions.height) !== null && _b2 !== void 0 ? _b2 : initialHeight;
      x = (_c = dimensions.x) !== null && _c !== void 0 ? _c : x;
      y = (_d = dimensions.y) !== null && _d !== void 0 ? _d : y;
      padding = dimensions.padding;
    }
    width += padding * 2;
    height += padding * 2;
    return { x, y, width, height, angle, velocity };
  }
  /** Returns an SVG path element which represents the cursor movement */
  get path() {
    return this._path.path;
  }
  /** Check if the cursor has a path */
  get hasPath() {
    return this.props.behavior === "path";
  }
  /** Handles property mutations */
  _handleProps(props) {
    super._handleProps(props);
    this._toggle(this.props.enabled);
  }
  /** Sets class names */
  _setClassNames() {
    const { domContainer } = this;
    if (this.props.hideNative) {
      domContainer.style.cursor = "none";
      this._addTempClassName(domContainer, this._cn("-hide-default"));
    }
    this._addTempClassName(domContainer, this._cn("-container"));
    if (domContainer !== body) {
      domContainer.style.position = "relative";
    }
    this.onDestroy(() => {
      domContainer.style.cursor = "";
    });
  }
  /** Creates the custom cursor and appends it to the DOM. */
  _createElements() {
    const { container, domContainer, props } = this;
    const isWindow = container instanceof Window;
    const cn = this._cn.bind(this);
    const outer = doc.createElement("div");
    cnAdd(outer, cn(""));
    cnAdd(outer, cn(isWindow ? "-in-window" : "-in-element"));
    cnAdd(outer, cn("-disabled"));
    if (props.append) {
      domContainer.append(outer);
    }
    const direction = getTextDirection(outer);
    cnAdd(outer, cn(`_${direction}`));
    const inner = doc.createElement("div");
    outer.append(inner);
    cnAdd(inner, cn("__inner"));
    cnAdd(inner, cn("-disabled"));
    outer.append(inner);
    this._outer = outer;
    this._inner = inner;
    this.onDestroy(() => {
      inner.remove();
      outer.remove();
    });
  }
  /** Sets up the various event listeners for the cursor, such as mouse movements and clicks. */
  _setEvents() {
    const { domContainer } = this;
    this._raf = new Raf({ enabled: false });
    this._raf.on("frame", () => this.render());
    const mouseenter = addEventListener(domContainer, "mouseenter", this._handleMouseEnter.bind(this));
    const mouseleave = addEventListener(domContainer, "mouseleave", this._handleMouseLeave.bind(this));
    const mousemove = addEventListener(domContainer, "mousemove", this._handleMouseMove.bind(this));
    const mousedown = addEventListener(domContainer, "mousedown", this._handleMouseDown.bind(this));
    const mouseup = addEventListener(domContainer, "mouseup", this._handleMouseUp.bind(this));
    const blur = addEventListener(window, "blur", this._handleWindowBlur.bind(this));
    this.onDestroy(() => {
      var _a3;
      (_a3 = this._raf) === null || _a3 === void 0 ? void 0 : _a3.destroy();
      mouseenter();
      mouseleave();
      mousemove();
      mousedown();
      mouseup();
      blur();
    });
  }
  /** Enables cursor animation. */
  _toggle(enabled) {
    var _a3;
    const className = this._cn("-disabled");
    cnToggle(this.outer, className, !enabled);
    cnToggle(this.inner, className, !enabled);
    (_a3 = this._raf) === null || _a3 === void 0 ? void 0 : _a3.updateProps({ enabled });
  }
  /** Handles mouse enter events. */
  _handleMouseEnter(evt) {
    if (!this.props.enabled) {
      return;
    }
    const { clientX: x, clientY: y } = evt;
    const target = this._rawTarget;
    this._coords.x = x;
    this._coords.y = y;
    target.x = x;
    target.y = y;
    this._path.addPoint(target, true);
    cnAdd(this.outer, this._cn("-visible"));
  }
  /** Handles mouse leave events. */
  _handleMouseLeave() {
    cnRemove(this.outer, this._cn("-visible"));
  }
  /** Handles mouse move events. */
  _handleMouseMove(evt) {
    var _a3;
    if (!this.props.enabled) {
      return;
    }
    const { clientX: x, clientY: y } = evt;
    const target = this._rawTarget;
    const { x: prevX, y: prevY } = target;
    const deltaX = prevX - this._coords.x;
    const deltaY = prevY - this._coords.y;
    const prevAngle = target.angle;
    const rawAngle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
    const targetAngle = prevAngle + ((rawAngle - prevAngle) % 360 + 540) % 360 - 180;
    const velocity = Math.min(Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) * 2, 150) / 150;
    target.x = x;
    target.y = y;
    target.angle = targetAngle;
    target.velocity = velocity;
    if (this._isFirstMove) {
      this._coords.x = target.x;
      this._coords.y = target.y;
      this._coords.angle = target.angle;
      this._coords.velocity = target.velocity;
      this._isFirstMove = false;
    }
    this._path.addPoint(target);
    cnAdd(this.outer, this._cn("-visible"));
    (_a3 = this._raf) === null || _a3 === void 0 ? void 0 : _a3.play();
  }
  /** Handles mouse down events. */
  _handleMouseDown(evt) {
    const className = this._cn("-click");
    if (evt.which === 1) {
      cnAdd(this.outer, className);
      cnAdd(this.inner, className);
    }
  }
  /** Handles mouse up events. */
  _handleMouseUp() {
    const className = this._cn("-click");
    cnRemove(this.outer, className);
    cnRemove(this.inner, className);
  }
  /** Handles window blur events. */
  _handleWindowBlur() {
    this._handleMouseUp();
  }
  /**
   * Registers an element to interact with the cursor, enabling dynamic size and position changes based on hover effects.
   * @returns Returns a destructor
   */
  attachHover(settings) {
    const element = new CursorHoverElement(settings, (data) => this._handleElementEnter(data), (data) => this._handleElementLeave(data));
    this._elements.push(element);
    const destroy = () => {
      this._elements = this._elements.filter((i) => i !== element);
      element.destroy();
    };
    this.onDestroy(() => destroy());
    return () => destroy();
  }
  /** Handle element mouse enter event */
  _handleElementEnter(data) {
    var _a3;
    if (!this.props.enabled) {
      return;
    }
    this._activeElements.push(data);
    if (data.type) {
      this._toggleType(data.type, true);
    }
    this.callbacks.emit("hoverEnter", data);
    (_a3 = this._raf) === null || _a3 === void 0 ? void 0 : _a3.play();
  }
  /** Handle element mouse leave event */
  _handleElementLeave(data) {
    var _a3;
    this._activeElements = this._activeElements.filter((i) => i !== data);
    if (data.type) {
      this._toggleType(data.type, false);
    }
    this.callbacks.emit("hoverLeave", data);
    if (this.props.enabled) {
      (_a3 = this._raf) === null || _a3 === void 0 ? void 0 : _a3.play();
    }
  }
  /**
   * Registers a cursor type.
   */
  attachCursor({ element, type }) {
    var _a3;
    this._types.push({ element, type });
    (_a3 = this._inner) === null || _a3 === void 0 ? void 0 : _a3.append(element);
  }
  /** Enable or disable a cursor type */
  _toggleType(type, isEnabled) {
    const targetType = this._types.find((item) => item.type === type);
    if (isEnabled) {
      this._activeTypes.push(type);
    } else {
      this._activeTypes = this._activeTypes.filter((item) => type !== item);
    }
    const activeTypes = this._activeTypes;
    const activeType = activeTypes.length > 0 ? activeTypes[activeTypes.length - 1] : null;
    this._types.forEach((item) => {
      cnToggle(item.element, "active", item.type === activeType);
    });
    if (targetType) {
      this.callbacks.emit(isEnabled ? "typeShow" : "typeHide", targetType);
    }
    if (!activeType) {
      this.callbacks.emit("noType", void 0);
    }
  }
  /**
   * Checks if all coordinates are interpolated.
   * @returns {boolean} True if all coordinates are interpolated, false otherwise.
   */
  get isInterpolated() {
    const { coords, targetCoords, props } = this;
    const isWidthDone = coords.width === targetCoords.width;
    const isHeightDone = coords.height === targetCoords.height;
    const isAngleDone = coords.angle === targetCoords.angle;
    const isVelocityDone = coords.velocity === targetCoords.velocity;
    const isElementsDone = !this._elements.find((element) => !element.isInterpolated);
    const isPathDone = this._path.isInterpolated;
    const isCoordsDone = coords.x === targetCoords.x && coords.y === targetCoords.y;
    return isWidthDone && isHeightDone && isAngleDone && isVelocityDone && isElementsDone && (props.behavior === "path" ? isPathDone : isCoordsDone);
  }
  /** Renders the cursor. */
  render() {
    var _a3;
    this._calculate();
    this._renderElements();
    if (this.props.autoStop && this.isInterpolated) {
      (_a3 = this._raf) === null || _a3 === void 0 ? void 0 : _a3.pause();
    }
    this.callbacks.emit("render", void 0);
  }
  /** Recalculates current coordinates. */
  _calculate() {
    const { targetCoords: target, _coords: coords } = this;
    const lerpFactor = this._getLerpFactor();
    this._path.lerp(lerpFactor);
    this._path.minimize();
    try {
      if (this.hasPath) {
        const pathCoord = this._path.coord;
        coords.x = pathCoord.x;
        coords.y = pathCoord.y;
      } else {
        throw new Error("No path");
      }
    } catch (_a3) {
      coords.x = this._lerp(coords.x, target.x);
      coords.y = this._lerp(coords.y, target.y);
    }
    coords.width = this._lerp(coords.width, target.width);
    coords.height = this._lerp(coords.height, target.height);
    coords.angle = this._lerp(coords.angle, target.angle);
    this._rawTarget.velocity = this._lerp(this._rawTarget.velocity, 0);
    coords.velocity = this._lerp(coords.velocity, this._rawTarget.velocity);
  }
  /** Gets the interpolation factor. */
  _getLerpFactor(input = this.props.lerp) {
    if (!isFiniteNumber(input)) {
      return 1;
    }
    const lerpFactor = clamp(input, 0, 1);
    return this._raf.lerpFactor(lerpFactor);
  }
  /** Performs linear interpolation. */
  _lerp(current, target) {
    const lerpFactor = this._getLerpFactor();
    const value = lerp(current, target, lerpFactor, LERP_APPROXIMATION);
    return value;
  }
  /** Renders the cursor elements. */
  _renderElements() {
    const { container, domContainer, outer, props, coords } = this;
    const { width, height } = coords;
    let { x, y } = coords;
    if (!(container instanceof Window)) {
      const bounding = domContainer.getBoundingClientRect();
      x -= bounding.left;
      y -= bounding.top;
    }
    const { style: style3 } = outer;
    style3.setProperty("--cursor-w", `${width}px`);
    style3.setProperty("--cursor-h", `${height}px`);
    style3.transform = props.transformModifier(Object.assign(Object.assign({}, coords), { x, y }));
    this._elements.forEach((element) => element.render(this._getLerpFactor.bind(this)));
  }
};
__decorate7([
  noopIfDestroyed
], Cursor.prototype, "attachHover", null);
__decorate7([
  noopIfDestroyed
], Cursor.prototype, "attachCursor", null);
__decorate7([
  noopIfDestroyed
], Cursor.prototype, "render", null);

// node_modules/vevet/lib/esm/components/InView/props.js
var STATIC_PROPS5 = {
  __staticProp: true,
  hasOut: true,
  maxInitialDelay: 1e3,
  scrollDirection: "vertical"
};
var MUTABLE_PROPS5 = {
  __mutableProp: true,
  enabled: true,
  rootMargin: "0% 0% -5% 0%"
};

// node_modules/vevet/lib/esm/components/InView/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InView = class extends Module {
  /**
   * Returns default static properties.
   */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS5);
  }
  /**
   * Returns default mutable properties.
   */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS5);
  }
  /**
   * Initializes the `InView` module.
   */
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._isInitialStart = true;
    this._elements = [];
    this._isRtl = false;
    this._isRtl = getTextDirection(body) === "rtl";
    this._setup();
  }
  /**
   * Indicates whether the observation has started for the first time.
   */
  get isInitialStart() {
    return this._isInitialStart;
  }
  /**
   * Returns all elements currently being observed.
   */
  get elements() {
    return this._elements;
  }
  /**
   * Handles property mutations and updates observation events accordingly.
   */
  _handleProps(props) {
    super._handleProps(props);
    this._setup();
  }
  /**
   * Configures or reconfigures the view observation events.
   */
  _setup() {
    this._removeViewEvents();
    if (this.props.enabled) {
      this._setViewEvents();
    }
  }
  /**
   * Removes all observation events and disconnects observers.
   */
  _removeViewEvents() {
    var _a3, _b2;
    (_a3 = this._in) === null || _a3 === void 0 ? void 0 : _a3.disconnect();
    this._in = void 0;
    (_b2 = this._out) === null || _b2 === void 0 ? void 0 : _b2.disconnect();
    this._out = void 0;
  }
  /**
   * Sets up `IntersectionObserver` instances to detect visibility changes.
   */
  _setViewEvents() {
    const { isInitialStart, props } = this;
    const rootMargin = isInitialStart ? "0% 0% 0% 0%" : props.rootMargin;
    this._in = new IntersectionObserver((data) => this._handleIn(data, isInitialStart), { root: null, threshold: 0, rootMargin });
    this.elements.forEach((element) => {
      var _a3;
      return (_a3 = this._in) === null || _a3 === void 0 ? void 0 : _a3.observe(element);
    });
    if (!props.hasOut) {
      return;
    }
    this._out = new IntersectionObserver((data) => this._handleOut(data), {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px 0px 0px"
    });
    this.elements.forEach((element) => {
      var _a3;
      return (_a3 = this._out) === null || _a3 === void 0 ? void 0 : _a3.observe(element);
    });
  }
  /**
   * Handles elements entering the viewport.
   */
  _handleIn(data, isInitialStart) {
    data.forEach((entry) => {
      const element = entry.target;
      if (!entry.isIntersecting || element.$vevetInViewBool) {
        return;
      }
      element.$vevetInViewBool = true;
      if (element.$vevetInViewTimeout) {
        clearTimeout(element.$vevetInViewTimeout);
        element.$vevetInViewTimeout = void 0;
      }
      element.$vevetInViewTimeout = setTimeout(() => this._handleInOut(entry, true, isInitialStart), this._getDelay(element));
      if (!this.props.hasOut) {
        this.removeElement(element);
      }
    });
    if (this._isInitialStart) {
      this._isInitialStart = false;
      this._setup();
    }
  }
  /**
   * Handles elements leaving the viewport.
   */
  _handleOut(data) {
    data.forEach((entry) => {
      const element = entry.target;
      if (entry.isIntersecting || !element.$vevetInViewBool) {
        return;
      }
      element.$vevetInViewBool = false;
      if (element.$vevetInViewTimeout) {
        clearTimeout(element.$vevetInViewTimeout);
        element.$vevetInViewTimeout = void 0;
      }
      element.$vevetInViewTimeout = setTimeout(() => this._handleInOut(entry, false), 0);
    });
  }
  /**
   * Toggles visibility classes and emits events for visibility changes.
   */
  _handleInOut(entry, isInView, isInitialStart = false) {
    const element = entry.target;
    const direction = this._getDirection(entry, isInView, isInitialStart);
    this._toggleClassname(element, isInView, direction);
    this.callbacks.emit(isInView ? "in" : "out", { element, direction });
  }
  /** Toggles visibility classes */
  _toggleClassname(element, isInView, direction) {
    var _a3;
    const classNames = element.getAttribute("data-in-view-class");
    if (!classNames) {
      return;
    }
    const split2 = classNames.split("|");
    const direct = split2[0].trim();
    const reverse = ((_a3 = split2[1]) === null || _a3 === void 0 ? void 0 : _a3.trim()) || direct;
    if (!direct) {
      return;
    }
    if (isInView) {
      const isReverse = direction === "fromRight" || direction === "fromTop";
      const className = isReverse ? reverse.trim() : direct.trim();
      cnToggle(element, className, isInView);
      return;
    }
    cnToggle(element, direct, isInView);
    cnToggle(element, reverse, isInView);
  }
  /** Gets element direction */
  _getDirection(entry, isInView, isInitialStart) {
    const app2 = initVevet();
    const bounding = entry.boundingClientRect;
    if (this.props.scrollDirection === "horizontal") {
      let direction2 = "fromRight";
      if (isInView && !isInitialStart || !isInView) {
        if (bounding.left > app2.width / 2) {
          direction2 = "fromRight";
        } else if (bounding.right < app2.width / 2) {
          direction2 = "fromLeft";
        }
      }
      return direction2;
    }
    let direction = "fromBottom";
    if (isInView && !isInitialStart || !isInView) {
      if (bounding.top > app2.height / 2) {
        direction = "fromBottom";
      } else if (bounding.bottom < app2.height / 2) {
        direction = "fromTop";
      }
    }
    return direction;
  }
  /**
   * Calculates the delay before triggering an element's visibility event.
   */
  _getDelay(element) {
    const { scrollDirection, maxInitialDelay } = this.props;
    const app2 = initVevet();
    if (!this.isInitialStart || maxInitialDelay <= 0) {
      return 0;
    }
    const bounding = element.getBoundingClientRect();
    const rootBounding = {
      top: 0,
      left: 0,
      width: app2.width,
      height: app2.height
    };
    let progress = clamp(scrollDirection === "horizontal" ? (bounding.left - rootBounding.left) / rootBounding.width : (bounding.top - rootBounding.top) / rootBounding.height);
    if (this._isRtl && scrollDirection === "horizontal") {
      progress = 1 - progress;
    }
    return progress * maxInitialDelay;
  }
  /**
   * Registers an element for visibility observation.
   *
   * If the element has a `data-in-view-class` attribute, the specified class will be applied upon entering the viewport.
   *
   * @returns A function to stop observing the element.
   */
  addElement(element) {
    var _a3, _b2;
    const finalElement = element;
    finalElement.$vevetInViewBool = void 0;
    this._elements.push(finalElement);
    (_a3 = this._in) === null || _a3 === void 0 ? void 0 : _a3.observe(finalElement);
    (_b2 = this._out) === null || _b2 === void 0 ? void 0 : _b2.observe(finalElement);
    return () => this.removeElement(finalElement);
  }
  /**
   * Removes an element from observation, preventing further visibility tracking.
   */
  removeElement(element) {
    var _a3, _b2;
    const finalElement = element;
    (_a3 = this._in) === null || _a3 === void 0 ? void 0 : _a3.unobserve(finalElement);
    (_b2 = this._out) === null || _b2 === void 0 ? void 0 : _b2.unobserve(finalElement);
    this._elements = this._elements.filter((el) => el !== element);
    finalElement.$vevetInViewBool = void 0;
  }
  /**
   * Cleans up the module and disconnects all observers and listeners.
   */
  _destroy() {
    super._destroy();
    this._removeViewEvents();
  }
};
__decorate8([
  noopIfDestroyed
], InView.prototype, "addElement", null);
__decorate8([
  noopIfDestroyed
], InView.prototype, "removeElement", null);

// node_modules/vevet/lib/esm/components/Marquee/Nodes/index.js
var MarqueeNodes = class {
  constructor(_ctx) {
    this._ctx = _ctx;
    this._initial = [];
    this._elements = [];
  }
  /** Elements array */
  get elements() {
    return this._elements;
  }
  /* Save initial nodes */
  save() {
    const { container } = this._ctx.props;
    this._initial = [...Array.from(container.childNodes)];
  }
  /**
   * Wraps the first text node in the container in a span if no other elements exist.
   */
  wrap() {
    const { container } = this._ctx.props;
    const nodes = this._initial;
    nodes.forEach((node) => {
      var _a3, _b2;
      if (node.nodeType === 3) {
        if (((_b2 = (_a3 = node.textContent) === null || _a3 === void 0 ? void 0 : _a3.trim()) === null || _b2 === void 0 ? void 0 : _b2.length) === 0) {
          return;
        }
        const wrapper = doc.createElement("span");
        const { style: style3 } = wrapper;
        style3.position = "relative";
        style3.display = "block";
        style3.width = "max-content";
        style3.whiteSpace = "nowrap";
        container.insertBefore(wrapper, node);
        wrapper.appendChild(node);
      }
    });
    this._elements = Array.from(container.children);
  }
  /**
   * Adds necessary styles to all elements.
   */
  applyStyles() {
    this._elements.forEach((element, index2) => this._applyElementStyles(element, index2 !== 0));
  }
  /**
   * Adds necessary styles to a given element.
   */
  _applyElementStyles(element, isAbsolute) {
    const { isVertical, props } = this._ctx;
    const el = element;
    const { style: style3 } = el;
    style3.position = isAbsolute ? "absolute" : "relative";
    style3.top = isAbsolute && !isVertical ? "50%" : "0";
    style3.left = isAbsolute && isVertical ? "50%" : "0";
    style3.willChange = props.hasWillChange ? "transform" : "";
    style3.flexShrink = "0";
    if (isVertical) {
      style3.height = style3.height || "max-content";
    } else {
      style3.width = style3.width || "max-content";
    }
  }
  /**
   * Clone elements
   */
  cloneAll(times) {
    if (!isFiniteNumber(times) || times <= 0) {
      return;
    }
    const elements = [...this.elements];
    const { container } = this._ctx.props;
    for (let i = 0; i < times; i += 1) {
      elements.forEach((element) => {
        const copy = element.cloneNode(true);
        this._applyElementStyles(copy, true);
        container.appendChild(copy);
      });
    }
    this._elements = Array.from(container.children);
  }
  /** Restores the initial nodes */
  destroy() {
    const { container } = this._ctx.props;
    this._initial.forEach((node) => container.appendChild(node));
    this._elements.forEach((element) => {
      const { style: style3 } = element;
      style3.position = "";
      style3.top = "";
      style3.left = "";
      style3.flexShrink = "";
      style3.width = "";
      style3.transform = "";
      style3.willChange = "";
    });
  }
};

// node_modules/vevet/lib/esm/components/Marquee/props.js
var STATIC_PROPS6 = {
  __staticProp: true,
  container: null,
  resizeDebounce: 0,
  hasWillChange: true,
  cloneNodes: true,
  direction: "horizontal"
};
var MUTABLE_PROPS6 = {
  __mutableProp: true,
  speed: 1,
  gap: 0,
  enabled: true,
  pauseOnHover: false,
  centered: false,
  adjustSpeed: true,
  pauseOnOut: true
};

// node_modules/vevet/lib/esm/components/Marquee/styles.js
function appleMarqueeContainerStyles({ container, isVertical, isRtl }) {
  const { style: style3 } = container;
  style3.position = "relative";
  style3.display = "flex";
  style3.flexDirection = isVertical ? "column" : "row";
  style3.alignItems = "center";
  style3.justifyContent = isRtl ? "flex-end" : "flex-start";
  style3.overflow = "hidden";
  if (isVertical) {
    style3.height = "100%";
  } else {
    style3.width = "100%";
  }
}
function removeMarqueeContainerStyles(container) {
  const { style: style3 } = container;
  style3.position = "";
  style3.display = "";
  style3.flexDirection = "";
  style3.alignItems = "";
  style3.justifyContent = "";
  style3.overflow = "";
  style3.height = "";
  style3.width = "";
}

// node_modules/vevet/lib/esm/components/Marquee/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Marquee = class extends Module {
  /** Get default static properties. */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS6);
  }
  /** Get default mutable properties. */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS6);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._containerSize = 0;
    this._sizes = [];
    this._totalSize = 0;
    this._coord = 0;
    this._isRtl = false;
    const { container, direction } = this.props;
    const { isVertical } = this;
    if (!container) {
      throw new Error("Marquee container is not defined");
    }
    const isRtl = getTextDirection(container) === "rtl" && direction === "horizontal";
    this._isRtl = isRtl;
    appleMarqueeContainerStyles({ container, isVertical, isRtl });
    this._nodes = new MarqueeNodes(this);
    this._setup();
    this._raf = new Raf({ enabled: this.props.enabled, fpsRecalcFrames: 1 });
    this._setEvents();
  }
  /** Total size of all elements in the marquee (width or height depending on direction) */
  get totalSize() {
    return this._totalSize;
  }
  /**
   * Total width of all elements in the marquee
   * @deprecated Use `totalSize` instead
   */
  get totalWidth() {
    return this.totalSize;
  }
  /** The current marquee coordinate. */
  get coord() {
    return this._coord;
  }
  set coord(value) {
    this._coord = value;
    this.render(0);
  }
  /**
   * The current coordinate of the marquee.
   * @deprecated Use `coord` instead
   */
  get x() {
    return this.coord;
  }
  set x(value) {
    this.coord = value;
  }
  /** Check if the marquee is vertical */
  get isVertical() {
    return this.props.direction === "vertical";
  }
  /** Marquee gap */
  get gap() {
    return Math.max(toPixels(this.props.gap), 0);
  }
  /** Handles property changes  */
  _handleProps(props) {
    super._handleProps(props);
    if (this.props.enabled) {
      this._raf.play();
    } else {
      this._raf.pause();
    }
    this.resize();
    this.render(0);
  }
  /** Set marquee events */
  _setEvents() {
    const { container } = this.props;
    this._raf.on("frame", () => {
      const { props } = this;
      const factor = props.adjustSpeed ? this._raf.fpsFactor : 1;
      const speed = toPixels(props.speed);
      this._render(speed * factor);
    });
    const mouseenter = addEventListener(container, "mouseenter", () => {
      if (this.props.pauseOnHover) {
        this._raf.pause();
      }
    });
    const mouseleave = addEventListener(container, "mouseleave", () => {
      if (this.props.enabled) {
        this._raf.play();
      }
    });
    const intersection = new IntersectionObserver(this._handleIntersection.bind(this), { root: null });
    intersection.observe(container);
    this.onDestroy(() => {
      mouseenter();
      mouseleave();
      intersection.disconnect();
    });
  }
  /** Initializes the marquee setup, including resizing and cloning elements */
  _setup() {
    var _a3;
    (_a3 = this._lastSetup) === null || _a3 === void 0 ? void 0 : _a3.call(this);
    if (this.isDestroyed) {
      return;
    }
    const { container, resizeDebounce } = this.props;
    this._nodes.save();
    this._nodes.wrap();
    this._nodes.applyStyles();
    this.resize();
    const onPageLoad = initVevet().onLoad(() => this.resize());
    const resizeHandler = onResize({
      callback: () => this.resize(),
      element: [container, ...this._nodes.elements],
      viewportTarget: "width",
      resizeDebounce,
      name: this.name
    });
    this._lastSetup = () => {
      onPageLoad();
      resizeHandler.remove();
    };
  }
  /** Resizes the marquee, recalculating element positions and cloning if necessary. */
  resize() {
    const { props, isVertical, gap } = this;
    const { container } = props;
    const containerSize = isVertical ? container.offsetHeight : container.offsetWidth;
    this._containerSize = containerSize;
    this._sizes = this._nodes.elements.map((el) => (isVertical ? el.offsetHeight : el.offsetWidth) + gap);
    this._totalSize = this._sizes.reduce((a, b) => a + b, 0);
    const maxSize = Math.max(...this._sizes);
    const copyTimes = Math.ceil((containerSize + maxSize) / this._totalSize);
    this._totalSize = Math.max(this._totalSize, containerSize + maxSize);
    if (props.cloneNodes && isFiniteNumber(copyTimes) && copyTimes > 1) {
      this._nodes.cloneAll(copyTimes - 1);
      this.resize();
    }
    this.callbacks.emit("resize", void 0);
    setTimeout(() => this.render(0), 0);
  }
  /** Renders the marquee, adjusting element positions. */
  render(step) {
    this._render(step);
  }
  /**
   * Renders the marquee, calculating element positions based on the provided speed.
   */
  _render(stepProp = this.props.speed) {
    if (this.isDestroyed) {
      return;
    }
    const { isVertical, props, gap } = this;
    const { elements } = this._nodes;
    const rawStep = this._isRtl ? -stepProp : stepProp;
    const step = toPixels(rawStep);
    if (!isFiniteNumber(step)) {
      return;
    }
    this._coord -= step;
    const centerCoord = this._containerSize * 0.5 + this._sizes[0] / 2 - gap;
    const position = this._coord + (props.centered ? centerCoord : 0);
    let prevStaticCoord = 0;
    for (let index2 = 0; index2 < elements.length; index2 += 1) {
      const element = elements[index2];
      const elementSize = this._sizes[index2];
      const { style: style3 } = element;
      const coord = loop(position + prevStaticCoord, -elementSize, this._totalSize - elementSize);
      if (isVertical) {
        const x = style3.position === "relative" ? "0" : "-50%";
        style3.transform = `translate(${x}, ${coord}px)`;
      } else {
        const y = style3.position === "relative" ? "0" : "-50%";
        style3.transform = `translate(${coord}px, ${y})`;
      }
      prevStaticCoord += elementSize;
    }
    this.callbacks.emit("render", void 0);
  }
  /** Handle intersection observer */
  _handleIntersection(entries) {
    if (!this.props.pauseOnOut) {
      return;
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting && this.props.enabled) {
        this._raf.play();
      } else {
        this._raf.pause();
      }
    });
  }
  /** Destroys the instance and cleans up resources */
  _destroy() {
    var _a3;
    const { container } = this.props;
    super._destroy();
    this._raf.destroy();
    (_a3 = this._lastSetup) === null || _a3 === void 0 ? void 0 : _a3.call(this);
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    this._nodes.destroy();
    removeMarqueeContainerStyles(container);
  }
};
__decorate9([
  noopIfDestroyed
], Marquee.prototype, "resize", null);
__decorate9([
  noopIfDestroyed
], Marquee.prototype, "render", null);

// node_modules/vevet/lib/esm/internal/unwrapAngle.js
function unwrapAngleDelta(raw, prevRaw) {
  const halfTurn = 180;
  let delta = raw - prevRaw;
  if (delta > halfTurn) {
    delta -= halfTurn * 2;
  } else if (delta < -halfTurn) {
    delta += halfTurn * 2;
  }
  return delta;
}

// node_modules/vevet/lib/esm/components/Pointers/props.js
var STATIC_PROPS7 = {
  __staticProp: true,
  container: null,
  buttons: [0],
  relative: false,
  minPointers: 1,
  maxPointers: 5,
  disableUserSelect: true
};
var MUTABLE_PROPS7 = {
  __mutableProp: true,
  enabled: true
};

// node_modules/vevet/lib/esm/components/Pointers/styles.js
var styles = isBrowser ? doc.createElement("style") : null;
if (styles) {
  styles.innerHTML = "* { user-select: none !important; }";
}

// node_modules/vevet/lib/esm/components/Pointers/index.js
var Pointers = class extends Module {
  /**
   * Returns the default static properties.
   */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS7);
  }
  /**
   * Returns the default mutable properties.
   */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS7);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._listeners = [];
    this._isStarted = false;
    this._saveMinPointers = 1;
    this._moveData = null;
    this._moveScheduled = false;
    this._angle = { raw: 0, unwrapped: 0, unwrappedStart: 0 };
    this._pointersMap = /* @__PURE__ */ new Map();
    this._setBaseEvents();
  }
  /** Indicates whether the `start` event has been triggered. */
  get isStarted() {
    return this._isStarted;
  }
  /** Returns the map of active pointers. */
  get pointersMap() {
    return this._pointersMap;
  }
  /** Returns the container element handling events. */
  get container() {
    return this.props.container;
  }
  /** Move data */
  get move() {
    return this._moveData;
  }
  /** Get buttons */
  _getButtons(type) {
    const { buttons } = this.props;
    return Array.isArray(buttons) ? buttons : buttons(type);
  }
  /** Get max pointers */
  _getMinPointers(type) {
    const { minPointers } = this.props;
    return clamp(isNumber(minPointers) ? minPointers : minPointers(type), 1, Infinity);
  }
  /** Get max pointers */
  _getMaxPointers(type) {
    const { maxPointers } = this.props;
    return clamp(isNumber(maxPointers) ? maxPointers : maxPointers(type), this._getMinPointers(type), Infinity);
  }
  /** Normalize pointer event type */
  _getPointerType(event) {
    const types = ["mouse", "touch"];
    if (types.includes(event.pointerType)) {
      return event.pointerType;
    }
    return "mouse";
  }
  /**
   * Attaches base event listeners to the container.
   */
  _setBaseEvents() {
    const { container } = this;
    const pointerdown = addEventListener(container, "pointerdown", (event) => this._handlePointerDown(event));
    const dragstart = addEventListener(container, "dragstart", (event) => event.preventDefault(), { passive: false });
    const centralMouseDown = addEventListener(container, "mousedown", (event) => {
      if (this._getButtons("mouse").includes(1)) {
        event.preventDefault();
      }
    }, { passive: false });
    const contextmenu = addEventListener(container, "contextmenu", (event) => {
      if (this._getButtons("mouse").includes(2)) {
        event.preventDefault();
      }
    }, { passive: false });
    this.onDestroy(() => {
      pointerdown();
      dragstart();
      centralMouseDown();
      contextmenu();
    });
  }
  /**
   * Attaches runtime event listeners for active pointer interactions.
   */
  _setRuntimeEvents() {
    const listeners = this._listeners;
    if (listeners.length > 0) {
      return;
    }
    const pointermove = addEventListener(window, "pointermove", (event) => this._handlePointerMove(event), { passive: false });
    const pointerup = addEventListener(window, "pointerup", (event) => this._handlePointerUp(event), { passive: false });
    const pointercancel = addEventListener(window, "pointercancel", () => this._handleCancel(), { passive: false });
    const blur = addEventListener(window, "blur", () => this._handleCancel());
    this._listeners = [pointermove, pointerup, pointercancel, blur];
  }
  /**
   * Handles pointer down events (`pointerdown`).
   * Adds a new pointer if conditions are met and triggers the `pointerdown` callback.
   */
  _handlePointerDown(event) {
    const { props } = this;
    const { x, y } = this._decodeCoords(event);
    const pointerType = this._getPointerType(event);
    const buttons = this._getButtons(pointerType);
    const minPointers = this._getMinPointers(pointerType);
    this._saveMinPointers = minPointers;
    const maxPointers = this._getMaxPointers(pointerType);
    if (!props.enabled) {
      return;
    }
    if (!buttons.includes(event.button)) {
      return;
    }
    const hasPointer = this.pointersMap.get(event.pointerId);
    if (hasPointer || this.pointersMap.size >= maxPointers) {
      return;
    }
    const pointer = {
      id: event.pointerId,
      index: this.pointersMap.size,
      start: { x, y },
      prev: { x, y },
      current: { x, y },
      diff: { x: 0, y: 0 },
      step: { x: 0, y: 0 },
      accum: { x: 0, y: 0 }
    };
    this.pointersMap.set(event.pointerId, pointer);
    let index2 = 0;
    this.pointersMap.forEach((currentPointer) => {
      currentPointer.index = index2;
      index2 += 1;
    });
    if (this.pointersMap.size === minPointers) {
      this._isStarted = true;
      this.callbacks.emit("start", void 0);
    }
    this._setRuntimeEvents();
    if (props.disableUserSelect) {
      body.append(styles);
    }
    this.callbacks.emit("pointerdown", { event, pointer });
  }
  /**
   * Handles pointer movement (`pointermove`).
   * Updates pointer positions and triggers the `pointermove` callback.
   */
  _handlePointerMove(event) {
    const pointer = this.pointersMap.get(event.pointerId);
    if (!pointer) {
      return;
    }
    if (!this.props.enabled) {
      return;
    }
    const { x, y } = this._decodeCoords(event);
    pointer.prev = Object.assign({}, pointer.current);
    pointer.current = { x, y };
    pointer.diff.x = pointer.current.x - pointer.start.x;
    pointer.diff.y = pointer.current.y - pointer.start.y;
    pointer.step.x = pointer.current.x - pointer.prev.x;
    pointer.step.y = pointer.current.y - pointer.prev.y;
    pointer.accum.x += Math.abs(pointer.step.x);
    pointer.accum.y += Math.abs(pointer.step.y);
    this.callbacks.emit("pointermove", { event, pointer });
    if (this._isStarted) {
      this._updateMove();
      this._scheduleMove();
    }
  }
  /**
   * Handles pointer release (`pointerup`).
   * Removes the pointer and triggers the `pointerup` callback.
   * If no active pointers remain, fires the `end` callback.
   */
  _handlePointerUp(event) {
    const pointer = this.pointersMap.get(event.pointerId);
    const minPointers = this._getMinPointers(this._getPointerType(event));
    if (!pointer) {
      return;
    }
    this.callbacks.emit("pointerup", { pointer });
    this.pointersMap.delete(event.pointerId);
    if (this.pointersMap.size < minPointers && this._isStarted) {
      this._isStarted = false;
      this._moveData = null;
      this._angle = { raw: 0, unwrapped: 0, unwrappedStart: 0 };
      this.callbacks.emit("end", void 0);
    }
    if (this.pointersMap.size === 0) {
      this._cleanup();
    }
  }
  /**
   * Handles event cancellations (`pointercancel`, `blur`).
   * Triggers the `end` callback and cleans up all pointers.
   */
  _handleCancel() {
    this.callbacks.emit("end", void 0);
    this.pointersMap.forEach((pointer) => {
      this.callbacks.emit("pointerup", { pointer });
    });
    this._cleanup();
  }
  /**
   * Prevents text selection during pointer interactions.
   */
  _resetSelection() {
    var _a3, _b2;
    (_a3 = window.getSelection()) === null || _a3 === void 0 ? void 0 : _a3.empty();
    (_b2 = window.getSelection()) === null || _b2 === void 0 ? void 0 : _b2.removeAllRanges();
  }
  /**
   * Returns pointer coordinates relative to the container.
   */
  _decodeCoords(event) {
    const { container, props } = this;
    if (!props.relative) {
      return { x: event.clientX, y: event.clientY };
    }
    const bounding = container.getBoundingClientRect();
    const x = event.clientX - bounding.left;
    const y = event.clientY - bounding.top;
    return { x, y };
  }
  /** Update move data */
  _updateMove() {
    const pointers = Array.from(this.pointersMap.values()).sort((a, b) => a.index - b.index);
    const currents = pointers.map(({ current }) => current);
    const center = this._getAverageCenter(currents);
    const distance = Math.max(this._getAverageDistance(currents), 1e-3);
    const rawAngle = this._getAngle(currents);
    if (!this._moveData) {
      this._angle = {
        raw: rawAngle,
        unwrapped: rawAngle,
        unwrappedStart: rawAngle
      };
      this._moveData = {
        center,
        prevCenter: Object.assign({}, center),
        startCenter: Object.assign({}, center),
        distance,
        prevDistance: distance,
        startDistance: distance,
        scale: 1,
        prevScale: 1,
        angle: 0,
        prevAngle: 0
      };
      return;
    }
    this._moveData.prevCenter = Object.assign({}, this._moveData.center);
    this._moveData.center = Object.assign({}, center);
    this._moveData.prevDistance = this._moveData.distance;
    this._moveData.distance = distance;
    if (pointers.length >= 2) {
      this._moveData.prevScale = this._moveData.scale;
      this._moveData.scale = distance / this._moveData.startDistance;
      this._angle.unwrapped += unwrapAngleDelta(rawAngle, this._angle.raw);
      this._angle.raw = rawAngle;
      this._moveData.prevAngle = this._moveData.angle;
      this._moveData.angle = this._angle.unwrapped - this._angle.unwrappedStart;
    }
  }
  /** Returns the angle between the first two pointers (deg). */
  _getAngle(points) {
    if (points.length < 2) {
      return 0;
    }
    const [first, second] = points;
    return Math.atan2(second.y - first.y, second.x - first.x) * 180 / Math.PI;
  }
  /** Returns the average center position of points. */
  _getAverageCenter(points) {
    if (points.length === 1) {
      return points[0];
    }
    const sum = points.reduce((acc, p) => ({
      x: acc.x + p.x,
      y: acc.y + p.y
    }), { x: 0, y: 0 });
    return {
      x: sum.x / points.length,
      y: sum.y / points.length
    };
  }
  /** Returns the average distance between points */
  _getAverageDistance(points) {
    if (points.length <= 1) {
      return 0;
    }
    const center = this._getAverageCenter(points);
    const total = points.reduce((sum, p) => sum + Math.hypot(p.x - center.x, p.y - center.y), 0);
    return total / points.length;
  }
  /** Schedules a deduplicated `move` callback for the current microtask. */
  _scheduleMove() {
    if (this._moveScheduled) {
      return;
    }
    this._moveScheduled = true;
    queueMicrotask(() => {
      this._moveScheduled = false;
      if (!this._isStarted || this.pointersMap.size < this._saveMinPointers || !this._moveData) {
        return;
      }
      this.callbacks.emit("move", this._moveData);
    });
  }
  /**
   * Cleans up event listeners, pointers, and injected styles.
   */
  _cleanup() {
    this._listeners.forEach((listener) => listener());
    this._listeners = [];
    this._isStarted = false;
    this._moveScheduled = false;
    this._moveData = null;
    this._angle = { raw: 0, unwrapped: 0, unwrappedStart: 0 };
    this.pointersMap.clear();
    if (this.props.disableUserSelect) {
      this._resetSelection();
      styles === null || styles === void 0 ? void 0 : styles.remove();
    }
  }
  /**
   * Destroys the component and removes all event listeners.
   */
  _destroy() {
    this._cleanup();
    super._destroy();
  }
};

// node_modules/vevet/lib/esm/internal/isUndefined.js
function isUndefined(value) {
  return typeof value === "undefined";
}

// node_modules/vevet/lib/esm/components/Timeline/props.js
var _a;
var _b;
var STATIC_PROPS8 = {
  __staticProp: true
};
var MUTABLE_PROPS8 = {
  __mutableProp: true,
  easing: (_b = (_a = initVevet()) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.easing,
  duration: 1e3
};

// node_modules/vevet/lib/esm/components/Timeline/index.js
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Timeline = class extends Module {
  /** Get default static properties. */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS8);
  }
  /** Get default mutable properties. */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS8);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._progress = 0;
    this._eased = 0;
    this._raf = void 0;
    this._time = 0;
    this._isReversed = false;
    this._isPaused = false;
  }
  /**
   * Get or set the linear progress of the timeline.
   * Setting this triggers an update and associated callbacks.
   */
  get progress() {
    return this._progress;
  }
  set progress(val) {
    this._progress = clamp(val);
    this._onUpdate();
  }
  /**
   * Get the eased progress of the timeline, derived from the easing function.
   */
  get eased() {
    return this._eased;
  }
  /**
   * Whether the timeline is currently playing.
   */
  get isPlaying() {
    return !isUndefined(this._raf);
  }
  /**
   * Whether the timeline is reversed (progress decreases over time).
   */
  get isReversed() {
    return this._isReversed;
  }
  /**
   * Whether the timeline is paused.
   */
  get isPaused() {
    return this._isPaused;
  }
  /**
   * Get the timeline duration, ensuring it is at least 0 ms.
   */
  get duration() {
    const source = this.props.duration;
    if (!isFiniteNumber(source) || source < 0) {
      return 0;
    }
    return this.props.duration;
  }
  /**
   * Play the timeline, advancing progress toward completion.
   * Does nothing if the timeline is destroyed or already completed.
   */
  play() {
    if (this.progress === 1) {
      return;
    }
    this._isReversed = false;
    this._isPaused = false;
    if (!this.isPlaying) {
      this._time = Date.now();
      this._animate();
    }
  }
  /**
   * Reverse the timeline, moving progress toward the start.
   * Does nothing if the timeline is destroyed or already at the start.
   */
  reverse() {
    if (this.progress === 0) {
      return;
    }
    this._isReversed = true;
    this._isPaused = false;
    if (!this.isPlaying) {
      this._time = Date.now();
      this._animate();
    }
  }
  /**
   * Pause the timeline, halting progress without resetting it.
   */
  pause() {
    this._isPaused = true;
    if (this._raf) {
      window.cancelAnimationFrame(this._raf);
    }
    this._raf = void 0;
  }
  /**
   * Reset the timeline to the beginning (progress = 0).
   */
  reset() {
    this.pause();
    this.progress = 0;
  }
  /**
   * Animate the timeline, updating progress based on elapsed time.
   */
  _animate() {
    if (this.isPaused) {
      return;
    }
    const { isReversed, duration } = this;
    if (duration <= 0) {
      this.progress = isReversed ? 1 : 0;
      this.progress = isReversed ? 0 : 1;
      return;
    }
    const currentTime = Date.now();
    const frameDiff = Math.abs(this._time - currentTime);
    this._time = currentTime;
    const progressIterator = frameDiff / duration / (isReversed ? -1 : 1);
    const progressTarget = this.progress + progressIterator;
    this.progress = progressTarget;
    if (this.progress === 1 && !isReversed || this.progress === 0 && isReversed) {
      this._isReversed = false;
      this._isPaused = false;
      this._raf = void 0;
      return;
    }
    this._raf = window.requestAnimationFrame(() => this._animate());
  }
  /**
   * Handle progress updates and trigger callbacks.
   */
  _onUpdate() {
    this._eased = easing2(this._progress, this.props.easing);
    this.callbacks.emit("update", {
      progress: this._progress,
      eased: this._eased
    });
    if (this.progress === 0) {
      this.callbacks.emit("start", void 0);
      return;
    }
    if (this.progress === 1) {
      this.callbacks.emit("end", void 0);
    }
  }
  /**
   * Destroy the timeline, stopping any active animation and cleaning up resources.
   */
  _destroy() {
    this.pause();
    super._destroy();
  }
};
__decorate10([
  noopIfDestroyed
], Timeline.prototype, "play", null);
__decorate10([
  noopIfDestroyed
], Timeline.prototype, "reverse", null);
__decorate10([
  noopIfDestroyed
], Timeline.prototype, "pause", null);
__decorate10([
  noopIfDestroyed
], Timeline.prototype, "reset", null);

// node_modules/vevet/lib/esm/components/Preloader/props.js
var STATIC_PROPS9 = {
  __staticProp: true,
  container: null,
  hide: 250
};
var MUTABLE_PROPS9 = {
  __mutableProp: true
};

// node_modules/vevet/lib/esm/components/Preloader/index.js
var Preloader = class extends Module {
  /**
   * Retrieves the default static properties.
   */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS9);
  }
  /**
   * Retrieves the default mutable properties.
   */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS9);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._shouldHide = false;
    this._isHidden = false;
    this._isLoaded = false;
    const timeout = setTimeout(() => {
      this._onLoaded(() => this._handleLoaded());
    }, 0);
    this.onDestroy(() => clearTimeout(timeout));
  }
  /**
   * Returns whether the preloader is currently hidden.
   */
  get isHidden() {
    return this._isHidden;
  }
  /**
   * Handles the page load event, triggering when the page is fully loaded.
   */
  _onLoaded(callback) {
    initVevet().onLoad(callback);
  }
  /**
   * Handles the logic that occurs after the page is fully loaded.
   */
  _handleLoaded() {
    if (this.isDestroyed) {
      return;
    }
    this._isLoaded = true;
    this.callbacks.emit("loaded", void 0);
    if (isNumber(this.props.hide)) {
      this.hide(this.props.hide);
    }
  }
  /**
   * Hides the preloader with a custom animation duration.
   *
   * @param duration - The duration of the hide animation (in milliseconds). Applies only when the container is used.
   * @param callback - The callback to execute when the hide animation is complete.
   *
   * @returns Returns an action destructor.
   */
  hide(duration, callback) {
    if (this.isDestroyed) {
      return void 0;
    }
    if (!this._isLoaded || this._shouldHide) {
      return void 0;
    }
    let isDestroyed = false;
    this._shouldHide = true;
    this.callbacks.emit("hide", void 0);
    this._hideContainer(() => {
      this._onHidden();
      if (!isDestroyed) {
        callback === null || callback === void 0 ? void 0 : callback();
      }
    }, duration);
    return () => {
      isDestroyed = true;
    };
  }
  /**
   * Executes the hiding animation for the preloader container.
   */
  _hideContainer(onHidden, duration) {
    const { container } = this.props;
    if (!container) {
      onHidden();
      return;
    }
    const tm = new Timeline({ duration });
    this.onDestroy(() => tm.destroy());
    tm.on("update", ({ progress }) => {
      const { style: style3 } = container;
      style3.opacity = String(1 - progress);
      style3.display = progress === 1 ? "none" : "flex";
    });
    tm.on("end", () => onHidden());
    tm.play();
  }
  /**
   * Handles actions when the preloader is fully hidden.
   */
  _onHidden() {
    this._isHidden = true;
    this.callbacks.emit("hidden", void 0);
  }
  /**
   * Registers a callback for when the preloader starts hiding.
   *
   * @param action - The callback function to execute.
   * @returns A destructor.
   */
  onHide(action) {
    if (this.isDestroyed) {
      return () => {
      };
    }
    if (this._shouldHide) {
      action();
      return () => {
      };
    }
    return this.on("hide", (() => action()));
  }
  /**
   * Registers a callback for when the preloader is fully hidden.
   *
   * @param action - The callback function to execute.
   * @returns A destructor.
   */
  onHidden(action) {
    if (this.isDestroyed) {
      return () => {
      };
    }
    if (this._isHidden) {
      action();
      return () => {
      };
    }
    return this.on("hidden", (() => action()));
  }
};

// node_modules/vevet/lib/esm/components/ProgressPreloader/props.js
var STATIC_PROPS10 = Object.assign(Object.assign({}, STATIC_PROPS9), { resourceContainer: null, preloadImages: true, preloadVideos: false, customSelector: ".js-preload", ignoreClassName: "js-preload-ignore", lerp: 0.1, endDuration: 500 });
var MUTABLE_PROPS10 = Object.assign({}, MUTABLE_PROPS9);

// node_modules/vevet/lib/esm/components/ProgressPreloader/utils/preloadCustomElement.js
function getLoaded(element) {
  let loaded = parseFloat(element.getAttribute("data-loaded") || "0");
  loaded = Number.isNaN(loaded) ? 0 : clamp(loaded, 0, Infinity);
  return loaded;
}
function preloadCustomElement({ id, weight }, onLoad) {
  if (!(id instanceof Element)) {
    return;
  }
  if (getLoaded(id) >= weight) {
    onLoad(weight);
    return;
  }
  const observer = new MutationObserver(() => {
    const loaded = getLoaded(id);
    onLoad(loaded);
    if (loaded >= weight) {
      observer.disconnect();
    }
  });
  observer.observe(id, {
    attributes: true,
    attributeFilter: ["data-loaded"]
  });
}

// node_modules/vevet/lib/esm/components/ProgressPreloader/utils/preloadImage.js
function preloadImage(resource, onLoad) {
  if (resource.complete) {
    onLoad();
    return;
  }
  const image = new Image();
  image.addEventListener("load", () => onLoad());
  image.addEventListener("error", () => onLoad());
  image.crossOrigin = "anonymous";
  image.src = resource.currentSrc || resource.src;
}

// node_modules/vevet/lib/esm/components/ProgressPreloader/utils/preloadVideo.js
function preloadVideo(resource, onLoad) {
  if (resource.readyState > 0) {
    onLoad();
    return;
  }
  if (resource.preload === "none") {
    onLoad();
    return;
  }
  resource.addEventListener("error", () => onLoad());
  resource.addEventListener("loadedmetadata", () => onLoad());
}

// node_modules/vevet/lib/esm/components/ProgressPreloader/index.js
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGE_RESOURCE = `vevet-page-${Math.random()}`;
var ProgressPreloader = class extends Preloader {
  /**
   * Retrieves the default static properties.
   */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS10);
  }
  /**
   * Retrieves the default mutable properties.
   */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS10);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._resources = [
      { id: PAGE_RESOURCE, weight: 1, loaded: 0 }
    ];
    this._progress = 0;
    this._raf = new Raf({ enabled: true });
    this._raf.on("frame", () => this._handleUpdate());
    this._fetchImages();
    this._fetchVideos();
    this._fetchResources();
    initVevet().onLoad(() => this.resolveResource(PAGE_RESOURCE));
  }
  /** Container source for preloader resources. */
  get resourceContainer() {
    var _a3;
    return (_a3 = this.props.resourceContainer) !== null && _a3 !== void 0 ? _a3 : doc;
  }
  /**
   * The list of custom resources to preload.
   */
  get resources() {
    return this._resources;
  }
  /**
   * Calculates the total number of resources to preload, including their weight.
   */
  get totalWeight() {
    return this.resources.reduce((acc, { weight }) => acc + weight, 0);
  }
  /**
   * Loaded weight
   */
  get loadedWeight() {
    return this.resources.reduce((acc, { loaded }) => acc + loaded, 0);
  }
  /**
   * Current loading progress (0 to 1).
   */
  get loadProgress() {
    return this.loadedWeight / this.totalWeight;
  }
  /**
   * Gets the current progress value.
   */
  get progress() {
    return this._progress;
  }
  /**
   * Linear interpolation factor
   */
  get lerpEase() {
    return clamp(Math.abs(this.props.lerp));
  }
  /** Preload images */
  _fetchImages() {
    if (!this.props.preloadImages) {
      return;
    }
    let list = Array.from(this.resourceContainer.querySelectorAll("img"));
    list = list.filter((resource) => {
      const isIgnored2 = cnHas(resource, this.props.ignoreClassName);
      return !isIgnored2 && resource.loading !== "lazy";
    });
    this._resources.push(...list.map((resource) => ({
      id: resource,
      weight: 1,
      loaded: 0
    })));
    list.forEach((element) => {
      preloadImage(element, () => this.resolveResource(element));
    });
  }
  /** Preload videos */
  _fetchVideos() {
    if (!this.props.preloadVideos) {
      return;
    }
    let list = Array.from(this.resourceContainer.querySelectorAll("video"));
    list = list.filter((resource) => !cnHas(resource, this.props.ignoreClassName));
    this._resources.push(...list.map((resource) => ({
      id: resource,
      weight: 1,
      loaded: 0
    })));
    list.forEach((element) => {
      preloadVideo(element, () => this.resolveResource(element));
    });
  }
  /** Preload custom resources */
  _fetchResources() {
    let list = Array.from(this.resourceContainer.querySelectorAll(this.props.customSelector));
    list = list.filter((resource) => !cnHas(resource, this.props.ignoreClassName));
    list.forEach((element) => {
      let weight = parseInt(element.getAttribute("data-weight") || "1", 10);
      weight = Number.isNaN(weight) ? 1 : clamp(weight, 1, Infinity);
      const resource = {
        id: element,
        weight,
        loaded: 0
      };
      this._resources.push(resource);
      preloadCustomElement(resource, (loadedWeight) => this.resolveResource(element, loadedWeight));
    });
  }
  /**
   * Adds a custom resource
   * @param id - The custom resource element or identifier to preload.
   * @param weight - The resource weight
   */
  addResource(id, weight = 1) {
    const hasResource = this.resources.some((item) => item.id === id);
    if (hasResource) {
      throw new Error("Resource already exists");
    }
    this._resources.push({ id, weight, loaded: 0 });
  }
  /**
   * Emits a resource load event and updates the count of loaded resources.
   * @param id - The resource element or identifier being loaded.
   */
  resolveResource(id, loadedWeight) {
    const resource = this.resources.find((item) => item.id === id);
    if (!resource) {
      return;
    }
    const targetWeight = loadedWeight !== null && loadedWeight !== void 0 ? loadedWeight : resource.weight;
    resource.loaded = clamp(targetWeight, 0, resource.weight);
    this.callbacks.emit("resource", resource);
  }
  /**
   * Handles updates to the preloader's progress, triggering events and animations as needed.
   * @param newProgress - The updated progress value.
   */
  _handleUpdate() {
    var _a3;
    const ease = this._raf.lerpFactor(this.lerpEase);
    const newProgress = lerp(this._progress, this.loadProgress, ease);
    this._progress = newProgress;
    this.callbacks.emit("progress", void 0);
    if (this.loadProgress < 1) {
      return;
    }
    (_a3 = this._raf) === null || _a3 === void 0 ? void 0 : _a3.destroy();
    const startProgress = this.progress;
    if (startProgress >= 1) {
      return;
    }
    const endTimeline = new Timeline({ duration: this.props.endDuration });
    this.onDestroy(() => endTimeline.destroy());
    endTimeline.on("update", ({ progress }) => {
      const diff = 1 - startProgress;
      this._progress = startProgress + diff * progress;
      this.callbacks.emit("progress", void 0);
    });
    endTimeline.play();
  }
  /**
   * Resolves when the page and all resources are fully loaded.
   */
  _onLoaded(callback) {
    let isFinish = false;
    this.callbacks.on("progress", (() => {
      if (this.progress >= 1 && !isFinish) {
        isFinish = true;
        callback();
      }
    }), { protected: true, name: this.name });
  }
  /**
   * Cleans up resources and destroys the preloader instance.
   */
  _destroy() {
    super._destroy();
    this._raf.destroy();
  }
};
__decorate11([
  noopIfDestroyed
], ProgressPreloader.prototype, "addResource", null);
__decorate11([
  noopIfDestroyed
], ProgressPreloader.prototype, "resolveResource", null);

// node_modules/vevet/lib/esm/components/Swipe/Coords/index.js
var START_VEC3 = { x: 0, y: 0, angle: 0 };
var START_STATE = Object.assign(Object.assign({}, START_VEC3), { time: 0 });
var SwipeCoords = class {
  constructor(ctx) {
    this.ctx = ctx;
    this._timestamp = 0;
    this._start = Object.assign({}, START_STATE);
    this._prev = Object.assign({}, START_STATE);
    this._current = Object.assign({}, START_STATE);
    this._diff = Object.assign({}, START_STATE);
    this._step = Object.assign({}, START_STATE);
    this._accum = Object.assign({}, START_VEC3);
    this._movement = Object.assign({}, START_VEC3);
    this._prevMovement = Object.assign({}, START_VEC3);
    this._rawMovement = Object.assign({}, START_VEC3);
    this._tempAngle = { raw: 0, unwrapped: 0 };
    this._snap = {};
    this._bounds = null;
    this._scale = 1;
  }
  get timestamp() {
    return this._timestamp;
  }
  get start() {
    return this._start;
  }
  get prev() {
    return this._prev;
  }
  get current() {
    return this._current;
  }
  get diff() {
    return this._diff;
  }
  get step() {
    return this._step;
  }
  get accum() {
    return this._accum;
  }
  /** Displacement in movement space (rubber + snap). */
  get movement() {
    return this._movement;
  }
  set movement(value) {
    const newValue = Object.assign(Object.assign({}, this.movement), value);
    this._movement.x = newValue.x;
    this._movement.y = newValue.y;
    this._movement.angle = newValue.angle;
    this._rawMovement.x = newValue.x;
    this._rawMovement.y = newValue.y;
    this._rawMovement.angle = newValue.angle;
  }
  /** Previous displacement in movement space (rubber + snap). */
  get prevMovement() {
    return this._prevMovement;
  }
  /** Raw movement before rubber (same space as `bounds`). */
  get rawMovement() {
    return this._rawMovement;
  }
  /** Normalized movement limits (`[min, max]` per defined axis). */
  get bounds() {
    if (this._bounds) {
      return this._bounds;
    }
    return this.calculateBounds();
  }
  get overflow() {
    return this.ctx.props.overflow ? Math.abs(this.ctx.props.overflow()) : 0;
  }
  /** Current scale modifier */
  get scale() {
    return this._scale;
  }
  get coords() {
    const { timestamp, start, prev, current, diff, step, accum, movement, prevMovement, scale } = this;
    return {
      timestamp,
      start,
      prev,
      current,
      diff,
      step,
      accum,
      movement,
      prevMovement,
      scale
    };
  }
  /** Resolved snap target per axis during the current gesture. */
  get snap() {
    return this._snap;
  }
  /**
   * Overflow past `bounds` per axis in movement space.
   * Zero when inside limits; used for bounce-back.
   */
  get exceeds() {
    const { _rawMovement: movement, bounds } = this;
    if (!bounds) {
      return null;
    }
    let xDiff = 0;
    let yDiff = 0;
    let aDiff = 0;
    if (bounds.x) {
      if (movement.x < bounds.x[0]) {
        xDiff = movement.x - bounds.x[0];
      } else if (movement.x > bounds.x[1]) {
        xDiff = movement.x - bounds.x[1];
      }
    }
    if (bounds.y) {
      if (movement.y < bounds.y[0]) {
        yDiff = movement.y - bounds.y[0];
      } else if (movement.y > bounds.y[1]) {
        yDiff = movement.y - bounds.y[1];
      }
    }
    if (bounds.angle) {
      if (movement.angle < bounds.angle[0]) {
        aDiff = movement.angle - bounds.angle[0];
      } else if (movement.angle > bounds.angle[1]) {
        aDiff = movement.angle - bounds.angle[1];
      }
    }
    return {
      x: xDiff,
      y: yDiff,
      angle: aDiff
    };
  }
  /** Parses pointer coordinates relative to the container */
  decode(event) {
    const vevet2 = initVevet();
    const { props, container } = this.ctx;
    let clientX = 0;
    let clientY = 0;
    if ("touches" in event) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else if ("type" in event) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      clientX = event.x;
      clientY = event.y;
    }
    let x = clientX;
    let y = clientY;
    let centerX = vevet2.width / 2;
    let centerY = vevet2.height / 2;
    if (props.relative) {
      const bounding = container.getBoundingClientRect();
      x = clientX - bounding.left;
      y = clientY - bounding.top;
      centerX = bounding.left + bounding.width / 2;
      centerY = bounding.top + bounding.height / 2;
    }
    const angleRad = Math.atan2(clientY - centerY, clientX - centerX);
    const angle = angleRad * 180 / Math.PI;
    return {
      x,
      y,
      angle,
      time: performance.now()
    };
  }
  /** Apply scale and optionally zoom toward an origin in movement space. */
  applyScale(value, originProp) {
    if (this._scale === value) {
      return;
    }
    if (originProp) {
      const origin = this.decode(originProp);
      const ratio = value / this._scale;
      this.movement = {
        x: origin.x - (origin.x - this._movement.x) * ratio,
        y: origin.y - (origin.y - this._movement.y) * ratio
      };
    }
    this._scale = value;
  }
  /** Set start coordinates */
  setStart(state) {
    this._tempAngle = { raw: state.angle, unwrapped: state.angle };
    this._timestamp = performance.now();
    this._start = Object.assign({}, state);
    this._prev = Object.assign({}, state);
    this._current = Object.assign({}, state);
    this._diff = Object.assign(Object.assign({}, START_VEC3), { time: 0 });
    this._step = Object.assign(Object.assign({}, START_VEC3), { time: 0 });
    this._accum = Object.assign({}, START_VEC3);
  }
  /** Sync temp angle */
  syncTempAngle() {
    this._tempAngle.raw = this._current.angle;
    this._tempAngle.unwrapped = this._current.angle;
  }
  /** Update coordinates */
  update({ x, y, angle, time }, applyRatio = true) {
    const { start, ctx } = this;
    const stepRatio = applyRatio ? ctx.props.ratio : 1;
    if (ctx.hasInertia() && ctx.recalculateBoundsOnInertia() || !ctx.hasInertia()) {
      this.calculateBounds();
    }
    this._timestamp = performance.now();
    this._prev = Object.assign({}, this.current);
    this._current = { x, y, angle, time };
    const { _current: current, _prev: prev, overflow } = this;
    this._updateTempAngle(angle);
    current.angle = this._tempAngle.unwrapped;
    this._step = {
      x: current.x - prev.x,
      y: current.y - prev.y,
      angle: current.angle - prev.angle,
      time: current.time - prev.time
    };
    this._diff = {
      x: current.x - start.x,
      y: current.y - start.y,
      angle: this._diff.angle + this._step.angle,
      time: current.time - start.time
    };
    this._accum = {
      x: this._accum.x + Math.abs(this._step.x),
      y: this._accum.y + Math.abs(this._step.y),
      angle: this._accum.angle + Math.abs(this._step.angle)
    };
    this._rawMovement = {
      x: this._rawMovement.x + this._step.x * stepRatio,
      y: this._rawMovement.y + this._step.y * stepRatio,
      angle: this._rawMovement.angle + this._step.angle * stepRatio
    };
    this._prevMovement.x = this._movement.x;
    this._prevMovement.y = this._movement.y;
    this._prevMovement.angle = this._movement.angle;
    this._movement.x = this._applyRubber("x", overflow);
    this._movement.y = this._applyRubber("y", overflow);
    this._movement.angle = this._applyRubber("angle", overflow);
    this._snapMovementAxis("x");
    this._snapMovementAxis("y");
    this._snapMovementAxis("angle");
  }
  /** Snap movement axis */
  _snapMovementAxis(axis) {
    var _a3;
    const { props, hasInertia } = this.ctx;
    const snap = (_a3 = props.snap) === null || _a3 === void 0 ? void 0 : _a3.call(props);
    if (!snap) {
      this._snap[axis] = void 0;
      return;
    }
    const snaps = snap[axis];
    if (!(snaps === null || snaps === void 0 ? void 0 : snaps.length)) {
      this._snap[axis] = void 0;
      return;
    }
    const value = this._movement[axis];
    const target = closest(value, snaps);
    const radius = props.snapRadius;
    if (isFiniteNumber(radius) && Math.abs(target - value) > Math.abs(radius)) {
      this._snap[axis] = void 0;
      return;
    }
    this._snap[axis] = target;
    if (!hasInertia()) {
      this._movement[axis] = target;
    }
  }
  /** Calculate bounds */
  calculateBounds() {
    const { props } = this.ctx;
    if (!props.bounds) {
      this._bounds = null;
      return;
    }
    const bounds = props.bounds(this.coords);
    const d = [-Infinity, Infinity];
    const x = (bounds === null || bounds === void 0 ? void 0 : bounds.x) ? [Math.min(...bounds.x), Math.max(...bounds.x)] : [...d];
    const y = (bounds === null || bounds === void 0 ? void 0 : bounds.y) ? [Math.min(...bounds.y), Math.max(...bounds.y)] : [...d];
    const a = (bounds === null || bounds === void 0 ? void 0 : bounds.angle) ? [Math.min(...bounds.angle), Math.max(...bounds.angle)] : [...d];
    this._bounds = { x, y, angle: a };
    return this._bounds;
  }
  /** Unwrap raw atan2 angle and accumulate into _angle */
  _updateTempAngle(rawAngle) {
    this._tempAngle.unwrapped += unwrapAngleDelta(rawAngle, this._tempAngle.raw);
    this._tempAngle.raw = rawAngle;
  }
  /** Apply rubber-band past movement bounds. */
  _applyRubber(axis, overflow) {
    var _a3;
    const temp = this._rawMovement[axis];
    const bounds = (_a3 = this.bounds) === null || _a3 === void 0 ? void 0 : _a3[axis];
    if (!bounds) {
      return temp;
    }
    const [min, max] = bounds;
    if (temp >= min && temp <= max) {
      return temp;
    }
    if (temp < min) {
      return min - this._rubberDistance(min - temp, overflow);
    }
    return max + this._rubberDistance(temp - max, overflow);
  }
  /**
   * Overscroll → rubber displacement
   */
  _rubberDistance(overscroll, limit) {
    if (overscroll <= 0 || limit <= 0) {
      return 0;
    }
    return limit * overscroll / (limit + overscroll);
  }
};

// node_modules/vevet/lib/esm/components/Swipe/Inertia/index.js
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var IDLE_VEC3 = { x: 0, y: 0, angle: 0 };
var IDLE_STATE = Object.assign(Object.assign({}, IDLE_VEC3), { time: 0 });
var LERP_APPROX = 0.01;
var BELOW_THRESHOLD = 0.1;
var SwipeInertia = class {
  constructor(ctx) {
    this.ctx = ctx;
    this._velocity = Object.assign({}, IDLE_STATE);
    this._initialVelocity = Object.assign({}, IDLE_STATE);
    this._saveRawMovement = Object.assign({}, IDLE_VEC3);
    this._rawMovement = Object.assign({}, IDLE_VEC3);
    this._saveStep = Object.assign({}, IDLE_STATE);
    this._saveCurrent = Object.assign({}, IDLE_STATE);
  }
  /** Check if inertia is active */
  get has() {
    return !!this._raf;
  }
  /** Apply inertia-based movement */
  release(onUpdate) {
    const { ctx } = this;
    const { props } = ctx;
    this._modifiedDistance = void 0;
    this._saveCurrent = Object.assign({}, ctx.coords.current);
    this._saveStep = Object.assign({}, ctx.coords.step);
    this._saveRawMovement = Object.assign({}, ctx.coords.rawMovement);
    this._rawMovement = Object.assign({}, ctx.coords.rawMovement);
    const data = this._calcVelocity();
    if (!data || !isFiniteNumber(data.dt) || data.dt <= 0) {
      ctx.onFail();
      return false;
    }
    const { linearSpeed, angularSpeed, vx, vy, va, threshold } = data;
    if (!isFiniteNumber(linearSpeed) || !isFiniteNumber(angularSpeed) || linearSpeed < threshold && angularSpeed < threshold) {
      ctx.onFail();
      return false;
    }
    this._onUpdate = onUpdate;
    this._velocity = { x: vx, y: vy, angle: va, time: performance.now() };
    this._initialVelocity = Object.assign({}, this._velocity);
    if (props.inertiaDistanceModifier) {
      this._modifiedDistance = props.inertiaDistanceModifier({
        x: this._predictDistance(vx, props.inertiaDecay),
        y: this._predictDistance(vy, props.inertiaDecay),
        angle: this._predictDistance(va, props.inertiaDecay)
      });
    }
    this._raf = new Raf({
      enabled: true,
      onFrame: this._handleRaf.bind(this)
    });
    this.ctx.onStart();
    return true;
  }
  /** Calculate velocity */
  _calcVelocity() {
    const { _saveCurrent: current, _saveStep: step } = this;
    const _a3 = this.ctx.props, { inertiaRatio, ratio, maxVelocity } = _a3, props = __rest2(_a3, ["inertiaRatio", "ratio", "maxVelocity"]);
    if (!current || !step) {
      return null;
    }
    const gap = performance.now() - current.time;
    const dt = Math.max(step.time, gap, 1);
    const iRatio = isFiniteNumber(inertiaRatio) ? inertiaRatio : 1;
    const sRatio = isFiniteNumber(ratio) ? ratio : 1;
    const finalRatio = sRatio * iRatio;
    const maxVX = maxVelocity.x ? Math.abs(maxVelocity.x) : 0;
    let vx = step.x / dt * finalRatio;
    vx = clamp(vx, -maxVX, maxVX);
    const maxVY = maxVelocity.y ? Math.abs(maxVelocity.y) : 0;
    let vy = step.y / dt * finalRatio;
    vy = clamp(vy, -maxVY, maxVY);
    const maxVA = maxVelocity.angle ? Math.abs(maxVelocity.angle) : 0;
    let va = step.angle / dt * finalRatio;
    va = clamp(va, -maxVA, maxVA);
    const linearSpeed = Math.hypot(vx, vy) * 1e3;
    const angularSpeed = Math.abs(va) * 1e3;
    const threshold = props.inertiaThreshold;
    return { dt, vx, vy, va, linearSpeed, angularSpeed, threshold };
  }
  /** Handle RAF update */
  _handleRaf() {
    var _a3;
    if (!this._raf) {
      return;
    }
    const { _raf: raf } = this;
    const duration = this._raf.duration;
    const { coords, props } = this.ctx;
    const { _velocity: velocity, _saveCurrent: startCurrent, _saveRawMovement: startRawMovement, _rawMovement: rawMovement, _modifiedDistance: distance, _initialVelocity: initial } = this;
    const frameMs = duration;
    const dx = velocity.x * frameMs;
    const dy = velocity.y * frameMs;
    const dAngle = velocity.angle * frameMs;
    const frictionEase = raf.lerpFactor(props.inertiaDecay);
    velocity.x = lerp(velocity.x, 0, frictionEase);
    velocity.y = lerp(velocity.y, 0, frictionEase);
    velocity.angle = lerp(velocity.angle, 0, frictionEase);
    if (distance) {
      const xP = this._getVelocityProgress(velocity.x, initial.x);
      const yP = this._getVelocityProgress(velocity.y, initial.y);
      const aP = this._getVelocityProgress(velocity.angle, initial.angle);
      rawMovement.x = startRawMovement.x + distance.x * xP;
      rawMovement.y = startRawMovement.y + distance.y * yP;
      rawMovement.angle = startRawMovement.angle + distance.angle * aP;
    } else {
      rawMovement.x += dx;
      rawMovement.y += dy;
      rawMovement.angle += dAngle;
    }
    let isBouncing = false;
    const rawBounceEase = props.inertiaBounceEase;
    const bounceEase = rawBounceEase >= 1 ? 1 : raf.lerpFactor(rawBounceEase);
    const { bounds } = coords;
    if (bounds === null || bounds === void 0 ? void 0 : bounds.x) {
      const bx = this._applyAxisBounce("x", rawMovement.x, velocity.x, bounds.x, bounceEase);
      rawMovement.x = bx.value;
      velocity.x = bx.velocity;
      isBouncing = "bounceFinished" in bx ? true : isBouncing;
    }
    if (bounds === null || bounds === void 0 ? void 0 : bounds.y) {
      const by = this._applyAxisBounce("y", rawMovement.y, velocity.y, bounds.y, bounceEase);
      rawMovement.y = by.value;
      velocity.y = by.velocity;
      isBouncing = "bounceFinished" in by ? true : isBouncing;
    }
    if (bounds === null || bounds === void 0 ? void 0 : bounds.angle) {
      const ba = this._applyAxisBounce("angle", rawMovement.angle, velocity.angle, bounds.angle, bounceEase);
      rawMovement.angle = ba.value;
      velocity.angle = ba.velocity;
      isBouncing = "bounceFinished" in ba ? true : isBouncing;
    }
    const totalX = rawMovement.x - startRawMovement.x;
    const totalY = rawMovement.y - startRawMovement.y;
    const totalA = rawMovement.angle - startRawMovement.angle;
    const x = startCurrent.x + totalX;
    const y = startCurrent.y + totalY;
    const angle = startCurrent.angle + totalA;
    (_a3 = this._onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(this, { x, y, angle });
    const linearStep = Math.hypot(dx, dy);
    const angularStep = Math.abs(dAngle);
    let shouldStop = linearStep < BELOW_THRESHOLD && angularStep < BELOW_THRESHOLD;
    if (distance) {
      shouldStop = Math.abs(totalX - distance.x) < LERP_APPROX && Math.abs(totalY - distance.y) < LERP_APPROX && Math.abs(totalA - distance.angle) < LERP_APPROX;
    }
    if (!isBouncing && shouldStop) {
      this.ctx.onEnd();
      this._clear();
    }
  }
  /** Calculate velocity progress */
  _getVelocityProgress(v, initial) {
    if (Math.abs(initial) < BELOW_THRESHOLD) {
      return 1;
    }
    const p = 1 - Math.abs(v / initial);
    if (Math.abs(1 - p) < LERP_APPROX / 10) {
      return 1;
    }
    return p;
  }
  _predictDistance(velocity, decay, frameMs = 1e3 / 60) {
    const k = decay * 60 / 1e3;
    const r = Math.exp(-k * frameMs);
    return velocity * frameMs / (1 - r);
  }
  /** Apply exponential axis bounce overflow */
  _applyAxisBounce(axis, value, velocity, bounds, ease) {
    if (!bounds.length) {
      return { value, velocity };
    }
    const snappy = this.ctx.coords.snap[axis];
    const lo = typeof snappy === "number" ? snappy : Math.min(...bounds);
    const hi = typeof snappy === "number" ? snappy : Math.max(...bounds);
    if (value < lo || value > hi) {
      const target = clamp(value, lo, hi);
      const val = lerp(value, target, ease, LERP_APPROX);
      const vel = lerp(velocity, 0, ease, LERP_APPROX);
      return {
        value: val,
        velocity: vel,
        bounceFinished: val === target && vel === 0
      };
    }
    return { value, velocity };
  }
  /** Clear data and stop animation */
  _clear() {
    var _a3;
    (_a3 = this._raf) === null || _a3 === void 0 ? void 0 : _a3.destroy();
    this._raf = void 0;
    this._velocity = Object.assign({}, IDLE_STATE);
  }
  /** Stop inertia animation */
  cancel() {
    if (this._raf) {
      this.ctx.onCancel();
    }
    this._clear();
  }
  /** Destroy instance */
  destroy() {
    this._clear();
  }
};

// node_modules/vevet/lib/esm/components/Swipe/props.js
var STATIC_PROPS11 = {
  __staticProp: true,
  container: null,
  thumb: null,
  buttons: [0],
  pointers: 1,
  disableUserSelect: true
};
var MUTABLE_PROPS11 = {
  __mutableProp: true,
  enabled: true,
  relative: false,
  axis: null,
  ratio: 1,
  grabCursor: false,
  willAbort: () => false,
  threshold: 5,
  minTime: 0,
  directionThreshold: 50,
  preventEdgeSwipe: true,
  edgeSwipeThreshold: 20,
  preventTouchMove: true,
  requireCtrlKey: false,
  bounceDuration: 250,
  overflow: () => 50,
  inertia: false,
  inertiaDecay: 0.05,
  inertiaBounceEase: 0.3,
  inertiaRatio: 1,
  inertiaThreshold: 1,
  maxVelocity: { x: 7, y: 7, angle: 3 },
  bounds: null,
  recalculateBoundsOnInertia: true,
  snap: null,
  canBounce: () => true,
  snapRadius: null,
  inertiaDuration: null,
  inertiaEasing: null,
  velocityModifier: null,
  inertiaDistanceThreshold: null,
  inertiaDistanceModifier: null
};

// node_modules/vevet/lib/esm/components/Swipe/Styles/styles.js
var cursorStyles = isBrowser ? doc.createElement("style") : null;
if (cursorStyles) {
  cursorStyles.innerHTML = "* { cursor: grabbing !important; }";
}

// node_modules/vevet/lib/esm/components/Swipe/Styles/index.js
var SwipeStyles = class {
  constructor(_ctx) {
    this._ctx = _ctx;
    this._styles = cursorStyles === null || cursorStyles === void 0 ? void 0 : cursorStyles.cloneNode(true);
    this.setInline();
  }
  /** Applies touch-action and cursor styles */
  setInline() {
    const { props } = this._ctx;
    const target = props.thumb || props.container;
    const { axis, enabled, grabCursor: hasGrabCursor } = props;
    const { style: style3 } = target;
    const cursor = enabled && hasGrabCursor ? "grab" : "";
    let touchAction = "none";
    if (axis === "x") {
      touchAction = "pan-y";
    } else if (axis === "y") {
      touchAction = "pan-x";
    }
    style3.cursor = cursor;
    style3.touchAction = touchAction;
  }
  /** Appends styles */
  append() {
    const swipe = this._ctx;
    if (swipe.props.grabCursor && this._styles) {
      body.append(this._styles);
    }
  }
  /** Remove styles */
  remove() {
    var _a3;
    (_a3 = this._styles) === null || _a3 === void 0 ? void 0 : _a3.remove();
  }
};

// node_modules/vevet/lib/esm/components/Swipe/index.js
var Swipe = class extends Module {
  /**
   * Returns default static properties.
   */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS11);
  }
  /**
   * Returns default mutable properties.
   */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS11);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._isSwiping = false;
    this._isAborted = false;
    const { container, thumb, buttons, pointers } = this.props;
    this._coords = new SwipeCoords({
      container,
      props: this.props,
      hasInertia: () => this.hasInertia,
      recalculateBoundsOnInertia: () => this.props.recalculateBoundsOnInertia
    });
    this._styles = new SwipeStyles(this);
    this._inertia = new SwipeInertia({
      props: this.props,
      coords: this._coords,
      onStart: () => {
        this._coords.syncTempAngle();
        this.callbacks.emit("inertiaStart", void 0);
      },
      onFail: () => this.callbacks.emit("inertiaFail", void 0),
      onCancel: () => this.callbacks.emit("inertiaCancel", void 0),
      onEnd: () => this.callbacks.emit("inertiaEnd", void 0)
    });
    this._pointers = new Pointers({
      container: thumb || container,
      buttons,
      minPointers: pointers,
      maxPointers: pointers,
      relative: false,
      enabled: this.props.enabled,
      disableUserSelect: this.props.disableUserSelect
    });
    this._setEvents();
  }
  /** Full coordinate snapshot (pointer space + `movement`). */
  get coords() {
    return this._coords.coords;
  }
  /** Coordinate reference element. */
  get container() {
    return this.props.container;
  }
  /** Whether release inertia is running. */
  get hasInertia() {
    return this._inertia.has;
  }
  /** Whether overflow bounce-back timeline is running. */
  get hasBounce() {
    return !!this._bounceTm;
  }
  /** Whether a swipe gesture is in progress. */
  get isSwiping() {
    return this._isSwiping;
  }
  /** Handles property updates */
  _handleProps(props) {
    super._handleProps(props);
    this._pointers.updateProps({ enabled: this.props.enabled });
    this._styles.setInline();
    if (!this.props.inertia || !this.props.enabled) {
      this.cancelInertia();
    }
    if (!this.props.enabled) {
      this.cancelBounce();
    }
  }
  /** Sets event listeners */
  _setEvents() {
    const { callbacks } = this;
    const { container } = this.props;
    this._pointers.on("start", () => this._handlePointersStart());
    this._pointers.on("pointerdown", (data) => callbacks.emit("pointerdown", data));
    this._pointers.on("pointermove", (data) => callbacks.emit("pointermove", data));
    this._pointers.on("pointerup", (data) => callbacks.emit("pointerup", data));
    this._pointers.on("end", () => this._handlePointersEnd());
    const touchstart = addEventListener(container, "touchstart", (event) => this._handleTouchStart(event), { passive: false });
    this.onDestroy(() => touchstart());
  }
  /** Handles `touchstart` events */
  _handleTouchStart(event) {
    if (!this.props.enabled) {
      return;
    }
    this._preventEdgeSwipe(event);
    this.callbacks.emit("touchstart", event);
  }
  /** Prevents edge swipes if enabled */
  _preventEdgeSwipe(event) {
    const { props } = this;
    if (!props.preventEdgeSwipe) {
      return;
    }
    const threshold = props.edgeSwipeThreshold;
    const x = event.targetTouches[0].pageX;
    const shouldPrevent = x <= threshold || x >= initVevet().width - threshold;
    if (event.cancelable && shouldPrevent) {
      event.preventDefault();
      this.callbacks.emit("preventEdgeSwipe", void 0);
    }
  }
  /** Handles pointers start */
  _handlePointersStart() {
    this.cancelBounce();
    this.cancelInertia();
    const touchmove = addEventListener(window, "touchmove", this._handleTouchMove.bind(this), { passive: false });
    const mousemove = addEventListener(window, "mousemove", this._handleMouseMove.bind(this));
    const end = this._pointers.on("end", () => {
      this._handleEnd();
      end();
      touchmove();
      mousemove();
    });
    this.onDestroy(() => {
      end();
      touchmove();
      mousemove();
    });
  }
  /** Handles pointers end */
  _handlePointersEnd() {
    if (!this._isSwiping) {
      this.releaseBounce();
    }
  }
  /** Handles `touchmove` event */
  _handleTouchMove(event) {
    this.callbacks.emit("touchmove", event);
    if (this._isSwiping && this.props.preventTouchMove && event.cancelable) {
      event.preventDefault();
    }
    this._handleMove("touch");
  }
  /** Handles `mousemove` event */
  _handleMouseMove(event) {
    if (this.props.requireCtrlKey && !event.ctrlKey) {
      return;
    }
    this.callbacks.emit("mousemove", event);
    this._handleMove("mouse");
  }
  /** Handles move events */
  _handleMove(type) {
    if (!this._pointers.move || !this.props.enabled) {
      return;
    }
    const data = this._coords;
    const state = data.decode(this._pointers.move.center);
    if (this._isAborted) {
      return;
    }
    if (!this._startCoord) {
      this._startCoord = Object.assign({}, state);
    }
    if (!this._startTime) {
      this._startTime = +Date.now();
    }
    if (!this._isSwiping && !this._canStart(state, type)) {
      return;
    }
    if (!this._isSwiping) {
      this.cancelInertia();
      this.cancelBounce();
      this._isSwiping = true;
      this._startCoord = Object.assign({}, state);
      data.setStart(state);
      this.callbacks.emit("start", this.coords);
      this._styles.append();
    }
    this._move(state);
  }
  /** Checks if swipe can start */
  _canStart(state, type) {
    const { _startCoord: startCoord, _startTime: startTime } = this;
    if (!startCoord || !startTime) {
      return false;
    }
    const { threshold, minTime, axis, willAbort } = this.props;
    const diff = {
      x: state.x - startCoord.x,
      y: state.y - startCoord.y
    };
    const distX = diff.x;
    const distY = diff.y;
    const dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
    if (dist < threshold) {
      return false;
    }
    if (+/* @__PURE__ */ new Date() - startTime < minTime) {
      return false;
    }
    if (axis) {
      const rawAngle = Math.atan2(Math.abs(diff.y), Math.abs(diff.x)) * 180 / Math.PI;
      const normalizedAngle = axis === "x" ? rawAngle : 90 - rawAngle;
      if (normalizedAngle > 45) {
        this._reset();
        this._isAborted = true;
        this.callbacks.emit("abort", void 0);
        return false;
      }
    }
    const shouldAbort = willAbort({
      type,
      state,
      start: startCoord,
      diff
    });
    if (shouldAbort) {
      this._reset();
      this._isAborted = true;
      this.callbacks.emit("abort", void 0);
      return false;
    }
    return true;
  }
  /** Handles move events */
  _move(state, applyRatio = true) {
    const coords = this._coords;
    coords.update(state, applyRatio);
    this.callbacks.emit("move", this.coords);
  }
  /** Handles swipe end */
  _handleEnd() {
    this._startTime = void 0;
    this._isAborted = false;
    if (!this.isSwiping) {
      return;
    }
    this._reset();
    this._styles.remove();
    const { x: diffX, y: diffY } = this._coords.diff;
    const absDiffX = Math.abs(diffX);
    const absDiffY = Math.abs(diffY);
    const { directionThreshold } = this.props;
    const endAxis = absDiffX > absDiffY ? "x" : "y";
    if (endAxis === "x" && absDiffX > directionThreshold) {
      if (diffX > 0) {
        this.callbacks.emit("toRight", void 0);
      } else if (diffX < 0) {
        this.callbacks.emit("toLeft", void 0);
      }
    }
    if (endAxis === "y" && absDiffY > directionThreshold) {
      if (diffY > 0) {
        this.callbacks.emit("toBottom", void 0);
      } else if (diffY < 0) {
        this.callbacks.emit("toTop", void 0);
      }
    }
    this.callbacks.emit("end", this.coords);
    let hasInertia = false;
    if (this.props.inertia) {
      hasInertia = this._releaseInertia();
    }
    if (!hasInertia) {
      this.releaseBounce();
    }
  }
  /** Reset swipe states */
  _reset() {
    this._startCoord = void 0;
    this._isSwiping = false;
  }
  /** Apply inertia-based movement */
  _releaseInertia() {
    return this._inertia.release(({ x, y, angle }) => {
      this.callbacks.emit("inertia", void 0);
      this._move({ x, y, angle, time: performance.now() }, false);
    });
  }
  /** Apply bounce overflow animation */
  releaseBounce(targetDuration) {
    this.cancelBounce();
    const { exceeds } = this._coords;
    const canBounce = this.props.canBounce();
    if (!exceeds || !exceeds.x && !exceeds.y && !exceeds.angle || !canBounce) {
      return;
    }
    const start = Object.assign({}, this.current);
    const duration = targetDuration !== null && targetDuration !== void 0 ? targetDuration : this.props.bounceDuration;
    const tm = new Timeline({ duration, easing: EaseOutCubic });
    this._bounceTm = tm;
    this._coords.syncTempAngle();
    tm.on("update", ({ eased }) => {
      this._move({
        x: start.x - exceeds.x * eased,
        y: start.y - exceeds.y * eased,
        angle: start.angle - exceeds.angle * eased,
        time: performance.now()
      }, false);
    });
    tm.on("end", this.cancelBounce.bind(this));
    tm.play();
  }
  /** Cancel inertia */
  cancelInertia() {
    this._inertia.cancel();
  }
  /** Cancel bounce */
  cancelBounce() {
    var _a3;
    (_a3 = this._bounceTm) === null || _a3 === void 0 ? void 0 : _a3.destroy();
    this._bounceTm = void 0;
  }
  /** Calculate swipe bounds */
  calculateBounds() {
    return this._coords.calculateBounds();
  }
  /** Pointer position at swipe start. */
  get start() {
    return this._coords.start;
  }
  /** Previous pointer position. */
  get prev() {
    return this._coords.prev;
  }
  /** Current pointer position. */
  get current() {
    return this._coords.current;
  }
  /** Offset from swipe start to current pointer position. */
  get diff() {
    return this._coords.diff;
  }
  /** Offset from previous to current pointer position. */
  get step() {
    return this._coords.step;
  }
  /** Absolute path length since swipe start. */
  get accum() {
    return this._coords.accum;
  }
  /** Total displacement in movement space (use for element transforms). */
  get movement() {
    return this._coords.movement;
  }
  /** Current scale modifier. */
  get scale() {
    return this._coords.scale;
  }
  /**
   * Sets programmatic scale in movement space.
   * Optionally zooms toward an origin point and emits `move`.
   */
  setScale(value, origin) {
    this._coords.applyScale(value, origin);
    this._move(Object.assign(Object.assign({}, this.current), { time: performance.now() }));
    if (!this._inertia.has) {
      this.releaseBounce(0);
    }
  }
  /**
   * Sets programmatic displacement in movement space.
   * Reapplies rubber, snap, emits `move`, and cancels overflow bounce.
   */
  setMovement(value) {
    this._coords.movement = value;
    this._move(Object.assign(Object.assign({}, this.current), { time: performance.now() }));
    this.releaseBounce(0);
  }
  /**
   * Destroys the component
   */
  _destroy() {
    super._destroy();
    this.cancelBounce();
    this._pointers.destroy();
    this._inertia.destroy();
    this._styles.remove();
  }
};

// node_modules/vevet/lib/esm/components/Scrollbar/props.js
var STATIC_PROPS12 = {
  __staticProp: true,
  container: isBrowser ? window : null,
  parent: false,
  class: false,
  axis: "y",
  draggable: true,
  autoHide: true,
  resizeDebounce: 50
};
var MUTABLE_PROPS12 = {
  __mutableProp: true,
  minSize: 50,
  autoSize: true
};

// node_modules/vevet/lib/esm/components/Scrollbar/styles.js
var style2 = null;
function createScrollbarStyles(prefix) {
  if (style2) {
    return style2;
  }
  style2 = doc.createElement("style");
  prependStyles(style2);
  style2.innerHTML = `
    .${prefix}-scrollable {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .${prefix}-scrollable::-webkit-scrollbar {
      display: none;
      appearance: none;
      width: 0;
      height: 0;
    }

    .${prefix} {
      position: absolute;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s linear, visibility 0.25s linear;
    }

    .${prefix}.${prefix}_in-window {
      position: fixed;
      z-index: 9;
    }

    .${prefix}.${prefix}_inited {
      opacity: 1;
      visibility: visible;
    }

    .${prefix}.${prefix}_empty {
      opacity: 0;
      visibility: hidden;
    }

    .${prefix}.${prefix}_auto-hide {
      opacity: 0;
    }

    .${prefix}.${prefix}_auto-hide:hover,
    .${prefix}.${prefix}_auto-hide:active,
    .${prefix}.${prefix}_in-action {
      opacity: 1;
    }

    .${prefix}_y {
      top: 0;
      right: 0;
      width: 10px;
      height: 100%;
    }

    .${prefix}_x {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10px;
    }

    .${prefix}__track {
      position: relative;
      width: 100%;
      height: 100%;
      background: #ccc;
    }

    .${prefix}__thumb {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #333;
    }
  `;
  return style2;
}

// node_modules/vevet/lib/esm/components/Scrollbar/utils/isSnap.js
function isSnap(instance) {
  return typeof instance === "object" && instance !== null && "slides" in instance && "toCoord" in instance;
}

// node_modules/vevet/lib/esm/components/Scrollbar/index.js
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Scrollbar = class extends Module {
  /** Get default static properties */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS12);
  }
  /** Get default mutable properties */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS12);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._valueOnSwipeStart = 0;
    this._prevScrollValue = 0;
    this._isRtl = false;
    this._isRtl = getTextDirection(this.parent) === "rtl" && this.axis === "x";
    createScrollbarStyles(this.prefix);
    this._create();
    this._setResize();
    this._setOnscroll();
    this._setSwipe();
    cnAdd(this.outer, this._cn("_inited"));
  }
  get prefix() {
    return `${initVevet().prefix}scrollbar`;
  }
  /**
   * Scrollbar outer element
   */
  get outer() {
    return this._outer;
  }
  /**
   * The element to which the scrollbar is applied.
   */
  get container() {
    return this.props.container;
  }
  /**
   * Scrollbar track element (the container of the thumb).
   */
  get track() {
    return this._track;
  }
  /**
   * Scrollbar thumb element (draggable handle).
   */
  get thumb() {
    return this._thumb;
  }
  /** Scroll axis */
  get axis() {
    return this.props.axis;
  }
  /**
   * The element where the scrollbar is appended.
   * If `parent` is not set, it defaults to `container` or `document.body` (if applied to `window`).
   */
  get parent() {
    const { parent, container } = this.props;
    if (parent) {
      return parent;
    }
    if (container instanceof Window) {
      return body;
    }
    if (isSnap(container)) {
      return container.container;
    }
    return container;
  }
  /**
   * The actual scrollable element.
   * Returns `document.documentElement` for `window`, otherwise the `container` itself.
   */
  get scrollElement() {
    return this.container instanceof Window ? html : this.container;
  }
  /**
   * Returns the total scroll width/height of the content.
   */
  get scrollSize() {
    const { scrollElement } = this;
    if (isSnap(scrollElement)) {
      return scrollElement.max - scrollElement.min;
    }
    return this.axis === "x" ? scrollElement.scrollWidth : scrollElement.scrollHeight;
  }
  /**
   * Returns the total scrollable distance.
   */
  get scrollableSize() {
    const { scrollElement } = this;
    if (isSnap(scrollElement)) {
      return scrollElement.max - scrollElement.min;
    }
    return this.axis === "x" ? this.scrollSize - scrollElement.clientWidth : this.scrollSize - scrollElement.clientHeight;
  }
  /**
   * Returns scrollTop or scrollLeft of the scrollable element.
   */
  get scrollValue() {
    const { axis } = this;
    if (isSnap(this.container)) {
      return this.container.loopedCurrent;
    }
    if (this.container instanceof Window) {
      return axis === "x" ? window.scrollX : window.scrollY;
    }
    return axis === "x" ? this.container.scrollLeft : this.container.scrollTop;
  }
  /** Returns the current track size. */
  get trackSize() {
    return this.axis === "x" ? this._track.offsetWidth : this._track.offsetHeight;
  }
  /** Returns the current thumb size. */
  get thumbSize() {
    return this.axis === "x" ? this._thumb.offsetWidth : this._thumb.offsetHeight;
  }
  /** Handles property mutations */
  _handleProps(props) {
    super._handleProps(props);
    this.resize();
  }
  /** Create elements */
  _create() {
    const isInWindow = this.container instanceof Window;
    const { scrollElement } = this;
    this._outer = this._createOuter();
    this.parent.appendChild(this._outer);
    this._track = this._createTrack();
    this._outer.appendChild(this._track);
    this._thumb = this._createThumb();
    this._track.appendChild(this._thumb);
    if (isInWindow) {
      this._addTempClassName(html, this._cn("-scrollable"));
      this._addTempClassName(body, this._cn("-scrollable"));
    } else if (scrollElement instanceof HTMLElement) {
      this._addTempClassName(scrollElement, this._cn("-scrollable"));
    }
    this.onDestroy(() => this._outer.remove());
  }
  /** Create outer element */
  _createOuter() {
    const cn = this._cn.bind(this);
    const { props, axis } = this;
    const element = doc.createElement("div");
    element.setAttribute("data-scrollbar", "true");
    cnAdd(element, cn(""));
    cnAdd(element, cn(`_${axis}`));
    if (props.class) {
      cnAdd(element, props.class);
    }
    if (this.container instanceof Window) {
      this._addTempClassName(element, this._cn("_in-window"));
    }
    if (props.autoHide) {
      this._addTempClassName(element, this._cn("_auto-hide"));
    }
    return element;
  }
  /** Create track element */
  _createTrack() {
    const cn = this._cn.bind(this);
    const { axis } = this;
    const element = doc.createElement("div");
    cnAdd(element, cn("__track"));
    cnAdd(element, cn(`__track_${axis}`));
    return element;
  }
  /** Create thumb element */
  _createThumb() {
    const cn = this._cn.bind(this);
    const element = doc.createElement("div");
    cnAdd(element, cn("__thumb"));
    cnAdd(element, cn(`__thumb_${this.axis}`));
    return element;
  }
  /** Set resize events */
  _setResize() {
    const { scrollElement } = this;
    if (isSnap(scrollElement)) {
      const destruct = scrollElement.on("resize", () => this.resize());
      this.onDestroy(() => destruct());
      return;
    }
    const createResizeHandler = () => {
      const children = Array.from(scrollElement.children);
      return onResize({
        element: [this.track, this.parent, scrollElement, ...children],
        viewportTarget: "width",
        resizeDebounce: this.props.resizeDebounce,
        callback: () => this.resize()
      });
    };
    let resizeHandler = createResizeHandler();
    resizeHandler.resize();
    const childrenObserver = new MutationObserver(() => {
      resizeHandler.remove();
      resizeHandler = createResizeHandler();
      resizeHandler.debounceResize();
    });
    childrenObserver.observe(scrollElement, { childList: true });
    this.onDestroy(() => {
      resizeHandler.remove();
      childrenObserver.disconnect();
    });
  }
  /** Set scroll events */
  _setOnscroll() {
    const { container } = this;
    if (isSnap(container)) {
      const destruct = container.on("update", () => this._onScroll());
      this.onDestroy(() => destruct());
      return;
    }
    const handler = addEventListener(container, "scroll", () => this._onScroll(), { passive: true });
    this.onDestroy(() => handler());
  }
  /** Set swipe events */
  _setSwipe() {
    if (!this.props.draggable) {
      return;
    }
    const swipe = new Swipe({ container: this.thumb, grabCursor: true });
    swipe.on("start", (coord) => this._handleSwipeStart(coord));
    swipe.on("move", (coord) => this._handleSwipeMove(coord));
    swipe.on("end", (coord) => this._handleSwipeEnd(coord));
    swipe.on("touchmove", (event) => this._handleSwipeTouchMove(event));
    swipe.on("mousemove", (event) => this._handleSwipeMouseMove(event));
    this.onDestroy(() => swipe.destroy());
  }
  /** Handles swipe start */
  _handleSwipeStart(coords) {
    const { container } = this;
    if (isSnap(container)) {
      this._valueOnSwipeStart = container.target;
    } else {
      this._valueOnSwipeStart = this.scrollValue;
    }
    this.callbacks.emit("swipeStart", coords);
  }
  /** Handle swipe move */
  _handleSwipeMove(coords) {
    this._onSwipeMove(coords);
    this.callbacks.emit("swipe", coords);
  }
  /** Handle swipe end */
  _handleSwipeEnd(coords) {
    this.callbacks.emit("swipeEnd", coords);
  }
  /** Handle swipe touchmove */
  _handleSwipeTouchMove(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  /** Handle swipe mousemove */
  _handleSwipeMouseMove(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  /** Resize the scrollbar. */
  resize() {
    const { scrollableSize, scrollSize, outer, track, thumb, props, axis } = this;
    const { autoSize: shouldAutoSize } = props;
    const isHorizontal = axis === "x";
    cnToggle(outer, this._cn("_empty"), scrollableSize === 0);
    const trackSize = isHorizontal ? track.offsetWidth : track.offsetHeight;
    const minThumbSize = toPixels(props.minSize);
    let newThumbSize = minThumbSize;
    if (shouldAutoSize) {
      newThumbSize = clamp(trackSize / (scrollSize / trackSize), minThumbSize, Infinity);
    }
    const { style: style3 } = thumb;
    if (isHorizontal) {
      style3.width = `${newThumbSize}px`;
    } else {
      style3.height = `${newThumbSize}px`;
    }
    if (this._addInActionTimeout) {
      clearTimeout(this._addInActionTimeout);
    }
    this._render();
    this.callbacks.emit("resize", void 0);
  }
  /** Render the scrollbar. */
  _render() {
    const { scrollValue, scrollableSize, axis, thumbSize, trackSize } = this;
    const isRtl = this._isRtl;
    const normalizedScrollValue = isRtl ? Math.abs(scrollValue) : scrollValue;
    let scrollProgress = clamp(normalizedScrollValue / scrollableSize);
    if (isRtl) {
      scrollProgress = 1 - scrollProgress;
    }
    const translate = (trackSize - thumbSize) * scrollProgress;
    const x = axis === "x" ? translate : 0;
    const y = axis === "y" ? translate : 0;
    this._thumb.style.transform = `translate(${x}px, ${y}px)`;
    this.callbacks.emit("update", void 0);
  }
  /** Handle scroll update */
  _onScroll() {
    const { scrollValue, outer } = this;
    const inActionClass = this._cn("_in-action");
    if (scrollValue !== this._prevScrollValue) {
      this._addInActionTimeout = setTimeout(() => {
        if (!cnHas(outer, inActionClass)) {
          cnAdd(outer, inActionClass);
          this.callbacks.emit("show", void 0);
        }
      }, 50);
    } else {
      this._prevScrollValue = scrollValue;
    }
    this._render();
    if (this._removeInActionTimeout) {
      clearTimeout(this._removeInActionTimeout);
    }
    this._removeInActionTimeout = setTimeout(() => {
      cnRemove(outer, inActionClass);
      this.callbacks.emit("hide", void 0);
    }, 500);
  }
  /** Handle swipe move */
  _onSwipeMove(data) {
    const { scrollElement, axis, trackSize, thumbSize, scrollableSize } = this;
    const valueOnStart = this._valueOnSwipeStart;
    const diff = axis === "x" ? data.diff.x : data.diff.y;
    let iterator = diff / (trackSize - thumbSize) * scrollableSize;
    if (isSnap(scrollElement)) {
      iterator = this._isRtl ? -iterator : iterator;
      const { min, max } = scrollElement;
      const trackLength = scrollElement.max - scrollElement.min;
      const loopCount = scrollElement.props.loop ? scrollElement.loopCount : 0;
      const target = clamp(valueOnStart + iterator, min + trackLength * loopCount, max + trackLength * loopCount);
      scrollElement.setTarget(target);
    } else {
      const target = valueOnStart + iterator;
      scrollElement.scrollTo({
        top: axis === "y" ? target : void 0,
        left: axis === "x" ? target : void 0,
        behavior: "instant"
      });
    }
  }
  /**
   * Destroys the component and cleans up resources.
   */
  _destroy() {
    super._destroy();
    if (this._addInActionTimeout) {
      clearTimeout(this._addInActionTimeout);
    }
    if (this._removeInActionTimeout) {
      clearTimeout(this._removeInActionTimeout);
    }
  }
};
__decorate12([
  noopIfDestroyed
], Scrollbar.prototype, "resize", null);

// node_modules/vevet/lib/esm/components/ScrollProgress/props.js
var STATIC_PROPS13 = {
  __staticProp: true,
  section: null,
  root: null,
  optimized: true,
  useSvh: false
};
var MUTABLE_PROPS13 = {
  __mutableProp: true
};

// node_modules/vevet/lib/esm/components/ScrollProgress/index.js
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ScrollProgress = class extends Module {
  /** Retrieves the default static properties. */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS13);
  }
  /** Retrieves the default mutable properties. */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS13);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._isVisible = false;
    this._rootBounds = {
      top: 0,
      left: 0,
      width: 1,
      height: 1
    };
    this._sectionBounds = {
      top: 0,
      left: 0,
      width: 1,
      height: 1
    };
    this._isVisible = !this.props.optimized;
    this._setup();
  }
  /**
   * Returns the section element being tracked for scroll progress.
   */
  get section() {
    return this.props.section;
  }
  /** Indicates whether the section is currently visible within the viewport or root element. */
  get isVisible() {
    return this._isVisible;
  }
  /** The bounds of the root element used for scroll calculations. */
  get rootBounds() {
    return this._rootBounds;
  }
  /** The bounds of the section element relative to the root element. */
  get sectionBounds() {
    return this._sectionBounds;
  }
  /** Sets up events */
  _setup() {
    this._setupObserver();
    this._setupScroll();
  }
  /**
   * Sets up an `IntersectionObserver` to track the visibility of the section.
   */
  _setupObserver() {
    if (!this.props.optimized) {
      this.update(true);
      return;
    }
    const { section } = this.props;
    const bounding = section.getBoundingClientRect();
    this._isVisible = bounding.top < window.innerHeight || bounding.bottom > 0;
    this.update(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === section) {
          const isNowVisible = entry.isIntersecting;
          if (isNowVisible === this._isVisible) {
            return;
          }
          this._isVisible = entry.isIntersecting;
          this.update();
        }
      });
    });
    observer.observe(section);
    this.onDestroy(() => observer.disconnect());
  }
  /**
   * Sets up a scroll event listener to track and update progress.
   */
  _setupScroll() {
    const container = this.props.root || window;
    const listener = addEventListener(container, "scroll", () => this.update(), { passive: false });
    this.onDestroy(listener);
  }
  /** Updates the section and root bounds, and emits an update callback. */
  update(isForce = false) {
    if (!this.isVisible && !isForce) {
      return;
    }
    const { section, props } = this;
    const container = props.root;
    const core = initVevet();
    const sectionBounding = section.getBoundingClientRect();
    const viewportBounds = {
      top: 0,
      left: 0,
      width: core.width,
      height: props.useSvh ? core.sHeight : core.height
    };
    this._rootBounds = container ? container.getBoundingClientRect() : viewportBounds;
    this._sectionBounds = {
      top: sectionBounding.top - this._rootBounds.top,
      left: sectionBounding.left - this._rootBounds.left,
      width: sectionBounding.width,
      height: sectionBounding.height
    };
    this.callbacks.emit("update", void 0);
  }
  /**
   * Calculates the section scroll progress relative to the root element.
   *
   * The function takes top or left corner of the section as the reference point.
   *
   * @param topThreshold - Top threshold of the section position.
   * @param rightThreshold - Right threshold of the section position.
   * @param bottomThreshold - Bottom threshold of the section position.
   * @param leftThreshold - Left threshold of the section position.
   * @returns The scroll progress along the x and y axes.
   *
   * @example
   *
   * const progress = getProgress(0, vevet.width, vevet.height / 2, 0)
   *
   * // `progress.y` is `0` when the top corner of the section is at the beginning of the viewport or root element
   * // `progress.y` is `1` when the top corner of the section is at the center of the viewport or root element
   */
  getProgress(topThreshold, rightThreshold, bottomThreshold, leftThreshold) {
    const y = clampScope(this._sectionBounds.top, [
      topThreshold,
      bottomThreshold
    ]);
    const x = clampScope(this._sectionBounds.left, [
      leftThreshold,
      rightThreshold
    ]);
    return {
      x: Number.isNaN(x) ? 0 : x,
      y: Number.isNaN(y) ? 0 : y
    };
  }
  /** Calculates the progress of the section entering the root element. */
  get inProgress() {
    const { rootBounds, sectionBounds } = this;
    const top = this.rootBounds.height;
    const right = sectionBounds.width > rootBounds.width ? 0 : rootBounds.width - sectionBounds.width;
    const bottom = sectionBounds.height > rootBounds.height ? 0 : rootBounds.height - sectionBounds.height;
    const left = this.rootBounds.width;
    return this.getProgress(top, right, bottom, left);
  }
  /** Calculates the progress of the section leaving the root element. */
  get outProgress() {
    const { rootBounds, sectionBounds } = this;
    const top = Math.min(rootBounds.height - sectionBounds.height, 0);
    const right = -sectionBounds.width;
    const bottom = -sectionBounds.height;
    const left = Math.min(rootBounds.width - sectionBounds.width, 0);
    return this.getProgress(top, right, bottom, left);
  }
  /** Calculates the progress of the section's movement within the root element. */
  get moveProgress() {
    const { rootBounds, sectionBounds } = this;
    const top = sectionBounds.height > rootBounds.height ? 0 : rootBounds.height - sectionBounds.height;
    const right = sectionBounds.width > rootBounds.width ? -(sectionBounds.width - rootBounds.width) : 0;
    const bottom = sectionBounds.height > rootBounds.height ? -(sectionBounds.height - rootBounds.height) : 0;
    const left = sectionBounds.width > rootBounds.width ? 0 : rootBounds.width - sectionBounds.width;
    return this.getProgress(top, right, bottom, left);
  }
  /** Calculates the global scroll progress of the section relative to the root element. */
  get progress() {
    const { sectionBounds, rootBounds } = this;
    const top = rootBounds.height;
    const right = -sectionBounds.width;
    const bottom = -sectionBounds.height;
    const left = rootBounds.width;
    return this.getProgress(top, right, bottom, left);
  }
};
__decorate13([
  noopIfDestroyed
], ScrollProgress.prototype, "update", null);

// node_modules/vevet/lib/esm/components/Snap/logic/index.js
var SnapLogic = class {
  constructor(_snap) {
    this._snap = _snap;
    this._destructors = [];
    _snap.on("destroy", () => this._destroy(), { protected: true });
  }
  /** Snap component */
  get props() {
    return this._snap.props;
  }
  get container() {
    return this._snap.container;
  }
  /** Snap component */
  get callbacks() {
    return this._snap.callbacks;
  }
  get isSwiping() {
    return this._snap.isSwiping;
  }
  get isWheeling() {
    return this._snap.isWheeling;
  }
  get hasInertia() {
    return this._snap.hasInertia;
  }
  get isInterpolating() {
    return this._snap.isInterpolating;
  }
  get isTransitioning() {
    return this._snap.isTransitioning;
  }
  get eventsEmitter() {
    return this._snap.eventsEmitter;
  }
  get snapAxis() {
    return this._snap.axis;
  }
  get track() {
    return this._snap.$track;
  }
  get isSlideScrolling() {
    return this._snap.isSlideScrolling;
  }
  get containerSize() {
    return this._snap.containerSize;
  }
  get activeSlide() {
    return this._snap.activeSlide;
  }
  get activeIndex() {
    return this._snap.activeIndex;
  }
  get slides() {
    return this._snap.slides;
  }
  get isDestroyed() {
    return this._snap.isDestroyed;
  }
  get scrollableSlides() {
    return this._snap.scrollableSlides;
  }
  /** Snap component */
  addDestructor(callback) {
    this._destructors.push(callback);
  }
  /** Destroy wheel listeners */
  _destroy() {
    this._destructors.forEach((destructor) => destructor());
  }
  next() {
    return this._snap.next();
  }
  prev() {
    return this._snap.prev();
  }
  stick() {
    return this._snap.stick();
  }
  getNearestMagnet(coord) {
    return this._snap.getNearestMagnet(coord);
  }
};

// node_modules/vevet/lib/esm/components/Snap/props.js
var _a2;
var STATIC_PROPS14 = {
  __staticProp: true,
  container: null,
  eventsEmitter: null,
  activeIndex: 0
};
var MUTABLE_PROPS14 = {
  __mutableProp: true,
  slides: false,
  containerSize: "auto",
  slidesToScroll: 1,
  direction: "horizontal",
  centered: false,
  origin: "start",
  loop: false,
  gap: 0,
  lerp: ((_a2 = initVevet()) === null || _a2 === void 0 ? void 0 : _a2.mobile) ? 1 : 0.3,
  freemode: false,
  rewind: false,
  stickOnResize: true,
  friction: 0,
  edgeFriction: 0.7,
  duration: 600,
  easing: EaseOutCubic,
  swipe: true,
  grabCursor: false,
  swipeSpeed: 1,
  swipeAxis: "auto",
  followSwipe: true,
  shortSwipes: true,
  shortSwipesDuration: 300,
  shortSwipesThreshold: 30,
  swipeFriction: false,
  swipeThreshold: 5,
  swipeMinTime: 0,
  swipeInertiaDuration: null,
  swipeInertiaRatio: 1,
  wheel: false,
  wheelSpeed: 1,
  wheelAxis: "auto",
  followWheel: true,
  wheelThrottle: "auto",
  stickOnWheelEnd: true,
  stickOnWheelEndThreshold: 30,
  slideSize: "auto",
  interval: null,
  intervalDirection: "next"
};
var LERP_APPROXIMATION2 = 1e-6;
var WHEEL_DEBOUNCE = 200;
var IDLE_DEBOUNCE = 200;

// node_modules/vevet/lib/esm/components/Snap/logic/Idle/index.js
var SnapIdle = class extends SnapLogic {
  constructor(ctx) {
    super(ctx);
    this.callbacks.on("update", () => this._handleUpdate(), {
      protected: true
    });
    this.addDestructor(() => this._clear());
  }
  /** Check if idle */
  get isIdle() {
    return !this.isSwiping && !this.hasInertia && !this.isInterpolating && !this.isTransitioning && !this.isWheeling;
  }
  /** Handle Snap update */
  _handleUpdate() {
    this._clear();
    const debounce = Math.max(IDLE_DEBOUNCE, WHEEL_DEBOUNCE) + 10;
    this._timeout = setTimeout(() => this._handleTimeout(), debounce);
  }
  /** Handle timeout action */
  _handleTimeout() {
    if (this.isIdle) {
      this.callbacks.emit("idle", void 0);
    }
  }
  /** Clear timeout reference */
  _clear() {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = void 0;
    }
  }
};

// node_modules/vevet/lib/esm/components/Snap/logic/Interval/index.js
var SnapInterval = class extends SnapLogic {
  constructor(ctx, _onPrev, _onNext) {
    super(ctx);
    this._onPrev = _onPrev;
    this._onNext = _onNext;
    this.callbacks.on("update", () => this._handleUpdate(), {
      protected: true
    });
    this.addDestructor(() => this._clearInterval());
  }
  get allowInterval() {
    return !this.isSwiping && !this.hasInertia && !this.isTransitioning && !this.isInterpolating && isFiniteNumber(this.props.interval);
  }
  /** Handle Snap update */
  _handleUpdate() {
    if (!this.allowInterval) {
      this._clearInterval();
      return;
    }
    if (!this._interval) {
      this._interval = setInterval(() => this._handleInterval(), this.props.interval);
    }
  }
  /** Handle interval action */
  _handleInterval() {
    if (this.props.intervalDirection === "prev") {
      this._onPrev();
    } else {
      this._onNext();
    }
  }
  /** Clear interval */
  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = void 0;
    }
  }
};

// node_modules/vevet/lib/esm/components/Snap/logic/Keyboard/index.js
var SnapKeyboard = class extends SnapLogic {
  constructor(ctx) {
    super(ctx);
    this.addDestructor(addEventListener(ctx.container, "scroll", () => this._handleScroll()));
  }
  /** Handle scroll lock */
  _handleScroll() {
    this.container.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
};

// node_modules/vevet/lib/esm/components/Snap/logic/Slide/Parallax/utils.js
var PARALLAX_ATTR_PREFIX = "data-snap-parallax-";
function getAttrName(suffix) {
  if (suffix.startsWith(PARALLAX_ATTR_PREFIX)) {
    return suffix;
  }
  return `${PARALLAX_ATTR_PREFIX}${suffix}`;
}
function isParallaxAttr(name) {
  return name.startsWith(PARALLAX_ATTR_PREFIX);
}
function getAttr(element, suffix) {
  var _a3;
  return ((_a3 = element.getAttribute(getAttrName(suffix))) !== null && _a3 !== void 0 ? _a3 : "").trim();
}
function getFloatAttr(element, suffix, defaultValue) {
  const attr = getAttr(element, suffix);
  const float = parseFloat(attr);
  return Number.isNaN(float) ? defaultValue : float;
}

// node_modules/vevet/lib/esm/components/Snap/logic/Slide/Parallax/constants.js
var PARALLAX_GROUPS = [
  {
    prop: "transform",
    types: [
      {
        attr: getAttrName("x"),
        prop: "translateX",
        unit: "px"
      },
      {
        attr: getAttrName("y"),
        prop: "translateY",
        unit: "px"
      },
      {
        attr: getAttrName("z"),
        prop: "translateZ",
        unit: "px"
      },
      {
        attr: getAttrName("scale"),
        prop: "scale",
        unit: "",
        modifier: (value) => value + 1
      },
      {
        attr: getAttrName("scale-x"),
        prop: "scaleX",
        unit: "",
        modifier: (value) => value + 1
      },
      {
        attr: getAttrName("scale-y"),
        prop: "scaleY",
        unit: "",
        modifier: (value) => value + 1
      },
      {
        attr: getAttrName("skew"),
        prop: "skew",
        unit: "deg"
      },
      {
        attr: getAttrName("skew-x"),
        prop: "skewX",
        unit: "deg"
      },
      {
        attr: getAttrName("skew-y"),
        prop: "skewY",
        unit: "deg"
      },
      {
        attr: getAttrName("rotate"),
        prop: "rotate",
        unit: "deg"
      },
      {
        attr: getAttrName("rotate-x"),
        prop: "rotateX",
        unit: "deg"
      },
      {
        attr: getAttrName("rotate-y"),
        prop: "rotateY",
        unit: "deg"
      },
      {
        attr: getAttrName("rotate-z"),
        prop: "rotateZ",
        unit: "deg"
      }
    ]
  },
  {
    prop: "opacity",
    types: [
      {
        attr: getAttrName("opacity"),
        prop: "opacity",
        unit: "",
        isAbs: true,
        modifier: (value) => clamp(value + 1, 0, 1)
      }
    ]
  }
];
var PARALLAX_TYPES = PARALLAX_GROUPS.map(({ types }) => types).flat();
var PARALLAX_ATTRIBUTES = PARALLAX_TYPES.map(({ attr }) => attr);

// node_modules/vevet/lib/esm/components/Snap/logic/Slide/Parallax/index.js
var SnapSlideParallax = class {
  constructor(_slide, _element, _getImpulse) {
    this._slide = _slide;
    this._element = _element;
    this._getImpulse = _getImpulse;
    this._items = [];
    this._debounceInit = null;
    this._initDebounce();
    this._observer = new MutationObserver((mutations) => {
      mutations.forEach(({ attributeName }) => {
        if (attributeName && isParallaxAttr(attributeName)) {
          this._initDebounce();
        }
      });
    });
    this._observer.observe(this._element, { attributes: true });
  }
  /** Initialize parallax with debounce */
  _initDebounce() {
    if (this._debounceInit) {
      clearTimeout(this._debounceInit);
    }
    this._debounceInit = setTimeout(() => this._init(), 16);
  }
  /** Initialize parallax */
  _init() {
    this._fetchItems();
    this.render();
  }
  /** Fetch parallax items */
  _fetchItems() {
    const element = this._element;
    const defaultScope = this._getScope(this._element, `scope`, [-1, 1]);
    const types = PARALLAX_TYPES.filter(({ attr }) => element.hasAttribute(attr));
    this._items = types.map(({ attr, prop, unit: defaultUnit, isAbs: isAbsProp, modifier }) => {
      var _a3;
      const group = PARALLAX_GROUPS.find(({ types: types2 }) => types2.find((type) => type.attr === attr));
      const scopeAttr = `${attr}-scope`;
      const scope = element.hasAttribute(scopeAttr) ? this._getScope(element, scopeAttr, [-1, 1]) : defaultScope;
      const attrValue = getAttr(element, attr);
      const unit = attrValue.replace(/[-\d.]+/g, "") || defaultUnit;
      const target = getFloatAttr(element, attr, 0);
      const offset = getFloatAttr(element, `${attr}-offset`, 0);
      const min = getFloatAttr(element, `${attr}-min`, -Infinity);
      const max = getFloatAttr(element, `${attr}-max`, Infinity);
      const impulseAttr = `${attr}-impulse`;
      const impulse = element.hasAttribute(impulseAttr) ? getFloatAttr(element, impulseAttr, 1) : 0;
      const influenceAttr = `${attr}-influence`;
      const influence = element.hasAttribute(influenceAttr) ? getFloatAttr(element, influenceAttr, 1) : 0;
      const directionalAttr = `${attr}-directional`;
      const isDirectional = element.hasAttribute(directionalAttr);
      const absAttr = `${attr}-abs`;
      const isAbs = isAbsProp || element.hasAttribute(absAttr);
      return {
        attr,
        prop,
        unit,
        group: (_a3 = group === null || group === void 0 ? void 0 : group.prop) !== null && _a3 !== void 0 ? _a3 : "",
        modifier,
        scope,
        progress: 0,
        target,
        value: 0,
        offset,
        min,
        max,
        impulse: impulse || influence,
        isDirectional,
        isAbs
      };
    });
  }
  /** Get parallax scope */
  _getScope(element, suffix, defaultValue) {
    const attrValue = getAttr(element, suffix);
    const stringValue = attrValue.toLowerCase();
    if (stringValue === "none") {
      return [-Infinity, Infinity];
    }
    if (stringValue === "const") {
      return [1, 1];
    }
    const cleanValue = attrValue.replace(/[\s\\[\]]+/g, "");
    const minMax = cleanValue.split(",");
    const minRaw = parseFloat(minMax[0]);
    const maxRaw = parseFloat(minMax[1]);
    const min = Number.isNaN(minRaw) ? defaultValue[0] : minRaw;
    const max = Number.isNaN(maxRaw) ? defaultValue[1] : maxRaw;
    return [min, max];
  }
  /** Render parallax */
  render() {
    const { _element: element, _items: items, _slide: slide } = this;
    const impulse = this._getImpulse();
    const globalProgress = slide.progress;
    items.forEach((item) => {
      let progress = clamp(globalProgress, ...item.scope);
      if (Math.abs(item.impulse) > 0) {
        progress *= Math.abs(impulse) * item.impulse;
      }
      if (item.isDirectional) {
        progress = Math.abs(progress) * Math.sign(impulse);
      }
      if (item.isAbs) {
        progress = Math.abs(progress);
      }
      item.progress = progress;
      item.value = item.offset + progress * item.target;
      if (item.modifier) {
        item.value = item.modifier(item.value);
      }
      item.value = clamp(item.value, item.min, item.max);
    });
    PARALLAX_GROUPS.forEach(({ prop: groupProp }) => {
      const groupItems = items.filter((item) => item.group === groupProp);
      const styles2 = groupItems.map(({ value, prop, unit }) => {
        if (groupProp === "opacity") {
          return `${value}`;
        }
        return `${prop}(${value}${unit})`;
      });
      const styleString = styles2.join(" ");
      element.style[groupProp] = styleString;
    });
  }
  /** Destroy parallax */
  destroy() {
    this._observer.disconnect();
    if (this._debounceInit) {
      clearTimeout(this._debounceInit);
    }
  }
};

// node_modules/vevet/lib/esm/components/Snap/logic/Slide/index.js
var SnapSlide = class {
  constructor(_element, initProps = {}) {
    this._element = _element;
    this._coord = 0;
    this._isAppended = false;
    this._isVisible = false;
    this._staticCoord = 0;
    this._progress = 0;
    this._index = 0;
    this._parallax = [];
    const defaultProps = {
      virtual: false,
      size: null
    };
    this._props = Object.assign(Object.assign({}, defaultProps), initProps);
    if (this._props.virtual && (!initProps.size || initProps.size === "auto")) {
      throw new Error("Virtual slide must have a defined size");
    }
  }
  /** Snap component */
  get ctx() {
    return this._ctx;
  }
  /** Slide properties */
  get props() {
    return this._props;
  }
  /** Size property */
  get sizeProp() {
    var _a3, _b2, _c;
    return (_c = (_a3 = this.props.size) !== null && _a3 !== void 0 ? _a3 : (_b2 = this.ctx) === null || _b2 === void 0 ? void 0 : _b2.props.slideSize) !== null && _c !== void 0 ? _c : "auto";
  }
  /** Slide element */
  get element() {
    return this._element;
  }
  /** Slide index */
  get index() {
    return this._index;
  }
  /** Current coordinate */
  get coord() {
    return this._coord;
  }
  /** Static coordinate without alignment (as if the slide was never moved) */
  get staticCoord() {
    return this._staticCoord;
  }
  /** Current progress of slide movement: from -1 to 1 */
  get progress() {
    return this._progress;
  }
  /** Slide size in pixels */
  get size() {
    var _a3;
    const { ctx, sizeProp } = this;
    if (!ctx) {
      return 0;
    }
    if (sizeProp === "stretch") {
      return ctx.containerSize;
    }
    if (sizeProp === "auto") {
      return (_a3 = this._domSize) !== null && _a3 !== void 0 ? _a3 : ctx.containerSize;
    }
    return toPixels(sizeProp);
  }
  /** Check if the slide is visible relative to the container */
  get isVisible() {
    return this._isVisible;
  }
  /** Resize the slide & trigger snap reflow */
  resize(isManual = true) {
    const { element, ctx } = this;
    if (!ctx) {
      return;
    }
    if (element) {
      this._domSize = ctx.axis === "x" ? element.offsetWidth : element.offsetHeight;
    }
    ctx.resize(isManual);
  }
  /**
   * Attach the slide to the Snap class.
   * For internal use only
   */
  $_attach(ctx, index2) {
    this.$_detach();
    this._ctx = ctx;
    this._index = index2;
    this._parallax = this._getParallaxNodes().map((node) => new SnapSlideParallax(this, node, () => ctx.impulse));
    if (this.element && this.sizeProp === "auto") {
      this._resizer = onResize({
        element: this.element,
        viewportTarget: "width",
        callback: () => this.resize(false),
        name: "Snap Slide"
      });
    }
  }
  /**
   * Detach the slide from the Snap class.
   * For internal use only
   */
  $_detach() {
    var _a3, _b2;
    this._ctx = void 0;
    (_a3 = this._resizer) === null || _a3 === void 0 ? void 0 : _a3.remove();
    (_b2 = this._parallax) === null || _b2 === void 0 ? void 0 : _b2.forEach((parallax) => parallax.destroy());
  }
  /**
   * Static coordinate (as if the slide was never moved).
   * For internal use only
   */
  $_setStaticCoord(value) {
    this._staticCoord = value;
  }
  /**
   * Render the slide.
   * For internal use only
   */
  $_render() {
    var _a3;
    this._toggleAppend();
    (_a3 = this._parallax) === null || _a3 === void 0 ? void 0 : _a3.forEach((parallax) => parallax.render());
  }
  /** Get list of parallax nodes */
  _getParallaxNodes() {
    const { element } = this;
    if (!element) {
      return [];
    }
    const selector = PARALLAX_ATTRIBUTES.map((attr) => `[${attr}]`).join(",");
    const nodeList = element.querySelectorAll(selector);
    return Array.from(nodeList);
  }
  /** Toggle slide append/remove */
  _toggleAppend() {
    if (!this.props.virtual || !this.element || !this.ctx) {
      return;
    }
    const { element, ctx } = this;
    if (this.isVisible && !this._isAppended) {
      this._isAppended = true;
      ctx.container.appendChild(element);
    } else if (!this.isVisible && this._isAppended) {
      this._isAppended = false;
      ctx.container.removeChild(element);
    }
  }
  /** Get magnets with static coordinates but dynamic alignment */
  get magnets() {
    if (!this.ctx) {
      return [];
    }
    const { ctx, staticCoord, size, index: index2 } = this;
    const { containerSize, origin } = ctx;
    let points = [];
    if (index2 === 0 && ctx.props.loop) {
      points.push(ctx.max);
    }
    if (origin === "center") {
      const point = staticCoord + size / 2 - ctx.firstSlideSize / 2;
      if (size > containerSize) {
        points.push(point);
        points.push(point + (containerSize - size) / 2);
        points.push(point - (containerSize - size) / 2);
      } else {
        points.push(point);
      }
    } else if (origin === "end") {
      const point = staticCoord + size - ctx.firstSlideSize;
      points.push(point);
      if (size > containerSize) {
        points.push(point + (containerSize - size));
      }
    } else {
      points.push(staticCoord);
      if (size > containerSize) {
        points.push(staticCoord + (size - containerSize));
      }
      if (!ctx.canLoop) {
        points = points.map((point) => clamp(point, 0, ctx.max));
      }
    }
    return points;
  }
  /**
   * Update slide progress.
   * For internal use only
   */
  $_updateProgress() {
    const { ctx } = this;
    if (!ctx) {
      return;
    }
    const { coord, size } = this;
    const { containerSize, origin } = ctx;
    if (origin === "center") {
      const center = containerSize / 2 - size / 2;
      this._progress = scoped(coord, center, center - size);
      return;
    }
    if (origin === "end") {
      const end = containerSize - size;
      this._progress = scoped(coord, end, end - size);
      return;
    }
    this._progress = scoped(coord, 0, -size);
  }
  /**
   * Update slide values.
   * For internal use only
   */
  $_updateCoords(offset) {
    const { ctx } = this;
    if (!ctx) {
      return;
    }
    const { staticCoord, size } = this;
    const { origin } = ctx;
    if (!ctx.canLoop) {
      this._setCoord(staticCoord + offset - ctx.current);
      return;
    }
    if (origin === "center") {
      this._setCoord(loop(staticCoord + offset - ctx.current, -ctx.max / 2 + offset, ctx.max / 2 + offset));
      return;
    }
    if (origin === "end") {
      this._setCoord(loop(staticCoord + offset - ctx.current, -size, ctx.max - size));
      return;
    }
    this._setCoord(loop(staticCoord - ctx.current, -size, ctx.max - size));
  }
  /** Set slide coordinate */
  _setCoord(value) {
    var _a3, _b2;
    this._coord = value;
    this._isVisible = this.size > 0 && this._coord > -this.size && this._coord < ((_b2 = (_a3 = this.ctx) === null || _a3 === void 0 ? void 0 : _a3.containerSize) !== null && _b2 !== void 0 ? _b2 : 0);
  }
};

// node_modules/vevet/lib/esm/components/Snap/logic/Swipe/index.js
var SnapSwipe = class extends SnapLogic {
  constructor(ctx) {
    super(ctx);
    this._startIndex = ctx.activeIndex;
    this._startTime = 0;
    const swipe = new Swipe(Object.assign({ container: this.eventsEmitter, inertia: false, inertiaThreshold: 3, recalculateBoundsOnInertia: false, overflow: () => ctx.containerSize * (1 - ctx.props.edgeFriction), canBounce: () => !this.isTransitioning, bounds: this._getBounds.bind(this), inertiaDistanceModifier: this._modifyInertiaDistance.bind(this) }, this.swipeProps));
    this.swipe = swipe;
    this.addDestructor(() => swipe.destroy());
    swipe.on("start", (data) => this._handleStart(data));
    swipe.on("move", (data) => this._handleMove(data));
    swipe.on("end", (data) => this._handleEnd(data));
    swipe.on("inertiaStart", () => this._handleInertiaStart());
    swipe.on("inertiaEnd", () => this._handleInertiaEnd());
    swipe.on("inertiaFail", () => this._handleInertiaFail());
    swipe.on("inertiaCancel", () => this._handleInertiaCancel());
    this.callbacks.on("props", () => swipe.updateProps(this.swipeProps), {
      protected: true
    });
  }
  /** Get swipe properties */
  get swipeProps() {
    const { props } = this;
    return {
      enabled: props.swipe,
      grabCursor: props.grabCursor,
      minTime: props.swipeMinTime,
      threshold: props.swipeThreshold,
      axis: this.axis === "angle" ? null : this.axis,
      relative: this.axis === "angle",
      ratio: props.swipeSpeed,
      inertiaRatio: props.swipeInertiaRatio
    };
  }
  /** Axis name depending on swipe direction */
  get axis() {
    const { props, snapAxis } = this;
    return props.swipeAxis === "auto" ? snapAxis : props.swipeAxis;
  }
  /** Detect if swipe is short */
  get isShort() {
    const { props } = this;
    if (!props.shortSwipes) {
      return false;
    }
    const diff = +/* @__PURE__ */ new Date() - this._startTime;
    return diff <= props.shortSwipesDuration;
  }
  /** Swipe difference between start and current coordinates */
  get diff() {
    const initialDiff = this.swipe.diff[this.axis];
    return initialDiff * Math.sign(this.props.swipeSpeed);
  }
  /** Check if sticky freemode is enabled */
  get isStickyFreemode() {
    return this.props.freemode === "sticky" && this.axis !== "angle";
  }
  /** Check if swiping in action */
  get isSwiping() {
    return this.swipe.isSwiping;
  }
  /** Check if swipe has inertia */
  get hasInertia() {
    return this.swipe.hasInertia;
  }
  /** Checks if resistance is allowed */
  get allowFriction() {
    return !this.isShort && this.props.swipeFriction;
  }
  /** Get swipe bounds */
  _getBounds() {
    const { freemode, loop: loop2 } = this.props;
    const { isSlideScrolling, track } = this;
    if (!freemode && isSlideScrolling) {
      const { activeSlide, containerSize, track: track2 } = this;
      const { staticCoord, size } = activeSlide;
      const loopOffset = Math.abs(track2.max - track2.min) * track2.loopCount;
      return {
        [this.axis]: [
          -staticCoord - track2.offset - loopOffset,
          -staticCoord - (size - containerSize) - loopOffset - track2.offset
        ]
      };
    }
    if (loop2) {
      return null;
    }
    return { [this.axis]: [-track.min, -track.max] };
  }
  /** Modify inertia distance */
  _modifyInertiaDistance(dist) {
    const { track } = this;
    const loopedTarget = track.loopCoord(track.target);
    const virtualCoord = loopedTarget - dist[this.axis];
    const magnet = this.getNearestMagnet(virtualCoord);
    if (!this.isStickyFreemode) {
      return null;
    }
    if (!track.canLoop && (track.target < track.min || track.target > track.max)) {
      return null;
    }
    if (!magnet) {
      return null;
    }
    const diff = loopedTarget - virtualCoord - magnet.diff;
    return Object.assign(Object.assign({}, dist), { [this.axis]: diff, angle: 0 });
  }
  /** Handles swipe `start` event */
  _handleStart(coords) {
    const { eventsEmitter, props, activeIndex, callbacks } = this;
    this._startIndex = activeIndex;
    this._startTime = +/* @__PURE__ */ new Date();
    eventsEmitter.style.pointerEvents = "none";
    if (props.followSwipe) {
      this.track.cancelTransition();
    }
    this.swipe.setMovement({ x: -this.track.target, y: -this.track.target });
    callbacks.emit("swipeStart", coords);
  }
  /** Handles swipe `move` event */
  _handleMove(coords) {
    const { track, axis, props, callbacks } = this;
    if (!props.followSwipe) {
      return;
    }
    let swipeDelta = coords.prevMovement[axis] - coords.movement[axis];
    if (axis === "angle") {
      const trackLength = track.max - track.min;
      swipeDelta = trackLength * (swipeDelta / 360);
      track.updateTarget(track.target + swipeDelta);
    } else {
      track.updateTarget(track.target + swipeDelta);
    }
    callbacks.emit("swipe", coords);
  }
  /** Handles swipe `end` event */
  _handleEnd(coords) {
    this._end();
    this.eventsEmitter.style.pointerEvents = "";
    this.callbacks.emit("swipeEnd", coords);
  }
  /** Handles swipe inertia start */
  _handleInertiaStart() {
    this.callbacks.emit("swipeInertiaStart", void 0);
  }
  /** Handles swipe inertia end */
  _handleInertiaEnd() {
    this.callbacks.emit("swipeInertiaEnd", void 0);
  }
  /** Handles swipe inertia fail */
  _handleInertiaFail() {
    this.callbacks.emit("swipeInertiaFail", void 0);
    if (this.isStickyFreemode) {
      this.stick();
    }
  }
  /** Handles swipe inertia cancel */
  _handleInertiaCancel() {
    this.callbacks.emit("swipeInertiaCancel", void 0);
  }
  /** End swipe action */
  _end() {
    const { swipe, props } = this;
    swipe.updateProps({ inertia: false });
    if (!props.followSwipe) {
      this._endNoFollow();
      return;
    }
    if (props.freemode) {
      if (this.isStickyFreemode && this.isShort && !this.isSlideScrolling) {
        this._endShort();
        return;
      }
      swipe.updateProps({ inertia: true });
      return;
    }
    if (this.isSlideScrolling) {
      swipe.updateProps({ inertia: true });
      return;
    }
    swipe.updateProps({ inertia: false });
    if (this.isShort) {
      this._endShort();
      return;
    }
    this.stick();
  }
  /** End action when `followSwipe` is disabled */
  _endNoFollow() {
    const { diff } = this;
    if (Math.abs(diff) < 20) {
      this.stick();
      return;
    }
    if (diff < 0) {
      this.next();
    } else {
      this.prev();
    }
  }
  /** End short swipe */
  _endShort() {
    const { diff, activeIndex, props, activeSlide } = this;
    if (Math.abs(diff) < props.shortSwipesThreshold) {
      this.stick();
      return;
    }
    const normalizedDiff = Math.sign(diff);
    if (this._startIndex !== activeIndex) {
      if (normalizedDiff < 0 && activeSlide.progress > 0) {
        this.next();
      } else if (normalizedDiff > 0 && activeSlide.progress < 0) {
        this.prev();
      } else {
        this.stick();
      }
      return;
    }
    if (normalizedDiff < 0) {
      this.next();
    } else {
      this.prev();
    }
  }
};

// node_modules/vevet/lib/esm/components/Snap/logic/Wheel/index.js
var deltasCount = 6;
var SnapWheel = class extends SnapLogic {
  constructor(ctx) {
    super(ctx);
    this._hasStarted = false;
    this._deltas = [];
    this._lastWheelTime = 0;
    const listener = addEventListener(this.eventsEmitter, "wheel", (event) => this._handleWheel(event));
    this.addDestructor(() => {
      listener();
      if (this._debounceEnd) {
        clearTimeout(this._debounceEnd);
      }
    });
  }
  get isWheeling() {
    return this._hasStarted;
  }
  /** Get absolute deltas */
  get absDeltas() {
    return this._deltas.map((d) => Math.abs(d));
  }
  /**
   * Handles wheel events
   */
  _handleWheel(event) {
    const { props, snapAxis } = this;
    if (!props.wheel) {
      return;
    }
    event.preventDefault();
    const wheelData = normalizeWheel(event);
    const wheelAxis = props.wheelAxis === "auto" ? snapAxis : props.wheelAxis;
    const delta = wheelAxis === "x" ? wheelData.pixelX : wheelData.pixelY;
    this._handleStart(delta);
    this._handleMove(delta, event);
    if (this._debounceEnd) {
      clearTimeout(this._debounceEnd);
    }
    this._debounceEnd = setTimeout(() => this._handleEnd(), 200);
  }
  /** Handle wheel start */
  _handleStart(delta) {
    if (this._hasStarted || Math.abs(delta) < 2) {
      return;
    }
    this._hasStarted = true;
    this.callbacks.emit("wheelStart", void 0);
  }
  /** Handle wheel move */
  _handleMove(delta, event) {
    if (!this._hasStarted) {
      return;
    }
    this._addDelta(delta);
    if (this.props.followWheel) {
      this._handleFollow(delta);
    } else {
      this._handleNoFollow(delta);
    }
    this.callbacks.emit("wheel", event);
  }
  /** Handle `followWheel=true` */
  _handleFollow(delta) {
    const { track, props } = this;
    track.cancelTransition();
    track.updateTarget(track.target + delta * props.wheelSpeed);
    track.clampTarget();
  }
  /** Handle `followWheel=false` */
  _handleNoFollow(deltaProp) {
    const { track, isTouchPad, isGainingDelta, props, activeSlide } = this;
    const delta = deltaProp * props.wheelSpeed;
    if (this._detectNoFollowThrottle()) {
      return;
    }
    let shouldFollow = false;
    let isThrottled = true;
    if (!shouldFollow) {
      if (this.isSlideScrolling) {
        if (activeSlide.coord === 0) {
          if (delta > 0) {
            shouldFollow = true;
          }
        } else if (activeSlide.coord === this.containerSize - activeSlide.size) {
          if (delta < 0) {
            shouldFollow = true;
          }
        } else {
          shouldFollow = true;
          isThrottled = false;
        }
      }
    }
    if (isThrottled) {
      if (!isTouchPad || isTouchPad && (isGainingDelta || this.absDeltas.length === 1)) {
        const direction = Math.sign(delta);
        if (shouldFollow) {
          track.cancelTransition();
          track.updateTarget(track.target + direction);
          track.clampTarget();
          if (!isTouchPad) {
            track.current = track.target;
          }
        } else if (direction === 1) {
          if (!props.loop && this.activeIndex === this.slides.length - 1) {
            if (!props.rewind) {
              return;
            }
          }
          this._lastWheelTime = +/* @__PURE__ */ new Date();
          this.next();
        } else {
          if (!props.loop && this.activeIndex === 0) {
            if (!props.rewind) {
              return;
            }
          }
          this._lastWheelTime = +/* @__PURE__ */ new Date();
          this.prev();
        }
      }
      return;
    }
    if (shouldFollow) {
      track.cancelTransition();
      const deltaWithSpeed = delta;
      const start = Math.min(...activeSlide.magnets);
      const end = Math.max(...activeSlide.magnets);
      const loopedTarget = track.loopCoord(track.target);
      const clampedLoopedTarget = clamp(loopedTarget + deltaWithSpeed, start, end);
      track.target = track.target + clampedLoopedTarget - loopedTarget;
      track.clampTarget();
    }
  }
  /** Detect if wheel should be throttled */
  _detectNoFollowThrottle() {
    const { isTouchPad, scrollableSlides, isTransitioning } = this;
    const { wheelThrottle } = this.props;
    const timeDiff = +/* @__PURE__ */ new Date() - this._lastWheelTime;
    if (isNumber(wheelThrottle)) {
      return timeDiff < wheelThrottle;
    }
    if (isTouchPad) {
      return isTransitioning;
    }
    const visibleScrollableSlides = scrollableSlides.filter((slide) => slide.isVisible);
    if (visibleScrollableSlides.length && isTransitioning) {
      return true;
    }
    if (timeDiff < 500) {
      return true;
    }
    return false;
  }
  /** Handle wheel end */
  _handleEnd() {
    if (!this._hasStarted) {
      return;
    }
    const { props, activeSlide, isSlideScrolling, isTransitioning } = this;
    const lastThreeDeltas = this._deltas.slice(-3).reduce((a, b) => a + b, 0);
    this._deltas = [];
    this._hasStarted = false;
    if (!props.freemode || props.freemode === "sticky") {
      if (props.followWheel && props.stickOnWheelEnd) {
        const slideThreshold = onlyFinite(Math.abs(props.stickOnWheelEndThreshold) / activeSlide.size);
        if (activeSlide.progress > slideThreshold && !isSlideScrolling && lastThreeDeltas > 0) {
          this.next();
        } else if (activeSlide.progress < -slideThreshold && !isSlideScrolling && lastThreeDeltas < 0) {
          this.prev();
        } else {
          this.stick();
        }
      } else if (!props.followWheel && !isTransitioning) {
        this.stick();
      }
    }
    this.callbacks.emit("wheelEnd", void 0);
  }
  /** Save delta */
  _addDelta(delta) {
    if (this._deltas.length >= deltasCount) {
      this._deltas.shift();
    }
    this._deltas.push(delta);
  }
  /** Detect if touchpad */
  get isTouchPad() {
    return !this.isStableDelta || this.isSmallDelta;
  }
  /** Detects if deltas are stable */
  get isStableDelta() {
    const deltas = this.absDeltas;
    const precision = 0.8;
    const diffs = deltas.map((d, i) => {
      const prev = deltas[i - 1];
      if (!deltas[i - 1]) {
        return 0;
      }
      return d - prev;
    });
    const zeroDiffs = diffs.filter((d) => d === 0);
    return zeroDiffs.length > diffs.length * precision;
  }
  /** Detects if the latest delta is small */
  get isSmallDelta() {
    const deltas = this.absDeltas;
    if (deltas.length === 0) {
      return true;
    }
    const last = deltas[deltas.length - 1];
    return last < 50;
  }
  /** Detect if delta is gaining its value */
  get isGainingDelta() {
    const vevet2 = initVevet();
    const deltas = this.absDeltas;
    const precision = vevet2.osName.includes("window") ? 1.5 : 1.2;
    if (deltas.length < deltasCount) {
      return false;
    }
    const lastDeltas = deltas.slice(-deltasCount);
    const half1 = lastDeltas.slice(0, Math.floor(lastDeltas.length / 2));
    const half2 = lastDeltas.slice(Math.floor(lastDeltas.length / 2));
    const avg1 = this._getAverage(half1);
    const avg2 = this._getAverage(half2);
    const isGaining = avg2 > avg1 * precision;
    return isGaining;
  }
  /** Get average value in an array */
  _getAverage(array) {
    return array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;
  }
};

// node_modules/vevet/lib/esm/components/Snap/Track/index.js
var SnapTrack = class {
  constructor(props, _slides, ctx) {
    this.props = props;
    this._slides = _slides;
    this.ctx = ctx;
    this._impulse = { current: 0, target: 0 };
    this._current = 0;
    this._target = 0;
    this._isDestroyed = false;
    this._raf = new Raf();
    this._raf.on("frame", () => this._handleRaf());
    this._raf.on("play", () => {
      var _a3;
      return (_a3 = ctx.onRafPlay) === null || _a3 === void 0 ? void 0 : _a3.call(ctx);
    });
    this._raf.on("pause", () => {
      var _a3;
      return (_a3 = ctx.onRafPause) === null || _a3 === void 0 ? void 0 : _a3.call(ctx);
    });
  }
  get slides() {
    return this._slides();
  }
  /** Gets the target slide index */
  get targetIndex() {
    return this._targetIndex;
  }
  /** Gets the interpolation impulse */
  get impulse() {
    return this._impulse.current;
  }
  /** Gets the current track value. */
  get current() {
    return this._current;
  }
  /** Sets the current track value */
  set current(value) {
    this._current = value;
  }
  /** Gets the target track value. */
  get target() {
    return this._target;
  }
  /** Sets the target track value */
  set target(value) {
    const containerSize = this.ctx.containerSize();
    const diff = value - this._target;
    this._target = value;
    this._impulse.target += containerSize ? onlyFinite(diff / containerSize) : 0;
    this._impulse.target = clamp(this._impulse.target, -1, 1);
  }
  /** Detect if can loop */
  get canLoop() {
    const { props, slides } = this;
    return props.loop && slides.length > 1;
  }
  /** Get looped current value */
  get loopedCurrent() {
    return this.loopCoord(this.current);
  }
  /** Get track offset */
  get offset() {
    const { ctx } = this;
    const origin = ctx.origin();
    const containerSize = ctx.containerSize();
    const firstSlideSize = ctx.firstSlideSize();
    if (origin === "center") {
      return containerSize / 2 - firstSlideSize / 2;
    } else if (origin === "end") {
      return containerSize - firstSlideSize;
    }
    return 0;
  }
  /** Get loop count */
  get loopCount() {
    if (!this.canLoop) {
      return 0;
    }
    return Math.floor(onlyFinite(this.current / this.max));
  }
  /** If transition in progress */
  get isTransitioning() {
    return !!this._tm;
  }
  /** Get minimum track value */
  get min() {
    const containerSize = this.ctx.containerSize();
    const origin = this.ctx.origin();
    const firstSlide = this.slides[0];
    if (this.canLoop) {
      return 0;
    }
    if (origin === "center") {
      if (firstSlide.size > containerSize) {
        return containerSize / 2 - firstSlide.size / 2;
      }
    }
    if (origin === "end") {
      if (firstSlide.size > containerSize) {
        return containerSize - firstSlide.size;
      }
    }
    return 0;
  }
  /** Get maximum track value */
  get max() {
    const containerSize = this.ctx.containerSize();
    const origin = this.ctx.origin();
    const { slides, canLoop, props } = this;
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];
    const lastCoordWithSlide = lastSlide.staticCoord + lastSlide.size;
    let max = canLoop ? lastCoordWithSlide + toPixels(props.gap) : lastCoordWithSlide - containerSize;
    if (canLoop) {
      return max;
    }
    if (origin === "center") {
      max += containerSize / 2 - firstSlide.size / 2;
      if (lastSlide.size < containerSize) {
        max += containerSize / 2 - lastSlide.size / 2;
      }
    }
    if (origin === "end") {
      max += containerSize - firstSlide.size;
    }
    if (origin === "start") {
      max = Math.max(max, 0);
    }
    return max;
  }
  /** Get track progress. From 0 to 1 if not loop. From -Infinity to Infinity if loop */
  get progress() {
    return onlyFinite(this.current / this.max);
  }
  /** If the start has been reached */
  get isStart() {
    if (this.props.loop) {
      return false;
    }
    return Math.floor(this.target) <= Math.floor(this.min);
  }
  /** If the end has been reached */
  get isEnd() {
    if (this.props.loop) {
      return false;
    }
    return Math.floor(this.target) >= Math.floor(this.max);
  }
  /** Whether the track is interpolated */
  get isInterpolated() {
    return this.current === this.target && this._impulse.current === 0;
  }
  /** Handle RAF update, interpolate track values */
  _handleRaf() {
    const { isTransitioning, props, _raf: raf } = this;
    if (isTransitioning) {
      return;
    }
    const ease = raf.lerpFactor(props.lerp);
    this._lerp(ease);
    if (this.isInterpolated) {
      raf.pause();
    }
    this.ctx.onRender(raf.duration);
  }
  /** Awake requestAnimationFrame */
  awake() {
    this._raf.play();
  }
  /** Set track target value */
  updateTarget(value) {
    this.target = value;
    this.awake();
  }
  /** Clamp target value between min and max values */
  clampTarget() {
    if (!this.canLoop) {
      this.target = clamp(this.target, this.min, this.max);
    }
    this.awake();
  }
  /** Set a value to current & target value instantly */
  set(value) {
    this.current = value;
    this.target = value;
    this._impulse.current = 0;
    this._impulse.target = 0;
  }
  /** Loop a coordinate if can loop */
  loopCoord(coord) {
    return this.canLoop ? loop(coord, this.min, this.max) : coord;
  }
  /** Interpolate the current track value */
  _lerp(initialFactor) {
    const { target, _impulse: impulse } = this;
    let lerpFactor = initialFactor;
    const rest = Math.abs(this.current - target);
    const fastThreshold = 3;
    if (rest < fastThreshold) {
      const fastProgress = 1 - rest / fastThreshold;
      const additionalFactor = (1 - lerpFactor) / 15;
      lerpFactor += additionalFactor * fastProgress;
    }
    this.current = lerp(this.current, target, lerpFactor, LERP_APPROXIMATION2);
    impulse.target = lerp(impulse.target, 0, lerpFactor, LERP_APPROXIMATION2);
    impulse.current = lerp(impulse.current, impulse.target, lerpFactor, LERP_APPROXIMATION2);
  }
  /** Go to a definite coordinate */
  toCoord(coordinate, options) {
    var _a3, _b2;
    if (this._isDestroyed) {
      return false;
    }
    const { props, ctx } = this;
    this.cancelTransition();
    const start = this.current;
    const end = coordinate;
    const diff = Math.abs(end - start);
    const durationProp = (_a3 = options === null || options === void 0 ? void 0 : options.duration) !== null && _a3 !== void 0 ? _a3 : props.duration;
    let duration = isNumber(durationProp) ? durationProp : durationProp(diff);
    if (diff === 0) {
      duration = 0;
    }
    const easing3 = (_b2 = options === null || options === void 0 ? void 0 : options.easing) !== null && _b2 !== void 0 ? _b2 : props.easing;
    const tm = new Timeline({ duration, easing: easing3 });
    this._tm = tm;
    tm.on("start", () => {
      var _a4;
      ctx.onTimelineStart();
      (_a4 = options === null || options === void 0 ? void 0 : options.onStart) === null || _a4 === void 0 ? void 0 : _a4.call(options);
    });
    tm.on("update", (data) => {
      var _a4;
      this.current = lerp(start, end, data.eased);
      this.target = this.current;
      this._impulse.current = this._impulse.current * (1 - data.progress);
      this._impulse.target = this._impulse.current;
      if (data.progress === 1) {
        this.setTargetIndex(void 0);
        this._tm = void 0;
      }
      ctx.onTimelineUpdate(data);
      ctx.onRender();
      (_a4 = options === null || options === void 0 ? void 0 : options.onUpdate) === null || _a4 === void 0 ? void 0 : _a4.call(options, data);
    });
    tm.on("end", () => {
      var _a4;
      tm.destroy();
      ctx.onTimelineEnd();
      (_a4 = options === null || options === void 0 ? void 0 : options.onEnd) === null || _a4 === void 0 ? void 0 : _a4.call(options);
    });
    tm.on("destroy", () => {
      this.setTargetIndex(void 0);
    });
    tm.play();
    return true;
  }
  /** Set target index */
  setTargetIndex(value) {
    this._targetIndex = value;
  }
  /** Cancel sticky behavior */
  cancelTransition() {
    var _a3;
    (_a3 = this._tm) === null || _a3 === void 0 ? void 0 : _a3.destroy();
    this._tm = void 0;
  }
  /** Destroy the instance */
  destroy() {
    this._isDestroyed = true;
    this._raf.destroy();
    this.cancelTransition();
  }
};

// node_modules/vevet/lib/esm/components/Snap/index.js
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var Snap = class extends Module {
  /**
   * Returns the default static properties.
   */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), STATIC_PROPS14);
  }
  /**
   * Returns the default mutable properties.
   */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS14);
  }
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._containerSize = 0;
    this._slides = [];
    this._scrollableSlides = [];
    const { container, activeIndex } = this.props;
    this._activeIndex = activeIndex;
    this._resizer = onResize({
      element: container,
      viewportTarget: "width",
      callback: () => this._handleResize(),
      name: this.name
    });
    this._resizer.debounceResize();
    this._fetchSlides();
    this._track = new SnapTrack(this.props, () => this.slides, {
      onRafPlay: () => this.callbacks.emit("rafPlay", void 0),
      onRafPause: () => this.callbacks.emit("rafPause", void 0),
      onRender: this.render.bind(this),
      containerSize: () => this.containerSize,
      firstSlideSize: () => this.firstSlideSize,
      origin: () => this.origin,
      onTimelineStart: () => this.callbacks.emit("timelineStart", void 0),
      onTimelineUpdate: (data) => this.callbacks.emit("timelineUpdate", data),
      onTimelineEnd: () => this.callbacks.emit("timelineEnd", void 0)
    });
    this._wheel = new SnapWheel(this);
    this._swipe = new SnapSwipe(this);
    new SnapKeyboard(this);
    new SnapInterval(this, () => this.prev(), () => this.next());
    this._idle = new SnapIdle(this);
  }
  /** Handles properties change */
  _handleProps(props) {
    if ("slides" in props) {
      this._fetchSlides();
    }
    this._resizer.resize();
    super._handleProps(props);
  }
  /** Get container */
  get container() {
    return this.props.container;
  }
  /** Get events emitter */
  get eventsEmitter() {
    var _a3;
    return (_a3 = this.props.eventsEmitter) !== null && _a3 !== void 0 ? _a3 : this.container;
  }
  /** Container size depending on direction (width or height) */
  get containerSize() {
    const { containerSize } = this.props;
    if (containerSize === "auto") {
      return this._containerSize;
    }
    return toPixels(containerSize);
  }
  /**
   * Container size depending on direction (width or height)
   * @deprecated
   */
  get domSize() {
    return this.containerSize;
  }
  /** All slides */
  get slides() {
    return this._slides;
  }
  /** Scrollable slides (which size is larger than the container) */
  get scrollableSlides() {
    return this._scrollableSlides;
  }
  /** Active slide index */
  get activeIndex() {
    return this._activeIndex;
  }
  /** Active slide */
  get activeSlide() {
    return this.slides[this._activeIndex];
  }
  get isEmpty() {
    return this.slides.length === 0;
  }
  /** Get axis name depending on direction */
  get axis() {
    return this.props.direction === "horizontal" ? "x" : "y";
  }
  /** Get track */
  get $track() {
    return this._track;
  }
  /** Get track */
  get track() {
    return this._track;
  }
  /** If transition in progress */
  get isTransitioning() {
    return this.track.isTransitioning;
  }
  /** If swipe in progress */
  get isSwiping() {
    return this._swipe.isSwiping;
  }
  /** If wheel events are active */
  get isWheeling() {
    return this._wheel.isWheeling;
  }
  /**
   * @deprecated
   */
  get hasInteria() {
    return this._swipe.hasInertia;
  }
  /** If swipe has inertia */
  get hasInertia() {
    return this._swipe.hasInertia;
  }
  /** If track values are interpolating */
  get isInterpolating() {
    const { track } = this;
    const diff = Math.abs(track.target - track.current);
    return diff > LERP_APPROXIMATION2;
  }
  /** @deprecated */
  get influence() {
    return this.track.impulse;
  }
  /** Gets the interpolation impulse */
  get impulse() {
    return this.track.impulse;
  }
  /** Gets the current track value. */
  get current() {
    return this.track.current;
  }
  /** Gets the target track value. */
  get target() {
    return this.track.target;
  }
  /** Detect if can loop */
  get canLoop() {
    return this.track.canLoop;
  }
  /** Get looped current value */
  get loopedCurrent() {
    return this.track.loopedCurrent;
  }
  /** Get loop count */
  get loopCount() {
    return this.track.loopCount;
  }
  /** Sets track to current & target value instantly */
  set(value) {
    this.track.set(value);
  }
  /** Loop a coordinate if can loop */
  loopCoord(coord) {
    return this.track.loopCoord(coord);
  }
  /** Get minimum track value */
  get min() {
    return this.track.min;
  }
  /** Get maximum track value */
  get max() {
    return this.track.max;
  }
  /** Get track progress. From 0 to 1 if not loop. From -Infinity to Infinity if loop */
  get progress() {
    return this.track.progress;
  }
  /** If the start has been reached */
  get isStart() {
    return this.track.isStart;
  }
  /** If the end has been reached */
  get isEnd() {
    return this.track.isEnd;
  }
  /** Slige magnet origin */
  get origin() {
    if (this.props.centered) {
      return "center";
    }
    return this.props.origin;
  }
  /** Clamp target value between min and max values */
  clampTarget() {
    this.track.clampTarget();
  }
  /** Iterate track target value */
  iterateTarget(delta) {
    this.track.updateTarget(this.track.target + delta);
  }
  /** Set track target value */
  setTarget(value) {
    this.track.updateTarget(value);
  }
  /** Cancel slide transition */
  cancelTransition() {
    this.track.cancelTransition();
  }
  /** Check if the active slide is larger than the container and is being scrolled */
  get isSlideScrolling() {
    const { containerSize } = this;
    return this.scrollableSlides.some(({ size, coord }) => inRange(coord, containerSize - size, 0));
  }
  /** Get first slide size */
  get firstSlideSize() {
    return this.slides[0].size;
  }
  /** If the scene is idle: not swiping, not interpolating, not transitioning */
  get isIdle() {
    return this._idle.isIdle;
  }
  /** Update slides list and attach them */
  _fetchSlides() {
    const { props } = this;
    this._slides.forEach((slide) => slide.$_detach());
    const rawChildren = props.slides ? props.slides : Array.from(props.container.children);
    const children = rawChildren.filter((slide) => {
      if (slide instanceof HTMLElement && slide.hasAttribute("data-scrollbar")) {
        return false;
      }
      return true;
    });
    if (!children.length) {
      throw new Error("No slides found");
    }
    this._slides = children.map((item) => {
      if (item instanceof SnapSlide) {
        return item;
      }
      return new SnapSlide(item);
    });
    this._slides.forEach((slide, index2) => slide.$_attach(this, index2));
  }
  /** Request resize (handled with debounce timeout) */
  resize(isManual = true) {
    if (isManual) {
      this._resizer.resize();
    } else {
      this._resizer.debounceResize();
    }
  }
  /** Resize the scene and reflow */
  _handleResize() {
    const { container } = this.props;
    this.track.cancelTransition();
    this._containerSize = this.axis === "x" ? container.offsetWidth : container.offsetHeight;
    this._reflow();
    this.callbacks.emit("resize", void 0);
  }
  /** Reflow: update static values of slides */
  _reflow() {
    const { slides, props, track } = this;
    this._scrollableSlides = [];
    slides.reduce((prev, slide2) => {
      slide2.$_setStaticCoord(prev);
      if (slide2.size > this.containerSize) {
        this._scrollableSlides.push(slide2);
      }
      return prev + slide2.size + toPixels(props.gap);
    }, 0);
    const slide = slides.find(({ index: index2 }) => index2 === this.activeIndex);
    if (props.stickOnResize && slide) {
      track.clampTarget();
      track.set(slide.magnets[0]);
    }
    this.callbacks.emit("reflow", void 0);
    this.render();
  }
  /** Render slides */
  render(frameDuration = 0) {
    const { _swipe: swipe, track, props } = this;
    this._updateSlidesCoords();
    this._updateSlideProgress();
    const { magnet } = this;
    if (magnet && magnet.slide.index !== this._activeIndex && (isUndefined(track.targetIndex) || magnet.slide.index === track.targetIndex)) {
      this._activeIndex = magnet.slide.index;
      track.setTargetIndex(void 0);
      this.callbacks.emit("activeSlide", this.activeSlide);
    }
    const hasFriction = swipe.isSwiping && swipe.allowFriction || !swipe.isSwiping;
    if (magnet && hasFriction && frameDuration > 0 && props.friction >= 0 && !this.isSlideScrolling && !props.freemode) {
      track.target = damp(track.target, track.current + magnet.diff, props.friction * props.lerp, frameDuration, 1e-6);
    }
    this.slides.forEach((slide) => slide.$_render());
    this.callbacks.emit("update", void 0);
  }
  /** Update slides values */
  _updateSlidesCoords() {
    this.slides.forEach((slide) => slide.$_updateCoords(this.track.offset));
  }
  /** Update slides progress */
  _updateSlideProgress() {
    this.slides.forEach((slide) => slide.$_updateProgress());
  }
  /** Get nearest magnet */
  get magnet() {
    const current = this._track.loopedCurrent;
    return this.getNearestMagnet(current);
  }
  /** Get nearest magnet to the current position */
  getNearestMagnet(coord) {
    const magnets = this.slides.flatMap((slide) => slide.magnets.map((magnet) => ({ slide, magnet, index: slide.index })));
    if (magnets.length === 0) {
      return void 0;
    }
    const closestMagnet = magnets.reduce((p, c) => Math.abs(c.magnet - coord) < Math.abs(p.magnet - coord) ? c : p);
    return Object.assign(Object.assign({}, closestMagnet), { diff: closestMagnet.magnet - coord });
  }
  /** Stick to the nearest magnet */
  stick() {
    const { magnet, isSlideScrolling, track } = this;
    if (isSlideScrolling || !magnet) {
      return false;
    }
    return this.toCoord(track.current + magnet.diff);
  }
  /** Go to a definite coordinate */
  toCoord(coordinate, options) {
    return this.track.toCoord(coordinate, options);
  }
  /** Go to a slide by index */
  toSlide(targetIndex, _a3 = {}) {
    var _b2, _c;
    var { direction = null } = _a3, options = __rest3(_a3, ["direction"]);
    const { activeIndex, slides, track, props, origin } = this;
    const { current, max, loopCount } = track;
    if (this.isDestroyed) {
      return false;
    }
    const index2 = loop(targetIndex, 0, this.slides.length);
    if (index2 === activeIndex) {
      return false;
    }
    track.setTargetIndex(index2);
    const slideMagnets = slides[index2].magnets;
    let targetStaticMagnet = slideMagnets[0];
    if (origin === "center") {
      if (direction === "prev") {
        targetStaticMagnet = (_b2 = slideMagnets[2]) !== null && _b2 !== void 0 ? _b2 : slideMagnets[0];
      } else if (direction === "next") {
        targetStaticMagnet = (_c = slideMagnets[1]) !== null && _c !== void 0 ? _c : slideMagnets[0];
      }
    } else if (origin === "end") {
      targetStaticMagnet = direction === "next" ? slideMagnets[slideMagnets.length - 1] : targetStaticMagnet;
    } else {
      targetStaticMagnet = direction === "prev" ? slideMagnets[slideMagnets.length - 1] : targetStaticMagnet;
    }
    if (!props.loop) {
      return this.toCoord(targetStaticMagnet, options);
    }
    const targetMagnet = targetStaticMagnet + loopCount * max;
    const targetMagnetMin = targetMagnet - max;
    const targetMagnetMax = targetMagnet + max;
    const allMagnets = [targetMagnetMin, targetMagnet, targetMagnetMax];
    if (isString(direction)) {
      const magnets = allMagnets.filter((magnet3) => direction === "next" ? magnet3 >= current : magnet3 <= current);
      const magnet2 = closest(current, magnets);
      return this.toCoord(magnet2, options);
    }
    const magnet = closest(current, allMagnets);
    return this.toCoord(magnet, options);
  }
  /** Go to next slide */
  next(_a3 = {}) {
    var { skip = this.props.slidesToScroll } = _a3, options = __rest3(_a3, ["skip"]);
    const { props, slides, activeIndex } = this;
    const { length } = slides;
    let index2 = loop(activeIndex + skip, 0, length);
    if (!props.loop) {
      index2 = props.rewind ? loop(activeIndex + skip, 0, length) : Math.min(activeIndex + skip, length - 1);
    }
    return this.toSlide(index2, Object.assign(Object.assign({}, options), { direction: "next" }));
  }
  /** Go to previous slide */
  prev(_a3 = {}) {
    var { skip = this.props.slidesToScroll } = _a3, options = __rest3(_a3, ["skip"]);
    const { props, slides, activeIndex } = this;
    let index2 = loop(activeIndex - skip, 0, slides.length);
    if (!props.loop) {
      index2 = props.rewind ? loop(activeIndex - skip, 0, slides.length) : Math.max(activeIndex - skip, 0);
    }
    return this.toSlide(index2, Object.assign(Object.assign({}, options), { direction: "prev" }));
  }
  /**
   * Destroys the component and clears all timeouts and resources.
   */
  _destroy() {
    super._destroy();
    this._track.destroy();
    this._resizer.remove();
    this._slides.forEach((slide) => slide.$_detach());
  }
};
__decorate14([
  noopIfDestroyed
], Snap.prototype, "resize", null);
__decorate14([
  noopIfDestroyed
], Snap.prototype, "render", null);
__decorate14([
  noopIfDestroyed
], Snap.prototype, "toCoord", null);

// node_modules/vevet/lib/esm/components/SplitText/props.js
var GET_STATIC_PROPS = (prefix) => ({
  __staticProp: true,
  container: null,
  ariaLabel: true,
  letters: false,
  lines: false,
  linesWrapper: false,
  letterTag: "span",
  wordTag: "span",
  lineTag: "span",
  letterClass: `${prefix}__letter`,
  wordClass: `${prefix}__word`,
  lineClass: `${prefix}__line`,
  lineWrapperClass: `${prefix}__line-wrapper`,
  resizeDebounce: 0,
  ignore: null,
  prepareText: (text) => text,
  wordDelimiter: String.fromCharCode(32),
  wordDelimiterOutput: null
});
var MUTABLE_PROPS15 = {
  __mutableProp: true
};

// node_modules/vevet/lib/esm/components/SplitText/utils/saveInitialNodes.js
function saveInitialNodes(root) {
  const flatArray = [];
  function copy(node) {
    flatArray.push({
      node,
      cssText: node instanceof HTMLElement ? node.style.cssText : null,
      parent: node.parentNode
    });
    node.childNodes.forEach((child) => copy(child));
  }
  root.childNodes.forEach((child) => copy(child));
  return {
    restore: () => {
      const fragment = doc.createDocumentFragment();
      flatArray.forEach((element) => {
        const { node, cssText } = element;
        if (node instanceof HTMLElement && cssText) {
          node.style.cssText = cssText;
        }
        while (node.childNodes[0]) {
          node.childNodes[0].remove();
        }
        if (element.parent) {
          const parent = element.parent === root ? fragment : element.parent;
          parent.appendChild(element.node);
        }
      });
      while (root.childNodes[0]) {
        root.childNodes[0].remove();
      }
      root.appendChild(fragment);
    }
  };
}

// node_modules/vevet/lib/esm/components/SplitText/utils/wrapLetters.js
var import_lodash = __toESM(require_lodash());

// node_modules/vevet/lib/esm/components/SplitText/utils/isIgnored.js
function isIgnored(element, ignore) {
  if (!ignore) {
    return false;
  }
  if (isString(ignore)) {
    return element.matches(ignore);
  }
  if (typeof ignore === "function") {
    return ignore(element);
  }
  return ignore.includes(element);
}

// node_modules/vevet/lib/esm/components/SplitText/utils/wrapLetters.js
function wrapLetters({ wordsMeta, classname, tagName, ignore }) {
  const lettersMeta = [];
  const baseElement = doc.createElement(tagName);
  baseElement.style.display = "inline-block";
  cnAdd(baseElement, classname);
  wordsMeta.forEach((wordMeta) => {
    if (isIgnored(wordMeta.element, ignore)) {
      return;
    }
    const textNode = wordMeta.element.childNodes[0];
    if (!textNode) {
      return;
    }
    const text = textNode.textContent;
    if (!text) {
      return;
    }
    const splitLetters = (0, import_lodash.default)(text, "");
    splitLetters.forEach((letterContents) => {
      const element = baseElement.cloneNode(false);
      element.appendChild(doc.createTextNode(letterContents));
      wordMeta.element.insertBefore(element, textNode);
      const letter = { element };
      wordMeta.letters.push(letter);
      lettersMeta.push(letter);
    });
    textNode.remove();
  });
  return { lettersMeta };
}

// node_modules/vevet/lib/esm/components/SplitText/utils/wrapWords.js
function wrapWords({ container, classname, tagName, ignore, prepareText, wordDelimiter = " ", wordDelimiterOutput: wordDelimiterOutputProp }) {
  const wordDelimiterOutput = wordDelimiterOutputProp || wordDelimiter;
  const baseElement = doc.createElement(tagName);
  baseElement.style.display = "inline-block";
  baseElement.setAttribute("aria-hidden", "true");
  cnAdd(baseElement, classname);
  const wordsMeta = [];
  let prevNonBreakingWord = null;
  function recursive(node) {
    var _a3, _b2;
    if (node instanceof HTMLElement || node instanceof DocumentFragment) {
      if ("tagName" in node && node.tagName !== "BR") {
        if (isIgnored(node, ignore)) {
          if (prevNonBreakingWord) {
            prevNonBreakingWord.append(node);
          } else {
            wordsMeta.push({ element: node, letters: [] });
          }
          return;
        }
        node.style.display = "inline-block";
      }
      prevNonBreakingWord = null;
      const children = [...Array.from(node.childNodes)];
      children.forEach((child) => recursive(child));
      return;
    }
    if (node.nodeType === 3) {
      const parent = (_a3 = node.parentElement) !== null && _a3 !== void 0 ? _a3 : container;
      let text = (_b2 = node.nodeValue) !== null && _b2 !== void 0 ? _b2 : "";
      if (text === wordDelimiter) {
        prevNonBreakingWord = null;
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(doc.createTextNode(wordDelimiterOutput), node);
        node.remove();
        return;
      }
      text = prepareText ? prepareText(text) : text;
      const splitWords = text.split(wordDelimiter);
      splitWords.forEach((wordContents, index2) => {
        if (wordContents) {
          const element = baseElement.cloneNode(false);
          element.appendChild(doc.createTextNode(wordContents));
          prevNonBreakingWord = element;
          wordsMeta.push({ element, letters: [] });
          parent === null || parent === void 0 ? void 0 : parent.insertBefore(element, node);
        }
        if (index2 < splitWords.length - 1) {
          parent === null || parent === void 0 ? void 0 : parent.insertBefore(doc.createTextNode(wordDelimiterOutput), node);
        }
      });
      node.remove();
    }
  }
  recursive(container);
  return wordsMeta;
}

// node_modules/vevet/lib/esm/components/SplitText/utils/splitBase.js
var __rest4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function splitBase(_a3) {
  var { container, letterClassName, wordClassName, hasLetters, letterTag, wordTag, ignore } = _a3, props = __rest4(_a3, ["container", "letterClassName", "wordClassName", "hasLetters", "letterTag", "wordTag", "ignore"]);
  const prepareFragment = doc.createDocumentFragment();
  while (container.childNodes[0]) {
    prepareFragment.appendChild(container.childNodes[0]);
  }
  const wordsMeta = wrapWords(Object.assign(Object.assign({}, props), { container: prepareFragment, classname: wordClassName, tagName: wordTag, ignore }));
  const lettersMeta = [];
  if (hasLetters) {
    const wrappedLetters = wrapLetters({
      wordsMeta,
      classname: letterClassName,
      tagName: letterTag,
      ignore
    });
    lettersMeta.push(...wrappedLetters.lettersMeta);
  }
  container.appendChild(prepareFragment);
  return { wordsMeta, lettersMeta };
}

// node_modules/vevet/lib/esm/components/SplitText/utils/getTextAlignment.js
function getTextAlignment(node) {
  const { direction, textAlign } = getComputedStyle(node);
  if (textAlign === "center") {
    return textAlign;
  }
  if (textAlign === "justify") {
    return direction === "rtl" ? "right" : "left";
  }
  if (textAlign === "left" || textAlign === "right") {
    return textAlign;
  }
  if (textAlign === "start") {
    return direction === "rtl" ? "right" : "left";
  }
  if (textAlign === "end") {
    return direction === "rtl" ? "left" : "right";
  }
  return direction === "rtl" ? "right" : "left";
}

// node_modules/vevet/lib/esm/components/SplitText/utils/wrapLines.js
function getTopParent(ref, topParent) {
  var _a3;
  if (!(ref === null || ref === void 0 ? void 0 : ref.parentElement)) {
    return null;
  }
  if (ref.parentElement === topParent) {
    return ref;
  }
  return getTopParent((_a3 = ref === null || ref === void 0 ? void 0 : ref.parentElement) !== null && _a3 !== void 0 ? _a3 : null, topParent);
}
function childOf(element, parent) {
  if (element === parent) {
    return true;
  }
  if (element !== null) {
    return childOf(element.parentNode, parent);
  }
  return false;
}
function wrapLines({ container, hasLinesWrapper, wordsMeta, lineClassName, lineWrapperClassName, tagName }) {
  const direction = getTextAlignment(container);
  const linesMeta = [];
  let lineIndex = -1;
  let lastBounding = null;
  const baseElement = doc.createElement(tagName);
  baseElement.style.display = "block";
  baseElement.setAttribute("aria-hidden", "true");
  cnAdd(baseElement, lineClassName);
  const boundings = wordsMeta.map((wordMeta) => wordMeta.element.getBoundingClientRect());
  wordsMeta.forEach((wordMeta, index2) => {
    var _a3;
    const bounds = boundings[index2];
    const topParent = getTopParent(wordMeta.element, container);
    if (!topParent) {
      return;
    }
    const isNextTop = lastBounding && bounds.top > lastBounding.top;
    const isNextLeft = lastBounding && bounds.left >= lastBounding.left;
    const isPrevLeft = lastBounding && bounds.left <= lastBounding.left;
    if (!lastBounding || isNextTop && isPrevLeft && direction === "left" || isNextTop && isNextLeft && direction === "right" || isNextTop && direction === "center") {
      lineIndex += 1;
      const element = baseElement.cloneNode(false);
      let wrapper;
      if (hasLinesWrapper) {
        wrapper = doc.createElement(tagName);
        wrapper.style.display = "block";
        cnAdd(wrapper, lineWrapperClassName);
        wrapper.appendChild(element);
      }
      linesMeta[lineIndex] = { element, wrapper, nodes: [], words: [] };
    }
    lastBounding = bounds;
    const currentLine = linesMeta[lineIndex];
    const isInList = !!linesMeta.find(({ nodes }) => nodes.includes(topParent));
    if (!isInList) {
      currentLine.nodes.push(topParent);
      if (((_a3 = topParent.nextSibling) === null || _a3 === void 0 ? void 0 : _a3.nodeType) === 3) {
        currentLine.nodes.push(topParent.nextSibling);
      }
    }
  });
  linesMeta.forEach((line) => {
    var _a3;
    container.insertBefore((_a3 = line.wrapper) !== null && _a3 !== void 0 ? _a3 : line.element, line.nodes[0]);
    const fragment = doc.createDocumentFragment();
    fragment.append(...line.nodes);
    line.element.append(fragment);
  });
  const hiddenBr = [];
  linesMeta.forEach((line) => {
    var _a3;
    const nextSibling = ((_a3 = line.wrapper) !== null && _a3 !== void 0 ? _a3 : line.element).nextElementSibling;
    if (nextSibling instanceof HTMLBRElement) {
      nextSibling.style.display = "none";
      hiddenBr.push(nextSibling);
    }
  });
  linesMeta.forEach((line) => {
    line.words.push(...wordsMeta.filter((word) => childOf(word.element, line.element)));
  });
  const destroy = () => {
    let isSuccess = true;
    hiddenBr.forEach((br) => {
      br.style.display = "";
    });
    linesMeta.forEach((line) => {
      var _a3;
      line.nodes.forEach((node) => {
        var _a4;
        const reference = (_a4 = line.wrapper) !== null && _a4 !== void 0 ? _a4 : line.element;
        if (reference.parentElement) {
          container.insertBefore(node, reference);
        } else {
          isSuccess = false;
        }
      });
      line.element.remove();
      (_a3 = line.wrapper) === null || _a3 === void 0 ? void 0 : _a3.remove();
    });
    return isSuccess;
  };
  return { linesMeta, destroy };
}

// node_modules/vevet/lib/esm/components/SplitText/index.js
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SplitText = class extends Module {
  /** Get default static properties. */
  _getStatic() {
    return Object.assign(Object.assign({}, super._getStatic()), GET_STATIC_PROPS(this.prefix));
  }
  /** Get default mutable properties. */
  _getMutable() {
    return Object.assign(Object.assign({}, super._getMutable()), MUTABLE_PROPS15);
  }
  /**
   * Initializes the SplitText instance and saves the initial state.
   */
  constructor(props, onCallbacks) {
    super(props, onCallbacks);
    this._hasSplitBase = false;
    this._lettersMeta = [];
    this._wordsMeta = [];
    this._linesMeta = [];
    const { container, ariaLabel } = this.props;
    const { style: style3 } = container;
    style3.fontKerning = "none";
    style3.display = "block";
    if (ariaLabel) {
      container.setAttribute("aria-label", typeof ariaLabel === "string" ? ariaLabel : container.textContent || "");
    }
    container.translate = false;
    this._addTempClassName(container, this._cn(""));
    this._initials = saveInitialNodes(container);
    this._setEvents();
  }
  /**
   * Classname prefix for styling elements.
   */
  get prefix() {
    return `${initVevet().prefix}split-text`;
  }
  /**
   * Retrieves an array of letters metadata.
   */
  get lettersMeta() {
    return this._lettersMeta;
  }
  /**
   * Retrieves an array of letter elements.
   */
  get letters() {
    return this._lettersMeta.map((letter) => letter.element);
  }
  /**
   * Retrieves an array of words metadata.
   */
  get wordsMeta() {
    return this._wordsMeta;
  }
  /**
   * Retrieves an array of word elements.
   */
  get words() {
    return this._wordsMeta.map((word) => word.element);
  }
  /**
   * Retrieves an array of lines metadata.
   */
  get linesMeta() {
    return this._linesMeta;
  }
  /**
   * Retrieves an array of line elements.
   */
  get lines() {
    return this._linesMeta.map((line) => line.element);
  }
  /**
   * Sets up event listeners and handles initial splitting.
   */
  _setEvents() {
    const { container, resizeDebounce } = this.props;
    if (!this.props.lines) {
      this.split();
      return;
    }
    const resizeHandler = onResize({
      callback: () => this.split(),
      element: container,
      viewportTarget: "width",
      resizeDebounce,
      name: this.name
    });
    resizeHandler.resize();
    this.onDestroy(() => resizeHandler.remove());
  }
  /**
   * Splits the text into letters, words, and optionally lines based on configuration.
   */
  split() {
    this.callbacks.emit("beforeSplit", void 0);
    this._splitBase();
    if (this.props.lines) {
      this._splitLines();
    }
    this.callbacks.emit("split", void 0);
  }
  /**
   * Splits text into base elements: letters and words.
   */
  _splitBase() {
    if (this._hasSplitBase) {
      return;
    }
    const { container, letterTag, wordTag, wordClass, letterClass, ignore, prepareText, wordDelimiter, wordDelimiterOutput } = this.props;
    this._hasSplitBase = true;
    const { wordsMeta, lettersMeta } = splitBase({
      container,
      letterClassName: letterClass,
      wordClassName: wordClass,
      hasLetters: this.props.letters,
      letterTag,
      wordTag,
      ignore,
      prepareText,
      wordDelimiter,
      wordDelimiterOutput
    });
    this._wordsMeta = wordsMeta;
    this._lettersMeta = lettersMeta;
  }
  /**
   * Wraps words into line containers.
   */
  _splitLines() {
    var _a3;
    const { wordsMeta } = this;
    const { container, lineTag, lineClass, lineWrapperClass } = this.props;
    const isHidden = container.offsetParent === null;
    if (isHidden) {
      return;
    }
    (_a3 = this._lineSplitWrapper) === null || _a3 === void 0 ? void 0 : _a3.destroy();
    this._lineSplitWrapper = wrapLines({
      container,
      hasLinesWrapper: this.props.linesWrapper,
      wordsMeta,
      lineClassName: lineClass,
      lineWrapperClassName: lineWrapperClass,
      tagName: lineTag
    });
    this._linesMeta = this._lineSplitWrapper.linesMeta;
  }
  /**
   * Destroys the component.
   * This method does not restore the initial nodes. For this purpose, use `restore()`.
   */
  _destroy() {
    super._destroy();
    if (!this._lineSplitWrapper) {
      this._initials.restore();
    } else {
      const isSuccessfulDestroy = this._lineSplitWrapper.destroy();
      this._lineSplitWrapper = void 0;
      if (isSuccessfulDestroy) {
        this._initials.restore();
      }
    }
  }
};
__decorate15([
  noopIfDestroyed
], SplitText.prototype, "split", null);

// node_modules/vevet/lib/esm/index.js
var vevet = isBrowser ? initVevet() : void 0;
var app = vevet;
export {
  Callbacks,
  Canvas,
  CanvasMedia,
  Cursor,
  EaseInBack,
  EaseInBounce,
  EaseInCirc,
  EaseInCubic,
  EaseInElastic,
  EaseInExpo,
  EaseInOutBack,
  EaseInOutBounce,
  EaseInOutCirc,
  EaseInOutCubic,
  EaseInOutElastic,
  EaseInOutExpo,
  EaseInOutQuad,
  EaseInOutQuart,
  EaseInOutQuint,
  EaseInOutSine,
  EaseInQuad,
  EaseInQuart,
  EaseInQuint,
  EaseInSine,
  EaseOutBack,
  EaseOutBounce,
  EaseOutCirc,
  EaseOutCubic,
  EaseOutElastic,
  EaseOutExpo,
  EaseOutQuad,
  EaseOutQuart,
  EaseOutQuint,
  EaseOutSine,
  InView,
  Marquee,
  Module,
  Pointers,
  Preloader,
  ProgressPreloader,
  Raf,
  Responsive,
  ScrollProgress,
  Scrollbar,
  Snap,
  SnapSlide,
  SplitText,
  Swipe,
  Timeline,
  addEventListener,
  app,
  clamp,
  clampScope,
  closest,
  damp,
  easing2 as easing,
  inRange,
  initVevet,
  lerp,
  loop,
  normalizeWheel,
  onResize,
  presetCssVars,
  scoped,
  toPixels,
  uid,
  vevet
};
/*! Bundled license information:

normalize-wheel/src/isEventSupported.js:
  (**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   *)
*/
