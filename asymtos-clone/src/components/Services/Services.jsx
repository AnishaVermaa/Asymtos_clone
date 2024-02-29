import React from "react";
import '../style.css';
import s1 from "../../assets/1.svg";
import s2 from "../../assets/2.svg";
import s3 from "../../assets/3.svg";
import s4 from "../../assets/4.svg";
import s5 from "../../assets/5.svg";
import s6 from "../../assets/6.svg";
const Services = () => {
  return (
    <div id="services">
      <h2>OUR <span>VALUE PROP</span></h2>
      
      {/* <div className="border-services"> </div> */}
      <div className="services-container">
        <div class="services-item">
          <img src={s1} alt="" />
          <div className="services-para">
            <h3>Innovating and Leading</h3>
            <p>Drive the cloud growth beyond the centralization.</p>
            <p>Offer solutions close to data source at Edge.</p>
          </div>
        </div>
        <div class="services-item">
          <img src={s2} alt="" />
          <div className="services-para">
            <h3>Open Core Model</h3>
            <p>We believe in the solution based on Open Core</p>
          </div>
        </div>

        <div class="services-item">
          <img src={s3} alt="" />
          <div className="services-para">
            <h3>SaaS Service</h3>
            <p>
              SaaS ease of use for the customers, operate from anywhere anytime
            </p>
          </div>
        </div>

        <div class="services-item">
          <img src={s4} alt="" />
          <div className="services-para">
            <h3>Secure and All purpose</h3>
            <p>Zero trust model and Integration to Analytics and AI</p>
          </div>
        </div>
        <div class="services-item">
          <img src={s5} alt="" />
          <div className="services-para">
            <h3>Customer Centricity</h3>
            <p>User experience same as that of centralized cloud</p>
          </div>
        </div>
        <div class="services-item">
          <img src={s6} alt="" />
          <div className="services-para">
            <h3>Global Presence</h3>
            <p>Complete decentralization</p>
          </div>
        </div>
      </div>
      <img
        className="services-img1"
        src="https://asymtos.com/assets/images/img-center.png"
        alt=""
      />
      <br />
      <div className="our-services">
        <h2 >OUR <span>SERVICES</span></h2>
      </div>

    </div>
  );
};

export default Services;
