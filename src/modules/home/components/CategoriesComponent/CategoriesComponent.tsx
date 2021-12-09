import "./CategoriesComponent.css";

import { Category as CategoryType } from "../../../shared/types";

import Category from "../../../shared/components/Category";

type CategoriesComponentProps = {
  categories: CategoryType[];
  handleSelectCategory: (category: CategoryType) => void;
  selectedCategory: CategoryType;
};

const CategoriesComponent = ({
  categories,
  handleSelectCategory,
  selectedCategory,
}: CategoriesComponentProps) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          handleSelectCategory={handleSelectCategory}
          isSelected={category === selectedCategory}
        />
      ))}
    </div>
  );
};
export default CategoriesComponent;
