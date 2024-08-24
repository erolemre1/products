"use client";
import React from "react";
import Container from "../grid/container";
import Search from "src/components/search";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import styles from "./styles.module.css";
const Header = () => {
  const totalPrice = useSelector((state: RootState) => state.basket.totalPrice);
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerItemWrapper}>
          <h1 className={styles.title}>
            <a href="/">Eteration</a>{" "}
          </h1>
          <div className={styles.profileWrapper}>
          <Search />
          <div className={styles.profile}>
            {totalPrice > 0 && (
              <div className={styles.profilePrice}>
                <img src="/assets/Portfeil.svg" alt="Fiyat" />
                <span> {totalPrice}₺</span>
              </div>
            )}
            <div className={styles.profile}>
              <img src="/assets/Profile.svg" alt="Kullanıcı" />
              <span> Emre</span>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
