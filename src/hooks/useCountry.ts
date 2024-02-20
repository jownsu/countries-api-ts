/* PLUGINS */
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

/* API */
import APIClient from "../services/apiClient";

/* ENTITIES */
import { Country } from "../entities/Country";

const apiClient = new APIClient<Country[]>("/all");

const useCountry = () => {
    return useQuery({
        queryKey: ["countries"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h")
    });
}

export default useCountry;