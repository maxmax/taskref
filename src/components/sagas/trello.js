import { call, put, take } from "redux-saga/effects";

const fetchTrello = [
  {
    id: 'lane1',
    title: 'Planned Tasks',
    label: '2/2',
    cards: [
      {id: 'Card3', title: 'completed trello', description: 'this kanban board, create api, CRUD, custom board', label: '16 h'},
      {id: 'Card4', title: 'completed task ref', description: 'Alerts & Notifications, api, CRUD, validation, components', label: '24 h', metadata: {sha: 'be312a1'}}
    ]
  },
  {
    id: 'lane2',
    title: 'In progress',
    label: '0/0',
    cards: [
      {id: 'Card1', title: 'trello', description: 'base implementation (prototype)', label: '6 h'},
      {id: 'Card2', title: 'task ref', description: 'base implementation', label: '8 h'},
    ]
  },
  {
    id: 'lane3',
    title: 'To test',
    label: '0/0',
    cards: []
  },
  {
    id: 'lane4',
    title: 'Completed',
    label: '0/0',
    cards: []
  }
];

export function* loadTrello() {
  try {
    const trello = fetchTrello;
    yield put({type: 'LANES_RECEIVED', trello});
  } catch (error) {
    yield put({type: 'LOAD_LANES_FAILURE', error})
  }
}

export function* watchLoadTrello() {
  while (true) {
    yield take('LOAD_LANES');
    yield call(loadTrello);
  }
}
