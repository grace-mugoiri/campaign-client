/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/campaigns/new";
exports.ids = ["pages/campaigns/new"];
exports.modules = {

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/gracemugoiri/Documents/SOL/kickstart/pages/campaigns/new.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass CampaignNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      minimumContribution: '',\n      errorMessage: '',\n      laoding: false\n    });\n\n    _defineProperty(this, \"onSubmit\", async event => {\n      event.preventDefault();\n      this.setState({\n        loading: true,\n        errorMessage: ''\n      });\n\n      try {\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.eth.getAccounts();\n        console.log(accounts);\n        await _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__.default.methods.createCampaign(this.state.minimumContribution).send({\n          from: accounts[0]\n        });\n        _routes__WEBPACK_IMPORTED_MODULE_6__.Router.pushRoute('/');\n      } catch (err) {\n        this.setState({\n          errorMessage: err.message\n        });\n      }\n\n      this.setState({\n        loading: false\n      });\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: \"Create a Campaign!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {\n          onSubmit: this.onSubmit,\n          error: !!this.state.errorMessage,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              children: \"Minimum Contribution \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 25\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n              label: \"wei\",\n              labelPosition: \"right\",\n              value: this.state.minimumContribution,\n              onChange: event => this.setState({\n                minimumContribution: event.target.value\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {\n            error: true,\n            header: \"Oops!\",\n            content: this.state.errorMessage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            loading: this.state.loading,\n            primary: true,\n            children: \"Create!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzP2U4ZDIiXSwibmFtZXMiOlsiQ2FtcGFpZ25OZXciLCJDb21wb25lbnQiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibGFvZGluZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJhY2NvdW50cyIsIndlYjMiLCJjb25zb2xlIiwibG9nIiwiZmFjdG9yeSIsInN0YXRlIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJlcnIiLCJtZXNzYWdlIiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBTixTQUEwQkMsNENBQTFCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDeEI7QUFDSkMseUJBQW1CLEVBQUUsRUFEakI7QUFFSkMsa0JBQVksRUFBRSxFQUZWO0FBR0pDLGFBQU8sRUFBRTtBQUhMLEtBRHdCOztBQUFBLHNDQU9yQixNQUFPQyxLQUFQLElBQWlCO0FBQ3hCQSxXQUFLLENBQUNDLGNBQU47QUFFQSxXQUFLQyxRQUFMLENBQWM7QUFBRUMsZUFBTyxFQUFFLElBQVg7QUFBaUJMLG9CQUFZLEVBQUU7QUFBL0IsT0FBZDs7QUFFQSxVQUFJO0FBQ0osY0FBTU0sUUFBUSxHQUFHLE1BQU1DLG1FQUFBLEVBQXZCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBRUEsY0FBTUksNkVBQUEsQ0FBK0IsS0FBS0MsS0FBTCxDQUFXWixtQkFBMUMsRUFBK0RhLElBQS9ELENBQW9FO0FBQUNDLGNBQUksRUFBRVAsUUFBUSxDQUFDLENBQUQ7QUFBZixTQUFwRSxDQUFOO0FBRUFRLDZEQUFBLENBQWlCLEdBQWpCO0FBQ0MsT0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNWLGFBQUtYLFFBQUwsQ0FBYztBQUFFSixzQkFBWSxFQUFFZSxHQUFHLENBQUNDO0FBQXBCLFNBQWQ7QUFDSDs7QUFDRCxXQUFLWixRQUFMLENBQWM7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBZDtBQUNILEtBdkIrQjtBQUFBOztBQXlCaENZLFFBQU0sR0FBRztBQUNMLHdCQUNJO0FBQUEsNkJBQ0ksOERBQUMsdURBQUQ7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdBLDhEQUFDLG1EQUFEO0FBQU0sa0JBQVEsRUFBRSxLQUFLQyxRQUFyQjtBQUErQixlQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUtQLEtBQUwsQ0FBV1gsWUFBbkQ7QUFBQSxrQ0FDSSw4REFBQyx5REFBRDtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUksOERBQUMsb0RBQUQ7QUFDSSxtQkFBSyxFQUFDLEtBRFY7QUFFSSwyQkFBYSxFQUFDLE9BRmxCO0FBR0ksbUJBQUssRUFBRSxLQUFLVyxLQUFMLENBQVdaLG1CQUh0QjtBQUlJLHNCQUFRLEVBQUVHLEtBQUssSUFDWCxLQUFLRSxRQUFMLENBQWM7QUFBTUwsbUNBQW1CLEVBQUVHLEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYUM7QUFBeEMsZUFBZDtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBV0ksOERBQUMsc0RBQUQ7QUFBUyxpQkFBSyxNQUFkO0FBQWUsa0JBQU0sRUFBQyxPQUF0QjtBQUE4QixtQkFBTyxFQUFFLEtBQUtULEtBQUwsQ0FBV1g7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSixlQVlJLDhEQUFDLHFEQUFEO0FBQVEsbUJBQU8sRUFBRSxLQUFLVyxLQUFMLENBQVdOLE9BQTVCO0FBQXFDLG1CQUFPLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFzQkg7O0FBaEQrQjs7QUFtRHBDLCtEQUFlUixXQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuY2xhc3MgQ2FtcGFpZ25OZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiAnJyxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgbGFvZGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KVxuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50cylcblxuICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuY3JlYXRlQ2FtcGFpZ24odGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uKS5zZW5kKHtmcm9tOiBhY2NvdW50c1swXX0pO1xuICAgICAgICBcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5DcmVhdGUgYSBDYW1wYWlnbiE8L2gxPlxuXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSA+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pbmltdW0gQ29udHJpYnV0aW9uIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIndlaVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgICAgIG1pbmltdW1Db250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_factory_js"], function() { return __webpack_exec__("./pages/campaigns/new.js"); });
module.exports = __webpack_exports__;

})();