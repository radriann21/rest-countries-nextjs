import { Search } from "lucide-react"

export const InputText = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 translate-y-1/2 bottom-1/2 w-5 h-5 stroke-dark-gray" />
      <input 
        className="w-[340px] sm:w-[450px] pt-4 pb-4 pl-12 rounded-md shadow-md text-sm placeholder:text-sm bg-white text-very-dark-blue-light-mode border-none active:outline-0 focus:outline-0" 
        type="text" 
        placeholder="Search for a country..." 
      /> 
    </div>  
  )
}