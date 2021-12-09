export type Category = {
  icon: string;
} & ProductCategory;

export type Product = {
  id: number;
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
  categories: ProductCategory[];
};

export type ProductCategory = {
  id: number;
  name: string;
};
