import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function index({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <ReactPaginate
        previousLabel={'< Previous'}
        nextLabel={'Next >'}
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        containerClassName="flex list-none space-x-2"
        pageClassName="font-sm font-medium text-[#1D1D1D]"
        pageLinkClassName="px-3 py-1 rounded cursor-pointer hover:bg-gray-300"
        previousClassName="font-sm font-medium"
        previousLinkClassName="px-3 py-1 rounded cursor-pointer hover:bg-gray-300"
        nextClassName="font-sm font-medium"
        nextLinkClassName="px-3 py-1 rounded cursor-pointer hover:bg-gray-300"
        breakClassName="page-item"
        breakLinkClassName="px-3 py-1 rounded cursor-pointer hover:bg-gray-300"
        activeClassName="rounded bg-[#5666BE]"
      />
    </div>
  );
};

