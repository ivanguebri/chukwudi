import "./HomePage.css";

import Hero from "../../../shared/components/Hero";
import Burger from "../../../shared/components/Burger";
import DeliveryContainer from "../../containers/DeliveryContainer";
import CategoriesContainer from "../../containers/CategoriesContainer";
import ProductsContainer from "../../containers/ProductsContainer";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <section className="hero-container">
        <Hero />
      </section>
      <section className="products-container">
        <div className="products-header-container">
          <h2 className="products-header">
            Restaurants <Burger className="burger" />
          </h2>
          <DeliveryContainer />
        </div>
        <CategoriesContainer />
        <ProductsContainer />
      </section>
    </div>
  );
};
export default HomePage;
