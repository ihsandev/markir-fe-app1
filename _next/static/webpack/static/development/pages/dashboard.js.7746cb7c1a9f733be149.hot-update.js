webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./components/containers/pos/index.jsx":
/*!*********************************************!*\
  !*** ./components/containers/pos/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);










function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option;
var formLayout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 18
  }
};
var ButtonLayout = {
  wrapperCol: {
    span: 6,
    offset: 19
  }
};

var _ref =  false ? undefined : {
  name: "dpxtnv",
  styles: "padding-bottom:0;border-radius:8px;border-top:4px solid rgb(24,144,255);box-shadow:1px 4px 15px rgba(24,144,255,0.1);@media(max-width:700px){width:290px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXE1BUktJUi1GRVxcYXBsaWthc2ktMVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xccG9zXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERvQiIsImZpbGUiOiJEOlxcRFRDXFxQcm9qZWN0IFJlYWN0XFxNQVJLSVItRkVcXGFwbGlrYXNpLTFcXGNvbXBvbmVudHNcXGNvbnRhaW5lcnNcXHBvc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xyXG5pbXBvcnQgeyBcclxuICBGb3JtLCBcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBTZWxlY3QsXHJcbiAgUm93LFxyXG4gIE1vZGFsLFxyXG4gIENvbFxyXG59IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXHJcblxyXG5jb25zdCBmb3JtTGF5b3V0ID0ge1xyXG4gIGxhYmVsQ29sOiB7IHNwYW46IDUgfSxcclxuICB3cmFwcGVyQ29sOiB7IHNwYW46IDE4IH1cclxufVxyXG5cclxuY29uc3QgQnV0dG9uTGF5b3V0ID0ge1xyXG4gIHdyYXBwZXJDb2w6IHtcclxuICAgIHNwYW46IDYsXHJcbiAgICBvZmZzZXQ6IDE5XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQb2ludE9mU2FsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgTW9kYWxUZXh0OiAnQ29udGVudCBvZiB0aGUgbW9kYWwnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBjb25maXJtTG9hZGluZzogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBNb2RhbFRleHQ6ICdUaGUgbW9kYWwgd2lsbCBiZSBjbG9zZWQgYWZ0ZXIgdHdvIHNlY29uZHMnLFxyXG4gICAgICBjb25maXJtTG9hZGluZzogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlybUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgfSwgMjAwMClcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdDbGlja2VkIGNhbmNlbCBidXR0b24nKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB7IHZpc2libGUsIGNvbmZpcm1Mb2FkaW5nLCBNb2RhbFRleHQgfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJkIGNzcz17Y3NzYFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiKDI0LCAxNDQsIDI1NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCAxNXB4IHJnYmEoMjQsIDE0NCwgMjU1LCAwLjEpO1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfT5cclxuICAgICAgICA8Rm9ybSB7Li4uZm9ybUxheW91dH0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICA8Q29sIGxnPXt7c3BhbjogMTJ9fSB4cz17eyBzcGFuOiAyNCB9fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVHJhbnNhY3Rpb24gTm9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vLiBUcmFuc2Frc2lcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVmVoaWNsZSBUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBKZW5pcyBLZW5kYXJhYW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTW90b3JDeWNsZVwiPk1vdG9yQ3ljbGU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkNhclwiPkNhcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlZlaGljbGUgTm9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJJblwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXt0cnVlfSBwbGFjZWhvbGRlcj1cIldha3R1IE1hc3VrXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiT3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgZGlzYWJsZWQ9e3RydWV9IHBsYWNlaG9sZGVyPVwiV2FrdHUgS2VsdWFyXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJEdXJhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXt0cnVlfSBwbGFjZWhvbGRlcj1cIkxhbWEgUGFya2lyXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJWZWhpY2xlIFR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIFR5cGUgUGVuZ2d1bmFcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTWVtYmVyXCI+TWVtYmVyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJOb24gTWVtYmVyXCI+Tm9uIE1lbWJlcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQ29ycG9yYXRlXCI+Q29ycG9yYXRlPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgXHJcbiAgICAgICAgICAgIDxDb2wgbGc9e3tzcGFuOiAxMn19IHhzPXt7IHNwYW46IDI0IH19PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQYXkgLyBGb3JmZWl0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQmF5YXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQmF5YXJcIj5CYXlhcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiRGVuZGFcIj5EZW5kYTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgZGlzYWJsZWQ9e3RydWV9IHBsYWNlaG9sZGVyPVwiSGFyZ2FcIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkRpc2NvdW50IFR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIFRpcGUgRGlza29uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkhhcmkgUmF5YSBJZHVsIEZpdHJpXCI+SGFyaSBSYXlhIElkdWwgRml0cmk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkhhcmkgUmF5YSBJZHVsIEFkaGFcIj5IYXJpIFJheWEgSWR1bCBBZGhhPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTm9taW5hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzJweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZjJmNTsgXHJcbiAgICAgICAgICAgICAgICBgfT5ScC4gNDAwMDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQYXltZW50IFR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIFBheW1lbnQgVHlwZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJDYXNoXCI+Q2FzaDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTm9uIENhc2hcIj5Ob24gQ2FzaDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkJpbGwgUGF5bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmF5YXJcIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSB7Li4uQnV0dG9uTGF5b3V0fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbH0+UHJvY2VzczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgb25Paz17dGhpcy5oYW5kbGVPa31cclxuICAgICAgICAgICAgICAgIGNvbmZpcm1Mb2FkaW5nPXtjb25maXJtTG9hZGluZ31cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD57TW9kYWxUZXh0fTwvcD5cclxuICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZlNhbGVzIl19 */"
};

var _ref2 =  false ? undefined : {
  name: "3htgtv",
  styles: "font-size:4em;font-weight:bold;padding:32px 15px;box-sizing:border-box;background:#f0f2f5;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXE1BUktJUi1GRVxcYXBsaWthc2ktMVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xccG9zXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUk2QiIsImZpbGUiOiJEOlxcRFRDXFxQcm9qZWN0IFJlYWN0XFxNQVJLSVItRkVcXGFwbGlrYXNpLTFcXGNvbXBvbmVudHNcXGNvbnRhaW5lcnNcXHBvc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xyXG5pbXBvcnQgeyBcclxuICBGb3JtLCBcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBTZWxlY3QsXHJcbiAgUm93LFxyXG4gIE1vZGFsLFxyXG4gIENvbFxyXG59IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXHJcblxyXG5jb25zdCBmb3JtTGF5b3V0ID0ge1xyXG4gIGxhYmVsQ29sOiB7IHNwYW46IDUgfSxcclxuICB3cmFwcGVyQ29sOiB7IHNwYW46IDE4IH1cclxufVxyXG5cclxuY29uc3QgQnV0dG9uTGF5b3V0ID0ge1xyXG4gIHdyYXBwZXJDb2w6IHtcclxuICAgIHNwYW46IDYsXHJcbiAgICBvZmZzZXQ6IDE5XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQb2ludE9mU2FsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgTW9kYWxUZXh0OiAnQ29udGVudCBvZiB0aGUgbW9kYWwnLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBjb25maXJtTG9hZGluZzogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBNb2RhbFRleHQ6ICdUaGUgbW9kYWwgd2lsbCBiZSBjbG9zZWQgYWZ0ZXIgdHdvIHNlY29uZHMnLFxyXG4gICAgICBjb25maXJtTG9hZGluZzogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlybUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgfSwgMjAwMClcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdDbGlja2VkIGNhbmNlbCBidXR0b24nKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB7IHZpc2libGUsIGNvbmZpcm1Mb2FkaW5nLCBNb2RhbFRleHQgfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJkIGNzcz17Y3NzYFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiKDI0LCAxNDQsIDI1NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCAxNXB4IHJnYmEoMjQsIDE0NCwgMjU1LCAwLjEpO1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfT5cclxuICAgICAgICA8Rm9ybSB7Li4uZm9ybUxheW91dH0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICA8Q29sIGxnPXt7c3BhbjogMTJ9fSB4cz17eyBzcGFuOiAyNCB9fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVHJhbnNhY3Rpb24gTm9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vLiBUcmFuc2Frc2lcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVmVoaWNsZSBUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBKZW5pcyBLZW5kYXJhYW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTW90b3JDeWNsZVwiPk1vdG9yQ3ljbGU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkNhclwiPkNhcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlZlaGljbGUgTm9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJJblwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXt0cnVlfSBwbGFjZWhvbGRlcj1cIldha3R1IE1hc3VrXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiT3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgZGlzYWJsZWQ9e3RydWV9IHBsYWNlaG9sZGVyPVwiV2FrdHUgS2VsdWFyXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJEdXJhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXt0cnVlfSBwbGFjZWhvbGRlcj1cIkxhbWEgUGFya2lyXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJWZWhpY2xlIFR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIFR5cGUgUGVuZ2d1bmFcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTWVtYmVyXCI+TWVtYmVyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJOb24gTWVtYmVyXCI+Tm9uIE1lbWJlcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQ29ycG9yYXRlXCI+Q29ycG9yYXRlPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgXHJcbiAgICAgICAgICAgIDxDb2wgbGc9e3tzcGFuOiAxMn19IHhzPXt7IHNwYW46IDI0IH19PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQYXkgLyBGb3JmZWl0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQmF5YXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQmF5YXJcIj5CYXlhcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiRGVuZGFcIj5EZW5kYTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgZGlzYWJsZWQ9e3RydWV9IHBsYWNlaG9sZGVyPVwiSGFyZ2FcIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkRpc2NvdW50IFR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpbGloIFRpcGUgRGlza29uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkhhcmkgUmF5YSBJZHVsIEZpdHJpXCI+SGFyaSBSYXlhIElkdWwgRml0cmk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkhhcmkgUmF5YSBJZHVsIEFkaGFcIj5IYXJpIFJheWEgSWR1bCBBZGhhPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTm9taW5hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzJweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZjJmNTsgXHJcbiAgICAgICAgICAgICAgICBgfT5ScC4gNDAwMDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQYXltZW50IFR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIFBheW1lbnQgVHlwZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJDYXNoXCI+Q2FzaDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTm9uIENhc2hcIj5Ob24gQ2FzaDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkJpbGwgUGF5bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmF5YXJcIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSB7Li4uQnV0dG9uTGF5b3V0fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbH0+UHJvY2VzczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgb25Paz17dGhpcy5oYW5kbGVPa31cclxuICAgICAgICAgICAgICAgIGNvbmZpcm1Mb2FkaW5nPXtjb25maXJtTG9hZGluZ31cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD57TW9kYWxUZXh0fTwvcD5cclxuICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZlNhbGVzIl19 */"
};

var PointOfSales =
/*#__PURE__*/
function (_Component) {
  _inherits(PointOfSales, _Component);

  function PointOfSales() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PointOfSales);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PointOfSales)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOk", function () {
      _this.setState({
        ModalText: 'The modal will be closed after two seconds',
        confirmLoading: true
      });

      setTimeout(function () {
        _this.setState({
          visible: false,
          confirmLoading: false
        });
      }, 2000);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      // console.log('Clicked cancel button')
      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  _createClass(PointOfSales, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          visible = _this$state.visible,
          confirmLoading = _this$state.confirmLoading,
          ModalText = _this$state.ModalText;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
        css: _ref
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a, formLayout, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 16
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        lg: {
          span: 12
        },
        xs: {
          span: 24
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Transaction No"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
        placeholder: "No. Transaksi"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Vehicle Type"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
        showSearch: true,
        placeholder: "Pilih Jenis Kendaraan"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "MotorCycle"
      }, "MotorCycle"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Car"
      }, "Car"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Vehicle No"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "In"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
        disabled: true,
        placeholder: "Waktu Masuk"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Out"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
        disabled: true,
        placeholder: "Waktu Keluar"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Duration"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
        disabled: true,
        placeholder: "Lama Parkir"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Vehicle Type"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
        showSearch: true,
        placeholder: "Pilih Type Pengguna"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Member"
      }, "Member"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Non Member"
      }, "Non Member"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Corporate"
      }, "Corporate")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        lg: {
          span: 12
        },
        xs: {
          span: 24
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Pay / Forfeit"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
        showSearch: true,
        defaultValue: "Bayar"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Bayar"
      }, "Bayar"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Denda"
      }, "Denda"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Price"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
        disabled: true,
        placeholder: "Harga"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Discount Type"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
        showSearch: true,
        placeholder: "Pilih Tipe Diskon"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Hari Raya Idul Fitri"
      }, "Hari Raya Idul Fitri"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Hari Raya Idul Adha"
      }, "Hari Raya Idul Adha"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Nominal"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        css: _ref2
      }, "Rp. 4000")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Payment Type"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
        showSearch: true,
        placeholder: "Select a Payment Type"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Cash"
      }, "Cash"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, {
        value: "Non Cash"
      }, "Non Cash"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        label: "Bill Payment"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
        placeholder: "Bayar"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, ButtonLayout, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        onClick: this.showModal
      }, "Process")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd_lib_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
        title: "Title",
        visible: visible,
        onOk: this.handleOk,
        confirmLoading: confirmLoading,
        onCancel: this.handleCancel
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", null, ModalText))))));
    }
  }]);

  return PointOfSales;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PointOfSales);

/***/ })

})
//# sourceMappingURL=dashboard.js.7746cb7c1a9f733be149.hot-update.js.map