import React from "react";
import styles from "./CatalogSection.module.scss";
import ButtonCustom from "../../../../components/UI/ButtonCustom/ButtonCustom";
import CardImage1 from "../../../../assets/images/card-image-1.jpg";
import CardImage2 from "../../../../assets/images/card-image-2.jpg";
import CardImage3 from "../../../../assets/images/card-image-3.jpg";
import CardImage4 from "../../../../assets/images/card-image-4.jpg";
import CardImage5 from "../../../../assets/images/card-image-5.jpg";

const CatalogSection = () => {
  const catalogCardsInfo = [
    {
      id: 1,
      imageUrl: CardImage1,
      title: "Фотокамеры Canon",
      price: "от 3000 рублей",
    },
    {
      id: 2,
      imageUrl: CardImage2,
      title: "Видеокамеры",
      price: "по 200 рублей в сутки",
    },
    {
      id: 3,
      imageUrl: CardImage3,
      title: "Товар недели",
      price: "всего за 4000 рублей",
    },
    {
      id: 4,
      imageUrl: CardImage4,
      title: "Лучшие объективы",
      price: "по 700 рублей",
    },
    {
      id: 5,
      imageUrl: CardImage5,
      title: "Отличные фотокамеры",
      price: "за 1500 рублей",
    },
  ];

  return (
    <>
      <section className={styles["catalog-section"]}>
        <div className="container">
          <h1 className={styles["catalog-section__title"]}>
            Вы{" "}
            <span className={styles["catalog-section__title-gradient"]}>
              ищете
            </span>{" "}
            что-то конкретное?
          </h1>
          <p className={styles["catalog-section__text"]}>
            Проект{" "}
            <b className={styles["catalog-section__text-bold"]}>Fotoprokat24</b>{" "}
            является агрегатором предложений всех фотопрокатов Москвы и служит
            для Вашего удобства. Выберете необходимую категорию, либо начните
            поиск по названию. Оформив заказ, Вы сможете забрать его из Пункта
            Выдачи, либо заказать доставку в любую точку Москвы.
          </p>
          <div className={styles["catalog-section__buttons"]}>
            <ButtonCustom isPrimary>Перейти в Каталог</ButtonCustom>
            <ButtonCustom>Приступить к поиску</ButtonCustom>
          </div>
          <div className={styles["catalog-section__grid"]}>
            {catalogCardsInfo.map((item) => (
              <div
                className={styles["catalog-section__card"]}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <h3 className={styles["catalog-section__card-title"]}>
                  {item.title}
                </h3>
                <h3 className={styles["catalog-section__card-price"]}>
                  {item.price}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogSection;
