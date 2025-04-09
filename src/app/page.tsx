import { InputsContainer } from "@/components/Inputs/InputsContainer"
import { CountryContainer } from "@/components/CountryContainer/CountryContainer"

export default function Home() {
  return (
    <main className="max-w-full bg-very-light-gray">
      <InputsContainer />
      <CountryContainer />
    </main>
  )
}

