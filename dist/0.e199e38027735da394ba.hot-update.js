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

var InputForm = function InputForm(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? '' : _ref$color,
      feedback = _ref.feedback;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      _reactstrap.FormGroup,
      { color: color },
      _react2.default.createElement(
        _reactstrap.Label,
        { 'for': 'exampleNameTest' },
        'Input label'
      ),
      _react2.default.createElement(_reactstrap.Input, { type: 'text', name: 'text', id: 'exampleNameTest', placeholder: 'Enter text' }),
      feedback && _react2.default.createElement(
        _reactstrap.FormFeedback,
        null,
        feedback
      )
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
        _react2.default.createElement(InputForm, null),
        _react2.default.createElement(InputForm, {
          color: 'danger',
          feedback: 'Oh noes! that text is already taken'
        }),
        _react2.default.createElement(InputForm, { color: 'success' })
      )
    )
  );
}

exports.default = Ui;

/***/ })

})