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
    <nav>
      <ul>
        <li>
          <a onClick={prevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber}>
            <a onClick={() => setCurrentPage(pgNumber)} href="#">
              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
