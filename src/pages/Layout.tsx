/* PLUGINS */
import { Outlet } from "react-router-dom";

/* COMPONENTS */
import Navbar from "../components/Navbar";

/* HOOKS */
import useDarkMode from "../hooks/useDarkMode";

const Layout = () => {
	const { toggleDarkMode } = useDarkMode();

	return (
		<>
			<Navbar onDarkModeClick={toggleDarkMode} />
			<div className="container">
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
