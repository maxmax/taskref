webpackHotUpdate(0,{

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Todo = Todo;
exports.TodoList = TodoList;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Todo(props) {
  var todo = props.todo;


  if (todo.isDone) {
    return _react2.default.createElement(
      'strike',
      null,
      todo.text
    );
  } else {
    return _react2.default.createElement(
      'span',
      null,
      todo.text
    );
  }
}

function TodoList(props) {
  var todos = props.todos,
      toggleTodo = props.toggleTodo,
      addTodo = props.addTodo;


  var onSubmit = function onSubmit(event) {
    var input = event.target;
    var text = input.value;
    var isEnterKey = event.which == 13;
    var isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  var toggleClick = function toggleClick(id) {
    return function (event) {
      return toggleTodo(id);
    };
  };

  //const todosLis = todos.map((todo) => todo);
  console.log("ListGroup:", todos);

  return _react2.default.createElement(
    'div',
    { className: 'todo' },
    _react2.default.createElement(
      _reactstrap.Card,
      null,
      _react2.default.createElement(
        _reactstrap.CardBlock,
        null,
        _react2.default.createElement(
          _reactstrap.FormGroup,
          null,
          _react2.default.createElement(_reactstrap.Input, {
            type: 'text',
            placeholder: 'New todo',
            onKeyDown: onSubmit
          })
        )
      ),
      _react2.default.createElement(
        _reactstrap.ListGroup,
        null,
        todos.map(function (todo) {
          return _react2.default.createElement(
            _reactstrap.ListGroupItem,
            {
              key: todo.get('id'),
              className: 'todo__item',
              onClick: toggleClick(todo.get('id')),
              action: true
            },
            _react2.default.createElement(Todo, { todo: todo.toJS() })
          );
        })
      )
    )
  );
}

/***/ })

})