webpackHotUpdate(0,{

/***/ 369:
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

var _reactRangeslider = __webpack_require__(168);

var _reactRangeslider2 = _interopRequireDefault(_reactRangeslider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Range = function (_Component) {
  (0, _inherits3.default)(Range, _Component);

  function Range(props) {
    (0, _classCallCheck3.default)(this, Range);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Range.__proto__ || (0, _getPrototypeOf2.default)(Range)).call(this, props));

    _this.state = {
      value: 10
      //this.handleChange = this.handleChange.bind(this);
    };return _this;
  }

  (0, _createClass3.default)(Range, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        value: this.props.value
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({
        value: value
      });
    }

    //handleChangeComplete(){
    //  console.log('Change event completed')
    //}

  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;
      var _props = this.props,
          label = _props.label,
          min = _props.min,
          max = _props.max;


      return _react2.default.createElement(
        'div',
        { className: 'range' },
        _react2.default.createElement(
          'label',
          null,
          label
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'div',
            { className: 'min' },
            min
          ),
          _react2.default.createElement(_reactRangeslider2.default, {
            min: min,
            max: max,
            value: value,
            onChange: this.handleChange.bind(this)
          }),
          _react2.default.createElement(
            'div',
            { className: 'value' },
            max
          )
        )
      );
    }
  }]);
  return Range;
}(_react.Component);

exports.default = Range;

/***/ })

})