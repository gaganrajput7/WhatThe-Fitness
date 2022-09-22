import React from "react";
import Filter from "../Gym/FilterSection";
import Gym from "../Gym/Gym";
import Search from "../Gym/Search";
import Nav from "../Nav/Nav";
import styles from "./Home.module.css";
import banner2 from '../../images/banner2.PNG'
function Home() {
 
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <Nav />
      </div>
      <div className={styles.bodyC}>
        <div>
          <Search />
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.FilterSection}>
            <Filter />
          </div>
          <div className={styles.gymCard}>
            <Gym/>
          </div>
        </div>
      </div>
      <div className={styles.banner2}><img src={banner2} alt="" /></div>
    </div>
  );
}

export default Home;
