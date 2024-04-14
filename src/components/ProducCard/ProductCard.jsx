import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className={styles["card"]}>
        <div className="card__cover">
          <img src={product.imageUrl} />
        </div>
        <h1 className={styles["card__title"]}>{product.name}</h1>
      </div>
    </>
  );
};

export default ProductCard;
