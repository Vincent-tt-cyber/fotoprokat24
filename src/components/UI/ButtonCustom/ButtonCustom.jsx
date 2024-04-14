import React from "react";
import cn from "classnames";
import styles from "./ButtonCustom.module.scss";

const ButtonCustom = ({ children, isPrimary }) => {
  const buttonClass = cn({
    "button-primary": isPrimary,
    "button-secondary": !isPrimary,
  });

  return (
    <>
      <button className={styles[buttonClass]}>{children}</button>
    </>
  );
};

export default ButtonCustom;
