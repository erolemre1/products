"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./style.module.css";

const SelectFilter = ({ title }) => {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState("createdAt&sira=asc");

  const options = [
    { value: "tarih&sira=artan", label: "Old to new" },
    { value: "tarih&sira=dusen", label: "New to old" },
    { value: "fiyat&sira=artan", label: "Price low to high" },
    { value: "fiyat&sira=dusen", label: "Price high to low" },
  ];

  const changeSort = (e) => {
    const filterValue = e.target.value;
    setSelectedFilter(filterValue);
    router.push(`/urunler?sirala=${filterValue}`);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>{title}</div>
      <form className={styles.form}>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name="option"
              value={option.value}
              checked={selectedFilter === option.value}
              onChange={changeSort}
            />
            {option.label}
          </label>
        ))}
      </form>
    </div>
  );
};

export default SelectFilter;
