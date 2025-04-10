"use client";
import { CountryItem } from "@/components/CountryItem/CountryItem";
import { getAllCountries } from "@/services/getAllCountries";
import { useCountryStore } from "@/providers/CountryStoreProvider";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { PaginationCountries } from "@/components/PaginationCountries/PaginationCountries";

export const CountryContainer = () => {
  const { countries, filteredCountries, setCountries } = useCountryStore(
    (state) => state
  );
  const { isPending, isError, data, error, isFetched } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    enabled: countries.length === 0,
  });

  useEffect(() => {
    if (isFetched && data && countries.length === 0) {
      setCountries(data);
    }
  }, [isFetched, data, countries.length]);

  if (isPending) {
    return (
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
        Loading...
      </span>
    );
  }

  if (isError) {
    return (
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-red-500">
        {error.message}
      </span>
    );
  }

  return (
    <>
      <main className="relative w-full sm:max-w-7xl mx-auto p-2 xl:p-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 place-content-center py-4">
        {filteredCountries.map((country) => (
          <CountryItem key={crypto.randomUUID()} country={country} />
        ))}
      </main>
      <PaginationCountries />
    </>
  );
};
