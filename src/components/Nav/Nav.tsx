import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className={styles.Nav}>
			<NavLink to="/iPrefer" className={styles.Link}>
				iPrefer
			</NavLink>
			<NavLink className={styles.Link} to="/iPrefer/games">
				Games
			</NavLink>
			<NavLink className={styles.Link} to="/iPrefer/food">
				Food
			</NavLink>
		</nav>
	);
};

export default Nav;
