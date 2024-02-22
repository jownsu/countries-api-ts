export interface CountryDetails {
    name: { 
        common: string,
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        }
    },
    flags: {
        png: string,
        alt: string
    },
    population: number,
    region: string,
    subregion: string,
    tld: string [],
    languages: {
        [key: string]: string
    },
    currencies: {
        [key: string]: {
            name: string,
            symbol: string
        }
    },
    capital: string[],
    cca3: string,
    borders: string[]
}