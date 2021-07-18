import { ActionTypes } from "../action-types";

export interface dataInterface {
    name: string,
    description: string,
    thumbnail: Object
}

export interface searchHeroAction {
    type: ActionTypes.SEARCH_HERO
}

export interface searchHeroSuccessAction {
    type: ActionTypes.SEARCH_HERO_SUCCESS,
    payload: dataInterface
}

export interface searchHeroErrorAction {
    type: ActionTypes.SEARCH_HERO_ERROR,
    payload: string
}

export type Action =
    | searchHeroAction 
    | searchHeroSuccessAction 
    | searchHeroErrorAction