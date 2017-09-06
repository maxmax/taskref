webpackHotUpdate(0,{

/***/ 88:
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

var _reactRedux = __webpack_require__(85);

var _settings = __webpack_require__(345);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {
      data: [],
      term: {},
      curent: {
        test: 0
      }
    };
    _this.resetData = _this.resetData.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'resetData',
    value: function resetData() {
      this.setState({ data: [] });
    }
  }, {
    key: 'updateData',
    value: function updateData(config) {
      this.setState(config);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          words = _props.words,
          settings = _props.settings,
          trello = _props.trello;


      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_settings2.default, {
          data: settings,
          update: this.updateData.bind(this),
          curent: this.state
        })
      );
    }
  }]);
  return App;
}(_react.Component);

function mapStateToProps(state) {
  var words = state.words,
      settings = state.settings,
      todo = state.todo;

  return {
    words: words.words,
    settings: settings.settings
  };
}

function mapDispatchToProps(dispatch) {
  //onAdd: (item) => dispatch(addItem(item))
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ })

})