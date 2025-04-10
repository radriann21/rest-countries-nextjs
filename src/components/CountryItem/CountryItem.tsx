"use client"
import Link from "next/link"

export const CountryItem = ({ country }: { country: CountryItem }) => {
  return (
    <Link href={`/country/${country.name.common.toLowerCase().trim()}`} className="cursor-pointer duration-200 transition-all hover:scale-105 shadow-md hover:shadow-lg">
      <article className="text-sm rounded-md flex flex-col dark:bg-dark-blue">
        <img className="rounded-t-md w-full h-[180px] object-cover" src={country.flags.png} alt={country.name.common} />
        <section className="mt-2 p-4">
          <h3 className="text-lg font-bold">{country.name.common}</h3>
          <ul className="mt-2">
            <li className="flex items-center space-x-1">
              <span className="font-bold">Population:</span>
              <span>{country.population.toLocaleString()}</span>
            </li>
            <li className="flex items-center space-x-1">
              <span className="font-bold">Region:</span>
              <span>{country.region}</span>
            </li>
            <li className="flex items-center space-x-1">
              <span className="font-bold">Capital:</span>
              <span>{country.capital}</span>
            </li>
          </ul>
        </section>
      </article>
    </Link>
  )
}