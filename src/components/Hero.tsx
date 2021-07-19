import React, { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { store } from "../state";
// import { actionCreators } from "../state";
// import { useDispatch } from "react-redux";
// import { searchHero } from "../state/action-creators/index"
import { useActions } from "../hooks/useActions";

const Hero: React.FC = () => {
    const [hero, setHero] = useState("")
    // const dispatch = useDispatch();
    const { searchHero } = useActions();
    
    const { data, error, loading } = useTypedSelector((state) => state.heroes) //useSelector has no idea about what data you have inside ur reducer store, u must define a RootState inside the reducer
    
    useEffect(() => {
        console.log(`data: ${JSON.stringify(data)}, error: ${error}, loading: ${loading}`);
    }, [data, error, loading])

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        searchHero(hero);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={hero} onChange={e => setHero(e.target.value)} />
                <button>Search</button>
                {data && <h1>{data.name}</h1>}
                {data.name ? <img style={{width: "300px", height: "300px"}} src={data.thumbnail.toString()} alt={data.name}/> : null}
                {data && <p style={{wordWrap: "break-word", width:"300px"}}>{data.description}</p>}
                {error && <h1>{error}</h1>}
            </form>
        </div>
    )
}

export default Hero;