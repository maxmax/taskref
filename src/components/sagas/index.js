import takeLatest from "redux-saga";
import { all, call } from "redux-saga/effects";
import { loadWords, watchLoadWords } from "./words";
import { loadSettings, watchLoadSettings } from "./settings";
import { loadTrello, watchLoadTrello } from "./trello";

export function* sagas() {
  yield all([
    call(loadWords),
    call(watchLoadWords),
    call(loadSettings),
    call(watchLoadSettings),
    call(loadTrello),
    call(watchLoadTrello),
  ]);
}
