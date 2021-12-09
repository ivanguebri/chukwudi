import { collection, getDocs } from "firebase/firestore/lite";

import { db } from "../../../config/firebase";
import { Category } from "../types";

export const getCategories = async (): Promise<Category[]> => {
  const categoriesCol = collection(db, "categories");
  const categoriesSnapshot = await getDocs(categoriesCol);
  const categoriesList = categoriesSnapshot.docs.map((doc) => doc.data());
  return categoriesList as Category[];
};
