import { dataInterface, searchHeroAction, searchHeroErrorAction, searchHeroSuccessAction, Action } from "../actions/index"
import { ActionTypes } from "../action-types/index"

interface heroState {
    data: dataInterface,
    loading: boolean,
    error: string | null
}

const initialState = {
    loading: false,
    error: null,
    data: {name: "", description: "", thumbnail: Object}
}

const heroesReducer = (state: heroState = initialState, action: Action): heroState => {
    switch (action.type) {
        case ActionTypes.SEARCH_HERO:
            return { data: { name: "", description: "", thumbnail: Object}, loading: true, error: null };
        case ActionTypes.SEARCH_HERO_SUCCESS:
            return { data: action.payload, loading: false, error: null };
        case ActionTypes.SEARCH_HERO_ERROR:
            return { data: { name: "", description: "", thumbnail: Object}, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default heroesReducer;