import { collection, getDocs } from "firebase/firestore/lite";

import { db } from "../../../config/firebase";
import { Category, Product } from "../types";

export const getCategories = async (): Promise<Category[]> => {
  const categoriesCol = collection(db, "categories");
  const categoriesSnapshot = await getDocs(categoriesCol);
  const categoriesList = categoriesSnapshot.docs.map((doc) => doc.data());
  return categoriesList as Category[];
};

export const getProducts = async (): Promise<Product[]> => {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  const productsList = productsSnapshot.docs.map((doc) => doc.data());
  return productsList as Product[];
};
