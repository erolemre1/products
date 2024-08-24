import { getProduct } from "@/services/product";
import ProductScreen from "src/screens/ProductScreen/index";

const buildUrlParams = (searchParams) => {
  const {
    sayfa: page,
    ara: search,
    sirala: sortby,
    sira: order,
    marka: brand,
    model,
  } = searchParams;

  const orderDirection = order === "artan" ? "asc" : "desc";
  const sortDirection =
    sortby === "tarih" ? "createdAt" : sortby === "fiyat" ? "price" : "";

  const urlParams = new URLSearchParams();
  if (page) urlParams.append("page", page);
  if (search) urlParams.append("search", search);
  if (sortby) urlParams.append("sortby", sortDirection);
  if (order) urlParams.append("order", orderDirection);
  if (brand) urlParams.append("brand", brand);
  if (model) urlParams.append("model", model);
  urlParams.append("limit", "12");

  return urlParams.toString();
};

const ProductPage = async (context) => {
  try {
    const { searchParams } = context;
    const url = `?${buildUrlParams(searchParams)}`;

    const response = await getProduct(url);
    const pageResponse = {
      products: response,
      totalCount: response.length,
    };

    return <ProductScreen pageResponse={pageResponse} />;
  } catch (error) {
    console.error("error:", error);
    return <div>Ürünler yüklenirken bir hata oluştu.</div>;
  }
};

export default ProductPage;
