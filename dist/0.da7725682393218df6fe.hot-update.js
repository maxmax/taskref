webpackHotUpdate(0,{

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputForm = function inputForm() {
  return _react2.default.createElement(
    _reactstrap.FormGroup,
    { color: 'danger' },
    _react2.default.createElement(
      Label,
      { 'for': 'exampleName' },
      'Name'
    ),
    _react2.default.createElement(_reactstrap.Input, { type: 'text', name: 'name', id: 'exampleName', placeholder: 'Enter receiver name' }),
    _react2.default.createElement(
      _reactstrap.FormFeedback,
      null,
      'Oh noes! that name is already taken'
    )
  );
};

//test
function Ui() {
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      _reactstrap.Card,
      null,
      _react2.default.createElement(
        _reactstrap.CardBlock,
        null,
        '11111'
      )
    )
  );
}

exports.default = Ui;

/***/ })

})