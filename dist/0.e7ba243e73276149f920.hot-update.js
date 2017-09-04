webpackHotUpdate(0,{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(71);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(74);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(75);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(76);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(79);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _settings = __webpack_require__(423);

var _settings2 = _interopRequireDefault(_settings);

var _trello = __webpack_require__(466);

var _trello2 = _interopRequireDefault(_trello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import * as actions from './actions';

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {
      data: [],
      term: {},
      curent: ''
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
          trello = _props.trello,
          testtodos = _props.testtodos;

      //console.log("this.props:", this.props);

      var doubled = testtodos.map(function (todo) {
        return todo.text;
      });
      console.log("doubled:", doubled);

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_trello2.default, { data: trello }),
        _react2.default.createElement(_settings2.default, {
          data: settings,
          update: this.updateData.bind(this)
        })
      );
    }
  }]);
  return App;
}(_react.Component);

function mapStateToProps(state) {
  var words = state.words,
      settings = state.settings,
      trello = state.trello,
      todo = state.todo;

  return {
    words: words.words,
    settings: settings.settings,
    trello: trello,
    testtodos: todo
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ })

})