import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";
const Home = () => {
	return (
		<div className={styles.Container}>
			<h3>What is iPrefer?</h3>
			<p>
				iPrefer helps people make decisions quickly by showing two
				options at a time, narrowing down the choices until the perfect
				one is found.
			</p>
			<h3>Categories</h3>
			<NavLink className={styles.Link} to="/iPrefer/games">
				Games
			</NavLink>
			<NavLink className={styles.Link} to="/iPrefer/food">
				Food
			</NavLink>
			<h3>Known Issues</h3>
			<ul>
				<li>
					Unable to switch between Games or Food unless you go back to
					the homepage (iPrefer)
				</li>
			</ul>
		</div>
	);
};

export default Home;
