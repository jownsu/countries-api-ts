/* PLUGINS */
import { Link, useParams } from "react-router-dom";

/* HOOKS */
import useCountryDetails from "../../hooks/useCountryDetails";
import useBorders from "../../hooks/useBorders";

/* STYLES */
import styles from "./Country.Details.module.scss";

const CountryDetails = () => {

	const { code } = useParams();
	const { data } = useCountryDetails(code!);
	const { data: border_countries } = useBorders(data?.borders || [], data?.cca3);

	return (
		<>
			<Link to="/" className={styles.back_btn}><span></span>Back</Link>
			{
				data && (
					<div className={styles.country_details}>
						<img src={data.flags.png} alt={data.flags.alt} />
						<div>
							<p className={styles.country_name}>{data.name.common}</p>
							<div className={styles.country_info}>
								<div>
									<p>Native Name: <span>{Object.values(data.name.nativeName)[0].common}</span></p>
									<p>Population: <span>{data.population}</span></p>
									<p>Region: <span>{data.region}</span></p>
									<p>Sub Region: <span>{data.subregion}</span></p>
									<p>Capital: <span>{data.capital}</span></p>
								</div>
								<div>
									<p>Top Level Domain: <span>{data.tld}</span></p>
									<p>Currencies: <span>{Object.values(data.currencies)[0].name}</span></p>
									<p>Languages: <span>{Object.values(data.languages).join(", ")}</span></p>
								</div>
							</div>
							<div className={styles.country_borders}>
								<p>Border Countries:</p> 
								<div>
									{border_countries?.map(country => (
										<Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				)
			}
		</>
	);
};

export default CountryDetails;
