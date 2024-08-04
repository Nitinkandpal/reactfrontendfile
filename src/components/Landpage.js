import React from "react";
import "./landpage.css";
import img1 from "../images/girl.jpeg";
import img2 from "../images/girl1.jpeg";
import img3 from "../images/girl2.webp";
import img4 from "../images/girl3.jpeg";
import man1 from "../images/man1w.webp";
import man2 from "../images/manw.webp";

const Landpage = () => {
  return (
    <section className="layout">
      <div className="layCard">
        <div className="smallerbox">
          <div className="greenbox"></div>
          <div className="image">
            <img src={img1}></img>
          </div>
        </div>
        <div className="smallerbox">
          <div className="image">
            <img src={img2}></img>
          </div>
          <div className="purplebox">
            <h3>25000+</h3>
            <p>
              {" "}
              Menschen, die clurch peers, merch Wohibenfinden erlanght hapen
            </p>
          </div>
        </div>
      </div>
      <div className="layCard ">
        <div className="smallerbox card2">
          <div className="image">
            <img src={img4}></img>
          </div>
          <div className="greenbox"></div>
        </div>
        <div className="smallerbox card3">
          <div className="purplebox">
            <h3>25000+</h3>
            <p>
              
              Menschen, die clurch peers, merch Wohibenfinden erlanght hapen
            </p>
          </div>
          <div className="image">
            <img src={man2}></img>
          </div>
        </div>
      </div>
      <div className="layCard">
        <div className="smallerbox">
          <div className="greenbox"></div>
          <div className="image">
            <img src={man1}></img>
          </div>
        </div>
        <div className="smallerbox">
          <div className="image">
            <img src={img3}></img>
          </div>
          <div className="purplebox">
            <h3>25000+</h3>
            <p>
              {" "}
              Menschen, die clurch peers, merch Wohibenfinden erlanght hapen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landpage;
