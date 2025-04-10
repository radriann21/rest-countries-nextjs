"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useCountryStore } from "@/providers/CountryStoreProvider";

export const PaginationCountries = () => {
  const { countries, currentPage, countriesPerPage, setCurrentPage } =
    useCountryStore((state) => state);
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const pageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination className="mx-auto w-fit mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {pageNumber.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            aria-disabled={currentPage === totalPages || totalPages === 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
