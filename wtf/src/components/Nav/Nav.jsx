import React from "react";
import styles from "./Styles.module.css";
import logo from "../../images/logo.png";
function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.navContainer}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <p>Fitness</p>
          <p>Nutrition</p>
          <p>Gyms</p>
          <p>Become WTF Partner</p>
          <p>About Us</p>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
