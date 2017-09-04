import { combineReducers } from 'redux'
import words from "./words";
import settings from "./settings";
import todo from "./todo";
import trello from "./trello";

export default combineReducers({
  words,
  settings,
  todo,
  trello,
});
