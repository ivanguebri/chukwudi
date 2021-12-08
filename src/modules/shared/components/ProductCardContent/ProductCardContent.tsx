import "./ProductCardContent.css";

import { ProductCategory } from "../../types";

import RatingStar from "../RatingStar";

type ProductCardContentProps = {
  productCategories: ProductCategory[];
  productName: string;
  productPrice: number;
  productRating: number;
};

const ProductCardContent = ({
  productCategories,
  productName,
  productPrice,
  productRating,
}: ProductCardContentProps) => {
  return (
    <section className="product-card-content-container">
      <h3 className="product-name">{productName}</h3>
      <div className="product-info">
        <span className="product-rating">
          <RatingStar className="rating-star" /> {productRating}
        </span>
        {productCategories.map((productCategory) => (
          <p className="product-category" key={productCategory.id}>
            <span>{productCategory.name}</span>
            <span className="product-category-separator">•</span>
          </p>
        ))}
        <span className="product-price">${productPrice}</span>
      </div>
    </section>
  );
};
export default ProductCardContent;
