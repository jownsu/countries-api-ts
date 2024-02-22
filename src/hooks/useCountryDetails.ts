/* PLUGINS */
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ms from "ms";

/* API */
import APIClient from "../services/apiClient";

/* ENTITIES */
import { CountryDetails } from "../entities/CountryDetails";

interface CountryQueryError {
    status: number;
    message: string;
}

const apiClient = new APIClient<CountryDetails>(`/alpha`);

const useCountryDetails = (countryCode: string) => {

    return useQuery<CountryDetails, AxiosError<CountryQueryError>>({
        queryKey: ["countryDetails", countryCode],
        queryFn: () => apiClient.get(
            countryCode, 
            true, 
            {
                params: {
                    fields: "name,flags,population,region,subregion,tld,languages,currencies,capital,cca3,borders"
                }
            }
        ),
        staleTime: ms("24h")
    });
}

export default useCountryDetails;