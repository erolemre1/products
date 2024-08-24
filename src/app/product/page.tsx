import { getProduct } from "@/services/product";
import ProductScreen from "src/screens/ProductScreen/index";

const ProductPage = async (context: { searchParams: any }) => {
  try {
    const { searchParams } = context;
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
      sortby === "tarih"
        ? "createdAt"
        : sortby === "fiyat"
        ? "price"
        : "";

    const urlParams = new URLSearchParams();
    if (page) {
      urlParams.append("page", page);
      urlParams.append("limit", "12");
    }

    if (search) {
      urlParams.append("search", search);
    }

    if (sortby) {
      urlParams.append("sortby", sortDirection);
    }

    if (order) {
      urlParams.append("order", orderDirection);
    }

    if (brand) {
      urlParams.append("brand", brand);
    }

    if (model) {
      urlParams.append("model", model);
    }
    const url = `?${urlParams.toString()}`;

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
