import ProjectCard from "./ProjectCard";
import './Projects.css';
import colorRacerImage from '../../../assets/images/color-racer.jpg';
import hiPubImage from '../../../assets/images/hi-pub.png';
import employeeTrackerImage from '../../../assets/images/Employee-Tracker.png';
import voltUndergroundImage from '../../../assets/images/volt-underground.png';
import bookSearchImage from '../../../assets/images/book-search-engine.png';
import weatherDashboardImage from '../../../assets/images/weather-dashboard.png'

export default function Projects() {
  return (
    <div>
      <h1 className ='portfolio-header'>Portfolio</h1>
      <p className ='portfolio-header__p'>
        A curated selection of my latest work, where creativity meets innovation.
      </p>
      {/* Add Project Container below header informtion */}
      <div>
        <div className="container">
          <div className="row gx-4">
            <div className='col-sm'>
              <ProjectCard title="Volt Underground"
                image={voltUndergroundImage}
                deployedUrl="https://volt-underground.onrender.com/"
                githubUrl="https://github.com/parsamh8/Volt-Underground"/>
            </div>
            <div className='col-sm'>
              <ProjectCard title="Hi, Pub!"
                image={hiPubImage}
                deployedUrl="https://hipub.onrender.com/"
                githubUrl="https://github.com/jake-magri/Hipub"/>
            </div>
            <div className='col-sm'>
              {/* pass props to ProjectCard components */}
              <ProjectCard title="Color Racer"
                image={colorRacerImage}
                deployedUrl="https://mr-mikeross.github.io/Color-Racer/"
                githubUrl="https://github.com/Mr-MikeRoss/Color-Racer" />
            </div>
            
            
          </div>
          <div className="row gx-4">
            <div className='col-sm'><ProjectCard title="Book Search Engine"
              image={bookSearchImage}
              deployedUrl="https://book-search-engine-ydkm.onrender.com/"
              githubUrl="https://github.com/jake-magri/Book-Search-Engine"/>
            </div>
            <div className='col-sm'><ProjectCard title="Employee Tracker CLI"
              image={employeeTrackerImage}
              deployedUrl="https://github.com/jake-magri/Employee-Tracker"
              githubUrl="https://github.com/jake-magri/Employee-Tracker"/>
            </div>
            <div className='col-sm'><ProjectCard title="Weather Dashboard"
              image={weatherDashboardImage}
              deployedUrl="https://weather-dashboard-jm.onrender.com/"
              githubUrl="https://github.com/jake-magri/Weather-Dashboard"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
