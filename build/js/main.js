"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _Number;
  var apiURL = 'https://fav-prom.com/api_lord_of_the_air';
  var isVerifiedUser = false;
  var tableData = [];
  var activeWeek = null;
  var periodAmount = 3;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector("#table"),
    resultsTableOther = document.querySelector("#tableOther"),
    secondTable = document.querySelector("#secondTable"),
    secondTableOther = document.querySelector("#secondTableOther"),
    tabs = document.querySelectorAll('.table__tabs-item');
  // tabsMain = document.querySelector("[data-tabs='main']").querySelectorAll(".table__tabs-item"),
  // tabsSecond = document.querySelector("[data-tabs='main']").querySelectorAll(".table__tabs-item")

  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;

  // let locale = "en"
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth().then(loadUsers).then(function () {
                setTimeout(hideLoader, 300);
                tabs.forEach(function (item) {
                  item.classList.remove('active');
                  var num = Number(item.getAttribute('data-week'));
                  if (num === activeWeek) item.classList.add('active');
                  if (num > activeWeek) item.classList.add('lock');
                });
                renderUsers(activeWeek, tableData);
                document.addEventListener('click', function (e) {
                  if (e.target.closest('.part-btn')) participate(e);
                  if (e.target.closest(".table__tabs-item")) {
                    var tab = e.target.closest(".table__tabs-item");
                    var week = Number(tab.getAttribute('data-week'));
                    if (week > activeWeek || week === activeWeek) return;
                    tabs.forEach(function (item) {
                      item.classList.remove('active');
                      var num = Number(item.getAttribute('data-week'));
                      if (num === week) item.classList.add('active');
                    });
                    renderUsers(week, tableData);
                    tab.classList.add('active');
                  }
                });
                // participateBtns.forEach(btn => btn.addEventListener('click', participate));
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale, "?nocache=1")).then(function (json) {
      i18nData = json;
      translate();
    });
  }
  function checkUserAuth() {
    console.log(userId);
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
          console.log(isVerifiedUser);
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          isVerifiedUser = false;
        }
      });
    } else {
      var _iterator2 = _createForOfIteratorHelper(redirectBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var redirectBtn = _step2.value;
          redirectBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(participateBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var participateBtn = _step3.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return Promise.resolve(false);
    }
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    var baseCssClass = "";
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function renderUsers(weekNum) {
    var userData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    weekNum = Number(weekNum);
    console.log(userData);
    var weekObj = userData.find(function (w) {
      return w.week === weekNum;
    });
    if (!weekObj || !weekObj.data || !Array.isArray(weekObj.data.users)) {
      console.error('Невірна структура даних');
      return;
    }
    var isStageEnded = userData.isStageEnded;
    userData = weekObj.data.users;
    var winnerAdditionalPrize = userData.find(function (u) {
      if (u.winner === true) {
        return u;
      }
    });
    console.log(userData);
    console.log(winnerAdditionalPrize);
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });

    // console.log(userId)
    // console.log(currentUser)
    // console.log(isVerifiedUser)

    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
    }
    console.log(userData);
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize) {
    console.log(users);
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    secondTableOther.innerHTML = '';
    secondTable.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 10 : 10;
    var topUsers = users.slice(0, topUsersLength);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (isVerifiedUser && !currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
    if (winnerAdditionalPrize) {
      if (currentUser) {
        displaySecondUser(winnerAdditionalPrize, true, secondTableOther, [winnerAdditionalPrize], true);
      } else {
        displaySecondUser(winnerAdditionalPrize, false, secondTableOther, [winnerAdditionalPrize], false);
      }
    } else {
      secondTable.innerHTML = "<div class=\"table__row\"> ".concat(translateKey(isStageEnded ? "noWinnerHoodie" : "waitingWinnerHoodie"), " </div>");
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function displaySecondUser(user, isCurrentUser, table, users, isTopCurrentUser) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight2 = options.highlight,
        highlight = _options$highlight2 === void 0 ? false : _options$highlight2,
        _options$neighbor2 = options.neighbor,
        neighbor = _options$neighbor2 === void 0 ? false : _options$neighbor2;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var prizeKey = "prize_hoodie";
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.coefIn).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : " - ", "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      renderRow(user, {
        highlight: true
      });
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    week = 1; // в цьому проміку для всіх стейджів однакові призи тому week = 1
    if (place <= 12) return "prize_".concat(week, "-").concat(place);
    if (place <= 16) return "prize_".concat(week, "-13-16");
    if (place <= 19) return "prize_".concat(week, "-17-19");
    if (place <= 29) return "prize_".concat(week, "-20-29");
    if (place <= 40) return "prize_".concat(week, "-30-40");
    if (place <= 80) return "prize_".concat(week, "-41-80");
    if (place <= 113) return "prize_".concat(week, "-81-113");
    if (place <= 130) return "prize_".concat(week, "-114-130");
    if (place <= 150) return "prize_".concat(week, "-131-150");
    if (place <= 170) return "prize_".concat(week, "-151-170");
    if (place <= 200) return "prize_".concat(week, "-171-200");
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
        loadUsers("?nocache=1").then(function (res) {
          renderUsers(activeWeek, tableData);
        });
      }, 1000);
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  }
  function loadUsers(parametr) {
    var requests = [];
    tableData.length = 0;
    var _loop = function _loop() {
      var week = i; // або будь-яка логіка для формування номера тижня
      var req = request("/users/".concat(week).concat(parametr ? parametr : "")).then(function (data) {
        console.log(data);
        tableData.push({
          week: week,
          data: data
        });
        if (!activeWeek) {
          activeWeek = data.activeStageNumber;
        }
      });
      requests.push(req);
    };
    for (var i = 1; i <= periodAmount; i++) {
      _loop();
    }
    return Promise.all(requests)["catch"](function (error) {
      console.error('Error loading users:', error);
    });
  }
  loadTranslations().then(init); // запуск ініту сторінки

  // TEST

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "777777");
    }
    window.location.reload();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiaXNWZXJpZmllZFVzZXIiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwicGVyaW9kQW1vdW50IiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwic2Vjb25kVGFibGUiLCJzZWNvbmRUYWJsZU90aGVyIiwidGFicyIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJsb2FkVXNlcnMiLCJzZXRUaW1lb3V0IiwiaXRlbSIsIm51bSIsImdldEF0dHJpYnV0ZSIsInJlbmRlclVzZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicGFydGljaXBhdGUiLCJ0YWIiLCJ3ZWVrIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwibG9nIiwidW5hdXRoTWVzIiwidXNlcmlkIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwid2FybiIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJiYXNlQ3NzQ2xhc3MiLCJsYW5nIiwid2Vla051bSIsInVzZXJEYXRhIiwid2Vla09iaiIsImZpbmQiLCJ3IiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInVzZXJzIiwiaXNTdGFnZUVuZGVkIiwid2lubmVyQWRkaXRpb25hbFByaXplIiwidSIsIndpbm5lciIsImN1cnJlbnRVc2VyIiwidXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiZGlzcGxheVNlY29uZFVzZXIiLCJ0cmFuc2xhdGVLZXkiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJtYXNrVXNlcklkIiwidG9GaXhlZCIsImFwcGVuZCIsImluZGV4IiwiY29lZkluIiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInRvU3RyaW5nIiwicGxhY2UiLCJwYXJhbXMiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwiaSIsInJlcSIsInB1c2giLCJhY3RpdmVTdGFnZU51bWJlciIsImFsbCIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxHQUFHLDBDQUEwQztFQUV6RCxJQUFJQyxjQUFjLEdBQUcsS0FBSztFQUUxQixJQUFJQyxTQUFTLEdBQUcsRUFBRTtFQUNsQixJQUFJQyxVQUFVLEdBQUcsSUFBSTtFQUVyQixJQUFJQyxZQUFZLEdBQUcsQ0FBQztFQUVwQixJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyREMsZUFBZSxHQUFHSixRQUFRLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4REUsWUFBWSxHQUFHTCxRQUFRLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUNyREcsTUFBTSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUNuRE0sWUFBWSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7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aEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0VBRWpEK0ssTUFBTSxDQUFDeEcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMsSUFBSTNDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO01BQ2xDRCxjQUFjLENBQUNvSixVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsTUFBTTtNQUNIcEosY0FBYyxDQUFDcUosT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDMUM7SUFDQTlILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDOEgsTUFBTSxFQUFFO0VBQzVCLENBQUMsQ0FBQztFQUVGLElBQU1DLE9BQU8sR0FBR3BMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUVuRG1MLE9BQU8sQ0FBQzVHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ25DLElBQUd0QyxNQUFNLEVBQUM7TUFDTkwsY0FBYyxDQUFDb0osVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDLE1BQUk7TUFDRHBKLGNBQWMsQ0FBQ3FKLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzlDO0lBQ0E5SCxNQUFNLENBQUNDLFFBQVEsQ0FBQzhILE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2xvcmRfb2ZfdGhlX2FpcidcblxuICAgIGxldCBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuXG4gICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4gICAgbGV0IGFjdGl2ZVdlZWsgPSBudWxsXG5cbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gM1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIiksXG4gICAgICAgIHNlY29uZFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWNvbmRUYWJsZVwiKSxcbiAgICAgICAgc2Vjb25kVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Vjb25kVGFibGVPdGhlclwiKSxcbiAgICAgICAgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJyk7XG4gICAgICAgIC8vIHRhYnNNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhYnM9J21haW4nXVwiKS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIiksXG4gICAgICAgIC8vIHRhYnNTZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFicz0nbWFpbiddXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKVxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIC50aGVuKGxvYWRVc2VycylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB0YWJzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2VlaycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09PSBhY3RpdmVXZWVrKSBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID4gYWN0aXZlV2VlaykgaXRlbS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnBhcnQtYnRuJykpIHBhcnRpY2lwYXRlKGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBOdW1iZXIodGFiLmdldEF0dHJpYnV0ZSgnZGF0YS13ZWVrJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2VlayA+IGFjdGl2ZVdlZWsgfHwgd2VlayA9PT0gYWN0aXZlV2VlaykgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXdlZWsnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT09IHdlZWspIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMod2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGJhc2VDc3NDbGFzcyA9IFwiXCJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhID0gW10pIHtcbiAgICAgICAgd2Vla051bSA9IE51bWJlcih3ZWVrTnVtKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgICAgIGNvbnN0IHdlZWtPYmogPSB1c2VyRGF0YS5maW5kKHcgPT4gdy53ZWVrID09PSB3ZWVrTnVtKTtcbiAgICAgICAgaWYgKCF3ZWVrT2JqIHx8ICF3ZWVrT2JqLmRhdGEgfHwgIUFycmF5LmlzQXJyYXkod2Vla09iai5kYXRhLnVzZXJzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J3QtdCy0ZbRgNC90LAg0YHRgtGA0YPQutGC0YPRgNCwINC00LDQvdC40YUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhZ2VFbmRlZCA9IHVzZXJEYXRhLmlzU3RhZ2VFbmRlZFxuXG4gICAgICAgIHVzZXJEYXRhID0gd2Vla09iai5kYXRhLnVzZXJzO1xuXG4gICAgICAgIGNvbnN0IHdpbm5lckFkZGl0aW9uYWxQcml6ZSA9IHVzZXJEYXRhLmZpbmQodSA9PiB7XG4gICAgICAgICAgICBpZih1Lndpbm5lciA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG5cblxuXG5cbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyQWRkaXRpb25hbFByaXplKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTAgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbm5lckFkZGl0aW9uYWxQcml6ZSkge1xuICAgICAgICAgICAgaWYoY3VycmVudFVzZXIpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXlTZWNvbmRVc2VyKHdpbm5lckFkZGl0aW9uYWxQcml6ZSwgdHJ1ZSAsIHNlY29uZFRhYmxlT3RoZXIsIFt3aW5uZXJBZGRpdGlvbmFsUHJpemVdLCB0cnVlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNlY29uZFVzZXIod2lubmVyQWRkaXRpb25hbFByaXplLCBmYWxzZSAsIHNlY29uZFRhYmxlT3RoZXIsIFt3aW5uZXJBZGRpdGlvbmFsUHJpemVdLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlY29uZFRhYmxlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvd1wiPiAke3RyYW5zbGF0ZUtleShpc1N0YWdlRW5kZWQgPyBcIm5vV2lubmVySG9vZGllXCIgOiBcIndhaXRpbmdXaW5uZXJIb29kaWVcIil9IDwvZGl2PmBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVNlY29uZFVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gXCJwcml6ZV9ob29kaWVcIlxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5jb2VmSW4pLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6IFwiIC0gXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIHdlZWsgPSAxIC8vINCyINGG0YzQvtC80YMg0L/RgNC+0LzRltC60YMg0LTQu9GPINCy0YHRltGFINGB0YLQtdC50LTQttGW0LIg0L7QtNC90LDQutC+0LLRliDQv9GA0LjQt9C4INGC0L7QvNGDIHdlZWsgPSAxXG4gICAgICAgIGlmIChwbGFjZSA8PSAxMikgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE2KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTMtMTZgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTkpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNy0xOWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyOSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTIwLTI5YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDQwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMzAtNDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gODApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00MS04MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMTMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS04MS0xMTNgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTMwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTE0LTEzMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMzEtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTcxLTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTsgLy8g0LDQsdC+INCx0YPQtNGMLdGP0LrQsCDQu9C+0LPRltC60LAg0LTQu9GPINGE0L7RgNC80YPQstCw0L3QvdGPINC90L7QvNC10YDQsCDRgtC40LbQvdGPXG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIGRhdGE6IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgaWYoIWFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVXZWVrID0gZGF0YS5hY3RpdmVTdGFnZU51bWJlclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlcnM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG4gICAgLy8gVEVTVFxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiNzc3Nzc3XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbn0pKCk7XG4iXX0=
