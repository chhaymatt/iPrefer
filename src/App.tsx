import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import food from "./services/food";
import games from "./services/games";

const App: React.FC = () => {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/iPrefer" element={<Home />}></Route>
				<Route
					path="/iPrefer/games"
					element={<CardList options={games} />}></Route>
				<Route
					path="/iPrefer/food"
					element={<CardList options={food} />}></Route>
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
