import { dataInterface } from "../actions/index"
import { ActionTypes } from "../action-types/index"
import { createSlice, Slice } from "@reduxjs/toolkit";

interface heroState {
    data: dataInterface,
    loading: boolean,
    error: string | null
}

const initialState = {
    loading: false,
    error: null,
    data: {name: "", description: "", thumbnail: {}}
}

const heroSlice = createSlice({
    name: "hero",
    initialState: initialState,
    reducers: {
        searchHeroAction(state, action){
            state.data = {name: "", description: "", thumbnail: {}}
            state.loading = true;
            state.error = null
        },
        searchHeroSuccessAction(state, action){
            state.data = action.payload;
            state.error = null;
            state.loading = false
        },
        searchHeroErrorAction(state, action){
            const data = action.payload;
            state.data = data;
            state.error = data
        }
    }
})

export const { searchHeroAction,searchHeroErrorAction, searchHeroSuccessAction } = heroSlice.actions;
export default heroSlice.reducer;