import ProjectCard from "./ProjectCard";
import './Projects.css';
import colorRacerImage from '../../../assets/images/color-racer.jpg';
import emojiSearchImage from '../../../assets/images/Emoji-Search.jpg';
import employeeTrackerImage from '../../../assets/images/Employee-Tracker.png';
import voltUndergroundImage from '../../../assets/images/volt-underground.png';
import vehicleBuilderImage from '../../../assets/images/vehicle-builder.png';
import weatherDashboardImage from '../../../assets/images/weather-dashboard.png'

export default function Projects() {
  return (
    <div>
      <h1 className ='portfolio-header'>Portfolio</h1>
      <p className ='portfolio-header__p'>
        Successful projects that I am proud of.
      </p>
      {/* Add Project Container below header informtion */}
      <div>
        <div className="container">
          <div className="row gx-4">
            <div className='col-sm'>
              {/* pass props to ProjectCard components */}
              <ProjectCard title="Color Racer"
                image={colorRacerImage}
                deployedUrl="https://mr-mikeross.github.io/Color-Racer/"
                githubUrl="https://github.com/Mr-MikeRoss/Color-Racer" />
            </div>
            <div className='col-sm'><ProjectCard title="Hi, Pub!"
                image={emojiSearchImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/jake-magri/Emoji-Search-App-Using-React.js"/></div>
            <div className='col-sm'><ProjectCard title="Employee Tracker CLI"
                image={employeeTrackerImage}
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/jake-magri/Employee-Tracker"/></div>
          </div>
          <div className="row gx-4">
            <div className='col-sm'><ProjectCard title="Volt Underground"
                image={voltUndergroundImage}
                deployedUrl="https://volt-underground.onrender.com/"
                githubUrl="https://github.com/parsamh8/Volt-Underground"/></div>
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
