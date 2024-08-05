import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function index({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        containerClassName="flex flex-wrap justify-center list-none space-x-2"
        pageClassName="font-sm font-medium text-[#1D1D1D] sm:mx-1 mx-0.5"
        pageLinkClassName="px-3 py-1 rounded cursor-pointer hover:bg-gray-300 sm:mx-1 mx-0.5"
        previousClassName="font-sm font-medium sm:mx-1 mx-0.5"
        previousLinkClassName="px-3 py-1 rounded cursor-pointer hover:bg-gray-300 sm:mx-1 mx-0.5"
        nextClassName="font-sm font-medium sm:mx-1 mx-0.5"
        nextLinkClassName="px-3 py-1 rounded cursor-pointer hover:bg-gray-300 sm:mx-1 mx-0.5"
        breakClassName="page-item sm:mx-1 mx-0.5"
        breakLinkClassName="px-3 py-1 rounded cursor-pointer hover:bg-gray-300 sm:mx-1 mx-0.5"
        activeClassName="rounded bg-[#5666BE] sm:mx-1 mx-0.5"
      />
    </div>
  );
}
