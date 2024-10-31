import ProjectCard from "./ProjectCard";
import './Projects.css';
import colorRacerImage from '../../assets/images/color-racer.jpg';
import emojiSearchImage from '../../assets/images/Emoji-Search.jpg';
import employeeTrackerImage from '../../assets/images/Employee-Tracker.png';
import readmeGeneratorImage from '../../assets/images/professional-readme-generator.png';
import vehicleBuilderImage from '../../assets/images/vehicle-builder.png';
import weatherDashboardImage from '../../assets/images/weather-dashboard.png'

export default function Projects() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Successful projects that I am proud of.
      </p>
      {/* Add Project Container below header informtion */}
      <div>
        <div className="container">
          <div className="row gx-4">
            <div className='col-sm'>
              <ProjectCard title="Color Racer"
                image={colorRacerImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/user/project1" />
            </div>
            <div className='col-sm'><ProjectCard title="React Emoji Search"
                image={emojiSearchImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/user/project1"/></div>
            <div className='col-sm'><ProjectCard title="Employee Tracker CLI"
                image={employeeTrackerImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/user/project1"/></div>
          </div>
          <div className="row gx-4">
            <div className='col-sm'><ProjectCard title="Readme Generator"
                image={readmeGeneratorImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/user/project1"/></div>
            <div className='col-sm'><ProjectCard title="Vehicle Builder"
                image={vehicleBuilderImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/user/project1"/></div>
            <div className='col-sm'><ProjectCard title="Weather Dashboard"
                image={weatherDashboardImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/user/project1"/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
