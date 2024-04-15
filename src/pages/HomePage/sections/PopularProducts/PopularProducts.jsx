import React from "react";
import styles from "./PopularProducts.module.scss";
import ProductCard from "../../../../components/ProducCard/ProductCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopularProducts = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // cssEase: "linear",
    // nexArrow: true,
    // prevArrow: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
            <Slider className={styles["slider-wrapper"]} {...settings}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
