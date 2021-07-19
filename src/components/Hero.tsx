import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "../state";
// import { actionCreators } from "../state";
// import { useDispatch } from "react-redux";
// import { searchHero } from "../state/action-creators/index"
import { useActions } from "../hooks/useActions";

const Hero: React.FC = () => {
    const [hero, setHero] = useState("")
    // const dispatch = useDispatch();
    const { searchHero } = useActions();

    const situation = useSelector((state) => state)
    useEffect(() => {
        console.log(situation);
    }, [situation])

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        searchHero(hero);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={hero} onChange={e => setHero(e.target.value)} />
                <button>Search</button>
                
            </form>
        </div>
    )
}

export default Hero;