import { Dispatch } from "react";
import { ActionTypes } from "../../state/action-types";
import { Action } from "../../state/actions";
import axios, { AxiosResponse } from "axios";
import { put, call } from "@redux-saga/core/effects";
import { searchHeroErrorAction, searchHeroSuccessAction } from "../../state/reducers/heroesReducer";

function* searchHeroHandler ({type, payload} : {type: Action, payload: string}) {
    console.log("AAAAAAAAAAAA");    
    
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const res: AxiosResponse = yield call(() => axios.get(`http://gateway.marvel.com/v1/public/characters?name=${payload}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}&ts=1`))
            yield put(searchHeroSuccessAction({
                type: ActionTypes.SEARCH_HERO_SUCCESS,
                payload: res
            }));
            
        } catch(error) {
            yield put(searchHeroErrorAction({
                type: ActionTypes.SEARCH_HERO_ERROR,
                payload: error.message
            }));
        }
}

export default searchHeroHandler