import { takeLatest, takeEvery } from "redux-saga/effects";
import { searchHero } from "../state/action-creators";
import { searchHeroAction } from "../state/actions";
import { ActionTypes } from "../state/action-types";
import { Action } from "../state/actions";
import searchHeroHandler from "./handlers/searchHeroHandler";

export default function* watcherSaga() {
    yield takeEvery(ActionTypes.SEARCH_HERO, searchHeroHandler);
}