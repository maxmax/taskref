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

var _Switch = __webpack_require__(104);

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectCategory = [{ value: 0, label: 'Signaling channels' }, { value: 1, label: 'Storage' }, { value: 2, label: 'Data channels' }];

var selectEvents = [{ value: 0, label: 'Limit reached' }, { value: 1, label: 'Used over' }, { value: 2, label: 'No free channels' }];

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

//const SelectForm = ({option}) =>
//  <section>
//    <ReactSelectContainer
//      label="Event category"
//      value={0}
//      option={option}
//    />
//  </section>

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
        _react2.default.createElement(_container2.default, {
          label: 'Event category',
          value: 0,
          option: selectCategory
        }),
        _react2.default.createElement(_container2.default, {
          label: 'Event',
          value: 1,
          option: selectEvents
        }),
        _react2.default.createElement(_container2.default, {
          label: 'Select disabled',
          value: 1,
          option: selectEvents,
          disabled: true
        }),
        _react2.default.createElement(_container2.default, {
          label: 'Empty'
        }),
        _react2.default.createElement(
          'h3',
          null,
          'Switch'
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Event state'
          ),
          _react2.default.createElement(_Switch2.default, { value: false })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_Switch2.default, {
          value: true,
          name: "enabled: 'On', disable: 'Off'"
        })
      )
    )
  );
}

exports.default = Ui;

/***/ }),

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
      label: '',
      disabled: false
    };
    return _this;
  }

  (0, _createClass3.default)(ReactSelectContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        currency: this.props.value || 0,
        option: this.props.option || [],
        label: this.props.label,
        disabled: this.props.disabled
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
          disabled: this.state.disabled
        })
      );
    }
  }]);
  return ReactSelectContainer;
}(_react.Component);

exports.default = ReactSelectContainer;

/***/ })

})