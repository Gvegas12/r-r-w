import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import reposReducer from "./reposReducer";

const rootReducer = combineReducers({
  repos: reposReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
