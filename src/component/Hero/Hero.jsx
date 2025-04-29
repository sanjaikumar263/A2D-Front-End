import React from "react";
import { asssts } from "../../assets/assets";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="bg_video">
        <video src={asssts.bg_video} className="video" autoPlay loop muted />
      </div>
      <div className="black">
        <p className="title px-3 py-2">Hi Soldiers 🪖</p>
        <h1>
          We Build a PC with <span className="spacial">Trust</span>{" "}
        </h1>
        <p>
          Crafting Your Ultimate{" "}
          <span className="spacial1">Gaming Experience 🪖</span> Unleash Your
          Power!
        </p>
        <p>
          Smart People Work With Smart Systems🪖 Customize{" "}
          <span className="spacial1">Your Dream Pc 🪖</span>{" "}
        </p>
        <a href="#form">
          <button className="btn btn-warning px-4 course-pointer">
            Bulid Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
