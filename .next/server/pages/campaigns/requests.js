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
exports.id = "pages/campaigns/requests";
exports.ids = ["pages/campaigns/requests"];
exports.modules = {

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\nvar _jsxFileName = \"/Users/gracemugoiri/Documents/SOL/kickstart/components/RequestRow.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass RequestRow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"onApprove\", async () => {\n      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);\n      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();\n      await campaign.methods.approveRequest(this.props.id).send({\n        from: accounts[0]\n      });\n    });\n\n    _defineProperty(this, \"onFinalize\", async () => {\n      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);\n      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();\n      await campaign.methods.finalizeRequest(this.props.id).send({\n        from: accounts[0]\n      });\n    });\n  }\n\n  render() {\n    const {\n      Row,\n      Cell\n    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table;\n    const {\n      id,\n      request,\n      approversCount\n    } = this.props;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n      disabled: request.complete,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n        children: [\" \", id, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n        children: [\" \", request.description, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n        children: [\" \", _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.utils.fromWei(request.value, 'ether'), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n        children: [\" \", request.recipient, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n        children: [\" \", request.approvalCount, \"/\", approversCount]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n        children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n          color: \"green\",\n          basic: true,\n          onClick: this.onApprove,\n          children: \"Approve\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n        children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n          color: \"teal\",\n          basic: true,\n          onClick: this.onFinalize,\n          children: \"Finalize\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/YzQwZSJdLCJuYW1lcyI6WyJSZXF1ZXN0Um93IiwiQ29tcG9uZW50IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImFjY291bnRzIiwid2ViMyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZW5kZXIiLCJSb3ciLCJDZWxsIiwiVGFibGUiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50Iiwib25BcHByb3ZlIiwib25GaW5hbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQyw0Q0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLHVDQUNuQixZQUFZO0FBQ3BCLFlBQU1DLFFBQVEsR0FBR0MsMkRBQVEsQ0FBQyxLQUFLQyxLQUFMLENBQVdDLE9BQVosQ0FBekI7QUFDQSxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsbUVBQUEsRUFBdkI7QUFDQSxZQUFNTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJDLGNBQWpCLENBQWdDLEtBQUtMLEtBQUwsQ0FBV00sRUFBM0MsRUFBK0NDLElBQS9DLENBQW9EO0FBQ3REQyxZQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBRHdDLE9BQXBELENBQU47QUFHSCxLQVA4Qjs7QUFBQSx3Q0FTbEIsWUFBWTtBQUNyQixZQUFNSixRQUFRLEdBQUdDLDJEQUFRLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxPQUFaLENBQXpCO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLG1FQUFBLEVBQXZCO0FBQ0EsWUFBTUwsUUFBUSxDQUFDTSxPQUFULENBQWlCSyxlQUFqQixDQUFpQyxLQUFLVCxLQUFMLENBQVdNLEVBQTVDLEVBQWdEQyxJQUFoRCxDQUFxRDtBQUN2REMsWUFBSSxFQUFFTixRQUFRLENBQUMsQ0FBRDtBQUR5QyxPQUFyRCxDQUFOO0FBR0gsS0FmOEI7QUFBQTs7QUFpQi9CUSxRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVDLFNBQUY7QUFBT0M7QUFBUCxRQUFlQyxvREFBckI7QUFDQSxVQUFNO0FBQUVQLFFBQUY7QUFBTVEsYUFBTjtBQUFlQztBQUFmLFFBQWtDLEtBQUtmLEtBQTdDO0FBRUEsd0JBQ0ksOERBQUMsR0FBRDtBQUFLLGNBQVEsRUFBRWMsT0FBTyxDQUFDRSxRQUF2QjtBQUFBLDhCQUNJLDhEQUFDLElBQUQ7QUFBQSx3QkFBUVYsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLElBQUQ7QUFBQSx3QkFBUVEsT0FBTyxDQUFDRyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJLDhEQUFDLElBQUQ7QUFBQSx3QkFBUWQsaUVBQUEsQ0FBbUJXLE9BQU8sQ0FBQ0ksS0FBM0IsRUFBa0MsT0FBbEMsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJLDhEQUFDLElBQUQ7QUFBQSx3QkFBUUosT0FBTyxDQUFDSyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJLDhEQUFDLElBQUQ7QUFBQSx3QkFBUUwsT0FBTyxDQUFDTSxhQUFoQixPQUFnQ0wsY0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFNSSw4REFBQyxJQUFEO0FBQUEsa0JBQ0tELE9BQU8sQ0FBQ0UsUUFBUixHQUFtQixJQUFuQixnQkFDRyw4REFBQyxxREFBRDtBQUFRLGVBQUssRUFBQyxPQUFkO0FBQXNCLGVBQUssTUFBM0I7QUFBNEIsaUJBQU8sRUFBRSxLQUFLSyxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQVdJLDhEQUFDLElBQUQ7QUFBQSxrQkFDS1AsT0FBTyxDQUFDRSxRQUFSLEdBQW1CLElBQW5CLGdCQUNHLDhEQUFDLHFEQUFEO0FBQVEsZUFBSyxFQUFDLE1BQWQ7QUFBcUIsZUFBSyxNQUExQjtBQUEyQixpQkFBTyxFQUFFLEtBQUtNLFVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBbUJIOztBQXhDOEI7O0FBMkNuQywrREFBZTFCLFVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xuICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgfSk7IFxuICAgIH07XG5cbiAgICBvbkZpbmFsaXplID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgUm93LCBDZWxsfSA9IFRhYmxlO1xuICAgICAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdyBkaXNhYmxlZD17cmVxdWVzdC5jb21wbGV0ZX0+XG4gICAgICAgICAgICAgICAgPENlbGw+IHtpZH0gPC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPiB7cmVxdWVzdC5kZXNjcmlwdGlvbn0gPC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPiB7d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsICdldGhlcicpfSA8L0NlbGw+XG4gICAgICAgICAgICAgICAgPENlbGw+IHtyZXF1ZXN0LnJlY2lwaWVudH0gPC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPiB7cmVxdWVzdC5hcHByb3ZhbENvdW50fS97YXBwcm92ZXJzQ291bnR9PC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPlxuICAgICAgICAgICAgICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgICAgICA8Q2VsbD5cbiAgICAgICAgICAgICAgICAgICAge3JlcXVlc3QuY29tcGxldGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRlYWxcIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PkZpbmFsaXplPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ }),

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/RequestRow */ \"./components/RequestRow.js\");\n\nvar _jsxFileName = \"/Users/gracemugoiri/Documents/SOL/kickstart/pages/campaigns/requests/index.js\";\n\n\n\n\n\n\n\nclass RequestIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  static async getInitialProps(props) {\n    const {\n      address\n    } = props.query;\n    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__.default)(address);\n    const requestCount = await campaign.methods.getRequestsCount().call();\n    const approversCount = await campaign.methods.approversCount().call();\n    const requests = await Promise.all(Array(requestCount).fill().map((element, index) => {\n      return campaign.methods.requests(index).call();\n    }));\n    return {\n      address,\n      requests,\n      requestCount,\n      approversCount\n    };\n  } // helper method to render one of every requestrow for every request loaded up \n\n\n  renderRows() {\n    return this.props.requests.map((request, index) => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_6__.default, {\n        id: index,\n        request: request,\n        address: this.props.address,\n        approversCount: this.props.approversCount\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this);\n    });\n  }\n\n  render() {\n    const {\n      Header,\n      Row,\n      HeaderCell,\n      Body\n    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Request List\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n        route: `/campaigns/${this.props.address}/requests/new`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            primary: true,\n            children: \"Add Request\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n              children: \"ID\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n              children: \"Description\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n              children: \"Amount\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n              children: \"Recipient\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n              children: \"Approval\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n              children: \"Approve\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n              children: \"Finalize\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {\n          children: this.renderRows()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestIndex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXguanM/MzMyNiJdLCJuYW1lcyI6WyJSZXF1ZXN0SW5kZXgiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsImFkZHJlc3MiLCJxdWVyeSIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJyZXF1ZXN0Q291bnQiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhcHByb3ZlcnNDb3VudCIsInJlcXVlc3RzIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlbmRlclJvd3MiLCJyZXF1ZXN0IiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJUYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBTixTQUEyQkMsNENBQTNCLENBQXFDO0FBQ2pDLGVBQWFDLGVBQWIsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2hDLFVBQU07QUFBRUM7QUFBRixRQUFjRCxLQUFLLENBQUNFLEtBQTFCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHQywyREFBUSxDQUFDSCxPQUFELENBQXpCO0FBQ0EsVUFBTUksWUFBWSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsZ0JBQWpCLEdBQW9DQyxJQUFwQyxFQUEzQjtBQUNBLFVBQU1DLGNBQWMsR0FBRyxNQUFNTixRQUFRLENBQUNHLE9BQVQsQ0FBaUJHLGNBQWpCLEdBQWtDRCxJQUFsQyxFQUE3QjtBQUVBLFVBQU1FLFFBQVEsR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FDbkJDLEtBQUssQ0FBQ1IsWUFBRCxDQUFMLENBQW9CUyxJQUFwQixHQUEyQkMsR0FBM0IsQ0FBK0IsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQy9DLGFBQU9kLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkksUUFBakIsQ0FBMEJPLEtBQTFCLEVBQWlDVCxJQUFqQyxFQUFQO0FBQ0gsS0FGRCxDQURtQixDQUF2QjtBQUtBLFdBQU87QUFBRVAsYUFBRjtBQUFXUyxjQUFYO0FBQXFCTCxrQkFBckI7QUFBbUNJO0FBQW5DLEtBQVA7QUFDSCxHQWJnQyxDQWVqQzs7O0FBQ0FTLFlBQVUsR0FBRztBQUNULFdBQU8sS0FBS2xCLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQkssR0FBcEIsQ0FBd0IsQ0FBQ0ksT0FBRCxFQUFVRixLQUFWLEtBQW9CO0FBQy9DLDBCQUNJLDhEQUFDLDJEQUFEO0FBRUksVUFBRSxFQUFFQSxLQUZSO0FBR0ksZUFBTyxFQUFFRSxPQUhiO0FBSUksZUFBTyxFQUFFLEtBQUtuQixLQUFMLENBQVdDLE9BSnhCO0FBS0ksc0JBQWMsRUFBRSxLQUFLRCxLQUFMLENBQVdTO0FBTC9CLFNBQ1NRLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBU0gsS0FWTSxDQUFQO0FBV0g7O0FBRURHLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRUMsWUFBRjtBQUFVQyxTQUFWO0FBQWVDLGdCQUFmO0FBQTJCQztBQUEzQixRQUFvQ0Msb0RBQTFDO0FBRUEsd0JBQ0ksOERBQUMsdURBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUksOERBQUMseUNBQUQ7QUFBTSxhQUFLLEVBQUcsY0FBYSxLQUFLekIsS0FBTCxDQUFXQyxPQUFRLGVBQTlDO0FBQUEsK0JBQ0k7QUFBQSxpQ0FDSSw4REFBQyxxREFBRDtBQUFRLG1CQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBUUksOERBQUMsb0RBQUQ7QUFBQSxnQ0FDSSw4REFBQyxNQUFEO0FBQUEsaUNBQ0ksOERBQUMsR0FBRDtBQUFBLG9DQUNJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISixlQUlJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUFLSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBTUksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSixlQU9JLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVlJLDhEQUFDLElBQUQ7QUFBQSxvQkFBTyxLQUFLaUIsVUFBTDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF5Qkg7O0FBMURnQzs7QUE2RHJDLCtEQUFlckIsWUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RSb3cnO1xuXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuICAgICAgICBjb25zdCBhcHByb3ZlcnNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIEFycmF5KHJlcXVlc3RDb3VudCkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0cywgcmVxdWVzdENvdW50LCBhcHByb3ZlcnNDb3VudCB9O1xuICAgIH1cblxuICAgIC8vIGhlbHBlciBtZXRob2QgdG8gcmVuZGVyIG9uZSBvZiBldmVyeSByZXF1ZXN0cm93IGZvciBldmVyeSByZXF1ZXN0IGxvYWRlZCB1cCBcbiAgICByZW5kZXJSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZXF1ZXN0Um93IFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q9e3JlcXVlc3R9XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQ9e3RoaXMucHJvcHMuYXBwcm92ZXJzQ291bnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IEhlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5IH0gPSBUYWJsZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8aDM+UmVxdWVzdCBMaXN0PC9oMz5cbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BbW91bnQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5Pnt0aGlzLnJlbmRlclJvd3MoKX08L0JvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/index.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/index.js"); });
module.exports = __webpack_exports__;

})();