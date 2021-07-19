import { combineReducers } from "redux";
import heroesReducer from "./heroesReducer";

const reducers = combineReducers({
    heroes: heroesReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;