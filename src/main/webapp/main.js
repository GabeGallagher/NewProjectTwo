(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _complaint_complaint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complaint/complaint.component */ "./src/app/complaint/complaint.component.ts");
/* harmony import */ var _storefront_storefront_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storefront/storefront.component */ "./src/app/storefront/storefront.component.ts");
/* harmony import */ var _storefront_registration_storefront_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storefront-registration/storefront-registration.component */ "./src/app/storefront-registration/storefront-registration.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
    },
    {
        path: 'item',
        component: _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]
    },
    {
        path: 'inventory/:ITEMID',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__["InventoryComponent"]
    },
    {
        path: 'registration',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]
    },
    {
        path: 'complaint',
        component: _complaint_complaint_component__WEBPACK_IMPORTED_MODULE_7__["ComplaintComponent"]
    },
    {
        path: 'storefront',
        component: _storefront_storefront_component__WEBPACK_IMPORTED_MODULE_8__["StorefrontComponent"]
    },
    {
        path: 'storefront-registration',
        component: _storefront_registration_storefront_registration_component__WEBPACK_IMPORTED_MODULE_9__["StorefrontRegistrationComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{ title }}!\r\n  </h1>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Buying & Selling Platform';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _complaint_complaint_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./complaint/complaint.component */ "./src/app/complaint/complaint.component.ts");
/* harmony import */ var _storefront_storefront_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storefront/storefront.component */ "./src/app/storefront/storefront.component.ts");
/* harmony import */ var _storefront_registration_storefront_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storefront-registration/storefront-registration.component */ "./src/app/storefront-registration/storefront-registration.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"],
                _complaint_complaint_component__WEBPACK_IMPORTED_MODULE_10__["ComplaintComponent"],
                _storefront_storefront_component__WEBPACK_IMPORTED_MODULE_11__["StorefrontComponent"],
                _storefront_registration_storefront_registration_component__WEBPACK_IMPORTED_MODULE_12__["StorefrontRegistrationComponent"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/complaint/complaint.component.css":
/*!***************************************************!*\
  !*** ./src/app/complaint/complaint.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complaint/complaint.component.html":
/*!****************************************************!*\
  !*** ./src/app/complaint/complaint.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  complaint works!\n</p>\n\n<form action=\"fileComplaint\">\n  <textarea name=\"description\" id=\"complaintDescription\" cols=\"30\" rows=\"10\"></textarea>\n  <button (click)=\"onSubmit()\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/complaint/complaint.component.ts":
/*!**************************************************!*\
  !*** ./src/app/complaint/complaint.component.ts ***!
  \**************************************************/
/*! exports provided: ComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintComponent", function() { return ComplaintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComplaintComponent = /** @class */ (function () {
    function ComplaintComponent(router) {
        this.router = router;
    }
    ComplaintComponent.prototype.onSubmit = function () {
        this.router.navigate(['user']);
    };
    ComplaintComponent.prototype.ngOnInit = function () {
    };
    ComplaintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-complaint',
            template: __webpack_require__(/*! ./complaint.component.html */ "./src/app/complaint/complaint.component.html"),
            styles: [__webpack_require__(/*! ./complaint.component.css */ "./src/app/complaint/complaint.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ComplaintComponent);
    return ComplaintComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getAccounts = function () {
        return this.http.get('http://localhost:3000/ACCOUNTS');
    };
    DataService.prototype.getInventory = function () {
        return this.http.get('http://localhost:3000/ITEMS');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let item of inventory$\">\n    <a routerLink = \"/inventory/{{ITEMS.ITEMID}}\">{{ITEMS.NAME}}</a>\n    <ul>\n      <li>{{ ITEMS.DESCRIPTION }}</li>\n      <li>{{ ITEMS.PRICE }}</li>\n      <li>{{ ITEMS.QUANTITY }}</li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(data) {
        this.data = data;
    }
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getInventory().subscribe(function (data) { return _this.inventory$ = data; });
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-c2>\r\n\r\n  <h1>Item Name</h1>\r\n\r\n  <div id=\"img\">\r\n    <img src=\"assets/img/cat.jpg\" alt=\"could not display\">\r\n  </div>\r\n\r\n  <label for=\"price\">Price</label>\r\n  <p>$ price goes here</p>\r\n\r\n  <label for=\"soldBy\">Sold by: </label>\r\n  <p id=\"seller\">seller here</p>\r\n\r\n  <label for=\"descriptionLabel\">Description:</label>\r\n  <p id=\"description\">some long description should go here and just because I want to test the formatting of entires with a lot \r\n    of words and letters I am going to make a ridiculously long, run-on sentence that simply never ends because, well, why not?\r\n  </p>\r\n\r\n  <label for=\"postDate\">Date Posted:</label>\r\n  <p>date posted goes here</p>\r\n\r\n  <label for=\"lastedUpdate\">Update Last: </label>\r\n  <p>last updated goes here</p>\r\n\r\n  <h2>Click button to purchase item</h2>\r\n  <button class=\"btn btn-primary btn-center\" (click)=\"onClick()\">Purchase</button>\r\n  {{clickMessage}}\r\n\r\n\r\n  <div><button class=\"btn btn-primary btn-center\" (click)=\"onBack()\">Back to Shop</button></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = /** @class */ (function () {
    function ItemComponent(router, http) {
        this.router = router;
        this.http = http;
        this.clickMessage = '';
    }
    ItemComponent.prototype.onClick = function () {
        this.clickMessage = 'You Have Purchased the Item!';
        // logic for inserting transactions into DB goes here
    };
    ItemComponent.prototype.onBack = function () {
        this.router.navigate(['user']);
    };
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"login\">\r\n  <div>\r\n    <label for=\"inputUsername\">Username:</label>\r\n    <input type=\"text\" id=\"username\">\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"inputPassword\">Password:</label>\r\n    <input type=\"text\" id=\"password\">\r\n  </div>\r\n\r\n  <div><button (click)=\"onLogin()\">Login</button></div>\r\n  <div><button (click)=\"onSignUp()\">Sign Up</button></div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, data) {
        this.router = router;
        this.data = data;
    }
    LoginComponent.prototype.verifyLoginInfo = function () {
        // submit username/pass from form and get whether it's in db in response
    };
    LoginComponent.prototype.onLogin = function () {
        this.router.navigate(['user']);
        // for (const index in this.users$) {
        //   if (!this.users$.hasOwnProperty(index)) { continue; }
        //   const obj = this.users$[index];
        //   for (const prop in obj) {
        //     if (!obj.hasOwnProperty) { continue; }
        //     console.log(prop + ' = ' + obj[prop]);
        //   }
        // }
    };
    LoginComponent.prototype.onSignUp = function () {
        this.router.navigate(['registration']);
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getAccounts().subscribe(function (data) { return _this.users$ = data; });
        for (var index in this.users$) {
            if (!this.users$.hasOwnProperty(index)) {
                continue;
            }
            var obj = this.users$[index];
            for (var prop in obj) {
                if (!obj.hasOwnProperty) {
                    continue;
                }
                console.log(prop + ' = ' + obj[prop]);
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"login\">\n    <div>\n      <label for=\"inputFirstName\">First Name</label>\n      <input type=\"text\" id=\"firstName\">\n    </div>\n  \n    <div>\n      <label for=\"inputLastName\">Last Name</label>\n      <input type=\"text\" id=\"lastName\">\n    </div>\n  \n    <div>\n      <label for=\"inputUsername\">Username</label>\n      <input type=\"text\" id=\"username\">\n    </div>\n  \n    <div>\n      <label for=\"inputPassword\">Password</label>\n      <input type=\"text\" id=\"password\">\n    </div>\n  \n    <div>\n      <label for=\"inputStreet\">Street Address</label>\n      <input type=\"text\" id=\"street\">\n    </div>\n  \n    <div>\n      <label for=\"inputCity\">City</label>\n      <input type=\"text\" id=\"city\">\n    </div>\n  \n    <div>\n      <label for=\"inputState\">State</label>\n      <input type=\"text\" id=\"state\">\n    </div>\n  \n    <div>\n      <label for=\"inputZip\">Zip Code</label>\n      <input type=\"text\" id=\"zip\">\n    </div>\n  \n    <div>\n      <label for=\"inputEmail\">E-Mail</label>\n      <input type=\"text\" id=\"email\">\n    </div>\n  \n    <div><button (click)=\"onSubmit()\">Submit</button></div>\n  </form>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.onSubmit = function () {
        console.log('Registration submitted');
        // TODO insert infor into Accounts and users tables
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/storefront-registration/storefront-registration.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/storefront-registration/storefront-registration.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/storefront-registration/storefront-registration.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/storefront-registration/storefront-registration.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Please enter shipping information for your new storefront</p>\r\n\r\n<form action=\"createStore\">\r\n  <div>\r\n    <label for=\"storeName\">Storefront Name:</label>\r\n    <input type=\"text\" id=\"storeName\">\r\n  </div>\r\n  \r\n  <div>\r\n    <label for=\"storeStreet\">Street Address:</label>\r\n    <input type=\"text\" id=\"storeStreet\">\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"storeCity\">City:</label>\r\n    <input type=\"text\" id=\"storeCity\">\r\n  </div>\r\n  \r\n  <div>\r\n    <label for=\"storeState\">State:</label>\r\n    <input type=\"text\" id=\"storeState\">\r\n  </div>\r\n  \r\n  <div>\r\n    <label for=\"storeZip\">Zip:</label>\r\n    <input type=\"text\" id=\"storeZip\">\r\n  </div>\r\n\r\n  <div><button (click)=\"onSubmit()\">Submit</button></div>\r\n  {{clickMessage}}\r\n\r\n  <div><button (click) = \"onGoUser()\">Return to User Page</button></div>\r\n\r\n  <div><button (click) = \"onGoStorefront()\">Go To Storefront</button></div>\r\n</form>"

/***/ }),

/***/ "./src/app/storefront-registration/storefront-registration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/storefront-registration/storefront-registration.component.ts ***!
  \******************************************************************************/
/*! exports provided: StorefrontRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorefrontRegistrationComponent", function() { return StorefrontRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorefrontRegistrationComponent = /** @class */ (function () {
    function StorefrontRegistrationComponent(router) {
        this.router = router;
        this.clickMessage = '';
    }
    StorefrontRegistrationComponent.prototype.onSubmit = function () {
        this.clickMessage = 'Storefront Submitted!';
        // Logic for inserting store object to db
    };
    StorefrontRegistrationComponent.prototype.onGoUser = function () {
        this.router.navigate(['user']);
    };
    StorefrontRegistrationComponent.prototype.onGoStorefront = function () {
        this.router.navigate(['storefront']);
    };
    StorefrontRegistrationComponent.prototype.ngOnInit = function () {
    };
    StorefrontRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storefront-registration',
            template: __webpack_require__(/*! ./storefront-registration.component.html */ "./src/app/storefront-registration/storefront-registration.component.html"),
            styles: [__webpack_require__(/*! ./storefront-registration.component.css */ "./src/app/storefront-registration/storefront-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StorefrontRegistrationComponent);
    return StorefrontRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/storefront/storefront.component.css":
/*!*****************************************************!*\
  !*** ./src/app/storefront/storefront.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/storefront/storefront.component.html":
/*!******************************************************!*\
  !*** ./src/app/storefront/storefront.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to Storefront!</h2>\n\n<div>\n  <button class=\"btn btn-primary btn-center\" (click)=\"onShowInventory()\">Show Inventory</button>\n</div>\n\n<div>{{clickMessage}}</div>\n\n<button class=\"btn btn-primary btn-center\" (click)=\"onToAccount()\">Go To User Account</button>"

/***/ }),

/***/ "./src/app/storefront/storefront.component.ts":
/*!****************************************************!*\
  !*** ./src/app/storefront/storefront.component.ts ***!
  \****************************************************/
/*! exports provided: StorefrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorefrontComponent", function() { return StorefrontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorefrontComponent = /** @class */ (function () {
    function StorefrontComponent(router) {
        this.router = router;
        this.clickMessage = '';
    }
    StorefrontComponent.prototype.onShowInventory = function () {
        this.clickMessage = 'Inventory currently not implemented, but the button works!';
        // logic for inserting transactions into DB goes here
    };
    StorefrontComponent.prototype.onToAccount = function () {
        this.router.navigate(['user']);
    };
    StorefrontComponent.prototype.ngOnInit = function () {
    };
    StorefrontComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storefront',
            template: __webpack_require__(/*! ./storefront.component.html */ "./src/app/storefront/storefront.component.html"),
            styles: [__webpack_require__(/*! ./storefront.component.css */ "./src/app/storefront/storefront.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StorefrontComponent);
    return StorefrontComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p routerLink=\"item\"></p>\r\n\r\n<div><button (click)=\"onBrowseItem()\">Browse Item</button></div>\r\n<div><button (click)=\"onRegisterStorefront()\">Create a Storefront</button></div>\r\n<div><button (click)=\"onSubmitComplaint()\">Submit Complaint</button></div>\r\n<div><button (click)=\"onLogout()\">Logout</button></div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(router) {
        this.router = router;
    }
    UserComponent.prototype.onBrowseItem = function () {
        this.router.navigate(['item']);
    };
    UserComponent.prototype.onSubmitComplaint = function () {
        this.router.navigate(['complaint']);
    };
    UserComponent.prototype.onLogout = function () {
        this.router.navigate(['']);
    };
    UserComponent.prototype.onRegisterStorefront = function () {
        this.router.navigate(['storefront-registration']);
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitRepos\GallagherBisgroveProject2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map