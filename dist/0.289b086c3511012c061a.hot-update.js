webpackHotUpdate(0,{

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(16);

var _admin = __webpack_require__(361);

var _admin2 = _interopRequireDefault(_admin);

var _pageHeader = __webpack_require__(364);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _alerts = __webpack_require__(365);

var _alerts2 = _interopRequireDefault(_alerts);

var _details = __webpack_require__(372);

var _details2 = _interopRequireDefault(_details);

var _receiver = __webpack_require__(383);

var _receiver2 = _interopRequireDefault(_receiver);

var _todo = __webpack_require__(384);

var _ui = __webpack_require__(406);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Settings(_ref) {
  var data = _ref.data,
      update = _ref.update,
      curent = _ref.curent;

  return _react2.default.createElement(
    _admin2.default,
    null,
    _react2.default.createElement(_pageHeader2.default, { title: 'Alerts & Notifications' }),
    _react2.default.createElement(
      _reactstrap.Row,
      null,
      _react2.default.createElement(
        _reactstrap.Col,
        { xs: '12', sm: '12', lg: '6' },
        _react2.default.createElement(_alerts2.default, {
          data: data,
          update: update,
          curent: curent
        })
      ),
      _react2.default.createElement(
        _reactstrap.Col,
        { xs: '12', sm: '6', lg: '3' },
        _react2.default.createElement(_details2.default, { data: data.notifications[0] })
      ),
      _react2.default.createElement(
        _reactstrap.Col,
        { xs: '12', sm: '6', lg: '3' },
        _react2.default.createElement(_receiver2.default, null),
        _react2.default.createElement(_todo.TodoList, null)
      ),
      _react2.default.createElement(
        _reactstrap.Col,
        { xs: '12', sm: '12', lg: '12' },
        _react2.default.createElement(_ui.Ui, null)
      )
    )
  );
}

exports.default = Settings;

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//test
function Ui() {
  return _react2.default.createElement(
    'section',
    null,
    'Ui'
  );
}

exports.default = Ui;

/***/ })

})