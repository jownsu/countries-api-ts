/* PLUGINS */
import { Link, useParams } from "react-router-dom";

/* COMPONENTS */
import Country from "./component/Country";
import CountrySkeleton from "./component/CountrySkeleton";

/* HOOKS */
import useCountryDetails from "../../hooks/useCountryDetails";

/* STYLES */
import styles from "./Country.Details.module.scss";

const CountryDetails = () => {

	const { code } = useParams();
    const { data: country, isLoading } = useCountryDetails(code!);
	
	return (
		<>
			<Link to="/" className={styles.back_btn}><span></span>Back</Link>
			{
				isLoading
					? <CountrySkeleton />
					: <Country country={country} />
			}			
		</>
	);
};

export default CountryDetails;
