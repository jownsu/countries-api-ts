/* PLUGINS */
import { Link } from "react-router-dom";

/* ENTITIES */
import { Country } from "../../../entities/Country";

/* STYLES */
import styles from "./CountryCard.module.scss";

interface Props {
    country: Country
}

const CountryCard = ({ country }: Props) => {
    return (
        <Link to={`country/${country.cca2}`} className={styles.flag_card}>
        <img src={country.flags.png} alt={country.flags.alt} />
        <div>
            <p className={styles.country_name}>{country.name.common}</p>
            <p>
                Population:
                <span> {country.population}</span>
            </p>
            <p>
                Region:
                <span> {country.region}</span>
            </p>
            <p>
                Capital:
                <span> {country.capital}</span>
            </p>
        </div>
    </Link>
    )
}

export default CountryCard