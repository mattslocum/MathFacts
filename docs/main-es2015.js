(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-item/grid-item.component */ "./src/app/grid-item/grid-item.component.ts");




function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3 + 1);
} }
function AppComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-grid-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onHoverColumn", function AppComponent_div_4_div_5_Template_app_grid_item_onHoverColumn_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.hoverColumn = $event; })("onHoverRow", function AppComponent_div_4_div_5_Template_app_grid_item_onHoverRow_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.hoverRow = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r8 = ctx.index;
    const y_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hover", ctx_r6.hoverColumn === x_r8 + 1)("hover2", ctx_r6.hoverRow === x_r8 + 1 && ctx_r6.hoverColumn === y_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("column", x_r8 + 1)("row", y_r5 + 1);
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_4_div_5_Template, 2, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.gridSize);
} }
class AppComponent {
    constructor() {
        this.gridSize = new Array(10);
        this.hoverColumn = null;
        this.hoverRow = null;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[1, "grid"], [1, "row"], [1, "box"], ["class", "header box", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "header", "box"], [1, "text"], [1, "row-header"], ["class", "box box-number", 3, "hover", "hover2", 4, "ngFor", "ngForOf"], [1, "box", "box-number"], [3, "column", "row", "onHoverColumn", "onHoverRow"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gridSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gridSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_2__["GridItemComponent"]], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  font-size: 1.8rem;\n  justify-content: center;\n  height: 100%;\n}\n\n.grid[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 40px 40px 100px 40px;\n  width: 80%;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.row[_ngcontent-%COMP%]:hover   .box-number[_ngcontent-%COMP%] {\n  background-color: gray;\n}\n\n.row[_ngcontent-%COMP%]   .box-number[_ngcontent-%COMP%] {\n  background: #666;\n  border: 2px solid #bbb;\n  cursor: pointer;\n}\n\n.row[_ngcontent-%COMP%]   .box-number.hover2[_ngcontent-%COMP%] {\n  background-color: #4d4d4d;\n}\n\n.row[_ngcontent-%COMP%]   .box-number.hover[_ngcontent-%COMP%] {\n  background-color: gray;\n}\n\n.box[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  line-height: 36px;\n  text-align: center;\n}\n\n.row-header[_ngcontent-%COMP%] {\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n\n.row-header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tc2xvY3VtL3JlcG9zaXRvcmllcy90ZXN0L2phdmFzY3JpcHQvTWF0aEZhY3RzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBQ0RGOztBRElJO0VBQ0Usc0JBQUE7QUNGTjs7QURNRTtFQUNFLGdCQTlCYTtFQStCYixzQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURNSTtFQUNFLHlCQUFBO0FDSk47O0FETUk7RUFDRSxzQkFBQTtBQ0pOOztBRFNBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEU0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNORjs7QURPRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib3gtYmFja2dyb3VuZDogIzY2NjtcblxuOmhvc3Qge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAxMDBweCA0MHB4O1xuICB3aWR0aDogODAlO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcblxuICAmOmhvdmVyIHtcbiAgICAuYm94LW51bWJlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRib3gtYmFja2dyb3VuZCwgMTApO1xuICAgIH1cbiAgfVxuXG4gIC5ib3gtbnVtYmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYm94LWJhY2tncm91bmQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JiYjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmLmhvdmVyMiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJveC1iYWNrZ3JvdW5kLCAxMCk7XG4gICAgfVxuICAgICYuaG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYm94LWJhY2tncm91bmQsIDEwKTtcbiAgICB9XG4gIH1cbn1cblxuLmJveCB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvdy1oZWFkZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLnRleHQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAxMDBweCA0MHB4O1xuICB3aWR0aDogODAlO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbi5yb3c6aG92ZXIgLmJveC1udW1iZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLnJvdyAuYm94LW51bWJlciB7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYmI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yb3cgLmJveC1udW1iZXIuaG92ZXIyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNGQ0ZDtcbn1cbi5yb3cgLmJveC1udW1iZXIuaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4uYm94IHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm93LWhlYWRlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvdy1oZWFkZXIgLnRleHQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-item/grid-item.component */ "./src/app/grid-item/grid-item.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_3__["GridItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_3__["GridItemComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/grid-item/grid-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/grid-item/grid-item.component.ts ***!
  \**************************************************/
/*! exports provided: GridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemComponent", function() { return GridItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GridItemComponent {
    constructor() {
        this.onHoverColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHoverRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isVisible = false;
    }
    ngOnInit() {
    }
    onClick() {
        this.isVisible = !this.isVisible;
    }
    onMouseOver() {
        this.onHoverColumn.next(this.column);
        this.onHoverRow.next(this.row);
    }
    onMouseOut() {
        this.onHoverColumn.next(null);
        this.onHoverRow.next(null);
    }
}
GridItemComponent.ɵfac = function GridItemComponent_Factory(t) { return new (t || GridItemComponent)(); };
GridItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridItemComponent, selectors: [["app-grid-item"]], hostBindings: function GridItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridItemComponent_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { column: "column", row: "row" }, outputs: { onHoverColumn: "onHoverColumn", onHoverRow: "onHoverRow" }, decls: 3, vars: 3, consts: [[3, "mouseover", "mouseout"]], template: function GridItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function GridItemComponent_Template_div_mouseover_0_listener() { return ctx.onMouseOver(); })("mouseout", function GridItemComponent_Template_div_mouseout_0_listener() { return ctx.onMouseOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.row * ctx.column);
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n\ndiv[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.visible[_ngcontent-%COMP%] {\n  background-color: green;\n  display: table;\n  width: 100%;\n}\n\n.visible[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tc2xvY3VtL3JlcG9zaXRvcmllcy90ZXN0L2phdmFzY3JpcHQvTWF0aEZhY3RzL3NyYy9hcHAvZ3JpZC1pdGVtL2dyaWQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JpZC1pdGVtL2dyaWQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9ncmlkLWl0ZW0vZ3JpZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnZpc2libGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cbi52aXNpYmxlIHNwYW4ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-item',
                templateUrl: './grid-item.component.html',
                styleUrls: ['./grid-item.component.scss']
            }]
    }], function () { return []; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onHoverColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHoverRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
        }] }); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mslocum/repositories/test/javascript/MathFacts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map