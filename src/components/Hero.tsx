import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../state";
// import { actionCreators } from "../state";
import { searchHero } from "../state/action-creators/index"

const Hero = () => {
    const [hero, setHero] = useState("")
    const dispatch = useDispatch();

    const situation = useSelector((state) => state)
    useEffect(() => {
        console.log(situation);
    }, [situation])

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        dispatch(searchHero(hero))
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