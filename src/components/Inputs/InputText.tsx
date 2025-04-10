"use client"
import { Search } from "lucide-react"
import { useCountryStore } from "@/providers/CountryStoreProvider"

export const InputText = () => {
  const { setFilterName } = useCountryStore(state => state)
  
  return (
    <div className="relative">
      <Search className="absolute left-3 translate-y-1/2 bottom-1/2 w-5 h-5 stroke-dark-gray" />
      <input 
        onChange={(evt) => setFilterName(evt.currentTarget.value)}
        className="w-[340px] sm:w-[450px] pt-4 pb-4 pl-12 rounded-md shadow-md text-sm placeholder:text-sm bg-white dark:bg-dark-blue text-very-dark-blue-light-mode dark:text-white border-none active:outline-0 focus:outline-0" 
        type="text" 
        placeholder="Search for a country..." 
      /> 
    </div>  
  )
}