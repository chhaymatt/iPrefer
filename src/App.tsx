import { Route, Routes } from "react-router-dom"
import "./App.css"
import Container from "./components/Container/Container"
import CreateYourOwn from "./components/CreateYourOwn/CreateYourOwn"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import food from "./services/food"
import games from "./services/games"

const App: React.FC = () => {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/games"
                    element={<Container key="games" options={games} />}
                ></Route>
                <Route
                    path="/food"
                    element={<Container key="food" options={food} />}
                ></Route>
                <Route
                    path="/create-your-own"
                    element={<CreateYourOwn options={games}></CreateYourOwn>}
                ></Route>
            </Routes>

            <Footer />
        </div>
    )
}

export default App
