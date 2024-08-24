import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import styles from "./styles.module.css";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = useSelector(
    (state: RootState) => state.product.totalCount
  );
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("sayfa")) || 1;
    setCurrentPage(page);
  }, []);

  const generatePagination = () => {
    const pages = [];
    let showEllipsis = false;

    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        pages.push(
          <a
            href={`/urunler?sayfa=${currentPage}`}
            key={i}
            className={styles.activePage}
          >
            {i}
          </a>
        );
        showEllipsis = true;
      } else if (i <= 3 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        pages.push(
          <a href={`/urunler?sayfa=${i}`} key={i}>
            {i}
          </a>
        );
        showEllipsis = true;
      } else if (showEllipsis) {
        pages.push(
          <a
            href={`/urunler?sayfa=${currentPage}`}
            key={i}
            style={{ pointerEvents: "none" }}
          >
            ...
          </a>
        );
        showEllipsis = false;
      }
    }

    return pages;
  };
  const isPrevIcon = currentPage > 1;
  const isNextIcon = totalPages > currentPage;
  return (
    <div className={styles.paginationWrapper}>
      {isPrevIcon && <a href={`/urunler?sayfa=${currentPage - 1}`}>{"<"}</a>}
      {generatePagination()}
      {isNextIcon && <a href={`/urunler?sayfa=${currentPage + 1}`}> {">"}</a>}
    </div>
  );
}

export default Pagination;
