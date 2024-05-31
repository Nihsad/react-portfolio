import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css';

import codeQuizRecording from '../../assets/images/code-quiz-recording.gif';
import anythingEventsCalendar from '../../assets/images/anything-events-calendar.png';
import coffeeOutlet from '../../assets/images/coffee-outlet.png';
import passwordGeneratorShowcase from '../../assets/images/password-generator-showcase.gif';

const Portfolio = () => {
  // Sample data for projects
  const projects = [
    {
      title: 'Anything Events Calendar',
      imageUrl: anythingEventsCalendar,  // Updated to use the imported image
      deployedUrl: 'https://nihsad.github.io/anything-events-calendar/index.html',
      githubUrl: 'https://github.com/Nihsad/anything-events-calendar',
      description: `
        <ul>
          <li>This was the first group project for the Full-Stack Web Development course at the University of Denver.</li>
          <li>An application that allows the user to find art-themed events in their area.</li>
          <li>Using the Ticketmaster and OpenWeatherMap APIs, Anything Events Calendar is able to search within a specified range of your (also specified) location and provide events in your desired area that match the genre(s) that you\'re also able to select. I was largely responsible for the front-end design, utilizing the Bootstrap CSS Library to create a simple, easy-to-use UI.</li>
          <li><b>Tools/Languages:</b> HTML, CSS, Javascript, Bootstrap CSS Library, TicketMaster API, OpenWeatherMap API</li>
        </ul>
      `
    },
    {
      title: 'Coffee Outlet',
      imageUrl: coffeeOutlet,  // Updated to use the imported image
      deployedUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/Nihsad/coffee-outlet',
      description: `
        <ul>
          <li>This was the second group project for the Full-Stack Web Development course at the University of Denver.</li>
          <li>Coffee Outlet is a full-stack application that allows users to find the perfect spot to study, work, and savor a delicious cup of coffee. </li>
          <li>With the help of the tools listed below, we were able to make an excellent application that allows users to find the perfect place to get some work done without the distractions of daily life. Coffee Outlet has a lot of potential for developing a user-driven database of locations with community quality control thanks to the option to leave reviews of locations and a point reward system. I was once again responsible for much of the front-end design, taking the excellent Bulma CSS framework and customizing its styles to fit our specific needs and desires for the application.</li>
          <li><b>Tools/Languages:</b> JavaScript, CSS, HTML5, Express.js, Node.js, Handlebars.js, PostgreSQL, Render, Bulma, Nodemon, Sequelize, Multer, Leaflet, FontAwesome, Nodemailer, Sweetalert2, Postman, Express-Session, Cookies</li>
        </ul>        
      `
    },
    {
      title: 'JavaScript Password Generator',
      imageUrl: passwordGeneratorShowcase,  // Updated to use the imported image
      deployedUrl: 'https://nihsad.github.io/password-generator',
      githubUrl: 'https://github.com/Nihsad/password-generator',
      description: `
        <ul>
          <li>A simple Javascript application that takes several user choices and generates a random password that matches the selected criteria.</li>
          <li>As a project for the JavaScript module of the full stack web development bootcamp, we were given starter code and asked to expand upon it to meet the criteria set by the assignment; an application that can generate a random password matching criteria given by the user. The password generated can be any length between 8-128 characters, and it will comply with the choices set by the user for the inclusion of lower- and uppercase letters, numbers, and special characters.</li>
          <li><b>Tools/Languages:</b> HTML, CSS, Javascript</li>
        </ul>      
      `
    },
    {
      title: 'Code Quiz',
      imageUrl: codeQuizRecording,  // Updated to use the imported image
      deployedUrl: 'https://nihsad.github.io/code-quiz/',
      githubUrl: 'https://github.com/example/project2',
      description: `
        <ul>
          <li>A coding quiz with high score tracking and replayability.</li>
          <li>Web API-powered quiz application that allows for any number of multiple-choice questions, has an adjustable (in the javascript) countdown timer once the quiz is started, and the option to save your high score at the end of the quiz. You can also view a list of all current high scores that have been taken in the same browser session, and retake the quiz.</li>
          <li><b>Tools/Languages:</b> HTML, CSS, Javascript</li>
        </ul>
      `
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedUrl={project.deployedUrl}
            githubUrl={project.githubUrl}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
