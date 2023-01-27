import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

// Notes
// For the home link, it requires end attribute
// When using the same component across different pages, add a key attribute otherwise it won't re-render.
const Nav = () => {
	return (
		<nav className={styles.Nav}>
			<div>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.Active : styles.Link
					}
					to="/"
					end>
					iPrefer
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.Active : styles.Link
					}
					to="/games">
					Games
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.Active : styles.Link
					}
					to="/food">
					Food
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
