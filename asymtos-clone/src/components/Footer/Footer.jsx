import React from "react";
import "../style.css";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import LinkedIn from "../../assets/linked-in.svg";

const Footer = () => {
  return (
<div id="footer">
  <div class="social-icons">
    <img src={Facebook} alt="Facebook" />
    <img src={Twitter} alt="Twitter" />
    <img src={LinkedIn} alt="LinkedIn" />
  </div>
  <br />
  <span>&copy; Copyright 2023 Asymtos</span>
</div>

  );
};

export default Footer;
