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

var _ReactSelect = __webpack_require__(169);

var _ReactSelect2 = _interopRequireDefault(_ReactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectOptions = [{ value: '0', label: 'Signaling channels' }, { value: '1', label: 'Storage' }, { value: '2', label: 'Data channels' }];

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

var SelectForm = function SelectForm(_ref2) {
  var option = _ref2.option;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(_ReactSelect2.default, {
      label: 'Event category',
      value: '0',
      option: option
    })
  );
};

//test
function Ui() {
  console.log("selectOptions", selectOptions);
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      _reactstrap.Card,
      null,
      _react2.default.createElement(
        _reactstrap.CardBlock,
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Input'
        ),
        _react2.default.createElement(InputForm, null),
        _react2.default.createElement(InputForm, {
          color: 'danger',
          feedback: 'Oh noes! that text is already taken'
        }),
        _react2.default.createElement(InputForm, { color: 'success' }),
        _react2.default.createElement(
          'h3',
          null,
          'Select'
        ),
        _react2.default.createElement(SelectForm, { option: selectOptions })
      )
    )
  );
}

exports.default = Ui;

/***/ })

})