"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setProducts } from "@/store/productSlice";
import Button from "../common/button";
import Basket from "../basket";
import TotalPrice from "../total-price";
import { setBasketItems, setBasketItemsTotalPrice } from "@/store/basketSlice";

import styles from "./styles.module.css";

const ProductDetail = ({ pageResponse }) => {
  const dispatch = useDispatch();
  const { description, image, price, name } = pageResponse;
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(setProducts(pageResponse));
    };
    fetchProducts();
  }, [dispatch, pageResponse]);

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
    <div className={styles.flexContainer}>
      <div className={styles.cardWrapper}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.descWrapper}>
          <p>{name}</p>
          <p className={styles.price}>{price} ₺</p>
          <div className={styles.buttonWrapper}>
            <Button
              onClick={() => addBasketItem(pageResponse)}
              title="Add To Cart"
            />
          </div>
          {description}
        </div>
      </div>
      <div>
        <Basket title="Cart" />
        <TotalPrice title="Checkout" />
      </div>
    </div>
  );
};

export default ProductDetail;
