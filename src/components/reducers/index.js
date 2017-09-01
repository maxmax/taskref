import { combineReducers } from 'redux'
import words from "./words";
import settings from "./settings";

export default combineReducers({
  words,
  settings,
});
