import React, { useEffect } from "react";

import { getCategories } from "../../../shared/services/firestore";

import { RootState } from "../../../../store";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategory } from "../../homeSlice";

import { Category } from "../../../shared/types";
import CategoriesComponent from "../../components/CategoriesComponent";

const CategoriesContainer = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const selectedCategory = useSelector(
    (state: RootState) => state.home.currentCategory
  );
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
    dispatch(
      setCurrentCategory(
        categories.find(
          (category) => category.name.toLowerCase() === "all"
        ) as Category
      )
    );
  };

  const handleSelectCategory = (selectedCategory: Category) => {
    dispatch(setCurrentCategory(selectedCategory));
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
