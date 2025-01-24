import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="container">
      <div className="row about-cards">
        {/* About section */}
        <div className="col about-text-card">
          <h1 className="about-header">Crafting Next Generation Digital Experiences</h1>
          <section className="about-summary text-lg">
          <p>Hi there! I'm Jake, a certified Full Stack Developer from UNC Charlotte with a background in Management Information Systems. I specialize in creating dynamic web and desktop applications that blend functionality with striking design.</p>

          <p>With expertise in TypeScript, Node.js, PostgreSQL, and GraphQL, I'm passionate about building scalable, high-performing solutions. My experience also includes release coordination, streamlining deployments, and enhancing efficiency across tools like ServiceNow, Jira, and GitLab CI/CD pipelines.</p>

          <p>I'm excited to collaborate on impactful projects and bring technical and strategic value to forward-thinking teams. Let's build something outstanding together!</p>
          </section>
        </div>
        {/* Image with two divs for future picture frame styling */}
        <div className="col outer-image-card">
          <div className="inner-image-box">
            <img className="about-image" src="../../assets/images/6.png" alt="A professional headshot of Jake Magri" />
          </div>
        </div>
      </div>
    </div>
  );
}
