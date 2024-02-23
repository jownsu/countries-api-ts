/* PLUGINS */
import { Link } from "react-router-dom";

/* HOOKS */
import useBorders from "../../../hooks/useBorders";

/* ENTITIES */
import { CountryDetails } from "../../../entities/CountryDetails";

/* COMPONENTS */
import BorderSkeleton from "./BorderSkeleton";

/* STYLES */
import styles from "./Country.module.scss";


interface Props {
    country?: CountryDetails
}

const border_skeletons = [1, 2, 3];

const Country = ({ country }: Props) => {
    const { data: borders, isLoading } = useBorders(country?.borders || [], country?.cca3);
    
    return (
        country && (
            <div className={styles.country_details}>
                <img src={country.flags.png} alt={country.flags.alt} />
                <div>
                    <p className={styles.country_name}>{country.name.common}</p>
                    <div className={styles.country_info}>
                        <div>
                            <p>Native Name: <span>{Object.values(country.name.nativeName)[0].common}</span></p>
                            <p>Population: <span>{country.population}</span></p>
                            <p>Region: <span>{country.region}</span></p>
                            <p>Sub Region: <span>{country.subregion}</span></p>
                            <p>Capital: <span>{country.capital}</span></p>
                        </div>
                        <div>
                            <p>Top Level Domain: <span>{country.tld}</span></p>
                            <p>Currencies: <span>{Object.values(country.currencies)[0].name}</span></p>
                            <p>Languages: <span>{Object.values(country.languages).join(", ")}</span></p>
                        </div>
                    </div>
                    <div className={styles.country_borders}>
                        <p>Border Countries:</p> 
                        <div>

                            {
                                isLoading
                                    ? border_skeletons.map(i => <BorderSkeleton key={i} />)
                                    : borders?.map(country => (
                                        <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Country;