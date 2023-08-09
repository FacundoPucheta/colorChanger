import { useState } from "react";
import styles from "./RandomColor.module.css";

const RandomColor = () => {
  const [phillColor, setPhillColor] = useState("#ffffff");
  const [borderColor, setBorderColor] = useState("#ffffff");

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };

  const handleMainColor = () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
  };

  const handlePhill = () => {
    const newColor = randomColor();
    setPhillColor(newColor);
  };

  const handleLine = () => {
    const newColor = randomColor();
    setBorderColor(newColor);
  };

  return (
    <>
      <div
        className={styles.random}
        style={{ backgroundColor: phillColor, borderColor: borderColor }}
      >
        <section className={styles.randomSection}>
          <button className={styles.mainBtn} onClick={handleLine}>
            <p>- LINE -</p>
          </button>
          <br />
          <button className={styles.mainBtn} onClick={handleMainColor}>
            <p>- OUTSIDE -</p>
          </button>
          <br />
          <button className={styles.mainBtn} onClick={handlePhill}>
            <p> - INSIDE - </p>
          </button>
        </section>
      </div>
    </>
  );
};

export default RandomColor;
