import './Resume.css';

export default function Resume() {
  return (
    <div className='resume-main-container__div'>
      <h1 className='resume-header'>Resume</h1>

      <div>
        <a 
          className='resume-header__a' 
          href="/assets/documents/jake-magri-resume.pdf" 
          download="Jake-Magri.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume PDF
        </a>
        <p className='resume-header__p'>
          Skills: HTML, CSS, React, JS, Node.js, TS, Express, SQL, C#, Python
        </p>
      </div>

      <iframe 
        src="/assets/documents/jake-magri-resume.pdf" 
        width="100%" 
        height="800px"
        title="Jake Magri Resume"
      >
        Your browser does not support iframes. 
        <a 
          href="/assets/documents/jake-magri-resume.pdf" 
          download="Jake-Magri.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the Resume
        </a>
      </iframe>
      
    </div>
  );
}