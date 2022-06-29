import React, { useEffect, useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { getProductsWithPagination } from "../../store/action-creators/getProductsWithPagination";

//styles
import "./pagination.scss";

const Pagination = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3];
  const dispatch = useDispatch();

  const handlePagination = (page) => {
    setCurrentPage(page);
    switch (page) {
      case 1:
        setLimit(10);
        setOffset(0);
        break;
      case 2:
        setLimit(10);
        setOffset(10);
        break;

      case 3:
        setLimit(10);
        setOffset(20);
        break;
    }
  };

  useEffect(() => {
    dispatch(getProductsWithPagination(limit, offset));
  }, [currentPage]);
  return (
    <div className="pagination__container">
      <div className="pagination__btns">
        {pages.map((page) => (
          <div
            className={`pagination__btns-item ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => handlePagination(page)}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
