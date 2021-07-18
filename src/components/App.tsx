import { Provider } from "react-redux";
import { store } from "../state"
import Hero from "./Hero";


const App = () => {

    return (
        <Provider store={store}>
            <div>
                Search for a hero
                <Hero/>
            </div>
        </Provider>
    )
}

export default App;