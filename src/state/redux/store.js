import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const initialState = {};

const setStore = () => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return { store, persistor };
};

export default setStore;
