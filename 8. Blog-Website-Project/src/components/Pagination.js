import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageNumber, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center border-2 bg-white fixed bottom-0">
      <div className="flex flex-row justify-between w-11/12 py-2 max-w-2xl">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="px-4 py-1 rounded-md border-2"
              onClick={() => handlePageNumber(page - 1)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="px-4 py-1 rounded-md border-2"
              onClick={() => handlePageNumber(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
