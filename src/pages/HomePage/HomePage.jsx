import React from "react";
import MainSection from "./sections/MainSection/MainSection";
import PopularProducts from "./sections/PopularProducts/PopularProducts";
import CatalogSection from "./sections/CatalogSection/CatalogSection";

const HomePage = () => {
  return (
    <>
      <MainSection />
      <PopularProducts />
      <CatalogSection />
    </>
  );
};

export default HomePage;
