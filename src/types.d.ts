type CountryItem = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string,
        official: string
      }
    }
  },
  tld: string[],
  cca3: string,
  capital: string[],
  region: string,
  subregion: string,
  languages: {
    [key: string]: string;
  },
  population: number,
  flags: {
    png: string,
    svg: string
  },
  currencies: {
    [key: string]: {
      name: string;
    }
  },
  borders?: string[],
}

type Countries = CountryItem[]

type ErrorObject = {
  error: boolean;
  message: string;
}