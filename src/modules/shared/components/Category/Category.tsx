import { Category as CategoryType } from "../../types";
import "./Category.css";

type CategoryProps = {
  category: CategoryType;
  handleSelectCategory: (selectedCategory: CategoryType) => void;
  isSelected: boolean;
};

const Category = ({
  category,
  handleSelectCategory,
  isSelected,
}: CategoryProps) => {
  return (
    <section
      className={`category-container ${isSelected ? "selected" : ""}`}
      onClick={() => handleSelectCategory(category)}
    >
      <div className="category-icon-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/${category.icon}`}
          alt="Food type icon"
        />
      </div>
      <span className="category-text">{category.name}</span>
    </section>
  );
};

export default Category;
