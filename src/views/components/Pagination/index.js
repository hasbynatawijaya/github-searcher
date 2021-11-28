import React from "react";

import "./style.scss";

const Pagination = ({
  currentPage,
  setCurrentPage,
  total,
  pageLimit,
  dataLimit,
}) => {
  const [pages] = React.useState(Math.round(total / dataLimit));

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pages <= pageLimit ? pages : pageLimit)
      .fill()
      .map((_, idx) => start + idx + 1);
  };

  return (
    <div className="pagination">
      <button
        onClick={goToPreviousPage}
        className={`pagination__nav ${
          currentPage === 1 ? "pagination__item--disabled" : ""
        }`}
      >
        Previous
      </button>
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`pagination__item ${
            currentPage === item ? "pagination__item--active" : null
          }`}
        >
          <span>{item}</span>
        </button>
      ))}
      <button
        onClick={goToNextPage}
        className={`pagination__nav ${
          currentPage === pages ? "pagination__item--disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
