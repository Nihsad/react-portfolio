import './Project.css';

const Project = ({ title, imageUrl, deployedUrl, githubUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p><a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a></p>
      <p><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
    </div>
  );
}

export default Project;
