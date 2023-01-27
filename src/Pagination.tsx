/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center container-fluid">
        <li className="page-item">
          <a className="page-link text-dark" onClick={prevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            className={`page-item ${currentPage == pgNumber ? "active" : ""}`}
            key={pgNumber}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link bg-dark text-light"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={nextPage} className="page-link text-dark" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
