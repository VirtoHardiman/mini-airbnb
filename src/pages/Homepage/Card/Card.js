import React from "react";
import { MdOutlineStar } from "react-icons/md";

import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageCardWrapper}>
        <img
          src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80"
          alt="card cover"
          className={styles.imageCard}
        />
      </div>
      <div className={styles.cardHeading}>
        <p className={styles.placeName}>Jakarta, Indonesia</p>
        <div className={styles.ratingWrapper}>
          <MdOutlineStar alt="rating icon" className={styles.starIcon} />
          <p className={styles.rating}>4.86</p>
        </div>
      </div>
      <p className={styles.distance}>916 kilometers away</p>
      <p className={styles.availableDate}>Jan 9-14</p>
      <p className={styles.price}>
        <b>$207</b> night
      </p>
    </div>
  );
};

export default Card;
