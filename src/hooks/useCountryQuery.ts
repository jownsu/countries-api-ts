import { create } from "zustand";

export interface CountryQuery {
    key: string,
    value?: string
}

interface CountryQueryStore {
    countryQuery: CountryQuery,
    setCountryQuery: (key: "all" | "name" | "region", value?: string) => void
}

const useCountryQuery = create<CountryQueryStore>((set) => ({
    countryQuery: {
        key: "all",
        value: ""
    },
    setCountryQuery: (key: string, value?: string) => 
        set(() => ({
            countryQuery: { key, value: value ?? ""}
        }))
}));


export default useCountryQuery;