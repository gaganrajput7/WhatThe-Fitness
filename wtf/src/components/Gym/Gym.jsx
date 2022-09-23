import React from "react";
import styles from "./Gym.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiNavigation } from "react-icons/fi";
import { json, useNavigate } from "react-router-dom";
function Gym({ data }) {
  const navigate = useNavigate();

  const navigator = (elem) => {
    localStorage.setItem("gym", JSON.stringify(elem));
    navigate(`/${elem.user_id}`);
  };
  return (
    <>
      {data &&
        data.map((elem) => {
          return (
            <div
              className={styles.gymDetails}
              key={elem.user_id}
              onClick={() => navigator(elem)}
            >
              <div className={styles.imgDiv}>
                <img
                  src="https://wallsdesk.com/wp-content/uploads/2016/10/Gym-for-desktop.jpg"
                  alt=""
                />
              </div>
              <div className={styles.gymDetails1}>
                <div className={styles.gymName}>
                  <h3>{elem.gym_name}</h3>
                  <p>
                    {elem.rating > 0 ? (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </>
                    ) : (
                      <>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </>
                    )}
                  </p>
                  <p>
                    <span>{elem.address1}</span>, <span>{elem.address2}</span>,{" "}
                    <span>{elem.city}</span>
                  </p>
                  <p>
                    <FiNavigation />
                    <span>{elem.duration_text}</span> |{" "}
                    <span>{elem.distance_text}</span>
                  </p>
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
