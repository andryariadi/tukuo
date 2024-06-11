"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
};

const Pagination = ({ currentPage, hasPrev, hasNext }: PaginationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    replace(`${pathName}?${params}`);
  };

  return (
    <div className="flex gap-5">
      <button
        className="text-logo px-4 py-2 rounded-md border border-logo cursor-pointer disabled:bg-[#FF7B33] disabled:cursor-not-allowed hover:bg-logo hover:text-n-2 transition-all duration-300"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Prev
      </button>

      <button
        className="text-logo px-4 py-2 rounded-md border border-logo cursor-pointer disabled:bg-[#FF7B33] disabled:cursor-not-allowed hover:bg-logo hover:text-n-2 transition-all duration-300"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
