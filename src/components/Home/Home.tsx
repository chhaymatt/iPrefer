import styles from "./Home.module.scss";
const Home = () => {
	return (
		<div className={styles.Container}>
			<p>
				Welcome, get started by tapping one of the links in the
				navigation.
			</p>
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
