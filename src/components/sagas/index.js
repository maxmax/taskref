import takeLatest from "redux-saga";
import { all, call } from "redux-saga/effects";
import { loadWords, watchLoadWords } from "./words";
import { loadSettings, watchLoadSettings } from "./settings";

export function* sagas() {
  yield all([
    call(watchLoadWords),
    call(loadWords),
    call(watchLoadSettings),
    call(loadSettings),
  ]);
}
