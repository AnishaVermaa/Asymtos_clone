import React from "react";
import "../style.css";
import atul from '../../assets/atul.png';
import deepak from '../../assets/deepak.jpg';
import avinash from '../../assets/avinash.jpg';
import sanjeev from '../../assets/sanjeev.png';

const Team = () => {
  return (
    <div className="team" id="team">
        <h2>MEET THE <span>TEAM</span> </h2>
        <div className="cards">
  <div className="c1">
    <img src={atul} alt="" />
    <h5>Atul Gupta</h5>
    <p>CEO</p>
  </div>
  <div className="c2">
    <img src={deepak} alt="" />
    <h5>Deepak Singh</h5>
    <p>CRO</p>
  </div>
  <div className="c3">
    <img src={avinash} alt="" />
    <h5>Avinash Kumar</h5>
    <p>COO</p>
  </div>
  <div className="c4">
    <img src={sanjeev} alt="" />
    <h5>Sanjiv Goyal</h5>
    <p>Advisor</p>
  </div>
</div>



    </div> 

  
  
  
     
  );
};

export default Team;
