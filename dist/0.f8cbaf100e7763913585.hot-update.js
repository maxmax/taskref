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

var _Range = __webpack_require__(369);

var _Range2 = _interopRequireDefault(_Range);

var _CollapseWr = __webpack_require__(173);

var _CollapseWr2 = _interopRequireDefault(_CollapseWr);

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
        _react2.default.createElement(InputForm, { disabled: true }),
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
        _react2.default.createElement(_Switch2.default, { value: true }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'h3',
          null,
          'Range'
        ),
        _react2.default.createElement(_Range2.default, {
          label: 'Limitation per day',
          min: 1,
          max: 400,
          value: 120
        }),
        _react2.default.createElement(_Range2.default, {
          label: 'Limitation per day',
          min: 5,
          max: 200,
          value: 150
        })
      ),
      _react2.default.createElement(
        _reactstrap.CardBlock,
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Collapse'
        )
      ),
      _react2.default.createElement(
        _CollapseWr2.default,
        { title: 'Collapse' },
        _react2.default.createElement(
          'ul',
          { className: 'list-group list-group-flush list-group-transp' },
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            '2017-Jan-03 Tue 09:13:21'
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            '2017-Feb-12 Fri 12:09:54'
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            '2017-Feb-23 Fri 19:23:36'
          )
        )
      ),
      _react2.default.createElement(
        _CollapseWr2.default,
        { title: 'Title Collapse' },
        _react2.default.createElement(
          _reactstrap.CardBlock,
          null,
          _react2.default.createElement(
            'p',
            null,
            'Text...'
          )
        )
      )
    )
  );
}

exports.default = Ui;

/***/ })

})