import React, { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import store from "../state/store";
// import { actionCreators } from "../state";
import { useDispatch } from "react-redux";
import { searchHeroAction } from "../state/reducers/heroesReducer";
// import { searchHero } from "../state/action-creators/index"
import { useActions } from "../hooks/useActions";
import { ActionTypes } from "../state/action-types";
import { searchHero } from "../state/action-creators";
import heroSlice from "../state/reducers/heroesReducer";

const Hero: React.FC = () => {
    const [hero, setHero] = useState("")
    const dispatch = useDispatch();
    // const { searchHero } = useActions();
    
    const situation = useTypedSelector((state) => state.heroes) //useSelector has no idea about what data you have inside ur reducer store, u must define a RootState inside the reducer
    const copy = situation;
    useEffect(() => {
        console.log(copy.data.payload);
        
    })


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(searchHeroAction(hero));
        
        dispatch(searchHeroAction(hero));
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={hero} onChange={e => setHero(e.target.value)} />
                <button type="submit">Search</button>
                {/* {data && <h1>{data}</h1>}
                {data.name ? <img style={{width: "300px", height: "300px"}} src={data.thumbnail.toString()} alt={data.name}/> : null}
                {data && <p style={{wordWrap: "break-word", width:"300px"}}>{data.description}</p>}
                {error && <h1>{error}</h1>} */}
            </form>
        </div>
    )
}

export default Hero;