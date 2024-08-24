import { getProduct } from "@/services/product";
import ProductDetailScreen from 'src/screens/ProductDetailScreen/index'

const ProductDetailPage = async ({ searchParams }) => {
  const {id} = searchParams
  const pageResponse = await getProduct(`/${id}`);
  
  return <ProductDetailScreen pageResponse={pageResponse} /> ;
};

export default ProductDetailPage;
