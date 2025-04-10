import { createStore } from "zustand/vanilla"

export type CountryState = {
  countries: Countries,
  filteredCountries: Countries,
  filterName: string,
  filterRegion: string,
  currentPage: number,
  countriesPerPage: number
}

export type CountryActions = {
  setCountries: (countries: Countries) => void,
  setFilterRegion: (region: string) => void,
  setFilterName: (name: string) => void,
  setCurrentPage: (page: number) => void
}

export type CountryStore = CountryState & CountryActions

export const initCountryStore = (): CountryState => {
  return { 
    countries: [],
    filteredCountries: [],
    filterName: '',
    filterRegion: '',
    currentPage: 1,
    countriesPerPage: 12,
  }
}

export const defaultInitialState: CountryState = {
  countries: [],
  filteredCountries: [],
  filterName: '',
  filterRegion: '',
  currentPage: 1,
  countriesPerPage: 12,
}

export const createCountryStore = (initState: CountryState = defaultInitialState) => {
  return createStore<CountryStore>()((set) => ({
    ...initState,
    setCountries: (countries) => set((state) => {
      const initialPage = 1
      const initialStartIndex = (initialPage - 1) * state.countriesPerPage
      const initialEndIndex = initialStartIndex + state.countriesPerPage
      const initialFilteredCountries = countries.slice(initialStartIndex, initialEndIndex)
      return {
        countries,
        filteredCountries: initialFilteredCountries,
        currentPage: initialPage
      }
    }), 
    setFilterName: (name) => set((state) => {
      let filtered = [...state.countries]
      if (name && name.trim() !== '') {
        filtered = filtered.filter(country => 
          country.name.common.toLowerCase().includes(name.toLowerCase())
        )
      }
      const startIndex = (state.currentPage - 1) * state.countriesPerPage
      const endIndex = startIndex + state.countriesPerPage
      return { filteredCountries: filtered.slice(startIndex, endIndex) }
    }),
    setFilterRegion: (region) => set((state) => {
      let filtered = [...state.countries]
      if (region && region !== 'all') {
        filtered = filtered.filter(country => 
          country.region.toLowerCase() === region.toLowerCase()
        )
      }
      const startIndex = (state.currentPage - 1) * state.countriesPerPage
      const endIndex = startIndex + state.countriesPerPage
      return { filteredCountries: filtered.slice(startIndex, endIndex) }
    }),
    setCurrentPage: (page: number) => set((state) => {
      const filtered = [...state.countries]; 
      let filteredByNameAndRegion = filtered;
    
      if (state.filterName && state.filterName.trim() !== '') {
        filteredByNameAndRegion = filteredByNameAndRegion.filter(country => 
          country.name.common.toLowerCase().includes(state.filterName.toLowerCase())
        );
      }
    
      if (state.filterRegion && state.filterRegion !== 'all') {
        filteredByNameAndRegion = filteredByNameAndRegion.filter(country => 
          country.region.toLowerCase() === state.filterRegion.toLowerCase()
        );
      }
    
      const start = (page - 1) * state.countriesPerPage;
      const end = start + state.countriesPerPage;
      const paginatedFiltered = filteredByNameAndRegion.slice(start, end);
    
      return { 
        filteredCountries: paginatedFiltered, 
        currentPage: page 
      };
    }),
  }))
}
