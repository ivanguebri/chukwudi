import { ProductCategory } from "../../types";

import ProductCardContent from "../ProductCardContent";
import ProductCardMedia from "../ProductCardMedia";

type ProductCardProps = {
  deliveryRange: string;
  imageName: string;
  productCategories: ProductCategory[];
  productName: string;
  productPrice: number;
  productRating: number;
};

const ProductCard = ({
  deliveryRange,
  imageName,
  productCategories,
  productName,
  productPrice,
  productRating,
}: ProductCardProps) => {
  return (
    <section>
      <ProductCardMedia deliveryRange={deliveryRange} imageName={imageName} />
      <ProductCardContent
        productCategories={productCategories}
        productName={productName}
        productPrice={productPrice}
        productRating={productRating}
      />
    </section>
  );
};
export default ProductCard;
