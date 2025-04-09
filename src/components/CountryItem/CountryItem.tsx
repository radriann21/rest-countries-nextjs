export const CountryItem = ({ country }: { country: CountryItem }) => {
  return (
    <article className="text-sm rounded-md shadow-md flex flex-col">
      <img className="rounded-t-md w-full h-[180px] object-cover" src={country.flags.png} alt={country.name.common} />
      <section className="mt-2 p-4">
        <h3 className="text-lg font-bold">{country.name.common}</h3>
        <ul className="mt-2">
          <li className="flex items-center space-x-1">
            <span className="font-bold">Population:</span>
            <span>{country.population}</span>
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
  )
}