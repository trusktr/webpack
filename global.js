(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["infamous"] = factory();
	else
		root["infamous"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(299);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(294);
	
	__webpack_require__(296);
	
	/* eslint max-len: 0 */
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	// Should be removed in the next major release:
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(292);
	__webpack_require__(293);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
[418, 7],
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
[419, 11, 17, 6],
/* 11 */
[420, 12, 14, 16, 6],
/* 12 */
[421, 13],
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
[422, 6, 7, 15],
/* 15 */
[423, 13, 4],
/* 16 */
[424, 13],
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
[425, 21],
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
[426, 4],
/* 24 */
[427, 11, 5, 25],
/* 25 */
[428, 23, 19, 4],
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
[429, 31, 41],
/* 31 */
[430, 5, 32, 36, 40],
/* 32 */
[431, 33, 35],
/* 33 */
[432, 34],
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
[433, 32, 37, 39],
/* 37 */
[434, 38],
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
[435, 38],
/* 40 */
[436, 23, 19],
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
[437, 12, 47, 41, 40, 15, 48],
/* 47 */
[438, 11, 12, 30, 6],
/* 48 */
[439, 4],
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
[440, 44, 17, 32, 16, 5, 14, 6],
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);
	
	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
[441, 35],
/* 59 */
[442, 5, 58, 40],
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);
	
	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
[443, 13, 12, 20, 51],
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
[444, 34, 25],
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , anInstance   = __webpack_require__(90)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(91)
	  , repeat       = __webpack_require__(92)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(91)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(97)});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(97)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(105)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(109);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(113);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 113 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(109)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(105)});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {sign: __webpack_require__(109)});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(113)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(113)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 127 */
[445, 128, 129],
/* 128 */
[446, 38, 35],
/* 129 */
[447, 28, 8, 18, 10, 5, 130, 131, 24, 59, 25],
/* 130 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 131 */
[448, 46, 17, 24, 10, 25],
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(128)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(134)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(136)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(135)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(134)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(136)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(92)
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(134)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(136)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(141)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(141)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(141)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(141)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(141)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(141)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(141)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(141)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(141)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(141)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(141)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(141)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(141)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(159));

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(162)
	  , isArrayIter    = __webpack_require__(163)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(164)
	  , getIterFn      = __webpack_require__(165);
	
	$export($export.S + $export.F * !__webpack_require__(166)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 162 */
[449, 12],
/* 163 */
[450, 130, 25],
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 165 */
[451, 75, 25, 130, 9],
/* 166 */
[452, 25],
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(164);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(169)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(169)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(173)(0)
	  , STRICT   = __webpack_require__(169)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(174);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(175);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(173)(1);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(173)(2);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(173)(3);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(173)(4);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(181);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(181);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(186)});
	
	__webpack_require__(187)('copyWithin');

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {fill: __webpack_require__(189)});
	
	__webpack_require__(187)('fill');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(173)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(173)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(193)('Array');

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 194 */
[453, 187, 195, 130, 32, 129],
/* 195 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(135)
	  , $flags            = __webpack_require__(197)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(193)('RegExp');

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(199);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(197)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(197)
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(201)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(201)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(201)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(201)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(135)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 205 */
[454, 28, 4, 20, 75, 8, 13, 12, 21, 90, 206, 73, 207, 208, 209, 25, 210, 24, 193, 9, 166],
/* 206 */
[455, 20, 162, 163, 12, 37, 165],
/* 207 */
[456, 12, 21, 25],
/* 208 */
[457, 20, 78, 48, 15, 4, 34],
/* 209 */
[458, 4, 208, 34],
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , hide        = __webpack_require__(10)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(90)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(129)
	  , step        = __webpack_require__(195)
	  , setSpecies  = __webpack_require__(193)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(90)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(166)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(173)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , has          = __webpack_require__(5)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(90)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(173)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);
	
	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , TYPED_ARRAY  = __webpack_require__(25)('typed_array')
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(193)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(90)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(189)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , parseInt       = global.parseInt
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , min            = Math.min
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(90)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , isInteger           = __webpack_require__(97)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(163)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , isIterable          = __webpack_require__(224)
	    , getIterFn           = __webpack_require__(165)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(173)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(194)
	    , Iterators           = __webpack_require__(130)
	    , $iterDetect         = __webpack_require__(166)
	    , setSpecies          = __webpack_require__(193)
	    , arrayFill           = __webpack_require__(189)
	    , arrayCopyWithin     = __webpack_require__(186)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(130);
	module.exports = __webpack_require__(9).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , _apply    = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(aFunction(target), thisArgument, anObject(argumentsList));
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export   = __webpack_require__(8)
	  , create    = __webpack_require__(46)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , isObject  = __webpack_require__(13)
	  , bind      = __webpack_require__(77);
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(131)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(244)});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(187)('includes');

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(128)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(251);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(92)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(251);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(135)
	  , getFlags    = __webpack_require__(197)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(131)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(244)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(164);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(260)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(260)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(263), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(263), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(263), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(263), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(268)('Map')});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(269);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(268)('Set')});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(278)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(269)
	  , metadata                = __webpack_require__(278)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(278)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(278)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(278)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(90)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(193)('Observable');

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(290)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(291)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(194)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(130)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(295)))

/***/ },
/* 295 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
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
	    var timeout = cachedSetTimeout(cleanUpNextTick);
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
	    cachedClearTimeout(timeout);
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
	        cachedSetTimeout(drainQueue, 0);
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(297);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(298)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _motor = __webpack_require__(300);
	
	Object.keys(_motor).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _motor[key];
	    }
	  });
	});
	
	var _motorHtml = __webpack_require__(416);
	
	Object.keys(_motorHtml).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _motorHtml[key];
	    }
	  });
	});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PushPaneLayout = exports.Scene = exports.Node = exports.Curves = undefined;
	
	var _Utility = __webpack_require__(301);
	
	Object.keys(_Utility).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Utility[key];
	    }
	  });
	});
	
	var _Curves2 = __webpack_require__(375);
	
	var _Curves3 = _interopRequireDefault(_Curves2);
	
	var _Node2 = __webpack_require__(376);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	var _Scene2 = __webpack_require__(414);
	
	var _Scene3 = _interopRequireDefault(_Scene2);
	
	var _PushPaneLayout2 = __webpack_require__(415);
	
	var _PushPaneLayout3 = _interopRequireDefault(_PushPaneLayout2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Curves = _Curves3.default;
	exports.Node = _Node3.default;
	exports.Scene = _Scene3.default;
	exports.PushPaneLayout = _PushPaneLayout3.default;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.proxyMethods = exports.makeLowercaseSetterAliases = exports.animationFrame = exports.getBodySize = exports.applyCSSLabel = exports.epsilon = undefined;
	
	
	/**
	 * Get the dimensions of the body element.
	 * @async
	 * @return {Object} An object containing `width` and `height` properties.
	 */
	
	var getBodySize = function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        var body, width, height;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.next = 2;
	                        return (0, _windowLoaded2.default)();
	
	                    case 2:
	                        body = document.body;
	                        width = window.parseInt(window.getComputedStyle(body).getPropertyValue('width'));
	                        height = window.parseInt(window.getComputedStyle(body).getPropertyValue('height'));
	                        return _context.abrupt('return', { width: width, height: height });
	
	                    case 6:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    return function getBodySize() {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	var _tween = __webpack_require__(302);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _windowLoaded = __webpack_require__(303);
	
	var _windowLoaded2 = _interopRequireDefault(_windowLoaded);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function epsilon(value) {
	    return Math.abs(value) < 0.000001 ? 0 : value;
	}
	
	function applyCSSLabel(value, label) {
	    if (value === 0) {
	        return '0px';
	    } else if (label === '%') {
	        return value * 100 + '%';
	    } else if (label === 'px') {
	        return value + 'px';
	    }
	}
	
	function animationFrame() {
	    var resolve = null;
	    var promise = new Promise(function (r) {
	        return resolve = r;
	    });
	    window.requestAnimationFrame(resolve);
	    return promise;
	}
	
	// Create lowercase versions of each setter property.
	function makeLowercaseSetterAliases(object) {
	    var props = Object.getOwnPropertyNames(object);
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var prop = _step.value;
	
	            var lowercaseProp = prop.toLowerCase();
	            if (lowercaseProp != prop) {
	                var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	                if (Object.getOwnPropertyNames(descriptor).indexOf('set') >= 0) {
	                    // we care only about the setters.
	                    Object.defineProperty(object, lowercaseProp, descriptor);
	                }
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}
	
	// Node methods not to proxy (private underscored methods are also detected and
	// ignored).
	//
	// XXX Should use a whitelist instead of a blacklist?
	var methodProxyBlacklist = ['constructor', 'parent', 'children', // proxying this one would really break stuff (f.e. React)
	'element', 'scene', 'addChild', 'addChildren', 'removeChild', 'removeChildren'];
	
	// Creates setters/getters on the MotorHTMLNode which proxy to the
	// setters/getters on Node.
	function proxyMethods(SourceClass, TargetClass) {
	    var props = Object.getOwnPropertyNames(SourceClass.prototype);
	
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        var _loop = function _loop() {
	            var prop = _step2.value;
	
	            // skip the blacklisted properties
	            if (methodProxyBlacklist.includes(prop)) return 'continue';
	
	            // skip the private underscored properties
	            if (prop.indexOf('_') == 0) return 'continue';
	
	            var proxyDescriptor = {};
	            var actualDescriptor = Object.getOwnPropertyDescriptor(SourceClass.prototype, prop);
	
	            // if the property has a setter
	            if (actualDescriptor.set) {
	                Object.assign(proxyDescriptor, {
	                    set: function set(value) {
	                        this.node[prop] = value;
	                    }
	                });
	            }
	
	            // if the property has a getter
	            if (actualDescriptor.get) {
	                Object.assign(proxyDescriptor, {
	                    get: function get() {
	                        return this.node[prop];
	                    }
	                });
	            }
	
	            Object.defineProperty(TargetClass.prototype, prop, proxyDescriptor);
	        };
	
	        for (var _iterator2 = props[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var _ret = _loop();
	
	            if (_ret === 'continue') continue;
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	}
	
	exports.epsilon = epsilon;
	exports.applyCSSLabel = applyCSSLabel;
	exports.getBodySize = getBodySize;
	exports.animationFrame = animationFrame;
	exports.makeLowercaseSetterAliases = makeLowercaseSetterAliases;
	exports.proxyMethods = proxyMethods;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */
	
	// Include a performance.now polyfill
	(function () {
	
		if ('performance' in window === false) {
			window.performance = {};
		}
	
		// IE 8
		Date.now = (Date.now || function () {
			return new Date().getTime();
		});
	
		if ('now' in window.performance === false) {
			var offset = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart
			                                                                                    : Date.now();
	
			window.performance.now = function () {
				return Date.now() - offset;
			};
		}
	
	})();
	
	var TWEEN = TWEEN || (function () {
	
		var _tweens = [];
	
		return {
	
			getAll: function () {
	
				return _tweens;
	
			},
	
			removeAll: function () {
	
				_tweens = [];
	
			},
	
			add: function (tween) {
	
				_tweens.push(tween);
	
			},
	
			remove: function (tween) {
	
				var i = _tweens.indexOf(tween);
	
				if (i !== -1) {
					_tweens.splice(i, 1);
				}
	
			},
	
			update: function (time) {
	
				if (_tweens.length === 0) {
					return false;
				}
	
				var i = 0;
	
				time = time !== undefined ? time : window.performance.now();
	
				while (i < _tweens.length) {
	
					if (_tweens[i].update(time)) {
						i++;
					} else {
						_tweens.splice(i, 1);
					}
	
				}
	
				return true;
	
			}
		};
	
	})();
	
	TWEEN.Tween = function (object) {
	
		var _object = object;
		var _valuesStart = {};
		var _valuesEnd = {};
		var _valuesStartRepeat = {};
		var _duration = 1000;
		var _repeat = 0;
		var _yoyo = false;
		var _isPlaying = false;
		var _reversed = false;
		var _delayTime = 0;
		var _startTime = null;
		var _easingFunction = TWEEN.Easing.Linear.None;
		var _interpolationFunction = TWEEN.Interpolation.Linear;
		var _chainedTweens = [];
		var _onStartCallback = null;
		var _onStartCallbackFired = false;
		var _onUpdateCallback = null;
		var _onCompleteCallback = null;
		var _onStopCallback = null;
	
		// Set all starting values present on the target object
		for (var field in object) {
			_valuesStart[field] = parseFloat(object[field], 10);
		}
	
		this.to = function (properties, duration) {
	
			if (duration !== undefined) {
				_duration = duration;
			}
	
			_valuesEnd = properties;
	
			return this;
	
		};
	
		this.start = function (time) {
	
			TWEEN.add(this);
	
			_isPlaying = true;
	
			_onStartCallbackFired = false;
	
			_startTime = time !== undefined ? time : window.performance.now();
			_startTime += _delayTime;
	
			for (var property in _valuesEnd) {
	
				// Check if an Array was provided as property value
				if (_valuesEnd[property] instanceof Array) {
	
					if (_valuesEnd[property].length === 0) {
						continue;
					}
	
					// Create a local copy of the Array with the start value at the front
					_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
	
				}
	
				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				_valuesStart[property] = _object[property];
	
				if ((_valuesStart[property] instanceof Array) === false) {
					_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}
	
				_valuesStartRepeat[property] = _valuesStart[property] || 0;
	
			}
	
			return this;
	
		};
	
		this.stop = function () {
	
			if (!_isPlaying) {
				return this;
			}
	
			TWEEN.remove(this);
			_isPlaying = false;
	
			if (_onStopCallback !== null) {
				_onStopCallback.call(_object);
			}
	
			this.stopChainedTweens();
			return this;
	
		};
	
		this.stopChainedTweens = function () {
	
			for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
				_chainedTweens[i].stop();
			}
	
		};
	
		this.delay = function (amount) {
	
			_delayTime = amount;
			return this;
	
		};
	
		this.repeat = function (times) {
	
			_repeat = times;
			return this;
	
		};
	
		this.yoyo = function (yoyo) {
	
			_yoyo = yoyo;
			return this;
	
		};
	
	
		this.easing = function (easing) {
	
			_easingFunction = easing;
			return this;
	
		};
	
		this.interpolation = function (interpolation) {
	
			_interpolationFunction = interpolation;
			return this;
	
		};
	
		this.chain = function () {
	
			_chainedTweens = arguments;
			return this;
	
		};
	
		this.onStart = function (callback) {
	
			_onStartCallback = callback;
			return this;
	
		};
	
		this.onUpdate = function (callback) {
	
			_onUpdateCallback = callback;
			return this;
	
		};
	
		this.onComplete = function (callback) {
	
			_onCompleteCallback = callback;
			return this;
	
		};
	
		this.onStop = function (callback) {
	
			_onStopCallback = callback;
			return this;
	
		};
	
		this.update = function (time) {
	
			var property;
			var elapsed;
			var value;
	
			if (time < _startTime) {
				return true;
			}
	
			if (_onStartCallbackFired === false) {
	
				if (_onStartCallback !== null) {
					_onStartCallback.call(_object);
				}
	
				_onStartCallbackFired = true;
	
			}
	
			elapsed = (time - _startTime) / _duration;
			elapsed = elapsed > 1 ? 1 : elapsed;
	
			value = _easingFunction(elapsed);
	
			for (property in _valuesEnd) {
	
				// Don't update properties that do not exist in the source object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				var start = _valuesStart[property] || 0;
				var end = _valuesEnd[property];
	
				if (end instanceof Array) {
	
					_object[property] = _interpolationFunction(end, value);
	
				} else {
	
					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {
	
						if (end.startsWith('+') || end.startsWith('-')) {
							end = start + parseFloat(end, 10);
						} else {
							end = parseFloat(end, 10);
						}
					}
	
					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						_object[property] = start + (end - start) * value;
					}
	
				}
	
			}
	
			if (_onUpdateCallback !== null) {
				_onUpdateCallback.call(_object, value);
			}
	
			if (elapsed === 1) {
	
				if (_repeat > 0) {
	
					if (isFinite(_repeat)) {
						_repeat--;
					}
	
					// Reassign starting values, restart by making startTime = now
					for (property in _valuesStartRepeat) {
	
						if (typeof (_valuesEnd[property]) === 'string') {
							_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
						}
	
						if (_yoyo) {
							var tmp = _valuesStartRepeat[property];
	
							_valuesStartRepeat[property] = _valuesEnd[property];
							_valuesEnd[property] = tmp;
						}
	
						_valuesStart[property] = _valuesStartRepeat[property];
	
					}
	
					if (_yoyo) {
						_reversed = !_reversed;
					}
	
					_startTime = time + _delayTime;
	
					return true;
	
				} else {
	
					if (_onCompleteCallback !== null) {
						_onCompleteCallback.call(_object);
					}
	
					for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						_chainedTweens[i].start(_startTime + _duration);
					}
	
					return false;
	
				}
	
			}
	
			return true;
	
		};
	
	};
	
	
	TWEEN.Easing = {
	
		Linear: {
	
			None: function (k) {
	
				return k;
	
			}
	
		},
	
		Quadratic: {
	
			In: function (k) {
	
				return k * k;
	
			},
	
			Out: function (k) {
	
				return k * (2 - k);
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}
	
				return - 0.5 * (--k * (k - 2) - 1);
	
			}
	
		},
	
		Cubic: {
	
			In: function (k) {
	
				return k * k * k;
	
			},
	
			Out: function (k) {
	
				return --k * k * k + 1;
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k + 2);
	
			}
	
		},
	
		Quartic: {
	
			In: function (k) {
	
				return k * k * k * k;
	
			},
	
			Out: function (k) {
	
				return 1 - (--k * k * k * k);
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}
	
				return - 0.5 * ((k -= 2) * k * k * k - 2);
	
			}
	
		},
	
		Quintic: {
	
			In: function (k) {
	
				return k * k * k * k * k;
	
			},
	
			Out: function (k) {
	
				return --k * k * k * k * k + 1;
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k * k * k + 2);
	
			}
	
		},
	
		Sinusoidal: {
	
			In: function (k) {
	
				return 1 - Math.cos(k * Math.PI / 2);
	
			},
	
			Out: function (k) {
	
				return Math.sin(k * Math.PI / 2);
	
			},
	
			InOut: function (k) {
	
				return 0.5 * (1 - Math.cos(Math.PI * k));
	
			}
	
		},
	
		Exponential: {
	
			In: function (k) {
	
				return k === 0 ? 0 : Math.pow(1024, k - 1);
	
			},
	
			Out: function (k) {
	
				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
	
			},
	
			InOut: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}
	
				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
	
			}
	
		},
	
		Circular: {
	
			In: function (k) {
	
				return 1 - Math.sqrt(1 - k * k);
	
			},
	
			Out: function (k) {
	
				return Math.sqrt(1 - (--k * k));
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}
	
				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	
			}
	
		},
	
		Elastic: {
	
			In: function (k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				return - (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	
			},
	
			Out: function (k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				return (a * Math.pow(2, - 10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
	
			},
	
			InOut: function (k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				if ((k *= 2) < 1) {
					return - 0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
				}
	
				return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
	
			}
	
		},
	
		Back: {
	
			In: function (k) {
	
				var s = 1.70158;
	
				return k * k * ((s + 1) * k - s);
	
			},
	
			Out: function (k) {
	
				var s = 1.70158;
	
				return --k * k * ((s + 1) * k + s) + 1;
	
			},
	
			InOut: function (k) {
	
				var s = 1.70158 * 1.525;
	
				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}
	
				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	
			}
	
		},
	
		Bounce: {
	
			In: function (k) {
	
				return 1 - TWEEN.Easing.Bounce.Out(1 - k);
	
			},
	
			Out: function (k) {
	
				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}
	
			},
	
			InOut: function (k) {
	
				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}
	
				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
	
			}
	
		}
	
	};
	
	TWEEN.Interpolation = {
	
		Linear: function (v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;
	
			if (k < 0) {
				return fn(v[0], v[1], f);
			}
	
			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}
	
			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
	
		},
	
		Bezier: function (v, k) {
	
			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;
	
			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}
	
			return b;
	
		},
	
		CatmullRom: function (v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;
	
			if (v[0] === v[m]) {
	
				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}
	
				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
	
			} else {
	
				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}
	
				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}
	
				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
	
			}
	
		},
	
		Utils: {
	
			Linear: function (p0, p1, t) {
	
				return (p1 - p0) * t + p0;
	
			},
	
			Bernstein: function (n, i) {
	
				var fc = TWEEN.Interpolation.Utils.Factorial;
	
				return fc(n) / fc(i) / fc(n - i);
	
			},
	
			Factorial: (function () {
	
				var a = [1];
	
				return function (n) {
	
					var s = 1;
	
					if (a[n]) {
						return a[n];
					}
	
					for (var i = n; i > 1; i--) {
						s *= i;
					}
	
					a[n] = s;
					return s;
	
				};
	
			})(),
	
			CatmullRom: function (p0, p1, p2, p3, t) {
	
				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;
	
				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
	
			}
	
		}
	
	};
	
	// UMD (Universal Module Definition)
	(function (root) {
	
		if (true) {
	
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return TWEEN;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
		} else if (typeof module !== 'undefined' && typeof exports === 'object') {
	
			// Node.js
			module.exports = TWEEN;
	
		} else if (root !== undefined) {
	
			// Global variable
			root.TWEEN = TWEEN;
	
		}
	
	})(this);


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(304);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(306);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _asyncToGenerator2 = __webpack_require__(374);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Await for this to run code after the DOM's sub-resources have been loaded
	 * (images, scripts, etc).
	 *
	 * @example
	 * ```js
	 * async function main() {
	 *     await windowLoaded()
	 *     console.log('Window loaded!')
	 * }
	 * main()
	 * ```
	 */
	
	exports.default = function () {
	    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (!(document.readyState !== 'complete')) {
	                            _context.next = 3;
	                            break;
	                        }
	
	                        _context.next = 3;
	                        return new _promise2.default(function (resolve) {
	                            window.addEventListener('load', resolve);
	                        });
	
	                    case 3:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    function windowLoaded() {
	        return _ref.apply(this, arguments);
	    }
	
	    return windowLoaded;
	}();
	//# sourceMappingURL=windowLoaded.js.map

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(305);


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(294);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(307), __esModule: true };

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(353);
	__webpack_require__(357);
	module.exports = __webpack_require__(317).Promise;

/***/ },
/* 308 */
/***/ function(module, exports) {



/***/ },
/* 309 */
[445, 310, 313],
/* 310 */
[446, 311, 312],
/* 311 */
38,
/* 312 */
35,
/* 313 */
[447, 314, 315, 330, 320, 331, 332, 333, 349, 351, 350],
/* 314 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(316)
	  , core      = __webpack_require__(317)
	  , ctx       = __webpack_require__(318)
	  , hide      = __webpack_require__(320)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 316 */
4,
/* 317 */
9,
/* 318 */
[425, 319],
/* 319 */
21,
/* 320 */
[419, 321, 329, 325],
/* 321 */
[420, 322, 324, 328, 325],
/* 322 */
[421, 323],
/* 323 */
13,
/* 324 */
[422, 325, 326, 327],
/* 325 */
[418, 326],
/* 326 */
7,
/* 327 */
[423, 323, 316],
/* 328 */
[424, 323],
/* 329 */
17,
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(320);

/***/ },
/* 331 */
5,
/* 332 */
130,
/* 333 */
[448, 334, 329, 349, 320, 350],
/* 334 */
[437, 322, 335, 347, 344, 327, 348],
/* 335 */
[438, 321, 322, 336, 325],
/* 336 */
[429, 337, 347],
/* 337 */
[430, 331, 338, 341, 344],
/* 338 */
[431, 339, 312],
/* 339 */
[432, 340],
/* 340 */
34,
/* 341 */
[433, 338, 342, 343],
/* 342 */
[434, 311],
/* 343 */
[435, 311],
/* 344 */
[436, 345, 346],
/* 345 */
[426, 316],
/* 346 */
19,
/* 347 */
41,
/* 348 */
[439, 316],
/* 349 */
[427, 321, 331, 350],
/* 350 */
[428, 345, 346, 316],
/* 351 */
[442, 331, 352, 344],
/* 352 */
[441, 312],
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(354);
	var global        = __webpack_require__(316)
	  , hide          = __webpack_require__(320)
	  , Iterators     = __webpack_require__(332)
	  , TO_STRING_TAG = __webpack_require__(350)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 354 */
[453, 355, 356, 332, 338, 313],
/* 355 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 356 */
195,
/* 357 */
[454, 314, 316, 318, 358, 315, 323, 322, 319, 359, 360, 364, 367, 368, 370, 350, 371, 349, 372, 317, 373],
/* 358 */
[444, 340, 350],
/* 359 */
90,
/* 360 */
[455, 318, 361, 362, 322, 342, 363],
/* 361 */
[449, 322],
/* 362 */
[450, 332, 350],
/* 363 */
[451, 358, 350, 332, 317],
/* 364 */
[443, 323, 322, 318, 365],
/* 365 */
[440, 366, 329, 338, 328, 331, 324, 325],
/* 366 */
44,
/* 367 */
[456, 322, 319, 350],
/* 368 */
[457, 318, 369, 348, 327, 316, 340],
/* 369 */
78,
/* 370 */
[458, 316, 368, 340],
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(320);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(316)
	  , core        = __webpack_require__(317)
	  , dP          = __webpack_require__(321)
	  , DESCRIPTORS = __webpack_require__(325)
	  , SPECIES     = __webpack_require__(350)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 373 */
[452, 350],
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(306);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
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
	          return _promise2.default.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tween = __webpack_require__(302);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    // Linear
	    Linear: _tween2.default.Easing.Linear.None,
	
	    // Exponential
	    ExponentialIn: _tween2.default.Easing.Exponential.In,
	    ExponentialOut: _tween2.default.Easing.Exponential.InOut,
	    ExponentialInOut: _tween2.default.Easing.Exponential.InOut,
	
	    // Quadratic
	    QuadraticIn: _tween2.default.Easing.Quadratic.In,
	    QuadraticOut: _tween2.default.Easing.Quadratic.InOut,
	    QuadraticInOut: _tween2.default.Easing.Quadratic.InOut,
	
	    // Cubic
	    CubicIn: _tween2.default.Easing.Cubic.In,
	    CubicOut: _tween2.default.Easing.Cubic.InOut,
	    CubicInOut: _tween2.default.Easing.Cubic.InOut,
	
	    // Quartic
	    QuarticIn: _tween2.default.Easing.Quartic.In,
	    QuarticOut: _tween2.default.Easing.Quartic.InOut,
	    QuarticInOut: _tween2.default.Easing.Quartic.InOut,
	
	    // Quintic
	    QuinticIn: _tween2.default.Easing.Quintic.In,
	    QuinticOut: _tween2.default.Easing.Quintic.InOut,
	    QuinticInOut: _tween2.default.Easing.Quintic.InOut,
	
	    // Sinusoidal
	    SinusoidalIn: _tween2.default.Easing.Sinusoidal.In,
	    SinusoidalOut: _tween2.default.Easing.Sinusoidal.InOut,
	    SinusoidalInOut: _tween2.default.Easing.Sinusoidal.InOut,
	
	    // Circular
	    CircularIn: _tween2.default.Easing.Circular.In,
	    CircularOut: _tween2.default.Easing.Circular.InOut,
	    CircularInOut: _tween2.default.Easing.Circular.InOut,
	
	    // Elastic
	    ElasticIn: _tween2.default.Easing.Elastic.In,
	    ElasticOut: _tween2.default.Easing.Elastic.InOut,
	    ElasticInOut: _tween2.default.Easing.Elastic.InOut,
	
	    // Back
	    BackIn: _tween2.default.Easing.Back.In,
	    BackOut: _tween2.default.Easing.Back.InOut,
	    BackInOut: _tween2.default.Easing.Back.InOut,
	
	    // Bounce
	    BounceIn: _tween2.default.Easing.Bounce.In,
	    BounceOut: _tween2.default.Easing.Bounce.InOut,
	    BounceInOut: _tween2.default.Easing.Bounce.InOut
	};

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(377);
	
	var _Motor = __webpack_require__(378);
	
	var _Motor2 = _interopRequireDefault(_Motor);
	
	var _node = __webpack_require__(380);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	console.log(' -- Node module ?????!');
	
	/**
	 * Manages a DOM element. Exposes a set of recommended APIs for working with
	 * DOM efficiently.
	 */
	
	var ElManager = function () {
	    function ElManager(element) {
	        _classCallCheck(this, ElManager);
	
	        this.element = element;
	    }
	
	    /**
	     * @param {Array.string} classes An array of class names to add to the
	     * managed element.
	     *
	     * Note: updating class names with `el.classList.add()` won't thrash the
	     * layout. See: http://www.html5rocks.com/en/tutorials/speed/animations
	     */
	
	
	    _createClass(ElManager, [{
	        key: 'setClasses',
	        value: function setClasses() {
	            var _element$classList;
	
	            if (arguments.length) (_element$classList = this.element.classList).add.apply(_element$classList, arguments);
	            return this;
	        }
	    }]);
	
	    return ElManager;
	}();
	
	var XYZValues = function () {
	    function XYZValues() {
	        var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var z = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	        _classCallCheck(this, XYZValues);
	
	        this._x = x;
	        this._y = y;
	        this._z = z;
	    }
	
	    // override this on the instance to run logic on a property change.
	
	
	    _createClass(XYZValues, [{
	        key: 'onChanged',
	        value: function onChanged() {}
	    }, {
	        key: 'x',
	        set: function set(value) {
	            this._x = value;
	            this.onChanged();
	        },
	        get: function get() {
	            return this._x;
	        }
	    }, {
	        key: 'y',
	        set: function set(value) {
	            this._y = value;
	            this.onChanged();
	        },
	        get: function get() {
	            return this._y;
	        }
	    }, {
	        key: 'z',
	        set: function set(value) {
	            this._z = value;
	            this.onChanged();
	        },
	        get: function get() {
	            return this._z;
	        }
	    }]);
	
	    return XYZValues;
	}();
	
	var Node = function () {
	
	    /**
	     * @constructor
	     *
	     * @param {Object} initialProperties Properties object -- see example
	     *
	     * @example
	     * var node = new Node({
	     * })
	     */
	
	    function Node() {
	        var _this = this;
	
	        var initialProperties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var _motorHtmlNode = arguments[1];
	
	        _classCallCheck(this, Node);
	
	        // The presence of the _motorHtmlNode signifies that the HTML interface
	        // is being used, otherwise the imperative interface here is being
	        // used.
	
	        // DOM representation of Node
	        // TODO: remove this and handle it in the "DOMRenderer"
	        this._el = new ElManager(_motorHtmlNode || this._makeElement());
	        this._el.element._associateImperativeNode(this);
	
	        this._mounted = false;
	
	        this._parent = null; // default to no parent.
	        this._children = [];
	        this._scene = null; // stores a ref to this Node's root Scene.
	
	        // Property Cache, with default values
	        this._properties = {
	
	            // XXX: remove these in favor of storing them directly in the
	            // DOMMatrix?
	            position: new XYZValues(0, 0, 0),
	            rotation: new XYZValues(0, 0, 0),
	
	            // TODO: handle scale
	            scale: new XYZValues(1, 1, 1),
	
	            // TODO, handle origin, needs a setter/getter pair.
	            origin: new XYZValues(0.5, 0.5, 0.5),
	
	            align: new XYZValues(0, 0, 0),
	            mountPoint: new XYZValues(0, 0, 0),
	            sizeMode: new XYZValues('absolute', 'absolute', 'absolute'),
	            absoluteSize: new XYZValues(0, 0, 0),
	            proportionalSize: new XYZValues(1, 1, 1),
	
	            transform: new window.DOMMatrix(),
	
	            style: {
	                opacity: 1
	            }
	        };
	
	        var self = this;
	        var propertyChange = function propertyChange() {
	            self._needsToBeRendered();
	        };
	        this._properties.position.onChanged = propertyChange;
	        this._properties.rotation.onChanged = propertyChange;
	        this._properties.scale.onChanged = propertyChange;
	        this._properties.origin.onChanged = propertyChange;
	        this._properties.align.onChanged = propertyChange;
	        this._properties.mountPoint.onChanged = propertyChange;
	        this._properties.sizeMode.onChanged = propertyChange;
	        this._properties.absoluteSize.onChanged = propertyChange;
	        this._properties.proportionalSize.onChanged = propertyChange;
	
	        this.properties = initialProperties;
	
	        // an internal promise that resolves when this Node finally belongs to
	        // a scene graph with a root Scene. The resolved value is the root
	        // Scene.
	        //
	        // TODO: Reset this._scenePromise when the node is removed from it's
	        // scene, or instead make _scenePromise a function that returns a
	        // promise waiting for the next scene that the node will belong to, and
	        // returns the existing promise if currently attached on a scene. For
	        // now, this only works for the first scene that this Node is attached
	        // to (which is not ultimately what we want).
	        this._resolveScenePromise = null;
	        this._scenePromise = new Promise(function (r) {
	            return _this._resolveScenePromise = r;
	        });
	
	        // Provide the user a promise that resolves when this Node is attached
	        // to a tree and when this Node's eventual root Scene is mounted.
	        // Users can await this in order to do something after this Node is
	        // mounted in a scene graph that is live in the DOM.
	        // _resolveMountPromise holds the current _mountPromise's resolve
	        // method.
	        //
	        // TODO: Maybe we should rename this to `.ready`, matching with the
	        // HTML API. See motor-html/node createdCallback.
	        // TODO: We need to reset this when a Node is removed, as it will be
	        // mounted again if it is ever added back into a scene graph. For now,
	        // this only works on this Node's first mount.
	        this._resolveMountPromise = null;
	        this._mountPromise = new Promise(function (r) {
	            return _this._resolveMountPromise = r;
	        });
	
	        this._waitForSceneThenResolveMountPromise();
	
	        this._init();
	    }
	
	    /**
	     * @private
	     */
	
	
	    _createClass(Node, [{
	        key: '_init',
	        value: function _init() {
	            this._needsToBeRendered();
	        }
	
	        /**
	         * @private
	         */
	
	    }, {
	        key: '_makeElement',
	        value: function _makeElement() {
	            return new _node2.default();
	        }
	
	        /**
	         * @private
	         * Get a promise for the node's eventual scene.
	         */
	
	    }, {
	        key: '_getScenePromise',
	        value: function _getScenePromise() {
	            var _this2 = this;
	
	            if (!this._scene && !this._scenePromise) this._scenePromise = new Promise(function (r) {
	                return _this2._resolveScenePromise = r;
	            });
	
	            return this._scenePromise;
	        }
	
	        /**
	         * @private
	         */
	
	    }, {
	        key: '_waitForSceneThenResolveMountPromise',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!(this.constructor.name == 'Node')) {
	                                    _context.next = 6;
	                                    break;
	                                }
	
	                                _context.next = 3;
	                                return this._getScenePromise();
	
	                            case 3:
	                                _context.next = 5;
	                                return this._scene.mountPromise;
	
	                            case 5:
	
	                                // TODO TODO: also wait for this._mounted so this.element is actually
	                                // mounted in the DOM.
	                                this._resolveMountPromise(true);
	
	                            case 6:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function _waitForSceneThenResolveMountPromise() {
	                return _ref.apply(this, arguments);
	            }
	
	            return _waitForSceneThenResolveMountPromise;
	        }()
	
	        /**
	         * @readonly
	         *
	         * TODO: needs to be overriden for Scene, because Scene mounts/unmounts
	         * differently.
	         */
	
	    }, {
	        key: '_needsToBeRendered',
	
	        // no need for a properties getter.
	
	        /*
	         * Trigger a re-render for this node (wait until mounted if not nounted
	         * yet).
	         *
	         * TODO: We need to render one time each time mountPromise is resolved, not
	         * just this one time as currently in constructor's call to this._init.
	         *
	         * XXX If a setter is called over and over in a render task before the node
	         * is mounted, then each tick will cause an await this.mountPromise, and
	         * eventually all the bodies will fire all at once. I don't think we want
	         * this to happen.
	         */
	        value: function () {
	            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                if (this._mounted) {
	                                    _context2.next = 3;
	                                    break;
	                                }
	
	                                _context2.next = 3;
	                                return this.mountPromise;
	
	                            case 3:
	                                _Motor2.default._setNodeToBeRendered(this);
	                                if (!_Motor2.default._inFrame) _Motor2.default._startAnimationLoop();
	
	                            case 5:
	                            case 'end':
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	
	            function _needsToBeRendered() {
	                return _ref2.apply(this, arguments);
	            }
	
	            return _needsToBeRendered;
	        }()
	
	        /**
	         * Add a child node to this Node.
	         *
	         * @param {Node} childNode The child node to add.
	         */
	
	    }, {
	        key: 'addChild',
	        value: function addChild(childNode) {
	            if (!(childNode instanceof Node)) throw new Error('Node.addChild expects the childNode argument to be a Node instance.');
	
	            // We cannot add Scenes to Nodes, for now.
	            //
	            // TODO: If someone extends Scene, constructor.name is different. We
	            // need to catch those cases too, without using instanceof Scene in
	            // order to avoid a circular dependency in this module.
	            // Idea: maybe we can traverse the prototype chain looking for each
	            // constructor.name.
	            if (childNode.constructor.name == 'Scene') {
	                throw new Error('\n                A Scene cannot currently be added to another Node.\n                This may change in the future. For now, just mount\n                a new Scene onto an HTMLElement (which can be the\n                element held by a Node).\n            ');
	            }
	
	            // Do nothing if the child Node is already added to this Node.
	            //
	            // After adding a Node to a parent using this imperative API, the
	            // MotorHTMLNode ends up calling addChild on this Node's parent a second time
	            // in the element's attachedCallback, but the code stops at this line (which is
	            // good).
	            // TODO: prevent the second call altogether.
	            if (childNode._parent === this) return;
	
	            if (childNode._parent) childNode._parent.removeChild(childNode);
	
	            // Add parent
	            childNode._parent = this;
	
	            // Add to children array
	            this._children.push(childNode);
	
	            // Pass this parent node's Scene reference (if any, checking this cache
	            // first) to the new child and the child's children.
	            //
	            // NOTE: Order is important: this needs to happen after previous stuff
	            // in this method, so that the childNode.scene getter works.
	            if (childNode._scene || childNode.scene) {
	                childNode._resolveScenePromise(childNode._scene);
	                childNode._giveSceneRefToChildren();
	            }
	
	            this._mountChildElement(childNode);
	
	            return this;
	        }
	
	        /**
	         * @private
	         * This method to be called only when this Node has this.scene.
	         * Resolves the _scenePromise for all children of the tree of this Node.
	         */
	
	    }, {
	        key: '_giveSceneRefToChildren',
	        value: function _giveSceneRefToChildren() {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var childNode = _step.value;
	
	                    childNode._scene = this._scene;
	                    childNode._resolveScenePromise(childNode._scene);
	                    childNode._giveSceneRefToChildren();
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	
	        /**
	         * Add all the child nodes in the given array to this node.
	         *
	         * @param {Array.Node} nodes The nodes to add.
	         */
	
	    }, {
	        key: 'addChildren',
	        value: function addChildren(nodes) {
	            var _this3 = this;
	
	            nodes.forEach(function (node) {
	                return _this3.addChild(node);
	            });
	            return this;
	        }
	
	        /**
	         * Remove a child node from this node. Silently fails if the node doesn't
	         * exist, etc.
	         *
	         * XXX Should this be silent? Or should we throw?
	         *
	         * @param {Node} childNode The node to remove.
	         */
	
	    }, {
	        key: 'removeChild',
	        value: function removeChild(childNode) {
	            var thisHasChild = this._children.indexOf(childNode) >= 0;
	
	            if (childNode instanceof Node && thisHasChild) {
	                childNode._parent = null;
	                childNode._scene = null; // not part of a scene anymore.
	                childNode._scenePromise = null; // reset so that it can be awaited again for when the node is re-mounted.
	                childNode._mounted = false;
	                childNode._mountPromise = null; // reset so that it can be awaited again for when the node is re-mounted.
	
	                // Remove from children array
	                this._children.splice(this._children.indexOf(childNode), 1);
	
	                this._detachElement(childNode);
	            }
	
	            return this;
	        }
	
	        /**
	         * Remove all the child nodes in the given array from this node.
	         *
	         * @param {Array.Node} nodes The nodes to remove.
	         */
	
	    }, {
	        key: 'removeChildren',
	        value: function removeChildren(nodes) {
	            var _this4 = this;
	
	            nodes.forEach(function (node) {
	                return _this4.removeChild(node);
	            });
	            return this;
	        }
	
	        /**
	         * @readonly
	         * @return {number} How many children this Node has.
	         */
	
	    }, {
	        key: '_render',
	        value: function _render(timestamp) {
	            // applies the transform matrix to the element's style property.
	            // TODO: We shouldn't need to re-calculate the whole matrix every render?
	            this._setMatrix3d(this._calculateMatrix());
	
	            // TODO move to DOMRenderer
	            this._applySize();
	            this._applyStyles();
	
	            //this._renderChildren()
	
	            return this;
	        }
	    }, {
	        key: '_mountChildElement',
	        value: function _mountChildElement(childNode) {
	            // If Node's HTML element isn't mounted.. mount it.
	            // TODO move to DOMRenderer
	            if (!childNode._mounted) {
	                if (childNode._parent) {
	
	                    // TODO: camera
	                    // Mount to parent if parent is a Node
	                    // if (childNode._parent instanceof Node) {
	                    if (childNode._el.element.parentNode !== childNode._parent._el.element) childNode._parent._el.element.appendChild(childNode._el.element);
	                    childNode._mounted = true;
	
	                    // Mount to camera if top level Node
	                    // } else {
	                    //   //scene.camera.element.appendChild(childNode._el);
	                    //   childNode._mounted = true;
	                    // }
	                }
	            }
	        }
	    }, {
	        key: '_detachElement',
	        value: function _detachElement(childNode) {
	            // TODO: move this out, into DOMRenderer
	
	            // XXX Only remove the childNode _el if it has an actual parent
	            if (childNode._el.element.parentNode) childNode._el.element.parentNode.removeChild(childNode._el.element);
	        }
	    }, {
	        key: '_renderChildren',
	        value: function _renderChildren() {
	            // Render Children
	            // TODO: move this out, into DOMRenderer/WebGLRenderer:
	            // We don't need to render children explicitly (recursing through the
	            // tree) because the DOMRenderer or WebGLRenderer will know what to do
	            // with nodes in the scene graph.
	            // For example, in the case of the DOMRenderer, we only need to update
	            // this Node's transform matrix, then the renderer figures out the rest
	            // (i.e. the browser uses it's nested-DOM matrix caching). DOMRenderer
	            // or WebGLRenderer can decide how to most efficiently update child
	            // transforms and how to update the scene. Node._render here will be
	            // just a way of updating the state of this Node only.
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this._children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var child = _step2.value;
	
	                    child._render();
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	
	        /**
	         * [applySize description]
	         *
	         * @method
	         * @private
	         * @memberOf Node
	         */
	
	    }, {
	        key: '_applySize',
	        value: function _applySize() {
	            var mode = this._properties.sizeMode;
	            var absolute = this._properties.absoluteSize;
	            var proportional = this._properties.proportionalSize;
	
	            if (mode.x === 'absolute') this._applyStyle('width', absolute.x + 'px');else if (mode.x === 'proportional') this._applyStyle('width', proportional.x * 100 + '%');
	
	            if (mode.y === 'absolute') this._applyStyle('height', absolute.y + 'px');else if (mode.y === 'proportional') this._applyStyle('height', proportional.y * 100 + '%');
	
	            //TODO z axis
	            //if (mode.z === 'absolute')
	            //this._applyStyle('height', `${absolute.z}px`);
	            //else if (mode.z === 'proportional')
	            //this._applyStyle('height', `${proportional.z * 100}%`);
	        }
	
	        /**
	         * [applyTransform description]
	         *
	         * @method
	         * @private
	         * @memberOf Node
	         *
	         * TODO: instead of calculating the whole matrix here all at once (which
	         * gets called each _render()), apply rotation, translation, etc, directly
	         * to the matrix individually when the user gives us those values. It might be
	         * more performant. It will also let the user apply x,y,z rotation in their
	         * order of choice instead of always x,y,z order as we do here.
	         */
	
	    }, {
	        key: '_calculateMatrix',
	        value: function _calculateMatrix() {
	            var matrix = new window.DOMMatrix();
	
	            var alignAdjustment = [0, 0, 0];
	            if (this._parent) {
	                // The root Scene doesn't have a parent, for example.
	                var parentSize = this._parent.actualSize;
	                alignAdjustment[0] = parentSize.x * this._properties.align.x;
	                alignAdjustment[1] = parentSize.y * this._properties.align.y;
	                alignAdjustment[2] = parentSize.z * this._properties.align.z;
	            }
	
	            var mountPointAdjustment = [0, 0, 0];
	            var thisSize = this.actualSize;
	            mountPointAdjustment[0] = thisSize.x * this._properties.mountPoint.x;
	            mountPointAdjustment[1] = thisSize.y * this._properties.mountPoint.y;
	            mountPointAdjustment[2] = thisSize.z * this._properties.mountPoint.z;
	
	            var appliedPosition = [];
	            appliedPosition[0] = this._properties.position.x + alignAdjustment[0] - mountPointAdjustment[0];
	            appliedPosition[1] = this._properties.position.y + alignAdjustment[1] - mountPointAdjustment[1];
	            appliedPosition[2] = this._properties.position.z + alignAdjustment[2] - mountPointAdjustment[2];
	
	            matrix.translateSelf(appliedPosition[0], appliedPosition[1], appliedPosition[2]);
	
	            // TODO: move by negative origin before rotating.
	            // XXX Should we calculate origin here, or should we leave that to the
	            // DOM renderer (in the style property)? WebGL renderer will need
	            // manual calculations. Maybe we don't do it here, and delegate it to
	            // DOM and WebGL renderers.
	
	            // apply each axis rotation, in the x,y,z order.
	            // XXX: Does order in which axis rotations are applied matter? If so,
	            // which order is best? Maybe we let the user decide (with our
	            // recommendation)?
	            var rotation = this._properties.rotation;
	            matrix.rotateAxisAngleSelf(1, 0, 0, rotation.x);
	            matrix.rotateAxisAngleSelf(0, 1, 0, rotation.y);
	            matrix.rotateAxisAngleSelf(0, 0, 1, rotation.z);
	
	            // TODO: move by positive origin after rotating.
	
	            return matrix;
	        }
	
	        /**
	         * Apply the DOMMatrix value to the style of this Node's element.
	         *
	         * @private
	         *
	         * TODO We'll eventually apply the DOMMatrix directly instead of
	         * converting to a string here.
	         */
	
	    }, {
	        key: '_applyTransform',
	        value: function _applyTransform() {
	            var matrix = this._properties.transform;
	
	            // XXX: is this in the right order? UPDATE: It is.
	            // TODO: Apply DOMMatrix directly to the Element once browser APIs
	            // support it. Maybe we can polyfill this?
	            var cssMatrixString = 'matrix3d(\n            ' + matrix.m11 + ',\n            ' + matrix.m12 + ',\n            ' + matrix.m13 + ',\n            ' + matrix.m14 + ',\n            ' + matrix.m21 + ',\n            ' + matrix.m22 + ',\n            ' + matrix.m23 + ',\n            ' + matrix.m24 + ',\n            ' + matrix.m31 + ',\n            ' + matrix.m32 + ',\n            ' + matrix.m33 + ',\n            ' + matrix.m34 + ',\n            ' + matrix.m41 + ',\n            ' + matrix.m42 + ',\n            ' + matrix.m43 + ',\n            ' + matrix.m44 + '\n        )';
	
	            this._applyStyle('transform', cssMatrixString);
	        }
	
	        /**
	         * [applyStyle description]
	         *
	         * @method
	         * @private
	         * @memberOf Node
	         * @param  {String} property [description]
	         * @param  {String} value    [description]
	         */
	
	    }, {
	        key: '_applyStyles',
	        value: function _applyStyles() {
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = Object.keys(this._properties.style)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var key = _step3.value;
	
	                    this._applyStyle(key, this._properties.style[key]);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        }
	
	        /**
	         * Apply a style property to this node's element.
	         *
	         * TODO: this will be moved into DOMRenderer.
	         *
	         * @private
	         * @param  {string} property The CSS property we will a apply.
	         * @param  {string} value    The value the CSS property wil have.
	         */
	
	    }, {
	        key: '_applyStyle',
	        value: function _applyStyle(property, value) {
	            this._el.element.style[property] = value;
	        }
	
	        /**
	         * [setMatrix3d description]
	         *
	         * @private
	         * @param {DOMMatrix} matrix A DOMMatrix instance to set as this node's
	         * transform. See "W3C Geometry Interfaces".
	         */
	
	    }, {
	        key: '_setMatrix3d',
	        value: function _setMatrix3d(matrix) {
	            this._properties.transform = matrix;
	            // ^ TODO PERFORMANCE: What's faster? Setting a new DOMMatrix (as we do here
	            // currently, the result of _calculateMatrix) or applying all
	            // transform values to the existing DOMMatrix?
	
	            this._applyTransform();
	        }
	    }, {
	        key: 'mountPromise',
	        get: function get() {
	            var _this5 = this;
	
	            if (!this._mounted && !this._mountPromise) {
	                this._mountPromise = new Promise(function (r) {
	                    return _this5._resolveMountPromise = r;
	                });
	                this._waitForSceneThenResolveMountPromise();
	            }
	
	            return this._mountPromise;
	        }
	
	        /**
	         * this._parent is protected (node's can access other node._parent).
	         * The user should use the addChild methods, which automatically handles
	         * setting a parent.
	         *
	         * @readonly
	         */
	
	    }, {
	        key: 'parent',
	        get: function get() {
	            return this._parent;
	        }
	
	        /**
	         * @readonly
	         */
	
	    }, {
	        key: 'children',
	        get: function get() {
	            // return a new array, so that the user modifying it doesn't affect
	            // this node's actual children.
	            return [].concat(_toConsumableArray(this._children));
	        }
	
	        /**
	         * @readonly
	         */
	
	    }, {
	        key: 'element',
	        get: function get() {
	            return this._el.element;
	        }
	
	        /**
	         * Get the Scene that this Node is in, null if no Scene. This is recursive
	         * at first, then cached.
	         *
	         * This traverses up the scene graph tree starting at this Node and finds
	         * the root Scene, if any. It caches the value for performance. If this
	         * Node is removed from a parent node with parent.removeChild(), then the
	         * cache is invalidated so the traversal can happen again when this Node is
	         * eventually added to a new tree. This way, if the scene is cached on a
	         * parent Node that we're adding this Node to then we can get that cached
	         * value instead of traversing the tree.
	         *
	         * @readonly
	         */
	
	    }, {
	        key: 'scene',
	        get: function get() {
	            // NOTE: this._scene is initally null, created in the constructor.
	
	            // if already cached, return it.
	            if (this._scene) return this._scene;
	
	            // if the parent node already has a ref to the scene, use that.
	            if (this._parent && this._parent._scene) {
	                this._scene = this._parent._scene;
	
	                return this._scene;
	            }
	
	            // otherwise call the scene getter on the parent, which triggers
	            // traversal up the scene graph in order to find the root scene (null
	            // if none).
	            else {
	                    if (this.constructor.name == 'Scene') this._scene = this;else if (this._parent) this._scene = this._parent.scene;
	
	                    return this._scene;
	                }
	        }
	
	        /**
	         * Set the position of the Node.
	         *
	         * @param {Object} newValue
	         * @param {number} [newValue.x] The x-axis position to apply.
	         * @param {number} [newValue.y] The y-axis position to apply.
	         * @param {number} [newValue.z] The z-axis position to apply.
	         */
	
	    }, {
	        key: 'position',
	        set: function set(newValue) {
	            if (!(newValue instanceof Object)) throw new TypeError('Invalid value for Node#position.');
	
	            if (typeof newValue.x != 'undefined') this._properties.position._x = newValue.x;
	            if (typeof newValue.y != 'undefined') this._properties.position._y = newValue.y;
	            if (typeof newValue.z != 'undefined') this._properties.position._z = newValue.z;
	
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.position;
	        }
	
	        /**
	         * @param {Object} newValue
	         * @param {number} [newValue.x] The x-axis rotation to apply.
	         * @param {number} [newValue.y] The y-axis rotation to apply.
	         * @param {number} [newValue.z] The z-axis rotation to apply.
	         *
	         * XXX: We should we also provide a setRotationAxis method to rotate about
	         * a particular axis? Or, maybe if a fourth `w` property is specified then
	         * x, y, and z can define a rotation axis and w be the angle.
	         */
	
	    }, {
	        key: 'rotation',
	        set: function set(newValue) {
	            if (!(newValue instanceof Object)) throw new TypeError('Invalid value for Node#rotation.');
	
	            if (typeof newValue.x != 'undefined') this._properties.rotation._x = newValue.x;
	            if (typeof newValue.y != 'undefined') this._properties.rotation._y = newValue.y;
	            if (typeof newValue.z != 'undefined') this._properties.rotation._z = newValue.z;
	
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.rotation;
	        }
	
	        /**
	         * @param {Object} newValue
	         * @param {number} [newValue.x] The x-axis scale to apply.
	         * @param {number} [newValue.y] The y-axis scale to apply.
	         * @param {number} [newValue.z] The z-axis scale to apply.
	         *
	         * TODO: scale is not handled yet.
	         */
	
	    }, {
	        key: 'scale',
	        set: function set(newValue) {
	            if (!(newValue instanceof Object)) throw new TypeError('Invalid value for Node#scale.');
	
	            if (typeof newValue.x != 'undefined') this._properties.scale._x = newValue.x;
	            if (typeof newValue.y != 'undefined') this._properties.scale._y = newValue.y;
	            if (typeof newValue.z != 'undefined') this._properties.scale._z = newValue.z;
	
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.scale;
	        }
	
	        /**
	         * Set this Node's opacity.
	         *
	         * @param {number} opacity A floating point number between 0 and 1
	         * (inclusive). 0 is fully transparent, 1 is fully opaque.
	         */
	
	    }, {
	        key: 'opacity',
	        set: function set(opacity) {
	            if (!isRealNumber(opacity)) throw new Error('Expected a real number for Node#opacity.');
	            this._properties.style.opacity = opacity;
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.style.opacity;
	        }
	
	        /**
	         * Set the size mode for each axis. Possible size modes are "absolute" and "proportional".
	         *
	         * @param {Object} newValue
	         * @param {number} [newValue.x] The x-axis sizeMode to apply.
	         * @param {number} [newValue.y] The y-axis sizeMode to apply.
	         * @param {number} [newValue.z] The z-axis sizeMode to apply.
	         */
	
	    }, {
	        key: 'sizeMode',
	        set: function set(newValue) {
	            if (!(newValue instanceof Object)) throw new TypeError('Invalid value for Node#sizeMode.');
	
	            if (typeof newValue.x != 'undefined') this._properties.sizeMode._x = newValue.x;
	            if (typeof newValue.y != 'undefined') this._properties.sizeMode._y = newValue.y;
	            if (typeof newValue.z != 'undefined') this._properties.sizeMode._z = newValue.z;
	
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.sizeMode;
	        }
	
	        /**
	         * @param {Object} newValue
	         * @param {number} [newValue.x] The x-axis absoluteSize to apply.
	         * @param {number} [newValue.y] The y-axis absoluteSize to apply.
	         * @param {number} [newValue.z] The z-axis absoluteSize to apply.
	         */
	
	    }, {
	        key: 'absoluteSize',
	        set: function set(newValue) {
	            if (!(newValue instanceof Object)) throw new TypeError('Invalid value for Node#absoluteSize.');
	
	            if (typeof newValue.x != 'undefined') this._properties.absoluteSize._x = newValue.x;
	            if (typeof newValue.y != 'undefined') this._properties.absoluteSize._y = newValue.y;
	            if (typeof newValue.z != 'undefined') this._properties.absoluteSize._z = newValue.z;
	
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.absoluteSize;
	        }
	
	        /**
	         * Get the actual size of the Node. This can be useful when size is
	         * proportional, as the actual size of the Node depends on querying the DOM
	         * for the size of the Node's DOM element relative to it's parent.
	         *
	         * @readonly
	         *
	         * @return {Array.number} An Oject with x, y, and z properties, each
	         * property representing the computed size of the x, y, and z axes
	         * respectively.
	         *
	         * TODO: traverse up the tree to find parent size when this Node's size is
	         * proportional?
	         */
	
	    }, {
	        key: 'actualSize',
	        get: function get() {
	            var actualSize = {};
	
	            if (this._properties.sizeMode.x === 'absolute') {
	                actualSize.x = this._properties.absoluteSize.x;
	            } else if (this._properties.sizeMode.x === 'proportional') {
	                // TODO: avoid getComputedStyle as it causes a layout thrash.
	                actualSize.x = parseInt(getComputedStyle(this._el.element).getPropertyValue('width'));
	            }
	
	            if (this._properties.sizeMode.y === 'absolute') {
	                actualSize.y = this._properties.absoluteSize.y;
	            } else if (this._properties.sizeMode.y === 'proportional') {
	                actualSize.y = parseInt(getComputedStyle(this._el.element).getPropertyValue('height'));
	            }
	
	            if (this._properties.sizeMode.z === 'absolute') {
	                actualSize.z = this._properties.absoluteSize.z;
	            } else if (this._properties.sizeMode.z === 'proportional') {
	                //actualSize.z = parseInt(getComputedStyle(this._el.element).getPropertyValue('height'))
	                actualSize.z = 0; // TODO
	            }
	
	            return actualSize;
	        }
	
	        /**
	         * Set the size of a Node proportional to the size of it's parent Node. The
	         * values are a real number between 0 and 1 inclusive where 0 means 0% of
	         * the parent size and 1 means 100% of the parent size.
	         *
	         * @param {Object} newValue
	         * @param {number} [newValue.x] The x-axis proportionalSize to apply.
	         * @param {number} [newValue.y] The y-axis proportionalSize to apply.
	         * @param {number} [newValue.z] The z-axis proportionalSize to apply.
	         */
	
	    }, {
	        key: 'proportionalSize',
	        set: function set(newValue) {
	            if (!(newValue instanceof Object)) throw new TypeError('Invalid value for Node#proportionalSize.');
	
	            if (typeof newValue.x != 'undefined') this._properties.proportionalSize._x = newValue.x;
	            if (typeof newValue.y != 'undefined') this._properties.proportionalSize._y = newValue.y;
	            if (typeof newValue.z != 'undefined') this._properties.proportionalSize._z = newValue.z;
	
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.proportionalSize;
	        }
	
	        /**
	         * Set the alignment of the Node. This determines at which point in this
	         * Node's parent that this Node is mounted.
	         *
	         * @param {Object} newValue
	         * @param {number} [newValue.x] The x-axis align to apply.
	         * @param {number} [newValue.y] The y-axis align to apply.
	         * @param {number} [newValue.z] The z-axis align to apply.
	         */
	
	    }, {
	        key: 'align',
	        set: function set(newValue) {
	            if (!(newValue instanceof Object)) throw new TypeError('Invalid value for Node#align.');
	
	            if (typeof newValue.x != 'undefined') this._properties.align._x = newValue.x;
	            if (typeof newValue.y != 'undefined') this._properties.align._y = newValue.y;
	            if (typeof newValue.z != 'undefined') this._properties.align._z = newValue.z;
	
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.align;
	        }
	
	        /**
	         * Set the mount point of the Node. TODO: put "mount point" into words.
	         *
	         * XXX possibly rename to "anchor" to avoid confusion with Scene.mount?
	         * Could also segway to anchors system like Qt QML.
	         *
	         * @param {Object} newValue
	         * @param {number} [newValue.x] The x-axis mountPoint to apply.
	         * @param {number} [newValue.y] The y-axis mountPoint to apply.
	         * @param {number} [newValue.z] The z-axis mountPoint to apply.
	         */
	
	    }, {
	        key: 'mountPoint',
	        set: function set(newValue) {
	            if (!(newValue instanceof Object)) throw new TypeError('Invalid value for Node#mountPoint.');
	
	            if (typeof newValue.x != 'undefined') this._properties.mountPoint._x = newValue.x;
	            if (typeof newValue.y != 'undefined') this._properties.mountPoint._y = newValue.y;
	            if (typeof newValue.z != 'undefined') this._properties.mountPoint._z = newValue.z;
	
	            this._needsToBeRendered();
	        },
	        get: function get() {
	            return this._properties.mountPoint;
	        }
	
	        /**
	         * Set all properties of the Node in one method.
	         *
	         * XXX: Should we change size so it matches structure here and on the node?
	         *
	         * @param {Object} properties Properties object - see example
	         *
	         * @example
	         * node.properties = {
	         *   classes: ['open'],
	         *   position: [200, 300, 0],
	         *   rotation: [3, 0, 0],
	         *   scale: [1, 1, 1],
	         *   size: {
	         *     mode: ['absolute', 'proportional'],
	         *     absolute: [300, null],
	         *     proportional: [null, .5]
	         *   },
	         *   opacity: .9
	         * }
	         */
	
	    }, {
	        key: 'properties',
	        set: function set() {
	            var properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            // Classes
	            if (properties.classes) this._el.setClasses(properties.classes);
	
	            // Position
	            if (properties.position) this.position = properties.position;
	
	            // Rotation
	            if (properties.rotation) this.rotation = properties.rotation;
	
	            // Scale
	            if (properties.scale) this.scale = properties.scale;
	
	            // Align
	            if (properties.align) this.align = properties.align;
	
	            // Size Modes
	            if (properties.sizeMode) this.sizeMode = properties.sizeMode;
	
	            // Absolute Size
	            if (properties.absoluteSize) this.absoluteSize = properties.absoluteSize;
	
	            // Proportional Size
	            if (properties.proportionalSize) this.proportionalSize = properties.proportionalSize;
	
	            // Opacity
	            if (properties.style) {
	                if (typeof properties.style.opacity != 'undefined') this.opacity = properties.opacity;
	            }
	
	            this._needsToBeRendered();
	        }
	    }, {
	        key: 'childCount',
	        get: function get() {
	            return this._children.length;
	        }
	    }]);
	
	    return Node;
	}();
	
	exports.default = Node;
	
	
	function defaultZeros(array) {
	    array[0] = array[0] || 0;
	    array[1] = array[1] || 0;
	    array[2] = array[2] || 0;
	    return array;
	}
	
	function isRealNumber(num) {
	    if (typeof num != 'number' || Object.is(num, NaN) || Object.is(num, Infinity)) return false;
	    return true;
	}

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["GeometryInterfaces"] = factory();
		else
			root["GeometryInterfaces"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(global) {'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _DOMMatrix = __webpack_require__(1);
		
		var _DOMMatrix2 = _interopRequireDefault(_DOMMatrix);
		
		var _DOMMatrixReadOnly = __webpack_require__(2);
		
		var _DOMMatrixReadOnly2 = _interopRequireDefault(_DOMMatrixReadOnly);
		
		var _global = null;
		
		// browser
		if (typeof window != 'undefined') {
		    _global = window;
		} else if (typeof global != 'undefined') {
		    _global = global;
		}
		
		if (_global) {
		    _global.DOMMatrix = _DOMMatrix2['default'];
		    _global.DOMMatrixReadOnly = _DOMMatrixReadOnly2['default'];
		}
		
		exports.DOMMatrix = _DOMMatrix2['default'];
		exports.DOMMatrixReadOnly = _DOMMatrixReadOnly2['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		var _get = function get(_x14, _x15, _x16) { var _again = true; _function: while (_again) { var object = _x14, property = _x15, receiver = _x16; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x14 = parent; _x15 = property; _x16 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var _DOMMatrixReadOnly2 = __webpack_require__(2);
		
		var _DOMMatrixReadOnly3 = _interopRequireDefault(_DOMMatrixReadOnly2);
		
		var _utilities = __webpack_require__(3);
		
		var DOMMatrix = (function (_DOMMatrixReadOnly) {
		    _inherits(DOMMatrix, _DOMMatrixReadOnly);
		
		    function DOMMatrix() {
		        _classCallCheck(this, DOMMatrix);
		
		        if (arguments.length === 0) {
		            var numberSequence = [1, 0, 0, 1, 0, 0];
		            _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, numberSequence);
		        } else if (arguments.length === 1) {
		            if (typeof arguments[0] == 'string') {
		                var transformList = arguments[0];
		                // TODO validate that syntax of transformList matches transform-list (http://www.w3.org/TR/css-transforms-1/#typedef-transform-list).
		                // TODO ...
		            } else if (arguments[0] instanceof _DOMMatrixReadOnly3['default']) {
		                    var other = arguments[0];
		                    _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, (0, _utilities.matrixToArray)(other));
		                } else if (arguments[0] instanceof Float32Array || arguments[0] instanceof Float64Array) {
		                    var typedArray = arguments[0];
		                    if (typedArray.length === 6 || typedArray.length === 16) {
		                        _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, Array.from(typedArray));
		                    } else {
		                        throw new TypeError('The typed array argument to the DOMMatrix constructor has an invalid length.');
		                    }
		                } else if (arguments[0] instanceof Array /* TODO && all items are numbers */) {
		                        var numberSequence = arguments[0];
		                        if (numberSequence.length === 6 || numberSequence.length === 16) {
		                            _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, numberSequence);
		                        } else {
		                            throw new TypeError('The array argument to the DOMMatrix constructor has an invalid length.');
		                        }
		                    }
		        } else {
		            throw new Error('Wrong number of arguments to DOMMatrix constructor.');
		        }
		    }
		
		    // Mutable transform methods
		
		    _createClass(DOMMatrix, [{
		        key: 'multiplySelf',
		        value: function multiplySelf(other) {
		            if (!other instanceof _DOMMatrixReadOnly3['default']) throw new Error('The argument to multiplySelf must be an instance of DOMMatrixReadOnly or DOMMatrix');
		
		            var resultArray = (0, _utilities.multiplyToArray)(this, other);
		            (0, _utilities.applyArrayValuesToDOMMatrix)(resultArray, this);
		
		            if (!other.is2D) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'preMultiplySelf',
		        value: function preMultiplySelf(other) {
		            if (!other instanceof _DOMMatrixReadOnly3['default']) throw new Error('The argument to multiplySelf must be an instance of DOMMatrixReadOnly or DOMMatrix');
		
		            var resultArray = (0, _utilities.multiplyToArray)(other, this);
		            (0, _utilities.applyArrayValuesToDOMMatrix)(resultArray, this);
		
		            if (!other.is2D) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'translateSelf',
		        value: function translateSelf(tx, ty) {
		            var tz = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            // TODO: check args are numbers
		
		            if (arguments.length === 1) throw new Error('The first two arguments (X and Y translation values) are required (the third, Z translation, is optional).');
		
		            // http://www.w3.org/TR/2012/WD-css3-transforms-20120911/#Translate3dDefined
		            var translationMatrix = new DOMMatrix([
		            // column-major:
		            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1]);
		
		            this.multiplySelf(translationMatrix);
		
		            if (tz != 0) {
		                this._is2D = false;
		            }
		
		            return this;
		        }
		    }, {
		        key: 'scaleSelf',
		        value: function scaleSelf(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            this.translateSelf(originX, originY);
		
		            this.multiplySelf(new DOMMatrix([
		            // 2D:
		            /*a*/scale, /*b*/0,
		            /*c*/0, /*d*/scale,
		            /*e*/0, /*f*/0]));
		
		            this.translateSelf(-originX, -originY);
		            return this;
		        }
		    }, {
		        key: 'scale3dSelf',
		        value: function scale3dSelf(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		            var originZ = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		
		            this.translateSelf(originX, originY, originZ);
		
		            this.multiplySelf(new DOMMatrix([
		            // 3D
		            scale, 0, 0, 0, 0, scale, 0, 0, 0, 0, scale, 0, 0, 0, 0, 1]));
		
		            this.translateSelf(-originX, -originY, -originZ);
		            return this;
		        }
		    }, {
		        key: 'scaleNonUniformSelf',
		        value: function scaleNonUniformSelf(scaleX) {
		            var scaleY = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
		            var scaleZ = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
		            var originX = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		            var originY = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
		            var originZ = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
		
		            this.translateSelf(originX, originY, originZ);
		
		            this.multiplySelf(new DOMMatrix([
		            // 3D
		            scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, scaleZ, 0, 0, 0, 0, 1]));
		
		            this.translateSelf(-originX, -originY, -originZ);
		
		            if (scaleZ !== 1 || originZ !== 0) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'rotateSelf',
		        value: function rotateSelf(angle) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            this.translateSelf(originX, originY);
		
		            // axis of rotation
		            var x = 0;
		            var y = 0;
		            var z = 1;
		            // We're rotating around the Z axis.
		
		            this.rotateAxisAngleSelf(x, y, z, angle);
		
		            this.translateSelf(-originX, -originY);
		            return this;
		        }
		
		        // TODO
		    }, {
		        key: 'rotateFromVectorSelf',
		        value: function rotateFromVectorSelf(x, y) {
		            throw new Error('rotateFromVectorSelf is not implemented yet.');
		        }
		    }, {
		        key: 'rotateAxisAngleSelf',
		        value: function rotateAxisAngleSelf(x, y, z, angle) {
		            var rotationMatrix = new DOMMatrix((0, _utilities.rotateAxisAngleArray)(x, y, z, angle));
		            this.multiplySelf(rotationMatrix);
		            return this;
		        }
		    }, {
		        key: 'skewXSelf',
		        value: function skewXSelf(sx) {
		            throw new Error('skewXSelf is not implemented yet.');
		        }
		    }, {
		        key: 'skewYSelf',
		        value: function skewYSelf(sy) {
		            throw new Error('skewYSelf is not implemented yet.');
		        }
		    }, {
		        key: 'invertSelf',
		        value: function invertSelf() {
		            throw new Error('invertSelf is not implemented yet.');
		        }
		    }, {
		        key: 'setMatrixValue',
		        value: function setMatrixValue( /*DOMString*/transformList) {
		            throw new Error('setMatrixValue is not implemented yet.');
		        }
		    }, {
		        key: 'a',
		        get: function get() {
		            return this.m11;
		        },
		        set: function set(value) {
		            this.m11 = value;
		        }
		    }, {
		        key: 'b',
		        get: function get() {
		            return this.m12;
		        },
		        set: function set(value) {
		            this.m12 = value;
		        }
		    }, {
		        key: 'c',
		        get: function get() {
		            return this.m21;
		        },
		        set: function set(value) {
		            this.m21 = value;
		        }
		    }, {
		        key: 'd',
		        get: function get() {
		            return this.m22;
		        },
		        set: function set(value) {
		            this.m22 = value;
		        }
		    }, {
		        key: 'e',
		        get: function get() {
		            return this.m41;
		        },
		        set: function set(value) {
		            this.m41 = value;
		        }
		    }, {
		        key: 'f',
		        get: function get() {
		            return this.m42;
		        },
		        set: function set(value) {
		            this.m42 = value;
		        }
		    }, {
		        key: 'm11',
		        get: function get() {
		            return this._matrix[0];
		        },
		        set: function set(value) {
		            this._matrix[0] = value;
		        }
		    }, {
		        key: 'm12',
		        get: function get() {
		            return this._matrix[4];
		        },
		        set: function set(value) {
		            this._matrix[4] = value;
		        }
		    }, {
		        key: 'm13',
		        get: function get() {
		            return this._matrix[8];
		        },
		        set: function set(value) {
		            this._matrix[8] = value;
		        }
		    }, {
		        key: 'm14',
		        get: function get() {
		            return this._matrix[12];
		        },
		        set: function set(value) {
		            this._matrix[12] = value;
		        }
		    }, {
		        key: 'm21',
		        get: function get() {
		            return this._matrix[1];
		        },
		        set: function set(value) {
		            this._matrix[1] = value;
		        }
		    }, {
		        key: 'm22',
		        get: function get() {
		            return this._matrix[5];
		        },
		        set: function set(value) {
		            this._matrix[5] = value;
		        }
		    }, {
		        key: 'm23',
		        get: function get() {
		            return this._matrix[9];
		        },
		        set: function set(value) {
		            this._matrix[9] = value;
		        }
		    }, {
		        key: 'm24',
		        get: function get() {
		            return this._matrix[13];
		        },
		        set: function set(value) {
		            this._matrix[13] = value;
		        }
		    }, {
		        key: 'm31',
		        get: function get() {
		            return this._matrix[2];
		        },
		        set: function set(value) {
		            this._matrix[2] = value;
		        }
		    }, {
		        key: 'm32',
		        get: function get() {
		            return this._matrix[6];
		        },
		        set: function set(value) {
		            this._matrix[6] = value;
		        }
		    }, {
		        key: 'm33',
		        get: function get() {
		            return this._matrix[10];
		        },
		        set: function set(value) {
		            this._matrix[10] = value;
		        }
		    }, {
		        key: 'm34',
		        get: function get() {
		            return this._matrix[14];
		        },
		        set: function set(value) {
		            this._matrix[14] = value;
		        }
		    }, {
		        key: 'm41',
		        get: function get() {
		            return this._matrix[3];
		        },
		        set: function set(value) {
		            this._matrix[3] = value;
		        }
		    }, {
		        key: 'm42',
		        get: function get() {
		            return this._matrix[7];
		        },
		        set: function set(value) {
		            this._matrix[7] = value;
		        }
		    }, {
		        key: 'm43',
		        get: function get() {
		            return this._matrix[11];
		        },
		        set: function set(value) {
		            this._matrix[11] = value;
		        }
		    }, {
		        key: 'm44',
		        get: function get() {
		            return this._matrix[15];
		        },
		        set: function set(value) {
		            this._matrix[15] = value;
		        }
		    }]);
		
		    return DOMMatrix;
		})(_DOMMatrixReadOnly3['default']);
		
		exports['default'] = DOMMatrix;
		module.exports = exports['default'];
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		var _DOMMatrix = __webpack_require__(1);
		
		var _DOMMatrix2 = _interopRequireDefault(_DOMMatrix);
		
		var _utilities = __webpack_require__(3);
		
		var DOMMatrixReadOnly = (function () {
		
		    /**
		     * @param {Array.number} numberSequence An array of numbers. If the array
		     * has 6 items, then those items set the values of m11, m12, m21, m22, m41,
		     * m42 in that order (or the values a, b, c, d, e, f if you're using those
		     * aliases) and this.is2D is true. If the array has 16 items (in
		     * column-major order), then they set all the values of the underlying
		     * matrix (m11 to m44) and this.is2D is set false. Arrays of other lengths
		     * throw an error.
		     */
		
		    function DOMMatrixReadOnly(numberSequence) {
		        _classCallCheck(this, DOMMatrixReadOnly);
		
		        if (!(this instanceof _DOMMatrix2['default'])) throw new TypeError('DOMMatrixReadOnly can\'t be instantiated directly. Use DOMMatrix instead.');
		
		        // TODO, make these private: {{
		
		        // `this._matrix` defaults to the identity matrix.
		        // `this._matrix` is represented internally in row-major format so that
		        // it is easy to look at visually. In a pair of coordinates (as in
		        // "m23") the first number is the column and the second is the row (so
		        // "m23" means column 2 row 3).
		        this._matrix = new Float64Array([
		        /*m11*/1, /*m21*/0, /*m31*/0, /*m41*/0,
		        /*m12*/0, /*m22*/1, /*m32*/0, /*m42*/0,
		        /*m13*/0, /*m23*/0, /*m33*/1, /*m43*/0,
		        /*m14*/0, /*m24*/0, /*m34*/0, /*m44*/1]);
		        this._is2D = true;
		        this._isIdentity = true;
		
		        // }}
		
		        // TODO
		        //if (!Match.test(numberSequence, [Number]))
		        //throw new TypeError('DOMMatrixReadOnly constructor argument "numberSequence" must contain numbers.')
		
		        if (numberSequence.length === 6) {
		            (0, _utilities.applyArrayValuesToDOMMatrix)(numberSequence, this);
		        } else if (numberSequence.length === 16) {
		            (0, _utilities.applyArrayValuesToDOMMatrix)(numberSequence, this);
		            this._is2D = false;
		        } else {
		            throw new TypeError('DOMMatrixReadOnly constructor argument "numberSequence" must have length 6 or 16.');
		        }
		    }
		
		    // Immutable transform methods -------------------------------------------
		
		    _createClass(DOMMatrixReadOnly, [{
		        key: 'translate',
		        value: function translate(tx, ty) {
		            var tz = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).translateSelf(tx, ty, tz);
		        }
		    }, {
		        key: 'scale',
		        value: function scale(_scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).scaleSelf(_scale, originX, originY);
		        }
		    }, {
		        key: 'scale3d',
		        value: function scale3d(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		            var originZ = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		
		            return new _DOMMatrix2['default'](this).scale3dSelf(scale, originX, originY, originZ);
		        }
		    }, {
		        key: 'scaleNonUniform',
		        value: function scaleNonUniform(scaleX) {
		            var scaleY = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
		            var scaleZ = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
		            var originX = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		            var originY = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
		            var originZ = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
		
		            return new _DOMMatrix2['default'](this).scaleNonUniformSelf(scaleX, scaleY, scaleZ, originX, originY, originZ);
		        }
		    }, {
		        key: 'rotate',
		        value: function rotate(angle) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).rotateSelf(angle, originX, originY);
		        }
		
		        // TODO
		    }, {
		        key: 'rotateFromVector',
		        value: function rotateFromVector(x, y) {
		            throw new Error('rotateFromVector is not implemented yet.');
		        }
		    }, {
		        key: 'rotateAxisAngle',
		        value: function rotateAxisAngle(x, y, z, angle) {
		            return new _DOMMatrix2['default'](this).rotateAxisAngleSelf(x, y, z, angle);
		        }
		    }, {
		        key: 'skewX',
		        value: function skewX(sx) {
		            throw new Error('skewX is not implemented yet.');
		        }
		    }, {
		        key: 'skewY',
		        value: function skewY(sy) {
		            throw new Error('skewY is not implemented yet.');
		        }
		    }, {
		        key: 'multiply',
		        value: function multiply(other) {
		            return new _DOMMatrix2['default'](this).multiplySelf(other);
		        }
		    }, {
		        key: 'flipX',
		        value: function flipX() {
		            throw new Error('flipX is not implemented yet.');
		        }
		    }, {
		        key: 'flipY',
		        value: function flipY() {
		            throw new Error('flipY is not implemented yet.');
		        }
		    }, {
		        key: 'inverse',
		        value: function inverse() {
		            throw new Error('inverse is not implemented yet.');
		        }
		    }, {
		        key: 'transformPoint',
		        value: function transformPoint( /*optional DOMPointInit*/point) {
		            throw new Error('transformPoint is not implemented yet.');
		        }
		    }, {
		        key: 'toFloat32Array',
		        value: function toFloat32Array() {
		            throw new Error('toFloat32Array is not implemented yet.');
		        }
		    }, {
		        key: 'toFloat64Array',
		        value: function toFloat64Array() {
		            throw new Error('toFloat64Array is not implemented yet.');
		        }
		
		        //stringifier() {} // What's this?
		
		    }, {
		        key: 'is2D',
		        get: function get() {
		            return this._is2D;
		        }
		
		        /*
		         * TODO: make sure this matches the spec.
		         * TODO: Instead of calculating here, perhaps calculate and set
		         * this._isIdentity in other operations, and simply return the internal one
		         * here.
		         */
		    }, {
		        key: 'isIdentity',
		        get: function get() {
		            var identity = [
		            /*m11*/1, /*m21*/0, /*m31*/0, /*m41*/0,
		            /*m12*/0, /*m22*/1, /*m32*/0, /*m42*/0,
		            /*m13*/0, /*m23*/0, /*m33*/1, /*m43*/0,
		            /*m14*/0, /*m24*/0, /*m34*/0, /*m44*/1];
		
		            this._isIdentity = true;
		
		            for (var i = 0, len = this._matrix.length; i < len; i += 1) {
		                if (this._matrix[i] != identity[i]) this._isIdentity = false;
		            }
		
		            return this._isIdentity;
		        }
		    }, {
		        key: 'a',
		        get: function get() {
		            return this.m11;
		        }
		    }, {
		        key: 'b',
		        get: function get() {
		            return this.m12;
		        }
		    }, {
		        key: 'c',
		        get: function get() {
		            return this.m21;
		        }
		    }, {
		        key: 'd',
		        get: function get() {
		            return this.m22;
		        }
		    }, {
		        key: 'e',
		        get: function get() {
		            return this.m41;
		        }
		    }, {
		        key: 'f',
		        get: function get() {
		            return this.m42;
		        }
		    }, {
		        key: 'm11',
		        get: function get() {
		            return this._matrix[0];
		        }
		    }, {
		        key: 'm12',
		        get: function get() {
		            return this._matrix[4];
		        }
		    }, {
		        key: 'm13',
		        get: function get() {
		            return this._matrix[8];
		        }
		    }, {
		        key: 'm14',
		        get: function get() {
		            return this._matrix[12];
		        }
		    }, {
		        key: 'm21',
		        get: function get() {
		            return this._matrix[1];
		        }
		    }, {
		        key: 'm22',
		        get: function get() {
		            return this._matrix[5];
		        }
		    }, {
		        key: 'm23',
		        get: function get() {
		            return this._matrix[9];
		        }
		    }, {
		        key: 'm24',
		        get: function get() {
		            return this._matrix[13];
		        }
		    }, {
		        key: 'm31',
		        get: function get() {
		            return this._matrix[2];
		        }
		    }, {
		        key: 'm32',
		        get: function get() {
		            return this._matrix[6];
		        }
		    }, {
		        key: 'm33',
		        get: function get() {
		            return this._matrix[10];
		        }
		    }, {
		        key: 'm34',
		        get: function get() {
		            return this._matrix[14];
		        }
		    }, {
		        key: 'm41',
		        get: function get() {
		            return this._matrix[3];
		        }
		    }, {
		        key: 'm42',
		        get: function get() {
		            return this._matrix[7];
		        }
		    }, {
		        key: 'm43',
		        get: function get() {
		            return this._matrix[11];
		        }
		    }, {
		        key: 'm44',
		        get: function get() {
		            return this._matrix[15];
		        }
		    }]);
		
		    return DOMMatrixReadOnly;
		})();
		
		exports['default'] = DOMMatrixReadOnly;
		module.exports = exports['default'];
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.multiplyToArray = multiplyToArray;
		exports.applyArrayValuesToDOMMatrix = applyArrayValuesToDOMMatrix;
		exports.matrixToArray = matrixToArray;
		exports.rotateAxisAngleArray = rotateAxisAngleArray;
		
		function multiplyToArray(A, B) {
		
		    //XXX: Are the following calculations faster hard coded (current), or as a loop?
		
		    var m11 = A.m11 * B.m11 + A.m21 * B.m12 + A.m31 * B.m13 + A.m41 * B.m14;
		    var m21 = A.m11 * B.m21 + A.m21 * B.m22 + A.m31 * B.m23 + A.m41 * B.m24;
		    var m31 = A.m11 * B.m31 + A.m21 * B.m32 + A.m31 * B.m33 + A.m41 * B.m34;
		    var m41 = A.m11 * B.m41 + A.m21 * B.m42 + A.m31 * B.m43 + A.m41 * B.m44;
		
		    var m12 = A.m12 * B.m11 + A.m22 * B.m12 + A.m32 * B.m13 + A.m42 * B.m14;
		    var m22 = A.m12 * B.m21 + A.m22 * B.m22 + A.m32 * B.m23 + A.m42 * B.m24;
		    var m32 = A.m12 * B.m31 + A.m22 * B.m32 + A.m32 * B.m33 + A.m42 * B.m34;
		    var m42 = A.m12 * B.m41 + A.m22 * B.m42 + A.m32 * B.m43 + A.m42 * B.m44;
		
		    var m13 = A.m13 * B.m11 + A.m23 * B.m12 + A.m33 * B.m13 + A.m43 * B.m14;
		    var m23 = A.m13 * B.m21 + A.m23 * B.m22 + A.m33 * B.m23 + A.m43 * B.m24;
		    var m33 = A.m13 * B.m31 + A.m23 * B.m32 + A.m33 * B.m33 + A.m43 * B.m34;
		    var m43 = A.m13 * B.m41 + A.m23 * B.m42 + A.m33 * B.m43 + A.m43 * B.m44;
		
		    var m14 = A.m14 * B.m11 + A.m24 * B.m12 + A.m34 * B.m13 + A.m44 * B.m14;
		    var m24 = A.m14 * B.m21 + A.m24 * B.m22 + A.m34 * B.m23 + A.m44 * B.m24;
		    var m34 = A.m14 * B.m31 + A.m24 * B.m32 + A.m34 * B.m33 + A.m44 * B.m34;
		    var m44 = A.m14 * B.m41 + A.m24 * B.m42 + A.m34 * B.m43 + A.m44 * B.m44;
		
		    // in column-major order:
		    var resultArray = [m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44];
		
		    return resultArray;
		}
		
		function applyArrayValuesToDOMMatrix(array, matrix) {
		    var length = array.length;
		
		    if (length === 6) {
		        matrix.m11 = array[0];
		        matrix.m12 = array[1];
		        matrix.m21 = array[2];
		        matrix.m22 = array[3];
		        matrix.m41 = array[4];
		        matrix.m42 = array[5];
		    } else if (length === 16) {
		        matrix.m11 = array[0];
		        matrix.m12 = array[1];
		        matrix.m13 = array[2];
		        matrix.m14 = array[3];
		        matrix.m21 = array[4];
		        matrix.m22 = array[5];
		        matrix.m23 = array[6];
		        matrix.m24 = array[7];
		        matrix.m31 = array[8];
		        matrix.m32 = array[9];
		        matrix.m33 = array[10];
		        matrix.m34 = array[11];
		        matrix.m41 = array[12];
		        matrix.m42 = array[13];
		        matrix.m43 = array[14];
		        matrix.m44 = array[15];
		    }
		}
		
		function matrixToArray(matrix) {
		    var result = null;
		
		    if (matrix.is2D) {
		        result = [matrix.m11, matrix.m12, matrix.m21, matrix.m22, matrix.m41, matrix.m42];
		    } else {
		        result = [matrix.m11, matrix.m12, matrix.m13, matrix.m14, matrix.m21, matrix.m22, matrix.m23, matrix.m24, matrix.m31, matrix.m32, matrix.m33, matrix.m34, matrix.m41, matrix.m42, matrix.m43, matrix.m44];
		    }
		
		    return result;
		}
		
		function rotateAxisAngleArray(x, y, z, angle) {
		    var sin = Math.sin;
		    var cos = Math.cos;
		    var pow = Math.pow;
		
		    var halfAngle = degreesToRadians(angle / 2);
		
		    // TODO: should we provide a 6-item array here to signify 2D when the
		    // rotation is about the Z axis (for example when calling rotateSelf)?
		    // TODO: Performance can be improved by first detecting when x, y, or z of
		    // the axis are zero or 1, and using a pre-simplified version of the
		    // folowing math based on that condition.
		    // TODO: Performance can be improved by using different equations (use trig
		    // identities to find alternate formulas).
		    return [1 - 2 * (y * y + z * z) * pow(sin(halfAngle), 2), 2 * (x * y * pow(sin(halfAngle), 2) + z * sin(halfAngle) * cos(halfAngle)), 2 * (x * z * pow(sin(halfAngle), 2) - y * sin(halfAngle) * cos(halfAngle)), 0, 2 * (x * y * pow(sin(halfAngle), 2) - z * sin(halfAngle) * cos(halfAngle)), 1 - 2 * (x * x + z * z) * pow(sin(halfAngle), 2), 2 * (y * z * pow(sin(halfAngle), 2) + x * sin(halfAngle) * cos(halfAngle)), 0, 2 * (x * z * pow(sin(halfAngle), 2) + y * sin(halfAngle) * cos(halfAngle)), 2 * (y * z * pow(sin(halfAngle), 2) - x * sin(halfAngle) * cos(halfAngle)), 1 - 2 * (x * x + y * y) * pow(sin(halfAngle), 2), 0, 0, 0, 0, 1];
		}
		
		function degreesToRadians(degrees) {
		    return Math.PI / 180 * degrees;
		}
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=global.js.map

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _documentReady = __webpack_require__(379);
	
	var _documentReady2 = _interopRequireDefault(_documentReady);
	
	__webpack_require__(301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var documentIsReady = false;
	
	var Motor = function () {
	    function Motor() {
	        _classCallCheck(this, Motor);
	
	        this._inFrame = false; // true when inside a requested animation frame.
	        this._rAF = null; // the current animation frame, or null.
	        this._animationLoopStarted = false;
	        this._allRenderTasks = [];
	        this._nodesToBeRendered = new Map();
	    }
	
	    /**
	     * Starts an rAF loop and runs the render tasks in the _renderTasks stack.
	     * As long as there are tasks in the stack, the loop continues. When the
	     * stack becomes empty due to removal of tasks, the rAF stops and the app
	     * sits there doing nothing -- silence, crickets.
	     */
	
	
	    _createClass(Motor, [{
	        key: '_startAnimationLoop',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                var _this = this;
	
	                var motorLoop;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this._animationLoopStarted) {
	                                    _context.next = 2;
	                                    break;
	                                }
	
	                                return _context.abrupt('return');
	
	                            case 2:
	
	                                this._animationLoopStarted = true;
	
	                                if (documentIsReady) {
	                                    _context.next = 7;
	                                    break;
	                                }
	
	                                _context.next = 6;
	                                return (0, _documentReady2.default)();
	
	                            case 6:
	                                documentIsReady = true;
	
	                            case 7:
	
	                                // DIRECT ANIMATION LOOP ///////////////////////////////////
	                                // So now we can render after the scene is mounted.
	
	                                motorLoop = function motorLoop(timestamp) {
	                                    _this._inFrame = true;
	
	                                    _this._runRenderTasks(timestamp);
	                                    _this._renderNodes(timestamp);
	
	                                    // If any tasks are left to run, continue the animation loop.
	                                    if (_this._allRenderTasks.length) _this._rAF = requestAnimationFrame(motorLoop);else {
	                                        _this._rAF = null;
	                                        _this._animationLoopStarted = false;
	                                    }
	
	                                    _this._inFrame = false;
	                                };
	
	                                this._rAF = requestAnimationFrame(motorLoop);
	
	                                // ANIMATION LOOP USING WHILE AND AWAIT ///////////////////////////////////
	                                //this._rAF = true
	                                //let timestamp = null
	                                //while (this._rAF) {
	                                //timestamp = await animationFrame()
	                                //this._inFrame = true
	
	                                //this._runRenderTasks(timestamp)
	                                //this._renderNodes(timestamp)
	
	                                //// If any tasks are left to run, continue the animation loop.
	                                //if (!this._allRenderTasks.length) {
	                                //this._rAF = null
	                                //this._animationLoopStarted = false
	                                //}
	
	                                //this._inFrame = false
	                                //}
	
	                            case 9:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function _startAnimationLoop() {
	                return _ref.apply(this, arguments);
	            }
	
	            return _startAnimationLoop;
	        }()
	
	        /**
	         * When a render tasks is added a new rAF loop will be started if there
	         * isn't one currently.
	         *
	         * A render task is simply a function that will be called over and over
	         * again, in the Motor's animation loop. That's all, nothing special.
	         * However, if a Node setter is used inside of a render task, then the Node
	         * will tell Motor that it needs to be re-rendered, which will happen at
	         * the end of the current frame. If a Node setter is used outside of a
	         * render task (i.e. outside of the Motor's animation loop), then the Node
	         * tells Motor to re-render the Node on the next animation loop tick.
	         * Basically, regardless of where the Node's setters are used (inside or
	         * outside of the Motor's animation loop), rendering always happens inside
	         * the loop.
	         *
	         * @param {Function} fn The render task to add.
	         * @return {Function} A reference to the render task. Useful for saving to
	         * a variable so that it can later be passed to Motor.removeRenderTask().
	         */
	
	    }, {
	        key: 'addRenderTask',
	        value: function addRenderTask(fn) {
	            if (typeof fn != 'function') throw new Error('Render task must be a function.');
	
	            this._allRenderTasks.push(fn);
	
	            // If the render loop isn't started, start it.
	            if (!this._animationLoopStarted) this._startAnimationLoop();
	
	            return fn;
	        }
	    }, {
	        key: 'removeRenderTask',
	        value: function removeRenderTask(fn) {
	            this._allRenderTasks.splice(this._allRenderTasks.indexOf(fn), 1);
	        }
	    }, {
	        key: '_runRenderTasks',
	        value: function _runRenderTasks(timestamp) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._allRenderTasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var task = _step.value;
	
	                    task(timestamp);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_setNodeToBeRendered',
	        value: function _setNodeToBeRendered(node) {
	            if (!this._nodesToBeRendered.has(node)) this._nodesToBeRendered.set(node);
	        }
	
	        // currently unused, as the list is cleared after each frame.
	        // TODO: prevent GC by clearing a linked list instead of Array, Set or Map?
	
	    }, {
	        key: '_unsetNodeToBeRendered',
	        value: function _unsetNodeToBeRendered(node) {
	            this._nodesToBeRendered.delete(node);
	        }
	    }, {
	        key: '_renderNodes',
	        value: function _renderNodes(timestamp) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this._nodesToBeRendered[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _step2$value = _slicedToArray(_step2.value, 1);
	
	                    var node = _step2$value[0];
	
	                    node._render(timestamp);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            this._nodesToBeRendered.clear();
	        }
	    }]);
	
	    return Motor;
	}();
	
	// export a singleton instance rather than the class directly.
	
	
	exports.default = new Motor();

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(304);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(306);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _asyncToGenerator2 = __webpack_require__(374);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Await for this to run code after the DOM has been parsed and loaded (but not
	 * sub-resources like images, scripts, etc).
	 *
	 * @example
	 * ```js
	 * async function main() {
	 *     await documentReady()
	 *     console.log('Document ready!')
	 * }
	 * main()
	 * ```
	 */
	
	exports.default = function () {
	    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (!(document.readyState === 'loading')) {
	                            _context.next = 3;
	                            break;
	                        }
	
	                        _context.next = 3;
	                        return new _promise2.default(function (resolve) {
	                            document.addEventListener('DOMContentLoaded', resolve);
	                        });
	
	                    case 3:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    function documentReady() {
	        return _ref.apply(this, arguments);
	    }
	
	    return documentReady;
	}();
	//# sourceMappingURL=documentReady.js.map

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	__webpack_require__(381);
	
	var _nodeStyle = __webpack_require__(382);
	
	var _nodeStyle2 = _interopRequireDefault(_nodeStyle);
	
	var _Node = __webpack_require__(376);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _base = __webpack_require__(383);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _scene = __webpack_require__(412);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	var _Utility = __webpack_require__(301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import 'webcomponents.js-v1/src/CustomElements/v1/native-shim'
	//import 'webcomponents.js-v1/src/CustomElements/v1/CustomElements'
	
	console.log(' -- motor-node module!');
	
	var MotorHTMLNode = function (_MotorHTMLBase) {
	    _inherits(MotorHTMLNode, _MotorHTMLBase);
	
	    function MotorHTMLNode() {
	        _classCallCheck(this, MotorHTMLNode);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MotorHTMLNode).apply(this, arguments));
	    }
	
	    _createClass(MotorHTMLNode, [{
	        key: 'createdCallback',
	
	
	        // Use constructor() in v1 Custom Elements instead of createdCallback.
	        //constructor() {
	
	        value: function createdCallback() {
	            _get(Object.getPrototypeOf(MotorHTMLNode.prototype), 'createdCallback', this).call(this);
	
	            // true if motor-node is mounted improperly (not mounted in motor-node or motor-scene)
	            this._attachError = false;
	        }
	    }, {
	        key: 'attachedCallback',
	        value: function attachedCallback() {
	
	            // Check that motor-nodes are mounted to motor-scenes or
	            // motor-nodes. Scene can be mounted to any element. In the future
	            // we could inspect the scene mount point, and advise about posisble
	            // styling issues (f.e. making the scene container have a height).
	            //
	            // XXX: different check needed when using is="" attributes. For now,
	            // we'll discourage use of the awkward is="" attribute.
	            if (!(this instanceof _scene2.default)) {
	                if (!(this.parentNode instanceof MotorHTMLNode || this.parentNode instanceof _scene2.default) || this.parentNode._attachError // TODO, #40
	                ) {
	
	                        this._attachError = true;
	                        throw new Error('<motor-node> elements must be appended only to <motor-scene> or other <motor-node> elements.');
	                    }
	            }
	
	            _get(Object.getPrototypeOf(MotorHTMLNode.prototype), 'attachedCallback', this).call(this);
	        }
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {
	            return _nodeStyle2.default;
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            _get(Object.getPrototypeOf(MotorHTMLNode.prototype), 'init', this).call(this);
	
	            // Attach this motor-node's Node to the parent motor-node's
	            // Node (doesn't apply to motor-scene, which doesn't have a
	            // parent to attach to).
	            //
	            // TODO: prevent this call if attachedCallback happened to call to
	            // addChild on the imperative side.
	            if (!(this instanceof _scene2.default)) this.parentNode.node.addChild(this.node);
	        }
	
	        // this is called in attachedCallback, at which point this element hasa
	        // parentNode.
	        // @override
	
	    }, {
	        key: '_makeImperativeCounterpart',
	        value: function _makeImperativeCounterpart() {
	            return new _Node2.default({}, this);
	        }
	
	        // TODO XXX: remove corresponding imperative Node from it's parent.
	
	    }, {
	        key: 'detachedCallback',
	        value: function detachedCallback() {
	            if (!(this instanceof _scene2.default) && this._attachError) {
	                this._attachError = false;
	                return;
	            }
	
	            _get(Object.getPrototypeOf(MotorHTMLNode.prototype), 'detachedCallback', this).call(this);
	        }
	    }, {
	        key: 'attributeChangedCallback',
	        value: function attributeChangedCallback(attribute, oldValue, newValue) {
	            this._updateNodeProperty(attribute, oldValue, newValue);
	        }
	    }, {
	        key: '_updateNodeProperty',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(attribute, oldValue, newValue) {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                // TODO: Handle actual values (not just string property values as
	                                // follows) for performance; especially when DOMMatrix is supported
	                                // by browsers.
	
	                                console.log('motor-node not ready yet.');
	                                // if not initialized yet, wait.
	
	                                if (this.node) {
	                                    _context.next = 4;
	                                    break;
	                                }
	
	                                _context.next = 4;
	                                return this.ready;
	
	                            case 4:
	                                console.log('motor-node ready!');
	
	                                // attributes on our HTML elements are the same name as those on
	                                // the Node class (the setters).
	                                // TODO: make a list of the properties (or get them dynamically) then
	                                // assign them dynamically.
	                                if (newValue !== oldValue) {
	                                    if (attribute.match(/opacity/i)) this.node[attribute] = window.parseFloat(newValue);else if (attribute.match(/sizeMode/i)) this.node[attribute] = parseStringArray(newValue);else if (attribute.match(/rotation/i) || attribute.match(/scale/i) // scale is TODO on imperative side.
	                                    || attribute.match(/position/i) || attribute.match(/absoluteSize/i) || attribute.match(/proportionalSize/i) || attribute.match(/align/i) || attribute.match(/mountPoint/i) || attribute.match(/origin/i) // origin is TODO on imperative side.
	                                    || attribute.match(/skew/i) // skew is TODO on imperative side.
	                                    ) {
	                                            this.node[attribute] = parseNumberArray(newValue);
	                                        } else {
	                                        /* nothing, ignore other attributes */
	                                    }
	                                }
	
	                            case 6:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function _updateNodeProperty(_x, _x2, _x3) {
	                return _ref.apply(this, arguments);
	            }
	
	            return _updateNodeProperty;
	        }()
	    }]);
	
	    return MotorHTMLNode;
	}(_base2.default);
	
	(0, _Utility.proxyMethods)(_Node2.default, MotorHTMLNode);
	
	// XXX we'll export the class directly for v1 Custom Elements, and encourage
	// end users to define the name of the element as they see fit. We won't
	// define the name ourselves like we do here.
	exports.default = document.registerElement('motor-node', MotorHTMLNode);
	
	// for use by MotorHTML, convenient since HTMLElement attributes are all
	// converted to lowercase by default, so if we don't do this then we won't be
	// able to map attributes to Node setters as easily.
	
	(0, _Utility.makeLowercaseSetterAliases)(_Node2.default.prototype);
	
	function parseNumberArray(str) {
	    checkIsNumberArrayString(str);
	    var numbers = str.split(',');
	    return {
	        x: window.parseFloat(numbers[0]),
	        y: window.parseFloat(numbers[1]),
	        z: window.parseFloat(numbers[2])
	    };
	}
	
	function parseStringArray(str) {
	    checkIsSizeArrayString(str);
	    var strings = str.split(',');
	    return {
	        x: strings[0].trim(),
	        y: strings[1].trim(),
	        z: strings[2].trim()
	    };
	}
	
	function checkIsNumberArrayString(str) {
	    if (!str.match(/^\s*(-?((\d+\.\d+)|(\d+))(\s*,\s*)?){3}\s*$/g)) throw new Error('Invalid array. Must be an array of numbers of length 3, for example "1, 2.5,3" without brackets. Yours was ' + str + '.');
	}
	
	function checkIsSizeArrayString(str) {
	    // TODO: throw error if str is not a valid array of size mode strings.
	    return;
	}

/***/ },
/* 381 */
/***/ function(module, exports) {

	/*! (C) WebReflection Mit Style License */
	(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");

/***/ },
/* 382 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    'motor-node': {
	        display: 'block',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	
	        // TODO: set via JavaScript. Defaults to [0.5,0.5,0.5] (the Z axis
	        // doesn't apply for DOM elements, but will for 3D objects in WebGL.)
	        transformOrigin: '50% 50% 0', // default
	
	        transformStyle: 'preserve-3d'
	    }
	};

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	__webpack_require__(381);
	
	var _webComponent = __webpack_require__(384);
	
	var _webComponent2 = _interopRequireDefault(_webComponent);
	
	var _Node = __webpack_require__(376);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	console.log(' --- motor-html-base module.');
	
	var WebComponent = (0, _webComponent2.default)(window.HTMLElement);
	
	var MotorHTMLBase = function (_WebComponent) {
	    _inherits(MotorHTMLBase, _WebComponent);
	
	    function MotorHTMLBase() {
	        _classCallCheck(this, MotorHTMLBase);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MotorHTMLBase).apply(this, arguments));
	    }
	
	    _createClass(MotorHTMLBase, [{
	        key: 'createdCallback',
	        value: function createdCallback() {
	            var _this2 = this;
	
	            _get(Object.getPrototypeOf(MotorHTMLBase.prototype), 'createdCallback', this).call(this);
	
	            this.node = null; // to hold the imperative API Node instance.
	
	            // XXX: "this.mountPromise" vs "this.ready":
	            // "ready" seems to be more intuitive on the HTML side because
	            // if the user has a reference to a motor-node or a motor-scene
	            // and it exists in DOM, then it is already "mounted" from the
	            // HTML API perspective. Maybe we can use "mountPromise" for
	            // the imperative API, and "ready" for the HTML API. For example:
	            //
	            // await $('motor-scene')[0].ready // When using the HTML API
	            // await node.mountPromise // When using the imperative API
	            //
	            // Or, maybe we can just use ".ready" in both APIs?...
	            this._resolveReadyPromise = null;
	            this.ready = new Promise(function (r) {
	                return _this2._resolveReadyPromise = r;
	            });
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            this._associateImperativeNode();
	        }
	
	        /**
	         * This method creates the association between this MotorHTMLNode instance
	         * and the imperative Node instance.
	         *
	         * This method may get called by this.init, but can also be called by
	         * the Node class if Node is used imperatively. See Node#constructor.
	         *
	         * @private
	         *
	         * @param {Node} imperativeMotorNode The Node to associate with this
	         * MotorHTMLNode. This parameter is only used in Node#constructor, and this
	         * happens when using the imperative form infamous instead of the HTML
	         * interface of infamous. When the HTML interface is used, this gets called
	         * first without an imperativeMotorNode argument and the call to this in
	         * Node#constructor will then be a noop. Basically, either this gets called
	         * first by MotorHTMLNode, or first by Node, depending on which API is used
	         * first.
	         */
	
	    }, {
	        key: '_associateImperativeNode',
	        value: function _associateImperativeNode(imperativeMotorNode) {
	            // console.log(' -- associating imperative node')
	            if (!this.node) {
	                if (imperativeMotorNode && imperativeMotorNode instanceof _Node2.default) this.node = imperativeMotorNode;else this.node = this._makeImperativeCounterpart();
	
	                this._signalWhenReady();
	            }
	        }
	
	        // This method should be overriden by child classes. It should return the
	        // imperative-side instance that the HTML-side class (this) corresponds to.
	
	    }, {
	        key: '_makeImperativeCounterpart',
	        value: function _makeImperativeCounterpart() {
	            throw new TypeError('This method should be implemented by class extening MotorHTMLBase.');
	        }
	    }, {
	        key: '_signalWhenReady',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return this.node.mountPromise;
	
	                            case 2:
	                                this._resolveReadyPromise();
	
	                            case 3:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function _signalWhenReady() {
	                return _ref.apply(this, arguments);
	            }
	
	            return _signalWhenReady;
	        }()
	    }]);
	
	    return MotorHTMLBase;
	}(WebComponent);
	
	exports.default = MotorHTMLBase;

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = makeWebComponentBaseClass;
	
	var _jss = __webpack_require__(385);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Very very stupid hack needed for Safari in order for us to be able to extend
	// the HTMLElement class. See:
	// https://github.com/google/traceur-compiler/issues/1709
	//if (typeof window.HTMLElement != 'function') {
	//const _HTMLElement = function HTMLElement(){}
	//_HTMLElement.prototype = window.HTMLElement.prototype
	//window.HTMLElement = _HTMLElement
	//}
	
	// XXX: we can improve by clearing items after X amount of time.
	var classCache = new Map();
	
	var stylesheets = {};
	var instanceCountByConstructor = {};
	
	function hasHTMLElementPrototype(constructor) {
	    if (!constructor) return false;
	    if (constructor === HTMLElement) return true;else return hasHTMLElementPrototype(constructor.prototype);
	}
	
	/**
	 * Creates a WebComponent base class dynamically, depending on which
	 * HTMLElement class you want it to extend from. Extend from WebComponent when
	 * making a new Custom Element class.
	 *
	 * @example
	 * const WebComponent = makeWebComponentBaseClass(HTMLButtonElement)
	 * class AwesomeButton extends WebComponent { ... }
	 *
	 * @param {Function} elementClass The class to that the generated WebComponent
	 * base class will extend from.
	 */
	
	function makeWebComponentBaseClass(elementClass) {
	    if (!elementClass) elementClass = HTMLElement;
	
	    if (!hasHTMLElementPrototype(elementClass)) {
	        throw new TypeError('The argument to makeWebComponentBaseClass must be a constructor that extends from or is HTMLElement.');
	    }
	
	    // if a base class that extends the given `elementClass` has already been
	    // created, return it.
	    if (classCache.has(elementClass)) return classCache.get(elementClass);
	
	    // otherwise, create it.
	
	    var WebComponent = function (_elementClass) {
	        _inherits(WebComponent, _elementClass);
	
	        function WebComponent() {
	            _classCallCheck(this, WebComponent);
	
	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WebComponent).call(this));
	
	            _this.createdCallback();return _this;
	        }
	
	        _createClass(WebComponent, [{
	            key: 'createdCallback',
	            value: function createdCallback() {
	                this._attached = false;
	                this._initialized = false;
	
	                //this.root....addEventListener('slotchange', function() {
	                //let slot = ...
	                //for (el in slot) {
	                //el.slottedCallback(slot)
	                //}
	                //})
	            }
	
	            //slottedCallback(slot) {
	            //}
	
	        }, {
	            key: 'connectedCallback',
	            value: function connectedCallback() {
	                this.attachedCallback();
	            }
	        }, {
	            key: 'attachedCallback',
	            value: function attachedCallback() {
	                this._attached = true;
	
	                if (!this._initialized) {
	                    this._init();
	                    this._initialized = true;
	                }
	            }
	        }, {
	            key: '_createStylesheet',
	            value: function _createStylesheet() {
	
	                if (!instanceCountByConstructor[this.constructor.name]) instanceCountByConstructor[this.constructor.name] = 0;
	
	                instanceCountByConstructor[this.constructor.name] += 1;
	
	                if (instanceCountByConstructor[this.constructor.name] === 1) {
	
	                    // XXX create stylesheet inside animation frame?
	                    stylesheets[this.constructor.name] = _jss2.default.createStyleSheet(this.getStyles()).attach();
	                }
	            }
	        }, {
	            key: 'disconnectedCallback',
	            value: function disconnectedCallback() {
	                this.detachedCallback();
	            }
	        }, {
	            key: 'detachedCallback',
	            value: function () {
	                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                    return regeneratorRuntime.wrap(function _callee$(_context) {
	                        while (1) {
	                            switch (_context.prev = _context.next) {
	                                case 0:
	                                    this._attached = false;
	
	                                    // XXX Deferr to the next tick before cleaning up in case the
	                                    // element is actually being re-attached somewhere else within this
	                                    // same tick (detaching and attaching is synchronous, so by
	                                    // deferring to the next tick we'll be able to know if the element
	                                    // was re-attached or not in order to clean up or not). Note that
	                                    // appendChild can be used to move an element to another parent
	                                    // element, in which case attachedCallback and detachedCallback
	                                    // both get called, and in which case we don't necessarily want to
	                                    // clean up. If the element gets re-attached before the next tick
	                                    // (for example, gets moved), then we want to preserve the
	                                    // associated stylesheet and other stuff that would be cleaned up
	                                    // by an extending class' _cleanUp method by not running the
	                                    // following this._deinit() call.
	                                    _context.next = 3;
	                                    return Promise.resolve();
	
	                                case 3:
	                                    // deferr to the next tick.
	
	                                    // As mentioned in the previous comment, if the element was not
	                                    // re-attached in the last tick (for example, it was moved to
	                                    // another element), then clean up.
	                                    //
	                                    // XXX (performance): Should we coordinate this._deinit() with the
	                                    // animation loop to prevent jank?
	                                    if (!this._attached && this._initialized) {
	                                        this._deinit();
	                                    }
	
	                                case 4:
	                                case 'end':
	                                    return _context.stop();
	                            }
	                        }
	                    }, _callee, this);
	                }));
	
	                function detachedCallback() {
	                    return _ref.apply(this, arguments);
	                }
	
	                return detachedCallback;
	            }()
	        }, {
	            key: '_destroyStylesheet',
	            value: function _destroyStylesheet() {
	                instanceCountByConstructor[this.constructor.name] -= 1;
	                if (instanceCountByConstructor[this.constructor.name] === 0) {
	                    stylesheets[this.constructor.name].detach();
	                    delete stylesheets[this.constructor.name];
	                    delete instanceCountByConstructor[this.constructor.name];
	                }
	            }
	
	            /**
	             * This method should be implemented by extending classes.
	             * @abstract
	             */
	
	        }, {
	            key: 'getStyles',
	            value: function getStyles() {
	                throw new Error('Your component must define a getStyles method, which returns the JSS-compatible JSON-formatted styling of your component.');
	            }
	        }, {
	            key: '_init',
	            value: function _init() {
	                this._createStylesheet();
	                this.classList.add(this.stylesheet.classes[this.constructor.name]);
	                this.init();
	            }
	        }, {
	            key: 'init',
	            value: function init() {/* to be defined by child class */}
	        }, {
	            key: '_deinit',
	            value: function _deinit() {
	                // XXX: We can clean up the style after some time, for example like 1
	                // minute, or something, instead of instantly.
	                this._destroyStylesheet();
	                this._initialized = false;
	                this.deinit();
	            }
	        }, {
	            key: 'deinit',
	            value: function deinit() {/* to be defined by child class */}
	        }, {
	            key: 'stylesheet',
	            get: function get() {
	                return stylesheets[this.constructor.name];
	            }
	        }]);
	
	        return WebComponent;
	    }(elementClass);
	
	    classCache.set(elementClass, WebComponent);
	    return WebComponent;
	}

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jss = __webpack_require__(386);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _jssNested = __webpack_require__(401);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	var _jssExtend = __webpack_require__(402);
	
	var _jssExtend2 = _interopRequireDefault(_jssExtend);
	
	var _jssPx = __webpack_require__(403);
	
	var _jssPx2 = _interopRequireDefault(_jssPx);
	
	var _jssVendorPrefixer = __webpack_require__(404);
	
	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);
	
	var _jssCamelCase = __webpack_require__(410);
	
	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);
	
	var _jssPropsSort = __webpack_require__(411);
	
	var _jssPropsSort2 = _interopRequireDefault(_jssPropsSort);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = _jss2.default.create();
	
	jss.use((0, _jssNested2.default)());
	jss.use((0, _jssExtend2.default)());
	jss.use((0, _jssPx2.default)());
	jss.use((0, _jssVendorPrefixer2.default)());
	jss.use((0, _jssCamelCase2.default)());
	jss.use((0, _jssPropsSort2.default)());
	
	exports.default = jss;

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rule = exports.StyleSheet = exports.Jss = undefined;
	
	var _Jss = __webpack_require__(387);
	
	var _Jss2 = _interopRequireDefault(_Jss);
	
	var _StyleSheet = __webpack_require__(388);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _Rule = __webpack_require__(391);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = new _Jss2.default();
	
	// Hotfix for babel 5 migration, will be removed in version 4.0.0
	/**
	 * StyleSheets written in javascript.
	 *
	 * @copyright Oleg Slobodskoi 2014-2016
	 * @website https://github.com/jsstyles/jss
	 * @license MIT
	 */
	module.exports = exports = jss;
	
	// For testing only.
	exports.Jss = _Jss2.default;
	exports.StyleSheet = _StyleSheet2.default;
	exports.Rule = _Rule2.default;
	exports.default = jss;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StyleSheet = __webpack_require__(388);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _PluginsRegistry = __webpack_require__(399);
	
	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);
	
	var _SheetsRegistry = __webpack_require__(400);
	
	var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);
	
	var _utils = __webpack_require__(389);
	
	var _createRule2 = __webpack_require__(390);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(396);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Main Jss class.
	 *
	 * @api public
	 */
	
	var Jss = function () {
	  function Jss() {
	    _classCallCheck(this, Jss);
	
	    this.sheets = new _SheetsRegistry2.default();
	    this.plugins = new _PluginsRegistry2.default();
	    this.uid = _utils.uid;
	    this.version = '3.11.1';
	  }
	
	  /**
	   * Creates a new instance of Jss.
	   *
	   * @see Jss
	   * @api public
	   */
	
	
	  _createClass(Jss, [{
	    key: 'create',
	    value: function create() {
	      return new Jss();
	    }
	
	    /**
	     * Create a stylesheet.
	     *
	     * @see StyleSheet
	     * @api public
	     */
	
	  }, {
	    key: 'createStyleSheet',
	    value: function createStyleSheet(rules, options) {
	      var sheet = new _StyleSheet2.default(rules, _extends({}, options, { jss: this }));
	      this.sheets.add(sheet);
	      return sheet;
	    }
	
	    /**
	     * Create a rule.
	     *
	     * @see createRule
	     * @api public
	     */
	
	  }, {
	    key: 'createRule',
	    value: function createRule(selector, style, options) {
	      // Enable rule without selector.
	      if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
	        options = style;
	        style = selector;
	        selector = null;
	      }
	      var rule = (0, _createRule3.default)(selector, style, _extends({}, options, {
	        jss: this,
	        Renderer: (0, _findRenderer2.default)(options)
	      }));
	      this.plugins.run(rule);
	      return rule;
	    }
	
	    /**
	     * Register plugin. Passed function will be invoked with a rule instance.
	     *
	     * @param {Function} plugins
	     * @api public
	     */
	
	  }, {
	    key: 'use',
	    value: function use() {
	      var _this = this;
	
	      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
	        plugins[_key] = arguments[_key];
	      }
	
	      plugins.forEach(function (plugin) {
	        return _this.plugins.use(plugin);
	      });
	      return this;
	    }
	  }]);
	
	  return Jss;
	}();
	
	exports.default = Jss;

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(389);
	
	var _createRule2 = __webpack_require__(390);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(396);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * StyleSheet model.
	 *
	 * Options:
	 *
	 * - `media` media query - attribute of style element.
	 * - `meta` meta information about this style - attribute of style element, for e.g. you could pass
	 * component name for easier debugging.
	 * - `named` true by default - keys are names, selectors will be generated, if false - keys are
	 * global selectors.
	 * - `link` link jss `Rule` instances with DOM `CSSRule` instances so that styles, can be modified
	 * dynamically, false by default because it has some performance cost.
	 * - `element` style element, will create one by default
	 *
	 * @param {Object} [rules] object with selectors and declarations
	 * @param {Object} [options]
	 * @api public
	 */
	
	var StyleSheet = function () {
	  function StyleSheet(rules, options) {
	    _classCallCheck(this, StyleSheet);
	
	    this.options = _extends({}, options);
	    if (this.options.named == null) this.options.named = true;
	    this.rules = Object.create(null);
	    this.classes = Object.create(null);
	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;
	
	    var Renderer = (0, _findRenderer2.default)(this.options);
	    this.options.Renderer = Renderer;
	    this.renderer = new Renderer(this.options);
	
	    for (var name in rules) {
	      this.createRule(name, rules[name]);
	    }
	  }
	
	  /**
	   * Attach renderable to the render tree.
	   *
	   * @api public
	   * @return {StyleSheet}
	   */
	
	
	  _createClass(StyleSheet, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.attached) return this;
	      if (!this.deployed) this.deploy();
	      this.renderer.attach();
	      if (!this.linked && this.options.link) this.link();
	      this.attached = true;
	      return this;
	    }
	
	    /**
	     * Remove renderable from render tree.
	     *
	     * @return {StyleSheet}
	     * @api public
	     */
	
	  }, {
	    key: 'detach',
	    value: function detach() {
	      if (!this.attached) return this;
	      this.renderer.detach();
	      this.attached = false;
	      return this;
	    }
	
	    /**
	     * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
	     * has been rendered first time.
	     *
	     * @param {Object} [name] can be selector or name if ´options.named is true
	     * @param {Object} style property/value hash
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'addRule',
	    value: function addRule(name, style) {
	      var rule = this.createRule(name, style);
	      // Don't insert rule directly if there is no stringified version yet.
	      // It will be inserted all together when .attach is called.
	      if (this.deployed) {
	        var renderable = this.renderer.insertRule(rule);
	        if (this.options.link) rule.renderable = renderable;
	      }
	      return rule;
	    }
	
	    /**
	     * Create rules, will render also after stylesheet was rendered the first time.
	     *
	     * @param {Object} rules name:style hash.
	     * @return {Array} array of added rules
	     * @api public
	     */
	
	  }, {
	    key: 'addRules',
	    value: function addRules(rules) {
	      var added = [];
	      for (var name in rules) {
	        added.push(this.addRule(name, rules[name]));
	      }
	      return added;
	    }
	
	    /**
	     * Get a rule.
	     *
	     * @param {String} name can be selector or name if `named` option is true.
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules[name];
	    }
	
	    /**
	     * Convert rules to a CSS string.
	     *
	     * @param {Object} options
	     * @return {String}
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      var rules = this.rules;
	
	      var stringified = Object.create(null);
	      var str = '';
	      for (var name in rules) {
	        var rule = rules[name];
	        // We have the same rule referenced twice if using named rules.
	        // By name and by selector.
	        if (stringified[rule.id]) {
	          continue;
	        }
	
	        if (rule.style && (0, _utils.isEmptyObject)(rule.style)) {
	          continue;
	        }
	
	        if (rule.rules && (0, _utils.isEmptyObject)(rule.rules)) {
	          continue;
	        }
	
	        if (str) str += '\n';
	
	        str += rule.toString(options);
	        stringified[rule.id] = true;
	      }
	      return str;
	    }
	
	    /**
	     * Create a rule, will not render after stylesheet was rendered the first time.
	     * Will link the rule in `this.rules`.
	     *
	     * @see createRule
	     * @api private
	     */
	
	  }, {
	    key: 'createRule',
	    value: function createRule(name, style, options) {
	      options = _extends({}, options, {
	        sheet: this,
	        jss: this.options.jss,
	        Renderer: this.options.Renderer
	      });
	      // Scope options overwrite instance options.
	      if (options.named == null) options.named = this.options.named;
	      var rule = (0, _createRule3.default)(name, style, options);
	      this.registerRule(rule);
	      options.jss.plugins.run(rule);
	      return rule;
	    }
	
	    /**
	     * Register a rule in `sheet.rules` and `sheet.classes` maps.
	     *
	     * @param {Rule} rule
	     * @api public
	     */
	
	  }, {
	    key: 'registerRule',
	    value: function registerRule(rule) {
	      // Children of container rules should not be registered.
	      if (rule.options.parent) {
	        // We need to register child rules of conditionals in classes, otherwise
	        // user can't access generated class name if it doesn't overrides
	        // a regular rule.
	        if (rule.name && rule.className) {
	          this.classes[rule.name] = rule.className;
	        }
	        return this;
	      }
	
	      if (rule.name) {
	        this.rules[rule.name] = rule;
	        if (rule.className) this.classes[rule.name] = rule.className;
	      }
	      if (rule.selector) {
	        this.rules[rule.selector] = rule;
	      }
	      return this;
	    }
	
	    /**
	     * Unregister a rule.
	     *
	     * @param {Rule} rule
	     * @api public
	     */
	
	  }, {
	    key: 'unregisterRule',
	    value: function unregisterRule(rule) {
	      // Children of a conditional rule are not registered.
	      if (!rule.options.parent) {
	        delete this.rules[rule.name];
	        delete this.rules[rule.selector];
	      }
	      delete this.classes[rule.name];
	      return this;
	    }
	
	    /**
	     * Deploy pure CSS string to a renderable.
	     *
	     * @return {StyleSheet}
	     * @api private
	     */
	
	  }, {
	    key: 'deploy',
	    value: function deploy() {
	      this.renderer.deploy(this);
	      this.deployed = true;
	      return this;
	    }
	
	    /**
	     * Link renderable CSS rules with their corresponding models.
	     *
	     * @return {StyleSheet}
	     * @api private
	     */
	
	  }, {
	    key: 'link',
	    value: function link() {
	      var renderables = this.renderer.getRules();
	      for (var selector in renderables) {
	        var rule = this.rules[selector];
	        if (rule) rule.renderable = renderables[selector];
	      }
	      this.linked = true;
	      return this;
	    }
	  }]);
	
	  return StyleSheet;
	}();
	
	exports.default = StyleSheet;

/***/ },
/* 389 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clone = clone;
	exports.isEmptyObject = isEmptyObject;
	exports.toCSS = toCSS;
	var stringify = JSON.stringify;
	var parse = JSON.parse;
	
	/**
	 * Deeply clone object using serialization.
	 * Expects object to be plain and without cyclic dependencies.
	 *
	 * http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	 *
	 * @type {Object} obj
	 * @return {Object}
	 */
	function clone(obj) {
	  return parse(stringify(obj));
	}
	
	/**
	 * Determine whether an object is empty or not.
	 * More performant than a `Object.keys(obj).length > 0`
	 *
	 * @type {Object} obj
	 * @return {Boolean}
	 */
	function isEmptyObject(obj) {
	  for (var key in obj) {
	    return false;
	  } // eslint-disable-line no-unused-vars
	
	  return true;
	}
	
	/**
	 * Simple very fast UID generation based on a global counter.
	 */
	var uid = exports.uid = function () {
	  var globalReference = typeof window == 'undefined' ? global : window;
	  var namespace = '__JSS_VERSION_COUNTER__';
	  if (globalReference[namespace] == null) globalReference[namespace] = 0;
	
	  // In case we have more than one jss version.
	  var versionCounter = globalReference[namespace]++;
	  var ruleCounter = 0;
	
	  /**
	   * Returns a uid.
	   * Ensures uniqueness if more than 1 jss version is used.
	   *
	   * @api public
	   * @return {String}
	   */
	  function get() {
	    return 'jss-' + versionCounter + '-' + ruleCounter++;
	  }
	
	  /**
	   * Resets the counter.
	   *
	   * @api public
	   */
	  function reset() {
	    ruleCounter = 0;
	  }
	
	  return { get: get, reset: reset };
	}();
	
	/**
	 * Indent a string.
	 *
	 * http://jsperf.com/array-join-vs-for
	 *
	 * @param {Number} level
	 * @param {String} str
	 * @return {String}
	 */
	function indent(level, str) {
	  var indentStr = '';
	  for (var index = 0; index < level; index++) {
	    indentStr += '  ';
	  }return indentStr + str;
	}
	
	/**
	 * Converts a Rule to CSS string.
	 *
	 * Options:
	 * - `selector` use `false` to get a rule without selector
	 * - `indentationLevel` level of indentation
	 *
	 * @param {String} selector
	 * @param {Object} style
	 * @param {Object} options
	 * @return {String}
	 */
	function toCSS(selector, style) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  var indentationLevel = options.indentationLevel || 0;
	  var str = '';
	
	  if (options.selector !== false) {
	    str += indent(indentationLevel, selector + ' {');
	    indentationLevel++;
	  }
	
	  for (var prop in style) {
	    var value = style[prop];
	    // We want to generate multiple style with identical property names.
	    if (Array.isArray(value)) {
	      for (var index = 0; index < value.length; index++) {
	        str += '\n' + indent(indentationLevel, prop + ': ' + value[index] + ';');
	      }
	    } else str += '\n' + indent(indentationLevel, prop + ': ' + value + ';');
	  }
	
	  if (options.selector !== false) str += '\n' + indent(--indentationLevel, '}');
	
	  return str;
	}
	
	/**
	 * Get class names from a selector.
	 *
	 * @param {String} selector
	 * @return {String}
	 */
	var findClassNames = exports.findClassNames = function () {
	  var dotsRegExp = /[.]/g;
	  var classesRegExp = /[.][^ ,]+/g;
	
	  return function (selector) {
	    var classes = selector.match(classesRegExp);
	
	    if (!classes) return '';
	
	    return classes.join(' ').replace(dotsRegExp, '');
	  };
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createRule;
	
	var _Rule = __webpack_require__(391);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	var _SimpleRule = __webpack_require__(392);
	
	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);
	
	var _KeyframeRule = __webpack_require__(393);
	
	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);
	
	var _ConditionalRule = __webpack_require__(394);
	
	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);
	
	var _FontFaceRule = __webpack_require__(395);
	
	var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map of at rules to corresponding implementation class.
	 *
	 * @type {Object}
	 */
	var atRuleClassMap = {
	  '@charset': _SimpleRule2.default,
	  '@import': _SimpleRule2.default,
	  '@namespace': _SimpleRule2.default,
	  '@keyframes': _KeyframeRule2.default,
	  '@media': _ConditionalRule2.default,
	  '@supports': _ConditionalRule2.default,
	  '@font-face': _FontFaceRule2.default
	};
	
	var atRuleNameRegExp = /^@[^ ]+/;
	
	/**
	 * Create rule factory.
	 *
	 * @param {Object} [selector] if you don't pass selector - it will be generated
	 * @param {Object} [style] declarations block
	 * @param {Object} [options] rule options
	 * @return {Object} rule
	 * @api private
	 */
	function createRule(selector) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  // Is an at-rule.
	  if (selector && selector[0] === '@') {
	    var name = atRuleNameRegExp.exec(selector)[0];
	    var AtRule = atRuleClassMap[name];
	    return new AtRule(selector, style, options);
	  }
	
	  if (options.named == null) options.named = true;
	  return new _Rule2.default(selector, style, options);
	}

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(389);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Regular rules.
	 *
	 * @api public
	 */
	
	var Rule = function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);
	
	    this.id = _utils.uid.get();
	    this.type = 'regular';
	    this.options = options;
	    this.selectorText = selector || '';
	    this.className = options.className || '';
	    this.originalStyle = style;
	    // We expect style to be plain object.
	    this.style = (0, _utils.clone)(style);
	    if (options.named) {
	      this.name = selector;
	      if (!this.className) {
	        this.className = this.name ? this.name + '--' + this.id : this.id;
	      }
	      this.selectorText = '.' + this.className;
	    }
	  }
	
	  /**
	   * Set selector string.
	   * Attenition: use this with caution. Most browser didn't implement selector
	   * text setter, so this will result in rerendering of entire style sheet.
	   *
	   * @param {String} selector
	   * @api public
	   */
	
	
	  _createClass(Rule, [{
	    key: 'prop',
	
	
	    /**
	     * Get or set a style property.
	     *
	     * @param {String} name
	     * @param {String|Number} [value]
	     * @return {Rule|String|Number}
	     * @api public
	     */
	    value: function prop(name, value) {
	      var style = this.options.Renderer.style;
	      // Its a setter.
	
	      if (value != null) {
	        this.style[name] = value;
	        // Only defined if option linked is true.
	        if (this.renderable) style(this.renderable, name, value);
	        return this;
	      }
	      // Its a getter, read the value from the DOM if its not cached.
	      if (this.renderable && this.style[name] == null) {
	        // Cache the value after we have got it from the DOM once.
	        this.style[name] = style(this.renderable, name);
	      }
	      return this.style[name];
	    }
	
	    /**
	     * Apply rule to an element inline.
	     *
	     * @param {Element} renderable
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'applyTo',
	    value: function applyTo(renderable) {
	      for (var prop in this.style) {
	        var value = this.style[prop];
	        var style = this.options.Renderer.style;
	
	        if (Array.isArray(value)) {
	          for (var index = 0; index < value.length; index++) {
	            style(renderable, prop, value[index]);
	          }
	        } else style(renderable, prop, value);
	      }
	      return this;
	    }
	
	    /**
	     * Returns JSON representation of the rule.
	     * Array of values is not supported.
	     *
	     * @return {Object}
	     * @api public
	     */
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var style = Object.create(null);
	      for (var prop in this.style) {
	        if (_typeof(this.style[prop]) != 'object') {
	          style[prop] = this.style[prop];
	        }
	      }
	      return style;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @see toCSS
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return (0, _utils.toCSS)(this.selector, this.style, options);
	    }
	  }, {
	    key: 'selector',
	    set: function set() {
	      var selector = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var _options = this.options;
	      var Renderer = _options.Renderer;
	      var sheet = _options.sheet;
	
	      // After we modify selector, ref by old selector needs to be removed.
	
	      if (sheet) sheet.unregisterRule(this);
	
	      this.selectorText = selector;
	      this.className = (0, _utils.findClassNames)(selector);
	
	      if (!this.renderable) {
	        // Register the rule with new selector.
	        if (sheet) sheet.registerRule(this);
	        return;
	      }
	
	      var changed = Renderer.setSelector(this.renderable, selector);
	
	      if (changed) {
	        sheet.registerRule(this);
	        return;
	      }
	
	      // If selector setter is not implemented, rerender the sheet.
	      // We need to delete renderable from the rule, because when sheet.deploy()
	      // calls rule.toString, it will get the old selector.
	      delete this.renderable;
	      sheet.registerRule(this).deploy().link();
	    }
	
	    /**
	     * Get selector string.
	     *
	     * @return {String}
	     * @api public
	     */
	    ,
	    get: function get() {
	      if (this.renderable) {
	        return this.options.Renderer.getSelector(this.renderable);
	      }
	
	      return this.selectorText;
	    }
	  }]);
	
	  return Rule;
	}();
	
	exports.default = Rule;

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(389);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Rule like @charset, @import, @namespace.
	 *
	 * @api public
	 */
	
	var SimpleRule = function () {
	  function SimpleRule(name, value, options) {
	    _classCallCheck(this, SimpleRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'simple';
	    this.name = name;
	    this.value = value;
	    this.options = options;
	  }
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api public
	   */
	
	
	  _createClass(SimpleRule, [{
	    key: 'toString',
	    value: function toString() {
	      if (Array.isArray(this.value)) {
	        var str = '';
	        for (var index = 0; index < this.value.length; index++) {
	          str += this.name + ' ' + this.value[index] + ';';
	          if (this.value[index + 1]) str += '\n';
	        }
	        return str;
	      }
	
	      return this.name + ' ' + this.value + ';';
	    }
	  }]);
	
	  return SimpleRule;
	}();
	
	exports.default = SimpleRule;

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(389);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Keyframe rule.
	 *
	 * @api private
	 */
	
	var KeyframeRule = function () {
	  function KeyframeRule(selector, frames, options) {
	    _classCallCheck(this, KeyframeRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'keyframe';
	    this.selector = selector;
	    this.options = options;
	    this.frames = this.formatFrames(frames);
	  }
	
	  /**
	   * Creates formatted frames where every frame value is a rule instance.
	   *
	   * @api private
	   */
	
	
	  _createClass(KeyframeRule, [{
	    key: 'formatFrames',
	    value: function formatFrames(frames) {
	      var newFrames = Object.create(null);
	      for (var name in frames) {
	        var options = _extends({}, this.options, { named: false, parent: this });
	        newFrames[name] = this.options.jss.createRule(name, frames[name], options);
	      }
	      return newFrames;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @return {String}
	     * @api private
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      var options = { indentationLevel: 1 };
	      for (var name in this.frames) {
	        str += this.frames[name].toString(options) + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);
	
	  return KeyframeRule;
	}();
	
	exports.default = KeyframeRule;

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(389);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Conditional rule for @media, @supports
	 *
	 * @api public
	 */
	
	var ConditionalRule = function () {
	  function ConditionalRule(selector, styles, options) {
	    _classCallCheck(this, ConditionalRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'conditional';
	    this.selector = selector;
	    this.options = options;
	    this.rules = Object.create(null);
	    for (var name in styles) {
	      this.createRule(name, styles[name]);
	    }
	  }
	
	  /**
	   * A conditional rule always contains child rules.
	   *
	   * @param {Object} styles
	   * @return {Array} rules
	   * @api public
	   */
	
	
	  _createClass(ConditionalRule, [{
	    key: 'createRule',
	    value: function createRule(name, style, options) {
	      var newOptions = _extends({}, this.options, { parent: this });
	      var _newOptions = newOptions;
	      var sheet = _newOptions.sheet;
	      var jss = _newOptions.jss;
	      // We have already a rule in the current style sheet with this name,
	      // This new rule is supposed to overwrite the first one, for this we need
	      // to ensure it will have the same className/selector.
	
	      var existingRule = sheet && sheet.getRule(name);
	      var className = existingRule ? existingRule.className : null;
	      if (className || options) {
	        newOptions = _extends({}, newOptions, { className: className }, options);
	      }
	      var rule = (sheet || jss).createRule(name, style, newOptions);
	      this.rules[name] = rule;
	      return rule;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @return {String}
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      for (var name in this.rules) {
	        var rule = this.rules[name];
	        if (rule.style && (0, _utils.isEmptyObject)(rule.style)) {
	          continue;
	        }
	        var ruleStr = rule.toString({ indentationLevel: 1 });
	        str += ruleStr + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);
	
	  return ConditionalRule;
	}();
	
	exports.default = ConditionalRule;

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(389);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Font-face rules.
	 *
	 * @api public
	 */
	
	var Rule = function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);
	
	    this.id = _utils.uid.get();
	    this.type = 'font-face';
	    this.options = options;
	    this.selector = selector;
	    this.style = style;
	  }
	
	  /**
	   * Generates a CSS string.
	   *
	   * @see toCSS
	   * @api public
	   */
	
	
	  _createClass(Rule, [{
	    key: 'toString',
	    value: function toString(options) {
	      if (Array.isArray(this.style)) {
	        var str = '';
	        for (var index = 0; index < this.style.length; index++) {
	          str += (0, _utils.toCSS)(this.selector, this.style[index], options);
	          if (this.style[index + 1]) str += '\n';
	        }
	        return str;
	      }
	
	      return (0, _utils.toCSS)(this.selector, this.style, options);
	    }
	  }]);
	
	  return Rule;
	}();
	
	exports.default = Rule;

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findRenderer;
	
	var _DomRenderer = __webpack_require__(397);
	
	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);
	
	var _VirtualRenderer = __webpack_require__(398);
	
	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Find proper renderer.
	 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
	 * detected, used for testing only.
	 *
	 * @param {Object} options
	 * @return {Renderer}
	 * @api private
	 */
	function findRenderer() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (options.Renderer) return options.Renderer;
	  return options.virtual || typeof document == 'undefined' ? _VirtualRenderer2.default : _DomRenderer2.default;
	}

/***/ },
/* 397 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * DOM rendering backend for StyleSheet.
	 *
	 * @api private
	 */
	
	var DomRenderer = function () {
	  _createClass(DomRenderer, null, [{
	    key: 'style',
	    value: function style(element, name, value) {
	      try {
	        if (value == null) return element.style[name];
	        element.style[name] = value;
	      } catch (err) {
	        // IE8 may throw if property is unknown.
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'setSelector',
	    value: function setSelector(cssRule, selector) {
	      cssRule.selectorText = selector;
	
	      // Return false if setter was not successful.
	      // Currently works in chrome only.
	      return cssRule.selectorText === selector;
	    }
	  }, {
	    key: 'getSelector',
	    value: function getSelector(cssRule) {
	      return cssRule.selectorText;
	    }
	  }]);
	
	  function DomRenderer(options) {
	    _classCallCheck(this, DomRenderer);
	
	    this.head = document.head || document.getElementsByTagName('head')[0];
	    this.element = options.element || document.createElement('style');
	    // IE8 will not have `styleSheet` prop without `type and `styleSheet.cssText`
	    // is the only way to render on IE8.
	    this.element.type = 'text/css';
	    if (options.media) this.element.setAttribute('media', options.media);
	    if (options.meta) this.element.setAttribute('data-meta', options.meta);
	  }
	
	  /**
	   * Insert style element into render tree.
	   *
	   * @api private
	   */
	
	
	  _createClass(DomRenderer, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.element.parendNode) return;
	      this.head.appendChild(this.element);
	    }
	
	    /**
	     * Remove style element from render tree.
	     *
	     * @api private
	     */
	
	  }, {
	    key: 'detach',
	    value: function detach() {
	      this.element.parentNode.removeChild(this.element);
	    }
	
	    /**
	     * Inject CSS string into element.
	     *
	     * @param {String} cssStr
	     * @api private
	     */
	
	  }, {
	    key: 'deploy',
	    value: function deploy(sheet) {
	      var css = '\n' + sheet.toString() + '\n';
	      if ('sheet' in this.element) this.element.innerHTML = css;
	      // On IE8 the only way to render is `styleSheet.cssText`.
	      else if ('styleSheet' in this.element) this.element.styleSheet.cssText = css;
	    }
	
	    /**
	     * Insert a rule into element.
	     *
	     * @param {Rule} rule
	     * @return {CSSStyleRule}
	     * @api private
	     */
	
	  }, {
	    key: 'insertRule',
	    value: function insertRule(rule) {
	      // IE8 has only `styleSheet` and `styleSheet.rules`
	      var sheet = this.element.sheet || this.element.styleSheet;
	      var cssRules = sheet.cssRules || sheet.rules;
	      var nextIndex = cssRules.length;
	      if (sheet.insertRule) sheet.insertRule(rule.toString(), nextIndex);else sheet.addRule(rule.selector, rule.toString({ selector: false }), nextIndex);
	      return cssRules[nextIndex];
	    }
	
	    /**
	     * Get all rules elements.
	     *
	     * @return {Object} rules map, where key is selector, CSSStyleRule is value.
	     * @api private
	     */
	
	  }, {
	    key: 'getRules',
	    value: function getRules() {
	      // IE8 has only `styleSheet` and `styleSheet.rules`
	      var sheet = this.element.sheet || this.element.styleSheet;
	      var cssRules = sheet.rules || sheet.cssRules;
	      var rules = Object.create(null);
	      for (var index = 0; index < cssRules.length; index++) {
	        var cssRule = cssRules[index];
	        rules[cssRule.selectorText] = cssRule;
	      }
	      return rules;
	    }
	  }]);
	
	  return DomRenderer;
	}();
	
	exports.default = DomRenderer;

/***/ },
/* 398 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	
	var VirtualRenderer = function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }
	
	  _createClass(VirtualRenderer, [{
	    key: "attach",
	    value: function attach() {}
	  }, {
	    key: "detach",
	    value: function detach() {}
	  }, {
	    key: "deploy",
	    value: function deploy() {}
	  }, {
	    key: "insertRule",
	    value: function insertRule() {}
	  }, {
	    key: "getRules",
	    value: function getRules() {
	      return {};
	    }
	  }], [{
	    key: "style",
	    value: function style() {}
	  }, {
	    key: "setSelector",
	    value: function setSelector() {}
	  }, {
	    key: "getSelector",
	    value: function getSelector() {}
	  }]);
	
	  return VirtualRenderer;
	}();
	
	exports.default = VirtualRenderer;

/***/ },
/* 399 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Register a plugin, run a plugin.
	 *
	 * @api public
	 */
	
	var PluginsRegistry = function () {
	  function PluginsRegistry() {
	    _classCallCheck(this, PluginsRegistry);
	
	    this.registry = [];
	  }
	
	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} fn
	   * @api public
	   */
	
	
	  _createClass(PluginsRegistry, [{
	    key: "use",
	    value: function use(fn) {
	      this.registry.push(fn);
	    }
	
	    /**
	     * Execute all registered plugins.
	     *
	     * @param {Rule} rule
	     * @api private
	     */
	
	  }, {
	    key: "run",
	    value: function run(rule) {
	      for (var index = 0; index < this.registry.length; index++) {
	        this.registry[index](rule);
	      }
	    }
	  }]);
	
	  return PluginsRegistry;
	}();
	
	exports.default = PluginsRegistry;

/***/ },
/* 400 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Sheets registry to access them all at one place.
	 *
	 * @api public
	 */
	
	var SheetsRegistry = function () {
	  function SheetsRegistry() {
	    _classCallCheck(this, SheetsRegistry);
	
	    this.registry = [];
	  }
	
	  /**
	   * Register a style sheet.
	   *
	   * @param {StyleSheet} sheet
	   * @api public
	   */
	
	
	  _createClass(SheetsRegistry, [{
	    key: 'add',
	    value: function add(sheet) {
	      this.registry.push(sheet);
	    }
	
	    /**
	     * Returns CSS string with all Style Sheets.
	     *
	     * @param {StyleSheet} sheet
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.registry.map(function (sheet) {
	        return sheet.toString(options);
	      }).join('\n');
	    }
	  }]);
	
	  return SheetsRegistry;
	}();
	
	exports.default = SheetsRegistry;

/***/ },
/* 401 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = jssNested;
	var regExp = /&/g;
	
	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssNested() {
	  return function (rule) {
	    if (rule.type !== 'regular') return;
	    var _rule$options = rule.options;
	    var sheet = _rule$options.sheet;
	    var jss = _rule$options.jss;
	    var parent = _rule$options.parent;
	
	    var container = sheet || jss;
	    var options = void 0;
	
	    if (parent && parent.type === 'conditional') {
	      container = parent;
	    }
	
	    for (var prop in rule.style) {
	      if (prop[0] === '&') {
	        if (!options) options = _extends({}, rule.options, { named: false });
	        var name = prop.replace(regExp, rule.selector);
	        container.createRule(name, rule.style[prop], options);
	        delete rule.style[prop];
	      }
	    }
	  };
	}

/***/ },
/* 402 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = jssExtend;
	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssExtend() {
	  function extend(rule, newStyle, style) {
	    if (typeof style.extend == 'string') {
	      if (rule.options && rule.options.sheet) {
	        var refRule = rule.options.sheet.getRule(style.extend);
	        if (refRule) extend(rule, newStyle, refRule.originalStyle);
	      }
	    } else if (Array.isArray(style.extend)) {
	      for (var index = 0; index < style.extend.length; index++) {
	        extend(rule, newStyle, style.extend[index]);
	      }
	    } else {
	      for (var prop in style.extend) {
	        if (prop === 'extend') extend(rule, newStyle, style.extend.extend);else newStyle[prop] = style.extend[prop];
	      }
	    }
	
	    // Copy base style.
	    for (var _prop in style) {
	      if (_prop !== 'extend') newStyle[_prop] = style[_prop];
	    }
	
	    return newStyle;
	  }
	
	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;
	    rule.style = extend(rule, {}, rule.style);
	  };
	}

/***/ },
/* 403 */
/***/ function(module, exports) {

	// Don't automatically add 'px' to these possibly-unitless properties.
	// Borrowed from jquery.
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssPx;
	var cssNumber = {
	  'animation-iteration-count': true,
	  'box-ordinal-group': true,
	  'column-count': true,
	  'fill-opacity': true,
	  'flex': true,
	  'flex-grow': true,
	  'flex-order': true,
	  'flex-shrink': true,
	  'font-weight': true,
	  'line-height': true,
	  'opacity': true,
	  'order': true,
	  'orphans': true,
	  'stop-opacity': true,
	  'tab-size': 1,
	  'widows': true,
	  'z-index': true,
	  'zoom': true
	};
	
	/**
	 * Add px to numeric values.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssPx() {
	  return function (rule) {
	    var style = rule.style;
	
	    if (!style) return;
	    for (var prop in style) {
	      if (!cssNumber[prop] && typeof style[prop] == 'number') {
	        style[prop] += 'px';
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssVendorPrefixer;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _cssVendor = __webpack_require__(405);
	
	var vendor = _interopRequireWildcard(_cssVendor);
	
	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssVendorPrefixer() {
	  return function (rule) {
	    if (rule.type === 'keyframe') {
	      rule.selector = '@' + vendor.prefix.css + 'keyframes' + rule.selector.substr(10);
	      return;
	    }
	
	    if (rule.type !== 'regular') return;
	
	    for (var prop in rule.style) {
	      var value = rule.style[prop];
	
	      var changeProp = false;
	      var supportedProp = vendor.supportedProperty(prop);
	      if (supportedProp && supportedProp !== prop) changeProp = true;
	
	      var changeValue = false;
	      var supportedValue = vendor.supportedValue(supportedProp, value);
	      if (supportedValue && supportedValue !== value) changeValue = true;
	
	      if (changeProp || changeValue) {
	        if (changeProp) delete rule.style[prop];
	        rule.style[supportedProp || prop] = supportedValue || value;
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;
	
	var _prefix = __webpack_require__(406);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _supportedProperty = __webpack_require__(407);
	
	var _supportedProperty2 = _interopRequireDefault(_supportedProperty);
	
	var _supportedValue = __webpack_require__(409);
	
	var _supportedValue2 = _interopRequireDefault(_supportedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  prefix: _prefix2.default,
	  supportedProperty: _supportedProperty2.default,
	  supportedValue: _supportedValue2.default
	}; /**
	    * CSS Vendor prefix detection and property feature testing.
	    *
	    * @copyright Oleg Slobodskoi 2015
	    * @website https://github.com/jsstyles/css-vendor
	    * @license MIT
	    */
	
	exports.prefix = _prefix2.default;
	exports.supportedProperty = _supportedProperty2.default;
	exports.supportedValue = _supportedValue2.default;

/***/ },
/* 406 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Export javascript style and css style vendor prefixes.
	 * Based on "transform" support test.
	 */
	
	var js = '';
	var css = '';
	
	// We should not do anything if required serverside.
	if (typeof document != 'undefined') {
	  var jsCssMap = {
	    Webkit: '-webkit-',
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-'
	  };
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      js = key;
	      css = jsCssMap[key];
	      break;
	    }
	  }
	}
	
	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String}}
	 * @api public
	 */
	exports.default = { js: js, css: css };

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportedProperty;
	
	var _prefix = __webpack_require__(406);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _camelize = __webpack_require__(408);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var el = void 0;
	var cache = {};
	
	// For server-side rendering.
	if (typeof document != 'undefined') {
	  el = document.createElement('p');
	
	  /**
	   * We test every property on vendor prefix requirement.
	   * Once tested, result is cached. It gives us up to 70% perf boost.
	   * http://jsperf.com/element-style-object-access-vs-plain-object
	   *
	   * Prefill cache with known css properties to reduce amount of
	   * properties we need to feature test at runtime.
	   * http://davidwalsh.name/vendor-prefix
	   */
	  var computed = window.getComputedStyle(document.documentElement, '');
	  for (var key in computed) {
	    cache[computed[key]] = computed[key];
	  }
	}
	
	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedProperty(prop) {
	  // For server-side rendering.
	  if (!el) return prop;
	
	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];
	
	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if ((0, _camelize2.default)(prop) in el.style) {
	    cache[prop] = prop;
	  }
	  // Test if property is supported with vendor prefix.
	  else if (_prefix2.default.js + (0, _camelize2.default)('-' + prop) in el.style) {
	      cache[prop] = _prefix2.default.css + prop;
	    } else {
	      cache[prop] = false;
	    }
	
	  return cache[prop];
	}

/***/ },
/* 408 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var regExp = /[-\s]+(.)?/g;
	
	/**
	 * Convert dash separated strings to camel cased.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function camelize(str) {
	  return str.replace(regExp, toUpper);
	}
	
	function toUpper(match, c) {
	  return c ? c.toUpperCase() : '';
	}

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportedValue;
	
	var _prefix = __webpack_require__(406);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cache = {};
	var el = void 0;
	
	// For server-side rendering.
	if (typeof document != 'undefined') el = document.createElement('p');
	
	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedValue(property, value) {
	  // For server-side rendering.
	  if (!el) return value;
	
	  // It is a string or a number as a string like '1'.
	  // We want only prefixable values here.
	  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;
	
	  var cacheKey = property + value;
	
	  if (cache[cacheKey] != null) return cache[cacheKey];
	
	  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
	  try {
	    // Test value as it is.
	    el.style[property] = value;
	  } catch (err) {
	    cache[cacheKey] = false;
	    return false;
	  }
	
	  // Value is supported as it is.
	  if (el.style[property] === value) {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2.default.css + value;
	
	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';
	
	    el.style[property] = value;
	
	    // Value is supported with vendor prefix.
	    if (el.style[property] === value) cache[cacheKey] = value;
	  }
	
	  if (!cache[cacheKey]) cache[cacheKey] = false;
	
	  return cache[cacheKey];
	}

/***/ },
/* 410 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regExp = /([A-Z])/g;
	
	/**
	 * Replace a string passed from String#replace.
	 * @param {String} str
	 * @return {String}
	 */
	function replace(str) {
	  return '-' + str.toLowerCase();
	}
	
	/**
	 * Convert camel cased properties of a single style to dasherized.
	 *
	 * @param {Object} style
	 * @return {Object} convertedStyle
	 */
	function convertCase(style) {
	  var convertedStyle = {};
	  for (var prop in style) {
	    var value = style[prop];
	    prop = prop.replace(regExp, replace);
	    convertedStyle[prop] = value;
	  }
	  return convertedStyle;
	}
	
	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 *
	 * @param {Rule} rule
	 */
	
	exports.default = function () {
	  return function jssCamelCase(rule) {
	    var style = rule.style;
	
	    if (!style) return;
	    if (Array.isArray(style)) {
	      // Handle rules like @font-face, which can have multiple styles in an array
	      for (var index = 0; index < style.length; index++) {
	        style[index] = convertCase(style[index]);
	      }
	    } else {
	      rule.style = convertCase(style);
	    }
	  };
	};

/***/ },
/* 411 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = jssPropsSort;
	/**
	 * Sort props by length.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssPropsSort() {
	  function sort(prop0, prop1) {
	    return prop0.length > prop1.length;
	  }
	
	  return function (rule) {
	    var style = rule.style;
	    var type = rule.type;
	
	    if (!style || type !== 'regular') return;
	    var newStyle = {};
	    var props = Object.keys(style).sort(sort);
	    for (var prop in props) {
	      newStyle[props[prop]] = style[props[prop]];
	    }
	    rule.style = newStyle;
	  };
	}

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	__webpack_require__(381);
	
	var _sceneStyle = __webpack_require__(413);
	
	var _sceneStyle2 = _interopRequireDefault(_sceneStyle);
	
	var _Scene = __webpack_require__(414);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _base = __webpack_require__(383);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import 'webcomponents.js-v1/src/CustomElements/v1/native-shim'
	//import 'webcomponents.js-v1/src/CustomElements/v1/CustomElements'
	
	console.log(' -- motor-scene module!');
	
	exports.default = document.registerElement('motor-scene', function (_MotorHTMLBase) {
	    _inherits(MotorHTMLScene, _MotorHTMLBase);
	
	    function MotorHTMLScene() {
	        _classCallCheck(this, MotorHTMLScene);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MotorHTMLScene).apply(this, arguments));
	    }
	
	    _createClass(MotorHTMLScene, [{
	        key: '_makeImperativeCounterpart',
	
	
	        // this is called in attachedCallback, at which point this element has a
	        // parentNode.
	        value: function _makeImperativeCounterpart() {
	            var scene = new _Scene2.default(this);
	
	            // TODO: needs unmount cleanup.
	            // TODO: move to attachedCallback.
	            scene.mount(this.parentNode);
	
	            return scene;
	        }
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {
	            return _sceneStyle2.default;
	        }
	    }, {
	        key: 'attachedCallback',
	        value: function attachedCallback() {
	            _get(Object.getPrototypeOf(MotorHTMLScene.prototype), 'attachedCallback', this).call(this);
	        }
	
	        //deinit() {
	        //super.deinit()
	
	        //// TODO: unmount the scene
	        //}
	
	    }]);
	
	    return MotorHTMLScene;
	}(_base2.default));

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _nodeStyle = __webpack_require__(382);
	
	var _nodeStyle2 = _interopRequireDefault(_nodeStyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    'motor-scene': Object.assign({}, _nodeStyle2.default['motor-node'], {
	        //display:   'block',
	        //boxSizing: 'border-box',
	        position: 'relative',
	        overflow: 'hidden',
	        width: '100%',
	        height: '100%',
	
	        // Constant perspective for now.
	        // TODO: make settable. issue #32
	        perspective: 1000
	
	    })
	};

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Node2 = __webpack_require__(376);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	var _documentReady = __webpack_require__(379);
	
	var _documentReady2 = _interopRequireDefault(_documentReady);
	
	var _scene = __webpack_require__(412);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	console.log(' --- Scene module!', _Node3.default);
	
	var Scene = function (_Node) {
	    _inherits(Scene, _Node);
	
	    function Scene(_motorHtmlScene) {
	        _classCallCheck(this, Scene);
	
	        console.log(' --- Scene constructor');
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scene).call(this, {}, _motorHtmlScene));
	
	        _this._scene = _this;
	        _this._resolveScenePromise(_this);
	
	        // For now, Scenes are always proportionally sized by default.
	        _this._properties.sizeMode = { x: 'proportional', y: 'proportional', z: 'proportional' };
	        return _this;
	    }
	
	    _createClass(Scene, [{
	        key: '_init',
	        value: function _init() {
	            _get(Object.getPrototypeOf(Scene.prototype), '_init', this).call(this);
	        }
	    }, {
	        key: '_makeElement',
	        value: function _makeElement() {
	            return new _scene2.default();
	        }
	
	        /**
	         * Mount the scene into the given target.
	         * Resolves the Scene's mountPromise, which can be use to do something once
	         * the scene is mounted.
	         *
	         * @param {string|HTMLElement} [mountPoint=document.body] If a string selector is provided,
	         * the mount point will be selected from the DOM. If an HTMLElement is
	         * provided, that will be the mount point. If no mount point is provided,
	         * the scene will be mounted into document.body.
	         */
	
	    }, {
	        key: 'mount',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(mountPoint) {
	                var selector;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return (0, _documentReady2.default)();
	
	                            case 2:
	
	                                // if no mountPoint was provided, just mount onto the <body> element.
	                                // XXX: Maybe we should just not mount the scene if no mountPoint is
	                                // provided, and expose a mount method.
	                                if (!mountPoint) {
	                                    mountPoint = document.body;
	                                }
	
	                                // if the user supplied a selector, mount there.
	                                else if (typeof mountPoint === 'string') {
	                                        selector = mountPoint;
	
	                                        mountPoint = document.querySelector(selector);
	                                    }
	
	                                // if we have an actual mount point (the user may have supplied one)
	
	                                if (!(mountPoint instanceof window.HTMLElement)) {
	                                    _context.next = 8;
	                                    break;
	                                }
	
	                                if (mountPoint !== this._el.element.parentNode) mountPoint.appendChild(this._el.element);
	
	                                this._mounted = true;
	                                _context.next = 9;
	                                break;
	
	                            case 8:
	                                throw new Error('Invalid mount point specified in Scene.mount() call. Specify a selector, or pass an actual HTMLElement.');
	
	                            case 9:
	
	                                this._resolveMountPromise(this._mounted);
	
	                            case 10:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function mount(_x) {
	                return _ref.apply(this, arguments);
	            }
	
	            return mount;
	        }()
	
	        /**
	         * Unmount the scene from it's mount point. Resets the Scene's
	         * mountPromise.
	         */
	
	    }, {
	        key: 'unmount',
	        value: function unmount() {
	            var _this2 = this;
	
	            this._el.element.parentNode.removeChild(this._el.element);
	            this._mounted = false;
	
	            // a new promise to be resolved on the next mount.
	            this._mountPromise = new Promise(function (r) {
	                return _this2._resolveMountPromise = r;
	            });
	        }
	    }]);
	
	    return Scene;
	}(_Node3.default);
	
	exports.default = Scene;

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Node2 = __webpack_require__(376);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	console.log(' --- PushPaneLayout module.');
	
	var PushPaneLayout = function (_Node) {
	    _inherits(PushPaneLayout, _Node);
	
	    function PushPaneLayout() {
	        var _Object$getPrototypeO;
	
	        _classCallCheck(this, PushPaneLayout);
	
	        console.log(' -- PushPaneLayout created');
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PushPaneLayout)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	    }
	
	    return PushPaneLayout;
	}(_Node3.default);
	
	exports.default = PushPaneLayout;

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MotorHTMLPushPaneLayout = exports.MotorHTMLScene = exports.MotorHTMLNode = undefined;
	
	var _node = __webpack_require__(380);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _scene = __webpack_require__(412);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	var _pushPaneLayout = __webpack_require__(417);
	
	var _pushPaneLayout2 = _interopRequireDefault(_pushPaneLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.MotorHTMLNode = _node2.default;
	exports.MotorHTMLScene = _scene2.default;
	exports.MotorHTMLPushPaneLayout = _pushPaneLayout2.default;

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _node = __webpack_require__(380);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _PushPaneLayout = __webpack_require__(415);
	
	var _PushPaneLayout2 = _interopRequireDefault(_PushPaneLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	console.log(' --- push-pane-layout module.');
	
	var MotorHTMLPushPaneLayout = function (_MotorHTMLNode) {
	    _inherits(MotorHTMLPushPaneLayout, _MotorHTMLNode);
	
	    function MotorHTMLPushPaneLayout() {
	        _classCallCheck(this, MotorHTMLPushPaneLayout);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MotorHTMLPushPaneLayout).apply(this, arguments));
	    }
	
	    _createClass(MotorHTMLPushPaneLayout, [{
	        key: 'createdCallback',
	        value: function createdCallback() {
	            console.log(' -- MotorHTMLPushPaneLayout created');
	            _get(Object.getPrototypeOf(MotorHTMLPushPaneLayout.prototype), 'createdCallback', this).call(this);
	        }
	
	        // @override
	
	    }, {
	        key: '_makeImperativeCounterpart',
	        value: function _makeImperativeCounterpart() {
	            return new _PushPaneLayout2.default({}, this);
	        }
	    }]);
	
	    return MotorHTMLPushPaneLayout;
	}(_node2.default);
	
	exports.default = document.registerElement('motor-push-pane-layout', MotorHTMLPushPaneLayout);

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(__webpack_module_template_argument_0__)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var dP         = __webpack_require__(__webpack_module_template_argument_0__)
	  , createDesc = __webpack_require__(__webpack_module_template_argument_1__);
	module.exports = __webpack_require__(__webpack_module_template_argument_2__) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var anObject       = __webpack_require__(__webpack_module_template_argument_0__)
	  , IE8_DOM_DEFINE = __webpack_require__(__webpack_module_template_argument_1__)
	  , toPrimitive    = __webpack_require__(__webpack_module_template_argument_2__)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(__webpack_module_template_argument_3__) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var isObject = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	module.exports = !__webpack_require__(__webpack_module_template_argument_0__) && !__webpack_require__(__webpack_module_template_argument_1__)(function(){
	  return Object.defineProperty(__webpack_require__(__webpack_module_template_argument_2__)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var isObject = __webpack_require__(__webpack_module_template_argument_0__)
	  , document = __webpack_require__(__webpack_module_template_argument_1__).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(__webpack_module_template_argument_0__);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var global = __webpack_require__(__webpack_module_template_argument_0__)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var def = __webpack_require__(__webpack_module_template_argument_0__).f
	  , has = __webpack_require__(__webpack_module_template_argument_1__)
	  , TAG = __webpack_require__(__webpack_module_template_argument_2__)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var store      = __webpack_require__(__webpack_module_template_argument_0__)('wks')
	  , uid        = __webpack_require__(__webpack_module_template_argument_1__)
	  , Symbol     = __webpack_require__(__webpack_module_template_argument_2__).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(__webpack_module_template_argument_0__)
	  , enumBugKeys = __webpack_require__(__webpack_module_template_argument_1__);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var has          = __webpack_require__(__webpack_module_template_argument_0__)
	  , toIObject    = __webpack_require__(__webpack_module_template_argument_1__)
	  , arrayIndexOf = __webpack_require__(__webpack_module_template_argument_2__)(false)
	  , IE_PROTO     = __webpack_require__(__webpack_module_template_argument_3__)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(__webpack_module_template_argument_0__)
	  , defined = __webpack_require__(__webpack_module_template_argument_1__);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(__webpack_module_template_argument_0__)
	  , toLength  = __webpack_require__(__webpack_module_template_argument_1__)
	  , toIndex   = __webpack_require__(__webpack_module_template_argument_2__);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(__webpack_module_template_argument_0__)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var toInteger = __webpack_require__(__webpack_module_template_argument_0__)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var shared = __webpack_require__(__webpack_module_template_argument_0__)('keys')
	  , uid    = __webpack_require__(__webpack_module_template_argument_1__);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(__webpack_module_template_argument_0__)
	  , dPs         = __webpack_require__(__webpack_module_template_argument_1__)
	  , enumBugKeys = __webpack_require__(__webpack_module_template_argument_2__)
	  , IE_PROTO    = __webpack_require__(__webpack_module_template_argument_3__)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(__webpack_module_template_argument_4__)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(__webpack_module_template_argument_5__).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var dP       = __webpack_require__(__webpack_module_template_argument_0__)
	  , anObject = __webpack_require__(__webpack_module_template_argument_1__)
	  , getKeys  = __webpack_require__(__webpack_module_template_argument_2__);
	
	module.exports = __webpack_require__(__webpack_module_template_argument_3__) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = __webpack_require__(__webpack_module_template_argument_0__).document && document.documentElement;

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__, __webpack_module_template_argument_6__) {

	var pIE            = __webpack_require__(__webpack_module_template_argument_0__)
	  , createDesc     = __webpack_require__(__webpack_module_template_argument_1__)
	  , toIObject      = __webpack_require__(__webpack_module_template_argument_2__)
	  , toPrimitive    = __webpack_require__(__webpack_module_template_argument_3__)
	  , has            = __webpack_require__(__webpack_module_template_argument_4__)
	  , IE8_DOM_DEFINE = __webpack_require__(__webpack_module_template_argument_5__)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(__webpack_module_template_argument_6__) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(__webpack_module_template_argument_0__)
	  , toObject    = __webpack_require__(__webpack_module_template_argument_1__)
	  , IE_PROTO    = __webpack_require__(__webpack_module_template_argument_2__)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(__webpack_module_template_argument_0__)
	  , anObject = __webpack_require__(__webpack_module_template_argument_1__);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(__webpack_module_template_argument_2__)(Function.call, __webpack_require__(__webpack_module_template_argument_3__).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(__webpack_module_template_argument_0__)
	  , TAG = __webpack_require__(__webpack_module_template_argument_1__)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	'use strict';
	var $at  = __webpack_require__(__webpack_module_template_argument_0__)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(__webpack_module_template_argument_1__)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var toInteger = __webpack_require__(__webpack_module_template_argument_0__)
	  , defined   = __webpack_require__(__webpack_module_template_argument_1__);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__, __webpack_module_template_argument_6__, __webpack_module_template_argument_7__, __webpack_module_template_argument_8__, __webpack_module_template_argument_9__) {

	'use strict';
	var LIBRARY        = __webpack_require__(__webpack_module_template_argument_0__)
	  , $export        = __webpack_require__(__webpack_module_template_argument_1__)
	  , redefine       = __webpack_require__(__webpack_module_template_argument_2__)
	  , hide           = __webpack_require__(__webpack_module_template_argument_3__)
	  , has            = __webpack_require__(__webpack_module_template_argument_4__)
	  , Iterators      = __webpack_require__(__webpack_module_template_argument_5__)
	  , $iterCreate    = __webpack_require__(__webpack_module_template_argument_6__)
	  , setToStringTag = __webpack_require__(__webpack_module_template_argument_7__)
	  , getPrototypeOf = __webpack_require__(__webpack_module_template_argument_8__)
	  , ITERATOR       = __webpack_require__(__webpack_module_template_argument_9__)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

	'use strict';
	var create         = __webpack_require__(__webpack_module_template_argument_0__)
	  , descriptor     = __webpack_require__(__webpack_module_template_argument_1__)
	  , setToStringTag = __webpack_require__(__webpack_module_template_argument_2__)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(__webpack_module_template_argument_3__)(IteratorPrototype, __webpack_require__(__webpack_module_template_argument_4__)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(__webpack_module_template_argument_0__)
	  , ITERATOR   = __webpack_require__(__webpack_module_template_argument_1__)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var classof   = __webpack_require__(__webpack_module_template_argument_0__)
	  , ITERATOR  = __webpack_require__(__webpack_module_template_argument_1__)('iterator')
	  , Iterators = __webpack_require__(__webpack_module_template_argument_2__);
	module.exports = __webpack_require__(__webpack_module_template_argument_3__).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var ITERATOR     = __webpack_require__(__webpack_module_template_argument_0__)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

	'use strict';
	var addToUnscopables = __webpack_require__(__webpack_module_template_argument_0__)
	  , step             = __webpack_require__(__webpack_module_template_argument_1__)
	  , Iterators        = __webpack_require__(__webpack_module_template_argument_2__)
	  , toIObject        = __webpack_require__(__webpack_module_template_argument_3__);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(__webpack_module_template_argument_4__)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__, __webpack_module_template_argument_6__, __webpack_module_template_argument_7__, __webpack_module_template_argument_8__, __webpack_module_template_argument_9__, __webpack_module_template_argument_10__, __webpack_module_template_argument_11__, __webpack_module_template_argument_12__, __webpack_module_template_argument_13__, __webpack_module_template_argument_14__, __webpack_module_template_argument_15__, __webpack_module_template_argument_16__, __webpack_module_template_argument_17__, __webpack_module_template_argument_18__, __webpack_module_template_argument_19__) {

	'use strict';
	var LIBRARY            = __webpack_require__(__webpack_module_template_argument_0__)
	  , global             = __webpack_require__(__webpack_module_template_argument_1__)
	  , ctx                = __webpack_require__(__webpack_module_template_argument_2__)
	  , classof            = __webpack_require__(__webpack_module_template_argument_3__)
	  , $export            = __webpack_require__(__webpack_module_template_argument_4__)
	  , isObject           = __webpack_require__(__webpack_module_template_argument_5__)
	  , anObject           = __webpack_require__(__webpack_module_template_argument_6__)
	  , aFunction          = __webpack_require__(__webpack_module_template_argument_7__)
	  , anInstance         = __webpack_require__(__webpack_module_template_argument_8__)
	  , forOf              = __webpack_require__(__webpack_module_template_argument_9__)
	  , setProto           = __webpack_require__(__webpack_module_template_argument_10__).set
	  , speciesConstructor = __webpack_require__(__webpack_module_template_argument_11__)
	  , task               = __webpack_require__(__webpack_module_template_argument_12__).set
	  , microtask          = __webpack_require__(__webpack_module_template_argument_13__)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(__webpack_module_template_argument_14__)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(__webpack_module_template_argument_15__)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(__webpack_module_template_argument_16__)($Promise, PROMISE);
	__webpack_require__(__webpack_module_template_argument_17__)(PROMISE);
	Wrapper = __webpack_require__(__webpack_module_template_argument_18__)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(__webpack_module_template_argument_19__)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

	var ctx         = __webpack_require__(__webpack_module_template_argument_0__)
	  , call        = __webpack_require__(__webpack_module_template_argument_1__)
	  , isArrayIter = __webpack_require__(__webpack_module_template_argument_2__)
	  , anObject    = __webpack_require__(__webpack_module_template_argument_3__)
	  , toLength    = __webpack_require__(__webpack_module_template_argument_4__)
	  , getIterFn   = __webpack_require__(__webpack_module_template_argument_5__)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(__webpack_module_template_argument_0__)
	  , aFunction = __webpack_require__(__webpack_module_template_argument_1__)
	  , SPECIES   = __webpack_require__(__webpack_module_template_argument_2__)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

	var ctx                = __webpack_require__(__webpack_module_template_argument_0__)
	  , invoke             = __webpack_require__(__webpack_module_template_argument_1__)
	  , html               = __webpack_require__(__webpack_module_template_argument_2__)
	  , cel                = __webpack_require__(__webpack_module_template_argument_3__)
	  , global             = __webpack_require__(__webpack_module_template_argument_4__)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(__webpack_module_template_argument_5__)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var global    = __webpack_require__(__webpack_module_template_argument_0__)
	  , macrotask = __webpack_require__(__webpack_module_template_argument_1__).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(__webpack_module_template_argument_2__)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=global.js.map