import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume-info">
        <h3>Morgan Carmichael</h3>
        <p className="sub-info">equusincorde@gmail.com | 303.653.4474 | Arvada, CO</p>
        <p className="info-links">
          <a href="www.linkedin.com/in/morgan-carmichael-a4b420213" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/Nihsad" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <h4>Summary</h4>
        <p>
          Creative and detail-oriented Web Developer with a strong foundation in frontend technologies, honed through a rigorous Full Stack Web Development Bootcamp at the University of Denver. Experienced in creating dynamic, user-friendly applications and proficient in HTML5, CSS, JavaScript, and SASS. Skilled in utilizing design tools such as Adobe and Figma, with a keen eye for responsive design to ensure functionality and visual appeal across various devices. Demonstrated ability to lead design projects and contribute innovative ideas to enhance user experience. Proven track record of developing aesthetic and functional websites, with additional experience in office management and technical skills in maintaining websites and data management systems. Adept at working independently and collaboratively in a fully remote environment.
        </p>
        <h4>Technical Skills</h4>
        <p>
          <b>Frontend:</b> HTML5, CSS, JQuery, Javascript, Bootstrap, SASS<br />
          <b>Backend:</b> MySQL, MongoDB, Express, ReactJS, Node, Handlebars
        </p>
        <h4>Projects</h4>
        <ul>
          <li><a href="https://nihsad.github.io/anything-events-calendar/index.html" target="_blank" rel="noopener noreferrer">Anything Events Calendar</a> - Front End Designer</li>
          <li><a href="https://coffee-outlet.onrender.com/" target="_blank" rel="noopener noreferrer">Coffee Outlet</a> - Front End Designer</li>
          <li><a href="https://nihsad.github.io/password-generator/" target="_blank" rel="noopener noreferrer">JavaScript Password Generator</a> - Developer</li>
          <li><a href="https://nihsad.github.io/code-quiz/" target="_blank" rel="noopener noreferrer">Code Quiz</a> - Developer</li>
        </ul>
        <h4>Work Experience</h4>
        <p>
          <h5>Apex Pavement Solutions, LLC | Golden, CO | Office Manager</h5>
          <h6>March 2020 - October 2023</h6>
          <ul>
            <li>Streamlined the content and publishing of weekly Sales Reports, handling data for an annual sales volume of $13M.</li>
            <li>Maintained and interpreted the company Sales Job Board using Google Sheets.</li>
            <li>Created and distributed job folders, including contracts, work orders, maps, and billing summaries.</li>
            <li>Managed multiple Excel and Google Workbooks for tracking/reporting daily timesheets, material quantities, equipment, FTE, municipality licensing, and tax remittance.</li>
            <li>Maintained record retention duties, including scanning, filing, and purging per schedule.</li>
            <li>Overhauled and maintained the company website using WIX, enhancing online presence and user interaction.</li>
            <li>Handled new hire paperwork, vendor invoice processing, and weekly electronic backups of the company server.</li>
            <li>Assisted with FMCSA and DOT compliance, safety program management, and facilitated communication between internal and external parties.</li>
            <li>Supported Project Managers and Superintendents in bid processes, sales processes, work-in-progress, and job closeout.</li>
            <li>Utilized Microsoft Office Suite, Google Suite, Bluebeam Revu, Adobe Photoshop, and WIX for diverse administrative and technical tasks.</li>
          </ul>
        </p>
        <p>
          <h5>Pike National Historic Trail Association | Website Maintenance Assistant</h5>
          <h6>March 2020 - December 2021</h6>
          <ul>
            <li>Assisted in organizing and maintaining the association’s website to support the mission of establishing the Pike Trail as a national historic trail.</li>
          </ul>
        </p>
        <h4>Volunteer Work</h4>
        <p>
          <h5>Central Colorado Eventing | Ring Steward</h5>
          <ul>
            <li>Monitor the warm-up area of multiple show arenas</li>
            <li>Checking competitors in as they arrive to warm up and informing competitors when their ride time is approaching</li>
            <li>Ensuring that the show remains on-schedule through effective communication with competitors, judges, office staff, and announcers.</li>
          </ul>
        </p>
        <h4>Education</h4>
        <p>
          <h5>University of Denver | Full-Stack Web Development Bootcamp</h5>
          <h6>Dec 2023 - June 2024</h6>
          <ul>
            <li>Comprehensive training in HTML, CSS, JavaScript, Node.js, Express.js, React, Sequelize, MongoDB, ORM, MVC, and various APIs.</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Resume;
