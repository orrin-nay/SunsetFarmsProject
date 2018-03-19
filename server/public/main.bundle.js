webpackJsonp(["main"],{

/***/ "../../../../../../constance.js":
/***/ (function(module, exports) {

module.exports.ServerAdress = 'https://sunsetfarms.herokuapp.com';


/***/ }),

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* //$icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';\r\n//@import \"~bootstrap-sass/assets/stylesheets/bootstrap\"; */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideClient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dashboard_manageUsers_manageUsers_component__ = __webpack_require__("../../../../../src/app/components/dashboard/manageUsers/manageUsers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UserTable_UserTable_component__ = __webpack_require__("../../../../../src/app/components/UserTable/UserTable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_filters_dashboard_filters_component__ = __webpack_require__("../../../../../src/app/components/dashboard/filters/dashboard.filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_compose_dashboard_compose_component__ = __webpack_require__("../../../../../src/app/components/dashboard/compose/dashboard.compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_viewMessages_dashboard_viewMessages_component__ = __webpack_require__("../../../../../src/app/components/dashboard/viewMessages/dashboard.viewMessages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_helperComponents_modals_ModalComponent__ = __webpack_require__("../../../../../src/app/components/helperComponents/modals/ModalComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_info_register_info_component__ = __webpack_require__("../../../../../src/app/components/register/info/register.info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_skills_register_skills_component__ = __webpack_require__("../../../../../src/app/components/register/skills/register.skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_register_guard__ = __webpack_require__("../../../../../src/app/guards/register.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_apollo_client__ = __webpack_require__("../../../../apollo-client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_apollo_angular__ = __webpack_require__("../../../../apollo-angular/build/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__constance_js__ = __webpack_require__("../../../../../../constance.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__constance_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__constance_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dashboard_manageAffiliations_manageAffiliations_component__ = __webpack_require__("../../../../../src/app/components/dashboard/manageAffiliations/manageAffiliations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_skills_service__ = __webpack_require__("../../../../../src/app/services/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// services












var networkInterface = Object(__WEBPACK_IMPORTED_MODULE_27_apollo_client__["b" /* createNetworkInterface */])({ uri: __WEBPACK_IMPORTED_MODULE_29__constance_js__["ServerAdress"] + '/graphql' });
networkInterface.use([{
        applyMiddleware: function (req, next) {
            if (!req.options.headers) {
                req.options.headers = {}; // Create the header object if needed.
            }
            // get the authentication token from local storage if it exists
            req.options.headers.authorization = localStorage.getItem('id_token') || null;
            next();
        }
    }]);
var graphQl = new __WEBPACK_IMPORTED_MODULE_27_apollo_client__["a" /* ApolloClient */]({
    networkInterface: networkInterface,
});
function provideClient() {
    return graphQl;
}
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register/:token', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'register/:token/info', component: __WEBPACK_IMPORTED_MODULE_15__components_register_info_register_info_component__["a" /* RegisterInfoComponent */] },
    { path: 'register/:token/skills', component: __WEBPACK_IMPORTED_MODULE_16__components_register_skills_register_skills_component__["a" /* RegisterSkillsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_26__guards_register_guard__["a" /* RegisterGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'dashboard/compose', component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_compose_dashboard_compose_component__["a" /* DashboardComposeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'dashboard/filters', component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_filters_dashboard_filters_component__["a" /* DashboardFiltersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'dashboard/viewMessages', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_viewMessages_dashboard_viewMessages_component__["a" /* ViewMessagesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'dashboard/manageUsers', component: __WEBPACK_IMPORTED_MODULE_0__components_dashboard_manageUsers_manageUsers_component__["a" /* ManageUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'dashboard/manageAffiliations', component: __WEBPACK_IMPORTED_MODULE_30__components_dashboard_manageAffiliations_manageAffiliations_component__["a" /* ManageAffiliationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_admin_guard__["a" /* AdminGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_register_info_register_info_component__["a" /* RegisterInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_register_skills_register_skills_component__["a" /* RegisterSkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_dashboard_compose_dashboard_compose_component__["a" /* DashboardComposeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_helperComponents_modals_ModalComponent__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_dashboard_filters_dashboard_filters_component__["a" /* DashboardFiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_1__components_UserTable_UserTable_component__["a" /* UserTableComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_dashboard_viewMessages_dashboard_viewMessages_component__["a" /* ViewMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_dashboard_manageUsers_manageUsers_component__["a" /* ManageUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_dashboard_manageAffiliations_manageAffiliations_component__["a" /* ManageAffiliationsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_28_apollo_angular__["b" /* ApolloModule */].forRoot(provideClient)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_20__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_31__services_skills_service__["a" /* SkillsService */], __WEBPACK_IMPORTED_MODULE_22__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_26__guards_register_guard__["a" /* RegisterGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/UserTable/UserTable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/UserTable/UserTable.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table class=\"table\">\r\n    <thead>\r\n    <td>Name</td>\r\n    <td>Email</td>\r\n    <td>Phone</td>\r\n    <td>Date Of Birth</td>\r\n    <td>Head Of Householed</td>\r\n    <td>Gender</td>\r\n    <td>Affiliation</td>\r\n    <td>Admin</td>\r\n    </thead>\r\n    <tr *ngFor=\"let user of users;let i = index\">\r\n      <td>{{user.name}} \r\n       <td>{{user.email?user.email:'Null'}}\r\n        <button class=\"btn btn-default btn-sm pull-right\" (click)=\"currentUser(i); emailModal.show()\"><span class=\"glyphicon glyphicon-pencil\">Edit</span></button></td>\r\n      <td>{{user.phone?getFormatedPhone(user):'Null'}}\r\n        <button class=\"btn btn-default btn-sm pull-right\" (click)=\"currentUser(i); phoneModal.show()\"><span class=\"glyphicon glyphicon-pencil\">Edit</span></button></td>\r\n      <td>{{user.dOB?getFormatedDOB(user):'Null'}}\r\n        <button class=\"btn btn-default btn-sm pull-right\" (click)=\"currentUser(i); dOBModal.show()\"><span class=\"glyphicon glyphicon-pencil\">Edit</span></button></td>\r\n      <td>{{user.hOH!=undefined?validateService.titleCase(getFormatedHOH(user)):'Null'}}\r\n        <button class=\"btn btn-default btn-sm pull-right\" (click)=\"currentUser(i); hOHModal.show()\"><span class=\"glyphicon glyphicon-pencil\">Edit</span></button></td>\r\n      <td>{{user.gender?validateService.titleCase(user.gender):'Null'}}\r\n        <button class=\"btn btn-default btn-sm pull-right\" (click)=\"currentUser(i); genderModal.show()\"><span class=\"glyphicon glyphicon-pencil\">Edit</span></button></td>\r\n      <td>\r\n          <button class=\"btn btn-default btn-sm pull-right\" (click)=\"currentUser(i); skillsModal.show()\"><span class=\"glyphicon glyphicon-pencil\">Edit</span></button>\r\n          <p *ngFor=\"let skill of user.skills\">{{skill}}</p>\r\n      <td>{{user.admin?validateService.titleCase(user.admin.toString()):'False'}}\r\n          <button class=\"btn btn-default btn-sm pull-right\" (click)=\"currentUser(i); adminModal.show()\"><span class=\"glyphicon glyphicon-pencil\">Edit</span></button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n  <!-- Email Modal -->\r\n  <app-modal #emailModal>\r\n      <div class=\"app-modal-header\">\r\n        Change Email\r\n      </div>\r\n      <div class=\"app-modal-body\">\r\n        <div class=\"form-group\">\r\n          <form (submit)=changeEmail(emailModal)>\r\n            <label>New Email:</label>\r\n            <input type=\"email\" [(ngModel)]=\"newEmail\" name=\"newEmail\" class=\"form-control\">\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"emailModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=changeEmail(emailModal)>Save changes</button>\r\n      </div>\r\n    </app-modal>\r\n    <!-- Phone Modal -->\r\n    <app-modal #phoneModal>\r\n      <div class=\"app-modal-header\">\r\n        Change Phone\r\n      </div>\r\n      <div class=\"app-modal-body\">\r\n        <div class=\"form-group\">\r\n          <form (submit)=changePhone(phoneModal)>\r\n            <label>New Phone:</label>\r\n            <input type=\"tel\" [(ngModel)]=\"newPhone\" name=\"newPhone\" class=\"form-control\">\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"phoneModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=changePhone(phoneModal)>Save changes</button>\r\n      </div>\r\n    </app-modal>\r\n    <!-- dOB Modal -->\r\n    <app-modal #dOBModal>\r\n      <div class=\"app-modal-header\">\r\n        Change Date Of Birth\r\n      </div>\r\n      <div class=\"app-modal-body\">\r\n        <div class=\"form-group\">\r\n          <form (submit)=changeDOB(dOBModal)>\r\n            <label>New Date Of Birth:</label>\r\n            <input type=\"date\" [(ngModel)]=\"newDOB\" name=\"newDOB\" class=\"form-control\">\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"dOBModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=changeDOB(dOBModal)>Save changes</button>\r\n      </div>\r\n    </app-modal>\r\n    <!-- Gender Modal -->\r\n    <app-modal #genderModal>\r\n      <div class=\"app-modal-header\">\r\n        Change Gender\r\n      </div>\r\n      <div class=\"app-modal-body\">\r\n        <div class=\"form-group\">\r\n          <form (submit)=changeGender(genderModal)>\r\n            <label>Gender:  </label>\r\n            <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newGender\" name=\"newGender\" value=\"male\">Male</label>\r\n            <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newGender\" name=\"newGender\" value=\"female\">Female</label>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"genderModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=changeGender(genderModal)>Save changes</button>\r\n      </div>\r\n    </app-modal>\r\n    <!-- hOH Modal -->\r\n    <app-modal #hOHModal>\r\n      <div class=\"app-modal-header\">\r\n        Change Head of Household\r\n      </div>\r\n      <div class=\"app-modal-body\">\r\n        <div class=\"form-group\">\r\n          <form (submit)=newHOH(hOHModal)>\r\n            <label>Head Of Household:  </label>\r\n            <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newHOH\" name=\"newHOH\" value=\"true\">Yes</label>\r\n            <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newHOH\" name=\"newHOH\" value=\"false\">No</label>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"hOHModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=changeHOH(hOHModal)>Save changes</button>\r\n      </div>\r\n    </app-modal>\r\n    <!-- Skills Modal -->\r\n    <app-modal #skillsModal>\r\n      <div class=\"app-modal-header\">\r\n        Change Affiliation\r\n      </div>\r\n      <div class=\"app-modal-body\">\r\n        <form (submit)=\"addSkill(skillsModal)\" class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <input [(ngModel)]=\"newSkill\" name=\"newSkill\" type=\"tel\" class=\"form-control\" placeholder=\"Search for affiliations\" list=\"suggestedSkills\"\r\n              (ngModelChange)=\"skillSearchChange()\" autocomplete=\"off\">\r\n            <datalist id=\"suggestedSkills\">\r\n              <option *ngFor=\"let skillSuggestion of availableSkills\" value=\"{{skillSuggestion}}\">\r\n            </datalist>\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\" [disabled]=\"!canSubmit\">\r\n          </div>\r\n        </form>\r\n        <h1 class=\"lable-holder\">\r\n          <span class=\"label label-primary skill pull-left\" *ngFor=\"let skill of user.skills\">\r\n                  {{skill}}<button (click)=\"removeSkill(skill)\" class=\"btn btn-primary remove-btn\" aria-hidden=\"true\">&times;</button></span>\r\n        </h1>\r\n        <p class=\"clear-fix\"></p>\r\n      </div>\r\n      <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"skillsModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"skillsModal.hide()\">Save changes</button>\r\n      </div>\r\n    </app-modal>\r\n    <!-- Admin Modal -->\r\n    <app-modal #adminModal>\r\n        <div class=\"app-modal-header\">\r\n          Change Admin Privilege\r\n        </div>\r\n        <div class=\"app-modal-body\">\r\n            <form (submit)=changeAdminPrivilege(adminModal)>\r\n              <label>Admin Privilege:  </label>\r\n              <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newAdmin\" name=\"newAdmin\" value=\"true\">True</label>\r\n              <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newAdmin\" name=\"newAdmin\" value=\"false\">False</label>\r\n            </form>\r\n        </div>\r\n        <div class=\"app-modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"adminModal.hide()\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=changeAdminPrivilege(adminModal)>Save changes</button>\r\n        </div>\r\n      </app-modal>"

/***/ }),

/***/ "../../../../../src/app/components/UserTable/UserTable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_User__ = __webpack_require__("../../../../../src/app/types/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_skills_service__ = __webpack_require__("../../../../../src/app/services/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






var UserTableComponent = (function () {
    function UserTableComponent(authService, skillsService, validateService, flashMessage) {
        this.authService = authService;
        this.skillsService = skillsService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__types_User__["a" /* User */]();
    }
    UserTableComponent.prototype.currentUser = function (currentUserIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.currentUserIndex = currentUserIndex;
                        this.user = this.users[currentUserIndex];
                        this.newEmail = this.user.email;
                        this.newPhone = this.getFormatedPhone(this.user);
                        this.newDOB = this.user.dOB;
                        this.newGender = this.user.gender;
                        this.newHOH = this.user.hOH.toString();
                        this.newAdmin = this.user.admin.toString();
                        _a = this;
                        return [4 /*yield*/, this.skillsService.getSkills(this.user.skills)];
                    case 1:
                        _a.availableSkills = _b.sent();
                        this.canSubmit = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTableComponent.prototype.skillSearchChange = function () {
        this.newSkill = this.validateService.titleCase(this.newSkill);
        if (this.availableSkills.indexOf(this.newSkill) !== -1) {
            this.canSubmit = true;
        }
        else {
            this.canSubmit = false;
        }
    };
    UserTableComponent.prototype.changeEmail = function (emailModal) {
        var _this = this;
        if (this.newEmail === undefined || this.newEmail === '') {
            emailModal.setErrorMessage('Please Enter An Email');
            return;
        }
        if (this.validateService.validateEmail(this.newEmail)) {
            this.authService.changeEmailAdmin(this.newEmail, this.user.id).subscribe(function (data) {
                if (data.data.ChangeEmailAdmin.success) {
                    _this.user.email = _this.newEmail;
                    _this.flashMessage.show(data.data.ChangeEmailAdmin.success, { cssClass: 'alert-success', timeout: 12000 });
                    emailModal.hide();
                }
                else {
                    emailModal.setErrorMessage(data.data.ChangeEmailAdmin.error);
                }
            });
        }
        else {
            emailModal.setErrorMessage('Please Enter A Valid Email');
        }
    };
    UserTableComponent.prototype.changePhone = function (phoneModal) {
        var _this = this;
        if (this.newPhone === undefined || this.newPhone === '') {
            phoneModal.setErrorMessage('Please Enter An Phone');
            return;
        }
        if (this.validateService.validatePhone(this.newPhone)) {
            this.newPhone = this.validateService.cleanPhone(this.newPhone);
            this.authService.changePhoneAdmin(this.newPhone, this.user.id).subscribe(function (data) {
                if (data.data.ChangePhoneAdmin.success) {
                    _this.user.phone = _this.newPhone;
                    _this.flashMessage.show(data.data.ChangePhoneAdmin.success, { cssClass: 'alert-success', timeout: 12000 });
                    phoneModal.hide();
                }
                else {
                    phoneModal.setErrorMessage(data.data.ChangePhoneAdmin.error);
                }
            });
        }
        else {
            phoneModal.setErrorMessage('Please Enter A Valid Phone');
        }
    };
    UserTableComponent.prototype.changeDOB = function (dOBModal) {
        var _this = this;
        if (this.newDOB === undefined || this.newDOB === '') {
            dOBModal.setErrorMessage('Please Enter A Date Of Birth');
            return;
        }
        if (this.validateService.validateDate(this.newDOB)) {
            this.authService.changeDOBAdmin(this.newDOB, this.user.id).subscribe(function (data) {
                if (data.data.ChangeDOBAdmin.success) {
                    _this.user.dOB = _this.newDOB;
                    _this.flashMessage.show(data.data.ChangeDOBAdmin.success, { cssClass: 'alert-success', timeout: 12000 });
                    dOBModal.hide();
                }
                else {
                    dOBModal.setErrorMessage(data.data.ChangeDOBAdmin.error);
                }
            });
        }
        else {
            dOBModal.setErrorMessage('Please Enter A Valid Date Of Birth');
        }
    };
    UserTableComponent.prototype.changeGender = function (genderModal) {
        var _this = this;
        if (this.newGender === undefined) {
            genderModal.setErrorMessage('Please Enter A Gender');
            return;
        }
        if (this.validateService.validateGender(this.newGender)) {
            this.authService.changeGenderAdmin(this.newGender, this.user.id).subscribe(function (data) {
                if (data.data.ChangeGenderAdmin.success) {
                    _this.user.gender = _this.newGender;
                    _this.flashMessage.show(data.data.ChangeGenderAdmin.success, { cssClass: 'alert-success', timeout: 12000 });
                    genderModal.hide();
                }
                else {
                    genderModal.setErrorMessage(data.data.ChangeGenderAdmin.error);
                }
            });
        }
        else {
            genderModal.setErrorMessage('Please Enter A Valid Gender');
        }
    };
    UserTableComponent.prototype.changeHOH = function (hOHModal) {
        var _this = this;
        if (this.newHOH === undefined) {
            hOHModal.setErrorMessage('Please Enter If You Are Head Of House Hold');
            return;
        }
        if (!this.validateService.validateHOH(this.newHOH === 'true')) {
            this.authService.changeHOHAdmin(this.newHOH, this.user.id).subscribe(function (data) {
                if (data.data.ChangeHOHAdmin.success) {
                    _this.user.hOH = _this.newHOH === 'true';
                    _this.flashMessage.show(data.data.ChangeHOHAdmin.success, { cssClass: 'alert-success', timeout: 12000 });
                    hOHModal.hide();
                }
                else {
                    hOHModal.setErrorMessage(data.data.ChangeHOHAdmin.error);
                }
            });
        }
        else {
            hOHModal.setErrorMessage('Please Enter A Head Of House Hold');
        }
    };
    UserTableComponent.prototype.changeAdminPrivilege = function (AdminModal) {
        var _this = this;
        if (this.newHOH === undefined) {
            AdminModal.setErrorMessage('Please Enter Admin Privlage');
            return;
        }
        this.authService.changeAdminPrivilege(false, this.user.id).subscribe(function (data) {
            if (data.data.ChangeAdminPrivilege.success) {
                _this.user.admin = _this.newAdmin === 'true';
                _this.flashMessage.show(data.data.ChangeAdminPrivilege.success, { cssClass: 'alert-success', timeout: 12000 });
                AdminModal.hide();
            }
            else {
                AdminModal.setErrorMessage(data.data.ChangeAdminPrivilege.error);
            }
        });
    };
    UserTableComponent.prototype.removeSkill = function (skill) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var newSkills, index;
            return __generator(this, function (_a) {
                newSkills = this.user.skills.slice();
                index = newSkills.indexOf(skill);
                if (index !== -1) {
                    this.authService.removeSkillAdmin(skill, this.user.id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    console.log(data);
                                    if (!data.data.RemoveSkillAdmin.success) return [3 /*break*/, 2];
                                    newSkills.splice(index, 1);
                                    this.user.skills = newSkills;
                                    _a = this;
                                    return [4 /*yield*/, this.skillsService.getSkills(this.user.skills)];
                                case 1:
                                    _a.availableSkills = _b.sent();
                                    return [3 /*break*/, 2];
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    UserTableComponent.prototype.addSkill = function (skillsModal) {
        var _this = this;
        if (this.availableSkills.indexOf(this.newSkill) !== -1) {
            this.authService.addSkillAdmin(this.newSkill, this.user.id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log(data);
                            if (!data.data.AddSkillAdmin.success) return [3 /*break*/, 2];
                            try {
                                if (this.user.skills.indexOf(this.newSkill) === -1) {
                                    this.user.skills.push(this.newSkill);
                                }
                            }
                            catch (err) {
                                this.user.skills = new Array();
                                this.user.skills.push(this.newSkill);
                            }
                            _a = this;
                            return [4 /*yield*/, this.skillsService.getSkills(this.user.skills)];
                        case 1:
                            _a.availableSkills = _b.sent();
                            this.newSkill = '';
                            this.skillSearchChange();
                            return [3 /*break*/, 3];
                        case 2:
                            skillsModal.setErrorMessage(data.data.AddSkillAdmin.error);
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            skillsModal.setErrorMessage('Invalid Skill');
        }
    };
    UserTableComponent.prototype.getFormatedDOB = function (user) {
        var date = user.dOB.slice(5, 7);
        date += '/';
        date += user.dOB.slice(8, 10);
        date += '/';
        date += user.dOB.slice(0, 4);
        return date;
    };
    UserTableComponent.prototype.getFormatedPhone = function (user) {
        var phone = '(';
        phone += user.phone.slice(0, 3);
        phone += ') ';
        phone += user.phone.slice(3, 6);
        phone += '-';
        phone += user.phone.slice(6, 11);
        return phone;
    };
    UserTableComponent.prototype.getFormatedHOH = function (user) {
        if (user.hOH.toString() === 'true') {
            return 'yes';
        }
        return 'no';
    };
    return UserTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], UserTableComponent.prototype, "users", void 0);
UserTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-user-table',
        template: __webpack_require__("../../../../../src/app/components/UserTable/UserTable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/UserTable/UserTable.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_skills_service__["a" /* SkillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_skills_service__["a" /* SkillsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], UserTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=UserTable.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/compose/dashboard.compose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/compose/dashboard.compose.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\n<form (submit)=\"submit()\">\n    <div class=\"form-group\">\n        <label>Subject</label>\n        <input type=\"text\" [(ngModel)]=\"subject\" name=\"subject\" class=\"form-control\" placeholder=\"Add Subject\" (ngModelChange)=\"saveMessage()\">\n    </div>\n    <div class=\"form-group\">\n        <label>Message</label>\n        <textarea type=\"text\" [(ngModel)]=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Add Message\" (ngModelChange)=\"saveMessage()\"></textarea>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Next\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/compose/dashboard.compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComposeComponent = (function () {
    function DashboardComposeComponent(flashMessage, router) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.subject = localStorage.getItem('subject');
        this.message = localStorage.getItem('message');
    }
    DashboardComposeComponent.prototype.ngOnInit = function () {
    };
    DashboardComposeComponent.prototype.submit = function () {
        if ((this.subject === undefined || this.subject === '') ||
            (this.message === undefined || this.message === '')) {
            this.flashMessage.show('Please Fill Out All Fields', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.router.navigate(['dashboard/filters']);
        }
    };
    DashboardComposeComponent.prototype.saveMessage = function () {
        localStorage.setItem('subject', this.subject);
        localStorage.setItem('message', this.message);
    };
    return DashboardComposeComponent;
}());
DashboardComposeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-dashboard-compose',
        template: __webpack_require__("../../../../../src/app/components/dashboard/compose/dashboard.compose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/compose/dashboard.compose.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComposeComponent);

var _a, _b;
//# sourceMappingURL=dashboard.compose.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-send-message{\r\n    margin-top: 10px;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\r\n<div class=\"row\">\r\n    <div class=\"col-6\">\r\n        <form (submit)=\"onAddUserSubmit()\">\r\n            <h2>Add User</h2>\r\n            <div class=\"form-group\">\r\n                <label>Full Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"addUserName\" name=\"addUserName\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" [(ngModel)]=\"addUserEmail\" name=\"addUserEmail\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Phone</label>\r\n                <input type=\"text\" [(ngModel)]=\"addUserPhone\" name=\"addUserPhone\" class=\"form-control\">\r\n            </div>\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Add User\">\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <hr>\r\n    <a [routerLink]=\"['/dashboard/compose']\" class=\"btn btn-primary btn-send-message\">Send Message</a>\r\n    <hr>\r\n    <a [routerLink]=\"['/dashboard/manageUsers']\" class=\"btn btn-primary btn-send-message\">Manage Users</a>\r\n    <hr>\r\n    <a [routerLink]=\"['/dashboard/manageAffiliations']\" class=\"btn btn-primary btn-send-message\">Manage Affiliations</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function DashboardComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onAddUserSubmit = function () {
        var _this = this;
        var user = {
            name: this.addUserName,
            email: this.addUserEmail,
            phone: this.addUserPhone
        };
        // Required Fields
        if (!this.validateService.validateAddUser(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (user.email) {
            // Validate Email
            if (!this.validateService.validateEmail(user.email)) {
                this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }
        if (user.phone) {
            // Validate Email
            if (!this.validateService.validatePhone(user.phone)) {
                this.flashMessage.show('Please use a valid phone number', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }
        // Register user
        this.authService.addUser(user).subscribe(function (data) {
            if (data.data.addUser.success) {
                _this.flashMessage.show(data.data.addUser.success, { cssClass: 'alert-success', timeout: 12000 });
                _this.addUserEmail = '';
                _this.addUserName = '';
            }
            else {
                _this.flashMessage.show(data.data.addUser.error, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/filters/dashboard.filters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter{\r\n    margin: 10px;\r\n    float: left;\r\n  }\r\n  .remove-btn{\r\n      padding: 6px;\r\n      margin-left: 2px;\r\n      font-size: 1em;\r\n  }\r\n  .btn-finished{\r\n    clear: both;\r\n  }\r\n  .clear-fix{\r\n    clear: both;\r\n  }\r\n  .filter-form{\r\n      width: 100%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/filters/dashboard.filters.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\r\n<form (submit)=\"addFillter()\" class=\"form-inline\">\r\n    <div class=\"form-group\">\r\n      <input  [(ngModel)]=\"filterField\" name=\"filterField\" type=\"tel\" class=\"form-control\" \r\n      placeholder=\"Filter By Gender Head Of House Birth Year Or Skills\" list=\"suggestedFilters\" (ngModelChange)=\"filterSearchChange()\" autocomplete=\"off\">\r\n      <datalist id=\"suggestedFilters\">\r\n        <option *ngFor=\"let filterSuggestion of filterSuggestions\" value=\"{{filterSuggestion}}\">\r\n      </datalist>\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\" [disabled]=\"!canSubmit\">\r\n    </div>\r\n    <p class=\"pull-right\">{{numberOfRecipients}} Results</p>\r\n</form>\r\n<h1 class=\"lable-holder\">\r\n    <span class=\"label label-primary filter\" *ngFor=\"let filter of filters\">\r\n        {{filter}}<button (click)=\"removeFilter(filter)\" class=\"btn btn-primary remove-btn\">&times;</button></span>\r\n</h1>\r\n<p class=\"clear-fix\"></p>\r\n<br>\r\n<hr>\r\n  \r\n<form (submit)=\"AreYouSureModal.show()\">\r\n    <div class=\"form-group\">\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Finished\">\r\n    </div>\r\n</form>\r\n  <!-- hOH Modal -->\r\n  <app-modal #AreYouSureModal>\r\n        <div class=\"app-modal-header\">\r\n          Are you sure?\r\n        </div>\r\n        <div class=\"app-modal-body\">\r\n                <h2>Are you sure you want to send this message to {{numberOfRecipients}} recipients?</h2>\r\n        </div>\r\n        <div class=\"app-modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"AreYouSureModal.hide()\">No</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=sendMessage(AreYouSureModal)>Yes</button>\r\n        </div>\r\n      </app-modal>\r\n      <app-user-table [users] = \"users\"></app-user-table>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/filters/dashboard.filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardFiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_User__ = __webpack_require__("../../../../../src/app/types/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_skills_service__ = __webpack_require__("../../../../../src/app/services/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardFiltersComponent = (function () {
    function DashboardFiltersComponent(validateService, authService, flashMessage, skillsService, router) {
        var _this = this;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.skillsService = skillsService;
        this.router = router;
        this.skillsService.getSkillsList().then(function (skills) {
            _this.posibleFilterSuggestions = skills.concat(['Male', 'Female', 'Head Of Household', 'Not Head Of Household']);
        });
        try {
            this.filters = JSON.parse(localStorage.getItem('filters'));
        }
        catch (error) {
        }
        if (!this.filters) {
            this.filters = [];
        }
        this.updateFilterSujestions();
        this.canSubmit = false;
        this.getFilterResults();
    }
    DashboardFiltersComponent.prototype.ngOnInit = function () {
    };
    DashboardFiltersComponent.prototype.filterSearchChange = function () {
        this.filterField = this.validateService.titleCase(this.filterField);
        if (this.filters.indexOf(this.filterField) !== -1) {
            this.canSubmit = false;
            return;
        }
        if (this.filterSuggestions.indexOf(this.filterField) !== -1) {
            this.canSubmit = true;
        }
        else if (parseInt(this.filterField, 0) <= new Date().getUTCFullYear()
            && parseInt(this.filterField, 0) > 1900
            && (this.filters.indexOf(this.filterField) === -1)) {
            this.canSubmit = true;
        }
        else {
            this.canSubmit = false;
        }
        this.updateFilterSujestions();
    };
    DashboardFiltersComponent.prototype.addFillter = function () {
        if (this.filterSuggestions.indexOf(this.filterField) !== -1) {
            this.addToFiltersArray();
        }
        else if (parseInt(this.filterField, 0) <= new Date().getUTCFullYear() && parseInt(this.filterField, 0) > 1900) {
            this.addToFiltersArray();
        }
        this.getFilterResults();
    };
    DashboardFiltersComponent.prototype.addToFiltersArray = function () {
        this.filters.push(this.filterField);
        this.filterField = '';
        this.canSubmit = false;
        localStorage.setItem('filters', JSON.stringify(this.filters));
        this.updateFilterSujestions();
    };
    DashboardFiltersComponent.prototype.removeFilter = function (filter) {
        var index = this.filters.indexOf(filter);
        if (index !== -1) {
            this.filters.splice(index, 1);
        }
        localStorage.setItem('filters', JSON.stringify(this.filters));
        this.updateFilterSujestions();
        this.getFilterResults();
    };
    DashboardFiltersComponent.prototype.updateFilterSujestions = function () {
        var _this = this;
        this.filterSuggestions = [];
        this.filterSuggestions = this.filterSuggestions.concat(this.posibleFilterSuggestions);
        this.filters.forEach(function (filter) {
            var index = _this.filterSuggestions.indexOf(filter);
            if (index !== -1) {
                _this.filterSuggestions.splice(index, 1);
            }
        });
        if (this.filters.indexOf('Male') !== -1) {
            this.filterSuggestions.splice(this.filterSuggestions.indexOf('Female'), 1);
        }
        if (this.filters.indexOf('Female') !== -1) {
            this.filterSuggestions.splice(this.filterSuggestions.indexOf('Male'), 1);
        }
        if (this.filters.indexOf('Head Of Household') !== -1) {
            this.filterSuggestions.splice(this.filterSuggestions.indexOf('Not Head Of Household'), 1);
        }
        if (this.filters.indexOf('Not Head Of Household') !== -1) {
            this.filterSuggestions.splice(this.filterSuggestions.indexOf('Head Of Household'), 1);
        }
        if (this.filterField !== '' && this.filterField !== undefined) {
            this.authService.searchUsers(this.filterField).subscribe(function (data) {
                if (data.data.SearchUser.error) {
                    _this.flashMessage.show(data.data.SearchUser.error, { cssClass: 'alert-danger', timeout: 3000 });
                }
                else if (data.data.SearchUser.results) {
                    _this.filterSuggestions = _this.filterSuggestions.concat(data.data.SearchUser.results);
                }
            });
        }
    };
    DashboardFiltersComponent.prototype.getFilterResults = function () {
        var _this = this;
        this.authService.getFilterResultsNumber([].concat(this.filters)).subscribe(function (data) {
            if (data.data.FilterResultsNumber.success) {
                _this.numberOfRecipients = data.data.FilterResultsNumber.success;
            }
            else if (data.data.FilterResultsNumber.error) {
                _this.flashMessage.show(data.data.ErrorSuccess.error, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.authService.getFilterResults([].concat(this.filters)).subscribe(function (data) {
            if (data.data.FilterResults.success) {
                _this.users = [];
                data.data.FilterResults.success.forEach(function (user) {
                    var newUser = new __WEBPACK_IMPORTED_MODULE_5__types_User__["a" /* User */]();
                    newUser.name = user.name;
                    newUser.email = user.email;
                    newUser.password = user.password;
                    newUser.phone = user.phone;
                    // date Of Birth
                    newUser.dOB = user.dOB;
                    newUser.gender = user.gender;
                    // head of house
                    newUser.hOH = user.hOH;
                    newUser.skills = user.skills;
                    newUser.admin = user.admin;
                    newUser.id = user.id;
                    _this.users.push(newUser);
                });
            }
            else if (data.data.FilterResults.error) {
                _this.flashMessage.show(data.data.ErrorSuccess.error, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardFiltersComponent.prototype.sendMessage = function (areYouSureModal) {
        var _this = this;
        areYouSureModal.hide();
        this.authService.sendMessage([].concat(this.filters), localStorage.getItem('subject'), localStorage.getItem('message')).then(function (data) {
            if (data.data.SendMessage.success) {
                _this.flashMessage.show(data.data.SendMessage.success, { cssClass: 'alert-success', timeout: 3000 });
                localStorage.setItem('subject', '');
                localStorage.setItem('message', '');
                localStorage.setItem('filters', '');
                _this.router.navigate(['dashboard/']);
            }
            else if (data.data.SendMessage.error) {
                _this.flashMessage.show(data.data.SendMessage.error, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return DashboardFiltersComponent;
}());
DashboardFiltersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-dashboard.filters',
        template: __webpack_require__("../../../../../src/app/components/dashboard/filters/dashboard.filters.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/filters/dashboard.filters.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_skills_service__["a" /* SkillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_skills_service__["a" /* SkillsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object])
], DashboardFiltersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dashboard.filters.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/manageAffiliations/manageAffiliations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/manageAffiliations/manageAffiliations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manageAffiliations works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/manageAffiliations/manageAffiliations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAffiliationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageAffiliationsComponent = (function () {
    function ManageAffiliationsComponent() {
    }
    ManageAffiliationsComponent.prototype.ngOnInit = function () {
    };
    return ManageAffiliationsComponent;
}());
ManageAffiliationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manageAffiliations',
        template: __webpack_require__("../../../../../src/app/components/dashboard/manageAffiliations/manageAffiliations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/manageAffiliations/manageAffiliations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageAffiliationsComponent);

//# sourceMappingURL=manageAffiliations.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/manageUsers/manageUsers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/manageUsers/manageUsers.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\n<form (submit)=\"addFillter()\" class=\"form-inline\">\n    <div class=\"form-group\">\n      <input  [(ngModel)]=\"filterField\" name=\"filterField\" type=\"tel\" class=\"form-control\" \n      placeholder=\"Filter By Gender Head Of House Birth Year Or Skills\" list=\"suggestedFilters\" (ngModelChange)=\"filterSearchChange()\" autocomplete=\"off\">\n      <datalist id=\"suggestedFilters\">\n        <option *ngFor=\"let filterSuggestion of filterSuggestions\" value=\"{{filterSuggestion}}\">\n      </datalist>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\" [disabled]=\"!canSubmit\">\n    </div>\n</form>\n<h1 class=\"lable-holder\">\n    <span class=\"label label-primary filter\" *ngFor=\"let filter of filters\">\n        {{filter}}<button (click)=\"removeFilter(filter)\" class=\"btn btn-primary remove-btn\">&times;</button></span>\n</h1>\n<p class=\"clear-fix\"></p>\n<br>\n<hr>\n\n<app-user-table [users] = \"users\"></app-user-table>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/manageUsers/manageUsers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_User__ = __webpack_require__("../../../../../src/app/types/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_skills_service__ = __webpack_require__("../../../../../src/app/services/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManageUsersComponent = (function () {
    function ManageUsersComponent(skillsService, validateService, authService, flashMessage, router) {
        var _this = this;
        this.skillsService = skillsService;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.skillsService.getSkillsList().then(function (skills) {
            _this.posibleFilterSuggestions = skills.concat(['Male', 'Female', 'Head Of Household', 'Not Head Of Household']);
        });
        try {
            this.filters = JSON.parse(localStorage.getItem('filters'));
        }
        catch (error) {
        }
        if (!this.filters) {
            this.filters = [];
        }
        this.updateFilterSujestions();
        this.canSubmit = false;
        this.getFilterResults();
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
    };
    ManageUsersComponent.prototype.filterSearchChange = function () {
        this.filterField = this.validateService.titleCase(this.filterField);
        if (this.filters.indexOf(this.filterField) !== -1) {
            this.canSubmit = false;
            return;
        }
        if (this.filterSuggestions.indexOf(this.filterField) !== -1) {
            this.canSubmit = true;
        }
        else if (parseInt(this.filterField, 0) <= new Date().getUTCFullYear()
            && parseInt(this.filterField, 0) > 1900
            && (this.filters.indexOf(this.filterField) === -1)) {
            this.canSubmit = true;
        }
        else {
            this.canSubmit = false;
        }
        this.updateFilterSujestions();
    };
    ManageUsersComponent.prototype.addFillter = function () {
        if (this.filterSuggestions.indexOf(this.filterField) !== -1) {
            this.addToFiltersArray();
        }
        else if (parseInt(this.filterField, 0) <= new Date().getUTCFullYear() && parseInt(this.filterField, 0) > 1900) {
            this.addToFiltersArray();
        }
        this.getFilterResults();
    };
    ManageUsersComponent.prototype.addToFiltersArray = function () {
        this.filters.push(this.filterField);
        this.filterField = '';
        this.canSubmit = false;
        localStorage.setItem('filters', JSON.stringify(this.filters));
        this.updateFilterSujestions();
    };
    ManageUsersComponent.prototype.removeFilter = function (filter) {
        var index = this.filters.indexOf(filter);
        if (index !== -1) {
            this.filters.splice(index, 1);
        }
        localStorage.setItem('filters', JSON.stringify(this.filters));
        this.updateFilterSujestions();
        this.getFilterResults();
    };
    ManageUsersComponent.prototype.updateFilterSujestions = function () {
        var _this = this;
        this.filterSuggestions = [];
        this.filterSuggestions = this.filterSuggestions.concat(this.posibleFilterSuggestions);
        this.filters.forEach(function (filter) {
            var index = _this.filterSuggestions.indexOf(filter);
            if (index !== -1) {
                _this.filterSuggestions.splice(index, 1);
            }
        });
        if (this.filters.indexOf('Male') !== -1) {
            this.filterSuggestions.splice(this.filterSuggestions.indexOf('Female'), 1);
        }
        if (this.filters.indexOf('Female') !== -1) {
            this.filterSuggestions.splice(this.filterSuggestions.indexOf('Male'), 1);
        }
        if (this.filters.indexOf('Head Of Household') !== -1) {
            this.filterSuggestions.splice(this.filterSuggestions.indexOf('Not Head Of Household'), 1);
        }
        if (this.filters.indexOf('Not Head Of Household') !== -1) {
            this.filterSuggestions.splice(this.filterSuggestions.indexOf('Head Of Household'), 1);
        }
        if (this.filterField !== '' && this.filterField !== undefined) {
            this.authService.searchUsers(this.filterField).subscribe(function (data) {
                if (data.data.SearchUser.error) {
                    _this.flashMessage.show(data.data.SearchUser.error, { cssClass: 'alert-danger', timeout: 3000 });
                }
                else if (data.data.SearchUser.results) {
                    _this.filterSuggestions = _this.filterSuggestions.concat(data.data.SearchUser.results);
                }
            });
        }
    };
    ManageUsersComponent.prototype.getFilterResults = function () {
        var _this = this;
        this.authService.getFilterResultsNumber([].concat(this.filters)).subscribe(function (data) {
            if (data.data.FilterResultsNumber.success) {
                _this.numberOfRecipients = data.data.FilterResultsNumber.success;
            }
            else if (data.data.FilterResultsNumber.error) {
                _this.flashMessage.show(data.data.ErrorSuccess.error, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.authService.getFilterResults([].concat(this.filters)).subscribe(function (data) {
            if (data.data.FilterResults.success) {
                _this.users = [];
                data.data.FilterResults.success.forEach(function (user) {
                    var newUser = new __WEBPACK_IMPORTED_MODULE_5__types_User__["a" /* User */]();
                    newUser.name = user.name;
                    newUser.email = user.email;
                    newUser.password = user.password;
                    newUser.phone = user.phone;
                    // date Of Birth
                    newUser.dOB = user.dOB;
                    newUser.gender = user.gender;
                    // head of house
                    newUser.hOH = user.hOH;
                    newUser.skills = user.skills;
                    newUser.admin = user.admin;
                    newUser.id = user.id;
                    _this.users.push(newUser);
                });
            }
            else if (data.data.FilterResults.error) {
                _this.flashMessage.show(data.data.ErrorSuccess.error, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ManageUsersComponent.prototype.sendMessage = function (areYouSureModal) {
        var _this = this;
        areYouSureModal.hide();
        this.authService.sendMessage([].concat(this.filters), localStorage.getItem('subject'), localStorage.getItem('message')).then(function (data) {
            if (data.data.SendMessage.success) {
                _this.flashMessage.show(data.data.SendMessage.success, { cssClass: 'alert-success', timeout: 3000 });
                localStorage.setItem('subject', '');
                localStorage.setItem('message', '');
                localStorage.setItem('filters', '');
                _this.router.navigate(['dashboard/']);
            }
            else if (data.data.SendMessage.error) {
                _this.flashMessage.show(data.data.SendMessage.error, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return ManageUsersComponent;
}());
ManageUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-manageUsers',
        template: __webpack_require__("../../../../../src/app/components/dashboard/manageUsers/manageUsers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/manageUsers/manageUsers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_skills_service__["a" /* SkillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_skills_service__["a" /* SkillsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ManageUsersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=manageUsers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/viewMessages/dashboard.viewMessages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/viewMessages/dashboard.viewMessages.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">View Messages</h1>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/viewMessages/dashboard.viewMessages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewMessagesComponent = (function () {
    function ViewMessagesComponent(flashMessage, router) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.subject = localStorage.getItem('subject');
        this.message = localStorage.getItem('message');
    }
    ViewMessagesComponent.prototype.ngOnInit = function () {
    };
    ViewMessagesComponent.prototype.submit = function () {
        if ((this.subject === undefined || this.subject === '') ||
            (this.message === undefined || this.message === '')) {
            this.flashMessage.show('Please Fill Out All Fields', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.router.navigate(['dashboard/filters']);
        }
    };
    ViewMessagesComponent.prototype.saveMessage = function () {
        localStorage.setItem('subject', this.subject);
        localStorage.setItem('message', this.message);
    };
    return ViewMessagesComponent;
}());
ViewMessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-dashboard-viewMessages',
        template: __webpack_require__("../../../../../src/app/components/dashboard/viewMessages/dashboard.viewMessages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/viewMessages/dashboard.viewMessages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ViewMessagesComponent);

var _a, _b;
//# sourceMappingURL=dashboard.viewMessages.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/helperComponents/modals/ModalComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
        this.errorMessage = null;
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ModalComponent.prototype.setErrorMessage = function (msg) {
        this.errorMessage = msg;
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: "\n    <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n         [ngStyle]=\"{'padding-top':'100px','display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <ng-content select=\".app-modal-header\"></ng-content>\n          </div>\n          <div class=\"modal-body\">\n            <div *ngIf=\"errorMessage\" class=\"alert-danger alert\">\n              <p>{{errorMessage}}</p>\n            </div>\n            <ng-content select=\".app-modal-body\"></ng-content>\n          </div>\n          <div class=\"modal-footer\">\n            <ng-content select=\".app-modal-footer\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n    "
    })
], ModalComponent);

//# sourceMappingURL=ModalComponent.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n    <head>\r\n        \r\n    </head>\r\n    <body>\r\n        <div class=\"jumbotron text-center\">\r\n  <h1>Sunset Farms</h1>\r\n  <p class=\"lead\">Welcome to Sunset Farms</p>\r\n  <p>This is a dummy site so feel free to play around.</p>\r\n  <div>\r\n    <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n  </div>\r\n</div>\r\n    </body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n</form>\r\n<p class=\"error\">Login:<br>\r\nEmail:admin@example.com<br>\r\nPassword:orrin1!</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(this.email, this.password).subscribe(function (data) {
            if (data.data.Login.authToken) {
                _this.authService.storeUserData(data.data.Login.authToken, data.data.Login.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['profile']);
            }
            else {
                _this.flashMessage.show(data.data.Login.error, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n      <a class=\"navbar-brand\" href=\"#\">Sunset Farms</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>\r\n          \r\n          <li class=\"nav-item\" *ngIf=\"authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a></li>\r\n\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:false}\"><a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n        \r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    <flash-messages></flash-messages>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skill{\r\n    margin: 10px;\r\n  }\r\n  .remove-btn{\r\n      padding: 6px;\r\n      margin-left: 2px;\r\n      font-size: 1em;\r\n  }\r\n  .clear-fix{\r\n    clear: both;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Name: {{user.name}}</li>\r\n    <li class=\"list-group-item\">Email: {{user.email}}<button class=\"btn btn-default btn-sm pull-right\" (click)=\"emailModal.show()\"><span class=\"glyphicon glyphicon-pencil\"></span></button></li>\r\n    <li class=\"list-group-item\">Phone: {{getFormatedPhone()}}<button class=\"btn btn-default btn-sm pull-right\" (click)=\"phoneModal.show()\"><span class=\"glyphicon glyphicon-pencil\"></span></button></li>\r\n    <li class=\"list-group-item\">Date Of Birth: {{getFormatedDOB()}}<button class=\"btn btn-default btn-sm pull-right\" (click)=\"dOBModal.show()\"><span class=\"glyphicon glyphicon-pencil\"></span></button></li>\r\n    <li class=\"list-group-item\">Gender: {{validateService.titleCase(user.gender)}}<button class=\"btn btn-default btn-sm pull-right\" (click)=\"genderModal.show()\"><span class=\"glyphicon glyphicon-pencil\"></span></button></li>\r\n    <li class=\"list-group-item\">Head of Household: {{validateService.titleCase(getFormatedHOH())}}<button class=\"btn btn-default btn-sm pull-right\" (click)=\"hOHModal.show()\"><span class=\"glyphicon glyphicon-pencil\"></span></button></li>\r\n    <li class=\"list-group-item\">Skills: {{getList()}}<button class=\"btn btn-default btn-sm pull-right\" (click)=\"skillsModal.show()\"><span class=\"glyphicon glyphicon-pencil\"></span></button></li>\r\n    <li class=\"list-group-item\"><button class=\"btn btn-default\" (click)=\"passwordModal.show()\">Change Password</button></li>\r\n  </ul>\r\n  <!-- Email Modal -->\r\n  <app-modal #emailModal>\r\n    <div class=\"app-modal-header\">\r\n      Change Email\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <div class=\"form-group\">\r\n        <form (submit)=changeEmail(emailModal)>\r\n          <label>New Email:</label>\r\n          <input type=\"email\" [(ngModel)]=\"newEmail\" name=\"newEmail\" class=\"form-control\">\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"emailModal.hide()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=changeEmail(emailModal)>Save changes</button>\r\n    </div>\r\n  </app-modal>\r\n  <!-- Phone Modal -->\r\n  <app-modal #phoneModal>\r\n    <div class=\"app-modal-header\">\r\n      Change Phone\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <div class=\"form-group\">\r\n        <form (submit)=changePhone(phoneModal)>\r\n          <label>New Phone:</label>\r\n          <input type=\"tel\" [(ngModel)]=\"newPhone\" name=\"newPhone\" class=\"form-control\">\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"phoneModal.hide()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=changePhone(phoneModal)>Save changes</button>\r\n    </div>\r\n  </app-modal>\r\n  <!-- dOB Modal -->\r\n  <app-modal #dOBModal>\r\n    <div class=\"app-modal-header\">\r\n      Change Date Of Birth\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <div class=\"form-group\">\r\n        <form (submit)=changeDOB(dOBModal)>\r\n          <label>New Date Of Birth:</label>\r\n          <input type=\"date\" [(ngModel)]=\"newDOB\" name=\"newDOB\" class=\"form-control\">\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"dOBModal.hide()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=changeDOB(dOBModal)>Save changes</button>\r\n    </div>\r\n  </app-modal>\r\n  <!-- Gender Modal -->\r\n  <app-modal #genderModal>\r\n    <div class=\"app-modal-header\">\r\n      Change Gender\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <div class=\"form-group\">\r\n        <form (submit)=changeGender(genderModal)>\r\n          <label>Gender:  </label>\r\n          <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newGender\" name=\"newGender\" value=\"male\">Male</label>\r\n          <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newGender\" name=\"newGender\" value=\"female\">Female</label>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"genderModal.hide()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=changeGender(genderModal)>Save changes</button>\r\n    </div>\r\n  </app-modal>\r\n  <!-- hOH Modal -->\r\n  <app-modal #hOHModal>\r\n    <div class=\"app-modal-header\">\r\n      Change Head of Household\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <div class=\"form-group\">\r\n        <form (submit)=newHOH(hOHModal)>\r\n          <label>Head Of Household:  </label>\r\n          <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newHOH\" name=\"newHOH\" value=\"true\">Yes</label>\r\n          <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"newHOH\" name=\"newHOH\" value=\"false\">No</label>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"hOHModal.hide()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=changeHOH(hOHModal)>Save changes</button>\r\n    </div>\r\n  </app-modal>\r\n  <!-- Skills Modal -->\r\n  <app-modal #skillsModal>\r\n    <div class=\"app-modal-header\">\r\n      Change Skills\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <form (submit)=\"addSkill(skillsModal)\" class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n          <input [(ngModel)]=\"newSkill\" name=\"newSkill\" type=\"tel\" class=\"form-control\" placeholder=\"Search for skills\" list=\"suggestedSkills\"\r\n            (ngModelChange)=\"skillSearchChange()\" autocomplete=\"off\">\r\n          <datalist id=\"suggestedSkills\">\r\n            <option *ngFor=\"let skillSuggestion of availableSkills\" value=\"{{skillSuggestion}}\">\r\n          </datalist>\r\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\" [disabled]=\"!canSubmit\">\r\n        </div>\r\n      </form>\r\n      <h1 class=\"lable-holder\">\r\n        <span class=\"label label-primary skill pull-left\" *ngFor=\"let skill of user.skills\">\r\n                {{skill}}<button (click)=\"removeSkill(skill)\" class=\"btn btn-primary remove-btn\" aria-hidden=\"true\">&times;</button></span>\r\n      </h1>\r\n      <p class=\"clear-fix\"></p>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"skillsModal.hide()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"skillsModal.hide()\">Save changes</button>\r\n    </div>\r\n  </app-modal>\r\n  <!-- Passowrd Modal -->\r\n  <app-modal #passwordModal>\r\n    <div class=\"app-modal-header\">\r\n      Change Passowrd\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n      <form (submit)=changePassword(passwordModal)>\r\n        <div class=\"form-group\">\r\n          <label>New Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"newPassword1\" name=\"newPassword1\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Repeate Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"newPassword2\" name=\"newPassword2\" class=\"form-control\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"passwordModal.hide()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=changePassword(passwordModal)>Save changes</button>\r\n    </div>\r\n  </app-modal>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_skills_service__ = __webpack_require__("../../../../../src/app/services/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






var ProfileComponent = (function () {
    function ProfileComponent(authService, flashMessage, validateService, skillsService, router) {
        var _this = this;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.skillsService = skillsService;
        this.router = router;
        this.user = authService.getProfile();
        this.newEmail = this.user.email;
        this.newPhone = this.getFormatedPhone();
        this.newDOB = this.user.dOB;
        this.newGender = this.user.gender;
        this.newHOH = this.user.hOH;
        this.skillsService.getSkills(this.user.skills).then(function (skills) {
            _this.availableSkills = skills;
        });
        this.canSubmit = false;
    }
    ProfileComponent.prototype.skillSearchChange = function () {
        this.newSkill = this.validateService.titleCase(this.newSkill);
        if (this.availableSkills.indexOf(this.newSkill) !== -1) {
            this.canSubmit = true;
        }
        else {
            this.canSubmit = false;
        }
    };
    ProfileComponent.prototype.getList = function () {
        return this.user.skills.toString().replace(/,/g, ', ');
    };
    ProfileComponent.prototype.changeEmail = function (emailModal) {
        var _this = this;
        if (this.newEmail === undefined || this.newEmail === '') {
            emailModal.setErrorMessage('Please Enter An Email');
            return;
        }
        if (this.validateService.validateEmail(this.newEmail)) {
            this.authService.changeEmail(this.newEmail).subscribe(function (data) {
                if (data.data.ChangeEmail.success) {
                    _this.user.email = _this.newEmail;
                    _this.authService.storeUserDataNoToken(_this.user);
                    _this.flashMessage.show(data.data.ChangeEmail.success, { cssClass: 'alert-success', timeout: 12000 });
                    emailModal.hide();
                }
                else {
                    emailModal.setErrorMessage(data.data.ChangeEmail.error);
                }
            });
        }
        else {
            emailModal.setErrorMessage('Please Enter A Valid Email');
        }
    };
    ProfileComponent.prototype.changePhone = function (phoneModal) {
        var _this = this;
        if (this.newPhone === undefined || this.newPhone === '') {
            phoneModal.setErrorMessage('Please Enter An Phone');
            return;
        }
        if (this.validateService.validatePhone(this.newPhone)) {
            this.newPhone = this.validateService.cleanPhone(this.newPhone);
            this.authService.changePhone(this.newPhone).subscribe(function (data) {
                if (data.data.ChangePhone.success) {
                    _this.user.phone = _this.newPhone;
                    _this.authService.storeUserDataNoToken(_this.user);
                    _this.flashMessage.show(data.data.ChangePhone.success, { cssClass: 'alert-success', timeout: 12000 });
                    phoneModal.hide();
                }
                else {
                    phoneModal.setErrorMessage(data.data.ChangePhone.error);
                }
            });
        }
        else {
            phoneModal.setErrorMessage('Please Enter A Valid Phone');
        }
    };
    ProfileComponent.prototype.changeDOB = function (dOBModal) {
        var _this = this;
        if (this.newDOB === undefined || this.newDOB === '') {
            dOBModal.setErrorMessage('Please Enter A Date Of Birth');
            return;
        }
        if (this.validateService.validateDate(this.newDOB)) {
            this.authService.changeDOB(this.newDOB).subscribe(function (data) {
                if (data.data.ChangeDOB.success) {
                    _this.user.dOB = _this.newDOB;
                    _this.authService.storeUserDataNoToken(_this.user);
                    _this.flashMessage.show(data.data.ChangeDOB.success, { cssClass: 'alert-success', timeout: 12000 });
                    dOBModal.hide();
                }
                else {
                    dOBModal.setErrorMessage(data.data.ChangeDOB.error);
                }
            });
        }
        else {
            dOBModal.setErrorMessage('Please Enter A Valid Date Of Birth');
        }
    };
    ProfileComponent.prototype.changeGender = function (genderModal) {
        var _this = this;
        if (this.newGender === undefined) {
            genderModal.setErrorMessage('Please Enter A Gender');
            return;
        }
        if (this.validateService.validateGender(this.newGender)) {
            this.authService.changeGender(this.newGender).subscribe(function (data) {
                if (data.data.ChangeGender.success) {
                    _this.user.gender = _this.newGender;
                    _this.authService.storeUserDataNoToken(_this.user);
                    _this.flashMessage.show(data.data.ChangeGender.success, { cssClass: 'alert-success', timeout: 12000 });
                    genderModal.hide();
                }
                else {
                    genderModal.setErrorMessage(data.data.ChangeGender.error);
                }
            });
        }
        else {
            genderModal.setErrorMessage('Please Enter A Valid Gender');
        }
    };
    ProfileComponent.prototype.changeHOH = function (hOHModal) {
        var _this = this;
        if (this.newHOH === undefined) {
            hOHModal.setErrorMessage('Please Enter If You Are Head Of House Hold');
            return;
        }
        if (!this.validateService.validateHOH(this.newHOH)) {
            this.authService.changeHOH(this.newHOH).subscribe(function (data) {
                if (data.data.ChangeHOH.success) {
                    _this.user.hOH = _this.newHOH;
                    _this.authService.storeUserDataNoToken(_this.user);
                    _this.flashMessage.show(data.data.ChangeHOH.success, { cssClass: 'alert-success', timeout: 12000 });
                    hOHModal.hide();
                }
                else {
                    hOHModal.setErrorMessage(data.data.ChangeHOH.error);
                }
            });
        }
        else {
            hOHModal.setErrorMessage('Please Enter A Head Of House Hold');
        }
    };
    ProfileComponent.prototype.changePassword = function (passwordModal) {
        var _this = this;
        if (this.newPassword1 === undefined || this.newPassword2 === undefined) {
            passwordModal.setErrorMessage('Please Enter Password Twice');
            return;
        }
        var pasowrdErr = this.validateService.validateNewPassowrd(this.newPassword1, this.newPassword2);
        if (!pasowrdErr) {
            this.authService.changePassword(this.newPassword1).subscribe(function (data) {
                if (data.data.ChangePassword.success) {
                    _this.flashMessage.show(data.data.ChangePassword.success, { cssClass: 'alert-success', timeout: 12000 });
                    passwordModal.hide();
                }
                else {
                    passwordModal.setErrorMessage(data.data.ChangePassword.error);
                }
            });
        }
        else {
            passwordModal.setErrorMessage(pasowrdErr);
        }
    };
    ProfileComponent.prototype.removeSkill = function (skill) {
        var _this = this;
        var index = this.user.skills.indexOf(skill);
        if (index !== -1) {
            this.authService.removeSkill(skill).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log(data);
                            if (!data.data.RemoveSkill.success) return [3 /*break*/, 2];
                            this.user.skills.splice(index, 1);
                            this.authService.storeUserDataNoToken(this.user);
                            _a = this;
                            return [4 /*yield*/, this.skillsService.getSkills(this.user.skills)];
                        case 1:
                            _a.availableSkills = _b.sent();
                            return [3 /*break*/, 2];
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    ProfileComponent.prototype.addSkill = function (skillsModal) {
        var _this = this;
        if (this.availableSkills.indexOf(this.newSkill) !== -1) {
            this.authService.addSkill(this.newSkill).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log(data);
                            if (!data.data.AddSkill.success) return [3 /*break*/, 2];
                            try {
                                if (this.user.skills.indexOf(this.newSkill) === -1) {
                                    this.user.skills.push(this.newSkill);
                                }
                            }
                            catch (err) {
                                this.user.skills = new Array();
                                this.user.skills.push(this.newSkill);
                            }
                            this.authService.storeUserDataNoToken(this.user);
                            _a = this;
                            return [4 /*yield*/, this.skillsService.getSkills(this.user.skills)];
                        case 1:
                            _a.availableSkills = _b.sent();
                            this.newSkill = '';
                            this.skillSearchChange();
                            return [3 /*break*/, 3];
                        case 2:
                            skillsModal.setErrorMessage(data.data.AddSkill.error);
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            skillsModal.setErrorMessage('Invalid Skill');
        }
    };
    ProfileComponent.prototype.getFormatedDOB = function () {
        var date = this.user.dOB.slice(5, 7);
        date += '/';
        date += this.user.dOB.slice(8, 10);
        date += '/';
        date += this.user.dOB.slice(0, 4);
        return date;
    };
    ProfileComponent.prototype.getFormatedPhone = function () {
        var phone = '(';
        phone += this.user.phone.slice(0, 3);
        phone += ') ';
        phone += this.user.phone.slice(3, 6);
        phone += '-';
        phone += this.user.phone.slice(6, 11);
        return phone;
    };
    ProfileComponent.prototype.getFormatedHOH = function () {
        if (this.user.hOH.toString() === 'true') {
            return 'yes';
        }
        return 'no';
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_skills_service__["a" /* SkillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_skills_service__["a" /* SkillsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/info/register.info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/info/register.info.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">{{user.name}}</h2>\n<form (submit)=\"next()\">\n  <div class=\"form-group\">\n    <label>Phone</label>\n    <input type=\"tel\" [(ngModel)]=\"user.phone\" name=\"user.phone\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Date Of Birth</label>\n    <input type=\"date\" [(ngModel)]=\"user.dOB\" name=\"user.dOB\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Gender:  </label>\n    <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"user.gender\" name=\"user.gender\" value=\"male\">Male</label>\n    <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"user.gender\" name=\"user.gender\" value=\"female\">Female</label>\n  </div>\n  <div class=\"form-group\">\n    <label>Head Of Household:  </label>\n    <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"user.hOH\" name=\"user.hOH\" value=\"true\">Yes</label>\n    <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"user.hOH\" name=\"user.hOH\" value=\"false\">No</label>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Next\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/info/register.info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterInfoComponent = (function () {
    function RegisterInfoComponent(registerService, flashMessage, router, route) {
        this.registerService = registerService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
    }
    RegisterInfoComponent.prototype.ngOnInit = function () {
        this.user = this.registerService.getUserInfo();
    };
    RegisterInfoComponent.prototype.next = function () {
        var userInfoErr = this.registerService.setUserInfo(this.user);
        if (userInfoErr) {
            this.flashMessage.show(userInfoErr, { cssClass: 'alert-danger', timeout: 3000 });
            return;
        }
        this.router.navigate(['/register/' + this.route.snapshot.params['token'] + '/skills']);
    };
    return RegisterInfoComponent;
}());
RegisterInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-register.info.component.ts',
        template: __webpack_require__("../../../../../src/app/components/register/info/register.info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/info/register.info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], RegisterInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>{{user.name}}</label>\r\n    <hr>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>{{user.email}}</label>\r\n    <hr>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Repeate Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"repeatePassword\" name=\"repeatePassword\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Next\">\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(registerService, flashMessage, router, route) {
        this.registerService = registerService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerService.init(this.route.snapshot.params['token']);
        this.user = this.registerService.getUserInfo();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var passwordError = this.registerService.setPassword(this.password, this.repeatePassword);
        if (passwordError) {
            this.flashMessage.show(passwordError, { cssClass: 'alert-danger', timeout: 3000 });
            return;
        }
        this.router.navigate(['/register/' + this.route.snapshot.params['token'] + '/info']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_register_service__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/skills/register.skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skill{\r\n  margin: 10px;\r\n  float: left;\r\n}\r\n.remove-btn{\r\n    padding: 6px;\r\n    margin-left: 2px;\r\n    font-size: 1em;\r\n}\r\n.lable-holder{\r\n}\r\n.btn-finished{\r\n  clear: both;\r\n}\r\n.clear-fix{\r\n  clear: both;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/skills/register.skills.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">{{user.name}}</h2>\r\n<form (submit)=\"addSkill()\" class=\"form-inline\">\r\n    <div class=\"form-group\">\r\n      <input  [(ngModel)]=\"skillField\" name=\"skillField\" type=\"tel\" class=\"form-control\" placeholder=\"Search for skills\" list=\"suggestedSkills\" (ngModelChange)=\"skillSearchChange()\" autocomplete=\"off\">\r\n      <datalist id=\"suggestedSkills\">\r\n        <option *ngFor=\"let skillSuggestion of skillSuggestions\" value=\"{{skillSuggestion}}\">\r\n      </datalist>\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\" [disabled]=\"!canSubmit\">\r\n    </div>\r\n</form>\r\n<h1 class=\"lable-holder\">\r\n    <span class=\"label label-primary skill\" *ngFor=\"let skill of user.skills\">\r\n        {{skill}}<button (click)=\"removeItem(skill)\" class=\"btn btn-primary remove-btn\" aria-hidden=\"true\">&times;</button></span>\r\n</h1>\r\n<p class=\"clear-fix\"></p>\r\n<br>\r\n<hr>\r\n  \r\n<form (submit)=\"register()\">\r\n    <div class=\"form-group\">\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Finished\">\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/skills/register.skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




var RegisterSkillsComponent = (function () {
    function RegisterSkillsComponent(registerService, flashMessage, router, route) {
        this.registerService = registerService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
    }
    RegisterSkillsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = this.registerService.getUserInfo();
                        _a = this;
                        return [4 /*yield*/, this.registerService.getSkills()];
                    case 1:
                        _a.skillSuggestions = _b.sent();
                        this.canSubmit = false;
                        this.registerService.setToken(this.route.snapshot.params['token']);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterSkillsComponent.prototype.skillSearchChange = function () {
        this.skillField = this.registerService.titleCase(this.skillField);
        if (this.skillSuggestions.indexOf(this.skillField) !== -1) {
            this.canSubmit = true;
        }
        else {
            this.canSubmit = false;
        }
    };
    RegisterSkillsComponent.prototype.addSkill = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.registerService.addSkill(this.skillField);
                        this.user = this.registerService.getUserInfo();
                        _a = this;
                        return [4 /*yield*/, this.registerService.getSkills()];
                    case 1:
                        _a.skillSuggestions = _b.sent();
                        this.skillField = '';
                        this.skillSearchChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterSkillsComponent.prototype.removeItem = function (skill) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.registerService.removeSkill(skill);
                        this.user = this.registerService.getUserInfo();
                        _a = this;
                        return [4 /*yield*/, this.registerService.getSkills()];
                    case 1:
                        _a.skillSuggestions = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterSkillsComponent.prototype.register = function () {
        var _this = this;
        this.registerService.register().subscribe(function (data) {
            console.log(data);
            if (data.data.Register.success) {
                _this.flashMessage.show(data.data.Register.success, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
            else {
                _this.flashMessage.show(data.data.Register.error, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    return RegisterSkillsComponent;
}());
RegisterSkillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-register.skills',
        template: __webpack_require__("../../../../../src/app/components/register/skills/register.skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/skills/register.skills.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], RegisterSkillsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.skills.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.isAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/profile']);
            return false;
        }
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminGuard);

var _a, _b;
//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/register.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterGuard = (function () {
    function RegisterGuard(router) {
        this.router = router;
    }
    RegisterGuard.prototype.canActivate = function () {
        this.router.navigate(['/login']);
        return false;
    };
    return RegisterGuard;
}());
RegisterGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], RegisterGuard);

var _a;
//# sourceMappingURL=register.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_angular__ = __webpack_require__("../../../../apollo-angular/build/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_service__ = __webpack_require__("../../../../../src/app/services/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};







var AuthService = (function () {
    function AuthService(http, apollo, skillsService) {
        this.http = http;
        this.apollo = apollo;
        this.skillsService = skillsService;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.authToken = localStorage.getItem('id_token');
    }
    AuthService.prototype.registerUser = function (user, token) {
        var MutationRegister = (_a = ["\n    mutation MutationRegister($token: String!, $password: String!, $phone: String!, $dOB: String!, $gender: String!,\n       $hOW: Boolean!, $skills: [String]!) {\n      Register(token:$token, password:$password, phone:$phone, dOB:$dOB,gender:$gender,hOH:$hOW, skills:$skills) {\n        error\n        success\n      }\n    }\n  "], _a.raw = ["\n    mutation MutationRegister($token: String!, $password: String!, $phone: String!, $dOB: String!, $gender: String!,\n       $hOW: Boolean!, $skills: [String]!) {\n      Register(token:$token, password:$password, phone:$phone, dOB:$dOB,gender:$gender,hOH:$hOW, skills:$skills) {\n        error\n        success\n      }\n    }\n  "], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationRegister,
            variables: {
                token: token,
                password: user.password,
                phone: user.phone,
                dOB: user.dOB,
                gender: user.gender,
                hOW: user.hOH,
                skills: user.skills
            }
        });
        var _a;
    };
    AuthService.prototype.authenticateUser = function (email, password) {
        var QueryLogin = (_a = ["\n    query LoginQuery($email: String!, $password: String!) {\n      Login(email: $email, password: $password) {\n        authToken,\n        error,\n        user{\n          id,\n          name,\n          email,\n          phone,\n          dOB,\n          gender,\n          hOH,\n          skills,\n          admin\n        }\n      }\n    }"], _a.raw = ["\n    query LoginQuery($email: String!, $password: String!) {\n      Login(email: $email, password: $password) {\n        authToken,\n        error,\n        user{\n          id,\n          name,\n          email,\n          phone,\n          dOB,\n          gender,\n          hOH,\n          skills,\n          admin\n        }\n      }\n    }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.query({
            query: QueryLogin,
            variables: {
                email: email,
                password: password
            }
        });
        var _a;
    };
    AuthService.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.storeUserDataNoToken = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.isAdmin = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token')) {
            return false;
        }
        try {
            return this.user.admin;
        }
        catch (e) {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.addUser = function (user) {
        var MutationAddUser = (_a = ["\n    mutation MutationAddUser($email: String, $phone: String, $name: String!) {\n      addUser(email: $email, name:$name, phone:$phone) {\n        success,\n        error\n      }\n    }\n  "], _a.raw = ["\n    mutation MutationAddUser($email: String, $phone: String, $name: String!) {\n      addUser(email: $email, name:$name, phone:$phone) {\n        success,\n        error\n      }\n    }\n  "], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        var variables = {
            name: user.name
        };
        if (user.phone) {
            variables.phone = user.phone;
        }
        if (user.email) {
            variables.email = user.phone;
        }
        return this.apollo.mutate({
            mutation: MutationAddUser,
            variables: variables
        });
        var _a;
    };
    AuthService.prototype.getUsers = function () {
        var QueryGetUsers = (_a = ["\n    query GetUsersQuery{\n      GetUsers{\n          name\n      }\n    }"], _a.raw = ["\n    query GetUsersQuery{\n      GetUsers{\n          name\n      }\n    }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.query({
            query: QueryGetUsers
        });
        var _a;
    };
    // Prifile Functions
    AuthService.prototype.changeEmail = function (email) {
        var MutationChangeEmail = (_a = ["\n  mutation ChangeEmailMutation($email: String!){\n    ChangeEmail(email: $email){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangeEmailMutation($email: String!){\n    ChangeEmail(email: $email){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangeEmail,
            variables: {
                email: email,
            }
        });
        var _a;
    };
    AuthService.prototype.changePhone = function (phone) {
        var MutationChangePhone = (_a = ["\n  mutation ChangePhoneMutation($phone: String!){\n    ChangePhone(phone: $phone){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangePhoneMutation($phone: String!){\n    ChangePhone(phone: $phone){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangePhone,
            variables: {
                phone: phone,
            }
        });
        var _a;
    };
    AuthService.prototype.changeDOB = function (dOB) {
        var MutationChangeDOB = (_a = ["\n  mutation ChangeDOBMutation($dOB: String!){\n    ChangeDOB(dOB: $dOB){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangeDOBMutation($dOB: String!){\n    ChangeDOB(dOB: $dOB){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangeDOB,
            variables: {
                dOB: dOB,
            }
        });
        var _a;
    };
    AuthService.prototype.changeGender = function (gender) {
        var MutationChangeGender = (_a = ["\n  mutation ChangeGenderMutation($gender: String!){\n    ChangeGender(gender: $gender){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangeGenderMutation($gender: String!){\n    ChangeGender(gender: $gender){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangeGender,
            variables: {
                gender: gender,
            }
        });
        var _a;
    };
    AuthService.prototype.changeHOH = function (hOH) {
        var MutationChangeHOH = (_a = ["\n  mutation ChangeHOHMutation($hOH: Boolean!){\n    ChangeHOH(hOH: $hOH){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangeHOHMutation($hOH: Boolean!){\n    ChangeHOH(hOH: $hOH){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangeHOH,
            variables: {
                hOH: hOH,
            }
        });
        var _a;
    };
    AuthService.prototype.changePassword = function (password) {
        var MutationChangePassword = (_a = ["\n  mutation ChangePasswordMutation($password: String!){\n    ChangePassword(password: $password){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangePasswordMutation($password: String!){\n    ChangePassword(password: $password){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangePassword,
            variables: {
                password: password,
            }
        });
        var _a;
    };
    AuthService.prototype.removeSkill = function (skill) {
        var MutationRemoveSkill = (_a = ["\n  mutation RemoveSkillMutation($skill: String!){\n    RemoveSkill(skill: $skill){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation RemoveSkillMutation($skill: String!){\n    RemoveSkill(skill: $skill){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationRemoveSkill,
            variables: {
                skill: skill,
            }
        });
        var _a;
    };
    AuthService.prototype.addSkill = function (skill) {
        var MutationAddSkill = (_a = ["\n  mutation AddSkillMutation($skill: String!){\n    AddSkill(skill: $skill){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation AddSkillMutation($skill: String!){\n    AddSkill(skill: $skill){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationAddSkill,
            variables: {
                skill: skill,
            }
        });
        var _a;
    };
    // user admin Functions
    AuthService.prototype.changeEmailAdmin = function (email, userId) {
        var MutationChangeEmailAdmin = (_a = ["\n  mutation ChangeEmailAdminMutation($email: String!, $userId: String!){\n    ChangeEmailAdmin(email: $email,userId: $userId){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangeEmailAdminMutation($email: String!, $userId: String!){\n    ChangeEmailAdmin(email: $email,userId: $userId){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangeEmailAdmin,
            variables: {
                email: email,
                userId: userId,
            }
        });
        var _a;
    };
    AuthService.prototype.changePhoneAdmin = function (phone, userId) {
        var MutationChangePhoneAdmin = (_a = ["\n  mutation ChangePhoneAdminMutation($phone: String!, $userId: String!){\n    ChangePhoneAdmin(phone: $phone,userId: $userId){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangePhoneAdminMutation($phone: String!, $userId: String!){\n    ChangePhoneAdmin(phone: $phone,userId: $userId){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangePhoneAdmin,
            variables: {
                phone: phone,
                userId: userId,
            }
        });
        var _a;
    };
    AuthService.prototype.changeDOBAdmin = function (dOB, userId) {
        var MutationChangeDOBAdmin = (_a = ["\n  mutation ChangeDOBAdminMutation($dOB: String!, $userId: String!){\n    ChangeDOBAdmin(dOB: $dOB,userId: $userId){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangeDOBAdminMutation($dOB: String!, $userId: String!){\n    ChangeDOBAdmin(dOB: $dOB,userId: $userId){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangeDOBAdmin,
            variables: {
                dOB: dOB,
                userId: userId,
            }
        });
        var _a;
    };
    AuthService.prototype.changeGenderAdmin = function (gender, userId) {
        var MutationChangeGenderAdmin = (_a = ["\n  mutation ChangeGenderAdminMutation($gender: String!, $userId: String!){\n    ChangeGenderAdmin(gender: $gender,userId: $userId){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangeGenderAdminMutation($gender: String!, $userId: String!){\n    ChangeGenderAdmin(gender: $gender,userId: $userId){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangeGenderAdmin,
            variables: {
                gender: gender,
                userId: userId,
            }
        });
        var _a;
    };
    AuthService.prototype.changeHOHAdmin = function (hOH, userId) {
        var MutationChangeHOHAdmin = (_a = ["\n  mutation ChangeHOHAdminMutation($hOH: Boolean!, $userId: String!){\n    ChangeHOHAdmin(hOH: $hOH,userId: $userId){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation ChangeHOHAdminMutation($hOH: Boolean!, $userId: String!){\n    ChangeHOHAdmin(hOH: $hOH,userId: $userId){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationChangeHOHAdmin,
            variables: {
                hOH: (hOH === 'true'),
                userId: userId,
            }
        });
        var _a;
    };
    AuthService.prototype.changeAdminPrivilege = function (admin, userId) {
        var MutationchangeAdminPrivilege = (_a = ["\n  mutation changeAdminPrivilegeMutation($admin: Boolean!, $userId: String!){\n    ChangeAdminPrivilege(admin: $admin,userId: $userId){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation changeAdminPrivilegeMutation($admin: Boolean!, $userId: String!){\n    ChangeAdminPrivilege(admin: $admin,userId: $userId){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationchangeAdminPrivilege,
            variables: {
                admin: admin,
                userId: userId,
            }
        });
        var _a;
    };
    AuthService.prototype.removeSkillAdmin = function (skill, userId) {
        var MutationRemoveSkillAdmin = (_a = ["\n  mutation RemoveSkillAdminMutation($skill: String!, $userId: String!){\n    RemoveSkillAdmin(skill: $skill,userId: $userId){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation RemoveSkillAdminMutation($skill: String!, $userId: String!){\n    RemoveSkillAdmin(skill: $skill,userId: $userId){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationRemoveSkillAdmin,
            variables: {
                skill: skill,
                userId: userId,
            }
        });
        var _a;
    };
    AuthService.prototype.addSkillAdmin = function (skill, userId) {
        var MutationAddSkillAdmin = (_a = ["\n  mutation AddSkillAdminMutation($skill: String!, $userId: String!){\n    AddSkillAdmin(skill: $skill,userId: $userId){\n      success,\n      error\n    }\n  }"], _a.raw = ["\n  mutation AddSkillAdminMutation($skill: String!, $userId: String!){\n    AddSkillAdmin(skill: $skill,userId: $userId){\n      success,\n      error\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.mutate({
            mutation: MutationAddSkillAdmin,
            variables: {
                skill: skill,
                userId: userId,
            }
        });
        var _a;
    };
    AuthService.prototype.searchUsers = function (name) {
        var QuerySearchUser = (_a = ["\n  query SearchUserQuery($name: String!) {\n      SearchUser(name: $name) {\n      error,\n      results\n    }\n  }"], _a.raw = ["\n  query SearchUserQuery($name: String!) {\n      SearchUser(name: $name) {\n      error,\n      results\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.query({
            query: QuerySearchUser,
            variables: {
                name: name
            }
        });
        var _a;
    };
    AuthService.prototype.getFilterResultsNumber = function (filters) {
        var QueryFilterResultsNumber = (_a = ["\n  query FilterResultsNumberQuery($gender: String, $hOH: String, $skills: [String],\n     $dates: [String], $names: [String]) {\n    FilterResultsNumber(gender: $gender, hOH: $hOH, skills: $skills, dates: $dates, names: $names) {\n      error,\n      success\n    }\n  }"], _a.raw = ["\n  query FilterResultsNumberQuery($gender: String, $hOH: String, $skills: [String],\n     $dates: [String], $names: [String]) {\n    FilterResultsNumber(gender: $gender, hOH: $hOH, skills: $skills, dates: $dates, names: $names) {\n      error,\n      success\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.query({
            query: QueryFilterResultsNumber,
            variables: this.prepareVariables(filters)
        });
        var _a;
    };
    AuthService.prototype.getFilterResults = function (filters) {
        var QueryFilterResults = (_a = ["\n  query FilterResultsQuery($gender: String, $hOH: String, $skills: [String],\n     $dates: [String], $names: [String]) {\n    FilterResults(gender: $gender, hOH: $hOH, skills: $skills, dates: $dates, names: $names) {\n      error,\n      success {name, email, phone, dOB, hOH, gender, admin, skills, id}\n    }\n  }"], _a.raw = ["\n  query FilterResultsQuery($gender: String, $hOH: String, $skills: [String],\n     $dates: [String], $names: [String]) {\n    FilterResults(gender: $gender, hOH: $hOH, skills: $skills, dates: $dates, names: $names) {\n      error,\n      success {name, email, phone, dOB, hOH, gender, admin, skills, id}\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
        return this.apollo.query({
            query: QueryFilterResults,
            variables: this.prepareVariables(filters)
        });
        var _a;
    };
    AuthService.prototype.sendMessage = function (filters, subject, message) {
        return __awaiter(this, void 0, void 0, function () {
            var QuerySendMessage, variables, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        QuerySendMessage = (_a = ["\n  query SendMessageQuery($gender: String, $hOH: String, $skills: [String],\n    $dates: [String], $names: [String], $message: String!, $subject: String!) {\n      SendMessage(gender: $gender, hOH: $hOH, skills: $skills, dates: $dates,\n         names: $names, message: $message, subject: $subject) {\n      error,\n      success\n    }\n  }"], _a.raw = ["\n  query SendMessageQuery($gender: String, $hOH: String, $skills: [String],\n    $dates: [String], $names: [String], $message: String!, $subject: String!) {\n      SendMessage(gender: $gender, hOH: $hOH, skills: $skills, dates: $dates,\n         names: $names, message: $message, subject: $subject) {\n      error,\n      success\n    }\n  }"], __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_a));
                        return [4 /*yield*/, this.prepareVariables(filters)];
                    case 1:
                        variables = _b.sent();
                        variables.subject = subject;
                        variables.message = message;
                        return [2 /*return*/, this.apollo.query({
                                query: QuerySendMessage,
                                variables: variables
                            })];
                }
            });
        });
    };
    AuthService.prototype.prepareVariables = function (filters) {
        return __awaiter(this, void 0, void 0, function () {
            var variables, maleIndex, femaleIndex, hOHIndex, nHOHIndex, skills;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variables = {};
                        maleIndex = filters.indexOf('Male');
                        if (maleIndex !== -1) {
                            variables.gender = 'male';
                            filters.splice(maleIndex, 1);
                        }
                        femaleIndex = filters.indexOf('Female');
                        if (femaleIndex !== -1) {
                            variables.gender = 'female';
                            filters.splice(femaleIndex, 1);
                        }
                        hOHIndex = filters.indexOf('Not Head Of Household');
                        if (hOHIndex !== -1) {
                            variables.hOH = 'yes';
                            filters.splice(hOHIndex, 1);
                        }
                        nHOHIndex = filters.indexOf('Head Of Household');
                        if (nHOHIndex !== -1) {
                            variables.hOH = 'no';
                            filters.splice(nHOHIndex, 1);
                        }
                        return [4 /*yield*/, this.skillsService.getSkillsList()];
                    case 1:
                        skills = _a.sent();
                        filters.forEach(function (filter) {
                            if (skills.indexOf(filter) !== -1) {
                                if (variables.skills === undefined) {
                                    variables.skills = [];
                                }
                                variables.skills.push(filter);
                                return;
                            }
                            if (parseInt(filter, 0) <= new Date().getUTCFullYear() && parseInt(filter, 0) > 1900) {
                                if (variables.dates === undefined) {
                                    variables.dates = [];
                                }
                                variables.dates.push(filter);
                                return;
                            }
                            if (variables.names === undefined) {
                                variables.names = [];
                            }
                            variables.names.push(filter);
                        });
                        return [2 /*return*/, variables];
                }
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_apollo_angular__["a" /* Apollo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_apollo_angular__["a" /* Apollo */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__skills_service__["a" /* SkillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__skills_service__["a" /* SkillsService */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_User__ = __webpack_require__("../../../../../src/app/types/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skills_service__ = __webpack_require__("../../../../../src/app/services/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






var RegisterService = (function () {
    function RegisterService(authService, validateService, skillsService) {
        this.skillsService = skillsService;
        this.authService = authService;
        this.validateService = validateService;
        this.user = this.authService.getProfile();
    }
    RegisterService.prototype.init = function (token) {
        this.user = new __WEBPACK_IMPORTED_MODULE_0__types_User__["a" /* User */]();
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        this.token = token;
        var jwtInfo = this.jwtHelper.decodeToken(token);
        this.user.name = jwtInfo.user.name;
        this.user.email = jwtInfo.user.email;
        this.authService.logout();
    };
    RegisterService.prototype.setToken = function (token) {
        this.token = token;
    };
    RegisterService.prototype.setPassword = function (password1, password2) {
        var err = this.validateService.validateNewPassowrd(password1, password2);
        if (err) {
            return err;
        }
        this.user.password = password1;
        this.authService.storeUserDataNoToken(this.user);
    };
    RegisterService.prototype.getUserInfo = function () {
        return this.user;
    };
    RegisterService.prototype.setUserInfo = function (user) {
        if (user.name === undefined || user.name === ''
            || user.email === undefined || user.email === ''
            || user.password === undefined || user.password === ''
            || user.phone === undefined || user.phone === ''
            || user.dOB === undefined || user.dOB === ''
            || user.gender === undefined
            || user.hOH === undefined) {
            return 'Please fill out all fields';
        }
        var phoneErr = this.validateService.validatePhone(user.phone);
        if (!phoneErr) {
            return 'Invalid phone';
        }
        var dateErr = this.validateService.validateDate(user.dOB);
        if (!dateErr) {
            return 'Invalid date of birth must be in format MM/DD/YYYY';
        }
        user.phone = user.phone.replace(/\D/g, '');
        this.user = user;
        this.authService.storeUserDataNoToken(user);
    };
    RegisterService.prototype.getSkills = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.skillsService.getSkills(this.user.skills)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegisterService.prototype.addSkill = function (skill) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.skillsService.addSkill(skill, this.user)];
                    case 1:
                        user = _a.sent();
                        this.user = user;
                        this.authService.storeUserDataNoToken(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterService.prototype.removeSkill = function (skill) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.skillsService.removeSkill(skill, this.user)];
                    case 1:
                        user = _a.sent();
                        this.user = user;
                        this.authService.storeUserDataNoToken(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterService.prototype.register = function () {
        return this.authService.registerUser(this.user, this.token);
    };
    RegisterService.prototype.titleCase = function (str) {
        return this.validateService.titleCase(str);
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__skills_service__["a" /* SkillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__skills_service__["a" /* SkillsService */]) === "function" && _c || Object])
], RegisterService);

var _a, _b, _c;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/skills.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_angular__ = __webpack_require__("../../../../apollo-angular/build/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




var SkillsService = (function () {
    function SkillsService(apollo, flashMessage) {
        this.apollo = apollo;
        this.flashMessage = flashMessage;
    }
    SkillsService.prototype.getSkillsList = function () {
        var _this = this;
        var QuerySkills = (_a = ["\n          query SkillsQuery {\n            GetSkills {\n                error,\n                skills,\n              }\n            }"], _a.raw = ["\n          query SkillsQuery {\n            GetSkills {\n                error,\n                skills,\n              }\n            }"], __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_a));
        return new Promise(function (resolve) {
            var skills = _this.apollo.query({
                query: QuerySkills
            }).subscribe(function (data) {
                if (data.data.GetSkills.skills) {
                    resolve(data.data.GetSkills.skills);
                }
                else {
                    _this.flashMessage.show(data.data.GetSkills.error, { cssClass: 'alert-danger', timeout: 12000 });
                }
            });
        });
        var _a;
    };
    SkillsService.prototype.getSkills = function (userSkills) {
        return __awaiter(this, void 0, void 0, function () {
            var skills;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSkillsList()];
                    case 1:
                        skills = _a.sent();
                        userSkills.forEach(function (skill) {
                            var index = skills.indexOf(skill); // <-- Not supported in <IE9
                            if (index !== -1) {
                                skills.splice(index, 1);
                            }
                        });
                        return [2 /*return*/, skills];
                }
            });
        });
    };
    SkillsService.prototype.addSkill = function (skill, user) {
        return __awaiter(this, void 0, void 0, function () {
            var filteredSkills;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSkills(user.skills)];
                    case 1:
                        filteredSkills = _a.sent();
                        if (filteredSkills.indexOf(skill) !== -1) {
                            try {
                                if (user.skills.indexOf(skill) === -1) {
                                    user.skills.push(skill);
                                }
                            }
                            catch (err) {
                                user.skills = new Array();
                                user.skills.push(skill);
                            }
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    SkillsService.prototype.removeSkill = function (skill, user) {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                index = user.skills.indexOf(skill);
                if (index !== -1) {
                    user.skills.splice(index, 1);
                }
                return [2 /*return*/, user];
            });
        });
    };
    return SkillsService;
}());
SkillsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], SkillsService);

var _a, _b;
//# sourceMappingURL=skills.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAddUser = function (user) {
        if (user.name === undefined || (user.email === undefined && user.phone === undefined)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePhone = function (phone) {
        phone = this.cleanPhone(phone);
        if (phone.length !== 10) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.cleanPhone = function (phone) {
        return phone.replace(/\D/g, '');
    };
    ValidateService.prototype.formatDate = function (date) {
        date = date.replace(/\D/g, '');
        date = date.replace(/-/g, '');
        date = date.replace(/\//g, '');
        return date;
    };
    ValidateService.prototype.validateDate = function (date) {
        date = this.formatDate(date);
        if (date.length !== 8) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateNewPassowrd = function (password1, password2) {
        if (password1 === undefined || password1 === '' ||
            password2 === undefined || password2 === '') {
            return 'Please enter password twice';
        }
        if (password1 !== password2) {
            return 'Password do not match';
        }
        if (password1.length < 7 || password1.search(/\d/) === -1 || password1.search(/[a-zA-Z]/) === -1 ||
            password1.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) !== -1) {
            return 'Password must be six characters long, contain a number, a letter, and a special character';
        }
    };
    ValidateService.prototype.titleCase = function (str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    };
    ValidateService.prototype.validateGender = function (gender) {
        return (gender.toString() === 'male' || gender.toString() === 'female');
    };
    ValidateService.prototype.validateHOH = function (hOH) {
        return false;
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/types/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.skills = new Array();
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map