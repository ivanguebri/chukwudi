import "./App.css";
import ProductCard from "./modules/shared/components/ProductCard";
import ProductCardMedia from "./modules/shared/components/ProductCardMedia";

function App() {
  return (
    <div className="App">
      <ProductCardMedia deliveryRange="25-30" imageName="fruit-salad.jpeg" />
    </div>
  );
}

export default App;
