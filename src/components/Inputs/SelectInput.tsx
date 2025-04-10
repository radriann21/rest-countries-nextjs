"use client"
import { Select, SelectTrigger, SelectItem, SelectValue, SelectContent } from "@/components/ui/select"
import { useCountryStore } from "@/providers/CountryStoreProvider"

export const SelectInput = () => {
  const { setFilterRegion } = useCountryStore((state) => state)
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]

  return (
    <Select onValueChange={(value) => setFilterRegion(value)}>
      <SelectTrigger className="p-6 shadow-md mt-6 sm:mt-0">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="text-sm">
        {
          regions.map((region, index) => (
            <SelectItem 
              key={index} 
              value={region.toLowerCase()}>
                {region}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}