webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./components/pageLayouts/index.jsx":
/*!******************************************!*\
  !*** ./components/pageLayouts/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _partials_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/seo */ "./components/pageLayouts/partials/seo.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _partials_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/header */ "./components/pageLayouts/partials/header.jsx");
/* harmony import */ var _partials_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/sidebar */ "./components/pageLayouts/partials/sidebar.jsx");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid.css */ "./components/pageLayouts/grid.css");
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_grid_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./components/pageLayouts/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a.Content,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a.Sider;

var _ref =  false ? undefined : {
  name: "5rrffj",
  styles: "overflow:hidden;overflow-y:auto;position:fixed;left:0;bottom:0;top:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXE1BUktJUi1GRVxcYXBsaWthc2ktMVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CIiwiZmlsZSI6IkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXE1BUktJUi1GRVxcYXBsaWthc2ktMVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcclxuaW1wb3J0IFNlbyBmcm9tICcuL3BhcnRpYWxzL3NlbydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL3BhcnRpYWxzL2hlYWRlcidcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9wYXJ0aWFscy9zaWRlYmFyJ1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuaW1wb3J0ICcuL2dyaWQuY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuY29uc3QgeyBDb250ZW50LCBTaWRlciB9ID0gTGF5b3V0XHJcblxyXG5jb25zdCBNYWluTGF5b3V0ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlbyB0aXRsZT17IHByb3BzLnRpdGxlIH0vPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxIZWFkZXJzIHNldENvbGxhcHNlZD17c2V0Q29sbGFwc2VkfS8+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTaWRlciBcclxuICAgICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgICAgLy8gY29sbGFwc2VkV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgdHJpZ2dlcj17bnVsbH1cclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsyMjB9XHJcbiAgICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICB0aGVtZT0nbGlnaHQnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgICAgICA8L1NpZGVyPlxyXG4gICAgICAgICAgPExheW91dCBzdHlsZT17eyBwYWRkaW5nOiAnMCAyNHB4IDI0cHgnIH19PlxyXG4gICAgICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24geyAuLi5wcm9wcyB9PlxyXG4gICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbk1haW5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0XHJcbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "18ounbe",
  styles: "background:transparent;padding:1em;margin-top:85px;margin-left:220px;@media(max-width:768px){margin-left:0;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXE1BUktJUi1GRVxcYXBsaWthc2ktMVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3NCIiwiZmlsZSI6IkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXE1BUktJUi1GRVxcYXBsaWthc2ktMVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcclxuaW1wb3J0IFNlbyBmcm9tICcuL3BhcnRpYWxzL3NlbydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL3BhcnRpYWxzL2hlYWRlcidcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9wYXJ0aWFscy9zaWRlYmFyJ1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuaW1wb3J0ICcuL2dyaWQuY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuY29uc3QgeyBDb250ZW50LCBTaWRlciB9ID0gTGF5b3V0XHJcblxyXG5jb25zdCBNYWluTGF5b3V0ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlbyB0aXRsZT17IHByb3BzLnRpdGxlIH0vPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxIZWFkZXJzIHNldENvbGxhcHNlZD17c2V0Q29sbGFwc2VkfS8+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTaWRlciBcclxuICAgICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgICAgLy8gY29sbGFwc2VkV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgdHJpZ2dlcj17bnVsbH1cclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsyMjB9XHJcbiAgICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICB0aGVtZT0nbGlnaHQnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgICAgICA8L1NpZGVyPlxyXG4gICAgICAgICAgPExheW91dCBzdHlsZT17eyBwYWRkaW5nOiAnMCAyNHB4IDI0cHgnIH19PlxyXG4gICAgICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24geyAuLi5wcm9wcyB9PlxyXG4gICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbk1haW5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0XHJcbiJdfQ== */"
};

var MainLayout = function MainLayout(_ref3) {
  var props = _extends({}, _ref3);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_partials_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.title
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_partials_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setCollapsed: setCollapsed
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Sider, {
    breakpoint: "lg" // collapsedWidth="0"
    ,
    trigger: null,
    collapsible: true,
    collapsed: collapsed,
    width: 220,
    css: _ref,
    theme: "light"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_partials_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: {
      padding: '0 24px 24px'
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Content, {
    css: _ref2
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", props, props.children))))));
};

MainLayout.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ })

})
//# sourceMappingURL=dashboard.js.a0ce5eb7159fd30f5542.hot-update.js.map