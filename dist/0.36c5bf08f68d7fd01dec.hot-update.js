webpackHotUpdate(0,{

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(92);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.loadTrello = loadTrello;
exports.watchLoadTrello = watchLoadTrello;

var _effects = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(loadTrello),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(watchLoadTrello);

var fetchTrello = [{
  id: 'lane1',
  title: 'Planned Tasks',
  label: '2/2',
  cards: [{ id: 'Card3', title: 'completed trello', description: 'this kanban board, create api, CRUD, custom board', label: '16 h' }, { id: 'Card4', title: 'completed task ref', description: 'Alerts & Notifications, api, CRUD, validation, components', label: '24 h', metadata: { sha: 'be312a1' } }]
}, {
  id: 'lane2',
  title: 'In progress',
  label: '0/0',
  cards: [{ id: 'Card1', title: 'trello', description: 'base implementation (prototype)', label: '6 h' }, { id: 'Card2', title: 'task ref', description: 'base implementation', label: '8 h' }]
}, {
  id: 'lane3',
  title: 'To test',
  label: '0/0',
  cards: []
}, {
  id: 'lane4',
  title: 'Completed',
  label: '0/0',
  cards: []
}];

function loadTrello() {
  var trello;
  return _regenerator2.default.wrap(function loadTrello$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          trello = fetchTrello;
          _context.next = 4;
          return (0, _effects.put)({ type: 'LANES_RECEIVED', trello: trello });

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context['catch'](0);
          _context.next = 10;
          return (0, _effects.put)({ type: 'LOAD_LANES_FAILURE', error: _context.t0 });

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 6]]);
}

function watchLoadTrello() {
  return _regenerator2.default.wrap(function watchLoadTrello$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {
            _context2.next = 7;
            break;
          }

          _context2.next = 3;
          return (0, _effects.take)('LOAD_LANES');

        case 3:
          _context2.next = 5;
          return (0, _effects.call)(loadTrello);

        case 5:
          _context2.next = 0;
          break;

        case 7:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/***/ })

})