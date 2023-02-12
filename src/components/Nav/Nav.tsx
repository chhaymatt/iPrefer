import { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss"

const Nav = () => {
    const [showNavMenu, setShowNavMenu] = useState(false)

    const handleNav = () => setShowNavMenu(!showNavMenu)
    const handleCloseNav = () => setShowNavMenu(false)

    return (
        <>
            <nav className={styles.Nav}>
                <NavLink
                    to="/"
                    className={styles.Logo}
                    onClick={handleCloseNav}
                >
                    iPrefer
                </NavLink>
                <div className={styles.MenuIcon} onClick={handleNav}>
                    <i
                        className={showNavMenu ? `fas fa-times` : `fas fa-bars`}
                    />
                </div>
                <ul
                    className={
                        showNavMenu
                            ? `${styles.Menu} ${styles.active}`
                            : styles.Menu
                    }
                >
                    <li className={styles.Item}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.Link__Active}`
                                    : styles.Link
                            }
                            onClick={handleCloseNav}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.Item}>
                        <NavLink
                            to="/games"
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.Link__Active}`
                                    : styles.Link
                            }
                            onClick={handleCloseNav}
                        >
                            Games
                        </NavLink>
                    </li>
                    <li className={styles.Item}>
                        <NavLink
                            to="/food"
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.Link__Active}`
                                    : styles.Link
                            }
                            onClick={handleCloseNav}
                        >
                            Food
                        </NavLink>
                    </li>
                    <li className={styles.Item}>
                        <NavLink
                            to="/create-your-own"
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.Link__Active}`
                                    : styles.Link
                            }
                            onClick={handleCloseNav}
                        >
                            <div>Create Your Own</div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
