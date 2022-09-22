import React from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import { FiNavigation } from "react-icons/fi";
import styles from "./Gym.module.css";
function Search() {
  return (
    <div>
      <div className={styles.inputbox}>
        <MdSearch fontSize={25} color="white"/>
        <input type='text' placeholder="Search gym name here..."  />
        <button className={styles.searchbtn1}>
          <MdLocationOn fontSize={25} />
        </button>
        <button className={styles.searchbtn2}>Clear</button>
      </div>
    </div>
  );
}

export default Search;
