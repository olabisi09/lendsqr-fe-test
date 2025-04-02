import { ArrowIcon } from "../../icons";
import "./Pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  rowsPerPage: number;
  totalItems: number;
  onRowsPerPageChange: (rowsPerPage: number) => void;
  rowsPerPageOptions?: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  totalItems,
  onRowsPerPageChange,
  rowsPerPageOptions = [10, 20, 50, 100],
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    // Always show first page
    pageNumbers.push(1);

    // Calculate range around current page
    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pageNumbers.push("...");
    }

    // Add pages in the middle range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pageNumbers.push("...");
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <div className="pagination-info">
        Showing
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          className="rows-select"
        >
          {rowsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        out of {totalItems}
      </div>

      <div className="pagination-controls">
        <button
          className="pagination-button prev"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <ArrowIcon />
        </button>

        {getPageNumbers().map((pageNum, index) =>
          typeof pageNum === "number" ? (
            <button
              key={index}
              className={`pagination-button ${
                currentPage === pageNum ? "active" : ""
              }`}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </button>
          ) : (
            <span key={index} className="pagination-ellipsis">
              ...
            </span>
          )
        )}

        <button
          className="pagination-button next"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
