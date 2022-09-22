import React from "react";
import styles from "./Gym.module.css";
function Gym() {
  let data = [1, 2, 3];
  return (
    <>
      {data.map((elem) => {
        return (
          <div className={styles.gymDetails}>
            <div className={styles.imgDiv}>
              <img
                src="https://wallsdesk.com/wp-content/uploads/2016/10/Gym-for-desktop.jpg"
                alt=""
              />
            </div>
            <div className={styles.gymDetails1}>
              <div className={styles.gymName}>
                <h3>WTF:Hybrid Gym</h3>
                <p>Star</p>
                <p>ADDRESS</p>
                <p>TIME</p>
              </div>
              <div className={styles.buttonDiv}>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Gym;
