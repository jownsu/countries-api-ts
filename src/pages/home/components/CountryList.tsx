
import useCountry from "../../../hooks/useCountry";
import useCountryQuery from "../../../hooks/useCountryQuery";

/* COMPONENTS */
import CountryCard from "./CountryCard";
import CountryCardSkeleton from "./CountryCardSkeleton";

/* STYLES */
import styles from "./CountryList.module.scss";

const card_skeleton = [1, 2, 3, 4, 5, 6];

const CountryList = () => {
    const countryQuery = useCountryQuery(state => state.countryQuery);
    const { data: countries, isLoading } = useCountry(countryQuery);

    return (
        <div className={styles.flags_container}>
            { isLoading && card_skeleton.map(key => <CountryCardSkeleton key={key}/>) }

            {
                !isLoading && countries?.map(country => {
                    return <CountryCard key={country.cca2} country={country} />
                })
            }
        </div>
    )
}

export default CountryList