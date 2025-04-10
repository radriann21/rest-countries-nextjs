"use client"
import { type ReactNode, createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { type CountryStore, createCountryStore, initCountryStore } from "@/stores/CountryStore"

export type CountryStoreApi = ReturnType<typeof createCountryStore>

export const CountryStoreContext = createContext<CountryStoreApi | null>(null)

export interface CountryStoreProviderProps {
  children: ReactNode
}

export const CountryStoreProvider = ({ children }: CountryStoreProviderProps) => {
  const storeRef = useRef<CountryStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createCountryStore(initCountryStore())
  }

  return (
    <CountryStoreContext.Provider value={storeRef.current}>
      {children}
    </CountryStoreContext.Provider>
  )
}

export const useCountryStore = <T,>(selector: (store: CountryStore) => T): T => {
  const countryStoreContext = useContext(CountryStoreContext)
  if (countryStoreContext === null) {
    throw new Error('useCountryStore must be used within a CountryStoreProvider')
  }
  return useStore(countryStoreContext, selector)
}
