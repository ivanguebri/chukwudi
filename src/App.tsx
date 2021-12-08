import "./App.css";
import ProductCard from "./modules/shared/components/ProductCard";

function App() {
  return (
    <div className="App">
      <ProductCard
        deliveryRange="25-40"
        imageName="fruit-salad.jpeg"
        productCategories={[
          { id: 1, name: "Deli" },
          { id: 2, name: "Bagels" },
        ]}
        productName="Bagel Story"
        productPrice={2.5}
        productRating={4.7}
      />
    </div>
  );
}

export default App;
