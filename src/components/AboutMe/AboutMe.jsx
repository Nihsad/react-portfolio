import './AboutMe.css';
import avatar from './assets/images/avatar.jpg';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img src={avatar} alt="Avatar" />
        <p>Creative and detail-oriented Web Developer with a strong foundation in frontend technologies, honed through a rigorous Full Stack Web Development Bootcamp at the University of Denver. Experienced in creating dynamic, user-friendly applications and proficient in HTML5, CSS, JavaScript, and SASS. Skilled in utilizing design tools such as Adobe and Figma, with a keen eye for responsive design to ensure functionality and visual appeal across various devices. Demonstrated ability to lead design projects and contribute innovative ideas to enhance user experience. Proven track record of developing aesthetic and functional websites, with additional experience in office management and technical skills in maintaining websites and data management systems. Adept at working independently and collaboratively in a fully remote environment.</p>
      </div>
    </div>
  );
}

export default AboutMe;