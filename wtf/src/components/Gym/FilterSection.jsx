import axios from "axios";
import React from "react";
import styles from './Gym.module.css'
function Filter({ setData, data }) {
  

  return (
    <>
      <h1>Filters</h1>
      <p>Location</p>
      <input type="text" placeholder="Enter location"  />

      <div>
        <p>Price</p>
        <div id={styles.price}>
          <input type="number" placeholder="Min" />
          <input type="number" placeholder="Max" />
        </div>
      </div>
      <p>Cities</p>
      <select name="City" id="" >
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