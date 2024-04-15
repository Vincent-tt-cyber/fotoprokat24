import React from "react";
import styles from "./ProductCard.module.scss";
import { IoIosStarOutline } from "react-icons/io";
import { PiChartBarDuotone } from "react-icons/pi";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className={styles["card"]}>
        <nav className={styles["card__nav"]}>
          <button className={styles["card__btn-chart"]}>
            <PiChartBarDuotone size={30} />
          </button>
          <button className={styles["card__btn-star"]}>
            <IoIosStarOutline size={30} />
          </button>
        </nav>
        <div className={styles["card__cover"]}>
          <img src={product.imageUrl} />
        </div>
        <h1 className={styles["card__title"]}>{product.name}</h1>
      </div>
    </>
  );
};

export default ProductCard;
