import React from "react";
import Nav from "../Nav/Nav";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <Nav/>
        
      </div>
    </div>
  );
}

export default Home;
