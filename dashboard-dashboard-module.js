(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/DashboardOne/DashboardOne.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/DashboardOne/DashboardOne.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOneComponent", function() { return DashboardOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globalFrontendComponents_Banner_Banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalFrontendComponents/Banner/Banner.component */ "./src/app/globalFrontendComponents/Banner/Banner.component.ts");
/* harmony import */ var _globalFrontendComponents_PopuplarCategories_PopularCategories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globalFrontendComponents/PopuplarCategories/PopularCategories.component */ "./src/app/globalFrontendComponents/PopuplarCategories/PopularCategories.component.ts");
/* harmony import */ var _globalFrontendComponents_MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globalFrontendComponents/MostVisitedPlaces/MostVisitedPlaces.component */ "./src/app/globalFrontendComponents/MostVisitedPlaces/MostVisitedPlaces.component.ts");





var DashboardOneComponent = /** @class */ (function () {
    function DashboardOneComponent() {
        this.bannerTitle = 'Trouver des attractions à proximité';
        //bannerDesc : string = 'Expolore top-rated attractions, activities and more';
        this.bannerDesc = '';
        this.bannerImage = 'assets/images/main-search-background-01.jpg';
        this.popularCategoriesTitle = 'Catégories populaires';
        this.popularCategoriesDesc = 'Parcourir les catégories les plus désirables';
        this.categories = [
            {
                title: 'appart',
                subTitle: '64 listings',
                image: 'assets/images/cat-img-6.jpg',
                icon: 'fa-2x fa fa-bed'
            },
            {
                title: 'appart',
                subTitle: '14 listings',
                image: 'assets/images/cat-img-6.jpg',
                icon: 'fa-2x fa fa-shopping-bag'
            },
            {
                title: 'appart',
                subTitle: '67 listings',
                image: 'assets/images/cat-img-6.jpg',
                icon: 'fa-2x fa fa-calendar'
            },
            {
                title: 'appart',
                subTitle: '27 listings',
                image: 'assets/images/cat-img-6.jpg',
                icon: 'fa-2x fa fa-glass'
            },
            {
                title: 'appart',
                subTitle: '22 listings',
                image: 'assets/images/cat-img-6.jpg',
                icon: 'fa-2x fa fa-glass'
            },
            {
                title: 'appart',
                subTitle: '127 listings',
                image: 'assets/images/cat-img-6.jpg',
                icon: 'fa-2x fa fa-glass'
            }
        ];
        this.mostVisitedPlacesTitle = 'Nous sommes leader du domaine';
        this.mostVisitedPlacesDesc = 'Découvrez les biens immobiliers les mieux adaptes';
        this.places = [
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Disponible',
                category: 'appart',
                title: 'Maledy appart',
                address: '95800, cergy, France',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
        ];
    }
    DashboardOneComponent.prototype.ngOnInit = function () { };
    DashboardOneComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardOneComponent.ɵfac = function DashboardOneComponent_Factory(t) { return new (t || DashboardOneComponent)(); };
    DashboardOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardOneComponent, selectors: [["dashboard-one"]], decls: 3, vars: 9, consts: [[3, "title", "desc", "bgImageUrl"], [3, "title", "desc", "data"]], template: function DashboardOneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "banner-version1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "popular-categories", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "most-visited-places", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.bannerTitle)("desc", ctx.bannerDesc)("bgImageUrl", ctx.bannerImage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.popularCategoriesTitle)("desc", ctx.popularCategoriesDesc)("data", ctx.categories);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.mostVisitedPlacesTitle)("desc", ctx.mostVisitedPlacesDesc)("data", ctx.places);
        } }, directives: [_globalFrontendComponents_Banner_Banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _globalFrontendComponents_PopuplarCategories_PopularCategories_component__WEBPACK_IMPORTED_MODULE_2__["PopularCategoriesComponent"], _globalFrontendComponents_MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_3__["MostVisitedPlacesComponent"]], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Rhc2hib2FyZE9uZS9EYXNoYm9hcmRPbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvRGFzaGJvYXJkT25lL0Rhc2hib2FyZE9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWF3e1xuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
    return DashboardOneComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-one',
                templateUrl: './DashboardOne.component.html',
                styleUrls: ['./DashboardOne.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalFrontendComponents/global.module */ "./src/app/globalFrontendComponents/global.module.ts");
/* harmony import */ var _DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardOne/DashboardOne.component */ "./src/app/dashboard/DashboardOne/DashboardOne.component.ts");








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_4__["GlobalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutes"]),
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_5__["DashboardOneComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_4__["GlobalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_4__["GlobalModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutes"]),
                ],
                declarations: [
                    _DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_5__["DashboardOneComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardOne/DashboardOne.component */ "./src/app/dashboard/DashboardOne/DashboardOne.component.ts");

var DashboardRoutes = [
    { path: '', component: _DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_0__["DashboardOneComponent"] },
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map