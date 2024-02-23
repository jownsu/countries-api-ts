/* PLUGINS */
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { AxiosError } from "axios";

/* DATA */
import countries from "../data/countries";

/* API */
import APIClient from "../services/apiClient";

/* ENTITIES */
import { Country } from "../entities/Country";
import { CountryQuery } from "./useCountryQuery";

interface CountryQueryError {
    status: number;
    message: string;
}

const useCountry = (countryQuery: CountryQuery) => {
    const apiClient = new APIClient<Country[]>(`/${countryQuery.key}/${countryQuery.value}`);

    return useQuery<Country[], AxiosError<CountryQueryError>>({
        queryKey: ["countries", countryQuery],
        queryFn: () => apiClient.getAll({
            params: {
                fields: "name,population,region,capital,flags,cca3"
            }
        }),
        staleTime: ms("24h"),
        initialData: countries
    });
}

export default useCountry;