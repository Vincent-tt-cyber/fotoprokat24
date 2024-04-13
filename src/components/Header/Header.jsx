import React from "react";
import styles from "./Header.module.scss";
import { SlMenu } from "react-icons/sl";
import { PiChartBarDuotone, PiShoppingCart } from "react-icons/pi";
import { IoIosStarOutline } from "react-icons/io";
import { CiSearch, CiUser } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Header = () => {
  const [starCount, setStarCount] = React.useState(5);
  const [chartCount, setChartCount] = React.useState(7);
  const [cartCount, setCartCount] = React.useState(7);
  return (
    <>
      <header className={styles["header"]}>
        <div className="container">
          <div className={styles["header-row"]}>
            <div className={styles["header-left"]}>
              <SlMenu size={25} className={styles["header-menu__icon"]} />
              <Link to="/" className={styles["header__logo"]}>
                <h2 className={styles["header__logo-text"]}>fotoprokat</h2>
                <span className={styles["header__logo-gradient"]}>24</span>
              </Link>
            </div>
            <div className={styles["header-right"]}>
              <div className={styles["header-phone"]}>
                <h4 className={styles["header-phone__number"]}>
                  +7 495 170-39-18
                </h4>
                <small className={styles["header-phone__text"]}>
                  Круглосуточно
                </small>
              </div>
              <div className={styles["header-star"]}>
                <IoIosStarOutline size={30} />
                <div className={styles["header-star__count"]}>{starCount}</div>
              </div>
              <div className={styles["header-chart"]}>
                <PiChartBarDuotone size={30} />
                <div className={styles["header-chart__count"]}>
                  {chartCount}
                </div>
              </div>
              <div className={styles["header-cart"]}>
                <PiShoppingCart size={30} />
                <div className={styles["header-cart__count"]}>{cartCount}</div>
              </div>
              <div className={styles["header-tools"]}>
                <div className={styles["header-tools__search"]}>
                  <CiSearch size={30} />
                </div>
                <div className={styles["header-tools__user"]}>
                  <CiUser size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
