import Project from '../Project/Project';
import './Portfolio.css';

const Portfolio = () => {
  // Sample data for projects
  const projects = [
    {
      title: 'Project 1',
      imageUrl: 'project1.jpg',
      deployedUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/example/project1'
    },
    {
      title: 'Project 2',
      imageUrl: 'project2.jpg',
      deployedUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2'
    },
    // Add more projects as needed
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
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
