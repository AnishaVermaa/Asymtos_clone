// #007FFF
import React from "react";
import '../style.css';
import cloud from "../../assets/cloud.png"
import work1 from "../../assets/work1.svg"
import work2 from "../../assets/work2.svg"
import work3 from "../../assets/work3.svg"
import work4 from "../../assets/work4.svg"


const About = () => {
  return (
    <div className="work" id="work" >
  <div >
    <div><h2>HOW WE <span>WORK?</span></h2></div>
    <div className="work-container" >
      <div className="w1 work-items">
        <img src={work1} alt="" />
        <p>Streamline the cloud resource management</p>
      </div>
      <div className="w2 work-items">
      <img src={work2} alt="" />
        <p>Run cloud-native applications for the Edge and On-Prem</p>
      </div>
      <div  className="w3 work-items"> 
      <img src={work3} alt="" />
        <p>Security First: Zero Trust, Zero Touch and Zero Code</p>
      </div>
      <div className="w4 work-items">
      <img src={work4} alt="" />
        <p>Analytics and AI to make Edge Intelligent</p>
      </div>
    </div>
  </div>




   <div class="about">

    <div class="left"><img  id="cloud" src={cloud} alt="" />
    </div>
    <div class="right">
      <div class="r1">
        <h5>Asymtos Enabled Distributed and <br /> Decentralized Cloud</h5>
        <p>Asymtos orchestrate and manage the Edge and On-Prem by providing the Unified View of the Distributed Cloud.</p>
        <p>We provides a nimble cloud with control and security for the distributed edge and enables running any application on any hardware at scale.</p>

      </div>
      <div class="r2">
        <h5>Our Vision</h5>
        <p>We envision as leaders in the cloud server industry, constantly innovating and introducing new and advanced cloud technologies to our customers.</p>

      </div>
      <div class="r3">
        <h5>Our Mission</h5>
        <p>Provide a reliable and secure cloud infrastructure that empowers businesses to scale and succeed in an increasingly digital world.</p>

      </div>




    </div>

   </div>
   </div>
  );
};

export default About;
