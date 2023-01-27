import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

// Notes
// For the home link, it requires end attribute
const Nav = () => {
	return (
		<nav className={styles.Nav}>
			<div>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.Active : styles.Link
					}
					to="/iPrefer"
					end>
					iPrefer
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.Active : styles.Link
					}
					to="/iPrefer/games">
					Games
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.Active : styles.Link
					}
					to="/iPrefer/food">
					Food
				</NavLink>
			</div>
			{/* <div>
				<a
					className={styles.Link}
					target="_blank"
					href="https://matthewchhay.com">
					Matthew Chhay
				</a>
			</div> */}
		</nav>
	);
};

export default Nav;
