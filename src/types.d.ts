type CountryItem = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
      }
    }
  },
  tld: string[],
  capital: string[],
  region: string,
  subregion: string,
  languages: {
    [key: string]: string;
  },
  population: number,
  flags: {
    png: string;
  },
  currencies: {
    [key: string]: {
      name: string;
    }
  },
  borders?: string[],
}

type Countries = CountryItem[]