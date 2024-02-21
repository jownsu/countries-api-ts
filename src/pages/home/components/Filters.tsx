/* REACT */
import { KeyboardEvent } from "react";

/* PLUGINS */
import Dropdown from "react-dropdown";

/* HOOKS */
import useCountryQuery from "../../../hooks/useCountryQuery";

/* STYLES */
import styles from "./Filters.module.scss";
import "react-dropdown/style.css";

const FILTER_OPTIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filters = () => {

    const setCountryQuery = useCountryQuery(state => state.setCountryQuery);

    const handleKeyDown = (event: KeyboardEvent) => {
        let input_element = event.target as HTMLInputElement;

        if(event.key === "Enter"){
            if(input_element?.value){
                setCountryQuery("name", input_element.value);
            }
            else{
                setCountryQuery("all");
            }
        }
    };
    
    return (
        <header className={styles.header_container}>
            <div className={styles.input_group}>
                <span></span>
                <input 
                    type="text" 
                    placeholder="Search for a country..." 
                    onKeyDown={handleKeyDown}
                />
            </div>
            <Dropdown 
                className={styles.filter_dropdown}
                options={FILTER_OPTIONS} 
                onChange={({value}) => setCountryQuery("region", value)} 
                placeholder="Filter by Region" 
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
            />
        </header>    
    )
}

export default Filters;