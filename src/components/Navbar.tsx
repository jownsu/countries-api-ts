/* COMPONENTS */
import { Link } from "react-router-dom";

/* STYLES */
import styles from "./Navbar.module.scss";

interface Props {
	onDarkModeClick: () => void;
}

const Navbar = ({ onDarkModeClick }: Props) => {
	return (
		<nav className={styles.country_nav}>
			<div className={styles.container}>
				<Link to="/">
					<h1>Where in the world?</h1>
				</Link>
				<button type="button" onClick={onDarkModeClick}>
					<span></span> Dark Mode
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
