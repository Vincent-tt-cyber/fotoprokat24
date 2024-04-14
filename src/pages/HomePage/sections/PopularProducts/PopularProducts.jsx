import React from "react";
import styles from "./PopularProducts.module.scss";
import Slider from "react-slick";
import ProductCard from "../../../../components/ProducCard/ProductCard";

const PopularProducts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = [
    {
      id: 1,
      imageUrl:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/fbd7d085192ebe3eb518905892fddb3d/a6965dcbddcec201c585a38bfdc5f489c8d2621bca568fb91ce1231f088e8abd.jpg",
      name: "Canon EOS R100 Kit",
      companyName: "Canon",
      workDayPrice: 630,
      freeDayPrice: 750,
      weekPrice: 4380,
      monthPrice: 12250,
    },
    {
      id: 2,
      imageUrl:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/fbd7d085192ebe3eb518905892fddb3d/a6965dcbddcec201c585a38bfdc5f489c8d2621bca568fb91ce1231f088e8abd.jpg",
      name: "Canon EOS R100 Kit",
      companyName: "Canon",
      workDayPrice: 630,
      freeDayPrice: 750,
      weekPrice: 4380,
      monthPrice: 12250,
    },
    {
      id: 3,
      imageUrl:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/fbd7d085192ebe3eb518905892fddb3d/a6965dcbddcec201c585a38bfdc5f489c8d2621bca568fb91ce1231f088e8abd.jpg",
      name: "Canon EOS R100 Kit",
      companyName: "Canon",
      workDayPrice: 630,
      freeDayPrice: 750,
      weekPrice: 4380,
      monthPrice: 12250,
    },
  ];
  return (
    <>
      <section className={styles["popular-products"]}>
        <div className="container">
          <h2 className={styles["popular-products__title"]}>
            <span className={styles["popular-products__title-gradient"]}>
              Популярные{" "}
            </span>
            товары
          </h2>
          <div className={styles["popular-products-row"]}>
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
