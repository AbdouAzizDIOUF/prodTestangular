(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/Booking/Booking.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/Booking/Booking.component.ts ***!
  \****************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalFrontendComponents/TitleBar/TitleBar.component */ "./src/app/globalFrontendComponents/TitleBar/TitleBar.component.ts");



var BookingComponent = /** @class */ (function () {
    function BookingComponent() {
    }
    BookingComponent.prototype.ngOnInit = function () { };
    BookingComponent.prototype.ngAfterViewInit = function () {
        var radios = document.querySelectorAll('.payment-tab-trigger > input');
        for (var i = 0; i < radios.length; i++) {
            radios[i].addEventListener('change', expandAccordion);
        }
        function expandAccordion(event) {
            var allTabs = document.querySelectorAll('.payment-tab');
            for (var i = 0; i < allTabs.length; i++) {
                allTabs[i].classList.remove('payment-tab-active');
            }
            event.target.parentNode.parentNode.classList.add('payment-tab-active');
        }
    };
    BookingComponent.ɵfac = function BookingComponent_Factory(t) { return new (t || BookingComponent)(); };
    BookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingComponent, selectors: [["booking"]], decls: 140, vars: 0, consts: [[1, "main-wrapper"], ["title", "Booking Form", "subtitle", "Fill details for booking"], [1, "content"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-md-8", "padding-right-30"], [1, "mb-4"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "placeholder", "First Name", 1, "form-control", "form-control-alternative"], ["type", "text", "placeholder", "Last Name", 1, "form-control", "form-control-alternative"], ["type", "text", "placeholder", "E mail", 1, "form-control", "form-control-alternative"], ["type", "text", "placeholder", "Phone", 1, "form-control", "form-control-alternative"], [1, "mb-3"], [1, "nav-wrapper"], ["id", "tabs-icons-text", "role", "tablist", 1, "nav", "nav-pills", "nav-fill", "flex-column", "flex-md-row"], [1, "nav-item"], ["id", "tabs-icons-text-1-tab", "data-toggle", "tab", "href", "#tabs-icons-text-1", "role", "tab", "aria-controls", "tabs-icons-text-1", "aria-selected", "true", 1, "nav-link", "mb-sm-3", "mb-md-0", "active"], [1, "fa", "fa-credit-card", "mr-2"], ["id", "tabs-icons-text-2-tab", "data-toggle", "tab", "href", "#tabs-icons-text-2", "role", "tab", "aria-controls", "tabs-icons-text-2", "aria-selected", "false", 1, "nav-link", "mb-sm-3", "mb-md-0"], [1, "fa", "fa-paypal", "mr-2"], [1, "card", "shadow"], [1, "card-body"], ["id", "myTabContent", 1, "tab-content"], ["id", "tabs-icons-text-1", "role", "tabpanel", "aria-labelledby", "tabs-icons-text-1-tab", 1, "tab-pane", "fade", "show", "active"], ["action", ""], [1, "col-md-12"], ["type", "text", "placeholder", "Name", 1, "form-control", "form-control-alternative"], ["type", "text", "placeholder", "Card Number", 1, "form-control", "form-control-alternative"], [1, "custom-select", "mb-4", "form-control-alternative"], ["selected", ""], ["value", "January"], ["value", "February"], ["value", "March"], ["value", "April"], ["value", "May"], ["value", "June"], ["value", "July"], ["value", "August"], ["value", "September"], ["value", "October"], ["value", "November"], ["value", "December"], ["value", "2018"], ["value", "2019"], ["value", "2020"], ["value", "2021"], ["value", "2022"], ["value", "2023"], ["type", "text", "placeholder", "CVV", 1, "form-control", "form-control-alternative"], ["type", "button", 1, "btn", "btn-primary"], ["id", "tabs-icons-text-2", "role", "tabpanel", "aria-labelledby", "tabs-icons-text-2-tab", 1, "tab-pane", "fade"], [1, "fa", "fa-paypal"], [1, "col-lg-4", "col-md-4"], [1, "order-summary-widget"], [1, "listing-item"], ["src", "assets/images/cat-img-2.jpg", "alt", ""], [1, "listing-item-content", "pt-3"], [1, "badge", "badge-pill", "list-banner", "badge-success", "text-uppercase"], [1, "bg-secondary", "p-4"], [1, "fa", "text-primary", "fa-calendar-check-o"], [1, "summery"], [1, "total-costs"]], template: function BookingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "title-bar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Personal Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Payment Method");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Credit/Debit Card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Paypal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "form", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "January");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "February");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "March");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " April");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "May");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "June");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "July");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "August");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "September");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "October");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " November");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " December");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "select", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Year");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "2018");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "2019");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2020");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "2021");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "2022");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "2023");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Paypal is easiest way to pay online");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Log in my Paypal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Note:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "5.0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Burger House");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " 2726 Shinn Street, New York");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Booking Summary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "ul", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Date ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "10/20/2017");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "5:30 PM");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Person ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "2 Adults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Total Cost ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "$546.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_globalFrontendComponents_TitleBar_TitleBar_component__WEBPACK_IMPORTED_MODULE_1__["TitleBarComponent"]], styles: [".summery li {\n  list-style: none;\n  margin-bottom: 0.5rem;\n  /* font-size: 1rem; */\n}\n\n.summery {\n  padding: 0;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQm9va2luZy9Cb29raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUFFRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0Jvb2tpbmcvQm9va2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdW1tZXJ5IGxpIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXHQvKiBmb250LXNpemU6IDFyZW07ICovXG59XG4uc3VtbWVyeSB7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbi10b3A6IDEuNXJlbTtcbn0iXX0= */"], encapsulation: 2 });
    return BookingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'booking',
                templateUrl: './Booking.component.html',
                styleUrls: ['./Booking.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "./node_modules/ngx-dropzone-wrapper/__ivy_ngcc__/fesm2015/ngx-dropzone-wrapper.js");
/* harmony import */ var _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Booking/Booking.component */ "./src/app/pages/Booking/Booking.component.ts");
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contact/Contact.component */ "./src/app/pages/Contact/Contact.component.ts");
/* harmony import */ var _About_About_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About/About.component */ "./src/app/pages/About/About.component.ts");
/* harmony import */ var _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globalFrontendComponents/global.module */ "./src/app/globalFrontendComponents/global.module.ts");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");












var DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
};
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, providers: [
            {
                provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_3__["DROPZONE_CONFIG"],
                useValue: DEFAULT_DROPZONE_CONFIG
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_7__["GlobalModule"],
                ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_3__["DropzoneModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_8__["PagesRoutes"]),
            ]] });
    return PagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_Contact_Contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _About_About_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_4__["BookingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_7__["GlobalModule"],
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_3__["DropzoneModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_7__["GlobalModule"],
                    ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_3__["DropzoneModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_8__["PagesRoutes"]),
                ],
                declarations: [
                    _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                    _About_About_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_4__["BookingComponent"]
                ],
                providers: [
                    {
                        provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_3__["DROPZONE_CONFIG"],
                        useValue: DEFAULT_DROPZONE_CONFIG
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking/Booking.component */ "./src/app/pages/Booking/Booking.component.ts");
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact/Contact.component */ "./src/app/pages/Contact/Contact.component.ts");
/* harmony import */ var _About_About_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About/About.component */ "./src/app/pages/About/About.component.ts");



var PagesRoutes = [
    {
        path: 'contact-us',
        component: _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]
    },
    {
        path: 'booking',
        component: _Booking_Booking_component__WEBPACK_IMPORTED_MODULE_0__["BookingComponent"]
    },
    {
        path: 'about-us',
        component: _About_About_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: '',
        component: _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map