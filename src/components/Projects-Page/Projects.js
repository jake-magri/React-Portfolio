import { useEffect, useState } from 'react';
import Image from 'next/image'; // Direct import for Next.js Image
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css'; // Import CSS Module for scoped styling
import dynamic from 'next/dynamic';

// Lazy load the sliding text component
const SlidingText = dynamic(() => import('../SlidingText'), {
  ssr: false, // Disable SSR for the sliding effect
  loading: () => <p>Loading...</p>, // Show loading text while the component is being loaded
});

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures that we are on the client side before rendering the images
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering the page until the client-side is ready
  }

  return (
    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-4 sm:mx-6 mb-8">
      <SlidingText
        direction="right"
        text={<h1 className={styles.portfolioHeader}>Portfolio</h1>}
      />
      <SlidingText
        direction="right"
        text={
          <p className={`${styles.portfolioHeaderP} text-lg`}>
            A curated selection of my latest work, where creativity meets innovation.
          </p>
        }
      />

      {/* Add Project Container below header information */}
      <div className="pb-12 portfolio-container">
        <div className="container">
        <SlidingText
        direction="left"
        text={
          <div className="row gx-4">
            <div className="col-sm">
              <ProjectCard
                title="Volt Underground"
                image="/images/volt-underground.png"
                deployedUrl="https://volt-underground.onrender.com/"
                githubUrl="https://github.com/parsamh8/Volt-Underground"
              />
            </div>
            <div className="col-sm">
              <ProjectCard
                title="Hi, Pub!"
                image="/images/hi-pub.png"
                deployedUrl="https://hipub.onrender.com/"
                githubUrl="https://github.com/jake-magri/Hipub"
              />
            </div>
            <div className="col-sm">
              <ProjectCard
                title="Color Racer"
                image="/images/color-racer.jpg"
                deployedUrl="https://mr-mikeross.github.io/Color-Racer/"
                githubUrl="https://github.com/Mr-MikeRoss/Color-Racer"
              />
            </div>
          </div>
        }/>
        <SlidingText
        direction="right"
        text={
          <div className="row gx-4">
            <div className="col-sm">
              <ProjectCard
                title="Book Search Engine"
                image="/images/book-search-engine.png"
                deployedUrl="https://book-search-engine-ydkm.onrender.com/"
                githubUrl="https://github.com/jake-magri/Book-Search-Engine"
              />
            </div>
            <div className="col-sm">
              <ProjectCard
                title="Employee Tracker CLI"
                image="/images/Employee-Tracker.png"
                deployedUrl="https://github.com/jake-magri/Employee-Tracker"
                githubUrl="https://github.com/jake-magri/Employee-Tracker"
              />
            </div>
            <div className="col-sm">
              <ProjectCard
                title="Weather Dashboard"
                image="/images/weather-dashboard.png"
                deployedUrl="https://weather-dashboard-jm.onrender.com/"
                githubUrl="https://github.com/jake-magri/Weather-Dashboard"
              />
            </div>
          </div>
        }/>
        </div>
      </div>
    </div>
  );
}
