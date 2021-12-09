import React, { useEffect } from "react";

import { getCategories } from "../../../shared/services/firestore";

import { Category } from "../../../shared/types";
import CategoriesComponent from "../../components/CategoriesComponent";

const CategoriesContainer = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<Category>();

  const fetchCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
    setSelectedCategory(
      categories.find((category) => category.name.toLowerCase() === "all")
    );
  };

  const handleSelectCategory = (selectedCategory: Category) => {
    setSelectedCategory(selectedCategory);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesComponent
      categories={categories}
      handleSelectCategory={handleSelectCategory}
      selectedCategory={selectedCategory as Category}
    />
  );
};
export default CategoriesContainer;
