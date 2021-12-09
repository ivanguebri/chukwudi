import React from "react";

import { getProducts } from "../../../shared/services/firestore";

import { Product } from "../../../shared/types";

const ProductsContainer = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return <>ProductsContainer</>;
};
export default ProductsContainer;
