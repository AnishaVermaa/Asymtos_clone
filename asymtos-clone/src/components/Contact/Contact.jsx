import React from "react";
import "../style.css"; // Import CSS file for styling
import location from "../../assets/location.svg"
import message from "../../assets/message.svg"
import phone from "../../assets/phone.svg"
function Contact() {
  return (
    <div id="contact">

      <div className="item full-width">
        <h2>Contact <span>TEAM</span></h2>
        <p>Get in touch with us. Feel Free to use contact below</p>
      </div>

      <div className="item half-width s1">
        <form action="/submit_form" method="post" id="form">
          <div className="input1">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter First Name"
            />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter Last Name"
            />
          </div>

          <textarea
            id="message"
            name="message"
            placeholder="Enter Message"
          ></textarea>
          <br />
          <input type="submit" value="Submit" id="btn" />
        </form>
      </div>

      <div className="item half-width s2">
        <p>
          <img src={location} alt="" />
          Susanne-von-Paczensky 11
          <br />
          22765, Hamburg, Germany
          <br />
         <hr />
          </p>
          <p>
          <img src={phone} alt="" />
          +49-162-2647612
          <hr />
          </p>
          <p>
          <img src={message} alt="" />
          <a href="mailto:contact@asymtos.com">contact@asymtos.com</a>
          <hr />
        </p>
      </div>

    </div>
  );
}

export default Contact;
