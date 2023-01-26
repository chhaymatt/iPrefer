import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
const App: React.FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Nav />
			<CardList options={[]} />
			<Footer />
		</div>
	);
};

export default App;
