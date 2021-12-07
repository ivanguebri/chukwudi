import "./ProductCardMedia.css";

type ProductCardMediaProps = {
  deliveryRange: string;
  imageName: string;
};

const ProductCardMedia = ({
  deliveryRange,
  imageName,
}: ProductCardMediaProps) => {
  return (
    <div
      className="media-container"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/${imageName}')`,
      }}
    >
      <p className="media-delivery-time">
        <span>{deliveryRange}</span> min
      </p>
    </div>
  );
};
export default ProductCardMedia;
