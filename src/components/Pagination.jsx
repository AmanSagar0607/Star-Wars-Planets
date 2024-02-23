import React from 'react';

function Pagination({ currentPage, onPageChange }) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevClick} disabled={currentPage === 1}>Prev</button>
      <span className="pageNo">Page {currentPage}</span>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Pagination;
