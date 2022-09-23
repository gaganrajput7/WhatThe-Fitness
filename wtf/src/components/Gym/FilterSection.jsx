import axios from "axios";
import React, { useState } from "react";
import styles from "./Gym.module.css";
function Filter({ data, setData, show }) {
  const [flag, setFlag] = useState(true);
  const handleChange = (e) => {
    const { value } = e.target;
    axios
      .get(
        `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${value}`
      )
      .then(({ data }) => (data ? setData(data.data) : "No Data"))
      .catch((err) => console.log(err));
    setFlag(false);
  };

  const searchByPlace = (e) => {
    const { value } = e.target;

    data = data.filter((ele) =>
      ele.address1.toUpperCase().includes(value.toUpperCase())
    );

    setData(data);
  };
  const handleReset = () => {
    setFlag(true);
    window.location.reload();
  };
  return (
    <>
      <div className={styles.reset}>
        <h1>Filters</h1>
        <button
          className={flag ? styles.resetbtn : styles.resetbutton}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <p>Location</p>
      <input
        type="text"
        placeholder="Enter location"
        onChange={searchByPlace}
      />

      <div>
        <p>Price</p>
        <div id={styles.price}>
          <input type="number" placeholder="Min" />
          <input type="number" placeholder="Max" />
        </div>
      </div>
      <p>Cities</p>
      <select name="City" id="" onChange={handleChange}>
        <option>City</option>
        <option value="Delhi">Delhi</option>
        <option value="Noida">Noida</option>
        <option value="New Delhi">New Delhi</option>
        <option value="Ghaziabad">Ghaziabad</option>
      </select>
    </>
  );
}

export default Filter;
