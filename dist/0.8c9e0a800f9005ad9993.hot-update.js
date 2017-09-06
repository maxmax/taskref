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

var _container = __webpack_require__(407);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectOptions = [{ value: 0, label: 'Signaling channels' }, { value: 1, label: 'Storage' }, { value: 2, label: 'Data channels' }];

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
    _react2.default.createElement(ReactSelect, {
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

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(35);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(36);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _ReactSelect = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ReactSelect\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _ReactSelect2 = _interopRequireDefault(_ReactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactSelectContainer = function (_React$Component) {
  (0, _inherits3.default)(ReactSelectContainer, _React$Component);

  function ReactSelectContainer() {
    (0, _classCallCheck3.default)(this, ReactSelectContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReactSelectContainer.__proto__ || (0, _getPrototypeOf2.default)(ReactSelectContainer)).call(this));

    _this.state = {
      value: 0,
      option: [],
      label: ''
    };
    return _this;
  }

  (0, _createClass3.default)(ReactSelectContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        value: this.props.option || 0,
        option: this.props.option || [],
        label: this.props.label
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log("ReactSelectContainer:", this.props);
      console.log("ReactSelectContainer-this.state:", this.state);
      return _react2.default.createElement(_ReactSelect2.default, {
        option: this.state.option,
        value: this.state.value,
        label: this.state.label
      });
    }
  }]);
  return ReactSelectContainer;
}(_react2.default.Component);

/***/ })

})