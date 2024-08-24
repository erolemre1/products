import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Button from "src/components/common/button";
import { setBasketItems, setBasketItemsTotalPrice } from "@/store/basketSlice";
import styles from "./styles.module.css";

const Card = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const calculateTotalPrice = (cart) => {
    return cart.reduce(
      (total, product) => total + parseFloat(product.price) * product.count,
      0
    );
  };
  const addBasketItem = (item) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    const existingItemIndex = basket.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex > -1) {
      basket[existingItemIndex].count += 1;
    } else {
      const cartItem = {
        id: item.id,
        name: item.name,
        price: parseFloat(item.price),
        count: 1,
      };

      basket.push(cartItem);
    }

    dispatch(setBasketItems(basket || []));
    dispatch(setBasketItemsTotalPrice(calculateTotalPrice(basket)));
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  return (
    <div className={styles.cardWrapper}>
      <img
        src={item.image}
        alt={item.name}
        className={styles.image}
        onClick={() => router.push(`/urunler/${item.id}`)}
      />
      <p className={styles.price}>{item.price} ₺</p>
      <p className={styles.name}>{item.name}</p>
      <p className={styles.model}>{item.brand}</p>
      <Button onClick={() => addBasketItem(item)} title='Add To Cart' />
    </div>
  );
};

export default Card;
