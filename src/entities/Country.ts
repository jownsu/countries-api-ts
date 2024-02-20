export interface Country {
    name: { common: string },
    population: number,
    region: string,
    capital: string[],
    flags: {
        png: string,
        alt: string
    },
    cca2: string
}