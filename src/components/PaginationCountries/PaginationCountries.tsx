"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { useCountryStore } from "@/providers/CountryStoreProvider";

export const PaginationCountries = () => {
  const { countries, currentPage, countriesPerPage, setCurrentPage } =
    useCountryStore((state) => state);

  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const getVisiblePages = (currentPage:number, totalPages:number) => {
    const delta = 1; 
    const range = [];

    if (totalPages > 1) {
      range.push(1);
    }

    if (currentPage - delta > 2) {
      range.push("...");
    }

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

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

        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof page === "number") {
                    setCurrentPage(page)
                  }
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            aria-disabled={currentPage === totalPages || totalPages === 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
