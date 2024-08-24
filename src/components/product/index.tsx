"use client";

import { useEffect } from "react";
import { setProducts, setTotalCount } from "@/store/productSlice";
import Card from "src/components/common/card";
import Pagination from "src/components/pagination";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import styles from "./styles.module.css";

const Product = ({ pageResponse }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      if (pageResponse.totalCount) {
        await dispatch(setProducts(pageResponse.products));
      }
    };
    fetchProducts();
  }, [dispatch, pageResponse?.products]);
  const products = useSelector((state: RootState) => state.product.products);

  return (
    <div className={styles.flexContainer}>
      {products?.slice(0, 12)?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      <Pagination />
    </div>
  );
};

export default Product;
