import React from "react";
import styles from "./MainSection.module.scss";
import ButtonCustom from "../../../../components/UI/ButtonCustom/ButtonCustom";
import { IoIosList } from "react-icons/io";
import { CiClock2, CiCreditCard1, CiLocationArrow1 } from "react-icons/ci";
import { TiLocation } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
import { PiPackageThin } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const MainSection = () => {
  const mainInfoData = [
    {
      id: 1,
      text: "Самый большой выбор техники",
      icon: <IoIosList size={32} />,
    },
    {
      id: 2,
      text: "Быстрое оформление заказа",
      icon: <CiClock2 size={32} />,
    },
    {
      id: 3,
      text: "Можно забрать заказ в пункте выдачи",
      icon: <CiLocationArrow1 size={32} />,
    },
    {
      id: 4,
      text: "Доставка в любую точку Москвы",
      icon: <PiPackageThin size={32} />,
    },
    {
      id: 5,
      text: "Оплата картой и наличными",
      icon: <CiCreditCard1 size={32} />,
    },
  ];

  return (
    <>
      <section className={styles["main-section"]}>
        <div className="container">
          <div className={styles["main-section-row"]}>
            <div className={styles["main-section__description"]}>
              <h1>
                <span>Аренда </span>
                Фото
              </h1>
              <h1>И видео</h1>
              <h1>оборудования</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["main-section-info"]}>
        <div className="container">
          <div className={styles["main-section-info-row"]}>
            {mainInfoData.map((item) => (
              <div key={item.id} className={styles["main-section-info__item"]}>
                <div className={styles["main-section-info__item-icon"]}>
                  {item.icon}
                </div>
                <p className={styles["main-section-info__item-text"]}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
