import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";


export const searchHero = (character: string) => {

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_HERO
        })
        console.log(process.env.REACT_APP_PUBLIC_KEY);
        
        try {
            const response: any = await axios.get(`http://gateway.marvel.com/v1/public/characters?name=${character}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}&ts=1`)
            
            const { results } = response.data.data;
            
            if (results.length > 0) {
                const { name, description, thumbnail }: any = results[0];
            
                const url = `${thumbnail.path}.${thumbnail.extension}`;
                const obj = { name, description, thumbnail: url };
                
                dispatch({
                    type: ActionTypes.SEARCH_HERO_SUCCESS,
                    payload: obj
                })
            } else {
                throw new Error("No such hero")
            }

        } catch (err: any) {
            dispatch({
                type: ActionTypes.SEARCH_HERO_ERROR,
                payload: err.message
            })
        }
        
    }
}

