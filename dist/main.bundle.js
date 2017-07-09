webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_md5__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchDevicesComponent = (function () {
    function SearchDevicesComponent(http, config, router) {
        this.http = http;
        this.config = config;
        this.router = router;
        this.deviceid = "eabf0612-5fc7-11e7-907b-a6006ad3dba0";
    }
    SearchDevicesComponent.prototype.ngOnInit = function () {
    };
    SearchDevicesComponent.prototype.bind = function () {
        var _this = this;
        if (this.key == undefined || this.key == "") {
            alert('Please add Key first');
            return;
        }
        var data = {
            'did': this.deviceid,
            'uid': this.config.uid,
            'key': __WEBPACK_IMPORTED_MODULE_4_md5__(this.key)
        };
        console.log(data);
        this.http.post(this.config.url + '/api/devices/binding', data).subscribe(function (s) {
            console.log(s.json());
            var body = s.json();
            _this.deviceMessage = body.message;
            if (body.status == "SUCCESS") {
                _this.bindSuccess = true;
                _this.bindError = false;
            }
            else {
                _this.bindSuccess = false;
                _this.bindError = true;
            }
        });
    };
    SearchDevicesComponent.prototype.searchid = function () {
        var _this = this;
        this.device = undefined;
        if (this.deviceid == undefined || this.deviceid == "") {
            alert('Please add device id first');
        }
        this.http.post(this.config.url + '/api/devices/id', { 'did': this.deviceid })
            .subscribe(function (s) {
            console.log(s.json());
            //eabf0612-5fc7-11e7-907b-a6006ad3dba0
            if (s.json().length == 0) {
                _this.message = "Device not found.";
                return;
            }
            _this.message = undefined;
            _this.device = s.json()[0];
            var split = _this.device.did.split("-");
            _this.device.short_did = split[split.length - 1];
            console.log(_this.device);
        });
    };
    return SearchDevicesComponent;
}());
SearchDevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-devices',
        template: __webpack_require__(478),
        styles: [__webpack_require__(442)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], SearchDevicesComponent);

var _a, _b, _c;
//# sourceMappingURL=search-devices.component.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__disconnect_connection_guard__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_config_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SocketService = (function () {
    function SocketService(router, connectionguard, config, cc) {
        var _this = this;
        this.router = router;
        this.connectionguard = connectionguard;
        this.config = config;
        this.cc = cc;
        this.host = this.config.hostname;
        console.log("[SocketService] socket service");
        console.log(this.host);
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"](this.host);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("reconect", function () { return _this.reconnect(); });
    }
    SocketService.prototype.connect = function () {
        console.log("[SocketIO] Connected");
        this.connectionguard.isConnect = true;
    };
    SocketService.prototype.disconnect = function () {
        console.log("[SocketIO] Disconnect");
        this.connectionguard.isConnect = false;
    };
    SocketService.prototype.reconnect = function () {
        console.log("[SocketIO] Reconnect");
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__disconnect_connection_guard__["a" /* ConnectionGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__disconnect_connection_guard__["a" /* ConnectionGuard */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__share_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__share_config_service__["a" /* ConfigService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */]) === "function" && _d || Object])
], SocketService);

var _a, _b, _c, _d;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 273;


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(294);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_guard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_devices_search_devices_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_list_device_list_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_login_guard__["a" /* LoginGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_5__search_devices_search_devices_component__["a" /* SearchDevicesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_login_guard__["a" /* LoginGuard */]] },
    { path: 'device-list', component: __WEBPACK_IMPORTED_MODULE_6__device_list_device_list_component__["a" /* DeviceListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_login_guard__["a" /* LoginGuard */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(458),
        styles: [__webpack_require__(423)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_route__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_guard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_devices_search_devices_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__device_list_device_list_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__device_live_device_live_module__ = __webpack_require__(287);
/* unused harmony export firebaseconfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseconfig = {
    apiKey: "AIzaSyB_TKkQ-I8WdssJMP8qxeGoxdB01gjWLDs",
    authDomain: "greenhouse-e4197.firebaseapp.com",
    databaseURL: "https://greenhouse-e4197.firebaseio.com",
    projectId: "greenhouse-e4197",
    storageBucket: "greenhouse-e4197.appspot.com",
    messagingSenderId: "243165154492"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__search_devices_search_devices_component__["a" /* SearchDevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__device_list_device_list_component__["a" /* DeviceListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_route__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseconfig),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_15__device_live_device_live_module__["a" /* DeviceLiveModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthProvider */], __WEBPACK_IMPORTED_MODULE_10__login_login_guard__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_13__config__["a" /* Config */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_data_component_live_data_component_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__control_control_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_data_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sensortable_sensortable_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sensortable_table_table_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sensortable_graph_graph_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_guard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__device_live_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'device-live', pathMatch: 'full' },
    { path: 'device-live', component: __WEBPACK_IMPORTED_MODULE_10__device_live_component__["a" /* DeviceLiveComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]],
        children: [
            { path: 'live', component: __WEBPACK_IMPORTED_MODULE_2__live_data_component_live_data_component_component__["a" /* LiveDataComponentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]] },
            { path: 'control', component: __WEBPACK_IMPORTED_MODULE_3__control_control_component__["a" /* ControlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]] },
            { path: 'control', component: __WEBPACK_IMPORTED_MODULE_3__control_control_component__["a" /* ControlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]] },
            { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]] },
            { path: 'data', component: __WEBPACK_IMPORTED_MODULE_5__data_data_component__["a" /* DataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]] },
            { path: 'datalogger', component: __WEBPACK_IMPORTED_MODULE_6__sensortable_sensortable_component__["a" /* SensortableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]],
                children: [
                    { path: 'table', component: __WEBPACK_IMPORTED_MODULE_7__sensortable_table_table_component__["a" /* TableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]] },
                    { path: 'graph', component: __WEBPACK_IMPORTED_MODULE_8__sensortable_graph_graph_component__["a" /* GraphComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard__["a" /* LoginGuard */]] }
                ]
            },
        ]
    }
    // ,
    // 	{ path: 'live',  component: LiveDataComponentComponent, canActivate: [LoginGuard] ,
    //     children: [
    //       { path: 'realtime',  component: RealtimegraphComponent, canActivate: [ConnectionGuard] }
    //     ]
    //    },
    // { path: 'control',  component: ControlComponent, canActivate: [ConnectionGuard]},
    // { path: 'setting',  component: SettingsComponent, canActivate: [ConnectionGuard]},
    // { path: 'data',  component: DataComponent, canActivate: [ConnectionGuard]},
    // { path: 'datalogger',  component: SensortableComponent, canActivate: [ConnectionGuard],
    //   children:[
    //     { path: 'table',  component: TableComponent, canActivate: [ConnectionGuard]},
    //     { path: 'graph',  component: GraphComponent, canActivate: [ConnectionGuard]}
    //   ]
    // },
    //   { path: 'disconnected',  component: DisconnectComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_socket_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoComponent = (function () {
    function AutoComponent(dataservice, io) {
        this.dataservice = dataservice;
        this.io = io;
    }
    AutoComponent.prototype.ngOnInit = function () { };
    AutoComponent.prototype.onSetpoint = function ($event) {
        var setmode = {
            'setmode': 'SETPOINT'
        };
        if ($event) {
            this.dataservice.isDetecting = false;
            this.dataservice.isSetpoint = true;
            this.dataservice.isTimer = false;
            this.io.socket.emit('SETMODE', setmode);
        }
        else {
            setmode.setmode = "";
            this.io.socket.emit('SETMODE', setmode);
            this.dataservice.isSetpoint = false;
        }
    };
    AutoComponent.prototype.onTimer = function ($event) {
        var setmode = {
            'setmode': 'TIMER'
        };
        if ($event) {
            this.dataservice.isDetecting = false;
            this.dataservice.isSetpoint = false;
            this.dataservice.isTimer = true;
            this.io.socket.emit('SETMODE', setmode);
        }
        else {
            setmode.setmode = "";
            this.io.socket.emit('SETMODE', setmode);
            this.dataservice.isTimer = false;
        }
    };
    AutoComponent.prototype.onDetecting = function ($event) {
        var setmode = {
            'setmode': 'DETECTING'
        };
        if ($event) {
            this.dataservice.isDetecting = true;
            this.dataservice.isSetpoint = false;
            this.dataservice.isTimer = false;
            this.io.socket.emit('SETMODE', setmode);
        }
        else {
            this.dataservice.isDetecting = false;
            setmode.setmode = "";
            this.io.socket.emit('SETMODE', setmode);
        }
    };
    return AutoComponent;
}());
AutoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auto',
        template: __webpack_require__(461),
        styles: [__webpack_require__(426)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], AutoComponent);

var _a, _b;
//# sourceMappingURL=auto.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mode_mode_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_socket_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetectingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetectingComponent = (function () {
    function DetectingComponent(modeservice, dataservice, io) {
        this.modeservice = modeservice;
        this.dataservice = dataservice;
        this.io = io;
        this.selected = 0;
    }
    DetectingComponent.prototype.ngOnInit = function () {
    };
    DetectingComponent.prototype.UpdateDetecting = function () {
        console.log(this.dataservice.detecting);
        this.io.socket.emit('DETECTING', this.dataservice.detecting);
    };
    return DetectingComponent;
}());
DetectingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detecting',
        template: __webpack_require__(464),
        styles: [__webpack_require__(429)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mode_mode_service__["a" /* ModeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mode_mode_service__["a" /* ModeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__share_socket_service__["a" /* SocketService */]) === "function" && _c || Object])
], DetectingComponent);

var _a, _b, _c;
//# sourceMappingURL=detecting.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__live_data_component_live_data_component_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_socket_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__set_point_set_point_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__disconnect_disconnect_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mode_mode_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_angular2_ui_switch_src__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__control_control_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mode_mode_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manual_manual_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auto_auto_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__timer_timer_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__detecting_detecting_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__disconnect_connection_guard__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__settings_settings_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__data_data_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_charts__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__data_graph_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sensortable_sensortable_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sensortable_table_table_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sensortable_graph_graph_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__share_config_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_highcharts__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_highcharts_dist_HighchartsService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_highcharts__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__live_data_component_realtimegraph_realtimegraph_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__device_live_component__ = __webpack_require__(92);
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceLiveModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































function highchartsFactory() {
    return __WEBPACK_IMPORTED_MODULE_29_highcharts__;
}
var DeviceLiveModule = (function () {
    function DeviceLiveModule() {
    }
    return DeviceLiveModule;
}());
DeviceLiveModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__live_data_component_live_data_component_component__["a" /* LiveDataComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__set_point_set_point_component__["a" /* SetPointComponent */],
            __WEBPACK_IMPORTED_MODULE_9__disconnect_disconnect_component__["a" /* DisconnectComponent */],
            __WEBPACK_IMPORTED_MODULE_10__mode_mode_component__["a" /* ModeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__control_control_component__["a" /* ControlComponent */],
            __WEBPACK_IMPORTED_MODULE_14__manual_manual_component__["a" /* ManualComponent */],
            __WEBPACK_IMPORTED_MODULE_15__auto_auto_component__["a" /* AutoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__detecting_detecting_component__["a" /* DetectingComponent */],
            __WEBPACK_IMPORTED_MODULE_19__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__data_data_component__["a" /* DataComponent */],
            __WEBPACK_IMPORTED_MODULE_23__sensortable_sensortable_component__["a" /* SensortableComponent */],
            __WEBPACK_IMPORTED_MODULE_24__sensortable_table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_25__sensortable_graph_graph_component__["a" /* GraphComponent */],
            __WEBPACK_IMPORTED_MODULE_30__live_data_component_realtimegraph_realtimegraph_component__["a" /* RealtimegraphComponent */],
            __WEBPACK_IMPORTED_MODULE_31__device_live_component__["a" /* DeviceLiveComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_27_angular2_highcharts__["ChartModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__share_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_6__share_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_13__mode_mode_service__["a" /* ModeService */], __WEBPACK_IMPORTED_MODULE_18__disconnect_connection_guard__["a" /* ConnectionGuard */], __WEBPACK_IMPORTED_MODULE_22__data_graph_service__["a" /* GraphService */], __WEBPACK_IMPORTED_MODULE_26__share_config_service__["a" /* ConfigService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_28_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            }]
    })
], DeviceLiveModule);

//# sourceMappingURL=device-live.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisconnectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisconnectComponent = (function () {
    function DisconnectComponent() {
    }
    DisconnectComponent.prototype.ngOnInit = function () {
    };
    return DisconnectComponent;
}());
DisconnectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-disconnect',
        template: __webpack_require__(466),
        styles: [__webpack_require__(430)]
    }),
    __metadata("design:paramtypes", [])
], DisconnectComponent);

//# sourceMappingURL=disconnect.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimegraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RealtimegraphComponent = (function () {
    function RealtimegraphComponent() {
    }
    RealtimegraphComponent.prototype.ngOnInit = function () {
    };
    return RealtimegraphComponent;
}());
RealtimegraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-realtimegraph',
        template: __webpack_require__(468),
        styles: [__webpack_require__(432)]
    }),
    __metadata("design:paramtypes", [])
], RealtimegraphComponent);

//# sourceMappingURL=realtimegraph.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
        this.url = window.location.protocol + "//" + window.location.hostname + ":" + 3001;
        this.uid = undefined;
    }
    return Config;
}());
Config = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Config);

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_socket_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManualComponent = (function () {
    function ManualComponent(io, dataservice) {
        this.io = io;
        this.dataservice = dataservice;
    }
    ManualComponent.prototype.ngOnInit = function () {
    };
    ManualComponent.prototype.onChange = function ($event, relay) {
        var data = {
            'channel': relay,
            'state': $event
        };
        this.io.socket.emit('RELAY', data);
    };
    return ManualComponent;
}());
ManualComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manual',
        template: __webpack_require__(469),
        styles: [__webpack_require__(433)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */]) === "function" && _b || Object])
], ManualComponent);

var _a, _b;
//# sourceMappingURL=manual.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mode_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_socket_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModeComponent = (function () {
    function ModeComponent(modeservice, io, dataservice) {
        this.modeservice = modeservice;
        this.io = io;
        this.dataservice = dataservice;
    }
    ModeComponent.prototype.ngOnInit = function () {
    };
    ModeComponent.prototype.onChange = function ($event) {
        console.log(this.modeservice.isAuto);
    };
    ModeComponent.prototype.onAuto = function ($event) {
        var mode = {
            'mode': ($event) ? "AUTO" : "MANUAL"
        };
        this.io.socket.emit('MODE', mode);
        if (!$event) {
            this.dataservice.isSetpoint = false;
            this.dataservice.isTimer = false;
            this.dataservice.isDetecting = false;
        }
        else {
            this.dataservice.manualRelay = [false, false, false, false];
        }
    };
    return ModeComponent;
}());
ModeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mode',
        template: __webpack_require__(470),
        styles: [__webpack_require__(434)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mode_service__["a" /* ModeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mode_service__["a" /* ModeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__share_data_service__["a" /* DataService */]) === "function" && _c || Object])
], ModeComponent);

var _a, _b, _c;
//# sourceMappingURL=mode.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_socket_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mode_mode_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetPointComponent = (function () {
    function SetPointComponent(data, io, modeservice) {
        this.data = data;
        this.io = io;
        this.modeservice = modeservice;
        this.selected = 0;
    }
    SetPointComponent.prototype.ngOnInit = function () {
    };
    SetPointComponent.prototype.UpdateSetPoint = function () {
        console.log(this.data.setpoint.setPoint);
        this.io.socket.emit("SET_POINT", this.data.setpoint.setPoint);
    };
    return SetPointComponent;
}());
SetPointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-set-point',
        template: __webpack_require__(474),
        styles: [__webpack_require__(438)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__mode_mode_service__["a" /* ModeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mode_mode_service__["a" /* ModeService */]) === "function" && _c || Object])
], SetPointComponent);

var _a, _b, _c;
//# sourceMappingURL=set-point.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mode_mode_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_socket_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerComponent = (function () {
    function TimerComponent(modeservice, io, dataservice) {
        this.modeservice = modeservice;
        this.io = io;
        this.dataservice = dataservice;
        this.hourList = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.minList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        this.pList = ["am", "pm"];
        this.hour_f = 12;
        this.min_f = 0;
        this.p_f = "am";
        this.hour_t = 12;
        this.min_t = 0;
        this.p_t = "am";
        this.selected = 0;
        this.timerList = [];
    }
    TimerComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.hourList.length; i++) {
            if (this.hourList[i] < 10)
                this.hourList[i] = "0" + this.hourList[i];
            else
                this.hourList[i] = "" + this.hourList[i];
        }
        for (var i = 0; i < this.minList.length; i++) {
            if (this.minList[i] < 10)
                this.minList[i] = "0" + this.minList[i];
            else
                this.minList[i] = "" + this.minList[i];
        }
        // this.dataservice.timerList[0] = [];
        // this.dataservice.timerList[1] = [];
        // this.dataservice.timerList[2] = [];
        // this.dataservice.timerList[3] = [];
    };
    TimerComponent.prototype.onChange = function (val) {
        console.log(val);
    };
    TimerComponent.prototype.add = function () {
        var a = !isNaN(this.hour_f) && !isNaN(this.min_f) && !isNaN(this.hour_t) && !isNaN(this.min_t);
        var hf = Number(this.hour_f);
        var mf = Number(this.min_f);
        var ht = Number(this.hour_t);
        var mt = Number(this.min_t);
        var b = true;
        var c = true;
        if (this.p_f == "pm") {
            if (hf != 12)
                hf = hf + 12;
        }
        else {
            if (hf == 12)
                hf = 0;
        }
        if (this.p_t == "pm") {
            if (ht != 12)
                ht = ht + 12;
        }
        else {
            if (ht == 12)
                ht = 0;
        }
        var valf = hf * 100 + mf * 10;
        var valt = ht * 100 + mt * 10;
        console.log(hf + " " + mf + "-" + ht + " " + mt);
        if (valf >= valt) {
            b = false;
        }
        for (var _i = 0, _a = this.dataservice.timerList[this.selected]; _i < _a.length; _i++) {
            var j = _a[_i];
            if (valf <= j.hval) {
                c = false;
            }
        }
        console.log("a:" + a);
        console.log("b:" + b);
        console.log("c:" + c);
        var res = a && b && c;
        if (!res) {
            alert('Add timer fail');
            return;
        }
        var from = this.hour_f + ":" + this.min_f + this.p_f;
        var to = this.hour_t + ":" + this.min_t + this.p_t;
        var time = {
            'from': {
                'hour': hf,
                'min': this.min_f
            },
            'to': {
                'hour': ht,
                'min': this.min_t
            },
            'timestr': from + " - " + to,
            'hval': valt
        };
        this.dataservice.timerList[this.selected].push(time);
        this.io.socket.emit('TIMER', this.dataservice.timerList);
    };
    TimerComponent.prototype.remove = function (ch, ind) {
        this.dataservice.timerList[ch].splice(ind, 1);
        this.io.socket.emit('TIMER', this.dataservice.timerList);
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timer',
        template: __webpack_require__(476),
        styles: [__webpack_require__(440)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mode_mode_service__["a" /* ModeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mode_mode_service__["a" /* ModeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_socket_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__share_data_service__["a" /* DataService */]) === "function" && _c || Object])
], TimerComponent);

var _a, _b, _c;
//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModeService = (function () {
    function ModeService(dataservice) {
        this.dataservice = dataservice;
        this.isAuto = false;
        this.isTimer = false;
        this.isSetpoint = false;
        this.isDetecting = false;
    }
    return ModeService;
}());
ModeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ModeService);

var _a;
//# sourceMappingURL=mode.service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigService = (function () {
    function ConfigService() {
        this.hostname = window.location.protocol + "//" + window.location.hostname + ":" + 3001;
        // public hostname = window.location.protocol + "//" + "192.168.100.1" + ":" + 3000;
    }
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.isLoggedIn = false;
    }
    LoginGuard.prototype.canActivate = function () {
        console.log(this.isLoggedIn);
        if (!this.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        return this.isLoggedIn;
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object])
], LoginGuard);

var _a, _b;
//# sourceMappingURL=login-guard.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/* \n// Listrap v1.0, by Gustavo Gondim (http://github.com/ggondim)\n// Licenced under MIT License\n// For updates, improvements and issues, see https://github.com/inosoftbr/listrap\n*/\n\n.listrap {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.listrap li {\n    margin: 0;\n    padding: 10px;\n}\n\n.listrap li.active,\n.listrap li:hover {\n    background-color: #d9edf7;\n}\n\n.listrap strong {\n    margin-left: 10px;\n}\n\n.listrap .listrap-toggle {\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n}\n\n.listrap .listrap-toggle span {\n    background-color: #428bca;\n    opacity: 0.8;\n    z-index: 100;\n    width: 60px;\n    height: 60px;\n    display: none;\n    position: absolute;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 60px;\n    vertical-align: middle;\n    color: #ffffff;\n}\n\n.listrap .listrap-toggle span:before {\n    font-family: 'Glyphicons Halflings';\n    content: \"\\E013\";\n}\n\n.listrap li.active .listrap-toggle span {\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group-item>.del {\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "label {\n    font-size: 30px;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\n.axis {\n    font: 10px sans-serif;\n}\n\n.axis path,\n.axis line {\n    fill: none;\n    stroke: #000;\n    shape-rendering: crispEdges;\n}\n\n.axis-title {\n    fill: none;\n    stroke: black;\n    stroke-width: 0.5px;\n}\n\n.axis--x path {\n    /*display: none;*/\n}\n\n.line {\n    fill: none;\n    stroke: steelblue;\n    stroke-width: 1.5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group-item>.del {\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 90px;\n}\n\n.panel-login {\n    border-color: #ccc;\n    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);\n}\n\n.panel-login>.panel-heading {\n    color: #00415d;\n    background-color: #fff;\n    border-color: #fff;\n    text-align: center;\n}\n\n.panel-login>.panel-heading a {\n    text-decoration: none;\n    color: #666;\n    font-weight: bold;\n    font-size: 15px;\n    transition: all 0.1s linear;\n}\n\n.panel-login>.panel-heading a.active {\n    color: #029f5b;\n    font-size: 18px;\n}\n\n.panel-login>.panel-heading hr {\n    margin-top: 10px;\n    margin-bottom: 0px;\n    clear: both;\n    border: 0;\n    height: 1px;\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));\n}\n\n.panel-login input[type=\"text\"],\n.panel-login input[type=\"email\"],\n.panel-login input[type=\"password\"] {\n    height: 45px;\n    border: 1px solid #ddd;\n    font-size: 16px;\n    transition: all 0.1s linear;\n}\n\n.panel-login input:hover,\n.panel-login input:focus {\n    outline: none;\n    box-shadow: none;\n    border-color: #ccc;\n}\n\n.btn-login {\n    background-color: #59B2E0;\n    outline: none;\n    color: #fff;\n    font-size: 14px;\n    height: auto;\n    font-weight: normal;\n    padding: 14px 0;\n    text-transform: uppercase;\n    border-color: #59B2E6;\n}\n\n.btn-login:hover,\n.btn-login:focus {\n    color: #fff;\n    background-color: #53A3CD;\n    border-color: #53A3CD;\n}\n\n.forgot-password {\n    text-decoration: underline;\n    color: #888;\n}\n\n.forgot-password:hover,\n.forgot-password:focus {\n    text-decoration: underline;\n    color: #666;\n}\n\n.btn-register {\n    background-color: #1CB94E;\n    outline: none;\n    color: #fff;\n    font-size: 14px;\n    height: auto;\n    font-weight: normal;\n    padding: 14px 0;\n    text-transform: uppercase;\n    border-color: #1CB94A;\n}\n\n.btn-register:hover,\n.btn-register:focus {\n    color: #fff;\n    background-color: #1CA347;\n    border-color: #1CA347;\n}\n\n.fade.in {\n    opacity: 1;\n}\n\n.alert-fail {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n}\n\n.alert {\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n\n.fade {\n    opacity: 0;\n    transition: opacity .15s linear;\n}\n\n.close {\n    float: right;\n    font-size: 21px;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .2;\n}\n\na {\n    color: #337ab7;\n    text-decoration: none;\n}\n\na {\n    background-color: transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/* \n// Listrap v1.0, by Gustavo Gondim (http://github.com/ggondim)\n// Licenced under MIT License\n// For updates, improvements and issues, see https://github.com/inosoftbr/listrap\n*/\n\n.listrap {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.listrap li {\n    margin: 0;\n    padding: 10px;\n}\n\n.listrap li.active,\n.listrap li:hover {\n    background-color: #d9edf7;\n}\n\n.listrap strong {\n    margin-left: 10px;\n}\n\n.listrap .listrap-toggle {\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n}\n\n.listrap .listrap-toggle span {\n    background-color: #428bca;\n    opacity: 0.8;\n    z-index: 100;\n    width: 60px;\n    height: 60px;\n    display: none;\n    position: absolute;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 60px;\n    vertical-align: middle;\n    color: #ffffff;\n}\n\n.listrap .listrap-toggle span:before {\n    font-family: 'Glyphicons Halflings';\n    content: \"\\E013\";\n}\n\n.listrap li.active .listrap-toggle span {\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 133,
	"./af.js": 133,
	"./ar": 140,
	"./ar-dz": 134,
	"./ar-dz.js": 134,
	"./ar-kw": 135,
	"./ar-kw.js": 135,
	"./ar-ly": 136,
	"./ar-ly.js": 136,
	"./ar-ma": 137,
	"./ar-ma.js": 137,
	"./ar-sa": 138,
	"./ar-sa.js": 138,
	"./ar-tn": 139,
	"./ar-tn.js": 139,
	"./ar.js": 140,
	"./az": 141,
	"./az.js": 141,
	"./be": 142,
	"./be.js": 142,
	"./bg": 143,
	"./bg.js": 143,
	"./bn": 144,
	"./bn.js": 144,
	"./bo": 145,
	"./bo.js": 145,
	"./br": 146,
	"./br.js": 146,
	"./bs": 147,
	"./bs.js": 147,
	"./ca": 148,
	"./ca.js": 148,
	"./cs": 149,
	"./cs.js": 149,
	"./cv": 150,
	"./cv.js": 150,
	"./cy": 151,
	"./cy.js": 151,
	"./da": 152,
	"./da.js": 152,
	"./de": 155,
	"./de-at": 153,
	"./de-at.js": 153,
	"./de-ch": 154,
	"./de-ch.js": 154,
	"./de.js": 155,
	"./dv": 156,
	"./dv.js": 156,
	"./el": 157,
	"./el.js": 157,
	"./en-au": 158,
	"./en-au.js": 158,
	"./en-ca": 159,
	"./en-ca.js": 159,
	"./en-gb": 160,
	"./en-gb.js": 160,
	"./en-ie": 161,
	"./en-ie.js": 161,
	"./en-nz": 162,
	"./en-nz.js": 162,
	"./eo": 163,
	"./eo.js": 163,
	"./es": 165,
	"./es-do": 164,
	"./es-do.js": 164,
	"./es.js": 165,
	"./et": 166,
	"./et.js": 166,
	"./eu": 167,
	"./eu.js": 167,
	"./fa": 168,
	"./fa.js": 168,
	"./fi": 169,
	"./fi.js": 169,
	"./fo": 170,
	"./fo.js": 170,
	"./fr": 173,
	"./fr-ca": 171,
	"./fr-ca.js": 171,
	"./fr-ch": 172,
	"./fr-ch.js": 172,
	"./fr.js": 173,
	"./fy": 174,
	"./fy.js": 174,
	"./gd": 175,
	"./gd.js": 175,
	"./gl": 176,
	"./gl.js": 176,
	"./gom-latn": 177,
	"./gom-latn.js": 177,
	"./he": 178,
	"./he.js": 178,
	"./hi": 179,
	"./hi.js": 179,
	"./hr": 180,
	"./hr.js": 180,
	"./hu": 181,
	"./hu.js": 181,
	"./hy-am": 182,
	"./hy-am.js": 182,
	"./id": 183,
	"./id.js": 183,
	"./is": 184,
	"./is.js": 184,
	"./it": 185,
	"./it.js": 185,
	"./ja": 186,
	"./ja.js": 186,
	"./jv": 187,
	"./jv.js": 187,
	"./ka": 188,
	"./ka.js": 188,
	"./kk": 189,
	"./kk.js": 189,
	"./km": 190,
	"./km.js": 190,
	"./kn": 191,
	"./kn.js": 191,
	"./ko": 192,
	"./ko.js": 192,
	"./ky": 193,
	"./ky.js": 193,
	"./lb": 194,
	"./lb.js": 194,
	"./lo": 195,
	"./lo.js": 195,
	"./lt": 196,
	"./lt.js": 196,
	"./lv": 197,
	"./lv.js": 197,
	"./me": 198,
	"./me.js": 198,
	"./mi": 199,
	"./mi.js": 199,
	"./mk": 200,
	"./mk.js": 200,
	"./ml": 201,
	"./ml.js": 201,
	"./mr": 202,
	"./mr.js": 202,
	"./ms": 204,
	"./ms-my": 203,
	"./ms-my.js": 203,
	"./ms.js": 204,
	"./my": 205,
	"./my.js": 205,
	"./nb": 206,
	"./nb.js": 206,
	"./ne": 207,
	"./ne.js": 207,
	"./nl": 209,
	"./nl-be": 208,
	"./nl-be.js": 208,
	"./nl.js": 209,
	"./nn": 210,
	"./nn.js": 210,
	"./pa-in": 211,
	"./pa-in.js": 211,
	"./pl": 212,
	"./pl.js": 212,
	"./pt": 214,
	"./pt-br": 213,
	"./pt-br.js": 213,
	"./pt.js": 214,
	"./ro": 215,
	"./ro.js": 215,
	"./ru": 216,
	"./ru.js": 216,
	"./sd": 217,
	"./sd.js": 217,
	"./se": 218,
	"./se.js": 218,
	"./si": 219,
	"./si.js": 219,
	"./sk": 220,
	"./sk.js": 220,
	"./sl": 221,
	"./sl.js": 221,
	"./sq": 222,
	"./sq.js": 222,
	"./sr": 224,
	"./sr-cyrl": 223,
	"./sr-cyrl.js": 223,
	"./sr.js": 224,
	"./ss": 225,
	"./ss.js": 225,
	"./sv": 226,
	"./sv.js": 226,
	"./sw": 227,
	"./sw.js": 227,
	"./ta": 228,
	"./ta.js": 228,
	"./te": 229,
	"./te.js": 229,
	"./tet": 230,
	"./tet.js": 230,
	"./th": 231,
	"./th.js": 231,
	"./tl-ph": 232,
	"./tl-ph.js": 232,
	"./tlh": 233,
	"./tlh.js": 233,
	"./tr": 234,
	"./tr.js": 234,
	"./tzl": 235,
	"./tzl.js": 235,
	"./tzm": 237,
	"./tzm-latn": 236,
	"./tzm-latn.js": 236,
	"./tzm.js": 237,
	"./uk": 238,
	"./uk.js": 238,
	"./ur": 239,
	"./ur.js": 239,
	"./uz": 241,
	"./uz-latn": 240,
	"./uz-latn.js": 240,
	"./uz.js": 241,
	"./vi": 242,
	"./vi.js": 242,
	"./x-pseudo": 243,
	"./x-pseudo.js": 243,
	"./yo": 244,
	"./yo.js": 244,
	"./zh-cn": 245,
	"./zh-cn.js": 245,
	"./zh-hk": 246,
	"./zh-hk.js": 246,
	"./zh-tw": 247,
	"./zh-tw.js": 247
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 454;


/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = "<h2>Dashboard</h2>\n\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <!-- Default panel contents -->\n            <div class=\"panel-heading\">User Info</div>\n\n\n            <!-- Table -->\n            <table class=\"table\">\n                <tbody>\n                    <tr>\n                        <td>uid</td>\n                        <td>{{uid}}</td>\n                    </tr>\n                    <tr>\n                        <td>email</td>\n                        <td>{{email}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <button (click)=\"router.navigateByUrl('/device-list')\" type=\"button\" class=\"btn btn-default\">Device list</button>\n    <button (click)=\"toSearch()\" type=\"button\" class=\"btn btn-default\">Add device</button>\n    <button (click)=\"logout()\" type=\"button\" class=\"btn btn-default\">Logout</button>\n\n</div>"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 style=\"text-align: center\"> Device List</h2>\n    <div class=\"row\" style=\"margin-top: 20px;\">\n        <ul class=\"listrap\">\n            <li (click)=\"keyshow=true\" *ngFor=\"let d of devices | async \">\n                <div class=\"listrap-toggle\">\n                    <span></span>\n                    <img src=\"http://images.clipartpanda.com/chips-clipart-RiAy8perT.png\" height=\"60\" width=\"60\" class=\"img-circle\" />\n                </div>\n                <strong *ngIf=\"d.online\">ID: <span style=\"color: greenyellow\">{{d.sdid}} </span></strong>\n                <strong *ngIf=\"!d.online\">ID: <span style=\"color: palevioletred\">{{d.sdid}} </span></strong>\n\n                <button *ngIf=\"d.online\" type=\"button\" class=\"btn btn-success  btn-lg pull-right\" (click)=\"goToLive(d.did)\">Online</button>\n                <button *ngIf=\"!d.online\" type=\"button\" class=\"btn btn-default  btn-lg pull-right\" disabled>Offline</button>\n            </li>\n        </ul>\n    </div>\n\n\n    <div class=\"row\">\n        <button type=\"button\" class=\"btn btn-large btn-block btn-default\" (click)=\"router.navigateByUrl('/dashboard')\">back</button>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-group\">\n        <label>Auto</label>\n\n        <div class=\"radio\">\n            <label>\n            <ui-switch [(ngModel)]=\"dataservice.isTimer\" (change)=\"onTimer($event) \"></ui-switch> Timer\n        </label>\n        </div>\n        <div class=\"radio\">\n            <label>\n            <ui-switch [(ngModel)]=\"dataservice.isSetpoint\" (change)=\"onSetpoint($event) \"></ui-switch> Set-Point\n        </label>\n        </div>\n        <div class=\"radio \">\n            <label>\n            <ui-switch [(ngModel)]=\"dataservice.isDetecting\" (change)=\"onDetecting($event) \"></ui-switch> Detecting\n        </label>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<app-mode></app-mode>\n\n\n<div *ngIf=\"dataservice.mode\">\n    <app-auto></app-auto>\n    <app-timer *ngIf=\"dataservice.isTimer\"></app-timer>\n    <app-detecting *ngIf=\"dataservice.isDetecting\"></app-detecting>\n    <app-set-point *ngIf=\"dataservice.isSetpoint\"></app-set-point>\n</div>\n\n<app-manual></app-manual>"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n    <div class=\"row\">\n\n        <div class=\"container\">\n            <h4>Data logger</h4>\n            <label style=\"color: gray\">MM/YY</label>\n            <div style=\"display:inline-block;\">\n                <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"checkMonth($event.target.value)\">\n                <option  *ngFor=\"let i of monthList\" >\n                    {{i}}\n                </option>\n            </select>\n            </div>\n\n            <div style=\"display:inline-block;\">\n                <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"checkYear($event.target.value)\">\n          <option  *ngFor=\"let i of yearList\" >\n            {{i}}\n          </option>\n        </select>\n            </div>\n        </div>\n\n\n\n        <div class=\"container\" style=\"margin-top: 20px;\">\n\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" style=\"height: 50px;\" *ngFor=\"let i of dateList\"> {{i.name}}\n                        <span class=\"del\">\n                        <button (click)=\"getDataFromDate(i.val)\" type=\"button\" class=\"btn btn-primary btn-sm\" aria-label=\"Left Align\" >\n                            <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\"></span>\n                        </button>\n                        </span>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n\n\n\n    </div>\n\n\n    <!--<div class=\"row\" style=\"margin-top: 20px;\">\n        <button type=\"button\" class=\"btn btn-default\">\n        <span class=\"glyphicon glyphicon-signal\" aria-hidden=\"true\"></span> Graph\n        </button>\n        <button type=\"button\" class=\"btn btn-default \">\n            <span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span> Table\n        </button>\n    </div>-->\n\n    <br>\n\n    <!--<table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th>Time</th>\n                <th>Temperature (C)</th>\n                <th>Humidity (%)</th>\n                <th>Light(Lux)</th>\n                <th>Soil(%)</th>\n                <th>VPD (Pa)</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let i of sensorsData\">\n                <td>{{i.time}}</td>\n                <td>{{i.temp}}</td>\n                <td>{{i.humi}}</td>\n                <td>{{i.light}}</td>\n                <td>{{i.soil}}</td>\n                <td>{{i.vpd}}</td>\n            </tr>\n        </tbody>\n    </table>-->\n\n</div>"

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table>\n        <td>Channel :</td>\n        <td>\n            <div class=\"dropdown\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Channel {{selected + 1}}\n        <span class=\"caret\"></span>\n        </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                    <li><a (click)=\"selected=0\">Channel 1</a></li>\n                    <li><a (click)=\"selected=1\">Channel 2</a></li>\n                    <li><a (click)=\"selected=2\">Channel 3</a></li>\n                    <li><a (click)=\"selected=3\">Channel 4</a></li>\n                </ul>\n            </div>\n        </td>\n    </table>\n    <h4 style=\"margin-top: 20px;\">Set-point {{selected+1}}</h4>\n    <div *ngFor=\"let i of dataservice.detecting; let ind = index;\">\n        <div *ngIf=\"selected == ind\">\n            <div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                <h4><input type=\"checkbox\"  [(ngModel)]=\"i.soil.isuse\" aria-label=\"...\"> <b>SOIL</b></h4>\n            </span>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"i.soil.isuse\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>Set-point</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"i.soil.set\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                    </div>\n                    <!-- /.col-lg-6 -->\n                </div>\n                <!-- /.row -->\n            </div>\n            <div style=\"margin-top: 30px;\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                <h4><input type=\"checkbox\" [(ngModel)]=\"i.vpd.isuse\"  aria-label=\"...\"> <b>VPD</b></h4>\n            </span>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"i.vpd.isuse\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>Set-point</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"i.vpd.set\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                    </div>\n                    <!-- /.col-lg-6 -->\n                </div>\n                <!-- /.row -->\n            </div>\n\n            <h4 style=\"margin-top: 20px;\">Parameter</h4>\n            <div class=\"row\" style=\"margin-top: 10px;\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                        <b>Detecting time</b>\n                    </span>\n                        <!--<input type=\"number\" [(ngModel)]=\"data.soil[0]\" class=\"form-control\" aria-label=\"...\">-->\n                        <input type=\"number\" [(ngModel)]=\"dataservice.detecting[0].detecting\" class=\"form-control\" aria-label=\"...\">\n                    </div>\n                </div>\n                <!-- /.col-lg-6 -->\n            </div>\n\n            <div class=\"row\" style=\"margin-top: 10px;\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                        <b>Woking time</b>\n                    </span>\n                        <!--<input type=\"number\" [(ngModel)]=\"data.soil[0]\" class=\"form-control\" aria-label=\"...\">-->\n                        <input type=\"number\" [(ngModel)]=\"i.working\" class=\"form-control\" aria-label=\"...\">\n                    </div>\n                </div>\n                <!-- /.col-lg-6 -->\n            </div>\n        </div>\n    </div>\n\n    <div class=\"btn-group-lg\" role=\"group\" aria-label=\"...\" style=\"margin-top: 20px; margin-bottom: 20px;\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"UpdateDetecting()\">Update</button>\n    </div>\n</div>"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<h3>\n    GreenHouse</h3>\n<div class=\"btn-group-lg\" role=\"group\" aria-label=\"...\">\n    <a routerLink=\"live\"><button type=\"button\" class=\"btn btn-default\">Live</button></a>\n    <a routerLink=\"control\"><button type=\"button\" class=\"btn btn-default\">Control</button></a>\n    <a routerLink=\"setting\"><button type=\"button\" class=\"btn btn-default\">Setting</button></a>\n    <a routerLink=\"data\"><button type=\"button\" class=\"btn btn-default\">Data</button></a>\n</div>\n<router-outlet></router-outlet>\n\n\n\n\n<div class=\"container\">\n    <div class=\"row\" style=\"margin-top: 30px;\">\n        <button type=\"button\" class=\"btn btn-large btn-block btn-default\" (click)=\"router.navigateByUrl('/device-list')\">back</button>\n    </div>\n</div>"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Service status: <span style=\"color: red;\">Offline</span></h2>\n</div>"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\" style=\"margin-bottom: 20px; margin-top: 20px;\">\n        <div class=\"container\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"toGraph()\">\n                <span class=\"glyphicon glyphicon-signal\" aria-hidden=\"true\"></span> Graph\n            </button>\n            <button type=\"button\" class=\"btn btn-default \" (click)=\"toTable()\">\n                <span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span> Table\n            </button>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <!-- Default panel contents -->\n            <div class=\"panel-heading\">Live Sensor</div>\n\n\n            <!-- Table -->\n            <table class=\"table\">\n                <tbody>\n                    <tr>\n                        <td>time</td>\n                        <td>{{data.sensor.time}}</td>\n                    </tr>\n                    <tr>\n                        <td>vpd</td>\n                        <td>{{data.sensor.vpd}} Pa</td>\n                    </tr>\n                    <tr>\n                        <td>soil</td>\n                        <td>{{data.sensor.soil}} %</td>\n                    </tr>\n                    <tr>\n                        <td>temp</td>\n                        <td>{{data.sensor.temp}} C</td>\n                    </tr>\n                    <tr>\n                        <td>humi</td>\n                        <td>{{data.sensor.humi}} %</td>\n                    </tr>\n                    <tr>\n                        <td>light</td>\n                        <td>{{data.sensor.light}} Lux</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n    </div>\n\n\n\n</div>"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\n    <h1>Realtime</h1>\n</div>-->"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!dataservice.mode\">\n    <div class=\"form-group\">\n        <label>Channel</label>\n        <div class=\"radio\">\n            <label>\n              <ui-switch [(ngModel)]=\"dataservice.manualRelay[0]\" (change)=\"onChange($event,1)\" ></ui-switch> Channel 1\n            </label>\n        </div>\n        <div class=\"radio\">\n            <label>\n                  <ui-switch [(ngModel)]=\"dataservice.manualRelay[1]\" (change)=\"onChange($event,2)\"></ui-switch> Channel 2\n             </label>\n        </div>\n        <div class=\"radio\">\n            <label>\n                <ui-switch [(ngModel)]=\"dataservice.manualRelay[2]\" (change)=\"onChange($event,3)\"></ui-switch> Channel 3\n             </label>\n        </div>\n        <div class=\"radio\">\n            <label>\n                <ui-switch [(ngModel)]=\"dataservice.manualRelay[3]\" (change)=\"onChange($event,4)\"></ui-switch> Channel 4\n             </label>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"big\">\n    <div class=\"form-group\">\n        <label>Mode</label>\n        <div class=\"radio\">\n            <label>\n              <ui-switch [(ngModel)]=\"dataservice.mode\" (change)=\"onAuto($event)\"></ui-switch> Auto\n            </label>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" style=\"margin-top: 20px;\">\n            <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"chooseGraph($event.target.value)\">\n            <option value=\"soil\">SOIL</option>\n            <option value=\"vpd\">VPD</option>\n            <option value=\"temp\">TEMPERATURE</option>\n            <option value=\"humi\">HUMIDITY</option>\n            <option value=\"light\">LIGHT</option>\n            <option value=\"all\">All</option>\n        </select>\n        </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"issoil\">\n        <chart [options]=\"soil\"></chart>\n    </div>\n\n    <div class=\"row\" *ngIf=\"isvpd\">\n        <chart [options]=\"vpd\"></chart>\n    </div>\n\n    <div class=\"row\" *ngIf=\"istemp\">\n        <chart [options]=\"temp\"></chart>\n    </div>\n\n    <div class=\"row\" *ngIf=\"ishumi\">\n        <chart [options]=\"humi\"></chart>\n    </div>\n\n    <div class=\"row\" *ngIf=\"islight\">\n        <chart [options]=\"light\"></chart>\n    </div>\n\n</div>"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"container\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"toGraph()\">\n                <span class=\"glyphicon glyphicon-signal\" aria-hidden=\"true\"></span> Graph\n            </button>\n            <button type=\"button\" class=\"btn btn-default \" (click)=\"toTable()\">\n                <span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span> Table\n            </button>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"row\">\n\n            <div class=\"container\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Time</th>\n                            <th>Temp (C)</th>\n                            <th>RH (%)</th>\n                            <th>Light(Lux)</th>\n                            <th>Soil(%)</th>\n                            <th>VPD (Pa)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let i of sensorsData\">\n                            <td>{{i.time}}</td>\n                            <td>{{i.temp}}</td>\n                            <td>{{i.humi}}</td>\n                            <td>{{i.light}}</td>\n                            <td>{{i.soil}}</td>\n                            <td>{{i.vpd}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table style=\"margin-bottom: 20px;\">\n        <td>Channel :</td>\n        <td>\n            <div class=\"dropdown\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Channel {{selected + 1}}\n        <span class=\"caret\"></span>\n        </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                    <li><a (click)=\"selected=0\">Channel 1</a></li>\n                    <li><a (click)=\"selected=1\">Channel 2</a></li>\n                    <li><a (click)=\"selected=2\">Channel 3</a></li>\n                    <li><a (click)=\"selected=3\">Channel 4</a></li>\n                </ul>\n            </div>\n        </td>\n    </table>\n\n    <div *ngFor=\"let data of data.setpoint.setPoint; let i = index;\">\n        <div *ngIf=\"selected==i\">\n            <div>\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                    <h4><input type=\"checkbox\"  [(ngModel)]=\"data.vpd[2]\" (change)=\"data.vpd[2]=($event.target.checked)\" aria-label=\"...\"> <b>VPD</b></h4>\n            </span>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"data.vpd[2]\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>from</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.vpd[0]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>to</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.vpd[1]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                </div>\n                <!-- /.row -->\n            </div>\n\n            <div style=\"margin-top: 30px;\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                <h4><input type=\"checkbox\" [(ngModel)]=\"data.soil[2]\" (change)=\"data.soil[2]=($event.target.checked)\" aria-label=\"...\"> <b>SOIL</b></h4>\n            </span>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"data.soil[2]\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>from</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.soil[0]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                        <b>to</b>\n                    </span>\n                            <input type=\"number\" [(ngModel)]=\"data.soil[1]\" class=\"form-control\" aria-label=\"...\">\n                        </div>\n                        <!-- /input-group -->\n                    </div>\n                    <!-- /.col-lg-6 -->\n                </div>\n                <!-- /.row -->\n            </div>\n\n            <div class=\"btn-group-lg\" role=\"group\" aria-label=\"...\" style=\"margin-top: 20px; margin-bottom: 20px;\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"UpdateSetPoint()\">Update</button>\n            </div>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h4>Date <span style=\"margin-left: 10px; font-size: 15px; color: gray\"> current: {{dataservice.sensor.date}} {{dataservice.sensor.time}}</span></h4>\n    <div style=\"display:inline-block;\">\n        <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"day=$event.target.value\">\n          <option  *ngFor=\"let i of dayList\" >\n            {{i}}\n          </option>\n        </select>\n    </div>\n\n    <div style=\"display:inline-block;\">\n        <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"month=$event.target.value\">\n          <option  *ngFor=\"let i of monthList\" >\n            {{i}}\n          </option>\n        </select>\n    </div>\n\n    <div style=\"display:inline-block;\">\n        <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"year=$event.target.value\">\n          <option  *ngFor=\"let i of yearList\" >\n            {{i}}\n          </option>\n        </select>\n    </div>\n\n    <h4>Time</h4>\n    <div style=\"display:inline-block;\">\n        <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"hour=$event.target.value\">\n          <option  *ngFor=\"let i of hourList\" >\n            {{i}}\n          </option>\n        </select>\n    </div>\n\n    <div style=\"display:inline-block;\">\n        <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"min=$event.target.value\">\n          <option  *ngFor=\"let i of minList\" >\n            {{i}}\n          </option>\n        </select>\n    </div>\n\n    <div style=\"display:inline-block;\">\n        <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"p=$event.target.value\">\n          <option  *ngFor=\"let i of pList\" >\n            {{i}}\n          </option>\n        </select>\n    </div>\n    <br>\n\n\n    <button type=\"button\" class=\"btn btn-default\" style=\"margin-top: 50px;\" (click)=\"onUpdate()\">Update</button>\n\n</div>"

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"container\">\n            <label>Timer</label>\n            <table>\n                <td>Channel :</td>\n                <td>\n                    <div class=\"dropdown\">\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            Channel {{selected + 1}}\n                            <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                            <li><a (click)=\"selected=0\">Channel 1</a></li>\n                            <li><a (click)=\"selected=1\">Channel 2</a></li>\n                            <li><a (click)=\"selected=2\">Channel 3</a></li>\n                            <li><a (click)=\"selected=3\">Channel 4</a></li>\n                        </ul>\n                    </div>\n                </td>\n            </table>\n        </div>\n\n    </div>\n\n    <div class=\"row\" style=\"margin-top: 20px;\">\n        <div class=\"container\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\" *ngFor=\"let i of dataservice.timerList[selected]; let ind = index;\" style=\"height: 50px;\">{{i.timestr}}\n                    <span class=\"del\">\n                        <button type=\"button\" (click)=\"remove(selected,ind)\" class=\"btn btn-danger btn-sm\" aria-label=\"Left Align\" >\n                            <span class=\"glyphicon glyphicon-erase\" aria-hidden=\"true\"></span>\n                    </button>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n\n    <div class=\"row\">\n        <div class=\"col-xs-7 col-sm-7 col-md-3 col-lg-3\">\n            <h5>Start</h5>\n            <div style=\"display:inline-block;\">\n                <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"hour_f=$event.target.value\">\n                    <option  *ngFor=\"let i of hourList\">\n                        {{i}}\n                    </option>\n                </select>\n            </div>\n\n\n            <div style=\"display:inline-block;\">\n                <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"min_f=$event.target.value\">\n                    <option  *ngFor=\"let i of minList\">\n                        {{i}}\n                    </option>\n                </select>\n            </div>\n\n\n            <div style=\"display:inline-block;\">\n                <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"p_f=$event.target.value\">\n                    <option  *ngFor=\"let i of pList\">\n                        {{i}}\n                    </option>\n                </select>\n            </div>\n\n\n\n            <br>\n            <h5>To</h5>\n\n            <div style=\"display:inline-block;\">\n                <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"hour_t=$event.target.value\">\n                    <option  *ngFor=\"let i of hourList\">\n                        {{i}}\n                    </option>\n                </select>\n            </div>\n\n\n            <div style=\"display:inline-block;\">\n                <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"min_t=$event.target.value\">\n                    <option  *ngFor=\"let i of minList\">\n                        {{i}}\n                    </option>\n                </select>\n            </div>\n\n\n\n            <div style=\"display:inline-block;\">\n                <select name=\"\" id=\"input1/(\\w+)/\\u\\1/g\" class=\"form-control\" required=\"required\" (change)=\"p_t=$event.target.value\">\n                    <option  *ngFor=\"let i of pList\">\n                        {{i}}\n                    </option>\n                </select>\n            </div>\n\n        </div>\n\n        <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" style=\"margin-top: 60px;\" (click)=\"add()\">Add</button>\n        </div>\n\n\n    </div>\n\n\n\n</div>"

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <h2 style=\"text-align: center\">Intelligent Agro.</h2>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <div class=\"panel panel-login\">\n                <div class=\"panel-heading\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <a href=\"#\" id=\"register-form-link\">Register</a>\n                        </div>\n                    </div>\n                    <hr>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <form id=\"login-form\" method=\"post\" role=\"form\" style=\"display: block;\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                                </div>\n                                <div class=\"form-group text-center\">\n                                    <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n                                    <label for=\"remember\"> Remember Me</label>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-sm-offset-3\">\n                                            <input type=\"submit\" (click)=\"login()\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"message\" class=\"alert alert-fail fade in\">\n                                    <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">×</a>\n                                    <strong>Fail!</strong> {{message}}\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-12\">\n                                            <div class=\"text-center\">\n                                                <a tabindex=\"5\" (click)=\"logout()\" class=\"forgot-password\">clear authen</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n\n\n                            <form id=\"register-form\" action=\"https://phpoll.com/register/process\" method=\"post\" role=\"form\" style=\"display: none;\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"register_email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"register_email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"register_password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" name=\"confirm-password\" [(ngModel)]=\"register_password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-sm-offset-3\">\n                                            <input type=\"submit\" (click)=\"userRegister()\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div style=\"text-align: center\">\n            <h2>Search device</h2>\n        </div>\n\n        <div class=\"input-group\" style=\"margin-top: 20px;\">\n            <input type=\"text\" [(ngModel)]=\"deviceid\" class=\"form-control input-lg\" id=\"exampleInputAmount\" placeholder=\"Search\">\n            <span class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default input-lg\" (click)=\"searchid()\">Search</button>\n            </span>\n        </div>\n    </div>\n\n    <div class=\"row\" style=\"margin-top: 20px;\">\n        <ul class=\"listrap\">\n            <li (click)=\"keyshow=true\" *ngIf=\"device\">\n                <div class=\"listrap-toggle\">\n                    <span></span>\n                    <img src=\"http://images.clipartpanda.com/chips-clipart-RiAy8perT.png\" height=\"60\" width=\"60\" class=\"img-circle\" />\n                </div>\n                <strong>{{device.short_did}} </strong>\n                <button *ngIf=\"!device.isregistered\" type=\"button\" class=\"btn btn-info  btn-lg pull-right\" (click)=\"bind()\">+</button>\n                <button *ngIf=\"device.isregistered\" type=\"button\" class=\"btn btn-default  btn-lg pull-right\" disabled>Registered</button>\n\n                <div class=\"input-group\" *ngIf=\"keyshow && !device.isregistered\" style=\"margin-top: 5px;\">\n                    <div class=\"input-group-addon\">KEY</div>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"key\" id=\"exampleInputAmount\" placeholder=\"register key\">\n                </div>\n\n                <div class=\"alert\" *ngIf=\"bindError\" style=\"color: red;;\">\n                    <strong>Error:</strong> {{deviceMessage}}\n                </div>\n\n                <div class=\"alert\" *ngIf=\"bindSuccess\" style=\"color: green;\">\n                    <strong>Success:</strong> {{deviceMessage}}\n                </div>\n\n            </li>\n        </ul>\n    </div>\n\n\n    <div class=\"alert\" *ngIf=\"message\">\n        <strong>Device</strong> Not found.\n    </div>\n\n\n    <button style=\"margin-top: 50px;\" type=\"button\" class=\"btn btn-default\" (click)=\"router.navigateByUrl('/dashboard')\">Back</button>\n\n\n\n</div>"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_guard__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(afAuth, router, loginguard) {
        this.afAuth = afAuth;
        this.router = router;
        this.loginguard = loginguard;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (s) {
            if (!s) {
                _this.router.navigateByUrl('/login');
                return;
            }
            _this.uid = s.uid;
            _this.email = s.email;
        });
    };
    DashboardComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.loginguard.isLoggedIn = false;
        this.router.navigateByUrl('/login');
    };
    DashboardComponent.prototype.toSearch = function () {
        this.router.navigateByUrl('/search');
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(459),
        styles: [__webpack_require__(424)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_guard__["a" /* LoginGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_guard__["a" /* LoginGuard */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceListComponent = (function () {
    function DeviceListComponent(http, config, router) {
        this.http = http;
        this.config = config;
        this.router = router;
        this.devices = this.http.post(this.config.url + '/api/devices/user/binding', { 'uid': this.config.uid })
            .map(function (res) {
            console.log(res.json());
            var dv = res.json();
            for (var _i = 0, dv_1 = dv; _i < dv_1.length; _i++) {
                var d = dv_1[_i];
                var split = d.did.split("-");
                d.sdid = split[split.length - 1];
            }
            return dv;
        });
    }
    DeviceListComponent.prototype.ngOnInit = function () {
    };
    DeviceListComponent.prototype.goToLive = function (did) {
        var data = {
            'did': did,
            'uid': this.config.uid
        };
        console.log(data);
        this.router.navigate(['/device-live/live', data]);
    };
    return DeviceListComponent;
}());
DeviceListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-list',
        template: __webpack_require__(460),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DeviceListComponent);

var _a, _b, _c;
//# sourceMappingURL=device-list.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlComponent = (function () {
    function ControlComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ControlComponent.prototype.ngOnInit = function () {
    };
    return ControlComponent;
}());
ControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(462),
        styles: [__webpack_require__(427)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ControlComponent);

var _a;
//# sourceMappingURL=control.component.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_graph_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(io, graph) {
        // setInterval(()=>{
        var _this = this;
        this.io = io;
        this.graph = graph;
        this.manualRelay = [false, false, false, false];
        this.mode = false;
        this.isTimer = false;
        this.isSetpoint = false;
        this.isDetecting = false;
        this.timerList = [];
        this.day = 1;
        this.month = 1;
        this.year = 2015;
        this.hour = 0;
        this.min = 0;
        this.detecting = [{
                'vpd': {
                    'set': 2.0,
                    'isuse': false
                },
                'soil': {
                    'set': 50,
                    'isuse': false
                },
                'working': 10,
                'detecting': 10
            },
            {
                'vpd': {
                    'set': 2.0,
                    'isuse': false
                },
                'soil': {
                    'set': 50,
                    'isuse': false
                },
                'working': 10,
                'detecting': 10
            },
            {
                'vpd': {
                    'set': 2.0,
                    'isuse': false
                },
                'soil': {
                    'set': 50,
                    'isuse': false
                },
                'working': 10,
                'detecting': 10
            },
            {
                'vpd': {
                    'set': 2.0,
                    'isuse': false
                },
                'soil': {
                    'set': 50,
                    'isuse': false
                },
                'working': 10,
                'detecting': 10
            }
        ];
        //   console.log(this.graph.soil.length)
        //   if(this.graph.soil.length >=15){
        //     this.graph.soil.splice(0,1);
        //   }
        //   this.graph.soil.push(Math.floor((Math.random() * 100) + 1));
        // },1000)
        // test end ^^
        this.sensor = new SensorModel();
        this.setpoint = new SetPointModel();
        console.log("[DataService] dataservice init");
        this.io.socket.on("SENSOR_DATA", function (data) {
            _this.sensor.setValue(data.date, data.time, data.vpd, data.soil, data.temp, data.humi, data.light);
            if (_this.graph.soil.length >= 15) {
                _this.graph.soil.splice(0, -1);
            }
            _this.graph.soil.push(data.soil);
            var d = data.date.split("/");
            var t = data.time.split(":");
            _this.day = d[0];
            _this.month = d[1];
            _this.year = d[2];
            _this.hour = t[0];
            _this.min = t[1];
        });
        this.io.socket.on("SET_POINT", function (data) {
            console.log('[DataService] Set Point\n ' + JSON.stringify(data));
            _this.setpoint.setPoint = data;
        });
        this.io.socket.on("MANUAL", function (data) {
            _this.manualRelay = data;
        });
        this.io.socket.on("MODE", function (data) {
            _this.mode = (data == "AUTO") ? true : false;
            console.log(_this.mode);
        });
        this.io.socket.on('SETMODE', function (data) {
            console.log(data);
            if (data == "SETPOINT") {
                _this.isSetpoint = true;
            }
            else if (data == 'TIMER') {
                _this.isTimer = true;
            }
            else if (data == 'DETECTING') {
                _this.isDetecting = true;
            }
        });
        this.io.socket.on('TIMER', function (data) {
            console.log(data);
            _this.timerList = data;
        });
        this.io.socket.on('DETECTING', function (data) {
            console.log(data);
            _this.detecting = data;
        });
    }
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_graph_service__["a" /* GraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_graph_service__["a" /* GraphService */]) === "function" && _b || Object])
], DataService);

var SensorModel = (function () {
    function SensorModel() {
        this.time = "00:00:00";
        this.vpd = 0.0;
        this.soil = 0.0;
        this.temp = 0.0;
        this.humi = 0.0;
        this.light = 0;
        this.date = "0/0/0";
    }
    SensorModel.prototype.setValue = function (date, time, vpd, soil, temp, humi, light) {
        this.date = date;
        this.time = time;
        this.vpd = vpd;
        this.soil = soil;
        this.temp = temp;
        this.humi = humi;
        this.light = light;
    };
    return SensorModel;
}());
var SetPointModel = (function () {
    function SetPointModel() {
        this.setPoint = [
            {
                "ch": 1,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 2,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 3,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            },
            {
                "ch": 4,
                "vpd": [2200, 2250, false],
                "soil": [40, 60, false],
                "use": true
            }
        ];
    }
    return SetPointModel;
}());
var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_config_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_socket_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataComponent = (function () {
    function DataComponent(http, route, config, io, data) {
        // http.get("http://localhost:3000/api/getdata?date=121017").subscribe((data:Response)=>{
        //   this.sensorsData = data.json();
        // })
        var _this = this;
        this.http = http;
        this.route = route;
        this.config = config;
        this.io = io;
        this.data = data;
        this.yearList = [];
        this.monthList = [];
        this.month = 1;
        this.year = 2017;
        this.dateList = [];
        this.io.socket.on('REP_CHECK_DATE', function (data) {
            console.log("REP_CHECK_DATE");
            _this.dateList = data;
            console.log(_this.dateList);
        });
    }
    DataComponent.prototype.ngOnInit = function () {
        var year = 2017;
        for (var i = 1; i <= 16; i++) {
            this.yearList.push(year++);
        }
        for (var i = 1; i <= 12; i++) {
            this.monthList.push(i);
        }
    };
    DataComponent.prototype.checkMonth = function (val) {
        this.month = val;
        this.checkDate(this.month, this.year);
    };
    DataComponent.prototype.checkYear = function (val) {
        this.year = val;
        this.checkDate(this.month, this.year);
    };
    DataComponent.prototype.checkDate = function (month, year) {
        var _this = this;
        var m = (month < 10) ? "0" + month : month;
        var y = year - 2000;
        var str = m + y;
        this.http.get(this.config.hostname + "/api/checkdate?my=" + str)
            .subscribe(function (data) {
            _this.dateList = data.json();
        });
        this.io.socket.emit('REQ_CHECK_DATE', { 'data': str, 'did': this.data.did });
    };
    DataComponent.prototype.getDataFromDate = function (filename) {
        this.route.navigate(['device-live/datalogger/table'], { queryParams: { filename: filename } });
    };
    return DataComponent;
}());
DataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data',
        template: __webpack_require__(463),
        styles: [__webpack_require__(428)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__share_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__share_config_service__["a" /* ConfigService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__share_socket_service__["a" /* SocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__share_data_service__["a" /* DataService */]) === "function" && _e || Object])
], DataComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=data.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GraphService = (function () {
    function GraphService() {
        this.soil = [];
        this.time = [];
    }
    return GraphService;
}());
GraphService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GraphService);

//# sourceMappingURL=graph.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceLiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceLiveComponent = (function () {
    function DeviceLiveComponent(router) {
        this.router = router;
        this.title = 'app works!';
    }
    return DeviceLiveComponent;
}());
DeviceLiveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(465)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], DeviceLiveComponent);

var _a;
//# sourceMappingURL=device-live.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionGuard = (function () {
    function ConnectionGuard(router) {
        this.router = router;
        this.isConnect = false;
    }
    ConnectionGuard.prototype.canActivate = function () {
        if (!this.isConnect) {
            this.router.navigateByUrl('/disconnected');
        }
        return this.isConnect;
    };
    return ConnectionGuard;
}());
ConnectionGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ConnectionGuard);

var _a;
//# sourceMappingURL=connection-guard.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_socket_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveDataComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LiveDataComponentComponent = (function () {
    function LiveDataComponentComponent(data, router, route, io) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.io = io;
        console.log(this.route.snapshot.params);
        if (this.data.did == undefined) {
            this.data.did = this.route.snapshot.params['did'];
        }
        this.io.socket.emit('JOIN_USER', this.route.snapshot.params);
        this.io.socket.emit('REQ_CONFIG', { 'did': this.data.did });
        this.io.socket.emit('START_STREAM', { 'did': this.data.did });
    }
    LiveDataComponentComponent.prototype.ngOnInit = function () {
    };
    LiveDataComponentComponent.prototype.toGraph = function () {
        this.router.navigate(['device-live/live/realtime']);
    };
    LiveDataComponentComponent.prototype.toTable = function () {
        this.router.navigate(['device-live/live']);
    };
    return LiveDataComponentComponent;
}());
LiveDataComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-live-data-component',
        template: __webpack_require__(467),
        styles: [__webpack_require__(431)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__share_socket_service__["a" /* SocketService */]) === "function" && _d || Object])
], LiveDataComponentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=live-data-component.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_config_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_socket_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GraphComponent = (function () {
    function GraphComponent(route, http, config, io, data) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.config = config;
        this.io = io;
        this.data = data;
        this.soilChartData = [];
        this.lightChartData = [];
        this.vpdChartData = [];
        this.tempChartData = [];
        this.humiChartData = [];
        this.soilCharOption = {
            title: 'Soil',
            vAxis: { minValue: 0 },
            legend: {
                position: 'bottom'
            }
        };
        this.sensorsData = [];
        this.issoil = true;
        this.isvpd = false;
        this.istemp = false;
        this.ishumi = false;
        this.islight = false;
        this.route.queryParams.subscribe(function (params) {
            var filename = params['filename'];
            _this.io.socket.emit('REQ_LOGGER_DATE', { 'did': _this.data.did, 'data': filename });
        });
        this.io.socket.on("REP_LOGGER_DATE", function (data) {
            console.log(data);
            var d = data;
            d.forEach(function (val) {
                _this.soilChartData.push([val.datetime, val.soil]);
                _this.vpdChartData.push([val.datetime, val.vpd]);
                _this.tempChartData.push([val.datetime, val.temp]);
                _this.humiChartData.push([val.datetime, val.humi]);
                _this.lightChartData.push([val.datetime, val.light]);
            });
            _this.soil = {
                chart: {
                    zoomType: 'xy',
                    type: 'spline'
                },
                title: { text: 'Soil moiseture' },
                series: [{
                        animation: false,
                        type: 'line',
                        data: _this.soilChartData,
                    }],
                xAxis: {
                    type: 'datetime'
                }
            };
            _this.vpd = {
                chart: {
                    zoomType: 'xy',
                    type: 'spline'
                },
                title: { text: 'VPD' },
                series: [{
                        animation: false,
                        type: 'line',
                        data: _this.vpdChartData,
                    }],
                xAxis: {
                    type: 'datetime'
                }
            };
            _this.light = {
                chart: {
                    zoomType: 'xy',
                    type: 'spline'
                },
                title: { text: 'Light' },
                series: [{
                        animation: false,
                        type: 'line',
                        data: _this.lightChartData,
                    }],
                xAxis: {
                    type: 'datetime'
                }
            };
            _this.temp = {
                chart: {
                    zoomType: 'xy',
                    type: 'spline'
                },
                title: { text: 'Temperature' },
                series: [{
                        animation: false,
                        type: 'line',
                        data: _this.tempChartData,
                    }],
                xAxis: {
                    type: 'datetime'
                }
            };
            _this.humi = {
                chart: {
                    zoomType: 'xy',
                    type: 'spline'
                },
                title: { text: 'Humidity' },
                series: [{
                        animation: false,
                        type: 'line',
                        data: _this.humiChartData,
                    }],
                xAxis: {
                    type: 'datetime'
                }
            };
        });
    }
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var filename = params['filename'];
            _this.http.get(_this.config.hostname + "/api/getdata?date=" + filename).subscribe(function (data) {
                // var d = data.json();
                // d.forEach(val=>{
                //   this.soilChartData.push([val.datetime,val.soil]);
                //   this.vpdChartData.push([val.datetime,val.vpd]);
                //   this.tempChartData.push([val.datetime,val.temp]);
                //   this.humiChartData.push([val.datetime,val.humi]);
                //   this.lightChartData.push([val.datetime,val.light]);
                // })
                // this.soil = {
                //     chart: {
                //       zoomType: 'xy',
                //       type: 'spline'
                //     },
                //     title : { text : 'Soil moiseture' },
                //     series : [{
                //     animation: false,
                //     type: 'line',
                //         data: this.soilChartData,
                //     }],
                //     xAxis : {
                //       type: 'datetime'
                //     }
                // };
                // this.vpd = {
                //     chart: {
                //       zoomType: 'xy',
                //       type: 'spline'
                //     },
                //     title : { text : 'VPD' },
                //     series : [{
                //     animation: false,
                //     type: 'line',
                //         data: this.vpdChartData,
                //     }],
                //     xAxis : {
                //       type: 'datetime'
                //     }
                // };
                // this.light = {
                //     chart: {
                //       zoomType: 'xy',
                //       type: 'spline'
                //     },
                //     title : { text : 'Light' },
                //     series : [{
                //     animation: false,
                //     type: 'line',
                //         data: this.lightChartData,
                //     }],
                //     xAxis : {
                //       type: 'datetime'
                //     }
                // };
                // this.temp = {
                //     chart: {
                //       zoomType: 'xy',
                //       type: 'spline'
                //     },
                //     title : { text : 'Temperature' },
                //     series : [{
                //     animation: false,
                //     type: 'line',
                //         data: this.tempChartData,
                //     }],
                //     xAxis : {
                //       type: 'datetime'
                //     }
                // };
                // this.humi = {
                //     chart: {
                //       zoomType: 'xy',
                //       type: 'spline'
                //     },
                //     title : { text : 'Humidity' },
                //     series : [{
                //     animation: false,
                //     type: 'line',
                //         data: this.humiChartData,
                //     }],
                //     xAxis : {
                //       type: 'datetime'
                //     }
                // };
            });
        });
    };
    GraphComponent.prototype.chooseGraph = function (val) {
        switch (val) {
            case "soil":
                this.clearGraph();
                this.issoil = true;
                break;
            case "vpd":
                this.clearGraph();
                this.isvpd = true;
                break;
            case "temp":
                this.clearGraph();
                this.istemp = true;
                break;
            case "humi":
                this.clearGraph();
                this.ishumi = true;
                break;
            case "light":
                this.clearGraph();
                this.islight = true;
                break;
            case "all":
                this.clearGraph();
                this.issoil = true;
                this.isvpd = true;
                this.istemp = true;
                this.ishumi = true;
                this.islight = true;
                break;
            default:
                break;
        }
    };
    GraphComponent.prototype.clearGraph = function () {
        this.issoil = false;
        this.isvpd = false;
        this.istemp = false;
        this.ishumi = false;
        this.islight = false;
    };
    return GraphComponent;
}());
GraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph',
        template: __webpack_require__(471),
        styles: [__webpack_require__(435)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__share_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__share_config_service__["a" /* ConfigService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__share_socket_service__["a" /* SocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__share_data_service__["a" /* DataService */]) === "function" && _e || Object])
], GraphComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensortableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SensortableComponent = (function () {
    function SensortableComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
    }
    SensortableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.filename = params['filename'];
            _this.router.navigate(['device-live/datalogger/graph'], { queryParams: { filename: _this.filename } });
        });
    };
    SensortableComponent.prototype.toTable = function () {
        this.router.navigate(['device-live/datalogger/table'], { queryParams: { filename: this.filename } });
    };
    SensortableComponent.prototype.toGraph = function () {
        this.router.navigate(['device-live/datalogger/graph'], { queryParams: { filename: this.filename } });
    };
    return SensortableComponent;
}());
SensortableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sensortable',
        template: __webpack_require__(472),
        styles: [__webpack_require__(436)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], SensortableComponent);

var _a, _b, _c;
//# sourceMappingURL=sensortable.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_config_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = (function () {
    function TableComponent(route, http, config) {
        this.route = route;
        this.http = http;
        this.config = config;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            // console.log(params);
            _this.filename = params['filename'];
            _this.http.get(_this.config.hostname + "/api/getdata?date=" + _this.filename)
                .subscribe(function (data) {
                // this.dateList = data.json();
                // console.log(data.json())
                _this.sensorsData = data.json();
            }, function (err) {
                console.log(err);
            });
        });
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(473),
        styles: [__webpack_require__(437)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__share_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__share_config_service__["a" /* ConfigService */]) === "function" && _c || Object])
], TableComponent);

var _a, _b, _c;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_socket_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(io, dataservice) {
        this.io = io;
        this.dataservice = dataservice;
        this.yearList = [];
        this.monthList = [];
        this.dayList = [];
        this.hourList = [];
        this.minList = [];
        this.pList = ["am", "pm"];
        this.day = 1;
        this.month = 1;
        this.year = 2015;
        this.hour = 0;
        this.min = 0;
        this.p = "am";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var year = 2015;
        for (var i = 1; i <= 16; i++) {
            this.yearList.push(year++);
        }
        for (var i = 1; i <= 12; i++) {
            this.monthList.push(i);
        }
        for (var i = 1; i <= 31; i++) {
            this.dayList.push(i);
        }
        this.hourList.push(12);
        for (var i = 1; i <= 11; i++) {
            this.hourList.push(i);
        }
        for (var i = 0; i <= 59; i++) {
            this.minList.push(i);
        }
    };
    SettingsComponent.prototype.onUpdate = function () {
        var hour = Number(this.hour);
        if (this.p == "pm") {
            if (hour != 12)
                hour = hour + 12;
        }
        else {
            if (hour == 12)
                hour = 0;
        }
        var datetime = {
            'day': Number(this.day),
            'month': Number(this.month),
            'year': Number(this.year),
            'hour': Number(hour),
            'min': Number(this.min)
        };
        console.log(datetime);
        this.io.socket.emit("DATETIME", datetime);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(475),
        styles: [__webpack_require__(439)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */]) === "function" && _b || Object])
], SettingsComponent);

var _a, _b;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_guard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(afAuth, db, http, router, loginguard, config) {
        this.afAuth = afAuth;
        this.db = db;
        this.http = http;
        this.router = router;
        this.loginguard = loginguard;
        this.config = config;
        this.user = afAuth.authState;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (s) {
            if (!s) {
                console.log("NOT LOGGED IN");
                return;
            }
            _this.config.uid = s.uid;
            _this.loginguard.isLoggedIn = true;
            console.log(s, _this.loginguard.isLoggedIn);
            _this.router.navigateByUrl('/dashboard');
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        $(function () {
            $('#login-form-link').click(function (e) {
                $("#login-form").delay(100).fadeIn(100);
                $("#register-form").fadeOut(100);
                $('#register-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
            $('#register-form-link').click(function (e) {
                $("#register-form").delay(100).fadeIn(100);
                $("#login-form").fadeOut(100);
                $('#login-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
        });
    };
    LoginComponent.prototype.userRegister = function () {
        this.afAuth.auth.createUserWithEmailAndPassword(this.register_email, this.register_password)
            .then(function (authState) {
            console.log("REGISTER ", authState);
        })
            .catch(function (error) {
            console.log("ERROR ", error);
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.email, this.password);
        if (this.email == "" || this.password == "" || this.email == undefined || this.password == undefined) {
            console.log("please fill email and password!");
            this.message = "please fill email and password!";
            return;
        }
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function (authState) {
            _this.loginguard.isLoggedIn = true;
            _this.router.navigateByUrl('/dashboard');
        })
            .catch(function (error) {
            console.log("ERROR ", error.message);
            _this.message = error.message;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.loginguard.isLoggedIn = false;
        this.afAuth.auth.signOut();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(477),
        styles: [__webpack_require__(441)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__login_guard__["a" /* LoginGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__login_guard__["a" /* LoginGuard */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ })

},[528]);
//# sourceMappingURL=main.bundle.js.map