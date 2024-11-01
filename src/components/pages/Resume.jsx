import './Resume.css';

export default function Resume() {
  return (
    <div>
      <h1 className='resume-header'>Resume</h1>
      {/* Add resume image later on */}
      {/* <div><img className = 'resumeImage' src="src/assets/images/resume-screenshot.png" alt="A professional resume."/></div> */}
      <div>
      <a className='resume-header__a' href="src/assets/documents/Software_Development_Resume.pdf" download="Jake-Magri.pdf"
            target="_blank"
            rel="noopener noreferrer">Download Resume PDF</a>
      <p className='resume-header__p'>Skills: HTML, CSS, JS, Node.js, TS, SQL, C#, Python</p>
      </div>
    </div>
  );
}