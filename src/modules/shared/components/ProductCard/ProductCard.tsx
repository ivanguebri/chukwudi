import ProductCardMedia from "../ProductCardMedia";

type ProductCardProps = {
  deliveryRange: string;
  imageName: string;
};

const ProductCard = ({ deliveryRange, imageName }: ProductCardProps) => {
  return (
    <section>
      <ProductCardMedia deliveryRange={deliveryRange} imageName={imageName} />
    </section>
  );
};
export default ProductCard;
