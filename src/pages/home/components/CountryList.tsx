/* PLUGINS */
import { CircularProgress } from "@mui/material";

/* HOOKS */
import useCountry from "../../../hooks/useCountry"
import useCountryQuery from "../../../hooks/useCountryQuery";

/* COMPONENTS */
import CountryCard from "./CountryCard";

/* STYLES */
import styles from "./CountryList.module.scss";

const CountryList = () => {
    const countryQuery = useCountryQuery(state => state.countryQuery);
    const { data: countries, isLoading } = useCountry(countryQuery);

    return (
        <div className={styles.flags_container}>
            { isLoading && <CircularProgress />}

            {
                !isLoading && countries?.map(country => {
                    return <CountryCard key={country.cca2} country={country} />
                })
            }
        </div>
    )
}

export default CountryList