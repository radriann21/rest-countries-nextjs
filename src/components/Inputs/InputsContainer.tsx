import { InputText } from "@/components/Inputs/InputText"
import { SelectInput } from "./SelectInput"

export const InputsContainer = () => {
  return (
    <section className="w-full sm:max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between mt-12 pl-2 sm:pl-0">
      <InputText />
      <SelectInput />
    </section>
  )
}