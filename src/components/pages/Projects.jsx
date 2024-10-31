import ProjectCard from "./ProjectCard";
import './Projects.css';

export default function About() {
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
              <ProjectCard title="Project One"
                image="path/to/image1.png"
                deployedUrl="https://example.com/project1"
                githubUrl="https://github.com/user/project1" />
            </div>
            <div className='col-sm'><ProjectCard /></div>
            <div className='col-sm'><ProjectCard/></div>
          </div>
          <div className="row gx-4">
            <div className='col-sm'><ProjectCard/></div>
            <div className='col-sm'><ProjectCard/></div>
            <div className='col-sm'><ProjectCard/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
