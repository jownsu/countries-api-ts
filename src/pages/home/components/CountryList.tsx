/* PLUGINS */
import { CircularProgress } from "@mui/material";

/* HOOKS */
import useCountry from "../../../hooks/useCountry"

/* COMPONENTS */
import CountryCard from "./CountryCard";

/* STYLES */
import styles from "./CountryList.module.scss";

const CountryList = () => {
    const { data: countries, isLoading } = useCountry();

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