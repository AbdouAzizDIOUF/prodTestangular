(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-listing-module"],{

/***/ "./node_modules/ng2-nouislider/__ivy_ngcc__/ng2-nouislider.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-nouislider/__ivy_ngcc__/ng2-nouislider.js ***!
  \********************************************************************/
/*! exports provided: DefaultFormatter, NouisliderComponent, NouisliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFormatter", function() { return DefaultFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouisliderComponent", function() { return NouisliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouisliderModule", function() { return NouisliderModule; });
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








var DefaultFormatter = /*#__PURE__*/function () {
  function DefaultFormatter() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DefaultFormatter);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DefaultFormatter, [{
    key: "to",

    /**
     * @param {?} value
     * @return {?}
     */
    value: function to(value) {
      // formatting with http://stackoverflow.com/a/26463364/478584
      return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    }
  }, {
    key: "from",

    /**
     * @param {?} value
     * @return {?}
     */
    value: function from(value) {
      return parseFloat(value);
    }
  }]);

  return DefaultFormatter;
}();

var NouisliderComponent = /*#__PURE__*/function () {
  /**
   * @param {?} el
   * @param {?} renderer
   */
  function NouisliderComponent(el, renderer) {
    var _this = this;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NouisliderComponent);

    this.el = el;
    this.renderer = renderer;
    this.config = {};
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
    this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
    this.set = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
    this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
    this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;

    this.eventHandler = function (emitter, values, handle, unencoded) {
      var
      /** @type {?} */
      v = _this.toValues(values);

      var
      /** @type {?} */
      emitEvents = false;

      if (_this.value === undefined) {
        _this.value = v;
        return;
      }

      if (Array.isArray(v) && _this.value[handle] != v[handle]) {
        emitEvents = true;
      }

      if (!Array.isArray(v) && _this.value != v) {
        emitEvents = true;
      }

      if (emitEvents) {
        emitter.emit(v);

        _this.onChange(v);
      }

      if (Array.isArray(v)) {
        _this.value[handle] = v[handle];
      } else {
        _this.value = v;
      }
    };

    this.defaultKeyHandler = function (e) {
      var
      /** @type {?} */
      stepSize = _this.slider.steps();

      var
      /** @type {?} */
      index = parseInt(e.target.getAttribute('data-handle'));
      var
      /** @type {?} */
      sign = 1;
      var
      /** @type {?} */
      multiplier = 1;
      var
      /** @type {?} */
      step = 0;
      var
      /** @type {?} */
      delta = 0;

      switch (e.which) {
        case 34:
          // PageDown
          multiplier = _this.config.pageSteps;

        case 40: // ArrowDown

        case 37:
          // ArrowLeft
          sign = -1;
          step = stepSize[index][0];
          e.preventDefault();
          break;

        case 33:
          // PageUp
          multiplier = _this.config.pageSteps;

        case 38: // ArrowUp

        case 39:
          // ArrowRight
          step = stepSize[index][1];
          e.preventDefault();
          break;

        default:
          break;
      }

      delta = sign * multiplier * step;
      var
      /** @type {?} */
      newValue;

      if (Array.isArray(_this.value)) {
        newValue = [].concat(_this.value);
        newValue[index] = newValue[index] + delta;
      } else {
        newValue = _this.value + delta;
      }

      _this.slider.set(newValue);
    };
  }
  /**
   * @return {?}
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NouisliderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      var
      /** @type {?} */
      inputsConfig = JSON.parse(JSON.stringify({
        behaviour: this.behaviour,
        connect: this.connect,
        limit: this.limit,
        start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
        step: this.step,
        pageSteps: this.pageSteps,
        keyboard: this.keyboard,
        onKeydown: this.onKeydown,
        range: this.range || this.config.range || {
          min: this.min,
          max: this.max
        },
        tooltips: this.tooltips,
        snap: this.snap,
        animate: this.animate
      }));
      inputsConfig.tooltips = this.tooltips || this.config.tooltips;
      inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
      this.slider = Object(nouislider__WEBPACK_IMPORTED_MODULE_3__["create"])(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
      this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));

      if (this.config.keyboard) {
        if (this.config.pageSteps === undefined) {
          this.config.pageSteps = 10;
        }

        var _iterator = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this.handles),
            _step;

        try {
          var _loop = function _loop() {
            var handle = _step.value;
            handle.setAttribute('tabindex', 0);
            handle.addEventListener('click', function () {
              handle.focus();
            });

            if (_this2.config.onKeydown === undefined) {
              handle.addEventListener('keydown', _this2.defaultKeyHandler);
            } else {
              handle.addEventListener('keydown', _this2.config.onKeydown);
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.slider.on('set', function (values, handle, unencoded) {
        _this2.eventHandler(_this2.set, values, handle, unencoded);
      });
      this.slider.on('update', function (values, handle, unencoded) {
        _this2.update.emit(_this2.toValues(values));
      });
      this.slider.on('change', function (values, handle, unencoded) {
        _this2.change.emit(_this2.toValues(values));
      });
      this.slider.on('slide', function (values, handle, unencoded) {
        _this2.eventHandler(_this2.slide, values, handle, unencoded);
      });
      this.slider.on('start', function (values, handle, unencoded) {
        _this2.start.emit(_this2.toValues(values));
      });
      this.slider.on('end', function (values, handle, unencoded) {
        _this2.end.emit(_this2.toValues(values));
      });
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this3 = this;

      if (this.slider && (changes.min || changes.max || changes.step || changes.range)) {
        setTimeout(function () {
          _this3.slider.updateOptions({
            range: Object.assign({}, {
              min: _this3.min,
              max: _this3.max
            }, _this3.range || {}),
            step: _this3.step
          });
        });
      }
    }
    /**
     * @param {?} values
     * @return {?}
     */

  }, {
    key: "toValues",
    value: function toValues(values) {
      var
      /** @type {?} */
      v = values.map(this.config.format.from);
      return v.length == 1 ? v[0] : v;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      var _this4 = this;

      if (this.slider) {
        setTimeout(function () {
          _this4.slider.set(value);
        });
      }
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      isDisabled ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true') : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
    }
  }]);

  return NouisliderComponent;
}();

NouisliderComponent.ɵfac = function NouisliderComponent_Factory(t) {
  return new (t || NouisliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]));
};

NouisliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NouisliderComponent,
  selectors: [["nouislider"]],
  hostVars: 2,
  hostBindings: function NouisliderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ng2-nouislider", true);
    }
  },
  inputs: {
    config: "config",
    disabled: "disabled",
    behaviour: "behaviour",
    connect: "connect",
    limit: "limit",
    min: "min",
    max: "max",
    snap: "snap",
    animate: "animate",
    range: "range",
    step: "step",
    format: "format",
    pageSteps: "pageSteps",
    ngModel: "ngModel",
    keyboard: "keyboard",
    onKeydown: "onKeydown",
    formControl: "formControl",
    tooltips: "tooltips"
  },
  outputs: {
    change: "change",
    update: "update",
    slide: "slide",
    set: "set",
    start: "start",
    end: "end"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
      return NouisliderComponent;
    }),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  template: function NouisliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.disabled ? true : undefined);
    }
  },
  styles: ["[_nghost-%COMP%] {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }"]
});
/**
 * @nocollapse
 */

NouisliderComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
  }];
};

NouisliderComponent.propDecorators = {
  'disabled': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'behaviour': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'connect': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'limit': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'min': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'max': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'snap': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'animate': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'range': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'step': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'format': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'pageSteps': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'config': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'ngModel': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'keyboard': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'onKeydown': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'formControl': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'tooltips': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  'change': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  'update': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  'slide': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  'set': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  'start': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  'end': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NouisliderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'nouislider',
      host: {
        '[class.ng2-nouislider]': 'true'
      },
      template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
      styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return NouisliderComponent;
        }),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    slide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    set: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    end: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    behaviour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    connect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    limit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    snap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    animate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    range: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pageSteps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    ngModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    onKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    formControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    tooltips: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

var NouisliderModule = function NouisliderModule() {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NouisliderModule);
};

NouisliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: NouisliderModule
});
NouisliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function NouisliderModule_Factory(t) {
    return new (t || NouisliderModule)();
  }
});
/**
 * @nocollapse
 */

NouisliderModule.ctorParameters = function () {
  return [];
};

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NouisliderModule, {
    declarations: [NouisliderComponent],
    exports: [NouisliderComponent]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NouisliderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      exports: [NouisliderComponent],
      declarations: [NouisliderComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 14.6.3 - 11/19/2020 */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function () {
  "use strict";

  var VERSION = "14.6.3"; //region Helper Methods

  function isValidFormatter(entry) {
    return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
  }

  function removeElement(el) {
    el.parentElement.removeChild(el);
  }

  function isSet(value) {
    return value !== null && value !== undefined;
  } // Bindable version


  function preventDefault(e) {
    e.preventDefault();
  } // Removes duplicates from an array.


  function unique(array) {
    return array.filter(function (a) {
      return !this[a] ? this[a] = true : false;
    }, {});
  } // Round a value to the closest 'to'.


  function closest(value, to) {
    return Math.round(value / to) * to;
  } // Current position of an element relative to the document.


  function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc); // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.

    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
      pageOffset.x = 0;
    }

    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
  } // Checks whether a value is numerical.


  function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
  } // Sets a class and removes it after [duration] ms.


  function addClassFor(element, className, duration) {
    if (duration > 0) {
      addClass(element, className);
      setTimeout(function () {
        removeClass(element, className);
      }, duration);
    }
  } // Limits a value to 0 - 100


  function limit(a) {
    return Math.max(Math.min(a, 100), 0);
  } // Wraps a variable as an array, if it isn't one yet.
  // Note that an input array is returned by reference!


  function asArray(a) {
    return Array.isArray(a) ? a : [a];
  } // Counts decimals


  function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
  } // http://youmightnotneedjquery.com/#add_class


  function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.add(className);
    } else {
      el.className += " " + className;
    }
  } // http://youmightnotneedjquery.com/#remove_class


  function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  } // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/


  function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
  } // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes


  function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
    return {
      x: x,
      y: y
    };
  } // we provide a function to compute constants instead
  // of accessing window.* as soon as the module needs it
  // so that we do not compute anything if not needed


  function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled ? {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
      start: "MSPointerDown",
      move: "MSPointerMove",
      end: "MSPointerUp"
    } : {
      start: "mousedown touchstart",
      move: "mousemove touchmove",
      end: "mouseup touchend"
    };
  } // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  // Issue #785


  function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */

    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {}
    /* eslint-enable */


    return supportsPassive;
  }

  function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
  } //endregion
  //region Range Calculation
  // Determine the size of a sub-range in relation to a full range.


  function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
  } // (percentage) How many percent is this value of this range?


  function fromPercentage(range, value, startRange) {
    return value * 100 / (range[startRange + 1] - range[startRange]);
  } // (percentage) Where is this value on this range?


  function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
  } // (value) How much is this percentage on this range?


  function isPercentage(range, value) {
    return value * (range[1] - range[0]) / 100 + range[0];
  }

  function getJ(value, arr) {
    var j = 1;

    while (value >= arr[j]) {
      j += 1;
    }

    return j;
  } // (percentage) Input a value, find where, on a scale of 0-100, it applies.


  function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
      return 100;
    }

    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
  } // (value) Input a percentage, find where it is on the specified range.


  function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
      return xVal.slice(-1)[0];
    }

    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
  } // (percentage) Get the step that applies at a certain value.


  function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
      return value;
    }

    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j]; // If 'snap' is set, steps are used as fixed points on the slider.

    if (snap) {
      // Find the closest position, a or b.
      if (value - a > (b - a) / 2) {
        return b;
      }

      return a;
    }

    if (!xSteps[j - 1]) {
      return value;
    }

    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
  }

  function handleEntryPoint(index, value, that) {
    var percentage; // Wrap numerical input in an array.

    if (typeof value === "number") {
      value = [value];
    } // Reject any invalid input, by testing whether value is an array.


    if (!Array.isArray(value)) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
    } // Covert min/max syntax to 0 and 100.


    if (index === "min") {
      percentage = 0;
    } else if (index === "max") {
      percentage = 100;
    } else {
      percentage = parseFloat(index);
    } // Check for correct input.


    if (!isNumeric(percentage) || !isNumeric(value[0])) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
    } // Store values.


    that.xPct.push(percentage);
    that.xVal.push(value[0]); // NaN will evaluate to false too, but to keep
    // logging clear, set step explicitly. Make sure
    // not to override the 'step' setting with false.

    if (!percentage) {
      if (!isNaN(value[1])) {
        that.xSteps[0] = value[1];
      }
    } else {
      that.xSteps.push(isNaN(value[1]) ? false : value[1]);
    }

    that.xHighestCompleteStep.push(0);
  }

  function handleStepPoint(i, n, that) {
    // Ignore 'false' stepping.
    if (!n) {
      return;
    } // Step over zero-length ranges (#948);


    if (that.xVal[i] === that.xVal[i + 1]) {
      that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];
      return;
    } // Factor to range ratio


    that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);
    var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
    var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
    var step = that.xVal[i] + that.xNumSteps[i] * highestStep;
    that.xHighestCompleteStep[i] = step;
  } //endregion
  //region Spectrum


  function Spectrum(entry, snap, singleStep) {
    this.xPct = [];
    this.xVal = [];
    this.xSteps = [singleStep || false];
    this.xNumSteps = [false];
    this.xHighestCompleteStep = [];
    this.snap = snap;
    var index;
    var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']
    // Map the object keys to an array.

    for (index in entry) {
      if (entry.hasOwnProperty(index)) {
        ordered.push([entry[index], index]);
      }
    } // Sort all entries by value (numeric sort).


    if (ordered.length && typeof ordered[0][0] === "object") {
      ordered.sort(function (a, b) {
        return a[0][0] - b[0][0];
      });
    } else {
      ordered.sort(function (a, b) {
        return a[0] - b[0];
      });
    } // Convert all entries to subranges.


    for (index = 0; index < ordered.length; index++) {
      handleEntryPoint(ordered[index][1], ordered[index][0], this);
    } // Store the actual step values.
    // xSteps is sorted in the same order as xPct and xVal.


    this.xNumSteps = this.xSteps.slice(0); // Convert all numeric steps to the percentage of the subrange they represent.

    for (index = 0; index < this.xNumSteps.length; index++) {
      handleStepPoint(index, this.xNumSteps[index], this);
    }
  }

  Spectrum.prototype.getDistance = function (value) {
    var index;
    var distances = [];

    for (index = 0; index < this.xNumSteps.length - 1; index++) {
      // last "range" can't contain step size as it is purely an endpoint.
      var step = this.xNumSteps[index];

      if (step && value / step % 1 !== 0) {
        throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' of " + this.xPct[index] + "% range must be divisible by step.");
      } // Calculate percentual distance in current range of limit, margin or padding


      distances[index] = fromPercentage(this.xVal, value, index);
    }

    return distances;
  }; // Calculate the percentual distance over the whole scale of ranges.
  // direction: 0 = backwards / 1 = forwards


  Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
    var xPct_index = 0; // Calculate range where to start calculation

    if (value < this.xPct[this.xPct.length - 1]) {
      while (value > this.xPct[xPct_index + 1]) {
        xPct_index++;
      }
    } else if (value === this.xPct[this.xPct.length - 1]) {
      xPct_index = this.xPct.length - 2;
    } // If looking backwards and the value is exactly at a range separator then look one range further


    if (!direction && value === this.xPct[xPct_index + 1]) {
      xPct_index++;
    }

    var start_factor;
    var rest_factor = 1;
    var rest_rel_distance = distances[xPct_index];
    var range_pct = 0;
    var rel_range_distance = 0;
    var abs_distance_counter = 0;
    var range_counter = 0; // Calculate what part of the start range the value is

    if (direction) {
      start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
    } else {
      start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
    } // Do until the complete distance across ranges is calculated


    while (rest_rel_distance > 0) {
      // Calculate the percentage of total range
      range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter]; // Detect if the margin, padding or limit is larger then the current range and calculate

      if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
        // If larger then take the percentual distance of the whole range
        rel_range_distance = range_pct * start_factor; // Rest factor of relative percentual distance still to be calculated

        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter]; // Set start factor to 1 as for next range it does not apply.

        start_factor = 1;
      } else {
        // If smaller or equal then take the percentual distance of the calculate percentual part of that range
        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor; // No rest left as the rest fits in current range

        rest_factor = 0;
      }

      if (direction) {
        abs_distance_counter = abs_distance_counter - rel_range_distance; // Limit range to first range when distance becomes outside of minimum range

        if (this.xPct.length + range_counter >= 1) {
          range_counter--;
        }
      } else {
        abs_distance_counter = abs_distance_counter + rel_range_distance; // Limit range to last range when distance becomes outside of maximum range

        if (this.xPct.length - range_counter >= 1) {
          range_counter++;
        }
      } // Rest of relative percentual distance still to be calculated


      rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
    }

    return value + abs_distance_counter;
  };

  Spectrum.prototype.toStepping = function (value) {
    value = toStepping(this.xVal, this.xPct, value);
    return value;
  };

  Spectrum.prototype.fromStepping = function (value) {
    return fromStepping(this.xVal, this.xPct, value);
  };

  Spectrum.prototype.getStep = function (value) {
    value = getStep(this.xPct, this.xSteps, this.snap, value);
    return value;
  };

  Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
    var j = getJ(value, this.xPct); // When at the top or stepping down, look at the previous sub-range

    if (value === 100 || isDown && value === this.xPct[j - 1]) {
      j = Math.max(j - 1, 1);
    }

    return (this.xVal[j] - this.xVal[j - 1]) / size;
  };

  Spectrum.prototype.getNearbySteps = function (value) {
    var j = getJ(value, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[j - 2],
        step: this.xNumSteps[j - 2],
        highestStep: this.xHighestCompleteStep[j - 2]
      },
      thisStep: {
        startValue: this.xVal[j - 1],
        step: this.xNumSteps[j - 1],
        highestStep: this.xHighestCompleteStep[j - 1]
      },
      stepAfter: {
        startValue: this.xVal[j],
        step: this.xNumSteps[j],
        highestStep: this.xHighestCompleteStep[j]
      }
    };
  };

  Spectrum.prototype.countStepDecimals = function () {
    var stepDecimals = this.xNumSteps.map(countDecimals);
    return Math.max.apply(null, stepDecimals);
  }; // Outside testing


  Spectrum.prototype.convert = function (value) {
    return this.getStep(this.toStepping(value));
  }; //endregion
  //region Options

  /*	Every input option is tested and parsed. This'll prevent
      endless validation in internal methods. These tests are
      structured with an item for every option available. An
      option can be marked as required by setting the 'r' flag.
      The testing function is provided with three arguments:
          - The provided value for the option;
          - A reference to the options object;
          - The name for the option;
       The testing function returns false when an error is detected,
      or true when everything is OK. It can also modify the option
      object, to make sure all values can be correctly looped elsewhere. */
  //region Defaults


  var defaultFormatter = {
    to: function to(value) {
      return value !== undefined && value.toFixed(2);
    },
    from: Number
  };
  var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub"
  }; // Namespaces of internal event listeners

  var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria"
  }; //endregion

  function validateFormat(entry) {
    // Any object with a to and from method is supported.
    if (isValidFormatter(entry)) {
      return true;
    }

    throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
  }

  function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
    } // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.


    parsed.singleStep = entry;
  }

  function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
    }

    parsed.keyboardPageMultiplier = entry;
  }

  function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
    }

    parsed.keyboardDefaultStep = entry;
  }

  function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
    } // Catch missing start or end.


    if (entry.min === undefined || entry.max === undefined) {
      throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
    } // Catch equal start or end.


    if (entry.min === entry.max) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
    }

    parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
  }

  function testStart(parsed, entry) {
    entry = asArray(entry); // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.

    if (!Array.isArray(entry) || !entry.length) {
      throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
    } // Store the number of handles.


    parsed.handles = entry.length; // When the slider is initialized, the .val method will
    // be called with the start options.

    parsed.start = entry;
  }

  function testSnap(parsed, entry) {
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
    }
  }

  function testAnimate(parsed, entry) {
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
    }
  }

  function testAnimationDuration(parsed, entry) {
    parsed.animationDuration = entry;

    if (typeof entry !== "number") {
      throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
    }
  }

  function testConnect(parsed, entry) {
    var connect = [false];
    var i; // Map legacy options

    if (entry === "lower") {
      entry = [true, false];
    } else if (entry === "upper") {
      entry = [false, true];
    } // Handle boolean options


    if (entry === true || entry === false) {
      for (i = 1; i < parsed.handles; i++) {
        connect.push(entry);
      }

      connect.push(false);
    } // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
      } else {
        connect = entry;
      }

    parsed.connect = connect;
  }

  function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
      case "horizontal":
        parsed.ort = 0;
        break;

      case "vertical":
        parsed.ort = 1;
        break;

      default:
        throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
    }
  }

  function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
    } // Issue #582


    if (entry === 0) {
      return;
    }

    parsed.margin = parsed.spectrum.getDistance(entry);
  }

  function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
    }

    parsed.limit = parsed.spectrum.getDistance(entry);

    if (!parsed.limit || parsed.handles < 2) {
      throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
  }

  function testPadding(parsed, entry) {
    var index;

    if (!isNumeric(entry) && !Array.isArray(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }

    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }

    if (entry === 0) {
      return;
    }

    if (!Array.isArray(entry)) {
      entry = [entry, entry];
    } // 'getDistance' returns false for invalid values.


    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];

    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
      // last "range" can't contain step size as it is purely an endpoint.
      if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
        throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
      }
    }

    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];

    if (totalPadding / (lastValue - firstValue) > 1) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
    }
  }

  function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
      case "ltr":
        parsed.dir = 0;
        break;

      case "rtl":
        parsed.dir = 1;
        break;

      default:
        throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
    }
  }

  function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
      throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
    } // Check if the string contains any keywords.
    // None are required.


    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;

    if (fixed) {
      if (parsed.handles !== 2) {
        throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
      } // Use margin to enforce fixed state


      testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }

    if (unconstrained && (parsed.margin || parsed.limit)) {
      throw new Error("noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit");
    }

    parsed.events = {
      tap: tap || snap,
      drag: drag,
      fixed: fixed,
      snap: snap,
      hover: hover,
      unconstrained: unconstrained
    };
  }

  function testTooltips(parsed, entry) {
    if (entry === false) {
      return;
    }

    if (entry === true) {
      parsed.tooltips = [];

      for (var i = 0; i < parsed.handles; i++) {
        parsed.tooltips.push(true);
      }
    } else {
      parsed.tooltips = asArray(entry);

      if (parsed.tooltips.length !== parsed.handles) {
        throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
      }

      parsed.tooltips.forEach(function (formatter) {
        if (typeof formatter !== "boolean" && (typeof formatter !== "object" || typeof formatter.to !== "function")) {
          throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
        }
      });
    }
  }

  function testAriaFormat(parsed, entry) {
    parsed.ariaFormat = entry;
    validateFormat(entry);
  }

  function testFormat(parsed, entry) {
    parsed.format = entry;
    validateFormat(entry);
  }

  function testKeyboardSupport(parsed, entry) {
    parsed.keyboardSupport = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
    }
  }

  function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
  }

  function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
      throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
    }

    parsed.cssPrefix = entry;
  }

  function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
      throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
    }

    if (typeof parsed.cssPrefix === "string") {
      parsed.cssClasses = {};

      for (var key in entry) {
        if (!entry.hasOwnProperty(key)) {
          continue;
        }

        parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
      }
    } else {
      parsed.cssClasses = entry;
    }
  } // Test all developer settings and parse to assumption-safe values.


  function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
      margin: 0,
      limit: 0,
      padding: 0,
      animate: true,
      animationDuration: 300,
      ariaFormat: defaultFormatter,
      format: defaultFormatter
    }; // Tests are executed in the order they are presented here.

    var tests = {
      step: {
        r: false,
        t: testStep
      },
      keyboardPageMultiplier: {
        r: false,
        t: testKeyboardPageMultiplier
      },
      keyboardDefaultStep: {
        r: false,
        t: testKeyboardDefaultStep
      },
      start: {
        r: true,
        t: testStart
      },
      connect: {
        r: true,
        t: testConnect
      },
      direction: {
        r: true,
        t: testDirection
      },
      snap: {
        r: false,
        t: testSnap
      },
      animate: {
        r: false,
        t: testAnimate
      },
      animationDuration: {
        r: false,
        t: testAnimationDuration
      },
      range: {
        r: true,
        t: testRange
      },
      orientation: {
        r: false,
        t: testOrientation
      },
      margin: {
        r: false,
        t: testMargin
      },
      limit: {
        r: false,
        t: testLimit
      },
      padding: {
        r: false,
        t: testPadding
      },
      behaviour: {
        r: true,
        t: testBehaviour
      },
      ariaFormat: {
        r: false,
        t: testAriaFormat
      },
      format: {
        r: false,
        t: testFormat
      },
      tooltips: {
        r: false,
        t: testTooltips
      },
      keyboardSupport: {
        r: true,
        t: testKeyboardSupport
      },
      documentElement: {
        r: false,
        t: testDocumentElement
      },
      cssPrefix: {
        r: true,
        t: testCssPrefix
      },
      cssClasses: {
        r: true,
        t: testCssClasses
      }
    };
    var defaults = {
      connect: false,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: true,
      cssPrefix: "noUi-",
      cssClasses: cssClasses,
      keyboardPageMultiplier: 5,
      keyboardDefaultStep: 10
    }; // AriaFormat defaults to regular format, if any.

    if (options.format && !options.ariaFormat) {
      options.ariaFormat = options.format;
    } // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.


    Object.keys(tests).forEach(function (name) {
      // If the option isn't set, but it is required, throw an error.
      if (!isSet(options[name]) && defaults[name] === undefined) {
        if (tests[name].r) {
          throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
        }

        return true;
      }

      tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    }); // Forward pips options

    parsed.pips = options.pips; // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d

    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform"; // Pips don't move, so we can place them using left/top.

    var styles = [["left", "top"], ["right", "bottom"]];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
  } //endregion


  function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive(); // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes

    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips; // Slider state values

    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {}; // Exposed API

    var scope_Self; // Document Nodes

    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body; // Pips constants

    var PIPS_NONE = -1;
    var PIPS_NO_VALUE = 0;
    var PIPS_LARGE_VALUE = 1;
    var PIPS_SMALL_VALUE = 2; // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.

    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100; // Creates a node, adds it to target, returns the new node.

    function addNodeTo(addTarget, className) {
      var div = scope_Document.createElement("div");

      if (className) {
        addClass(div, className);
      }

      addTarget.appendChild(div);
      return div;
    } // Append a origin to the base


    function addOrigin(base, handleNumber) {
      var origin = addNodeTo(base, options.cssClasses.origin);
      var handle = addNodeTo(origin, options.cssClasses.handle);
      addNodeTo(handle, options.cssClasses.touchArea);
      handle.setAttribute("data-handle", handleNumber);

      if (options.keyboardSupport) {
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
        // 0 = focusable and reachable
        handle.setAttribute("tabindex", "0");
        handle.addEventListener("keydown", function (event) {
          return eventKeydown(event, handleNumber);
        });
      }

      handle.setAttribute("role", "slider");
      handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

      if (handleNumber === 0) {
        addClass(handle, options.cssClasses.handleLower);
      } else if (handleNumber === options.handles - 1) {
        addClass(handle, options.cssClasses.handleUpper);
      }

      return origin;
    } // Insert nodes for connect elements


    function addConnect(base, add) {
      if (!add) {
        return false;
      }

      return addNodeTo(base, options.cssClasses.connect);
    } // Add handles to the slider base.


    function addElements(connectOptions, base) {
      var connectBase = addNodeTo(base, options.cssClasses.connects);
      scope_Handles = [];
      scope_Connects = [];
      scope_Connects.push(addConnect(connectBase, connectOptions[0])); // [::::O====O====O====]
      // connectOptions = [0, 1, 1, 1]

      for (var i = 0; i < options.handles; i++) {
        // Keep a list of all added handles.
        scope_Handles.push(addOrigin(base, i));
        scope_HandleNumbers[i] = i;
        scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
      }
    } // Initialize a single slider.


    function addSlider(addTarget) {
      // Apply classes and data to the target.
      addClass(addTarget, options.cssClasses.target);

      if (options.dir === 0) {
        addClass(addTarget, options.cssClasses.ltr);
      } else {
        addClass(addTarget, options.cssClasses.rtl);
      }

      if (options.ort === 0) {
        addClass(addTarget, options.cssClasses.horizontal);
      } else {
        addClass(addTarget, options.cssClasses.vertical);
      }

      var textDirection = getComputedStyle(addTarget).direction;

      if (textDirection === "rtl") {
        addClass(addTarget, options.cssClasses.textDirectionRtl);
      } else {
        addClass(addTarget, options.cssClasses.textDirectionLtr);
      }

      return addNodeTo(addTarget, options.cssClasses.base);
    }

    function addTooltip(handle, handleNumber) {
      if (!options.tooltips[handleNumber]) {
        return false;
      }

      return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }

    function isSliderDisabled() {
      return scope_Target.hasAttribute("disabled");
    } // Disable the slider dragging if any handle is disabled


    function isHandleDisabled(handleNumber) {
      var handleOrigin = scope_Handles[handleNumber];
      return handleOrigin.hasAttribute("disabled");
    }

    function removeTooltips() {
      if (scope_Tooltips) {
        removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
        scope_Tooltips.forEach(function (tooltip) {
          if (tooltip) {
            removeElement(tooltip);
          }
        });
        scope_Tooltips = null;
      }
    } // The tooltips option is a shorthand for using the 'update' event.


    function tooltips() {
      removeTooltips(); // Tooltips are added with options.tooltips in original order.

      scope_Tooltips = scope_Handles.map(addTooltip);
      bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
        if (!scope_Tooltips[handleNumber]) {
          return;
        }

        var formattedValue = values[handleNumber];

        if (options.tooltips[handleNumber] !== true) {
          formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
        }

        scope_Tooltips[handleNumber].innerHTML = formattedValue;
      });
    }

    function aria() {
      removeEvent("update" + INTERNAL_EVENT_NS.aria);
      bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
        // Update Aria Values for all handles, as a change in one changes min and max values for the next.
        scope_HandleNumbers.forEach(function (index) {
          var handle = scope_Handles[index];
          var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
          var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
          var now = positions[index]; // Formatted value for display

          var text = options.ariaFormat.to(unencoded[index]); // Map to slider range values

          min = scope_Spectrum.fromStepping(min).toFixed(1);
          max = scope_Spectrum.fromStepping(max).toFixed(1);
          now = scope_Spectrum.fromStepping(now).toFixed(1);
          handle.children[0].setAttribute("aria-valuemin", min);
          handle.children[0].setAttribute("aria-valuemax", max);
          handle.children[0].setAttribute("aria-valuenow", now);
          handle.children[0].setAttribute("aria-valuetext", text);
        });
      });
    }

    function getGroup(mode, values, stepped) {
      // Use the range.
      if (mode === "range" || mode === "steps") {
        return scope_Spectrum.xVal;
      }

      if (mode === "count") {
        if (values < 2) {
          throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
        } // Divide 0 - 100 in 'count' parts.


        var interval = values - 1;
        var spread = 100 / interval;
        values = []; // List these parts and have them handled as 'positions'.

        while (interval--) {
          values[interval] = interval * spread;
        }

        values.push(100);
        mode = "positions";
      }

      if (mode === "positions") {
        // Map all percentages to on-range values.
        return values.map(function (value) {
          return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
      }

      if (mode === "values") {
        // If the value must be stepped, it needs to be converted to a percentage first.
        if (stepped) {
          return values.map(function (value) {
            // Convert to percentage, apply step, return to value.
            return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
          });
        } // Otherwise, we can simply use the values.


        return values;
      }
    }

    function generateSpread(density, mode, group) {
      function safeIncrement(value, increment) {
        // Avoid floating point variance by dropping the smallest decimal places.
        return (value + increment).toFixed(7) / 1;
      }

      var indexes = {};
      var firstInRange = scope_Spectrum.xVal[0];
      var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
      var ignoreFirst = false;
      var ignoreLast = false;
      var prevPct = 0; // Create a copy of the group, sort it and filter away all duplicates.

      group = unique(group.slice().sort(function (a, b) {
        return a - b;
      })); // Make sure the range starts with the first element.

      if (group[0] !== firstInRange) {
        group.unshift(firstInRange);
        ignoreFirst = true;
      } // Likewise for the last one.


      if (group[group.length - 1] !== lastInRange) {
        group.push(lastInRange);
        ignoreLast = true;
      }

      group.forEach(function (current, index) {
        // Get the current step and the lower + upper positions.
        var step;
        var i;
        var q;
        var low = current;
        var high = group[index + 1];
        var newPct;
        var pctDifference;
        var pctPos;
        var type;
        var steps;
        var realSteps;
        var stepSize;
        var isSteps = mode === "steps"; // When using 'steps' mode, use the provided steps.
        // Otherwise, we'll step on to the next subrange.

        if (isSteps) {
          step = scope_Spectrum.xNumSteps[index];
        } // Default to a 'full' step.


        if (!step) {
          step = high - low;
        } // Low can be 0, so test for false. Index 0 is already handled.


        if (low === false) {
          return;
        } // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)


        if (high === undefined) {
          high = low;
        } // Make sure step isn't 0, which would cause an infinite loop (#654)


        step = Math.max(step, 0.0000001); // Find all steps in the subrange.

        for (i = low; i <= high; i = safeIncrement(i, step)) {
          // Get the percentage value for the current step,
          // calculate the size for the subrange.
          newPct = scope_Spectrum.toStepping(i);
          pctDifference = newPct - prevPct;
          steps = pctDifference / density;
          realSteps = Math.round(steps); // This ratio represents the amount of percentage-space a point indicates.
          // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
          // Round the percentage offset to an even number, then divide by two
          // to spread the offset on both sides of the range.

          stepSize = pctDifference / realSteps; // Divide all points evenly, adding the correct number to this subrange.
          // Run up to <= so that 100% gets a point, event if ignoreLast is set.

          for (q = 1; q <= realSteps; q += 1) {
            // The ratio between the rounded value and the actual size might be ~1% off.
            // Correct the percentage offset by the number of points
            // per subrange. density = 1 will result in 100 points on the
            // full range, 2 for 50, 4 for 25, etc.
            pctPos = prevPct + q * stepSize;
            indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
          } // Determine the point type.


          type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE; // Enforce the 'ignoreFirst' option by overwriting the type for 0.

          if (!index && ignoreFirst && i !== high) {
            type = 0;
          }

          if (!(i === high && ignoreLast)) {
            // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
            indexes[newPct.toFixed(5)] = [i, type];
          } // Update the percentage count.


          prevPct = newPct;
        }
      });
      return indexes;
    }

    function addMarking(spread, filterFunc, formatter) {
      var element = scope_Document.createElement("div");
      var valueSizeClasses = [];
      valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
      valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
      valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;
      var markerSizeClasses = [];
      markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
      markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
      markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;
      var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
      var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
      addClass(element, options.cssClasses.pips);
      addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

      function getClasses(type, source) {
        var a = source === options.cssClasses.value;
        var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
        var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
        return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
      }

      function addSpread(offset, value, type) {
        // Apply the filter function, if it is set.
        type = filterFunc ? filterFunc(value, type) : type;

        if (type === PIPS_NONE) {
          return;
        } // Add a marker for every point


        var node = addNodeTo(element, false);
        node.className = getClasses(type, options.cssClasses.marker);
        node.style[options.style] = offset + "%"; // Values are only appended for points marked '1' or '2'.

        if (type > PIPS_NO_VALUE) {
          node = addNodeTo(element, false);
          node.className = getClasses(type, options.cssClasses.value);
          node.setAttribute("data-value", value);
          node.style[options.style] = offset + "%";
          node.innerHTML = formatter.to(value);
        }
      } // Append all points.


      Object.keys(spread).forEach(function (offset) {
        addSpread(offset, spread[offset][0], spread[offset][1]);
      });
      return element;
    }

    function removePips() {
      if (scope_Pips) {
        removeElement(scope_Pips);
        scope_Pips = null;
      }
    }

    function pips(grid) {
      // Fix #669
      removePips();
      var mode = grid.mode;
      var density = grid.density || 1;
      var filter = grid.filter || false;
      var values = grid.values || false;
      var stepped = grid.stepped || false;
      var group = getGroup(mode, values, stepped);
      var spread = generateSpread(density, mode, group);
      var format = grid.format || {
        to: Math.round
      };
      scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
      return scope_Pips;
    } // Shorthand for base dimensions.


    function baseSize() {
      var rect = scope_Base.getBoundingClientRect();
      var alt = "offset" + ["Width", "Height"][options.ort];
      return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    } // Handler for attaching events trough a proxy.


    function attachEvent(events, element, callback, data) {
      // This function can be used to 'filter' events to the slider.
      // element is a node, not a nodeList
      var method = function method(e) {
        e = fixEvent(e, data.pageOffset, data.target || element); // fixEvent returns false if this event has a different target
        // when handling (multi-) touch events;

        if (!e) {
          return false;
        } // doNotReject is passed by all end events to make sure released touches
        // are not rejected, leaving the slider "stuck" to the cursor;


        if (isSliderDisabled() && !data.doNotReject) {
          return false;
        } // Stop if an active 'tap' transition is taking place.


        if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
          return false;
        } // Ignore right or middle clicks on start #454


        if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
          return false;
        } // Ignore right or middle clicks on start #454


        if (data.hover && e.buttons) {
          return false;
        } // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
        // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
        // touch-action: manipulation, but that allows panning, which breaks
        // sliders after zooming/on non-responsive pages.
        // See: https://bugs.webkit.org/show_bug.cgi?id=133112


        if (!supportsPassive) {
          e.preventDefault();
        }

        e.calcPoint = e.points[options.ort]; // Call the event handler with the event [ and additional data ].

        callback(e, data);
      };

      var methods = []; // Bind a closure on the target for every event type.

      events.split(" ").forEach(function (eventName) {
        element.addEventListener(eventName, method, supportsPassive ? {
          passive: true
        } : false);
        methods.push([eventName, method]);
      });
      return methods;
    } // Provide a clean event with standardized offset values.


    function fixEvent(e, pageOffset, eventTarget) {
      // Filter the event to register the type, which can be
      // touch, mouse or pointer. Offset changes need to be
      // made on an event specific basis.
      var touch = e.type.indexOf("touch") === 0;
      var mouse = e.type.indexOf("mouse") === 0;
      var pointer = e.type.indexOf("pointer") === 0;
      var x;
      var y; // IE10 implemented pointer events with a prefix;

      if (e.type.indexOf("MSPointer") === 0) {
        pointer = true;
      } // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
      // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
      // events that have no touches or buttons associated with them. (#1057, #1079, #1095)


      if (e.type === "mousedown" && !e.buttons && !e.touches) {
        return false;
      } // The only thing one handle should be concerned about is the touches that originated on top of it.


      if (touch) {
        // Returns true if a touch originated on the target.
        var isTouchOnTarget = function isTouchOnTarget(checkTouch) {
          return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target) || checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget);
        }; // In the case of touchstart events, we need to make sure there is still no more than one
        // touch on the target so we look amongst all touches.


        if (e.type === "touchstart") {
          var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget); // Do not support more than one touch per handle.

          if (targetTouches.length > 1) {
            return false;
          }

          x = targetTouches[0].pageX;
          y = targetTouches[0].pageY;
        } else {
          // In the other cases, find on changedTouches is enough.
          var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget); // Cancel if the target touch has not moved.

          if (!targetTouch) {
            return false;
          }

          x = targetTouch.pageX;
          y = targetTouch.pageY;
        }
      }

      pageOffset = pageOffset || getPageOffset(scope_Document);

      if (mouse || pointer) {
        x = e.clientX + pageOffset.x;
        y = e.clientY + pageOffset.y;
      }

      e.pageOffset = pageOffset;
      e.points = [x, y];
      e.cursor = mouse || pointer; // Fix #435

      return e;
    } // Translate a coordinate in the document to a percentage on the slider


    function calcPointToPercentage(calcPoint) {
      var location = calcPoint - offset(scope_Base, options.ort);
      var proposal = location * 100 / baseSize(); // Clamp proposal between 0% and 100%
      // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
      // are used (e.g. contained handles feature)

      proposal = limit(proposal);
      return options.dir ? 100 - proposal : proposal;
    } // Find handle closest to a certain percentage on the slider


    function getClosestHandle(clickedPosition) {
      var smallestDifference = 100;
      var handleNumber = false;
      scope_Handles.forEach(function (handle, index) {
        // Disabled handles are ignored
        if (isHandleDisabled(index)) {
          return;
        }

        var handlePosition = scope_Locations[index];
        var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition); // Initial state

        var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100; // Difference with this handle is smaller than the previously checked handle

        var isCloser = differenceWithThisHandle < smallestDifference;
        var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;

        if (isCloser || isCloserAfter || clickAtEdge) {
          handleNumber = index;
          smallestDifference = differenceWithThisHandle;
        }
      });
      return handleNumber;
    } // Fire 'end' when a mouse or pen leaves the document.


    function documentLeave(event, data) {
      if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
        eventEnd(event, data);
      }
    } // Handle movement on document for handle and range drag.


    function eventMove(event, data) {
      // Fix #498
      // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
      // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
      // IE9 has .buttons and .which zero on mousemove.
      // Firefox breaks the spec MDN defines.
      if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
        return eventEnd(event, data);
      } // Check if we are moving up or down


      var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint); // Convert the movement into a percentage of the slider width/height

      var proposal = movement * 100 / data.baseSize;
      moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
    } // Unbind move events on document, call callbacks.


    function eventEnd(event, data) {
      // The handle is no longer active, so remove the class.
      if (data.handle) {
        removeClass(data.handle, options.cssClasses.active);
        scope_ActiveHandlesCount -= 1;
      } // Unbind the move and end events, which are added on 'start'.


      data.listeners.forEach(function (c) {
        scope_DocumentElement.removeEventListener(c[0], c[1]);
      });

      if (scope_ActiveHandlesCount === 0) {
        // Remove dragging class.
        removeClass(scope_Target, options.cssClasses.drag);
        setZindex(); // Remove cursor styles and text-selection events bound to the body.

        if (event.cursor) {
          scope_Body.style.cursor = "";
          scope_Body.removeEventListener("selectstart", preventDefault);
        }
      }

      data.handleNumbers.forEach(function (handleNumber) {
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        fireEvent("end", handleNumber);
      });
    } // Bind move events on document.


    function eventStart(event, data) {
      // Ignore event if any handle is disabled
      if (data.handleNumbers.some(isHandleDisabled)) {
        return false;
      }

      var handle;

      if (data.handleNumbers.length === 1) {
        var handleOrigin = scope_Handles[data.handleNumbers[0]];
        handle = handleOrigin.children[0];
        scope_ActiveHandlesCount += 1; // Mark the handle as 'active' so it can be styled.

        addClass(handle, options.cssClasses.active);
      } // A drag should never propagate up to the 'tap' event.


      event.stopPropagation(); // Record the event listeners.

      var listeners = []; // Attach the move and end events.

      var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
        // The event target has changed so we need to propagate the original one so that we keep
        // relying on it to extract target touches.
        target: event.target,
        handle: handle,
        listeners: listeners,
        startCalcPoint: event.calcPoint,
        baseSize: baseSize(),
        pageOffset: event.pageOffset,
        handleNumbers: data.handleNumbers,
        buttonsProperty: event.buttons,
        locations: scope_Locations.slice()
      });
      var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
        target: event.target,
        handle: handle,
        listeners: listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      });
      var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
        target: event.target,
        handle: handle,
        listeners: listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      }); // We want to make sure we pushed the listeners in the listener list rather than creating
      // a new one as it has already been passed to the event handlers.

      listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent)); // Text selection isn't an issue on touch devices,
      // so adding cursor styles can be skipped.

      if (event.cursor) {
        // Prevent the 'I' cursor and extend the range-drag cursor.
        scope_Body.style.cursor = getComputedStyle(event.target).cursor; // Mark the target with a dragging state.

        if (scope_Handles.length > 1) {
          addClass(scope_Target, options.cssClasses.drag);
        } // Prevent text selection when dragging the handles.
        // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
        // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
        // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
        // The 'cursor' flag is false.
        // See: http://caniuse.com/#search=selectstart


        scope_Body.addEventListener("selectstart", preventDefault, false);
      }

      data.handleNumbers.forEach(function (handleNumber) {
        fireEvent("start", handleNumber);
      });
    } // Move closest handle to tapped location.


    function eventTap(event) {
      // The tap event shouldn't propagate up
      event.stopPropagation();
      var proposal = calcPointToPercentage(event.calcPoint);
      var handleNumber = getClosestHandle(proposal); // Tackle the case that all handles are 'disabled'.

      if (handleNumber === false) {
        return false;
      } // Flag the slider as it is now in a transitional state.
      // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.


      if (!options.events.snap) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      }

      setHandle(handleNumber, proposal, true, true);
      setZindex();
      fireEvent("slide", handleNumber, true);
      fireEvent("update", handleNumber, true);
      fireEvent("change", handleNumber, true);
      fireEvent("set", handleNumber, true);

      if (options.events.snap) {
        eventStart(event, {
          handleNumbers: [handleNumber]
        });
      }
    } // Fires a 'hover' event for a hovered mouse/pen position.


    function eventHover(event) {
      var proposal = calcPointToPercentage(event.calcPoint);
      var to = scope_Spectrum.getStep(proposal);
      var value = scope_Spectrum.fromStepping(to);
      Object.keys(scope_Events).forEach(function (targetEvent) {
        if ("hover" === targetEvent.split(".")[0]) {
          scope_Events[targetEvent].forEach(function (callback) {
            callback.call(scope_Self, value);
          });
        }
      });
    } // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles


    function eventKeydown(event, handleNumber) {
      if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
        return false;
      }

      var horizontalKeys = ["Left", "Right"];
      var verticalKeys = ["Down", "Up"];
      var largeStepKeys = ["PageDown", "PageUp"];
      var edgeKeys = ["Home", "End"];

      if (options.dir && !options.ort) {
        // On an right-to-left slider, the left and right keys act inverted
        horizontalKeys.reverse();
      } else if (options.ort && !options.dir) {
        // On a top-to-bottom slider, the up and down keys act inverted
        verticalKeys.reverse();
        largeStepKeys.reverse();
      } // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key


      var key = event.key.replace("Arrow", "");
      var isLargeDown = key === largeStepKeys[0];
      var isLargeUp = key === largeStepKeys[1];
      var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
      var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
      var isMin = key === edgeKeys[0];
      var isMax = key === edgeKeys[1];

      if (!isDown && !isUp && !isMin && !isMax) {
        return true;
      }

      event.preventDefault();
      var to;

      if (isUp || isDown) {
        var multiplier = options.keyboardPageMultiplier;
        var direction = isDown ? 0 : 1;
        var steps = getNextStepsForHandle(handleNumber);
        var step = steps[direction]; // At the edge of a slider, do nothing

        if (step === null) {
          return false;
        } // No step set, use the default of 10% of the sub-range


        if (step === false) {
          step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
        }

        if (isLargeUp || isLargeDown) {
          step *= multiplier;
        } // Step over zero-length ranges (#948);


        step = Math.max(step, 0.0000001); // Decrement for down steps

        step = (isDown ? -1 : 1) * step;
        to = scope_Values[handleNumber] + step;
      } else if (isMax) {
        // End key
        to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
      } else {
        // Home key
        to = options.spectrum.xVal[0];
      }

      setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
      fireEvent("slide", handleNumber);
      fireEvent("update", handleNumber);
      fireEvent("change", handleNumber);
      fireEvent("set", handleNumber);
      return false;
    } // Attach events to several slider parts.


    function bindSliderEvents(behaviour) {
      // Attach the standard drag event to the handles.
      if (!behaviour.fixed) {
        scope_Handles.forEach(function (handle, index) {
          // These events are only bound to the visual handle
          // element, not the 'real' origin element.
          attachEvent(actions.start, handle.children[0], eventStart, {
            handleNumbers: [index]
          });
        });
      } // Attach the tap event to the slider base.


      if (behaviour.tap) {
        attachEvent(actions.start, scope_Base, eventTap, {});
      } // Fire hover events


      if (behaviour.hover) {
        attachEvent(actions.move, scope_Base, eventHover, {
          hover: true
        });
      } // Make the range draggable.


      if (behaviour.drag) {
        scope_Connects.forEach(function (connect, index) {
          if (connect === false || index === 0 || index === scope_Connects.length - 1) {
            return;
          }

          var handleBefore = scope_Handles[index - 1];
          var handleAfter = scope_Handles[index];
          var eventHolders = [connect];
          addClass(connect, options.cssClasses.draggable); // When the range is fixed, the entire range can
          // be dragged by the handles. The handle in the first
          // origin will propagate the start event upward,
          // but it needs to be bound manually on the other.

          if (behaviour.fixed) {
            eventHolders.push(handleBefore.children[0]);
            eventHolders.push(handleAfter.children[0]);
          }

          eventHolders.forEach(function (eventHolder) {
            attachEvent(actions.start, eventHolder, eventStart, {
              handles: [handleBefore, handleAfter],
              handleNumbers: [index - 1, index]
            });
          });
        });
      }
    } // Attach an event to this slider, possibly including a namespace


    function bindEvent(namespacedEvent, callback) {
      scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
      scope_Events[namespacedEvent].push(callback); // If the event bound is 'update,' fire it immediately for all handles.

      if (namespacedEvent.split(".")[0] === "update") {
        scope_Handles.forEach(function (a, index) {
          fireEvent("update", index);
        });
      }
    }

    function isInternalNamespace(namespace) {
      return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    } // Undo attachment of event


    function removeEvent(namespacedEvent) {
      var event = namespacedEvent && namespacedEvent.split(".")[0];
      var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
      Object.keys(scope_Events).forEach(function (bind) {
        var tEvent = bind.split(".")[0];
        var tNamespace = bind.substring(tEvent.length);

        if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
          // only delete protected internal event if intentional
          if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
            delete scope_Events[bind];
          }
        }
      });
    } // External event handling


    function fireEvent(eventName, handleNumber, tap) {
      Object.keys(scope_Events).forEach(function (targetEvent) {
        var eventType = targetEvent.split(".")[0];

        if (eventName === eventType) {
          scope_Events[targetEvent].forEach(function (callback) {
            callback.call( // Use the slider public API as the scope ('this')
            scope_Self, // Return values as array, so arg_1[arg_2] is always valid.
            scope_Values.map(options.format.to), // Handle index, 0 or 1
            handleNumber, // Un-formatted slider values
            scope_Values.slice(), // Event is fired by tap, true or false
            tap || false, // Left offset of the handle, in relation to the slider
            scope_Locations.slice(), // add the slider public API to an accessible parameter when this is unavailable
            scope_Self);
          });
        }
      });
    } // Split out the handle positioning logic so the Move event can use it, too


    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
      var distance; // For sliders with multiple handles, limit movement to the other handle.
      // Apply the margin option by adding it to the handle positions.

      if (scope_Handles.length > 1 && !options.events.unconstrained) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
          to = Math.max(to, distance);
        }

        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
          to = Math.min(to, distance);
        }
      } // The limit option has the opposite effect, limiting handles to a
      // maximum distance from another. Limit must be > 0, as otherwise
      // handles would be unmovable.


      if (scope_Handles.length > 1 && options.limit) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
          to = Math.min(to, distance);
        }

        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
          to = Math.max(to, distance);
        }
      } // The padding option keeps the handles a certain distance from the
      // edges of the slider. Padding must be > 0.


      if (options.padding) {
        if (handleNumber === 0) {
          distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
          to = Math.max(to, distance);
        }

        if (handleNumber === scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
          to = Math.min(to, distance);
        }
      }

      to = scope_Spectrum.getStep(to); // Limit percentage to the 0 - 100 range

      to = limit(to); // Return false if handle can't move

      if (to === reference[handleNumber] && !getValue) {
        return false;
      }

      return to;
    } // Uses slider orientation to create CSS rules. a = base value;


    function inRuleOrder(v, a) {
      var o = options.ort;
      return (o ? a : v) + ", " + (o ? v : a);
    } // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])


    function moveHandles(upward, proposal, locations, handleNumbers) {
      var proposals = locations.slice();
      var b = [!upward, upward];
      var f = [upward, !upward]; // Copy handleNumbers so we don't change the dataset

      handleNumbers = handleNumbers.slice(); // Check to see which handle is 'leading'.
      // If that one can't move the second can't either.

      if (upward) {
        handleNumbers.reverse();
      } // Step 1: get the maximum percentage that any of the handles can move


      if (handleNumbers.length > 1) {
        handleNumbers.forEach(function (handleNumber, o) {
          var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false); // Stop if one of the handles can't move.

          if (to === false) {
            proposal = 0;
          } else {
            proposal = to - proposals[handleNumber];
            proposals[handleNumber] = to;
          }
        });
      } // If using one handle, check backward AND forward
      else {
          b = f = [true];
        }

      var state = false; // Step 2: Try to set the handles with the found percentage

      handleNumbers.forEach(function (handleNumber, o) {
        state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
      }); // Step 3: If a handle moved, fire events

      if (state) {
        handleNumbers.forEach(function (handleNumber) {
          fireEvent("update", handleNumber);
          fireEvent("slide", handleNumber);
        });
      }
    } // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223


    function transformDirection(a, b) {
      return options.dir ? 100 - a - b : a;
    } // Updates scope_Locations and scope_Values, updates visual state


    function updateHandlePosition(handleNumber, to) {
      // Update locations.
      scope_Locations[handleNumber] = to; // Convert the value to the slider stepping/range.

      scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
      var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
      var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
      scope_Handles[handleNumber].style[options.transformRule] = translateRule;
      updateConnect(handleNumber);
      updateConnect(handleNumber + 1);
    } // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]


    function setZindex() {
      scope_HandleNumbers.forEach(function (handleNumber) {
        var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
        var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
        scope_Handles[handleNumber].style.zIndex = zIndex;
      });
    } // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)


    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
      if (!exactInput) {
        to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
      }

      if (to === false) {
        return false;
      }

      updateHandlePosition(handleNumber, to);
      return true;
    } // Updates style attribute for connect nodes


    function updateConnect(index) {
      // Skip connects set to false
      if (!scope_Connects[index]) {
        return;
      }

      var l = 0;
      var h = 100;

      if (index !== 0) {
        l = scope_Locations[index - 1];
      }

      if (index !== scope_Connects.length - 1) {
        h = scope_Locations[index];
      } // We use two rules:
      // 'translate' to change the left/top offset;
      // 'scale' to change the width of the element;
      // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)


      var connectWidth = h - l;
      var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
      var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
      scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
    } // Parses value passed to .set method. Returns current value if not parse-able.


    function resolveToValue(to, handleNumber) {
      // Setting with null indicates an 'ignore'.
      // Inputting 'false' is invalid.
      if (to === null || to === false || to === undefined) {
        return scope_Locations[handleNumber];
      } // If a formatted number was passed, attempt to decode it.


      if (typeof to === "number") {
        to = String(to);
      }

      to = options.format.from(to);
      to = scope_Spectrum.toStepping(to); // If parsing the number failed, use the current value.

      if (to === false || isNaN(to)) {
        return scope_Locations[handleNumber];
      }

      return to;
    } // Set the slider value.


    function valueSet(input, fireSetEvent, exactInput) {
      var values = asArray(input);
      var isInit = scope_Locations[0] === undefined; // Event fires by default

      fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent; // Animation is optional.
      // Make sure the initial values were set before using animated placement.

      if (options.animate && !isInit) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      } // First pass, without lookAhead but with lookBackward. Values are set from left to right.


      scope_HandleNumbers.forEach(function (handleNumber) {
        setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
      });
      var i = scope_HandleNumbers.length === 1 ? 0 : 1; // Secondary passes. Now that all base values are set, apply constraints.
      // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)

      for (; i < scope_HandleNumbers.length; ++i) {
        scope_HandleNumbers.forEach(function (handleNumber) {
          setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
        });
      }

      setZindex();
      scope_HandleNumbers.forEach(function (handleNumber) {
        fireEvent("update", handleNumber); // Fire the event only for handles that received a new value, as per #579

        if (values[handleNumber] !== null && fireSetEvent) {
          fireEvent("set", handleNumber);
        }
      });
    } // Reset slider to initial values


    function valueReset(fireSetEvent) {
      valueSet(options.start, fireSetEvent);
    } // Set value for a single handle


    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
      // Ensure numeric input
      handleNumber = Number(handleNumber);

      if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
        throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
      } // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
      // The exactInput argument can be used to ignore slider stepping (#436)


      setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
      fireEvent("update", handleNumber);

      if (fireSetEvent) {
        fireEvent("set", handleNumber);
      }
    } // Get the slider value.


    function valueGet() {
      var values = scope_Values.map(options.format.to); // If only one handle is used, return a single value.

      if (values.length === 1) {
        return values[0];
      }

      return values;
    } // Removes classes from the root and empties it.


    function destroy() {
      // remove protected internal listeners
      removeEvent(INTERNAL_EVENT_NS.aria);
      removeEvent(INTERNAL_EVENT_NS.tooltips);

      for (var key in options.cssClasses) {
        if (!options.cssClasses.hasOwnProperty(key)) {
          continue;
        }

        removeClass(scope_Target, options.cssClasses[key]);
      }

      while (scope_Target.firstChild) {
        scope_Target.removeChild(scope_Target.firstChild);
      }

      delete scope_Target.noUiSlider;
    }

    function getNextStepsForHandle(handleNumber) {
      var location = scope_Locations[handleNumber];
      var nearbySteps = scope_Spectrum.getNearbySteps(location);
      var value = scope_Values[handleNumber];
      var increment = nearbySteps.thisStep.step;
      var decrement = null; // If snapped, directly use defined step value

      if (options.snap) {
        return [value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null];
      } // If the next value in this step moves into the next step,
      // the increment is the start of the next step - the current value


      if (increment !== false) {
        if (value + increment > nearbySteps.stepAfter.startValue) {
          increment = nearbySteps.stepAfter.startValue - value;
        }
      } // If the value is beyond the starting point


      if (value > nearbySteps.thisStep.startValue) {
        decrement = nearbySteps.thisStep.step;
      } else if (nearbySteps.stepBefore.step === false) {
        decrement = false;
      } // If a handle is at the start of a step, it always steps back into the previous step first
      else {
          decrement = value - nearbySteps.stepBefore.highestStep;
        } // Now, if at the slider edges, there is no in/decrement


      if (location === 100) {
        increment = null;
      } else if (location === 0) {
        decrement = null;
      } // As per #391, the comparison for the decrement step can have some rounding issues.


      var stepDecimals = scope_Spectrum.countStepDecimals(); // Round per #391

      if (increment !== null && increment !== false) {
        increment = Number(increment.toFixed(stepDecimals));
      }

      if (decrement !== null && decrement !== false) {
        decrement = Number(decrement.toFixed(stepDecimals));
      }

      return [decrement, increment];
    } // Get the current step size for the slider.


    function getNextSteps() {
      return scope_HandleNumbers.map(getNextStepsForHandle);
    } // Updateable: margin, limit, padding, step, range, animate, snap


    function updateOptions(optionsToUpdate, fireSetEvent) {
      // Spectrum is created using the range, snap, direction and step options.
      // 'snap' and 'step' can be updated.
      // If 'snap' and 'step' are not passed, they should remain unchanged.
      var v = valueGet();
      var updateAble = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"]; // Only change options that we're actually passed to update.

      updateAble.forEach(function (name) {
        // Check for undefined. null removes the value.
        if (optionsToUpdate[name] !== undefined) {
          originalOptions[name] = optionsToUpdate[name];
        }
      });
      var newOptions = testOptions(originalOptions); // Load new options into the slider state

      updateAble.forEach(function (name) {
        if (optionsToUpdate[name] !== undefined) {
          options[name] = newOptions[name];
        }
      });
      scope_Spectrum = newOptions.spectrum; // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)

      options.margin = newOptions.margin;
      options.limit = newOptions.limit;
      options.padding = newOptions.padding; // Update pips, removes existing.

      if (options.pips) {
        pips(options.pips);
      } else {
        removePips();
      } // Update tooltips, removes existing.


      if (options.tooltips) {
        tooltips();
      } else {
        removeTooltips();
      } // Invalidate the current positioning so valueSet forces an update.


      scope_Locations = [];
      valueSet(optionsToUpdate.start || v, fireSetEvent);
    } // Initialization steps


    function setupSlider() {
      // Create the base element, initialize HTML and set classes.
      // Add handles and connect elements.
      scope_Base = addSlider(scope_Target);
      addElements(options.connect, scope_Base); // Attach user events.

      bindSliderEvents(options.events); // Use the public value method to set the start values.

      valueSet(options.start);

      if (options.pips) {
        pips(options.pips);
      }

      if (options.tooltips) {
        tooltips();
      }

      aria();
    }

    setupSlider(); // noinspection JSUnusedGlobalSymbols

    scope_Self = {
      destroy: destroy,
      steps: getNextSteps,
      on: bindEvent,
      off: removeEvent,
      get: valueGet,
      set: valueSet,
      setHandle: valueSetHandle,
      reset: valueReset,
      // Exposed for unit testing, don't use this in your application.
      __moveHandles: function __moveHandles(a, b, c) {
        moveHandles(a, b, scope_Locations, c);
      },
      options: originalOptions,
      // Issue #600, #678
      updateOptions: updateOptions,
      target: scope_Target,
      // Issue #597
      removePips: removePips,
      removeTooltips: removeTooltips,
      getTooltips: function getTooltips() {
        return scope_Tooltips;
      },
      getOrigins: function getOrigins() {
        return scope_Handles;
      },
      pips: pips // Issue #594

    };
    return scope_Self;
  } // Run the standard initializer


  function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
      throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
    } // Throw an error if the slider was already initialized.


    if (target.noUiSlider) {
      throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
    } // Test the options and create the slider environment;


    var options = testOptions(originalOptions, target);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
  } // Use an object instead of a function for future expandability;


  return {
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    version: VERSION,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize
  };
});

/***/ }),

/***/ "./src/app/globalFrontendComponents/GallerySlider/GallerySlider.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/GallerySlider/GallerySlider.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GallerySliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerySliderComponent", function() { return GallerySliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




var _c0 = function (a0) { return { "background-image": a0 }; };
function GallerySliderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var gallery_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(../../" + gallery_r2.image + ")"));
} }
var GallerySliderComponent = /** @class */ (function () {
    function GallerySliderComponent() {
        /** Title for baner **/
        this.Title = 'Dummy Title';
        this.slideConfig = {
            centerMode: true,
            centerPadding: '20%',
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 1367,
                    settings: {
                        centerPadding: '15%'
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        centerPadding: '0'
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '0',
                        slidesToShow: 1
                    }
                }
            ]
        };
    }
    GallerySliderComponent.prototype.ngOnInit = function () { };
    GallerySliderComponent.prototype.ngAfterViewInit = function () {
        // $('.listing-slider').slick({
        //    centerMode: true,
        //    centerPadding: '20%',
        //    slidesToShow: 2,
        //    responsive: [
        //       {
        //         breakpoint: 1367,
        //         settings: {
        //           centerPadding: '15%'
        //         }
        //       },
        //       {
        //         breakpoint: 1025,
        //         settings: {
        //           centerPadding: '0'
        //         }
        //       },
        //       {
        //         breakpoint: 767,
        //         settings: {
        //           centerPadding: '0',
        //           slidesToShow: 1
        //         }
        //       }
        //    ]
        // });
        // $('.mfp-gallery-container').each(function() { // the containers for all your galleries
        //    $(this).magnificPopup({
        //        type: 'image',
        //        delegate: 'a.mfp-gallery',
        //        fixedContentPos: true,
        //        fixedBgPos: true,
        //        overflowY: 'auto',
        //        closeBtnInside: false,
        //        preloader: true,
        //        removalDelay: 0,
        //        mainClass: 'mfp-fade',
        //        gallery:{enabled:true, tCounter: ''}
        //    });
        // });
    };
    GallerySliderComponent.ɵfac = function GallerySliderComponent_Factory(t) { return new (t || GallerySliderComponent)(); };
    GallerySliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GallerySliderComponent, selectors: [["gallery-slider"]], inputs: { Title: ["title", "Title"], Data: ["data", "Data"] }, decls: 3, vars: 2, consts: [[1, "carousel", "listing-slider", "mfp-gallery-container", "margin-bottom-0", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], ["title", "Title 1", 1, "item", "mfp-gallery", 3, "ngStyle"]], template: function GallerySliderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-slick-carousel", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GallerySliderComponent_div_2_Template, 2, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZyb250ZW5kQ29tcG9uZW50cy9HYWxsZXJ5U2xpZGVyL0dhbGxlcnlTbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });
    return GallerySliderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GallerySliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-slider',
                templateUrl: './GallerySlider.component.html',
                styleUrls: ['./GallerySlider.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/SmallGallerySlider/SmallGallerySlider.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/SmallGallerySlider/SmallGallerySlider.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SmallGallerySliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallGallerySliderComponent", function() { return SmallGallerySliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



var _c0 = function (a0) { return { "background-image": a0 }; };
function SmallGallerySliderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var gallery_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", gallery_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + gallery_r1.image + ")"));
} }
var SmallGallerySliderComponent = /** @class */ (function () {
    function SmallGallerySliderComponent() {
        /** Title for baner **/
        this.Title = 'Dummy Title';
    }
    SmallGallerySliderComponent.prototype.ngOnInit = function () { };
    SmallGallerySliderComponent.prototype.ngAfterViewInit = function () {
        $('.listing-slider-small').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.mfp-gallery-container').each(function () {
            $(this).magnificPopup({
                type: 'image',
                delegate: 'a.mfp-gallery',
                fixedContentPos: true,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: false,
                preloader: true,
                removalDelay: 0,
                mainClass: 'mfp-fade',
                gallery: { enabled: true, tCounter: '' }
            });
        });
    };
    SmallGallerySliderComponent.ɵfac = function SmallGallerySliderComponent_Factory(t) { return new (t || SmallGallerySliderComponent)(); };
    SmallGallerySliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmallGallerySliderComponent, selectors: [["small-gallery-slider"]], inputs: { Title: ["title", "Title"], Data: ["data", "Data"] }, decls: 5, vars: 2, consts: [["id", "listing-gallery", 1, "listing-section"], [1, "listing-desc-headline", "margin-top-70"], [1, "listing-slider-small", "mfp-gallery-container", "margin-bottom-0"], [4, "ngFor", "ngForOf"], [1, "item", "mfp-gallery", 3, "href", "ngStyle"]], template: function SmallGallerySliderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SmallGallerySliderComponent_ng_container_4_Template, 2, 4, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1NtYWxsR2FsbGVyeVNsaWRlci9TbWFsbEdhbGxlcnlTbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWxGcm9udGVuZENvbXBvbmVudHMvU21hbGxHYWxsZXJ5U2xpZGVyL1NtYWxsR2FsbGVyeVNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWF3e1xuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
    return SmallGallerySliderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmallGallerySliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'small-gallery-slider',
                templateUrl: './SmallGallerySlider.component.html',
                styleUrls: ['./SmallGallerySlider.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/listing/GridFullWidth/GridFullWidth.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/listing/GridFullWidth/GridFullWidth.component.ts ***!
  \******************************************************************/
/*! exports provided: GridFullWidthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFullWidthComponent", function() { return GridFullWidthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalFrontendComponents/TitleBar/TitleBar.component */ "./src/app/globalFrontendComponents/TitleBar/TitleBar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globalFrontendComponents/Pagination/Pagination.component */ "./src/app/globalFrontendComponents/Pagination/Pagination.component.ts");
/* harmony import */ var _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalFrontendComponents/Rating/Rating.component */ "./src/app/globalFrontendComponents/Rating/Rating.component.ts");








var _c0 = function () { return ["/biens/detail/version1"]; };
function GridFullWidthComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "DirectlistRating", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", list_r1.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.address);
} }
var _c1 = function () { return ["/biens/list/appartement"]; };
var GridFullWidthComponent = /** @class */ (function () {
    function GridFullWidthComponent() {
        this.Data = [
            {
                badge: 'Now Open',
                category: 'Eat & Drink',
                title: 'Tom Restaurant',
                address: '964 School Street, New York',
                image: 'assets/images/most-img-1.jpg',
                rating: '5',
                review: '(12 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Events',
                title: 'Sticky Band',
                address: 'Bishop Avenue, New York',
                rating: '5',
                image: 'assets/images/most-img-2.jpg',
            },
            {
                badge: 'Now Open',
                category: 'Hotels',
                title: 'Hotel Govendor',
                address: '778 Country Street, New York',
                image: 'assets/images/most-img-3.jpg',
                rating: '5',
                review: '(17 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Eat & Drink',
                title: 'Burger House',
                address: '2726 Shinn Street, New York',
                image: 'assets/images/most-img-4.jpg',
                rating: '5',
                review: '(31 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Airport',
                title: 'Burger House',
                address: '1512 Duncan Avenue, New York',
                image: 'assets/images/most-img-2.jpg',
                rating: '5',
                review: '(46 reviews)'
            },
            {
                badge: 'Now Closed',
                category: 'Eat & Drink',
                title: 'Think Coffee',
                address: '215 Terry Lane, New York',
                image: 'assets/images/most-img-6.jpg',
                rating: '5',
                review: '(15 reviews)'
            }
        ];
    }
    GridFullWidthComponent.prototype.ngOnInit = function () { };
    GridFullWidthComponent.prototype.ngAfterViewInit = function () {
    };
    GridFullWidthComponent.ɵfac = function GridFullWidthComponent_Factory(t) { return new (t || GridFullWidthComponent)(); };
    GridFullWidthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridFullWidthComponent, selectors: [["grid-full-width"]], decls: 45, vars: 3, consts: [[1, "main-wrapper"], ["title", "Disposition de la grille", "subtitle", "Explorer de nouveaux Biens"], [1, "content"], [1, "container"], [1, "row"], [1, "col-md-12", "grid-full-width", "page-search", "mb-3"], [1, "main-search-input", "mt-0"], [1, "col-lg-3", "col-sm-6"], [1, "form-group"], ["type", "text", "placeholder", "Que cherchez-vous?", 1, "form-control"], ["type", "text", "placeholder", "Location", 1, "form-control"], ["id", "inlineFormCustomSelectPref", 1, "custom-select", "my-1", "mr-sm-2"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-lg-3", "col-sm-6", "text-right"], [1, "btn", "main-search-btn", "btn-radius", "btn-lg", "btn-primary", "text-white"], [1, "btn-inner--text"], [1, "col-md-12"], [1, "row", "my-4"], [1, "col-md-6"], [1, "layout-switcher"], [1, "grid", "active"], [1, "round-pill", "d-block"], [1, "fa", "fa-th"], [1, "list", 3, "routerLink"], [1, "fa", "fa-align-justify"], [1, "fullwidth-filters"], ["class", "col-lg-4 col-md-6 grid-layout-list", 4, "ngFor", "ngForOf"], [1, "clearfix"], [1, "col-lg-4", "col-md-6", "grid-layout-list"], [1, "listing-item-container", "compact"], [1, "listing-item", "mb-4"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "badge", "badge-pill", "badge-primary", "text-uppercase"], [1, "listing-item-content"], [3, "rate"], [1, "round-pill", "like-banner", "d-block", "bg-primary"], [1, "fa", "fa-heart-o"]], template: function GridFullWidthComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "title-bar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Choose...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "appartement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "bureau");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "parcelle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, GridFullWidthComponent_div_42_Template, 19, 10, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "pagination");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [_globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_1__["TitleBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy9HcmlkRnVsbFdpZHRoL0dyaWRGdWxsV2lkdGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nL0dyaWRGdWxsV2lkdGgvR3JpZEZ1bGxXaWR0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWF3e1xuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
    return GridFullWidthComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridFullWidthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'grid-full-width',
                templateUrl: './GridFullWidth.component.html',
                styleUrls: ['./GridFullWidth.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/listing/ListFullWidth/ListFullWidth.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/listing/ListFullWidth/ListFullWidth.component.ts ***!
  \******************************************************************/
/*! exports provided: ListFullWidthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFullWidthComponent", function() { return ListFullWidthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalFrontendComponents/TitleBar/TitleBar.component */ "./src/app/globalFrontendComponents/TitleBar/TitleBar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globalFrontendComponents/Pagination/Pagination.component */ "./src/app/globalFrontendComponents/Pagination/Pagination.component.ts");
/* harmony import */ var _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalFrontendComponents/Rating/Rating.component */ "./src/app/globalFrontendComponents/Rating/Rating.component.ts");








var _c0 = function () { return ["/biens/detail/version1"]; };
function ListFullWidthComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "DirectlistRating", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", list_r1.rating)("review", list_r1.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.category);
} }
var _c1 = function () { return ["/biens/appartement"]; };
var ListFullWidthComponent = /** @class */ (function () {
    function ListFullWidthComponent() {
        this.Data = [
            {
                badge: 'Now Open',
                category: 'Eat & Drink',
                title: 'Tom Restaurant',
                address: '964 School Street, New York',
                image: 'assets/images/most-img-1.jpg',
                rating: '5',
                review: '(12 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Events',
                title: 'Sticky Band',
                address: 'Bishop Avenue, New York',
                image: 'assets/images/most-img-2.jpg',
                rating: '5',
                review: '(23 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Hotels',
                title: 'Hotel Govendor',
                address: '778 Country Street, New York',
                image: 'assets/images/most-img-3.jpg',
                rating: '5',
                review: '(17 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Eat & Drink',
                title: 'Burger House',
                address: '2726 Shinn Street, New York',
                image: 'assets/images/most-img-4.jpg',
                rating: '5',
                review: '(31 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Airport',
                title: 'Burger House',
                address: '1512 Duncan Avenue, New York',
                image: 'assets/images/most-img-2.jpg',
                rating: '5',
                review: '(46 reviews)'
            },
            {
                badge: 'Now Closed',
                category: 'Eat & Drink',
                title: 'Think Coffee',
                address: '215 Terry Lane, New York',
                image: 'assets/images/most-img-6.jpg',
                rating: '5',
                review: '(15 reviews)'
            }
        ];
    }
    ListFullWidthComponent.prototype.ngOnInit = function () { };
    ListFullWidthComponent.prototype.ngAfterViewInit = function () {
    };
    ListFullWidthComponent.ɵfac = function ListFullWidthComponent_Factory(t) { return new (t || ListFullWidthComponent)(); };
    ListFullWidthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListFullWidthComponent, selectors: [["list-full-width"]], decls: 41, vars: 3, consts: [[1, "main-wrapper"], ["title", "List Full Width", "subtitle", "Explore New Places"], [1, "content"], [1, "container"], [1, "row"], [1, "col-md-12", "grid-full-width", "page-search", "mb-3"], [1, "main-search-input", "mt-0"], [1, "col-lg-3", "col-sm-6"], [1, "form-group"], ["type", "text", "placeholder", "What are you looking for?", 1, "form-control"], ["type", "text", "placeholder", "Location", 1, "form-control"], ["id", "inlineFormCustomSelectPref", 1, "custom-select", "my-1", "mr-sm-2"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-lg-3", "col-sm-6", "text-right"], [1, "btn", "main-search-btn", "btn-radius", "btn-lg", "btn-primary", "text-white"], [1, "btn-inner--text"], [1, "col-md-12"], [1, "row", "my-4"], [1, "col-md-6"], [1, "layout-switcher"], [1, "grid", 3, "routerLink"], [1, "round-pill", "d-block"], [1, "fa", "fa-th"], [1, "list", "active"], [1, "fa", "fa-align-justify"], ["class", "col-lg-12 col-md-12", 4, "ngFor", "ngForOf"], [1, "clearfix"], [1, "col-lg-12", "col-md-12"], [1, "listing-item-container", "list-layout", "mb-4"], [1, "listing-item"], [1, "listing-item-image"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "listing-item-content"], [1, "badge", "badge-pill", "list-banner", "badge-success", "text-uppercase"], [1, "listing-item-inner"], [3, "rate", "review"], [1, "mt-3"], [1, "badge", "badge-pill", "badge-primary", "text-uppercase"], [1, "round-pill", "like-banner", "d-block", "bg-primary"], [1, "fa", "fa-heart-o"]], template: function ListFullWidthComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "title-bar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Choose...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hotel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Food Courts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ListFullWidthComponent_div_38_Template, 22, 11, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "pagination");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [_globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_1__["TitleBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy9MaXN0RnVsbFdpZHRoL0xpc3RGdWxsV2lkdGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nL0xpc3RGdWxsV2lkdGgvTGlzdEZ1bGxXaWR0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWF3e1xuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
    return ListFullWidthComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFullWidthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'list-full-width',
                templateUrl: './ListFullWidth.component.html',
                styleUrls: ['./ListFullWidth.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/listing/ListingDetailOne/ListingDetailOne.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/listing/ListingDetailOne/ListingDetailOne.component.ts ***!
  \************************************************************************/
/*! exports provided: ListingDetailOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailOneComponent", function() { return ListingDetailOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globalFrontendComponents_GallerySlider_GallerySlider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalFrontendComponents/GallerySlider/GallerySlider.component */ "./src/app/globalFrontendComponents/GallerySlider/GallerySlider.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _SidebarLayoutOne_SidebarLayoutOne_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SidebarLayoutOne/SidebarLayoutOne.component */ "./src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component.ts");





var ListingDetailOneComponent = /** @class */ (function () {
    function ListingDetailOneComponent() {
        this.lat = -34.397;
        this.lng = 150.644;
        this.headerGallerySlider = [
            { image: 'assets/images/dp-1.jpg' },
            { image: 'assets/images/dp-5.jpg' },
            { image: 'assets/images/dp-3.jpg' },
            { image: 'assets/images/dp-4.jpg' }
        ];
    }
    ListingDetailOneComponent.prototype.ngOnInit = function () { };
    ListingDetailOneComponent.prototype.ngAfterViewInit = function () {
    };
    ListingDetailOneComponent.ɵfac = function ListingDetailOneComponent_Factory(t) { return new (t || ListingDetailOneComponent)(); };
    ListingDetailOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListingDetailOneComponent, selectors: [["list-detail-one"]], decls: 163, vars: 5, consts: [[1, "main-wrapper"], [3, "data"], [1, "container"], [1, "content"], [1, "row", "sticky-wrapper"], [1, "col-lg-8", "col-md-8"], [1, ""], [1, "detail-tile", "mb-4"], [1, "badge", "badge-pill", "badge-success", "text-uppercase"], [1, "text-muted"], [1, "badge", "badge-pill", "badge-info", "text-uppercase", "mr-2"], [1, "badge", "badge-pill", "badge-info", "text-uppercase"], [1, "nav-wrapper", "mb-4"], ["id", "tabs-icons-text", "role", "tablist", 1, "nav", "nav-pills", "nav-fill", "flex-column", "flex-md-row"], [1, "nav-item"], ["id", "tabs-icons-text-1-tab", "data-toggle", "tab", "href", "#tabs-icons-text-1", "role", "tab", "aria-controls", "tabs-icons-text-1", "aria-selected", "true", 1, "nav-link", "mb-sm-3", "mb-md-0", "active", "show"], [1, "fa", "fa-info-circle", "mr-2"], ["id", "tabs-icons-text-2-tab", "data-toggle", "tab", "href", "#tabs-icons-text-2", "role", "tab", "aria-controls", "tabs-icons-text-2", "aria-selected", "false", 1, "nav-link", "mb-sm-3", "mb-md-0"], [1, "fa", "fa-map-marker", "mr-2"], ["id", "tabs-icons-text-3-tab", "data-toggle", "tab", "href", "#tabs-icons-text-3", "role", "tab", "aria-controls", "tabs-icons-text-3", "aria-selected", "false", 1, "nav-link", "mb-sm-3", "mb-md-0"], [1, "fa", "fa-money", "mr-2"], ["id", "tabs-icons-text-4-tab", "data-toggle", "tab", "href", "#tabs-icons-text-4", "role", "tab", "aria-controls", "tabs-icons-text-3", "aria-selected", "false", 1, "nav-link", "mb-sm-3", "mb-md-0"], [1, "card", "shadow"], [1, "card-body"], ["id", "myTabContent", 1, "tab-content"], ["id", "tabs-icons-text-1", "role", "tabpanel", "aria-labelledby", "tabs-icons-text-1-tab", 1, "tab-pane", "fade", "active", "show"], [1, "description"], [1, "mb-4"], [1, "row", "mb-4"], [1, "col-lg-4"], [1, "detail-list", "mb-2"], [1, "detail-list-label", "mb-1"], ["aria-hidden", "true", 1, "fa", "fa-phone", "mr-2"], [1, "text-uppercase", "font-weight-bold"], [1, "m-0", "text-small", "text-muted"], [1, "badge", "badge-pill", "badge-primary", "text-uppercase", "mr-2", "mb-2"], ["id", "tabs-icons-text-2", "role", "tabpanel", "aria-labelledby", "tabs-icons-text-2-tab", 1, "tab-pane", "fade"], [2, "height", "300px", 3, "latitude", "longitude"], [3, "latitude", "longitude"], ["id", "tabs-icons-text-3", "role", "tabpanel", "aria-labelledby", "tabs-icons-text-3-tab", 1, "tab-pane", "fade"], [1, "pricing-list-container"], ["id", "tabs-icons-text-4", "role", "tabpanel", "aria-labelledby", "tabs-icons-text-4-tab", 1, "tab-pane", "fade"], [1, "row", "mb-5", "list-img-wrap"], [1, "col-md-2", "list-img"], ["src", "assets/images/thumb-1.jpg", 1, "img-fluid", "rounded-circle", "shadow-lg"], [1, "col-md-10"], [1, "text-primary"], ["type", "button", 1, "btn", "btn-sm", "btn-primary"], ["src", "assets/images/thumb-2.jpg", 1, "img-fluid", "rounded-circle", "shadow-lg"], [1, "row", "list-img-wrap"], ["src", "assets/images/thumb-3.jpg", 1, "img-fluid", "rounded-circle", "shadow-lg"]], template: function ListingDetailOneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gallery-slider", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Dingloy Place ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Open");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dingloy Place, Remington, London, EC1V 8BP, United Kingdom");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hotel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sea Food");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Location");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pricing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum doloribus repudiandae nulla odit, omnis ex, a assumenda fugiat quasi neque necessitatibus fugit maiores quis. Quo dolor minus pariatur natus!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum doloribus repudiandae nulla odit, omnis ex, a assumenda fugiat quasi neque necessitatibus fugit maiores quis. Quo dolor minus pariatur natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis laudantium est pariatur, harum laboriosam odit delectus vitae minima dolorem ipsam repudiandae sunt non. Dolorem adipisci voluptates doloribus voluptatum nihil. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Contact Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reception.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "+123 123 456 45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "small", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "For Complaints.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "+123 123 456 45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "small", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Support.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "+123 123 456 45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Features ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Swimming pool");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Free WiFi Internet Access Included");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Free Parking");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Swimmingpool Outdoor");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Family Rooms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Non Smoking Rooms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "agm-map", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "agm-marker", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Classic Burger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Beef, salad, mayonnaise, spicey relish, cheese");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "$6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Cheddar Burger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Cheddar cheese, lettuce, tomato, onion, dill pickles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "$6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Veggie Burger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Panko crumbed and fried, grilled peppers and mushroom");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "$6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Chicken Burger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Cheese, chicken fillet, avocado, bacon, tomatoes, basil");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "$6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Betty J. Darby");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "15 Minutes Ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Helpful?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h5", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Becky Laurit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "15 Minutes Ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Helpful?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h5", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Glenda Grandy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "15 Minutes Ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Helpful?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "sidebar-layout-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.headerGallerySlider);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        } }, directives: [_globalFrontendComponents_GallerySlider_GallerySlider_component__WEBPACK_IMPORTED_MODULE_1__["GallerySliderComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"], _SidebarLayoutOne_SidebarLayoutOne_component__WEBPACK_IMPORTED_MODULE_3__["SidebarLayoutOneComponent"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy9MaXN0aW5nRGV0YWlsT25lL0xpc3RpbmdEZXRhaWxPbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nL0xpc3RpbmdEZXRhaWxPbmUvTGlzdGluZ0RldGFpbE9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWF3e1xuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
    return ListingDetailOneComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingDetailOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'list-detail-one',
                templateUrl: './ListingDetailOne.component.html',
                styleUrls: ['./ListingDetailOne.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component.ts ***!
  \************************************************************************/
/*! exports provided: SidebarLayoutOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLayoutOneComponent", function() { return SidebarLayoutOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var SidebarLayoutOneComponent = /** @class */ (function () {
    function SidebarLayoutOneComponent() {
        this.someRange = 10;
    }
    SidebarLayoutOneComponent.prototype.ngOnInit = function () { };
    SidebarLayoutOneComponent.prototype.ngAfterViewInit = function () {
    };
    SidebarLayoutOneComponent.ɵfac = function SidebarLayoutOneComponent_Factory(t) { return new (t || SidebarLayoutOneComponent)(); };
    SidebarLayoutOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarLayoutOneComponent, selectors: [["sidebar-layout-one"]], decls: 14, vars: 0, consts: [[1, "sidebar"], [1, "row", "mb-5"], [1, "row"], [1, "col-lg-12", "col-sm-12", "text-center"], [1, "subs-widget", "bg-gradient-warning", "p-4"], ["src", "assets/images/logo-white.png", "alt", "", 1, "mb-4"], [1, "text-white", "mb-0"], [1, "text-white"], [1, "form-group"], ["type", "text", "placeholder", "Email", 1, "form-control", "form-control-alternative"], ["type", "button", 1, "btn", "btn-primary"]], template: function SidebarLayoutOneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ne manquez pas");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Offres exclusives de Immo agence");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Subscribe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy9TaWRlYmFyTGF5b3V0T25lL1NpZGViYXJMYXlvdXRPbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nL1NpZGViYXJMYXlvdXRPbmUvU2lkZWJhckxheW91dE9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWF3e1xuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
    return SidebarLayoutOneComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarLayoutOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sidebar-layout-one',
                templateUrl: './SidebarLayoutOne.component.html',
                styleUrls: ['./SidebarLayoutOne.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/listing/listing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/listing/listing.module.ts ***!
  \*******************************************/
/*! exports provided: ListingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingModule", function() { return ListingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/ng2-nouislider.js");
/* harmony import */ var _ListFullWidth_ListFullWidth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListFullWidth/ListFullWidth.component */ "./src/app/listing/ListFullWidth/ListFullWidth.component.ts");
/* harmony import */ var _GridFullWidth_GridFullWidth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GridFullWidth/GridFullWidth.component */ "./src/app/listing/GridFullWidth/GridFullWidth.component.ts");
/* harmony import */ var _ListingDetailOne_ListingDetailOne_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListingDetailOne/ListingDetailOne.component */ "./src/app/listing/ListingDetailOne/ListingDetailOne.component.ts");
/* harmony import */ var _globalFrontendComponents_GallerySlider_GallerySlider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../globalFrontendComponents/GallerySlider/GallerySlider.component */ "./src/app/globalFrontendComponents/GallerySlider/GallerySlider.component.ts");
/* harmony import */ var _globalFrontendComponents_SmallGallerySlider_SmallGallerySlider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../globalFrontendComponents/SmallGallerySlider/SmallGallerySlider.component */ "./src/app/globalFrontendComponents/SmallGallerySlider/SmallGallerySlider.component.ts");
/* harmony import */ var _SidebarLayoutOne_SidebarLayoutOne_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarLayoutOne/SidebarLayoutOne.component */ "./src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component.ts");
/* harmony import */ var _listing_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./listing.routing */ "./src/app/listing/listing.routing.ts");
/* harmony import */ var _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../globalFrontendComponents/global.module */ "./src/app/globalFrontendComponents/global.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


















var ListingModule = /** @class */ (function () {
    function ListingModule() {
    }
    ListingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListingModule });
    ListingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListingModule_Factory(t) { return new (t || ListingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_13__["GlobalModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_listing_routing__WEBPACK_IMPORTED_MODULE_12__["ListingRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            ]] });
    return ListingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListingModule, { declarations: [_ListFullWidth_ListFullWidth_component__WEBPACK_IMPORTED_MODULE_6__["ListFullWidthComponent"],
        _GridFullWidth_GridFullWidth_component__WEBPACK_IMPORTED_MODULE_7__["GridFullWidthComponent"],
        _ListingDetailOne_ListingDetailOne_component__WEBPACK_IMPORTED_MODULE_8__["ListingDetailOneComponent"],
        _globalFrontendComponents_GallerySlider_GallerySlider_component__WEBPACK_IMPORTED_MODULE_9__["GallerySliderComponent"],
        _globalFrontendComponents_SmallGallerySlider_SmallGallerySlider_component__WEBPACK_IMPORTED_MODULE_10__["SmallGallerySliderComponent"],
        _SidebarLayoutOne_SidebarLayoutOne_component__WEBPACK_IMPORTED_MODULE_11__["SidebarLayoutOneComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_13__["GlobalModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
        ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_13__["GlobalModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                    ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_listing_routing__WEBPACK_IMPORTED_MODULE_12__["ListingRoutes"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ],
                declarations: [
                    _ListFullWidth_ListFullWidth_component__WEBPACK_IMPORTED_MODULE_6__["ListFullWidthComponent"],
                    _GridFullWidth_GridFullWidth_component__WEBPACK_IMPORTED_MODULE_7__["GridFullWidthComponent"],
                    _ListingDetailOne_ListingDetailOne_component__WEBPACK_IMPORTED_MODULE_8__["ListingDetailOneComponent"],
                    _globalFrontendComponents_GallerySlider_GallerySlider_component__WEBPACK_IMPORTED_MODULE_9__["GallerySliderComponent"],
                    _globalFrontendComponents_SmallGallerySlider_SmallGallerySlider_component__WEBPACK_IMPORTED_MODULE_10__["SmallGallerySliderComponent"],
                    _SidebarLayoutOne_SidebarLayoutOne_component__WEBPACK_IMPORTED_MODULE_11__["SidebarLayoutOneComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/listing/listing.routing.ts":
/*!********************************************!*\
  !*** ./src/app/listing/listing.routing.ts ***!
  \********************************************/
/*! exports provided: ListingRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingRoutes", function() { return ListingRoutes; });
var ListingRoutes = [
/* {path: 'list/full-width', component: ListFullWidthComponent},
 {path: 'appartement', component: GridFullWidthComponent},
 {path: 'bureau', component: GridFullWidthComponent},
 {path: 'studio', component: GridFullWidthComponent},
 {path: 'parcelle', component: GridFullWidthComponent},
 {path: 'villa', component: GridFullWidthComponent},

 {path: 'detail/version1', component: ListingDetailOneComponent},


 {path: 'list/appartement', component: ListFullWidthComponent},
 {path: 'list/bureau', component: ListFullWidthComponent},
 {path: 'list/studio', component: ListFullWidthComponent},
 {path: 'list/parcelle', component: ListFullWidthComponent},
 {path: 'list/villa', component: ListFullWidthComponent},*/
];


/***/ })

}]);
//# sourceMappingURL=listing-listing-module.js.map