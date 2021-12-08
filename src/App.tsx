import "./App.css";
import ProductCardContent from "./modules/shared/components/ProductCardContent";

function App() {
  return (
    <div className="App">
      <ProductCardContent
        productCategories={["Deli", "Bagels"]}
        productName="Bagel Story"
        productPrice={2.5}
        productRating={4.7}
      />
    </div>
  );
}

export default App;
