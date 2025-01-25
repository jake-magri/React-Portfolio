import ProjectCard from './ProjectCard'; // Adjusted for Next.js file structure
import Image from 'next/image'; // Import for optimized image loading
import styles from './Projects.module.css'; // Import CSS Module for scoped styling

// Project images imported using Next.js Image component
import colorRacerImage from '../../../public/images/color-racer.jpg';
import hiPubImage from '../../../public/images/hi-pub.png';
import employeeTrackerImage from '../../../public/images/Employee-Tracker.png';
import voltUndergroundImage from '../../../public/images/volt-underground.png';
import bookSearchImage from '../../../public/images/book-search-engine.png';
import weatherDashboardImage from '../../../public/images/weather-dashboard.png';

export default function Projects() {
  return (
    <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-4 sm:mx-6 mb-8'>
      <h1 className={styles.portfolioHeader}>Portfolio</h1>
      <p className={`${styles.portfolioHeaderP} text-lg`}>
        A curated selection of my latest work, where creativity meets innovation.
      </p>
      {/* Add Project Container below header information */}
      <div className="pb-12 portfolio-container">
        <div className="container">
          <div className="row gx-4">
            <div className="col-sm">
              <ProjectCard 
                title="Volt Underground"
                image={voltUndergroundImage}
                deployedUrl="https://volt-underground.onrender.com/"
                githubUrl="https://github.com/parsamh8/Volt-Underground"
              />
            </div>
            <div className="col-sm">
              <ProjectCard 
                title="Hi, Pub!"
                image={hiPubImage}
                deployedUrl="https://hipub.onrender.com/"
                githubUrl="https://github.com/jake-magri/Hipub"
              />
            </div>
            <div className="col-sm">
              <ProjectCard 
                title="Color Racer"
                image={colorRacerImage}
                deployedUrl="https://mr-mikeross.github.io/Color-Racer/"
                githubUrl="https://github.com/Mr-MikeRoss/Color-Racer"
              />
            </div>
          </div>
          <div className="row gx-4">
            <div className="col-sm">
              <ProjectCard 
                title="Book Search Engine"
                image={bookSearchImage}
                deployedUrl="https://book-search-engine-ydkm.onrender.com/"
                githubUrl="https://github.com/jake-magri/Book-Search-Engine"
              />
            </div>
            <div className="col-sm">
              <ProjectCard 
                title="Employee Tracker CLI"
                image={employeeTrackerImage}
                deployedUrl="https://github.com/jake-magri/Employee-Tracker"
                githubUrl="https://github.com/jake-magri/Employee-Tracker"
              />
            </div>
            <div className="col-sm">
              <ProjectCard 
                title="Weather Dashboard"
                image={weatherDashboardImage}
                deployedUrl="https://weather-dashboard-jm.onrender.com/"
                githubUrl="https://github.com/jake-magri/Weather-Dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
