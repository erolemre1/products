import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import styles from "./style.module.css";
import Button from "../common/button";
const TotalPrice = ({ title }) => {
  const totalPrice = useSelector((state: RootState) => state.basket.totalPrice);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        <p>
          Total Price: <span className={styles.price}>{totalPrice}₺</span>{" "}
        </p>
        <Button title='checkout' onClick={undefined}/>
      </div>
    </div>
  );
};

export default TotalPrice;
