/* PLUGINS */
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

/* API */
import APIClient from "../services/apiClient";

/* ENTITIES */
import { Country } from "../entities/Country";
import { CountryQuery } from "./useCountryQuery";


const useCountry = (countryQuery: CountryQuery) => {
    const apiClient = new APIClient<Country[]>(`/${countryQuery.key}/${countryQuery.value}`);

    return useQuery({
        queryKey: ["countries", countryQuery],
        queryFn: apiClient.getAll,
        staleTime: ms("24h")
    });
}

export default useCountry;