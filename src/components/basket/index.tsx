import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBasketItems, setBasketItemsTotalPrice } from "@/store/basketSlice";
import { RootState } from "@/store/store";

import styles from "./style.module.css";

const Basket = ({ title }) => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const calculateTotalPrice = (cart) => {
    return cart.reduce(
      (total, product) => total + parseFloat(product.price) * product.count,
      0
    );
  };
  const fetchCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("basket")) || [];
    dispatch(setBasketItems(cart));
    dispatch(setBasketItemsTotalPrice(calculateTotalPrice(cart)));
  };

  useEffect(() => {
    fetchCartItems();
  }, [dispatch]);

  const handleUpdateBasket = (item, type) => {
    const updatedBasket = basketItems
      .map((basketItem) => {
        if (basketItem.id === item.id) {
          const updatedCount =
            type === "asc"
              ? basketItem.count + 1
              : basketItem.count > 1
              ? basketItem.count - 1
              : 0;

          if (updatedCount === 0) {
            return null;
          }

          return {
            ...basketItem,
            count: updatedCount,
          };
        }
        return basketItem;
      })
      .filter((item) => item !== null);

    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    dispatch(setBasketItems(updatedBasket));
    dispatch(setBasketItemsTotalPrice(calculateTotalPrice(updatedBasket)));
  };

  return (
   <div>
      <h2 className={styles.title}>{title}</h2>
     <div className={styles.wrapper}>
      <ul className={styles.list}>
        {basketItems.length > 0 ? (
          basketItems.map((item) => (
            <li key={item.id} className={styles.basketItem}>
              <div>
                <p className={styles.name}>{item.name} </p>
                <p className={styles.price}>{item.price} ₺</p>
              </div>
              <span className={styles.flexContainer}>
                <span
                  onClick={() => handleUpdateBasket(item, "desc")}
                  className={styles.updateButton}
                >
                  -
                </span>
                <p className={styles.count}>{item.count}</p>
                <span
                  onClick={() => handleUpdateBasket(item, "asc")}
                  className={styles.updateButton}
                >
                  +
                </span>
              </span>
            </li>
          ))
        ) : (
          <p>Sepet boş.</p>
        )}
      </ul>
    </div>
   </div>
  );
};

export default Basket;
