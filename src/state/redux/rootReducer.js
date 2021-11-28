import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import githubReducers from "./github/reducers";

const persistConfig = {
  key: "data",
  storage: storage,
  whitelist: ["userList", "repositoryList"],
};

const rootReducer = combineReducers({
  github: persistReducer(persistConfig, githubReducers),
});

export default rootReducer;
