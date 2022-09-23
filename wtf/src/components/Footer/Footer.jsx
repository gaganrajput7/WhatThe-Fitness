import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { GiPhone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <img src={logo} alt="" />
        <div className={styles.social}>
          {" "}
          <div className={styles.instagram}>
            <BsInstagram />
          </div>
          <div className={styles.facebook}>
            <FaFacebookF />
          </div>
          <div className={styles.linkdin}>
            <ImLinkedin2 />
          </div>
        </div>
      </div>
      <div>
        <h2>Quick Links</h2>
        <p>About</p>
        <p>FAQs</p>
        <p>Privacy Policy</p>
        <p>WTF in News</p>
        <p>Terms & Conditions</p>
        <p>refund & Cancellation</p>
      </div>
      <div>
        <h2>Explore</h2>
        <p>Arenas</p>
        <p>Studios</p>
        <p>Nutrition</p>
      </div>
      <div>
        <h2>Contact</h2>
        <div className={styles.Contact}>
          <div>
            <GoLocation />
          </div>
          <p>
            Ro:S1502 Amrapali Silicon city, Sector 76 Noida, Uttar Pradesh,
            india
          </p>
        </div>
        <div className={styles.Contact}>
          <div>
            <GoLocation />
          </div>
          <p>Ho: C-86: Ground Floor,Sector 8, Noida Uttar Pradesh, India</p>
        </div>
        <div className={styles.Contact}>
          <div>
            <GiPhone />
          </div>
          <p>+919090639005</p>
        </div>
        <div className={styles.Contact}>
          <div>
            <AiOutlineMail />
          </div>
          <p>support@wtfup.me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
