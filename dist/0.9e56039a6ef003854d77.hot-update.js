webpackHotUpdate(0,{

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(373);

var _stringify2 = _interopRequireDefault(_stringify);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__(64);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: in dev, on Higher-order 
function ReactSelect(_ref) {
  var label = _ref.label,
      value = _ref.value,
      options = _ref.options;


  var voptions = [{ value: '0', label: 'Signaling channels' }, { value: '1', label: 'Storage' }, { value: '2', label: 'Data channels' }];

  var logChange = function logChange(val) {
    console.log("Selected: " + (0, _stringify2.default)(val));
  };

  return _react2.default.createElement(
    'div',
    { className: 'react-select form-group' },
    _react2.default.createElement(
      'label',
      null,
      label
    ),
    _react2.default.createElement(_reactSelect2.default, {
      name: 'form-field-name',
      value: '0',
      options: options,
      onChange: logChange
    })
  );
};

exports.default = ReactSelect;

/***/ })

})