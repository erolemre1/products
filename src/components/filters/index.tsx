"use client";
import React, { useEffect, useState } from "react";
import { getProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import SearchFilter from "@/components/search-filter";
import styles from "./style.module.css";

const SelectFilter = ({ title, handleSearch, handleClick, filteredBrands }) => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>{title}</div>
      <div className={styles.form}>
        <SearchFilter onChange={handleSearch} />
        <div className={styles.scrollContainer}>
          {filteredBrands?.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                name="brand"
                value={brand}
                onClick={handleClick}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectFilter;
