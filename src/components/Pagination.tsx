interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-center justify-center gap-4"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="group/btn cursor-pointer rounded-xl border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm transition-all duration-200 
        enabled:hover:bg-purple-50 enabled:hover:border-purple-400 enabled:active:scale-95 
        disabled:cursor-not-allowed disabled:opacity-40 flex items-center gap-1"
      >
       
        <span className="inline-block transition-all duration-300 transform translate-x-1 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 group-disabled/btn:opacity-0 group-disabled/btn:translate-x-1 font-bold">
          ←
        </span>
        Previous
      </button>

      <span
        aria-live="polite"
        className="min-w-12 rounded-xl bg-purple-600 px-4 py-2 text-center font-extrabold text-white shadow-md shadow-purple-200/60 border border-purple-500"
      >
        {currentPage}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="group/btn cursor-pointer rounded-xl border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm transition-all duration-200 
        enabled:hover:bg-purple-50 enabled:hover:border-purple-400 enabled:active:scale-95 
        disabled:cursor-not-allowed disabled:opacity-40 flex items-center gap-1"
      >
        Next
        <span className="inline-block transition-all duration-300 transform -translate-x-1 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 group-disabled/btn:opacity-0 group-disabled/btn:-translate-x-1 font-bold">
          →
        </span>
      </button>
    </nav>
  );
}

export default Pagination;
