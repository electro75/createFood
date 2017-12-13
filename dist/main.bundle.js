webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./recipes/recipes.module": [
		"../../../../../src/app/recipes/recipes.module.ts",
		"recipes.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__core_home_home_component__["a" /* HomeComponent */] },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */] })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"col-12\">\n  \t<router-outlet></router-outlet>\n<!--     <app-recipes *ngIf=\"loadedFeature === 'recipe'\"></app-recipes>\n    <app-shopping-list *ngIf=\"loadedFeature !== 'recipe'\"></app-shopping-list> -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: "AIzaSyDlyBkpAKyL78ycp1RmPRQxqDADSxqlUZ4",
            authDomain: "recipe-book-80977.firebaseapp.com"
        });
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list_module__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list_module__["a" /* ShoppingListModule */],
                __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */] }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__["a" /* AuthRoutingModule */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.username = '';
    }
    AuthService.prototype.signupUser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['/']);
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getToken()
                .then(function (token) {
                _this.token = token;
            });
        })
            .catch(function (error) { console.log(error); });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/']);
            console.log(response.email);
            _this.username = _this.genUsername(response.email);
            console.log(_this.username);
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getToken()
                .then(function (token) { _this.token = token; });
        }).catch(function (error) { console.log(error); });
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
        this.token = null;
        this.router.navigate(['signin']);
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getToken()
            .then(function (token) { _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.genUsername = function (str) {
        var newstr = '';
        for (var i = 0; i < str.length; i++) {
            if (str[i] != '@') {
                newstr = newstr + str[i];
            }
            else {
                break;
            }
        }
        return newstr;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n\t\t<form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Mail</label>\n\t\t\t\t<input type=\"email\" name=\"email\" ngModel class=\"form-control\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"Password\">Password</label>\n\t\t\t\t<input type=\"password\" name=\"password\" ngModel class=\"form-control\">\n\t\t\t</div>\t\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\n\t\t</form>\t\t\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n\t\t<form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Mail</label>\n\t\t\t\t<input type=\"email\" name=\"email\" ngModel class=\"form-control\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"Password\">Password</label>\n\t\t\t\t<input type=\"password\" name=\"password\" ngModel class=\"form-control\">\n\t\t\t</div>\t\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\" >Sign Up</button>\n\t\t</form>\t\t\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipes_recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_auth_interceptor__ = __webpack_require__("../../../../../src/app/shared/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_logging_interceptor__ = __webpack_require__("../../../../../src/app/shared/logging.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_7__recipes_recipe_service__["a" /* RecipeService */], __WEBPACK_IMPORTED_MODULE_8__shared_data_storage_service__["a" /* DataStorageService */], __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_10__shared_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11__shared_logging_interceptor__["a" /* LoggingInterceptor */], multi: true }]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<a routerLink=\"/\" class=\"navbar-brand\">Recipe Book</a>\r\n\t\t</div>\r\n\t\t<div class=\"collapse navbar-collapse\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li routerLinkActive = \"active\"><a routerLink=\"/recipes\">Recipe</a></li>\r\n\t\t\t\t<li routerLinkActive = \"active\"><a routerLink=\"/shopping-list\">Shopping</a></li>\r\n\t\t\t</ul>\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\r\n\t\t\t\t<ng-template [ngIf]=\"!isAuthenticated()\">\r\n\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/signup\">Register</a></li>\r\n\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/signin\">Login</a></li>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<li><a style = \"cursor: pointer\" (click)=\"onLogout()\" *ngIf=\"isAuthenticated()\">Logout</a></li>\r\n\t\t\t\t<li class=\"dropdown\" appDropdown *ngIf=\"isAuthenticated()\">\r\n\t\t\t\t\t<a style=\"cursor: pointer\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a style=\"cursor: pointer\"(click)=\"onSave()\">Save</a></li>\r\n\t\t\t\t\t\t<li><a style=\"cursor: pointer\"(click)=\"onFetchData()\">Fetch</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dataStorageService, authService) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
    }
    HeaderComponent.prototype.onSave = function () {
        this.dataStorageService.storeRecipes()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.dataStorageService.getRecipes();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/core/header/header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to the Recipe Book {{ username | uppercase}} !</h2>"

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.username = this.authService.username;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/core/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recipes/recipe.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "../../../../../src/app/recipes/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_model__ = __webpack_require__("../../../../../src/app/recipes/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeService = (function () {
    function RecipeService(slService) {
        this.slService = slService;
        this.recipesChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.recipes = [
            new __WEBPACK_IMPORTED_MODULE_2__recipe_model__["a" /* Recipe */]('Sassy tots', 'Crispy toast potatoes', 'http://www.seriouseats.com/recipes/assets_c/2016/12/20161201-crispy-roast-potatoes-29-thumb-1500xauto-435281.jpg', [
                new __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__["a" /* Ingredient */]('masala', 50),
                new __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__["a" /* Ingredient */]('Potato', 7)
            ]),
            new __WEBPACK_IMPORTED_MODULE_2__recipe_model__["a" /* Recipe */]('Ibssano', 'Chicken Kebab', 'http://www.ibssano.com/wpimages/wp72044030_05_06.jpg', [
                new __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__["a" /* Ingredient */]('chicken', 1),
                new __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__["a" /* Ingredient */]('kothimbir', 15)
            ])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.trfIngredients = function (ingredients) {
        this.slService.addIngredients(ingredients);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shopping_list_shopping_list_service__["a" /* ShoppingListService */]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var copiedReq = req.clone({
            //headers: req.headers.set(or)append('','')
            params: req.params.set('auth', this.authService.getToken())
        });
        console.log('Intercepted!: ' + req);
        return next.handle(copiedReq);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipes_recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataStorageService = (function () {
    function DataStorageService(httpClient, recipeService, authService) {
        this.httpClient = httpClient;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        //		return this.httpClient.put('https://recipe-book-80977.firebaseio.com/recipe.json?auth='+token, this.recipeService.getRecipes());
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('PUT', 'https://recipe-book-80977.firebaseio.com/recipe.json', this.recipeService.getRecipes(), {
            reportProgress: true
        });
        return this.httpClient.request(req);
    };
    DataStorageService.prototype.getRecipes = function () {
        var _this = this;
        //const headers = new HttpHeaders().set('Authorization', '/some key/');
        this.httpClient.get('https://recipe-book-80977.firebaseio.com/recipe.json', {
            observe: 'body'
            //	headers: headers
        })
            .map(function (recipes) {
            console.log(recipes);
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var recipe = recipes_1[_i];
                if (!recipe['ingredients']) {
                    console.log(recipe);
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        })
            .subscribe(function (recipes) {
            _this.recipeService.setRecipes(recipes);
        });
    };
    DataStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__recipes_recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/ingredient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "../../../../../src/app/shared/logging.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");

var LoggingInterceptor = (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).do(function (event) {
            console.log('logging interceptor in action ' + event);
        });
    };
    return LoggingInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<form (ngSubmit)=\"onAddItem(f)\" #f=\"ngForm\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-5 form-group\">\n\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t<input type=\"text\" id=\"name\" class=\"form-control\"\n\t\t\t\t\tname=\"name\" required\n\t\t\t\t\tngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-2 form-group\">\n\t\t\t\t\t<label for=\"amount\">Amount</label>\n\t\t\t\t\t<input type=\"number\" id=\"amount\" class=\"form-control\"\n\t\t\t\t\tname=\"amount\" required pattern='^[1-9]+[0-9]*$'\n\t\t\t\t\tngModel>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<button class=\"btn btn-success\" type=\"submit\" \n\t\t\t\t[disabled]=\"!f.valid\"> {{editMode? \"Update\":\"Add\"}} </button>\n\t\t\t\t<button class=\"btn btn-danger\" type=\"button\" \n\t\t\t\t(click)=\"onDelete()\" [disabled]=\"!editMode\">Delete</button>\n\t\t\t\t<button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingEditComponent = (function () {
    function ShoppingEditComponent(slService) {
        this.slService = slService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.slService.editingInit.subscribe(function (id) {
            _this.editItemIndex = id;
            _this.editMode = true;
            _this.edittedItem = _this.slService.getIngredient(id);
            _this.slForm.setValue({
                name: _this.edittedItem.name,
                amount: _this.edittedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onAddItem = function (form) {
        var value = form.value;
        var newIngredient = new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */](value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editItemIndex, newIngredient);
        }
        else {
            this.slService.addIngredient(newIngredient);
        }
        this.editMode = false;
        this.slForm.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.slService.deleteIngredient(this.editItemIndex);
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], ShoppingEditComponent.prototype, "slForm", void 0);
    ShoppingEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-edit',
            template: __webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shopping_list_service__["a" /* ShoppingListService */]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-10\">\n\t\t<app-shopping-edit></app-shopping-edit>\n\t\t<hr>\n\t\t<ul class=\"list-group\">\n\t\t\t<a class=\"list-group-item\" style=\"cursor: pointer\"\n\t\t\t *ngFor=\"let ingredient of ingredients; let i = index\" (click)=\"onEditItem(i)\" >\n\t\t\t\t{{ ingredient.name }} ({{ingredient.amount}})\n\t\t\t</a>\n\t\t</ul>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = (function () {
    function ShoppingListComponent(slService) {
        this.slService = slService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.slService.getIngredients();
        this.subscription = this.slService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.slService.editingInit.next(index);
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-list',
            template: __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_edit_shopping_edit_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShoppingListModule = (function () {
    function ShoppingListModule() {
    }
    ShoppingListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__["a" /* ShoppingListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shopping_edit_shopping_edit_component__["a" /* ShoppingEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ]
        })
    ], ShoppingListModule);
    return ShoppingListModule;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/shared/ingredient.model.ts");


var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.editingInit = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.ingredients = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_ingredient_model__["a" /* Ingredient */]('Potatoes', 6),
            new __WEBPACK_IMPORTED_MODULE_1__shared_ingredient_model__["a" /* Ingredient */]('Corriander', 15)
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        var _a;
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map