import React from "react";
import Filter from "../Gym/FilterSection";
import Gym from "../Gym/Gym";
import Search from "../Gym/Search";
import Nav from "../Nav/Nav";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <Nav />
      </div>
      <div className={styles.body}>
        <div>
          <Search />
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.FilterSection}>
            <Filter />
          </div>
          <div>
            <Gym />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
