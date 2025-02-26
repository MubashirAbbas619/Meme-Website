import { useNavigate } from "react-router-dom";
import "./Landing.css";
import React from "react";

const Landing = () => {
  const navigate = useNavigate();

  const goToGallery = () => {
    navigate("/page/1"); 
  };

  return (
    <div className="landing-page">
      <div className="floating-emojis">😂🤣😆😜🔥</div> 
      <div className="overlay">
        <h1 className="landing-title">
          <span className="wave">😂</span> Welcome to <span className="highlight">MemeMania</span> – Where Laughs Never End! 🎭
        </h1>
        <p className="landing-description">
          Scroll, giggle, and react! The funniest, weirdest, and most savage memes are here.  
          Like it? Love it? Roast it? Your reactions shape the meme universe! 🌎🔥
        </p>
        <button className="landing-button" onClick={goToGallery}>
          Start the Fun 😆
        </button>
      </div>
    </div>
  );
};

export default Landing;
