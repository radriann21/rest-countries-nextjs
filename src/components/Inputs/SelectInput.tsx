import { Select, SelectTrigger, SelectItem, SelectValue, SelectContent } from "@/components/ui/select"

export const SelectInput = () => {
  return (
    <Select>
      <SelectTrigger className="p-6 shadow-md mt-6 sm:mt-0">
        <SelectValue placeholder="Filter by Region">Filter by Region</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="america">America</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  )
}