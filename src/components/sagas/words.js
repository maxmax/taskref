import { call, put, take } from "redux-saga/effects";

//TODO: isomorphic-fetch
const fetchWords = ["dev", "Olololo", "kokoko", "test", "day", "week", "month"];

export function* loadWords() {
  try {
    const words = fetchWords;
    yield put({type: 'WORDS_RECEIVED', words});
  } catch (error) {
    yield put({type: 'LOAD_WORDS_FAILURE', error})
  }
}

export function* watchLoadWords() {
  while (true) {
    yield take('LOAD_WORDS');
    yield call(loadWords);
  }
}
