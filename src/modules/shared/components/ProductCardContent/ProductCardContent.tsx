import "./ProductCardContent.css";

import RatingStar from "../RatingStar";

type ProductCardContentProps = {
  productCategories: string[];
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
          <>
            <span className="product-category" key={productCategory}>
              {productCategory}
            </span>
            <span className="product-category product-category-separator">
              •
            </span>
          </>
        ))}
        <span className="product-price">${productPrice}</span>
      </div>
    </section>
  );
};
export default ProductCardContent;
