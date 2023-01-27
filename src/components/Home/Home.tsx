import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";
const Home = () => {
	return (
		<div className={styles.Container}>
			<h1>iPrefer</h1>
			<h2>What is iPrefer?</h2>
			<p>
				iPrefer helps people make decisions quickly by showing two
				options at a time, narrowing down the choices until the perfect
				one is found.
			</p>
			<br></br>
			<h2>Categories</h2>
			<p>Get started by clicking on a category below.</p>
			<NavLink className={styles.Link} to="/iPrefer/games">
				Games
			</NavLink>
			<NavLink className={styles.Link} to="/iPrefer/food">
				Food
			</NavLink>
			<h2>Known Issues</h2>
			<ul>
				<li>Refreshing the page will result in 404 Not Found.</li>
			</ul>
		</div>
	);
};

export default Home;
