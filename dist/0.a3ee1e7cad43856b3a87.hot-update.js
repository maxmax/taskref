webpackHotUpdate(0,{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(373);

var _stringify2 = _interopRequireDefault(_stringify);

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
        value: this.props.value || 0,
        option: this.props.option || [],
        label: this.props.label
      });
    }
  }, {
    key: 'logChange',
    value: function logChange(val) {
      //console.log("logChange!");
      console.log("Selected: " + (0, _stringify2.default)(val));
    }
  }, {
    key: 'render',
    value: function render() {
      //console.log("ReactSelectContainer:", this.props);
      console.log("ReactSelectContainer-this.state:", this.state);
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
          value: this.props.value,
          options: this.props.option,
          onChange: logChange
        })
      );
    }
  }]);
  return ReactSelectContainer;
}(_react.Component);
//import ReactSelect from './index';


exports.default = ReactSelectContainer;

/***/ })

})