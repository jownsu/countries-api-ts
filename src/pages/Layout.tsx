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
			<Outlet />
		</>
	);
};

export default Layout;
