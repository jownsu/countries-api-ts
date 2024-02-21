/* COMPONENTS */
import CountryList from "./components/CountryList";
import Filters from "./components/Filters";

const Home = () => {

	return (
		<div id="home_page">
			<Filters />
			<CountryList />
		</div>
	);
};

export default Home;
