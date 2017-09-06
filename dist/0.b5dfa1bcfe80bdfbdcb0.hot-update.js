webpackHotUpdate(0,{

/***/ 104:
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

var Switch = function (_Component) {
  (0, _inherits3.default)(Switch, _Component);

  function Switch(props) {
    (0, _classCallCheck3.default)(this, Switch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).call(this, props));

    _this.state = {
      value: false,
      active: 'disable',
      name: {
        enabled: 'enabled',
        disable: 'disable'
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Switch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        value: this.props.value || false,
        active: this.props.value ? 'active' : 'disable',
        name: this.props.name || this.state.name
      });
    }
  }, {
    key: 'enabledHead',
    value: function enabledHead() {
      this.setState({
        value: true,
        active: 'active'
      });
    }
  }, {
    key: 'disableHead',
    value: function disableHead() {
      this.setState({
        value: false,
        active: 'disable'
      });
    }

    //update({});

  }, {
    key: 'render',
    value: function render() {

      console.log("this.props:", this.props);

      return _react2.default.createElement(
        'div',
        { className: "switch " + this.state.active },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { className: 'enabled', onClick: this.enabledHead.bind(this) },
            this.state.name.enabled
          ),
          _react2.default.createElement(
            'span',
            { className: 'disable', onClick: this.disableHead.bind(this) },
            this.state.name.disable
          )
        )
      );
    }
  }]);
  return Switch;
}(_react.Component);

exports.default = Switch;

/***/ })

})