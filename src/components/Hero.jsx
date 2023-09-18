import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1>just sk8. </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        repudiandae?
      </p>
      <div className="hero-btn">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          BROWSE
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
