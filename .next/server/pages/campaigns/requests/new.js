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
exports.id = "pages/campaigns/requests/new";
exports.ids = ["pages/campaigns/requests/new"];
exports.modules = {

/***/ "./pages/campaigns/requests/new.js":
/*!*****************************************!*\
  !*** ./pages/campaigns/requests/new.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n\nvar _jsxFileName = \"/Users/gracemugoiri/Documents/SOL/kickstart/pages/campaigns/requests/new.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass RequestNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      value: '',\n      description: '',\n      recipient: '',\n      loading: false,\n      errorMessage: ''\n    });\n\n    _defineProperty(this, \"onSubmit\", async event => {\n      event.preventDefault();\n      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.address);\n      const {\n        description,\n        value,\n        recipient\n      } = this.state;\n      this.setState({\n        loading: true,\n        errorMessage: ''\n      });\n\n      try {\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();\n        await campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(value, 'ether'), recipient).send({\n          from: accounts[0]\n        });\n        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute(`/campaigns/${this.props.address}/requests`);\n      } catch (error) {\n        this.setState({\n          errorMessage: error.message\n        });\n      }\n\n      this.setState({\n        loading: false\n      });\n    });\n  }\n\n  // access to the address \n  static async getInitialProps(props) {\n    const {\n      address\n    } = props.query;\n    return {\n      address\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        route: `/campaigns/${this.props.address}/requests`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Create a Request\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {\n        onSubmit: this.onSubmit,\n        error: !!this.state.errorMessage,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Description\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.description,\n            onChange: event => this.setState({\n              description: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Value in Ether \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.value,\n            onChange: event => this.setState({\n              value: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Recipient\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.recipient,\n            onChange: event => this.setState({\n              recipient: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {\n          error: true,\n          header: \"Oops!\",\n          content: this.state.errorMessage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n          primary: true,\n          loading: this.state.laoding,\n          children: \" Create! \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzP2Q5ZmMiXSwibmFtZXMiOlsiUmVxdWVzdE5ldyIsIkNvbXBvbmVudCIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzdGF0ZSIsInNldFN0YXRlIiwiYWNjb3VudHMiLCJ3ZWIzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsIlJvdXRlciIsImVycm9yIiwibWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJsYW9kaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQyw0Q0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUN2QjtBQUNKQyxXQUFLLEVBQUUsRUFESDtBQUVKQyxpQkFBVyxFQUFFLEVBRlQ7QUFHSkMsZUFBUyxFQUFFLEVBSFA7QUFJSkMsYUFBTyxFQUFFLEtBSkw7QUFLSkMsa0JBQVksRUFBRTtBQUxWLEtBRHVCOztBQUFBLHNDQWdCcEIsTUFBTUMsS0FBTixJQUFlO0FBQ3RCQSxXQUFLLENBQUNDLGNBQU47QUFFQSxZQUFNQyxRQUFRLEdBQUdDLDJEQUFRLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxPQUFaLENBQXpCO0FBQ0EsWUFBTTtBQUFFVCxtQkFBRjtBQUFlRCxhQUFmO0FBQXNCRTtBQUF0QixVQUFvQyxLQUFLUyxLQUEvQztBQUVBLFdBQUtDLFFBQUwsQ0FBYztBQUFFVCxlQUFPLEVBQUUsSUFBWDtBQUFpQkMsb0JBQVksRUFBRTtBQUEvQixPQUFkOztBQUVB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bEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkosZUEyQkksOERBQUMscURBQUQ7QUFBUSxpQkFBTyxNQUFmO0FBQWdCLGlCQUFPLEVBQUUsS0FBS08sS0FBTCxDQUFXZ0IsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBdUNIOztBQS9FOEI7O0FBa0ZuQywrREFBZTdCLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7IFxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNsYXNzIFJlcXVlc3ROZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgcmVjaXBpZW50OiAnJyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJydcbiAgICB9O1xuXG4gICAgLy8gYWNjZXNzIHRvIHRoZSBhZGRyZXNzIFxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IGFkZHJlc3MgfTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIHZhbHVlLCByZWNpcGllbnQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY3JlYXRlUmVxdWVzdChcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgJ2V0aGVyJyksXG4gICAgICAgICAgICAgICAgcmVjaXBpZW50XG4gICAgICAgICAgICApLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdDwvaDM+XG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5WYWx1ZSBpbiBFdGhlciA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGllbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlY2lwaWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHJlY2lwaWVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubGFvZGluZ30+IENyZWF0ZSEgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TmV3OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/new.js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_web3_js","ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/new.js"); });
module.exports = __webpack_exports__;

})();