import ProductDetail from "@/components/product-detail";
import Container from "src/components/grid/container";

const ProductDetailScreen = ({ pageResponse }) => {
  return (
    <Container>
      <ProductDetail pageResponse={pageResponse} />
    </Container>
  );
};

export default ProductDetailScreen;
