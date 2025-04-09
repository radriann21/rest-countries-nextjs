import { CountryItem } from "@/components/CountryItem/CountryItem"

export const CountryContainer = async () => {

  const data = await fetch("https://restcountries.com/v3.1/all")
  const countries:Countries = await data.json()

  return (
    <main className="w-full sm:max-w-7xl mx-auto p-2 xl:p-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 place-content-center">
      {
        countries.map(country => (
          <CountryItem key={crypto.randomUUID()} country={country} />
        ))
      }
    </main>
  )
}