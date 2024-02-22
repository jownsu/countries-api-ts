/* PLUGINS */
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ms from "ms";

/* API */
import APIClient from "../services/apiClient";

/* ENTITIES */
import { Border } from "../entities/Border";

interface CountryQueryError {
    status: number;
    message: string;
}

const apiClient = new APIClient<Border[]>("/alpha");
const useBorders = (codes: string[], country?: string) => {
    return useQuery<Border[], AxiosError<CountryQueryError>>({
        queryKey: ["borders", country],
        queryFn: () => {
            if(codes.length){
                return apiClient.getAll({
                    params: {
                        codes: codes.join(),
                        fields: "name,cca3"
                    }
                })
            }

            return [];
        },
        staleTime: ms("24h")
    });
}

export default useBorders;