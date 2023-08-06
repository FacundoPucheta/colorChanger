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
    document.body.style.backgroundColor = randomColor();
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
        style={{ borderColor: borderColor, backgroundColor: phillColor }}
      >
        <section className={styles.randomSection}>
          <button className={styles.randomBtn} onClick={handleLine}>
            <p>- LINE -</p>
          </button>
          <br />
          <button className={styles.randomBtn} onClick={handleMainColor}>
            <p>- OUTSIDE -</p>
          </button>
          <br />
          <button className={styles.randomBtn} onClick={handlePhill}>
            <p> - INSIDE - </p>
          </button>
        </section>
      </div>
    </>
  );
};

export default RandomColor;
