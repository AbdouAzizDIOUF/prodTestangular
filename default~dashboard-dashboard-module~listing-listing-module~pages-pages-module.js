(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~listing-listing-module~pages-pages-module"],{

/***/ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
  \******************************************************************/
/*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer, CircleManager, ControlPosition, DataLayerManager, FitBoundsAccessor, GeocoderLocationType, GeocoderStatus, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapTypeId, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ScaleControlStyle, ZoomControlStyle, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function() { return AgmBicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function() { return AgmGeocoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function() { return AgmPolylineIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function() { return AgmTransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPosition", function() { return ControlPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocoderLocationType", function() { return GeocoderLocationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocoderStatus", function() { return GeocoderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerManager", function() { return LayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTypeId", function() { return MapTypeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleControlStyle", function() { return ScaleControlStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomControlStyle", function() { return ZoomControlStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FitBoundsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return BROWSER_GLOBALS_PROVIDERS; });
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/@agm/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













var _c0 = ["*"];

var MapsAPILoader = function MapsAPILoader() {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MapsAPILoader);
};

MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) {
  return new (t || MapsAPILoader)();
};

MapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: MapsAPILoader,
  factory: function factory(t) {
    return MapsAPILoader.ɵfac(t);
  }
});
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */

var GoogleMapsAPIWrapper = /*#__PURE__*/function () {
  function GoogleMapsAPIWrapper(_loader, _zone) {
    var _this = this;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, GoogleMapsAPIWrapper);

    this._loader = _loader;
    this._zone = _zone;
    this._map = new Promise(function (resolve) {
      _this._mapResolver = resolve;
    });
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(GoogleMapsAPIWrapper, [{
    key: "createMap",
    value: function createMap(el, mapOptions) {
      var _this2 = this;

      return this._zone.runOutsideAngular(function () {
        return _this2._loader.load().then(function () {
          var map = new google.maps.Map(el, mapOptions);

          _this2._mapResolver(map);

          return;
        });
      });
    }
  }, {
    key: "setMapOptions",
    value: function setMapOptions(options) {
      var _this3 = this;

      return this._zone.runOutsideAngular(function () {
        _this3._map.then(function (m) {
          m.setOptions(options);
        });
      });
    }
    /**
     * Creates a google map marker with the map context
     */

  }, {
    key: "createMarker",
    value: function createMarker() {
      var _this4 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var addToMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return this._zone.runOutsideAngular(function () {
        return _this4._map.then(function (map) {
          if (addToMap) {
            options.map = map;
          }

          return new google.maps.Marker(options);
        });
      });
    }
  }, {
    key: "createInfoWindow",
    value: function createInfoWindow(options) {
      var _this5 = this;

      return this._zone.runOutsideAngular(function () {
        return _this5._map.then(function () {
          return new google.maps.InfoWindow(options);
        });
      });
    }
    /**
     * Creates a google.map.Circle for the current map.
     */

  }, {
    key: "createCircle",
    value: function createCircle(options) {
      var _this6 = this;

      return this._zone.runOutsideAngular(function () {
        return _this6._map.then(function (map) {
          if (typeof options.strokePosition === 'string') {
            options.strokePosition = google.maps.StrokePosition[options.strokePosition];
          }

          options.map = map;
          return new google.maps.Circle(options);
        });
      });
    }
    /**
     * Creates a google.map.Rectangle for the current map.
     */

  }, {
    key: "createRectangle",
    value: function createRectangle(options) {
      var _this7 = this;

      return this._zone.runOutsideAngular(function () {
        return _this7._map.then(function (map) {
          options.map = map;
          return new google.maps.Rectangle(options);
        });
      });
    }
  }, {
    key: "createPolyline",
    value: function createPolyline(options) {
      var _this8 = this;

      return this._zone.runOutsideAngular(function () {
        return _this8.getNativeMap().then(function (map) {
          var line = new google.maps.Polyline(options);
          line.setMap(map);
          return line;
        });
      });
    }
  }, {
    key: "createPolygon",
    value: function createPolygon(options) {
      var _this9 = this;

      return this._zone.runOutsideAngular(function () {
        return _this9.getNativeMap().then(function (map) {
          var polygon = new google.maps.Polygon(options);
          polygon.setMap(map);
          return polygon;
        });
      });
    }
    /**
     * Creates a new google.map.Data layer for the current map
     */

  }, {
    key: "createDataLayer",
    value: function createDataLayer(options) {
      var _this10 = this;

      return this._zone.runOutsideAngular(function () {
        return _this10._map.then(function (m) {
          var data = new google.maps.Data(options);
          data.setMap(m);
          return data;
        });
      });
    }
    /**
     * Creates a TransitLayer instance for a map
     * @param {TransitLayerOptions} options - used for setting layer options
     * @returns {Promise<TransitLayer>} a new transit layer object
     */

  }, {
    key: "createTransitLayer",
    value: function createTransitLayer(options) {
      var _this11 = this;

      return this._zone.runOutsideAngular(function () {
        return _this11._map.then(function (map) {
          var newLayer = new google.maps.TransitLayer();
          newLayer.setMap(options.visible ? map : null);
          return newLayer;
        });
      });
    }
    /**
     * Creates a BicyclingLayer instance for a map
     * @param {BicyclingLayerOptions} options - used for setting layer options
     * @returns {Promise<BicyclingLayer>} a new bicycling layer object
     */

  }, {
    key: "createBicyclingLayer",
    value: function createBicyclingLayer(options) {
      var _this12 = this;

      return this._zone.runOutsideAngular(function () {
        return _this12._map.then(function (map) {
          var newLayer = new google.maps.BicyclingLayer();
          newLayer.setMap(options.visible ? map : null);
          return newLayer;
        });
      });
    }
    /**
     * Determines if given coordinates are insite a Polygon path.
     */

  }, {
    key: "containsLocation",
    value: function containsLocation(latLng, polygon) {
      return google.maps.geometry.poly.containsLocation(latLng, polygon);
    }
  }, {
    key: "subscribeToMapEvent",
    value: function subscribeToMapEvent(eventName) {
      var _this13 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
        _this13._map.then(function (m) {
          m.addListener(eventName, function (arg) {
            _this13._zone.run(function () {
              return observer.next(arg);
            });
          });
        });
      });
    }
  }, {
    key: "clearInstanceListeners",
    value: function clearInstanceListeners() {
      var _this14 = this;

      return this._zone.runOutsideAngular(function () {
        _this14._map.then(function (map) {
          google.maps.event.clearInstanceListeners(map);
        });
      });
    }
  }, {
    key: "setCenter",
    value: function setCenter(latLng) {
      var _this15 = this;

      return this._zone.runOutsideAngular(function () {
        return _this15._map.then(function (map) {
          return map.setCenter(latLng);
        });
      });
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      var _this16 = this;

      return this._zone.runOutsideAngular(function () {
        return _this16._map.then(function (map) {
          return map.getZoom();
        });
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var _this17 = this;

      return this._zone.runOutsideAngular(function () {
        return _this17._map.then(function (map) {
          return map.getBounds();
        });
      });
    }
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      var _this18 = this;

      return this._zone.runOutsideAngular(function () {
        return _this18._map.then(function (map) {
          return map.getMapTypeId();
        });
      });
    }
  }, {
    key: "setZoom",
    value: function setZoom(zoom) {
      var _this19 = this;

      return this._zone.runOutsideAngular(function () {
        return _this19._map.then(function (map) {
          return map.setZoom(zoom);
        });
      });
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      var _this20 = this;

      return this._zone.runOutsideAngular(function () {
        return _this20._map.then(function (map) {
          return map.getCenter();
        });
      });
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      var _this21 = this;

      return this._zone.runOutsideAngular(function () {
        return _this21._map.then(function (map) {
          return map.panTo(latLng);
        });
      });
    }
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      var _this22 = this;

      return this._zone.runOutsideAngular(function () {
        return _this22._map.then(function (map) {
          return map.panBy(x, y);
        });
      });
    }
  }, {
    key: "fitBounds",
    value: function fitBounds(latLng, padding) {
      var _this23 = this;

      return this._zone.runOutsideAngular(function () {
        return _this23._map.then(function (map) {
          return map.fitBounds(latLng, padding);
        });
      });
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLng, padding) {
      var _this24 = this;

      return this._zone.runOutsideAngular(function () {
        return _this24._map.then(function (map) {
          return map.panToBounds(latLng, padding);
        });
      });
    }
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */

  }, {
    key: "getNativeMap",
    value: function getNativeMap() {
      return this._map;
    }
    /**
     * Triggers the given event name on the map instance.
     */

  }, {
    key: "triggerMapEvent",
    value: function triggerMapEvent(eventName) {
      return this._map.then(function (m) {
        return google.maps.event.trigger(m, eventName);
      });
    }
  }]);

  return GoogleMapsAPIWrapper;
}();

GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) {
  return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

GoogleMapsAPIWrapper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: GoogleMapsAPIWrapper,
  factory: function factory(t) {
    return GoogleMapsAPIWrapper.ɵfac(t);
  }
});

GoogleMapsAPIWrapper.ctorParameters = function () {
  return [{
    type: MapsAPILoader
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

GoogleMapsAPIWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], GoogleMapsAPIWrapper);
/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */

var LayerManager = /*#__PURE__*/function () {
  function LayerManager(_wrapper) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, LayerManager);

    this._wrapper = _wrapper;
    this._layers = new Map();
  }
  /**
   * Adds a transit layer to a map instance.
   * @param {AgmTransitLayer} layer - a TransitLayer object
   * @param {TransitLayerOptions} options - TransitLayerOptions options
   * @returns void
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(LayerManager, [{
    key: "addTransitLayer",
    value: function addTransitLayer(layer, options) {
      var newLayer = this._wrapper.createTransitLayer(options);

      this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param {AgmBicyclingLayer} layer - a bicycling layer object
     * @param {BicyclingLayerOptions} options - BicyclingLayer options
     * @returns void
     */

  }, {
    key: "addBicyclingLayer",
    value: function addBicyclingLayer(layer, options) {
      var newLayer = this._wrapper.createBicyclingLayer(options);

      this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
     * @returns  Promise<void>
     */

  }, {
    key: "deleteLayer",
    value: function deleteLayer(layer) {
      var _this25 = this;

      return this._layers.get(layer).then(function (currentLayer) {
        currentLayer.setMap(null);

        _this25._layers.delete(layer);
      });
    }
    /**
     * Hide/Show a google map layer
     * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
     * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
     * @returns Promise<void>
     */

  }, {
    key: "toggleLayerVisibility",
    value: function toggleLayerVisibility(layer, options) {
      var _this26 = this;

      return this._layers.get(layer).then(function (currentLayer) {
        if (!options.visible) {
          currentLayer.setMap(null);
          return;
        } else {
          return _this26._wrapper.getNativeMap().then(function (map) {
            currentLayer.setMap(map);
          });
        }
      });
    }
  }]);

  return LayerManager;
}();

LayerManager.ɵfac = function LayerManager_Factory(t) {
  return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper));
};

LayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: LayerManager,
  factory: function factory(t) {
    return LayerManager.ɵfac(t);
  }
});

LayerManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }];
};

LayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper])], LayerManager);
var layerId = 0;
/*
 * This directive adds a bicycling layer to a google map instance
 * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
 * */

var AgmBicyclingLayer = /*#__PURE__*/function () {
  function AgmBicyclingLayer(_manager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmBicyclingLayer);

    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId++).toString();
    /**
     * Hide/show bicycling layer
     */

    this.visible = true;
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmBicyclingLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._addedToManager) {
        return;
      }

      this._manager.addBicyclingLayer(this, {
        visible: this.visible
      });

      this._addedToManager = true;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._addedToManager) {
        return;
      }

      if (changes['visible'] != null) {
        this._manager.toggleLayerVisibility(this, {
          visible: changes['visible'].currentValue
        });
      }
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return "AgmBicyclingLayer-".concat(this._id.toString());
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._manager.deleteLayer(this);
    }
  }]);

  return AgmBicyclingLayer;
}();

AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) {
  return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](LayerManager));
};

AgmBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmBicyclingLayer,
  selectors: [["agm-bicycling-layer"]],
  inputs: {
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});

AgmBicyclingLayer.ctorParameters = function () {
  return [{
    type: LayerManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmBicyclingLayer.prototype, "visible", void 0);

AgmBicyclingLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [LayerManager])], AgmBicyclingLayer);

var CircleManager = /*#__PURE__*/function () {
  function CircleManager(_apiWrapper, _zone) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CircleManager);

    this._apiWrapper = _apiWrapper;
    this._zone = _zone;
    this._circles = new Map();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CircleManager, [{
    key: "addCircle",
    value: function addCircle(circle) {
      this._circles.set(circle, this._apiWrapper.createCircle({
        center: {
          lat: circle.latitude,
          lng: circle.longitude
        },
        clickable: circle.clickable,
        draggable: circle.draggable,
        editable: circle.editable,
        fillColor: circle.fillColor,
        fillOpacity: circle.fillOpacity,
        radius: circle.radius,
        strokeColor: circle.strokeColor,
        strokeOpacity: circle.strokeOpacity,
        strokePosition: circle.strokePosition,
        strokeWeight: circle.strokeWeight,
        visible: circle.visible,
        zIndex: circle.zIndex
      }));
    }
    /**
     * Removes the given circle from the map.
     */

  }, {
    key: "removeCircle",
    value: function removeCircle(circle) {
      var _this27 = this;

      return this._circles.get(circle).then(function (c) {
        c.setMap(null);

        _this27._circles.delete(circle);
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(circle, options) {
      return this._circles.get(circle).then(function (c) {
        if (typeof options.strokePosition === 'string') {
          options.strokePosition = google.maps.StrokePosition[options.strokePosition];
        }

        c.setOptions(options);
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.getBounds();
      });
    }
  }, {
    key: "getCenter",
    value: function getCenter(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.getCenter();
      });
    }
  }, {
    key: "getRadius",
    value: function getRadius(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.getRadius();
      });
    }
  }, {
    key: "setCenter",
    value: function setCenter(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setCenter({
          lat: circle.latitude,
          lng: circle.longitude
        });
      });
    }
  }, {
    key: "setEditable",
    value: function setEditable(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setEditable(circle.editable);
      });
    }
  }, {
    key: "setDraggable",
    value: function setDraggable(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setDraggable(circle.draggable);
      });
    }
  }, {
    key: "setVisible",
    value: function setVisible(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setVisible(circle.visible);
      });
    }
  }, {
    key: "setRadius",
    value: function setRadius(circle) {
      return this._circles.get(circle).then(function (c) {
        return c.setRadius(circle.radius);
      });
    }
  }, {
    key: "getNativeCircle",
    value: function getNativeCircle(circle) {
      return this._circles.get(circle);
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, circle) {
      var _this28 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
        var listener = null;

        _this28._circles.get(circle).then(function (c) {
          listener = c.addListener(eventName, function (e) {
            return _this28._zone.run(function () {
              return observer.next(e);
            });
          });
        });

        return function () {
          if (listener !== null) {
            listener.remove();
          }
        };
      });
    }
  }]);

  return CircleManager;
}();

CircleManager.ɵfac = function CircleManager_Factory(t) {
  return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

CircleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: CircleManager,
  factory: function factory(t) {
    return CircleManager.ɵfac(t);
  }
});

CircleManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

CircleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], CircleManager);
var AgmCircle_1;

var AgmCircle = AgmCircle_1 = /*#__PURE__*/function () {
  function AgmCircle(_manager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmCircle);

    this._manager = _manager;
    /**
     * Indicates whether this Circle handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this circle over the map. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If set to true, the user can edit this circle by dragging the control points shown at
     * the center and around the circumference of the circle. Defaults to false.
     */

    this.editable = false;
    /**
     * The radius in meters on the Earth's surface.
     */

    this.radius = 0;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */

    this.strokePosition = 'CENTER';
    /**
     * The stroke width in pixels.
     */

    this.strokeWeight = 0;
    /**
     * Whether this circle is visible on the map. Defaults to true.
     */

    this.visible = true;
    /**
     * This event is fired when the circle's center is changed.
     */

    this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */

    this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */

    this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is repeatedly fired while the user drags the circle.
     */

    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user stops dragging the circle.
     */

    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user starts dragging the circle.
     */

    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mousedown event is fired on the circle.
     */

    this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mousemove event is fired on the circle.
     */

    this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired on circle mouseout.
     */

    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired on circle mouseover.
     */

    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mouseup event is fired on the circle.
     */

    this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the circle's radius is changed.
     */

    this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the circle is right-clicked on.
     */

    this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    this._circleAddedToManager = false;
    this._eventSubscriptions = [];
  }
  /** @internal */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmCircle, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._manager.addCircle(this);

      this._circleAddedToManager = true;

      this._registerEventListeners();
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._circleAddedToManager) {
        return;
      }

      if (changes['latitude'] || changes['longitude']) {
        this._manager.setCenter(this);
      }

      if (changes['editable']) {
        this._manager.setEditable(this);
      }

      if (changes['draggable']) {
        this._manager.setDraggable(this);
      }

      if (changes['visible']) {
        this._manager.setVisible(this);
      }

      if (changes['radius']) {
        this._manager.setRadius(this);
      }

      this._updateCircleOptionsChanges(changes);
    }
  }, {
    key: "_updateCircleOptionsChanges",
    value: function _updateCircleOptionsChanges(changes) {
      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmCircle_1._mapOptions.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        options[k] = changes[k].currentValue;
      });

      if (optionKeys.length > 0) {
        this._manager.setOptions(this, options);
      }
    }
  }, {
    key: "_registerEventListeners",
    value: function _registerEventListeners() {
      var _this29 = this;

      var events = new Map();
      events.set('center_changed', this.centerChange);
      events.set('click', this.circleClick);
      events.set('dblclick', this.circleDblClick);
      events.set('drag', this.drag);
      events.set('dragend', this.dragEnd);
      events.set('dragstart', this.dragStart);
      events.set('mousedown', this.mouseDown);
      events.set('mousemove', this.mouseMove);
      events.set('mouseout', this.mouseOut);
      events.set('mouseover', this.mouseOver);
      events.set('mouseup', this.mouseUp);
      events.set('radius_changed', this.radiusChange);
      events.set('rightclick', this.rightClick);
      events.forEach(function (eventEmitter, eventName) {
        _this29._eventSubscriptions.push(_this29._manager.createEventObservable(eventName, _this29).subscribe(function (value) {
          switch (eventName) {
            case 'radius_changed':
              _this29._manager.getRadius(_this29).then(function (radius) {
                return eventEmitter.emit(radius);
              });

              break;

            case 'center_changed':
              _this29._manager.getCenter(_this29).then(function (center) {
                return eventEmitter.emit({
                  lat: center.lat(),
                  lng: center.lng()
                });
              });

              break;

            default:
              eventEmitter.emit({
                coords: {
                  lat: value.latLng.lat(),
                  lng: value.latLng.lng()
                }
              });
          }
        }));
      });
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventSubscriptions.forEach(function (s) {
        s.unsubscribe();
      });

      this._eventSubscriptions = null;

      this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this._manager.getBounds(this);
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this._manager.getCenter(this);
    }
  }]);

  return AgmCircle;
}();

AgmCircle.ɵfac = function AgmCircle_Factory(t) {
  return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CircleManager));
};

AgmCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmCircle,
  selectors: [["agm-circle"]],
  inputs: {
    clickable: "clickable",
    draggable: ["circleDraggable", "draggable"],
    editable: "editable",
    radius: "radius",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    latitude: "latitude",
    longitude: "longitude",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    zIndex: "zIndex"
  },
  outputs: {
    centerChange: "centerChange",
    circleClick: "circleClick",
    circleDblClick: "circleDblClick",
    drag: "drag",
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    mouseDown: "mouseDown",
    mouseMove: "mouseMove",
    mouseOut: "mouseOut",
    mouseOver: "mouseOver",
    mouseUp: "mouseUp",
    radiusChange: "radiusChange",
    rightClick: "rightClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});
AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

AgmCircle.ctorParameters = function () {
  return [{
    type: CircleManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmCircle.prototype, "latitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmCircle.prototype, "longitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmCircle.prototype, "clickable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])('circleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmCircle.prototype, "draggable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmCircle.prototype, "editable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmCircle.prototype, "fillColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmCircle.prototype, "fillOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmCircle.prototype, "radius", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokeColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmCircle.prototype, "strokeOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokePosition", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmCircle.prototype, "strokeWeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmCircle.prototype, "visible", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmCircle.prototype, "zIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "centerChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "circleClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "circleDblClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "drag", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "dragEnd", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "dragStart", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "mouseDown", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "mouseMove", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "mouseOut", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "mouseOver", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "mouseUp", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "radiusChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmCircle.prototype, "rightClick", void 0);

AgmCircle = AgmCircle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [CircleManager])], AgmCircle);
/**
 * Manages all Data Layers for a Google Map instance.
 */

var DataLayerManager = /*#__PURE__*/function () {
  function DataLayerManager(_wrapper, _zone) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, DataLayerManager);

    this._wrapper = _wrapper;
    this._zone = _zone;
    this._layers = new Map();
  }
  /**
   * Adds a new Data Layer to the map.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DataLayerManager, [{
    key: "addDataLayer",
    value: function addDataLayer(layer) {
      var _this30 = this;

      var newLayer = this._wrapper.createDataLayer({
        style: layer.style
      }).then(function (d) {
        if (layer.geoJson) {
          _this30.getDataFeatures(d, layer.geoJson).then(function (features) {
            return d.features = features;
          });
        }

        return d;
      });

      this._layers.set(layer, newLayer);
    }
  }, {
    key: "deleteDataLayer",
    value: function deleteDataLayer(layer) {
      var _this31 = this;

      this._layers.get(layer).then(function (l) {
        l.setMap(null);

        _this31._layers.delete(layer);
      });
    }
  }, {
    key: "updateGeoJson",
    value: function updateGeoJson(layer, geoJson) {
      var _this32 = this;

      this._layers.get(layer).then(function (l) {
        l.forEach(function (feature) {
          l.remove(feature);
          var index = l.features.indexOf(feature, 0);

          if (index > -1) {
            l.features.splice(index, 1);
          }
        });

        _this32.getDataFeatures(l, geoJson).then(function (features) {
          return l.features = features;
        });
      });
    }
  }, {
    key: "setDataOptions",
    value: function setDataOptions(layer, options) {
      this._layers.get(layer).then(function (l) {
        l.setControlPosition(options.controlPosition);
        l.setControls(options.controls);
        l.setDrawingMode(options.drawingMode);
        l.setStyle(options.style);
      });
    }
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */

  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, layer) {
      var _this33 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
        _this33._layers.get(layer).then(function (d) {
          d.addListener(eventName, function (e) {
            return _this33._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */

  }, {
    key: "getDataFeatures",
    value: function getDataFeatures(d, geoJson) {
      return new Promise(function (resolve, reject) {
        if (typeof geoJson === 'object') {
          try {
            var features = d.addGeoJson(geoJson);
            resolve(features);
          } catch (e) {
            reject(e);
          }
        } else if (typeof geoJson === 'string') {
          d.loadGeoJson(geoJson, null, resolve);
        } else {
          reject("Impossible to extract features from geoJson: wrong argument type");
        }
      });
    }
  }]);

  return DataLayerManager;
}();

DataLayerManager.ɵfac = function DataLayerManager_Factory(t) {
  return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

DataLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: DataLayerManager,
  factory: function factory(t) {
    return DataLayerManager.ɵfac(t);
  }
});

DataLayerManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

DataLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], DataLayerManager);
var AgmDataLayer_1;
var layerId$1 = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */

var AgmDataLayer = AgmDataLayer_1 = /*#__PURE__*/function () {
  function AgmDataLayer(_manager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmDataLayer);

    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$1++).toString();
    this._subscriptions = [];
    /**
     * This event is fired when a feature in the layer is clicked.
     */

    this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * The geoJson to be displayed
     */

    this.geoJson = null;
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmDataLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._addedToManager) {
        return;
      }

      this._manager.addDataLayer(this);

      this._addedToManager = true;

      this._addEventListeners();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this34 = this;

      var listeners = [{
        name: 'click',
        handler: function handler(ev) {
          return _this34.layerClick.emit(ev);
        }
      }];
      listeners.forEach(function (obj) {
        var os = _this34._manager.createEventObservable(obj.name, _this34).subscribe(obj.handler);

        _this34._subscriptions.push(os);
      });
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return "AgmDataLayer-".concat(this._id.toString());
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._manager.deleteDataLayer(this); // unsubscribe all registered observable subscriptions


      this._subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this35 = this;

      if (!this._addedToManager) {
        return;
      }

      var geoJsonChange = changes['geoJson'];

      if (geoJsonChange) {
        this._manager.updateGeoJson(this, geoJsonChange.currentValue);
      }

      var dataOptions = {};

      AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) {
        return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this35[k];
      });

      this._manager.setDataOptions(this, dataOptions);
    }
  }]);

  return AgmDataLayer;
}();

AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) {
  return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](DataLayerManager));
};

AgmDataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmDataLayer,
  selectors: [["agm-data-layer"]],
  inputs: {
    geoJson: "geoJson",
    style: "style"
  },
  outputs: {
    layerClick: "layerClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});
AgmDataLayer._dataOptionsAttributes = ['style'];

AgmDataLayer.ctorParameters = function () {
  return [{
    type: DataLayerManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmDataLayer.prototype, "layerClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmDataLayer.prototype, "geoJson", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Function)], AgmDataLayer.prototype, "style", void 0);

AgmDataLayer = AgmDataLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [DataLayerManager])], AgmDataLayer);
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

var FitBoundsAccessor = function FitBoundsAccessor() {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FitBoundsAccessor);
};
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */


var FitBoundsService = /*#__PURE__*/function () {
  function FitBoundsService(loader) {
    var _this36 = this;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FitBoundsService);

    this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](200);
    this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](new Map());
    this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(function () {
      return _this36._includeInBounds$;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (time) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, time);
    }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (includeInBounds) {
      return _this36._generateBounds(includeInBounds);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["shareReplay"])(1));
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(FitBoundsService, [{
    key: "_generateBounds",
    value: function _generateBounds(includeInBounds) {
      var bounds = new google.maps.LatLngBounds();
      includeInBounds.forEach(function (b) {
        return bounds.extend(b);
      });
      return bounds;
    }
  }, {
    key: "addToBounds",
    value: function addToBounds(latLng) {
      var id = this._createIdentifier(latLng);

      if (this._includeInBounds$.value.has(id)) {
        return;
      }

      var map = this._includeInBounds$.value;
      map.set(id, latLng);

      this._includeInBounds$.next(map);
    }
  }, {
    key: "removeFromBounds",
    value: function removeFromBounds(latLng) {
      var map = this._includeInBounds$.value;
      map.delete(this._createIdentifier(latLng));

      this._includeInBounds$.next(map);
    }
  }, {
    key: "changeFitBoundsChangeSampleTime",
    value: function changeFitBoundsChangeSampleTime(timeMs) {
      this._boundsChangeSampleTime$.next(timeMs);
    }
  }, {
    key: "getBounds$",
    value: function getBounds$() {
      return this.bounds$;
    }
  }, {
    key: "_createIdentifier",
    value: function _createIdentifier(latLng) {
      return "".concat(latLng.lat, "+").concat(latLng.lng);
    }
  }]);

  return FitBoundsService;
}();

FitBoundsService.ɵfac = function FitBoundsService_Factory(t) {
  return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](MapsAPILoader));
};

FitBoundsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: FitBoundsService,
  factory: function factory(t) {
    return FitBoundsService.ɵfac(t);
  }
});

FitBoundsService.ctorParameters = function () {
  return [{
    type: MapsAPILoader
  }];
};

FitBoundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [MapsAPILoader])], FitBoundsService);
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */

var AgmFitBounds = /*#__PURE__*/function () {
  function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmFitBounds);

    this._fitBoundsAccessor = _fitBoundsAccessor;
    this._fitBoundsService = _fitBoundsService;
    /**
     * If the value is true, the element gets added to the bounds of the map.
     * Default: true.
     */

    this.agmFitBounds = true;
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    this._latestFitBoundsDetails = null;
  }
  /**
   * @internal
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmFitBounds, [{
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this._updateBounds();
    }
    /**
     * @internal
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this37 = this;

      this._fitBoundsAccessor.getFitBoundsDetails$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(function (x, y) {
        return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed$)).subscribe(function (details) {
        return _this37._updateBounds(details);
      });
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */

  }, {
    key: "_updateBounds",
    value: function _updateBounds(newFitBoundsDetails) {
      // either visibility will change, or location, so remove the old one anyway
      if (this._latestFitBoundsDetails) {
        this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng); // don't set latestFitBoundsDetails to null, because we can toggle visibility from
        // true -> false -> true, in which case we still need old value cached here

      }

      if (newFitBoundsDetails) {
        this._latestFitBoundsDetails = newFitBoundsDetails;
      }

      if (!this._latestFitBoundsDetails) {
        return;
      }

      if (this.agmFitBounds === true) {
        this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
      }
    }
    /**
     * @internal
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed$.next();

      this._destroyed$.complete();

      if (this._latestFitBoundsDetails !== null) {
        this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
      }
    }
  }]);

  return AgmFitBounds;
}();

AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) {
  return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](FitBoundsService));
};

AgmFitBounds.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmFitBounds,
  selectors: [["", "agmFitBounds", ""]],
  inputs: {
    agmFitBounds: "agmFitBounds"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});

AgmFitBounds.ctorParameters = function () {
  return [{
    type: FitBoundsAccessor,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]
    }]
  }, {
    type: FitBoundsService
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmFitBounds.prototype, "agmFitBounds", void 0);

AgmFitBounds = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [FitBoundsAccessor, FitBoundsService])], AgmFitBounds);

var MarkerManager = /*#__PURE__*/function () {
  function MarkerManager(_mapsWrapper, _zone) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MarkerManager);

    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._markers = new Map();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MarkerManager, [{
    key: "convertAnimation",
    value: function convertAnimation(uiAnim) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
        return _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(uiAnim === null)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", null);

              case 4:
                return _context.abrupt("return", this._mapsWrapper.getNativeMap().then(function () {
                  return google.maps.Animation[uiAnim];
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "deleteMarker",
    value: function deleteMarker(marker) {
      var _this38 = this;

      var m = this._markers.get(marker);

      if (m == null) {
        // marker already deleted
        return Promise.resolve();
      }

      return m.then(function (m) {
        return _this38._zone.run(function () {
          m.setMap(null);

          _this38._markers.delete(marker);
        });
      });
    }
  }, {
    key: "updateMarkerPosition",
    value: function updateMarkerPosition(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setPosition({
          lat: marker.latitude,
          lng: marker.longitude
        });
      });
    }
  }, {
    key: "updateTitle",
    value: function updateTitle(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setTitle(marker.title);
      });
    }
  }, {
    key: "updateLabel",
    value: function updateLabel(marker) {
      return this._markers.get(marker).then(function (m) {
        m.setLabel(marker.label);
      });
    }
  }, {
    key: "updateDraggable",
    value: function updateDraggable(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setDraggable(marker.draggable);
      });
    }
  }, {
    key: "updateIcon",
    value: function updateIcon(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setIcon(marker.iconUrl);
      });
    }
  }, {
    key: "updateOpacity",
    value: function updateOpacity(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setOpacity(marker.opacity);
      });
    }
  }, {
    key: "updateVisible",
    value: function updateVisible(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setVisible(marker.visible);
      });
    }
  }, {
    key: "updateZIndex",
    value: function updateZIndex(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setZIndex(marker.zIndex);
      });
    }
  }, {
    key: "updateClickable",
    value: function updateClickable(marker) {
      return this._markers.get(marker).then(function (m) {
        return m.setClickable(marker.clickable);
      });
    }
  }, {
    key: "updateAnimation",
    value: function updateAnimation(marker) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
        var m;
        return _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._markers.get(marker);

              case 2:
                m = _context2.sent;
                _context2.t0 = m;
                _context2.next = 6;
                return this.convertAnimation(marker.animation);

              case 6:
                _context2.t1 = _context2.sent;

                _context2.t0.setAnimation.call(_context2.t0, _context2.t1);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "addMarker",
    value: function addMarker(marker) {
      var _this39 = this;

      var markerPromise = new Promise(function (resolve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
          return _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = this._mapsWrapper;
                  _context3.t1 = {
                    lat: marker.latitude,
                    lng: marker.longitude
                  };
                  _context3.t2 = marker.label;
                  _context3.t3 = marker.draggable;
                  _context3.t4 = marker.iconUrl;
                  _context3.t5 = marker.opacity;
                  _context3.t6 = marker.visible;
                  _context3.t7 = marker.zIndex;
                  _context3.t8 = marker.title;
                  _context3.t9 = marker.clickable;
                  _context3.next = 12;
                  return this.convertAnimation(marker.animation);

                case 12:
                  _context3.t10 = _context3.sent;
                  _context3.t11 = {
                    position: _context3.t1,
                    label: _context3.t2,
                    draggable: _context3.t3,
                    icon: _context3.t4,
                    opacity: _context3.t5,
                    visible: _context3.t6,
                    zIndex: _context3.t7,
                    title: _context3.t8,
                    clickable: _context3.t9,
                    animation: _context3.t10
                  };
                  return _context3.abrupt("return", _context3.t0.createMarker.call(_context3.t0, _context3.t11).then(resolve));

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
      });

      this._markers.set(marker, markerPromise);
    }
  }, {
    key: "getNativeMarker",
    value: function getNativeMarker(marker) {
      return this._markers.get(marker);
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, marker) {
      var _this40 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
        _this40._markers.get(marker).then(function (m) {
          m.addListener(eventName, function (e) {
            return _this40._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }]);

  return MarkerManager;
}();

MarkerManager.ɵfac = function MarkerManager_Factory(t) {
  return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

MarkerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: MarkerManager,
  factory: function factory(t) {
    return MarkerManager.ɵfac(t);
  }
});

MarkerManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

MarkerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], MarkerManager);

var InfoWindowManager = /*#__PURE__*/function () {
  function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, InfoWindowManager);

    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._markerManager = _markerManager;
    this._infoWindows = new Map();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(InfoWindowManager, [{
    key: "deleteInfoWindow",
    value: function deleteInfoWindow(infoWindow) {
      var _this41 = this;

      var iWindow = this._infoWindows.get(infoWindow);

      if (iWindow == null) {
        // info window already deleted
        return Promise.resolve();
      }

      return iWindow.then(function (i) {
        return _this41._zone.run(function () {
          i.close();

          _this41._infoWindows.delete(infoWindow);
        });
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(infoWindow) {
      return this._infoWindows.get(infoWindow).then(function (i) {
        return i.setPosition({
          lat: infoWindow.latitude,
          lng: infoWindow.longitude
        });
      });
    }
  }, {
    key: "setZIndex",
    value: function setZIndex(infoWindow) {
      return this._infoWindows.get(infoWindow).then(function (i) {
        return i.setZIndex(infoWindow.zIndex);
      });
    }
  }, {
    key: "open",
    value: function open(infoWindow) {
      var _this42 = this;

      return this._infoWindows.get(infoWindow).then(function (w) {
        if (infoWindow.hostMarker != null) {
          return _this42._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
            return _this42._mapsWrapper.getNativeMap().then(function (map) {
              return w.open(map, marker);
            });
          });
        }

        return _this42._mapsWrapper.getNativeMap().then(function (map) {
          return w.open(map);
        });
      });
    }
  }, {
    key: "close",
    value: function close(infoWindow) {
      return this._infoWindows.get(infoWindow).then(function (w) {
        return w.close();
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(infoWindow, options) {
      return this._infoWindows.get(infoWindow).then(function (i) {
        return i.setOptions(options);
      });
    }
  }, {
    key: "addInfoWindow",
    value: function addInfoWindow(infoWindow) {
      var options = {
        content: infoWindow.content,
        maxWidth: infoWindow.maxWidth,
        zIndex: infoWindow.zIndex,
        disableAutoPan: infoWindow.disableAutoPan
      };

      if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
        options.position = {
          lat: infoWindow.latitude,
          lng: infoWindow.longitude
        };
      }

      var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);

      this._infoWindows.set(infoWindow, infoWindowPromise);
    }
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */

  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, infoWindow) {
      var _this43 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
        _this43._infoWindows.get(infoWindow).then(function (i) {
          i.addListener(eventName, function (e) {
            return _this43._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }]);

  return InfoWindowManager;
}();

InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) {
  return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](MarkerManager));
};

InfoWindowManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: InfoWindowManager,
  factory: function factory(t) {
    return InfoWindowManager.ɵfac(t);
  }
});

InfoWindowManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }, {
    type: MarkerManager
  }];
};

InfoWindowManager = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"], MarkerManager])], InfoWindowManager);
var AgmInfoWindow_1;
var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */

var AgmInfoWindow = AgmInfoWindow_1 = /*#__PURE__*/function () {
  function AgmInfoWindow(_infoWindowManager, _el) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmInfoWindow);

    this._infoWindowManager = _infoWindowManager;
    this._el = _el;
    /**
     * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
     */

    this.isOpen = false;
    /**
     * Emits an event when the info window is closed.
     */

    this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    this._infoWindowAddedToManager = false;
    this._id = (infoWindowId++).toString();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmInfoWindow, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.content = this._el.nativeElement.querySelector('.agm-info-window-content');

      this._infoWindowManager.addInfoWindow(this);

      this._infoWindowAddedToManager = true;

      this._updateOpenState();

      this._registerEventListeners();
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._infoWindowAddedToManager) {
        return;
      }

      if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
        this._infoWindowManager.setPosition(this);
      }

      if (changes['zIndex']) {
        this._infoWindowManager.setZIndex(this);
      }

      if (changes['isOpen']) {
        this._updateOpenState();
      }

      this._setInfoWindowOptions(changes);
    }
  }, {
    key: "_registerEventListeners",
    value: function _registerEventListeners() {
      var _this44 = this;

      this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
        _this44.isOpen = false;

        _this44.infoWindowClose.emit();
      });
    }
  }, {
    key: "_updateOpenState",
    value: function _updateOpenState() {
      this.isOpen ? this.open() : this.close();
    }
  }, {
    key: "_setInfoWindowOptions",
    value: function _setInfoWindowOptions(changes) {
      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        options[k] = changes[k].currentValue;
      });

      this._infoWindowManager.setOptions(this, options);
    }
    /**
     * Opens the info window.
     */

  }, {
    key: "open",
    value: function open() {
      return this._infoWindowManager.open(this);
    }
    /**
     * Closes the info window.
     */

  }, {
    key: "close",
    value: function close() {
      var _this45 = this;

      return this._infoWindowManager.close(this).then(function () {
        _this45.infoWindowClose.emit();
      });
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return 'AgmInfoWindow-' + this._id.toString();
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._infoWindowManager.deleteInfoWindow(this);
    }
  }]);

  return AgmInfoWindow;
}();

AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) {
  return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]));
};

AgmInfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AgmInfoWindow,
  selectors: [["agm-info-window"]],
  inputs: {
    isOpen: "isOpen",
    latitude: "latitude",
    longitude: "longitude",
    disableAutoPan: "disableAutoPan",
    zIndex: "zIndex",
    maxWidth: "maxWidth"
  },
  outputs: {
    infoWindowClose: "infoWindowClose"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "agm-info-window-content"]],
  template: function AgmInfoWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];

AgmInfoWindow.ctorParameters = function () {
  return [{
    type: InfoWindowManager
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "latitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "longitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)], AgmInfoWindow.prototype, "disableAutoPan", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "zIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "maxWidth", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmInfoWindow.prototype, "isOpen", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmInfoWindow.prototype, "infoWindowClose", void 0);

AgmInfoWindow = AgmInfoWindow_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]])], AgmInfoWindow);
/**
 * Manages all KML Layers for a Google Map instance.
 */

var KmlLayerManager = /*#__PURE__*/function () {
  function KmlLayerManager(_wrapper, _zone) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, KmlLayerManager);

    this._wrapper = _wrapper;
    this._zone = _zone;
    this._layers = new Map();
  }
  /**
   * Adds a new KML Layer to the map.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(KmlLayerManager, [{
    key: "addKmlLayer",
    value: function addKmlLayer(layer) {
      var newLayer = this._wrapper.getNativeMap().then(function (m) {
        return new google.maps.KmlLayer({
          clickable: layer.clickable,
          map: m,
          preserveViewport: layer.preserveViewport,
          screenOverlays: layer.screenOverlays,
          suppressInfoWindows: layer.suppressInfoWindows,
          url: layer.url,
          zIndex: layer.zIndex
        });
      });

      this._layers.set(layer, newLayer);
    }
  }, {
    key: "setOptions",
    value: function setOptions(layer, options) {
      this._layers.get(layer).then(function (l) {
        return l.setOptions(options);
      });
    }
  }, {
    key: "deleteKmlLayer",
    value: function deleteKmlLayer(layer) {
      var _this46 = this;

      this._layers.get(layer).then(function (l) {
        l.setMap(null);

        _this46._layers.delete(layer);
      });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */

  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, layer) {
      var _this47 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
        _this47._layers.get(layer).then(function (m) {
          m.addListener(eventName, function (e) {
            return _this47._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }]);

  return KmlLayerManager;
}();

KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) {
  return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

KmlLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: KmlLayerManager,
  factory: function factory(t) {
    return KmlLayerManager.ɵfac(t);
  }
});

KmlLayerManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

KmlLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], KmlLayerManager);
var AgmKmlLayer_1;
var layerId$2 = 0;

var AgmKmlLayer = AgmKmlLayer_1 = /*#__PURE__*/function () {
  function AgmKmlLayer(_manager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmKmlLayer);

    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$2++).toString();
    this._subscriptions = [];
    /**
     * If true, the layer receives mouse events. Default value is true.
     */

    this.clickable = true;
    /**
     * By default, the input map is centered and zoomed to the bounding box of the contents of the
     * layer.
     * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
     * were never set.
     */

    this.preserveViewport = false;
    /**
     * Whether to render the screen overlays. Default true.
     */

    this.screenOverlays = true;
    /**
     * Suppress the rendering of info windows when layer features are clicked.
     */

    this.suppressInfoWindows = false;
    /**
     * The URL of the KML document to display.
     */

    this.url = null;
    /**
     * The z-index of the layer.
     */

    this.zIndex = null;
    /**
     * This event is fired when a feature in the layer is clicked.
     */

    this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the KML layers default viewport has changed.
     */

    this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the KML layer has finished loading.
     * At this point it is safe to read the status property to determine if the layer loaded
     * successfully.
     */

    this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmKmlLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._addedToManager) {
        return;
      }

      this._manager.addKmlLayer(this);

      this._addedToManager = true;

      this._addEventListeners();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._addedToManager) {
        return;
      }

      this._updatePolygonOptions(changes);
    }
  }, {
    key: "_updatePolygonOptions",
    value: function _updatePolygonOptions(changes) {
      var options = Object.keys(changes).filter(function (k) {
        return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1;
      }).reduce(function (obj, k) {
        obj[k] = changes[k].currentValue;
        return obj;
      }, {});

      if (Object.keys(options).length > 0) {
        this._manager.setOptions(this, options);
      }
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this48 = this;

      var listeners = [{
        name: 'click',
        handler: function handler(ev) {
          return _this48.layerClick.emit(ev);
        }
      }, {
        name: 'defaultviewport_changed',
        handler: function handler() {
          return _this48.defaultViewportChange.emit();
        }
      }, {
        name: 'status_changed',
        handler: function handler() {
          return _this48.statusChange.emit();
        }
      }];
      listeners.forEach(function (obj) {
        var os = _this48._manager.createEventObservable(obj.name, _this48).subscribe(obj.handler);

        _this48._subscriptions.push(os);
      });
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return "AgmKmlLayer-".concat(this._id.toString());
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._manager.deleteKmlLayer(this); // unsubscribe all registered observable subscriptions


      this._subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
  }]);

  return AgmKmlLayer;
}();

AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) {
  return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](KmlLayerManager));
};

AgmKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmKmlLayer,
  selectors: [["agm-kml-layer"]],
  inputs: {
    clickable: "clickable",
    preserveViewport: "preserveViewport",
    screenOverlays: "screenOverlays",
    suppressInfoWindows: "suppressInfoWindows",
    url: "url",
    zIndex: "zIndex"
  },
  outputs: {
    layerClick: "layerClick",
    defaultViewportChange: "defaultViewportChange",
    statusChange: "statusChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});
AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];

AgmKmlLayer.ctorParameters = function () {
  return [{
    type: KmlLayerManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "clickable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "preserveViewport", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "screenOverlays", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmKmlLayer.prototype, "url", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmKmlLayer.prototype, "zIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmKmlLayer.prototype, "layerClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmKmlLayer.prototype, "defaultViewportChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmKmlLayer.prototype, "statusChange", void 0);

AgmKmlLayer = AgmKmlLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [KmlLayerManager])], AgmKmlLayer);

function createMVCEventObservable(array) {
  var eventNames = ['insert_at', 'remove_at', 'set_at'];
  return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEventPattern"])(function (handler) {
    return eventNames.map(function (evName) {
      return array.addListener(evName, function (index, previous) {
        return handler.apply(array, [{
          'newArr': array.getArray(),
          evName: evName,
          index: index,
          previous: previous
        }]);
      });
    });
  }, function (_handler, evListeners) {
    return evListeners.forEach(function (evListener) {
      return evListener.remove();
    });
  });
}

var MvcArrayMock = /*#__PURE__*/function () {
  function MvcArrayMock() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MvcArrayMock);

    this.vals = [];
    this.listeners = {
      'remove_at': [],
      'insert_at': [],
      'set_at': []
    };
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MvcArrayMock, [{
    key: "clear",
    value: function clear() {
      for (var i = this.vals.length - 1; i >= 0; i--) {
        this.removeAt(i);
      }
    }
  }, {
    key: "getArray",
    value: function getArray() {
      return Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this.vals);
    }
  }, {
    key: "getAt",
    value: function getAt(i) {
      return this.vals[i];
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.vals.length;
    }
  }, {
    key: "insertAt",
    value: function insertAt(i, elem) {
      this.vals.splice(i, 0, elem);
      this.listeners.insert_at.map(function (listener) {
        return listener(i);
      });
    }
  }, {
    key: "pop",
    value: function pop() {
      var _this49 = this;

      var deleted = this.vals.pop();
      this.listeners.remove_at.map(function (listener) {
        return listener(_this49.vals.length, deleted);
      });
      return deleted;
    }
  }, {
    key: "push",
    value: function push(elem) {
      var _this50 = this;

      this.vals.push(elem);
      this.listeners.insert_at.map(function (listener) {
        return listener(_this50.vals.length - 1);
      });
      return this.vals.length;
    }
  }, {
    key: "removeAt",
    value: function removeAt(i) {
      var deleted = this.vals.splice(i, 1)[0];
      this.listeners.remove_at.map(function (listener) {
        return listener(i, deleted);
      });
      return deleted;
    }
  }, {
    key: "setAt",
    value: function setAt(i, elem) {
      var deleted = this.vals[i];
      this.vals[i] = elem;
      this.listeners.set_at.map(function (listener) {
        return listener(i, deleted);
      });
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.vals.forEach(callback);
    }
  }, {
    key: "addListener",
    value: function addListener(eventName, handler) {
      var listenerArr = this.listeners[eventName];
      listenerArr.push(handler);
      return {
        remove: function remove() {
          listenerArr.splice(listenerArr.indexOf(handler), 1);
        }
      };
    }
  }]);

  return MvcArrayMock;
}();

var PolygonManager = /*#__PURE__*/function () {
  function PolygonManager(_mapsWrapper, _zone) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, PolygonManager);

    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._polygons = new Map();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PolygonManager, [{
    key: "addPolygon",
    value: function addPolygon(path) {
      var polygonPromise = this._mapsWrapper.createPolygon({
        clickable: path.clickable,
        draggable: path.draggable,
        editable: path.editable,
        fillColor: path.fillColor,
        fillOpacity: path.fillOpacity,
        geodesic: path.geodesic,
        paths: path.paths,
        strokeColor: path.strokeColor,
        strokeOpacity: path.strokeOpacity,
        strokeWeight: path.strokeWeight,
        visible: path.visible,
        zIndex: path.zIndex
      });

      this._polygons.set(path, polygonPromise);
    }
  }, {
    key: "updatePolygon",
    value: function updatePolygon(polygon) {
      var _this51 = this;

      var m = this._polygons.get(polygon);

      if (m == null) {
        return Promise.resolve();
      }

      return m.then(function (l) {
        return _this51._zone.run(function () {
          l.setPaths(polygon.paths);
        });
      });
    }
  }, {
    key: "setPolygonOptions",
    value: function setPolygonOptions(path, options) {
      return this._polygons.get(path).then(function (l) {
        l.setOptions(options);
      });
    }
  }, {
    key: "deletePolygon",
    value: function deletePolygon(paths) {
      var _this52 = this;

      var m = this._polygons.get(paths);

      if (m == null) {
        return Promise.resolve();
      }

      return m.then(function (l) {
        return _this52._zone.run(function () {
          l.setMap(null);

          _this52._polygons.delete(paths);
        });
      });
    }
  }, {
    key: "getPath",
    value: function getPath(polygon) {
      return this._polygons.get(polygon).then(function (polygon) {
        return polygon.getPath().getArray();
      });
    }
  }, {
    key: "getPaths",
    value: function getPaths(polygon) {
      return this._polygons.get(polygon).then(function (polygon) {
        return polygon.getPaths().getArray().map(function (p) {
          return p.getArray();
        });
      });
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, path) {
      var _this53 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
        _this53._polygons.get(path).then(function (l) {
          l.addListener(eventName, function (e) {
            return _this53._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }, {
    key: "createPathEventObservable",
    value: function createPathEventObservable(agmPolygon) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4() {
        var polygon, paths, pathsChanges$;
        return _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._polygons.get(agmPolygon);

              case 2:
                polygon = _context4.sent;
                paths = polygon.getPaths();
                pathsChanges$ = createMVCEventObservable(paths);
                return _context4.abrupt("return", pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])({
                  newArr: paths.getArray()
                }), // in order to subscribe to them all
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (parentMVEvent) {
                  return rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"].apply(void 0, Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])( // rest parameter
                  parentMVEvent.newArr.map(function (chMVC, index) {
                    return createMVCEventObservable(chMVC).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (chMVCEvent) {
                      return {
                        parentMVEvent: parentMVEvent,
                        chMVCEvent: chMVCEvent,
                        pathIndex: index
                      };
                    }));
                  }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])({
                    parentMVEvent: parentMVEvent,
                    chMVCEvent: null,
                    pathIndex: null
                  }));
                }), // start the merged ob with an event signinifing change to parent
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["skip"])(1), // skip the manually added event
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (_ref) {
                  var parentMVEvent = _ref.parentMVEvent,
                      chMVCEvent = _ref.chMVCEvent,
                      pathIndex = _ref.pathIndex;
                  var retVal;

                  if (!chMVCEvent) {
                    retVal = {
                      newArr: parentMVEvent.newArr.map(function (subArr) {
                        return subArr.getArray().map(function (latLng) {
                          return latLng.toJSON();
                        });
                      }),
                      eventName: parentMVEvent.evName,
                      index: parentMVEvent.index
                    };

                    if (parentMVEvent.previous) {
                      retVal.previous = parentMVEvent.previous.getArray();
                    }
                  } else {
                    retVal = {
                      newArr: parentMVEvent.newArr.map(function (subArr) {
                        return subArr.getArray().map(function (latLng) {
                          return latLng.toJSON();
                        });
                      }),
                      pathIndex: pathIndex,
                      eventName: chMVCEvent.evName,
                      index: chMVCEvent.index
                    };

                    if (chMVCEvent.previous) {
                      retVal.previous = chMVCEvent.previous;
                    }
                  }

                  return retVal;
                })));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }]);

  return PolygonManager;
}();

PolygonManager.ɵfac = function PolygonManager_Factory(t) {
  return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

PolygonManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: PolygonManager,
  factory: function factory(t) {
    return PolygonManager.ɵfac(t);
  }
});

PolygonManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

PolygonManager = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], PolygonManager);
var PolylineManager_1;

var PolylineManager = PolylineManager_1 = /*#__PURE__*/function () {
  function PolylineManager(_mapsWrapper, _zone) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, PolylineManager);

    this._mapsWrapper = _mapsWrapper;
    this._zone = _zone;
    this._polylines = new Map();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PolylineManager, [{
    key: "addPolyline",
    value: function addPolyline(line) {
      var _this54 = this;

      var polylinePromise = this._mapsWrapper.getNativeMap().then(function () {
        return [PolylineManager_1._convertPoints(line), PolylineManager_1._convertIcons(line)];
      }).then(function (_ref2) {
        var _ref3 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 2),
            path = _ref3[0],
            icons = _ref3[1];

        return _this54._mapsWrapper.createPolyline({
          clickable: line.clickable,
          draggable: line.draggable,
          editable: line.editable,
          geodesic: line.geodesic,
          strokeColor: line.strokeColor,
          strokeOpacity: line.strokeOpacity,
          strokeWeight: line.strokeWeight,
          visible: line.visible,
          zIndex: line.zIndex,
          path: path,
          icons: icons
        });
      });

      this._polylines.set(line, polylinePromise);
    }
  }, {
    key: "updatePolylinePoints",
    value: function updatePolylinePoints(line) {
      var _this55 = this;

      var path = PolylineManager_1._convertPoints(line);

      var m = this._polylines.get(line);

      if (m == null) {
        return Promise.resolve();
      }

      return m.then(function (l) {
        return _this55._zone.run(function () {
          l.setPath(path);
        });
      });
    }
  }, {
    key: "updateIconSequences",
    value: function updateIconSequences(line) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5() {
        var _this56 = this;

        var icons, m;
        return _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._mapsWrapper.getNativeMap();

              case 2:
                icons = PolylineManager_1._convertIcons(line);
                m = this._polylines.get(line);

                if (!(m == null)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                return _context5.abrupt("return", m.then(function (l) {
                  return _this56._zone.run(function () {
                    return l.setOptions({
                      icons: icons
                    });
                  });
                }));

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "setPolylineOptions",
    value: function setPolylineOptions(line, options) {
      return this._polylines.get(line).then(function (l) {
        l.setOptions(options);
      });
    }
  }, {
    key: "deletePolyline",
    value: function deletePolyline(line) {
      var _this57 = this;

      var m = this._polylines.get(line);

      if (m == null) {
        return Promise.resolve();
      }

      return m.then(function (l) {
        return _this57._zone.run(function () {
          l.setMap(null);

          _this57._polylines.delete(line);
        });
      });
    }
  }, {
    key: "getMVCPath",
    value: function getMVCPath(agmPolyline) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6() {
        var polyline;
        return _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._polylines.get(agmPolyline);

              case 2:
                polyline = _context6.sent;
                return _context6.abrupt("return", polyline.getPath());

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "getPath",
    value: function getPath(agmPolyline) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee7() {
        return _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getMVCPath(agmPolyline);

              case 2:
                return _context7.abrupt("return", _context7.sent.getArray());

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, line) {
      var _this58 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
        _this58._polylines.get(line).then(function (l) {
          l.addListener(eventName, function (e) {
            return _this58._zone.run(function () {
              return observer.next(e);
            });
          });
        });
      });
    }
  }, {
    key: "createPathEventObservable",
    value: function createPathEventObservable(line) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee8() {
        var mvcPath;
        return _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getMVCPath(line);

              case 2:
                mvcPath = _context8.sent;
                return _context8.abrupt("return", createMVCEventObservable(mvcPath));

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }], [{
    key: "_convertPoints",
    value: function _convertPoints(line) {
      var path = line._getPoints().map(function (point) {
        return {
          lat: point.latitude,
          lng: point.longitude
        };
      });

      return path;
    }
  }, {
    key: "_convertPath",
    value: function _convertPath(path) {
      var symbolPath = google.maps.SymbolPath[path];

      if (typeof symbolPath === 'number') {
        return symbolPath;
      } else {
        return path;
      }
    }
  }, {
    key: "_convertIcons",
    value: function _convertIcons(line) {
      var icons = line._getIcons().map(function (agmIcon) {
        return {
          fixedRotation: agmIcon.fixedRotation,
          offset: agmIcon.offset,
          repeat: agmIcon.repeat,
          icon: {
            anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
            fillColor: agmIcon.fillColor,
            fillOpacity: agmIcon.fillOpacity,
            path: PolylineManager_1._convertPath(agmIcon.path),
            rotation: agmIcon.rotation,
            scale: agmIcon.scale,
            strokeColor: agmIcon.strokeColor,
            strokeOpacity: agmIcon.strokeOpacity,
            strokeWeight: agmIcon.strokeWeight
          }
        };
      }); // prune undefineds;


      icons.forEach(function (icon) {
        Object.entries(icon).forEach(function (_ref4) {
          var _ref5 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, 2),
              key = _ref5[0],
              val = _ref5[1];

          if (typeof val === 'undefined') {
            delete icon[key];
          }
        });

        if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
          delete icon.icon.anchor;
        }
      });
      return icons;
    }
  }]);

  return PolylineManager;
}();

PolylineManager.ɵfac = function PolylineManager_Factory(t) {
  return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

PolylineManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: PolylineManager,
  factory: function factory(t) {
    return PolylineManager.ɵfac(t);
  }
});

PolylineManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

PolylineManager = PolylineManager_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], PolylineManager);

var RectangleManager = /*#__PURE__*/function () {
  function RectangleManager(_apiWrapper, _zone) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, RectangleManager);

    this._apiWrapper = _apiWrapper;
    this._zone = _zone;
    this._rectangles = new Map();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(RectangleManager, [{
    key: "addRectangle",
    value: function addRectangle(rectangle) {
      this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
        bounds: {
          north: rectangle.north,
          east: rectangle.east,
          south: rectangle.south,
          west: rectangle.west
        },
        clickable: rectangle.clickable,
        draggable: rectangle.draggable,
        editable: rectangle.editable,
        fillColor: rectangle.fillColor,
        fillOpacity: rectangle.fillOpacity,
        strokeColor: rectangle.strokeColor,
        strokeOpacity: rectangle.strokeOpacity,
        strokePosition: rectangle.strokePosition,
        strokeWeight: rectangle.strokeWeight,
        visible: rectangle.visible,
        zIndex: rectangle.zIndex
      }));
    }
    /**
     * Removes the given rectangle from the map.
     */

  }, {
    key: "removeRectangle",
    value: function removeRectangle(rectangle) {
      var _this59 = this;

      return this._rectangles.get(rectangle).then(function (r) {
        r.setMap(null);

        _this59._rectangles.delete(rectangle);
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(rectangle, options) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setOptions(options);
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.getBounds();
      });
    }
  }, {
    key: "setBounds",
    value: function setBounds(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setBounds({
          north: rectangle.north,
          east: rectangle.east,
          south: rectangle.south,
          west: rectangle.west
        });
      });
    }
  }, {
    key: "setEditable",
    value: function setEditable(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setEditable(rectangle.editable);
      });
    }
  }, {
    key: "setDraggable",
    value: function setDraggable(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setDraggable(rectangle.draggable);
      });
    }
  }, {
    key: "setVisible",
    value: function setVisible(rectangle) {
      return this._rectangles.get(rectangle).then(function (r) {
        return r.setVisible(rectangle.visible);
      });
    }
  }, {
    key: "createEventObservable",
    value: function createEventObservable(eventName, rectangle) {
      var _this60 = this;

      return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].create(function (observer) {
        var listener = null;

        _this60._rectangles.get(rectangle).then(function (r) {
          listener = r.addListener(eventName, function (e) {
            return _this60._zone.run(function () {
              return observer.next(e);
            });
          });
        });

        return function () {
          if (listener !== null) {
            listener.remove();
          }
        };
      });
    }
  }]);

  return RectangleManager;
}();

RectangleManager.ɵfac = function RectangleManager_Factory(t) {
  return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

RectangleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: RectangleManager,
  factory: function factory(t) {
    return RectangleManager.ɵfac(t);
  }
});

RectangleManager.ctorParameters = function () {
  return [{
    type: GoogleMapsAPIWrapper
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

RectangleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], RectangleManager);
var AgmMap_1;
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */

var AgmMap = AgmMap_1 = /*#__PURE__*/function () {
  function AgmMap(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmMap);

    this._elem = _elem;
    this._mapsWrapper = _mapsWrapper;
    this._platformId = _platformId;
    this._fitBoundsService = _fitBoundsService;
    this._zone = _zone;
    /**
     * The longitude that defines the center of the map.
     */

    this.longitude = 0;
    /**
     * The latitude that defines the center of the map.
     */

    this.latitude = 0;
    /**
     * The zoom level of the map. The default zoom level is 8.
     */

    this.zoom = 8;
    /**
     * Enables/disables if map is draggable.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = true;
    /**
     * Enables/disables zoom and center on double click. Enabled by default.
     */

    this.disableDoubleClickZoom = false;
    /**
     * Enables/disables all default UI of the Google map. Please note: When the map is created, this
     * value cannot get updated.
     */

    this.disableDefaultUI = false;
    /**
     * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
     */

    this.scrollwheel = true;
    /**
     * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
     * enabled by default.
     */

    this.keyboardShortcuts = true;
    /**
     * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
     * modes, these styles will only apply to labels and geometry.
     */

    this.styles = [];
    /**
     * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
     * used to
     * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
     */

    this.usePanning = false;
    /**
     * Sets the viewport to contain the given bounds.
     * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
     */

    this.fitBounds = false;
    /**
     * The initial enabled/disabled state of the Scale control. This is disabled by default.
     */

    this.scaleControl = false;
    /**
     * The initial enabled/disabled state of the Map type control.
     */

    this.mapTypeControl = false;
    /**
     * The initial enabled/disabled state of the Pan control.
     */

    this.panControl = false;
    /**
     * The initial enabled/disabled state of the Rotate control.
     */

    this.rotateControl = false;
    /**
     * The initial enabled/disabled state of the Fullscreen control.
     */

    this.fullscreenControl = false;
    /**
     * The map mapTypeId. Defaults to 'roadmap'.
     */

    this.mapTypeId = 'roadmap';
    /**
     * When false, map icons are not clickable. A map icon represents a point of interest,
     * also known as a POI. By default map icons are clickable.
     */

    this.clickableIcons = true;
    /**
     * A map icon represents a point of interest, also known as a POI.
     * When map icons are clickable by default, an info window is displayed.
     * When this property is set to false, the info window will not be shown but the click event
     * will still fire
     */

    this.showDefaultInfoWindow = true;
    /**
     * This setting controls how gestures on the map are handled.
     * Allowed values:
     * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
     * - 'greedy'      (All touch gestures pan or zoom the map.)
     * - 'none'        (The map cannot be panned or zoomed by user gestures.)
     * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
     */

    this.gestureHandling = 'auto';
    /**
     * Controls the automatic switching behavior for the angle of incidence of
     * the map. The only allowed values are 0 and 45. The value 0 causes the map
     * to always use a 0° overhead view regardless of the zoom level and
     * viewport. The value 45 causes the tilt angle to automatically switch to
     * 45 whenever 45° imagery is available for the current zoom level and
     * viewport, and switch back to 0 whenever 45° imagery is not available
     * (this is the default behavior). 45° imagery is only available for
     * satellite and hybrid map types, within some locations, and at some zoom
     * levels. Note: getTilt returns the current tilt angle, not the value
     * specified by this option. Because getTilt and this option refer to
     * different things, do not bind() the tilt property; doing so may yield
     * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
     */

    this.tilt = 0;
    this._observableSubscriptions = [];
    /**
     * This event emitter gets emitted when the user clicks on the map (but not when they click on a
     * marker or infoWindow).
     */

    this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter gets emitted when the user right-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */

    this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */

    this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter is fired when the map center changes.
     */

    this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the viewport bounds have changed.
     */

    this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the mapTypeId property changes.
     */

    this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the map becomes idle after panning or zooming.
     */

    this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the zoom level has changed.
     */

    this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the google map is fully initialized.
     * You get the google.maps.Map instance as a result of this EventEmitter.
     */

    this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the visible tiles have finished loading.
     */

    this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
  }
  /** @internal */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmMap, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["isPlatformServer"])(this._platformId)) {
        // The code is running on the server, do nothing
        return;
      } // todo: this should be solved with a new component and a viewChild decorator


      var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');

      this._initMapInstance(container);
    }
  }, {
    key: "_initMapInstance",
    value: function _initMapInstance(el) {
      var _this61 = this;

      this._mapsWrapper.createMap(el, {
        center: {
          lat: this.latitude || 0,
          lng: this.longitude || 0
        },
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        controlSize: this.controlSize,
        disableDefaultUI: this.disableDefaultUI,
        disableDoubleClickZoom: this.disableDoubleClickZoom,
        scrollwheel: this.scrollwheel,
        backgroundColor: this.backgroundColor,
        draggable: this.draggable,
        draggableCursor: this.draggableCursor,
        draggingCursor: this.draggingCursor,
        keyboardShortcuts: this.keyboardShortcuts,
        styles: this.styles,
        zoomControl: this.zoomControl,
        zoomControlOptions: this.zoomControlOptions,
        streetViewControl: this.streetViewControl,
        streetViewControlOptions: this.streetViewControlOptions,
        scaleControl: this.scaleControl,
        scaleControlOptions: this.scaleControlOptions,
        mapTypeControl: this.mapTypeControl,
        mapTypeControlOptions: this.mapTypeControlOptions,
        panControl: this.panControl,
        panControlOptions: this.panControlOptions,
        rotateControl: this.rotateControl,
        rotateControlOptions: this.rotateControlOptions,
        fullscreenControl: this.fullscreenControl,
        fullscreenControlOptions: this.fullscreenControlOptions,
        mapTypeId: this.mapTypeId,
        clickableIcons: this.clickableIcons,
        gestureHandling: this.gestureHandling,
        tilt: this.tilt,
        restriction: this.restriction
      }).then(function () {
        return _this61._mapsWrapper.getNativeMap();
      }).then(function (map) {
        return _this61.mapReady.emit(map);
      }); // register event listeners


      this._handleMapCenterChange();

      this._handleMapZoomChange();

      this._handleMapMouseEvents();

      this._handleBoundsChange();

      this._handleMapTypeIdChange();

      this._handleTilesLoadedEvent();

      this._handleIdleEvent();
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // unsubscribe all registered observable subscriptions
      this._observableSubscriptions.forEach(function (s) {
        return s.unsubscribe();
      }); // remove all listeners from the map instance


      this._mapsWrapper.clearInstanceListeners();

      if (this._fitBoundsSubscription) {
        this._fitBoundsSubscription.unsubscribe();
      }
    }
    /* @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._updateMapOptionsChanges(changes);

      this._updatePosition(changes);
    }
  }, {
    key: "_updateMapOptionsChanges",
    value: function _updateMapOptionsChanges(changes) {
      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        options[k] = changes[k].currentValue;
      });

      this._mapsWrapper.setMapOptions(options);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */

  }, {
    key: "triggerResize",
    value: function triggerResize() {
      var _this62 = this;

      var recenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // Note: When we would trigger the resize event and show the map in the same turn (which is a
      // common case for triggering a resize event), then the resize event would not
      // work (to show the map), so we trigger the event in a timeout.
      return new Promise(function (resolve) {
        setTimeout(function () {
          return _this62._mapsWrapper.triggerMapEvent('resize').then(function () {
            if (recenter) {
              _this62.fitBounds != null ? _this62._fitBounds() : _this62._setCenter();
            }

            resolve();
          });
        });
      });
    }
  }, {
    key: "_updatePosition",
    value: function _updatePosition(changes) {
      if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
        // no position update needed
        return;
      } // we prefer fitBounds in changes


      if ('fitBounds' in changes) {
        this._fitBounds();

        return;
      }

      if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
        return;
      }

      this._setCenter();
    }
  }, {
    key: "_setCenter",
    value: function _setCenter() {
      var newCenter = {
        lat: this.latitude,
        lng: this.longitude
      };

      if (this.usePanning) {
        this._mapsWrapper.panTo(newCenter);
      } else {
        this._mapsWrapper.setCenter(newCenter);
      }
    }
  }, {
    key: "_fitBounds",
    value: function _fitBounds() {
      switch (this.fitBounds) {
        case true:
          this._subscribeToFitBoundsUpdates();

          break;

        case false:
          if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
          }

          break;

        default:
          this._updateBounds(this.fitBounds, this.fitBoundsPadding);

      }
    }
  }, {
    key: "_subscribeToFitBoundsUpdates",
    value: function _subscribeToFitBoundsUpdates() {
      var _this63 = this;

      this._zone.runOutsideAngular(function () {
        _this63._fitBoundsSubscription = _this63._fitBoundsService.getBounds$().subscribe(function (b) {
          _this63._zone.run(function () {
            return _this63._updateBounds(b, _this63.fitBoundsPadding);
          });
        });
      });
    }
  }, {
    key: "_updateBounds",
    value: function _updateBounds(bounds, padding) {
      if (!bounds) {
        return;
      }

      if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
        var newBounds = new google.maps.LatLngBounds();
        newBounds.union(bounds);
        bounds = newBounds;
      }

      if (this.usePanning) {
        this._mapsWrapper.panToBounds(bounds, padding);

        return;
      }

      this._mapsWrapper.fitBounds(bounds, padding);
    }
  }, {
    key: "_isLatLngBoundsLiteral",
    value: function _isLatLngBoundsLiteral(bounds) {
      return bounds != null && bounds.extend === undefined;
    }
  }, {
    key: "_handleMapCenterChange",
    value: function _handleMapCenterChange() {
      var _this64 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
        _this64._mapsWrapper.getCenter().then(function (center) {
          _this64.latitude = center.lat();
          _this64.longitude = center.lng();

          _this64.centerChange.emit({
            lat: _this64.latitude,
            lng: _this64.longitude
          });
        });
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleBoundsChange",
    value: function _handleBoundsChange() {
      var _this65 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
        _this65._mapsWrapper.getBounds().then(function (bounds) {
          _this65.boundsChange.emit(bounds);
        });
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleMapTypeIdChange",
    value: function _handleMapTypeIdChange() {
      var _this66 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
        _this66._mapsWrapper.getMapTypeId().then(function (mapTypeId) {
          _this66.mapTypeIdChange.emit(mapTypeId);
        });
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleMapZoomChange",
    value: function _handleMapZoomChange() {
      var _this67 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
        _this67._mapsWrapper.getZoom().then(function (z) {
          _this67.zoom = z;

          _this67.zoomChange.emit(z);
        });
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleIdleEvent",
    value: function _handleIdleEvent() {
      var _this68 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
        _this68.idle.emit(void 0);
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleTilesLoadedEvent",
    value: function _handleTilesLoadedEvent() {
      var _this69 = this;

      var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
        return _this69.tilesLoaded.emit(void 0);
      });

      this._observableSubscriptions.push(s);
    }
  }, {
    key: "_handleMapMouseEvents",
    value: function _handleMapMouseEvents() {
      var _this70 = this;

      var events = [{
        name: 'click',
        emitter: this.mapClick
      }, {
        name: 'rightclick',
        emitter: this.mapRightClick
      }, {
        name: 'dblclick',
        emitter: this.mapDblClick
      }];
      events.forEach(function (e) {
        var s = _this70._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
          var value = {
            coords: {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            },
            placeId: event.placeId
          }; // the placeId will be undefined in case the event was not an IconMouseEvent (google types)

          if (value.placeId && !_this70.showDefaultInfoWindow) {
            event.stop();
          }

          e.emitter.emit(value);
        });

        _this70._observableSubscriptions.push(s);
      });
    }
  }]);

  return AgmMap;
}();

AgmMap.ɵfac = function AgmMap_Factory(t) {
  return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]));
};

AgmMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AgmMap,
  selectors: [["agm-map"]],
  hostVars: 2,
  hostBindings: function AgmMap_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("sebm-google-map-container", true);
    }
  },
  inputs: {
    longitude: "longitude",
    latitude: "latitude",
    zoom: "zoom",
    draggable: ["mapDraggable", "draggable"],
    disableDoubleClickZoom: "disableDoubleClickZoom",
    disableDefaultUI: "disableDefaultUI",
    scrollwheel: "scrollwheel",
    keyboardShortcuts: "keyboardShortcuts",
    styles: "styles",
    usePanning: "usePanning",
    fitBounds: "fitBounds",
    scaleControl: "scaleControl",
    mapTypeControl: "mapTypeControl",
    panControl: "panControl",
    rotateControl: "rotateControl",
    fullscreenControl: "fullscreenControl",
    mapTypeId: "mapTypeId",
    clickableIcons: "clickableIcons",
    showDefaultInfoWindow: "showDefaultInfoWindow",
    gestureHandling: "gestureHandling",
    tilt: "tilt",
    minZoom: "minZoom",
    maxZoom: "maxZoom",
    controlSize: "controlSize",
    backgroundColor: "backgroundColor",
    draggableCursor: "draggableCursor",
    draggingCursor: "draggingCursor",
    zoomControl: "zoomControl",
    zoomControlOptions: "zoomControlOptions",
    streetViewControl: "streetViewControl",
    streetViewControlOptions: "streetViewControlOptions",
    fitBoundsPadding: "fitBoundsPadding",
    scaleControlOptions: "scaleControlOptions",
    mapTypeControlOptions: "mapTypeControlOptions",
    panControlOptions: "panControlOptions",
    rotateControlOptions: "rotateControlOptions",
    fullscreenControlOptions: "fullscreenControlOptions",
    restriction: "restriction"
  },
  outputs: {
    mapClick: "mapClick",
    mapRightClick: "mapRightClick",
    mapDblClick: "mapDblClick",
    centerChange: "centerChange",
    boundsChange: "boundsChange",
    mapTypeIdChange: "mapTypeIdChange",
    idle: "idle",
    zoomChange: "zoomChange",
    mapReady: "mapReady",
    tilesLoaded: "tilesLoaded"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]],
  template: function AgmMap_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
  },
  styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]
});
/**
 * Map option attributes that can change over time
 */

AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl', 'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom', 'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];

AgmMap.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }, {
    type: GoogleMapsAPIWrapper
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["PLATFORM_ID"]]
    }]
  }, {
    type: FitBoundsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "longitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "latitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoom", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmMap.prototype, "minZoom", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmMap.prototype, "maxZoom", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmMap.prototype, "controlSize", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])('mapDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "draggable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDoubleClickZoom", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDefaultUI", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "scrollwheel", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmMap.prototype, "backgroundColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmMap.prototype, "draggableCursor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmMap.prototype, "draggingCursor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "keyboardShortcuts", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "zoomControl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoomControlOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Array)], AgmMap.prototype, "styles", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "usePanning", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "streetViewControl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "streetViewControlOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBounds", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBoundsPadding", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControlOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControlOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControlOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControlOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControlOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmMap.prototype, "mapTypeId", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "clickableIcons", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "showDefaultInfoWindow", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmMap.prototype, "gestureHandling", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "tilt", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMap.prototype, "restriction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "mapClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "mapRightClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "mapDblClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "centerChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "boundsChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "mapTypeIdChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "idle", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "zoomChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "mapReady", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMap.prototype, "tilesLoaded", void 0);

AgmMap = AgmMap_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_8__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"], GoogleMapsAPIWrapper, Object, FitBoundsService, _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]])], AgmMap);
var AgmMarker_1;
var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */

var AgmMarker = AgmMarker_1 = /*#__PURE__*/function () {
  function AgmMarker(_markerManager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmMarker);

    this._markerManager = _markerManager;
    /**
     * If true, the marker can be dragged. Default value is false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If true, the marker is visible
     */

    this.visible = true;
    /**
     * Whether to automatically open the child info window when the marker is clicked.
     */

    this.openInfoWindow = true;
    /**
     * The marker's opacity between 0.0 and 1.0.
     */

    this.opacity = 1;
    /**
     * All markers are displayed on the map in order of their zIndex, with higher values displaying in
     * front of markers with lower values. By default, markers are displayed according to their
     * vertical position on screen, with lower markers appearing in front of markers further up the
     * screen.
     */

    this.zIndex = 1;
    /**
     * If true, the marker can be clicked. Default value is true.
     */
    // tslint:disable-next-line:no-input-rename

    this.clickable = true;
    /**
     * This event is fired when the marker's animation property changes.
     *
     * @memberof AgmMarker
     */

    this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter gets emitted when the user clicks on the marker.
     */

    this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter gets emitted when the user clicks twice on the marker.
     */

    this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user rightclicks on the marker.
     */

    this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user starts dragging the marker.
     */

    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is repeatedly fired while the user drags the marker.
     */

    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user stops dragging the marker.
     */

    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user mouses over the marker.
     */

    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user mouses outside the marker.
     */

    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /** @internal */

    this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["QueryList"]();
    this._markerAddedToManger = false;
    this._observableSubscriptions = [];
    this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["ReplaySubject"](1);
    this._id = (markerId++).toString();
  }
  /* @internal */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmMarker, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this71 = this;

      this.handleInfoWindowUpdate();
      this.infoWindow.changes.subscribe(function () {
        return _this71.handleInfoWindowUpdate();
      });
    }
  }, {
    key: "handleInfoWindowUpdate",
    value: function handleInfoWindowUpdate() {
      var _this72 = this;

      if (this.infoWindow.length > 1) {
        throw new Error('Expected no more than one info window.');
      }

      this.infoWindow.forEach(function (marker) {
        marker.hostMarker = _this72;
      });
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (typeof this.latitude === 'string') {
        this.latitude = Number(this.latitude);
      }

      if (typeof this.longitude === 'string') {
        this.longitude = Number(this.longitude);
      }

      if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
        return;
      }

      if (!this._markerAddedToManger) {
        this._markerManager.addMarker(this);

        this._updateFitBoundsDetails();

        this._markerAddedToManger = true;

        this._addEventListeners();

        return;
      }

      if (changes['latitude'] || changes['longitude']) {
        this._markerManager.updateMarkerPosition(this);

        this._updateFitBoundsDetails();
      }

      if (changes['title']) {
        this._markerManager.updateTitle(this);
      }

      if (changes['label']) {
        this._markerManager.updateLabel(this);
      }

      if (changes['draggable']) {
        this._markerManager.updateDraggable(this);
      }

      if (changes['iconUrl']) {
        this._markerManager.updateIcon(this);
      }

      if (changes['opacity']) {
        this._markerManager.updateOpacity(this);
      }

      if (changes['visible']) {
        this._markerManager.updateVisible(this);
      }

      if (changes['zIndex']) {
        this._markerManager.updateZIndex(this);
      }

      if (changes['clickable']) {
        this._markerManager.updateClickable(this);
      }

      if (changes['animation']) {
        this._markerManager.updateAnimation(this);
      }
    }
    /** @internal */

  }, {
    key: "getFitBoundsDetails$",
    value: function getFitBoundsDetails$() {
      return this._fitBoundsDetails$.asObservable();
    }
  }, {
    key: "_updateFitBoundsDetails",
    value: function _updateFitBoundsDetails() {
      this._fitBoundsDetails$.next({
        latLng: {
          lat: this.latitude,
          lng: this.longitude
        }
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this73 = this;

      var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
        if (_this73.openInfoWindow) {
          _this73.infoWindow.forEach(function (infoWindow) {
            return infoWindow.open();
          });
        }

        _this73.markerClick.emit(_this73);
      });

      this._observableSubscriptions.push(cs);

      var dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
        _this73.markerDblClick.emit(null);
      });

      this._observableSubscriptions.push(dcs);

      var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
        _this73.markerRightClick.emit(null);
      });

      this._observableSubscriptions.push(rc);

      var ds = this._markerManager.createEventObservable('dragstart', this).subscribe(function (e) {
        _this73.dragStart.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(ds);

      var d = this._markerManager.createEventObservable('drag', this).subscribe(function (e) {
        _this73.drag.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(d);

      var de = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
        _this73.dragEnd.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(de);

      var mover = this._markerManager.createEventObservable('mouseover', this).subscribe(function (e) {
        _this73.mouseOver.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(mover);

      var mout = this._markerManager.createEventObservable('mouseout', this).subscribe(function (e) {
        _this73.mouseOut.emit({
          coords: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      });

      this._observableSubscriptions.push(mout);

      var anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
        _this73.animationChange.emit(_this73.animation);
      });

      this._observableSubscriptions.push(anChng);
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return 'AgmMarker-' + this._id.toString();
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._markerManager.deleteMarker(this); // unsubscribe all registered observable subscriptions


      this._observableSubscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
  }]);

  return AgmMarker;
}();

AgmMarker.ɵfac = function AgmMarker_Factory(t) {
  return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MarkerManager));
};

AgmMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmMarker,
  selectors: [["agm-marker"]],
  contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
    }
  },
  inputs: {
    latitude: "latitude",
    longitude: "longitude",
    title: "title",
    label: "label",
    draggable: ["markerDraggable", "draggable"],
    iconUrl: "iconUrl",
    openInfoWindow: "openInfoWindow",
    opacity: "opacity",
    visible: "visible",
    zIndex: "zIndex",
    animation: "animation",
    clickable: ["markerClickable", "clickable"]
  },
  outputs: {
    markerClick: "markerClick",
    dragStart: "dragStart",
    drag: "drag",
    dragEnd: "dragEnd",
    mouseOver: "mouseOver",
    mouseOut: "mouseOut",
    animationChange: "animationChange",
    markerDblClick: "markerDblClick",
    markerRightClick: "markerRightClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: FitBoundsAccessor,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(function () {
      return AgmMarker_1;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});

AgmMarker.ctorParameters = function () {
  return [{
    type: MarkerManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmMarker.prototype, "latitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmMarker.prototype, "longitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmMarker.prototype, "title", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMarker.prototype, "label", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])('markerDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMarker.prototype, "draggable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmMarker.prototype, "iconUrl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMarker.prototype, "visible", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMarker.prototype, "openInfoWindow", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMarker.prototype, "opacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMarker.prototype, "zIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])('markerClickable'), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMarker.prototype, "clickable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmMarker.prototype, "animation", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmMarker.prototype, "animationChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMarker.prototype, "markerClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMarker.prototype, "markerDblClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMarker.prototype, "markerRightClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMarker.prototype, "dragStart", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMarker.prototype, "drag", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMarker.prototype, "dragEnd", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMarker.prototype, "mouseOver", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmMarker.prototype, "mouseOut", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"])(AgmInfoWindow), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["QueryList"])], AgmMarker.prototype, "infoWindow", void 0);

AgmMarker = AgmMarker_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [MarkerManager])], AgmMarker);
var AgmPolygon_1;
/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */

var AgmPolygon = AgmPolygon_1 = /*#__PURE__*/function () {
  function AgmPolygon(_polygonManager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmPolygon);

    this._polygonManager = _polygonManager;
    /**
     * Indicates whether this Polygon handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this shape over the map. The geodesic
     * property defines the mode of dragging. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment. Defaults to false.
     */

    this.editable = false;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polygon are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     */

    this.geodesic = false;
    /**
     * The ordered sequence of coordinates that designates a closed loop.
     * Unlike polylines, a polygon may consist of one or more paths.
     *  As a result, the paths property may specify one or more arrays of
     * LatLng coordinates. Paths are closed automatically; do not repeat the
     * first vertex of the path as the last vertex. Simple polygons may be
     * defined using a single array of LatLngs. More complex polygons may
     * specify an array of arrays. Any simple arrays are converted into Arrays.
     * Inserting or removing LatLngs from the Array will automatically update
     * the polygon on the map.
     */

    this.paths = [];
    /**
     * This event is fired when the DOM click event is fired on the Polygon.
     */

    this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM dblclick event is fired on the Polygon.
     */

    this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is repeatedly fired while the user drags the polygon.
     */

    this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user stops dragging the polygon.
     */

    this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user starts dragging the polygon.
     */

    this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mousedown event is fired on the Polygon.
     */

    this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mousemove event is fired on the Polygon.
     */

    this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired on Polygon mouseout.
     */

    this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired on Polygon mouseover.
     */

    this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polygon
     */

    this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the Polygon is right-clicked on.
     */

    this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired after Polygon first path changes.
     */

    this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    this._polygonAddedToManager = false;
    this._subscriptions = [];
  }
  /** @internal */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmPolygon, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      if (!this._polygonAddedToManager) {
        this._init();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._polygonAddedToManager) {
        this._init();

        return;
      }

      this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    }
  }, {
    key: "_init",
    value: function _init() {
      this._polygonManager.addPolygon(this);

      this._polygonAddedToManager = true;

      this._addEventListeners();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this74 = this;

      var handlers = [{
        name: 'click',
        handler: function handler(ev) {
          return _this74.polyClick.emit(ev);
        }
      }, {
        name: 'dblclick',
        handler: function handler(ev) {
          return _this74.polyDblClick.emit(ev);
        }
      }, {
        name: 'drag',
        handler: function handler(ev) {
          return _this74.polyDrag.emit(ev);
        }
      }, {
        name: 'dragend',
        handler: function handler(ev) {
          return _this74.polyDragEnd.emit(ev);
        }
      }, {
        name: 'dragstart',
        handler: function handler(ev) {
          return _this74.polyDragStart.emit(ev);
        }
      }, {
        name: 'mousedown',
        handler: function handler(ev) {
          return _this74.polyMouseDown.emit(ev);
        }
      }, {
        name: 'mousemove',
        handler: function handler(ev) {
          return _this74.polyMouseMove.emit(ev);
        }
      }, {
        name: 'mouseout',
        handler: function handler(ev) {
          return _this74.polyMouseOut.emit(ev);
        }
      }, {
        name: 'mouseover',
        handler: function handler(ev) {
          return _this74.polyMouseOver.emit(ev);
        }
      }, {
        name: 'mouseup',
        handler: function handler(ev) {
          return _this74.polyMouseUp.emit(ev);
        }
      }, {
        name: 'rightclick',
        handler: function handler(ev) {
          return _this74.polyRightClick.emit(ev);
        }
      }];
      handlers.forEach(function (obj) {
        var os = _this74._polygonManager.createEventObservable(obj.name, _this74).subscribe(obj.handler);

        _this74._subscriptions.push(os);
      });

      this._polygonManager.createPathEventObservable(this).then(function (paths$) {
        var os = paths$.subscribe(function (pathEvent) {
          return _this74.polyPathsChange.emit(pathEvent);
        });

        _this74._subscriptions.push(os);
      });
    }
  }, {
    key: "_updatePolygonOptions",
    value: function _updatePolygonOptions(changes) {
      return Object.keys(changes).filter(function (k) {
        return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1;
      }).reduce(function (obj, k) {
        obj[k] = changes[k].currentValue;
        return obj;
      }, {});
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._polygonManager.deletePolygon(this); // unsubscribe all registered observable subscriptions


      this._subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this._polygonManager.getPath(this);
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      return this._polygonManager.getPaths(this);
    }
  }]);

  return AgmPolygon;
}();

AgmPolygon.ɵfac = function AgmPolygon_Factory(t) {
  return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](PolygonManager));
};

AgmPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmPolygon,
  selectors: [["agm-polygon"]],
  inputs: {
    clickable: "clickable",
    draggable: ["polyDraggable", "draggable"],
    editable: "editable",
    geodesic: "geodesic",
    paths: "paths",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight",
    visible: "visible",
    zIndex: "zIndex"
  },
  outputs: {
    polyClick: "polyClick",
    polyDblClick: "polyDblClick",
    polyDrag: "polyDrag",
    polyDragEnd: "polyDragEnd",
    polyDragStart: "polyDragStart",
    polyMouseDown: "polyMouseDown",
    polyMouseMove: "polyMouseMove",
    polyMouseOut: "polyMouseOut",
    polyMouseOver: "polyMouseOver",
    polyMouseUp: "polyMouseUp",
    polyRightClick: "polyRightClick",
    polyPathsChange: "polyPathsChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});
AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];

AgmPolygon.ctorParameters = function () {
  return [{
    type: PolygonManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "clickable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])('polyDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "draggable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "editable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmPolygon.prototype, "fillColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "fillOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "geodesic", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Array)], AgmPolygon.prototype, "paths", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmPolygon.prototype, "strokeColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeWeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)], AgmPolygon.prototype, "visible", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "zIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyDblClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyDrag", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyDragEnd", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyDragStart", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyMouseDown", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyMouseMove", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOut", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOver", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyMouseUp", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolygon.prototype, "polyRightClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "polyPathsChange", void 0);

AgmPolygon = AgmPolygon_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [PolygonManager])], AgmPolygon);
/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 *
 * @export
 * @class AgmPolylineIcon
 */

var AgmPolylineIcon = /*#__PURE__*/function () {
  function AgmPolylineIcon() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmPolylineIcon);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmPolylineIcon, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.path == null) {
        throw new Error('Icon Sequence path is required');
      }
    }
  }]);

  return AgmPolylineIcon;
}();

AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) {
  return new (t || AgmPolylineIcon)();
};

AgmPolylineIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmPolylineIcon,
  selectors: [["agm-icon-sequence"]],
  inputs: {
    fixedRotation: "fixedRotation",
    offset: "offset",
    repeat: "repeat",
    anchorX: "anchorX",
    anchorY: "anchorY",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    path: "path",
    rotation: "rotation",
    scale: "scale",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight"
  }
});

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)], AgmPolylineIcon.prototype, "fixedRotation", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "offset", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "repeat", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorX", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorY", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "fillColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "fillOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "path", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "rotation", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "scale", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "strokeColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeWeight", void 0);

var AgmPolylinePoint_1;
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */

var AgmPolylinePoint = AgmPolylinePoint_1 = /*#__PURE__*/function () {
  function AgmPolylinePoint() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmPolylinePoint);

    /**
     * This event emitter gets emitted when the position of the point changed.
     */
    this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmPolylinePoint, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['latitude'] || changes['longitude']) {
        var position = {
          lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
          lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
        };
        this.positionChanged.emit(position);
      }
    }
    /** @internal */

  }, {
    key: "getFitBoundsDetails$",
    value: function getFitBoundsDetails$() {
      return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])({
        lat: this.latitude,
        lng: this.longitude
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (position) {
        return {
          latLng: position
        };
      }));
    }
  }]);

  return AgmPolylinePoint;
}();

AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) {
  return new (t || AgmPolylinePoint)();
};

AgmPolylinePoint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmPolylinePoint,
  selectors: [["agm-polyline-point"]],
  inputs: {
    latitude: "latitude",
    longitude: "longitude"
  },
  outputs: {
    positionChanged: "positionChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: FitBoundsAccessor,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(function () {
      return AgmPolylinePoint_1;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "latitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "longitude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolylinePoint.prototype, "positionChanged", void 0);

AgmPolylinePoint = AgmPolylinePoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [])], AgmPolylinePoint);
var AgmPolyline_1;
var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */

var AgmPolyline = AgmPolyline_1 = /*#__PURE__*/function () {
  function AgmPolyline(_polylineManager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmPolyline);

    this._polylineManager = _polylineManager;
    /**
     * Indicates whether this Polyline handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this shape over the map. The geodesic property defines the
     * mode of dragging. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If set to true, the user can edit this shape by dragging the control points shown at the
     * vertices and on each segment. Defaults to false.
     */

    this.editable = false;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
     * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
     * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     */

    this.geodesic = false;
    /**
     * Whether this polyline is visible on the map. Defaults to true.
     */

    this.visible = true;
    /**
     * This event is fired when the DOM click event is fired on the Polyline.
     */

    this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM dblclick event is fired on the Polyline.
     */

    this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is repeatedly fired while the user drags the polyline.
     */

    this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user stops dragging the polyline.
     */

    this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user starts dragging the polyline.
     */

    this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mousedown event is fired on the Polyline.
     */

    this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mousemove event is fired on the Polyline.
     */

    this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired on Polyline mouseout.
     */

    this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired on Polyline mouseover.
     */

    this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polyline
     */

    this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the Polyline is right-clicked on.
     */

    this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired after Polyline's path changes.
     */

    this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    this._polylineAddedToManager = false;
    this._subscriptions = [];
    this._id = (polylineId++).toString();
  }
  /** @internal */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmPolyline, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this75 = this;

      if (this.points.length) {
        this.points.forEach(function (point) {
          var s = point.positionChanged.subscribe(function () {
            _this75._polylineManager.updatePolylinePoints(_this75);
          });

          _this75._subscriptions.push(s);
        });
      }

      if (!this._polylineAddedToManager) {
        this._init();
      }

      var pointSub = this.points.changes.subscribe(function () {
        return _this75._polylineManager.updatePolylinePoints(_this75);
      });

      this._subscriptions.push(pointSub);

      this._polylineManager.updatePolylinePoints(this);

      var iconSub = this.iconSequences.changes.subscribe(function () {
        return _this75._polylineManager.updateIconSequences(_this75);
      });

      this._subscriptions.push(iconSub);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._polylineAddedToManager) {
        this._init();

        return;
      }

      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        return options[k] = changes[k].currentValue;
      });

      this._polylineManager.setPolylineOptions(this, options);
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this._polylineManager.getPath(this);
    }
  }, {
    key: "_init",
    value: function _init() {
      this._polylineManager.addPolyline(this);

      this._polylineAddedToManager = true;

      this._addEventListeners();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this76 = this;

      var handlers = [{
        name: 'click',
        handler: function handler(ev) {
          return _this76.lineClick.emit(ev);
        }
      }, {
        name: 'dblclick',
        handler: function handler(ev) {
          return _this76.lineDblClick.emit(ev);
        }
      }, {
        name: 'drag',
        handler: function handler(ev) {
          return _this76.lineDrag.emit(ev);
        }
      }, {
        name: 'dragend',
        handler: function handler(ev) {
          return _this76.lineDragEnd.emit(ev);
        }
      }, {
        name: 'dragstart',
        handler: function handler(ev) {
          return _this76.lineDragStart.emit(ev);
        }
      }, {
        name: 'mousedown',
        handler: function handler(ev) {
          return _this76.lineMouseDown.emit(ev);
        }
      }, {
        name: 'mousemove',
        handler: function handler(ev) {
          return _this76.lineMouseMove.emit(ev);
        }
      }, {
        name: 'mouseout',
        handler: function handler(ev) {
          return _this76.lineMouseOut.emit(ev);
        }
      }, {
        name: 'mouseover',
        handler: function handler(ev) {
          return _this76.lineMouseOver.emit(ev);
        }
      }, {
        name: 'mouseup',
        handler: function handler(ev) {
          return _this76.lineMouseUp.emit(ev);
        }
      }, {
        name: 'rightclick',
        handler: function handler(ev) {
          return _this76.lineRightClick.emit(ev);
        }
      }];
      handlers.forEach(function (obj) {
        var os = _this76._polylineManager.createEventObservable(obj.name, _this76).subscribe(obj.handler);

        _this76._subscriptions.push(os);
      });

      this._polylineManager.createPathEventObservable(this).then(function (ob$) {
        var os = ob$.subscribe(function (pathEvent) {
          return _this76.polyPathChange.emit(pathEvent);
        });

        _this76._subscriptions.push(os);
      });
    }
    /** @internal */

  }, {
    key: "_getPoints",
    value: function _getPoints() {
      if (this.points) {
        return this.points.toArray();
      }

      return [];
    }
  }, {
    key: "_getIcons",
    value: function _getIcons() {
      if (this.iconSequences) {
        return this.iconSequences.toArray();
      }

      return [];
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._polylineManager.deletePolyline(this); // unsubscribe all registered observable subscriptions


      this._subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    }
  }]);

  return AgmPolyline;
}();

AgmPolyline.ɵfac = function AgmPolyline_Factory(t) {
  return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](PolylineManager));
};

AgmPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmPolyline,
  selectors: [["agm-polyline"]],
  contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.points = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
    }
  },
  inputs: {
    clickable: "clickable",
    draggable: ["polylineDraggable", "draggable"],
    editable: "editable",
    geodesic: "geodesic",
    visible: "visible",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    strokeWeight: "strokeWeight",
    zIndex: "zIndex"
  },
  outputs: {
    lineClick: "lineClick",
    lineDblClick: "lineDblClick",
    lineDrag: "lineDrag",
    lineDragEnd: "lineDragEnd",
    lineDragStart: "lineDragStart",
    lineMouseDown: "lineMouseDown",
    lineMouseMove: "lineMouseMove",
    lineMouseOut: "lineMouseOut",
    lineMouseOver: "lineMouseOver",
    lineMouseUp: "lineMouseUp",
    lineRightClick: "lineRightClick",
    polyPathChange: "polyPathChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});
AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];

AgmPolyline.ctorParameters = function () {
  return [{
    type: PolylineManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "clickable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])('polylineDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "draggable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "editable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "geodesic", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmPolyline.prototype, "strokeColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeWeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "visible", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "zIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineDblClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineDrag", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineDragEnd", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineDragStart", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineMouseDown", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineMouseMove", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOut", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOver", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineMouseUp", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmPolyline.prototype, "lineRightClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "polyPathChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"])(AgmPolylinePoint), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["QueryList"])], AgmPolyline.prototype, "points", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"])(AgmPolylineIcon), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["QueryList"])], AgmPolyline.prototype, "iconSequences", void 0);

AgmPolyline = AgmPolyline_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [PolylineManager])], AgmPolyline);
var AgmRectangle_1;

var AgmRectangle = AgmRectangle_1 = /*#__PURE__*/function () {
  function AgmRectangle(_manager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmRectangle);

    this._manager = _manager;
    /**
     * Indicates whether this Rectangle handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this rectangle over the map. Defaults to false.
     */
    // tslint:disable-next-line:no-input-rename

    this.draggable = false;
    /**
     * If set to true, the user can edit this rectangle by dragging the control points shown at
     * the center and around the circumference of the rectangle. Defaults to false.
     */

    this.editable = false;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */

    this.strokePosition = 'CENTER';
    /**
     * The stroke width in pixels.
     */

    this.strokeWeight = 0;
    /**
     * Whether this rectangle is visible on the map. Defaults to true.
     */

    this.visible = true;
    /**
     * This event is fired when the rectangle's is changed.
     */

    this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */

    this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */

    this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is repeatedly fired while the user drags the rectangle.
     */

    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user stops dragging the rectangle.
     */

    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the user starts dragging the rectangle.
     */

    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mousedown event is fired on the rectangle.
     */

    this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mousemove event is fired on the rectangle.
     */

    this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired on rectangle mouseout.
     */

    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired on rectangle mouseover.
     */

    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the DOM mouseup event is fired on the rectangle.
     */

    this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * This event is fired when the rectangle is right-clicked on.
     */

    this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    this._rectangleAddedToManager = false;
    this._eventSubscriptions = [];
  }
  /** @internal */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmRectangle, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._manager.addRectangle(this);

      this._rectangleAddedToManager = true;

      this._registerEventListeners();
    }
    /** @internal */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._rectangleAddedToManager) {
        return;
      }

      if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
        this._manager.setBounds(this);
      }

      if (changes['editable']) {
        this._manager.setEditable(this);
      }

      if (changes['draggable']) {
        this._manager.setDraggable(this);
      }

      if (changes['visible']) {
        this._manager.setVisible(this);
      }

      this._updateRectangleOptionsChanges(changes);
    }
  }, {
    key: "_updateRectangleOptionsChanges",
    value: function _updateRectangleOptionsChanges(changes) {
      var options = {};
      var optionKeys = Object.keys(changes).filter(function (k) {
        return AgmRectangle_1._mapOptions.indexOf(k) !== -1;
      });
      optionKeys.forEach(function (k) {
        options[k] = changes[k].currentValue;
      });

      if (optionKeys.length > 0) {
        this._manager.setOptions(this, options);
      }
    }
  }, {
    key: "_registerEventListeners",
    value: function _registerEventListeners() {
      var _this77 = this;

      var events = new Map();
      events.set('bounds_changed', this.boundsChange);
      events.set('click', this.rectangleClick);
      events.set('dblclick', this.rectangleDblClick);
      events.set('drag', this.drag);
      events.set('dragend', this.dragEnd);
      events.set('dragStart', this.dragStart);
      events.set('mousedown', this.mouseDown);
      events.set('mousemove', this.mouseMove);
      events.set('mouseout', this.mouseOut);
      events.set('mouseover', this.mouseOver);
      events.set('mouseup', this.mouseUp);
      events.set('rightclick', this.rightClick);
      events.forEach(function (eventEmitter, eventName) {
        _this77._eventSubscriptions.push(_this77._manager.createEventObservable(eventName, _this77).subscribe(function (value) {
          switch (eventName) {
            case 'bounds_changed':
              _this77._manager.getBounds(_this77).then(function (bounds) {
                return eventEmitter.emit({
                  north: bounds.getNorthEast().lat(),
                  east: bounds.getNorthEast().lng(),
                  south: bounds.getSouthWest().lat(),
                  west: bounds.getSouthWest().lng()
                });
              });

              break;

            default:
              eventEmitter.emit({
                coords: {
                  lat: value.latLng.lat(),
                  lng: value.latLng.lng()
                }
              });
          }
        }));
      });
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventSubscriptions.forEach(function (s) {
        s.unsubscribe();
      });

      this._eventSubscriptions = null;

      this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this._manager.getBounds(this);
    }
  }]);

  return AgmRectangle;
}();

AgmRectangle.ɵfac = function AgmRectangle_Factory(t) {
  return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](RectangleManager));
};

AgmRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmRectangle,
  selectors: [["agm-rectangle"]],
  inputs: {
    clickable: "clickable",
    draggable: ["rectangleDraggable", "draggable"],
    editable: "editable",
    strokePosition: "strokePosition",
    strokeWeight: "strokeWeight",
    visible: "visible",
    north: "north",
    east: "east",
    south: "south",
    west: "west",
    fillColor: "fillColor",
    fillOpacity: "fillOpacity",
    strokeColor: "strokeColor",
    strokeOpacity: "strokeOpacity",
    zIndex: "zIndex"
  },
  outputs: {
    boundsChange: "boundsChange",
    rectangleClick: "rectangleClick",
    rectangleDblClick: "rectangleDblClick",
    drag: "drag",
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    mouseDown: "mouseDown",
    mouseMove: "mouseMove",
    mouseOut: "mouseOut",
    mouseOver: "mouseOver",
    mouseUp: "mouseUp",
    rightClick: "rightClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});
AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

AgmRectangle.ctorParameters = function () {
  return [{
    type: RectangleManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "north", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "east", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "south", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "west", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "clickable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])('rectangleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "draggable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "editable", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmRectangle.prototype, "fillColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "fillOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokeColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "strokeOpacity", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokePosition", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "strokeWeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "visible", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "zIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "boundsChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "rectangleClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "rectangleDblClick", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "drag", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "dragEnd", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "dragStart", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "mouseDown", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "mouseMove", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "mouseOut", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "mouseOver", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "mouseUp", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"])], AgmRectangle.prototype, "rightClick", void 0);

AgmRectangle = AgmRectangle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [RectangleManager])], AgmRectangle);
var layerId$3 = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */

var AgmTransitLayer = /*#__PURE__*/function () {
  function AgmTransitLayer(_manager) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmTransitLayer);

    this._manager = _manager;
    this._addedToManager = false;
    this._id = (layerId$3++).toString();
    /**
     * Hide/show transit layer
     */

    this.visible = true;
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmTransitLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this._addedToManager) {
        return;
      }

      this._manager.addTransitLayer(this, {
        visible: this.visible
      });

      this._addedToManager = true;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._addedToManager) {
        return;
      }

      if (changes['visible'] != null) {
        this._manager.toggleLayerVisibility(this, {
          visible: changes['visible'].currentValue
        });
      }
    }
    /** @internal */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /** @internal */

  }, {
    key: "toString",
    value: function toString() {
      return "AgmTransitLayer-".concat(this._id.toString());
    }
    /** @internal */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._manager.deleteLayer(this);
    }
  }]);

  return AgmTransitLayer;
}();

AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) {
  return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](LayerManager));
};

AgmTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: AgmTransitLayer,
  selectors: [["agm-transit-layer"]],
  inputs: {
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});

AgmTransitLayer.ctorParameters = function () {
  return [{
    type: LayerManager
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Object)], AgmTransitLayer.prototype, "visible", void 0);

AgmTransitLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [LayerManager])], AgmTransitLayer);
var google$1;
var SymbolPath;

(function (SymbolPath) {
  SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
  SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
  SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
  SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
  SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
})(SymbolPath || (SymbolPath = {}));
/**
 * Identifiers used to specify the placement of controls on the map. Controls are
 * positioned relative to other controls in the same layout position. Controls that
 * are added first are positioned closer to the edge of the map.
 */


var ControlPosition;

(function (ControlPosition) {
  ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
  ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
  ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
  ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
  ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
  ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
  ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
  ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
  ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
  ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
  ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
  ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
})(ControlPosition || (ControlPosition = {}));

var MapTypeId;

(function (MapTypeId) {
  /** This map type displays a transparent layer of major streets on satellite images. */
  MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
  /** This map type displays a normal street map. */

  MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
  /** This map type displays satellite images. */

  MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
  /** This map type displays maps with physical features such as terrain and vegetation. */

  MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
})(MapTypeId || (MapTypeId = {}));

var MapTypeControlStyle;

(function (MapTypeControlStyle) {
  MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
  MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
  MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
})(MapTypeControlStyle || (MapTypeControlStyle = {}));

var ScaleControlStyle;

(function (ScaleControlStyle) {
  ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
})(ScaleControlStyle || (ScaleControlStyle = {}));

var ZoomControlStyle;

(function (ZoomControlStyle) {
  ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
  ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
  ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
})(ZoomControlStyle || (ZoomControlStyle = {}));

var GeocoderLocationType;

(function (GeocoderLocationType) {
  GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
  GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
  GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
  GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
})(GeocoderLocationType || (GeocoderLocationType = {}));

var GeocoderStatus;

(function (GeocoderStatus) {
  GeocoderStatus["ERROR"] = "ERROR";
  GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
  GeocoderStatus["OK"] = "OK";
  GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
  GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
  GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
  GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
})(GeocoderStatus || (GeocoderStatus = {}));

var AgmGeocoder = /*#__PURE__*/function () {
  function AgmGeocoder(loader) {
    var _this78 = this;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmGeocoder);

    var connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (subscriber) {
      loader.load().then(function () {
        return subscriber.next();
      });
    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
      return _this78._createGeocoder();
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_9__["ReplaySubject"](1)));
    connectableGeocoder$.connect(); // ignore the subscription
    // since we will remain subscribed till application exits

    this.geocoder$ = connectableGeocoder$;
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmGeocoder, [{
    key: "geocode",
    value: function geocode(request) {
      var _this79 = this;

      return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (geocoder) {
        return _this79._getGoogleResults(geocoder, request);
      }));
    }
  }, {
    key: "_getGoogleResults",
    value: function _getGoogleResults(geocoder, request) {
      var geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["bindCallback"])(geocoder.geocode);
      return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (_ref6) {
        var _ref7 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref6, 2),
            results = _ref7[0],
            status = _ref7[1];

        if (status === GeocoderStatus.OK) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(results);
        }

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(status);
      }));
    }
  }, {
    key: "_createGeocoder",
    value: function _createGeocoder() {
      return new google.maps.Geocoder();
    }
  }]);

  return AgmGeocoder;
}();

AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) {
  return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](MapsAPILoader));
};

AgmGeocoder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: AgmGeocoder,
  factory: function factory(t) {
    return AgmGeocoder.ɵfac(t);
  },
  providedIn: 'root'
});

AgmGeocoder.ctorParameters = function () {
  return [{
    type: MapsAPILoader
  }];
};

AgmGeocoder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"])({
  factory: function AgmGeocoder_Factory() {
    return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(MapsAPILoader));
  },
  token: AgmGeocoder,
  providedIn: "root"
});
AgmGeocoder = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [MapsAPILoader])], AgmGeocoder);

var WindowRef = /*#__PURE__*/function () {
  function WindowRef() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, WindowRef);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(WindowRef, [{
    key: "getNativeWindow",
    value: function getNativeWindow() {
      return window;
    }
  }]);

  return WindowRef;
}();

var DocumentRef = /*#__PURE__*/function () {
  function DocumentRef() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, DocumentRef);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DocumentRef, [{
    key: "getNativeDocument",
    value: function getNativeDocument() {
      return document;
    }
  }]);

  return DocumentRef;
}();

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
var GoogleMapsScriptProtocol;

(function (GoogleMapsScriptProtocol) {
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */


var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');

var LazyMapsAPILoader = /*#__PURE__*/function (_MapsAPILoader) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(LazyMapsAPILoader, _MapsAPILoader);

  var _super = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(LazyMapsAPILoader);

  function LazyMapsAPILoader() {
    var _this80;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var w = arguments.length > 1 ? arguments[1] : undefined;
    var d = arguments.length > 2 ? arguments[2] : undefined;
    var localeId = arguments.length > 3 ? arguments[3] : undefined;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, LazyMapsAPILoader);

    _this80 = _super.call(this);
    _this80.localeId = localeId;
    _this80._SCRIPT_ID = 'agmGoogleMapsApiScript';
    _this80.callbackName = "agmLazyMapsAPILoader";
    _this80._config = config || {};
    _this80._windowRef = w;
    _this80._documentRef = d;
    return _this80;
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(LazyMapsAPILoader, [{
    key: "load",
    value: function load() {
      var window = this._windowRef.getNativeWindow();

      if (window.google && window.google.maps) {
        // Google maps already loaded on the page.
        return Promise.resolve();
      }

      if (this._scriptLoadingPromise) {
        return this._scriptLoadingPromise;
      } // this can happen in HMR situations or Stackblitz.io editors.


      var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

      if (scriptOnPage) {
        this._assignScriptLoadingPromise(scriptOnPage);

        return this._scriptLoadingPromise;
      }

      var script = this._documentRef.getNativeDocument().createElement('script');

      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.id = this._SCRIPT_ID;
      script.src = this._getScriptSrc(this.callbackName);

      this._assignScriptLoadingPromise(script);

      this._documentRef.getNativeDocument().body.appendChild(script);

      return this._scriptLoadingPromise;
    }
  }, {
    key: "_assignScriptLoadingPromise",
    value: function _assignScriptLoadingPromise(scriptElem) {
      var _this81 = this;

      this._scriptLoadingPromise = new Promise(function (resolve, reject) {
        _this81._windowRef.getNativeWindow()[_this81.callbackName] = function () {
          resolve();
        };

        scriptElem.onerror = function (error) {
          reject(error);
        };
      });
    }
  }, {
    key: "_getScriptSrc",
    value: function _getScriptSrc(callbackName) {
      var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
      var protocol;

      switch (protocolType) {
        case GoogleMapsScriptProtocol.AUTO:
          protocol = '';
          break;

        case GoogleMapsScriptProtocol.HTTP:
          protocol = 'http:';
          break;

        case GoogleMapsScriptProtocol.HTTPS:
          protocol = 'https:';
          break;
      }

      var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
      var queryParams = {
        v: this._config.apiVersion || 'quarterly',
        callback: callbackName,
        key: this._config.apiKey,
        client: this._config.clientId,
        channel: this._config.channel,
        libraries: this._config.libraries,
        region: this._config.region,
        language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null
      };
      var params = Object.keys(queryParams).filter(function (k) {
        return queryParams[k] != null;
      }).filter(function (k) {
        // remove empty arrays
        return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
      }).map(function (k) {
        // join arrays as comma seperated strings
        var i = queryParams[k];

        if (Array.isArray(i)) {
          return {
            key: k,
            value: i.join(',')
          };
        }

        return {
          key: k,
          value: queryParams[k]
        };
      }).map(function (entry) {
        return "".concat(entry.key, "=").concat(entry.value);
      }).join('&');
      return "".concat(protocol, "//").concat(hostAndPath, "?").concat(params);
    }
  }]);

  return LazyMapsAPILoader;
}(MapsAPILoader);

LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) {
  return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"]));
};

LazyMapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: LazyMapsAPILoader,
  factory: function factory(t) {
    return LazyMapsAPILoader.ɵfac(t);
  }
});

LazyMapsAPILoader.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [LAZY_MAPS_API_CONFIG]
    }]
  }, {
    type: WindowRef
  }, {
    type: DocumentRef
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"]]
    }]
  }];
};

LazyMapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(LAZY_MAPS_API_CONFIG)), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:paramtypes", [Object, WindowRef, DocumentRef, String])], LazyMapsAPILoader);
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */

var NoOpMapsAPILoader = /*#__PURE__*/function () {
  function NoOpMapsAPILoader() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, NoOpMapsAPILoader);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NoOpMapsAPILoader, [{
    key: "load",
    value: function load() {
      if (!window.google || !window.google.maps) {
        throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
      }

      return Promise.resolve();
    }
  }]);

  return NoOpMapsAPILoader;
}(); // exported map types


var AgmCoreModule_1;
/**
 * @internal
 */

function coreDirectives() {
  return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */


var AgmCoreModule = AgmCoreModule_1 = /*#__PURE__*/function () {
  function AgmCoreModule() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AgmCoreModule);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AgmCoreModule, null, [{
    key: "forRoot",

    /**
     * Please use this method when you register the module at the root level.
     */
    value: function forRoot(lazyMapsAPILoaderConfig) {
      return {
        ngModule: AgmCoreModule_1,
        providers: [].concat(BROWSER_GLOBALS_PROVIDERS, [{
          provide: MapsAPILoader,
          useClass: LazyMapsAPILoader
        }, {
          provide: LAZY_MAPS_API_CONFIG,
          useValue: lazyMapsAPILoaderConfig
        }])
      };
    }
  }]);

  return AgmCoreModule;
}();

AgmCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AgmCoreModule
});
AgmCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  factory: function AgmCoreModule_Factory(t) {
    return new (t || AgmCoreModule)();
  }
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MapsAPILoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], null, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: MapsAPILoader
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](LayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-bicycling-layer'
    }]
  }], function () {
    return [{
      type: LayerManager
    }];
  }, {
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CircleManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-circle'
    }]
  }], function () {
    return [{
      type: CircleManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['circleDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    centerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    circleDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    radiusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    rightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](DataLayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmDataLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-data-layer'
    }]
  }], function () {
    return [{
      type: DataLayerManager
    }];
  }, {
    layerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    geoJson: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FitBoundsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: MapsAPILoader
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmFitBounds, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: '[agmFitBounds]'
    }]
  }], function () {
    return [{
      type: FitBoundsAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]
      }]
    }, {
      type: FitBoundsService
    }];
  }, {
    agmFitBounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MarkerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](InfoWindowManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }, {
      type: MarkerManager
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
    args: [{
      selector: 'agm-info-window',
      template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: InfoWindowManager
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }];
  }, {
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    infoWindowClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    disableAutoPan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](KmlLayerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-kml-layer'
    }]
  }], function () {
    return [{
      type: KmlLayerManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    preserveViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    screenOverlays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    suppressInfoWindows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    layerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    defaultViewportChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    statusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](PolygonManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](PolylineManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](RectangleManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: GoogleMapsAPIWrapper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
    args: [{
      selector: 'agm-map',
      providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
      host: {
        // todo: deprecated - we will remove it with the next version
        '[class.sebm-google-map-container]': 'true'
      },
      template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
      styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }, {
      type: GoogleMapsAPIWrapper
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["PLATFORM_ID"]]
      }]
    }, {
      type: FitBoundsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }];
  }, {
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['mapDraggable']
    }],
    disableDoubleClickZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    disableDefaultUI: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    scrollwheel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    keyboardShortcuts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    usePanning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fitBounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    scaleControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    mapTypeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    panControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    rotateControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fullscreenControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    clickableIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    showDefaultInfoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    gestureHandling: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    tilt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mapRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mapDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    centerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    boundsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mapTypeIdChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    zoomChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mapReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    tilesLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    minZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    controlSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    draggableCursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    draggingCursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zoomControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zoomControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    streetViewControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    streetViewControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fitBoundsPadding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    scaleControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    mapTypeControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    panControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    rotateControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fullscreenControlOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    restriction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-marker',
      providers: [{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(function () {
          return AgmMarker_1;
        })
      }],
      inputs: ['latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl', 'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'],
      outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut']
    }]
  }], function () {
    return [{
      type: MarkerManager
    }];
  }, {
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['markerDraggable']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    openInfoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['markerClickable']
    }],
    animationChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    markerClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    markerDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    markerRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    infoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [AgmInfoWindow]
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    iconUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-polygon'
    }]
  }], function () {
    return [{
      type: PolygonManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['polyDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    geodesic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    polyClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyPathsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmPolylineIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-polyline agm-icon-sequence'
    }]
  }], null, {
    fixedRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    repeat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    anchorX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    anchorY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmPolylinePoint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-polyline-point',
      providers: [{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(function () {
          return AgmPolylinePoint_1;
        })
      }]
    }]
  }], function () {
    return [];
  }, {
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    latitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    longitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-polyline'
    }]
  }], function () {
    return [{
      type: PolylineManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['polylineDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    geodesic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    lineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    lineRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    polyPathChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    points: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [AgmPolylinePoint]
    }],
    iconSequences: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [AgmPolylineIcon]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-rectangle'
    }]
  }], function () {
    return [{
      type: RectangleManager
    }];
  }, {
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['rectangleDraggable']
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeWeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    boundsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    rectangleDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    mouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    rightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    north: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    east: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    south: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    west: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fillColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    fillOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    strokeOpacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'agm-transit-layer'
    }]
  }], function () {
    return [{
      type: LayerManager
    }];
  }, {
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MapsAPILoader
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [LAZY_MAPS_API_CONFIG]
      }]
    }, {
      type: WindowRef
    }, {
      type: DocumentRef
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"]]
      }]
    }];
  }, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AgmCoreModule, {
    declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer],
    exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AgmCoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
    args: [{
      declarations: coreDirectives(),
      exports: coreDirectives()
    }]
  }], null, null);
})(); // main modules

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/@agm/core/node_modules/tslib/tslib.es6.js":
/*!****************************************************************!*\
  !*** ./node_modules/@agm/core/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
  \********************************************************************/
/*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return REQUIRED_VALIDATOR; });
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








/**
 * @license Angular v10.2.3
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * @publicApi
 */


var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgValueAccessor');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return CheckboxControlValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * @usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var CheckboxControlValueAccessor = /*#__PURE__*/function () {
  function CheckboxControlValueAccessor(_renderer, _elementRef) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CheckboxControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CheckboxControlValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return CheckboxControlValueAccessor;
}();

CheckboxControlValueAccessor.ɵfac = function CheckboxControlValueAccessor_Factory(t) {
  return new (t || CheckboxControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

CheckboxControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])]
});

CheckboxControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CheckboxControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
      host: {
        '(change)': 'onChange($event.target.checked)',
        '(blur)': 'onTouched()'
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return DefaultValueAccessor;
  }),
  multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */

function _isAndroid() {
  var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵgetDOM"])().getUserAgent() : '';
  return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * @description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * @publicApi
 */


var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('CompositionEventMode');
/**
 * @description
 *
 * {@searchKeywords ngDefaultControl}
 *
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * This value accessor is used by default for `<input type="text">` and `<textarea>` elements, but
 * you could also use it for custom components that have similar behavior and do not require special
 * processing. In order to attach the default value accessor to a custom element, add the
 * `ngDefaultControl` attribute as shown below.
 *
 * ```
 * <custom-input-component ngDefaultControl [(ngModel)]="value"></custom-input-component>
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var DefaultValueAccessor = /*#__PURE__*/function () {
  function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DefaultValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._compositionMode = _compositionMode;
    /**
     * The registered callback function called when an input event occurs on the input element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
    /** Whether the user is creating a composition string (IME events). */


    this._composing = false;

    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DefaultValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      var normalizedValue = value == null ? '' : value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_handleInput",
    value: function _handleInput(value) {
      if (!this._compositionMode || this._compositionMode && !this._composing) {
        this.onChange(value);
      }
    }
    /** @internal */

  }, {
    key: "_compositionStart",
    value: function _compositionStart() {
      this._composing = true;
    }
    /** @internal */

  }, {
    key: "_compositionEnd",
    value: function _compositionEnd(value) {
      this._composing = false;
      this._compositionMode && this.onChange(value);
    }
  }]);

  return DefaultValueAccessor;
}();

DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
  return new (t || DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](COMPOSITION_BUFFER_MODE, 8));
};

DefaultValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR])]
});

DefaultValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: Boolean,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](DefaultValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        '(input)': '$any(this)._handleInput($event.target.value)',
        '(blur)': 'onTouched()',
        '(compositionstart)': '$any(this)._compositionStart()',
        '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: Boolean,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [COMPOSITION_BUFFER_MODE]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * @publicApi
 */


var AbstractControlDirective = /*#__PURE__*/function () {
  function AbstractControlDirective() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControlDirective);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControlDirective, [{
    key: "reset",

    /**
     * @description
     * Resets the control with the provided value if the control is present.
     */
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (this.control) this.control.reset(value);
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */

  }, {
    key: "hasError",
    value: function hasError(errorCode, path) {
      return this.control ? this.control.hasError(errorCode, path) : false;
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */

  }, {
    key: "getError",
    value: function getError(errorCode, path) {
      return this.control ? this.control.getError(errorCode, path) : null;
    }
  }, {
    key: "value",

    /**
     * @description
     * Reports the value of the control if it is present, otherwise null.
     */
    get: function get() {
      return this.control ? this.control.value : null;
    }
    /**
     * @description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     */

  }, {
    key: "valid",
    get: function get() {
      return this.control ? this.control.valid : null;
    }
    /**
     * @description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     */

  }, {
    key: "invalid",
    get: function get() {
      return this.control ? this.control.invalid : null;
    }
    /**
     * @description
     * Reports whether a control is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     */

  }, {
    key: "pending",
    get: function get() {
      return this.control ? this.control.pending : null;
    }
    /**
     * @description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     */

  }, {
    key: "disabled",
    get: function get() {
      return this.control ? this.control.disabled : null;
    }
    /**
     * @description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     */

  }, {
    key: "enabled",
    get: function get() {
      return this.control ? this.control.enabled : null;
    }
    /**
     * @description
     * Reports the control's validation errors. If the control is not present, null is returned.
     */

  }, {
    key: "errors",
    get: function get() {
      return this.control ? this.control.errors : null;
    }
    /**
     * @description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     */

  }, {
    key: "pristine",
    get: function get() {
      return this.control ? this.control.pristine : null;
    }
    /**
     * @description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     */

  }, {
    key: "dirty",
    get: function get() {
      return this.control ? this.control.dirty : null;
    }
    /**
     * @description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */

  }, {
    key: "touched",
    get: function get() {
      return this.control ? this.control.touched : null;
    }
    /**
     * @description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     */

  }, {
    key: "status",
    get: function get() {
      return this.control ? this.control.status : null;
    }
    /**
     * @description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */

  }, {
    key: "untouched",
    get: function get() {
      return this.control ? this.control.untouched : null;
    }
    /**
     * @description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     */

  }, {
    key: "statusChanges",
    get: function get() {
      return this.control ? this.control.statusChanges : null;
    }
    /**
     * @description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     */

  }, {
    key: "valueChanges",
    get: function get() {
      return this.control ? this.control.valueChanges : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return null;
    }
  }]);

  return AbstractControlDirective;
}();

AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
  return new (t || AbstractControlDirective)();
};

AbstractControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AbstractControlDirective
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */

var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlContainer, _AbstractControlDirec);

  var _super = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ControlContainer);

  function ControlContainer() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ControlContainer);

    return _super.apply(this, arguments);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ControlContainer, [{
    key: "formDirective",

    /**
     * @description
     * The top-level form directive for the control.
     */
    get: function get() {
      return null;
    }
    /**
     * @description
     * The path to this group.
     */

  }, {
    key: "path",
    get: function get() {
      return null;
    }
  }]);

  return ControlContainer;
}(AbstractControlDirective);

ControlContainer.ɵfac = function ControlContainer_Factory(t) {
  return ɵControlContainer_BaseFactory(t || ControlContainer);
};

ControlContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ControlContainer,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵControlContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](ControlContainer);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

function unimplemented() {
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    throw new Error('unimplemented');
  }
}
/**
 * @description
 * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */


var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControl, _AbstractControlDirec2);

  var _super2 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControl);

  function NgControl() {
    var _this;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControl);

    _this = _super2.apply(this, arguments);
    /**
     * @description
     * The parent form for the control.
     *
     * @internal
     */

    _this._parent = null;
    /**
     * @description
     * The name for the control
     */

    _this.name = null;
    /**
     * @description
     * The value accessor for the control
     */

    _this.valueAccessor = null;
    /**
     * @description
     * The uncomposed array of synchronous validators for the control
     *
     * @internal
     */

    _this._rawValidators = [];
    /**
     * @description
     * The uncomposed array of async validators for the control
     *
     * @internal
     */

    _this._rawAsyncValidators = [];
    return _this;
  }
  /**
   * @description
   * The registered synchronous validator function for the control
   *
   * @throws An exception that this method is not implemented
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgControl, [{
    key: "validator",
    get: function get() {
      return unimplemented();
    }
    /**
     * @description
     * The registered async validator function for the control
     *
     * @throws An exception that this method is not implemented
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return unimplemented();
    }
  }]);

  return NgControl;
}(AbstractControlDirective);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var AbstractControlStatus = /*#__PURE__*/function () {
  function AbstractControlStatus(cd) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControlStatus);

    this._cd = cd;
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControlStatus, [{
    key: "ngClassUntouched",
    get: function get() {
      return this._cd.control ? this._cd.control.untouched : false;
    }
  }, {
    key: "ngClassTouched",
    get: function get() {
      return this._cd.control ? this._cd.control.touched : false;
    }
  }, {
    key: "ngClassPristine",
    get: function get() {
      return this._cd.control ? this._cd.control.pristine : false;
    }
  }, {
    key: "ngClassDirty",
    get: function get() {
      return this._cd.control ? this._cd.control.dirty : false;
    }
  }, {
    key: "ngClassValid",
    get: function get() {
      return this._cd.control ? this._cd.control.valid : false;
    }
  }, {
    key: "ngClassInvalid",
    get: function get() {
      return this._cd.control ? this._cd.control.invalid : false;
    }
  }, {
    key: "ngClassPending",
    get: function get() {
      return this._cd.control ? this._cd.control.pending : false;
    }
  }]);

  return AbstractControlStatus;
}();

var ngControlStatusHost = {
  '[class.ng-untouched]': 'ngClassUntouched',
  '[class.ng-touched]': 'ngClassTouched',
  '[class.ng-pristine]': 'ngClassPristine',
  '[class.ng-dirty]': 'ngClassDirty',
  '[class.ng-valid]': 'ngClassValid',
  '[class.ng-invalid]': 'ngClassInvalid',
  '[class.ng-pending]': 'ngClassPending'
};
/**
 * @description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * @usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControlStatus, _AbstractControlStatu);

  var _super3 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControlStatus);

  function NgControlStatus(cd) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControlStatus);

    return _super3.call(this, cd);
  }

  return NgControlStatus;
}(AbstractControlStatus);

NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
  return new (t || NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NgControl, 2));
};

NgControlStatus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgControlStatus.ctorParameters = function () {
  return [{
    type: NgControl,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgControlStatus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControlName],[ngModel],[formControl]',
      host: ngControlStatusHost
    }]
  }], function () {
    return [{
      type: NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }]
    }];
  }, null);
})();
/**
 * @description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @see `NgControlStatus`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControlStatusGroup, _AbstractControlStatu2);

  var _super4 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControlStatusGroup);

  function NgControlStatusGroup(cd) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControlStatusGroup);

    return _super4.call(this, cd);
  }

  return NgControlStatusGroup;
}(AbstractControlStatus);

NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
  return new (t || NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 2));
};

NgControlStatusGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgControlStatusGroup.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgControlStatusGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
      host: ngControlStatusHost
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function isEmptyInputValue(value) {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

function hasValidLength(value) {
  // non-strict comparison is intentional, to check for both `null` and `undefined` values
  return value != null && typeof value.length === 'number';
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with
 * `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * @publicApi
 */


var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with
 * `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * @publicApi
 */

var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgAsyncValidators');
/**
 * A regular expression that matches valid e-mail addresses.
 *
 * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
 * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
 *   punctuation symbols).
 * - `local-part` cannot begin or end with a period (`.`).
 * - `local-part` cannot be longer than 64 characters.
 * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
 *   `foo.com`.
 * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
 *   periods (`.`)).
 * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
 * - A `label` cannot be longer than 63 characters.
 * - The whole address cannot be longer than 254 characters.
 *
 * ## Implementation background
 *
 * This regexp was ported over from AngularJS (see there for git history):
 * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
 * It is based on the
 * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
 * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
 * lengths of different parts of the address). The main differences from the WHATWG version are:
 *   - Disallow `local-part` to begin or end with a period (`.`).
 *   - Disallow `local-part` length to exceed 64 characters.
 *   - Disallow total address length to exceed 254 characters.
 *
 * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
 */

var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * @publicApi
 */

var Validators = /*#__PURE__*/function () {
  function Validators() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Validators);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Validators, null, [{
    key: "min",

    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    value: function min(_min) {
      return function (control) {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

        return !isNaN(value) && value < _min ? {
          'min': {
            'min': _min,
            'actual': control.value
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "max",
    value: function max(_max) {
      return function (control) {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

        return !isNaN(value) && value > _max ? {
          'max': {
            'max': _max,
            'actual': control.value
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "required",
    value: function required(control) {
      return isEmptyInputValue(control.value) ? {
        'required': true
      } : null;
    }
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "requiredTrue",
    value: function requiredTrue(control) {
      return control.value === true ? null : {
        'required': true
      };
    }
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * Tests the value using a [regular
     * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
     * pattern suitable for common usecases. The pattern is based on the definition of a valid email
     * address in the [WHATWG HTML
     * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address).
     *
     * The differences from the WHATWG version include:
     * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
     * - Disallow `local-part` to be longer than 64 characters.
     * - Disallow the whole address to be longer than 254 characters.
     *
     * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
     * validate the value against a different pattern.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "email",
    value: function email(control) {
      if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
      }

      return EMAIL_REGEXP.test(control.value) ? null : {
        'email': true
      };
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays. The
     * `minLength` validator logic is also not invoked for values when their `length` property is 0
     * (for example in case of an empty string or an empty array), to support optional controls. You
     * can use the standard `required` validator if empty values should not be considered valid.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "minLength",
    value: function minLength(_minLength) {
      return function (control) {
        if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
          // don't validate empty values to allow optional controls
          // don't validate values without `length` property
          return null;
        }

        return control.value.length < _minLength ? {
          'minlength': {
            'requiredLength': _minLength,
            'actualLength': control.value.length
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "maxLength",
    value: function maxLength(_maxLength) {
      return function (control) {
        return hasValidLength(control.value) && control.value.length > _maxLength ? {
          'maxlength': {
            'requiredLength': _maxLength,
            'actualLength': control.value.length
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * ### Pattern matching with the global or sticky flag
     *
     * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
     * can produce different results on the same input when validations are run consecutively. This is
     * due to how the behavior of `RegExp.prototype.test` is
     * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
     * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
     * Due to this behavior, it is recommended that when using
     * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
     * flag enabled.
     *
     * ```typescript
     * // Not recommended (since the `g` flag is used)
     * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
     *
     * // Good
     * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
     * ```
     *
     * @param pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "pattern",
    value: function pattern(_pattern) {
      if (!_pattern) return Validators.nullValidator;
      var regex;
      var regexStr;

      if (typeof _pattern === 'string') {
        regexStr = '';
        if (_pattern.charAt(0) !== '^') regexStr += '^';
        regexStr += _pattern;
        if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
        regex = new RegExp(regexStr);
      } else {
        regexStr = _pattern.toString();
        regex = _pattern;
      }

      return function (control) {
        if (isEmptyInputValue(control.value)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = control.value;
        return regex.test(value) ? null : {
          'pattern': {
            'requiredPattern': regexStr,
            'actualValue': value
          }
        };
      };
    }
    /**
     * @description
     * Validator that performs no operation.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "nullValidator",
    value: function nullValidator(control) {
      return null;
    }
  }, {
    key: "compose",
    value: function compose(validators) {
      if (!validators) return null;
      var presentValidators = validators.filter(isPresent);
      if (presentValidators.length == 0) return null;
      return function (control) {
        return mergeErrors(executeValidators(control, presentValidators));
      };
    }
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "composeAsync",
    value: function composeAsync(validators) {
      if (!validators) return null;
      var presentValidators = validators.filter(isPresent);
      if (presentValidators.length == 0) return null;
      return function (control) {
        var observables = executeValidators(control, presentValidators).map(toObservable);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(mergeErrors));
      };
    }
  }]);

  return Validators;
}();

function isPresent(o) {
  return o != null;
}

function toObservable(r) {
  var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(r) : r;

  if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵisObservable"])(obs) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
    throw new Error("Expected validator to return Promise or Observable.");
  }

  return obs;
}

function mergeErrors(arrayOfErrors) {
  var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  arrayOfErrors.forEach(function (errors) {
    res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}

function executeValidators(control, validators) {
  return validators.map(function (validator) {
    return validator(control);
  });
}

function isValidatorFn(validator) {
  return !validator.validate;
}
/**
 * Given the list of validators that may contain both functions as well as classes, return the list
 * of validator functions (convert validator classes into validator functions). This is needed to
 * have consistent structure in validators list before composing them.
 *
 * @param validators The set of validators that may contain validators both in plain function form
 *     as well as represented as a validator class.
 */


function normalizeValidators(validators) {
  return validators.map(function (validator) {
    return isValidatorFn(validator) ? validator : function (c) {
      return validator.validate(c);
    };
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NumberValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var NumberValueAccessor = /*#__PURE__*/function () {
  function NumberValueAccessor(_renderer, _elementRef) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NumberValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * The registered callback function called when a change or input event occurs on the input
     * element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NumberValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
      var normalizedValue = value == null ? '' : value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = function (value) {
        fn(value == '' ? null : parseFloat(value));
      };
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return NumberValueAccessor;
}();

NumberValueAccessor.ɵfac = function NumberValueAccessor_Factory(t) {
  return new (t || NumberValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

NumberValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR])]
});

NumberValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NumberValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
      host: {
        '(input)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RadioControlValueAccessor;
  }),
  multi: true
};

function throwNameError() {
  throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
}
/**
 * @description
 * Class used by Angular to track radio buttons. For internal use only.
 */


var RadioControlRegistry = /*#__PURE__*/function () {
  function RadioControlRegistry() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RadioControlRegistry);

    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RadioControlRegistry, [{
    key: "add",
    value: function add(control, accessor) {
      this._accessors.push([control, accessor]);
    }
    /**
     * @description
     * Removes a control from the internal registry. For internal use only.
     */

  }, {
    key: "remove",
    value: function remove(accessor) {
      for (var i = this._accessors.length - 1; i >= 0; --i) {
        if (this._accessors[i][1] === accessor) {
          this._accessors.splice(i, 1);

          return;
        }
      }
    }
    /**
     * @description
     * Selects a radio button. For internal use only.
     */

  }, {
    key: "select",
    value: function select(accessor) {
      var _this2 = this;

      this._accessors.forEach(function (c) {
        if (_this2._isSameGroup(c, accessor) && c[1] !== accessor) {
          c[1].fireUncheck(accessor.value);
        }
      });
    }
  }, {
    key: "_isSameGroup",
    value: function _isSameGroup(controlPair, accessor) {
      if (!controlPair[0].control) return false;
      return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
    }
  }]);

  return RadioControlRegistry;
}();

RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
  return new (t || RadioControlRegistry)();
};

RadioControlRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: RadioControlRegistry,
  factory: RadioControlRegistry.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RadioControlRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * @description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var RadioControlValueAccessor = /*#__PURE__*/function () {
  function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RadioControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._registry = _registry;
    this._injector = _injector;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */

    this.onChange = function () {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
  }
  /** @nodoc */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RadioControlValueAccessor, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._control = this._injector.get(NgControl);

      this._checkName();

      this._registry.add(this._control, this);
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._registry.remove(this);
    }
    /**
     * Sets the "checked" property value on the radio input element.
     * @nodoc
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this._state = value === this.value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this3 = this;

      this._fn = fn;

      this.onChange = function () {
        fn(_this3.value);

        _this3._registry.select(_this3);
      };
    }
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param value
     */

  }, {
    key: "fireUncheck",
    value: function fireUncheck(value) {
      this.writeValue(value);
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }, {
    key: "_checkName",
    value: function _checkName() {
      if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwNameError();
      }

      if (!this.name && this.formControlName) this.name = this.formControlName;
    }
  }]);

  return RadioControlValueAccessor;
}();

RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
  return new (t || RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]));
};

RadioControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR])]
});

RadioControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: RadioControlRegistry
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]
  }];
};

RadioControlValueAccessor.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  formControlName: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RadioControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
      host: {
        '(change)': 'onChange()',
        '(blur)': 'onTouched()'
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: RadioControlRegistry
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RangeValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var RangeValueAccessor = /*#__PURE__*/function () {
  function RangeValueAccessor(_renderer, _elementRef) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RangeValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * The registered callback function called when a change or input event occurs on the input
     * element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RangeValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = function (value) {
        fn(value == '' ? null : parseFloat(value));
      };
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the range input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return RangeValueAccessor;
}();

RangeValueAccessor.ɵfac = function RangeValueAccessor_Factory(t) {
  return new (t || RangeValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

RangeValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR])]
});

RangeValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RangeValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
      host: {
        '(change)': 'onChange($event.target.value)',
        '(input)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var FormErrorExamples = {
  formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
  formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
  formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
  ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
  ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ReactiveErrors = /*#__PURE__*/function () {
  function ReactiveErrors() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ReactiveErrors);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ReactiveErrors, null, [{
    key: "controlParentException",
    value: function controlParentException() {
      throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
    }
  }, {
    key: "ngModelGroupException",
    value: function ngModelGroupException() {
      throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
    }
  }, {
    key: "missingFormException",
    value: function missingFormException() {
      throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
    }
  }, {
    key: "groupParentException",
    value: function groupParentException() {
      throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
    }
  }, {
    key: "arrayParentException",
    value: function arrayParentException() {
      throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
    }
  }, {
    key: "disabledAttrWarning",
    value: function disabledAttrWarning() {
      console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    }
  }, {
    key: "ngModelWarning",
    value: function ngModelWarning(directiveName) {
      console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
    }
  }]);

  return ReactiveErrors;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return SelectControlValueAccessor;
  }),
  multi: true
};

function _buildValueString(id, value) {
  if (id == null) return "".concat(value);
  if (value && typeof value === 'object') value = 'Object';
  return "".concat(id, ": ").concat(value).slice(0, 50);
}

function _extractId(valueString) {
  return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var SelectControlValueAccessor = /*#__PURE__*/function () {
  function SelectControlValueAccessor(_renderer, _elementRef) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SelectControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /** @internal */

    this._optionMap = new Map();
    /** @internal */

    this._idCounter = 0;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};

    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SelectControlValueAccessor, [{
    key: "writeValue",

    /**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     * @nodoc
     */
    value: function writeValue(value) {
      this.value = value;

      var id = this._getOptionId(value);

      if (id == null) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
      }

      var valueString = _buildValueString(id, value);

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this4 = this;

      this.onChange = function (valueString) {
        _this4.value = _this4._getOptionValue(valueString);
        fn(_this4.value);
      };
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the select input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_registerOption",
    value: function _registerOption() {
      return (this._idCounter++).toString();
    }
    /** @internal */

  }, {
    key: "_getOptionId",
    value: function _getOptionId(value) {
      for (var _i = 0, _Array$from = Array.from(this._optionMap.keys()); _i < _Array$from.length; _i++) {
        var id = _Array$from[_i];
        if (this._compareWith(this._optionMap.get(id), value)) return id;
      }

      return null;
    }
    /** @internal */

  }, {
    key: "_getOptionValue",
    value: function _getOptionValue(valueString) {
      var id = _extractId(valueString);

      return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
  }, {
    key: "compareWith",
    set: function set(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
      }

      this._compareWith = fn;
    }
  }]);

  return SelectControlValueAccessor;
}();

SelectControlValueAccessor.ɵfac = function SelectControlValueAccessor_Factory(t) {
  return new (t || SelectControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

SelectControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR])]
});

SelectControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};

SelectControlValueAccessor.propDecorators = {
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SelectControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
      host: {
        '(change)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, {
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var NgSelectOption = /*#__PURE__*/function () {
  function NgSelectOption(_element, _renderer, _select) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgSelectOption);

    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgSelectOption, [{
    key: "_setElementValue",

    /** @internal */
    value: function _setElementValue(value) {
      this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);

        this._select.writeValue(this._select.value);
      }
    }
  }, {
    key: "ngValue",
    set: function set(value) {
      if (this._select == null) return;

      this._select._optionMap.set(this.id, value);

      this._setElementValue(_buildValueString(this.id, value));

      this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */

  }, {
    key: "value",
    set: function set(value) {
      this._setElementValue(value);

      if (this._select) this._select.writeValue(this._select.value);
    }
  }]);

  return NgSelectOption;
}();

NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
  return new (t || NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](SelectControlValueAccessor, 9));
};

NgSelectOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});

NgSelectOption.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }];
};

NgSelectOption.propDecorators = {
  ngValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngValue']
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['value']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgSelectOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'option'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: SelectControlValueAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }];
  }, {
    ngValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngValue']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['value']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return SelectMultipleControlValueAccessor;
  }),
  multi: true
};

function _buildValueString$1(id, value) {
  if (id == null) return "".concat(value);
  if (typeof value === 'string') value = "'".concat(value, "'");
  if (value && typeof value === 'object') value = 'Object';
  return "".concat(id, ": ").concat(value).slice(0, 50);
}

function _extractId$1(valueString) {
  return valueString.split(':')[0];
}
/** Mock interface for HTMLCollection */


var HTMLCollection = function HTMLCollection() {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HTMLCollection);
};
/**
 * @description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
 * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
  function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SelectMultipleControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /** @internal */

    this._optionMap = new Map();
    /** @internal */

    this._idCounter = 0;
    /**
     * The registered callback function called when a change event occurs on the input element.
     * @nodoc
     */

    this.onChange = function (_) {};
    /**
     * The registered callback function called when a blur event occurs on the input element.
     * @nodoc
     */


    this.onTouched = function () {};

    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SelectMultipleControlValueAccessor, [{
    key: "writeValue",

    /**
     * Sets the "value" property on one or of more of the select's options.
     * @nodoc
     */
    value: function writeValue(value) {
      var _this5 = this;

      this.value = value;
      var optionSelectedStateSetter;

      if (Array.isArray(value)) {
        // convert values to ids
        var ids = value.map(function (v) {
          return _this5._getOptionId(v);
        });

        optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
          opt._setSelected(ids.indexOf(o.toString()) > -1);
        };
      } else {
        optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
          opt._setSelected(false);
        };
      }

      this._optionMap.forEach(optionSelectedStateSetter);
    }
    /**
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     * @nodoc
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this6 = this;

      this.onChange = function (_) {
        var selected = [];

        if (_.selectedOptions !== undefined) {
          var options = _.selectedOptions;

          for (var i = 0; i < options.length; i++) {
            var opt = options.item(i);

            var val = _this6._getOptionValue(opt.value);

            selected.push(val);
          }
        } // Degrade on IE
        else {
            var _options = _.options;

            for (var _i2 = 0; _i2 < _options.length; _i2++) {
              var _opt = _options.item(_i2);

              if (_opt.selected) {
                var _val = _this6._getOptionValue(_opt.value);

                selected.push(_val);
              }
            }
          }

        _this6.value = selected;
        fn(selected);
      };
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the select input element.
     * @nodoc
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_registerOption",
    value: function _registerOption(value) {
      var id = (this._idCounter++).toString();

      this._optionMap.set(id, value);

      return id;
    }
    /** @internal */

  }, {
    key: "_getOptionId",
    value: function _getOptionId(value) {
      for (var _i3 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i3 < _Array$from2.length; _i3++) {
        var id = _Array$from2[_i3];
        if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
      }

      return null;
    }
    /** @internal */

  }, {
    key: "_getOptionValue",
    value: function _getOptionValue(valueString) {
      var id = _extractId$1(valueString);

      return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    }
  }, {
    key: "compareWith",
    set: function set(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
      }

      this._compareWith = fn;
    }
  }]);

  return SelectMultipleControlValueAccessor;
}();

SelectMultipleControlValueAccessor.ɵfac = function SelectMultipleControlValueAccessor_Factory(t) {
  return new (t || SelectMultipleControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

SelectMultipleControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR])]
});

SelectMultipleControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};

SelectMultipleControlValueAccessor.propDecorators = {
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SelectMultipleControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
      host: {
        '(change)': 'onChange($event.target)',
        '(blur)': 'onTouched()'
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, {
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
  function ɵNgSelectMultipleOption(_element, _renderer, _select) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵNgSelectMultipleOption);

    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;

    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ɵNgSelectMultipleOption, [{
    key: "_setElementValue",

    /** @internal */
    value: function _setElementValue(value) {
      this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @internal */

  }, {
    key: "_setSelected",
    value: function _setSelected(selected) {
      this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);

        this._select.writeValue(this._select.value);
      }
    }
  }, {
    key: "ngValue",
    set: function set(value) {
      if (this._select == null) return;
      this._value = value;

      this._setElementValue(_buildValueString$1(this.id, value));

      this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */

  }, {
    key: "value",
    set: function set(value) {
      if (this._select) {
        this._value = value;

        this._setElementValue(_buildValueString$1(this.id, value));

        this._select.writeValue(this._select.value);
      } else {
        this._setElementValue(value);
      }
    }
  }]);

  return ɵNgSelectMultipleOption;
}();

ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
  return new (t || ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](SelectMultipleControlValueAccessor, 9));
};

ɵNgSelectMultipleOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ɵNgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});

ɵNgSelectMultipleOption.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }];
};

ɵNgSelectMultipleOption.propDecorators = {
  ngValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngValue']
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['value']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵNgSelectMultipleOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'option'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: SelectMultipleControlValueAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }];
  }, {
    ngValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngValue']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['value']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function controlPath(name, parent) {
  return [].concat(Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(parent.path), [name]);
}

function setUpControl(control, dir) {
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (!control) _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
  }

  control.validator = Validators.compose([control.validator, dir.validator]);
  control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
  dir.valueAccessor.writeValue(control.value);
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);

  if (dir.valueAccessor.setDisabledState) {
    control.registerOnDisabledChange(function (isDisabled) {
      dir.valueAccessor.setDisabledState(isDisabled);
    });
  } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


  dir._rawValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
      return control.updateValueAndValidity();
    });
  });

  dir._rawAsyncValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
      return control.updateValueAndValidity();
    });
  });
}

function cleanUpControl(control, dir) {
  var noop = function noop() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      _noControlError(dir);
    }
  };

  dir.valueAccessor.registerOnChange(noop);
  dir.valueAccessor.registerOnTouched(noop);

  dir._rawValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) {
      validator.registerOnValidatorChange(null);
    }
  });

  dir._rawAsyncValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) {
      validator.registerOnValidatorChange(null);
    }
  });

  if (control) control._clearChangeFns();
}

function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange(function (newValue) {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === 'change') updateControl(control, dir);
  });
}

function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(function () {
    control._pendingTouched = true;
    if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== 'submit') control.markAsTouched();
  });
}

function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}

function setUpModelChangePipeline(control, dir) {
  control.registerOnChange(function (newValue, emitModelEvent) {
    // control -> view
    dir.valueAccessor.writeValue(newValue); // control -> ngModel

    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  });
}

function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Cannot find control with');
  control.validator = Validators.compose([control.validator, dir.validator]);
  control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}

function _noControlError(dir) {
  return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}

function _throwError(dir, message) {
  var messageEnd;

  if (dir.path.length > 1) {
    messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
  } else if (dir.path[0]) {
    messageEnd = "name: '".concat(dir.path, "'");
  } else {
    messageEnd = 'unspecified name attribute';
  }

  throw new Error("".concat(message, " ").concat(messageEnd));
}

function composeValidators(validators) {
  return validators != null ? Validators.compose(normalizeValidators(validators)) : null;
}

function composeAsyncValidators(validators) {
  return validators != null ? Validators.composeAsync(normalizeValidators(validators)) : null;
}

function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty('model')) return false;
  var change = changes['model'];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}

var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];

function isBuiltInAccessor(valueAccessor) {
  return BUILTIN_ACCESSORS.some(function (a) {
    return valueAccessor.constructor === a;
  });
}

function syncPendingControls(form, directives) {
  form._syncPendingControls();

  directives.forEach(function (dir) {
    var control = dir.control;

    if (control.updateOn === 'submit' && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
} // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
  var defaultAccessor = undefined;
  var builtinAccessor = undefined;
  var customAccessor = undefined;
  valueAccessors.forEach(function (v) {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one built-in value accessor matches form control with');
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one custom value accessor matches form control with');
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;

  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    _throwError(dir, 'No valid value accessor for form control with');
  }

  return null;
}

function removeDir(list, el) {
  var index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
} // TODO(kara): remove after deprecation period


function _ngModelWarning(name, type, instance, warningConfig) {
  if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["isDevMode"])() || warningConfig === 'never') return;

  if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      ReactiveErrors.ngModelWarning(name);
    }

    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */


var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */

var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */

var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */

var DISABLED = 'DISABLED';

function _find(control, path, delimiter) {
  if (path == null) return null;

  if (!Array.isArray(path)) {
    path = path.split(delimiter);
  }

  if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var controlToFind = control;
  path.forEach(function (name) {
    if (controlToFind instanceof FormGroup) {
      controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
    } else if (controlToFind instanceof FormArray) {
      controlToFind = controlToFind.at(name) || null;
    } else {
      controlToFind = null;
    }
  });
  return controlToFind;
}
/**
 * Gets validators from either an options object or given validators.
 */


function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
/**
 * Creates validator function by combining provided validators.
 */


function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * Gets async validators from either an options object or given validators.
 */


function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
/**
 * Creates async validator function by combining provided async validators.
 */


function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}

function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * @publicApi
 */


var AbstractControl = /*#__PURE__*/function () {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  function AbstractControl(validators, asyncValidators) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControl);

    /**
     * Indicates that a control has its own pending asynchronous validation in progress.
     *
     * @internal
     */
    this._hasOwnPendingAsyncValidator = false;
    /** @internal */

    this._onCollectionChange = function () {};
    /**
     * A control is `pristine` if the user has not yet changed
     * the value in the UI.
     *
     * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
     * Programmatic changes to a control's value do not mark it dirty.
     */


    this.pristine = true;
    /**
     * True if the control is marked as `touched`.
     *
     * A control is marked `touched` once the user has triggered
     * a `blur` event on it.
     */

    this.touched = false;
    /** @internal */

    this._onDisabledChange = [];
    this._rawValidators = validators;
    this._rawAsyncValidators = asyncValidators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
  /**
   * The function that is used to determine the validity of this control synchronously.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControl, [{
    key: "setValidators",

    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */
    value: function setValidators(newValidator) {
      this._rawValidators = newValidator;
      this._composedValidatorFn = coerceToValidator(newValidator);
    }
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "setAsyncValidators",
    value: function setAsyncValidators(newValidator) {
      this._rawAsyncValidators = newValidator;
      this._composedAsyncValidatorFn = coerceToAsyncValidator(newValidator);
    }
    /**
     * Empties out the sync validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "clearValidators",
    value: function clearValidators() {
      this.validator = null;
    }
    /**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "clearAsyncValidators",
    value: function clearAsyncValidators() {
      this.asyncValidator = null;
    }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see `markAsUntouched()`
     * @see `markAsDirty()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsTouched",
    value: function markAsTouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = true;

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsTouched(opts);
      }
    }
    /**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     */

  }, {
    key: "markAllAsTouched",
    value: function markAllAsTouched() {
      this.markAsTouched({
        onlySelf: true
      });

      this._forEachChild(function (control) {
        return control.markAllAsTouched();
      });
    }
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see `markAsTouched()`
     * @see `markAsDirty()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsUntouched",
    value: function markAsUntouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = false;
      this._pendingTouched = false;

      this._forEachChild(function (control) {
        control.markAsUntouched({
          onlySelf: true
        });
      });

      if (this._parent && !opts.onlySelf) {
        this._parent._updateTouched(opts);
      }
    }
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see `markAsTouched()`
     * @see `markAsUntouched()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsDirty",
    value: function markAsDirty() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = false;

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsDirty(opts);
      }
    }
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see `markAsTouched()`
     * @see `markAsUntouched()`
     * @see `markAsDirty()`
     *
     * @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsPristine",
    value: function markAsPristine() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = true;
      this._pendingDirty = false;

      this._forEachChild(function (control) {
        control.markAsPristine({
          onlySelf: true
        });
      });

      if (this._parent && !opts.onlySelf) {
        this._parent._updatePristine(opts);
      }
    }
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */

  }, {
    key: "markAsPending",
    value: function markAsPending() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.status = PENDING;

      if (opts.emitEvent !== false) {
        this.statusChanges.emit(this.status);
      }

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsPending(opts);
      }
    }
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */

  }, {
    key: "disable",
    value: function disable() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // If parent has been marked artificially dirty we don't want to re-calculate the
      // parent's dirtiness based on the children.
      var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

      this.status = DISABLED;
      this.errors = null;

      this._forEachChild(function (control) {
        control.disable(Object.assign(Object.assign({}, opts), {
          onlySelf: true
        }));
      });

      this._updateValue();

      if (opts.emitEvent !== false) {
        this.valueChanges.emit(this.value);
        this.statusChanges.emit(this.status);
      }

      this._updateAncestors(Object.assign(Object.assign({}, opts), {
        skipPristineCheck: skipPristineCheck
      }));

      this._onDisabledChange.forEach(function (changeFn) {
        return changeFn(true);
      });
    }
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */

  }, {
    key: "enable",
    value: function enable() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // If parent has been marked artificially dirty we don't want to re-calculate the
      // parent's dirtiness based on the children.
      var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

      this.status = VALID;

      this._forEachChild(function (control) {
        control.enable(Object.assign(Object.assign({}, opts), {
          onlySelf: true
        }));
      });

      this.updateValueAndValidity({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });

      this._updateAncestors(Object.assign(Object.assign({}, opts), {
        skipPristineCheck: skipPristineCheck
      }));

      this._onDisabledChange.forEach(function (changeFn) {
        return changeFn(false);
      });
    }
  }, {
    key: "_updateAncestors",
    value: function _updateAncestors(opts) {
      if (this._parent && !opts.onlySelf) {
        this._parent.updateValueAndValidity(opts);

        if (!opts.skipPristineCheck) {
          this._parent._updatePristine();
        }

        this._parent._updateTouched();
      }
    }
    /**
     * @param parent Sets the parent of the control
     */

  }, {
    key: "setParent",
    value: function setParent(parent) {
      this._parent = parent;
    }
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */

  }, {
    key: "updateValueAndValidity",
    value: function updateValueAndValidity() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._setInitialStatus();

      this._updateValue();

      if (this.enabled) {
        this._cancelExistingSubscription();

        this.errors = this._runValidator();
        this.status = this._calculateStatus();

        if (this.status === VALID || this.status === PENDING) {
          this._runAsyncValidator(opts.emitEvent);
        }
      }

      if (opts.emitEvent !== false) {
        this.valueChanges.emit(this.value);
        this.statusChanges.emit(this.status);
      }

      if (this._parent && !opts.onlySelf) {
        this._parent.updateValueAndValidity(opts);
      }
    }
    /** @internal */

  }, {
    key: "_updateTreeValidity",
    value: function _updateTreeValidity() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        emitEvent: true
      };

      this._forEachChild(function (ctrl) {
        return ctrl._updateTreeValidity(opts);
      });

      this.updateValueAndValidity({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    }
  }, {
    key: "_setInitialStatus",
    value: function _setInitialStatus() {
      this.status = this._allControlsDisabled() ? DISABLED : VALID;
    }
  }, {
    key: "_runValidator",
    value: function _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
  }, {
    key: "_runAsyncValidator",
    value: function _runAsyncValidator(emitEvent) {
      var _this7 = this;

      if (this.asyncValidator) {
        this.status = PENDING;
        this._hasOwnPendingAsyncValidator = true;
        var obs = toObservable(this.asyncValidator(this));
        this._asyncValidationSubscription = obs.subscribe(function (errors) {
          _this7._hasOwnPendingAsyncValidator = false; // This will trigger the recalculation of the validation status, which depends on
          // the state of the asynchronous validation (whether it is in progress or not). So, it is
          // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.

          _this7.setErrors(errors, {
            emitEvent: emitEvent
          });
        });
      }
    }
  }, {
    key: "_cancelExistingSubscription",
    value: function _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();

        this._hasOwnPendingAsyncValidator = false;
      }
    }
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     *
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */

  }, {
    key: "setErrors",
    value: function setErrors(errors) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.errors = errors;

      this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */

  }, {
    key: "get",
    value: function get(path) {
      return _find(this, path, '.');
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */

  }, {
    key: "getError",
    value: function getError(errorCode, path) {
      var control = path ? this.get(path) : this;
      return control && control.errors ? control.errors[errorCode] : null;
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */

  }, {
    key: "hasError",
    value: function hasError(errorCode, path) {
      return !!this.getError(errorCode, path);
    }
    /**
     * Retrieves the top-level ancestor of this control.
     */

  }, {
    key: "_updateControlsErrors",

    /** @internal */
    value: function _updateControlsErrors(emitEvent) {
      this.status = this._calculateStatus();

      if (emitEvent) {
        this.statusChanges.emit(this.status);
      }

      if (this._parent) {
        this._parent._updateControlsErrors(emitEvent);
      }
    }
    /** @internal */

  }, {
    key: "_initObservables",
    value: function _initObservables() {
      this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
      this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
  }, {
    key: "_calculateStatus",
    value: function _calculateStatus() {
      if (this._allControlsDisabled()) return DISABLED;
      if (this.errors) return INVALID;
      if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
      if (this._anyControlsHaveStatus(INVALID)) return INVALID;
      return VALID;
    }
    /** @internal */

  }, {
    key: "_anyControlsHaveStatus",
    value: function _anyControlsHaveStatus(status) {
      return this._anyControls(function (control) {
        return control.status === status;
      });
    }
    /** @internal */

  }, {
    key: "_anyControlsDirty",
    value: function _anyControlsDirty() {
      return this._anyControls(function (control) {
        return control.dirty;
      });
    }
    /** @internal */

  }, {
    key: "_anyControlsTouched",
    value: function _anyControlsTouched() {
      return this._anyControls(function (control) {
        return control.touched;
      });
    }
    /** @internal */

  }, {
    key: "_updatePristine",
    value: function _updatePristine() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = !this._anyControlsDirty();

      if (this._parent && !opts.onlySelf) {
        this._parent._updatePristine(opts);
      }
    }
    /** @internal */

  }, {
    key: "_updateTouched",
    value: function _updateTouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = this._anyControlsTouched();

      if (this._parent && !opts.onlySelf) {
        this._parent._updateTouched(opts);
      }
    }
    /** @internal */

  }, {
    key: "_isBoxedValue",
    value: function _isBoxedValue(formState) {
      return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    }
    /** @internal */

  }, {
    key: "_registerOnCollectionChange",
    value: function _registerOnCollectionChange(fn) {
      this._onCollectionChange = fn;
    }
    /** @internal */

  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy(opts) {
      if (isOptionsObj(opts) && opts.updateOn != null) {
        this._updateOn = opts.updateOn;
      }
    }
    /**
     * Check to see if parent has been marked artificially dirty.
     *
     * @internal
     */

  }, {
    key: "_parentMarkedDirty",
    value: function _parentMarkedDirty(onlySelf) {
      var parentDirty = this._parent && this._parent.dirty;
      return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
    }
  }, {
    key: "validator",
    get: function get() {
      return this._composedValidatorFn;
    },
    set: function set(validatorFn) {
      this._rawValidators = this._composedValidatorFn = validatorFn;
    }
    /**
     * The function that is used to determine the validity of this control asynchronously.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return this._composedAsyncValidatorFn;
    },
    set: function set(asyncValidatorFn) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
    }
    /**
     * The parent control.
     */

  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control has passed all of its validation tests,
     * false otherwise.
     */

  }, {
    key: "valid",
    get: function get() {
      return this.status === VALID;
    }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control has failed one or more of its validation checks,
     * false otherwise.
     */

  }, {
    key: "invalid",
    get: function get() {
      return this.status === INVALID;
    }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control is in the process of conducting a validation check,
     * false otherwise.
     */

  }, {
    key: "pending",
    get: function get() {
      return this.status == PENDING;
    }
    /**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control is disabled, false otherwise.
     */

  }, {
    key: "disabled",
    get: function get() {
      return this.status === DISABLED;
    }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @returns True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     * @see {@link AbstractControl.status}
     *
     */

  }, {
    key: "enabled",
    get: function get() {
      return this.status !== DISABLED;
    }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */

  }, {
    key: "dirty",
    get: function get() {
      return !this.pristine;
    }
    /**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     */

  }, {
    key: "untouched",
    get: function get() {
      return !this.touched;
    }
    /**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     */

  }, {
    key: "updateOn",
    get: function get() {
      return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
    }
  }, {
    key: "root",
    get: function get() {
      var x = this;

      while (x._parent) {
        x = x._parent;
      }

      return x;
    }
  }]);

  return AbstractControl;
}();
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events. See [usage examples below](#usage-notes).
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * @publicApi
 */


var FormControl = /*#__PURE__*/function (_AbstractControl) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControl, _AbstractControl);

  var _super5 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControl);

  /**
   * Creates a new `FormControl` instance.
   *
   * @param formState Initializes the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormControl() {
    var _this8;

    var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
    var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControl);

    _this8 = _super5.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    /** @internal */

    _this8._onChange = [];

    _this8._applyFormState(formState);

    _this8._setUpdateStrategy(validatorOrOpts);

    _this8.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    _this8._initObservables();

    return _this8;
  }
  /**
   * Sets a new value for the form control.
   *
   * @param value The new value for the control.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
   * `onChange` event to
   * update the view.
   * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
   * `ngModelChange`
   * event to update the model.
   *
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControl, [{
    key: "setValue",
    value: function setValue(value) {
      var _this9 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.value = this._pendingValue = value;

      if (this._onChange.length && options.emitModelToViewChange !== false) {
        this._onChange.forEach(function (changeFn) {
          return changeFn(_this9.value, options.emitViewToModelChange !== false);
        });
      }

      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.setValue(value, options);
    }
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */

  }, {
    key: "reset",
    value: function reset() {
      var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._applyFormState(formState);

      this.markAsPristine(options);
      this.markAsUntouched(options);
      this.setValue(this.value, options);
      this._pendingChange = false;
    }
    /**
     * @internal
     */

  }, {
    key: "_updateValue",
    value: function _updateValue() {}
    /**
     * @internal
     */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      return false;
    }
    /**
     * @internal
     */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      return this.disabled;
    }
    /**
     * Register a listener for change events.
     *
     * @param fn The method that is called when the value changes
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange.push(fn);
    }
    /**
     * @internal
     */

  }, {
    key: "_clearChangeFns",
    value: function _clearChangeFns() {
      this._onChange = [];
      this._onDisabledChange = [];

      this._onCollectionChange = function () {};
    }
    /**
     * Register a listener for disabled events.
     *
     * @param fn The method that is called when the disabled status changes.
     */

  }, {
    key: "registerOnDisabledChange",
    value: function registerOnDisabledChange(fn) {
      this._onDisabledChange.push(fn);
    }
    /**
     * @internal
     */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {}
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      if (this.updateOn === 'submit') {
        if (this._pendingDirty) this.markAsDirty();
        if (this._pendingTouched) this.markAsTouched();

        if (this._pendingChange) {
          this.setValue(this._pendingValue, {
            onlySelf: true,
            emitModelToViewChange: false
          });
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_applyFormState",
    value: function _applyFormState(formState) {
      if (this._isBoxedValue(formState)) {
        this.value = this._pendingValue = formState.value;
        formState.disabled ? this.disable({
          onlySelf: true,
          emitEvent: false
        }) : this.enable({
          onlySelf: true,
          emitEvent: false
        });
      } else {
        this.value = this._pendingValue = formState;
      }
    }
  }]);

  return FormControl;
}(AbstractControl);
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * @publicApi
 */


var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroup, _AbstractControl2);

  var _super6 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroup);

  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormGroup(controls, validatorOrOpts, asyncValidator) {
    var _this10;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroup);

    _this10 = _super6.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    _this10.controls = controls;

    _this10._initObservables();

    _this10._setUpdateStrategy(validatorOrOpts);

    _this10._setUpControls();

    _this10.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    return _this10;
  }
  /**
   * Registers a control with the group's list of controls.
   *
   * This method does not update the value or validity of the control.
   * Use {@link FormGroup#addControl addControl} instead.
   *
   * @param name The control name to register in the collection
   * @param control Provides the control for the given name
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroup, [{
    key: "registerControl",
    value: function registerControl(name, control) {
      if (this.controls[name]) return this.controls[name];
      this.controls[name] = control;
      control.setParent(this);

      control._registerOnCollectionChange(this._onCollectionChange);

      return control;
    }
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */

  }, {
    key: "addControl",
    value: function addControl(name, control) {
      this.registerControl(name, control);
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */

  }, {
    key: "removeControl",
    value: function removeControl(name) {
      if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
      delete this.controls[name];
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */

  }, {
    key: "setControl",
    value: function setControl(name, control) {
      if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
      delete this.controls[name];
      if (control) this.registerControl(name, control);
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     *
     * @param controlName The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */

  }, {
    key: "contains",
    value: function contains(controlName) {
      return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you exclude a value of a control that does exist.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this11 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._checkAllValuesPresent(value);

      Object.keys(value).forEach(function (name) {
        _this11._throwIfControlMissing(name);

        _this11.controls[name].setValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * @usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var _this12 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(value).forEach(function (name) {
        if (_this12.controls[name]) {
          _this12.controls[name].patchValue(value[name], {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        }
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */

  }, {
    key: "reset",
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._forEachChild(function (control, name) {
        control.reset(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });

      this._updatePristine(options);

      this._updateTouched(options);

      this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */

  }, {
    key: "getRawValue",
    value: function getRawValue() {
      return this._reduceChildren({}, function (acc, control, name) {
        acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
        return acc;
      });
    }
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
        return child._syncPendingControls() ? true : updated;
      });

      if (subtreeUpdated) this.updateValueAndValidity({
        onlySelf: true
      });
      return subtreeUpdated;
    }
    /** @internal */

  }, {
    key: "_throwIfControlMissing",
    value: function _throwIfControlMissing(name) {
      if (!Object.keys(this.controls).length) {
        throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      }

      if (!this.controls[name]) {
        throw new Error("Cannot find form control with name: ".concat(name, "."));
      }
    }
    /** @internal */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {
      var _this13 = this;

      Object.keys(this.controls).forEach(function (k) {
        return cb(_this13.controls[k], k);
      });
    }
    /** @internal */

  }, {
    key: "_setUpControls",
    value: function _setUpControls() {
      var _this14 = this;

      this._forEachChild(function (control) {
        control.setParent(_this14);

        control._registerOnCollectionChange(_this14._onCollectionChange);
      });
    }
    /** @internal */

  }, {
    key: "_updateValue",
    value: function _updateValue() {
      this.value = this._reduceValue();
    }
    /** @internal */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      for (var _i4 = 0, _Object$keys = Object.keys(this.controls); _i4 < _Object$keys.length; _i4++) {
        var controlName = _Object$keys[_i4];
        var control = this.controls[controlName];

        if (this.contains(controlName) && condition(control)) {
          return true;
        }
      }

      return false;
    }
    /** @internal */

  }, {
    key: "_reduceValue",
    value: function _reduceValue() {
      var _this15 = this;

      return this._reduceChildren({}, function (acc, control, name) {
        if (control.enabled || _this15.disabled) {
          acc[name] = control.value;
        }

        return acc;
      });
    }
    /** @internal */

  }, {
    key: "_reduceChildren",
    value: function _reduceChildren(initValue, fn) {
      var res = initValue;

      this._forEachChild(function (control, name) {
        res = fn(res, control, name);
      });

      return res;
    }
    /** @internal */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      for (var _i5 = 0, _Object$keys2 = Object.keys(this.controls); _i5 < _Object$keys2.length; _i5++) {
        var controlName = _Object$keys2[_i5];

        if (this.controls[controlName].enabled) {
          return false;
        }
      }

      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    /** @internal */

  }, {
    key: "_checkAllValuesPresent",
    value: function _checkAllValuesPresent(value) {
      this._forEachChild(function (control, name) {
        if (value[name] === undefined) {
          throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
        }
      });
    }
  }]);

  return FormGroup;
}(AbstractControl);
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * @publicApi
 */


var FormArray = /*#__PURE__*/function (_AbstractControl3) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormArray, _AbstractControl3);

  var _super7 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormArray);

  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormArray(controls, validatorOrOpts, asyncValidator) {
    var _this16;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormArray);

    _this16 = _super7.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    _this16.controls = controls;

    _this16._initObservables();

    _this16._setUpdateStrategy(validatorOrOpts);

    _this16._setUpControls();

    _this16.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    return _this16;
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormArray, [{
    key: "at",
    value: function at(index) {
      return this.controls[index];
    }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     */

  }, {
    key: "push",
    value: function push(control) {
      this.controls.push(control);

      this._registerControl(control);

      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */

  }, {
    key: "insert",
    value: function insert(index, control) {
      this.controls.splice(index, 0, control);

      this._registerControl(control);

      this.updateValueAndValidity();
    }
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     */

  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
      this.controls.splice(index, 1);
      this.updateValueAndValidity();
    }
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     */

  }, {
    key: "setControl",
    value: function setControl(index, control) {
      if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
      this.controls.splice(index, 1);

      if (control) {
        this.controls.splice(index, 0, control);

        this._registerControl(control);
      }

      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Length of the control array.
     */

  }, {
    key: "setValue",

    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    value: function setValue(value) {
      var _this17 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._checkAllValuesPresent(value);

      value.forEach(function (newValue, index) {
        _this17._throwIfControlMissing(index);

        _this17.at(index).setValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * @usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var _this18 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      value.forEach(function (newValue, index) {
        if (_this18.at(index)) {
          _this18.at(index).patchValue(newValue, {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        }
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "reset",
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._forEachChild(function (control, index) {
        control.reset(value[index], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });

      this._updatePristine(options);

      this._updateTouched(options);

      this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */

  }, {
    key: "getRawValue",
    value: function getRawValue() {
      return this.controls.map(function (control) {
        return control instanceof FormControl ? control.value : control.getRawValue();
      });
    }
    /**
     * Remove all controls in the `FormArray`.
     *
     * @usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     */

  }, {
    key: "clear",
    value: function clear() {
      if (this.controls.length < 1) return;

      this._forEachChild(function (control) {
        return control._registerOnCollectionChange(function () {});
      });

      this.controls.splice(0);
      this.updateValueAndValidity();
    }
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      var subtreeUpdated = this.controls.reduce(function (updated, child) {
        return child._syncPendingControls() ? true : updated;
      }, false);
      if (subtreeUpdated) this.updateValueAndValidity({
        onlySelf: true
      });
      return subtreeUpdated;
    }
    /** @internal */

  }, {
    key: "_throwIfControlMissing",
    value: function _throwIfControlMissing(index) {
      if (!this.controls.length) {
        throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      }

      if (!this.at(index)) {
        throw new Error("Cannot find form control at index ".concat(index));
      }
    }
    /** @internal */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {
      this.controls.forEach(function (control, index) {
        cb(control, index);
      });
    }
    /** @internal */

  }, {
    key: "_updateValue",
    value: function _updateValue() {
      var _this19 = this;

      this.value = this.controls.filter(function (control) {
        return control.enabled || _this19.disabled;
      }).map(function (control) {
        return control.value;
      });
    }
    /** @internal */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      return this.controls.some(function (control) {
        return control.enabled && condition(control);
      });
    }
    /** @internal */

  }, {
    key: "_setUpControls",
    value: function _setUpControls() {
      var _this20 = this;

      this._forEachChild(function (control) {
        return _this20._registerControl(control);
      });
    }
    /** @internal */

  }, {
    key: "_checkAllValuesPresent",
    value: function _checkAllValuesPresent(value) {
      this._forEachChild(function (control, i) {
        if (value[i] === undefined) {
          throw new Error("Must supply a value for form control at index: ".concat(i, "."));
        }
      });
    }
    /** @internal */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      var _iterator = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.controls),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var control = _step.value;
          if (control.enabled) return false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.controls.length > 0 || this.disabled;
    }
  }, {
    key: "_registerControl",
    value: function _registerControl(control) {
      control.setParent(this);

      control._registerOnCollectionChange(this._onCollectionChange);
    }
  }, {
    key: "length",
    get: function get() {
      return this.controls.length;
    }
  }]);

  return FormArray;
}(AbstractControl);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgForm;
  })
};

var ɵ0 = function ɵ0() {
  return Promise.resolve(null);
};

var resolvedPromise = ɵ0();
/**
 * @description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * @usageNotes
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * ### Native DOM validation UI
 *
 * In order to prevent the native DOM form validation UI from interfering with Angular's form
 * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
 * `FormModule` or `ReactiveFormModule` are imported into the application.
 * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
 * `ngNativeValidate` attribute to the `<form>` element:
 *
 * ```html
 * <form ngNativeValidate>
 *   ...
 * </form>
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgForm = /*#__PURE__*/function (_ControlContainer) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgForm, _ControlContainer);

  var _super8 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgForm);

  function NgForm(validators, asyncValidators) {
    var _this21;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgForm);

    _this21 = _super8.call(this);
    /**
     * @description
     * Returns whether the form submission has been triggered.
     */

    _this21.submitted = false;
    _this21._directives = [];
    /**
     * @description
     * Event emitter for the "ngSubmit" event
     */

    _this21.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    _this21.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
    return _this21;
  }
  /** @nodoc */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgForm, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._setUpdateStrategy();
    }
    /**
     * @description
     * The directive instance.
     */

  }, {
    key: "addControl",

    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `NgModel` directive instance.
     */
    value: function addControl(dir) {
      var _this22 = this;

      resolvedPromise.then(function () {
        var container = _this22._findContainer(dir.path);

        dir.control = container.registerControl(dir.name, dir.control);
        setUpControl(dir.control, dir);
        dir.control.updateValueAndValidity({
          emitEvent: false
        });

        _this22._directives.push(dir);
      });
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param dir The `NgModel` directive instance.
     */

  }, {
    key: "getControl",
    value: function getControl(dir) {
      return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param dir The `NgModel` directive instance.
     */

  }, {
    key: "removeControl",
    value: function removeControl(dir) {
      var _this23 = this;

      resolvedPromise.then(function () {
        var container = _this23._findContainer(dir.path);

        if (container) {
          container.removeControl(dir.name);
        }

        removeDir(_this23._directives, dir);
      });
    }
    /**
     * @description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "addFormGroup",
    value: function addFormGroup(dir) {
      var _this24 = this;

      resolvedPromise.then(function () {
        var container = _this24._findContainer(dir.path);

        var group = new FormGroup({});
        setUpFormContainer(group, dir);
        container.registerControl(dir.name, group);
        group.updateValueAndValidity({
          emitEvent: false
        });
      });
    }
    /**
     * @description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "removeFormGroup",
    value: function removeFormGroup(dir) {
      var _this25 = this;

      resolvedPromise.then(function () {
        var container = _this25._findContainer(dir.path);

        if (container) {
          container.removeControl(dir.name);
        }
      });
    }
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "getFormGroup",
    value: function getFormGroup(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param dir The `NgControl` directive instance.
     * @param value The new value for the directive's control.
     */

  }, {
    key: "updateModel",
    value: function updateModel(dir, value) {
      var _this26 = this;

      resolvedPromise.then(function () {
        var ctrl = _this26.form.get(dir.path);

        ctrl.setValue(value);
      });
    }
    /**
     * @description
     * Sets the value for this `FormGroup`.
     *
     * @param value The new value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      this.control.setValue(value);
    }
    /**
     * @description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */

  }, {
    key: "onSubmit",
    value: function onSubmit($event) {
      this.submitted = true;
      syncPendingControls(this.form, this._directives);
      this.ngSubmit.emit($event);
      return false;
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */

  }, {
    key: "onReset",
    value: function onReset() {
      this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */

  }, {
    key: "resetForm",
    value: function resetForm() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.form.reset(value);
      this.submitted = false;
    }
  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.form._updateOn = this.options.updateOn;
      }
    }
    /** @internal */

  }, {
    key: "_findContainer",
    value: function _findContainer(path) {
      path.pop();
      return path.length ? this.form.get(path) : this.form;
    }
  }, {
    key: "formDirective",
    get: function get() {
      return this;
    }
    /**
     * @description
     * The internal `FormGroup` instance.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     */

  }, {
    key: "path",
    get: function get() {
      return [];
    }
    /**
     * @description
     * Returns a map of the controls in this group.
     */

  }, {
    key: "controls",
    get: function get() {
      return this.form.controls;
    }
  }]);

  return NgForm;
}(ControlContainer);

NgForm.ɵfac = function NgForm_Factory(t) {
  return new (t || NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

NgForm.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: ["ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgForm.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

NgForm.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngFormOptions']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgForm, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
      providers: [formDirectiveProvider],
      host: {
        '(submit)': 'onSubmit($event)',
        '(reset)': 'onReset()'
      },
      outputs: ['ngSubmit'],
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngFormOptions']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * @publicApi
 */


var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AbstractFormGroupDirective, _ControlContainer2);

  var _super9 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(AbstractFormGroupDirective);

  function AbstractFormGroupDirective() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractFormGroupDirective);

    return _super9.apply(this, arguments);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractFormGroupDirective, [{
    key: "ngOnInit",

    /** @nodoc */
    value: function ngOnInit() {
      this._checkParentType(); // Register the group with its parent group.


      this.formDirective.addFormGroup(this);
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        // Remove the group from its parent group.
        this.formDirective.removeFormGroup(this);
      }
    }
    /**
     * @description
     * The `FormGroup` bound to this directive.
     */

  }, {
    key: "_checkParentType",

    /** @internal */
    value: function _checkParentType() {}
  }, {
    key: "control",
    get: function get() {
      return this.formDirective.getFormGroup(this);
    }
    /**
     * @description
     * The path to this group from the top-level directive.
     */

  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * The synchronous validators registered with this group.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._validators);
    }
    /**
     * @description
     * The async validators registered with this group.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._asyncValidators);
    }
  }]);

  return AbstractFormGroupDirective;
}(ControlContainer);

AbstractFormGroupDirective.ɵfac = function AbstractFormGroupDirective_Factory(t) {
  return ɵAbstractFormGroupDirective_BaseFactory(t || AbstractFormGroupDirective);
};

AbstractFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AbstractFormGroupDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵAbstractFormGroupDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](AbstractFormGroupDirective);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AbstractFormGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var TemplateDrivenErrors = /*#__PURE__*/function () {
  function TemplateDrivenErrors() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TemplateDrivenErrors);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TemplateDrivenErrors, null, [{
    key: "modelParentException",
    value: function modelParentException() {
      throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
    }
  }, {
    key: "formGroupNameException",
    value: function formGroupNameException() {
      throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
    }
  }, {
    key: "missingNameException",
    value: function missingNameException() {
      throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    }
  }, {
    key: "modelGroupParentException",
    value: function modelGroupParentException() {
      throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
    }
  }]);

  return TemplateDrivenErrors;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgModelGroup;
  })
};
/**
 * @description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * @usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgModelGroup, _AbstractFormGroupDir);

  var _super10 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgModelGroup);

  function NgModelGroup(parent, validators, asyncValidators) {
    var _this27;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgModelGroup);

    _this27 = _super10.call(this);
    _this27._parent = parent;
    _this27._validators = validators;
    _this27._asyncValidators = asyncValidators;
    return _this27;
  }
  /** @internal */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgModelGroup, [{
    key: "_checkParentType",
    value: function _checkParentType() {
      if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        TemplateDrivenErrors.modelGroupParentException();
      }
    }
  }]);

  return NgModelGroup;
}(AbstractFormGroupDirective);

NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
  return new (t || NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

NgModelGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: ["ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgModelGroup.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

NgModelGroup.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModelGroup']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgModelGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[ngModelGroup]',
      providers: [modelGroupProvider],
      exportAs: 'ngModelGroup'
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModelGroup']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formControlBinding = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgModel;
  })
};

var ɵ0$1 = function ɵ0$1() {
  return Promise.resolve(null);
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have an old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel`s have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */


var resolvedPromise$1 = ɵ0$1();
/**
 * @description
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the domain model's value in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like the validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex:
 * `#myVar="ngModel"`). You can then access the control using the directive's `control` property.
 * However, the most commonly used properties (like `valid` and `dirty`) also exist on the control
 * for direct access. See a full list of properties directly available in
 * `AbstractControlDirective`.
 *
 * @see `RadioControlValueAccessor`
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel `name` attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. Here,
 * an attribute identified as name is used within a custom form control component. To still be able
 * to specify the NgModel's name, you must specify it using the `ngModelOptions` input instead.
 *
 * ```html
 * <form>
 *   <my-custom-form-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-custom-form-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgModel = /*#__PURE__*/function (_NgControl) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgModel, _NgControl);

  var _super11 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgModel);

  function NgModel(parent, validators, asyncValidators, valueAccessors) {
    var _this28;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgModel);

    _this28 = _super11.call(this);
    _this28.control = new FormControl();
    /** @internal */

    _this28._registered = false;
    /**
     * @description
     * Event emitter for producing the `ngModelChange` event after
     * the view model updates.
     */

    _this28.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    _this28._parent = parent;
    _this28._rawValidators = validators || [];
    _this28._rawAsyncValidators = asyncValidators || [];
    _this28.valueAccessor = selectValueAccessor(Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this28), valueAccessors);
    return _this28;
  }
  /** @nodoc */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgModel, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._checkForErrors();

      if (!this._registered) this._setUpControl();

      if ('isDisabled' in changes) {
        this._updateDisabled(changes);
      }

      if (isPropertyUpdated(changes, this.viewModel)) {
        this._updateValue(this.model);

        this.viewModel = this.model;
      }
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.formDirective && this.formDirective.removeControl(this);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "viewToModelUpdate",

    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value emitted by `ngModelChange`.
     */
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
  }, {
    key: "_setUpControl",
    value: function _setUpControl() {
      this._setUpdateStrategy();

      this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
      this._registered = true;
    }
  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.control._updateOn = this.options.updateOn;
      }
    }
  }, {
    key: "_isStandalone",
    value: function _isStandalone() {
      return !this._parent || !!(this.options && this.options.standalone);
    }
  }, {
    key: "_setUpStandalone",
    value: function _setUpStandalone() {
      setUpControl(this.control, this);
      this.control.updateValueAndValidity({
        emitEvent: false
      });
    }
  }, {
    key: "_checkForErrors",
    value: function _checkForErrors() {
      if (!this._isStandalone()) {
        this._checkParentType();
      }

      this._checkName();
    }
  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
          TemplateDrivenErrors.formGroupNameException();
        } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
          TemplateDrivenErrors.modelParentException();
        }
      }
    }
  }, {
    key: "_checkName",
    value: function _checkName() {
      if (this.options && this.options.name) this.name = this.options.name;

      if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        TemplateDrivenErrors.missingNameException();
      }
    }
  }, {
    key: "_updateValue",
    value: function _updateValue(value) {
      var _this29 = this;

      resolvedPromise$1.then(function () {
        _this29.control.setValue(value, {
          emitViewToModelChange: false
        });
      });
    }
  }, {
    key: "_updateDisabled",
    value: function _updateDisabled(changes) {
      var _this30 = this;

      var disabledValue = changes['isDisabled'].currentValue;
      var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
      resolvedPromise$1.then(function () {
        if (isDisabled && !_this30.control.disabled) {
          _this30.control.disable();
        } else if (!isDisabled && _this30.control.disabled) {
          _this30.control.enable();
        }
      });
    }
  }, {
    key: "path",
    get: function get() {
      return this._parent ? controlPath(this.name, this._parent) : [this.name];
    }
    /**
     * @description
     * The top-level directive for this control if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
  }]);

  return NgModel;
}(NgControl);

NgModel.ɵfac = function NgModel_Factory(t) {
  return new (t || NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10));
};

NgModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"],
    options: ["ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

NgModel.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }];
};

NgModel.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModelOptions']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[ngModel]:not([formControlName]):not([formControl])',
      providers: [formControlBinding],
      exportAs: 'ngModel'
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModelOptions']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @publicApi
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */


var ɵNgNoValidate = function ɵNgNoValidate() {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵNgNoValidate);
};

ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
  return new (t || ɵNgNoValidate)();
};

ɵNgNoValidate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ɵNgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵNgNoValidate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
      host: {
        'novalidate': ''
      }
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */


var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgModelWithFormControlWarning');
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormControlDirective;
  })
};
/**
 * @description
 * Synchronizes a standalone `FormControl` instance to a form control element.
 *
 * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives was deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * The following example shows how to register a standalone control and set its value.
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControlDirective, _NgControl2);

  var _super12 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControlDirective);

  function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    var _this31;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControlDirective);

    _this31 = _super12.call(this);
    _this31._ngModelWarningConfig = _ngModelWarningConfig;
    /** @deprecated as of v6 */

    _this31.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /**
     * @description
     * Instance property used to track whether an ngModel warning has been sent out for this
     * particular `FormControlDirective` instance. Used to support warning config of "always".
     *
     * @internal
     */

    _this31._ngModelWarningSent = false;
    _this31._rawValidators = validators || [];
    _this31._rawAsyncValidators = asyncValidators || [];
    _this31.valueAccessor = selectValueAccessor(Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this31), valueAccessors);
    return _this31;
  }
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControlDirective, [{
    key: "ngOnChanges",

    /** @nodoc */
    value: function ngOnChanges(changes) {
      if (this._isControlChanged(changes)) {
        setUpControl(this.form, this);

        if (this.control.disabled && this.valueAccessor.setDisabledState) {
          this.valueAccessor.setDisabledState(true);
        }

        this.form.updateValueAndValidity({
          emitEvent: false
        });
      }

      if (isPropertyUpdated(changes, this.viewModel)) {
        _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

        this.form.setValue(this.model);
        this.viewModel = this.model;
      }
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "viewToModelUpdate",

    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
  }, {
    key: "_isControlChanged",
    value: function _isControlChanged(changes) {
      return changes.hasOwnProperty('form');
    }
  }, {
    key: "isDisabled",
    set: function set(isDisabled) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        ReactiveErrors.disabledAttrWarning();
      }
    }
  }, {
    key: "path",
    get: function get() {
      return [];
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * @description
     * The `FormControl` bound to this directive.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
  }]);

  return FormControlDirective;
}(NgControl);

FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
  return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};

FormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    isDisabled: ["disabled", "isDisabled"],
    form: ["formControl", "form"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
/**
 * @description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlDirective. Used to support warning config of "once".
 *
 * @internal
 */

FormControlDirective._ngModelWarningSentOnce = false;

FormControlDirective.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }];
};

FormControlDirective.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formControl']
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormControlDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControl]',
      providers: [formControlBinding$1],
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formControl']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormGroupDirective;
  })
};
/**
 * @description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroupDirective, _ControlContainer3);

  var _super13 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroupDirective);

  function FormGroupDirective(_validators, _asyncValidators) {
    var _this32;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroupDirective);

    _this32 = _super13.call(this);
    _this32._validators = _validators;
    _this32._asyncValidators = _asyncValidators;
    /**
     * @description
     * Reports whether the form submission has been triggered.
     */

    _this32.submitted = false;
    /**
     * @description
     * Tracks the list of added `FormControlName` instances
     */

    _this32.directives = [];
    /**
     * @description
     * Tracks the `FormGroup` bound to this directive.
     */

    _this32.form = null;
    /**
     * @description
     * Emits an event when the form submission has been triggered.
     */

    _this32.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    return _this32;
  }
  /** @nodoc */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroupDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._checkFormPresent();

      if (changes.hasOwnProperty('form')) {
        this._updateValidators();

        this._updateDomValue();

        this._updateRegistrations();
      }
    }
    /**
     * @description
     * Returns this directive's instance.
     */

  }, {
    key: "addControl",

    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `FormControlName` directive instance.
     */
    value: function addControl(dir) {
      var ctrl = this.form.get(dir.path);
      setUpControl(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
      this.directives.push(dir);
      return ctrl;
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param dir The `FormControlName` directive instance.
     */

  }, {
    key: "getControl",
    value: function getControl(dir) {
      return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param dir The `FormControlName` directive instance.
     */

  }, {
    key: "removeControl",
    value: function removeControl(dir) {
      removeDir(this.directives, dir);
    }
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "addFormGroup",
    value: function addFormGroup(dir) {
      var ctrl = this.form.get(dir.path);
      setUpFormContainer(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
    }
    /**
     * No-op method to remove the form group.
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "removeFormGroup",
    value: function removeFormGroup(dir) {}
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "getFormGroup",
    value: function getFormGroup(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "addFormArray",
    value: function addFormArray(dir) {
      var ctrl = this.form.get(dir.path);
      setUpFormContainer(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
    }
    /**
     * No-op method to remove the form array.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "removeFormArray",
    value: function removeFormArray(dir) {}
    /**
     * @description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "getFormArray",
    value: function getFormArray(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param dir The `FormControlName` directive instance.
     * @param value The new value for the directive's control.
     */

  }, {
    key: "updateModel",
    value: function updateModel(dir, value) {
      var ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    }
    /**
     * @description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */

  }, {
    key: "onSubmit",
    value: function onSubmit($event) {
      this.submitted = true;
      syncPendingControls(this.form, this.directives);
      this.ngSubmit.emit($event);
      return false;
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */

  }, {
    key: "onReset",
    value: function onReset() {
      this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */

  }, {
    key: "resetForm",
    value: function resetForm() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.form.reset(value);
      this.submitted = false;
    }
    /** @internal */

  }, {
    key: "_updateDomValue",
    value: function _updateDomValue() {
      var _this33 = this;

      this.directives.forEach(function (dir) {
        var newCtrl = _this33.form.get(dir.path);

        if (dir.control !== newCtrl) {
          cleanUpControl(dir.control, dir);
          if (newCtrl) setUpControl(newCtrl, dir);
          dir.control = newCtrl;
        }
      });

      this.form._updateTreeValidity({
        emitEvent: false
      });
    }
  }, {
    key: "_updateRegistrations",
    value: function _updateRegistrations() {
      var _this34 = this;

      this.form._registerOnCollectionChange(function () {
        return _this34._updateDomValue();
      });

      if (this._oldForm) this._oldForm._registerOnCollectionChange(function () {});
      this._oldForm = this.form;
    }
  }, {
    key: "_updateValidators",
    value: function _updateValidators() {
      var sync = composeValidators(this._validators);
      this.form.validator = Validators.compose([this.form.validator, sync]);
      var async = composeAsyncValidators(this._asyncValidators);
      this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    }
  }, {
    key: "_checkFormPresent",
    value: function _checkFormPresent() {
      if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        ReactiveErrors.missingFormException();
      }
    }
  }, {
    key: "formDirective",
    get: function get() {
      return this;
    }
    /**
     * @description
     * Returns the `FormGroup` bound to this directive.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     */

  }, {
    key: "path",
    get: function get() {
      return [];
    }
  }]);

  return FormGroupDirective;
}(ControlContainer);

FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
  return new (t || FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: ["formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

FormGroupDirective.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormGroupDirective.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formGroup']
  }],
  ngSubmit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroup]',
      providers: [formDirectiveProvider$1],
      host: {
        '(submit)': 'onSubmit($event)',
        '(reset)': 'onReset()'
      },
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formGroup']
    }],
    ngSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormGroupName;
  })
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroupName, _AbstractFormGroupDir2);

  var _super14 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroupName);

  function FormGroupName(parent, validators, asyncValidators) {
    var _this35;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroupName);

    _this35 = _super14.call(this);
    _this35._parent = parent;
    _this35._validators = validators;
    _this35._asyncValidators = asyncValidators;
    return _this35;
  }
  /** @internal */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroupName, [{
    key: "_checkParentType",
    value: function _checkParentType() {
      if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        ReactiveErrors.groupParentException();
      }
    }
  }]);

  return FormGroupName;
}(AbstractFormGroupDirective);

FormGroupName.ɵfac = function FormGroupName_Factory(t) {
  return new (t || FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormGroupName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: ["formGroupName", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

FormGroupName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormGroupName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formGroupName']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormGroupName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroupName]',
      providers: [formGroupNameProvider]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formGroupName']
    }]
  });
})();

var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormArrayName;
  })
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormArrayName, _ControlContainer4);

  var _super15 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormArrayName);

  function FormArrayName(parent, validators, asyncValidators) {
    var _this36;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormArrayName);

    _this36 = _super15.call(this);
    _this36._parent = parent;
    _this36._validators = validators;
    _this36._asyncValidators = asyncValidators;
    return _this36;
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormArrayName, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._checkParentType();

      this.formDirective.addFormArray(this);
    }
    /**
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @nodoc
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeFormArray(this);
      }
    }
    /**
     * @description
     * The `FormArray` bound to this directive.
     */

  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        ReactiveErrors.arrayParentException();
      }
    }
  }, {
    key: "control",
    get: function get() {
      return this.formDirective.getFormArray(this);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._validators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._asyncValidators);
    }
  }]);

  return FormArrayName;
}(ControlContainer);

FormArrayName.ɵfac = function FormArrayName_Factory(t) {
  return new (t || FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormArrayName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: ["formArrayName", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

FormArrayName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormArrayName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formArrayName']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormArrayName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formArrayName]',
      providers: [formArrayNameProvider]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formArrayName']
    }]
  });
})();

function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var controlNameBinding = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormControlName;
  })
};
/**
 * @description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel is deprecated
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 *
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormControlName = /*#__PURE__*/function (_NgControl3) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControlName, _NgControl3);

  var _super16 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControlName);

  function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    var _this37;

    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControlName);

    _this37 = _super16.call(this);
    _this37._ngModelWarningConfig = _ngModelWarningConfig;
    _this37._added = false;
    /** @deprecated as of v6 */

    _this37.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /**
     * @description
     * Instance property used to track whether an ngModel warning has been sent out for this
     * particular FormControlName instance. Used to support warning config of "always".
     *
     * @internal
     */

    _this37._ngModelWarningSent = false;
    _this37._parent = parent;
    _this37._rawValidators = validators || [];
    _this37._rawAsyncValidators = asyncValidators || [];
    _this37.valueAccessor = selectValueAccessor(Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this37), valueAccessors);
    return _this37;
  }
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControlName, [{
    key: "ngOnChanges",

    /** @nodoc */
    value: function ngOnChanges(changes) {
      if (!this._added) this._setUpControl();

      if (isPropertyUpdated(changes, this.viewModel)) {
        _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

        this.viewModel = this.model;
        this.formDirective.updateModel(this, this.model);
      }
    }
    /** @nodoc */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeControl(this);
      }
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */

  }, {
    key: "viewToModelUpdate",
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
          ReactiveErrors.ngModelGroupException();
        } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
          ReactiveErrors.controlParentException();
        }
      }
    }
  }, {
    key: "_setUpControl",
    value: function _setUpControl() {
      this._checkParentType();

      this.control = this.formDirective.addControl(this);

      if (this.control.disabled && this.valueAccessor.setDisabledState) {
        this.valueAccessor.setDisabledState(true);
      }

      this._added = true;
    }
  }, {
    key: "isDisabled",
    set: function set(isDisabled) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        ReactiveErrors.disabledAttrWarning();
      }
    }
  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
  }]);

  return FormControlName;
}(NgControl);

FormControlName.ɵfac = function FormControlName_Factory(t) {
  return new (t || FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};

FormControlName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    isDisabled: ["disabled", "isDisabled"],
    name: ["formControlName", "name"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
/**
 * @description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlName. Used to support warning config of "once".
 *
 * @internal
 */

FormControlName._ngModelWarningSentOnce = false;

FormControlName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }];
};

FormControlName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formControlName']
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormControlName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControlName]',
      providers: [controlNameBinding]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formControlName']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RequiredValidator;
  }),
  multi: true
};
/**
 * @description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */

var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return CheckboxRequiredValidator;
  }),
  multi: true
};
/**
 * @description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var RequiredValidator = /*#__PURE__*/function () {
  function RequiredValidator() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RequiredValidator);

    this._required = false;
  }
  /**
   * @description
   * Tracks changes to the required attribute bound to this directive.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RequiredValidator, [{
    key: "validate",

    /**
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    value: function validate(control) {
      return this.required ? Validators.required(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = value != null && value !== false && "".concat(value) !== 'false';
      if (this._onChange) this._onChange();
    }
  }]);

  return RequiredValidator;
}();

RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
  return new (t || RequiredValidator)();
};

RequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("required", ctx.required ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
});
RequiredValidator.propDecorators = {
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
      providers: [REQUIRED_VALIDATOR],
      host: {
        '[attr.required]': 'required ? "" : null'
      }
    }]
  }], function () {
    return [];
  }, {
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an
 * ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */


var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CheckboxRequiredValidator, _RequiredValidator);

  var _super17 = Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(CheckboxRequiredValidator);

  function CheckboxRequiredValidator() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CheckboxRequiredValidator);

    return _super17.apply(this, arguments);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CheckboxRequiredValidator, [{
    key: "validate",

    /**
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    value: function validate(control) {
      return this.required ? Validators.requiredTrue(control) : null;
    }
  }]);

  return CheckboxRequiredValidator;
}(RequiredValidator);

CheckboxRequiredValidator.ɵfac = function CheckboxRequiredValidator_Factory(t) {
  return ɵCheckboxRequiredValidator_BaseFactory(t || CheckboxRequiredValidator);
};

CheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("required", ctx.required ? "" : null);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](CheckboxRequiredValidator);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        '[attr.required]': 'required ? "" : null'
      }
    }]
  }], null, null);
})();
/**
 * @description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return EmailValidator;
  }),
  multi: true
};
/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel
 * binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */

var EmailValidator = /*#__PURE__*/function () {
  function EmailValidator() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, EmailValidator);

    this._enabled = false;
  }
  /**
   * @description
   * Tracks changes to the email attribute bound to this directive.
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(EmailValidator, [{
    key: "validate",

    /**
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    value: function validate(control) {
      return this._enabled ? Validators.email(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "email",
    set: function set(value) {
      this._enabled = value === '' || value === true || value === 'true';
      if (this._onChange) this._onChange();
    }
  }]);

  return EmailValidator;
}();

EmailValidator.ɵfac = function EmailValidator_Factory(t) {
  return new (t || EmailValidator)();
};

EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
});
EmailValidator.propDecorators = {
  email: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](EmailValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[email][formControlName],[email][formControl],[email][ngModel]',
      providers: [EMAIL_VALIDATOR]
    }]
  }], function () {
    return [];
  }, {
    email: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MinLengthValidator;
  }),
  multi: true
};
/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var MinLengthValidator = /*#__PURE__*/function () {
  function MinLengthValidator() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MinLengthValidator);

    this._validator = Validators.nullValidator;
  }
  /** @nodoc */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MinLengthValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('minlength' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * Method that validates whether the value meets a minimum length requirement.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this.minlength == null ? null : this._validator(control);
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
    }
  }]);

  return MinLengthValidator;
}();

MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
  return new (t || MinLengthValidator)();
};

MinLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("minlength", ctx.minlength ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
MinLengthValidator.propDecorators = {
  minlength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MinLengthValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        '[attr.minlength]': 'minlength ? minlength : null'
      }
    }]
  }], function () {
    return [];
  }, {
    minlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MaxLengthValidator;
  }),
  multi: true
};
/**
 * A directive that adds max length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var MaxLengthValidator = /*#__PURE__*/function () {
  function MaxLengthValidator() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MaxLengthValidator);

    this._validator = Validators.nullValidator;
  }
  /** @nodoc */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MaxLengthValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('maxlength' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * Method that validates whether the value exceeds the maximum length requirement.
     * @nodoc
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this.maxlength != null ? this._validator(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
    }
  }]);

  return MaxLengthValidator;
}();

MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
  return new (t || MaxLengthValidator)();
};

MaxLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
MaxLengthValidator.propDecorators = {
  maxlength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MaxLengthValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        '[attr.maxlength]': 'maxlength ? maxlength : null'
      }
    }]
  }], function () {
    return [];
  }, {
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return PatternValidator;
  }),
  multi: true
};
/**
 * @description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var PatternValidator = /*#__PURE__*/function () {
  function PatternValidator() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PatternValidator);

    this._validator = Validators.nullValidator;
  }
  /** @nodoc */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PatternValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('pattern' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * Method that validates whether the value matches the the pattern requirement.
     * @nodoc
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this._validator(control);
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.pattern(this.pattern);
    }
  }]);

  return PatternValidator;
}();

PatternValidator.ɵfac = function PatternValidator_Factory(t) {
  return new (t || PatternValidator)();
};

PatternValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
PatternValidator.propDecorators = {
  pattern: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PatternValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
      providers: [PATTERN_VALIDATOR],
      host: {
        '[attr.pattern]': 'pattern ? pattern : null'
      }
    }]
  }], function () {
    return [];
  }, {
    pattern: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */

var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵInternalFormsSharedModule);
};

ɵInternalFormsSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ɵInternalFormsSharedModule
});
ɵInternalFormsSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function ɵInternalFormsSharedModule_Factory(t) {
    return new (t || ɵInternalFormsSharedModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ɵInternalFormsSharedModule, {
    declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator],
    exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵInternalFormsSharedModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function isAbstractControlOptions(options) {
  return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
}
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */


var FormBuilder = /*#__PURE__*/function () {
  function FormBuilder() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormBuilder);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormBuilder, [{
    key: "group",

    /**
     * @description
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     */
    value: function group(controlsConfig) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var controls = this._reduceControls(controlsConfig);

      var validators = null;
      var asyncValidators = null;
      var updateOn = undefined;

      if (options != null) {
        if (isAbstractControlOptions(options)) {
          // `options` are `AbstractControlOptions`
          validators = options.validators != null ? options.validators : null;
          asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
          updateOn = options.updateOn != null ? options.updateOn : undefined;
        } else {
          // `options` are legacy form group options
          validators = options['validator'] != null ? options['validator'] : null;
          asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
        }
      }

      return new FormGroup(controls, {
        asyncValidators: asyncValidators,
        updateOn: updateOn,
        validators: validators
      });
    }
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     */

  }, {
    key: "control",
    value: function control(formState, validatorOrOpts, asyncValidator) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     */

  }, {
    key: "array",
    value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
      var _this38 = this;

      var controls = controlsConfig.map(function (c) {
        return _this38._createControl(c);
      });
      return new FormArray(controls, validatorOrOpts, asyncValidator);
    }
    /** @internal */

  }, {
    key: "_reduceControls",
    value: function _reduceControls(controlsConfig) {
      var _this39 = this;

      var controls = {};
      Object.keys(controlsConfig).forEach(function (controlName) {
        controls[controlName] = _this39._createControl(controlsConfig[controlName]);
      });
      return controls;
    }
    /** @internal */

  }, {
    key: "_createControl",
    value: function _createControl(controlConfig) {
      if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
        return controlConfig;
      } else if (Array.isArray(controlConfig)) {
        var value = controlConfig[0];
        var validator = controlConfig.length > 1 ? controlConfig[1] : null;
        var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
        return this.control(value, validator, asyncValidator);
      } else {
        return this.control(controlConfig);
      }
    }
  }]);

  return FormBuilder;
}();

FormBuilder.ɵfac = function FormBuilder_Factory(t) {
  return new (t || FormBuilder)();
};

FormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: FormBuilder,
  factory: FormBuilder.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @publicApi
 */


var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["Version"]('10.2.3');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](/guide/forms-overview)
 * @see [Template-driven Forms Guide](/guide/forms)
 *
 * @publicApi
 */

var FormsModule = function FormsModule() {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormsModule);
};

FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: FormsModule
});
FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function FormsModule_Factory(t) {
    return new (t || FormsModule)();
  },
  providers: [RadioControlRegistry],
  imports: [ɵInternalFormsSharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FormsModule, {
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      providers: [RadioControlRegistry],
      exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](guide/forms-overview)
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @publicApi
 */


var ReactiveFormsModule = /*#__PURE__*/function () {
  function ReactiveFormsModule() {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ReactiveFormsModule);
  }

  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ReactiveFormsModule, null, [{
    key: "withConfig",

    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     */
    value: function withConfig(opts) {
      return {
        ngModule: ReactiveFormsModule,
        providers: [{
          provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
          useValue: opts.warnOnNgModelWithFormControl
        }]
      };
    }
  }]);

  return ReactiveFormsModule;
}();

ReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ReactiveFormsModule
});
ReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function ReactiveFormsModule_Factory(t) {
    return new (t || ReactiveFormsModule)();
  },
  providers: [FormBuilder, RadioControlRegistry],
  imports: [ɵInternalFormsSharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ReactiveFormsModule, {
    declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ReactiveFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      providers: [FormBuilder, RadioControlRegistry],
      exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js ***!
  \*************************************************************************************/
/*! exports provided: SlickCarouselComponent, SlickCarouselModule, SlickItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselComponent", function() { return SlickCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselModule", function() { return SlickCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function() { return SlickItemDirective; });
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





/**
 * @fileoverview added by tsickle
 * Generated from: slick.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Slick component
 */


var _c0 = ["*"];

var SlickCarouselComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {?} el
   * @param {?} zone
   * @param {?} platformId
   */
  function SlickCarouselComponent(el, zone, platformId) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlickCarouselComponent);

    this.el = el;
    this.zone = zone;
    this.platformId = platformId;
    this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // access from parent component can be a problem with change detection timing. Please use afterChange output

    this.currentIndex = 0;
    this.slides = [];
    this.initialized = false;
    this._removedSlides = [];
    this._addedSlides = [];
  }
  /**
   * On component destroy
   * @return {?}
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlickCarouselComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.unslick();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.ngAfterViewChecked();
    }
    /**
     * On component view checked
     * @return {?}
     */

  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      var _this = this;

      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
        return;
      }

      if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
        /** @type {?} */
        var nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;

        if (!this.initialized) {
          if (nextSlidesLength > 0) {
            this.initSlick();
          } // if nextSlidesLength is zere, do nothing

        } else if (nextSlidesLength === 0) {
          // unslick case
          this.unslick();
        } else {
          this._addedSlides.forEach(
          /**
          * @param {?} slickItem
          * @return {?}
          */
          function (slickItem) {
            _this.slides.push(slickItem);

            _this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this.$instance.slick('slickAdd', slickItem.el.nativeElement);
            });
          });

          this._addedSlides = [];

          this._removedSlides.forEach(
          /**
          * @param {?} slickItem
          * @return {?}
          */
          function (slickItem) {
            /** @type {?} */
            var idx = _this.slides.indexOf(slickItem);

            _this.slides = _this.slides.filter(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s !== slickItem;
            });

            _this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this.$instance.slick('slickRemove', idx);
            });
          });

          this._removedSlides = [];
        }
      }
    }
    /**
     * init slick
     * @return {?}
     */

  }, {
    key: "initSlick",
    value: function initSlick() {
      var _this2 = this;

      this.slides = this._addedSlides;
      this._addedSlides = [];
      this._removedSlides = [];
      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this2.$instance = jQuery(_this2.el.nativeElement);

        _this2.$instance.on('init',
        /**
        * @param {?} event
        * @param {?} slick
        * @return {?}
        */
        function (event, slick) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.init.emit({
              event: event,
              slick: slick
            });
          });
        });

        _this2.$instance.slick(_this2.config);

        _this2.zone.run(
        /**
        * @return {?}
        */
        function () {
          var _a;

          _this2.initialized = true;
          _this2.currentIndex = ((_a = _this2.config) === null || _a === void 0 ? void 0 : _a.initialSlide) || 0;
        });

        _this2.$instance.on('afterChange',
        /**
        * @param {?} event
        * @param {?} slick
        * @param {?} currentSlide
        * @return {?}
        */
        function (event, slick, currentSlide) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.afterChange.emit({
              event: event,
              slick: slick,
              currentSlide: currentSlide,
              first: currentSlide === 0,
              last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
            });

            _this2.currentIndex = currentSlide;
          });
        });

        _this2.$instance.on('beforeChange',
        /**
        * @param {?} event
        * @param {?} slick
        * @param {?} currentSlide
        * @param {?} nextSlide
        * @return {?}
        */
        function (event, slick, currentSlide, nextSlide) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.beforeChange.emit({
              event: event,
              slick: slick,
              currentSlide: currentSlide,
              nextSlide: nextSlide
            });

            _this2.currentIndex = nextSlide;
          });
        });

        _this2.$instance.on('breakpoint',
        /**
        * @param {?} event
        * @param {?} slick
        * @param {?} breakpoint
        * @return {?}
        */
        function (event, slick, breakpoint) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.breakpoint.emit({
              event: event,
              slick: slick,
              breakpoint: breakpoint
            });
          });
        });

        _this2.$instance.on('destroy',
        /**
        * @param {?} event
        * @param {?} slick
        * @return {?}
        */
        function (event, slick) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.destroy.emit({
              event: event,
              slick: slick
            });

            _this2.initialized = false;
          });
        });
      });
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */

  }, {
    key: "addSlide",
    value: function addSlide(slickItem) {
      this._addedSlides.push(slickItem);
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */

  }, {
    key: "removeSlide",
    value: function removeSlide(slickItem) {
      this._removedSlides.push(slickItem);
    }
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "slickGoTo",
    value: function slickGoTo(index) {
      var _this3 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this3.$instance.slick('slickGoTo', index);
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "slickNext",
    value: function slickNext() {
      var _this4 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this4.$instance.slick('slickNext');
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "slickPrev",
    value: function slickPrev() {
      var _this5 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this5.$instance.slick('slickPrev');
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "slickPause",
    value: function slickPause() {
      var _this6 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this6.$instance.slick('slickPause');
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "slickPlay",
    value: function slickPlay() {
      var _this7 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this7.$instance.slick('slickPlay');
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "unslick",
    value: function unslick() {
      var _this8 = this;

      if (this.$instance) {
        this.zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          _this8.$instance.slick('unslick');
        });
        this.$instance = undefined;
      }

      this.initialized = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this9 = this;

      if (this.initialized) {
        /** @type {?} */
        var config = changes['config'];

        if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
          /** @type {?} */
          var refresh = config.currentValue['refresh'];
          /** @type {?} */

          var newOptions = Object.assign({}, config.currentValue);
          delete newOptions['refresh'];
          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this9.$instance.slick('slickSetOption', newOptions, refresh);
          });
        }
      }
    }
  }]);

  return SlickCarouselComponent;
}();

SlickCarouselComponent.ɵfac = function SlickCarouselComponent_Factory(t) {
  return new (t || SlickCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]));
};

SlickCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SlickCarouselComponent,
  selectors: [["ngx-slick-carousel"]],
  inputs: {
    config: "config"
  },
  outputs: {
    afterChange: "afterChange",
    beforeChange: "beforeChange",
    breakpoint: "breakpoint",
    destroy: "destroy",
    init: "init"
  },
  exportAs: ["slick-carousel"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return SlickCarouselComponent;
    }),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function SlickCarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
/** @nocollapse */

SlickCarouselComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
    }]
  }];
};

SlickCarouselComponent.propDecorators = {
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  afterChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  beforeChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  breakpoint: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  destroy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  init: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SlickCarouselComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'ngx-slick-carousel',
      exportAs: 'slick-carousel',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return SlickCarouselComponent;
        }),
        multi: true
      }],
      template: '<ng-content></ng-content>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
      }]
    }];
  }, {
    afterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    beforeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    destroy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    init: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

if (false) {}

var SlickItemDirective = /*#__PURE__*/function () {
  /**
   * @param {?} el
   * @param {?} platformId
   * @param {?} carousel
   */
  function SlickItemDirective(el, platformId, carousel) {
    Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlickItemDirective);

    this.el = el;
    this.platformId = platformId;
    this.carousel = carousel;
  }
  /**
   * @return {?}
   */


  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlickItemDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
        this.carousel.addSlide(this);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
        this.carousel.removeSlide(this);
      }
    }
  }]);

  return SlickItemDirective;
}();

SlickItemDirective.ɵfac = function SlickItemDirective_Factory(t) {
  return new (t || SlickItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](SlickCarouselComponent, 1));
};

SlickItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: SlickItemDirective,
  selectors: [["", "ngxSlickItem", ""]]
});
/** @nocollapse */

SlickItemDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
    }]
  }, {
    type: SlickCarouselComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SlickItemDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[ngxSlickItem]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
      }]
    }, {
      type: SlickCarouselComponent,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
      }]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var SlickCarouselModule = function SlickCarouselModule() {
  Object(_media_diouf_Travail_Projets_projet_web_avance_angular_immoFinal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlickCarouselModule);
};

SlickCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SlickCarouselModule
});
SlickCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function SlickCarouselModule_Factory(t) {
    return new (t || SlickCarouselModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SlickCarouselModule, {
    declarations: function declarations() {
      return [SlickCarouselComponent, SlickItemDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
    },
    exports: function exports() {
      return [SlickCarouselComponent, SlickItemDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SlickCarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [SlickCarouselComponent, SlickItemDirective],
      exports: [SlickCarouselComponent, SlickItemDirective]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: ngx-slick-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
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
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
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
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

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
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
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
        var i = -1,
            next = function next() {
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
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

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
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
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
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./src/app/globalFrontendComponents/Banner/Banner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/globalFrontendComponents/Banner/Banner.component.ts ***!
  \*********************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var _c0 = function () { return ["#"]; };
var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        /** Title for baner **/
        this.Title = 'Dummy Title';
        /** Description for baner **/
        this.Desc = 'Description';
        /** Background for baner **/
        this.BgImageUrl = 'assets/images/main-search-background-01.jpg';
    }
    BannerComponent.prototype.ngOnInit = function () { };
    BannerComponent.prototype.ngAfterViewInit = function () {
    };
    BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["banner-version1"]], inputs: { Title: ["title", "Title"], Desc: ["desc", "Desc"], BgImageUrl: ["bgImageUrl", "BgImageUrl"] }, decls: 48, vars: 4, consts: [[1, "position-relative"], [1, "section", "section-lg", "section-hero", "section-shaped"], [1, "shape", "shape-style-1", "shape-primary"], [1, "span-150"], [1, "span-50"], [1, "span-75"], [1, "span-100"], [1, "overlay-bg"], [1, "container", "shape-container", "d-flex", "align-items-center", "py-lg"], [1, "main-search-inner"], [1, "text-white", "display-2"], [1, "text-white"], [1, "main-search-input"], [1, "main-search-input-item"], ["type", "text", "placeholder", "What are you looking for?", "value", ""], [1, "main-search-input-item", "location"], ["id", "autocomplete-container"], ["id", "autocomplete-input", "type", "text", "placeholder", "Location"], ["href", "#"], [1, "fa", "fa-map-marker"], ["data-placeholder", "All Categories", 1, "chosen-select", "custom-select"], ["href", "#", 1, "btn", "main-search-btn", "btn-radius", "btn-lg", "btn-white", 3, "routerLink"], [1, "btn-inner--text"], [1, "separator", "separator-bottom", "separator-skew", "zindex-100"], ["x", "0", "y", "0", "viewBox", "0 0 2560 100", "preserveAspectRatio", "none", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["points", "2560 0 2560 100 0 100", 1, "fill-white"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "All Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Appartement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Studio");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bureau");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Villa");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Parcelle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "polygon", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Desc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL0Jhbm5lci9CYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWxGcm9udGVuZENvbXBvbmVudHMvQmFubmVyL0Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWF3e1xuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
    return BannerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'banner-version1',
                templateUrl: './Banner.component.html',
                styleUrls: ['./Banner.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], BgImageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['bgImageUrl']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/FeatureGridSection/FeatureGridSection.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/FeatureGridSection/FeatureGridSection.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FeatureGridSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureGridSectionComponent", function() { return FeatureGridSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function FeatureGridSectionComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](feature_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.desc);
} }
var FeatureGridSectionComponent = /** @class */ (function () {
    function FeatureGridSectionComponent() {
        /** Title for section **/
        this.Title = 'Dummy Title';
        /** Desc for section **/
        this.Desc = 'Dummy Description';
    }
    FeatureGridSectionComponent.prototype.ngOnInit = function () { };
    FeatureGridSectionComponent.prototype.ngAfterViewInit = function () {
    };
    FeatureGridSectionComponent.ɵfac = function FeatureGridSectionComponent_Factory(t) { return new (t || FeatureGridSectionComponent)(); };
    FeatureGridSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatureGridSectionComponent, selectors: [["feature-grid-section"]], inputs: { Title: ["title", "Title"], Desc: ["desc", "Desc"], Data: ["data", "Data"] }, decls: 18, vars: 3, consts: [[1, "block-space", "bg-gradient-warning"], [1, "container"], [1, "row", "row-grid", "align-items-center"], [1, "col-lg-12", "order-lg-1"], [1, "d-flex", "px-3"], [1, "icon", "icon-lg", "icon-shape", "bg-gradient-white", "shadow", "rounded-circle", "text-primary"], [1, "fa", "fa-smile-o", "text-primary"], [1, "pl-4"], [1, "display-3", "text-white"], [1, "text-white"], [1, "row"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "separator", "separator-bottom", "separator-skew", "zindex-100"], ["x", "0", "y", "0", "viewBox", "0 0 2560 100", "preserveAspectRatio", "none", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["points", "2560 0 2560 100 0 100", 1, "fill-white"], [1, "col-lg-6"], [1, "card", "shadow", "shadow-lg--hover", "mt-5"], [1, "card-body"], [1, "icon", "icon-shape", "bg-gradient-warning", "rounded-circle", "text-white"], [1, "title", "text-warning"], [1, "text-warning"]], template: function FeatureGridSectionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FeatureGridSectionComponent_div_14_Template, 14, 5, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "polygon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Desc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL0ZlYXR1cmVHcmlkU2VjdGlvbi9GZWF0dXJlR3JpZFNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWxGcm9udGVuZENvbXBvbmVudHMvRmVhdHVyZUdyaWRTZWN0aW9uL0ZlYXR1cmVHcmlkU2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWF3e1xuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
    return FeatureGridSectionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureGridSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'feature-grid-section',
                templateUrl: './FeatureGridSection.component.html',
                styleUrls: ['./FeatureGridSection.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/FeatureSection/FeatureSection.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/FeatureSection/FeatureSection.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FeatureSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureSectionComponent", function() { return FeatureSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function FeatureSectionComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](feature_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.name);
} }
var FeatureSectionComponent = /** @class */ (function () {
    function FeatureSectionComponent() {
        /** Title for section **/
        this.Title = 'Dummy Title';
        /** Desc for section **/
        this.Desc = 'Dummy Description';
        /** Image for section **/
        this.Image = '';
    }
    FeatureSectionComponent.prototype.ngOnInit = function () { };
    FeatureSectionComponent.prototype.ngAfterViewInit = function () {
    };
    FeatureSectionComponent.ɵfac = function FeatureSectionComponent_Factory(t) { return new (t || FeatureSectionComponent)(); };
    FeatureSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatureSectionComponent, selectors: [["feature-section"]], inputs: { Title: ["title", "Title"], Desc: ["desc", "Desc"], Image: ["image", "Image"], Data: ["data", "Data"] }, decls: 15, vars: 4, consts: [[1, "block-space"], [1, "container"], [1, "row", "row-grid", "align-items-center"], [1, "col-md-6", "order-md-2"], [1, "img-fluid", "floating", 3, "src"], [1, "col-md-6", "order-md-1"], [1, "pr-md-5"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-success", "shadow", "rounded-circle", "mb-5"], [1, "fa", "fa-cog"], [1, "list-unstyled", "mt-5"], ["class", "py-2", 4, "ngFor", "ngForOf"], [1, "py-2"], [1, "d-flex", "align-items-center"], [1, "badge", "badge-circle", "badge-success", "mr-3"], [1, "mb-0"]], template: function FeatureSectionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FeatureSectionComponent_li_14_Template, 8, 4, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Desc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL0ZlYXR1cmVTZWN0aW9uL0ZlYXR1cmVTZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFJQSxtQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQUNRO0VBQ0ksY0FBQTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL0ZlYXR1cmVTZWN0aW9uL0ZlYXR1cmVTZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtYXd7XG4gICAgbGl7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"], encapsulation: 2 });
    return FeatureSectionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'feature-section',
                templateUrl: './FeatureSection.component.html',
                styleUrls: ['./FeatureSection.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], Image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['image']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/MapBanner/MapBanner.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/MapBanner/MapBanner.component.ts ***!
  \***************************************************************************/
/*! exports provided: MapBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBannerComponent", function() { return MapBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");




function MapBannerComponent_div_0_agm_marker_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var marker_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", marker_r3.lat)("longitude", marker_r3.lng)("iconUrl", marker_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", marker_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](marker_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](marker_r3.address);
} }
function MapBannerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-map", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapBannerComponent_div_0_agm_marker_2_Template, 12, 6, "agm-marker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Choose...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Hotel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Food Courts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r0.lat)("longitude", ctx_r0.lng)("zoom", 9)("scrollwheel", ctx_r0.mapScrollWheel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.markers);
} }
function MapBannerComponent_div_1_agm_marker_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var marker_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", marker_r6.lat)("longitude", marker_r6.lng)("iconUrl", marker_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", marker_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](marker_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](marker_r6.address);
} }
function MapBannerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-map", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapBannerComponent_div_1_agm_marker_2_Template, 12, 6, "agm-marker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r1.lat)("longitude", ctx_r1.lng)("zoom", 9)("scrollwheel", ctx_r1.mapScrollWheel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.markers);
} }
var MapBannerComponent = /** @class */ (function () {
    function MapBannerComponent() {
        /** Title for baner **/
        this.Layout = 'header';
        this.lat = 40.80;
        this.lng = -73.70;
        this.mapScrollWheel = false;
        this.markers = [
            {
                lat: 40.94401669296697,
                lng: -74.16938781738281,
                icon: 'assets/images/rest.png',
                title: 'Tom Restaurant',
                address: '964 School Street, New York',
                image: 'assets/images/most-img-1.jpg'
            },
            {
                lat: 40.77055783505125,
                lng: -74.26002502441406,
                icon: 'assets/images/shop.png',
                title: 'Sticky Band',
                address: 'Bishop Avenue, New York',
                image: 'assets/images/most-img-2.jpg'
            },
            {
                lat: 40.7427837,
                lng: -73.11445617675781,
                icon: 'assets/images/rest.png',
                title: 'Hotel Govendor',
                address: '778 Country Street, New York',
                image: 'assets/images/most-img-3.jpg'
            },
            {
                lat: 40.70437865245596,
                lng: -73.98674011230469,
                icon: 'assets/images/hotel.png',
                title: 'Burger House',
                address: '2726 Shinn Street, New York',
                image: 'assets/images/most-img-4.jpg'
            },
            {
                lat: 40.641311,
                lng: -73.778139,
                icon: 'assets/images/hotel.png',
                title: 'Burger House',
                address: '1512 Duncan Avenue, New York',
                image: 'assets/images/most-img-6.jpg'
            },
            {
                lat: 41.080938,
                lng: -73.535957,
                icon: 'assets/images/rest.png',
                title: 'Think Coffee',
                address: '215 Terry Lane, New York',
                image: 'assets/images/most-img-3.jpg'
            },
            {
                lat: 41.079386,
                lng: -73.519478,
                icon: 'assets/images/hotel.png',
                title: 'Think Coffee',
                address: '215 Terry Lane, New York',
                image: 'assets/images/most-img-2.jpg'
            }
        ];
    }
    MapBannerComponent.prototype.ngOnInit = function () { };
    MapBannerComponent.prototype.enableDisableScroll = function () {
        this.mapScrollWheel = !this.mapScrollWheel;
    };
    MapBannerComponent.ɵfac = function MapBannerComponent_Factory(t) { return new (t || MapBannerComponent)(); };
    MapBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapBannerComponent, selectors: [["map-banner"]], inputs: { Layout: ["layout", "Layout"] }, decls: 2, vars: 2, consts: [["id", "map-container", "class", "fullwidth-home-map", 4, "ngIf"], ["id", "map-container", "class", "sidebar-marker", 4, "ngIf"], ["id", "map-container", 1, "fullwidth-home-map"], [3, "latitude", "longitude", "zoom", "scrollwheel"], [3, "latitude", "longitude", "iconUrl", 4, "ngFor", "ngForOf"], [1, "map-banner"], [1, "main-search-inner"], [1, "container"], [1, "row"], [1, "col-md-12", "grid-full-width", "page-search", "mb-3"], [1, "main-search-input", "mt-0"], [1, "col-lg-3", "col-sm-12"], [1, "form-group"], ["type", "text", "placeholder", "What are you looking for?", 1, "form-control"], ["type", "text", "placeholder", "Location", 1, "form-control"], ["id", "inlineFormCustomSelectPref", 1, "custom-select", "my-1", "mr-sm-2"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-lg-3", "col-sm-12", "text-right"], [1, "btn", "main-search-btn", "btn-radius", "btn-lg", "btn-primary", "text-white"], [1, "btn-inner--text"], [3, "latitude", "longitude", "iconUrl"], [1, "infoBox"], [1, "map-box"], [1, "listing-img-container"], ["alt", "", 3, "src"], [1, "listing-item-content"], ["id", "map-container", 1, "sidebar-marker"]], template: function MapBannerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MapBannerComponent_div_0_Template, 29, 5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapBannerComponent_div_1_Template, 3, 5, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Layout == "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Layout == "sidebar");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmInfoWindow"]], styles: ["agm-map {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  z-index: 990;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL01hcEJhbm5lci9NYXBCYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9nbG9iYWxGcm9udGVuZENvbXBvbmVudHMvTWFwQmFubmVyL01hcEJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXJnaW46IDA7XG4gICB6LWluZGV4OiA5OTA7XG59Il19 */"], encapsulation: 2 });
    return MapBannerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'map-banner',
                templateUrl: './MapBanner.component.html',
                styleUrls: ['./MapBanner.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['layout']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/MostVisitedPlaces/MostVisitedPlaces.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/MostVisitedPlaces/MostVisitedPlaces.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MostVisitedPlacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostVisitedPlacesComponent", function() { return MostVisitedPlacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





var _c0 = function () { return ["/listing/detail/version1"]; };
function MostVisitedPlacesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var place_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "url(" + place_r2.image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", place_r2.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](place_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", place_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", place_r2.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](place_r2.badge);
} }
var MostVisitedPlacesComponent = /** @class */ (function () {
    function MostVisitedPlacesComponent() {
        /** Title for baner **/
        this.Title = 'Dummy Title';
        /** Description for baner **/
        this.Desc = 'Description';
        /** Description for baner **/
        this.BgColor = '#f8f8f8';
        this.slideConfig = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    }
    MostVisitedPlacesComponent.prototype.ngOnInit = function () { };
    MostVisitedPlacesComponent.prototype.ngAfterViewInit = function () { };
    MostVisitedPlacesComponent.ɵfac = function MostVisitedPlacesComponent_Factory(t) { return new (t || MostVisitedPlacesComponent)(); };
    MostVisitedPlacesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MostVisitedPlacesComponent, selectors: [["most-visited-places"]], inputs: { Title: ["title", "Title"], Desc: ["desc", "Desc"], BgColor: ["bgColor", "BgColor"], Data: ["data", "Data"] }, decls: 12, vars: 4, consts: [[1, "block-space", "bg-secondary"], [1, "container"], [1, "block-head", "text-center", "mb-5"], [1, "head-line", "display-3"], [1, "lead", "mt-2", "head-desc", "text-primary"], [1, "row"], [1, "col-md-12"], [1, "carousel", "simple-slick-carousel", "dots-nav", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide carousel-item", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide", "carousel-item"], [1, "category-box-container", "text-center"], [1, "listing-item-container"], [1, "listing-item", "text-center"], [1, "mostviewed-bg"], [1, "listing-item-content"], [1, "list-logo"], [3, "routerLink"], ["width", "80", "height", "80", "alt", "", 3, "src"], [1, "badge", "badge-pill", "badge-primary", "text-uppercase", "category-banner"], [1, "mb-0"], [1, "badge", "badge-pill", "badge-primary", "text-uppercase", "open-close-banner"], [1, "round-pill", "like-banner", "d-block", "bg-primary"], [1, "fa", "fa-heart-o"]], template: function MostVisitedPlacesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-slick-carousel", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MostVisitedPlacesComponent_div_11_Template, 21, 11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Desc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL01vc3RWaXNpdGVkUGxhY2VzL01vc3RWaXNpdGVkUGxhY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFJQSxtQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQUNRO0VBQ0ksY0FBQTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL01vc3RWaXNpdGVkUGxhY2VzL01vc3RWaXNpdGVkUGxhY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtYXd7XG4gICAgbGl7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"], encapsulation: 2 });
    return MostVisitedPlacesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostVisitedPlacesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'most-visited-places',
                templateUrl: './MostVisitedPlaces.component.html',
                styleUrls: ['./MostVisitedPlaces.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], BgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['bgColor']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/Pagination/Pagination.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/Pagination/Pagination.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(router) {
        this.router = router;
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.ngAfterViewInit = function () {
    };
    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["pagination"]], decls: 26, vars: 0, consts: [[1, "row"], [1, "col-md-12"], [1, "mt-3"], ["aria-label", "Page navigation"], [1, "pagination"], [1, "page-item"], [1, "page-link"], [1, "fa", "fa-angle-left"], [1, "page-item", "active"], [1, "fa", "fa-angle-right"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZyb250ZW5kQ29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return PaginationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination',
                templateUrl: './Pagination.component.html',
                styleUrls: ['./Pagination.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/ParallaxSection/Parallax.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/ParallaxSection/Parallax.component.ts ***!
  \********************************************************************************/
/*! exports provided: ParallaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxComponent", function() { return ParallaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var _c0 = function () { return ["/listing/list/with-sidebar"]; };
var ParallaxComponent = /** @class */ (function () {
    function ParallaxComponent() {
    }
    ParallaxComponent.prototype.ngOnInit = function () { };
    ParallaxComponent.prototype.ngAfterViewInit = function () {
    };
    ParallaxComponent.ɵfac = function ParallaxComponent_Factory(t) { return new (t || ParallaxComponent)(); };
    ParallaxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParallaxComponent, selectors: [["parallax-section"]], decls: 11, vars: 2, consts: [["data-background", "assets/images/slider-parallax.jpg", 1, "parallax"], [1, "text-content", "white-font", "block-space"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-sm-8"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function ParallaxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Streamline Your Business");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We\u2019re full-service, local agents who know how to find people and home each together. We use online tools with an unmatched search capability to make you smarter and faster.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1BhcmFsbGF4U2VjdGlvbi9QYXJhbGxheC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZyb250ZW5kQ29tcG9uZW50cy9QYXJhbGxheFNlY3Rpb24vUGFyYWxsYXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return ParallaxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParallaxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'parallax-section',
                templateUrl: './Parallax.component.html',
                styleUrls: ['./Parallax.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/PopuplarCategories/PopularCategories.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/PopuplarCategories/PopularCategories.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PopularCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularCategoriesComponent", function() { return PopularCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





var _c0 = function () { return ["/listing/grid/with-sidebar"]; };
var _c1 = function (a0) { return { "background-image": a0 }; };
function PopularCategoriesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, "url(" + item_r2.image + ")"));
} }
var PopularCategoriesComponent = /** @class */ (function () {
    function PopularCategoriesComponent() {
        /** Title for baner **/
        this.Title = 'Dummy Title';
        /** Description for baner **/
        this.Desc = 'Description';
        this.slideConfig = {
            centerMode: true,
            centerPadding: '15%',
            slidesToShow: 3,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1441,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        centerPadding: '10px',
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                }
            ]
        };
    }
    PopularCategoriesComponent.prototype.ngOnInit = function () {
    };
    PopularCategoriesComponent.prototype.ngAfterViewInit = function () { };
    PopularCategoriesComponent.ɵfac = function PopularCategoriesComponent_Factory(t) { return new (t || PopularCategoriesComponent)(); };
    PopularCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopularCategoriesComponent, selectors: [["popular-categories"]], inputs: { Title: ["title", "Title"], Desc: ["desc", "Desc"], Data: ["data", "Data"] }, decls: 12, vars: 4, consts: [[1, "block-space"], [1, "container"], [1, "block-head", "text-center", "mb-5"], [1, "head-line", "display-3"], [1, "lead", "mt-2", "head-desc", "text-primary"], [1, "fullwidth-carousel-container"], [1, "fullwidth-slick-carousel", "category-carousel"], [1, "carousel", "fullwidth-slick-carousel", "category-carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide fw-carousel-item slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide", "fw-carousel-item", "slide"], [1, "category-box-container", "text-center"], [1, "category-box"], [1, "category-box-content"], [1, "icon-title"], [3, "routerLink"], [1, "category-box-background", 3, "ngStyle"]], template: function PopularCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-slick-carousel", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PopularCategoriesComponent_div_11_Template, 13, 10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Desc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1BvcHVwbGFyQ2F0ZWdvcmllcy9Qb3B1bGFyQ2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZyb250ZW5kQ29tcG9uZW50cy9Qb3B1cGxhckNhdGVnb3JpZXMvUG9wdWxhckNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return PopularCategoriesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'popular-categories',
                templateUrl: './PopularCategories.component.html',
                styleUrls: ['./PopularCategories.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/Pricing/Pricing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/globalFrontendComponents/Pricing/Pricing.component.ts ***!
  \***********************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () { };
    PricingComponent.prototype.ngAfterViewInit = function () {
    };
    PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
    PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["pricing"]], decls: 73, vars: 0, consts: [[1, "block-space"], [1, "container"], [1, "block-head", "text-center"], [1, "head-line", "display-3", "mb-5"], [1, "row", "pt-4"], [1, "col-md-12"], [1, "pricing-container", "margin-top-30"], [1, "plan"], [1, "plan-price"], [1, "value"], [1, "period"], [1, "plan-features"], ["href", "#", 1, "btn", "btn-1", "btn-outline-primary", "btn-radius"], [1, "plan", "featured"], [1, "listing-badge"], [1, "featured"], ["href", "#", 1, "btn", "btn-primary", "btn-radius"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Get an Exposure For Your Listing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Free");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Free of charge one standard listing active for 30 days");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "One Listing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "30 Days Availability");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Standard Listing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Limited Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Get Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Featured");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Extended");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "$9.99");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "One time fee for one listing, highlighted in the search results");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "One Time Fee");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "One Listing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "90 Days Availability");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Featured In Search Results");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "24/7 Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Get Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Professional");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$19.99");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Monthly subscription for unlimited listings and availability");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Unlimited Listings");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Unlimited Availability");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Featured In Search Results");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "24/7 Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Get Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1ByaWNpbmcvUHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZyb250ZW5kQ29tcG9uZW50cy9QcmljaW5nL1ByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return PricingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pricing',
                templateUrl: './Pricing.component.html',
                styleUrls: ['./Pricing.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/Rating/Rating.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/globalFrontendComponents/Rating/Rating.component.ts ***!
  \*********************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function RatingComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.review = '(12 reviews)';
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
    RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["DirectlistRating"]], inputs: { rate: "rate", review: "review" }, decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rate);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZyb250ZW5kQ29tcG9uZW50cy9SYXRpbmcvUmF0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return RatingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'DirectlistRating',
                templateUrl: './Rating.component.html',
                styleUrls: ['./Rating.component.scss']
            }]
    }], function () { return []; }, { rate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], review: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/RecentBlog/RecentBlog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/RecentBlog/RecentBlog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecentBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentBlogComponent", function() { return RecentBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function RecentBlogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blog_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", blog_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.desc);
} }
var RecentBlogComponent = /** @class */ (function () {
    function RecentBlogComponent() {
        /** Title for baner **/
        this.Title = 'Dummy Title';
    }
    RecentBlogComponent.prototype.ngOnInit = function () { };
    RecentBlogComponent.prototype.ngAfterViewInit = function () {
    };
    RecentBlogComponent.ɵfac = function RecentBlogComponent_Factory(t) { return new (t || RecentBlogComponent)(); };
    RecentBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecentBlogComponent, selectors: [["recent-blog"]], inputs: { Title: ["title", "Title"], Data: ["data", "Data"] }, decls: 11, vars: 2, consts: [[1, "block-space", "bg-secondary"], [1, "block-head", "text-center", "mb-5"], [1, "head-line", "display-3"], [1, "lead", "mt-2", "head-desc", "text-primary"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12"], [1, "row", "row-grid"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card", "card-lift--hover", "shadow", "border-0"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "card-body", "py-4"], [1, "text-muted"], [1, "description", "mb-4"], ["routerLink", "/pages/blog/detail", 1, "btn", "btn-primary"]], template: function RecentBlogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hassel Free Service");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecentBlogComponent_div_10_Template, 12, 4, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1JlY2VudEJsb2cvUmVjZW50QmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZyb250ZW5kQ29tcG9uZW50cy9SZWNlbnRCbG9nL1JlY2VudEJsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return RecentBlogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'recent-blog',
                templateUrl: './RecentBlog.component.html',
                styleUrls: ['./RecentBlog.component.scss'],
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

/***/ "./src/app/globalFrontendComponents/Services/Services.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/Services/Services.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ServicesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](service_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.desc);
} }
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        /** Title for service **/
        this.Title = 'Dummy Title';
        /** Description for service **/
        this.Desc = 'Description';
    }
    ServicesComponent.prototype.ngOnInit = function () { };
    ServicesComponent.prototype.ngAfterViewInit = function () {
    };
    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["services-section"]], inputs: { Title: ["title", "Title"], Desc: ["desc", "Desc"], Data: ["data", "Data"] }, decls: 10, vars: 3, consts: [[1, "block-space", "bg-primary"], [1, "block-head", "text-center", "mb-5"], [1, "head-line", "text-white", "display-3"], [1, "col-12", "col-md-7", "mx-auto"], [1, "lead", "mt-2", "head-desc", "text-white"], [1, "container"], [1, "row", "row-grid", "mt-5"], ["class", "col-lg-4 text-center", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "text-center"], [1, "icon", "icon-lg", "icon-shape", "bg-gradient-white", "shadow", "rounded-circle", "text-primary"], [1, "text-white", "mt-3"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServicesComponent_div_9_Template, 7, 5, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Desc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1NlcnZpY2VzL1NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFJQSxtQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQUNRO0VBQ0ksY0FBQTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1NlcnZpY2VzL1NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtYXd7XG4gICAgbGl7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"], encapsulation: 2 });
    return ServicesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'services-section',
                templateUrl: './Services.component.html',
                styleUrls: ['./Services.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/Team/Team.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/globalFrontendComponents/Team/Team.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function TeamComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", member_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.position);
} }
var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        /** Title for section **/
        this.Title = 'Dummy Title';
        /** Desc for section **/
        this.Desc = 'Dummy Description';
    }
    TeamComponent.prototype.ngOnInit = function () { };
    TeamComponent.prototype.ngAfterViewInit = function () {
    };
    TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["team"]], inputs: { Title: ["title", "Title"], Desc: ["desc", "Desc"], Data: ["data", "Data"] }, decls: 10, vars: 3, consts: [[1, "block-space"], [1, "container"], [1, "row", "justify-content-center", "text-center", "mb-5"], [1, "col-lg-8"], [1, "display-3"], [1, "lead", "text-muted"], [1, "row"], ["class", "col-md-6 col-lg-3 mb-5 mb-lg-0", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-3", "mb-5", "mb-lg-0"], [1, "px-4"], [1, "rounded-circle", "img-center", "img-fluid", "shadow", "shadow-lg--hover", 2, "width", "200px", 3, "src"], [1, "pt-4", "text-center"], [1, "title"], [1, "d-block", "mb-1"], [1, "h6", "text-muted"], [1, "mt-3"], [1, "btn", "btn-success", "btn-icon-only", "rounded-circle"], [1, "fa", "fa-twitter", "text-white"], [1, "fa", "fa-facebook", "text-white"], [1, "fa", "fa-dribbble", "text-white"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeamComponent_div_9_Template, 16, 3, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Desc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1RlYW0vVGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbEZyb250ZW5kQ29tcG9uZW50cy9UZWFtL1RlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return TeamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'team',
                templateUrl: './Team.component.html',
                styleUrls: ['./Team.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/Testimonial/Testimonial.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/Testimonial/Testimonial.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TestimonialComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var testimonial_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimonial_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", testimonial_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", testimonial_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimonial_r2.position);
} }
var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
        /** Title for baner **/
        this.Title = 'Dummy Title';
        /** Description for baner **/
        this.Desc = 'Description';
        this.slideConfig = {
            centerMode: true,
            centerPadding: '34%',
            slidesToShow: 1,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        centerPadding: '10px',
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                }
            ]
        };
    }
    TestimonialComponent.prototype.ngOnInit = function () { };
    TestimonialComponent.prototype.ngAfterViewInit = function () {
    };
    TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
    TestimonialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["testimonial"]], inputs: { Title: ["title", "Title"], Desc: ["desc", "Desc"], Data: ["data", "Data"] }, decls: 11, vars: 4, consts: [[1, "block-space", "bg-secondary"], [1, "block-head", "text-center", "mb-5"], [1, "head-line", "display-3"], [1, "col-12", "col-md-7", "mx-auto"], [1, "lead", "mt-2", "head-desc"], [1, "fullwidth-carousel-container", "margin-top-20"], [1, "carousel", "testimonial-carousel", "testimonials", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide fw-carousel-review", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide", "fw-carousel-review"], [1, "testimonial-box"], [1, "testimonial"], [1, "testimonial-author"], ["alt", "", 3, "src"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-slick-carousel", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestimonialComponent_div_10_Template, 10, 4, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Desc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Data);
        } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFJQSxtQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQUNRO0VBQ0ksY0FBQTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsRnJvbnRlbmRDb21wb25lbnRzL1Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtYXd7XG4gICAgbGl7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"], encapsulation: 2 });
    return TestimonialComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'testimonial',
                templateUrl: './Testimonial.component.html',
                styleUrls: ['./Testimonial.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { Title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], Desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], Data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['data']
        }] }); })();


/***/ }),

/***/ "./src/app/globalFrontendComponents/global.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/globalFrontendComponents/global.module.ts ***!
  \***********************************************************/
/*! exports provided: GlobalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalModule", function() { return GlobalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _globalFrontendComponents_MapBanner_MapBanner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalFrontendComponents/MapBanner/MapBanner.component */ "./src/app/globalFrontendComponents/MapBanner/MapBanner.component.ts");
/* harmony import */ var _globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalFrontendComponents/TitleBar/TitleBar.component */ "./src/app/globalFrontendComponents/TitleBar/TitleBar.component.ts");
/* harmony import */ var _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globalFrontendComponents/Pagination/Pagination.component */ "./src/app/globalFrontendComponents/Pagination/Pagination.component.ts");
/* harmony import */ var _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalFrontendComponents/Rating/Rating.component */ "./src/app/globalFrontendComponents/Rating/Rating.component.ts");
/* harmony import */ var _Team_Team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Team/Team.component */ "./src/app/globalFrontendComponents/Team/Team.component.ts");
/* harmony import */ var _Banner_Banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Banner/Banner.component */ "./src/app/globalFrontendComponents/Banner/Banner.component.ts");
/* harmony import */ var _PopuplarCategories_PopularCategories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PopuplarCategories/PopularCategories.component */ "./src/app/globalFrontendComponents/PopuplarCategories/PopularCategories.component.ts");
/* harmony import */ var _MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MostVisitedPlaces/MostVisitedPlaces.component */ "./src/app/globalFrontendComponents/MostVisitedPlaces/MostVisitedPlaces.component.ts");
/* harmony import */ var _RecentBlog_RecentBlog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RecentBlog/RecentBlog.component */ "./src/app/globalFrontendComponents/RecentBlog/RecentBlog.component.ts");
/* harmony import */ var _FeatureSection_FeatureSection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FeatureSection/FeatureSection.component */ "./src/app/globalFrontendComponents/FeatureSection/FeatureSection.component.ts");
/* harmony import */ var _Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Testimonial/Testimonial.component */ "./src/app/globalFrontendComponents/Testimonial/Testimonial.component.ts");
/* harmony import */ var _globalFrontendComponents_FeatureGridSection_FeatureGridSection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../globalFrontendComponents/FeatureGridSection/FeatureGridSection.component */ "./src/app/globalFrontendComponents/FeatureGridSection/FeatureGridSection.component.ts");
/* harmony import */ var _Pricing_Pricing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pricing/Pricing.component */ "./src/app/globalFrontendComponents/Pricing/Pricing.component.ts");
/* harmony import */ var _ParallaxSection_Parallax_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ParallaxSection/Parallax.component */ "./src/app/globalFrontendComponents/ParallaxSection/Parallax.component.ts");
/* harmony import */ var _Services_Services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Services/Services.component */ "./src/app/globalFrontendComponents/Services/Services.component.ts");




// import { BarRatingModule } from "ngx-bar-rating";


















var GlobalModule = /** @class */ (function () {
    function GlobalModule() {
    }
    GlobalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlobalModule });
    GlobalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlobalModule_Factory(t) { return new (t || GlobalModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // BarRatingModule,
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' })
            ]] });
    return GlobalModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalModule, { declarations: [_globalFrontendComponents_MapBanner_MapBanner_component__WEBPACK_IMPORTED_MODULE_5__["MapBannerComponent"],
        _globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_6__["TitleBarComponent"],
        _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"],
        _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
        _Team_Team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
        _Banner_Banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
        _PopuplarCategories_PopularCategories_component__WEBPACK_IMPORTED_MODULE_11__["PopularCategoriesComponent"],
        _MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_12__["MostVisitedPlacesComponent"],
        _RecentBlog_RecentBlog_component__WEBPACK_IMPORTED_MODULE_13__["RecentBlogComponent"],
        _FeatureSection_FeatureSection_component__WEBPACK_IMPORTED_MODULE_14__["FeatureSectionComponent"],
        _Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"],
        _globalFrontendComponents_FeatureGridSection_FeatureGridSection_component__WEBPACK_IMPORTED_MODULE_16__["FeatureGridSectionComponent"],
        _Pricing_Pricing_component__WEBPACK_IMPORTED_MODULE_17__["PricingComponent"],
        _ParallaxSection_Parallax_component__WEBPACK_IMPORTED_MODULE_18__["ParallaxComponent"],
        _Services_Services_component__WEBPACK_IMPORTED_MODULE_19__["ServicesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        // BarRatingModule,
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]], exports: [_globalFrontendComponents_MapBanner_MapBanner_component__WEBPACK_IMPORTED_MODULE_5__["MapBannerComponent"],
        _globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_6__["TitleBarComponent"],
        _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"],
        _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
        _Team_Team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
        _Banner_Banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
        _PopuplarCategories_PopularCategories_component__WEBPACK_IMPORTED_MODULE_11__["PopularCategoriesComponent"],
        _MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_12__["MostVisitedPlacesComponent"],
        _RecentBlog_RecentBlog_component__WEBPACK_IMPORTED_MODULE_13__["RecentBlogComponent"],
        _FeatureSection_FeatureSection_component__WEBPACK_IMPORTED_MODULE_14__["FeatureSectionComponent"],
        _Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"],
        _globalFrontendComponents_FeatureGridSection_FeatureGridSection_component__WEBPACK_IMPORTED_MODULE_16__["FeatureGridSectionComponent"],
        _Pricing_Pricing_component__WEBPACK_IMPORTED_MODULE_17__["PricingComponent"],
        _ParallaxSection_Parallax_component__WEBPACK_IMPORTED_MODULE_18__["ParallaxComponent"],
        _Services_Services_component__WEBPACK_IMPORTED_MODULE_19__["ServicesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    // BarRatingModule,
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' })
                ],
                declarations: [
                    _globalFrontendComponents_MapBanner_MapBanner_component__WEBPACK_IMPORTED_MODULE_5__["MapBannerComponent"],
                    _globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_6__["TitleBarComponent"],
                    _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"],
                    _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
                    _Team_Team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                    _Banner_Banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
                    _PopuplarCategories_PopularCategories_component__WEBPACK_IMPORTED_MODULE_11__["PopularCategoriesComponent"],
                    _MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_12__["MostVisitedPlacesComponent"],
                    _RecentBlog_RecentBlog_component__WEBPACK_IMPORTED_MODULE_13__["RecentBlogComponent"],
                    _FeatureSection_FeatureSection_component__WEBPACK_IMPORTED_MODULE_14__["FeatureSectionComponent"],
                    _Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"],
                    _globalFrontendComponents_FeatureGridSection_FeatureGridSection_component__WEBPACK_IMPORTED_MODULE_16__["FeatureGridSectionComponent"],
                    _Pricing_Pricing_component__WEBPACK_IMPORTED_MODULE_17__["PricingComponent"],
                    _ParallaxSection_Parallax_component__WEBPACK_IMPORTED_MODULE_18__["ParallaxComponent"],
                    _Services_Services_component__WEBPACK_IMPORTED_MODULE_19__["ServicesComponent"]
                ],
                exports: [
                    _globalFrontendComponents_MapBanner_MapBanner_component__WEBPACK_IMPORTED_MODULE_5__["MapBannerComponent"],
                    _globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_6__["TitleBarComponent"],
                    _globalFrontendComponents_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"],
                    _globalFrontendComponents_Rating_Rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
                    _Team_Team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                    _Banner_Banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
                    _PopuplarCategories_PopularCategories_component__WEBPACK_IMPORTED_MODULE_11__["PopularCategoriesComponent"],
                    _MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_12__["MostVisitedPlacesComponent"],
                    _RecentBlog_RecentBlog_component__WEBPACK_IMPORTED_MODULE_13__["RecentBlogComponent"],
                    _FeatureSection_FeatureSection_component__WEBPACK_IMPORTED_MODULE_14__["FeatureSectionComponent"],
                    _Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"],
                    _globalFrontendComponents_FeatureGridSection_FeatureGridSection_component__WEBPACK_IMPORTED_MODULE_16__["FeatureGridSectionComponent"],
                    _Pricing_Pricing_component__WEBPACK_IMPORTED_MODULE_17__["PricingComponent"],
                    _ParallaxSection_Parallax_component__WEBPACK_IMPORTED_MODULE_18__["ParallaxComponent"],
                    _Services_Services_component__WEBPACK_IMPORTED_MODULE_19__["ServicesComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~listing-listing-module~pages-pages-module.js.map