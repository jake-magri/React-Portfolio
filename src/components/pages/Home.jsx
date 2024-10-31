import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <div className="row about-cards">
        <div className="col about-text-card">
          <h1 className="about-header">Crafting Next Generation Digital Experiences</h1>
          <p className="about-summary">
            Hey there! I'm Jake, a software engineer. I enjoy creating engaging web and desktop applications that bring ideas to life. From dynamic user experiences to robust full-stack solutions, I combine the latest technologies with clean, effective design to craft products that are as functional as they are visually striking. Let's build something outstanding together!
          </p>
        </div>
        <div className="col outer-image-card">
          <div className="inner-image-box">
            <img className="about-image" src="../../assets/images/6.png" alt="A professional headshot of Jake Magri" />
          </div>
        </div>
      </div>
    </div>
  );
}
