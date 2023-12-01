import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
    <button
      key={page}
      className={` px-4 py-2 border rounded ${currentPage === page ? "bg-gray-200" : ""}`}
      onClick={() => handlePageClick(page)}
    >
      {page}
    </button>
  ));

  return <div className="flex justify-center space-x-2 mb-12 mt-3">{pageNumbers}</div>;
};

export default Pagination;
