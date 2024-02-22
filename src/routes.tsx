/* PLUGINS */
import { createBrowserRouter } from "react-router-dom";

/* COMPONENTS */
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import CountryDetails from "./pages/details/CountryDetails";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "country/:code",
				element: <CountryDetails />
			}
		]
	}
]);

export default router;
