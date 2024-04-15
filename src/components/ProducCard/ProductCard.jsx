import React from "react";
import styles from "./ProductCard.module.scss";
import { IoIosStarOutline } from "react-icons/io";
import { PiChartBarDuotone } from "react-icons/pi";
import ButtonCustom from "../../components/UI/ButtonCustom/ButtonCustom.jsx";

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(price);
  };

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
        <div>
          <h1 className={styles["card__title"]}>{product.name}</h1>
          <p className={styles["card__company"]}>{product.companyName}</p>
        </div>
        <ul className={styles["card-price__list"]}>
          <li className={styles["card-price__item"]}>
            <h4 className={styles["card-price__title"]}>
              {formatPrice(product.workDayPrice)}
            </h4>
            <span className={styles["card-price__subtitle"]}>Будний</span>
          </li>
          <li className={styles["card-price__item"]}>
            <h4 className={styles["card-price__title"]}>
              {formatPrice(product.freeDayPrice)}
            </h4>
            <span className={styles["card-price__subtitle"]}>Выходной</span>
          </li>
          <li className={styles["card-price__item"]}>
            <h4 className={styles["card-price__title"]}>
              {formatPrice(product.weekPrice)}
            </h4>
            <span className={styles["card-price__subtitle"]}>Неделя</span>
          </li>
          <li className={styles["card-price__item"]}>
            <h4 className={styles["card-price__title"]}>
              {formatPrice(product.monthPrice)}
            </h4>
            <span className={styles["card-price__subtitle"]}>Месяц</span>
          </li>
        </ul>
        <div className={styles["card__btns"]}>
          <ButtonCustom>Подробнее</ButtonCustom>
          <ButtonCustom isPrimary>В корзину</ButtonCustom>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
