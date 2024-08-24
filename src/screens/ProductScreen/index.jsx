"use client";

import React, { useEffect, useState } from "react";
import Container from "src/components/grid/container";
import SelectFilter from "@/components/select-filter";
import SearchFilter from "@/components/filters";
import Basket from "@/components/basket";
import TotalPrice from "@/components/total-price";
import Products from "@/components/product";
import { getProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setTotalCount } from "@/store/productSlice";

import styles from "./styles.module.css";

const ProductScreen = ({ pageResponse }) => {
  const dispatch = useDispatch();

  const isProduct = pageResponse?.products?.length > 0;
  const isNotFound = pageResponse?.products === "Not found";
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await getProduct("");
      const brandList = response.map((product) => product.brand);
      const modelList = response.map((product) => product.model);
      await dispatch(
        setTotalCount(
          pageResponse?.totalCount < 12
            ? pageResponse?.totalCount
            : response.length
        )
      );
      const uniqueBrands = [...new Set(brandList)].sort((a, b) =>
        a.localeCompare(b)
      );
      const uniqueModels = [...new Set(modelList)].sort((a, b) =>
        a.localeCompare(b)
      );

      setBrands(uniqueBrands);
      setFilteredBrands(uniqueBrands);
      setModels(uniqueModels);
      setFilteredModels(uniqueModels);
    } catch (error) {
      console.error("Veriler alınırken bir hata oluştu:", error);
    }
  };

  const handleSearchBrand = (term) => {
    if (term) {
      const filtered = brands.filter((brand) =>
        brand.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredBrands(filtered);
    } else {
      setFilteredBrands(brands);
    }
  };

  const handleSearchModel = (term) => {
    if (term) {
      const filtered = models.filter((model) =>
        model.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredModels(filtered);
    } else {
      setFilteredModels(models);
    }
  };

  const handleClickBrand = (e) => {
    setIsOpen(false);
    router.push(`/urunler/?marka=${e.target.value}`);
  };

  const handleClickModel = (e) => {
    setIsOpen(false);
    router.push(`/urunler/?model=${e.target.value}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.hamburgerMenu}>
          <button
            className={`${styles.hamburgerButton} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
          <nav className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
            <SelectFilter title="Sort By" />
            <SearchFilter
              title="Brands"
              handleSearch={handleSearchBrand}
              handleClick={handleClickBrand}
              filteredBrands={filteredBrands}
            />
            <SearchFilter
              title="Models"
              handleSearch={handleSearchModel}
              handleClick={handleClickModel}
              filteredBrands={filteredModels}
            />
          </nav>
        </div>

        {isNotFound && <div>Ürün Bulunamadı</div>}
        {isProduct && !isNotFound && <Products pageResponse={pageResponse} />}
        <div>
          <Basket title="Cart" />
          <TotalPrice title="Checkout" />
        </div>
      </Container>
    </div>
  );
};

export default ProductScreen;
