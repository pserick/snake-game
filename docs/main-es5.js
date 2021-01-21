function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _games_snake_view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./games/snake/view/view.component */
    "./src/app/games/snake/view/view.component.ts");
    /* harmony import */


    var _home_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/view/view.component */
    "./src/app/home/view/view.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"]
    }, {
      path: 'snake',
      component: _games_snake_view_view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'snake-game';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 27,
      vars: 0,
      consts: [["role", "banner", 1, "toolbar"], ["routerLink", "/"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Erick on ig", "target", "_blank", "rel", "noopener", "href", "https://www.instagram.com/_pserick/", "title", "instagram"], ["id", "ig-logo", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z", "fill", "white"], ["role", "main", 1, "content"], ["href", "https://github.com/pserick/snake-game", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", "fill", "#1976d2"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Love this?\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Give our repo a star. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #ig-logo[_ngcontent-%COMP%] {\n    height: 50px;\n    margin-top: 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #ig-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 64px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.styl']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _games_snake_field_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./games/snake/field/field.component */
    "./src/app/games/snake/field/field.component.ts");
    /* harmony import */


    var _games_snake_view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./games/snake/view/view.component */
    "./src/app/games/snake/view/view.component.ts");
    /* harmony import */


    var _home_view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/view/view.component */
    "./src/app/home/view/view.component.ts");
    /* harmony import */


    var _games_snake_snake_snake_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./games/snake/snake/snake.component */
    "./src/app/games/snake/snake/snake.component.ts");
    /* harmony import */


    var _games_snake_score_score_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./games/snake/score/score.component */
    "./src/app/games/snake/score/score.component.ts");
    /* harmony import */


    var _games_snake_food_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./games/snake/food/food.component */
    "./src/app/games/snake/food/food.component.ts");
    /* harmony import */


    var _games_snake_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./games/snake/menu/menu.component */
    "./src/app/games/snake/menu/menu.component.ts");
    /* harmony import */


    var _home_game_list_menu_game_list_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/game-list-menu/game-list-menu.component */
    "./src/app/home/game-list-menu/game-list-menu.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _games_snake_field_field_component__WEBPACK_IMPORTED_MODULE_4__["FieldComponent"], _home_view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"], _games_snake_view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"], _games_snake_snake_snake_component__WEBPACK_IMPORTED_MODULE_7__["SnakeComponent"], _games_snake_score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"], _games_snake_food_food_component__WEBPACK_IMPORTED_MODULE_9__["FoodComponent"], _games_snake_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _home_game_list_menu_game_list_menu_component__WEBPACK_IMPORTED_MODULE_11__["GameListMenuComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _games_snake_field_field_component__WEBPACK_IMPORTED_MODULE_4__["FieldComponent"], _home_view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"], _games_snake_view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"], _games_snake_snake_snake_component__WEBPACK_IMPORTED_MODULE_7__["SnakeComponent"], _games_snake_score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"], _games_snake_food_food_component__WEBPACK_IMPORTED_MODULE_9__["FoodComponent"], _games_snake_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _home_game_list_menu_game_list_menu_component__WEBPACK_IMPORTED_MODULE_11__["GameListMenuComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/snake/field/field.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/games/snake/field/field.component.ts ***!
    \******************************************************/

  /*! exports provided: FieldComponent */

  /***/
  function srcAppGamesSnakeFieldFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldComponent", function () {
      return FieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/games/snake/service/data/data.service.ts");
    /* harmony import */


    var _snake_snake_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../snake/snake.component */
    "./src/app/games/snake/snake/snake.component.ts");
    /* harmony import */


    var _food_food_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../food/food.component */
    "./src/app/games/snake/food/food.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/games/snake/menu/menu.component.ts");

    var FieldComponent = /*#__PURE__*/function () {
      function FieldComponent(data) {
        _classCallCheck(this, FieldComponent);

        this.data = data;
      }

      _createClass(FieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.width = this.data.fieldSizeX;
          this.height = this.data.fieldSizeY;
        }
      }]);

      return FieldComponent;
    }();

    FieldComponent.ɵfac = function FieldComponent_Factory(t) {
      return new (t || FieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    FieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FieldComponent,
      selectors: [["app-field"]],
      decls: 4,
      vars: 4,
      consts: [[1, "field"]],
      template: function FieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-snake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-food");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("height", ctx.height, "px");
        }
      },
      directives: [_snake_snake_component__WEBPACK_IMPORTED_MODULE_2__["SnakeComponent"], _food_food_component__WEBPACK_IMPORTED_MODULE_3__["FoodComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
      styles: [".field[_ngcontent-%COMP%] {\n  margin: 32px auto;\n  background-color: #24292e;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=src/app/games/snake/field/field.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvc25ha2UvZmllbGQvc3JjL2FwcC9nYW1lcy9zbmFrZS9maWVsZC9maWVsZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ2FtZXMvc25ha2UvZmllbGQvZmllbGQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBUztFQUNULFVBQVE7QUNDVjtBQUNBLHdFQUF3RSIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3NuYWtlL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkXG4gIG1hcmdpbiAzMnB4IGF1dG9cbiAgYmFja2dyb3VuZC1jb2xvciAjMjQyOTJlXG4gIHBvc2l0aW9uIHJlbGF0aXZlXG4gIHotaW5kZXggMVxuIiwiLmZpZWxkIHtcbiAgbWFyZ2luOiAzMnB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvZ2FtZXMvc25ha2UvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-field',
          templateUrl: './field.component.html',
          styleUrls: ['./field.component.styl']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/snake/food/food.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/games/snake/food/food.component.ts ***!
    \****************************************************/

  /*! exports provided: FoodComponent */

  /***/
  function srcAppGamesSnakeFoodFoodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodComponent", function () {
      return FoodComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/data/frame.interface */
    "./src/app/games/snake/service/data/frame.interface.ts");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/games/snake/service/data/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FoodComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
      }

      if (rf & 2) {
        var snakeFood_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", snakeFood_r1.width, "px")("height", snakeFood_r1.height, "px")("top", snakeFood_r1.top, "px")("left", snakeFood_r1.left, "px");
      }
    }

    var FoodComponent = /*#__PURE__*/function () {
      function FoodComponent(data) {
        _classCallCheck(this, FoodComponent);

        this.data = data;
        this.snakeFoods = [];
      }

      _createClass(FoodComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.matrixSubscription = this.data.currentMatrix.subscribe(function (matrix) {
            _this.snakeFoods = _this.calculateFoodPieces(matrix);

            if (_this.snakeFoods.length === 0) {
              _this.generateFoodInARandomPosition(25, matrix);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.matrixSubscription.unsubscribe();
        }
      }, {
        key: "generateFoodInARandomPosition",
        value: function generateFoodInARandomPosition(quantity, matrix) {
          var _this2 = this;

          var matrixCopy = _toConsumableArray(matrix);

          Array(quantity).fill('').map(function (_, index) {
            var isFrameOccupied = true;
            var frameX;
            var frameY;

            while (isFrameOccupied) {
              var Xrange = [0, _this2.data.fieldSizeX - _this2.data.frameSize];
              var Yrange = [0, _this2.data.fieldSizeY - _this2.data.frameSize];
              frameX = _this2.randomIntFromIntervalAndFrame(Xrange[0], Xrange[1], _this2.data.frameSize) / _this2.data.frameSize;
              frameY = _this2.randomIntFromIntervalAndFrame(Yrange[0], Yrange[1], _this2.data.frameSize) / _this2.data.frameSize;
              isFrameOccupied = matrixCopy[frameX][frameY].isFullFilled;
            }

            matrixCopy[frameX][frameY].isFullFilled = true;
            matrixCopy[frameX][frameY].filledBy = {
              type: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_1__["Type"].food,
              part: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_1__["Part"].empty,
              direction: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_1__["Direction"].empty
            };
          });
          this.data.setMatrix(matrixCopy);
        }
      }, {
        key: "randomIntFromIntervalAndFrame",
        value: function randomIntFromIntervalAndFrame(min, max, frame) {
          return Math.round((Math.random() * (max - min) + min) / frame) * frame;
        }
      }, {
        key: "calculateFoodPieces",
        value: function calculateFoodPieces(matrix) {
          var _this3 = this;

          var snakeFoods = [];
          matrix.map(function (line) {
            var filledFramesByFood = line.filter(function (c) {
              return c.isFullFilled && c.filledBy.type === _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_1__["Type"].food;
            });
            filledFramesByFood.map(function (fl) {
              snakeFoods.push({
                width: _this3.data.frameSize,
                height: _this3.data.frameSize,
                top: fl.top,
                left: fl.left
              });
            });
          });
          return snakeFoods;
        }
      }]);

      return FoodComponent;
    }();

    FoodComponent.ɵfac = function FoodComponent_Factory(t) {
      return new (t || FoodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    FoodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FoodComponent,
      selectors: [["app-food"]],
      decls: 1,
      vars: 1,
      consts: [["class", "food", 3, "width", "height", "top", "left", 4, "ngFor", "ngForOf"], [1, "food"]],
      template: function FoodComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FoodComponent_div_0_Template, 1, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.snakeFoods);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".food[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #f5deb3;\n  z-index: 1;\n}\n/*# sourceMappingURL=src/app/games/snake/food/food.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvc25ha2UvZm9vZC9zcmMvYXBwL2dhbWVzL3NuYWtlL2Zvb2QvZm9vZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ2FtZXMvc25ha2UvZm9vZC9mb29kLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQVM7RUFDVCx5QkFBaUI7RUFDakIsVUFBUTtBQ0NWO0FBQ0Esc0VBQXNFIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvc25ha2UvZm9vZC9mb29kLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb2RcbiAgcG9zaXRpb24gYWJzb2x1dGVcbiAgYmFja2dyb3VuZC1jb2xvciB3aGVhdFxuICB6LWluZGV4IDFcbi8vYm9yZGVyLXJhZGl1cyA0cHhcbiIsIi5mb29kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVkZWIzO1xuICB6LWluZGV4OiAxO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9nYW1lcy9zbmFrZS9mb29kL2Zvb2QuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-food',
          templateUrl: './food.component.html',
          styleUrls: ['./food.component.styl']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/snake/menu/menu.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/games/snake/menu/menu.component.ts ***!
    \****************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppGamesSnakeMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/games/snake/service/data/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_0_Template_li_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.startNewGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Try Again! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r0.height, "px")("width", ctx_r0.width, "px");
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(data) {
        _classCallCheck(this, MenuComponent);

        this.data = data;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.width = this.data.fieldSizeX;
          this.height = this.data.fieldSizeY;
          this.showMenuSubscription = this.data.currentShowMenu.subscribe(function (showMenu) {
            return _this4.showMenu = showMenu;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.showMenuSubscription.unsubscribe();
        }
      }, {
        key: "startNewGame",
        value: function startNewGame() {
          this.data.startNewGame();
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 1,
      vars: 1,
      consts: [["class", "menu", 3, "height", "width", 4, "ngIf"], [1, "menu"], [1, "try-again", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "white", "width", "50px", "height", "50px", 1, "try-again-icon"], ["d", "M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"], ["d", "M0 0h24v24H0z", "fill", "none"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuComponent_div_0_Template, 7, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu === true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".menu[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0.7;\n  background-color: #333;\n  z-index: 2;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  width: 50%;\n  height: 100%;\n  padding: 0;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #fff;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.menu[_ngcontent-%COMP%]   li.try-again[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  transition: transform 0.5s;\n}\n.menu[_ngcontent-%COMP%]   li.try-again[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  color: #e2e0e0;\n}\n.menu[_ngcontent-%COMP%]   li.try-again[_ngcontent-%COMP%]:hover   .try-again-icon[_ngcontent-%COMP%] {\n  fill: #e2e0e0;\n}\n/*# sourceMappingURL=src/app/games/snake/menu/menu.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvc25ha2UvbWVudS9zcmMvYXBwL2dhbWVzL3NuYWtlL21lbnUvbWVudS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ2FtZXMvc25ha2UvbWVudS9tZW51LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQVM7RUFDVCxPQUFLO0VBQ0wsTUFBSTtFQUNKLFlBQVE7RUFDUixzQkFBaUI7RUFDakIsVUFBUTtBQ0NWO0FEQUU7RUFDRSxxQkFBZ0I7RUFDaEIsVUFBTTtFQUNOLFlBQU87RUFDUCxVQUFRO0VBQ1IsWUFBTztFQUNQLGtCQUFXO0VBQ1gsYUFBUTtFQUNSLHNCQUFlO0VBQ2YsdUJBQWdCO0VBQ2hCLG1CQUFZO0FDRWhCO0FEREU7RUFDRSxXQUFNO0VBQ04sMEJBQU07RUFBTix1QkFBTTtFQUFOLGtCQUFNO0FDR1Y7QURGSTtFQUNFLGFBQVE7RUFDUixzQkFBZTtFQUNmLG1CQUFZO0VBQ1osZUFBTztFQUNQLDBCQUFXO0FDSWpCO0FESE07RUFDRSxxQkFBVTtFQUNWLGNBQU07QUNLZDtBREpRO0VBQ0UsYUFBSztBQ01mO0FBQ0Esc0VBQXNFIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvc25ha2UvbWVudS9tZW51LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnVcbiAgcG9zaXRpb24gYWJzb2x1dGVcbiAgbGVmdCAwXG4gIHRvcCAwXG4gIG9wYWNpdHkgMC43XG4gIGJhY2tncm91bmQtY29sb3IgIzMzMzMzM1xuICB6LWluZGV4IDJcbiAgdWxcbiAgICBsaXN0LXN0eWxlLXR5cGUgbm9uZVxuICAgIHdpZHRoIDUwJVxuICAgIGhlaWdodCAxMDAlXG4gICAgcGFkZGluZyAwXG4gICAgbWFyZ2luIGF1dG9cbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIGRpc3BsYXkgZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgbGlcbiAgICBjb2xvciB3aGl0ZVxuICAgIHdpZHRoIGZpdC1jb250ZW50XG4gICAgJi50cnktYWdhaW5cbiAgICAgIGRpc3BsYXkgZmxleFxuICAgICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgICAgIGN1cnNvciBwb2ludGVyXG4gICAgICB0cmFuc2l0aW9uIHRyYW5zZm9ybSAwLjVzXG4gICAgICAmOmhvdmVyXG4gICAgICAgIHRyYW5zZm9ybSBzY2FsZSgxLjMpXG4gICAgICAgIGNvbG9yICNlMmUwZTBcbiAgICAgICAgLnRyeS1hZ2Fpbi1pY29uXG4gICAgICAgICAgZmlsbCAjZTJlMGUwXG5cbiIsIi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDAuNztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgei1pbmRleDogMjtcbn1cbi5tZW51IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51IGxpIHtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5tZW51IGxpLnRyeS1hZ2FpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG59XG4ubWVudSBsaS50cnktYWdhaW46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIGNvbG9yOiAjZTJlMGUwO1xufVxuLm1lbnUgbGkudHJ5LWFnYWluOmhvdmVyIC50cnktYWdhaW4taWNvbiB7XG4gIGZpbGw6ICNlMmUwZTA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2dhbWVzL3NuYWtlL21lbnUvbWVudS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.styl']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/snake/score/score.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/games/snake/score/score.component.ts ***!
    \******************************************************/

  /*! exports provided: ScoreComponent */

  /***/
  function srcAppGamesSnakeScoreScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreComponent", function () {
      return ScoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/games/snake/service/data/data.service.ts");

    var ScoreComponent = /*#__PURE__*/function () {
      function ScoreComponent(data) {
        _classCallCheck(this, ScoreComponent);

        this.data = data;
      }

      _createClass(ScoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.scoreSubscription = this.data.currentScore.subscribe(function (score) {
            return _this5.score = score;
          });
          this.highScoreSubscription = this.data.currentHighScore.subscribe(function (highScore) {
            return _this5.highScore = highScore;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scoreSubscription.unsubscribe();
          this.highScoreSubscription.unsubscribe();
        }
      }]);

      return ScoreComponent;
    }();

    ScoreComponent.ɵfac = function ScoreComponent_Factory(t) {
      return new (t || ScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScoreComponent,
      selectors: [["app-score"]],
      decls: 5,
      vars: 2,
      consts: [[1, "score"]],
      template: function ScoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" score: ", ctx.score, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" high score: ", ctx.highScore, "\n");
        }
      },
      styles: [".score[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  color: #000;\n  font-family: monospace;\n}\n/*# sourceMappingURL=src/app/games/snake/score/score.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvc25ha2Uvc2NvcmUvc3JjL2FwcC9nYW1lcy9zbmFrZS9zY29yZS9zY29yZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ2FtZXMvc25ha2Uvc2NvcmUvc2NvcmUuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFRO0VBQ1IsU0FBTztFQUNQLFdBQU07RUFDTixzQkFBWTtBQ0NkO0FBQ0Esd0VBQXdFIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvc25ha2Uvc2NvcmUvc2NvcmUuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmVcbiAgcGFkZGluZyAwXG4gIG1hcmdpbiAwXG4gIGNvbG9yIGJsYWNrXG4gIGZvbnQtZmFtaWx5IG1vbm9zcGFjZTtcbiIsIi5zY29yZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2dhbWVzL3NuYWtlL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-score',
          templateUrl: './score.component.html',
          styleUrls: ['./score.component.styl']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/snake/service/data/data.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/games/snake/service/data/data.service.ts ***!
    \**********************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppGamesSnakeServiceDataDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");
    /* harmony import */


    var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _frame_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./frame.interface */
    "./src/app/games/snake/service/data/frame.interface.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.frameSize = 8;
        this.fieldSizeX = 100 * this.frameSize;
        this.fieldSizeY = 50 * this.frameSize;
        this.matrixSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.createEmptyMatrix());
        this.scoreSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.highScoreSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.showMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.moveSnakeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.currentMatrix = this.matrixSource.asObservable();
        this.currentScore = this.scoreSource.asObservable();
        this.currentHighScore = this.highScoreSource.asObservable();
        this.currentShowMenu = this.showMenuSource.asObservable();
        this.currentMoveSnake = this.moveSnakeSource.asObservable();
        var highScore = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('high_score') ? Number(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('high_score')) : 0;
        this.highScoreSource.next(highScore);
      }

      _createClass(DataService, [{
        key: "mountInitialSnake",
        value: function mountInitialSnake(snakeSize, matrix) {
          var initialPositionX = 7;
          var initialPositionY = 10;

          var matrixCopy = _toConsumableArray(matrix);

          Array(snakeSize).fill('').map(function (_, index) {
            var part = _frame_interface__WEBPACK_IMPORTED_MODULE_3__["Part"].body;

            if (index === 0) {
              part = _frame_interface__WEBPACK_IMPORTED_MODULE_3__["Part"].tail;
            } else if (index === snakeSize - 1) {
              part = _frame_interface__WEBPACK_IMPORTED_MODULE_3__["Part"].head;
            }

            var snakePiece = {
              type: _frame_interface__WEBPACK_IMPORTED_MODULE_3__["Type"].snake,
              part: part,
              direction: _frame_interface__WEBPACK_IMPORTED_MODULE_3__["Direction"].right
            };
            matrixCopy[initialPositionX + index][initialPositionY].isFullFilled = true;
            matrixCopy[initialPositionX + index][initialPositionY].filledBy = snakePiece;
          });
          return matrixCopy;
        }
      }, {
        key: "startNewGame",
        value: function startNewGame() {
          this.setShowMenu(false);
          this.setMoveSnake(true);
          this.scoreSource.next(0);
          var freshMatrix = this.mountInitialSnake(10, this.createEmptyMatrix());
          this.setMatrix(freshMatrix);
        }
      }, {
        key: "setMatrix",
        value: function setMatrix(matrix) {
          this.matrixSource.next(matrix);
        }
      }, {
        key: "endGame",
        value: function endGame() {
          this.setShowMenu(true);
          this.setMoveSnake(false);
        }
      }, {
        key: "setShowMenu",
        value: function setShowMenu(showMenu) {
          if (showMenu !== this.showMenuSource.getValue()) {
            this.showMenuSource.next(showMenu);
          }
        }
      }, {
        key: "setMoveSnake",
        value: function setMoveSnake(moveSnake) {
          if (moveSnake !== this.moveSnakeSource.getValue()) {
            this.moveSnakeSource.next(moveSnake);
          }
        }
      }, {
        key: "incrementScore",
        value: function incrementScore(score) {
          var newScore = this.scoreSource.getValue() + score;
          var currentHighScore = this.highScoreSource.getValue();

          if (newScore > currentHighScore) {
            js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('high_score', newScore, {
              expires: 365 * 10
            });
            this.highScoreSource.next(newScore);
          }

          this.scoreSource.next(newScore);
        }
      }, {
        key: "createEmptyFrame",
        value: function createEmptyFrame(left, top, index) {
          var emptyFrame = {
            left: left,
            top: top,
            isFullFilled: false,
            filledBy: {
              type: _frame_interface__WEBPACK_IMPORTED_MODULE_3__["Type"].empty,
              part: _frame_interface__WEBPACK_IMPORTED_MODULE_3__["Part"].empty,
              direction: _frame_interface__WEBPACK_IMPORTED_MODULE_3__["Direction"].empty
            },
            index: index
          };
          return emptyFrame;
        }
      }, {
        key: "createEmptyMatrix",
        value: function createEmptyMatrix() {
          var _this6 = this;

          var matrix = Array(this.fieldSizeX / this.frameSize).fill('').map(function (_, indexWidth) {
            return Array(_this6.fieldSizeY / _this6.frameSize).fill('').map(function (__, indexHeight) {
              return _this6.createEmptyFrame(indexWidth * _this6.frameSize, indexHeight * _this6.frameSize, [indexWidth, indexHeight]);
            });
          });
          return matrix;
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/games/snake/service/data/frame.interface.ts":
  /*!*************************************************************!*\
    !*** ./src/app/games/snake/service/data/frame.interface.ts ***!
    \*************************************************************/

  /*! exports provided: Type, Part, Direction */

  /***/
  function srcAppGamesSnakeServiceDataFrameInterfaceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Type", function () {
      return Type;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Part", function () {
      return Part;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });

    var Type;

    (function (Type) {
      Type["snake"] = "snake";
      Type["food"] = "food";
      Type["empty"] = "";
    })(Type || (Type = {}));

    var Part;

    (function (Part) {
      Part["tail"] = "tail";
      Part["body"] = "body";
      Part["head"] = "head";
      Part["empty"] = "";
    })(Part || (Part = {}));

    var Direction;

    (function (Direction) {
      Direction["up"] = "up";
      Direction["down"] = "down";
      Direction["left"] = "left";
      Direction["right"] = "right";
      Direction["empty"] = "";
    })(Direction || (Direction = {}));
    /***/

  },

  /***/
  "./src/app/games/snake/snake/snake-directions.ts":
  /*!*******************************************************!*\
    !*** ./src/app/games/snake/snake/snake-directions.ts ***!
    \*******************************************************/

  /*! exports provided: SnakeDirections */

  /***/
  function srcAppGamesSnakeSnakeSnakeDirectionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnakeDirections", function () {
      return SnakeDirections;
    });
    /* harmony import */


    var _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../service/data/frame.interface */
    "./src/app/games/snake/service/data/frame.interface.ts");

    var KeyPressMovement;

    (function (KeyPressMovement) {
      KeyPressMovement["up"] = "ArrowUp";
      KeyPressMovement["down"] = "ArrowDown";
      KeyPressMovement["left"] = "ArrowLeft";
      KeyPressMovement["right"] = "ArrowRight";
    })(KeyPressMovement || (KeyPressMovement = {}));

    var SnakeDirections = /*#__PURE__*/function () {
      function SnakeDirections() {
        _classCallCheck(this, SnakeDirections);
      }

      _createClass(SnakeDirections, null, [{
        key: "getSnakeDirectionByDirection",
        value: function getSnakeDirectionByDirection(direction) {
          return this.directions.find(function (d) {
            return d.direction === direction;
          });
        }
      }, {
        key: "getSnakeDirectionByKeyPressValue",
        value: function getSnakeDirectionByKeyPressValue(keyPressValue) {
          return this.directions.find(function (d) {
            return d.keyPressValue === keyPressValue;
          });
        }
      }]);

      return SnakeDirections;
    }();

    SnakeDirections.directions = [{
      direction: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].up,
      keyPressValue: KeyPressMovement.up,
      allowedMovements: [_service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].left, _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].right]
    }, {
      direction: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].down,
      keyPressValue: KeyPressMovement.down,
      allowedMovements: [_service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].left, _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].right]
    }, {
      direction: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].left,
      keyPressValue: KeyPressMovement.left,
      allowedMovements: [_service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].up, _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].down]
    }, {
      direction: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].right,
      keyPressValue: KeyPressMovement.right,
      allowedMovements: [_service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].up, _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_0__["Direction"].down]
    }];
    /***/
  },

  /***/
  "./src/app/games/snake/snake/snake.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/games/snake/snake/snake.component.ts ***!
    \******************************************************/

  /*! exports provided: SnakeComponent */

  /***/
  function srcAppGamesSnakeSnakeSnakeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnakeComponent", function () {
      return SnakeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _snake_directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./snake-directions */
    "./src/app/games/snake/snake/snake-directions.ts");
    /* harmony import */


    var _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/data/frame.interface */
    "./src/app/games/snake/service/data/frame.interface.ts");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/games/snake/service/data/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SnakeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
      }

      if (rf & 2) {
        var snakePiece_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", snakePiece_r1.width, "px")("height", snakePiece_r1.height, "px")("top", snakePiece_r1.top, "px")("left", snakePiece_r1.left, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-direction", snakePiece_r1.direction)("data-part", snakePiece_r1.part);
      }
    }

    var SnakeComponent = /*#__PURE__*/function () {
      function SnakeComponent(data) {
        _classCallCheck(this, SnakeComponent);

        this.data = data;
        this.matrix = [];
        this.newDirectionsQueue = [];
        this.snakeSpeed = 50;
        this.increaseSnake = 0;
        this.snakePieces = [];
      }

      _createClass(SnakeComponent, [{
        key: "keyEvent",
        value: function keyEvent(event) {
          var snakeDirection = _snake_directions__WEBPACK_IMPORTED_MODULE_1__["SnakeDirections"].getSnakeDirectionByKeyPressValue(event.key);

          if (snakeDirection) {
            this.changeDirection(snakeDirection.direction);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.matrixSubscription = this.data.currentMatrix.subscribe(function (matrix) {
            _this7.matrix = matrix;
            _this7.snakePieces = _this7.calculateSnakePieces(matrix);
          });
          this.moveSubscription = this.data.currentMoveSnake.subscribe(function (moveSnake) {
            _this7.stop();

            if (moveSnake === true) {
              _this7.newDirectionsQueue = [];

              _this7.move();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.data.endGame();
          this.matrixSubscription.unsubscribe();
          this.moveSubscription.unsubscribe();
        }
      }, {
        key: "calculateSnakePieces",
        value: function calculateSnakePieces(matrix) {
          var _this8 = this;

          var snakePieces = [];
          matrix.map(function (line) {
            var filledFramesBySnake = line.filter(function (c) {
              return c.isFullFilled && c.filledBy.type === _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Type"].snake;
            });
            filledFramesBySnake.map(function (fl) {
              snakePieces.push({
                width: _this8.data.frameSize,
                height: _this8.data.frameSize,
                top: fl.top,
                left: fl.left,
                direction: fl.filledBy.direction,
                part: fl.filledBy.part,
                index: fl.index
              });
            });
          });
          return snakePieces;
        }
      }, {
        key: "isValidMovement",
        value: function isValidMovement(newDirection, headDirection) {
          var headDirectionObj = _snake_directions__WEBPACK_IMPORTED_MODULE_1__["SnakeDirections"].getSnakeDirectionByDirection(headDirection);

          return headDirectionObj.allowedMovements.includes(newDirection);
        }
      }, {
        key: "stop",
        value: function stop() {
          clearInterval(this.intervalId);
        }
      }, {
        key: "findNextFrameByDirection",
        value: function findNextFrameByDirection(posX, posY, direction) {
          switch (direction) {
            case _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Direction"].right:
              return [posX + 1, posY];
              break;

            case _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Direction"].left:
              return [posX - 1, posY];
              break;

            case _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Direction"].up:
              return [posX, posY - 1];
              break;

            case _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Direction"].down:
              return [posX, posY + 1];
              break;
          }
        }
      }, {
        key: "move",
        value: function move() {
          var _this9 = this;

          this.intervalId = setInterval(function () {
            var matrixCopy = _toConsumableArray(_this9.matrix);

            var snakeHead = _this9.snakePieces.find(function (piece) {
              return piece.part === _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Part"].head;
            });

            var snakeTail = _this9.snakePieces.find(function (piece) {
              return piece.part === _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Part"].tail;
            });

            var headX = snakeHead.index[0];
            var headY = snakeHead.index[1];
            var tailX = snakeTail.index[0];
            var tailY = snakeTail.index[1];

            var newTailElementIndex = _this9.findNextFrameByDirection(tailX, tailY, snakeTail.direction);

            var newHeadElementIndex = _this9.findNextFrameByDirection(headX, headY, snakeHead.direction);

            var newHeadX = newHeadElementIndex[0];
            var newHeadY = newHeadElementIndex[1];
            var newTailX = newTailElementIndex[0];
            var newTailY = newTailElementIndex[1];
            var oldHeadElement = matrixCopy[headX][headY];
            var oldTailElement = matrixCopy[tailX][tailY];
            var newTailElement = matrixCopy[newTailX][newTailY];
            var newHeadElement;

            try {
              newHeadElement = matrixCopy[newHeadX][newHeadY];

              if (newHeadElement.isFullFilled && newHeadElement.filledBy.type === _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Type"].snake) {
                throw new Error('snake collision detected!');
              }
            } catch (e) {
              console.log('border or snake collision detected!');

              _this9.data.endGame();

              _this9.newDirectionsQueue = [];
              return;
            }

            var foodWasCaught = newHeadElement.isFullFilled && newHeadElement.filledBy.type === _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Type"].food;

            if (foodWasCaught) {
              _this9.data.incrementScore(150);

              _this9.increaseSnake += 5;
            } // If there is no need to increase the snake size
            // only move the tail to the forward position


            if (!_this9.increaseSnake) {
              oldTailElement.isFullFilled = false;
              oldTailElement.filledBy = {
                type: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Type"].empty,
                part: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Part"].empty,
                direction: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Direction"].empty
              };
              newTailElement.filledBy.part = _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Part"].tail;
            } else {
              _this9.increaseSnake -= 1;
            }

            oldHeadElement.filledBy.part = _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Part"].body;
            var newDirectionsQueueLength = _this9.newDirectionsQueue.length;
            var newDirection = _this9.newDirectionsQueue[newDirectionsQueueLength - 1];
            var direction = snakeHead.direction;

            if (newDirection) {
              _this9.newDirectionsQueue.pop();

              if (_this9.isValidMovement(newDirection, snakeHead.direction)) {
                direction = newDirection;
              }
            }

            newHeadElement.isFullFilled = true;
            newHeadElement.filledBy = {
              type: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Type"].snake,
              part: _service_data_frame_interface__WEBPACK_IMPORTED_MODULE_2__["Part"].head,
              direction: direction
            };

            _this9.data.setMatrix(matrixCopy);
          }, this.snakeSpeed);
        }
      }, {
        key: "changeDirection",
        value: function changeDirection(newDirection) {
          this.newDirectionsQueue.push(newDirection);
        }
      }]);

      return SnakeComponent;
    }();

    SnakeComponent.ɵfac = function SnakeComponent_Factory(t) {
      return new (t || SnakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    SnakeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SnakeComponent,
      selectors: [["app-snake"]],
      hostBindings: function SnakeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SnakeComponent_keydown_HostBindingHandler($event) {
            return ctx.keyEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 1,
      vars: 1,
      consts: [["class", "snake-piece", 3, "width", "height", "top", "left", 4, "ngFor", "ngForOf"], [1, "snake-piece"]],
      template: function SnakeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SnakeComponent_div_0_Template, 1, 10, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.snakePieces);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".snake-piece[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #008000;\n  z-index: 2;\n}\n.snake-piece[data-part=\"head\"][data-direction=\"right\"][_ngcontent-%COMP%] {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.snake-piece[data-part=\"head\"][data-direction=\"right\"][_ngcontent-%COMP%]:before {\n  content: '';\n  height: 1.4px;\n  width: 4px;\n  display: block;\n  position: absolute;\n  background-color: #ab0707;\n  right: -2px;\n  top: 3px;\n  border: 4px;\n}\n.snake-piece[data-part=\"head\"][data-direction=\"right\"][_ngcontent-%COMP%]:after {\n  content: ':';\n  display: block;\n  position: absolute;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  right: 4px;\n  top: -8px;\n}\n.snake-piece[data-part=\"head\"][data-direction=\"up\"][_ngcontent-%COMP%] {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.snake-piece[data-part=\"head\"][data-direction=\"up\"][_ngcontent-%COMP%]:before {\n  content: '';\n  height: 1.4px;\n  width: 4px;\n  display: block;\n  position: absolute;\n  background-color: #ab0707;\n  right: 3px;\n  top: 0px;\n  border: 4px;\n  transform: rotate(270deg);\n}\n.snake-piece[data-part=\"head\"][data-direction=\"up\"][_ngcontent-%COMP%]:after {\n  content: ':';\n  display: block;\n  position: absolute;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  right: 6px;\n  top: 0px;\n  transform: rotate(270deg);\n}\n.snake-piece[data-part=\"head\"][data-direction=\"left\"][_ngcontent-%COMP%] {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.snake-piece[data-part=\"head\"][data-direction=\"left\"][_ngcontent-%COMP%]:before {\n  content: '';\n  height: 1.4px;\n  width: 4px;\n  display: block;\n  position: absolute;\n  background-color: #ab0707;\n  left: -2px;\n  top: 4px;\n  border: 4px;\n  transform: rotate(180deg);\n}\n.snake-piece[data-part=\"head\"][data-direction=\"left\"][_ngcontent-%COMP%]:after {\n  content: ':';\n  display: block;\n  position: absolute;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  left: 4px;\n  top: 0px;\n  transform: rotate(180deg);\n}\n.snake-piece[data-part=\"head\"][data-direction=\"down\"][_ngcontent-%COMP%] {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.snake-piece[data-part=\"head\"][data-direction=\"down\"][_ngcontent-%COMP%]:before {\n  content: '';\n  height: 1.4px;\n  width: 4px;\n  display: block;\n  position: absolute;\n  background-color: #ab0707;\n  right: 2px;\n  bottom: 0px;\n  transform: rotate(90deg);\n}\n.snake-piece[data-part=\"head\"][data-direction=\"down\"][_ngcontent-%COMP%]:after {\n  content: ':';\n  display: block;\n  position: absolute;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  right: -2px;\n  bottom: 0px;\n  transform: rotate(90deg);\n}\n/*# sourceMappingURL=src/app/games/snake/snake/snake.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvc25ha2Uvc25ha2Uvc3JjL2FwcC9nYW1lcy9zbmFrZS9zbmFrZS9zbmFrZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ2FtZXMvc25ha2Uvc25ha2Uvc25ha2UuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBUztFQUNULHlCQUFpQjtFQUNqQixVQUFRO0FDQ1Y7QURDSTtFQUNFLCtCQUEyQjtFQUMzQiw0QkFBd0I7QUNDOUI7QURBTTtFQUNFLFdBQVE7RUFDUixhQUFPO0VBQ1AsVUFBTTtFQUNOLGNBQVE7RUFDUixrQkFBUztFQUNULHlCQUFpQjtFQUNqQixXQUFNO0VBQ04sUUFBSTtFQUNKLFdBQU87QUNFZjtBRERNO0VBQ0UsWUFBUTtFQUNSLGNBQVE7RUFDUixrQkFBUztFQUNULFdBQU07RUFDTixlQUFVO0VBQ1YsZ0JBQVk7RUFDWixVQUFNO0VBQ04sU0FBSTtBQ0daO0FERkk7RUFDRSw0QkFBd0I7RUFDeEIsMkJBQXVCO0FDSTdCO0FESE07RUFDRSxXQUFRO0VBQ1IsYUFBTztFQUNQLFVBQU07RUFDTixjQUFRO0VBQ1Isa0JBQVM7RUFDVCx5QkFBaUI7RUFDakIsVUFBTTtFQUNOLFFBQUk7RUFDSixXQUFPO0VBQ1AseUJBQVU7QUNLbEI7QURKTTtFQUNFLFlBQVE7RUFDUixjQUFRO0VBQ1Isa0JBQVM7RUFDVCxXQUFNO0VBQ04sZUFBVTtFQUNWLGdCQUFZO0VBQ1osVUFBTTtFQUNOLFFBQUk7RUFDSix5QkFBVTtBQ01sQjtBRExJO0VBQ0UsOEJBQTBCO0VBQzFCLDJCQUF1QjtBQ083QjtBRE5NO0VBQ0UsV0FBUTtFQUNSLGFBQU87RUFDUCxVQUFNO0VBQ04sY0FBUTtFQUNSLGtCQUFTO0VBQ1QseUJBQWlCO0VBQ2pCLFVBQUs7RUFDTCxRQUFJO0VBQ0osV0FBTztFQUNQLHlCQUFVO0FDUWxCO0FEUE07RUFDRSxZQUFRO0VBQ1IsY0FBUTtFQUNSLGtCQUFTO0VBQ1QsV0FBTTtFQUNOLGVBQVU7RUFDVixnQkFBWTtFQUNaLFNBQUs7RUFDTCxRQUFJO0VBQ0oseUJBQVU7QUNTbEI7QURSSTtFQUNFLCtCQUEyQjtFQUMzQiw4QkFBMEI7QUNVaEM7QURUTTtFQUNFLFdBQVE7RUFDUixhQUFPO0VBQ1AsVUFBTTtFQUNOLGNBQVE7RUFDUixrQkFBUztFQUNULHlCQUFpQjtFQUNqQixVQUFNO0VBQ04sV0FBTztFQUNQLHdCQUFVO0FDV2xCO0FEVk07RUFDRSxZQUFRO0VBQ1IsY0FBUTtFQUNSLGtCQUFTO0VBQ1QsV0FBTTtFQUNOLGVBQVU7RUFDVixnQkFBWTtFQUNaLFdBQU07RUFDTixXQUFPO0VBQ1Asd0JBQVU7QUNZbEI7QUFDQSx3RUFBd0UiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9zbmFrZS9zbmFrZS9zbmFrZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5zbmFrZS1waWVjZVxuICBwb3NpdGlvbiBhYnNvbHV0ZVxuICBiYWNrZ3JvdW5kLWNvbG9yIGdyZWVuXG4gIHotaW5kZXggMlxuICAmW2RhdGEtcGFydD1cImhlYWRcIl1cbiAgICAmW2RhdGEtZGlyZWN0aW9uPVwicmlnaHRcIl1cbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzIDRweFxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMgNHB4XG4gICAgICAmOmJlZm9yZVxuICAgICAgICBjb250ZW50ICcnXG4gICAgICAgIGhlaWdodCAxLjRweFxuICAgICAgICB3aWR0aCA0cHhcbiAgICAgICAgZGlzcGxheSBibG9ja1xuICAgICAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yICNhYjA3MDdcbiAgICAgICAgcmlnaHQgLTJweFxuICAgICAgICB0b3AgM3B4XG4gICAgICAgIGJvcmRlciA0cHhcbiAgICAgICY6YWZ0ZXJcbiAgICAgICAgY29udGVudCAnOidcbiAgICAgICAgZGlzcGxheSBibG9ja1xuICAgICAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgICAgICBjb2xvciB3aGl0ZVxuICAgICAgICBmb250LXNpemUgMTJweFxuICAgICAgICBmb250LXdlaWdodCA2MDBcbiAgICAgICAgcmlnaHQgNHB4XG4gICAgICAgIHRvcCAtOHB4XG4gICAgJltkYXRhLWRpcmVjdGlvbj1cInVwXCJdXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyA0cHhcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXMgNHB4XG4gICAgICAmOmJlZm9yZVxuICAgICAgICBjb250ZW50ICcnXG4gICAgICAgIGhlaWdodCAxLjRweFxuICAgICAgICB3aWR0aCA0cHhcbiAgICAgICAgZGlzcGxheSBibG9ja1xuICAgICAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yICNhYjA3MDdcbiAgICAgICAgcmlnaHQgM3B4XG4gICAgICAgIHRvcCAwcHhcbiAgICAgICAgYm9yZGVyIDRweFxuICAgICAgICB0cmFuc2Zvcm0gcm90YXRlKDI3MGRlZylcbiAgICAgICY6YWZ0ZXJcbiAgICAgICAgY29udGVudCAnOidcbiAgICAgICAgZGlzcGxheSBibG9ja1xuICAgICAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgICAgICBjb2xvciB3aGl0ZVxuICAgICAgICBmb250LXNpemUgMTJweFxuICAgICAgICBmb250LXdlaWdodCA2MDBcbiAgICAgICAgcmlnaHQgNnB4XG4gICAgICAgIHRvcCAwcHhcbiAgICAgICAgdHJhbnNmb3JtIHJvdGF0ZSgyNzBkZWcpXG4gICAgJltkYXRhLWRpcmVjdGlvbj1cImxlZnRcIl1cbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgNHB4XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzIDRweFxuICAgICAgJjpiZWZvcmVcbiAgICAgICAgY29udGVudCAnJ1xuICAgICAgICBoZWlnaHQgMS40cHhcbiAgICAgICAgd2lkdGggNHB4XG4gICAgICAgIGRpc3BsYXkgYmxvY2tcbiAgICAgICAgcG9zaXRpb24gYWJzb2x1dGVcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAjYWIwNzA3XG4gICAgICAgIGxlZnQgLTJweFxuICAgICAgICB0b3AgNHB4XG4gICAgICAgIGJvcmRlciA0cHhcbiAgICAgICAgdHJhbnNmb3JtIHJvdGF0ZSgxODBkZWcpXG4gICAgICAmOmFmdGVyXG4gICAgICAgIGNvbnRlbnQgJzonXG4gICAgICAgIGRpc3BsYXkgYmxvY2tcbiAgICAgICAgcG9zaXRpb24gYWJzb2x1dGVcbiAgICAgICAgY29sb3Igd2hpdGVcbiAgICAgICAgZm9udC1zaXplIDEycHhcbiAgICAgICAgZm9udC13ZWlnaHQgNjAwXG4gICAgICAgIGxlZnQgNHB4XG4gICAgICAgIHRvcCAwcHhcbiAgICAgICAgdHJhbnNmb3JtIHJvdGF0ZSgxODBkZWcpXG4gICAgJltkYXRhLWRpcmVjdGlvbj1cImRvd25cIl1cbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzIDRweFxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyA0cHhcbiAgICAgICY6YmVmb3JlXG4gICAgICAgIGNvbnRlbnQgJydcbiAgICAgICAgaGVpZ2h0IDEuNHB4XG4gICAgICAgIHdpZHRoIDRweFxuICAgICAgICBkaXNwbGF5IGJsb2NrXG4gICAgICAgIHBvc2l0aW9uIGFic29sdXRlXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgI2FiMDcwN1xuICAgICAgICByaWdodCAycHhcbiAgICAgICAgYm90dG9tIDBweFxuICAgICAgICB0cmFuc2Zvcm0gcm90YXRlKDkwZGVnKVxuICAgICAgJjphZnRlclxuICAgICAgICBjb250ZW50ICc6J1xuICAgICAgICBkaXNwbGF5IGJsb2NrXG4gICAgICAgIHBvc2l0aW9uIGFic29sdXRlXG4gICAgICAgIGNvbG9yIHdoaXRlXG4gICAgICAgIGZvbnQtc2l6ZSAxMnB4XG4gICAgICAgIGZvbnQtd2VpZ2h0IDYwMFxuICAgICAgICByaWdodCAtMnB4XG4gICAgICAgIGJvdHRvbSAwcHhcbiAgICAgICAgdHJhbnNmb3JtIHJvdGF0ZSg5MGRlZylcbiIsIi5zbmFrZS1waWVjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcbiAgei1pbmRleDogMjtcbn1cbi5zbmFrZS1waWVjZVtkYXRhLXBhcnQ9XCJoZWFkXCJdW2RhdGEtZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuLnNuYWtlLXBpZWNlW2RhdGEtcGFydD1cImhlYWRcIl1bZGF0YS1kaXJlY3Rpb249XCJyaWdodFwiXTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAxLjRweDtcbiAgd2lkdGg6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiMDcwNztcbiAgcmlnaHQ6IC0ycHg7XG4gIHRvcDogM3B4O1xuICBib3JkZXI6IDRweDtcbn1cbi5zbmFrZS1waWVjZVtkYXRhLXBhcnQ9XCJoZWFkXCJdW2RhdGEtZGlyZWN0aW9uPVwicmlnaHRcIl06YWZ0ZXIge1xuICBjb250ZW50OiAnOic7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHJpZ2h0OiA0cHg7XG4gIHRvcDogLThweDtcbn1cbi5zbmFrZS1waWVjZVtkYXRhLXBhcnQ9XCJoZWFkXCJdW2RhdGEtZGlyZWN0aW9uPVwidXBcIl0ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG59XG4uc25ha2UtcGllY2VbZGF0YS1wYXJ0PVwiaGVhZFwiXVtkYXRhLWRpcmVjdGlvbj1cInVwXCJdOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDEuNHB4O1xuICB3aWR0aDogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWIwNzA3O1xuICByaWdodDogM3B4O1xuICB0b3A6IDBweDtcbiAgYm9yZGVyOiA0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4uc25ha2UtcGllY2VbZGF0YS1wYXJ0PVwiaGVhZFwiXVtkYXRhLWRpcmVjdGlvbj1cInVwXCJdOmFmdGVyIHtcbiAgY29udGVudDogJzonO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICByaWdodDogNnB4O1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cbi5zbmFrZS1waWVjZVtkYXRhLXBhcnQ9XCJoZWFkXCJdW2RhdGEtZGlyZWN0aW9uPVwibGVmdFwiXSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xufVxuLnNuYWtlLXBpZWNlW2RhdGEtcGFydD1cImhlYWRcIl1bZGF0YS1kaXJlY3Rpb249XCJsZWZ0XCJdOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDEuNHB4O1xuICB3aWR0aDogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWIwNzA3O1xuICBsZWZ0OiAtMnB4O1xuICB0b3A6IDRweDtcbiAgYm9yZGVyOiA0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uc25ha2UtcGllY2VbZGF0YS1wYXJ0PVwiaGVhZFwiXVtkYXRhLWRpcmVjdGlvbj1cImxlZnRcIl06YWZ0ZXIge1xuICBjb250ZW50OiAnOic7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uc25ha2UtcGllY2VbZGF0YS1wYXJ0PVwiaGVhZFwiXVtkYXRhLWRpcmVjdGlvbj1cImRvd25cIl0ge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG59XG4uc25ha2UtcGllY2VbZGF0YS1wYXJ0PVwiaGVhZFwiXVtkYXRhLWRpcmVjdGlvbj1cImRvd25cIl06YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogMS40cHg7XG4gIHdpZHRoOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYjA3MDc7XG4gIHJpZ2h0OiAycHg7XG4gIGJvdHRvbTogMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uc25ha2UtcGllY2VbZGF0YS1wYXJ0PVwiaGVhZFwiXVtkYXRhLWRpcmVjdGlvbj1cImRvd25cIl06YWZ0ZXIge1xuICBjb250ZW50OiAnOic7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHJpZ2h0OiAtMnB4O1xuICBib3R0b206IDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9nYW1lcy9zbmFrZS9zbmFrZS9zbmFrZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnakeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-snake',
          templateUrl: './snake.component.html',
          styleUrls: ['./snake.component.styl']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, {
        keyEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/games/snake/view/view.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/games/snake/view/view.component.ts ***!
    \****************************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppGamesSnakeViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/data/data.service */
    "./src/app/games/snake/service/data/data.service.ts");
    /* harmony import */


    var _score_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../score/score.component */
    "./src/app/games/snake/score/score.component.ts");
    /* harmony import */


    var _field_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../field/field.component */
    "./src/app/games/snake/field/field.component.ts");

    var ViewComponent = /*#__PURE__*/function () {
      function ViewComponent(data) {
        _classCallCheck(this, ViewComponent);

        this.data = data;
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data.startNewGame();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.data.endGame();
        }
      }]);

      return ViewComponent;
    }();

    ViewComponent.ɵfac = function ViewComponent_Factory(t) {
      return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewComponent,
      selectors: [["app-snake-view"]],
      decls: 2,
      vars: 0,
      template: function ViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-field");
        }
      },
      directives: [_score_score_component__WEBPACK_IMPORTED_MODULE_2__["ScoreComponent"], _field_field_component__WEBPACK_IMPORTED_MODULE_3__["FieldComponent"]],
      styles: ["\n/*# sourceMappingURL=src/app/games/snake/view/view.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvc25ha2Uvdmlldy92aWV3LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRSIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3NuYWtlL3ZpZXcvdmlldy5jb21wb25lbnQuc3R5bCJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-snake-view',
          templateUrl: './view.component.html',
          styleUrls: ['./view.component.styl']
        }]
      }], function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/game-list-menu/game-list-menu.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/game-list-menu/game-list-menu.component.ts ***!
    \*****************************************************************/

  /*! exports provided: GameListMenuComponent */

  /***/
  function srcAppHomeGameListMenuGameListMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameListMenuComponent", function () {
      return GameListMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function GameListMenuComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", game_r1.path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", game_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var GameListMenuComponent = /*#__PURE__*/function () {
      function GameListMenuComponent() {
        _classCallCheck(this, GameListMenuComponent);

        this.gamesAvailable = [];
      }

      _createClass(GameListMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gamesAvailable = [{
            name: 'Snake Game',
            path: '/snake',
            img: 'assets/images/snake-game.gif'
          }];
        }
      }]);

      return GameListMenuComponent;
    }();

    GameListMenuComponent.ɵfac = function GameListMenuComponent_Factory(t) {
      return new (t || GameListMenuComponent)();
    };

    GameListMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameListMenuComponent,
      selectors: [["app-game-list-menu"]],
      decls: 8,
      vars: 1,
      consts: [[1, "game-list-menu"], ["class", "game-list-menu_item", 4, "ngFor", "ngForOf"], [1, "game-list-menu_item"], [1, "game-list-menu_item_title"], ["href", "https://github.com/pserick/snake-game", "target", "_blank", "rel", "noopener"], ["src", "assets/images/help-us.jpg"], [3, "routerLink"], [3, "src"]],
      template: function GameListMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameListMenuComponent_li_2_Template, 5, 3, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "develop a new game :)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gamesAvailable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".game-list-menu[_ngcontent-%COMP%] {\n  width: 800px;\n}\n.game-list-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 50% 50%;\n}\n.game-list-menu_item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: transform 1s;\n}\n.game-list-menu_item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  z-index: 2;\n}\n.game-list-menu_item_title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: monospace;\n  font-size: 16px;\n  font-weight: bold;\n}\n.game-list-menu_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=src/app/home/game-list-menu/game-list-menu.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9nYW1lLWxpc3QtbWVudS9zcmMvYXBwL2hvbWUvZ2FtZS1saXN0LW1lbnUvZ2FtZS1saXN0LW1lbnUuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2hvbWUvZ2FtZS1saXN0LW1lbnUvZ2FtZS1saXN0LW1lbnUuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFNO0FDQ1I7QURBRTtFQUNFLFdBQU07RUFDTixTQUFPO0VBQ1AsVUFBUTtFQUNSLGdCQUFXO0VBQ1gsYUFBUTtFQUNSLDhCQUFzQjtBQ0UxQjtBRERFO0VBQ0UsV0FBTTtFQUNOLFlBQVE7RUFDUixzQkFBVztFQUNYLHdCQUFXO0FDR2Y7QURGSTtFQUNFLHFCQUFVO0VBQ1YsVUFBUTtBQ0lkO0FESEk7RUFDRSxrQkFBVztFQUNYLHNCQUFZO0VBQ1osZUFBVTtFQUNWLGlCQUFZO0FDS2xCO0FESkk7RUFDRSxXQUFNO0FDTVo7QUFDQSxtRkFBbUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2dhbWUtbGlzdC1tZW51L2dhbWUtbGlzdC1tZW51LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtbGlzdC1tZW51XG4gIHdpZHRoIDgwMHB4XG4gIHVsXG4gICAgd2lkdGggMTAwJVxuICAgIG1hcmdpbiAwXG4gICAgcGFkZGluZyAwXG4gICAgbGlzdC1zdHlsZSBub25lXG4gICAgZGlzcGxheSBncmlkXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDUwJSA1MCVcbiAgJl9pdGVtXG4gICAgd2lkdGggMTAwJVxuICAgIHBhZGRpbmcgOHB4XG4gICAgYm94LXNpemluZyBib3JkZXItYm94XG4gICAgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gMXNcbiAgICAmOmhvdmVyXG4gICAgICB0cmFuc2Zvcm0gc2NhbGUoMS4xKVxuICAgICAgei1pbmRleCAyXG4gICAgJl90aXRsZVxuICAgICAgdGV4dC1hbGlnbiBjZW50ZXJcbiAgICAgIGZvbnQtZmFtaWx5IG1vbm9zcGFjZVxuICAgICAgZm9udC1zaXplIDE2cHhcbiAgICAgIGZvbnQtd2VpZ2h0IGJvbGRcbiAgICBpbWdcbiAgICAgIHdpZHRoIDEwMCVcbiIsIi5nYW1lLWxpc3QtbWVudSB7XG4gIHdpZHRoOiA4MDBweDtcbn1cbi5nYW1lLWxpc3QtbWVudSB1bCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbn1cbi5nYW1lLWxpc3QtbWVudV9pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xufVxuLmdhbWUtbGlzdC1tZW51X2l0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHotaW5kZXg6IDI7XG59XG4uZ2FtZS1saXN0LW1lbnVfaXRlbV90aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5nYW1lLWxpc3QtbWVudV9pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9ob21lL2dhbWUtbGlzdC1tZW51L2dhbWUtbGlzdC1tZW51LmNvbXBvbmVudC5jc3MubWFwICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameListMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-list-menu',
          templateUrl: './game-list-menu.component.html',
          styleUrls: ['./game-list-menu.component.styl']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/view/view.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/view/view.component.ts ***!
    \*********************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppHomeViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_list_menu_game_list_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game-list-menu/game-list-menu.component */
    "./src/app/home/game-list-menu/game-list-menu.component.ts");

    var ViewComponent = /*#__PURE__*/function () {
      function ViewComponent() {
        _classCallCheck(this, ViewComponent);

        this.title = 'snake-game';
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewComponent;
    }();

    ViewComponent.ɵfac = function ViewComponent_Factory(t) {
      return new (t || ViewComponent)();
    };

    ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewComponent,
      selectors: [["app-home-view"]],
      decls: 4,
      vars: 0,
      consts: [[1, "disclaimer"]],
      template: function ViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose your favorite game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-game-list-menu");
        }
      },
      directives: [_game_list_menu_game_list_menu_component__WEBPACK_IMPORTED_MODULE_1__["GameListMenuComponent"]],
      styles: [".disclaimer[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: center;\n}\n.new-game[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n/*# sourceMappingURL=src/app/home/view/view.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aWV3L3NyYy9hcHAvaG9tZS92aWV3L3ZpZXcuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2hvbWUvdmlldy92aWV3LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBUTtFQUNSLGtCQUFXO0FDQ2I7QURDQTtFQUNFLGFBQVE7QUNDVjtBQUNBLCtEQUErRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmlldy92aWV3LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2NsYWltZXJcbiAgcGFkZGluZyAxNnB4XG4gIHRleHQtYWxpZ24gY2VudGVyXG5cbi5uZXctZ2FtZVxuICBwYWRkaW5nIDE2cHhcbiIsIi5kaXNjbGFpbWVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5ldy1nYW1lIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvaG9tZS92aWV3L3ZpZXcuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-view',
          templateUrl: './view.component.html',
          styleUrls: ['./view.component.styl']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/Erick_Pereira/Projects/pessoal/snake-game/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map