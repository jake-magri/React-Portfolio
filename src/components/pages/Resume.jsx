import './Resume.css';

export default function Resume() {
  return (
    <div className='resume-main-container__div'>
      <h1 className='resume-header'>Resume</h1>

      <div className='skills-link'>
        <p className='resume-header__p'>
        Skilled in building dynamic web applications using React, Node.js, Express.js, TypeScript, and Java, with experience in AWS, PostgreSQL, MongoDB, and creating responsive, mobile-first user interfaces.
        </p>
        
        <a 
          className='resume-header__a'
          href="/assets/documents/jake-magri-resume.pdf" 
          download="Jake-Magri.pdf" 
          target="_blank" 
          rel="noopener noreferrer">
        <button>
          Download Resume PDF
        </button>
        </a>
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