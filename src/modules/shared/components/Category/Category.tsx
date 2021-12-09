import "./Category.css";

type CategoryProps = {
  iconPath: string;
  iconText: string;
  isSelected: boolean;
};

const Category = ({ iconPath, iconText, isSelected }: CategoryProps) => {
  return (
    <section className={`category-container ${isSelected ? "selected" : ""}`}>
      <div className="category-icon-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/${iconPath}`}
          alt="Food type icon"
        />
      </div>
      <span className="category-text">{iconText}</span>
    </section>
  );
};

export default Category;
