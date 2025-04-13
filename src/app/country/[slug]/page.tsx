import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import countries from "i18n-iso-countries"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const response = await fetch(`https://restcountries.com/v3.1/alpha/${slug}`)
  const data = await response.json()
  const country:CountryItem = data[0]

  if (!country) return <h1>Loading...</h1>

  return (
    <section className="max-w-7xl mx-auto flex flex-col py-8 px-4 dark:text-white text-very-dark-blue-light-mode">
      <div className="w-full">
        <Link href="/">
          <Button className="flex items-center space-x-2 shadow-md w-24 rounded-sm text-very-dark-blue-light-mode bg-white dark:bg-dark-blue dark:text-white cursor-pointer dark:hover:bg-dark-blue/60 hover:shadow-sm hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
        </Link>
      </div>
      <section className="w-full flex flex-col md:flex-row items-center mt-16 gap-10">
        <div className="w-full md:w-[40%]">
          <Image 
            className="w-full h-full object-contain"
            src={country.flags.svg}
            alt={country.name.common}
            width={520}
            height={520}
          />
        </div>
        <div className="flex flex-col w-full md:w-[60%]">
          <h3 className="text-3xl font-bold">{country.name.common}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            <div className="space-y-4 col-span-1">
              <p>Native Name: <span className="text-gray-700 dark:text-gray-400">{Object.values(country.name.nativeName)[0].common}</span></p>
              <p>Population: <span className="text-gray-700 dark:text-gray-400">{country.population.toLocaleString()}</span></p>
              <p>Region: <span className="text-gray-700 dark:text-gray-400">{country.region}</span></p>
              <p>Sub Region: <span className="text-gray-700 dark:text-gray-400">{country.subregion}</span></p>
              <p>Capital: <span className="text-gray-700 dark:text-gray-400">{country.capital[0]}</span></p>
            </div>
            <div className="space-y-4 col-span-1">
              <p>Top Level Domain: <span className="text-gray-700 dark:text-gray-400">{country.tld[0]}</span></p>
              <p>Currencies: <span className="text-gray-700 dark:text-gray-400">{Object.values(country.currencies)[0].name}</span></p>
              <p>Languages: <span className="text-gray-700 dark:text-gray-400">{Object.values(country.languages).join(', ')}</span></p>
            </div>
          </div>
          <div className="mt-10 flex items-center">
            <h3 className="text-lg font-bold mr-4">Border Countries:</h3>
            {
              !country.borders
              ? <p className="text-gray-700 dark:text-gray-400">No border countries</p>
              : <div className="flex items-center gap-2 flex-wrap">
                {
                  country.borders?.map(border => (
                    <Link className="py-1 px-4 rounded-sm bg-gray-200 dark:bg-dark-blue dark:text-white cursor-pointer dark:hover:bg-dark-blue/60 hover:shadow-sm text-sm" key={border} href={`/country/${border}`}>
                      {countries.getName(border, 'en', {select: 'official'})}
                    </Link>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </section>
    </section>
  )
}
