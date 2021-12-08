import { collection, getDocs } from "firebase/firestore/lite";

import { db } from "../../../config/firebase";

export const getCategories = async () => {
  const categoriesCol = collection(db, "categories");
  const categoriesSnapshot = await getDocs(categoriesCol);
  const categoriesList = categoriesSnapshot.docs.map((doc) => doc.data());
  return categoriesList;
};
