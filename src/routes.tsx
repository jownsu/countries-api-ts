/* PLUGINS */
import { createBrowserRouter } from "react-router-dom";

/* COMPONENTS */
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import CountryDetails from "./pages/CountryDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "countries/:id",
				element: <CountryDetails />
			}
		]
	}
]);

export default router;
