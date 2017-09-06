webpackHotUpdate(0,{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactSelect = __webpack_require__(64);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactSelectContainer = function (_Component) {
  (0, _inherits3.default)(ReactSelectContainer, _Component);

  function ReactSelectContainer() {
    (0, _classCallCheck3.default)(this, ReactSelectContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReactSelectContainer.__proto__ || (0, _getPrototypeOf2.default)(ReactSelectContainer)).call(this));

    _this.state = {
      currency: 0,
      option: [],
      label: ''
    };
    return _this;
  }

  (0, _createClass3.default)(ReactSelectContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        currency: this.props.value || 0,
        option: this.props.option || [],
        label: this.props.label
      });
    }
  }, {
    key: 'updateState',
    value: function updateState(newCurrency) {
      this.setState({
        currency: newCurrency.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'react-select form-group' },
        _react2.default.createElement(
          'label',
          null,
          this.props.label
        ),
        _react2.default.createElement(_reactSelect2.default, {
          name: 'form-field-name',
          value: this.state.currency,
          options: this.state.option,
          onChange: this.updateState.bind(this),
          disabled: false
        })
      );
    }
  }]);
  return ReactSelectContainer;
}(_react.Component);

exports.default = ReactSelectContainer;

/***/ })

})