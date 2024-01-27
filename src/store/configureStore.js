import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./ducks/snackbar";

const reducers = combineReducers({
    snackbar: snackbarReducer
});

const store = configureStore({ reducer: reducers });

export default store;
