import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

type ProductCardProps = {
  imageName: string;
};

const CustomCardMedia = () => {
  return <p>Hello!</p>;
};

const ProductCard = ({ imageName }: ProductCardProps) => {
  return (
    <Card>
      <CardMedia component={CustomCardMedia} />
    </Card>
  );
};
export default ProductCard;
