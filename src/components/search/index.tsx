"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./styles.module.css";

const Search = () => {
  const router = useRouter();
  const [freeText, setFreeText] = useState("");

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      router.push(`/urunler/?ara=${freeText}`)
    }
  };
  const handleChangeText = (e) => {
    setFreeText(e.target.value);
  };

  const handleClickText = () => {
    router.push(`/urunler/?ara=${freeText}`)
  };

  return (
    <div className={style.searchWrapper}>
      <img src="/assets/Search.svg" alt="Arama" onClick={handleClickText} />
      <input
        type="text"
        placeholder="Search"
        onKeyDown={handleEnterPress}
        value={freeText}
        onChange={handleChangeText}
      />
    </div>
  );
};

export default Search;
