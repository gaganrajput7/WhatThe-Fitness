import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Gym.module.css";
import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
function SingleGym() {
  const { id } = useParams();
  const [data, setData] = useState();
  const gym = JSON.parse(localStorage.getItem("gym"));
  const payload = {
    gym_id: id,
  };

  useEffect(() => {
    axios
      .post(`https://devapi.wtfup.me/gym/plan`, payload)
      .then(({ data }) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(gym);

  return (
    <div className={styles.gymBanner}>
      <div className={styles.gymRating}>
        <div>
          <h1>{gym.gym_name}</h1>
          <p>
            <GoLocation />
            <span>{gym.address1}</span>,<span>{gym.address2}</span>,{" "}
            <span>{gym.city}</span>
          </p>
        </div>
        <div className={styles.ratingDiv}>
          <p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </p>
          <p>{gym.total_rating} Rating</p>
        </div>
      </div>
      <div className={styles.membership}>
        <div className={styles.membershipChil1}>
          <h2>Description</h2>
          <p>{gym.description}</p>
          <br />
          <p>Faclities</p>
          <p>
            {gym.benefits.length > 0
              ? gym.benefits.map((elem, ind) => {
                  return (
                    <span key={ind}>
                      <span>{elem.name}</span> ,
                    </span>
                  );
                })
              : ""}
          </p>
          <br />
          <h3>Why To Choose WTF?</h3>
        <div className={styles.gymTerm}>
        <div>WTF Term</div>
        <div>shj</div>
        <div>sfdsf</div>
        <div>sdfg</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SingleGym;
