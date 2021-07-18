import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { config } from "dotenv"
import { resolve } from "dns";



export const searchHero = (character: string) => {
    config()
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_HERO
        })

        console.log(process.env.HASH);
        

        try {
            const response: any = await axios.get(`http://gateway.marvel.com/v1/public/characters?name=${character}&apikey=3990c265f8f5f2f50e14f9dbafaf9c21&hash=3d2682e6df9c179d92507fe3c6358136&ts=1`)
            
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

        } catch (err) {
            dispatch({
                type: ActionTypes.SEARCH_HERO_ERROR,
                payload: err.message
            })
        }
        
    }
}

