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
<<<<<<< HEAD
=======
              {/* pass props to ProjectCard components */}
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
              <ProjectCard title="Color Racer"
                image={colorRacerImage}
                deployedUrl="https://mr-mikeross.github.io/Color-Racer/"
                githubUrl="https://github.com/Mr-MikeRoss/Color-Racer" />
            </div>
            <div className='col-sm'><ProjectCard title="React Emoji Search"
                image={emojiSearchImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/jake-magri/Emoji-Search-App-Using-React.js"/></div>
            <div className='col-sm'><ProjectCard title="Employee Tracker CLI"
                image={employeeTrackerImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/jake-magri/Employee-Tracker"/></div>
          </div>
          <div className="row gx-4">
            <div className='col-sm'><ProjectCard title="Readme Generator"
                image={readmeGeneratorImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/jake-magri/Professional-README-Generator"/></div>
            <div className='col-sm'><ProjectCard title="Vehicle Builder"
                image={vehicleBuilderImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/jake-magri/Vehicle-Builder"/></div>
            <div className='col-sm'><ProjectCard title="Weather Dashboard"
                image={weatherDashboardImage}
                deployedUrl="https://weather-dashboard-jm.onrender.com/"
                githubUrl="https://github.com/jake-magri/Weather-Dashboard"/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
