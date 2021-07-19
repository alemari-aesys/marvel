// import { createStore, applyMiddleware } from "redux";
import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// import thunk from "redux-thunk";
import watcherSaga from "../sagas/rootSaga";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(reducers, {}, applyMiddleware(thunk))

const store = configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga)
export default store;