import "./ProductCard.css";

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
      <div className="product-card-media-container">
        <ProductCardMedia deliveryRange={deliveryRange} imageName={imageName} />
      </div>
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
