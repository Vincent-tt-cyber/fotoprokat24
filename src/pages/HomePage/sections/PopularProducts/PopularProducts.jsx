import React from "react";
import styles from "./PopularProducts.module.scss";
import ProductCard from "../../../../components/ProducCard/ProductCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopularProducts = () => {
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // nexArrow: true,
    // prevArrow: true,
    // responsive: [
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: false,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  const products = [
    {
      id: 1,
      imageUrl:
        "https://c.dns-shop.ru/thumb/st4/fit/500/500/ce1469d9104e9c9127232488f0751e9e/d3edf7deafa8667adc1cdb037e2f6f4d762a3b695ab76cf5f45ef4921094b3e4.jpg.webp",
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
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/0f31008b52caa9e1140e0af9b57c17ee/0e13bd3d5b803b248ea7791408a6b6b2a4efe3c1c6903290f1883fbd43bb8d33.jpg.webp",
      name: "EOS M200 Kit 15-45mm",
      companyName: "Canon",
      workDayPrice: 630,
      freeDayPrice: 750,
      weekPrice: 4380,
      monthPrice: 12250,
    },
    {
      id: 3,
      imageUrl:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/d210af25300ca41cf25102f925ddcb76/765d39b51d63c4da269276361e77e9746faf6cd8d1d9ebbc493c92bc271c6758.jpg.webp",
      name: "EOS M50 Mark II Kit 15-45mm",
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
