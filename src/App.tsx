import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
const App: React.FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<CardList options={[]} />
			<Footer />
		</div>
	);
};

export default App;
